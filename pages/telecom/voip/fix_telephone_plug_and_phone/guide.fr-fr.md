---
title: 'Dépanner son téléphone OVHcloud'
slug: depannage-telephone-plug-and-phone
excerpt: 'Apprenez à dépanner votre téléphone OVHcloud'
section: 'Diagnostic et dépannage'
---

**Dernière mise à jour le 18/03/2022**
 
## Objectif

A la différence des modèles de téléphones historiques fonctionant sur la technologie cuivre analogique, les téléphones VoIP fournis par OVHcloud utilisent le réseau Internet.
Comme votre ordinateur, pour fonctionner correctement, un téléphone OVHcloud a donc besoin d'être :

- alimenté électriquement;
- raccordé à votre réseau local et communiquer sur Internet.

Il arrive qu'un téléphone VoIP ne fonctionne plus temporairement.<br>
Les causes peuvent être variées, comme un défaut d'alimentation électrique ou une problématique réseau telle qu'une connectivité limitée ou un souci de distribution d'adresses IP sur votre réseau.
 
**Découvrez comment diagnostiquer et dépanner votre téléphone OVHcloud.**
 
## Prérequis

- Être connecté à l'[espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr){.external}, partie `Télécom`{.action}.
- Disposer d'une [ligne téléphonique OVHcloud](https://www.ovhtelecom.fr/telephonie/voip/){.external}.
- Disposer d'un [téléphone fourni par OVHcloud](https://www.ovhtelecom.fr/telephonie/comparatif-des-telephones.xml){.external} et l'avoir installé.
 
## En pratique

Ce guide vous détaille les causes principales d'un défaut d'enregistrement de la ligne SIP associée à votre téléphone, suivant un ordre logique. 
Nous vous conseillons donc de suivre l'ordre étapes de vérification ci-dessous afin de dépanner votre téléphone.<br>
Si votre téléphone retrouve son fonctionnement normal après avoir suivi l'une des premières étapes de ce guide, il n'est évidemment pas nécessaire d'en poursuivre la lecture.

Cliquez sur l'image ci-dessous pour afficher un résumé des actions à entreprendre.

![logigramme de dépannage](images/logigramme-voip.png){.thumbnail}
 
### Étape 1 - Vérifier l'alimentation électrique du téléphone

Si l'écran du téléphone ne s'allume pas, commencez par vérifier son alimentation électrique :

Vérifiez tout d'abord que le téléphone est bien raccordé à une prise de courant. Si c'est bien le cas mais que l'écran reste éteint, branchez le téléphone sur une prise secteur murale, sans passer par une multiprise.<br>
Vous pouvez également brancher le téléphone en lieu et place d'un équipement fonctionnel.

Si malgré ces vérifications, l'écran du téléphone ne s'allume toujours pas, nous vous invitons à contacter notre service support via la création d'un ticket d'assistance depuis votre espace client OVHcloud. Veillez à précise dans ce ticket les tests que vous avez effectués. 

Si l'écran du téléphone est allumé mais qu'il ne fonctionne pas pour autant, poursuivez la lecture de ce guide.
 
### Étape 2 - Vérifier la connectivité réseau du téléphone

Si votre téléphone affiche en continu un message inhabituel à l'écran, tel que « erreur réseau » ou « obtention de l'adresse IP », il est fort probale que le téléphone ne parvienne pas à récupérer toutes les informations nécessaires à son fonctionnement depuis votre réseau local. Il convient donc alors de vérifier, dans l'ordre, les **branchements** du téléphone sur le réseau, l'état de votre **connexion à Internet** et la distribution fonctionnelle des **adresses IP** sur le réseau.

### Les branchements

Comme indiqué précédemment, chaque téléphone VoIP doit être raccordé à votre réseau local.<br> 
Vérifiez donc qu'un câble réseau Ethernet RJ45 est bien branché d'une part sur votre téléphone et d'autre part sur votre routeur / modem / Box Internet.

