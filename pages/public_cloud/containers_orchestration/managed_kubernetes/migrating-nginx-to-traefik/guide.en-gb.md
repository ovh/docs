---
title: Migrating from NGINX Ingress Controller to Traefik on OVHcloud Managed Kubernetes
excerpt: "Learn how to migrate from NGINX Ingress Controller to Traefik on your OVHcloud MKS cluster with zero downtime"
updated: 2026-03-04
---

## Objective

The [Kubernetes NGINX Ingress Controller](https://github.com/kubernetes/ingress-nginx) project has announced its retirement in **March 2026**. This guide helps OVHcloud Managed Kubernetes Service (MKS) users migrate from NGINX Ingress Controller to [Traefik](https://traefik.io/traefik/) with zero downtime, covering OVHcloud-specific considerations.

Traefik v3.6.2+ includes a [Kubernetes Ingress NGINX provider](https://doc.traefik.io/traefik/migrate/nginx-to-traefik/) that automatically translates NGINX annotations into native Traefik configuration. This means your existing Ingress manifests with `ingressClassName: nginx` work immediately, without modification.

> [!primary]
>
> This guide focuses on **OVHcloud-specific configurations**. For the complete migration procedure, refer to the official [Traefik nginx-to-traefik migration guide](https://doc.traefik.io/traefik/migrate/nginx-to-traefik/).
>
> For a broader perspective on the transition from Ingress to Gateway API, read the OVHcloud blog post: [Moving beyond Ingress: Why should OVHcloud MKS users start looking at the Gateway API](https://blog.ovhcloud.com/moving-beyond-ingress-why-should-ovhcloud-managed-kubernetes-service-mks-users-start-looking-at-the-gateway-api/).

> [!warning]
>
> This guide applies to MKS clusters running Kubernetes **version 1.31 or later**, which use the [Public Cloud Load Balancer](/links/public-cloud/load-balancer) (OpenStack Octavia) by default.

## Before you begin

This tutorial assumes that you already have:

- A working OVHcloud Managed Kubernetes cluster (version >= 1.31)
- The NGINX Ingress Controller deployed and serving traffic
- `kubectl` and `helm` CLI tools installed with cluster admin permissions
- DNS access to update records for your services

We recommend creating backups before starting:

```bash
# Export all Ingress resources
kubectl get ingress --all-namespaces -o yaml > ingress-backup.yaml

# Export NGINX ConfigMaps
kubectl get configmap --all-namespaces -l app.kubernetes.io/name=ingress-nginx -o yaml > nginx-configmaps.yaml
```

You should also be familiar with:

- [Exposing applications using a Load Balancer on MKS](/pages/public_cloud/containers_orchestration/managed_kubernetes/expose_your_applications_using_a_load_balancer)
- [Getting the source IP behind the LoadBalancer](/pages/public_cloud/containers_orchestration/managed_kubernetes/getting-source-ip-behind-loadbalancer)

## OVHcloud-specific considerations

### Load Balancer (OpenStack Octavia)

On MKS clusters >= 1.31, the [Public Cloud Load Balancer](/links/public-cloud/load-balancer) (based on OpenStack Octavia) is the default Load Balancer. Octavia operates at **Layer 4** (TCP/UDP), meaning:

- **TLS termination** is handled by Traefik, not by the Load Balancer
- **Layer 7 routing** (host-based, path-based) is handled by Traefik
- Octavia provides health checking, Floating IP management, and traffic distribution

You can optionally choose the Load Balancer size using the annotation `loadbalancer.openstack.org/flavor-id`. If not specified, the default size is **small**. To list available flavors, install the [OVHcloud CLI](https://github.com/ovh/ovhcloud-cli) and run `ovhcloud cloud reference loadbalancer list-flavors <REGION>`. For more details, see [Exposing applications using a Load Balancer](/pages/public_cloud/containers_orchestration/managed_kubernetes/expose_your_applications_using_a_load_balancer#supported-annotations-features).

### Proxy Protocol and source IP preservation

To preserve the client's source IP behind the Load Balancer, you must enable **Proxy Protocol v2** between Octavia and Traefik. This requires configuration on both sides:

**On the Load Balancer side** (Service annotation):

```yaml
annotations:
  loadbalancer.openstack.org/proxy-protocol: "v2"
```

**On the Traefik side** (Helm values), you must configure Traefik to accept Proxy Protocol and trust the Load Balancer IPs:

- **Public network clusters**: Use the egress IPs from the Load Balancer annotation:

```bash
kubectl get svc ingress-nginx-controller -n ingress-nginx \
  -o jsonpath="{.metadata.annotations.lb\.k8s\.ovh\.net/egress-ips}"
```

- **Private network clusters**: Use your subnet CIDR range (e.g., `10.0.0.0/20`)

You must also set `externalTrafficPolicy: Local` on the Traefik Service to prevent source IP masquerading through inter-node SNAT.

### CNI considerations

| MKS Plan | CNI | Notes |
|----------|-----|-------|
| Free | Canal (Flannel + Calico) | Standard Kubernetes NetworkPolicies |
| Standard | Cilium (eBPF) | CiliumNetworkPolicy available, kube-proxy replaced |

If you have NetworkPolicies targeting NGINX Ingress pods (labels, ports), you will need to update them to match Traefik's labels (`app.kubernetes.io/name: traefik`) and ports.

## Step 1 - Install Traefik alongside NGINX

Add the Traefik Helm repository:

```bash
helm repo add traefik https://traefik.github.io/charts
helm repo update
```

Create a `traefik-values.yaml` file adapted for OVHcloud MKS:

#### a. Public network clusters

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
        - "aaa.aaa.aaa.aaa/32"  # Replace with your egress IPs
        - "bbb.bbb.bbb.bbb/32"
  websecure:
    proxyProtocol:
      trustedIPs:
        - "aaa.aaa.aaa.aaa/32"  # Replace with your egress IPs
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

#### b. Private network clusters

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
        - "10.0.0.0/20"  # Replace with your subnet CIDR range
  websecure:
    proxyProtocol:
      trustedIPs:
        - "10.0.0.0/20"  # Replace with your subnet CIDR range

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

Install Traefik:

```bash
helm upgrade --install traefik traefik/traefik \
  --namespace traefik --create-namespace \
  --values traefik-values.yaml
```

Verify both controllers are running:

```bash
kubectl get pods -n ingress-nginx
kubectl get pods -n traefik
kubectl get svc -n ingress-nginx ingress-nginx-controller
kubectl get svc -n traefik traefik
```

> [!warning]
>
> The key configuration `providers.kubernetesIngressNginx.enabled: true` tells Traefik to watch for Ingress resources with `ingressClassName: nginx` and automatically translate NGINX annotations into native Traefik configuration. This requires Traefik **v3.6.2 or later**.

## Step 2 - Verify Traefik handles traffic

Get the LoadBalancer IPs for both controllers:

```bash
NGINX_IP=$(kubectl get svc -n ingress-nginx ingress-nginx-controller \
  -o jsonpath='{.status.loadBalancer.ingress[0].ip}')
TRAEFIK_IP=$(kubectl get svc -n traefik traefik \
  -o jsonpath='{.status.loadBalancer.ingress[0].ip}')
echo "NGINX IP: $NGINX_IP"
echo "Traefik IP: $TRAEFIK_IP"
```

Test your application through both controllers using `curl --connect-to` to bypass DNS:

```bash
FQDN=myapp.example.com

# Test via NGINX
curl --connect-to "${FQDN}:80:${NGINX_IP}:80" "http://${FQDN}"

# Test via Traefik
curl --connect-to "${FQDN}:80:${TRAEFIK_IP}:80" "http://${FQDN}"
```

Both commands should return the same response. Also verify that source IP is correctly preserved in the `X-Real-IP` or `X-Forwarded-For` headers.

Check Traefik logs for Ingress discovery:

```bash
kubectl logs -n traefik deployment/traefik | grep -i "ingress"
```

## Step 3 - Shift traffic to Traefik (DNS-based)

The recommended approach is a DNS-based migration:

1. **Add the Traefik IP** to your DNS records alongside the NGINX IP (round-robin)
2. **Monitor traffic** on both controllers to ensure Traefik handles requests correctly
3. **Remove the NGINX IP** from your DNS records
4. **Wait 24-48 hours** for DNS cache expiration before proceeding to the next step

> [!warning]
>
> Some ISPs ignore DNS TTL values, caching records longer than specified. Keep NGINX running for at least 24-48 hours after removing it from DNS to avoid dropping traffic.

We recommend reducing your DNS TTL to 300 seconds (5 minutes) before starting the migration. For detailed DNS switch instructions, see [How to perform a DNS switch](/pages/public_cloud/containers_orchestration/managed_kubernetes/migrate-loadbalancer-iolb-to-octavia#dns-switch).

## Step 4 - Retain the LoadBalancer Floating IP (OVHcloud-specific)

If you want Traefik to use the same IP as NGINX (to avoid DNS changes), follow this procedure:

1. Ensure the `keep-floatingip` annotation is set on **both** services:

```bash
kubectl annotate svc -n ingress-nginx ingress-nginx-controller \
  loadbalancer.openstack.org/keep-floatingip="true"
kubectl annotate svc -n traefik traefik \
  loadbalancer.openstack.org/keep-floatingip="true"
```

2. Ensure Traefik is receiving traffic (via its own IP or DNS round-robin)

3. Delete the NGINX LoadBalancer service to release the Floating IP:

```bash
kubectl delete svc -n ingress-nginx ingress-nginx-controller
```

4. Update `traefik-values.yaml` to claim the released Floating IP:

```yaml
service:
  spec:
    loadBalancerIP: "<nginx-floating-ip>"
```

5. Upgrade Traefik:

```bash
helm upgrade traefik traefik/traefik \
  --namespace traefik \
  --values traefik-values.yaml
```

6. Verify Traefik claimed the IP:

```bash
kubectl get svc -n traefik traefik
```

## Step 5 - Uninstall NGINX Ingress Controller

### Preserve the IngressClass

The `nginx` IngressClass must survive the NGINX uninstallation for Traefik to continue discovering your Ingress resources.

If NGINX was installed via Helm, add the preservation annotation:

```bash
helm upgrade ingress-nginx ingress-nginx \
  --repo https://kubernetes.github.io/ingress-nginx \
  --namespace ingress-nginx \
  --reuse-values \
  --set-json 'controller.ingressClassResource.annotations={"helm.sh/resource-policy": "keep"}'
```

> [!warning]
>
> The `--reuse-values` flag is critical - it preserves all your existing NGINX configuration during this annotation update.

### Delete admission webhooks

```bash
kubectl delete validatingwebhookconfiguration ingress-nginx-admission
kubectl delete mutatingwebhookconfiguration ingress-nginx-admission --ignore-not-found
```

### Uninstall NGINX

```bash
helm uninstall ingress-nginx -n ingress-nginx
```

### Verify the IngressClass is preserved

```bash
kubectl get ingressclass nginx
```

You should see the `nginx` IngressClass still present.

### Clean up

```bash
kubectl delete namespace ingress-nginx
```

## Next steps: Gateway API

While Traefik with the NGINX Ingress provider is an excellent immediate solution, the long-term recommendation is to migrate to the **Kubernetes Gateway API**. Traefik natively supports Gateway API resources (HTTPRoute, TLSRoute, GRPCRoute, TCPRoute).

The recommended migration path is:

1. **NGINX Ingress** (current) -> **Traefik with NGINX provider** (this guide) -> **Traefik with Gateway API**

For more details on Gateway API with OVHcloud MKS, read the blog post: [Moving beyond Ingress: Why should OVHcloud MKS users start looking at the Gateway API](https://blog.ovhcloud.com/moving-beyond-ingress-why-should-ovhcloud-managed-kubernetes-service-mks-users-start-looking-at-the-gateway-api/).

## Troubleshooting

### Ingresses not discovered by Traefik

```bash
# Verify IngressClass exists
kubectl get ingressclass nginx

# Check Traefik provider configuration
kubectl logs -n traefik deployment/traefik | grep -i "nginx\|ingress"

# Verify Ingress has correct ingressClassName
kubectl get ingress <name> -o yaml | grep ingressClassName
```

### Source IP not preserved

- Verify Proxy Protocol is enabled on the Service: `loadbalancer.openstack.org/proxy-protocol: "v2"`
- Verify `externalTrafficPolicy: Local` is set on the Traefik Service
- Verify Traefik's `proxyProtocol.trustedIPs` match your Load Balancer egress IPs (public clusters) or subnet CIDR (private clusters)
- Check the `X-Real-IP` and `X-Forwarded-For` headers in your application responses

### LoadBalancer IP not assigned

```bash
# Check service status
kubectl describe svc -n traefik traefik

# Check for events
kubectl get events -n traefik --sort-by='.lastTimestamp'
```

Verify that the Floating IP you are trying to claim is not still allocated to another service.

### TLS certificates not working

Traefik terminates TLS using the secrets referenced in your Ingress `spec.tls` entries. Ensure that:

- TLS secrets exist in the same namespace as the Ingress
- Secrets contain valid `tls.crt` and `tls.key` data

```bash
kubectl get secrets -n <namespace>
kubectl get secret <tls-secret-name> -n <namespace> -o yaml
```

## Go further

- Official Traefik migration guide: [Migrating from NGINX to Traefik](https://doc.traefik.io/traefik/migrate/nginx-to-traefik/)
- OVHcloud blog: [Moving beyond Ingress](https://blog.ovhcloud.com/moving-beyond-ingress-why-should-ovhcloud-managed-kubernetes-service-mks-users-start-looking-at-the-gateway-api/)
- [Exposing applications using a Load Balancer on MKS](/pages/public_cloud/containers_orchestration/managed_kubernetes/expose_your_applications_using_a_load_balancer)
- [Getting the source IP behind the LoadBalancer](/pages/public_cloud/containers_orchestration/managed_kubernetes/getting-source-ip-behind-loadbalancer)
- [Traefik HTTP Middlewares](https://doc.traefik.io/traefik/middlewares/overview/) (replacement for NGINX annotations)

Visit our dedicated Discord channel: <https://discord.gg/ovhcloud>. Ask questions, provide feedback and interact directly with the team that builds our Container and Orchestration services.

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](/links/professional-services) to get a quote and ask our Professional Services experts for a custom analysis of your project.

Join our [community of users](/links/community).
