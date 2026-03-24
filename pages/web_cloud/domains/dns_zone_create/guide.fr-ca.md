---
title: 'Créer une zone DNS OVHcloud pour un nom de domaine'
excerpt: 'Découvrez comment créer une zone DNS chez OVHcloud pour votre nom de domaine via votre espace client'
updated: 2026-03-10
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
pre {
    font-size: 14px !important;
}
pre.bgwhite {
    background-color: #fff !important;
    color: #000 !important;
    font-family: monospace !important;
    padding: 5px !important;
    margin-bottom: 5px !important;
}
pre.bgwhite code {
    background-color: #fff !important;
    border: solid 0px transparent !important;
    font-family: monospace !important;
    font-size: 0.90em !important;
    color: #000 !important;
}
.small {
   font-size: 0.90em !important;
}
</style>

## Objectif

La zone **D**omain **N**ame **S**ystem (**DNS**) d’un nom de domaine constitue le fichier de configuration de ce dernier. Elle se compose d’informations techniques, appelées *enregistrements DNS*. La zone DNS est, en quelque sorte, comme un centre d'aiguillage.

Pour plus d'explications, consultez nos guides suivants :

- [Tout savoir sur les serveurs DNS](/pages/web_cloud/domains/dns_server_general_information)
- [Tout savoir sur la zone DNS](/pages/web_cloud/domains/dns_zone_general_information)
- [Tout savoir sur les enregistrements DNS](/pages/web_cloud/domains/dns_zone_records)

Pour diverses raisons, vous pouvez être amené à créer une zone DNS pour votre nom de domaine chez OVHcloud.

**Découvrez comment créer une zone DNS chez OVHcloud pour votre nom de domaine via votre espace client OVHcloud.**

## Prérequis

- Disposer d’un nom de domaine.
- Le nom de domaine concerné ne doit pas déjà disposer d'une zone DNS (active ou non) chez OVHcloud ou faire l'objet d'une opération ou d'une commande en cours chez OVHcloud.

<!-- CP-NAV-START:web-dns-zone -->
---

### Accès à l'espace client OVHcloud

- **Lien direct :** [Zones DNS](/links/control-panel/web-dns-zone)
- **Pour accéder à vos services :** `Web Cloud`{.action} > `Zones DNS`{.action} > Sélectionnez votre nom de domaine

---
<!-- CP-NAV-END:web-dns-zone -->

## En pratique

> [!warning]
>
> Vous pouvez créer plusieurs zones DNS (chez différents fournisseurs/prestataires/hébergeur DNS) pour un même nom de domaine. Cependant, vous ne pouvez avoir qu'une seule zone DNS active pour votre nom de domaine. Cette restriction vise à éviter les *conflits DNS*.
>
> L'activation/désactivation d'une zone DNS se fait à partir de la déclaration des **serveurs DNS** auprès de votre nom de domaine. Vous pouvez modifier cette déclaration et changer les **serveurs DNS** d'un nom de domaine auprès : 
>
> - du *bureau d'enregistrement* où vous avez directement enregistré votre nom de domaine ;
> - du prestataire qui le gère si vous passez par un prestataire spécialisé pour gérer votre nom de domaine.
>
> En modifiant les **serveurs DNS** d'un nom de domaine, vous désactivez la configuration de l'ancienne zone DNS appliquée au profit de la configuration de la nouvelle zone DNS (présente sur les nouveaux **serveurs DNS** déclarés).
>
> Par conséquent, vérifiez bien, avant de changer les **serveurs DNS** déclarés auprès de votre nom de domaine, que la configuration de la nouvelle zone DNS correspond bien à vos attentes.
>

### 1 - Créer la zone DNS via l'espace client OVHcloud

Cliquez sur les onglets ci-dessous pour afficher successivement chacune des **3** étapes.