Sur le téléphone, le port à raccorder est souvent nommé « SW » (pour *switch*) ou « INT» (pour *Internet*). Un symbole « réseau » est fréquemment gravé à côté du port concerné.
Sur votre routeur / modem / Box Internet, le câble doit être raccordé à l'un des ports « SW » (pour *switch*). Sur une Box grand public, il s'agit fréquemment d'une série de 4 ports identiques, souvent d'une même couleur.

--- images exemple ? ---

### La connexion à Internet

Vérifiez que les ordinateurs connectés **au même réseau** que le téléphone OVHcloud disposent bien d'une connexion à Internet fonctionnelle.
Si ce n'est pas le cas, le défaut est donc probablement lié à votre réseau local ou à votre fournisseur d'accès à Internet.

Afin de le déterminer, connectez le téléphone (ou un ordinateur) **directement** sur le routeur / modem / Box Internet, sans passer par un équipement intermédiaire tel qu'un switch.<br>

- Le téléphone redevient fonctionnel ou l'ordinateur se connecte à Internet ? **Le défaut provient alors probablement du réseau local**. Contactez votre prestataire informatique pour effectuer un diagnostic ou vérifiez chaque élément de votre réseau.
- Le téléphone est toujours inopérant ou l'ordinateur ne se connecte pas à Internet ? **Le défaut est alors probablement un incident de connexion à Internet**. Contactez votre fournisseur d'accès à Internet pour effectuer un diagnostic de votre connexion.

Si OVHcloud est votre fournisseur d'accès à Internet, commencez par consulter la [carte des incidents](https://status.isp.ovh.net/) pour vérifier si un incident générique est en cours.
Si aucun incident générique n'est en cours dans votre zone géographique, consultez [nos guides « Diagnostic et dépannage »](https://docs.ovh.com/fr/xdsl/) pour effectuer un premier diagnostic de votre accès à Internet.<br>
Les guides suivants vous seront utiles :

