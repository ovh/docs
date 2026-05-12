---
title: "Transférer un nom de domaine vers un autre bureau d'enregistrement"
excerpt: "Découvrez comment effectuer le transfert d’un nom de domaine OVHcloud vers le bureau d'enregistrement de votre choix"
updated: 2026-03-24
---

## Objectif

Un **transfert de nom de domaine** fait référence au déplacement d'un nom de domaine d'un bureau d'enregistrement à un autre. Par exemple, si vous avez commandé un nom de domaine sur notre site Web, OVHcloud est son bureau d'enregistrement actuel. Un transfert de nom de domaine sortant doit être initié par le nouveau bureau d'enregistrement.

Afin d'empêcher les transferts de noms de domaine non autorisés, les noms de domaine sont généralement verrouillés par un statut *clientTransferProhibited*. Cette protection doit être levée dans l'espace client OVHcloud avant de commencer tout transfert.

**Découvrez comment préparer votre nom de domaine pour un transfert sortant.**

> [!warning]
>
> Si le nom de domaine en question doit rester enregistré chez OVHcloud mais modifié dans ses modalités de gestion ou de titularité, un transfert sortant de domaine n'est pas la procédure appropriée.
>
> Pour transférer la gestion de votre nom de domaine vers un autre compte client OVHcloud, la méthode adéquate est un **changement de contacts**. La procédure est décrite dans [ce guide](/pages/account_and_service_management/account_information/managing_contacts).
>
> Si vous devez également changer le **titulaire** du nom de domaine, vous devez le faire **avant** de changer les contacts du nom de domaine. Pour cela, suivez les instructions décrites dans notre documentation sur le [changement de titulaire des noms de domaine](/pages/web_cloud/domains/trade_domain).
>

## Prérequis

- Disposer d'un [nom de domaine](/links/web/domains) enregistré chez OVHcloud
- Être habilité à demander le transfert du nom de domaine : le titulaire et/ou les personnes l'administrant doivent être informés de la demande du transfert.
- Le nom de domaine doit avoir été créé il y a plus de 61 jours **et** ne doit pas avoir été transféré ou avoir changé de titulaire durant cette période.

<!-- CP-NAV-START:web-domains -->
---

### Accès à l'espace client OVHcloud

- **Lien direct :** [Noms de domaine](/links/control-panel/web-domains)
- **Pour accéder à vos services :** `Web Cloud`{.action} > `Noms de domaine`{.action} > Sélectionnez votre nom de domaine

---
<!-- CP-NAV-END:web-domains -->

> [!primary]
>
> Si vous êtes le **titulaire** du nom de domaine mais que sa gestion dans l'espace client OVHcloud est indisponible, que ce soit via votre propre accès ou via le contact administratif du nom de domaine, veuillez consulter [ce guide](/pages/account_and_service_management/account_information/managing_contacts) avant de continuer.
>

## En pratique

> [!warning]
>
> Les instructions suivantes décrivent le moyen le plus courant de transférer un nom de domaine, valide pour la plupart des noms de domaine de premier niveau (top-level domain, ou TLD). Toutefois, les règles spécifiques de procédures propres aux TLD sont uniquement définies par l'autorité appropriée, c'est-à-dire le **registre**. Les bureaux d'enregistrement tels que OVHcloud doivent respecter ces règles et n'ont aucune influence sur les décisions des registres.
>
> La procédure exacte pour les transferts de nom de domaine peut donc varier, en particulier dans le cas de certains TLD de code de pays (ccTLD, tels que .lu, .uk., .hk, .ro) et de quelques TLD spéciaux (.am, .fm, etc...). Les transferts peuvent également être interdits pour diverses raisons, par exemple dans les cas d'un paiement en attente, d'abus ou de verrouillage du registre.
>
> Nous vous recommandons de consulter les ressources suivantes en cas de doute :
>
> - le site Web du registre TLD correspondant;
> - la [liste des TLD disponibles chez OVHcloud](/links/web/domains-tld);
> - [Les explications de l'ICANN sur les codes de statut EPP](https://www.icann.org/resources/pages/epp-status-codes-2014-06-16-en) (pour savoir quels codes de statut s'appliquent actuellement à votre nom de domaine, effectuez une recherche *Whois*, en utilisant de préférence le site Web du registre TLD correspondant);
> - le site Web et l'interface de gestion de votre nouveau bureau d'enregistrement, en particulier pour les questions relatives à un processus de transfert en attente.
>
> Selon le nouveau bureau d'enregistrement que vous choisissez, le transfert d'un nom de domaine peut être une opération payante. Nous vous invitons à vous renseigner sur ce point avant de poursuivre.
>

### 1 - Lever la protection contre le transfert du nom de domaine

Cliquez sur les onglets ci-dessous pour afficher successivement chacune des **3** étapes.

