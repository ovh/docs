---
title: "Personnaliser les serveurs DNS d'un nom de domaine (Glue Records)"
excerpt: 'Découvrez comment personnaliser les serveurs DNS de votre nom de domaine OVHcloud'
updated: 2024-06-10
---

## Objectif

Les **serveurs DNS** hébergent les configurations DNS des noms de domaine : les *zones DNS*. 

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/BvrUi26ShzI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Ces *zones DNS* se composent d’informations techniques : des *enregistrements DNS*. Dans une utilisation classique, les *enregistrements DNS* permettent :

- d'afficher votre site web avec votre nom de domaine, à l'aide de l'adresse IP de votre serveur d'hébergement (enregistrements DNS de types *A* et *AAAA*).
- de rediriger les e-mails reçus sur votre (vos) adresse(s) e-mail(s) personnalisée(s) avec votre nom de domaine (enregistrements DNS de type *MX*).
- de configurer des informations liées à la sécurité / l'authentification de vos services (hébergement web, serveur e-mail, etc.)  associés à votre nom de domaine (enregistrements DNS de type *SPF*, *DKIM*, *DMARC*, etc.).

Pour plus d'informations sur ces sujets, consultez nos documentations sur les [serveurs DNS OVHcloud](/pages/web_cloud/domains/dns_server_general_information) et sur [l'édition d'une zone DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit).

Selon vos besoins, il est possible de personnaliser le nom des serveurs DNS de votre nom de domaine OVHcloud à l'aide des « ***Glue Records*** ».

**Découvrez comment personnaliser les serveurs DNS de votre nom de domaine OVHcloud.**

## Prérequis

- Disposer d'un nom de domaine enregistré chez OVHcloud.
- Être connecté à l'[espace client OVHcloud](/links/manager){.external}, partie `Web Cloud`{.action}.

## En pratique

> [!warning]
>
> **Personnaliser les serveurs DNS d'un nom de domaine est une manipulation sensible** : effectuer un changement inopportun peut couper l'accès à votre site web et / ou rendre indisponible la réception de nouveaux messages sur vos adresses e-mail. 
> Nous vous invitons à suivre précisément les étapes décrites ci-dessous ou à faire appel à un [prestataire spécialisé](/links/partner) en cas de doute.
>

### Étape 1 : récupérez les serveurs DNS actuellement utilisés par votre nom de domaine <a name="step1"></a>

