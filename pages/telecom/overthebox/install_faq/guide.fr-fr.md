---
title: FAQ OverTheBox
slug: faq-overthebox
keywords: FAQ OverTheBox
description: FAQ OverTheBox
section: FAQ
---


## FAQ OverTheBox

### Ou puis-trouver des documentations techniques à propos d'OverTheBox ?
Vous pouvez trouver des guides sur [https://www.ovhtelecom.fr/overthebox/guides.xml](https://www.ovhtelecom.fr/overthebox/guides.xml){.external}


### Quels sont les opérateurs compatibles avec OverTheBox ?
Vous pouvez agréger n'importe quel type de connexions (xDSL, Fibre, Câble, 3G/4G) de n'importe quel opérateur. Il est d'ailleurs intéressant d'avoir plusieurs technologies et plusieurs opérateurs afin de garantir la redondance.


### Pourquoi n'y a-t-il qu'un port RJ45 ?
Notre OverTheBox est un équipement réseau qui se branche sur votre réseau local comme un ordinateur. Vous pouvez constituer votre réseau local en branchant les modems entre eux, en cascade ou sur un switch.


### Dois-je avoir un réseau spécifique pour utiliser OverTheBox ?
Tous les réseaux informatiques (même les plus basiques) sont compatibles avec le système OverTheBox. Il est donc possible d'utiliser vos propres wifi ou encore vos boitiers CPL en fonction de la qualité du réseau électrique. Il sera cependant nécessaire de modifier certains paramètres de vos Box comme l'adresse IP ou le DHCP. Ces manipulations sont expliquées dans le guide d'installation suivant : [Mes 10 premières minutes avec OverTheBox](../mes_10_premieres_minutes_avec_overthebox/guide.fr-fr.md){.ref}


### Quel débit maximum pourrais-je avoir ?
Le débit total (après addition de vos connexions) ne pourra pas dépasser 250 Mb/s pour le service OTB seul et 130 Mb/s avec le matériel fourni par OVH.


### Est-ce que mon IP publique va changer ?
Votre adresse IP publique va en effet changer pour une IP fournie par OVH qui va agréger le trafic de vos différents liens. C'est elle aussi qui va permettre d'avoir du fail-over actif afin de ne pas avoir de coupure si vous redémarrez un modem par exemple. Enfin cette IP vous protège sur internet en profitant de la technologie anti-DDoS d'OVH.


### Est-ce que le Wifi est intégré dans la box OverTheBox ?
Le Wifi n'est pas inclus dans la OverTheBox. Vous pouvez sans problème utiliser le Wifi de vos modems ou d'un point d'accès Wifi dédié.


### Est-il possible de choisir le data-centre hébergeant mon service d’agrégation ?
Actuellement il n'est pas possible de choisir le data-centre pour votre service OverTheBox. Votre agrégation sera hébergée dans le data-centre de Strasbourg ou de Gravelines.


### Est ce qu'OverTheBox peut-être utilisé à l'étranger ?
Actuellement, nous ne fournissons pas d'IP publique ou d'hébergement hors France mais il est tout à fait possible d'utiliser OverTheBox sur un réseau étranger (sous réserve de compatibilité des routeurs sur site).


### Puis-je renvoyer le matériel fournie par OVH ?
Ce matériel est garanti 2 ans, un échange standard est donc possible en cas de défaillance technique. Aussi vous pouvez bénéficier de 14 jours de rétractation après la souscription si vous avez choisie l'option à la commande.


### Puis-je modifier la configuration de mon réseau via OverTheBox (IP, DHCP etc.) ?
Le système OverTheBox est l'élément central de votre réseau, il est le véritable pilote à la place de vos Box. Vous avez cependant la main complète sur la configuration de ce réseau. Une interface graphique vous permet de modifier par exemple votre adresse IP, le DHCP ou encore de faire des redirections de ports.


### Est-ce que l'IPv6 est supportée ?
Nous ne fournissons pour l'instant qu'une IPv4 de sortie avec l'agrégation. Nous allons prochainement intégrer le support d'IPv6 à OverTheBox.


### Est-il possible d'installer OverTheBox sur son propre matériel ?
L'image installée sur le boitier OverTheBox est open-source et nous fournissons des images précompilées prêtes à être installées, n'hésitez pas à consulter le guide suivant : [Installer l’image OverTheBox sur votre matériel](https://docs.ovh.com/fr/overthebox/installer-limage-overthebox-sur-votre-materiel/){.external} .


### Quel est le délai de livraison de l'OverTheBox ?
Si vous avez commandé le matériel OVH certifié compatible, ce dernier sera expédié sous 24 à 48h ouvrés par le transporteur DHL.


### Comment fonctionne la facturation d'OverTheBox ?
L'abonnement au service est au prix mensuel de 9,99€ HT prélevé automatiquement via le moyen de paiement enregistré. Actuellement seul la carte bancaire ne peut être enregistrée comme moyen de paiement. Ce service est sans engagement de durée Le matériel OVH certifié compatible est vendu à 149,99€ HT (hors frais de port), il vous permet d'obtenir 3 mois d'abonnement gratuit.


### Est-il possible de virtualiser OverTheBox ?
Oui il est possible de virtualiser OverTheBox, nous ne proposons pas de support pour cet usage. Cependant nous vous proposons un guide d'installation d'OverTheBox sur le logiciel de virtualisation VirtualBox : [Tester OverTheBox sur VirtualBox](../advanced/advanced_tester_overthebox_sur_virtualbox/guide.fr-fr.md){.ref} .


### Est-il possible de réinitialiser son OverTheBox ?
Oui c'est possible via différentes méthodes expliquées dans ce guide : [Rétablir la configuration d’usine](../middle_retablir_la_configuration_dusine/guide.fr-fr.md){.ref} .