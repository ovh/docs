---
title: 'Résoudre une erreur sur un nom de domaine'
updated: 2026-03-24
---

<style>
details>summary {
    color:rgb(33, 153, 232);
    cursor: pointer;
}
details>summary::before {
    content:'\25B6';
    padding-right:1ch;
}
details[open]>summary::before {
    content:'\25BC';
}
</style>

## Objectif

La création, le transfert ou le changement de titulaire d'un nom de domaine peuvent générer des erreurs nécessitant une intervention de votre part.

**Découvrez comment agir lorsqu'une erreur survient sur un nom de domaine.**

## Prérequis

- Être titulaire d'un ou plusieurs [noms de domaine](/links/web/domains).
- Être à jour dans les [paiements](/pages/account_and_service_management/managing_billing_payments_and_services/invoice_management#pay-bills) et [renouvellements](/pages/account_and_service_management/managing_billing_payments_and_services/how_to_use_automatic_renewal#renewal-management) de vos noms de domaine.

<!-- CP-NAV-START:web-ongoing-operations -->
---

### Accès à l'espace client OVHcloud

- **Lien direct :** [Opérations en cours](/links/control-panel/web-ongoing-operations)
- **Pour accéder à vos services :** `Web Cloud`{.action} > `Opérations en cours`{.action} > Sélectionnez l'onglet `Domaine`{.action} ou `DNS`{.action}.

---
<!-- CP-NAV-END:web-ongoing-operations -->

## En pratique

### Présentation de l'interface de gestion des opérations en cours

Cliquez sur les onglets ci-dessous pour afficher successivement chacune des **2** étapes.

> [!tabs]
> **Étape 1**
>>
>> Accédez à la page [Opérations en cours](/links/control-panel/web-ongoing-operations).
>>
> **Étape 2**
>>
>> Un tableau liste toutes les opérations liées aux noms de domaine de votre espace client.
>>
>> ![domain](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/ongoing-operations/domain-name-operations-error-creating-domain-name-with-registry.png){.thumbnail}
>>
>> - `Domaine` : Nom de domaine concerné par l'opération.
>> - `Opération` : Opération en cours sur le nom de domaine.
>> - `Commentaire` : Détails sur l'opération en cours. Instructions.
>> - `Date de traitement` : Date de création de l'opération.
>> - `Date de mise à jour` : Horodatage de mise à jour de l'opération en cours.
>> - `Date de fin` : Date de fin de l'opération.
>> - `État` : État actuel de l'opération.

Toutes les opérations listées dans ce tableau ne nécessitent pas votre intervention pour se dérouler normalement.

Ce guide traite des opérations **en erreur** au travers de situations récurrentes.

### Situations

> [!primary]
>
> La liste de situations ci-dessous est non-exhaustive. Si vous rencontrez une erreur qui n'est pas détaillée dans ce guide :
>
> - Vérifiez que vous êtes à jour dans les [paiements](/pages/account_and_service_management/managing_billing_payments_and_services/invoice_management#pay-bills) et [renouvellements](/pages/account_and_service_management/managing_billing_payments_and_services/how_to_use_automatic_renewal#renewal-management) de vos noms de domaine.
> - Vérifiez si une action est possible en consultant les options disponibles à droite de l'opération concernée.
> - Lisez le message descriptif et vérifiez s'il vous permet de résoudre l'erreur.
>
> Si, malgré ces vérifications, vous ne pouvez pas résoudre l'erreur, [ouvrez un ticket d'assistance](/links/support) depuis votre espace client.

**Cliquez sur la situation de votre choix pour afficher le contenu.**

/// details | Demande de documents

Certaines extensions de noms de domaine nécessitent de justifier leur utilisation en fournissant des documents. Lorsque c'est le cas, vous devez transmettre les documents depuis votre espace client OVHcloud.

Cliquez sur les onglets ci-dessous pour afficher successivement chacune des **4** étapes.

> [!tabs]
> **Étape 1**
>>
>> Accédez à la page [Opérations en cours](/links/control-panel/web-ongoing-operations).
>>
> **Étape 2**
>>
>> Repérez l'opération en erreur dans le tableau.
>>
>> ![domain](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/ongoing-operations/contacts-update-provide-us-with-the-documents-required.png){.thumbnail}
>>
> **Étape 3**
>>
>> Cliquez sur le bouton `...`{.action} à droite de l'opération concernée.
>>
> **Étape 4**
>>
>> La fenêtre ci-dessous apparaît. La partie « Description » vous permet d'obtenir des détails sur le document à fournir ainsi qu'un bouton pour téléverser votre document.
>>
>> ![domain](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/ongoing-operations/operation-data-provide-us-with-the-documents-required.png){.thumbnail}

///

/// details | Informations manquantes

Lorsque vous enregistrez votre nom de domaine, il est parfois nécessaire de compléter les données de « contact ». Si ces dernières ne correspondent pas aux critères du nom de domaine, vous pouvez obtenir l'erreur ci-dessous.

Cliquez sur les onglets ci-dessous pour afficher successivement chacune des **4** étapes.

> [!tabs]
> **Étape 1**
>>
>> Accédez à la page [Opérations en cours](/links/control-panel/web-ongoing-operations).
>>
> **Étape 2**
>>
>> Repérez l'opération en erreur dans le tableau.
>>
>> ![domain](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/ongoing-operations/domain-name-operations-complete-nic-admin-es-tld.png){.thumbnail}
>>
> **Étape 3**
>>
>> Cliquez sur le bouton `...`{.action} à droite de l'opération concernée.
>>
> **Étape 4**
>>
>> La fenêtre ci-dessous apparaît. Complétez les champs avec les informations du contact concerné.
>>
>> ![domain](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/ongoing-operations/operation-data-complete-nic-admin-es-tld.png){.thumbnail}

///

/// details | Code de transfert erroné

Lorsque vous transférez votre nom de domaine vers OVHcloud, vous devez saisir un code de transfert (**authInfo** / **AuthCode**) lors de la commande. Si ce code est incorrect, l'opération est suspendue. Vous pouvez la relancer avec le bon code.

Cliquez sur les onglets ci-dessous pour afficher successivement chacune des **4** étapes.

> [!tabs]
> **Étape 1**
>>
>> Accédez à la page [Opérations en cours](/links/control-panel/web-ongoing-operations).
>>
> **Étape 2**
>>
>> Repérez l'opération en erreur dans le tableau.
>>
>> ![domain](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/ongoing-operations/domain-name-operations-auth-code-missing.png){.thumbnail}
>>
> **Étape 3**
>>
>> Cliquez sur le bouton `...`{.action} à droite de l'opération concernée.
>>
> **Étape 4**
>>
>> La fenêtre ci-dessous apparaît. Renseignez le code de transfert (**authInfo** / **AuthCode**) et relancez l'opération.
>>
>> ![domain](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/ongoing-operations/operation-data-auth-code-missing.png){.thumbnail}

///

/// details | Erreur liée aux serveurs DNS

Une erreur peut survenir si les serveurs DNS que vous attachez à un nom de domaine ne fonctionnent pas.
Dans la situation ci-dessous, l'adresse IP du serveur DNS ne répond pas.

Cliquez sur les onglets ci-dessous pour afficher successivement chacune des **4** étapes.

> [!tabs]
> **Étape 1**
>>
>> Accédez à la page [Opérations en cours](/links/control-panel/web-ongoing-operations).
>>
> **Étape 2**
>>
>> Repérez l'opération en erreur dans le tableau.
>>
>> ![domain](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/ongoing-operations/domain-name-operations-dns-update-unable-to-retrieve-dns-ip.png){.thumbnail}
>>
> **Étape 3**
>>
>> Dans la section `Noms de domaine`{.action}, sélectionnez le nom de domaine concerné, puis cliquez sur l'onglet `Serveurs DNS`{.action}.
>>
> **Étape 4**
>>
>> Depuis cet onglet, [modifiez vos serveurs DNS](/pages/web_cloud/domains/dns_server_edit).

///

/// details | Erreur sur un nom de domaine en .ie, .de ou .it après une mise à jour DNS

Lorsque vous modifiez vos serveurs DNS, le registre est susceptible de vérifier les nouveaux serveurs DNS ainsi que la zone DNS associée et bloquer le nom de domaine si la configuration n'est pas conforme.

> [!warning]
>
> Ce type de blocage est initié par le registre et non par OVHcloud. Ainsi, même si le nom de domaine est bloqué par le registre, ses serveurs DNS apparaissent comme `Actifs` dans votre espace client OVHcloud.

Pour vérifier si votre nom de domaine fait l'objet d'un tel blocage, cliquez sur les onglets ci-dessous pour afficher successivement chacune des **4** étapes.

> [!tabs]
> **Étape 1**
>>
>> Accédez à la page [Opérations en cours](/links/control-panel/web-ongoing-operations).
>>
> **Étape 2**
>>
>> Repérez l'opération en erreur dans le tableau.
>>
>> ![domain](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/ongoing-operations/domain-name-operations-dns-update-error-occured-updating-domain.png){.thumbnail}
>>
> **Étape 3**
>>
>> Pour vérifier votre nom de domaine, nous vous conseillons d'utiliser l'outil de vérification délivré par le registre :
>>
>> - Pour un nom de domaine en **.de** : <https://nast.denic.de/>.
>> - Pour un nom de domaine en **.it** : <https://dns-check.nic.it/>.
>>
>> > [!primary]
>> >
>> > Si votre registre ne fournit pas d'outil de vérification de serveurs DNS, il est possible d'interroger vos nouveaux serveurs DNS via la commande `nslookup` sur une « invite de commande » Windows ou via la commande `dig` sur un « terminal » Linux ou macOS.
>> >
>> > Si vos serveurs DNS sont joignables, l'outil vous retourne une adresse IP.
>> >
>> > Dans tous les cas, assurez-vous, auprès de l'administrateur du serveur DNS, que ce serveur DNS est bien configuré pour accueillir la zone DNS de votre nom de domaine.
>>
> **Étape 4**
>>
>> Lorsque vous avez identifié l'origine de l'erreur et que vous l'avez corrigée, cliquez sur le bouton `...`{.action} à droite de l'opération concernée et relancez l'opération de vérification DNS.

///

/// details | Erreur interne OVHcloud

Vous pouvez rencontrer une erreur ayant pour détails « erreur interne ».

Cliquez sur les onglets ci-dessous pour afficher successivement chacune des **3** étapes.

> [!tabs]
> **Étape 1**
>>
>> Accédez à la page [Opérations en cours](/links/control-panel/web-ongoing-operations).
>>
> **Étape 2**
>>
>> Repérez l'opération en erreur dans le tableau.
>>
>> ![domain](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/ongoing-operations/domain-name-operations-renewal-internal-error.png){.thumbnail}
>>
> **Étape 3**
>>
>> Cette erreur ne permet pas d'action de votre part depuis l'espace client OVHcloud.
>>
>> Vérifiez d'abord que votre nom de domaine et ses serveurs DNS sont bien actifs.
>>
>> Si vous constatez une anomalie qui n'est pas liée à la configuration des serveurs DNS ou de la zone DNS, [contactez le support OVHcloud](/links/support) afin d'identifier l'origine du dysfonctionnement.

///

## Aller plus loin

[Transférer son nom de domaine vers OVHcloud](/pages/web_cloud/domains/transfer_incoming_generic_domain)

[Transférer un nom de domaine vers un autre bureau d'enregistrement](/pages/web_cloud/domains/transfer_outgoing_domain)

[Modifier les serveurs DNS d'un nom de domaine OVHcloud](/pages/web_cloud/domains/dns_server_edit)

Pour des prestations spécialisées (référencement, développement, etc.), contactez les [partenaires OVHcloud](/links/partner).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](/links/support).

Échangez avec notre [communauté d'utilisateurs](/links/community).