> [!tabs]
> **Étape 1**
>>
>> Accédez à la page [Zones DNS](/links/control-panel/web-dns-zone), puis cliquez sur le bouton `Commander`{.action}.
>>
>> ![DNS zones](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
> **Étape 2**
>>
>> Sur la page qui apparaît, renseignez le nom de domaine (exemple : *domain.tld*) pour lequel vous souhaitez créer une zone DNS OVHcloud. Patientez quelques instants le temps que l'outil effectue des vérifications concernant le nom de domaine.
>>
>> ![dnszonecreate](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/adding-a-dns-zone.png){.thumbnail}
>>
>> Si un message indique que la zone DNS ne peut pas être créée, vérifiez que le nom de domaine respecte les prérequis nécessaires ou contactez la personne qui le gère. Dès que tout est correct, tentez de nouveau la manipulation.
>>
> **Étape 3**
>>
>> Une fois la vérification terminée, choisissez d'activer ou non les entrées minimales pour la zone DNS que vous allez créer. Ce choix n'est pas définitif, vous pourrez toujours [éditer les enregistrements de la zone DNS](/pages/web_cloud/domains/dns_zone_edit) par la suite.
>>
>> ![dnszonecreate](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/adding-a-dns-zone-step-2.png){.thumbnail}
>>
>> |Activer les entrées minimales ?|Détails|
>> |---|---|
>> |Oui|Sélectionnez **Oui** si vous souhaitez personnaliser vous-même la zone DNS par la suite.<br>![minimal-dns-entries](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/dashboard-minimal-entries.png){.thumbnail}|
>> |Non|Sélectionnez **Non** si vous prévoyez d'utiliser des services OVHcloud comme un [hébergement web](/links/web/hosting), car la zone DNS sera automatiquement préconfigurée pour ces services.<br>![no-minimal-dns-entries](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/dashboard-ovh-full-entries.png){.thumbnail}|
>>
>> Une fois votre choix effectué, suivez les étapes affichées dans votre espace client OVHcloud jusqu'à la création de la zone DNS.

### 2 - Éditer la zone DNS (facultatif)

La zone DNS pour votre nom de domaine étant maintenant créée, vous pouvez l'éditer. Cette manipulation est facultative, mais elle peut se révéler nécessaire si vous souhaitez assurer la continuité de la disponibilité des services liés à ce nom de domaine (comme un site web et/ou des e-mails).

Pour éditer cette zone DNS, consultez notre guide « [Editer une zone DNS chez OVHcloud](/pages/web_cloud/domains/dns_zone_edit) ».

> [!primary]
>
> Si vous venez juste de créer la zone DNS et que le nom de domaine n'apparaît pas encore dans la liste de vos services, patientez 15 à 20 minutes puis rechargez la page.
>

### 3 - Modifier les serveurs DNS du nom de domaine

Une fois que la zone DNS chez OVHcloud est prête à être utilisée, reliez-la à votre nom de domaine pour appliquer la configuration qu'elle contient.

Vous devez donc récupérer au préalable les **serveurs DNS** d'OVHcloud sur lesquels la zone DNS OVHcloud a été créée pour votre nom de domaine.

Pour les retrouver, cliquez sur les onglets ci-dessous pour afficher successivement chacune des **2** étapes.

> [!tabs]
> **Étape 1**
>>
>> Accédez à la page [Zones DNS](/links/control-panel/web-dns-zone), puis choisissez le nom de domaine concerné.
>>
>> ![DNS zones](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
> **Étape 2**
>>
>> Dans le tableau présent sur la page qui s’affiche, repérez les 2 colonnes **Type** et **Cible**.
>>
>> ![DNS zones](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/tab.png){.thumbnail}
>>
>> Recherchez les 2 lignes de type **NS** et récupérez les 2 valeurs présentes dans la colonne **Cible**.
>> Les noms des serveurs DNS doivent avoir l’une des 3 formes suivantes :
>>
>> - `nsXX.ovh.net` et `dnsXX.ovh.net` ou, `nsXXX.ovh.net` et `dnsXXX.ovh.net` (où chaque `X` représente un chiffre compris entre **0** et **9**).
>> - `nsXX.ovh.ca` et `dnsXX.ovh.ca` ou, `nsXXX.ovh.ca` et `dnsXXX.ovh.ca` (où chaque `X` représente un chiffre compris entre **0** et **9**).
>> - `ns200.anycast.me` et `dns200.anycast.me` (si vous avez souscrit à l’option [DNS anycast](/links/web/domains-options)).

Une fois les 2 noms de serveur DNS récupérés, 2 situations sont possibles.

> [!primary]
>
> Pour rappel, vérifiez bien, avant de changer les **serveurs DNS** déclarés auprès de votre nom de domaine, que la configuration de la nouvelle zone DNS correspond bien à vos attentes.

**Cliquez sur l'une des 2 situations pour afficher le contenu.**

/// details | Le nom de domaine a sa zone DNS active chez OVHcloud

Consultez [ce guide](/pages/web_cloud/domains/dns_server_edit) pour vérifier ou modifier les serveurs DNS déclarés pour votre nom de domaine.

///

/// details | Le nom de domaine a sa zone DNS active chez un autre fournisseur

Dans ce cas précis, contactez votre fournisseur DNS en lui précisant que vous souhaitez ajouter 2 enregistrements DNS de type NS pour votre nom de domaine.

Voici un exemple de demande à formuler auprès de votre fournisseur DNS :

<pre class="bgwhite"><code>
Bonjour,

Pour mon nom de domaine <b>domain.tld</b>, je souhaite remplacer les serveurs DNS actuels par les serveurs DNS suivants :

 - nsXX.ovh.net.
 - dnsXX.ovh.net.

Cordialement,
</code></pre>

Dans l'exemple ci-dessus, remplacez les valeurs **domain.tld**, **nsXX.ovh.net** et **dnsXX.ovh.net** par vos propres valeurs.

///

Après modification des serveurs DNS du nom de domaine, la propagation des modifications peut prendre jusqu'à **48 heures**.

> [!success]
>
> Si vous souhaitez personnaliser les noms des serveurs DNS associés à la zone DNS active de votre nom de domaine, consultez notre guide « [Personnaliser les serveurs DNS d'un nom de domaine (Glue Records)](/pages/web_cloud/domains/glue_registry) ».
>

## Aller plus loin

[Tout savoir sur les serveurs DNS](/pages/web_cloud/domains/dns_server_general_information)

[Tout savoir sur la zone DNS](/pages/web_cloud/domains/dns_zone_general_information)

[Tout savoir sur les enregistrements DNS](/pages/web_cloud/domains/dns_zone_records)

[Éditer une zone DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit)

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](/links/partner).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](/links/support).

Échangez avec notre [communauté d'utilisateurs](/links/community).