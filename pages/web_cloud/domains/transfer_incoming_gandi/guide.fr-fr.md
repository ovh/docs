---
title: 'Transférer un nom de domaine de Gandi vers OVHcloud'
excerpt: 'Découvrez différentes informations concernant le transfert d’un nom de domaine Gandi vers OVHcloud'
updated: 2024-03-25
---

## Objectif

Le transfert d'un nom de domaine Gandi nécessite de respecter une démarche spécifique.

**Découvrez comment transférer un nom de domaine Gandi vers OVHcloud**

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
> OVHcloud met à votre disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous revient de ce fait d'en assurer le bon fonctionnement.
>
> Nous mettons à votre disposition ce guide afin de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un [prestataire spécialisé](https://partner.ovhcloud.com/fr/) et/ou de contacter l'éditeur du service si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance. Plus d'informations dans la section [Aller plus loin](#aller-plus-loin) de ce guide.
>

> [!warning]
> Le service Gandimail est lié à votre nom de domaine et arrêtera de fonctionner dès que le domaine sera transféré hors de Gandi. 
> Les boîtes mails et leur contenu associés à ce domaine seront supprimés irrémédiablement 7 jours après. 
> Il est donc important de sauvegarder leur contenu avant de commencer le transfert.

## Prérequis

- Le domaine doit être enregistrés à votre nom depuis au moins 60 jours avant que vous puissiez les transférer.
- Le domaine ne doit pas être bloqué chez votre registrar. 
- Vous devrez obtenir le code d'autorisation qui sera envoyé à l'adresse email du propriétaire. 

## En pratique

### Désactiver le verrouillage du transfert

> [!warning]
> La plupart des extensions proposent une fonction de verrouillage contre le transfert, identifiable par un statut spécial dans le Whois, appelé "transferProhibited".
> Ce verrouillage empêche tout transfert non volontaire.
> Tant que ce verrou est activé, le transfert n'est pas possible.

#### Pour déverrouiller UN (seul) domaine :

- Connectez-vous à votre compte Gandi, puis accédez à la section "NOM DE DOMAINE" dans le menu de gauche.
- Accédez à la page d'administration de votre domaine en cliquant sur son nom.
- Cliquez sur l'onglet "Transfert Sortant". Cela vous dirigera vers la page de gestion du code d'autorisation et du verrou.
- Vous pourrez désactiver le verrou en cliquant sur l'icône de "Cadenas" située à droite de "Désactiver la protection contre le transfert".

#### Pour déverrouiller PLUSIEURS domaine :

- Connectez-vous à votre compte Gandi, puis accédez à la section "NOM DE DOMAINE" dans le menu de gauche.
- Basculez sur la [Vue avancée](https://docs.gandi.net/fr/noms_domaine/operations_courantes/gerer_plusieurs_domaines.html).
- Cochez les cases à gauche des domaines que vous souhaitez déverrouiller.
- Cliquez sur [ ፧ Configurer] pour ouvrir le menu, puis cliquez sur "Verrouillage / Déverrouillage de transfert" dans le menu en bas de page.
- Choisissez l'action de déverrouillage dans le popup qui apparaîtra et validez.

### Obtenir le code d'autorisation

Le code d'autorisation sécurise votre domaine contre tout transfert non autorisé par des tiers. Ce code est requis pour autoriser le transfert de votre domaine vers un nouveau fournisseur.

Voici les étapes pour obtenir le code de transfert d'un domaine sur Gandi :

- Connectez-vous à votre compte Gandi.
- Dans le menu de gauche, sélectionnez « NOM DE DOMAINE ».
- Choisissez le nom de domaine que vous souhaitez transférer.
- Dans le menu du haut, cliquez sur « Transfert sortant ».
- Vous verrez le code de transfert affiché. Vous pouvez soit cliquer sur « Copier » pour le coller dans votre presse-papier, soit sur « Générer un nouveau code » si nécessaire.
  
Une fois le code d'authorisation obtenu, vous pouvez procéder au transfère du nom de domaine en suivant les étapes de notre guide [Transférer son nom de domaine vers OVHcloud](/pages/web_cloud/domains/transfer_incoming_generic_domain).

> [!warning]
> Dans les 24 heures suivants l'initiation du transfert, Gandi vous enverra un e-mail de notification pour vous informer de la sortie du nom de domaine.
> Cet e-mail peut également contenir un lien vous permettant d'accepter le transfert à la place de Gandi, ce qui réduira le délai de réserve.
> La période de réserve correspond à une période de 5 jours (8 jours pour les nom de domaine gérés par l'AFNIC) qui permet d’annuler le transfert.
> Passé ce délai (5 jours « pleins »), le transfert se finalisera automatiquement.
>

## Aller plus loin <a name="go-further"></a>

[Migrer son site Web et ses e-mails vers OVHcloud](/pages/web_cloud/web_hosting/hosting_migrating_to_ovh)

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](https://partner.ovhcloud.com/fr/directory/).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](https://www.ovhcloud.com/fr/support-levels/).

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.
