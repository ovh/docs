---
title: FAQ VoIP OVHcloud
slug: faq-voip
section: FAQ
order: 1
---

**Dernière mise à jour le 11/06/2021** 

## Objectif

Retrouvez ici les questions les plus fréquemment posées sur les services VoIP OVHcloud

### Quelle est la différence entre une ligne SIP et un numéro « alias » ? <a name="ligne-ou-numero"></a>

Une ligne SIP et un numéro alias sont deux services de téléphonie distincts. Bien que complémentaires, ils n'ont pas la même fonction.

Une ligne SIP est une ligne téléphonique utilisant le protocope SIP (*Session Initation Protocol*). Elle est enregistrée sur un seul téléphone SIP, qui peut être [fourni sous caution par OVHcloud](https://www.ovhtelecom.fr/telephonie/comparatif-des-telephones.xml), ou sur un logiciel de type « *softphone* » (OVHcloud n'édite pas de softphone).
<br>La ligne SIP est liée à un [forfait VoIP](https://www.ovhtelecom.fr/telephonie/voip/) facturé mensuellement. Il convient généralement d'avoir **une ligne SIP par personne devant disposer d'une ligne téléphonique directe** dans votre entreprise.

Un [numéro](https://www.ovhtelecom.fr/telephonie/numeros/), souvent appelé « numéro alias », ne peut pas être enregistré sur un téléphone. Suivant votre besoin, il peut rediriger les appels vers **une ou plusieurs** lignes SIP ou peut servir à héberger une [conférence téléphonique OVHcloud](../conference/).
<br>Un numéro alias peut être [acheté chez OVHcloud](https://www.ovhtelecom.fr/telephonie/numeros/) ou « porté », via la [portabilité de numéro](../demander-la-portabilite-de-mon-numero/), depuis un autre opérateur téléphonique.

Dans une entreprise, le schéma classique est d'avoir, au minimum, un numéro alias principal, facile à mémoriser pour la clientèle, qui redirige les appels vers les lignes SIP directes des employés.

* Un numéro alias peut rediriger les appels vers une seule ligne, via une [redirection d'appels](../creer-redirection-avec-presentation/). Cela peut vous permettre, par exemple, de masquer le numéro direct de la ligne SIP.
* Un numéro alias peut aussi faire sonner **en même temps** plusieurs lignes via une configuration de type « [File d'appels](../les-files-d-appels/) ».
* Vous pouvez également, sur un numéro alias, appliquer une configuration de type « [SVI](../svi-serveur-vocal-interactif/) » afin de proposer à vos appelants des choix de touches pour joindre indépendamment chaque service de votre entreprise.
* Vous pouvez même envisager de combiner ces fonctionnalités en utilisant la configuration « [Contact Center Solution](../contact-center-solution/) ».

Pour déterminer quelle configuration de numéro alias est la plus adaptée à votre entreprise, consultez notre guide « [Choisir et appliquer une configuration pour un numéro](../quelle-configuration-est-adaptee-a-mes-besoins/) ».
<br> Un guide par configuration est également disponible dans la [rubrique « Numéros ou alias » de nos guides](../).

### Comment utiliser mon répondeur ?

Pour consulter le répondeur d'une ligne téléphonique OVHcloud, le plus simple est de composer le « 123 » depuis cette ligne. Si vous souhaitez des informations complémentaires, nous vous invitons à consulter le guide [Configurer et consulter le répondeur de sa ligne](../configurer-consulter-repondeur-ligne-ovh/).

#### Trucs et astuces

Le répondeur de votre ligne téléphonique est également consultable depuis votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr), rubrique `Télécom` > `Téléphonie`. Sélectionnez la ligne souhaitée puis cliquez sur `Répondeur`{.action}.

### Comment configurer un renvoi d'appel ?

Pour effectuer le renvoi d'appels de votre ligne téléphonique, deux solutions s'offrent à vous : 

- Composez  * 21 * (NUMÉRO)# sur le clavier de votre téléphone pour activer le renvoi vers le numéro de votre choix et #21# pour désactiver ce renvoi.
- Depuis votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr), au sein de la rubrique `Télécom` > `Téléphonie`, sélectionnez la ligne téléphonique souhaitée puis cliquez sur `Gestion des appels`{.action} et enfin sur `Renvoi d'appel`{.action}.

#### Trucs et astuces

Si vous souhaitez réaliser des renvois d'appels spécifiques, adaptés à vos différents usages, nous vous invitons à consulter notre guide pour [activer ou désactiver des services depuis le téléphone](../activer-desactiver-services-depuis-telephone/).

### Comment associer un autre numéro à ma ligne téléphonique ?

Cette opération consiste à effectuer une demande de numéro alias. Pour ce faire, connectez-vous sur votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr), sélectionnez la rubrique `Télécom` puis cliquez sur `Commander`{.action} situé en haut à gauche.

#### Trucs et astuces

Vous avez la possibilité de commander jusqu'à 100 numéros pour 1€ HT/mois/numéro.

### Comment suivre ma demande de portabilité ?

Vous pouvez retrouver le suivi de votre demande de portabilité en vous rendant sur votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr), dans l'univers `Télécom`. Rendez-vous ensuite sur `Téléphonie` puis sélectionnez le groupe de facturation sur lequel a été demandée la portabilité.

Vous retrouverez alors, dans l'onglet `Tableau de bord`, un lien vous permettant de « consulter vos portabilités en cours ».

### Pourquoi ai-je reçu un sms m'indiquant une erreur sur ma portabilité ?

Lorsque vous réalisez une demande de portabilité et que nous ne sommes pas capable de la traiter, nous vous informons de la situation par SMS. En complément, vous recevez également un e-mail vous précisant la raison de cette impossibilité ainsi que la procédure à suivre.

#### Trucs et astuces

L'ensemble des e-mails envoyés par OVHcloud sont accessibles depuis votre espace client. Pour cela, connectez-vous à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr) et cliquez à droite sur `E-mails de service`{.action}. 

### Comment configurer mes numéro alias ?

Il existe plusieurs configurations pouvant être appliquées à vos numéros alias, vous pouvez retrouver celles-ci sur le guide [Choisir et appliquer une configuration pour un numéro](../quelle-configuration-est-adaptee-a-mes-besoins/).

### Comment supprimer la redirection de mon numéro alias vers ma ligne ?

Pour supprimer la redirection d'un numéro alias vers votre ligne téléphonique, connectez-vous tout d'abord à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr). Sélectionnez l'onglet `Télécom` puis `Téléphonie`. Choisissez alors le groupe de facturation puis le numéro concerné. Pour finir, vous pouvez cliquer sur `Supprimer la configuration`{.action}. 

#### Trucs et astuces

Vous pouvez également modifier la configuration du numéro en cliquant sur `Changer de configuration`{.action}. Vous pouvez retrouver de plus amples informations en suivant le guide [Choisir et appliquer une configuration pour un numéro](../quelle-configuration-est-adaptee-a-mes-besoins/).

### Comment enregistrer mes appels ?

La fonctionnalité d'enregistrement des appels nécessite de réaliser au préalable une configuration sur le numéro de téléphone concerné. Pour cela, connectez-vous à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr). Sélectionnez l'onglet `Télécom` puis `Téléphonie`. Choisissez alors le groupe de facturation puis le numéro concerné. Cliquez sur `Configuration du numéro`{.action}. Votre numéro doit être configuré en « Contact Center Solution ». 

#### Trucs et astuces

Si vous souhaitez des informations complémentaires, nous vous invitons à consulter le guide suivant : [Configurer un Contact Center Solution](../contact-center-solution/).

### Pourquoi l'enregistrement de mes appels dysfonctionne ?

Ce dysfonctionnement peut provenir d'une mauvaise configuration. Pour le vérifier, connectez-vous à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr). Sélectionnez l'onglet `Télécom` puis `Téléphonie`. Choisissez alors le numéro configuré en « Contact Center Solution ». Au sein de cette configuration, cliquez sur le menu « Consulter les enregistrements ». Vérifiez que la case « Enregistrement des appels » est bien cochée. Retrouvez plus de détails dans le guide [Configurer un Contact Center Solution](../contact-center-solution/#consulter-les-enregistrements).

#### Trucs et astuces

Si vous rencontrez une erreur lors de la consultation d'un enregistrement, n'hésitez pas à essayer de consulter celui-ci depuis un autre navigateur internet.

### Que faire si mon téléphone ne sonne plus ?

Si vous rencontrez un dysfonctionnement sur votre téléphone, commencez par le débrancher puis le rebrancher. Si le phénomène persiste, nous vous invitons à réaliser quelques vérifications en suivant les instructions de « Dépannage Plug & Phone », disponibles depuis votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr).

Pour cela, connectez-vous à l'aide de vos identifiants et dirigez-vous vers la rubrique `Télécom` puis `Téléphonie`. Sélectionnez votre groupe de facturation puis votre ligne SIP. Cliquez sur l'onglet `Assistance`{.action} puis sur `Dépannage Plug & Phone`{.action}.
<br>Vous trouverez plus de détails dans le guide [Dépanner son téléphone Plug and Phone](https://docs.ovh.com/fr/voip/depannage-telephone-plug-and-phone/).

#### Trucs et astuces

Si vous avez récemment activé la fonctionnalité de renvois d'appels, pensez à vérifier que celle-ci n'est plus active. Pour tout complément, n'hésitez pas à consulter la partie [Comment configurer un renvoi d'appel depuis ma ligne téléphonique ?](./##comment-configurer-un-renvoi-dappel_1)


### Un message d'erreur apparait sur mon téléphone, que faire ?

Pour identifier la cause de cette erreur, nous vous conseillons de réaliser un diagnostic de votre téléphone. Pour cela, connectez-vous à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr), sélectionnez la rubrique `Télécom` puis `Téléphonie` et cliquez sur la ligne SIP concernée. Cliquez sur l'onglet `Assistance`{.action} puis sur `Dépannage Plug & Phone`{.action}.

#### Trucs et astuces

Avant de lancer un diagnostic de votre téléphone, nous vous invitons à éteindre puis rallumer votre téléphone. Cette simple opération peut résoudre le défaut.

### Pourquoi mon numéro de téléphone abrégé dysfonctionne ?

Ce dysfonctionnement peut provenir d'une mauvaise configuration. Pour le vérifier, connectez-vous tout d'abord à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr), sélectionnez l'onglet `Télécom` puis `Téléphonie` à gauche et sélectionnez votre groupe de facturation. Cliquez ensuite sur `Numéro abrégés`{.action} et vérifiez que la ligne concernée figure bien dans le tableau qui s'affiche à l'écran. Si cela n'est pas le cas, cliquez sur le bouton `Actions`{.action} pour ajouter un numéro abrégé dédié à cette ligne. 

#### Trucs et astuces

Il est recommandé de mettre en place des numéros abrégés à 4 chiffres. Si le numéro est composé uniquement de 3 chiffres, l'appelant attendra quelques secondes avant d'être mis en relation.

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.
