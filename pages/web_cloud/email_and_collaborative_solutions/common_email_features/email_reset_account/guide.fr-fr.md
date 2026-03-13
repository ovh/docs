---
title: "Supprimer un compte e-mail"
excerpt: "Découvrez comment supprimer ou réinitialiser une adresse e-mail sur votre offre e-mail"
updated: 2026-02-19
---

## Objectif

Vous souhaitez :

- Supprimer une adresse e-mail que vous n'utilisez plus. 
- Réinitialiser un compte e-mail pour l'utiliser sur une nouvelle adresse e-mail.
- Réinitialiser un compte e-mail pour le résilier.

**Découvrez comment supprimer ou réinitialiser une adresse e-mail sur votre offre e-mail**

## Prérequis

- Disposer d'une solution e-mail OVHcloud préalablement configurée :
    - **MX Plan**, proposée parmi nos [offres d’hébergement web](/links/web/hosting), incluse dans un [hébergement gratuit 100M](/links/web/domains-free-hosting) ou commandée séparément comme solution autonome.
    - [**Exchange**](/links/web/emails-exchange).
    - [**Email Pro**](/links/web/email-pro).
    - [**Zimbra**](/links/web/zimbra).
- Être le contact administrateur du service e-mail concerné.
- Disposer des informations de connexion aux adresses e-mail concernées.

<!-- CP-NAV-START:web-mx-plan -->
<!-- CP-NAV-START:web-zimbra -->
<!-- CP-NAV-START:web-email-pro -->
<!-- CP-NAV-START:web-exchange -->
---

### Accès à l'espace client OVHcloud

**MX Plan :**

- **Lien direct :** [MX Plan](/links/control-panel/web-mx-plan)
- **Pour accéder à vos services :** `Web Cloud`{.action} > `MX Plan`{.action} > Sélectionnez votre service MX Plan

**Zimbra :**

- **Lien direct :** [Zimbra](/links/control-panel/web-zimbra)
- **Pour accéder à vos services :** `Web Cloud`{.action} > `Zimbra Mail`{.action}

**Email Pro :**

- **Lien direct :** [Email Pro](/links/control-panel/web-email-pro)
- **Pour accéder à vos services :** `Web Cloud`{.action} > `Email Pro`{.action} > Sélectionnez votre plateforme

**Exchange :**

- **Lien direct :** [Exchange](/links/control-panel/web-exchange)
- **Pour accéder à vos services :** `Web Cloud`{.action} > `Exchange`{.action} > Sélectionnez votre plateforme

---
<!-- CP-NAV-END:web-exchange -->
<!-- CP-NAV-END:web-email-pro -->
<!-- CP-NAV-END:web-zimbra -->
<!-- CP-NAV-END:web-mx-plan -->

<a name="whichmxplan"></a>

> [!primary]
>
> **Identifier la technologie e-mail de votre offre MX Plan.**
>
> En fonction de la date d’activation de votre offre MX Plan ou d’une migration récente, la technologie e-mail associée peut différer. Cette technologie est caractérisée par l'interface de son webmail. Pour l'identifier :
>
> - Depuis l'onglet `Informations générales`{.action}, relevez la technologie utilisée sous la mention **Webmail** présente dans l'encadré `Abonnement`{.action}.
>
> ![MX plan](images/technology-email.png){.thumbnail .w-500}

## En pratique <a name="instructions"></a>

OVHcloud propose 4 solutions e-mail, la notion de suppression de compte est différente selon votre offre.

