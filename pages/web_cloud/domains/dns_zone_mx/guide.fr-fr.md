---
title: "Configurer un enregistrement MX pour la gestion des emails"
excerpt: "Découvrez comment configurer un enregistrement MX sur votre nom de domaine chez OVHcloud"
updated: 2026-03-27
---

<style>
.w-600 {
  max-width:600px !important;
}
.w-300 {
  max-width:300px !important;
}
</style>

## Objectif

L'enregistrement MX permet de relier un nom de domaine au serveur de sa plateforme e-mail. Il est indispensable pour que le service e-mail de l'expéditeur puisse atteindre celui du destinataire.

**Découvrez comment configurer un enregistrement MX pour votre nom de domaine chez OVHcloud.**

## Prérequis

- Le nom de domaine concerné doit utiliser la configuration OVHcloud (c'est à dire les serveurs DNS d'OVHcloud).
- Disposer d'une offre MX Plan (incluse dans l'offre d’[hébergement web](/links/web/hosting), l'[hébergement gratuit 100M](/links/web/domains-free-hosting) ou l'offre MX Plan commandée séparément), une de nos [offres e-mail OVHcloud](/links/web/emails), ou un service e-mail externe.

<!-- CP-NAV-START:web-dns-zone -->
---

### Accès à l'espace client OVHcloud

- **Lien direct :** [Zones DNS](/links/control-panel/web-dns-zone)
- **Pour accéder à vos services :** `Web Cloud`{.action} > `Zones DNS`{.action} > Sélectionnez votre nom de domaine

---
<!-- CP-NAV-END:web-dns-zone -->

