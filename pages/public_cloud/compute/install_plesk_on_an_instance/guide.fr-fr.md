---
title: 'Comment installer Plesk sur une instance Public Cloud'
excerpt: 'Apprenez à mettre en place Plesk sur votre instance Public Cloud'
updated: 2025-04-08
---

## Objectif

Plesk est une interface de gestion de serveurs simple à prendre en main. Vous avez la possibilité de la mettre en place et de l'utiliser sur vos instances Public Cloud OVHcloud.

**Apprenez à installer Plesk sur votre instance Public Cloud.** 

> [!warning]
> 
> OVHcloud met à votre disposition des services dont la responsabilité vous revient. En effet, n’ayant aucun accès à ces machines, nous n’en sommes pas les administrateurs et ne pourrons vous fournir d'assistance. Il vous appartient de ce fait d’en assurer la gestion logicielle et la sécurisation au quotidien.
>
> Nous mettons à votre disposition ce guide afin de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un [prestataire spécialisé](/links/partner) si vous éprouvez des difficultés ou des doutes concernant l’administration, l’utilisation ou la sécurisation d’un serveur. N'hésitez pas à vous rendre sur notre [forum communautaire](/links/community) pour échanger avec d'autres utilisateurs.
>

## Prérequis

- [Avoir créé une instance depuis l'espace client OVHcloud](/pages/public_cloud/public_cloud_cross_functional/create_a_public_cloud_project).
- [Disposer d'un accès administrateur](/pages/public_cloud/compute/public-cloud-first-steps#connect-instance).

## En pratique

### Étape 1 : installer Plesk

L'installation de Plesk s'effectue facilement depuis une connexion en SSH. Pour cela, téléchargez puis lancez le script d'installation de Plesk en utilisant la commande la plus adaptée à votre situation ci-dessous.

> [!primary]
>
> Selon l’OS de votre instance, la commande sudo seule peut ne pas suffire. Si vous rencontrez une erreur, passez en mode super-utilisateur avant de lancer l’installation :
>
> <pre class="highlight language-console"><code class="language-console">sudo su</code></pre>
>

- **Pour une installation par défaut non personnalisée de Plesk** :

```bash
sudo sh <(curl https://autoinstall.plesk.com/one-click-installer || wget -O - https://autoinstall.plesk.com/one-click-installer)
```

- **Pour une installation personnalisée de Plesk** :

```bash
sudo sh <(curl https://autoinstall.plesk.com/plesk-installer || wget -O - https://autoinstall.plesk.com/plesk-installer)
```

Patientez ensuite le temps de l'installation. 

### Étape 2 : finaliser la configuration et ajouter une license

Une fois l’installation terminée, l’interface en ligne de commande (CLI) affichera les informations suivantes :

- Deux URLs sont générées :
    - L’une avec l’adresse IP du serveur (en HTTPS avec un certificat SSL auto-signé, ce qui peut déclencher une alerte de sécurité dans certains navigateurs).
    - L’autre avec un domaine Plesk (en HTTPS avec un certificat SSL signé, sans alerte de sécurité).
    - Les deux sont sécurisées, mais il est recommandé d’utiliser la seconde.
- Un message indique : "Vous pouvez également vous connecter en tant que ‘root’ avec votre mot de passe ‘root’.". Cependant, par défaut, aucun mot de passe root n’est généré. Si nécessaire, les clients peuvent suivre [ce guide](/pages/bare_metal_cloud/dedicated_servers/changing_root_password_linux_ds) pour activer l’utilisateur root et définir un mot de passe.

Une fois sur la page Plesk, suivez les instructions à l’écran pour finaliser l’installation.

![plesk configuration](images/plesk_configuration.png){.thumbnail}

Pour ajouter votre licence Plesk, munissez-vous de la clé qui vous a été transmise par votre prestataire.

> [!primary]
>
> Nous ne commercialisons pas de licences Plesk pour nos offres Public Cloud. Vous pouvez cependant en obtenir une depuis le site de [Plesk](https://www.plesk.com/).
> 

Vous souhaitez modifier votre licence, par exemple pour remplacer une clé de test ou pour changer d'offre ? Depuis l'interface Plesk, rendez-vous alors dans la partie `Tools & Settings`{.action}. Dans la section **Plesk**, sélectionnez ensuite `License information`{.action}.

## Aller plus loin

[Documentation officielle de Plesk](https://docs.plesk.com/en-US/obsidian/).

Échangez avec notre [communauté d'utilisateurs](/links/community).