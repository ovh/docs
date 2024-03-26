---
title: 'Transférer un nom de domaine de Hostinger vers OVHcloud'
excerpt: 'Découvrez différentes informations concernant le transfert d’un nom de domaine Hostinger vers OVHcloud'
updated: 2024-03-26
---

## Objectif

Le transfert d'un nom de domaine Hostinger nécessite de respecter une démarche spécifique. Dans ce guide, nous vous expliquons étape par étape comment transférer votre nom de domaine de Hostinger vers OVHcloud.

**Découvrez comment transférer un nom de domaine Hostinger vers OVHcloud**

> [!warning]
>
> Si le nom de domaine en cours de modification est actuellement enregistré chez OVHcloud, le transfert entrant de domaine n'est pas la procédure appropriée. Cette procédure s’applique uniquement au changement de nom de domaine enregistré chez un prestataire externe. 
>
> Pour transférer la gestion de votre nom de domaine vers un autre compte client OVHcloud, la méthode adéquate est un **changement de contacts**. La procédure est décrite dans [ce guide](/pages/account_and_service_management/account_information/managing_contacts).
>
> Si vous devez également changer le **propriétaire** du nom de domaine, vous devez le faire **avant** de changer les contacts du nom de domaine. Pour cela, suivez les instructions décrites dans notre documentation sur le [changement de propriétaire des noms de domaine](/pages/web_cloud/domains/trade_domain).
>
> Pour connaître les conditions tarifaires pour le transfert d’un nom de domaine en fonction de son extension, nous vous invitons à prendre connaissance de [ce guide] (/pages/fr-domain-names-transfer-generic-domain?). 

> [!warning]
>
> OVHcloud met à votre disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous revient de ce fait d'en assurer le bon fonctionnement.
>
> Nous mettons à votre disposition ce guide afin de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un [prestataire spécialisé](https://partner.ovhcloud.com/fr/) et/ou de contacter l'éditeur du service si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance. Plus d'informations dans la section [Aller plus loin](#aller-plus-loin) de ce guide.

## Prérequis

- Le nom de domaine est enregistré auprès d'un autre bureau d'enregistrement.
- Le nom de domaine existe depuis plus de 60 jours.
- Le nom de domaine n'a pas été transféré ou n'a pas changé de propriétaire au cours des 60 derniers jours.
- L'état du nom de domaine est « OK » ou « Transférable ».
- Le nom de domaine n'a pas expiré et a une date d'expiration permettant de terminer le processus de transfert dans les temps (recommandé : plus de 60 jours).
- Être en mesure de déverrouiller le nom de domaine.
- Posséder le code de transfert ou être en mesure de le récupérer.
- Être habilité à demander le transfert du nom de domaine.
- Avoir prévenu le propriétaire du nom de domaine et/ou ses administrateurs de la demande de transfert.

## En pratique

**Sommaire**

- Transférer un nom de domaine depuis Hostinger
1. Comment verrouiller ou déverouiller un nom de domaine chez Hostinger pour le transfert vers OVHcloud ?
2. Comment obtenir un code EPP ou Auth pour le transfert d'un nom de domaine chez Hostinger ?
- Initier le transfert de domaine chez OVHcloud
1. Suivre le transfert de domaine après la commande
2. Gérer son nom de domaine avec OVHcloud
- Facteurs à prendre en compte pour un transfert de domaine réussi 
- Aller plus loin

### Transférer un nom de domaine depuis Hostinger 

#### Comment verouiller ou déverouiller un nom de domaine chez Hostinger pour le transfert vers OVHcloud ?

>  [!primary]
>
> Pour des raisons de sécurité, tous les noms de domaine chez Hostinger sont **verrouillés par défaut** pour éviter les transferts non désirés.
> Par conséquent, avant de transférer votre nom de domaine depuis un bureau d'enregistrement, vous devez d'abord le **déverrouiller**.
>
> Le processus de déverouillage peut varier selon le bureau d'enregistrement.

Pour les noms de domaine enregistrés chez Hostinger, vous pouvez gérer le statut de verrouillage de votre nom de domaine en ouvrant la section "Domaines" sur la barre latérale haute, et en sélectionnant le nom de domaine que vous souhaitez transférer. 
Une fenêtre va alors apparaître, faites défiler l'écran pour trouver le bouton 'bascule'{.action} (ou 'Transfer lock'{.action}) dans la séction "Verrouillage du transfert". 
Pour déverouiller votre nom de domaine pour le transfert, il suffit de désactiver le bouton "bascule". 

> [!warning]
>
> **Si le bouton de verrouillage du transfert n'apparaît pas** : certains TLDs exigent que le bouton soit caché.
> Si vous avez un doute sur l'affichage de ce dernier, rapprochez-vous de votre prestataire et contactez le service client.

> [!warning]
> 
> **Si vous n'arrivez pas à déverouiller votre nom de domaine** : cela signifie que vous disposez d'un nom de domaine qui a été enregistré ou transféré récemment.
> En effet, les noms de domaines de peuvent être déverouillés qu'après **60 jours** à compter de l'enregistrement ou du transfert.
> Si néanmoins vous n'êtes pas concernés par un transfert ou un enregistrement récent et que vous n'arrivez toujours pas à déverouiller votre nom de domaine, veuillez contacter le service client de votre prestataire.

#### Comment obtenir un code EPP ou Auth pour le transfert d'un nom de domaine chez Hostinger ? 

Si vous souhaitez **transférer** votre domaine de Hostinger vers une autre société (dans ce cas OVHcloud), le nouveau bureau d'enregistrement peut demander un code d'autorisation (code "EPP" ou "Auth") pour vérifier que vous êtes bien le propriétaire de l'enregistrement du nom de domaine.
Pour vous familiariser avec le changement de propriétaire d'un nom de domaine, nous vous invitons à consulter ce [guide](pages/web_cloud/domains/trade_domain).

> [!warning]
>
> Certains TLD ont un processus de transfert spécial. Cela est vrai notamment pour les domaines **.uk** et **.eu**.
>
> Nous vous invitons à prendre connaissance de ces démarches sur la page dédiée de votre prestataire d'origine.

Pour obtenir un code **EPP** ou **Auth** chez Hostinger, dirigez-vous vers l'onglet "Domaines". 
Une page avec tous les noms de domaines va s'afficher. Cliquez sur le domaine concerné pour le transfert en utilisant la flèche à droite '>'{.action}. 
Le code sera affiché dans la zone d'information du domaine en tant que clé secrète. Vous pouvez l'afficher en cliquant sur l'icône en forme d'oeil située à côté du code caché. 

> [!warning]
>
> Si la clé secrète n'est pas affichée, cela signifie généralement que le registre de votre domaine ne permet pas l'affichage direct du code EPP dans le panneau de contrôle.
>
> Pour avoir accès au code, vous devez contacter le service client de votre prestataire qui vous le fournira. 

### Initier le transfert de domaine chez OVHcloud

> [!primary]
> 
> Avant d’initier un transfert de domaine, assurez-vous de disposer d’un plan d’hébergement. Nous vous invitons à vous familiariser avec [guide] (pages/web_cloud/web_hosting/hosting_first_steps_with_web_hosting).

#### Pour le suivi du transfert après la commande : 

Une fois la commande validée, vous recevrez un bon de commande. Le processus de transfert ne démarrera qu'après réception du paiement. Une fois cette opération effectuée, vous pouvez suivre la progression du transfert via [l'espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr){.external}. Pour suivre la progression, cliquez sur `Noms de domaine`{.action}, puis `Opérations en cours`{.action}.

