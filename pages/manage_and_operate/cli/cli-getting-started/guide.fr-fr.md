---
title: Premiers pas avec la CLI OVHcloud
excerpt: "Découvrez les ressources utiles pour utiliser l’interface en ligne de commande officielle OVHcloud"
updated: 2025-10-13
---

## Objectif

L’interface en ligne de commande OVHcloud (CLI) est un outil conçu pour interagir avec les services OVHcloud directement depuis votre terminal. Elle permet d’automatiser des tâches, de gérer vos ressources et d’accéder efficacement aux API OVHcloud.

## Installation

Pour installer la CLI OVHcloud, utilisez la commande suivante :

```sh
curl -fsSL https://raw.githubusercontent.com/ovh/ovhcloud-cli/main/install.sh | sh
```

La CLI OVHcloud est également disponible via Homebrew :

```sh
brew install --cask ovh/tap/ovhcloud-cli
```

Vous pouvez également télécharger la dernière version depuis le [dépôt GitHub](https://github.com/ovh/ovhcloud-cli) :

1. Rendez-vous sur la [page des releases](https://github.com/ovh/ovhcloud-cli/releases).
1. Téléchargez le binaire correspondant à votre système d’exploitation (Linux, macOS ou Windows).
1. Décompressez l’archive et déplacez le binaire dans un dossier inclus dans votre `$PATH`.
1. Vérifiez l’installation :

```sh
ovhcloud version
```

## Authentification de la CLI

La CLI OVHcloud nécessite une authentification pour effectuer des appels à l’API. Plusieurs méthodes permettent de définir vos identifiants.

Consultez la [page d’authentification](https://github.com/ovh/ovhcloud-cli/blob/main/doc/authentication.md) pour plus d’informations sur la configuration et les moyens d’authentification.

- Connexion interactive :

```sh
# Permet de se connecter et créer des identifiants API (mode interactif)
ovhcloud login
```

- Utilisation d’un fichier de configuration :

Les paramètres par défaut peuvent être définis dans un fichier de configuration nommé `.ovh.conf` situé dans votre répertoire `${HOME}`.
Vous pouvez consulter [ce guide](/pages/manage_and_operate/api/first-steps) pour apprendre à créer des identifiants API.

Exemple de fichier de configuration :

```ini
[default]
endpoint = ovh-eu

[ovh-eu]
application_key    = <application key>
application_secret = <application secret>
consumer_key       = <consumer key>

[ovh-cli]
default_cloud_project = <ID du projet Public Cloud>
```

- Utilisation de variables d’environnement :

```sh
OVH_ENDPOINT=ovh-eu
OVH_APPLICATION_KEY=xxx
OVH_APPLICATION_SECRET=xxx
OVH_CONSUMER_KEY=xxx
OVH_CLOUD_PROJECT_SERVICE=<ID du projet Public Cloud>
```

## Exemples de commandes

Voici quelques commandes de base pour commencer :

- **Lister vos projets cloud** :

```sh
ovhcloud cloud project list
```

- **Afficher les détails d’un projet spécifique** :

```sh
ovhcloud cloud project get <PROJECT_ID>
```

- **Lister les instances d’un projet** :

```sh
ovhcloud cloud instance list --cloud-project <PROJECT_ID>
```

- **Créer une nouvelle instance** :

```sh
ovhcloud cloud instance create BHS5 --cloud-project <PROJECT_ID> --name my-instance --flavor-selector --image-selector --network.public --ssh-key.name <SSH_KEY_NAME>
```

> [!primary]
>
> **Remarque** : L’option `--project-id` n’est pas nécessaire si vous avez défini l’entrée `default_cloud_project` dans votre fichier de configuration, ou si la variable d’environnement `OVH_CLOUD_PROJECT_SERVICE` est renseignée.

Pour plus d’informations sur les commandes disponibles, consultez la [documentation complète](https://github.com/ovh/ovhcloud-cli/blob/main/doc/ovhcloud.md).

## Couverture des produits

La plupart des produits proposent des commandes de base pour lister les services, récupérer et modifier leurs détails. Certains produits disposent déjà d’une couverture plus avancée, comme par exemple : Baremetal, Public Cloud (Instances, Managed Kubernetes, Rancher, Storage, Network), VPS et IAM.

> [!primary]
>
> **Remarque** : Les actions actuellement disponibles dans la CLI correspondent à celles proposées par l’API principale OVHcloud. Les actions spécifiques à chaque produit, accessibles via leurs propres API, ne sont pas encore couvertes, mais seront progressivement ajoutées selon le produit.

## Ressources

- [Dépôt GitHub OVHcloud CLI](https://github.com/ovh/ovhcloud-cli)
- [Documentation CLI](https://github.com/ovhcli#readme)
- [Référence API](/links/console)