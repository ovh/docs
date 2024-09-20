---
title: "Changer le propriétaire d’un nom de domaine"
excerpt: "Vous trouverez dans ce guide différentes informations concernant le changement de propriétaire d’un nom de domaine."
updated: 2024-09-04
---

## Objectif

En dehors de la [gestion des contacts](/pages/account_and_service_management/account_information/managing_contacts), l’enregistrement d’un nom de domaine nécessite de renseigner les informations relatives au propriétaire de celui-ci. Dans ce contexte, le **propriétaire** désigne une personne, une société, une organisation ou encore une association détenant les droits sur ce nom de domaine. **Le changement de propriétaire** fait référence au transfert des droits de propriété d'une personne ou entreprise vers une autre. Les informations du **propriétaire** ont une valeur juridique. Ce processus est notamment obligatoire si une société change de nom.

> [!primary]
> Cette opération ne déplace pas votre nom de domaine vers un autre compte client OVHcloud.
>
> Pour obtenir ce résultat, vous devez [modifier les contacts](/pages/account_and_service_management/account_information/managing_contacts) du nom de domaine.
>
> Si vous devez réaliser un changement de propriétaire ainsi qu'un changement de contact pour le même nom de domaine, il n'y a pas d'ordre particulier à respecter. Néanmoins, c'est le contact administrateur qui est en mesure de lancer ces opérations. Ces deux changements se font, par conséquent, dans l'espace client du contact administrateur du nom de domaine.
>
> En effet, les informations relatives au propriétaire d'un nom de domaine n'ont qu'une valeur administrative et sont totalement indépendantes des informations pouvant être associées à un identifiant client OVHcloud. Par conséquent, un particulier ou une organisation (société, association, etc.) uniquement déclaré en tant que propriétaire d'un nom de domaine n'a donc pas d'accès à l'espace client OVHcloud.
>

**Découvrez comment changer le propriétaire d'un nom de domaine**

## Prérequis

- Être connecté à votre [espace client OVHcloud](/links/manager){.external}
- Disposer d'un nom de domaine enregistré chez OVHcloud et pour lequel aucune opération (changement de propriétaire, transfert, création) n'est en cours. Si une opération a été finalisée récemment sur votre nom de domaine, un délai d'au moins 60 jours calendaires est nécessaire avant de réaliser une nouvelle opération.
- Être le [contact administrateur](/pages/account_and_service_management/account_information/managing_contacts) du nom de domaine concerné.
- Disposer de l'accord du propriétaire actuel du nom de domaine pour effectuer le changement de propriétaire.

## En pratique

> [!warning]
>
> Les instructions suivantes décrivent le moyen le plus courant de modifier le propriétaire d'un nom de domaine. Elles sont valides pour la plupart des domaines de niveau supérieur, communément appelés **T**op **L**evel **D**omain (**TLD**). 
>Les **TLD** désignent la fin de votre nom de domaine, comme par exemple le *.com*, *.net*, *.fr*, etc.
>
> Les règles spécifiques des processus concernant les noms de domaine **TLD** sont uniquement définies par l'autorité d'allocation appropriée, c'est-à-dire le **registre**. Un bureau d'enregistrement (ou registrar) tel que OVHcloud doit respecter ces règles et n'a aucune influence sur les décisions d'enregistrement.
>
> Il existe principalement deux types de **TLD** : Les **ccTLD** et les **gTLD**. Les **ccTLD** correspondent à des **TLD** relatifs à une région ou un pays (*.fr*, *.be*, *.uk*, *.de*, *.paris*, etc.). Les **gTLD** correspondant à des **TLD** plus génériques (*.net*, *.com*, *.info*, *.org*, etc.).
>
> La procédure exacte pour le changement de propriétaire d'un nom de domaine peut donc varier, en particulier pour cetains **ccTLD** (*.lu*, *.hk*, *.ro*, *.be*, *.lt*, *.dk*, *.at*, *.fi*, etc.) et pour quelques **TLD** spéciaux (*.am*, *.fm*, etc.). Pour certains d'entre eux, un changement de propriétaire est une opération payante. Le changement de propriétaire peut également être suspendu pour diverses raisons, par exemple pour un impayé, un abus ou un blocage de la part du registre. 
>
> Nous vous recommandons de consulter les ressources suivantes en cas de doute :
>
> - le site Web du registre **TLD** correspondant ;
> - la [liste des TLD disponibles sur le site OVHcloud](/links/web/domains-tld) ;
> - les mises à jour d'état du nom de domaine. Pour vérifier cela, connectez-vous à votre [espace client OVHcloud](/links/manager), puis rendez-vous dans la partie `Web Cloud`{.action}. Dans la colonne de gauche, cliquez sur `Noms de domaine`{.action}, puis sur  `Opérations en cours`{.action}.

