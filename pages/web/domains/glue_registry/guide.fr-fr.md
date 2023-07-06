---
title: "Personnaliser les serveurs DNS d'un nom de domaine (Glue Registry)"
excerpt: 'Découvrez comment personnaliser les serveurs DNS de votre nom de domaine OVHcloud'
updated: 2023-07-05
---

## Objectif


Les **serveurs DNS** hébergent les configurations DNS des noms de domaine : les *zones DNS*. 

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/BvrUi26ShzI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Ces *zones DNS* se composent d’informations techniques : des *enregistrements DNS*. Dans une utilisation classique, les *enregistrements DNS* permettent de :

- afficher votre site web avec votre nom de domaine à l'aide de l'adresse IP de votre serveur d'hébergement (enregistrements DNS de type *A* et *AAAA*).
- rediriger les e-mails reçus sur votre (vos) adresse(s) e-mail(s) personnalisée(s) avec votre nom de domaine (enregistrements DNS de type *MX*).
- configurer des informations liées à la sécurité / l'authentification de vos services (hébergement web, serveur web, serveur e-mail, etc.)  associés à votre nom de domaine (enregistrements DNS de type *SPF*, *DKIM*, *DMARC*, etc.).

Pour plus d'informations, consultez notre documentation sur les [serveurs DNS OVHcloud](/pages/web/domains/dns_server_general_information).

Selon vos besoins, il est possible personnaliser le nom des serveurs DNS de votre nom de domaine OVHcloud à l'aide du « ***Glue Registry*** ».

**Découvrez comment personnaliser les serveurs DNS de votre nom de domaine OVHcloud.**

## Prérequis

- Disposer d'un nom de domaine enregistré chez OVHcloud.
- Être connecté à l'[espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr){.external}, partie `Web Cloud`{.action}.

## En pratique

> [!primary]
>
> **Personnaliser les serveurs DNS d'un nom de domaine est une manipulation sensible** : effectuer un changement inopportun peut rendre l'accès à votre site web et la réception de nouveaux messages sur vos adresses e-mail indisponibles. 
> Nous vous invitons à suivre précisément les étapes décrites ci-dessous ou de vous faire appel à un [prestataire spécialisé](https://partner.ovhcloud.com/fr/directory/) en cas de doute.
>

### Étape 1 : ajouter les enregistrements « GLUE »

Connectez-vous à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr){.external} puis rendez-vous dans la partie partie `Web Cloud`. Dans la colonne de gauche, cliquez sur `Noms de domaine`{.action} puis choisissez le nom de domaine pour lequel vous souhaitez personnaliser les serveurs DNS. Sur la page qui s'affiche, cliquez l'onglet `GLUE`{.action}.

Sur la page qui apparaît, un tableau affiche les enregistrements « GLUE » actuellement configurés chez OVHcloud pour votre nom de domaine. Afin d'ajouter un nouvel enregistrement « GLUE », cliquez sur le bouton `Ajouter`{.action}.

![glueregistry](images/customize-dns-servers-step1.png){.thumbnail}

Dans la fenêtre qui s'ouvre sur votre écran, complétez les informations demandées :

|Informations|Détail|  
|---|---|
|Nom du hôte|Personnalisez le nom d'hôte que vous souhaitez utiliser en tant que serveur DNS personnalisé.|
|IP(s) de destination|Indiquez la ou les adresses IP auxquelles le nom d'hôte doit être relié. Il s'agit de l'adresse IP du serveur DNS actuellement utilisé par votre nom de domaine. Si celui-ci utilise les serveurs DNS d'OVHcloud et que vous n'en connaissez pas l'adresse IP correspondante, utilisez notre outil « [Dig](https://www.ovh.com/fr/support/outils/dig_domain.pl){.external} » afin de la récupérer. Elle apparaîtra dans la partie `ANSWER SECTION` à côté du « A ».|

![glueregistry](images/customize-dns-servers-step2.png){.thumbnail}

Dans l'image ci-dessus, le « GLUE » que l'on souhaite ajouter en exemple à partir du domaine *mydomain.ovh* est **testglue.mydomain.ovh** ayant pour IP de *serveur DNS cible* **0.0.0.0**.

Une fois les informations complétées, cliquez sur le bouton `Ajouter`{.action}, prenez connaissance des informations affichées, puis cliquez sur `Valider`{.action}. Répétez cette manipulation autant de fois que nécessaire, selon le nombre de serveurs DNS utilisés par votre nom de domaine.

### Étape 2 : créer les enregistrements A DNS correspondants

Vous devez à présent créer des enregistrements A pour les noms d'hôtes que vous avez définis lors de l'étape précédente. Chaque enregistrement A doit avoir pour cible l'adresse IP de destination correspondante au nom d'hôte créé précédemment.

Cette manipulation doit être réalisée depuis l’interface du prestataire gérant la configuration DNS de votre nom de domaine. Dès lors, deux possibilités :

- **votre nom de domaine n'utilise pas la configuration DNS d'OVHcloud** : rapprochez-vous du prestataire gérant cette dernière. Une fois la manipulation effectuée, poursuivez vers l'étape suivante ;

- **votre nom de domaine utilise la configuration DNS d'OVHcloud** : positionnez-vous sur l'onglet `Zone DNS`{.action} puis ajoutez une nouvelle entrée A en débutant par cliquer sur `Ajouter une entrée`{.action}. Sélectionnez alors d'ajouter une entrée de type A, puis suivez les étapes jusqu'à finalisation. Si nécessaire, reportez-vous aux instructions décrites dans notre documentation « [Éditer une zone DNS OVHcloud](/pages/web/domains/dns_zone_edit){.external} ».

![glueregistry](images/customize-dns-servers-step3.png){.thumbnail}

### Étape 3 : modifier les serveurs DNS de votre nom de domaine

Il ne vous reste plus qu'à modifier les serveurs DNS de votre nom de domaine. Pour cela, positionnez-vous sur l'onglet `Serveurs DNS`{.action} puis cliquez sur `Modifier les serveurs DNS`{.action}. Remplacez alors vos serveurs DNS actuels par ceux que vous souhaitez utiliser. 

Finalisez les étapes et, si nécessaire, reportez-vous aux instructions décrites dans notre documentation « [Modifier les serveurs DNS d’un nom de domaine OVHcloud](/pages/web/domains/dns_server_general_information){.external} ».

Une fois les serveurs DNS modifiés, patientez le temps que cette action soit prise en compte. Un temps de propagation de 48 heures maximum est en effet nécessaire.

![glueregistry](images/customize-dns-servers-step4.png){.thumbnail}

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.