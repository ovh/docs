---
title: "Modifier les serveurs DNS d'un nom de domaine OVHcloud"
excerpt: 'Apprenez à modifier les serveurs DNS de votre nom de domaine OVHcloud'
updated: 2023-08-24
---

## Objectif

### Comprendre la notion de DNS 

Le sigle DNS, signifiant **D**omain **N**ame **S**ystem, est un ensemble d'éléments (serveurs DNS, zones DNS, etc.) permettant de faire correspondre un nom de domaine avec une adresse IP.

### Les serveurs DNS 

Les **serveurs DNS** contiennent des fichiers de configurations DNS pour des noms de domaine, appelés **zones DNS**.

Une zone DNS contient des informations techniques, appelées *enregistrements DNS*. La zone DNS est comme un centre d'aiguillage.

Par exemple, vous pouvez y préciser :

- L'adresse IP (enregistrements DNS de type *A* et *AAAA*) de votre hébergement web pour afficher votre site web avec votre nom de domaine.
- Les serveurs e-mail (enregistrements DNS de type *MX*) vers lesquels votre nom de domaine doit rediriger les e-mails qu'il reçoit. Cela vous permet de les consulter sur votre (vos) adresse(s) e-mail(s) personnalisée(s) avec votre nom de domaine.
- Des informations liées à la sécurité / l'authentification de vos services (hébergement web, serveur web, serveur e-mail, etc.) associés à votre nom de domaine (enregistrements DNS de type *SPF*, *DKIM*, *DMARC*, etc.).

Pour plus d'information sur les zones DNS, consultez notre guide « [Editer une zone DNS OVHcloud](/pages/web/domains/dns_zone_edit) ».

De ce fait, ce sont les **serveurs DNS** qui doivent être déclarés auprès du nom de domaine pour utiliser la zone DNS qu'ils hébergent. 

![DNS](images/dnsserver.png){.thumbnail}

Les **serveurs DNS** fonctionnent généralement par paire :

- Un serveur DNS *principal* qui redirige les flux de requêtes reçus par le nom de domaine vers la zone DNS qu'il héberge pour ce dernier. La zone DNS effectue ainsi la *résolution DNS* pour rediriger les flux vers les bons services (serveurs, site web, e-mails, etc.) associés au nom de domaine.
- Un serveur DNS *secondaire* dit *de secours* qui est utilisé si le serveur *principal* est saturé, indisponible ou répond moins rapidement que le serveur *secondaire*.

Parfois, certains fournisseurs DNS proposent plus de 2 **serveurs DNS** à déclarer auprès de votre nom de domaine. Dans ce cas, renseignez tous les serveurs DNS proposés par votre fournisseur DNS.

**Découvrez comment modifier les serveurs DNS pour votre nom de domaine OVHcloud.**

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/BvrUi26ShzI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Prérequis

- Posséder un [nom de domaine](https://www.ovhcloud.com/fr/domains/) enregistré chez OVHcloud.
- Disposer des autorisations [appropriées pour gérer](/pages/account/customer/managing_contacts){.external} le nom de domaine depuis votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr){.external}.
- Être connecté à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr){.external}.

> [!primary]
>
> Un *bureau d'enregistrements* est une organisation autorisée à vendre des noms de domaines. OVHcloud fait partie de ces *bureaux d'enregistrements*.
>
> Si votre nom de domaine n'est pas enregistré auprès d'OVHcloud, vous devrez modifier les serveurs DNS auprès du *bureau d'enregistrements* où est actuellement enregistré votre nom de domaine.
>

## En pratique

> [!warning]
>
> **Faites attention lorsque vous modifiez les serveurs DNS d’un nom de domaine.** Une erreur de manipulation peut rendre votre site web inaccessible ou empêcher vos adresses de messagerie de recevoir de nouveaux e-mails. Comprendre les conséquences d’une telle modification vous permettra de mieux appréhender le changement que vous allez opérer.
>

Lorsque vous modifiez les serveurs DNS de votre nom de domaine, vous changez sa configuration DNS. La nouvelle configuration DNS remplace l'ancienne et est stockée sur les serveurs DNS nouvellement définis. Techniquement, le nom de domaine utilise ensuite une nouvelle zone DNS.

Toutefois, il est essentiel de noter que :

- Lors d'un changement de serveur DNS (e.g. DNS externe par DNS OVHCloud), le contenu de l'ancienne configuration / zone DNS n'est pas automatiquement répliqué dans la nouvelle. Assurez-vous que votre nouvelle zone DNS contient tous les enregistrements DNS requis pour que les services associés à votre nom de domaine fonctionnent correctement (par exemple, votre site web et vos adresses de messagerie).

- Si vous souhaitez modifier non pas les serveurs DNS mais un ou plusieurs enregistrements de votre configuration / zone DNS actuelle, consultez notre guide : « [Éditer une zone DNS OVHcloud](/pages/web/domains/dns_zone_edit){.external} ».

