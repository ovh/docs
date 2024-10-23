---
title: "Comment retirer une adresse IP d'une liste d'adresses IP bloquées"
excerpt: "Découvrez comment demander le retrait d'une adresse IP d'une blocklist si vos services sont impactés par des fournisseurs d'antispam"
updated: 2024-10-21
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

La *blocklist* (ou liste de blocage) est un outil de lutte contre le spam utilisé sur les adresses IP (ou plages d'adresses IP) pour bloquer les e-mails considérés comme du spam ou susceptibles de contenir des programmes malveillants. Si un nom de domaine de messagerie ou une adresse IP est bloqué(e), les e-mails provenant de ce nom de domaine ou de cette adresse IP peuvent ne pas parvenir à leur client (serveur entrant / antivirus), ce qui a un impact sur la délivrabilité et la réputation de l'expéditeur. Les e-mails qui arrivent malgré tout à être transmis peuvent alors être acheminés dans le dossier spam du destinataire plutôt que vers sa boîte de réception.

Il est important de noter que les listes de blocage peuvent inclure des noms de domaine et des adresses IP qui ne représentent pas une menace pour les utilisateurs. De plus, certains services de filtrage du courrier indésirable prennent en compte le reverse DNS lors de l'évaluation des adresses IP, comme SpamRATS.

> [!primary]
> Consultez notre guide sur [comment éviter que vos e-mails ne soient marqués comme spam](/pages/bare_metal_cloud/dedicated_servers/mail_sending_optimization) pour connaître les bonnes pratiques à suivre avec un serveur de messagerie.
>

**Découvrez les actions à entreprendre pour retirer vos adresses IP OVHcloud d'une blocklist si elles y figurent.**

> [!warning]
> Les informations de ce guide sont susceptibles d'être modifiées et s'appliquent aux adresses IP nouvellement achetées. OVHcloud ne peut être tenu responsable des actions des fournisseurs tiers.
>
> Nous vous recommandons de contacter un [prestataire de services spécialisé](/links/partner) ou de contacter [notre communauté](/links/community) si vous rencontrez des difficultés ou des doutes concernant l’administration, l’utilisation ou la mise en œuvre de services sur un serveur.
>

## Prérequis

- Vos services ne sont actuellement pas concernés par une procédure de signalement d'abus.

## En pratique

### Fournisseurs pris en charge

- [Spamhaus](https://check.spamhaus.org/)
    - [Spamhaus Block List (SBL)](https://www.spamhaus.org/blocklists/spamhaus-blocklist/)  
    Si [l’IP figure dans la liste de blocage (SBL) de Spamhaus](https://check.spamhaus.org/sbl/listings/ovh.net/), créez une demande d’assistance depuis le [centre d'aide OVHcloud](https://help.ovhcloud.com/csm?id=csm_get_help). Notre équipe de support transmettra votre demande à notre équipe chargée des signalement d'abus, qui contactera ensuite le fournisseur de la liste de blocage.
    - [Exploits Block List (XBL)](https://www.spamhaus.org/blocklists/exploits-blocklist/) ou [Combined Spam Sources (CSS)](https://www.spamhaus.org/blocklists/mixed-spam-sources/)  
    Si votre IP figure dans la *Exploits Block List* et/ou dans la liste combinée des sources de spam, cela est dû à des problèmes de configuration. Veuillez suivre les étapes mentionnées sur le site Spamhaus pour retirer l'IP de la liste (voir l'exemple ci-dessous). Une fois les étapes suivies, vous pouvez le retirer vous-même de la liste.  
    /// details | Exemple

    ![spamhaus example](images/blocklist1.png){.thumbnail}  
    ![spamhaus example](images/blocklist2.png){.thumbnail}

    ///

- [SpamCop](https://www.spamcop.net/bl.shtml)

- [Barracuda](https://www.barracudacentral.org/lookups)

- [SpamRATS](https://spamrats.com/lookup.php)  
    Si vous utilisez votre propre serveur de messagerie, vous devrez configurer le nom de domaine dans le champ PTR où se trouvent les coordonnées du responsable. Seuls les serveurs e-mail correctement configurés sont supprimés de cette liste.  
    Vous devrez également [configurer la résolution DNS inverse](/pages/bare_metal_cloud/virtual_private_servers/configuring-reverse-dns).
    
    > [!primary]
    > **Bonnes pratiques :**
    > 
    > Les adresses IP utilisées pour l'envoi d'e-mails doivent correspondre au nom de domaine du responsable. Vous pouvez également utiliser des sous-domaines pour la résolution DNS inverse, tels que `mail.nom_de_domaine.com` ou `gateway.nom_de_domaine.com`.

### Fournisseurs non pris en charge

#### s5h.net

/// details | Plus d'informations...

Pour demander la suppression, rendez-vous sur cette page depuis l'adresse IP bloquée. Vous devriez être immédiatement retiré de la liste.

Vous pouvez également le faire avec les outils *telnet*, *curl* ou *wget*.

Pour retirer votre adresse IPv4 de la liste via *curl*, connectez-vous au serveur de messagerie indiqué, puis exécutez la commande suivante :

```bash
curl -4 http://www.usenix.org.uk/content/rblremove
```

Pour effectuer la même opération à l'aide de *telnet* à partir d'un hôte Windows/Linux, entrez les lignes *GET* et *Host* après la commande *telnet* comme indiqué ci-dessous.

```bash
telnet www.usenix.org.uk 80
```

```bash
GET /content/rblremove HTTP/1.1
```

```bash
Host: www.usenix.org.uk
```

Une explication détaillée est donnée sur le site <http://www.usenix.org.uk/content/rbl.html>.

///

#### UCEprotect

/// details | Plus d'informations...

Récemment, UCE Protect a placé plus d’un millier de nouveaux ASN sur sa blocklist. Malheureusement, notre ASN (AS16276) en a été affectée. Pour consulter la liste des autres ASN concernés et le nombre de nouveaux ASN ajoutés, veuillez vérifier les liens suivants :

- http://www.uceprotect.net/en/l3charts.php
- http://stats.uceprotect.net/?page=su

Notre équipe en carge des signalement d'abuss a contacté UCEProtect pour retirer notre ASN de la blocklist. De manière générale, UCEProtect souhaite que les opérateurs réseau des ASN nouvellement bloqués paient pour le retrait express de la liste. Comme tous les principaux fournisseurs, OVHcloud ne paie pas pour la radiation de la blocklist, car il s'agit d'un service qui est hors de notre contrôle. Le fait de payer pour le retrait d'une blocklist ne fait qu'augmenter la blocklist dans son ensemble, ce qui nuit à l'industrie.

UCEProtect prétend radier automatiquement les ASN au bout d’une semaine, ce qui, nous l’espérons, se produira, mais comme cela échappe à notre contrôle, nous ne pouvons fournir aucune garantie à ce sujet.

Si vous êtes actuellement concerné(e) par cette situation, nous vous recommandons de :

1. Utiliser des adresses IPv6 pour envoyer des e-mails. UCEProtect ne bloque pas les e-mails envoyés via IPv6. Tous nos services OVHcloud sont livrés avec au moins une seule adresse IPv6 que vous pouvez configurer. Tous les principaux fournisseurs de messagerie prennent désormais en charge l'IPv6.
2. Demander à la partie réceptrice de contacter son fournisseur de messagerie pour cesser d'utiliser la blocklist UCEProtect pour l'instant.

///

#### Fabel Spamsources

/// details | Plus d'informations...

Pour retirer une IP de la liste de Fabel Spamsources, accédez à leur [page de retrait de la liste](https://www.spamsources.fabel.dk/delist).

Cliquez sur `Please login to continue`{.action}, entrez votre adresse e-mail et vérifiez votre boîte de réception. Utilisez le code de vérification pour terminer la connexion.

Renseignez votre adresse IP, indiquez la raison de la demande de suppression, puis cliquez sur le bouton `Submit Query`{.action}.

![fabel example](images/blocklist3.png){.thumbnail}

Le retrait de la liste devrait prendre entre 20 et 30 minutes.

///

#### MIPSpace

/// details | Plus d'informations...

Pour [retirer une IP de MIPSpace](https://www.mipspace.com/remove.php), connectez-vous d'abord à [votre espace client OVHcloud](/links/manager) et assurez-vous que les informations suivantes sont à jour :

- [La résolution reverse DNS](/pages/bare_metal_cloud/virtual_private_servers/configuring-reverse-dns) (champ PTR).
- Les détails de votre organisation (*RWhois*) dans la section `Network`{.action} : Ouvrez `IP`{.action} puis cliquez sur le bouton `Engrenage`{.action} à droite. Sélectionnez `Gérer mes organisations`{.action} dans le menu déroulant.

///

## Aller plus loin

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](/links/partner).

Échangez avec notre [communauté d'utilisateurs](/links/community).