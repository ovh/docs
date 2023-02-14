---
title: "Serveurs dédiés ESXi - FAQ"
slug: esxi-faq
excerpt: "Retrouvez les questions les plus fréquemment posées sur la vague d'attaques ciblant les serveurs ESXi"
section: 'Sécurité'
order: 4
updated: 2023-02-10
---

**Dernière mise à jour le 10/02/2023**

## Objectif

Suite à un événement majeur survenu sur des serveurs ESXi de version antérieure à la 7.0 U3i le 03 février 2023, une vague d'attaques est actuellement en cours sur ce type de serveurs.
Aucun de nos services managés n’est concerné par cette attaque. Cependant, de nombreux clients utilisent ce système d’exploitation sur leur propre serveur.
Soucieux d’accompagner au mieux nos utilisateurs, nous mettons à leur disposition toutes les informations et recommandations utiles.

Ces attaques sont détectées mondialement et notamment en Europe. Selon nos analyses, les experts de l’écosystème ainsi que les autorités, le malware utiliserait la vulnérabilité CVE-2021-21974 comme vecteur de compromission.
Les enquêtes sont toujours en cours pour confirmer cette hypothèse. Nos équipes techniques travaillent à l’identification détaillée des caractéristiques de l’attaque, tout en se coordonnant avec nos pairs des autres CERT et des équipes de sécurité.

**Retrouvez les questions les plus fréquemment posées sur la vague d'attaques ciblant les serveurs ESXi.**

## FAQ

### Comment savoir si je suis victime du ransomware ?

Renseignez votre IP ou nom de serveur dans un navigateur pour déterminer si un message de rançon vous est alors affiché.

### Je suis une victime du ransomware, comment récupérer mes données ?

Si vous souhaitez tenter de récupérer les données présentes sur votre serveur, vous pouvez vous appuyer sur les étapes de la documentation suivante : [Activer et utiliser le mode rescue - Montage d'un datastore](https://docs.ovh.com/fr/dedicated/ovh-rescue/#montage-dun-datastore).
Cependant, nous ne disposons pas de tous les dispositifs nécessaires pour récupérer l'ensemble de vos données.

L'agence nationale américaine pour la cybersécurité et la sécurité des infrastructures ([CISA](https://www.cisa.gov/uscert/ncas/current-activity/2023/02/07/cisa-releases-esxiargs-ransomware-recovery-script){.external}) a également mis à disposition [un outil](https://github.com/cisagov/ESXiArgs-Recover) pour récupérer les données d'un serveur ESXi ciblé par le ransomware ESXIArgs.<br>
L'utilisation de cet outil nécessite des compétences avancées en administration de système. Nous vous conseillons de ne l'utiliser qu'en connaissance de cause, OVHcloud ne pouvant vous fournir d'assistance sur son utilisation.

En cas de difficultés, nous vous recommandons de faire appel à un [prestataire spécialisé](https://partner.ovhcloud.com/fr/) ou de contacter nos équipes en [créant un ticket d'assistance](https://www.ovh.com/manager/dedicated/#/support/tickets/new) depuis votre espace client OVHcloud.

### OVHcloud dispose-t-il d'une sauvegarde pour restaurer vos données ?

L'offre Serveur Dédié bénéficie en option de l'offre [Backup Storage](https://www.ovhcloud.com/fr/bare-metal/backup-storage/). La sauvegarde n'est cependant pas automatique. Retrouvez plus de détails sur le fonctionnement de cette solution sur notre guide « [Utiliser Backup Storage sur un serveur dédié](https://docs.ovh.com/fr/dedicated/services-backup-storage/) ».

Nos serveurs dédiés sont aussi compatibles avec nos [différentes solutions de sauvegarde](https://www.ovhcloud.com/fr/storage-solutions/).

### Quelle est la responsabilité de OVHcloud ?

Le périmètre affecté par cette attaque ne relève pas de la couche gérée par OVHcloud, les actions correctives que nous pouvons prendre sont donc limitées. OVHcloud est uniquement responsable du serveur dédié lui-même et de sa disponibilité.

Lorsque vous commandez votre serveur dédié, aucun protocole de sécurité n’est implémenté de manière native. Il vous revient donc de le sécuriser. En effet, OVHcloud ne pourra être tenu responsable d’un défaut de sécurisation de votre machine.

### Comment réinstaller et sécuriser mon serveur dédié ESXi ?

1. Sécurisez l'accès à votre serveur dédié via le [Network Firewall](https://docs.ovh.com/fr/dedicated/firewall-network/) ou votre propre système de pare-feu.
2. Installez la version VMware ESXi 7.0 U3c disponible [via votre interface d'administration du serveur dédié](https://docs.ovh.com/fr/dedicated/premiers-pas-serveur-dedie/#installation-ou-reinstallation-de-votre-serveur-dedie)
3. L'impossibilité de vous connecter après avoir installé ESXi 7 provient du système de sécurité de VMWare. Vos règles de pare-feu ne comportent aucune règle bloquante. Il ne sera pas possible de réinitialiser le mot de passe administrateur sous VMware.
4. [Sécurisez votre serveur dédié](https://docs.ovh.com/fr/dedicated/securiser-un-serveur-dedie/)

Voici les bonnes pratiques de sécurité :

- Mettez à jour immédiatement vos systèmes ESXi.
- Désactivez le service OpenSLP sur le serveur ou restreignez l’accès aux seules adresses IP de confiance. Retrouvez plus d'informations sur [la documentation VMware](https://kb.vmware.com/s/article/76372).
- Mettez à jour régulièrement votre solution antivirale.
- Assurez-vous que les accès à vos serveurs ou vos équipements réseaux sont limités, contrôlés et protégés avec des mots de passe robustes.
- Sauvegardez vos données critiques dans des disques externes et des serveurs de backup protégés et isolés d’Internet.
- Mettez en place des solutions de journalisation nécessaires pour contrôler les évènements survenus sur vos serveurs critiques et vos équipements réseaux.
- Mettez en place des packs de sécurité pour la détection des actions malveillantes, des intrusions (IPS / NIDS) et pour le contrôle de la bande passante de trafic réseau.
- Désactivez les ports inutilisés.

### Comment puis-je suivre les mises à jour au sujet du ransomware ESXiArgs ?

Vous pouvez suivre l'évolution de la situation, ainsi que les correctifs à venir, à [cette adresse](https://blog.ovhcloud.com/ransomware-ciblant-vmware-esxi/).
Nous vous conseillons également de suivre les [informations officielles du CERT-FR](https://www.cert.ssi.gouv.fr/alerte/CERTFR-2023-ALE-015/).

### Quels sont les bons réflexes à adopter en cas d’intrusion sur un système d’information ?

Nous vous invitons à suivre les [recommandations du CERT-FR](https://www.cert.ssi.gouv.fr/les-bons-reflexes-en-cas-dintrusion-sur-un-systeme-dinformation/).

### Est-ce qu'il y a un risque d'exfiltration de données ?

Pas à notre connaissance sur cette vague d'attaque.

### Est-ce que l'offre Hosted Private Cloud powered by VMware est concernée par cet incident ?

Nos clients utilisant les solutions [Hosted Private Cloud powered by VMware](https://www.ovhcloud.com/fr/hosted-private-cloud/) ne sont pas concernés par le ransomware. Concrètement, la SSL gateway permet d’éviter cette typologie d’attaque en bloquant l’accès externe à ce port (OpenSLP 427).

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>