- [Dépanner son accès Internet fibre](https://docs.ovh.com/fr/xdsl/depanner-diagnostic-acces-internet-fibre/)
- [Rétablir son service suite à une coupure complète ou partielle](https://docs.ovh.com/fr/xdsl/interruption-de-service/)
- [Rétablir la synchronisation d’une connexion suite à une coupure](https://docs.ovh.com/fr/xdsl/retablir-synchronisation-suite-coupure/)
- [Résoudre une interruption ou des lenteurs de navigation](https://docs.ovh.com/fr/xdsl/resoudre-interruption-lenteurs-navigation/)
- [Redémarrer ou réinitialiser une box OVHcloud](https://docs.ovh.com/fr/xdsl/redemarrer-reinitialiser-modem-adsl-ovh/)

#### L'attribution d'une adresse IP

Afin de fonctionner correctement, votre téléphone, au même titre que tout équipement réseau, doit récupérer une adresse IP locale depuis votre routeur.
Si vos branchements sont corrects, que votre connexion à Internet est fonctionnelle et que le téléphone continue à afficher en continu un message inhabituel lié au réseau, vous devez vérifier que le téléphone se voit bien attribuer une adresse IP locale.

Rendez-vous dans le menu du téléphone et cherchez le sous-menu « réseau » ou « network ». Le nom exact de ce sous-menu peut varier en fonction du modèle de téléphone, aidez-vous de sa documentation en ligne au besoin.
Cherchez une ligne du menu généralement intitulée « IP », « Adresse IP », « IP Address», « IPv4 ». Si l'adresse indiquée est en 0.0.0.0 ou inexistante, cela signifique que le réseau local n'attribue pas d'adresse IP locale valide à votre téléphone.

Exemple d'une adresse IP **valide** sur un téléphone xxx:

--- images exemple ? ---

Exemple d'une adresse IP **invalide** sur un téléphone xxx:

--- images exemple ? ---

Contactez votre prestataire informatique pour effectuer un diagnostic ou vérifiez chaque élément de votre réseau. Vous pouvez également brancher le téléphone directement sur votre routeur / modem / Box Internet afin de vérifier si une adresse IP locale lui est cette fois attribuée.

### Étape 3 - Procéder à un dépannage du téléphone depuis l'espace client OVHcloud

Si, malgré les vérifications précédentes, votre téléphone reste inopérant, vous devez alors effectuer un dépannage par le biais de votre espace client OVHcloud.

> **Prérequis nécessaire: connaître l'adresse IP publique de votre réseau**
>
>

Pour démarrer la manipulation, connectez-vous à votre [espace client OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr){.external}, partie Télécom. Cliquez sur `Téléphonie`{.action} dans la barre de services à gauche, puis choisissez la ligne concernée. 

Positionnez-vous à présent sur l'onglet `Assistance`{.action}, puis cliquez sur le bouton `Dépannage Plug & Phone`{.action}.

![dépannage-plug-and-phone](images/depannage-plug-phone.png){.thumbnail}

### Étape 2 : réaliser les étapes de l'assistant de dépannage

Une fois sur l'assistant, celui-ci va vous guider en vous posant plusieurs questions et en vous proposant quelques manipulations. Suivez avec précision les informations qui s'affichent lors de la complétion des étapes de l'assistant. Ces dernières peuvent vous permettre de résoudre la panne que vous rencontrez.

Assurez-vous également que votre téléphone est correctement branché électriquement et bien connecté à votre réseau local.

![dépannage-plug-and-phone](images/depannage-plug-phone-part2.png){.thumbnail}

En fonction des informations sélectionnées, vous pourriez être amené à reconfigurer automatiquement votre téléphone. Si tel est le cas, soyez vigilant à bien suivre les trois manipulations qui s'affichent :

|Manipulations|Description|  
|---|---|  
|Vérifier l'adresse MAC du téléphone|L'adresse affichée dans votre espace client OVH doit être la même que celle sur votre téléphone. Vous pouvez la retrouver sur l'étiquette du constructeur.|  
|Entrer l'adresse IP du téléphone|Il s'agit de la dernière adresse IP connue de votre téléphone. Assurez-vous de renseigner la bonne adresse afin que la reconfiguration puisse arriver à son terme.|
|Redémarrer électriquement le téléphone|Après avoir redémarré, le téléphone récupérera un nouveau fichier de configuration, permettant ainsi de le reconfigurer.|

> [!warning]
>
> Si la reconfiguration de votre téléphone n'arrive pas à son terme, assurez-vous d'avoir bien respecté les manipulations précédentes.
>

### Étape 4 - Réinitialiser le téléphone
 
### Étape 5 - effectuez des tests complémentaires (facultatif)

Si la reconfiguration de votre téléphone n'a pas permis de résoudre votre problématique, poursuivez en réalisant deux tests complémentaires. 

#### 1. Réinitialiser votre modem

Il se peut que votre modem ne permette plus à votre téléphone de fonctionner correctement. Afin d'écarter cette éventualité, nous vous recommandons d'effectuer une réinitialisation de celui-ci. Pour cela, deux possibilités :

- **vous disposez d'un modem OVH** : reportez-vous aux instructions décrites dans notre documentation « [Redémarrer ou réinitialiser un modem ADSL OVH](https://docs.ovh.com/fr/xdsl/redemarrer-reinitialiser-modem-adsl-ovh/){.external} » ;

- **vous disposez d'un modem d'un autre opérateur** : reportez-vous à la documentation fournie par votre opérateur. 

#### 2. Effectuer un test croisé

Réaliser un test croisé permet de vérifier si l'incident provient par exemple d'un défaut de votre téléphone ou de votre modem. Pour cela, branchez votre téléphone sur un autre accès internet fonctionnel. 

Dès lors, deux possibilités :

- **votre téléphone fonctionne sur cet autre accès** : cela signifie que la problématique que vous rencontrez actuellement provient de votre modem (que ce soit sa configuration ou une panne matérielle) ;

- **votre téléphone ne fonctionne pas sur cet autre accès** : cela indique que la problématique que vous rencontrez actuellement provient de votre téléphone (que ce soit sa configuration ou une panne matérielle).
 
## Aller plus loin
 
Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.