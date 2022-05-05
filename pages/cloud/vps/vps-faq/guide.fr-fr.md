---
title: FAQ VPS OVHcloud
slug: vps-faq
section: 'Premiers pas'
order: 1
---

## FAQ VPS

### Qu'est-ce qu'un VPS et à quoi sert-il ?

Un serveur privé virtuel (VPS) permet d’héberger des sites web (vitrine, e-commerce, contenus, médias) et des applications logicielles (portails, Extranet, solutions collaboratives, wikis, CRM). Contrairement à l’hébergement mutualisé, les données sont isolées sur une machine virtuelle dédiée à l’utilisateur.

Idéalement situés entre un hébergement web et un serveur physique, nos VPS conjuguent la fiabilité et la performance d’un serveur dédié sans la gestion des contraintes matérielles.

### Que choisir entre VPS et hébergement web ?

L’utilisation d’un VPS s’inscrit dans la continuité logique de celle d’un hébergement web. Les serveurs privés virtuels offrent davantage de possibilités et une plus grande liberté d’action concernant le paramétrage, l’accès et les fonctionnalités (root, Apache PHP.init). Vous avez également la possibilité d’installer un certificat SSL ou tout autre logiciel de votre choix.

Nous attirons cependant votre attention sur la nécessité de bien sélectionner votre VPS. En effet, celui-ci requiert une configuration conforme aux besoins des applications et une adaptation à la croissance de votre activité.

### Que choisir entre un VPS et un hébergement web Plesk ?

Sur un hébergement web Plesk, un espace avec Plesk préinstallé est mis à votre disposition. Vous pouvez gérer vos sites internet mais n’êtes pas administrateur du service. Celui-ci ne pourra servir qu’à la gestion.
En choisissant un VPS, vous êtes l’administrateur de votre serveur et OVHcloud n’a pas accès à son contenu. Vous êtes ainsi libre de l’utiliser selon vos besoins.

### Quels sont les avantages d'un VPS par rapport à un serveur dédié ?

Les VPS ont pour avantage de vous libérer de la gestion hardware, comme le suivi de l’état des disques durs, de la mémoire vive (RAM) et du CPU. Ils sont adaptés à la plupart des usages web, pour des projets dont la taille est maîtrisée.
L’utilisation d’un serveur dédié est, elle, conseillée si vous souhaitez gérer vous-même la partie matérielle, bâtir des architectures plus élaborées, créer une infrastructure incluant un réseau privé (vRack) ou encore déployer des solutions complexes autres que des services web.

En règle générale, les utilisatrices et utilisateurs dont l’activité web se développe évoluent vers des serveurs dédiés ou des solutions Public Cloud. Ces services proposent des infrastructures plus complexes et flexibles, adaptées à une croissance forte.

### Quelles sont les différences entre les solutions VPS et Public Cloud ?

Le VPS est une solution adaptée aux environnements de préproduction et production, qui ne nécessitent pas des performances constantes.
Le Public Cloud d'OVHcloud propose, lui, une infrastructure multiserveur avec une haute disponibilité des machines. Un réseau privé, le vRack, est également disponible avec cette solution.

### Comment choisir mon VPS OVHcloud ?

Pour choisir un VPS adapté à vos besoins, nous vous invitons à vérifier les aspects suivants :

- la quantité de ressources nécessaire (processeur, mémoire, espace disque, bande passante…) ;
- le système d'exploitation requis (Linux ou Windows) ;
- les prérequis techniques essentiels au bon fonctionnement de l’application (par exemple, une base de données demande de la vitesse en lecture/écriture).

Cela vous permettra de faire le bon choix parmi nos solutions VPS :

- **VPS Starter** : machine d'entrée de gamme pour tester notre offre (avec une distribution Linux uniquement, pas de panneau de gestion web) ;
- **VPS Value, Essential et Comfort** : idéals pour l’hébergement de sites web, de services e-commerce ou de systèmes de monitoring ;
- **VPS Elite** : adapté aux sites e-commerce et applications plus exigeants en ressources CPU et mémoire.


