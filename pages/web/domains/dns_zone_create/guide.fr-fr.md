---
title: 'Créer une zone DNS OVHcloud pour un nom de domaine'
excerpt: 'Découvrez comment créer une zone DNS chez OVHcloud pour votre nom de domaine via votre espace client'
updated: 2023-07-21
---

## Objectif

La zone **D**omain **N**ame **S**ystem (**DNS**) d’un nom de domaine constitue le fichier de configuration de ce dernier. Elle se compose d’informations techniques, appelées *enregistrements DNS*. La zone DNS est, en quelque sorte, comme un centre d'aiguillage.

Vous pouvez, par exemple, y préciser :

- L'adresse IP (enregistrements DNS de type *A* et *AAAA*) de votre hébergement web pour afficher votre site web avec votre nom de domaine.
- Les serveurs e-mail (enregistrements DNS de type *MX*) vers lesquels votre nom de domaine doit rediriger les e-mails qu'il reçoit. Cela vous permet de les consulter sur votre (vos) adresse(s) e-mail(s) personnalisée(s) avec votre nom de domaine.
- Des informations liées à la sécurité / l'authentification de vos services (hébergement web, serveur web, serveur e-mail, etc.)  associés à votre nom de domaine (enregistrements DNS de type *SPF*, *DKIM*, *DMARC*, etc.).

Si besoin, consultez notre documentation sur [les enregistrements DNS et l'édition d'une zone DNS](/pages/web/domains/dns_zone_edit) depuis votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr).

Une zone DNS est hébergée / enregistrée sur des **serveurs DNS**. Ce sont les **serveurs DNS** qui doivent être déclarés auprès du nom de domaine pour utiliser la zone DNS qu'ils hébergent. 

Les **serveurs DNS** fonctionnent généralement par paire :

- Un serveur DNS *principal* : il redirige les flux de requêtes reçus par le nom de domaine vers la zone DNS qu'il héberge pour ce dernier. Cela permet d'effectuer la *résolution DNS* pour rediriger les flux vers les bons services (serveurs, site web, e-mails, etc.) associés au nom de domaine.
- Un serveur DNS *secondaire* : ce serveur de *secours* est utilisé si le serveur *principal* est saturé de requetes, est indisponible ou répond moins rapidement que le serveur *secondaire*.

Certains fournisseurs DNS proposent 3 **serveurs DNS** ou plus à déclarer auprès de votre nom de domaine, pour activer la zone DNS qu'ils hébergent pour ce dernier.

Pour plus de détails sur les **serveurs DNS**, consultez notre [guide](/pages/web/domains/dns_server_general_information) sur le sujet.

Pour diverses raisons, vous pouvez être amené à créer une zone DNS pour votre nom de domaine chez OVHcloud.

**Découvrez comment créer une zone DNS chez OVHcloud pour votre nom de domaine via votre espace client OVHcloud.**

## Prérequis

- Disposer d’un nom de domaine.
- Le nom de domaine concerné ne doit pas déjà disposer d'une zone DNS (active ou non) chez OVHcloud ou faire l'objet d'une opération ou d'une commande en cours chez OVHcloud.
- Être connecté à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr){.external}.

## En pratique

> [!warning]
>
> Vous pouvez créer plusieurs zones DNS (chez différents fournisseurs/prestataires/hébergeur DNS) pour un même nom de domaine. Cependant, vous ne pouvez avoir qu'une seule zone DNS active pour votre nom de domaine. Cette restriction vise à éviter les *conflits DNS*.
>
> L'activation/désactivation d'une zone DNS se fait à partir de la déclaration des **serveurs DNS** auprès de votre nom de domaine. Vous pouvez modifier cette déclaration et changer les **serveurs DNS** d'un nom de domaine auprès : 
>
> - du *bureau d'enregistrement* où vous avez directement enregistré votre nom de domaine ;
> - du prestataire qui le gère si vous passez par un prestataire spécialisé pour gérer votre nom de domaine.
>
> En modifiant les **serveurs DNS** d'un nom de domaine, vous désactivez la configuration de l'ancienne zone DNS appliquée au profit de la configuration de la nouvelle zone DNS (présente sur les nouveaux **serveurs DNS** déclarés).
>
> Par conséquent, vérifiez bien, avant de changer les **serveurs DNS** déclarés auprès de votre nom de domaine, que la configuration de la nouvelle zone DNS correspond bien à vos attentes.
>

### Étape 1 : créer la zone DNS via l'espace client OVHcloud

Connectez-vous à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr){.external} puis rendez-vous dans la partie `Web cloud`{.action}. Dans la colonne de gauche, cliquez sur `Commander`{.action} puis sur l'encadré `Zone DNS`{.action}.

