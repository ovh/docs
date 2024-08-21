---
title: 'Résoudre une erreur sur un nom de domaine'
updated: 2022-09-01
---

## Objectif

La création d'un nom de domaine, son transfert, son changement de propriétaire sont autant d'opérations pour lesquelles une erreur peut survenir. Une intervention de votre part peut alors s'avérer nécessaire.

**Découvrez comment agir lorsqu'une erreur survient sur un nom de domaine.**

## Prérequis

- Posséder un ou plusieurs noms de domaine.
- Être connecté à votre [espace client OVHcloud](/links/manager).
- Être à jour dans les [paiements](/pages/account_and_service_management/managing_billing_payments_and_services/invoice_management#pay-bills) et [renouvellements](/pages/account_and_service_management/managing_billing_payments_and_services/how_to_use_automatic_renewal#renewal-management) de vos noms de domaine.

## En pratique

Depuis votre [espace client OVHcloud](/links/manager), dirigez-vous dans la rubrique `Web Cloud`{.action} puis `Noms de domaine`{.action}. Cliquez sur `Opérations en cours`{.action} au-dessus de la liste des noms de domaine.

Un tableau vous permet de consulter toutes les opérations liées aux noms de domaine de votre espace client.

![domain](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/ongoing-operations/domain-name-operations-header.png){.thumbnail}

- `Domaine` : Nom de domaine concerné par l'opération.
- `Opération` :  Opération en cours sur le nom de domaine.
- `Commentaire` : Détails sur l'opération en cours. Instructions.
- `Date de traitement` : Date de création de l'opération.
- `Date de mise à jour` : Horodatage de mise à jour de l'opération en cours.
- `Date de fin` : Date de fin de l'opération.
- `État` : État actuel de l'opération.

Toutes les opérations listées dans ce tableau ne nécessitent pas votre intervention pour qu'elles se déroulent normalement.<br>
Nous allons nous intéresser dans ce guide aux opérations **en erreur** au travers d'exemples récurrents.

![domain](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/ongoing-operations/domain-name-operations-error-creating-domain-name-with-registry.png){.thumbnail}

### Exemples

> [!primary]
>
> La liste d'exemples ci-dessous est non-exhaustive. Si vous rencontrez une erreur qui n'est pas détaillée dans ce guide :
>
> - Vérifiez que vous êtes à jour dans les [paiements](/pages/account_and_service_management/managing_billing_payments_and_services/invoice_management#pay-bills) et [renouvellements](/pages/account_and_service_management/managing_billing_payments_and_services/how_to_use_automatic_renewal#renewal-management) de vos noms de domaine.
> - Vérifiez si vous pouvez agir en cliquant sur le bouton `...`{.action} à droite de l'opération concernée.
> - Lisez le message descriptif et vérifiez s'il vous permet de résoudre l'erreur.
>
> Si, malgré ces vérifications, vous n'êtes pas en capacité d'agir sur le nom de domaine, nous vous invitons à ouvrir un ticket d'assistance depuis votre espace client.
>

#### Demande de documents

Certaines extensions de noms de domaine nécessitent de justifier leur utilisation en fournissant des documents. Lorsque c'est le cas, vous devrez transmettre les documents depuis la fenêtre `Opérations en cours`{.action}.

![domain](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/ongoing-operations/contacts-update-provide-us-with-the-documents-required.png){.thumbnail}

Pour fournir le(s) document(s) nécessaire(s), cliquez sur le bouton `...`{.action} à droite de l'opération concernée.<br>
La fenêtre ci-dessous apparait, la partie « Description » vous permettra d'obtenir des détails sur le document à fournir ainsi qu'un bouton pour téléverser votre document.

![domain](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/ongoing-operations/operation-data-provide-us-with-the-documents-required.png){.thumbnail}

#### Informations manquantes

Lorsque vous enregistrez votre nom de domaine, il est parfois nécessaire de compléter les données de « contact ». Si ces dernières ne correspondent pas aux critères du nom de domaine, vous pouvez obtenir l'erreur ci-dessous.

![domain](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/ongoing-operations/domain-name-operations-complete-nic-admin-es-tld.png){.thumbnail}

Cliquez sur le bouton `...`{.action} à droite de l'opération.<br>
La fenêtre ci-dessous apparait, complétez les champs avec les informations du contact concerné.

![domain](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/ongoing-operations/operation-data-complete-nic-admin-es-tld.png){.thumbnail}

#### Code de transfert erroné 

Lorsque vous transférez votre nom de domaine vers OVHcloud, vous devez saisir un code de transfert (**authInfo**) lors de la commande. Si ce code est incorrect, l'opération est suspendue mais vous pouvez la relancer en renseignant le bon code.

![domain](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/ongoing-operations/domain-name-operations-auth-code-missing.png){.thumbnail}

Cliquez sur le bouton `...`{.action} à droite de l'opération.<br>
La fenêtre ci-dessous apparait, renseignez le code de transfert (**authInfo**) et relancez l'opération.

![domain](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/ongoing-operations/operation-data-auth-code-missing.png){.thumbnail}

#### Erreur liée aux serveurs DNS

Une erreur peut survenir si les serveurs DNS que vous attachez à un nom de domaine ne fonctionnent pas.<br>
Dans l'exemple ci-dessous, l'adresse IP du serveur DNS ne répond pas.

![domain](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/ongoing-operations/domain-name-operations-dns-update-unable-to-retrieve-dns-ip.png){.thumbnail}

Dans la section `Noms de domaine`{.action}, sélectionnez le nom de domaine concerné puis cliquez sur l'onglet `Serveurs DNS`{.action}. Depuis cet onglet, [modifiez vos serveurs DNS](/pages/web_cloud/domains/dns_server_edit). 

#### Erreur sur un nom de domaine en **.ie**, **.de** ou **.it** après une mise à jour DNS

Lorsque vous modifiez vos serveurs DNS, le registre est susceptible de vérifier les nouveaux serveurs DNS ainsi que la zone DNS associée et bloquer le nom de domaine si la configuration n'est pas conforme.

> [!warning]
>
> Ce type de blocage est initié par le registre et non par OVHcloud. Ainsi, même si le nom de domaine est bloqué par le registre, ses serveurs DNS apparaissent comme `Actifs` dans votre espace client OVHcloud.

Pour vérifier si votre nom de domaine fait l'objet d'un tel blocage, rendez-vous dans le tableau des `Opérations en cours`{.action}.

![domain](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/ongoing-operations/domain-name-operations-dns-update-error-occured-updating-domain.png){.thumbnail}

Pour vérifier votre nom de domaine, nous vous conseillons d'utiliser l'outil de vérification délivré par le registre :

- Pour un nom de domaine en **.de** : <https://nast.denic.de/>.
- Pour un nom de domaine en **.it** : <https://dns-check.nic.it/>.

> [!primary]
>
> Si votre registre ne fournit pas d'outil de vérification de serveurs DNS, il est possible d'interroger vos nouveaux serveurs DNS via la commande `nslookup`sur une « invite de commande » Windows ou via la commande `dig` sur un « terminal » Linux ou macOS. 
>
> Si vos serveurs DNS sont joignables, l'outil vous retourne une adresse IP.
>
> Dans tous les cas, assurez-vous, auprès de l'administrateur du serveur DNS, que ce serveur DNS est bien configuré pour accueillir la zone DNS de votre nom de domaine.

Lorsque vous avez identifié l'origine de l'erreur et que vous l'avez corrigée, vous pouvez cliquer sur le bouton `...`{.action} à droite de l'opération concernée et relancer l'opération de vérification DNS.

#### Erreur interne OVHcloud

Vous pouvez rencontrer une erreur ayant pour détails « erreur interne ». Cette erreur ne permet pas d'actions de votre part.<br>
Vérifiez tout d'abord que votre nom de domaine et les serveurs DNS sont bien actifs. 

Si vous constatez une anomalie qui n'est pas liée à la configuration des serveurs DNS ou de la zone DNS, nous vous invitons à ouvrir un ticket d'assistance auprès du support OVHcloud afin d'identifier l'origine du dysfonctionnement.

![domain](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/ongoing-operations/domain-name-operations-renewal-internal-error.png){.thumbnail}

## Aller plus loin

[Transférer son nom de domaine vers OVHcloud](/pages/web_cloud/domains/transfer_incoming_generic_domain)

[Transférer un nom de domaine vers un autre bureau d’enregistrement](/pages/web_cloud/domains/transfer_outgoing_domain)

[Modifier les serveurs DNS d’un nom de domaine OVHcloud](/pages/web_cloud/domains/dns_server_edit)
 
Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](/links/partner).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](/links/support).

Échangez avec notre [communauté d'utilisateurs](/links/community).