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

### Étape 1: Introduction aux concepts

Avant de plonger dans la création et la gestion d’un Health Monitor pour votre Load Balancer OVHcloud, il est essentiel de comprendre quelques concepts clés. Ces concepts constituent la base sur laquelle repose la configuration efficace de votre équilibreur de charge et son monitoring.

#### Listeners

- **Définition** : Un Listener définit un point d'écoute pour le trafic entrant sur votre Load Balancer. Il est essentiellement configuré avec un protocole (HTTP, HTTPS, TCP, etc.) et un port spécifique sur lequel il écoute les requêtes entrantes.
- **Rôle** : Le Listener agit comme une porte d'entrée pour le trafic, décidant de la manière dont les requêtes sont routées vers les serveurs en aval. Chaque Listener peut être configuré pour gérer le trafic de manière spécifique, selon les besoins de vos applications.

#### Pools

- **Définition** : Un Pool désigne un groupe de serveurs, appelés Members, destinés à traiter les requêtes dirigées par le Listener. Le Pool est défini par un algorithme de répartition de charge qui détermine comment les requêtes sont distribuées entre ses Members.
- **Rôle** : Le Pool assure que le trafic entrant est traité efficacement en le distribuant entre les serveurs en aval selon l'algorithme de load balancing choisi (Round Robin, Least Connections, etc.), optimisant ainsi la réactivité et la disponibilité de vos services.

#### Members

- **Définition** : Les Members sont les serveurs en aval qui traitent les requêtes redirigées par le Load Balancer. Chaque Member est défini par son adresse IP et le port sur lequel il écoute, faisant partie d’un Pool spécifique.
- **Rôle** : Les Members sont au cœur du processus de load balancing, traitant les requêtes et fournissant les réponses nécessaires aux clients. Leur santé et disponibilité sont cruciales pour la performance globale de l'application.

#### Health Monitors

- **Définition** : Un Health Monitor est un processus automatisé qui effectue régulièrement des vérifications de santé sur chaque Member d’un Pool pour s'assurer qu'ils sont en mesure de traiter les requêtes.
- **Rôle** : Le Health Monitor est vital pour maintenir la haute disponibilité et la fiabilité de vos services. En détectant les serveurs défaillants, il permet au Load Balancer de rediriger le trafic uniquement vers les serveurs sains, minimisant ainsi les interruptions de service.

La compréhension approfondie de ces concepts est fondamentale pour configurer et gérer efficacement un Load Balancer. Chaque élément joue un rôle spécifique dans l'acheminement et le traitement du trafic, assurant ainsi une expérience utilisateur fluide et performante.

