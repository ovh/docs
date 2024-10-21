---
title: Ajouter un enregistrement CNAME pour valider votre domaine sur votre offre e-mail
excerpt: Découvrez comment valider votre nom de domaine sur votre plateforme e-mail en ajoutant un enregistrement CNAME
updated: 2023-08-29
---

## Objectif

Lorsque vous ajoutez un nom de domaine sur votre plateforme e-mail, la configuration d'un enregistrement CNAME dans la zone DNS peut vous être demandée. Celle-ci a pour but de s'assurer que le nom de domaine concerné est bien légitime pour être utilisé sur la plateforme e-mail.

> [!primary]
>
> Si le nom de domaine ajouté est géré dans le même compte client que la plateforme e-mail, plus particulièrement sa zone DNS, il n'y a pas d'enregistrement CNAME à configurer.

**Découvrez comment valider votre nom de domaine sur votre plateforme e-mail en ajoutant un enregistrement CNAME.**

## Prérequis

- Être connecté à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr){.external}, partie `Web Cloud`{.action}.
- Disposer d'une solution [Exchange](https://www.ovhcloud.com/fr/emails/) ou [Email Pro](https://www.ovhcloud.com/fr/emails/email-pro/).
- Avoir ajouté un nom de domaine sur votre plateforme e-mail. Vous pouvez vous aider du guide « [Ajouter un nom de domaine sur une plateforme e-mail](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/exchange_adding_domain) » si nécessaire.
- Être en mesure de [configurer la zone DNS](/pages/web_cloud/domains/dns_zone_edit) du nom de domaine concerné, depuis l'espace client OVHcloud ou depuis l'interface de gestion où il est enregistré.

## En pratique

### Pourquoi créer un enregistrement CNAME ?

L'enregistrement CNAME est utilisé ici en temps qu'alias, il pointe vers une cible qui elle-même renvoie vers une adresse IP. Il ne s'agit donc pas par nature d'un enregistrement lié à un service e-mail.

