---
title: "Modifier les serveurs DNS d'un nom de domaine OVHcloud"
excerpt: 'Apprenez à modifier les serveurs DNS de votre nom de domaine enregistré chez OVHcloud'
updated: 2024-06-12
---

## Objectif

Le sigle **DNS** (**D**omain **N**ame **S**ystem), est un ensemble d'éléments (serveurs DNS, zones DNS, etc.) permettant de faire correspondre un nom de domaine avec une adresse IP.

Consultez nos guides « [Qu'est ce qu'un serveur DNS ?](/pages/web_cloud/domains/dns_server_general_information) » et « [Qu'est ce qu'une zone DNS ?](/pages/web_cloud/domains/dns_zone_general_information) » pour plus d'informations.

**Découvrez comment modifier les serveurs DNS pour votre nom de domaine OVHcloud.**

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/BvrUi26ShzI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Prérequis

- Posséder un [nom de domaine](/links/web/domains) enregistré chez OVHcloud.
- Disposer des autorisations [appropriées pour gérer](/pages/account_and_service_management/account_information/managing_contacts) le nom de domaine depuis votre [espace client OVHcloud](/links/manager).
- Être connecté à votre [espace client OVHcloud](/links/manager).

> [!primary]
>
> Un **bureau d'enregistrements** est une organisation autorisée à vendre des noms de domaines. OVHcloud fait partie de ces **bureaux d'enregistrements**.
>
> Si votre nom de domaine n'est pas enregistré auprès d'OVHcloud, vous devrez modifier les serveurs DNS auprès du **bureau d'enregistrements** où est actuellement enregistré votre nom de domaine.
>

## En pratique

> [!alert]
>
> **Faites attention lorsque vous modifiez les serveurs DNS d’un nom de domaine.**
>
> Une erreur de manipulation peut rendre votre site web inaccessible ou empêcher vos adresses de messagerie de recevoir de nouveaux e-mails. Comprendre les conséquences d’une telle modification vous permettra de mieux appréhender les changements que vous allez opérer.
>

Lorsque vous modifiez les serveurs DNS de votre nom de domaine, vous changez sa configuration DNS. La nouvelle configuration DNS remplace l'ancienne et est stockée sur les serveurs DNS nouvellement définis. Techniquement, le nom de domaine utilise ensuite une nouvelle zone DNS.

Toutefois, il est essentiel de prendre en compte les points suivants :

- Lors d'un changement de serveur DNS (par exemple, un DNS externe par un DNS OVHCloud), le contenu de l'ancienne configuration / zone DNS n'est pas automatiquement répliqué dans la nouvelle. Assurez-vous que votre nouvelle zone DNS contient tous les enregistrements DNS requis pour que les services associés à votre nom de domaine fonctionnent correctement (par exemple, votre site web et vos adresses de messagerie).
- Si vous ne souhaitez pas modifier les serveurs DNS mais un ou plusieurs enregistrements de votre configuration / zone DNS actuelle, consultez notre guide : « [Éditer une zone DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit) ».
- Certaines organisations, les registres, qui gèrent les extensions de noms de domaine, ont des exigences particulières concernant les serveurs DNS (quantité de serveurs de noms, valeur des enregistrements, etc.). En cas de doute, vérifiez auprès du registre responsable du domaine.

### Accéder à la gestion des serveurs DNS OVHcloud

Connectez-vous à votre [espace client OVHcloud](/links/manager) puis rendez-vous dans la partie `Web Cloud`{.action}. Dans la colonne de gauche, cliquez sur `Noms de domaine`{.action} puis choisissez le nom de domaine concerné. Sélectionnez enfin l'onglet `Serveurs DNS`{.action}.

Le tableau qui s'affiche contient les serveurs DNS actuellement définis par OVHcloud pour votre nom de domaine. Plusieurs serveurs DNS peuvent être répertoriés, chacun possédant sa propre ligne dans le tableau.