Pour entrer plus en détail, veuillez consulter : [OVHcloud Load Balancer Concepts](https://help.ovhcloud.com/csm/en-gb-public-cloud-network-load-balancer-concepts?id=kb_article_view&sysparm_article=KB0059283)


### Étape 2: Configuration initiale

Avant de configurer votre Health Monitor, il est crucial de préparer correctement votre environnement de réseau en fonction de l'architecture de votre Load Balancer. Cette étape est déterminante pour le bon fonctionnement de votre système de load balancing. Voici comment procéder en fonction de l'architecture choisie :

#### Configurer votre réseau

- **Réseau privé à privé** : Dans cette configuration, le trafic entre le client et le Load Balancer, puis entre le Load Balancer et les serveurs (Members), reste entièrement dans le réseau privé. Assurez-vous que votre réseau privé est bien configuré et que les routes internes permettent la communication sans entrave entre ces composants.
  
- **Public à privé** : Ici, le trafic entre de l'extérieur (Internet) vers un IP flottante associée au Load Balancer, lequel redirige ensuite le trafic vers les serveurs en aval dans le réseau privé. Vous devez configurer une IP flottante et vous assurer que les règles de sécurité (groupes de sécurité) permettent le trafic entrant sur les ports requis par votre application.

- **Public à public** : Dans ce scénario, le trafic passe de l'extérieur vers les serveurs en aval qui sont également accessibles publiquement. Cela nécessite non seulement une IP flottante pour le Load Balancer, mais également des adresses IP publiques pour chaque serveur en aval. Les règles de sécurité doivent être ajustées en conséquence pour sécuriser le trafic tout en permettant l'accès nécessaire.

#### Déterminer l'emplacement et l'accès des serveurs

- **Emplacement des serveurs** : L'emplacement physique ou virtuel de vos serveurs peut affecter la performance de votre Load Balancer. En fonction de votre fournisseur de cloud et de l'architecture de votre projet, envisagez de placer vos serveurs dans des zones qui minimisent la latence ou qui correspondent à la répartition géographique de vos utilisateurs.

- **Méthode d'accès** : Selon que vos serveurs sont configurés avec des adresses IP privées ou publiques, la configuration de votre Load Balancer variera. Pour les serveurs avec des IP privées, assurez-vous que le Load Balancer est configuré pour communiquer efficacement au sein du réseau privé. Pour les serveurs avec des IP publiques, vérifiez que les règles de sécurité permettent le trafic nécessaire entre le Load Balancer et les serveurs.

#### Vérification des prérequis réseau

- Avant de procéder à la configuration de votre Load Balancer et de votre Health Monitor, revoyez tous les prérequis réseau liés à votre architecture spécifique. Cela inclut les plages d'IP autorisées, les groupes de sécurité, les règles de pare-feu, et toute autre configuration de réseau qui pourrait influencer le routage du trafic et la disponibilité de vos services.

En préparant soigneusement votre environnement selon ces lignes directrices, vous posez les bases nécessaires pour une configuration réussie de votre Health Monitor et assurez une distribution efficace du trafic vers vos applications.

### Étape 3: Création d’un Health Monitor

Configurer un Health Monitor est une étape cruciale pour garantir la haute disponibilité de vos services. Voici comment procéder à travers différentes interfaces :

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

- **Connexion** : Connectez-vous à l'interface Horizon de votre projet OpenStack.
- **Navigation** : Dans le menu de gauche, sous "Network", trouvez et sélectionnez "Load Balancers".
- **Sélection du Load Balancer** : Choisissez le Load Balancer que vous voulez configurer et cliquez sur l'onglet "Health Monitors".
- **Ajout d'un Health Monitor** : Cliquez sur "Create Health Monitor" et remplissez les champs requis comme le type, l'intervalle de vérification, le nombre maximal de tentatives, et le délai d'attente.
- **Sauvegarde** : Validez la création en cliquant sur "Create".

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

## Meilleures Pratiques pour la Configuration des Health Monitors

La mise en place efficace d’un Health Monitor est essentielle pour maintenir la haute disponibilité et la performance de vos services en ligne. Voici un guide des meilleures pratiques pour optimiser votre configuration.

### Importance des Health Monitors

Un Health Monitor joue un rôle critique dans la détection proactive des serveurs défaillants au sein d'un Pool, permettant leur exclusion temporaire pour assurer une expérience utilisateur ininterrompue. La configuration adéquate d’un Health Monitor contribue significativement à la résilience et à la fiabilité de vos services.

### Options Configurables

Pour un Health Monitor efficace, accordez une attention particulière aux paramètres suivants :

- **Délai (`delay`)** : Définit le temps en secondes entre chaque vérification de santé. Un intervalle plus court permet une détection plus rapide des défaillances mais peut augmenter la charge sur le serveur.
  
- **Temps d'attente (`timeout`)** : La durée maximale d’attente pour une réponse à chaque vérification. Ce temps doit être inférieur au délai pour éviter les chevauchements de vérifications.
  
- **Nombre de tentatives (`max-retries`)** : Indique combien de fois un serveur doit échouer aux vérifications de santé consécutives avant d'être considéré comme défaillant.

### Conseils pour les Moniteurs de Santé HTTP

Lors de la configuration de Health Monitors pour des applications web, gardez à l'esprit les conseils suivants :

- **Chemin URL (`url_path`)** : Choisissez un chemin léger et rapide à charger pour les vérifications de santé, idéalement une page qui ne nécessite pas de traitement lourd ou d'authentification.
  
- **Méthode HTTP (`http_method`)** : Utilisez des méthodes moins gourmandes en ressources, comme `HEAD` ou `GET`, pour minimiser l'impact sur les performances du serveur.
  
- **Codes de réponse attendus (`expected_codes`)** : Configurez les codes de réponse HTTP qui indiquent qu'un serveur est sain, typiquement `200`.

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