Sur la page qui apparaît, renseignez le nom de domaine (exemple : *domain.tld*) pour lequel vous souhaitez créer une zone DNS OVHcloud. Patientez quelques instants le temps que l'outil effectue des vérifications concernant le nom de domaine.

Si un message apparaît et vous indique que la zone DNS ne peut pas être créée, vérifiez que le nom de domaine respecte les prérequis nécessaires ou demandez à la personne gérant celui-ci de le faire pour vous. Dès que tout est correct, tentez de nouveau la manipulation.

![dnszonecreate](images/dns-zone-create-step1.png){.thumbnail}

Dès que la vérification aboutit, choisissez d'activer ou non les entrées minimales pour la zone DNS que vous allez créer. Ce choix n'est pas définitif puisque vous pourrez toujours [éditer les enregistrements de la zone DNS](/pages/web/domains/dns_zone_edit) par la suite.

![dnszonecreate](images/dns-zone-create-step2.png){.thumbnail}

|Activer les entrées minimales ?|Détails|
|---|---|
|Oui|Sélectionnez ce choix si vous souhaitez personnaliser vous-même la zone DNS par la suite.</br>![minimal-dns-entries](images/minimal.png){.thumbnail}|
|Non|Sélectionnez ce choix si vous prévoyez d'utiliser des services OVHcloud comme un [hébergement web](https://www.ovhcloud.com/fr/web-hosting/){.external}, la zone étant préconfigurée à cet effet.</br>![no-minimal-dns-entries](images/no_minimal.png){.thumbnail}|

Une fois votre choix effectué, poursuivez les étapes jusqu'à la création de la zone DNS.

### Étape 2 : éditer la zone DNS (facultatif)

La zone DNS pour votre nom de domaine étant maintenant créée, vous pouvez dès à présent l'éditer. Cette manipulation est facultative, mais elle peut se révéler nécessaire si vous souhaitez assurer la continuité de la disponibilité des services liés à ce nom de domaine (comme un site web et/ou des e-mails).

Pour éditer cette zone DNS, consultez notre guide « [Editer une zone DNS chez OVHcloud](/pages/web/domains/dns_zone_edit) ».

> [!primary]
>
> Si vous venez juste de créer la zone DNS et que le nom de domaine n'apparaît pas encore dans la liste des vos services (dans la partie `Web cloud`{.action} de l'espace client OVHcloud puis dans la section `Noms de domaine`{.action}), patientez 15 à 20 minutes puis rechargez la page.
>

### Étape 3 : modifier les serveurs DNS du nom de domaine

Une fois que la zone DNS chez OVHcloud est prête à être utilisée, reliez-la à votre nom de domaine pour appliquer la configuration qu'elle contient à ce dernier. 

Vous devrez donc récupérer au préalable les **serveurs DNS** d'OVHcloud sur lesquels la zone DNS OVHcloud a été créée pour votre nom de domaine.

Pour effectuer cela, connectez-vous à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr){.external} puis rendez-vous dans la partie `Web cloud`{.action}. Dans la colonne de gauche, cliquez sur `Noms de domaine`{.action} puis sélectionnez la zone DNS concernée. 

Elle porte le nom de votre nom de domaine et un logo en forme de globe étiqueté avec le terme *DNS* est présent à sa gauche. 

> [!primary]
> A ce stade, si vous avez un logo en forme de globe uniquement (sans le terme *DNS* écrit à l'intérieur), c'est que le nom de domaine est déjà géré dans votre espace client OVHcloud. 
>
> Si vous êtes le contact *Administrateur* de ce dernier, vous pourrez dans ce cas directement changer les **serveurs DNS** à l'aide de notre [guide](/pages/web/domains/dns_server_general_information) sur le sujet.
>
> Pour rappel, vérifiez bien, avant de changer les **serveurs DNS** déclarés auprès de votre nom de domaine, que la configuration de la nouvelle zone DNS correspond bien à vos attentes.
>

Sur la page qui s'affiche, les serveurs DNS à utiliser avec votre nom de domaine pour activer la zone DNS OVHcloud apparaissent en dessous de `Name Servers`{.action}.

![dnszonecreate](images/dns-zone-create-step3.png){.thumbnail}

Une fois les informations en votre possession, **modifiez les serveurs DNS de votre nom de domaine depuis l’interface du prestataire gérant ce dernier**. Une fois la manipulation effectuée, un temps de propagation de **48 heures** maximum est nécessaire afin que le changement soit pleinement effectif.

> [!primary]
>
> Pour rappel, vérifiez bien, avant de changer les **serveurs DNS** déclarés auprès de votre nom de domaine, que la configuration de la nouvelle zone DNS correspond bien à vos attentes.
>

## Aller plus loin

[Éditer une zone DNS OVHcloud](/pages/web/domains/dns_zone_edit)

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](https://partner.ovhcloud.com/fr/directory/).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](https://www.ovhcloud.com/fr/support-levels/).

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.