Vous pouvez récupérer les serveurs DNS actuellement utilisés par votre nom de domaine à l'aide de l'outil DNS en ligne [Zonemaster](https://zonemaster.net/fr/run-test){.external}.

Pour cela, rendez-vous sur le lien [https://zonemaster.net](https://zonemaster.net/fr/run-test){.external}, saisissez votre nom de domaine sans les *www* (exemple : *domain.tld*) puis cochez le bouton `Options`{.action} situé juste en dessous du formulaire de saisie du nom de domaine.

Dans les options disponibles, cliquez directement sur le bouton `Récupérer les NS depuis la zone parente`{.action}.

Un résultat s'affiche :

![glue-zonemaster](/pages/assets/screens/other/web-tools/zonemaster/nameservers.png){.thumbnail}

Récupérez les *serveurs DNS* et conservez **toutes** leurs adresses IPv4 (sous la forme *X.X.X.X* où les *X* sont compris entre *0* et *255*) et IPv6 (les autres IPs qui ne sont pas des IPv4) associées. Vous en aurez besoin pour la suite de ce guide.

Dans notre exemple illustré ci-dessus, le domaine **domain.tld** utilise actuellement les **serveurs DNS** suivants :

- **dnsX1.ovh.ca** associé à l'IPv4 *203.0.113.0* et l'IPv6 *2001:db8:1:1b00:203:0:113:0* ;
- **dnsX2.ovh.ca** associé à l'IPv4 *203.0.113.1* et l'IPv6 *2001:db8:1:1b00:203:0:113:1*.

Si besoin et pour plus d'informations, consultez notre tutoriel sur l'outil [Zonemaster](/pages/web_cloud/domains/dns_zonemaster)

### Étape 2 : ajouter les enregistrements « GLUE » <a name="step2"></a>

> [!warning]
>
> Les registres des extensions *.eu*, *.it*, *.be* et *.de* ne considèrent pas les enregistrements « GLUE » comme des « objets » mais comme des « attributs ».
>
> Par conséquent, pour ces extensions, passez **directement à l'[étape 3](#step3)** de ce guide sans réaliser l'étape 2.
>

> [!success]
>
> Avant de commencer, sachez que :
>
> - Vous pouvez créer des serveurs DNS personnalisés directement sur le nom de domaine qui va les utiliser. Par exemple, vous pouvez créer les DNS personnalisés *dns1.domain.tld* et *dns2.domain.tld* pour le nom de domaine *domain.tld*.
>
> - Vous pouvez aussi créer des serveurs DNS personnalisés sur un nom de domaine pour les utiliser avec un autre nom de domaine. Par exemple, vous pouvez créer les DNS personnalisés *dns1.domain1.tld* et *dns2.domain1.tld* pour le nom de domaine *domain2.tld*. Vous devrez récupérer les serveurs DNS et leurs IPs associées par rapport au *domain2.tld*.
> De plus, le *domain1.tld* doit être enregistré chez OVHcloud pour mettre en place les « GLUE » records.
>

Connectez-vous à votre [espace client OVHcloud](/links/manager){.external} puis rendez-vous dans la partie `Web Cloud`{.action}. Dans la colonne de gauche, cliquez sur `Noms de domaine`{.action} puis choisissez le nom de domaine que vous utiliserez pour personnaliser les noms des serveurs DNS. 

Sur la nouvelle page, cliquez sur l'onglet `GLUE`{.action}.

Un tableau affiche alors les enregistrements « GLUE » actuellement configurés chez OVHcloud pour votre nom de domaine (s'il y en a). Afin d'ajouter un nouvel enregistrement « GLUE », cliquez sur le bouton `Ajouter`{.action}.

![glueregistry](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/glue/add.png){.thumbnail}

Dans la fenêtre qui s'ouvre sur votre écran, complétez les informations demandées :

|Informations|Détail|  
|---|---|
|Nom du hôte|Personnalisez le nom d'hôte que vous souhaitez utiliser en tant que serveur DNS personnalisé.|
|IP(s) de destination|Indiquez la ou les adresses IP (IPv4 et / ou IPv6) auxquelles le nom d'hôte doit être relié. Il s'agit de la ou des adresses IP du serveur DNS actuellement utilisé par votre nom de domaine. S'il y a plusieurs adresses IP, séparez-lez par des *virgules*.|

![glueregistry](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/glue/add-another-glue-record-step-1.png){.thumbnail}

Dans l'image ci-dessus, tout en reprenant l'exemple de l'[étape 1](#step1), le « GLUE » que l'on souhaite ajouter ici (à partir du nom de domaine *domain.tld*) est **dns1.domain.tld**. 

On indique pour ce « GLUE », comme adresses IP de *serveur DNS cible*, les adresses IP *203.0.113.0* (IPv4) et *2001:db8:1:1b00:203:0:113:0* (IPv6). Ces IPs correspondent à l'un des deux serveurs DNS actuellement utilisés pour *domain.tld* (**dnsX1.ovh.ca**). 

On ajoute ce « GLUE » pour que **dns1.domain.tld** puisse, au final, remplacer le nom de serveur DNS **dnsX1.ovh.ca** actuellement utilisé par le nom de domaine *domain.tld*.

Une fois les informations complétées, cliquez sur le bouton `Ajouter`{.action}, prenez connaissance des informations affichées, puis cliquez sur `Valider`{.action}. Répétez cette manipulation autant de fois que nécessaire, selon le nombre de serveurs DNS utilisés par votre nom de domaine.

Dans notre exemple, vous devrez réitérer l'opération pour créer le « GLUE » **dns2.domain.tld**. Ce dernier remplacera par la suite le serveur DNS **dnsX2.ovh.ca**  actuellement associé aux IPv4 *203.0.113.1* et IPv6 *2001:db8:1:1b00:203:0:113:1*

### Étape 3 : créer les enregistrements DNS de type A et AAAA correspondants aux DNS personnalisés <a name="step3"></a>

Vous devez créer les enregistrements *A* et *AAAA* pour les noms d'hôtes que vous avez définis lors de l'étape précédente. Les enregistrements *A* et *AAAA* doivent avoir pour cible l'adresse IP de destination correspondante au nom d'hôte créé précédemment.

Cette manipulation s'effectue depuis l’interface du prestataire gérant la configuration DNS de votre nom de domaine. Dès lors, deux possibilités :

- **votre nom de domaine n'utilise pas une zone DNS active chez OVHcloud** : rapprochez-vous du prestataire gérant cette dernière. Une fois la manipulation effectuée, poursuivez vers l'étape suivante.
- **votre nom de domaine utilise une zone DNS active chez OVHcloud** : connectez-vous à votre [espace client OVHcloud](/links/manager){.external} puis rendez-vous dans la partie `Web Cloud`{.action}. Dans la colonne de gauche, cliquez sur `Noms de domaine`{.action} puis sélectionnez le nom de domaine que vous avez utilisé pour créer les « GLUE » lors de l'[étape 2](#step2). Positionnez-vous sur l'onglet `Zone DNS`{.action} puis cliquez sur `Ajouter une entrée`{.action}. Sélectionnez l'entrée de type *A* ou *AAAA* en fonction du type d'IP associée que vous souhaitez ajouter. Suivez les étapes en renseignant le *sous-domaine* et l'adresse *IPv4* (A) ou *IPv6* (AAAA) puis poursuivez jusqu'à la validation de l'ajout. Si nécessaire, reportez-vous aux instructions décrites dans notre documentation « [Éditer une zone DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit) ».

![glueregistry](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/add-an-entry-2.png){.thumbnail}

> [!primary]
>
> Dans tous les, cas, un délai de propagation de 4 à 24 heures est nécessaire pour que la modification de la zone DNS soit prise en compte sur l'ensemble du réseau DNS. Nous vous recommandons d'attendre ce délai avant de poursuivre.
>

Si l'on reprend notre exemple précédent, les enregistrements « GLUE » que l'on souhaite ajouter (à partir du domaine *domain.tld*) sont **dns1.domain.tld** et **dns2.domain.tld**. L'objectif est de remplacer les serveurs DNS actuels **dnsX1.ovh.ca** et **dnsX2.ovh.ca**.

De ce fait, on ajoute les enregistrements suivants dans la zone DNS active du nom de domaine *domain.tld* :

 - Un enregistrement DNS de type *A* pour le *sous-domaine* **dns1.domain.tld** vers l'IP *203.0.113.0* (IPv4 du serveur DNS **dnsX1.ovh.ca**) ;
 - Un enregistrement DNS de type *AAAA* pour le *sous-domaine* **dns1.domain.tld** vers l'IP *2001:db8:1:1b00:203:0:113:0* (IPv6 du serveur DNS **dnsX1.ovh.ca**) ;
 - Un enregistrement DNS de type *A* pour le *sous-domaine* **dns2.domain.tld** vers l'IP *203.0.113.1* (IPv4 du serveur DNS **dnsX2.ovh.ca**) ;
 - Un enregistrement DNS de type *AAAA* pour le *sous-domaine* **dns2.domain.tld** vers l'IP *2001:db8:1:1b00:203:0:113:1* (IPv6 du serveur DNS **dnsX2.ovh.ca**).

On patiente le temps de la propagation DNS.

### Étape 4 : modifier les serveurs DNS de votre nom de domaine

Vous devez modifier les serveurs DNS de votre nom de domaine en remplaçant les anciens serveurs DNS par les serveurs DNS personnalisés créés précédemment.

Pour cela, connectez-vous à votre [espace client OVHcloud](/links/manager){.external} puis rendez-vous dans la partie `Web Cloud`{.action}. Dans la colonne de gauche, cliquez sur `Noms de domaine`{.action} puis sélectionnez *le nom de domaine pour lequel vous souhaitez personnaliser les serveurs DNS*.
 
Positionnez-vous sur l'onglet `Serveurs DNS`{.action} puis cliquez sur `Modifier les serveurs DNS`{.action}. Remplacez alors vos serveurs DNS actuels par ceux que vous souhaitez utiliser en tant que serveur DNS personnalisés. 

> [!warning]
>
> Si vos serveurs DNS personnalisés ont été créés avec les extensions *.eu*, *.it*, *.be* ou *.de*, renseignez **obligatoirement** l'adresse IP associée respectivement pour chacun de vos serveurs DNS personnalisés.
>
> Sans cela, les serveurs DNS personnalisés ne seront pas pris en compte correctement et ne fonctionneront donc pas avec votre nom de domaine.
>

Finalisez les étapes et, si nécessaire, reportez-vous aux instructions décrites dans notre documentation « [Modifier les serveurs DNS d’un nom de domaine OVHcloud](/pages/web_cloud/domains/dns_server_edit) ».

> [!primary]
> 
> Si vous avez personnalisé des serveurs DNS sur un nom de domaine pour les utiliser avec un autre nom de domaine qui n'est pas enregistré chez OVHcloud, rapprochez-vous du prestataire où est enregistré votre autre nom de domaine afin de modifier les serveurs DNS.
>

![glueregistry](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-servers/modify-dns-servers.png){.thumbnail}

> [!primary]
>
> Un délai de propagation de 24 à 48 heures est nécessaire pour que le changement des serveurs DNS soit pris en compte sur l'ensemble du réseau DNS. Nous vous recommandons d'attendre ce délai avant de poursuivre.
>

Dans notre exemple de personnalisation des serveurs DNS du nom de domaine *domain.tld*, on remplace le serveur DNS **dnsX1.ovh.ca** par **dns1.domain.tld** et le serveur DNS **dnsX2.ovh.ca** par **dns2.domain.tld** puis on patiente le temps de la propagation DNS.

### Étape 5 : remplacer les enregistrements NS dans la zone DNS active de votre nom de domaine

Pour que la personnalisation des serveurs DNS soit visible sur le réseau DNS (en effectuant un *Whois*, un *dig ns* ou au travers d'un analyseur de configuration DNS), vous devrez remplacer les enregistrements de type *NS* dans la zone DNS active de votre nom de domaine.

Cette manipulation s'effectue depuis l’interface du prestataire gérant la configuration DNS de votre nom de domaine. Dès lors, deux possibilités existent :

- **votre nom de domaine n'utilise pas une zone DNS active chez OVHcloud** : rapprochez-vous du prestataire gérant cette dernière pour effectuer la modification.
- **votre nom de domaine utilise une zone DNS active chez OVHcloud** : connectez-vous à votre [espace client OVHcloud](/links/manager){.external} puis rendez-vous dans la partie `Web Cloud`{.action}. Dans la colonne de gauche, cliquez sur `Noms de domaine`{.action} puis sélectionnez le nom de domaine pour lequel vous avez personnalisé les serveurs DNS. Positionnez-vous sur l'onglet `Zone DNS`{.action} puis cliquez sur `Modifier en mode textuel`{.action}. 

Une fenêtre comprenant votre zone DNS en mode *textuel* apparaît :

![glueregistry](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/change-in-text-format-step-1.png){.thumbnail}

> [!warning]
>
> Pour rappel, effectuer un changement inopportun en mode *textuel* dans votre zone DNS peut couper l'accès à votre site web et / ou rendre indisponible la réception de nouveaux messages sur vos adresses e-mail. 
> Faites appel à un [prestataire spécialisé](/links/partner) en cas de doute.
>

Dans cette fenêtre, remplacez **uniquement dans les enregistrements de type *NS*** les noms des serveurs DNS par vos propres noms de serveurs DNS personnalisés **sans oublier** d'incrémenter de « 1 » la première valeur numérique de la ligne *SOA*. Une fois vos modifications faites, cliquez sur `Suivant`{.action} puis sur `Valider`{.action}.

La modification ne sera pas visible immédiatement dans l'[espace client OVHcloud](/links/manager){.external}. Patientez une vingtaine de minutes puis reconnectez-vous à votre espace client OVHcloud pour observer la bonne prise en compte de vos modifications.

> [!primary]
>
> Un délai de propagation de 4 à 24 heures est nécessaire pour que les changements effectués dans la zone DNS soient pris en compte sur l'ensemble du réseau DNS.
>

Pour mieux comprendre cette dernière étape, reprenons notre exemple avec le nom de domaine *domain.tld* et sa zone DNS en mode « textuel » visible dans l'image ci-dessus.

On y observe les éléments suivants : 

- la première valeur numérique de la ligne *SOA* est la suivante : *2023071700* ;
- il y a deux enregistrements de type *NS* pour le nom de domaine *domain.tld* ;
- les enregistrements de type *NS* ciblent encore les deux serveurs DNS **dnsX1.ovh.ca** et **dnsX2.ovh.ca**.

Pour finaliser la personnalisation des serveurs DNS pour le nom de domaine *domain.tld*, il faut :

- incrémenter de « 1 » la première valeur numérique de la ligne *SOA* : *202307170**1*** (notez que si la première valeur numérique était la suivante :*2023071704*, on incrémenterait toujours de « 1 » et on obtiendrait alors le résultat suivant : *202307170**5*** ) ;
- remplacer la cible **dnsX1.ovh.ca.** par **dns1.domain.tld.** uniquement pour la ligne qui débute par **IN NS** ;
- remplacer la cible **dnsX2.ovh.ca.** par **dns2.domain.tld.** uniquement pour la ligne qui débute par **IN NS**.

Une fois les modifications faites, le résultat de notre exemple sera le suivant :

```bash
$TTL 3600
@	IN SOA dnsX1.ovh.ca. tech.ovh.ca. (2023071701 86400 3600 3600000 300)
                  IN NS     dns1.domain.tld.
                  IN NS     dns2.domain.tld.
```

Pour notre nom de domaine *domain.tld*, les serveurs DNS qui s'afficheront après la prise en compte de la modification et de la propagation DNS seront désormais **dns1.domain.tld.** et **dns2.domain.tld.**.

Si nécessaire, reportez-vous aux instructions décrites dans notre documentation « [Éditer une zone DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit) ».

> [!success]
>
> Dans le cas d'une personnalisation des serveurs DNS directement sur le nom de domaine qui va les utiliser, la zone DNS peut ne pas afficher le nom de domaine dans les cibles des enregistrements de type *NS* mais uniquement le *sous-domaine*.
>
> Par exemple, au lieu d'afficher les enregistrements suivants :
> 
> - domain.tld IN NS dns1.domain.tld.
> - domain.tld IN NS dns2.domain.tld.
>
> la zone DNS peut afficher les enregistrements comme suit :
>
> - domain.tld IN NS dns1
> - domain.tld IN NS dns2
>
> Rassurez-vous, cela équivaut au même résultat et cette configuration fonctionnera parfaitement. Ce phénomène est généré par le fait qu'il s'agit du même nom de domaine de part et d'autre de l'enregistrement *NS*.
>

## Aller plus loin

[Généralités sur les serveurs DNS OVHcloud](/pages/web_cloud/domains/dns_server_general_information)

[Éditer une zone DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit)

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](/links/partner).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](/links/support).

Échangez avec notre [communauté d'utilisateurs](/links/community).