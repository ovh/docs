---
title: Transférer un nom de domaine vers un autre bureau d'enregistrement
slug: transfert-sortant-dun-nom-de-domaine-generique-ou-geographique
excerpt: Découvrez comment effectuer le transfert d’un nom de domaine OVHcloud vers le bureau d'enregistrement de votre choix
section: Transfert
order: 04
---

**Dernière mise à jour le 23/09/2022**

## Objectif

Un **transfert de domaine** fait référence au déplacement d'un nom de domaine d'un bureau d'enregistrement à un autre. Par exemple, si vous avez commandé un nom de domaine sur notre site Web, OVHcloud est son bureau d'enregistrement actuel. Un transfert de domaine sortant doit être initié par le nouveau bureau d'enregistrement.

Afin d'empêcher les transferts de domaine non autorisés, les noms de domaine sont généralement verrouillés par un statut *clientTransferProhibited*. Cette protection doit être levée dans l'espace client OVHcloud avant de commencer tout transfert.

**Ce guide vous explique comment préparer votre nom de domaine pour un transfert sortant.**

## Prérequis

- Disposer d'un [nom de domaine](https://www.ovhcloud.com/fr/domains/) enregistré chez OVHcloud
- Être habilité à demander le transfert du nom de domaine : le propriétaire et/ou les personnes l'administrant doivent être informés de la demande du transfert.
- Disposer d'un accès à la gestion du nom de domaine concerné depuis votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr){.external}.
- Le nom de domaine doit avoir été créé il y a plus de 61 jours **et** ne doit pas avoir été transféré ou avoir changé de propriétaire durant cette période.

> [!primary]
>
> Si vous êtes le **propriétaire** du domaine mais que sa gestion dans l'espace client OVHcloud est indisponible, que ce soit via votre propre accès ou via le contact administratif du domaine, veuillez consulter [ce guide](../../customer/gestion-des-contacts/#cas-particulier-dun-proprietaire-de-domaine) avant de continuer.
>

## En pratique

> [!warning]
>
> Les instructions suivantes décrivent le moyen le plus courant de transférer un nom de domaine, valide pour la plupart des domaines de premier niveau (top-level domain, ou TLD). Toutefois, les règles spécifiques de procédures propres aux TLD sont uniquement définies par l'autorité appropriée, c'est-à-dire le **registre**. Les bureaux d'enregistrement tels que OVHcloud doivent respecter ces règles et n'ont aucune influence sur les décisions des registres.
>
> La procédure exacte pour les transferts de domaine peut donc varier, en particulier dans le cas de certains TLD de code de pays (ccTLD, tels que .lu, .uk., .hk, .ro) et de quelques TLD spéciaux (.am, .fm, etc...). Les transferts peuvent également être interdits pour diverses raisons, par exemple dans les cas d'un paiement en attente, d'abus ou de verrouillage du registre.
>
> Nous vous recommandons de consulter les ressources suivantes en cas de doute :
>
> - le site Web du registre TLD correspondant;
> - la [liste des TLD disponibles chez OVHcloud](https://www.ovhcloud.com/fr/domains/tld/);
> - [Les explications de l'ICANN sur les codes de statut EPP](https://www.icann.org/resources/pages/epp-status-codes-2014-06-16-en) (pour savoir quels codes de statut s'appliquent actuellement à votre nom de domaine, effectuez une recherche *Whois*, en utilisant de préférence le site Web du registre TLD correspondant);
> - le site Web et l'interface de gestion de votre nouveau bureau d'enregistrement, en particulier pour les questions relatives à un processus de transfert en attente.
>

### Étape 1 : lever la protection contre le transfert du nom de domaine

Connectez-vous à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr) et sélectionnez `Web Cloud`{.action} . Cliquez sur `Noms de domaine`{.action}, puis choisissez le nom de domaine concerné.

Sous l'onglet `Informations générales`{.action}, vous trouverez le curseur `Protection contre le transfert` sous **Securité**. Par défaut, cette protection est `Activée`{.action}.

![protection activée](images/outgoing-transfer-step1.png){.thumbnail}

Cliquez sur le curseur et confirmez, dans la fenêtre qui s'affiche, que vous souhaitez supprimer cette protection. Patientez quelques minutes pour que l'état passe à `Désactivée`{.action}.

![désactivation protection](images/outgoing-transfer-step2.png){.thumbnail}

> [!primary]
>
> Une fois la protection levée, le nom de domaine reste déverrouillé pendant sept jours. Après cette période, la protection sera automatiquement réactivée. Si vous ne demandez pas de transfert de domaine à votre nouveau bureau d'enregistrement pendant cet intervalle, il sera nécessaire de lever à nouveau la protection sur le domaine.
>

### Étape 2 : récupérer le code de transfert

Une fois la protection contre le transfert levée, vous pouvez récupérer le code de transfert de votre nom de domaine. Pour cela, toujours depuis l'onglet `Informations générales`{.action}, cliquez sur `AUTH/INFO`{.action} situé à côté de `Protection contre le transfert`. N'hésitez pas à actualiser la page si nécessaire.

Une fenêtre s'affiche alors et contient votre code AUTH/INFO (également appelé code de transfert, mot de passe de domaine, AUTH-CODE ou EPP-Code).

![outgoingtransfer](images/outgoing-transfer-step3.png){.thumbnail}

Le code sera demandé par votre nouveau bureau d'enregistrement pour terminer le processus de transfert. Vous pouvez vérifier les détails auprès de votre nouveau bureau d'enregistrement.

Plutôt que de taper manuellement le code, nous vous recommandons de copier/coller celui-ci, car certains caractères peuvent être facilement confondus.

> [!warning]
>
> Si le nom de domaine est suspendu ou expiré, il est nécessaire de [créer un ticket d'assistance](https://www.ovh.com/manager/dedicated/#/support/tickets/new) depuis votre espace client OVHcloud.

### Étape 3 : débuter le transfert vers le nouveau bureau d'enregistrement

Une fois les étapes précédentes effectuées, vous pouvez lancer le processus de transfert, généralement en passant une commande. Le transfert peut prendre jusqu'à 10 jours. 

Pour plus d'informations, contactez votre nouveau bureau d'enregistrement.

> [!warning]
>
> Si votre nouveau bureau d'enregistrement réclame un nouveau code de transfert, réactivez la `Protection contre le transfert` pour votre domaine puis désactivez-là de nouveau quelques minutes après. Vous pourrez ainsi récupérer un nouveau code de transfert.
>

## Aller plus loin

[Transfert de nom de domaine .co.uk sortant](https://docs.ovh.com/fr/domains/transfert-sortant-dun-nom-de-domaine-couk/)

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](https://partner.ovhcloud.com/fr/).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](https://www.ovhcloud.com/fr/support-levels/).

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.