### Qui peut se servir d'un VPS ?

Gérer un VPS nécessite des connaissances de base en administration de serveurs. Ces notions sont essentielles pour gérer le système d’exploitation (Linux ou Windows) installé sur la machine et paramétrer les applications. Vous pensez avoir besoin d’un VPS, mais estimez ne pas posséder les compétences requises ? Nous vous invitons à vous rapprocher de l’un de nos [partenaires](https://marketplace.ovhcloud.com/). 

Si vous souhaitez bénéficier de ressources garanties sans connaissances en administration de serveurs, nous vous conseillons nos [hébergements web Performance](https://www.ovh.com/fr/hebergement-web/hebergement-performance.xml).

### Comment me connecter à mon VPS ?

La connexion à votre VPS devra se faire en SSH grâce à l’adresse IP, le nom d’utilisateur et le mot de passe fournis par e-mail à la réception de la commande.
Depuis un poste sous Windows il sera conseillé de vous connecter grâce au logiciel Putty. La connexion pourra se faire directement sur le terminal depuis un poste Linux.

Tous les détails vous sont présentés dans le guide [« Débuter avec un VPS »](../debuter-avec-vps/).

### Est-il possible d'héberger plusieurs sites internet sur un VPS ?

Oui. Un VPS peut être partitionné et organisé en fonction de vos besoins. Vous pouvez ainsi y héberger plusieurs sites ou projets, en allouant à chacun un espace privé dont vous choisissez le volume. Pour simplifier ces manipulations, vous avez la possibilité d'installer un panneau de gestion de sites web, comme Plesk ou cPanel.

### Mon VPS est-il sauvegardé ?

OVHcloud n'effectue pas de sauvegarde des données hébergées sur votre VPS. Il vous appartient donc de les réaliser par vos propres moyens.
À cette fin, vous pouvez utiliser les options suivantes : la sauvegarde manuelle (Snapshot) ou la sauvegarde automatisée.

### Comment sécuriser mon VPS ?

Par défaut le VPS est fourni « nu », aucune configuration de sécurité n’est présente sur ce dernier. C’est donc la première chose que vous devez faire à la réception
Pour ce faire, n’hésitez pas à consulter le guide [«Sécuriser un VPS»](../conseils-securisation-vps/).

### Quelle est la bande passante allouée à mon VPS ? Est-elle garantie ?

La bande passante affichée sur la page de nos offres est garantie. Il s'agit du débit minimum qui vous est alloué.

### Quel SLA est appliqué sur mon VPS ?

Sur l’ensemble des gammes VPS, OVHcloud propose un SLA de 99,9%.

### Comment accéder à mon backup storage depuis une adresse IP différente de mon service ? <a name="backupstorage"></a>

L'accès à votre backupFTP peut être restreint au service auquel il est lié via votre espace client OVHcloud.

Afin de pouvoir ajouter d'autres adresses IP de services différents, vous pouvez utiliser l'API OVHcloud.
Cela vous permettra alors de récupérer vos backups depuis un service d'une autre localisation.

> [!warning]
> Seules les adresses IP OVHcloud peuvent être autorisées.
>

Connectez-vous sur [https://api.ovh.com/](https://api.ovh.com/) et utilisez l'appel suivant :

> [!api]
>
> @api {POST} vps/{serviceName}/backupftp/access
>

Renseignez les champs ainsi :

- `serviceName ` : le nom de votre VPS
- `cifs ` : cochez si nécessaire
- `ftp` : cochez si nécessaire
- `ipBlock` : renseignez l'IP qui aura accès sous la forme `1.2.3.4/32`
- `nfs` : cochez si nécessaire

![post api](images/post-api.png){.thumbnail}

Afin de vérifier que votre adresse IP est bien autorisée, utilisez l'appel suivant :

> [!api]
>
> @api {GET} /vps/{serviceName}/backupftp/access
>

![get api](images/get-api.png){.thumbnail}

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.