> [!tabs]
> **Étape 1**
>>
>> Accédez à la page [Noms de domaine](/links/control-panel/web-domains), puis choisissez le nom de domaine concerné.
>>
>> ![Noms de domaine](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-names.png){.thumbnail}
>>
> **Étape 2**
>>
>> Sous l'onglet `Informations générales`{.action}, repérez le curseur `Protection contre le transfert` sous **Sécurité**. Par défaut, cette protection est `Activée`{.action}.
>>
>> > [!warning]
>> >
>> > Si le bouton `Protection contre le transfert` n'est pas présent, cela signifie que votre extension de nom de domaine ne nécessite pas de code de transfert. Vous pouvez alors lancer directement votre transfert.
>>
>> ![protection activée](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/general-information/protection-against-domain-name-transfert-enabled.png){.thumbnail}
>>
> **Étape 3**
>>
>> Cliquez sur le curseur et confirmez, dans la fenêtre qui s'affiche, que vous souhaitez supprimer cette protection. Patientez quelques minutes pour que l'état passe à `Désactivée`{.action}.
>>
>> > [!primary]
>> >
>> > Si vous rencontrez le message "**Une erreur est survenue lors de la demande de désactivation de la protection du nom de domaine (User not granted for this request)**", cela signifie que vous n'avez pas les droits suffisants pour déverrouiller le nom de domaine.
>> >
>> > De plus, si vous rencontrez le message : "**AUTH/INFO code : Authcode is not managed by OVHcloud, contact the registry to claim it**", cela signifie que le code de transfert de votre nom de domaine n'est pas récupérable via votre [espace client OVHcloud](/links/manager).
>> >
>> > Dans les deux cas, vérifiez que vous êtes bien le contact **administrateur** du nom de domaine à l'aide de notre guide sur la [gestion des contacts](/pages/account_and_service_management/account_information/managing_contacts) puis vérifiez que l'extension de votre nom de domaine permet un déverrouillage depuis l'[espace client OVHcloud](/links/manager).
>> >
>> > En effet, certains *codes de transfert* sont directement gérés par le *registre* de l'extension de votre nom de domaine. Un *registre* est une organisation qui gère l'ensemble des noms de domaine pour une extension donnée. Par exemple, l'**AFNIC** gère l'ensemble des noms de domaine ayant pour extension "*.fr*". Si tel est le cas, vous devez contacter directement le *registre* qui gère l'extension de votre nom de domaine afin de récupérer le *code de transfert*.
>>
>> ![désactivation protection](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/general-information/protection-against-domain-name-transfert-deactivating.png){.thumbnail}

> [!primary]
>
> Une fois la protection levée, le nom de domaine reste déverrouillé pendant sept jours. Après cette période, la protection sera automatiquement réactivée. Si vous ne demandez pas de transfert de nom de domaine à votre nouveau bureau d'enregistrement pendant cet intervalle, il sera nécessaire de lever à nouveau la protection sur le nom de domaine.
>

### 2 - Récupérer le code de transfert

> [!warning]
>
> Sachez qu'il est toujours possible de débloquer et récupérer le code de transfert de votre nom de domaine après son expiration. Selon les règles du registre, un nom de domaine en [période de rédemption (redemptionPeriod)](https://www.icann.org/resources/pages/epp-status-codes-2014-06-16-en) peut nécessiter d'être restauré pour être transféré. Contactez votre nouveau bureau d'enregistrement pour connaître les modalités de transfert.
>

Une fois la protection contre le transfert levée, vous pouvez récupérer le code de transfert de votre nom de domaine.

Cliquez sur les onglets ci-dessous pour afficher successivement chacune des **3** étapes.

> [!tabs]
> **Étape 1**
>>
>> Accédez à la page [Noms de domaine](/links/control-panel/web-domains), puis choisissez le nom de domaine concerné.
>>
>> ![Noms de domaine](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-names.png){.thumbnail}
>>
> **Étape 2**
>>
>> Sous l'onglet `Informations générales`{.action}, cliquez sur `AUTH/INFO`{.action} situé à côté de `Protection contre le transfert`. Actualisez la page si nécessaire.
>>
>> ![outgoingtransfer](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/general-information/protection-against-domain-name-transfert-disabled.png){.thumbnail}
>>
> **Étape 3**
>>
>> Une fenêtre s'affiche et contient votre code AUTH/INFO (également appelé code de transfert, mot de passe de nom de domaine, AUTH-CODE ou EPP-Code).
>>
>> Le code sera demandé par votre nouveau bureau d'enregistrement pour terminer le processus de transfert. Vous pouvez vérifier les détails auprès de votre nouveau bureau d'enregistrement.
>>
>> Plutôt que de taper manuellement le code, nous vous recommandons de le copier/coller, car certains caractères peuvent être facilement confondus.

Une fois le code de transfert récupéré, **ne reverrouillez pas votre nom de domaine, sauf si vous ne souhaitez plus le transférer**.

### 3 - Débuter le transfert vers le nouveau bureau d'enregistrement

Une fois les étapes précédentes effectuées, lancez le processus de transfert, généralement en passant une commande auprès de votre nouveau bureau d'enregistrement. Le transfert peut prendre jusqu'à 10 jours.

Pour plus d'informations, contactez le nouveau bureau d'enregistrement que vous avez choisi.

> [!warning]
>
> Si votre nouveau bureau d'enregistrement réclame un nouveau code de transfert, réactivez la **Protection contre le transfert** pour votre nom de domaine puis désactivez-la de nouveau quelques minutes après. Vous pourrez ainsi récupérer un nouveau code de transfert.

## Aller plus loin

[Transférer un nom de domaine .co.uk](/pages/web_cloud/domains/transfer_outgoing_couk)

Pour des prestations spécialisées (référencement, développement, etc.), contactez les [partenaires OVHcloud](/links/partner).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](/links/support).

Échangez avec notre [communauté d'utilisateurs](/links/community).
