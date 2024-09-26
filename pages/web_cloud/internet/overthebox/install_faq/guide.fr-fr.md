---
title: 'FAQ OverTheBox'
excerpt: 'Foire aux questions sur la solution OverTheBox'
updated: 2024-09-26
---

## FAQ OverTheBox

### Où puis-trouver des documentations techniques à propos d'OverTheBox ?

Vous pouvez trouver des guides sur [ce lien](/products/web-cloud-internet-overthebox){.external}

### Quels sont les opérateurs compatibles avec OverTheBox ?

Vous pouvez agréger n'importe quel type de connexion (xDSL, Fibre, Câble, 3G/4G) de n'importe quel opérateur. Il est d'ailleurs intéressant d'avoir plusieurs technologies et plusieurs opérateurs afin de garantir la redondance.

### Pourquoi, sur les OverTheBox Intel et IT, n'y a-t-il qu'un port RJ45 ?

L'OverTheBox est un équipement réseau qui se branche sur votre réseau local comme un ordinateur. Vous pouvez constituer votre réseau local en branchant les modems entre eux, en cascade ou sur un switch.

### Dois-je avoir un réseau spécifique pour utiliser OverTheBox ?

Tous les réseaux informatiques (même les plus basiques) sont compatibles avec le système OverTheBox. Il est donc possible d'utiliser vos propres réseaux WiFi (suivant votre type d'OverTheBox) ou encore vos boitiers CPL en fonction de la qualité du réseau électrique. Il sera cependant nécessaire de modifier certains paramètres de vos Box comme l'adresse IP ou le DHCP. Ces manipulations sont expliquées dans le guide d'installation suivant : [Comment installer OverTheBox ?](/pages/web_cloud/internet/overthebox/plus_itv2_installation)

### Quel débit maximum pourrai-je avoir ?

Le débit total (après addition de vos connexions) dépend du type d'offre à laquelle vous avez souscrit :

- Service v1 : Le débit ne pourra pas dépasser 250 Mb/s pour le service OTB seul et 130 Mb/s avec le matériel fourni par OVHcloud.
- Service IT : Le débit ne pourra pas dépasser 100 Mb/s.
- Service Plus : Le débit ne pourra pas dépasser 400 Mb/s.
- Service Starter : Le débit ne pourra pas dépasser 500 Mb/s.
- Service Business : Le débit ne pourra pas dépasser 1000 Mb/s.

### Est-ce que mon IP publique va changer ?

Votre adresse IP publique va en effet changer pour une IP fournie par OVHcloud qui va agréger le trafic de vos différents liens. C'est elle aussi qui va permettre d'avoir du fail-over actif afin de ne pas avoir de coupure si vous redémarrez un modem par exemple.

### Est-ce que le WiFi est intégré dans la box OverTheBox ?

Les boitiers OverTheBox ne supportent pas le WiFi.
Pour les OverTheBox Intel et IT v1, vous pouvez sans problème utiliser le WiFi de vos modems ou un point d'accès WiFi dédié.
Pour l'OverThebox Plus ou l'OverTheBox IT v2, les modems sont isolés dans leurs propres VLAN, le WiFi des modems est donc indisponible depuis le réseau LAN de l'OverTheBox. Il est possible de réutiliser le WiFi d'un modem Zyxel fourni avec l'une de nos offres Internet. Consultez à cet effet notre guide [Comment réutiliser le wifi d'un modem Zyxel avec OverTheBox](/pages/web_cloud/internet/internet_access/comment_reutiliser_wifi_zyxel_otb){.external}. Dans les autres cas de figure, il faudra utiliser un point d'accès WiFi dédié. Le WiFi de vos modems reste fonctionnel mais les équipements connectés ne profiteront pas de l'agrégation, ni du tunnel chiffré.

### Est-il possible de choisir le data-centre hébergeant mon service d’agrégation ?

Actuellement il n'est pas possible de choisir le data-centre pour votre service OverTheBox. Votre agrégation sera hébergée dans le data-centre de Strasbourg ou de Gravelines.

### Est ce qu'OverTheBox peut-être utilisé à l'étranger ?

Actuellement, nous ne fournissons pas d'IP publique ou d'hébergement hors France mais il est tout à fait possible d'utiliser OverTheBox sur un réseau étranger (sous réserve de compatibilité des routeurs sur site).

### Puis-je renvoyer le matériel fourni par OVHcloud ?

Ce matériel est garanti 2 ans. Un échange standard est donc possible en cas de défaillance technique. Aussi, vous pouvez bénéficier de 14 jours de rétractation après la souscription si vous avez choisi cette option à la commande.

### Puis-je modifier la configuration de mon réseau via OverTheBox (IP, DHCP etc.) ?

Le système OverTheBox est l'élément central de votre réseau, il est le véritable pilote à la place de vos Box. Vous avez cependant la main complète sur la configuration de ce réseau. Une interface web vous permet de modifier par exemple votre adresse IP, le DHCP ou encore de faire des redirections de ports.

### Est-ce que l'IPv6 est supportée ?

Nous ne fournissons pour l'instant qu'une IPv4 de sortie avec l'agrégation. Nous allons prochainement intégrer le support d'IPv6 à OverTheBox.

### Est-il possible d'installer OverTheBox sur son propre matériel ?

