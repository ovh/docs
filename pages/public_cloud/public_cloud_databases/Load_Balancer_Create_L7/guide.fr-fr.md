---
title: 'Guide : Création et Gestion des Policies et Règles de Niveau 7 (L7) pour les Load Balancers OVHcloud'
excerpt: 'Découvrez comment configurer et gérer des Policies et règles de niveau 7 (L7) avec les Load Balancers OVHcloud, en utilisant le Manager, la CLI, Horizon et Terraform.'
updated: 2024-04-08
---

## Objectif

Ce guide a pour but d'expliquer comment configurer et gérer des policies et règles de niveau 7 (L7) pour les Load Balancers dans l'environnement OVHcloud. Utiliser les capacités L7 permet de diriger le trafic de manière intelligente, basée sur le contenu des requêtes HTTP/HTTPS, améliorant ainsi la sécurité, la performance, et la fiabilité de vos applications.

## Prérequis

- **Compte OVHcloud :** Accès à un projet Public Cloud chez OVHcloud.
- **Load Balancer OVHcloud :** Un Load Balancer déjà configuré et en état de fonctionnement.
- **Accès au Manager OVHcloud :** Pour la gestion via l'interface graphique.
- **CLI OpenStack :** Pour la gestion via la ligne de commande.
- **Interface Horizon :** Pour une gestion graphique via OpenStack.
- **Terraform :** (Optionnel) Pour la gestion via Infrastructure as Code.

### Concepts Clés Expliqués
#### Policies et Règles L7

- **Policy L7 :** Une directive appliquée à un listener de Load Balancer pour contrôler le trafic en fonction de critères spécifiques, tels que l'URI, les en-têtes HTTP, ou les cookies. Les actions peuvent inclure la redirection vers une URL spécifique ou un pool de serveurs, ou le rejet de la requête.

- **Règle L7 :** Condition sous-jacente d'une policy L7, qui définit les critères spécifiques de correspondance du trafic, comme une correspondance d'URI ou de cookie.

### Étape 1 : Configuration via le Manager OVHcloud

La configuration des politiques et règles L7 via le Manager OVHcloud vous permet de gérer votre Load Balancer de manière intuitive et graphique. Voici le détail des étapes à suivre :

#### 1. **Accéder au Manager OVHcloud**

