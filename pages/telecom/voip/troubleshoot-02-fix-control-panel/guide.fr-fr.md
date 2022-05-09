---
title: 'Dépanner son téléphone OVHcloud'
slug: depannage-telephone-plug-and-phone
excerpt: 'Apprenez à dépanner votre téléphone OVHcloud'
section: 'Diagnostic et dépannage'
order: 02
---

**Dernière mise à jour le 09/05/2022**
 
## Objectif

À la différence des modèles de téléphones historiques fonctionnant sur la technologie cuivre analogique, les téléphones VoIP fournis par OVHcloud utilisent le réseau Internet.

Pour fonctionner correctement, comme votre ordinateur, un téléphone OVHcloud a donc besoin d'être alimenté électriquement, d'être raccordé à votre réseau local et de communiquer sur Internet.

Les causes d'un dysfonctionnement d'un téléphone VoIP sont donc variées :

- un défaut d'alimentation électrique;
- une problématique réseau;
- un défaut temporaire de configuration du téléphone.
 
**Découvrez comment diagnostiquer et dépanner votre téléphone OVHcloud.**

## Prérequis

- Être connecté à l'[espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr){.external}, partie `Télécom`{.action}.
- Disposer d'une [ligne téléphonique OVHcloud](https://www.ovhtelecom.fr/telephonie/voip/){.external}.
- Disposer d'un [téléphone fourni par OVHcloud](https://www.ovhtelecom.fr/telephonie/comparatif-des-telephones.xml){.external} et l'avoir installé.

## En pratique

Voici la table des matières de ce guide, vous pouvez cliquer sur une des entrées pour y arriver directement :