L'image installée sur le boitier OverTheBox est open-source et nous fournissons des images précompilées prêtes à être installées, n'hésitez pas à consulter le guide suivant : [Installer l’image OverTheBox sur votre matériel](/pages/web_cloud/internet/overthebox/advanced_installer_limage_overthebox_sur_votre_materiel){.external}.

### Quel est le délai de livraison de l'OverTheBox ?

Si vous avez commandé le matériel OVHcloud certifié compatible, ce dernier sera expédié sous 24 à 48h ouvrées par le transporteur TNT.

### Comment fonctionne la facturation d'OverTheBox ?

Suivant l'offre souscrite, l'abonnement sera au prix mensuel de 19,99€ HT pour l'offre Starter ou 39,99€ HT pour l'offre Business. Ce montant est prélevé automatiquement via le moyen de paiement enregistré. Ce service est sans engagement de durée. Le matériel OVHcloud certifié compatible est vendu à 349,99€ HT (OverTheBox v3).

### Est-il possible de virtualiser OverTheBox ?

Oui, il est possible de virtualiser OverTheBox. Nous ne proposons pas de support pour cet usage. Il vous faudra pour ceci, suivre la même procédure que l'installation sur un materiel personnel, depuis une machine virtuelle compatible Linux : [Installer l’image OverTheBox sur votre matériel](/pages/web_cloud/internet/overthebox/advanced_installer_limage_overthebox_sur_votre_materiel){.external}

### Est-il possible de réinitialiser son OverTheBox ?

Oui, c'est possible via différentes méthodes expliquées dans ce guide : [Réinitialiser la configuration d'une OverTheBox](/pages/web_cloud/internet/overthebox/config_reset)

### Pourquoi utiliser un lien 4G avec OverTheBox ?

Grâce à un lien 4G, votre **OverTheBox** est capable de tirer parti des réseaux mobiles afin d'améliorer les performances ou la résilience de votre accès internet.
Un lien 4G permet une continuité de service en cas de défaillance sur votre réseau fixe (cuivre ou fibre), en utilisant un autre support technologique pour accéder à Internet.
<br>De plus, les débits offerts par les connexions 4G sont souvent supérieurs aux connexions cuivre. Cela permet d'améliorer significativement votre débit, en particulier le débit montant, grâce à l'agrégation permise par votre service OverTheBox.
Toutefois, les liens sur les réseaux mobiles sont sujet à de plus grande variation de latence, ce qui peut avoir un impact négatif sur certaines applications.

### La carte sim est-elle fournie avec un matériel OTB V3 LTE ?

Non, la carte sim n'est pas fournie. Le boitier est vendu équipé d'un module 4G intégré, la carte SIM ainsi que le forfait mobile associé ne sont pas inclus.

### Quel format de carte SIM dois-je utiliser avec un matériel OTB V3 LTE ?

La carte SIM doit être au format micro (3FF)

### Quel forfait mobile utiliser pour l'utilisation d'un lien 4G avec OverTheBox?

Lors de l'utilisation d'un lien 4G avec l'OverTheBox, vous devez utiliser un forfait incluant des données mobiles. L'OverTheBox agissant comme routeur principal de votre réseau local, la consommation peut être importante, il faut donc plutôt prioriser une enveloppe de données supérieure à 20Go.
Les forfaits mobiles avec de plus petites enveloppes de données sont compatibles, mais des frais ou limitations sont susceptible d'être appliqués par votre opérateur mobile en fonction de ses conditions  d'utilisation.

### Que se passe t'il si je dépasse le quota de Data du forfait attaché à un lien 4G?

Les conditions de votre opérateur mobile s'appliquent, cela peut être facturé en hors-forfait ou une simple réduction de débit. Veuillez consulter les conditions générales de vente de votre forfait pour connaître le type de limitation appliqué en cas de dépassement.

### L'OverTheBox V3 LTE supporte-t-elle le dual SIM ?

Non, le module 4G intégré de l'OverTheBox V3 LTE ne supporte qu'une seule SIM.

### Combien de lien 4G/5G sont supporté par OverTheBox ?

En fonction de votre modèle entre 2 et 3 liens 4G sont supportés en plus des interfaces ethernet.

- L'OverTheBox V3 LTE inclus un module 4G Cat12 intégré, les autres modèles ne supportent pas cette fonctionnalité.
- Les modèles OTB V2c, V2b, V3 et V3 LTE comportent 2 ports USB qui peuvent être transformer en interface 4G/5G à l'aide d'un modem USB ou un téléphone.
- Il est également possible d'ajouter un lien 4G/5G en connectant un routeur compatible sur une des interfaces ethernet de votre OverTheBox.

### Dois-je réinstaller l'OTB V3 LTE si je remplace ma carte SIM par celle d'un autre opérateur?

Non, il n'est pas nécessaire de réinstaller le système. Cependant, il faudra peut être modifier la configuration de l'interface tel que l'APN ou le PIN de la carte SIM tel qu'indiqué dans le guide [Comment configurer un lien 4G sur OverTheBox?](/pages/web_cloud/internet/overthebox/plus_itv2_lte)

## Aller plus loin

N'hésitez pas à échanger avec notre communauté d'utilisateurs sur vos produits Télécom sur notre site [OVHcloud Community](https://community.ovh.com/c/telecom)

Retrouvez plus d'informations sur les offres OverTheBox sur [notre page OverTheBox](https://www.ovhtelecom.fr/overthebox/).