> [!primary]
>
> Lorsque vous utilisez les serveurs DNS OVHcloud, les numéros présents dans les noms des serveurs n'ont aucun lien avec le ou les services que vous utilisez. Seule l'option [DNS anycast](/links/web/domains-options) utilise des serveurs DNS spécifiques qui vous sont automatiquement attribués.

![dns-server](images/tab.png){.thumbnail}

### Modifier les serveurs DNS

Si vous souhaitez utiliser des serveurs DNS externes, vous devez remplacer les serveurs DNS OVHcloud par ces serveurs DNS externes, et non pas additionner les deux.

Cliquez sur `Modifier les serveurs DNS`{.action} à droite.

Dans les formulaires de saisie, **remplacez** les valeurs actuelles des serveurs DNS par les informations relatives aux nouveaux serveurs DNS que vous souhaitez définir. Pour ajouter d'autres serveurs à la liste active, cliquez sur le bouton `+`{.action} situé à droite de la dernière ligne du tableau. Une ligne supplémentaire apparaîtra dans le tableau que vous pourrez compléter.

> [!warning]
>
> Veillez à ne pas mélanger un groupe de serveurs DNS avec un autre.
>
> Par exemple, *dns19.ovh.net* et *ns19.ovh.net* correspondent à un groupe de serveurs DNS OVHcloud, ils vont de pair et sont synchronisés. Si vous y ajoutez des serveurs DNS externes à OVHcloud (ou d'un groupe de serveurs DNS OVHcloud différent), la résolution DNS se fera de manière aléatoire entre les serveurs DNS OVHcloud et les serveurs DNS externes renseignés.
>
> Chez OVHCloud, les groupes de serveurs DNS sont identifiables à l'aide du numéro présent dans les noms des serveurs. Deux serveurs DNS OVHcloud font partie d'un même groupe de serveurs dès lors qu'ils partagent le même numéro. Par exemple, *dns19.ovh.net* et *ns19.ovh.net*.
>

Une fois que vous avez saisi ces informations, cliquez sur `Appliquer la configuration`{.action}. Les statuts des serveurs DNS seront alors mis à jour dans le tableau et afficheront les nouvelles informations que vous venez de fournir.

![dns-server](images/edit-dns-servers.png){.thumbnail}

> [!success]
>
> La modification des serveurs DNS associés à un nom de domaine entraine un délai de propagation de **24** à **48** heures maximum pour que celle-ci soit effective.
>

#### Cas particulier : Réinitialiser les serveurs DNS

Le bouton `Réinitialiser les serveurs DNS`{.action} permet de réinitialiser les serveurs DNS actuels en les remplaçant automatiquement par les serveurs DNS OVHcloud d'origine. Utilisez cette option **uniquement** si vous souhaitez réutiliser les serveurs DNS OVHcloud (et la zone DNS OVHcloud associée à ses serveurs DNS).

![dns-server](images/reset-the-dns-servers.png){.thumbnail}

Une fois les modifications requises effectuées, vous devez attendre qu'elles soient pleinement effectives. Deux périodes successives doivent être prises en compte :

- La modification apportée côté OVHcloud doit être prise en compte par le *registre* qui gère votre extension de nom de domaine (par exemple, le regitre des extensions en *.fr*). Vous pouvez suivre la progression de cette opération dans votre [espace client OVHcloud](/links/manager). Pour cela, rendez-vous dans la partie `Web Cloud`{.action}, accédez à la section `Noms de domaine`{.action} dans la colonne de gauche puis cliquez sur `Opérations en cours`{.action}.
- Une fois que la modification a été prise en compte par l'organisation qui gère votre extension de nom de domaine, vous devez attendre un maximum de **48 heures** pour que les modifications que vous avez apportées soient entièrement propagées.

## Aller plus loin

[Qu'est ce qu'un serveur DNS ?](/pages/web_cloud/domains/dns_server_general_information)

[Qu'est ce qu'une zone DNS ?](/pages/web_cloud/domains/dns_zone_general_information)

[Les enregistrements DNS](/pages/web_cloud/domains/dns_zone_records)

[Modification d'une zone DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit).

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](/links/partner).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](/links/support).

Échangez avec notre [communauté d'utilisateurs](/links/community).