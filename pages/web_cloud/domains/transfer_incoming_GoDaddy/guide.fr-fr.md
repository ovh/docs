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

**Sommaire**

-	Comment transférer un domaine de GoDaddy à OVH ? 
1.	Faire pointer le domaine vers les serveurs de noms OVH 
2.	Déverrouiller le domaine chez GoDaddy 
3.	Obtenir le code d’autorisation 
4.	Initier le transfert de domaine chez OVH 
-	Facteurs à prendre en compte pour un transfert de domaine réussi 
-Avoir la pleine propriété du domaine 
-Le domaine est actif depuis 60 jours ou plus
-Il n’a pas été transféré au cours des 6P derniers jours 
-Vous avez un code EPP/Auth valide 
-	Aller plus loin

### Comment transférer un domaine de GoDaddy vers OVH ?

### Etape 1 : Faire pointer le domaine vers les serveurs de noms d’OVH 

Pendant le processus de transfert, les paramètres DNS ne sont pas modifiables. Vous devez donc faire **pointer votre domaine vers OVH** avant de le transférer afin de pouvoir continuer à utiliser les services liés au domaine, tels que les e-mails. Pour cela, nous vous conseillons de consulter ce guide [Transférer son nom de domaine vers OVHcloud] (/pages/web_cloud/domains/transfer_incoming_generic_domain). 

1.	Connectez-vous à votre page Portfolio de domaines GoDaddy et choisissez le domaine en cochant la case correspondante. 
2.	Cliquez sur le menu « Serveurs de noms », sélectionnez « j’utiliserai mes propres serveurs de noms » et insérez les serveurs OVH. 

> [!warning]
>
> **saisie des serveurs DNS pour votre nom de domaine.** Si vous utilisez actuellement votre nom de domaine pour maintenir un site internet ou un service de messagerie en ligne, vous devrez spécifier leurs serveurs DNS afin d'éviter toute interruption de service.
>

3.	Sélectionnez 'Sauvegarder' puis 'Continuer'{.action}
4.	Si vous avez activé la fonction de protection du domaine, vérifiez votre identité en entrant le code envoyé par SMS ou par votre application d’authentification. Il est également possible d’insérer le mot de passe à usage unique envoyé à l’adresse électronique de la personne inscrite.
5.	Vous verrez apparaître une "fenêtre contextuelle de Succès" confirmant les modifications.

Notez qu’il est possible de conserver le domaine auprès du fournisseur d’origine et de le faire pointer uniquement vers OVH. De cette façon, le domaine se connectera à l’endroit où les fichiers de votre site web sont hébergés, même si vous utilisez un autre fournisseur de domaine.

### Etape 2 : Déverrouiller le domaine chez GoDaddy

Il est maintenant temps de déverrouiller votre domaine chez le fournisseur actuel. Un verrou de domaine protège un nom de domaine contre les tentatives de transfert non autorisées.
GoDaddy l’active par défaut, vous devez donc le désactiver pour transférer votre domaine chez OVH :
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
