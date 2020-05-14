---
title: Dépannage IP5000
slug: depannage-ip5000
section: Polycom IP5000
hidden: true
---

------------------------------------------------------------------------

**Sommaire :**

Niveau : Débutant

------------------------------------------------------------------------

### Mon téléphone ne s'allume pas {#mon-téléphone-ne-sallume-pas}

Si votre téléphone ne s'allume pas malgré le bon branchement du câble Ethernet, vérifiez :

-   que vous utilisez bien un port POE ou un équipement POE pour alimenter le téléphone ;
-   vérifiez le bon branchement du câble Ethernet sur votre équipement ;
-   si vous utilisez l'alimentation proposée en accessoire, vérifiez le bon branchement et le sens.

------------------------------------------------------------------------

### Lorsque je branche la pieuvre sur mon réseau, celui-ci ne fonctionne plus {#lorsque-je-branche-la-pieuvre-sur-mon-réseau-celui-ci-ne-fonctionne-plus}

Sur certains routeurs, une option du client DHCP envoyé par la pieuvre n'est pas supportée et provoque une coupure du réseau. Pour palier à cette problématique, il vous suffit de définir manuellement les paramètres de votre pieuvre :

-   Appuyez sur le bouton "**Menu**".
-   Appuyez sur "**Configuration**".
-   Appuyez sur "**Avancée**".
-   Le mot de passe est "**456**".
-   Allez dans "**Paramètresd'administration**".
-   Allez dans "**ConfigurationRéseau**".

Sur ce menu du téléphone, vous allez pouvoir le passer en adressage IP manuel.

------------------------------------------------------------------------

### Reconfiguration téléphone {#reconfiguration-téléphone}

Si la ligne configurée sur la pieuvre ne fonctionne plus, il faut la reconfigurer via ces étapes :

Vous devrez contacter notre support pour obtenir le mot de passe de la ligne.

-   Appuyez sur le bouton "**Menu**".

-   Appuyez sur "**Configuration**".

-   Appuyez sur "**Avancée**".

-   Le mot de passe est "**456**".

-   Allez dans "**Paramètres d**'**administration**".

-   Allez dans "**ConfigurationRéseau**".

-   Notez l'adresse IP et entrez la dans votre navigateur sous la forme : **http://ip\_relevee/**
-   Si la page vous demande un nom d'utilisateur et un mot de passe il s'agit de **Polycom** et le mot de passe est **456**.
-   Vous devriez arriver sur cette page :

![](images/PIP-1.png){.thumbnail}

-   Cliquez sur l'onglet "**SIP**".
-   Dans la catégorie "**Servers**", entrez dans le champ "**Address**" de la sous catégorie "**Outbound Proxy**" : 91.121.129.20
-   Dans le champ "**Port**" de cette catégorie, entrez **5962**
-   Dans le champ "**Transport**", choisissez "**UDP Only**"'

![](images/2015-06-08-145430_648x194_scrot.png){.thumbnail}

-   Dans la catégorie "**Server 1**" et "**Server 2**" :
    -   Dans le champ "**Address**", entrez le domaine de votre ligne : **sip.ovh.xx (où xx est le code du pays : Belgique = be, France = fr, Suisse = ch, Espagne = es, Allemagne = .de et Angleterre = co.uk)**.
    -   Dans le champ "**Transport**" mettez "**UDP Only**".
    -   Dans le champ "**Expires**" entrez 1800.
-   Pour sauvegarder la configuration, appuyez sur le bouton "**Submit**".

![](images/2015-06-08-150017_709x715_scrot.png){.thumbnail}

-   Cliquez sur "**Lines**" dans le menu principal.
    -   Dans le champ "**Display Name**", entrez le numéro de votre ligne au format international.
    -   Dans le champ "**Address**", entrez **le\_numero\_de\_votre\_ligne@sip.ovh.xx**. Par exemple : 0033972101010@sip.ovh.fr
    -   Dans le champ "**Authentification User ID**", entrez le numéro de votre ligne au format international.
    -   Dans le champ "**Authentication Password**", entrez le mot de passe de votre ligne.
    -   Dans le champ "**Label**", entrez le numéro de votre ligne au format international.
-   Vérifiez également que les valeurs dans "**Server 1**" et "**Server 2**" sont identiques à celles indiquées.
-   Pour sauvegarder la configuration, appuyez sur le bouton "**Submit**".

La pieuvre va redémarrer.

![](images/2015-06-08-161039_678x426_scrot.png){.thumbnail}
