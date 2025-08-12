---
title: "Automatiser le déploiement de votre site web sur votre VPS via GitLab CI/CD"
excerpt: "Découvrez comment déployer et automatiser le code de votre site web via GitLab CI/CD sur un VPS OVHcloud"
updated: 2025-01-28
---

## Objectif

Automatiser le déploiement de votre site web sur un VPS simplifie considérablement la gestion des mises à jour. Avec GitLab CI/CD, vous pouvez configurer un pipeline de déploiement automatique, évitant les déploiements manuels. Cette méthode garantit un déploiement rapide et fiable, tout en réduisant les risques d'erreurs humaines. Que vous soyez développeur débutant ou expérimenté, ce tutoriel vous permettra de mettre en place une solution professionnelle adaptée à vos besoins.

**Découvrez comment automatiser le déploiement de vos applications web avec GitLab CI/CD sur un VPS OVHcloud.**

## Prérequis

- Un [VPS](/links/bare-metal/vps) fonctionnel dans votre compte OVHcloud
- Un compte GitLab actif
- Un projet GitLab contenant le code de votre site web
- Un VPS configuré avec les services nécessaires (ex. Apache/Nginx, PHP, SGBD, etc.)
- Disposer d'un accès administrateur au VPS (via SSH)
- Le paquet `rsync` installé sur le VPS (nécessaire pour la synchronisation des fichiers)

> [!primary]
> Afin d'être sûr de remplir les prérequis, consultez les guides « [Installer un environnement de développement web sur un VPS ou un serveur dédié](/pages/bare_metal_cloud/virtual_private_servers/install_env_web_dev_on_vps) » et « [Sécuriser un VPS](/pages/bare_metal_cloud/virtual_private_servers/secure_your_vps) ».   

> [!warning]
> Si besoin, consultez notre guide « [Débuter avec un VPS](/pages/bare_metal_cloud/virtual_private_servers/starting_with_a_vps) » avant de poursuivre la lecture de ce guide.

## En pratique

**Sommaire :**