### Étape 1 : sélectionner le domaine

Connectez-vous à votre [espace client OVHcloud](/links/manager), dans la section `Web Cloud`{.action}. Cliquez sur `Noms de Domaine`{.action}, sélectionnez le nom de domaine générique (gTLD) dont vous souhaitez modifier le propriétaire.

### Étape 2 : lancer la procédure de changement de propriétaire

Dans l'onglet `Informations générales`{.action}, accédez à la section **Abonnement** dans le coin inférieur droit. Cliquez sur `...`{.action} devant **Contacts**, puis cliquez sur `Changer de propriétaire`{.action}.

![changement de propriétaire](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/general-information/change-owner.png){.thumbnail}

> [!warning]
>
> Toute modification apportée au prénom, au nom, à l’organisation, au statut légal et à l’adresse e-mail du propriétaire est considérée comme un changement de propriétaire.
> 
> Si vous modifiez uniquement les détails de propriétaire autres que ceux mentionnés ci-dessus, passez à la section [Mise à jour des informations de propriétaire](#updateownerinformation) ci-dessous.
> 

Un nouvel onglet de votre navigateur s'ouvre avec tous les domaines éligibles au changement de propriétaire. Sélectionnez un nom de domaine dans la liste en cochant la case située à gauche. Cette étape peut également être utilisée pour lancer une opération groupée : il est possible d'initier un changement de propriétaire pour plusieurs noms de domaine à la fois, par exemple pour changer le propriétaire de tous les domaines *.ovh*. Une fois vos choix effectués, cliquez sur `Continuer`{.action}.

![changement de propriétaire](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/general-information/available-domains.png){.thumbnail}

Dans le formulaire des détails du propriétaire, veillez à entrer des informations valides dans tous les champs obligatoires. Soyez vigilant sur les erreurs de saisie et utilisez des [caractères imprimables ASCII](http://facweb.cs.depaul.edu/sjost/it212/documents/ascii-pr.htm) dans la mesure du possible. Veuillez noter que toute information inexacte ou fausse peut entraîner une erreur technique et donc un retard de l'ensemble du processus d'échange. 

Une fois que vous avez confirmé votre demande d'échange, deux e-mails vous seront envoyés pour confirmer ou annuler cette demande :

- un e-mail envoyé au propriétaire actuel;
- un e-mail envoyé au futur propriétaire.

Si l'adresse e-mail n'est pas modifiée dans le cadre du changement de propriétaire, l'adresse e-mail de référence recevra les deux e-mails, mais chacun d'entre eux doivent être confirmés.
<br>Une fois que les deux destinataires ont confirmé la demande par e-mail, le changement de propriétaire du nom de domaine prendra effet.

> [!warning]
>
> - La procédure doit-être validée par les deux parties dans les 14 jours qui suivent la demande. **Passé ce délai, la procédure est annulée**.
> 
> - Si la modification est refusée par l'une des deux parties, la demande est annulée.
>
> - Si l'adresse e-mail de l'actuel propriétaire est obsolète ou inaccessible, vous pouvez, **dans ce cas précis**, contacter directement le support en créant un ticket d'assistance depuis votre [centre d'aide OVHcloud](https://help.ovhcloud.com/csm?id=csm_get_help).
>
> - Si le propriétaire du nom de domaine a été modifié, le nom de domaine ne pourra pas être [transféré vers un autre bureau d'enregistrement](/pages/web_cloud/domains/transfer_outgoing_domain) pendant une période de 60 jours.

### Mise à jour des informations de propriétaire <a name="updateownerinformation"></a>

Si vous devez mettre à jour certaines informations secondaires telles que le numéro de téléphone, l'adresse, etc., vous n'avez pas besoin de lancer une procédure commerciale. Ces informations peuvent être modifiées directement dans l'[espace client OVHcloud](/links/manager).

Dans la section **Abonnement** de l'onglet `Informations générales`{.action}, cliquez sur `...`{.action} devant **Contacts**, puis cliquez sur `Actualiser les informations du propriétaire`{.action}.

![changement de propriétaire](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/general-information/refresh-holder-information.png){.thumbnail}

Pour cette opération, vous n'avez pas besoin de confirmer les modifications par e-mail.

## Aller plus loin

[Gérer les contacts de ses services](/pages/account_and_service_management/account_information/managing_contacts)

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](/links/partner).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](/links/support).

Échangez avec notre [communauté d'utilisateurs](/links/community).