- Certaines organisations, les registres, qui gèrent les extensions de noms de domaine, ont des exigences particulières concernant les serveurs DNS (quantité de serveurs de noms, valeur des enregistrements, etc.). En cas de doute, vérifiez auprès du registre responsable du domaine.

Assurez-vous que les modifications ne rendront pas votre nom de domaine inaccessible. Si vous n'êtes pas sûr de cela, contactez la personne qui vous demande d'apporter ces modifications.


### Accéder à la gestion des serveurs DNS OVHcloud

Connectez-vous à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr){.external} puis rendez-vous dans la partie `Web Cloud`{.action}. Dans la colonne de gauche, cliquez sur `Noms de domaine`{.action} puis choisissez le nom de domaine concerné. Sélectionnez enfin l'onglet `Serveurs DNS`{.action}.

Le tableau qui s'affiche contient les serveurs DNS actuellement définis par OVHcloud pour votre nom de domaine. Plusieurs serveurs DNS peuvent être répertoriés, chacun possédant sa propre ligne dans le tableau.

> [!primary]
>
> Lorsque vous utilisez les serveurs DNS OVHcloud, les numéros présents dans les noms des serveurs n'ont aucun lien avec le ou les services que vous utilisez. Seule l'option [DNS anycast](https://www.ovhcloud.com/fr/domains/options/) utilise des serveurs DNS spécifiques qui vous sont automatiquement attribués. 

![dnsserver](images/edit-dns-server-ovh-step1.png){.thumbnail}

### Modifier les serveurs DNS

Si vous souhaitez utiliser des serveurs DNS externes, vous devez les substituer aux serveurs DNS OVHcloud et non les additionner à ces derniers.

Cliquez sur `Modifier les serveurs DNS`{.action} à droite.

Dans les formulaires de saisies, **remplacez** les valeurs actuelles des serveurs DNS par les informations relatives aux nouveaux serveurs DNS que vous souhaitez définir. Pour ajouter d'autres serveurs à la liste active, cliquez sur le bouton `+`{.action} située à droite de la dernière ligne du tableau. Une ligne supplémentaire apparaîtra dans le tableau que vous pourrez compléter.

> [!warning]
>
> Veillez à ne pas mélanger un groupe de serveurs DNS avec un autre. 
>
> Par exemple, *dns19.ovh.net* et *ns19.ovh.net* correspondent à un groupe de serveurs DNS OVHcloud, ils vont de paire et sont synchronisés. Si vous y ajoutez des serveurs DNS externes à OVHcloud (ou d'un groupe OVHcloud différent), la résolution DNS se fera de manière aléatoire entre les serveurs DNS OVHcloud et les serveurs DNS externes renseignés.
>
> Chez OVHCloud, les groupes de serveurs DNS sont identifiables à l'aide du numéro présent dans les noms des serveurs. Deux serveurs DNS OVHcloud font partie d'un même groupe de serveurs dès lors qu'ils partagent le même numéro. Par exemple, *dns19.ovh.net* et *ns19.ovh.net*.
>

Une fois que vous avez saisi ces informations, cliquez sur `Appliquer la configuration`{.action}. Les statuts des serveurs DNS seront alors mis à jour dans le tableau et afficheront les nouvelles informations que vous venez de fournir.

![dnsserver](images/edit-dns-server-ovh-step2.png){.thumbnail}

> [!success]
>
> La modification des serveurs DNS associés à un nom de domaine entraine un délai de propagation de **24** à **48** heures maximum pour que celle-ci soit effective.
>

#### Cas particulier : Réinitialiser les serveurs DNS 

Le bouton `Réinitialiser les serveurs DNS`{.action} permet de réinitialiser les serveurs DNS actuels en les remplaçant automatiquement par les serveurs DNS OVHcloud d'origine. Utilisez cette option **uniquement** si vous souhaitez réutiliser les serveurs DNS OVHcloud (et la zone DNS OVHcloud associée à ses serveurs DNS). 

![dnsserver](images/edit-dns-server-ovh-step3.png){.thumbnail}

Une fois les modifications requises effectuées, vous devez attendre qu'elles soient pleinement effectives. Deux périodes successives doivent être prises en compte :

- la modification apportée côté OVHcloud doit être prise en compte par le *registre* qui gère votre extension de nom de domaine (par exemple, le regitre des extensions en *.fr*). Vous pouvez suivre la progression de cette opération dans votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr){.external}.
Pour cela, rendez-vous dans la partie `Web Cloud`{.action}, accédez la section `Noms de domaine`{.action} dans la colonne de gauche puis cliquez sur `Opérations en cours`{.action} ;
- une fois que la modification a été prise en compte par l'organisation qui gère votre extension de nom de domaine, vous devez attendre un maximum de **48 heures** pour que les modifications que vous avez apportées soient entièrement propagées.

## Aller plus loin

[Modification d'une zone DNS OVHcloud](/pages/web/domains/dns_zone_edit){.external}.

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](https://partner.ovhcloud.com/fr/directory/).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](https://www.ovhcloud.com/fr/support-levels/).

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.