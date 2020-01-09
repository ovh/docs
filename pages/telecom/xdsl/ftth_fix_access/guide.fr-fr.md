---
title: 'Dépanner son accès internet fibre'
slug: depanner-diagnostic-acces-internet-fibre
excerpt: 'Découvrez comment dépanner et remettre en service votre accès internet fibre OVH'
section: 'Diagnostic et dépannage'
---

**Dernière mise à jour le 18/03/2019**

## Objectif

Vous n’avez actuellement pas accès à Internet ou rencontrez une dégradation de la qualité de votre connexion (coupures intermittentes, lenteurs) ? Nous vous proposons quelques vérifications et manipulations pouvant vous permettre de vous dépanner seul et de rétablir votre service.

**Découvrez comment dépanner et remettre en service votre accès internet fibre OVH.**

## Prérequis

- Disposer d'un [accès internet fibre OVH](https://www.ovhtelecom.fr/offre-internet/){.external}. 
- Selon les vérifications que vous allez devoir réaliser, vous devrez soit : être à proximité des équipements internet (ONT et box OVH) ou disposer d'un ordinateur relié à votre box OVH via un câble Ethernet ou en Wi-Fi.

> [!primary]
>
> Ce guide s'adresse uniquement aux clients disposant d'un [accès internet fibre OVH](https://www.ovhtelecom.fr/offre-internet/){.external}. Si vous disposez d'un accès internet xDSL OVH, reportez-vous aux documentations xDSL correspondantes [accessibles depuis ce lien](https://docs.ovh.com/fr/xdsl/){.external}.
>

## En pratique

Afin de déterminer la cause précise du dysfonctionnement affectant votre accès internet fibre, il est nécessaire de procéder étape par étape. Suivez ainsi les indications ci-dessous, dans l'ordre, jusqu'au rétablissement de votre accès.

### Étape 1 : vérifier l'existence d'un incident déclaré

Rendez-vous sur la page <https://www.ovhtelecom.fr/xdsl/incident/#/> et vérifiez si votre accès internet fibre est affecté par un incident en cours.

- **Si votre accès est affecté** : prenez connaissance des éléments renseignés sur la page, puis patientez le temps de la résolution de l’incident.

- **Si votre accès n’est pas affecté** : poursuivez vers l'étape suivante.

### Étape 2 : vérifier le fonctionnement jusqu'à l'équipement ONT

Vérifiez le fonctionnement de votre accès fibre jusqu'à l'équipement ONT se trouvant à votre domicile. L'état des voyants vous permettra de savoir si le signal optique de votre accès internet fibre arrive correctement jusqu'à l'équipement ONT.

> [!warning]
>
> **Lors de vos manipulations : n'effectuez jamais un *reset* de l'équipement ONT**. 
>
> Une telle manipulation détruirait la configuration actuelle de celui-ci, le rendant inopérant. Seule l'intervention d'un technicien à votre domicile pourrait alors le remettre en état de marche. 
>

Du fait qu'il existe deux modèles différents, poursuivez la lecture vers celui installé à votre domicile. 

Si vous éprouvez des difficultés pour localiser ce dernier, aidez-vous des photos ci-dessous et vérifiez l'installation proche de la prise de fibre installée dans votre logement ou dans vos parties communes (comme un local électrique par exemple). 

|ONT Huawei|ONT Nokia|
|---|---|
|![diagnosticfibre](images/acces-internet-ont-huawei.jpg)|![diagnosticfibre](images/acces-internet-ont-nokia.jpg)|

#### ONT Huawei

Commencez en relevant l'état des trois voyants mentionnés ci-dessous sur l'appareil :

|Voyant|États et significations|
|---|---|
|Alimentation|**Vert fixe** : l'équipement ONT est allumé.<br> **Éteint** : l'équipement ONT est éteint.|
|Fibre|**Vert fixe** : la connexion avec le signal optique (fibre) est établie.<br> **Vert clignotant** : la connexion avec le signal optique (fibre) est en train de s'établir.<br> **Rouge fixe** : la connexion avec le signal optique (fibre) n'est pas établie.|
|État|**Éteint** : l'équipement ONT fonctionne correctement.<br> **Rouge clignotant lentement (toutes les deux secondes)** : l'équipement ONT est en train de se mettre à jour.<br> **Rouge fixe ou clignotant rapidement (deux fois par seconde)** : l'équipement ONT est défaillant.|

Dès lors, plusieurs possibilités, selon l'état des voyants.

- **Aucun voyant n’est allumé sur l'ONT** : assurez-vous que le bouton-poussoir « ON/OFF », situé sur une tranche de l'appareil, est bien enclenché sur **ON**. Vérifiez que le câble d'alimentation est correctement branché à ses deux extrémités. Testez éventuellement une autre prise électrique. Si le défaut persiste, prenez contact avec notre équipe support.

- **Le voyant « Fibre » est éteint** : assurez-vous que le câble de fibre optique est correctement relié à votre ONT et que celui-ci est en bon état (non plié ou non coincé sous un meuble). Essayez de redémarrer l'ONT grâce au bouton-poussoir « ON/OFF », situé sur une tranche de l'appareil. Si le défaut persiste, prenez contact avec notre équipe support.

- **Le voyant « État » est allumé en rouge fixe ou clignote rapidement** : essayez de redémarrer l'ONT grâce au bouton-poussoir « ON/OFF », situé sur une tranche de l'appareil. Si le défaut persiste, prenez contact avec notre équipe support. 

- **L'état des voyants indique que tout fonctionne correctement** : cela signifie que l'ONT est allumé et que la connexion avec le signal optique est établie. Dans ce cas, poursuivez vers l'étape 3 « [vérifier le fonctionnement jusqu'à la box OVH](https://docs.ovh.com/fr/xdsl/depanner-diagnostic-acces-internet-fibre/#etape-3-verifier-le-fonctionnement-jusqua-la-box-ovh){.external} ».

![diagnosticfibre](images/acces-internet-ont-huawei.jpg)

#### ONT Nokia

Commencez en relevant l'état des trois voyants mentionnés ci-dessous sur l'appareil :

|Voyant|États et significations|
|---|---|
|Power|**Vert fixe** : l'équipement ONT est allumé.<br> **Éteint** : l'équipement ONT est éteint.|
|Alarm|**Éteint** : l'équipement ONT fonctionne correctement.<br> **Rouge clignotant lentement (toutes les deux secondes)** : l'équipement ONT est en train de se mettre à jour.<br> **Rouge fixe ou clignotant rapidement (deux fois par seconde)** : l'équipement ONT est défaillant.|
|PON|**Vert fixe** : la connexion avec le signal optique (fibre) est établie.<br> **Vert clignotant** : la connexion avec le signal optique (fibre) est en train de s'établir.<br> **Rouge fixe** : la connexion avec le signal optique (fibre) n'est pas établie.|

Dès lors, plusieurs possibilités selon l'état des voyants.

- **Aucun voyant n’est allumé sur l'ONT** : assurez-vous que le bouton-poussoir « ON/OFF », situé sur une tranche de l'appareil est bien enclenché sur **ON**. Vérifiez que le câble d'alimentation est correctement branché à ses deux extrémités. Testez éventuellement une autre prise électrique. Si le défaut persiste, prenez contact avec notre équipe support.

- **Le voyant ON est éteint** : assurez-vous que le câble de fibre optique est correctement relié à votre ONT et que celui-ci est en bon état (non plié ou non coincé sous un meuble). Essayez de redémarrer l'ONT grâce au bouton-poussoir « ON/OFF », situé sur une tranche de l'appareil. Si le défaut persiste, prenez contact avec notre équipe support.

- **Le voyant « Alarm » est allumé en rouge ou clignote rapidement** : essayez de redémarrer l'ONT grâce au bouton-poussoir « ON/OFF », situé sur une tranche de l'appareil. Si le défaut persiste, prenez contact avec notre équipe support.

- **L'état des voyants indique que tout fonctionne correctement** : cela signifie que l'ONT est allumé et que la connexion avec le signal optique est établie. Dans ce cas, poursuivez vers l'étape 3 « [vérifier le fonctionnement jusqu'à la box OVH](https://docs.ovh.com/fr/xdsl/depanner-diagnostic-acces-internet-fibre/#etape-3-verifier-le-fonctionnement-jusqua-la-box-ovh){.external} ».

![diagnosticfibre](images/acces-internet-ont-nokia.jpg)

### Étape 3 : vérifier le fonctionnement jusqu'à la box OVH

Poursuivez par la vérification du fonctionnement de votre accès fibre jusqu'à la box OVH. Débutez par relever sur cette dernière l'état des trois voyants mentionnés ci-dessous :

|Voyant|États et significations|
|---|---|
|POWER|**Vert fixe** : la box OVH est allumée.<br> **Éteint** : la box OVH est éteinte.|
|WAN|**Vert fixe** : l'équipement ONT et la box OVH sont correctement reliés ensemble.<br> **Éteint** : l'équipement ONT et la box OVH ne sont pas correctement reliés ensemble.|
|INTERNET|**Vert fixe** : le service jusqu'à votre box OVH est fonctionnel et peut être utilisé.<br> **Vert clignotant** : la box OVH échange actuellement des données (un appareil utilise le service).<br> **Éteint** : la box OVH n'a pas la possibilité de vous connecter à Internet.|

Dès lors, plusieurs possibilités selon l'état des voyants.

- **Aucun voyant n’est allumé sur la box OVH** : poursuivez vers la partie « [3.1 Tests liés au voyant POWER](https://docs.ovh.com/fr/xdsl/depanner-diagnostic-acces-internet-fibre/#31-tests-lies-au-voyant-power){.external} ».

- **Le voyant « WAN » est éteint** : poursuivez vers la partie « [3.2 Tests liés au voyant WAN](https://docs.ovh.com/fr/xdsl/depanner-diagnostic-acces-internet-fibre/#32-tests-lies-au-voyant-wan){.external} ».

- **Le voyant « INTERNET » est éteint et le voyant « WAN » allumé** : poursuivez vers la partie « [3.3 Tests liés au voyant INTERNET](https://docs.ovh.com/fr/xdsl/depanner-diagnostic-acces-internet-fibre/#33-tests-lies-au-voyant-internet){.external} ».

- **L'état des voyants indique que tout fonctionne correctement** : cela signifie que la box OVH est allumée, reliée à l'ONT et connectée à Internet. Poursuivez alors vers l'étape 4 « [vérifier le fonctionnement jusqu'à vos équipements personnels](https://docs.ovh.com/fr/xdsl/depanner-diagnostic-acces-internet-fibre/#etape-4-verifier-le-fonctionnement-jusqua-vos-equipements-personnels){.external} ».

![diagnosticfibre](images/acces-internet-box-ovh.png)

#### 3.1 Tests liés au voyant « POWER »

Si le voyant « **POWER** » de votre box OVH n'est pas allumé vert fixe, réalisez dans l'ordre les tests ci-dessous.

1. **Vérifier le bouton d'alimentation** : assurez-vous que le bouton-poussoir « ON/OFF » est bien positionné sur **ON**.

2. **Vérifier le branchement de l'alimentation électrique** : assurez-vous que le câble d'alimentation électrique est correctement relié à la box OVH sous l'emplacement « **POWER** » prévu à cet effet et que son autre extrémité est reliée à une prise électrique.

3. **Tester une autre prise électrique** : essayez de brancher le câble d'alimentation sur une autre prise sans rallonge ni multiprise. 

Si malgré ces tests, le voyant « **POWER** » reste éteint, prenez contact avec notre équipe support afin de procéder à un échange de votre box OVH. 

![diagnosticfibre](images/acces-internet-box-ovh-test-power.png)

#### 3.2 Tests liés au voyant « WAN »

Si le voyant « WAN » de votre box OVH n'est pas allumé vert fixe, réalisez dans l'ordre les tests ci-dessous.

1. **Vérifier le branchement entre l'ONT et la box OVH** : assurez-vous qu'un câble Ethernet est bien relié de la box OVH sous l'emplacement « **WAN** » prévu à cet effet jusqu'à l'équipement ONT sous l'emplacement « **LAN** » prévu à cet effet. 

2. **Vérifier l'état de fonctionnement du port « **WAN** » de la box OVH** : changez de place le câble Ethernet actuellement relié sous l'emplacement « **WAN** » sur l'un des ports « **LAN** » (n'importe lequel), puis vérifiez si le voyant « **LAN** » s'est allumé sur l'ONT. Si tel est le cas, ceci indique que le port « **WAN** » de votre box OVH est défectueux. Prenez alors contact avec notre équipe support afin de procéder à un échange de celle-ci. 

3. **Vérifier l'état du câble Ethernet** : assurez-vous que le câble Ethernet reliant l'ONT à la box OVH est en bon état (non dénudé, non plié ou non coincé sous un meuble). Si possible, essayez de changer ce câble par un autre.

4. **Effectuer un *reset* de votre box OVH** (uniquement si le voyant « POWER » est allumé et ne clignote pas) : restez appuyé sur le bouton « **RESET** » pendant dix secondes jusqu'à apercevoir le voyant « **POWER** » clignoter, puis relâchez le bouton. Les paramètres par défaut sont alors restaurés et la box OVH redémarre.

Si malgré ces tests, le voyant « **WAN** » reste éteint, prenez contact avec notre équipe support afin de procéder à un échange de votre box OVH. 

![diagnosticfibre](images/acces-internet-box-ovh-test-wan.png)

#### 3.3 Tests liés au voyant « INTERNET »

Si le voyant « INTERNET » de votre box OVH est éteint et le voyant « WAN » allumé, réalisez dans l'ordre les tests ci-dessous.

1. **Effectuer un *reset* de votre box OVH** (uniquement si le voyant « POWER » est allumé et ne clignote pas) : restez appuyé sur le bouton « **RESET** » pendant dix secondes jusqu'à apercevoir le voyant « POWER » clignoter, puis relâchez le bouton. Les paramètres par défaut sont alors restaurés et la box OVH redémarre.

2. **Configurer manuellement les identifiants PPP** : réalisez la configuration ci-dessous dans l'éventualité où celle automatique de votre box OVH serait défaillante. 

Pour cela, connectez-vous depuis votre navigateur internet à l'interface web de votre box OVH en accédant à l'adresse `192.168.1.1`. Vous devrez renseigner un mot de passe pour y accéder. Celui-ci devrait se trouver à l'arrière de votre box OVH. Pour le modèle B50D, celui-ci se trouve à côté de « Admin Password » et le mot de passe par défaut est « 1234 ». Pour le modèle B10D, celui-ci se trouve à côté de « Login Password ».

Positionnez-vous ensuite sur le menu `Network Setting`{.action}, puis cliquez sur `Broadband`{.action}.

![diagnosticfibre](images/acces-internet-box-ovh-test-internet-step1.png)

Sur la page qui apparaît, modifiez l'interface nommée « ETHWAN » en cliquant sur le bouton représentant une feuille avec un crayon. En dessous de « PPP Information », renseignez vos identifiants PPP à côté de « PPP User Name » et « PPP Password ». 

Cliquez sur `OK`{.action}, puis patientez quelques instants le temps que la manipulation soit prise en compte. Si le voyant « **INTERNET** » reste éteint, prenez contact avec notre équipe support afin de poursuivre le diagnostic. 

![diagnosticfibre](images/acces-internet-box-ovh-test-internet-step2.png)

### Étape 4 : vérifier le fonctionnement jusqu'à vos équipements personnels

Poursuivez en vérifiant le fonctionnement de votre accès internet fibre jusqu'à vos équipements personnels, comme votre ordinateur ou une tablette.

> [!warning]
>
> Sachez que les informations ci-dessous ont pour but de vous accompagner dans certaines tâches liées à la configuration de votre ordinateur. Elles ne se substituent cependant pas à l’accompagnement d’un professionnel, comme un technicien informatique, si vous rencontrez des difficultés.
>

#### 4.1 Vérifier l'environnement entre votre box OVH et l'ordinateur

Il se peut qu'un élément perturbe la liaison entre votre box OVH et votre ordinateur. Pour le déterminer, réalisez les vérifications et manipulations ci-dessous :

- éteignez et/ou éloignez le plus possible toutes les sources électriques proches de votre box OVH (base téléphonique, enceinte, chargeur, lampe, etc.) ;

- si votre box OVH et votre ordinateur communiquent en Wi-Fi, connectez-les via un câble Ethernet. S'ils sont trop éloignés, essayez de les rapprocher le plus possible (au minimum dans une même pièce) ;

- si vous utilisez un équipement tiers entre votre box OVH et votre ordinateur (comme un répéteur Wi-Fi, des boîtiers CPL, un switch ou un hub), écartez-le afin de connecter directement votre box OVH et l'ordinateur.

Si votre connexion fonctionne de nouveau, c'est qu'un élément perturbe la liaison entre votre box OVH et votre ordinateur : écartez-le afin de résoudre la panne. Si votre connexion ne fonctionne toujours pas, poursuivez la lecture de cette documentation.

#### 4.2 Vérifier quelques éléments basiques de votre ordinateur

Il se peut qu'un élément basique de votre ordinateur (comme la configuration de votre navigateur internet ou de l'ordinateur lui-même) perturbe le bon fonctionnement de votre connexion. Pour le déterminer, réalisez les vérifications et manipulations ci-dessous :

- essayez de vous connecter via un onglet de navigation privée à votre navigateur internet ;

- utilisez, si cela est possible, un autre navigateur internet ;

- vérifiez que votre antivirus ou pare-feu ne ralentit pas ou ne bloque pas la connexion sur votre ordinateur ;

- vérifiez que la date et l'heure sont à jour sur votre ordinateur. Si ce n'est pas le cas, l'accès à certains sites bénéficiant d'un certificat SSL pourrait ne plus fonctionner ;

- si vous avez activé le protocole **IPv6** sur votre accès internet OVH, assurez-vous que le ou les sites qui ne fonctionnent pas sont bien accessibles via ce protocole. Si ce n'est pas le cas, désactiver l'IPv6 pourrait rétablir l'accès à ces pages. Cette gestion s'effectue dans l'espace client, en cliquant sur l'onglet `Mon accès`{.action} de l'accès à Internet concerné, puis sur la section « Caractéristiques ».

Si votre connexion fonctionne de nouveau, c'est qu'un élément perturbe son fonctionnement. Reconfigurez, réinitialisez ou écartez cet élément afin de résoudre la panne. Si votre connexion ne fonctionne toujours pas, poursuivez la lecture de cette documentation.

#### 4.3 Vérifier l'état de la carte réseau de votre ordinateur

> [!primary]
>
> La manipulation décrite ci-dessous a été réalisée depuis un ordinateur utilisant le système d'exploitation **Windows 10**. Si vous en utilisez un autre, les éléments ci-dessous peuvent vous donner quelques pistes à explorer de votre côté.
>
> Sachez cependant que ceux-ci ne se substituent pas à l'aide d'un professionnel, comme un technicien informatique, si vous rencontrez des difficultés.
>

Pour débuter la manipulation, effectuez un clic droit sur l'image en bas à gauche représentant le logo **Windows** et cliquez sur `Connexions réseau`{.action}. Dans la fenêtre qui apparaît, assurez-vous d'être bien positionné sur l'onglet `État`{.action} dans la barre de menu à gauche, puis cliquez sur `Modifier les options d'adaptateur`{.action}.

![diagnosticfibre](images/acces-internet-laptop-test-step1.png)

Dans la nouvelle fenêtre qui apparaît, les différentes cartes réseau (Wi-Fi ou Ethernet) installées sur votre ordinateur s'affichent. 

Si l'une de vos cartes n'apparaît pas dans la liste, c'est que celle-ci n'est pas installée ou qu'elle est hors service. Dans ce cas, vous devez vous rapprocher d'un professionnel, tel qu'un technicien informatique. 

![diagnosticfibre](images/acces-internet-laptop-test-step2.png)

Vous pouvez remarquer différents états concernant les cartes réseau.

|États|Illustration|Description|
|---|---|---|
|Active et connectée|![diagnosticfibre](images/acces-internet-laptop-test-step3.png)|La carte réseau est activée et vous êtes connecté à la box OVH. La connexion depuis cette carte doit donc être fonctionnelle.|
|Active et non connectée|![diagnosticfibre](images/acces-internet-laptop-test-step4.png)|La carte réseau est activée, mais vous n'êtes pas connecté à la box OVH. La connexion depuis cette carte n'est donc pas fonctionnelle.|
|Désactivée|![diagnosticfibre](images/acces-internet-laptop-test-step5.png)|La carte réseau est désactivée. La connexion depuis cette carte n'est donc pas fonctionnelle.|

Poursuivez la lecture de cette documentation selon l'état de la carte réseau qui doit être utilisée par votre ordinateur.

**Carte réseau désactivée** :

Pour l'activer, faites un clic droit sur l'image représentant la carte, puis cliquez sur `Activer`{.action}. Patientez alors le temps de son activation. Si la manipulation échoue, la carte est peut-être mal installée ou hors service. Dans ce cas, vous devrez vous rapprocher d'un professionnel, comme un technicien informatique. 

![diagnosticfibre](images/acces-internet-laptop-test-step6.png)

**Carte réseau active et non connectée** :

Selon votre méthode de connexion, une icône (Wi-Fi ou câble) sera présente en bas à droite de votre écran.

- **Pour une connexion Wi-Fi** (image de gauche) : l'icône indique que des connexions sont disponibles et vous invite à vous connecter à un réseau Wi-Fi. Pour cela, cliquez sur l'icône, sélectionnez le nom de votre réseau Wi-Fi (SSID), puis renseignez le mot de passe correspondant (clé Wi-Fi). Si besoin, ces informations se situent à l'arrière de votre box OVH.

- **Pour une connexion Ethernet par câble** (image de droite) : l'icône indique qu'aucune connexion n'est disponible et vous précise que la liaison entre votre ordinateur et votre box OVH n'est pas détectée. Vérifiez alors si un câble est bien présent entre votre ordinateur jusqu'à un port **LAN** de votre box OVH, ainsi que son état. Si possible, essayez un autre câble. Enfin, essayez de relier ce câble à un autre port **LAN** derrière votre box OVH. 

![diagnosticfibre](images/acces-internet-laptop-test-step7.png)

**Carte réseau active et connectée** :

Selon votre méthode de connexion, une icône de connexion Wi-Fi (image de gauche) ou de connexion câble (image de droite) sera présente en bas à droite de votre écran. Celle-ci indique que vous disposez d'un accès à Internet.

![diagnosticfibre](images/acces-internet-laptop-test-step8.png)

Si un triangle jaune est positionné sur l'icône de connexion (Wi-Fi ou câble), ceci indique que votre ordinateur est bien connecté à votre box OVH mais qu'il ne dispose pas d'un accès à Internet. 

Plusieurs causes peuvent expliquer cet état. Nous vous conseillons alors de :

- vérifier si votre box OVH est toujours connectée à Internet. Reportez-vous à l'état des voyants comme décrit précédemment ;
- vous assurer que la clé Wi-Fi utilisée est correcte. Essayez de vous connecter de nouveau en renseignant la bonne clé ;
- redémarrer votre ordinateur ainsi que votre box OVH en utilisant pour celle-ci le bouton-poussoir « ON/OFF », situé à l'arrière.

![diagnosticfibre](images/acces-internet-laptop-test-step9.png)

#### 4.4 Modifier la configuration Wi-Fi de votre box OVH

> [!primary]
>
> Si vous n'utilisez pas une connexion Wi-Fi, poursuivez dès à présent vers la manipulation suivante : « [4.5 Vérifier la configuration réseau de votre box OVH](https://docs.ovh.com/fr/xdsl/depanner-diagnostic-acces-internet-fibre/#45-verifier-la-configuration-reseau-de-votre-box-ovh){.external} ».
>

Votre connexion Wi-Fi n'est toujours pas fonctionnelle ? Deux vérifications peuvent ici vous permettre de rétablir votre accès.

- **Changer de canal Wi-Fi** : le réseau Wi-Fi est diffusé sur une plage de fréquences comportant 13 canaux. Si plusieurs box diffusent sur le même canal, des lenteurs de navigation, des coupures, voire une impossibilité de se connecter au réseau Wi-Fi peuvent survenir. Il est donc intéressant de tester différents canaux, afin de trouver le plus stable et le mieux adapté à votre situation ;

- **Modifier la clé Wi-Fi** : votre réseau Wi-Fi étant accessible par le biais d'une clé, il est possible que celle que vous utilisez ne soit pas correcte. Il est alors conseillé de modifier la clé Wi-Fi, afin d'être sûr d'en utiliser une fonctionnelle.

Pour accéder à la configuration de votre réseau Wi-Fi OVH, connectez-vous à votre [espace client OVH](https://www.ovhtelecom.fr/manager/auth/?action=gotomanager){.external}, partie `Télécom`. Cliquez sur `Accès Internet`{.action} dans la barre de services à gauche, puis sélectionnez le pack et l'accès Internet concerné. Positionnez-vous sur l'onglet `Mon modem`{.action} et cliquez sur `Configurer les réseaux Wi-Fi`{.action} dans la section `Configuration générale`{.action}.

![diagnosticfibre](images/acces-internet-laptop-test-step10.png)

Dans la page qui apparaît, cliquez sur le bouton représentant des points de suspension (à droite du réseau Wi-Fi que vous souhaitez configurer), puis sur `Éditer`{.action}. La configuration actuelle s'affiche en dessous du tableau. Vous pouvez y modifier le canal et la clé Wi-Fi. 

Validez vos changements grâce au bouton `Valider`{.action} et **patientez cinq minutes, le temps que la modification soit prise en compte par votre box OVH.** Si nécessaire, effectuez plusieurs tests concernant le canal Wi-Fi afin de trouver le plus stable et le mieux adapté à votre situation.

![diagnosticfibre](images/acces-internet-laptop-test-step11.png)

#### 4.5 Vérifier la configuration réseau de votre box OVH

Si la connexion n'est toujours pas fonctionnelle, assurez-vous que la configuration réseau actuellement en place sur votre box OVH permet toujours à vos équipements personnels de communiquer entre eux.

Pour cela, connectez-vous à votre [espace client OVH](https://www.ovhtelecom.fr/manager/auth/?action=gotomanager){.external}, partie `Télécom`. Cliquez sur `Accès Internet`{.action} dans la barre de services à gauche, puis sélectionnez le pack et l'accès Internet concerné. Positionnez-vous sur l'onglet `Mon modem`{.action} et descendez dans la page jusqu'à voir la section `Configuration réseau`{.action}.

Nous allons nous intéresser spécifiquement aux tableaux « IP LAN » et « DHCP ».

![diagnosticfibre](images/acces-internet-laptop-test-step12.png)

Si vous n'avez pas modifié la configuration réseau de votre box OVH, vous devriez trouver les informations ci-dessous :

- **Pour la configuration IP LAN** :

|Méthode de récupération d'adresse IP|Adresse IP LAN|Masque de sous-réseau|
|---|---|---|
|Statique|192.168.1.1|255.255.255.0|

- **Pour la configuration DHCP** :

|Serveur DHCP|Passerelle|DNS Primaire|DNS secondaire|Nom de domaine DHCP|Plage DHCP|Durée d'allocation d'une adresse|
|---|---|---|---|---|---|---|
|Actif|192.168.1.1|91.121.161.184|188.165.197.144|lan|192.168.1.64|86400|

Si vous ne retrouvez pas ces éléments dans la configuration de votre box, c'est qu'elle a été modifiée. Rapprochez-vous alors de la personne gérant votre installation informatique ou votre réseau, pour qu'elle puisse s'assurer que la configuration en place est bien fonctionnelle.

Vous avez également la possibilité de réinitialiser la configuration de votre box OVH. Toutefois, assurez-vous que cette opération ne provoquera pas l'indisponibilité de certains éléments de votre réseau local. 

Pour réinitialiser la configuration de votre box OVH, depuis l'onglet `Mon modem`{.action}, descendez dans la page jusqu'à voir la section `Configurations avancées`{.action}, puis cliquez sur `Réinitialiser la configuration OVH`{.action}. **Patientez cinq minutes le temps que la modification soit prise en compte par votre modem.**

![diagnosticfibre](images/acces-internet-laptop-test-step13.png)

#### 4.6 Vérifier la configuration de la carte réseau de votre ordinateur

> [!primary]
>
> La manipulation décrite ci-dessous a été réalisée depuis un ordinateur utilisant le système d'exploitation **Windows 10**. Si vous en utilisez un autre, les éléments ci-dessous peuvent vous donner quelques pistes à explorer de votre côté.
>
> Sachez cependant que ceux-ci ne se substituent pas à l'aide d'un professionnel, comme un technicien informatique, si vous rencontrez des difficultés.
>

Si la connexion n'est toujours pas fonctionnelle sur votre ordinateur, vérifier la configuration de la carte réseau utilisée sur celui-ci peut permettre de rétablir votre accès.

Pour cela, effectuez un clic droit sur l'image en bas à gauche représentant le logo **Windows** et cliquez sur `Connexions réseau`{.action}. Dans la fenêtre qui apparaît, assurez-vous d'être bien positionné sur l'onglet `État`{.action} dans la barre de menu à gauche, puis cliquez sur `Modifier les options d'adaptateur`{.action}.

![diagnosticfibre](images/acces-internet-laptop-test-step1.png)

Dans la nouvelle fenêtre qui apparaît, les différentes cartes réseau (Wi-Fi ou Ethernet) installées sur votre ordinateur s'affichent. Effectuez un clic droit sur la carte (Wi-Fi ou câble) concernée, puis sélectionnez `Propriétés`{.action}. Assurez-vous que la case à côté de `Protocole Internet version 4 (TCP/IPv4)` est bien cochée. Ensuite, cliquez sur le nom `Protocole Internet version 4 (TCP/IPv4)` pour qu'il s'affiche en surbrillance, puis cliquez sur le bouton `Propriétés`{.action}.

Au sein de cette nouvelle fenêtre, assurez-vous que « Obtenir une adresse IP automatiquement » et « Obtenir les adresses des serveurs DNS automatiquement » sont bien cochés. Cliquez finalement sur les boutons `OK`{.action} pour valider vos modifications, le cas échéant. 

![diagnosticfibre](images/acces-internet-laptop-test-step14.png)

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.