Dans le cadre de nos offres [**Hosted Exchange**](https://www.ovhcloud.com/fr/emails/hosted-exchange/) et [**Email Pro**](https://www.ovhcloud.com/fr/emails/email-pro/), cet enregistrement CNAME est utilisé comme code de validation (token) qui sera visible dans la zone DNS du nom de domaine à valider. Le but est de vérifier que l'utilisateur de la plateforme e-mail est bien le gestionnaire du nom de domaine qu'il ajoute.

Dans le schéma ci-dessous, la plateforme e-mail ([Exchange](https://www.ovhcloud.com/fr/emails/) ou [Email Pro](https://www.ovhcloud.com/fr/emails/email-pro/)) est représentée par le cadre vert.<br>
Pour former les adresses e-mail vous ajoutez des comptes (ici représentés par « **contact** », « **john.smith** » et « **mary.johnson** »).<br>
Le nom de domaine **mydomain.ovh** a été ajouté à la plateforme e-mail (référez-vous au guide « [Ajouter un nom de domaine sur une plateforme e-mail](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/exchange_adding_domain) »).<br>
Un code de validation est généré par la plateforme (sous la forme « **abcd1-check** » dans notre exemple).<br>
Si la zone DNS du nom de domaine **mydomain.ovh** n'est pas gérée dans le même compte client OVHcloud ou est gérée depuis une interface de gestion externe, ce code doit alors être ajouté sous la forme d'un enregistrement CNAME. Cet enregistrement est représenté par le cadre bleu dans l'exemple.<br>
La plateforme e-mail est en mesure d'observer les enregistrements DNS du nom de domaine **mydomain.ovh** pour vérifier la présence du code de validation.

![email](images/email-dns-conf-cname01.png){.thumbnail}

Une fois que la plateforme e-mail a pu lire le code de validation dans la zone DNS du nom de domaine **mydomain.ovh**, il devient possible de former les adresses **contact@mydomain.ovh**, **john.smith@mydomain.ovh** et **mary.johnson@mydomain.ovh**.

### Étape 1 - Comprendre le diagnostic CNAME d'OVHcloud <a name="step1"></a>

La pastille de diagnostic **CNAME** apparaît dans l'onglet `Domaine associés`{.action} de votre plateforme e-mail après avoir ajouté votre nom de domaine.

![cnamedomainemail](images/cname_exchange_diagnostic.png){.thumbnail}

Dans l'exemple ci-dessus, la pastille est rouge. Voici les raisons possibles de ce diagnostic :

- **le nom de domaine déclaré n'est pas géré dans le même compte client OVHcloud que votre plateforme e-mail** : réalisez [l'étape 3](#step3) de ce guide depuis l'espace client du compte OVHcloud qui gère la zone DNS du nom de domaine.
- **le nom de domaine déclaré utilise des serveurs DNS externes à OVHcloud** : le nom de domaine est enregistré chez OVHcloud mais vous utilisez des serveurs DNS « personnalisés ». Pour le vérifier, depuis la section `Noms de domaine`{.action} dans la colonne de gauche, sélectionnez le nom de domaine concerné. Depuis l'onglet `Information génrales`{.action}, vérifiez la mention « Serveurs DNS ». Si elle indique `Personnalisés`{.action}, vous devrez vous connecter à l'interface de gestion des serveurs DNS inscrits dans l'onglet `Serveurs DNS`{.action}

![email](images/email-dns-conf-cname02.png){.thumbnail}

- **le nom de domaine déclaré n'est pas enregistré chez OVHcloud et n'utilise pas des serveurs DNS OVHcloud** : le nom de domaine est enregistré dans un autre bureau d'enregistrement. Il vous faut vérifier depuis l'interface du bureau d'enregistrement du nom de domaine et vérifier les serveurs DNS utilisés pour identifier où vous devez configurer la zone DNS.

### Étape 2 - Récupérer le code de validation <a name="step2"></a>

Positionnez-vous sur l'onglet `Domaine associés`{.action} et cliquez sur la pastille de couleur rouge `CNAME`, dans la colonne « diagnostic », pour récupérer les informations nécessaires.

L'enregistrement CNAME est décrit dans la boite de dialogue qui apparaît.

![cnamedomainemail](images/cname_exchange_informations.png){.thumbnail}

Relevez alors le code unique visible sur la ligne du milieu (`a1bcd-check.mydomain.ovh to ovh.com.` dans l'exemple ci-dessus).

### Étape 3 - Créer l'enregistrement CNAME <a name="step3"></a>

Sélectionnez l'onglet correspondant à votre situation :

> [!tabs]
> **Depuis l'espace client OVHcloud**
>> Dans la partie `Web Cloud`{.action}, cliquez sur `Noms de domaine`{.action} puis sur le nom de domaine concerné. Sélectionnez ensuite l'onglet `Zone DNS`{.action}.<br>
>> La configuration de votre zone DNS apparaît. Pour ajouter un enregistrement CNAME, cliquez sur le bouton `Ajouter une entrée`{.action} à droite.<br>
>> Dans la nouvelle fenêtre, plusieurs enregistrements DNS vous sont proposés. Cliquez sur `CNAME`{.action} et complétez les champs en fonction des informations récupérées lors de [l'étape 2](#step2) de ce guide.<br>
>> Par exemple, si le code de validation est « **a1bcd-check** », celui-ci doit être saisi dans la case « sous-domaine ». Enfin, renseignez « **ovh.com.** » dans la partie « cible » en n'oubliant pas le « **.** » final.
>>
>> ![cnamedomainemail](images/cname_add_entry_dns_zone.png){.thumbnail}
>>
>> Une fois ces informations complétées, cliquez sur `Suivant`{.action}. Assurez-vous que les informations affichées sont correctes puis cliquez sur `Confirmer`{.action}.<br>
>>
>> > [!warning]
>> >
>> > La modification nécessite un temps de propagation généralement appliqué en quelques minutes. Il peut néanmoins aller jusqu'à 24 heures maximum.
>>
> **Depuis une interface externe à OVHcloud**
>>
>> Connectez-vous à l'interface qui gère la zone DNS du nom de domaine et ajoutez un enregistrement de type CNAME à celle-ci, avec les paramètres suivants :
>>
>> - **sous-domaine** : saisissez la valeur sous la forme « **xxxxx-check** » en remplaçant les « **x** » par le code unique relevé à l'étape [l'étape 2](#step2) de ce guide.
>> - **cible** : saisissez la valeur « **ovh.com.** » en n'oubliant pas le « **.** » final si votre interface de saisie ne le fait pas automatiquement.
>>
>> Validez cette modification dans votre zone DNS.
>>
>> > [!warning]
>> >
>> > Cette modification nécessite un temps de propagation, généralement appliqué en quelques minutes. Il peut néanmoins aller jusqu'à 24 heures maximum.
>> >
>>
>> Voici un exemple de réponse DNS après l'ajout d'un enregistrement CNAME de validation :
>>
>> ```bash
>> ab1cd-check.mydomain.ovh. 3600	IN	CNAME	ovh.com.
>> ```

Pour vérifier que la configuration de l'enregistrement CNAME a bien été lue par votre plateforme e-mail, retournez sur celle-ci et positionnez-vous dans l'onglet `Domaine associés`{.action}. Si la pastille `CNAME` n'est plus présente dans la colonne « diagnostic » , le nom de domaine est correctement ajouté. Dans le cas contraire, il se peut que la propagation ne soit pas encore terminée.

![cnamedomainemail](images/cname_exchange_diagnostic_green.png){.thumbnail}

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.