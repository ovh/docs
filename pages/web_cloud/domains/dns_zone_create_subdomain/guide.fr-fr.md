---
title: "Créer une zone DNS OVHcloud pour un sous-domaine"
excerpt: "Découvrez comment créer une zone DNS chez OVHcloud pour le sous-domaine d'un nom de domaine via votre espace client"
updated: 2026-02-19
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

Vous souhaitez créer une zone DNS pour un sous-domaine ?

La zone **D**omain **N**ame **S**ystem (**DNS**) d'un nom de domaine constitue son fichier de configuration. Elle se compose d'informations techniques, appelées *enregistrements DNS*. La zone DNS agit comme un centre d'aiguillage.

Pour plus d'explications, consultez nos guides ci-dessous :

- [Tout savoir sur les serveurs DNS](/pages/web_cloud/domains/dns_server_general_information)
- [Tout savoir sur la zone DNS](/pages/web_cloud/domains/dns_zone_general_information)
- [Tout savoir sur les enregistrements DNS](/pages/web_cloud/domains/dns_zone_records)

Le plus souvent, les enregistrements DNS d'un sous-domaine se configurent directement depuis la zone DNS active du nom de domaine dont il dépend.
Cependant, il est également possible de créer une zone DNS spécifique à un sous-domaine.

Pour diverses raisons, vous pouvez être amené à créer une zone DNS pour un sous-domaine chez OVHcloud.
Celui-ci disposera alors de sa propre zone pour configurer ses enregistrements DNS.

> [!success]
>
> Pour rappel :
>
> - Un nom de domaine a généralement cette forme : **domain.tld**. Par exemple : ovhcloud.com.
> - Un sous-domaine a généralement cette forme : **sub.domain.tld**. Par exemple : help.ovhcloud.com.
>
> Par défaut, un sous-domaine dépend d'un nom de domaine pour fonctionner.
> Concrètement, vous ne pourrez pas utiliser le sous-domaine **sub.domain.tld** si vous n'avez pas accès à la gestion du nom de domaine **domain.tld**.
>
> Si vous souhaitez créer une zone DNS pour un nom de domaine, consultez directement [ce guide](/pages/web_cloud/domains/dns_zone_create).

**Découvrez comment créer une zone DNS chez OVHcloud pour le sous-domaine d'un nom de domaine via votre espace client OVHcloud.**

## Prérequis

- Disposer du nom de domaine dont va dépendre le sous-domaine choisi.
- Le sous-domaine concerné ne doit pas déjà disposer d'une zone DNS (active ou non) chez OVHcloud ou faire l'objet d'une opération ou d'une commande en cours chez OVHcloud.

<!-- CP-NAV-START:web-dns-zone -->
---

### Accès à l'espace client OVHcloud

- **Lien direct :** [Zones DNS](/links/control-panel/web-dns-zone)
- **Pour accéder à vos services :** `Web Cloud`{.action} > `Zones DNS`{.action} > Sélectionnez votre nom de domaine

---
<!-- CP-NAV-END:web-dns-zone -->

## En pratique

### 1 - Créer la zone DNS via l'espace client OVHcloud

<!-- CP-STEPS-START:create-dns-zone -->
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
>> Sur la page qui apparaît, renseignez le sous-domaine (par exemple : *sub.domain.tld*) pour lequel vous souhaitez créer une zone DNS OVHcloud. Patientez quelques instants pendant que l'outil effectue des vérifications concernant le sous-domaine.
>>
>> ![dnszonecreate](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/adding-a-dns-zone.png){.thumbnail}
>>
>> Si un message indique que la zone DNS ne peut pas être créée, vérifiez que le sous-domaine respecte les prérequis nécessaires ou contactez la personne qui le gère. Dès que tout est correct, tentez de nouveau la manipulation.
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
<!-- CP-STEPS-END:create-dns-zone -->

### 2 - Éditer la zone DNS (facultatif)

La zone DNS pour votre sous-domaine étant maintenant créée, vous pouvez dès à présent l'éditer. Cette manipulation est facultative, mais peut se révéler nécessaire si vous souhaitez assurer la continuité de la disponibilité des services liés à ce sous-domaine (comme un site web et/ou des e-mails).

Pour éditer cette zone DNS, consultez notre guide « [Éditer une zone DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit) ».

> [!primary]
>
> Si vous venez juste de créer la zone DNS et que le sous-domaine n'apparaît pas encore dans la liste de vos services, patientez 15 à 20 minutes puis rechargez la page.

### 3 - Déclarer les serveurs DNS dans la zone DNS active du nom de domaine dont dépend le sous-domaine choisi

L'activation d'une zone DNS pour un sous-domaine diffère de celle d'un nom de domaine, car un sous-domaine dépend obligatoirement d'un nom de domaine pour fonctionner.

Vous devez d'abord récupérer le nom des **serveurs DNS** OVHcloud associés à la zone DNS créée pour votre sous-domaine.

Pour les retrouver, cliquez sur les onglets ci-dessous pour afficher successivement chacune des **2** étapes.

