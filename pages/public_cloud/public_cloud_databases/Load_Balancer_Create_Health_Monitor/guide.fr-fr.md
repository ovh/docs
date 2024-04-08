---
title: 'Guide : Création et Gestion d’un Health Monitor pour Load Balancer OVHcloud'
excerpt: 'Maîtrisez la mise en place et la gestion d’un Health Monitor avec les Load Balancers OVHcloud via Manager, CLI, Horizon et Terraform'
updated: 2024-04-05
---

## Objectif

Apprenez à créer et à gérer un Health Monitor pour vos Load Balancers OVHcloud, en utilisant différentes interfaces telles que le Manager OVHcloud, la ligne de commande (CLI), Horizon, et Terraform.

## Prérequis

- Un compte OVHcloud actif.
- Un projet Public Cloud chez OVHcloud avec un accès fonctionnel.
- Un Load Balancer déjà configuré dans votre espace projet OVHcloud.

## En pratique

Comprendre ces concepts clés est essentiel pour la gestion efficace d'un Health Monitor avec votre Load Balancer OVHcloud :

- **Listeners** : Points d'écoute configurés avec un protocole et un port, acheminant les requêtes vers les serveurs adaptés.
- **Pools** : Groupes de serveurs (Members) gérant les requêtes, régis par un algorithme de répartition de charge.
- **Members** : Serveurs traitant les requêtes, essentiels à la performance de l'application.
- **Health Monitors** : Processus vérifiant la disponibilité des Members pour assurer une distribution efficace du trafic.

