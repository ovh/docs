---
title: "Automatiser le déploiement de votre site web sur votre VPS via GitHub Actions"
excerpt: 'Découvrez comment déployer et automatiser le code de votre site web via GitHub Actions sur un VPS OVHcloud'
updated: 2025-01-21
---

## Objectif

Automatiser le déploiement de votre site web sur un VPS simplifie considérablement la gestion de vos mises à jour. Avec GitHub Actions, vous pouvez configurer un pipeline de déploiement automatique, évitant ainsi les déploiements manuels. Cette méthode garantit un déploiement rapide et fiable, tout en réduisant les risques d'erreurs humaines. Que vous soyez développeur débutant ou expérimenté, ce tutoriel vous permettra de mettre en place une solution professionnelle adaptée à vos besoins.

**Découvrez comment automatiser le déploiement de vos applications web avec GitHub Actions sur un VPS OVHcloud.**

## Prérequis

- Un [VPS](/links/bare-metal/vps) fonctionnel dans votre compte OVHcloud
- Un compte GitHub actif
- Un dépôt contenant le code de votre site web (facultatif)
- Un VPS configuré avec les services nécessaires (ex. Apache/Nginx, PHP, SGBD, etc.)
- Disposer d'un accès administrateur au VPS (via SSH)

> [!warning]
>
> Si besoin, consultez notre guide « [Débuter avec un VPS](/pages/bare_metal_cloud/virtual_private_servers/starting_with_a_vps) » avant de poursuivre la lecture de ce guide.

## En pratique

> [!primary]
> Afin d'être sûr de remplir les prérequis, consultez les guides « [Installer un environnement de développement web sur un VPS ou un serveur dédié](/pages/bare_metal_cloud/virtual_private_servers/install_env_web_dev_on_vps) » et « [Sécuriser un VPS](/pages/bare_metal_cloud/virtual_private_servers/secure_your_vps) ».

**Les étapes principales du guide seront les suivantes :**