- [Configurer l'accès SSH pour GitLab CI/CD](#configure-ssh)
- [Ajouter la clé privée à GitLab](#add-private-key-gitlab)
- [Configurer GitLab CI/CD pour le déploiement automatique](#configure-gitlab-ci-cd)
- [Tester et vérifier le pipeline](#test-pipeline)
- [Conclusion](#conclusion)

### Configurer l'accès SSH pour GitLab CI/CD <a name="configure-ssh"></a>

Pour permettre à GitLab CI/CD de déployer automatiquement votre site web, configurez un accès SSH sécurisé à votre VPS.

#### Créer une paire de clés SSH

Connectez-vous à votre VPS via SSH et générez une paire de clés SSH dédiée pour GitLab CI/CD :

```bash
ssh-keygen -t rsa -b 4096 -C "gitlab-ci" -f /home/<user>/.ssh/deploy_key
```

Remplacez `<user>` par l'utilisateur configuré pour se connecter à votre VPS.

Appuyez sur `Entrée` lorsqu'une passphrase vous est demandée (laisser la passphrase vide facilite l'automatisation du déploiement avec GitLab CI/CD. Cependant, il est impératif de sécuriser la clé privée en la limitant à cet usage et en la stockant de manière sécurisée).

Vous obtenez deux fichiers :

- `/home/<user>/.ssh/deploy_key` : clé privée
- `/home/<user>/.ssh/deploy_key.pub` : clé publique

Consultez la [documentation officielle de GitLab](https://docs.gitlab.com/ee/user/ssh.html) pour plus de détails concernant la génération d'une paire de clés SSH.

#### Configurer la clé publique sur le VPS

Pour permettre à GitLab CI/CD de se connecter à votre VPS via SSH et d'y déployer le code de votre site web, ajoutez la clé publique générée à la liste des clés autorisées sur le VPS.

1\. Créez le répertoire `.ssh` :

```bash
mkdir -p /home/<user>/.ssh
chmod 700 /home/<user>/.ssh
```

2\. Ajoutez la clé publique au fichier `authorized_keys` :

```bash
cat /home/<user>/.ssh/deploy_key.pub >> /home/<user>/.ssh/authorized_keys
chmod 600 /home/<user>/.ssh/authorized_keys
```

3\. Testez la connexion SSH avec la clé privée pour confirmer que l'accès est fonctionnel :

```bash
ssh -i /home/<user>/.ssh/deploy_key <user>@<VPS_IP>
```

Remplacez `<user>` par l'utilisateur configuré pour se connecter à votre VPS et `<VPS_IP>` par l'adresse IP de votre VPS.

#### Ajouter la clé publique à GitLab

Après avoir configuré la clé publique sur votre VPS, ajoutez-la à votre compte GitLab. Copiez le contenu de la clé publique générée sur votre VPS avec :

```bash
cat /home/<user>/.ssh/deploy_key.pub
```

Suivez les étapes de la section « Add an SSH key to your GitLab account » de la [documentation officielle de GitLab](https://docs.gitlab.com/ee/user/ssh.html#add-an-ssh-key-to-your-gitlab-account) pour ajouter votre clé publique à votre compte GitLab.

#### Configurer l'accès SSH à GitLab sur le VPS

Pour garantir que GitLab utilise la clé privée générée pour établir une connexion SSH sécurisée, configurez le fichier `~/.ssh/config`. Cette étape facilite les commandes ultérieures en évitant d'avoir à spécifier manuellement la clé privée à chaque interaction avec GitLab.

Sur votre VPS, créez ou modifiez le fichier `~/.ssh/config` :

```bash
nano ~/.ssh/config
```

Ajoutez cette configuration pour l'accès à GitLab :

```console
Host gitlab.com
    HostName gitlab.com
    User git
    IdentityFile /home/<user>/.ssh/deploy_key
```

Sauvegardez et quittez l'éditeur.

Testez la connexion SSH avec GitLab :

```bash
ssh -T git@gitlab.com
```

Le message suivant doit apparaître :

```console
Welcome to GitLab, <username>!
```

### Ajouter la clé privée à GitLab <a name="add-private-key-gitlab"></a>

Copiez le contenu de la clé privée générée sur votre VPS avec :

```bash
cat /home/<user>/.ssh/deploy_key
```

Pour ajouter la clé privée SSH comme variable CI/CD, consultez la [documentation officielle de GitLab](https://docs.gitlab.com/ee/ci/jobs/ssh_keys.html).

### Configurer GitLab CI/CD pour le déploiement automatique <a name="configure-gitlab-ci-cd"></a>

#### Créer un fichier `.gitlab-ci.yml` pour le pipeline

1\. Dans votre projet GitLab local, créez un fichier `.gitlab-ci.yml` à la racine :

```bash
nano .gitlab-ci.yml
```

2\. Ajoutez la configuration suivante au fichier pour déployer automatiquement votre site web :

```yaml
stages:
  - deploy

deploy:
  stage: deploy
  image: debian:bullseye
  before_script:
    - apt-get update && apt-get install -y rsync openssh-client
    - mkdir -p ~/.ssh
    - echo "$DEPLOY_PRIVATE_KEY" > ~/.ssh/id_rsa
    - chmod 600 ~/.ssh/id_rsa
    - ssh-keyscan -H <VPS_IP> >> ~/.ssh/known_hosts
  script:
    - rsync -avz --delete ./ <user>@<VPS_IP>:/var/www/html/
  only:
    - main
```

Remplacez :

- `<VPS_IP>` par l'adresse IP de votre VPS
- `<user>` par l'utilisateur SSH configuré sur votre VPS

3\. Ajoutez le fichier au suivi Git, effectuez un commit puis poussez les modifications vers le dépôt distant :

```bash
git add .gitlab-ci.yml
git commit -m "Add GitLab CI/CD pipeline configuration"
git push origin main
```

### Vérifier et tester le pipeline <a name="test-pipeline"></a>

#### Vérifier l'exécution du premier pipeline

Rendez-vous dans l'onglet `Build > Pipelines` du menu latéral de GitLab pour vérifier que votre premier pipeline s'est bien exécuté.

Si une erreur survient, cliquez sur le pipeline échoué pour consulter les logs.

#### **Permissions insuffisantes**

Lors du premier déploiement, des erreurs peuvent survenir concernant les permissions (`Permission denied (13)`, `rsync: failed to set times`, etc.)

1\. Vérifiez que l'utilisateur a les permissions nécessaires

Assurez-vous que l'utilisateur SSH configuré sur votre VPS a les droits d'écriture sur tout le répertoire Git (`/var/www/html`) et ses sous-répertoires :

```bash
sudo chown -R <user>:www-data /var/www/html
sudo chmod -R 775 /var/www/html
```

2\. Testez localement avec rsync

Avant de relancer le pipeline GitLab, testez la commande `rsync` manuellement à partir de votre machine locale. Cela vous permettra de confirmer que les permissions sont correctement configurées :

```bash
rsync -avz --no-times --exclude='.git*' -e "ssh -i ./deploy_key -o StrictHostKeyChecking=no" ./ <user>@<VPS_IP>:/var/www/html/
```

Si cette commande réussit, relancez ensuite le pipeline sur GitLab.

### Conclusion <a name="conclusion"></a>

En suivant ce guide, vous avez mis en place un pipeline de déploiement automatique entre votre projet GitLab et votre VPS OVHcloud à l’aide de GitLab CI/CD. Ce workflow optimise considérablement la gestion des mises à jour de votre site web, en éliminant les déploiements manuels chronophages.

## Aller plus loin <a name="go-further"></a>

[Premiers pas avec un VPS](/pages/bare_metal_cloud/virtual_private_servers/starting_with_a_vps)

[Sécuriser un VPS](/pages/bare_metal_cloud/virtual_private_servers/secure_your_vps)

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](/links/partner).

Échangez avec notre [communauté d'utilisateurs](/links/community).