- **E-mail MX Plan** : cette offre est vendue sous la forme d'un pack de plusieurs comptes e-mail. Lorsque vous supprimez un compte, vous libérez un emplacement sur votre pack.
- **Email Pro**, **Hosted Exchange** et **Zimbra** : ces offres sont à la carte, vous commandez un abonnement individuel par compte e-mail. Lorsque vous voulez supprimer une adresse e-mail, il s'agit alors d'effectuer une **réinitialisation**. Une fois le compte e-mail réinitialisé, vous pouvez réutiliser ce compte pour créer une nouvelle adresse e-mail. Vous pouvez également [résilier l'abonnement](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/manage_billing_exchange#supprimer-des-comptes) de ce compte si vous souhaitez le supprimer définitivement.

### Supprimer ou réinitialiser un compte e-mail

Sélectionnez l'onglet correspondant à votre offre e-mail :

> [!tabs]
> **MX Plan Roundcube**
>>
>> Pour identifier la technologie e-mail associée à votre service MX Plan, référez-vous à la partie « [Identifier la technologie e-mail de votre offre MX Plan](#whichmxplan) » de ce guide.
>>
>> 1. Positionnez-vous sur l'onglet `Comptes e-mail`{.action}. La fenêtre qui apparaît affiche les comptes e-mail existants.
>> 1. Cliquez sur le bouton `...`{.action} à droite du compte à modifier puis cliquez sur `Supprimer le compte`{.action}.
>>
>> ![email](images/email-mxplan-legacy-reset.png){.thumbnail}
>>
> **MX Plan Zimbra/OWA**
>>
>> Pour identifier la technologie e-mail associée à votre service MX Plan, référez-vous à la partie « [Identifier la technologie e-mail de votre offre MX Plan](#whichmxplan) » de ce guide.
>>
>> 1. Positionnez-vous sur l'onglet `Comptes e-mail`{.action}. La fenêtre qui apparaît affiche les comptes e-mail existants.
>> 1. Cliquez sur le bouton `...`{.action} à droite du compte à modifier puis cliquez sur `Réinitialiser ce compte`{.action}.
>>
>> ![email](images/email-mxplan-new-reset.png){.thumbnail}
>>
> **Email Pro**
>>
>> 1. Positionnez-vous sur l'onglet `Comptes e-mail`{.action}. La fenêtre qui apparaît affiche les comptes e-mail existants.
>> 1. Cliquez sur le bouton `...`{.action} à droite du compte à modifier puis cliquez sur `Réinitialiser ce compte`{.action}.
>>
>> Après la réinitialisation de votre compte, si vous souhaitez le supprimer définitivement, vous devrez le résilier. Pour cela, consultez notre guide [Gérer la facturation de vos comptes Email Pro](/pages/web_cloud/email_and_collaborative_solutions/email_pro/manage_billing_emailpro).
>>
>> ![email](images/emailpro-reset.png){.thumbnail}
>>
> **Exchange**
>>
>> 1. Positionnez-vous sur l'onglet `Comptes e-mail`{.action}.
>> 1. Cliquez sur le bouton `...`{.action} à droite du compte à modifier puis cliquez sur `Réinitialiser`{.action}.
>>
>> Après la réinitialisation de votre compte, si vous souhaitez le supprimer définitivement, vous devrez le résilier. Pour cela, consultez notre guide [Gérer la facturation de vos comptes Exchange](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/manage_billing_exchange).
>>
>> ![email](images/exchange-reset.png){.thumbnail}
>>
> **Zimbra STARTER/PRO**
>>
>> 1. Positionnez-vous sur l'onglet `Compte email`{.action}. La fenêtre qui apparaît affiche les comptes e-mail existants.
>> 1. Cliquez sur le bouton `⋮`{.action} à droite du compte à modifier puis cliquez sur `Supprimer`{.action}.
>>
>> ![email](images/email-zimbra-reset.png){.thumbnail}
>>

## Aller plus loin

[Premiers pas avec la solution MX Plan](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_generalities)

[Premiers pas avec la solution E-mail Pro](/pages/web_cloud/email_and_collaborative_solutions/email_pro/first_config)

[Premiers pas avec la solution Hosted Exchange](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/exchange_starting_hosted)

[Premiers pas avec l'offre Zimbra](/pages/web_cloud/email_and_collaborative_solutions/zimbra/getting_started_zimbra)

[Gérer la facturation de vos comptes Email Pro](/pages/web_cloud/email_and_collaborative_solutions/email_pro/manage_billing_emailpro)

[Gérer la facturation de vos comptes Exchange](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/manage_billing_exchange)

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](/links/support).

Échangez avec notre [communauté d'utilisateurs](/links/community).