<!-- CP-STEPS-START:retrieve-ns-servers -->
> [!tabs]
> **Étape 1**
>>
>> Accédez à la page [Zones DNS](/links/control-panel/web-dns-zone), puis choisissez le sous-domaine concerné.
>>
>> ![DNS zones](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
> **Étape 2**
>>
>> Dans le tableau présent sur la page qui s'affiche, repérez les 2 colonnes **Type** et **Cible**.
>>
>> ![DNS zones](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/tab.png){.thumbnail}
>>
>> Recherchez les 2 lignes de type **NS** et récupérez les 2 valeurs présentes dans la colonne **Cible**.
>> Les noms des serveurs DNS doivent avoir l'une des 3 formes suivantes :
>>
>> - `nsXX.ovh.net` et `dnsXX.ovh.net` ou, `nsXXX.ovh.net` et `dnsXXX.ovh.net` (où chaque `X` représente un chiffre compris entre **0** et **9**).
>> - `nsXX.ovh.ca` et `dnsXX.ovh.ca` ou, `nsXXX.ovh.ca` et `dnsXXX.ovh.ca` (où chaque `X` représente un chiffre compris entre **0** et **9**).
>> - `ns200.anycast.me` et `dns200.anycast.me` (si vous avez souscrit à l'option [DNS anycast](/links/web/domains-options)).
<!-- CP-STEPS-END:retrieve-ns-servers -->

Une fois les 2 noms de serveur DNS récupérés, 2 situations sont possibles :

**Cliquez sur l'une des 2 situations pour afficher le contenu.**

/// details | Le nom de domaine dont dépend votre sous-domaine a sa zone DNS active chez OVHcloud

Cliquez sur les onglets ci-dessous pour afficher successivement chacune des **4** étapes.

<!-- CP-STEPS-START:add-ns-entries-ovhcloud -->
> [!tabs]
> **Étape 1**
>>
>> Accédez à la page [Zones DNS](/links/control-panel/web-dns-zone), puis choisissez le nom de domaine concerné.
>>
>> ![DNS zones](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
> **Étape 2**
>>
>> Sur la droite ou en dessous du tableau, cliquez sur `Ajouter une entrée`{.action}.
>>
>> ![dns zone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/add-an-entry.png){.thumbnail}
>>
> **Étape 3**
>>
>> Dans la fenêtre qui s'ouvre, sélectionnez l'enregistrement DNS de type `NS`{.action}, puis cliquez sur `Suivant`{.action}
>>
>> ![dns zone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/add-an-entry-to-the-dns-zone.png){.thumbnail}
>>
> **Étape 4**
>>
>> Renseignez ensuite dans le champ `Sous-domaine *` le sous-domaine concerné (par exemple : `sub` pour le sous-domaine `sub.domain.tld`), et dans le champ `Cible *`, l'un des 2 serveurs DNS précédemment récupérés (par exemple : `nsXX.ovh.net`).
>>
>> ![dns zone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/add-a-ns-entry-to-the-dns-zone.png){.thumbnail}
>>
>> Cliquez enfin sur `Suivant`{.action}.
>>
>> Vérifiez le résumé, puis cliquez sur `Valider`{.action}.
>>
>> **Réitérez l'ensemble des étapes pour le second serveur DNS.**
>>
>> Si besoin, consultez en complément notre guide « [Éditer une zone DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit) ».
<!-- CP-STEPS-END:add-ns-entries-ovhcloud -->

///

/// details | Le nom de domaine dont dépend votre sous-domaine a sa zone DNS active chez un autre fournisseur

Dans ce cas précis, contactez votre fournisseur DNS en lui précisant que vous souhaitez ajouter 2 enregistrements DNS de type NS pour votre sous-domaine. 

Voici un exemple de demande à formuler auprès de votre fournisseur DNS :

<pre class="bgwhite"><code>
Bonjour,

Je souhaite ajouter dans la zone DNS active du nom de domaine <b>domain.tld</b> les enregistrements DNS de type NS suivants pour mon sous-domaine <b>sub.domain.tld</b> :

 - sub IN NS nsXX.ovh.net.
 - sub IN NS dnsXX.ovh.net.

Ceci afin d'activer une zone DNS spécifique pour mon sous-domaine <b>sub.domain.tld</b>.

Cordialement,
</code></pre>

Dans l'exemple ci-dessus, remplacez les valeurs **domain.tld**, **sub.domain.tld**, **nsXX.ovh.net** et **dnsXX.ovh.net** par vos propres valeurs.

///

> [!warning]
>
> **Le point d'attention qui suit ne concerne pas les 2 enregistrements DNS de type NS que vous venez d'ajouter.** 
>
> Si d'autres enregistrements DNS étaient présents dans la zone DNS active du nom de domaine dont dépend votre sous-domaine :
>
> 1. N'oubliez pas de les dupliquer dans la zone DNS créée pour votre sous-domaine.
> 2. Une fois dupliqués, retirez-les de la zone DNS active de votre nom de domaine.
>
> En effet, il risquerait d'y avoir un conflit dans la résolution DNS.

Après modification de la zone DNS du nom de domaine dont dépend votre sous-domaine, la propagation des modifications peut prendre jusqu'à **48 heures**.

## Aller plus loin

[Tout savoir sur les serveurs DNS](/pages/web_cloud/domains/dns_server_general_information)

[Tout savoir sur la zone DNS](/pages/web_cloud/domains/dns_zone_general_information)

[Tout savoir sur les enregistrements DNS](/pages/web_cloud/domains/dns_zone_records)

[Éditer une zone DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit)

Pour des prestations spécialisées (référencement, développement, etc.), contactez les [partenaires OVHcloud](/links/partner).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](/links/support).

Échangez avec notre [communauté d'utilisateurs](/links/community).
