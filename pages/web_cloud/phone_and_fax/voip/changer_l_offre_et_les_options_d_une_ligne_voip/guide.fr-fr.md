---
title: 'Gérer vos services VoIP'
excerpt: "Découvrez comment gérer vos services VoIP depuis l'espace client OVHcloud"
updated: 2024-06-18
---

## Objectif

Afin d'adapter votre téléphonie à votre activité professionnelle, vous pouvez modifier à votre convenance les options de vos lignes VoIP ainsi que les offres souscrites. Vous pouvez également convertir une ligne en numéro alias et inversement.

**Découvrez comment gérer vos services VoIP depuis l'espace client OVHcloud.**

## Prérequis

- Disposer de [services VoIP OVHcloud](/links/telecom/telephonie-voip).
- Être connecté à votre [espace client OVHcloud](/links/manager).

## En pratique

- [Changer d'offre VoIP](#change-offer)
    - [Annuler un changement d'offre VoIP](#cancel-change-offer)
- [Modifier le nombre d'appels simultanés](#simultaneous-calls)
- [Convertir une ligne SIP en numéro alias](#sip-to-alias)
- [Convertir un numéro alias en ligne SIP](#alias-to-sip)
- [Résilier une ligne SIP / Trunk](#cancel-sip)
- [Résilier un numéro alias](#cancel-alias)
- [Résilier une ligne Fax](#cancel-fax)
- [Transférer une ou plusieurs lignes à un autre compte OVHcloud](#contacts)

<a name="change-offer"></a>

### Changer d'offre VoIP

Un changement dans votre activité peut vous amener à vouloir modifier le forfait de votre ligne VoIP, pour le passer en Offre VoIP Entreprise ou ajouter des heures de communication vers les téléphones mobiles. Ce changement peut être effectué depuis votre espace client.

Connectez-vous à votre [espace client OVHcloud](/links/manager), cliquez sur `Télécom`{.action} puis sur `Téléphonie`{.action}. Sélectionnez votre groupe de téléphonie puis la ligne VoIP souhaitée.
Dans l'onglet `Gestion`{.action}, cliquez sur `Changer d'offre`{.action}. L'offre actuelle de votre ligne VoIP vous sera alors présentée. Cliquez sur `Modifier l'offre`{.action} pour accéder aux offres disponibles.

Sélectionnez, dans le menu déroulant des offres disponibles, l'offre de votre choix.<br>
Le cas échéant, vous pouvez choisir d'appliquer cette nouvelle offre à plusieurs de vos lignes VoIP en cliquant sur `Appliquer à plusieurs lignes`{.action}.<br>
Validez enfin votre choix en cliquant sur `Valider`{.action}.

![changement-d-offre-voip](images/changeoffer.gif){.thumbnail}

Le changement d'offre sera effectif lors du prochain renouvellement de la ligne. Le renouvellement est automatique, à chaque début de mois, lors de la facturation de vos services.

Ainsi, un changement d'offre VoIP sollicité entre le 1er et le 31 janvier serait appliqué à partir du 1er février. 

> [!primary]
>
> Une offre VoIP Entreprise ne peut pas évoluer vers une offre VoIP Découverte.
>

<a name="cancel-change-offer"></a>

#### Annuler un changement d'offre VoIP

Le changement d'offre peut être annulé à tout moment, avant son application lors du prochain renouvellement de la ligne. Pour annuler un changement d'offre, sélectionnez votre ligne VoIP dans l'espace-client OVHcloud puis cliquez successivement sur `Gestion`{.action} et sur `Changer d'offre`{.action}. Cliquez enfin sur `Annuler le changement d'offre`{.action}.

![changement-d-offre-voip](images/sip_change_offer_5.png){.thumbnail}

<a name="simultaneous-calls"></a>

### Modifier le nombre d'appels simultanés

Vous pouvez adapter le nombre d'appels simultanés sur une ligne VoIP Entreprise afin, par exemple, de permettre une meilleure gestion de votre standard téléphonique.

> [!primary]
>
> Une ligne VoIP découverte est limitée à 1 seul appel simultané. 
>Si vous souhaitez augmenter le nombre d'appels simultanés sur une ligne VoIP Découverte, il sera nécessaire de la [convertir en ligne VoIP Entreprise](/pages/web_cloud/phone_and_fax/voip/changer_l_offre_et_les_options_d_une_ligne_voip#changer-doffre-voip).
>

Sélectionnez votre ligne VoIP puis l'onglet `Gestion des appels`{.action} (1). Cliquez alors sur `Appels simultanés`{.action} (2).

![appels-simultané](images/simultaneous_calls2022.png){.thumbnail}

Modifiez le nombre d'appels simultanés dans le premier menu déroulant. Chaque appel simultané supplémentaire est facturé 1,00 € HT/mois. Un bon de commande correspondant devra être validé par vos soins.

Prenez connaissance des Conditions Générales de Téléphonie et validez-les en cochant la case de validation. 

Cliquez sur `Générer le bon de commande`{.action} afin de l'afficher. L'option ne sera prise en compte qu'après validation du paiement de ce bon de commande.

![appels-simultané](images/simultaneous_calls-validation.png){.thumbnail}

> [!primary] **Diminution du nombre d'appels simultanés**
>
> Si vous souhaitez diminuer le nombre d'appels simultanés sur une ligne, ce changement ne sera effectif que lors du prochain renouvellement de la ligne. Le renouvellement est automatique, à chaque début de mois, lors de la facturation de vos services. Ainsi, un retrait d'appels simultanés sollicité entre le 1er et le 31 janvier serait appliqué à partir du 1er février.
>

<a name="sip-to-alias"></a>

### Convertir une ligne SIP en numéro alias

Les besoins en téléphonie d'une entreprise peuvent évoluer fréquemment. Il est donc possible de convertir une ligne SIP en numéro alias. Cela permet notamment, une fois la conversion faite, de faire sonner plusieurs lignes lorsque le numéro est appelé.<br>
Pour plus d'informations sur les différences entre une ligne SIP et un numéro alias, consultez [notre FAQ](/pages/web_cloud/phone_and_fax/voip/faq-voip)

> [!success]
>
> **Cas d'usage :**
>
> Une entreprise a commandé une ligne SIP afin d'être contactée par sa clientèle.
> L'entreprise évoluant, le standard doit au final être assuré par plusieurs personnes. Une ligne SIP ne pouvant être partagée sur plusieurs postes, la solution est alors de convertir cette ligne SIP en numéro alias, afin d'y configurer une [file d'appels](/pages/web_cloud/phone_and_fax/voip/les_files_d_appels) ou un [serveur vocal interactif](/pages/web_cloud/phone_and_fax/voip/svi_serveur_vocal_interactif) ou un « [contact center solution](/pages/web_cloud/phone_and_fax/voip/contact-center-solution) ».
> Ainsi, le numéro connu par la clientèle de l'entreprise restera le même et permettra de faire sonner plusieurs nouvelles lignes (celles-ci devant être également commandées).
>

Pour convertir une ligne SIP en numéro alias, sélectionnez la ligne dans votre espace client OVHcloud et, depuis l'onglet `Gestion`{.action}, cliquez sur `Convertir la ligne en numéro`{.action}.

![conversion sip-alias](images/convert-sip-alias.png){.thumbnail}

Prenez connaissance des informations liées à cette conversion et confirmez-la.

Toute demande de conversion sera prise en compte lors de votre prochaine facturation. Jusqu'à cette date, l'annulation d'une conversion restera possible.

Une fois la conversion réalisée, votre ligne ne sera plus opérationnelle et vous ne pourrez plus faire d'appels sortants, car le numéro sera transformé en alias. Prenez connaissances des [configurations possibles sur un numéro alias](/pages/web_cloud/phone_and_fax/voip/quelle_configuration_est_adaptee_a_mes_besoins).

> [!warning]
> 
> Si un téléphone Plug And Phone est attaché à cette ligne, ce dernier ne fonctionnera plus et nous vous proposerons un [retour de matériel (RMA)](/pages/web_cloud/phone_and_fax/voip/deroulement_d_un_rma).
>

<a name="alias-to-sip"></a>

### Convertir un numéro alias en ligne SIP

> [!primary]
>
> Un numéro [porté depuis un autre opérateur de téléphonie](/pages/web_cloud/phone_and_fax/voip/demander_la_portabilite_de_mon_numero) ne peut pas être converti en ligne SIP.

Afin de répondre à tous les besoins en téléphonie, il est également possible de convertir un numéro alias en ligne SIP.

Depuis votre espace client OVHcloud, sélectionnez votre numéro alias. Dans l'onglet `Gestion`{.action}, cliquez sur `Convertir le numéro en ligne`{.action}.

![conversion alias-sip](images/convert-alias-sip.png){.thumbnail}

Vous devez alors:

- prendre connaissance des informations liées à la conversion;
- choisir un forfait VoIP parmi ceux proposés dans le menu déroulant;
- prendre connaisance des conditions des contrats liés et les accepter en cochant la case prévue à cet effet;
- enfin, valider la conversion en cliquant sur `Convertir le numéro`{.action}.

Toute demande de conversion sera prise en compte lors de votre prochaine facturation. Jusqu'à cette date, l'annulation d'une conversion restera possible.

Une fois la conversion effectuée, vous disposerez d'une ligne SIP seule, sans matériel associé. Vous pourrez lui [associer un téléphone Plug & Phone OVHcloud](/pages/web_cloud/phone_and_fax/voip/commander_associer_ou_changer_un_telephone#obtenir-un-telephone-plug-phone-ovhcloud) ou enregistrer la ligne sur votre propre matériel ou logiciel.<br>
Dans ce dernier cas de figure, nous vous invitons de sécuriser votre ligne en suivant les instructions de [ce guide](/pages/web_cloud/phone_and_fax/voip/secure-sip-line).

<a name="cancel-sip"></a>

### Résilier une ligne SIP / Trunk <a name="resilier-sip-trunk"></a>

Pour résilier une ligne **SIP** ou **Trunk** OVHcloud, sélectionnez-la dans votre espace client OVHcloud puis, depuis l'onglet `Gestion`{.action}, cliquez sur `Résiliation de la ligne`{.action}.

![résiliation sip](images/resiliation-sip.png){.thumbnail}

Prenez connaissance des informations fournies, précisez la raison de votre résiliation puis confirmez-la en cliquant sur `Résilier`{.action}.

Toute demande de résiliation sera prise en compte lors de votre prochaine facturation. Jusqu'à cette date, l'annulation d'une résiliation restera possible.

> [!warning]
> 
> Si un téléphone Plug And Phone est attaché à cette ligne, ce dernier ne fonctionnera plus et nous vous proposerons un [retour de matériel (RMA)](/pages/web_cloud/phone_and_fax/voip/deroulement_d_un_rma).
>

<a name="cancel-alias"></a>

### Résilier un numéro alias

Pour résilier un numéro alias, sélectionnez-le dans votre espace client OVHcloud puis, depuis l'onglet `Mon numéro`{.action}, cliquez sur `Résilier mon numéro`{.action}.

![résiliation alias](images/resiliation-alias.png){.thumbnail}

Prenez connaissance des informations fournies, précisez la raison de votre résiliation puis confirmez-la en cliquant sur `Résilier`{.action}.

Toute demande de résiliation sera prise en compte lors de votre prochaine facturation. Jusqu'à cette date, l'annulation d'une résiliation restera possible.

> [!warning]
> 
> Si le numéro fait partie d'un pool de numéros, sa résiliation entraînera la résiliation de l'ensemble du pool.
>

<a name="cancel-fax"></a>

### Résilier une ligne Fax

Pour résilier une ligne Fax OVHcloud, sélectionnez-la dans votre espace client OVHcloud puis, depuis l'onglet `Gestion`{.action}, cliquez sur `Résiliation du fax`{.action}.

![résiliation fax](images/resiliation-fax.png){.thumbnail}

Prenez connaissance des informations fournies, précisez la raison de votre résiliation puis confirmez-la en cliquant sur `Résilier`{.action}.

Toute demande de résiliation sera prise en compte lors de votre prochaine facturation. Jusqu'à cette date, l'annulation d'une résiliation restera possible.

> [!warning]
> 
> Si un équipement de type Plug & Fax est attaché à cette ligne, ce dernier ne fonctionnera plus et nous vous proposerons un [retour de matériel (RMA)](/pages/web_cloud/phone_and_fax/voip/deroulement_d_un_rma).
>

<a name="contacts"></a>

### Transférer une ou plusieurs lignes à un autre compte OVHcloud

Vous pouvez transférer partiellement ou totalement la gestion de vos services VoIP à un autre compte OVHcloud. Ce transfert s'effectue via une « gestion de contacts » sur le groupe de téléphonie qui contient vos services.

Pour plus d'informations sur cette procédure, consultez le guide « [Effectuer un changement de contacts pour vos groupes de téléphonie](/pages/web_cloud/phone_and_fax/voip/effectuer_un_changement_de_contact_pour_les_services_voip) ».

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.