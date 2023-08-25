---
title: 'FAQ OverTheBox'
keywords: 'FAQ OverTheBox'
description: 'FAQ OverTheBox'
updated: 2021-05-17
---


## FAQ OverTheBox

### Où puis-trouver des documentations techniques à propos d'OverTheBox ?

Vous pouvez trouver des guides sur [ce lien](/products/web-cloud-internet-overthebox){.external}

### Quels sont les opérateurs compatibles avec OverTheBox ?

Vous pouvez agréger n'importe quel type de connexion (xDSL, Fibre, Câble, 3G/4G) de n'importe quel opérateur. Il est d'ailleurs intéressant d'avoir plusieurs technologies et plusieurs opérateurs afin de garantir la redondance.

### Pourquoi, sur les OverTheBox Intel et IT, n'y a-t-il qu'un port RJ45 ?

L'OverTheBox est un équipement réseau qui se branche sur votre réseau local comme un ordinateur. Vous pouvez constituer votre réseau local en branchant les modems entre eux, en cascade ou sur un switch.

### Dois-je avoir un réseau spécifique pour utiliser OverTheBox ?

Tous les réseaux informatiques (même les plus basiques) sont compatibles avec le système OverTheBox. Il est donc possible d'utiliser vos propres réseaux WiFi (suivant votre type d'OverTheBox) ou encore vos boitiers CPL en fonction de la qualité du réseau électrique. Il sera cependant nécessaire de modifier certains paramètres de vos Box comme l'adresse IP ou le DHCP. Ces manipulations sont expliquées dans le guide d'installation suivant : [Installation OverTheBox Plus ou IT v2](/pages/web_cloud/internet/overthebox/plus_itv2_installation)

### Quel débit maximum pourrai-je avoir ?

Le débit total (après addition de vos connexions) dépend du type d'offre à laquelle vous avez souscrit :
Service v1 : Le débit ne pourra pas dépasser 250 Mb/s pour le service OTB seul et 130 Mb/s avec le matériel fourni par OVHcloud.
Service IT : Le débit ne pourra pas dépasser 100 Mb/s.
Service Plus : Le débit ne pourra pas dépasser 400 Mb/s.

### Est-ce que mon IP publique va changer ?

Votre adresse IP publique va en effet changer pour une IP fournie par OVHcloud qui va agréger le trafic de vos différents liens. C'est elle aussi qui va permettre d'avoir du fail-over actif afin de ne pas avoir de coupure si vous redémarrez un modem par exemple. Enfin cette IP vous protège sur internet en profitant de la technologie anti-DDoS d'OVHcloud.

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

Le système OverTheBox est l'élément central de votre réseau, il est le véritable pilote à la place de vos Box. Vous avez cependant la main complète sur la configuration de ce réseau. Une interface graphique vous permet de modifier par exemple votre adresse IP, le DHCP ou encore de faire des redirections de ports.

### Est-ce que l'IPv6 est supportée ?

Nous ne fournissons pour l'instant qu'une IPv4 de sortie avec l'agrégation. Nous allons prochainement intégrer le support d'IPv6 à OverTheBox.

### Est-il possible d'installer OverTheBox sur son propre matériel ?

L'image installée sur le boitier OverTheBox est open-source et nous fournissons des images précompilées prêtes à être installées, n'hésitez pas à consulter le guide suivant : [Installer l’image OverTheBox sur votre matériel](/pages/web_cloud/internet/overthebox/advanced_installer_limage_overthebox_sur_votre_materiel){.external}.

### Quel est le délai de livraison de l'OverTheBox ?

Si vous avez commandé le matériel OVHcloud certifié compatible, ce dernier sera expédié sous 24 à 48h ouvrées par le transporteur DHL.

### Comment fonctionne la facturation d'OverTheBox ?

Suivant l'offre souscrite, l'abonnement sera au prix mensuel de 19,99€ jusqu'à 49,99€ HT (offre OverTheBox Serenity). Ce montant est prélevé automatiquement via le moyen de paiement enregistré. Ce service est sans engagement de durée. Le matériel OVHcloud certifié compatible est vendu (hors frais de port) à 149,99€ HT (OverTheBox IT) ou 249,99€ HT (OverTheBox Plus).

### Est-il possible de virtualiser OverTheBox ?

Oui, il est possible de virtualiser OverTheBox. Nous ne proposons pas de support pour cet usage. Il vous faudra pour ceci, suivre la même procédure que l'installation sur un materiel personnel, depuis une machine virtuelle compatible Linux : [Installer l’image OverTheBox sur votre matériel](/pages/web_cloud/internet/overthebox/advanced_installer_limage_overthebox_sur_votre_materiel){.external}

### Est-il possible de réinitialiser son OverTheBox ?

Oui, c'est possible via différentes méthodes expliquées dans ce guide : [Réinitialiser la configuration d'une OverTheBox](/pages/web_cloud/internet/overthebox/config_reset)

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