Pour entrer plus en détail, veuillez consulter : [OVHcloud Load Balancer Concepts](https://help.ovhcloud.com/csm/en-gb-public-cloud-network-load-balancer-concepts?id=kb_article_view&sysparm_article=KB0059283)

### Étape 2: Configuration initiale

Lors de la configuration initiale de votre Health Monitor pour le Load Balancer OVHcloud, suivez ces étapes clés selon l'architecture de votre choix :

1. **Configurer votre réseau :**
   - **Réseau privé à privé :** Assurez la configuration du réseau privé pour un trafic interne fluide.
   - **Public à privé :** Utilisez une IP flottante et configurez les règles de sécurité pour le trafic entrant.
   - **Public à public :** Assignez des IP flottantes au Load Balancer et des IP publiques aux serveurs, en ajustant les règles de sécurité.

2. **Déterminer l'emplacement et l'accès des serveurs :**
   - Placez vos serveurs pour minimiser la latence selon l'emplacement des utilisateurs.
   - Configurez le Load Balancer différemment selon que les serveurs utilisent des IP privées ou publiques.

3. **Vérification des prérequis réseau :**
   - Revoyez les configurations réseau telles que les plages d'IP, les groupes de sécurité, et les règles de pare-feu.

Pour des informations détaillées sur chaque architecture et les prérequis réseau, consultez [OVHcloud Load Balancer Concepts](https://help.ovhcloud.com/csm/en-gb-public-cloud-network-load-balancer-concepts?id=kb_article_view&sysparm_article=KB0059283).

### Étape 3: Création d’un Health Monitor

Les Health Monitors effectuent des vérifications périodiques sur les serveurs pour s'assurer qu'ils sont prêts à recevoir et traiter les requêtes. Si un serveur ne répond pas correctement aux critères de santé définis, il est temporairement retiré du Pool, évitant ainsi de diriger les utilisateurs vers un service défaillant.

### Types de Health Monitors et Leurs Utilisations

- **HTTP/S**: Ces Health Monitors envoient des requêtes HTTP ou HTTPS pour vérifier l'état de santé des applications web. Ils sont idéaux pour les services accessibles via des protocoles web standard.
- **PING**: Effectuent des pings ICMP pour tester la disponibilité réseau d'un serveur. Utile pour une vérification rapide de la connectivité.
- **TCP**: Tentent d'établir une connexion TCP pour s'assurer qu'un service est à l'écoute sur un port spécifique.
- **TLS-HELLO**: Envoient un message SSL/TLS 'Client Hello' et attendent une réponse, vérifiant ainsi la capacité du serveur à initier une négociation SSL/TLS.

### Options de Configuration Clés

- **`url_path`**: Spécifie le chemin d'accès pour les requêtes HTTP/S, permettant de cibler des endpoints spécifiques pour la vérification.
- **`http_method`**: Détermine la méthode HTTP (GET, POST, HEAD) à utiliser pour les vérifications HTTP/S.
- **`expected_codes`**: Configure les codes de réponse HTTP considérés comme valides, indiquant que le serveur est sain.
- **`delay`**: Interval en secondes entre chaque vérification de santé, permettant de contrôler la fréquence des tests.
- **`timeout`**: Temps d'attente maximum pour une réponse du serveur avant de le considérer comme défaillant.
- **`max_retries`**: Nombre de tentatives de vérification échouées avant que le serveur ne soit marqué comme défaillant.

### Meilleures Pratiques pour la Configuration des Health Monitors

La mise en place efficace d’un Health Monitor est essentielle pour maintenir la haute disponibilité et la performance de vos services en ligne. Voici un guide des meilleures pratiques pour optimiser votre configuration.

#### Importance des Health Monitors

Un Health Monitor joue un rôle critique dans la détection proactive des serveurs défaillants au sein d'un Pool, permettant leur exclusion temporaire pour assurer une expérience utilisateur ininterrompue. La configuration adéquate d’un Health Monitor contribue significativement à la résilience et à la fiabilité de vos services.

#### Options Configurables

Pour un Health Monitor efficace, accordez une attention particulière aux paramètres suivants :

- **Délai (`delay`)** : Définit le temps en secondes entre chaque vérification de santé. Un intervalle plus court permet une détection plus rapide des défaillances mais peut augmenter la charge sur le serveur.
  
- **Temps d'attente (`timeout`)** : La durée maximale d’attente pour une réponse à chaque vérification. Ce temps doit être inférieur au délai pour éviter les chevauchements de vérifications.
  
- **Nombre de tentatives (`max-retries`)** : Indique combien de fois un serveur doit échouer aux vérifications de santé consécutives avant d'être considéré comme défaillant.

#### Conseils pour les Moniteurs de Santé HTTP

Lors de la configuration de Health Monitors pour des applications web, gardez à l'esprit les conseils suivants :

- **Chemin URL (`url_path`)** : Choisissez un chemin léger et rapide à charger pour les vérifications de santé, idéalement une page qui ne nécessite pas de traitement lourd ou d'authentification.
  
- **Méthode HTTP (`http_method`)** : Utilisez des méthodes moins gourmandes en ressources, comme `HEAD` ou `GET`, pour minimiser l'impact sur les performances du serveur.
  
- **Codes de réponse attendus (`expected_codes`)** : Configurez les codes de réponse HTTP qui indiquent qu'un serveur est sain, typiquement `200`.

#### Surveillance et Tests

- **Validation** : Testez la configuration en simulant des pannes de serveur pour vérifier que le Health Monitor réagit comme attendu.
  
- **Monitoring** : Utilisez les outils de surveillance d’OVHcloud pour suivre les performances et l'état de santé de votre Load Balancer et ajustez la configuration au besoin.

#### Types de Health Monitors Additionnels

- **PING et TCP** : Idéaux pour des vérifications de base de la connectivité sans nécessiter un traitement spécifique par le serveur.
  
- **HTTPS et TLS-HELLO** : Pertinents pour des vérifications dans des contextes sécurisés, en notant que les vérifications TLS-HELLO sont particulièrement utiles lorsque le serveur exige une validation de certificat client.

En intégrant ces meilleures pratiques dans votre processus de configuration, vous maximisez la disponibilité et la performance de vos applications hébergées, tout en assurant une expérience utilisateur optimale.


La configuration d'un Health Monitor est essentielle pour assurer la haute disponibilité de vos services. Selon l'interface choisie, voici les étapes à suivre :

#### Manager OVHcloud

1. **Connexion** : Connectez-vous à votre espace client OVHcloud.
2. **Sélection du projet** : Allez dans la section "Public Cloud" et sélectionnez votre projet.
3. **Accès au Load Balancer** : Cliquez sur "Load Balancer" dans le menu de gauche. Sélectionnez le Load Balancer pour lequel vous souhaitez configurer un Health Monitor.
4. **Création du Health Monitor** : Dans l'onglet "Health Monitors", cliquez sur "Ajouter un Health Monitor". Remplissez les détails nécessaires tels que le type de Health Monitor (HTTP, TCP, etc.), l’intervalle de vérification, le nombre de tentatives et le timeout.
5. **Validation** : Une fois les informations renseignées, cliquez sur "Créer" pour activer votre Health Monitor.

#### CLI (OpenStack)

1. **Préparation** : Assurez-vous que l'outil CLI OpenStack est installé et configuré sur votre machine.
2. **Création du Health Monitor** : Utilisez la commande suivante pour créer un Health Monitor :
   ```bash
   openstack loadbalancer healthmonitor create --delay 5 --max-retries 4 --timeout 3 --type HTTP --http-method GET --url-path /healthcheck --expected-codes 200 <POOL_ID>
   ```
   Remplacez <POOL_ID> par l'ID de votre Pool.
3. Vérification : Confirmez la création du Health Monitor en listant les Health Monitors associés à votre Load Balancer avec :
   ```bash
   openstack loadbalancer healthmonitor list
   ```

#### Horizon (OpenStack)

1.  **Connexion** : Connectez-vous à l'interface Horizon de votre projet OpenStack.
2.  **Navigation** : Dans le menu de gauche, sous "Network", trouvez et sélectionnez "Load Balancers".
3.  **Sélection du Load Balancer** : Choisissez le Load Balancer que vous voulez configurer et cliquez sur l'onglet "Health Monitors".
4.  **Ajout d'un Health Monitor** : Cliquez sur "Create Health Monitor" et remplissez les champs requis comme le type, l'intervalle de vérification, le nombre maximal de tentatives, et le délai d'attente.
5.  **Sauvegarde** : Validez la création en cliquant sur "Create".

#### Terraform

- **Configuration du fichier Terraform** : Créez un fichier `.tf` et définissez votre Health Monitor comme une ressource. Par exemple :

```hcl
resource "openstack_lb_monitor_v2" "monitor_1" {
  pool_id     = "<POOL_ID>"
  type        = "HTTP"
  delay       = 5
  timeout     = 3
  max_retries = 4
  url_path    = "/healthcheck"
  http_method = "GET"
  expected_codes = "200"
}
```
Remplacez `<POOL_ID>` par l'ID de votre Pool.

- **Application de la configuration** : Exécutez `terraform init` pour initialiser Terraform, puis `terraform apply` pour appliquer la configuration.

- **Vérification** : Terraform confirmera la création du Health Monitor avec un résumé des ressources créées.

Chaque méthode offre des avantages spécifiques selon votre familiarité avec les outils et votre environnement de travail. Le choix de l'interface dépend de vos préférences personnelles et des exigences techniques de votre projet.

### Description des Health Monitors

#### HTTP Health Monitors
- **url_path**: Chemin de l'URL à récupérer. Par défaut, c'est `/`.
- **http_method**: Méthode HTTP pour récupérer `url_path`. Par défaut, c'est `GET`.
- **expected_codes**: Codes de statut HTTP indiquant un check de santé OK. Par défaut, c'est `200`.

#### Autres Health Monitors
- **PING**: Envoie des requêtes ICMP PING.
- **TCP**: Ouvre une connexion TCP sans envoyer de données.
- **HTTPS**: Similaire à HTTP mais pour les serveurs SSL.
- **TLS-HELLO**: Vérifie la réponse aux messages SSLv3 client hello.

### Pool vs Health Monitor Compatibility Matrix

| Listener/Pool    | HTTP | HTTPS | SCTP | TCP | TERMINATED_HTTPS | UDP |
|------------------|------|-------|------|-----|------------------|-----|
| **HTTP**         | Y    | N     | N    | Y   | Y                | N   |
| **HTTPS**        | N    | Y     | N    | Y   | N                | N   |
| **PROXY**        | Y    | Y     | N    | Y   | Y                | N   |
| **PROXYV2**      | Y    | Y     | N    | Y   | Y                | N   |
| **SCTP**         | N    | N     | Y    | N   | N                | N   |
| **TCP**          | N    | Y     | N    | Y   | N                | N   |
| **UDP**          | N    | N     | N    | N   | N                | Y   |

Pour plus d'informations, visitez [OVHcloud Load Balancer Concepts](https://help.ovhcloud.com/csm/en-gb-public-cloud-network-load-balancer-concepts?id=kb_article_view&sysparm_article=KB0059283).

### Surveillance et Tests

- **Validation** : Testez la configuration en simulant des pannes de serveur pour vérifier que le Health Monitor réagit comme attendu.
  
- **Monitoring** : Utilisez les outils de surveillance d’OVHcloud pour suivre les performances et l'état de santé de votre Load Balancer et ajustez la configuration au besoin.

### Types de Health Monitors Additionnels

- **PING et TCP** : Idéaux pour des vérifications de base de la connectivité sans nécessiter un traitement spécifique par le serveur.
  
- **HTTPS et TLS-HELLO** : Pertinents pour des vérifications dans des contextes sécurisés, en notant que les vérifications TLS-HELLO sont particulièrement utiles lorsque le serveur exige une validation de certificat client.

En intégrant ces meilleures pratiques dans votre processus de configuration, vous maximisez la disponibilité et la performance de vos applications hébergées, tout en assurant une expérience utilisateur optimale.

### Surveillance et optimisation

**Ajustements et meilleures pratiques** : Pour maintenir une performance optimale, il est recommandé de :

- Surveiller régulièrement la santé de vos serveurs et l'efficacité de votre Load Balancer.
- Ajuster les paramètres du Health Monitor (délai, timeout, max-retries) selon les besoins et les performances observées.
- Explorer des stratégies d'optimisation basées sur les données de performance et les retours d'expérience.

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
