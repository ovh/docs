---
title: 'Transférer un nom de domaine Ionos vers OVHcloud'
excerpt: 'Découvrez différentes informations concernant le transfert d’un nom de domaine Ionos vers OVHcloud'
updated: 2024-03-25
---

## Objectif

Le transfert d'un nom de domaine Ionos nécessite de respecter une démarche spécifique.

**Découvrez comment transférer un nom de domaine Ionos vers OVHcloud**

> [!warning]
> Le *bureau d'enregistrement* d'un nom de domaine représente l'organisation/fournisseur agréé auprès duquel le nom de domaine est enregistré/souscrit par un particulier, une association ou une organisation. C'est auprès de ce même *bureau d'enregistrement* que vous renouvelez la souscription de votre nom de domaine (généralement une fois par an).
>
> Si OVHcloud est déjà le *bureau d'enregistrement* de votre nom de domaine **avant** de démarrer la procédure qui va suivre, le *transfert entrant de domaine* n'est pas la procédure appropriée. La procédure de *transfert entrant de domaine* s’applique **uniquement** aux noms de domaine enregistrés dans un autre *bureau d'enregistrement* qu'OVHcloud.
>
> Pour transférer la gestion de votre nom de domaine vers un autre compte client OVHcloud, la méthode adéquate est un **changement de contacts**. La procédure est décrite dans [ce guide](/pages/account_and_service_management/account_information/managing_contacts).
> Si vous devez également changer le **propriétaire** du nom de domaine, vous devez le faire **avant** de changer les contacts du nom de domaine. Pour cela, suivez les instructions décrites dans notre documentation sur le [changement de propriétaire des noms de domaine](/pages/web_cloud/domains/trade_domain).
>
>
>
>

> [!warning]
>
> OVHcloud met à votre disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous revient de ce fait d'en assurer le bon fonctionnement.
>
> Nous mettons à votre disposition ce guide afin de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un [prestataire spécialisé](https://partner.ovhcloud.com/fr/) et/ou de contacter l'éditeur du service si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance. Plus d'informations dans la section [Aller plus loin](#aller-plus-loin) de ce guide.
>

## Prérequis

- Le domaine doit être enregistrés à votre nom depuis au moins 60 jours avant que vous puissiez les transférer.
- Le domaine ne doit pas être bloqué chez votre registrar. 
- Vous devrez obtenir le code d'autorisation qui sera envoyé à l'adresse email du propriétaire. 

## En pratique

### Désactiver l'enregistrement privé

Pour confirmer si l'enregistrement privé est activé pour votre domaine, veuillez accéder à la section **Domaines** sur la page [Confidentialité & données de contact]([https://www.nominet.uk/whois/](https://login.ionos.fr/?redirect_url=https%3A%2F%2Fmy.ionos.fr%2Fstart-with-domain%2Fprivacy%3Futm_source%3Dhelpcenter%26utm_medium%3Dknowledge%26utm_campaign%3D218%26utm_term%3Dprivacy%26utm_content%3Ddeeplink%26skipIntcpts%3Dtrue)){.external}. Choisissez votre domaine, puis désactivez l'option d'enregistrement privé. Si cette option ne figure pas sur la page, aucune action est requise et cela signifie que la désactivation de l'enregistrement privé n'est pas disponible pour votre domaine.

### Désactiver le verrouillage du transfert

> [!warning]
>Par mesure de sécurité, les domaines avec une extension générique (par exemple .com, .net ou .org) sont automatiquement verrouillés par 
>défaut et ne peuvent pas être transférés. Avant d'initier un transfert de domaine, vous devez désactiver ce verrouillage de transfert.


Pour vérifier si le verrouillage de transfert est activé pour votre nom de domaine, rendez-vous sur la page `Transfert & renouvellement`{.action}, puis accédez à la section `Domaines`{.action}. Sélectionnez ensuite votre nom de domaine et désactivez l'option de verrouillage de transfert de domaine en utilisant le curseur.

### Obtenir le code d'autorisation

Le code d'autorisation protège votre nom de domaine contre tout transfert non autorisé par des tiers. Ce code est requis pour autoriser le transfert de votre nom de domaine vers un nouveau fournisseur.

Pour trouver le code d'autorisation de votre nom de domaine, rendez-vous sur la page « [Transfert & renouvellement`(https://login.ionos.fr/?redirect_url=https%3A%2F%2Fmy.ionos.fr%2Fstart-with-domain%2Ftransfer%3Futm_source%3Dhelpcenter%26utm_medium%3Dknowledge%26utm_campaign%3D218%26utm_term%3Dtransfer%26utm_content%3Ddeeplink%26skipIntcpts%3Dtrue){.external} », puis accédez à la section `Domaines`{.action}. Sélectionnez votre nom de domaine, puis cliquez sur `Afficher le code d'autorisation`{.action}.

Une fois le code d'autorisation obtenu, vous pouvez procéder au transfert de votre nom de domaine en suivant les étapes de notre guide « [Transférer son nom de domaine vers OVHcloud](/pages/web_cloud/domains/transfer_incoming_generic_domain) ».

## Aller plus loin <a name="aller-plus-loin"></a>

[Migrer son site Web et ses e-mails vers OVHcloud](/pages/web_cloud/web_hosting/hosting_migrating_to_ovh)

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](https://partner.ovhcloud.com/fr/directory/).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](https://www.ovhcloud.com/fr/support-levels/).

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.