- Allez sur le [site d'OVHcloud](https://www.ovh.com/manager/) et connectez-vous avec vos identifiants.
- Une fois dans votre espace client, vous aurez une vue d'ensemble de tous vos services OVHcloud.

#### 2. **Naviguer vers le Load Balancer**

- Dans la barre latérale de votre espace client, cliquez sur l'onglet « **Public Cloud** ».
- Sélectionnez le projet Public Cloud désiré si vous en avez plusieurs.
- Trouvez et sélectionnez « **Load Balancer** » dans la section « **Réseau** » ou utilisez la fonction de recherche rapide.
- Vous verrez apparaître la liste de vos Load Balancers. Cliquez sur celui que vous souhaitez configurer.

#### 3. **Gérer les Politiques L7**

- Après avoir sélectionné votre Load Balancer, vous accéderez à son interface de gestion. Trouvez et cliquez sur l'onglet « **Écouteurs** ».
- Sélectionnez l'écouteur à configurer pour afficher ses détails.
- Localisez la section « **Politiques L7** » pour voir les politiques existantes ou pour en ajouter de nouvelles.
- Cliquez sur « **Ajouter une politique L7** » ou « **Gérer les politiques L7** », selon l'interface.
- Remplissez le formulaire de création de politique L7 :
  - **Nom :** Attribuez un nom unique à votre politique.
  - **Action :** Choisissez l'action (ex : REDIRECT_TO_URL, REDIRECT_TO_POOL, REJECT).
  - Pour les actions de redirection, indiquez l'URL ou le pool cible.
  - Configurez les conditions spécifiques à la politique selon vos besoins (basées sur l'URI, les en-têtes HTTP, ou les cookies).
- Validez en cliquant sur « **Créer** » ou un bouton similaire pour finaliser la création de la politique.
- Ajoutez des règles spécifiques à votre nouvelle politique en suivant un processus similaire à travers l'interface de gestion des règles L7.

Ces instructions vous permettront de définir précisément comment les requêtes entrantes sont analysées et routées par votre Load Balancer OVHcloud, améliorant ainsi l'équilibrage de charge et la performance de vos applications web.

### Étape 2 : Utilisation de la CLI OpenStack et d'Horizon

Pour ceux qui préfèrent une approche plus directe ou scriptable, la CLI OpenStack et l'interface graphique Horizon offrent des alternatives puissantes au Manager OVHcloud pour la gestion des politiques et règles L7.

#### Utilisation de la CLI OpenStack

La CLI OpenStack permet de gérer vos ressources cloud via des commandes exécutées dans votre terminal. Pour la création de politiques L7 sur vos Load Balancers, suivez ces instructions :

- Ouvrez votre terminal.
- Assurez-vous que l'environnement de votre CLI est configuré avec les bons identifiants API d'OVHcloud.
- Utilisez la commande suivante pour créer une nouvelle politique L7, en remplaçant `mon-listener-id` par l'identifiant de votre écouteur et `https://monsite.com` par l'URL de redirection désirée :

  ```bash
  openstack loadbalancer l7policy create \
    --name ma-politique-l7 \
    --listener mon-listener-id \
    --action REDIRECT_TO_URL \
    --redirect-url https://monsite.com
  ```

Cette commande crée une politique L7 qui redirige toutes les requêtes vers l'URL spécifiée.

#### Gestion via Horizon

Horizon, l'interface web d'OpenStack, offre une vue graphique sur la configuration de vos ressources cloud, y compris les Load Balancers et les politiques L7 :

##### Connexion

- Accédez à Horizon en utilisant vos identifiants OVHcloud.

##### Navigation

- Dans le tableau de bord d'Horizon, sélectionnez « **Projet > Réseau > Load Balancers** » pour afficher la liste des Load Balancers disponibles.

##### Configuration des Politiques L7

- Trouvez le Load Balancer que vous souhaitez configurer et cliquez dessus pour accéder à ses détails.
- Localisez l'écouteur (listener) auquel vous souhaitez ajouter des politiques L7 et sélectionnez l'option pour gérer ou ajouter des politiques.
- Vous serez guidé à travers un formulaire pour définir le nom de la politique, l'action à entreprendre (par exemple, redirection vers une URL ou un pool spécifique), et tout critère spécifique pour activer la politique.
- Une fois la politique créée, vous pouvez également ajouter des règles spécifiques à cette politique en suivant des étapes similaires.

Que vous choisissiez la CLI pour sa rapidité et sa flexibilité dans les scripts, ou Horizon pour sa facilité d'utilisation et son interface graphique intuitive, ces outils augmentent considérablement votre capacité à gérer finement le trafic entrant sur vos applications déployées chez OVHcloud.

Ce guide détaillé en markdown vous aide à naviguer à travers la configuration avancée des politiques et règles de niveau 7 pour les Load Balancers OVHcloud, en utilisant à la fois la ligne de commande et les interfaces graphiques fournies par OpenStack et OVHcloud.

  
### Étape 3 : Configuration Automatisée avec Terraform

La configuration automatisée avec Terraform permet de déployer et de gérer des ressources cloud de manière déclarative, en utilisant des fichiers de configuration au format HashiCorp Language (HCL). Cela facilite la mise en place de politiques L7 pour les Load Balancers chez OVHcloud. Voici un exemple plus détaillé de configuration d'une politique L7 avec Terraform :

#### Prérequis

- **Installation de Terraform :** Assurez-vous d'avoir Terraform installé sur votre machine. Vous pouvez télécharger la dernière version de Terraform sur le [site officiel](https://www.terraform.io/downloads.html).
- **Configuration du Provider OpenStack :** Configurez Terraform pour utiliser le provider OpenStack. Vous devrez fournir vos identifiants d'API OVHcloud pour permettre à Terraform d'interagir avec votre projet Public Cloud.

#### Configuration d'une Politique de Redirection HTTPS

L'exemple suivant montre comment définir une ressource Terraform pour créer une politique L7 qui redirige toutes les requêtes HTTP vers HTTPS :

```hcl
# Définir le provider OpenStack
provider "openstack" {
  auth_url    = "https://auth.cloud.ovh.net/v3"
  user_name   = "votre_nom_utilisateur"
  tenant_name = "nom_de_votre_projet"
  password    = "votre_mot_de_passe"
  region      = "votre_région"
}

# Ressource pour le Load Balancer
resource "openstack_lb_loadbalancer_v2" "loadbalancer_1" {
  name          = "mon-loadbalancer"
  vip_subnet_id = "id_de_votre_subnet"
}

# Ressource pour l'écouteur (Listener)
resource "openstack_lb_listener_v2" "listener_1" {
  name            = "mon-listener"
  protocol        = "HTTP"
  protocol_port   = 80
  loadbalancer_id = openstack_lb_loadbalancer_v2.loadbalancer_1.id
}

# Ressource pour la Politique L7
resource "openstack_lb_l7policy_v2" "l7policy_1" {
  name         = "https_redirect"
  action       = "REDIRECT_TO_URL"
  listener_id  = openstack_lb_listener_v2.listener_1.id
  redirect_url = "https://www.example.com"
}
```

##### Déploiement avec Terraform

Après avoir configuré votre politique L7 avec Terraform, suivez ces étapes pour le déploiement :

###### Initialisation de Terraform

- **Commande :** `terraform init`
- **But :** Initialise le workspace Terraform dans votre répertoire contenant les fichiers de configuration.

###### Planification des Changements

- **Commande :** `terraform plan`
- **But :** Affiche un aperçu des modifications que Terraform prévoit d'appliquer à votre infrastructure.

###### Application de la Configuration

- **Commande :** `terraform apply`
- **But :** Applique la configuration définie dans vos fichiers Terraform pour créer ou mettre à jour les ressources spécifiées, ici la politique L7 sur votre Load Balancer.

##### Avantages de l'Utilisation de Terraform

###### Idempotence

- **Description :** Terraform assure que l'état final de votre infrastructure correspond à la configuration définie, permettant une gestion prévisible et reproductible de vos ressources.

###### Gestion de l'Infrastructure as Code (IaC)

- **Description :** Facilite la documentation, le partage et la révision de votre infrastructure, rendant les modifications plus gérables et moins sujettes aux erreurs.

###### Automatisation

- **Description :** Simplifie la gestion des ressources cloud complexes en réduisant le temps et l'effort nécessaires à leur déploiement et à leur maintenance.

L'utilisation de Terraform pour la configuration des politiques L7 intègre la gestion de ces règles dans le processus général de déploiement de votre infrastructure, offrant une plus grande flexibilité et automatisation. Cette approche structurée favorise une gestion plus efficace et cohérente de l'équilibrage de charge à travers les politiques et les règles de niveau 7, optimisant ainsi les performances et la sécurité de vos applications déployées sur OVHcloud.

## Pour Aller Plus Loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
