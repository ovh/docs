---
title: 'Transférer un nom de domaine de GoDaddy vers OVHcloud'
excerpt: 'Découvrez différentes informations concernant le transfert d’un nom de domaine GoDaddy vers OVHcloud'
updated: 2024-03-25
---
## Objectif

Le transfert d'un nom de domaine enregistré chez GoDaddy nécessite de respecter une démarche spécifique. Dans ce guide, nous vous expliquons en quelques étapes comment transférer votre nom de domaine de GoDaddy vers OVHcloud. 

**Découvrez comment transférer un nom de domaine de GoDaddy vers OVHcloud**

> [!warning]
> Le *bureau d'enregistrement* d'un nom de domaine représente l'organisation/fournisseur agréé auprès duquel le nom de domaine est enregistré/souscrit par un particulier, une association ou une organisation. C'est auprès de ce même *bureau d'enregistrement* que vous renouvelez la souscription de votre nom de domaine (généralement une fois par an).
>
> Si OVHcloud est déjà le *bureau d'enregistrement* de votre nom de domaine **avant** de démarrer la procédure qui va suivre, le *transfert entrant de domaine* n'est pas la procédure appropriée. La procédure de *transfert entrant de domaine* s’applique **uniquement** aux noms de domaine enregistrés dans un autre *bureau d'enregistrement* qu'OVHcloud.
>
> Pour transférer la gestion de votre nom de domaine vers un autre compte client OVHcloud, la méthode adéquate est un **changement de contacts**. La procédure est décrite dans [ce guide](/pages/account_and_service_management/account_information/managing_contacts).
> Si vous devez également changer le **propriétaire** du nom de domaine, vous devez le faire **avant** de changer les contacts du nom de domaine. Pour cela, suivez les instructions décrites dans notre documentation sur le [changement de propriétaire des noms de domaine](/pages/web_cloud/domains/trade_domain).
>
>

## Prérequis

- Le nom de domaine est enregistré auprès du bureau d'enregistrement GoDaddy.
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




### Etape 1 - Déverrouiller le nom de domaine chez GoDaddy

> [!primary]
>
> La zone DNS active d'un nom de domaine contient la configuration DNS appliquée à votre nom de domaine. C'est elle qui lie votre nom de domaine à vos services tels que vos adresses e-mails ou votre site web.
>
> Si, en complément de votre nom de domaine, vous disposez également d'une zone DNS active pour ce dernier chez votre bureau d'enregistrement actuel, vérifiez auprès d'eux que la zone DNS qu'ils appliquent à votre nom de domaine ne vas pas être supprimée une fois le transfert effectué.
>
> En effet, certains bureaux d'enregistrements suppriment la zone DNS présente chez eux dès que le transfert de votre nom de domaine est terminé.
>
> Si tel est le cas, recréez à l'identique votre zone DNS chez OVHcloud **avant** de démarrer les actions liées au transfert de votre nom de domaine.
>
> Pour cela, consultez les guides suivants :
>
> - [Créer une zone DNS chez OVHcloud](/pages/web_cloud/domains/dns_zone_create)
> - [Éditer une zone DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit)
>
> Vérifiez également qu'ils ne ferment pas de leur côté d'autres services comme, par exemple, les adresses e-mails associées à votre nom de domaine.
>

Le verrouillage d'un nom de domaine le protège contre les tentatives de transfert non autorisées.
GoDaddy active cette protection par défaut. Vous devez donc la désactiver pour transférer votre domaine chez OVHcloud.

1.	Connectez-vous à votre page Portfolio de domaines GoDaddy et cochez la case à côté du domaine.
2.	Choisissez le menu 'Verrouillage'{.action} et sélectionnez 'Désactiver le verrouillage'{.action} pour déverrouiller votre domaine.
3.	Examinez le domaine et cliquez sur 'Continuer'{.action}.
4.	Si vous activez la protection du domaine, vérifiez votre identité.
5.	La notification de Succès apparaîtra pour indiquer que votre domaine est déverrouillé.

### Etape 3 : Obtenir le code d’autorisation 