Une fois la commande et le code de transfert validés, le bureau d'enregistrement du nom de domaine actuel (qui n'est toujours pas OVHcloud) recevra une demande de validation.
Pour plus de détails sur cette procédure, suivez les étapes de ce [guide] (pages/web_cloud/domains/transfer-incoming-generic-domain). 

#### Pour gérer son nom de domaine avec OVHcloud : 

Une fois la procédure de transfert terminée, vous pouvez gérer votre nom de domaine à partir de l'[espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr){.external}. Pour ce faire, sélectionnez `Web Cloud`{.action}, cliquez sur `Noms de domaine`{.action}, puis cliquez sur le nom de domaine concerné.

### Facteurs à prendre en compte pour un transfert de domaine réussi 

Avant de transférer un domaine, assurez-vous de remplir les conditions préalables suivantes : 

#### Avoir la pleine propriété du domaine 

Le titulaire est la personne qui a enregistré l’adresse du site web. Pour conserver la propriété, assurez-vous que vos coordonnées, telles que le nom, l’adresse électronique et le numéro de téléphone, sont correctes. 

Ces données sont nécessaires pour que le fournisseur actuel vous envoie un e-mail de confirmation et procède au transfert de nom de domaine. 

#### Le domaine est actif depuis 60 jours ou plus

Dans certains cas, le domaine doit être actif pendant plus de 60 jours avant de pouvoir être transféré vers un autre bureau d’enregistrement.

L’ICANN applique cette règle aux noms de domaine génériques et nouveaux qui utilisent des TLD tels que .com, .net, .photo et .online afin de protéger les titulaires de noms de domaine contre les tentatives de transfert non autorisées.

En revanche, les TLDs de code pays suivent la politique définie par leur registre local.

#### Il n’a pas été transféré au cours des 60 derniers jours

Si vous avez déjà transféré le même nom de domaine, vous devez attendre au moins 60 jours avant de pouvoir le transférer vers un autre fournisseur. Cette mesure s’applique à tous les bureaux d’enregistrement et contribue à prévenir le détournement de domaine, une attaque malveillante au cours de laquelle une partie non autorisée vole une adresse web.

#### Vous avez un code EPP/Auth valide

L’EPP ou Auth-Code est un code secret que le fournisseur de domaine attribue pour identifier le titulaire et empêcher tout accès illégal. Vous devez l’obtenir auprès de Hostinger et le fournir à OVHcloud pour transférer votre nom de domaine.

#### Exigences supplémentaires relatives à Hostinger 

Lorsque vous allez dans la section "Domaines" et que vous cliquez sur le nom de domaine concerné par le transfert : 

- Le domaine doit être **déverouillé** , 
- Et la **protection de la vie privée** doit être désactivée. 


## Aller plus loin <a name="aller-plus-loin"></a>

[Transférer son nom de domaine vers OVHcloud](/pages/web_cloud/domains/transfer_incoming_generic_domain)

[Migration de votre site Web et de vos e-mails vers OVHcloud](/pages/web_cloud/web_hosting/hosting_migrating_to_ovh)

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](https://partner.ovhcloud.com/fr/directory/).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](https://www.ovhcloud.com/fr/support-levels/).

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.
