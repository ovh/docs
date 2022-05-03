---
title: 'Changer le propriétaire d’un nom de domaine'
slug: changement-proprietaire-domaine
legacy_guide_number: 1350
excerpt: 'Vous trouverez dans ce guide différentes informations concernant le changement de propriétaire d’un nom de domaine.'
section: 'Changement de propriétaire'
---

**Dernière mise à jour le 04/03/2021**

## Objectif

En dehors de la [gestion des contacts](../../customer/gestion-des-contacts/), l’enregistrement d’un nom de domaine nécessite de renseigner les informations relatives au propriétaire de celui-ci. Le **propriétaire** dans ce contexte concerne une personne ou une société détenant les droits sur ce nom de domaine. **Le changement de propriétaire** fait référence au transfert de droits de propriété d'une personne ou entreprise vers une autre, les informations du **propriétaire** ont une valeur juridique. Par exemple, ce processus est obligatoire si une société change de nom.

> [!primary]
> Cette opération ne déplace pas votre nom de domaine vers un autre compte client OVHcloud.
>
> Pour ce faire, vous devez [modifier les contacts](../../customer/gestion-des-contacts/) du nom de domaine.

**Découvrez comment changer le propriétaire d'un nom de domaine**

## Prérequis

- Être connecté à votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc){.external}
- Disposer d'un nom de domaine enregistré chez OVHcloud.
- Être le [contact administrateur](../../customer/gestion-des-contacts/) du nom de domaine concerné.
- Disposer de l'accord du propriétaire actuel du nom de domaine pour effectuer le changement de propriétaire.

## En pratique

> [!warning]
>
> Les instructions suivantes décrivent le moyen le plus courant de modifier le propriétaire du nom de domaine, valide pour la plupart des domaines de niveau supérieur (TLD). Toutefois, les règles spécifiques des processus concernant les noms de domaine TLD sont uniquement définies par l'autorité d'allocation appropriée, c'est-à-dire le **registre**. Les bureaux d'enregistrement (ou registrar) tels que OVHcloud doivent respecter ces règles et n'ont aucune influence sur les décisions d'enregistrement.
>
> La procédure exacte pour le changement de propriétaire d'un nom de domaine peut donc varier, en particulier dans le cas de certains TLD de code pays (ccTLD, tels que .lu, .hk, .ro, .be, .lt, .dk, .at, .fi, etc.) et de quelques TLD spéciaux (.am, .fm, etc.). Pour certains d'entre eux, un changement de propriétaire est considéré comme une opération payante. Le changement de propriétaire peut également être suspendu pour diverses raisons, par exemple pour un impayé, un abus ou un blocage du registre. 
>
> Nous vous recommandons de consulter les ressources suivantes en cas de doute :
>
> - le site Web du registre TLD correspondant;
> - la [liste des TLD disponibles sur OVHcloud](https://www.ovhcloud.com/fr-ca/domains/tld/);
> - la section `Opérations en cours`{.action} de l'[espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc) pour vérifier les mises à jour d'état du nom de domaine.
>

### Étape 1 : sélectionner le domaine

Connectez-vous à votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc), dans la section `Web Cloud`{.action}. Cliquez sur `Noms de Domaine`{.action}, sélectionnez le nom domaine générique (gTLD) dont vous souhaitez modifier le propriétaire.


### Étape 2 : lancer la procédure de changement de propriétaire

Dans l'onglet `Informations générales`{.action}, accédez à la section **Abonnement** dans le coin inférieur droit. Cliquez sur `...`{.action} devant **Contacts**, puis cliquez sur `Changer de propriétaire`{.action}.

![changement de propriétaire](images/3652-2.png){.thumbnail}

> [!warning]
>
> Toute modification apportée au prénom, au nom, à l’organisation, au statut légal et à l’adresse e-mail du propriétaire est considérée comme un changement de propriétaire.
> 
> Si vous modifiez uniquement les détails de propriétaire autres que ceux mentionnés ci-dessus, passez à la section [Mise à jour des informations de propriétaire](#updateownerinformation) ci-dessous.
> 

Un nouvel onglet de votre navigateur s'ouvre avec tous les domaines éligibles au changement de propriétaire. Sélectionnez un nom de domaine dans la liste en cochant la case située à gauche. Cette étape peut également être utilisée pour lancer une opération groupée : il est possible d'initier un changement de propriétaire pour plusieurs noms de domaine à la fois, par exemple pour changer le propriétaire de tous les domaines *.ovh*. Une fois vos choix effectués, cliquez sur `Continuer`{.action}.

![changement de propriétaire](images/3657.PNG){.thumbnail}

Dans le formulaire des détails du propriétaire, veillez à entrer des informations valides dans tous les champs obligatoires. Soyez vigilant sur les erreurs de saisie et utilisez des [caractères imprimables non-ASCII](http://facweb.cs.depaul.edu/sjost/it212/documents/ascii-pr.htm) dans la mesure du possible. Veuillez noter que toute information inexacte ou fausse peut entraîner une erreur technique et donc un retard de l'ensemble du processus d'échange. 

Une fois que vous avez confirmé votre demande d'échange, deux e-mails vous seront envoyés pour confirmer ou annuler cette demande :

- un e-mail envoyé au propriétaire actuel;
- un e-mail envoyé au futur propriétaire.

Si l'adresse e-mail n'est pas modifiée dans le cadre du changement de propriétaire, l'adresse e-mail de référence recevra les deux e-mails, mais chacun d'entre eux doivent être confirmés.
<br>Une fois que les deux destinataires ont confirmé la demande par e-mail, le changement de propriétaire du nom de domaine prendra effet.

> [!primary]
>
> La procédure doit-être validée par les deux parties dans les 14 jours qui suivent la demande.
> 
> Si la modification est refusée par l'une des deux parties, la demande est annulée.

> [!warning]
>
> Si le propriétaire du nom de domaine a été modifié, le nom de domaine ne pourra pas être [transféré vers un autre bureau d'enregistrement](../transfert-sortant-dun-nom-de-domaine-generique-ou-geographique/) pendant une période de 60 jours. 

### Mise à jour des informations de propriétaire <a name="updateownerinformation"></a>

Si vous devez mettre à jour certaines informations secondaires telles que le numéro de téléphone, l'adresse, etc., vous n'avez pas besoin de lancer une procédure commerciale. Ces informations peuvent être modifiées directement dans l'[espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc).

Dans la section **Abonnement** de l'onglet `Informations générales`{.action}, cliquez sur `...`{.action} devant **Contacts**, puis cliquez sur `Actualiser les informations du propriétaire`{.action}.

![changement de propriétaire](images/3658.png){.thumbnail}

Pour cette opération, vous n'avez pas besoin de confirmer les modifications par e-mail.

## Aller plus loin

[Gérer les contacts de ses services](../../customer/gestion-des-contacts/)

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.
