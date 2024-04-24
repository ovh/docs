---
title: 'Guide : Création et Gestion des Policies et Règles de Niveau 7 (L7) pour les Load Balancers Public Cloud OVHcloud'
excerpt: 'Découvrez comment configurer et gérer des Policies et règles de niveau 7 (L7) pour les Load Balencers Public Cloud OVHcloud'
updated: 2024-04-17
---
## Objectif

Ce guide a pour but d'expliquer comment configurer et gérer des policies et règles de niveau 7 (L7) pour les Load Balancers Public Cloud dans l'environnement OVHcloud. Utiliser les capacités L7 permet de diriger le trafic de manière intelligente, basée sur le contenu des requêtes HTTP/HTTPS, améliorant ainsi la sécurité, la performance, et la fiabilité de vos applications.

## Prérequis

- **Compte OVHcloud :** Accès à un projet Public Cloud chez OVHcloud.
- Comprendre les [concepts d'un Load Balancer Public Cloud](https://help.ovhcloud.com/csm/en-gb-public-cloud-network-load-balancer-concepts?id=kb_article_view&sysparm_article=KB0059283)
- **Load Balancer Public Cloud :** Un Load Balancer déjà configuré et en état de fonctionnement. voir [Configuration d'un Load Balancer Public Cloud](https://help.ovhcloud.com/csm/fr-public-cloud-network-getting-started-load-balancer?id=kb_article_view&sysparm_article=KB0050200)

Pour configurer votre load balancer chez OVHcloud, vous avez plusieurs options de gestion disponibles. Vous n'avez pas besoin de toutes les utiliser, mais il est nécessaire d'en choisir au moins une selon vos préférences :

- **Accès au Manager OVHcloud :** Permet la gestion via l'interface graphique, idéal pour ceux qui préfèrent une approche visuelle et intuitive.
- **CLI OpenStack :** Pour la gestion via la ligne de commande. Plus d'informations pour préparer votre environnement API OpenStack sont disponibles [ici](https://help.ovhcloud.com/csm/fr-public-cloud-compute-prepare-openstack-api-environment?id=kb_article_view&sysparm_article=KB0050995).
- **Interface Horizon :** Offre une gestion graphique via OpenStack pour les utilisateurs familiarisés avec cette plateforme. Détails supplémentaires [ici](https://help.ovhcloud.com/csm/fr-public-cloud-compute-horizon?id=kb_article_view&sysparm_article=KB0050895).
- **Terraform :** Permet la gestion via Infrastructure as Code, utile pour automatiser et reproduire des environnements via des fichiers de code. Informations sur le provider OVH pour Terraform disponibles [ici](https://registry.terraform.io/providers/ovh/ovh/latest/docs).

Chaque méthode offre des avantages spécifiques, permettant de personnaliser la gestion de votre load balancer selon vos besoins et votre expertise technique.

### Détail sur les Concepts Clés 
#### Policies et Règles L7

- **Policy L7 :**
  Une directive appliquée à un listener de Load Balancer pour contrôler le trafic en fonction de critères spécifiques, tels que l'URI, les en-têtes HTTP, ou les cookies. Les actions possibles incluent la redirection vers une URL spécifique ou un pool de serveurs, ou le rejet de la requête.

  **L'ordre d'évaluation des politiques L7 est important et est déterminé par le paramètre de position de chaque politique.**
Les politiques sont évaluées dans un ordre spécifique défini par l'attribut de position, où la première politique correspondante est celle dont l'action est suivie. Si plusieurs politiques L7 sont associées à un listener, le paramètre de position devient crucial pour déterminer l'ordre d'évaluation.

  Les politiques de rejet (REJECT) ont la priorité sur toutes les autres, suivies par les redirections vers une URL (REDIRECT_TO_URL) et enfin les redirections vers un pool (REDIRECT_TO_POOL). Si une politique correspondante est trouvée, son action est exécutée.

  Si aucune politique ne correspond, la requête est dirigée vers le pool par défaut du listener, ou retourne une erreur 503 si aucun pool par défaut n'existe.

  - **Principales caractéristiques :**
    - **action** : L'action à réaliser (par exemple, redirect, reject).
    - **redirect_http_code** : Le code HTTP utilisé lors de la redirection.
    - **redirect_pool_id** : L'ID du pool de serveurs vers lequel rediriger.
    - **redirect_prefix** : Le préfixe à ajouter à l'URL lors d'une redirection.
    - **redirect_url** : L'URL spécifique vers laquelle rediriger.
  - **Contraintes :**
    - Les L7 policy ne s'appliquent qu'à des listeners de type `HTTP` ou `TERMINATED_HTTPS`.

- **Règle L7 :**
  Condition sous-jacente d'une policy L7, qui définit les critères spécifiques de correspondance du trafic, comme une correspondance d'URI ou de cookie. Plusieurs règles peuvent être associées à une politique, et toutes doivent correspondre (logique ET) pour que l'action de la politique soit appliquée. Pour exprimer une opération logique OR entre les règles, il est nécessaire de créer plusieurs politiques avec la même action.

  - **Principales caractéristiques :**
    - **type** : Le type de condition (par exemple, HEADER, COOKIE, URI).
    - **compare_type** : Le type de comparaison (par exemple, EQUAL_TO, STARTS_WITH).
    - **value** : La valeur à comparer.
    - **key** : La clé spécifique à comparer, si applicable.

### Exemples de L7 Policy et L7 Rules

- **Exemple de Policy L7 :**
  - **Action** : Redirect
  - **redirect_url** : `https://example.com/newpath`
  - **redirect_http_code** : 302

  **Règle L7 associée :**
  - **Type** : URI
  - **compare_type** : STARTS_WITH
  - **value** : `/oldpath`

Cet exemple montre comment rediriger le trafic de `/oldpath` vers `https://example.com/newpath` avec un code de redirection HTTP 302 lorsque l'URI commence par `/oldpath`.

### Étape 1 : Configuration via l'espace client OVHcloud

La configuration des politiques et règles L7 via l'espace client OVHcloud vous permet de gérer votre Load Balancer de manière intuitive et graphique. Voici le détail des étapes à suivre :

#### 1. **Accéder à l'espace client OVHcloud**

- Allez sur le [site d'OVHcloud](https://www.ovh.com/manager/) et connectez-vous avec vos identifiants.
- Une fois dans votre espace client, vous aurez une vue d'ensemble de tous vos services OVHcloud.

#### 2. **Naviguer vers le Load Balancer**

- Dans la barre latérale de votre espace client, cliquez sur l'onglet « **Public Cloud** ».
- Sélectionnez le projet Public Cloud désiré si vous en avez plusieurs.
- Trouvez et sélectionnez « **Load Balancer** » dans la section « **Réseau** » ou utilisez la fonction de recherche rapide.
- Vous verrez apparaître la liste de vos Load Balancers. Cliquez sur celui que vous souhaitez configurer.

#### 3. **Gérer les Politiques L7**

- Après avoir sélectionné votre Load Balancer, vous accéderez à son interface de gestion. Trouvez et cliquez sur l'onglet « **listeners** » pour afficher la liste des listeners.
- Pour accéder aux options de gestion des politiques L7 d'un listener spécifique, cliquez sur les trois petits points (...) situés à droite du listener que vous souhaitez configurer. 
- Sélectionnez l'option « **Voir les L7 policies** » dans le menu déroulant.
- **Note importante :** La gestion des politiques L7 n'est disponible que pour les listeners utilisant les protocoles `HTTP` et `TERMINATED HTTPS`. Assurez-vous que votre listener utilise l'un de ces protocoles avant de tenter d'accéder à ces paramètres.
- Une fois dans la section des politiques L7, vous pouvez voir les politiques existantes ou cliquer sur « **Ajouter une L7 policy** » pour créer une nouvelle politique, selon les options disponibles dans l'interface.

 
##### Remplissage du formulaire de création de politique L7

- **Nom :** Attribuez un nom unique à votre politique pour l'identifier facilement.

- **Action :** Choisissez l'action que la politique doit exécuter lorsque les conditions sont remplies. Les options incluent :
  - `REDIRECT_TO_URL` : Redirige les requêtes vers une URL spécifiée.
  - `REDIRECT_TO_POOL` : Redirige les requêtes vers un pool de serveurs spécifié.
  - `REJECT` : Rejette les requêtes et ne les envoie pas à un serveur backend.

- **Pour les actions de redirection** : 
  - Si vous choisissez `REDIRECT_TO_URL`, indiquez l'URL vers laquelle rediriger.
  - Si vous choisissez `REDIRECT_TO_POOL`, spécifiez l'ID du pool de serveurs cible.

- **Configurer les conditions spécifiques à la politique** : 
  - Déterminez sur quelles bases la politique doit être appliquée. Vous pouvez configurer des conditions basées sur :
    - `URI` : L'adresse de la ressource demandée par le client. Par exemple, rediriger ou rejeter des requêtes selon le chemin d'accès spécifié dans l'URI.
    - `En-têtes HTTP` : Les valeurs des en-têtes spécifiques dans la requête HTTP. Par exemple, appliquer une politique si un en-tête spécifique contient, commence par, ou correspond exactement à une valeur donnée.
    - `Cookies` : Les cookies présents dans la requête du client. Par exemple, vérifier la présence d'un cookie spécifique ou sa valeur pour déclencher une redirection ou un rejet.
  - **Type de comparaison** : Choisissez comment les valeurs seront comparées aux critères que vous définissez. Les options incluent `EQUAL_TO`, `STARTS_WITH`, `CONTAINS`, `ENDS_WITH`, etc.
  - **Valeur** : Spécifiez la valeur exacte ou partielle que doit contenir l'élément (URI, en-tête, cookie) pour que la condition soit considérée comme remplie.

###### Exemple de configuration :
- **Nom de la politique** : Redirection ancien site
- **Action** : `REDIRECT_TO_URL`
- **URL de redirection** : `https://nouveausite.example.com`
- **Conditions** : 
  - **Type** : `URI`
  - **Type de comparaison** : `STARTS_WITH`
  - **Valeur** : `/anciensite`

Cet exemple montre comment configurer une politique pour rediriger toutes les requêtes commençant par `/anciensite` vers `https://nouveausite.example.com`.

- Validez en cliquant sur « **Créer** » pour finaliser la création de la politique. 
- Ajoutez des règles spécifiques à votre nouvelle politique en suivant un processus similaire à travers l'interface de gestion des règles L7. [GAL] ajouter le même niveau de détails pour les règles. Ajouter des screenshots.

### Étape 2 : Utilisation de la CLI OpenStack et d'Horizon
La CLI OpenStack et l'interface graphique Horizon offrent des alternatives à l'interface client OVHcloud pour la gestion des politiques et règles L7.

#### Utilisation de la CLI OpenStack

La CLI OpenStack permet de gérer vos ressources cloud via des commandes exécutées dans votre terminal. Pour la création de politiques L7 sur vos Load Balancers, suivez ces instructions :

- Ouvrez votre terminal.
- Assurez-vous que l'environnement de votre CLI est configuré avec les bons identifiants.
- Obtenir la Liste des Listeners

Pour obtenir la liste des listeners disponibles, utilisez la commande suivante :

```shell
openstack loadbalancer listener list
```
Voici un exemple de format de sortie de la commande :
```shell
| id       | default_pool_id | name                           | project_id | protocol | protocol_port | admin_state_up |
|----------|-----------------|--------------------------------|------------|----------|---------------|----------------|
| REDACTED | REDACTED        | LB_S_GRA9-154-360-listener-1   | REDACTED   | HTTP     | 80            | True           |
```
### Explications des Colonnes dans la Liste des Listeners

- **`id`** : Identifiant unique du listener.
- **`default_pool_id`** : ID du pool par défaut (où le listener envoie le trafic par défaut).
- **`name`** : Nom du listener.
- **`project_id`** : ID du projet associé à ce listener.
- **`protocol`** : Le protocole utilisé par le listener (par exemple, HTTP, HTTPS).
- **`protocol_port`** : Le port sur lequel le listener écoute.
- **`admin_state_up`** : Indique si le listener est activé (`True`) ou désactivé (`False`).

### Créer une Nouvelle Politique L7

- Utilisez la commande suivante pour créer une nouvelle politique L7, en remplaçant `mon-listener-id` par l'identifiant de votre listener et `https://monsite.com` par l'URL de redirection désirée :

```bash
openstack loadbalancer l7policy create \
  --name ma-politique-l7 \
  --listener mon-listener-id \
  --action REDIRECT_TO_URL \
  --redirect-url https://monsite.com
```
#### Gestion via Horizon

Horizon, l'interface web d'OpenStack, offre une vue graphique sur la configuration de vos ressources cloud, y compris les Load Balancers et les politiques L7 :

##### Navigation

- Dans le tableau de bord d'Horizon, sélectionnez « **Projet > Réseau > Load Balancers** » pour afficher la liste des Load Balancers disponibles.

##### Configuration des Politiques L7

### Configuration de Politiques L7 sur un Load Balancer

1. **Accès au Load Balancer** :
   - Naviguez jusqu'au Load Balancer que vous souhaitez configurer et cliquez dessus pour accéder à ses détails.

2. **Gestion des Listeners** :
   - Trouvez le listener auquel vous souhaitez ajouter des politiques L7 et cliquez dessus pour accéder à ses détails.
   - Dans les détails du listener, localisez et cliquez sur l'onglet `L7 policies`. Cet onglet liste toutes les politiques existantes.
   - Pour ajouter une nouvelle politique, cliquez sur le bouton `Create L7 Policy`.

3. **Création de la Politique L7** :
   - Vous serez guidé à travers un formulaire pour définir :
     - **Nom de la politique** : Attribuez un nom unique à la politique.
     - **Action** : Choisissez l'action que la politique doit exécuter (par exemple, REDIRECT_TO_URL, REDIRECT_TO_POOL, REJECT).
     - **Conditions spécifiques** : Définissez tout critère spécifique qui doit être rencontré pour que la politique soit activée.

4. **Ajout de Règles à la Politique** :
   - Une fois la politique créée, pour ajouter des règles spécifiques à cette politique, retournez à l'écran de détails de la politique L7.
   - Cliquez sur `Add Rule` pour configurer les règles qui détermineront les conditions précises sous lesquelles la politique s'appliquera.
     - Vous serez invité à spécifier des critères tels que le type de condition (URI, Header, Cookie), le type de comparaison (EQUAL_TO, STARTS_WITH, etc.), et les valeurs à comparer.

### Outils de Gestion

- **CLI (Command Line Interface)** : Idéale pour ceux qui préfèrent une approche scriptable et rapide pour la gestion des configurations.
- **Horizon (Interface Graphique)** : Parfait pour ceux qui privilégient une interface visuelle intuitive pour la navigation et la gestion des configurations. Horizon est particulièrement utile pour les utilisateurs moins familiers avec la ligne de commande.

Que vous optiez pour la CLI pour sa rapidité et sa flexibilité dans les scripts, ou Horizon pour sa facilité d'utilisation et son interface graphique intuitive, ces outils augmentent considérablement votre capacité à gérer finement le trafic entrant sur vos applications déployées chez OVHcloud.
  
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

# Ressource pour le Listener
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

# Ressource pour la Règle L7
resource "openstack_lb_l7rule_v2" "l7rule_1" {
  l7policy_id   = openstack_lb_l7policy_v2.l7policy_1.id
  type          = "HOST_NAME"
  compare_type  = "REGEX"
  value         = ".*"
}
```

## Pour Aller Plus Loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
