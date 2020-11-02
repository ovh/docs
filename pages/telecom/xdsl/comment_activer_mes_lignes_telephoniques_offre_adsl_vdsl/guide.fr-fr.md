---
title: Comment activer mes lignes téléphoniques ? (Offre ADSL/VDSL/FTTH)
slug: comment-activer-mes-lignes-telephoniques-offre-adsl-vdsl
legacy_guide_number: '7962634'
space_key: CRXDSL
space_name: XDSL
section: Premiers pas
---

**Dernière mise à jour le 02/11/2020**

## Objectif {#objectif}
---------

Vous pouvez activer, selon votre offre internet, une ou plusieurs lignes téléphoniques sur votre pack ADSL/VDSL/FTTH. 
Ces dernières vous permettent d'émettre et recevoir des appels. Elles peuvent également être liées à un ou plusieurs numéros portés si vous en possédez.

Ces lignes ne sont pas livrées en même temps que l'accès ADSL/VDSL/FTTH, ce guide vous explique comment les activer.


## Prérequis {#prérequis}

-   Disposer d'un pack ADSL/VDSL/FTTH actif.
-   Disposer d'une ou plusieurs ligne(s) non activée(s) dans ce pack.


## En Pratique {#En-pratique}

### Combien de ligne puis-je activer? {#combien-de-ligne-puis-je-activer}

Selon l'offre ADSL/VDSL/FTTH à laquelle vous avez souscrite, vous disposez d'au minimum 1 emplacement pour ligne téléphonique et de 0 à 1 emplacement pour ligne fax virtuelle. 
Lorsque vous activez une ligne, celle-ci va occuper un emplacement.

Pour connaître le nombre d'emplacements libres restants :

-   rendez vous dans la rubrique **Telecom** de votre **Espace Client** sur <https://www.ovhtelecom.fr/manager/#/> ;

En sélectionnant votre pack, vous obtenez une vue globale des services associés à ce dernier, et ainsi en déduire le nombre d'emplacements encore disponible.



![](images/Activation01-edit.png){.thumbnail}

Dans notre cas, il y a:

-   1 emplacement téléphonique déjà activé ;
-   1 emplacement fax déjà activé.

Il reste un emplacement libre, nous pouvons donc activer 1 ligne téléphonique pour ce pack ADSL/VDSL/FTTH.

------------------------------------------------------------------------

### Comment activer les lignes associées à mon Pack? {#comment-activer-mes-lignes-associées-à-mon-pack}

S'il vous reste des emplacements libres, vous pouvez activer vos lignes téléphoniques/FAX. Pour cela:

-   rendez vous dans votre ****Espace Client**** sur <https://www.ovhtelecom.fr/manager/#/> ;
-   sélectionnez votre pack dans la liste de vos services ;
-   cliquez sur **"Activer un service"** dans le cadre **Téléphonie**.

![](images/Activation02-edit.png){.thumbnail}

Vous avez le choix d'activer la ligne **avec ou sans** téléphone.
Quelle différence y a-t-il à cela?

##### Sans Téléphone {#sans-téléphone}

Une ligne sans téléphone est une ligne qui sera techniquement configurée directement dans le modem sans action de votre part. Il vous suffira de brancher un simple téléphone analogique sur le modem. Plus de détails [ici](#comment-utiliser-les-lignes-activées-sans-téléphone).

Ce type d'activation nécessite que vous possédiez un téléphone analogique personnel.

Vous ne pouvez activer que deux lignes sans téléphone par accès car il n'y a que deux ports analogiques disponible sur le modem.

Pour activer une ligne sans téléphone :

-   choisissez le **Nombre de lignes** à activer (par défaut 1 est proposé)
-   sélectionnez la case **"Ligne SIP sans téléphone"**.
-   cliquez sur **"Valider la commande"** en bas de page.

![](images/Activation03-edit.png){.thumbnail}

Cette ligne sera ensuite disponible sous 1h environ.

##### Avec Téléphone {#avec-téléphone}

L'activation d'une ligne avec Téléphone inclut l'envoi d'un téléphone IP sous caution qu'il suffira de brancher sur le réseau de votre modem comme un simple ordinateur.

Vous pouvez consulter les détails techniques de chaque téléphone [ici](http://www.ovhtelecom.fr/telephonie/comparatif-des-telephones.xml){.external-link}[](http://www.ovhtelecom.fr/telephonie/comparatif-des-telephones.xml){.external-link}.

Pour activer une ligne avec téléphone :

-   choisissez le **Nombre de lignes** à activer (par défaut 1 est proposé)
-   cliquez sur la case du téléphone de votre choix.
-   choisissez le type de livraison :
    -   la livraison par transporteur à 9.99€ HT se fait via la société **DHL** sous 24h ouvrées.
    -   la livraison en point relais **Mondial Relay** gratuite et sous 48h ouvrées.
-   cliquez sur **"Valider la commande".**

![](images/Activation04-edit.png){.thumbnail}

Cette ligne sera alors disponible et utilisable après le branchement du téléphone sur votre modem.

### Activation d'une ligne Fax {#activation-dune-ligne-fax}

-   cliquez sur **"Activer un service"** dans la**Téléphonie**.
-   cliquez sur **"Activer**" lors de la confirmation.

![](images/Activation05-edit.png){.thumbnail}

Cette ligne sera alors disponible sous une heure environ.

Veuillez consulter [cette page](https://docs.ovh.com/fr/fax/){.external-link}[](https://docs.ovh.com/fr/fax/){.external-link}. afin d'avoir plus de détails sur l'utilisation de ce service.

------------------------------------------------------------------------

### Comment utiliser les lignes activées sans téléphone? {#comment-utiliser-les-lignes-activées-sans-téléphone}

Si vous avez activé une ligne sans téléphone, vous devez posséder un simple téléphone analogique à fréquence vocale, c'est à dire un téléphone qui peut être utilisé sur une ligne fixe France Télécom par exemple.

Pour que cette ligne soit utilisable, **les conditions suivantes doivent être remplies**:

![](images/2015-03-18-143620_120x314_scrot.png){.thumbnail}
![](images/Activation06-edit.png){.thumbnail}
![](images/untitled.jpg){.thumbnail}

Le voyant **Voice** du modem doit être allumé pour les modems technicolor (TG788 et TG799). Le voyant **Phone** du modem doit être allumé sur les modems Zyxel.
Si ce n'est pas le cas, vérifiez bien que l'activation de ligne est lancée sur le manager et patientez une heure.

Votre téléphone analogique doit être branché sur le port **phone 1** du modem (ou le port **phone 2** si c'est la deuxième ligne sans téléphone).

Il y a une inversion sur les modems TG788 : le port phone2 est à gauche alors que le port phone1 est à droite.

## Aller plus loin

Consultez [nos guides dédiés à la configuration de vos lignes](https://docs.ovh.com/fr/voip/).

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>