[Etape 1 - Etablir un premier diagnostic](#step1)<br />
[Etape 2 - Réinitialiser le téléphone](#step2)<br />
[Etape 3 - Dépanner le téléphone depuis l'espace client OVHcloud](#step3)<br />
[Etape 4 - Effectuer des tests complémentaires (facultatif)](#step4)<br />
&emsp;&emsp;[4.1 - Réinitialiser votre routeur / modem / Box Internet](#step4-1)<br />
&emsp;&emsp;[4.2 - Effectuer un test croisé](#step4-2)<br />
[Etape 5 - Contacter l'assistance OVHcloud](#step5)<br />

Ce guide vous détaille les causes principales d'un défaut d'enregistrement de la ligne SIP associée à votre téléphone, suivant un ordre logique. 
Nous vous conseillons donc de **suivre l'ordre des étapes de diagnostic** afin de dépanner votre téléphone.<br>
Si votre téléphone retrouve son fonctionnement normal après avoir suivi l'une des premières étapes de ce guide, il n'est pas indispensable de suivre les étapes ultérieures.

Cliquez sur l'image ci-dessous pour afficher un résumé des actions à mener en fonction du défaut rencontré.

![logigramme de dépannage](images/logigramme-voip-v2.png){.thumbnail}

### Étape 1 - Etablir un premier diagnostic <a name="step1"></a>

**Question n°1 : Le défaut concerne-t-il un seul téléphone ?**

- **OUI** : Il s'agit donc vraisemblablement d'un incident isolé à votre poste, poursuivez la lecture de ce guide.
- **NON** : Si plusieurs téléphones sont affectés, cela indique probablement un défaut sur un équipement annexe et commun à ces téléphones (switch, routeur / modem / Box Internet). Vérifiez donc la connectivité réseau des téléphones en vous aidant de notre [tutoriel dédié au diagnostic du réseau local](https://docs.ovh.com/fr/voip/diagnostic-reseau-local/).

**Question n°2 : L'écran de votre téléphone s'allume-t-il ?**

- **OUI** : Poursuivez la lecture de ce guide.
- **NON** : Le défaut peut provenir du raccordement électrique de votre téléphone. Consultez tout d'abord notre [tutoriel dédié au diagnostic du réseau local](https://docs.ovh.com/fr/voip/diagnostic-reseau-local/).

**Question n°3 : Avez-vous déjà redémarré électriquement le téléphone ?**

- **OUI** : Poursuivez la lecture de ce guide.
- **NON** : Débranchez et rebranchez l'alimentation électrique du téléphone. Cela peut avoir pour effet de rétablir son fonctionnement. Si le téléphone est toujours en défaut, poursuivez la lecture de ce guide.

### Étape 2 - Réinitialiser le téléphone <a name="step2"></a>

> [!warning]
> **En cas de carnet de contacts ajouté manuellement sur le téléphone :**
>
> Si vous avez ajouté un carnet de contacts directement sur votre téléphone (sans passer par un ajout de contacts via l'espace client OVHcloud), la réinitialisation du téléphone entraînera la suppression du carnet de contacts. Par conséquent, assurez-vous de disposer d'une sauvegarde de ce carnet **avant** de réinitialiser le téléphone.
>

Une réinitialisation permet au téléphone de récupérer une configuration saine depuis les serveurs OVHcloud et de redevenir pleinement fonctionnel.

La réinitialisation d'un téléphone s'effectue généralement via son menu lorsqu'il en dispose d'un. Certains modèles de téléphones nécessitent parfois d'effectuer une combinaison de touches ou d'appuyer sur un bouton dédié.

Le tableau ci-dessous récapitule les manipulations à effectuer pour réinitialiser un téléphone, en fonction de la marque de celui-ci.

|Marque/Gamme|Procédure de réinitialisation|
|---|---|
|**Cisco** standard| Appuyez sur le bouton `Engrenage` pour accéder au menu principal.<br>Allez dans le sous-menu `Admin. Appareil`.<br>Sélectionnez l'option `Réinit. Usine`.<br>Validez la réinitialisation.|
|**Cisco** sans écran (modèle ATA191)|Appuyez pendant 10 secondes, avec un objet pointu, dans le trou `Reset` situé à l'arrière du boîtier Cisco.<br>Le voyant *Power* va clignoter durant la procédure de réinitialisation.<br>Les voyants *Power* puis *Internet* vont ensuite rester allumés, puis le voyant *Line 1* (ou *Line 2*) s'allumera.|
|**Gigaset** DECT (sans-fil)|Les manipulations sont à effectuer sur **la base éméttrice réceptrice** et non sur le socle de rechargement du combiné.<br>Cliquez sur [ce lien](https://raw.githubusercontent.com/ovh/docs/develop/pages/telecom/voip/troubleshoot-02-fix-control-panel/images/gigaset-dect.png) pour voir des modèles de bases émettrices/réceptrices Gigaset.<br><br>Débranchez l'alimentation électrique de la base émettrice/réceptrice.<br>Rebranchez l'alimentation électrique en **maintenant enfoncé le bouton unique de la base** (en façade de celle-ci).<br>Relâchez le bouton au bout de 30 secondes après avoir rebranché l'alimentation.|
|**Gigaset** standard|Dans le menu principal, sélectionnez le sous-menu `Réglages`.<br>Sélectionnez `Réinitialisation`.<br>Appuyez sur `OK` et confirmez la réinitialisation.|
|**Yealink** DECT (sans-fil)|Appuyez sur le bouton `OK` du combiné pour accéder au menu principal.<br>Sélectionnez les sous-menus `Réglages`puis `Réglages système`.<br>Sélectionnez `Reset Base`<br> Si un code PIN vous est demandé, entrez `0000` et validez.<br>Sélectionnez `Réinit d'usine` et validez.|
|**Yealink** standard|Appuyez pendant 10 secondes sur le bouton `OK` du téléphone.<br>Confirmez la réinitialisation.|

**Une fois le téléphone réinitialisé, la date et l'heure affichées sur sur son écran sont-elles exactes ?**

- **OUI** : Cela indique que le téléphone contacte bien les serveurs OVHcloud pour récupérer sa configuration. Poursuivez la lecture de ce guide afin d'effectuer un dépannage du téléphone. Cela lui permettra de récupérer les informations nécessaires à l'enregistrement de sa ligne SIP.
- **NON** : Le téléphone ne parvient pas à contacter efficacement les serveurs OVHcloud. Cela peut venir d'un défaut de configuration du réseau local. Consultez tout d'abord la partie « **Vérifier la connectivité réseau du téléphone** » de notre [tutoriel dédié au diagnostic du réseau local](https://docs.ovh.com/fr/voip/diagnostic-reseau-local/#connectivity).

### Étape 3 - Dépanner le téléphone depuis l'espace client OVHcloud <a name="step3"></a>

> **Prérequis nécessaire: connaître l'adresse IP publique de votre réseau**
>
> Pour procéder au dépannage, il est indispensable de connaître l'adresse IP publique du réseau sur lequel est raccordé votre téléphone.
>
> Rendez-vous sur <http://monip.ovh> et prenez note de l'adresse IP publique qui vous est indiquée.
>

Connectez-vous à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr){.external} puis cliquez sur l'onglet `Telecom`{.action}.

Cliquez sur `Téléphonie`{.action} et choisissez la ligne concernée. 

Rendez-vous dans l'onglet `Assistance`{.action} et cliquez sur le bouton `Dépannage Plug & Phone`{.action}.

![dépannage-plug-and-phone](images/control-panel01.png){.thumbnail}

Une fois dans l'assistant, celui-ci va vous guider en vous posant plusieurs questions et en vous proposant des manipulations.<br>
Suivez avec précision les informations qui s'affichent à chaque étape de l'assistant. Ces informations peuvent vous permettre de résoudre la panne que vous rencontrez.

Assurez-vous également que votre téléphone est correctement branché électriquement et bien connecté à votre réseau local.

> [!primary]
> L'image ci-dessous est donnée à titre d'exemple. Le modèle présenté et le nombre de questions peuvent varier selon le téléphone à dépanner. 

![dépannage-plug-and-phone](images/control-panel02.png){.thumbnail}

En fonction des informations sélectionnées, vous pourrez être amené à reconfigurer automatiquement votre téléphone. Si tel est le cas, veillez à bien suivre les trois manipulations qui s'affichent :

|Manipulations|Description|
|---|---|  
|Vérifier l'adresse MAC du téléphone|L'adresse affichée dans votre espace client OVHcloud doit être la même que l'adresse MAC, unique, sur votre téléphone. Vous pouvez la retrouver sur l'étiquette du constructeur, généralement à l'arrière ou sous le téléphone.|  
|Entrer l'adresse IP publique du téléphone|Il s'agit de la dernière adresse IP publique connue de votre téléphone. Assurez-vous de renseigner la bonne adresse afin que la reconfiguration puisse arriver à son terme.|
|Redémarrer électriquement le téléphone|Après avoir redémarré, le téléphone récupérera un nouveau fichier de configuration, permettant ainsi de le reconfigurer.|

> [!warning]
>
> Si la reconfiguration de votre téléphone n'arrive pas à son terme, assurez-vous d'avoir bien respecté les manipulations précédentes.
>
 
### Étape 4 - Effectuer des tests complémentaires (facultatif) <a name="step4"></a>

Si le dépannage de votre téléphone n'a pas permis de résoudre votre problématique, poursuivez en réalisant deux tests complémentaires. 

#### 4.1 Réinitialiser votre routeur / modem / Box Internet <a name="step4-1"></a>

> [!alert]
>
> La réinitialisation de votre routeur / modem / Box Internet peut entraîner la perte de potentielles configurations personnalisées sur celui-ci.
>
> **Ne réalisez cette étape que si vous êtes sûr de vous.**
>

Il se peut que votre routeur / modem / Box Internet ne permette plus à votre téléphone de fonctionner correctement. Afin d'écarter cette éventualité, vous pouvez effectuer une réinitialisation de celui-ci. Pour cela, deux possibilités :

- **vous disposez d'une box OVHcloud** : reportez-vous aux instructions décrites dans notre documentation « [Réinitialiser votre box OVHcloud](https://docs.ovh.com/fr/xdsl/redemarrer-reinitialiser-modem-adsl-ovh/#reinitialiser-votre-box-ovhcloud_1) » ;

- **vous disposez d'un routeur / modem / Box Internet d'un autre opérateur** : reportez-vous à la documentation fournie par votre opérateur. 

#### 4.2 Effectuer un test croisé <a name="step4-2"></a>

Réaliser un test croisé permet de vérifier si l'incident provient par exemple d'un défaut de votre téléphone ou de votre routeur / modem / Box Internet. Pour cela, branchez votre téléphone sur un autre accès à Internet fonctionnel. 

Dès lors, deux possibilités :

- **votre téléphone fonctionne sur cet autre accès** : cela signifie que la problématique que vous rencontrez actuellement provient de votre routeur / modem / Box Internet (que ce soit sa configuration ou une panne matérielle);

- **votre téléphone ne fonctionne pas sur cet autre accès** : cela indique que la problématique que vous rencontrez actuellement provient de votre téléphone (que ce soit sa configuration ou une panne matérielle). Dans ce cas de figure, nous vous invitons à contacter notre service support via la création d'un ticket d'assistance depuis votre espace client OVHcloud. Afin de faciliter le diagnostic du téléphone par nos équipes, veillez à bien détailler dans ce ticket les tests que vous avez déjà effectués.

### Étape 5 - Contacter l'assistance OVHcloud <a name="step5"></a>

Si votre téléphone OVHcloud reste inopérant malgré les manipulations décrites ci-dessus effectuées, nous vous invitons à contacter notre service support via la création d'un ticket d'assistance depuis votre espace client OVHcloud.<br>
Afin de faciliter le diagnostic du téléphone par nos équipes, veillez à bien détailler dans ce ticket l'ensemble des tests que vous avez déjà effectués.
 
## Aller plus loin <a name="gofurther"></a>

En cas de difficultés, nous vous recommandons de faire appel à l'un de [nos partenaires](https://partner.ovhcloud.com/fr/directory/).
 
Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