> [!primary]
>
> - Si votre nom de domaine n'utilise pas les serveurs DNS d'OVHcloud, vous devez réaliser la modification des enregistrements MX depuis l'interface du prestataire gérant la configuration de votre nom de domaine.
>
> - Si votre nom de domaine est enregistré chez OVHcloud, vous pouvez vérifier si ce dernier utilise notre configuration. Pour cela et si besoin, consultez notre guide « [Modifier les serveurs DNS d'un nom de domaine OVHcloud](/pages/web_cloud/domains/dns_server_edit) ».

## En pratique

### Comprendre le rôle des enregistrements MX

L'enregistrement MX (**M**ail e**X**change) est un type d’enregistrement DNS qui détermine quels serveurs e-mail de réception sont attachés à votre nom de domaine.

Pour bien comprendre son fonctionnement, nous allons nous appuyer sur un exemple:

- L'adresse **sender@otherdomain.ovh** envoie un e-mail vers **contact@mydomain.ovh**.
- Le serveur d'envoi d'e-mail (**Outgoing mail server**) interroge la zone DNS du nom de domaine **mydomain.ovh** et lit les enregistrements **MX**.
- L'e-mail est transmis vers l'URL de l'enregistrement **MX** lu.
- L'e-mail est envoyé vers la cible **mx0.mail.ovh.net** qui est précédée de la valeur **0**. Cette valeur correspond à la priorité : la valeur la plus faible est interrogée en premier et la plus élevée en dernier. Cela signifie que la présence de plusieurs enregistrements MX permet de pallier une absence de réponse du serveur désigné par l’enregistrement ayant la priorité la plus faible, en passant aux serveurs suivants dans l’ordre de priorité.

![email](/pages/assets/schemas/emails/mx-dns-resolution.png){.thumbnail .w-600}

Vous pouvez paramétrer plusieurs enregistrements MX pour un même nom de domaine. Il est alors nécessaire de définir un numéro de priorité pour chacun d'entre eux. Les enregistrements MX sont interrogés par ordre croissant, du numéro le plus faible au plus élevé, jusqu'à obtenir une réponse du serveur de réception.

> [!warning]
>
> De manière générale, **modifier les enregistrements MX dans la zone DNS de son nom de domaine est une manipulation délicate** : réaliser une mauvaise manipulation peut rendre impossible la réception des e-mails sur vos adresses. Nous vous invitons à être vigilant lors de la réalisation de cette manipulation.
> En cas de doute, nous vous conseillons de faire appel à un [prestataire spécialisé](/links/partner).

### Valeurs de la configuration MX OVHcloud <a name="mxovhcloud"></a>

Retrouvez ci-dessous la configuration MX OVHcloud à utiliser pour nos solutions MX Plan (seule ou incluse dans une offre d’[hébergement web OVHcloud](/links/web/hosting)), [E-mail Pro](/links/web/email-pro), [Exchange](/links/web/emails-exchange) et [Zimbra](/links/web/zimbra). Nos serveurs e-mail disposent d'un antispam et d'un antivirus intégré.

Ces valeurs sont communes à toutes ces offres, à l'exception de [Private Exchange](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/exchange_starting_private) et Dedicated Exchange.

|Domaine|TTL|Type d'enregistrement|Priorité|Cible|
|---|---|---|---|---|
|*laisser vide*|3600|MX|1|mx0.mail.ovh.net.|
|*laisser vide*|3600|MX|5|mx1.mail.ovh.net.|
|*laisser vide*|3600|MX|50|mx2.mail.ovh.net.|
|*laisser vide*|3600|MX|100|mx3.mail.ovh.net.|
|*laisser vide*|3600|MX|200|mx4.mail.ovh.net.|

Ces enregistrements MX doivent être configurés dans la zone DNS de votre nom de domaine.

### Configurer un enregistrement MX dans une zone DNS OVHcloud

Cliquez sur les onglets ci-dessous pour afficher successivement chacune des **5** étapes.

> [!tabs]
> **Étape 1**
>>
>> Accédez à la page [Zones DNS](/links/control-panel/web-dns-zone), puis choisissez le nom de domaine concerné.
>>
>> ![Zones DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
> **Étape 2**
>>
>> Le tableau affiche la configuration OVHcloud de votre nom de domaine. Chaque ligne correspond à un enregistrement DNS.
>>
>> Vérifiez si des enregistrements MX existent déjà en sélectionnant le type **MX** dans la liste de filtrage située au-dessus du tableau, puis validez.
>>
>> ![Enregistrement MX DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/mx-entries-research.png){.thumbnail .w-600}
>>
> **Étape 3**
>>
>> - Si des enregistrements MX existent déjà et que vous souhaitez les modifier, cliquez sur le bouton `...`{.action} à droite de chaque ligne du tableau concernée puis sur `Modifier l'entrée`{.action}.
>> - Si aucun enregistrement MX n'est présent, cliquez sur le bouton `Ajouter une entrée`{.action} à droite du tableau puis choisissez `MX`{.action}.
>>
> **Étape 4**
>>
>> Complétez les informations demandées en fonction de la solution e-mail choisie.
>>
>> **Si vous disposez d'une solution e-mail OVHcloud**, reportez-vous aux informations données à l'étape « [Connaître la configuration MX d'OVHcloud](#mxovhcloud) ».
>>
>> ![Enregistrement MX DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/modify-a-dns-zone-record-mx-step-1.png){.thumbnail .w-600}
>>
> **Étape 5**
>>
>> Une fois les informations complétées, finalisez les étapes puis cliquez sur `Valider`{.action}.

**Si vous disposez d'une autre solution e-mail**, reportez-vous aux informations communiquées par votre fournisseur de service e-mail.

> [!primary]
>
> La modification nécessite un temps de propagation de 4 à 24 heures avant d’être pleinement effective.

## Aller plus loin

[Généralités sur les serveurs DNS](/pages/web_cloud/domains/dns_server_general_information)

[Éditer une zone DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit)

[Améliorer la sécurité des e-mails via un enregistrement SPF](/pages/web_cloud/domains/dns_zone_spf)

[Améliorer la sécurité des e-mails via un enregistrement DKIM](/pages/web_cloud/domains/dns_zone_dkim)

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](/links/partner).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](/links/support).

Échangez avec notre [communauté d'utilisateurs](/links/community).