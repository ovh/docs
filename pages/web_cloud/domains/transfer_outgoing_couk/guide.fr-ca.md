---
title: "Transférer un nom de domaine .uk vers un autre bureau d'enregistrement"
excerpt: "Découvrez comment effectuer le transfert sortant d’un nom de domaine UK vers un autre registrar"
updated: 2026-03-13
---

## Objectif

Le processus de changement de bureau d'enregistrement (*registrar*) pour les noms de domaine de premier niveau (*top-level domain*, ou **TLD**) de l'indicatif de pays **UK** (**.uk**) diffère de celui détaillé dans notre [guide de transfert des TLD génériques](/pages/web_cloud/domains/transfer_outgoing_domain). Les instructions ci-dessous concernent les extensions suivantes :

- .uk
- .co.uk
- .ac.uk
- .gov.uk
- .me.uk
- .net.uk
- .org.uk
- .plc.uk
- .sch.uk

**Ce guide vous explique comment initier un transfert sortant pour ces TLD depuis votre espace client OVHcloud.**

> [!warning]
>
> Si le nom de domaine en question doit rester enregistré chez OVHcloud mais modifié dans ses modalités de gestion ou de titularité, un transfert sortant de nom de domaine n'est pas la procédure appropriée.
>
> Pour transférer la gestion de votre nom de domaine vers un autre compte client OVHcloud, la méthode adéquate est un **changement de contacts**. La procédure est décrite dans [ce guide](/pages/account_and_service_management/account_information/managing_contacts).
>
> Si vous devez également changer le **titulaire** du nom de domaine, vous devez le faire **avant** de changer les contacts du nom de domaine. Pour cela, suivez les instructions décrites dans notre documentation sur le [changement de titulaire des noms de domaine](/pages/web_cloud/domains/trade_domain).
>

## Prérequis

- Disposer d'un [nom de domaine .uk](/links/web/domains) enregistré chez OVHcloud
- Le nom de domaine doit être toujours actif, c'est-à-dire qu'il ne doit pas avoir expiré ou être bloqué par OVHcloud
- Le nom de domaine ne doit pas faire l’objet d’un litige en cours auprès du [Registre Nominet](https://www.nominet.uk/)

<!-- CP-NAV-START:web-domains -->
---

### Accès à l'espace client OVHcloud

- **Lien direct :** [Noms de domaine](/links/control-panel/web-domains)
- **Pour accéder à vos services :** `Web Cloud`{.action} > `Noms de domaine`{.action} > Sélectionnez votre nom de domaine

---
<!-- CP-NAV-END:web-domains -->


> [!primary]
>
> Si le nom de domaine a expiré depuis **moins de 90 jours**, il peut encore être transféré. Contactez nos équipes de support en créant une demande d'assistance depuis votre espace client OVHcloud pour débloquer le nom de domaine en vue du transfert.
>
> Si vous êtes le **titulaire** du nom de domaine mais ne pouvez pas le gérer dans l'espace client OVHcloud, ni via votre propre accès ni via le contact administrateur, consultez [ce guide](/pages/account_and_service_management/account_information/managing_contacts) avant de poursuivre.
>

## En pratique

Les TLD concernés disposent chacun d'une balise (*TAG*) correspondant à leur bureau d'enregistrement de noms de domaine actuel, tel qu’OVHcloud. Le transfert s'initie par la substitution du TAG par celui identifiant votre nouveau bureau d'enregistrement.

Si vous ne connaissez pas encore le TAG requis, vous pouvez en faire la demande chez votre nouveau prestataire ou consulter la [liste des bureaux d'enregistrement Nominet](https://registrars.nominet.uk/uk-namespace/registrar-agreement/list-of-registrars/).

### 1 - Modifier le TAG de votre nom de domaine pour initier son transfert vers un autre bureau d’enregistrement

> [!primary]
>
> Vous devez être connecté en tant qu’[administrateur](/pages/account_and_service_management/account_information/managing_contacts) pour effectuer ces actions.

<!-- CP-STEPS-START:change-outgoing-tag -->
Cliquez sur les onglets ci-dessous pour afficher successivement chacune des **3** étapes.

> [!tabs]
> **Étape 1**
>>
>> Accédez à la page [Noms de domaine](/links/control-panel/web-domains), puis choisissez le nom de domaine concerné.
>>
>> ![Espace client OVHcloud - liste des noms de domaine](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-names.png){.thumbnail}
>>
> **Étape 2**
>>
>> Dans le cadre **Configuration**, cliquez sur le lien `Tag de transfert sortant`{.action}.
>>
>> ![transfert sortant](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/general-information/outgoing-transfer-tag.png){.thumbnail}
>>
> **Étape 3**
>>
>> Dans la fenêtre qui s’affiche, renseignez le TAG de votre nouveau bureau d’enregistrement puis cliquez sur `Confirmer`{.action}.
>>
>> ![transfert sortant](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/general-information/outgoing-transfer-tag-confirmation.png){.thumbnail}
<!-- CP-STEPS-END:change-outgoing-tag -->

Si vous n’arrivez pas à modifier le TAG de votre nom de domaine depuis votre espace client, vous pouvez en demander la modification auprès du Registre Nominet. Plus d’informations sur le [site officiel de Nominet](https://www.nominet.uk/domain-support/).

### 2 - Suivre le processus de transfert chez votre nouveau bureau d'enregistrement

La modification de la balise TAG active le processus de transfert.

Contactez dès lors votre nouveau fournisseur pour obtenir davantage de détails ainsi que pour toute question relative au suivi du transfert.

## Aller plus loin

[Transférer un nom de domaine vers un autre bureau d’enregistrement](/pages/web_cloud/domains/transfer_outgoing_domain)

Pour des prestations spécialisées (référencement, développement, etc.), contactez les [partenaires OVHcloud](/links/partner).

Échangez avec notre [communauté d'utilisateurs](/links/community).