OVH vous demandera de fournir le code d’autorisation ou "Auth code" avant d’initier la procédure de transfert de domaine. Vous pouvez l’obtenir en ouvrant la page de votre portfolio de domaines GoDaddy. 
1.	Sélectionnez le domaine pour accéder au menu 'Paramètres'{.action} du domaine.
2.	Dans la section 'Paramètres supplémentaires'{.action}, cliquez sur 'Transférer le domaine hors de GoDaddy'{.action}.
3.	Lisez la liste de contrôle des transferts pour plus de détails. Si vous souhaitez transférer un domaine.uk, insérez le tag IPS suivant – YOURSRS-NL – et cliquez sur 'Terminer le transfert'{.action}.
4.	Sélectionnez 'Continuer le transfert'{.action}. Une fois cette opération effectuée, GoDaddy désactivera le paramètre de domaine privacy pour s’assurer que les informations de contact sont transférées au nouveau bureau d’enregistrement.
5.	Pour obtenir votre code EPP, sélectionnez 'Cliquez ici'{.action} pour voir le code d’autorisation et cliquez sur 'Copier dans le presse-papiers'{.action}. Le fournisseur d’hébergement web enverra également le code d’autorisation à l’adresse électronique administrative de votre domaine.
6.	Vérifiez le statut du transfert en allant dans 'Transferts'{.action} puis 'Transferts sortants'{.action}.
7.	Tapez votre nom de domaine dans la barre de recherche, et le résultat apparaîtra dans la colonne 'Vérifier le statut'{.action}.


### Etape 4 : Initier le transfert de domaine chez OVH 

> [!primary]
> 
> Avant d’initier un transfert de domaine, assurez-vous de disposer d’un plan d’hébergement. Nous vous invitons à vous familiariser avec [guide] (pages/web_cloud/web_hosting/hosting_first_steps_with_web_hosting).

#### Pour le suivi du transfert après la commande : 

Une fois la commande validée, vous recevrez un bon de commande. Le processus de transfert ne démarrera qu'après réception du paiement. Une fois cette opération effectuée, vous pouvez suivre la progression du transfert via [l'espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr){.external}. Pour suivre la progression, cliquez sur `Noms de domaine`{.action}, puis `Opérations en cours`{.action}.

Une fois la commande et le code de transfert validés, le bureau d'enregistrement du nom de domaine actuel (qui n'est toujours pas OVHcloud) recevra une demande de validation.

### Facteurs à prendre en compte pour un transfert de domaine réussi

Avant de transférer un domaine, assurez-vous de remplir les conditions préalables suivantes :

#### Avoir la pleine propriété du domaine

Le titulaire est la personne qui a enregistré l’adresse du site web. Pour conserver la propriété, assurez-vous que vos coordonnées, telles que le nom, l’adresse électronique et le numéro de téléphone, sont correctes.

Ces données sont nécessaires pour que le fournisseur actuel vous envoie un e-mail de confirmation et procède au transfert de nom de domaine.

#### Le domaine est actif depuis 60 jours ou plus

Dans certains cas, le domaine doit être actif pendant plus de 60 jours avant de pouvoir être transféré vers un autre bureau d’enregistrement.

L’ICANN applique cette règle aux noms de domaine génériques et nouveaux qui utilisent des TLD tels que .com, .net, .photo et .online afin de protéger les titulaires de noms de domaine contre les tentatives de transfert non autorisées.

En revanche, les TLD de code pays suivent la politique définie par leur registre local.

#### Il n’a pas été transféré au cours des 60 derniers jours

Si vous avez déjà transféré le même nom de domaine, vous devez attendre au moins 60 jours avant de pouvoir le transférer vers un autre fournisseur. Cette mesure s’applique à tous les bureaux d’enregistrement et contribue à prévenir le détournement de domaine, une attaque malveillante au cours de laquelle une partie non autorisée vole une adresse web.

#### Vous avez un code EPP/Auth valide

L’EPP ou Auth-Code est un code secret que le fournisseur de domaine attribue pour identifier le titulaire et empêcher tout accès illégal. Vous devez l’obtenir auprès de GoDaddy et le fournir à OVH pour transférer votre nom de domaine.


## Aller plus loin <a name="aller-plus-loin"></a>

[Transférer son nom de domaine vers OVHcloud](/pages/web_cloud/domains/transfer_incoming_generic_domain)

[Migration de votre site Web et de vos e-mails vers OVHcloud](/pages/web_cloud/web_hosting/hosting_migrating_to_ovh)

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](https://partner.ovhcloud.com/fr/directory/).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](https://www.ovhcloud.com/fr/support-levels/).

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.
