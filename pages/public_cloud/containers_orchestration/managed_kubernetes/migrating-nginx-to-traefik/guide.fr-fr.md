---
title: Migrer de NGINX Ingress Controller vers Traefik sur OVHcloud Managed Kubernetes
excerpt: "Apprenez comment migrer de NGINX Ingress Controller vers Traefik sur votre cluster MKS OVHcloud sans interruption de service"
updated: 2026-03-04
---

## Objectif

Le projet [Kubernetes NGINX Ingress Controller](https://github.com/kubernetes/ingress-nginx) a annonce sa fin de vie en **mars 2026**. Ce guide aide les utilisateurs du service OVHcloud Managed Kubernetes (MKS) a migrer de NGINX Ingress Controller vers [Traefik](https://traefik.io/traefik/) sans interruption de service, en couvrant les specificites OVHcloud.

Traefik v3.6.2+ inclut un [provider Kubernetes Ingress NGINX](https://doc.traefik.io/traefik/migrate/nginx-to-traefik/) qui traduit automatiquement les annotations NGINX en configuration Traefik native. Vos manifestes Ingress existants avec `ingressClassName: nginx` fonctionnent immediatement, sans modification.

> [!primary]
>
> Ce guide se concentre sur les **configurations specifiques a OVHcloud**. Pour la procedure de migration complete, consultez le guide officiel [Traefik nginx-to-traefik](https://doc.traefik.io/traefik/migrate/nginx-to-traefik/).
>
> Pour une perspective plus large sur la transition d'Ingress vers Gateway API, lisez l'article de blog OVHcloud : [Moving beyond Ingress: Why should OVHcloud MKS users start looking at the Gateway API](https://blog.ovhcloud.com/moving-beyond-ingress-why-should-ovhcloud-managed-kubernetes-service-mks-users-start-looking-at-the-gateway-api/).

> [!warning]
>
> Ce guide concerne les clusters MKS utilisant Kubernetes **version 1.31 ou superieure**, qui utilisent le [Public Cloud Load Balancer](/links/public-cloud/load-balancer) (OpenStack Octavia) par defaut.

## Avant de commencer

Ce tutoriel suppose que vous disposez deja de :

- Un cluster OVHcloud Managed Kubernetes fonctionnel (version >= 1.31)
- Le NGINX Ingress Controller deploye et en service
- Les outils CLI `kubectl` et `helm` installes avec les permissions d'administration du cluster
- Un acces DNS pour mettre a jour les enregistrements de vos services

Nous recommandons de creer des sauvegardes avant de commencer :

```bash
# Exporter toutes les ressources Ingress
kubectl get ingress --all-namespaces -o yaml > ingress-backup.yaml

# Exporter les ConfigMaps NGINX
kubectl get configmap --all-namespaces -l app.kubernetes.io/name=ingress-nginx -o yaml > nginx-configmaps.yaml
```

Vous devriez egalement etre familier avec :

- [Exposer des applications avec un Load Balancer sur MKS](/pages/public_cloud/containers_orchestration/managed_kubernetes/expose_your_applications_using_a_load_balancer)
- [Obtenir l'IP source derriere le LoadBalancer](/pages/public_cloud/containers_orchestration/managed_kubernetes/getting-source-ip-behind-loadbalancer)

## Specificites OVHcloud

### Load Balancer (OpenStack Octavia)

Sur les clusters MKS >= 1.31, le [Public Cloud Load Balancer](/links/public-cloud/load-balancer) (base sur OpenStack Octavia) est le Load Balancer par defaut. Octavia opere au **niveau 4** (TCP/UDP), ce qui signifie :

- La **terminaison TLS** est geree par Traefik, pas par le Load Balancer
- Le **routage niveau 7** (par hote, par chemin) est gere par Traefik
- Octavia fournit le health checking, la gestion des Floating IPs et la distribution du trafic

Vous pouvez optionnellement choisir la taille du Load Balancer avec l'annotation `loadbalancer.openstack.org/flavor-id`. Si non specifiee, la taille par defaut est **small**. Pour lister les flavors disponibles, installez la [CLI OVHcloud](https://github.com/ovh/ovhcloud-cli) et executez `ovhcloud cloud reference loadbalancer list-flavors <REGION>`. Pour plus de details, consultez [Exposer des applications avec un Load Balancer](/pages/public_cloud/containers_orchestration/managed_kubernetes/expose_your_applications_using_a_load_balancer#supported-annotations-features).

### Proxy Protocol et preservation de l'IP source

Pour preserver l'IP source du client derriere le Load Balancer, vous devez activer le **Proxy Protocol v2** entre Octavia et Traefik. Cela necessite une configuration des deux cotes :

**Cote Load Balancer** (annotation du Service) :

```yaml
annotations:
  loadbalancer.openstack.org/proxy-protocol: "v2"
```

**Cote Traefik** (valeurs Helm), vous devez configurer Traefik pour accepter le Proxy Protocol et faire confiance aux IPs du Load Balancer :

- **Clusters reseau public** : Utilisez les IPs d'egress de l'annotation du Load Balancer :

```bash
kubectl get svc ingress-nginx-controller -n ingress-nginx \
  -o jsonpath="{.metadata.annotations.lb\.k8s\.ovh\.net/egress-ips}"
```

- **Clusters reseau prive** : Utilisez le CIDR de votre sous-reseau (ex : `10.0.0.0/20`)

Vous devez egalement definir `externalTrafficPolicy: Local` sur le Service Traefik pour empecher le masquage de l'IP source via le SNAT inter-noeuds.

### Considerations CNI

| Plan MKS | CNI | Notes |
|----------|-----|-------|
| Free | Canal (Flannel + Calico) | NetworkPolicies Kubernetes standard |
| Standard | Cilium (eBPF) | CiliumNetworkPolicy disponible, kube-proxy remplace |

Si vous avez des NetworkPolicies ciblant les pods NGINX Ingress (labels, ports), vous devrez les mettre a jour pour correspondre aux labels Traefik (`app.kubernetes.io/name: traefik`) et a ses ports.

## Etape 1 - Installer Traefik aux cotes de NGINX

Ajoutez le depot Helm Traefik :

```bash
helm repo add traefik https://traefik.github.io/charts
helm repo update
```

Creez un fichier `traefik-values.yaml` adapte a OVHcloud MKS :

#### a. Clusters reseau public

```yaml
providers:
  kubernetesIngressNginx:
    enabled: true

service:
  externalTrafficPolicy: Local
  annotations:
    loadbalancer.openstack.org/proxy-protocol: "v2"
    loadbalancer.openstack.org/keep-floatingip: "true"

ports:
  web:
    proxyProtocol:
      trustedIPs:
        - "aaa.aaa.aaa.aaa/32"  # Remplacez par vos IPs d'egress
        - "bbb.bbb.bbb.bbb/32"
  websecure:
    proxyProtocol:
      trustedIPs:
        - "aaa.aaa.aaa.aaa/32"  # Remplacez par vos IPs d'egress
        - "bbb.bbb.bbb.bbb/32"

deployment:
  replicas: 2

affinity:
  podAntiAffinity:
    requiredDuringSchedulingIgnoredDuringExecution:
      - labelSelector:
          matchLabels:
            app.kubernetes.io/name: traefik
        topologyKey: kubernetes.io/hostname

podDisruptionBudget:
  enabled: true
  minAvailable: 1
```

#### b. Clusters reseau prive

```yaml
providers:
  kubernetesIngressNginx:
    enabled: true

service:
  externalTrafficPolicy: Local
  annotations:
    loadbalancer.openstack.org/proxy-protocol: "v2"
    loadbalancer.openstack.org/keep-floatingip: "true"

ports:
  web:
    proxyProtocol:
      trustedIPs:
        - "10.0.0.0/20"  # Remplacez par le CIDR de votre sous-reseau
  websecure:
    proxyProtocol:
      trustedIPs:
        - "10.0.0.0/20"  # Remplacez par le CIDR de votre sous-reseau

deployment:
  replicas: 2

affinity:
  podAntiAffinity:
    requiredDuringSchedulingIgnoredDuringExecution:
      - labelSelector:
          matchLabels:
            app.kubernetes.io/name: traefik
        topologyKey: kubernetes.io/hostname

podDisruptionBudget:
  enabled: true
  minAvailable: 1
```

Installez Traefik :

```bash
helm upgrade --install traefik traefik/traefik \
  --namespace traefik --create-namespace \
  --values traefik-values.yaml
```

Verifiez que les deux controleurs fonctionnent :

```bash
kubectl get pods -n ingress-nginx
kubectl get pods -n traefik
kubectl get svc -n ingress-nginx ingress-nginx-controller
kubectl get svc -n traefik traefik
```

> [!warning]
>
> La configuration cle `providers.kubernetesIngressNginx.enabled: true` indique a Traefik de surveiller les ressources Ingress avec `ingressClassName: nginx` et de traduire automatiquement les annotations NGINX en configuration Traefik native. Cela necessite Traefik **v3.6.2 ou superieur**.

## Etape 2 - Verifier que Traefik gere le trafic

Recuperez les IPs des LoadBalancers des deux controleurs :

```bash
NGINX_IP=$(kubectl get svc -n ingress-nginx ingress-nginx-controller \
  -o jsonpath='{.status.loadBalancer.ingress[0].ip}')
TRAEFIK_IP=$(kubectl get svc -n traefik traefik \
  -o jsonpath='{.status.loadBalancer.ingress[0].ip}')
echo "NGINX IP: $NGINX_IP"
echo "Traefik IP: $TRAEFIK_IP"
```

Testez votre application via les deux controleurs en utilisant `curl --connect-to` pour contourner le DNS :

```bash
FQDN=myapp.example.com

# Test via NGINX
curl --connect-to "${FQDN}:80:${NGINX_IP}:80" "http://${FQDN}"

# Test via Traefik
curl --connect-to "${FQDN}:80:${TRAEFIK_IP}:80" "http://${FQDN}"
```

Les deux commandes doivent retourner la meme reponse. Verifiez egalement que l'IP source est correctement preservee dans les en-tetes `X-Real-IP` ou `X-Forwarded-For`.

Verifiez les logs Traefik pour la decouverte des Ingress :

```bash
kubectl logs -n traefik deployment/traefik | grep -i "ingress"
```

## Etape 3 - Basculer le trafic vers Traefik (par DNS)

L'approche recommandee est une migration basee sur le DNS :

1. **Ajoutez l'IP Traefik** a vos enregistrements DNS aux cotes de l'IP NGINX (round-robin)
2. **Surveillez le trafic** sur les deux controleurs pour vous assurer que Traefik traite correctement les requetes
3. **Retirez l'IP NGINX** de vos enregistrements DNS
4. **Attendez 24 a 48 heures** pour l'expiration des caches DNS avant de passer a l'etape suivante

> [!warning]
>
> Certains FAI ignorent les valeurs TTL du DNS, mettant en cache les enregistrements plus longtemps que specifie. Gardez NGINX en fonctionnement pendant au moins 24 a 48 heures apres l'avoir retire du DNS pour eviter de perdre du trafic.

Nous recommandons de reduire votre TTL DNS a 300 secondes (5 minutes) avant de commencer la migration. Pour des instructions detaillees sur le changement DNS, consultez [Comment effectuer un changement DNS](/pages/public_cloud/containers_orchestration/managed_kubernetes/migrate-loadbalancer-iolb-to-octavia#dns-switch).

## Etape 4 - Conserver la Floating IP du LoadBalancer (specifique OVHcloud)

Si vous souhaitez que Traefik utilise la meme IP que NGINX (pour eviter les changements DNS), suivez cette procedure :

1. Assurez-vous que l'annotation `keep-floatingip` est definie sur **les deux** services :

```bash
kubectl annotate svc -n ingress-nginx ingress-nginx-controller \
  loadbalancer.openstack.org/keep-floatingip="true"
kubectl annotate svc -n traefik traefik \
  loadbalancer.openstack.org/keep-floatingip="true"
```

2. Assurez-vous que Traefik recoit du trafic (via sa propre IP ou le round-robin DNS)

3. Supprimez le service LoadBalancer de NGINX pour liberer la Floating IP :

```bash
kubectl delete svc -n ingress-nginx ingress-nginx-controller
```

4. Mettez a jour `traefik-values.yaml` pour reclamer la Floating IP liberee :

```yaml
service:
  spec:
    loadBalancerIP: "<floating-ip-nginx>"
```

5. Mettez a jour Traefik :

```bash
helm upgrade traefik traefik/traefik \
  --namespace traefik \
  --values traefik-values.yaml
```

6. Verifiez que Traefik a reclame l'IP :

```bash
kubectl get svc -n traefik traefik
```

## Etape 5 - Desinstaller NGINX Ingress Controller

### Preserver l'IngressClass

L'IngressClass `nginx` doit survivre a la desinstallation de NGINX pour que Traefik continue a decouvrir vos ressources Ingress.

Si NGINX a ete installe via Helm, ajoutez l'annotation de preservation :

```bash
helm upgrade ingress-nginx ingress-nginx \
  --repo https://kubernetes.github.io/ingress-nginx \
  --namespace ingress-nginx \
  --reuse-values \
  --set-json 'controller.ingressClassResource.annotations={"helm.sh/resource-policy": "keep"}'
```

> [!warning]
>
> Le flag `--reuse-values` est critique - il preserve toute votre configuration NGINX existante lors de cette mise a jour d'annotation.

### Supprimer les admission webhooks

```bash
kubectl delete validatingwebhookconfiguration ingress-nginx-admission
kubectl delete mutatingwebhookconfiguration ingress-nginx-admission --ignore-not-found
```

### Desinstaller NGINX

```bash
helm uninstall ingress-nginx -n ingress-nginx
```

### Verifier que l'IngressClass est preservee

```bash
kubectl get ingressclass nginx
```

L'IngressClass `nginx` devrait toujours etre presente.

### Nettoyage

```bash
kubectl delete namespace ingress-nginx
```

## Prochaines etapes : Gateway API

Bien que Traefik avec le provider NGINX Ingress soit une excellente solution immediate, la recommandation a long terme est de migrer vers la **Kubernetes Gateway API**. Traefik supporte nativement les ressources Gateway API (HTTPRoute, TLSRoute, GRPCRoute, TCPRoute).

Le parcours de migration recommande est :

1. **NGINX Ingress** (actuel) -> **Traefik avec provider NGINX** (ce guide) -> **Traefik avec Gateway API**

Pour plus de details sur Gateway API avec OVHcloud MKS, lisez l'article de blog : [Moving beyond Ingress: Why should OVHcloud MKS users start looking at the Gateway API](https://blog.ovhcloud.com/moving-beyond-ingress-why-should-ovhcloud-managed-kubernetes-service-mks-users-start-looking-at-the-gateway-api/).

## Depannage

### Les Ingresses ne sont pas decouverts par Traefik

```bash
# Verifier que l'IngressClass existe
kubectl get ingressclass nginx

# Verifier la configuration du provider Traefik
kubectl logs -n traefik deployment/traefik | grep -i "nginx\|ingress"

# Verifier que l'Ingress a le bon ingressClassName
kubectl get ingress <nom> -o yaml | grep ingressClassName
```

### L'IP source n'est pas preservee

- Verifiez que le Proxy Protocol est active sur le Service : `loadbalancer.openstack.org/proxy-protocol: "v2"`
- Verifiez que `externalTrafficPolicy: Local` est defini sur le Service Traefik
- Verifiez que les `proxyProtocol.trustedIPs` de Traefik correspondent aux IPs d'egress de votre Load Balancer (clusters publics) ou au CIDR de votre sous-reseau (clusters prives)
- Verifiez les en-tetes `X-Real-IP` et `X-Forwarded-For` dans les reponses de votre application

### La Floating IP du LoadBalancer n'est pas assignee

```bash
# Verifier le statut du service
kubectl describe svc -n traefik traefik

# Verifier les evenements
kubectl get events -n traefik --sort-by='.lastTimestamp'
```

Verifiez que la Floating IP que vous essayez de reclamer n'est pas encore allouee a un autre service.

### Les certificats TLS ne fonctionnent pas

Traefik termine le TLS en utilisant les secrets references dans les entrees `spec.tls` de vos Ingress. Assurez-vous que :

- Les secrets TLS existent dans le meme namespace que l'Ingress
- Les secrets contiennent des donnees `tls.crt` et `tls.key` valides

```bash
kubectl get secrets -n <namespace>
kubectl get secret <nom-secret-tls> -n <namespace> -o yaml
```

## Aller plus loin

- Guide officiel de migration Traefik : [Migrating from NGINX to Traefik](https://doc.traefik.io/traefik/migrate/nginx-to-traefik/)
- Blog OVHcloud : [Moving beyond Ingress](https://blog.ovhcloud.com/moving-beyond-ingress-why-should-ovhcloud-managed-kubernetes-service-mks-users-start-looking-at-the-gateway-api/)
- [Exposer des applications avec un Load Balancer sur MKS](/pages/public_cloud/containers_orchestration/managed_kubernetes/expose_your_applications_using_a_load_balancer)
- [Obtenir l'IP source derriere le LoadBalancer](/pages/public_cloud/containers_orchestration/managed_kubernetes/getting-source-ip-behind-loadbalancer)
- [Middlewares HTTP Traefik](https://doc.traefik.io/traefik/middlewares/overview/) (remplacement des annotations NGINX)

Retrouvez-nous sur notre channel Discord dedie : <https://discord.gg/ovhcloud>. Posez des questions, donnez votre avis et interagissez directement avec l'equipe qui construit nos services Container et Orchestration.

Si vous avez besoin d'une formation ou d'une assistance technique pour mettre en oeuvre nos solutions, contactez votre commercial ou cliquez sur [ce lien](/links/professional-services) pour obtenir un devis et demander a nos experts Professional Services une analyse personnalisee de votre projet.

Rejoignez notre [communaute d'utilisateurs](/links/community).
