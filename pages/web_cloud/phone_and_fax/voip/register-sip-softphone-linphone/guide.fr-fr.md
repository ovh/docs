---
title: 'Tutoriel - Utiliser une ligne SIP OVHcloud sur Linphone'
excerpt: 'Découvrez comment enregistrer une ligne SIP OVHcloud sur le softphone Linphone'
updated: 2026-01-09
---

<style>
details>summary {
    color:rgb(33, 153, 232) !important;
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

Le logiciel [Linphone](https://www.linphone.org/) est un softphone (logiciel de téléphonie) open-source et gratuit permettant d'enregistrer une ligne SIP fixe OVHcloud, afin d'émettre et recevoir des appels via cette ligne, depuis un ordinateur ou un smartphone.

**Découvrez comment enregistrer votre ligne SIP OVHcloud sur Linphone**

> [!warning]
>
> OVHcloud met à votre disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous revient de ce fait d'en assurer le bon fonctionnement.
>
> Nous mettons à votre disposition ce tutoriel afin de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un [prestataire spécialisé](https://partner.ovhcloud.com/fr/) et/ou de contacter l'éditeur du service si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance. Plus d'informations dans la section « Aller plus loin » de ce guide.
>

## Prérequis

- Disposer d'une [ligne SIP OVHcloud](/links/telecom/telephonie-voip)
- [Disposer des identifiants de votre ligne SIP OVHcloud](/pages/web_cloud/phone_and_fax/voip/register-sip-softphone)
- Avoir installé le logiciel [Linphone](https://www.linphone.org/) sur un smartphone ou un ordinateur

## En pratique

Ce tutoriel décrit la méthode pour enregistrer votre ligne sur les versions mobiles (Android et iOS) et Desktop (Windows et macOS) de Linphone.

### Enregistrer votre ligne SIP

Cliquez sur l'onglet correspondant au système sur lequel vous utilisez Linphone.

> [!tabs]
> Android
>>
>> Une fois Linphone ouvert, un assistant vous permet de configurer votre compte SIP. Sélectionnez `Utiliser un compte SIP`{.action}.
>>
>> ![assistant linphone](images/linphone01.png){.thumbnail}
>>
>> Renseignez alors vos identifiants SIP OVHcloud dans les champs correspondants. Vous pouvez également définir un nom d'affichage qui sera présenté lors de vos émissions d'appels.<br>
>> Cochez `UDP`{.action} pour le transport et appuyez sur `Connexion`{.action}.
>>
>> ![connexion linphone](images/linphone02.png){.thumbnail}
>>
>> /// details | Si votre **Proxy** est différent de votre **Domain**.
>>
>> Dans ce cas, l'enregistrement de votre ligne SIP n'aboutit pas directement et un message d'erreur apparaît.  
>> Pour y remédier, il convient de renseigner le `Proxy SIP` pour finaliser la configuration de votre ligne SIP dans Linphone.  
>> Cliquez sur `Continuer`{.action}.
>>
>> ![connexion linphone](images/linphone03-proxy.png){.thumbnail}
>>
>> Ouvrez le menu déroulant situé en haut à gauche et appuyez sur `Options`{.action}. Appuyez sur votre compte récemment créé et faites défiler les paramètres jusqu'à atteindre l'option `Proxy SIP`. Remplissez le formulaire avec votre **Proxy sortant**, dans notre exemple **outbound-ovh-1.sip-proxy.io**.  
>> **Activez ensuite l'option `Outbound proxy`.**
>>
>> ![connexion linphone](images/linphone04-proxy.png){.thumbnail}
>>
>> ///
>>
>> Si la connexion aboutit, la mention `Connecté` apparaît en haut de l'application.
>>
>> ![connexion réussie linphone](images/linphone03.png){.thumbnail}
>>
>> Vous pouvez dès lors être joint et composer des appels depuis votre ligne SIP OVHcloud.
>>
> iOS
>>
>> Une fois Linphone ouvert, un assistant vous permet de configurer votre compte SIP. Sélectionnez `J'ai un compte SIP tiers`{.action}.
>>
>> ![assistant linphone](images/linphone01ios.png){.thumbnail}
>>
>> Renseignez alors vos identifiants SIP OVHcloud dans les champs correspondants. Vous pouvez également définir un nom d'affichage qui sera présenté lors de vos émissions d'appels.<br>
>> Choisissez `UDP`{.action} pour le transport et appuyez sur `Connexion`{.action}.
>>
>> ![connexion linphone](images/linphone02ios.png){.thumbnail}
>>
>> /// details | Si votre **Proxy** est différent de votre **Domain**.
>>
>> Dans ce cas, l'enregistrement de votre ligne SIP ne pourra pas aboutir directement.  
>> Pour y remédier, il convient de renseigner le `Proxy SIP` pour finaliser la configuration de votre ligne SIP dans Linphone.  
>> Lors de la configuration du compte SIP, ouvrez les paramètres avancés et renseignez votre **Proxy sortant** dans le champ `URL du serveur mandataire`. Dans notre exemple, nous renseignons **outbound-ovh-1.sip-proxy.io**.
>>
>> ![connexion linphone](images/linphone03ios.png){.thumbnail}
>>
>> Appuyez ensuite sur `Connexion`{.action}.
>>
>> ///
>>
>> Si la connexion aboutit, la mention `Connecté` apparaît en dessous de votre ligne SIP, en haut à gauche de la fenêtre.
>>
>> ![connexion réussie linphone](images/linphone04ios.png){.thumbnail}
>>
>> Vous pouvez dès lors être joint et composer des appels depuis votre ligne SIP OVHcloud.
>>
> Windows et macOS
>>
>> La version Desktop de Linphone est identique sous Windows et macOS.
>>
>> Une fois Linphone ouvert, un assistant vous permet de configurer votre compte SIP. Sélectionnez `Utiliser un compte SIP`{.action}.
>>
>> ![assistant linphone](images/linphone01windows.png){.thumbnail}
>>
>> Renseignez alors vos identifiants SIP OVHcloud dans les champs correspondants. Vous pouvez également définir un nom d'affichage qui sera présenté lors de vos émissions d'appels.<br>
>> Choisissez `UDP`{.action} pour le transport et cliquez sur `Utiliser`{.action}.
>>
>> ![connexion linphone](images/linphone02windows.png){.thumbnail}
>>
>> /// details | Si votre **Proxy** est différent de votre **Domain**.
>>
>> Dans ce cas, l'enregistrement de votre ligne SIP n'aboutit pas directement et un message d'erreur apparaît.  
>> Pour y remédier, il convient de renseigner le `Proxy SIP` pour finaliser la configuration de votre ligne SIP dans Linphone.  
>> Cliquez sur `⛭`{.action} en bas à gauche, puis sur `Préférences`{.action}.
>>
>> ![connexion linphone](images/linphone03windows.png){.thumbnail}
>>
>> Dans la partie `Comptes SIP`, cliquez sur l'icône `crayon`{.action} pour accéder à la modification des paramètres.
>>
>> ![connexion linphone](images/linphone04windows.png){.thumbnail}
>>
>> Depuis la fenêtre **Paramètres principaux du compte SIP**, renseignez dans les champs :
>>
>> - Adresse SIP : `"0033972XXXXXX" <sip:0033972XXXXXX@sip-domain.io>`
>> - Adresse du serveur SIP : `<sip:outbound-ovh-1.sip-proxy.io;transport=udp>`
>>
>> > [!primary]
>> >
>> > Remplacez les valeurs `0033972XXXXXX` par votre ligne SIP et `outbound-ovh-1` par votre proxy.
>>
>> Cliquez enfin sur `Confirmer`{.action}.
>>
>> ![connexion linphone](images/linphone05windows.png){.thumbnail}
>>
>> ///
>>
>> Si la connexion aboutit, une pastille de couleur verte apparaît à côté de votre ligne SIP, en haut à gauche de la fenêtre.
>>
>> ![connexion réussie linphone](images/linphone06windows.png){.thumbnail}
>>
>> Vous pouvez dès lors être joint et composer des appels depuis votre ligne SIP OVHcloud.
>>

### Dépannage

Si l'enregistrement a échoué, vérifiez que vous avez bien saisi les identifiants SIP OVHcloud, notamment le mot de passe SIP. En cas d'échecs répétés, [modifiez votre mot de passe SIP depuis l'espace client OVHcloud](/pages/web_cloud/phone_and_fax/voip/modifier-mot-de-passe-ligne-sip) et refaites un essai d'enregistrement avec un nouveau mot de passe SIP.

Vérifiez également que l'adresse IP depuis laquelle vous utilisez Linphone fait partie des adresses IP autorisées à utiliser votre ligne SIP. Pour plus de détails, consultez le guide [Restreindre sa ligne SIP OVHcloud par IP](/pages/web_cloud/phone_and_fax/voip/secure-sip-line-ovh).

Vous pouvez aussi tester l'enregistrement de votre ligne [sur un autre softphone](/pages/web_cloud/phone_and_fax/voip/register-sip-softphone-zoiper).

## Aller plus loin

[Utiliser une ligne SIP OVHcloud sur un softphone](/pages/web_cloud/phone_and_fax/voip/register-sip-softphone)

[Enregistrer une ligne SIP OVHcloud sur Zoiper](/pages/web_cloud/phone_and_fax/voip/register-sip-softphone-zoiper)

Échangez avec notre [communauté d'utilisateurs](/links/community).