- [Configurer l'accès SSH pour GitHub Actions](#configure-ssh)
- [Ajouter la clé privée à GitHub](#add-private-key-github)
- [Initialiser le dépôt GitHub (facultatif)](#init-github-repo)
- [Configurer GitHub Actions pour le déploiement automatique](#configure-github-actions)
- [Vérifier et tester le workflow GitHub Actions](#verify-workflow-github)
- [Conclusion](#conclusion)

### Configurer l'accès SSH pour GitHub Actions <a name="configure-ssh"></a>

Si votre site web existe déjà, identifiez le chemin du répertoire où il est hébergé. Par exemple, sur un VPS OVHcloud, il peut s'agir de `/var/www/html`. Conservez ce chemin en mémoire, afin de l'utiliser lors de la configuration du pipeline GitHub Actions.

Pour permettre à GitHub Actions de déployer automatiquement votre site web, configurez un accès SSH sécurisé à votre VPS.

#### Créer une paire de clés SSH

Connectez-vous à votre VPS via SSH et générez une paire de clés SSH dédiée pour GitHub Actions :

```bash
ssh-keygen -t rsa -b 4096 -C "github-actions" -f /home/<user>/.ssh/deploy_key
```

Remplacez `<user>` par l'utilisateur configuré pour se connecter à votre VPS.

Appuyez sur `Entrée` lorsqu'une passphrase vous est demandée (laisser la passphrase vide facilite l'automatisation du déploiement avec GitHub Actions. Cependant, cela nécessite de sécuriser la clé privée en la limitant à cet usage et en la stockant de manière sécurisée).

Vous obtenez deux fichiers :

- `/home/<user>/.ssh/deploy_key` : clé privée
- `/home/<user>/.ssh/deploy_key.pub` : clé publique

#### Configurer la clé publique sur le VPS

Pour permettre à GitHub Actions de se connecter à votre VPS via SSH et d'y déployer le code de votre site web, ajoutez la clé publique générée à la liste des clés autorisées sur le VPS.

1\. Créer le répertoire `.ssh` :

```bash
mkdir -p /home/<user>/.ssh
chmod 700 /home/<user>/.ssh
```

2\. Ajouter la clé publique au fichier `authorized_keys` :

```bash
cat /home/<user>/.ssh/deploy_key.pub >> /home/<user>/.ssh/authorized_keys
chmod 600 /home/<user>/.ssh/authorized_keys
```

3\. Tester la connexion SSH

Testez la connexion SSH avec la clé privée pour confirmer que l'accès est fonctionnel :

```bash
ssh -i /home/<user>/.ssh/deploy_key <user>@<VPS_IP>
```

Remplacez `<user>` par l'utilisateur configuré pour se connecter à votre VPS et `<VPS_IP>` par l'IP de votre VPS.

#### Ajouter la clé publique à GitHub

Après avoir configuré la clé publique sur votre VPS, ajoutez-la à votre compte GitHub. Copiez le contenu de la clé publique générée sur votre VPS avec :

```bash
cat /home/<user>/.ssh/deploy_key.pub
```

Suivez les étapes de la section « Ajout d'une nouvelle clé SSH à votre compte » de la [documentation officielle de GitHub](https://docs.github.com/fr/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account#adding-a-new-ssh-key-to-your-account) pour ajouter votre clé publique à votre compte GitHub.

#### Configurer l'accès SSH à GitHub sur le VPS

Pour garantir que GitHub utilise la clé privée générée pour établir une connexion SSH sécurisée, configurez le fichier `~/.ssh/config`. Cette étape facilite les commandes ultérieures en évitant d'avoir à spécifier manuellement la clé privée à chaque interaction avec GitHub.

Sur votre VPS, créez ou modifiez le fichier `~/.ssh/config` :

```bash
nano ~/.ssh/config
```

Ajoutez cette configuration pour l'accès à GitHub :

```console
Host github.com
    HostName github.com
    User git
    IdentityFile /home/<user>/.ssh/deploy_key
```

Sauvegardez et quittez l'éditeur.

Testez la connexion SSH avec GitHub :

```bash
ssh -T git@github.com
```

Vous devriez voir un message tel que celui-ci :

```console
Hi <user-github>! You've successfully authenticated, but GitHub does not provide shell access.
```

### Ajouter la clé privée à GitHub <a name="add-private-key-github"></a>

Copiez le contenu de la clé privée générée sur votre VPS avec :

```bash
cat /home/<user>/.ssh/deploy_key
```

Pour permettre à GitHub Actions de se connecter automatiquement à votre VPS, ajoutez la clé privée dans un dépôt secret sur GitHub. Cela permettra à GitHub de déployer votre site web via SSH. Suivez les étapes de la section « Création de secrets pour un dépôt » de la [documentation officielle de GitHub](https://docs.github.com/fr/actions/security-for-github-actions/security-guides/using-secrets-in-github-actions#creating-secrets-for-a-repository).

### Initialiser le dépôt GitHub (facultatif) <a name="init-github-repo"></a>

> [!primary]
> Si vous possédez déjà un dépôt GitHub contenant le code de votre site web, passez à l'[étape suivante](#configure-github-actions).

#### Créer un dépôt GitHub

Pour créer un dépôt GitHub, suivez les étapes de la page « Création d'un dépôt » de la [documentation officielle de GitHub](https://docs.github.com/fr/repositories/creating-and-managing-repositories/creating-a-new-repository).

#### Initialiser le dépôt Git sur le VPS

1\. Connectez-vous à votre VPS via SSH :

```bash
ssh <user>@<VPS_IP>
```

2\. Installez Git :

```bash
sudo apt update && sudo apt install git -y
```

3\. Initialisez un dépôt Git dans le répertoire de votre site web :

```bash
cd /var/www/html
sudo git init
sudo git remote add origin git@github.com:<github_user>/<repository_name>.git
```

Remplacez `<github_user>` par votre nom d'utilisateur GitHub et `<repository_name>` par le nom de votre dépôt GitHub.

4\. Ajoutez les fichiers et effectuez un premier commit :

```bash
git add .
git commit -m "Initial commit"
git branch -M main
git push -u origin main
```

### Configurer GitHub Actions pour le déploiement automatique <a name="configure-github-actions"></a>

Créez et configurez un workflow pour synchroniser automatiquement le code de votre site web entre GitHub et le VPS.

#### Créer le fichier de workflow GitHub Actions

1\. Créez un répertoire pour les workflows

Sur votre VPS, créez le répertoire `.github/workflows` dans le dossier contenant votre projet Git (c'est-à-dire le répertoire contenant le code de votre site web) :

```bash
cd /var/www/html
mkdir -p .github/workflows
```

2\. Créez un fichier de workflow

Créez un fichier `deploy.yml` dans le répertoire `.github/workflows` :

```bash
nano .github/workflows/deploy.yml
```

3\. Configurez le fichier `deploy.yml`.

Pour configurer le pipeline de déploiement, ajoutez le contenu suivant au fichier `deploy.yml` :

```yaml
name: Deploy to VPS

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
    - name: Checkout code
      uses: actions/checkout@v3

    - name: Copy files to VPS
      env:
        SSH_PRIVATE_KEY: ${{ secrets.DEPLOY_KEY }}
      run: |
        mkdir -p ~/.ssh
        echo "$SSH_PRIVATE_KEY" > ~/.ssh/id_rsa
        chmod 600 ~/.ssh/id_rsa
        ssh-keyscan -H <VPS_IP> >> ~/.ssh/known_hosts
        rsync -avz --delete ./ <user>@<VPS_IP>:/var/www/html/
```

Remplacez les éléments suivants :

- `<VPS_IP>` : par l'adresse IP de votre VPS.
- `<user>` : par l'utilisateur SSH configuré sur votre VPS.
- `DEPLOY_KEY` : par le nom du secret dans les paramètres de votre dépôt GitHub.

4\. Ajoutez le fichier de workflow au dépôt GitHub

Une fois le fichier de workflow configuré, ajoutez-le à votre dépôt Git et poussez-le vers GitHub :

```bash
git add .github/workflows/deploy.yml
git commit -m "Ajout du workflow GitHub Actions pour le déploiement"
git push origin main
```

### Vérifier et tester le workflow GitHub Actions <a name="verify-workflow-github"></a>

#### Vérifier l'exécution du premier workflow

Rendez-vous dans l'onglet `Actions` de votre dépôt GitHub et vérifiez que votre premier workflow s'est bien exécuté.

Si une erreur survient, cliquez sur le workflow échoué pour consulter les logs. Assurez-vous que votre clé privée est correctement ajoutée comme secret dans votre dépôt GitHub et que votre clé publique est bien ajoutée dans le fichier `.ssh/authorized_keys`.

##### **Permissions insuffisantes**

Lors du premier déploiement, des erreurs peuvent survenir concernant les permissions (`Permission denied (13)`, `rsync: failed to set times`, etc.)

1\. Vérifiez que l'utilisateur a les permissions nécessaires

Assurez-vous que l'utilisateur SSH configuré sur votre VPS a les droits d'écriture sur tout le répertoire Git (`/var/www/html`) et ses sous-répertoires :

```bash
sudo chown -R <user>:www-data /var/www/html
sudo chmod -R 775 /var/www/html
```

2\. Testez localement avec rsync

Avant de relancer le workflow GitHub Actions, testez la commande `rsync` manuellement à partir de votre machine locale. Cela vous permettra de confirmer que les permissions sont correctement configurées :

```bash
rsync -avz --no-times --exclude='.git*' -e "ssh -i ./deploy_key -o StrictHostKeyChecking=no" ./ <user>@<VPS_IP>:/var/www/html/
```

Si cette commande réussit, relancez ensuite le workflow sur GitHub.

#### Déclenchement du workflow avec `git push`

Lorsqu'un `git push` est effectué sur la branche `main` (ou toute autre branche spécifiée dans votre fichier `deploy.yml`), le workflow exécute les étapes définies dans le fichier `deploy.yml` :

- Clonage du dépôt GitHub dans l'environnement GitHub Actions.
- Configuration de la clé SSH pour établir une connexion avec votre VPS.
- Synchronisztion des fichiers depuis le dépôt GitHub vers le répertoire `/var/www/html` de votre VPS via `rsync`.

##### **Tester le workflow**

1\. Clonez le dépôt GitHub dans un répertoire de test sur le VPS

Créez un répertoire temporaire sur votre VPS pour simuler un autre environnement utilisateur. Par exemple :

```bash
mkdir /home/<user>/test-github-actions
cd /home/<user>/test-github-actions
```

2\. Clonez le dépôt GitHub dans ce répertoire

```bash
git clone git@github.com:<github_user>/github-actions.git .
```

Si votre dépôt est déjà en HTTPS , mettez-le à jour pour utiliser SSH :

```bash
git remote set-url origin git@github.com:<github_user>/github-actions.git
```

3\. Effectuez une modification dans le dépôt de test

Ajoutez un nouveau fichier ou modifiez un fichier existant dans le répertoire de test et faites un `git push` sur votre dépôt GitHub :

```bash
echo "Test depuis l'utilisateur numéro 2 du VPS" >> testfile.txt
git add testfile.txt
git commit -m "Ajout d'un test depuis le VPS"
git push origin main
```

4\. Vérifiez l'exécution du workflow sur GitHub

Rendez-vous dans l'onglet `Actions` de votre dépôt GitHub et vérifiez que le workflow a été déclenché automatiquement après le `git push`. Si le workflow réussit, les modifications seront synchronisées dans le dossier de votre site web (`/var/www/html`).

5\. Confirmer la synchronisation dans `/var/www/html`

Retournez dans votre répertoire principal de déploiement (`/var/www/html`) et vérifiez que le fichier `testfile.txt` est bien présent :

```bash
ls /var/www/html
cat /var/www/html/testfile.txt
```

### Conclusion <a name="conclusion"></a>

En suivant ce guide, vous avez mis en place un pipeline de déploiement automatique entre votre dépôt GitHub et votre VPS OVHcloud à l’aide de GitHub Actions. Ce workflow optimise considérablement la gestion des mises à jour de votre site web, en éliminant les déploiements manuels chronophages.

## Aller plus loin <a name="go-further"></a>

[Premiers pas avec un VPS](/pages/bare_metal_cloud/virtual_private_servers/starting_with_a_vps)

[Sécuriser un VPS](/pages/bare_metal_cloud/virtual_private_servers/secure_your_vps)

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](/links/partner).

Échangez avec notre [communauté d'utilisateurs](/links/community).