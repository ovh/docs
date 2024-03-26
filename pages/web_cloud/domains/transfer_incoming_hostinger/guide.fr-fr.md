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
> Le *bureau d'enregistrement* d'un nom de domaine représente l'organisation/fournisseur agréé auprès duquel le nom de domaine est enregistré/souscrit par un particulier, une association ou une organisation. C'est auprès de ce même *bureau d'enregistrement* que vous renouvelez la souscription de votre nom de domaine (généralement une fois par an).
>
> Si OVHcloud est déjà le *bureau d'enregistrement* de votre nom de domaine **avant** de démarrer la procédure qui va suivre, le *transfert entrant de domaine* n'est pas la procédure appropriée. La procédure de *transfert entrant de domaine* s’applique **uniquement** aux noms de domaine enregistrés dans un autre *bureau d'enregistrement* qu'OVHcloud.
>
> Pour transférer la gestion de votre nom de domaine vers un autre compte client OVHcloud, la méthode adéquate est un **changement de contacts**. La procédure est décrite dans [ce guide](/pages/account_and_service_management/account_information/managing_contacts).
> Si vous devez également changer le **propriétaire** du nom de domaine, vous devez le faire **avant** de changer les contacts du nom de domaine. Pour cela, suivez les instructions décrites dans notre documentation sur le [changement de propriétaire des noms de domaine](/pages/web_cloud/domains/trade_domain).
>

## Prérequis

- Le nom de domaine est enregistré auprès du bureau d'enregistrement Hostinger.
- Le nom de domaine existe depuis plus de 60 jours.
- Le nom de domaine n'a pas été transféré ou n'a pas changé de propriétaire au cours des 60 derniers jours.
- L'état du nom de domaine est « OK » ou « Transférable ».
- Le nom de domaine n'a pas expiré et a une date d'expiration permettant de terminer le processus de transfert dans les temps (recommandé : plus de 60 jours).
- Être en mesure de déverrouiller le nom de domaine.
- Posséder le code de transfert ou être en mesure de le récupérer.
- Être habilité à demander le transfert du nom de domaine.
- Avoir prévenu le propriétaire du nom de domaine et/ou ses administrateurs de la demande de transfert.

> [!warning]
>
> OVHcloud met à votre disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous revient de ce fait d'en assurer le bon fonctionnement.
>
> Nous mettons à votre disposition ce guide afin de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un [prestataire spécialisé](https://partner.ovhcloud.com/fr/directory/) et/ou de contacter votre bureau d'enregistrement actuel si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance. Plus d'informations dans la section [Aller plus loin](#go-further) de ce guide.
>

## En pratique

> [!primary]
>
> La zone DNS active d'un nom de domaine contient la configuration DNS appliquée à votre nom de domaine. C'est elle qui lie votre nom de domaine à vos services tels que vos adresses e-mails ou votre site web.
>
> Si, en complément de votre nom de domaine, vous disposez également d'une zone DNS active pour ce dernier chez votre bureau d'enregistrement actuel, vérifiez auprès d'eux que la zone DNS qu'ils appliquent à votre nom de domaine ne vas pas être supprimée une fois le transfert effectué.
>
> En effet, certains bureaux d'enregistrements suppriment la zone DNS présente chez eux dès que le transfert de votre nom de domaine est terminé. Si tel est le cas, recréez à l'identique votre zone DNS chez OVHcloud **avant** de démarrer les actions liées au transfert de votre nom de domaine.
>
> Pour cela, consultez les guides suivants :
> - [Créer une zone DNS chez OVHcloud](/pages/web_cloud/domains/dns_zone_create)
> - [Éditer une zone DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit)
>
> Vérifiez également qu'ils ne ferment pas de leur côté d'autres services comme, par exemple, les adresses e-mails associées à votre nom de domaine.
>

### Déverrouiller le nom de domaine

> [!primary]
>
> Par sécurité, l'ensemble des noms de domaine chez Hostinger sont **verrouillés par défaut** pour éviter les transferts non autorisés.
> Par conséquent, avant de transférer votre nom de domaine depuis un bureau d'enregistrement, vous devez d'abord le **déverrouiller**.
>
> Le processus de déverouillage varie selon le bureau d'enregistrement.
> 

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

### Obtenir le code EPP ou Auth code

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

Une fois le code d'autorisation obtenu, vous pouvez procéder au transfert de votre nom de domaine en suivant les étapes de notre guide « [Transférer son nom de domaine vers OVHcloud](/pages/web_cloud/domains/transfer_incoming_generic_domain) ».

## Aller plus loin <a name="go-further"></a>

[Transférer son nom de domaine vers OVHcloud](/pages/web_cloud/domains/transfer_incoming_generic_domain)

[Migrer son site Web et ses e-mails vers OVHcloud](/pages/web_cloud/web_hosting/hosting_migrating_to_ovh)

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](https://partner.ovhcloud.com/fr/directory/).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](https://www.ovhcloud.com/fr/support-levels/).

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.
