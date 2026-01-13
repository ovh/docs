---
title: 'Dépanner son accès Internet fibre'
excerpt: 'Découvrez comment dépanner et remettre en service votre accès Internet fibre - FTTH, FTTE ou FTTO - OVHcloud'
updated: 2025-12-19
---

## Objectif

Vous n'avez actuellement pas accès à Internet ou rencontrez une dégradation de la qualité de votre connexion (coupures intermittentes, lenteurs) ? Nous vous proposons quelques vérifications et manipulations pouvant vous permettre de vous dépanner seul et de rétablir votre service.

**Découvrez comment dépanner et remettre en service votre accès Internet fibre - FTTH, FTTE ou FTTO - OVHcloud.**

## Prérequis

- Disposer d'un [accès Internet FTTH, FTTE ou FTTO OVHcloud](/links/telecom/offre-internet).
- Selon les vérifications que vous allez devoir réaliser, vous devrez être à proximité des équipements Internet (ONT ou RAD et box OVHcloud) ou disposer d'un ordinateur relié à votre box OVHcloud via un câble Ethernet ou en Wi-Fi.

> [!primary]
>
> Ce guide s'adresse uniquement aux clients disposant d'un [accès Internet FTTH, FTTE ou FTTO OVHcloud](/links/telecom/offre-internet). Si vous disposez d'un accès Internet xDSL OVHcloud, reportez-vous aux documentations xDSL correspondantes accessibles depuis [ce lien](/products/web-cloud-internet-internet-access).
>

## En pratique

Afin de déterminer la cause précise du dysfonctionnement affectant votre accès Internet fibre, il est nécessaire de procéder étape par étape. Suivez ainsi les indications ci-dessous, dans l'ordre, jusqu'au rétablissement de votre accès.

### Étape 1 : vérifier l'existence d'un incident déclaré (**uniquement pour les accès FTTH**)

Rendez-vous sur la page <https://status.isp.ovhcloud.com/> et vérifiez si votre accès Internet fibre est affecté par un incident en cours.

- **Si votre accès est affecté** : prenez connaissance des éléments renseignés sur la page, puis patientez le temps de la résolution de l'incident.

- **Si votre accès n'est pas affecté** : poursuivez vers l'étape suivante.

### Étape 2 : vérifier le fonctionnement jusqu'à l'équipement ONT (FTTH) ou RAD (FTTE et FTTO)

Vérifiez le fonctionnement de votre accès fibre jusqu'à l'équipement ONT ou RAD se trouvant sur site. L'état des voyants vous permettra de savoir si le signal optique de votre accès Internet fibre arrive correctement jusqu'à l'équipement ONT ou RAD.

Cliquez sur l'onglet correspondant à votre offre pour réaliser les vérifications.

> [!tabs]
> **FTTH** - Vérifications jusqu'à l'ONT
>>
>> > [!warning]
>> >
>> > **Lors de vos manipulations : n'effectuez jamais un *reset* de l'équipement ONT**. 
>> >
>> > Une telle manipulation détruirait la configuration actuelle de celui-ci, le rendant inopérant. Seule l'intervention d'un technicien sur site pourrait alors le remettre en état de marche. 
>> >
>>
>> Du fait qu'il existe deux modèles différents, poursuivez la lecture vers celui installé sur site.
>>
>> Si vous éprouvez des difficultés pour localiser ce dernier, aidez-vous des photos ci-dessous et vérifiez l'installation proche de la prise de fibre installée dans votre logement ou dans vos parties communes (comme un local électrique par exemple). 
>>
>> |ONT Huawei|ONT Nokia|
>> |---|---|
>> |![diagnosticfibre](images/acces-internet-ont-huawei.jpg)|![diagnosticfibre](images/acces-internet-ont-nokia.jpg)|
>>
>> **ONT Huawei**
>>
>> Commencez en relevant l'état des quatre voyants mentionnés ci-dessous sur l'appareil :
>>
>> |Voyant|États et significations|
>> |---|---|
>> |Alimentation|**Vert fixe** : l'équipement ONT est bien alimenté électriquement.<br> **Éteint** : l'équipement ONT n'est pas raccordé électriquement ou n'est pas allumé (bouton ON/OFF) ou est hors service.|
>> |Fibre|**Vert fixe** : la synchronisation optique (fibre) est établie.<br> **Vert clignotant** : un signal optique est détecté par l'équipement ONT.<br> **Éteint** : aucun signal optique n'est détecté par l'équipement ONT.|
>> |État|**Éteint** : l'équipement ONT fonctionne correctement.<br>**Rouge clignotant rapidement (deux fois par seconde)** : le signal optique présente une anomalie.| 
>> |LAN|**Vert clignotant** : fonctionnement normal, des données sont échangées entre l'équipement ONT et la box OVHcloud.<br>**Éteint** : il n'y a pas de communication entre l'équipement ONT et la box OVHcloud, via un câble RJ45.|
>>
>> Dès lors, plusieurs possibilités, selon l'état des voyants.
>>
>> - **Aucun voyant n'est allumé sur l'ONT** : assurez-vous que le bouton-poussoir « ON/OFF », situé sur une tranche de l'appareil, est bien enclenché sur **ON**. Vérifiez que le câble d'alimentation est correctement branché à ses deux extrémités. Testez éventuellement une autre prise électrique. Si le défaut persiste, [prenez contact avec notre équipe support](https://help.ovhcloud.com/csm?id=csm_get_help).
>>
>> - **Le voyant « Fibre » est éteint** : assurez-vous que le câble de fibre optique est correctement relié à votre ONT et que celui-ci est en bon état (non plié ou non coincé sous un meuble). Essayez de redémarrer l'ONT grâce au bouton-poussoir « ON/OFF », situé sur une tranche de l'appareil. Si le défaut persiste, [prenez contact avec notre équipe support](https://help.ovhcloud.com/csm?id=csm_get_help).
>>
>> - **Le voyant « État » est allumé en rouge fixe ou clignote rapidement** : essayez de redémarrer l'ONT grâce au bouton-poussoir « ON/OFF », situé sur une tranche de l'appareil. Si le défaut persiste, [prenez contact avec notre équipe support](https://help.ovhcloud.com/csm?id=csm_get_help). 
>>
>> - **L'état des voyants indique que tout fonctionne correctement** : cela signifie que l'ONT est allumé et que la connexion avec le signal optique est établie. Dans ce cas, poursuivez vers l'étape 3 « [vérifier le fonctionnement jusqu'à la box OVHcloud](#check-box) ».
>>
>> ![diagnosticfibre](images/acces-internet-ont-huawei.jpg)
>> 
>> **ONT Nokia**
>>
>> Commencez en relevant l'état des quatre voyants mentionnés ci-dessous sur l'appareil :
>>
>> |Voyant|États et significations|
>> |---|---|
>> |Power|**Vert fixe** : l'équipement ONT est bien alimenté électriquement.<br> **Éteint** : l'équipement ONT n'est pas raccordé électriquement ou n'est pas allumé (bouton ON/OFF) ou est hors service.|
>> |Alarm (ou LOS)|**Éteint** : l'équipement ONT fonctionne correctement.<br>**Rouge fixe** : le signal optique présente des anomalies LOF/LOS (pertes de frames/pertes de signal)|
>> |PON|**Vert fixe** : la synchronisation optique (fibre) est établie.<br> **Vert clignotant** : un signal optique (fibre) est détecté, la synchronisation est en train de s'établir.<br> **Éteint** : le signal optique (fibre) n'est pas/plus détecté par l'équipement ONT.|
>> |LAN|**Vert clignotant** : fonctionnement normal, des données sont échangées entre l'équipement ONT et la box OVHcloud.<br>**Éteint** : il n'y a pas/plus de communication entre l'équipement ONT et la box OVHcloud, via un câble RJ45.<br>**Vert fixe** : cela signifie que l'équipement ONT est bien relié à la box OVHcloud via un câble RJ45 mais il n'y a pas de communication de données entre ces deux éléments.|
>>
>> Dès lors, plusieurs possibilités existent selon l'état des voyants.
>>
>> - **Aucun voyant n'est allumé sur l'ONT** : assurez-vous que le bouton-poussoir « ON/OFF », situé sur une tranche de l'appareil est bien enclenché sur **ON**. Vérifiez que le câble d'alimentation est correctement branché à ses deux extrémités. Testez éventuellement une autre prise électrique. Si le défaut persiste, [prenez contact avec notre équipe support](https://help.ovhcloud.com/csm?id=csm_get_help).
>>
>> - **Le voyant PON est éteint** : assurez-vous que le câble de fibre optique est correctement relié à votre ONT et que celui-ci est en bon état (non plié ou non coincé sous un meuble). Essayez de redémarrer l'ONT grâce au bouton-poussoir « ON/OFF », situé sur une tranche de l'appareil. Si le défaut persiste, [prenez contact avec notre équipe support](https://help.ovhcloud.com/csm?id=csm_get_help).
>>
>> - **Le voyant « Alarm » (ou « LOS ») est allumé en rouge fixe ou clignote rapidement** : essayez de redémarrer l'ONT grâce au bouton-poussoir « ON/OFF », situé sur une tranche de l'appareil. Si le défaut persiste, [prenez contact avec notre équipe support](https://help.ovhcloud.com/csm?id=csm_get_help).
>>
>> - **L'état des voyants indique que tout fonctionne correctement** : cela signifie que l'ONT est allumé et que la connexion avec le signal optique est établie. Dans ce cas, poursuivez vers l'étape 3 « [vérifier le fonctionnement jusqu'à la box OVHcloud](#check-box) ».
>>
>> ![diagnosticfibre](images/acces-internet-ont-nokia.jpg)
>>
> **FTTE et FTTO** - Vérifications jusqu'au RAD
>>
>> Voici un schéma représentant l'équipement RAD :
>> 
>> ![diagnosticfibre](images/acces-internet-rad.png){.thumbnail}
>>
>> > [!primary]
>> >
>> > Le port « **NET 1** » du RAD est utilisé pour raccorder le RAD au PTO ou au bandeau optique via un module SFP et une jarretière optique.
>> >
>> > Le port « **NET 3** » du RAD est utilisé pour raccorder le port « **WAN** » de la box OVHcloud ou d'un routeur personnel via un câble Ethernet.
>>
>> Commencez en relevant l'état des voyants mentionnés ci-dessous sur l'appareil :
>>
>> |Voyant|États et significations|
>> |---|---|
>> |Power (« **PWR** »)|**Vert fixe** : le RAD est bien alimenté électriquement.<br>**Éteint** : le RAD n'est pas raccordé électriquement ou est hors service.|
>> |Test/Alarme (« **TST/ALM** »)|**Rouge fixe** : fonctionnement normal du RAD.<br>**Éteint** : le RAD n'est pas raccordé électriquement ou est hors service (perte de configuration).|
>> |Port « **NET 1** »|**Vert clignotant** : le signal optique est détecté. La jarretière optique est bien connectée entre le port « **NET 1** » du RAD et le PTO (ou bandeau optique).<br>**Éteint** : le signal optique n'est plus détecté.|
>> |Port « **NET 3** »|**Vert clignotant** : le câble Ethernet est connecté entre le port « **NET 3** » du RAD et le port « **WAN** » de la box OVHcloud ou du routeur personnel.<br>**Éteint** : il n'y a pas de communication entre le RAD et la box OVHcloud, via un câble Ethernet.|
>>
>> Dès lors, plusieurs possibilités existent selon l'état des voyants.
>>
>> - **Aucun voyant n'est allumé sur le RAD** : vérifiez l'alimentation électrique du RAD, essayez de le redémarrer en débranchant puis en rebranchant le câble d'alimentation. Si le défaut persiste, [prenez contact avec notre équipe support](https://help.ovhcloud.com/csm?id=csm_get_help).
>>
>> - **Le voyant TST/ALM est éteint** : essayez de redémarrer le RAD en débranchant puis en rebranchant le câble d'alimentation. Si le défaut persiste, [prenez contact avec notre équipe support](https://help.ovhcloud.com/csm?id=csm_get_help).
>>
>> - **Le voyant NET 1 est éteint** : assurez-vous que la jarretière optique est correctement raccordée entre le PTO ou le bandeau optique et le module SFP connecté au port **NET 1** du RAD, et que celle-ci est en bon état (non pliée ou non coincée sous un meuble). Essayez de redémarrer le RAD, en débranchant puis en rebranchant le câble d'alimentation. Si le défaut persiste, [prenez contact avec notre équipe support](https://help.ovhcloud.com/csm?id=csm_get_help).
>>
>> - **Le voyant NET 3 est éteint** : vérifiez que le câble Ethernet est bien raccordé du port **NET 3** du RAD au port **WAN** de la box OVHcloud ou du routeur personnel. Remplacez ensuite si besoin le câble Ethernet. Si le défaut persiste, [prenez contact avec notre équipe support](https://help.ovhcloud.com/csm?id=csm_get_help).
>>
>> - **L'état des voyants indique que tout fonctionne correctement** : cela signifie que le RAD est allumé et que la connexion avec le signal optique est établie. Dans ce cas, poursuivez vers l'étape 3 « [vérifier le fonctionnement jusqu'à la box OVHcloud](#check-box) ».

### Étape 3 : vérifier le fonctionnement jusqu'à la box OVHcloud <a name="check-box"></a>

Poursuivez par la vérification du fonctionnement de votre accès fibre jusqu'à la box OVHcloud. Débutez par relever sur cette dernière l'état des trois voyants mentionnés ci-dessous :

|Voyant|États et significations|
|---|---|
|POWER|**Vert fixe** : la box OVHcloud est allumée.<br> **Éteint** : la box OVHcloud est éteinte.|
|WAN|**Vert fixe** : l'équipement ONT ou RAD et la box OVHcloud sont correctement reliés ensemble.<br> **Éteint** : l'équipement ONT ou RAD et la box OVHcloud ne sont pas correctement reliés ensemble.|
|INTERNET|**Vert fixe** : le service jusqu'à votre box OVHcloud est fonctionnel et peut être utilisé.<br> **Vert clignotant** : la box OVHcloud échange actuellement des données (un appareil utilise le service).<br> **Éteint** : la box OVHcloud n'a pas la possibilité de vous connecter à Internet.|

Dès lors, plusieurs possibilités existent selon l'état des voyants.

- **Aucun voyant n'est allumé sur la box OVHcloud** : poursuivez vers la partie « [3.1 Tests liés au voyant POWER](#check-box-power) ».

- **Le voyant « WAN » est éteint** : poursuivez vers la partie « [3.2 Tests liés au voyant WAN](#check-box-wan) ».

- **Le voyant « INTERNET » est éteint et le voyant « WAN » allumé** : poursuivez vers la partie « [3.3 Tests liés au voyant INTERNET](#check-box-internet) ».

- **L'état des voyants indique que tout fonctionne correctement** : cela signifie que la box OVHcloud est allumée, reliée à l'ONT ou au RAD et connectée à Internet. Poursuivez alors vers l'étape 4 « [vérifier le fonctionnement jusqu'à vos équipements personnels](#check-personal-equipments) ».

![diagnosticfibre](images/acces-internet-box-ovh.png){.thumbnail}

#### 3.1 Tests liés au voyant « POWER » <a name="check-box-power"></a>

Si le voyant « **POWER** » de votre box OVHcloud n'est pas allumé vert fixe, réalisez dans l'ordre les tests ci-dessous.

1. **Vérifier le bouton d'alimentation** : assurez-vous que le bouton-poussoir « ON/OFF » est bien positionné sur **ON**.

2. **Vérifier le branchement de l'alimentation électrique** : assurez-vous que le câble d'alimentation électrique est correctement relié à la box OVHcloud sous l'emplacement « **POWER** » prévu à cet effet et que son autre extrémité est reliée à une prise électrique.

3. **Tester une autre prise électrique** : essayez de brancher le câble d'alimentation sur une autre prise sans rallonge ni multiprise. 

Si malgré ces tests, le voyant « **POWER** » reste éteint, [prenez contact avec notre équipe support](https://help.ovhcloud.com/csm?id=csm_get_help) afin de procéder à un échange de votre box OVHcloud. 

![diagnosticfibre](images/acces-internet-box-ovh-test-power.png){.thumbnail}

#### 3.2 Tests liés au voyant « WAN » <a name="check-box-wan"></a>

Si le voyant « WAN » de votre box OVHcloud n'est pas allumé vert fixe, réalisez dans l'ordre les tests ci-dessous.

1. **Vérifier le branchement entre l'ONT ou le RAD et la box OVHcloud** : assurez-vous qu'un câble Ethernet est bien relié du port « **WAN** » de la box OVHcloud jusqu'à l'équipement ONT sur le port « **LAN** » prévu à cet effet, ou jusqu'au RAD sur le port « **NET 3** » prévu à cet effet.

2. **Vérifier l'état de fonctionnement du port « WAN » de la box OVHcloud** : changez de place le câble Ethernet actuellement relié sous l'emplacement « **WAN** » sur l'un des ports « **LAN** » (n'importe lequel), puis vérifiez si le voyant « **LAN** » s'est allumé sur l'ONT, ou si le voyant « **NET 3** » s'est allumé sur le RAD. Si tel est le cas, ceci indique que le port « **WAN** » de votre box OVHcloud est défectueux. [Prenez alors contact avec notre équipe support](https://help.ovhcloud.com/csm?id=csm_get_help) afin de procéder à un échange de celle-ci. 

3. **Vérifier l'état du câble Ethernet** : assurez-vous que le câble Ethernet reliant l'ONT ou le RAD à la box OVHcloud est en bon état (non dénudé, non plié ou non coincé sous un meuble). Si possible, essayez de changer ce câble par un autre.

4. **Effectuer un *reset* de votre box OVHcloud** (uniquement si le voyant « POWER » est allumé et ne clignote pas) : restez appuyé sur le bouton « **RESET** » pendant dix secondes jusqu'à apercevoir le voyant « **POWER** » clignoter, puis relâchez le bouton. Les paramètres par défaut sont alors restaurés et la box OVHcloud redémarre.

Si malgré ces tests, le voyant « **WAN** » reste éteint, [prenez contact avec notre équipe support](https://help.ovhcloud.com/csm?id=csm_get_help) afin de procéder à un échange de votre box OVHcloud. 

![diagnosticfibre](images/acces-internet-box-ovh-test-wan.png){.thumbnail}

#### 3.3 Tests liés au voyant « INTERNET » <a name="check-box-internet"></a>

Si le voyant « INTERNET » de votre box OVHcloud est éteint et le voyant « WAN » allumé, réalisez dans l'ordre les tests ci-dessous.

1. **Effectuer un *reset* de votre box OVHcloud** (uniquement si le voyant « POWER » est allumé et ne clignote pas) : restez appuyé sur le bouton « **RESET** » pendant dix secondes jusqu'à apercevoir le voyant « POWER » clignoter, puis relâchez le bouton. Les paramètres par défaut sont alors restaurés et la box OVHcloud redémarre.

2. **Configurer manuellement les identifiants PPP** : réalisez la configuration ci-dessous dans l'éventualité où celle automatique de votre box OVHcloud serait défaillante. 

Pour cela, connectez-vous depuis votre navigateur Internet à l'interface web de votre box OVHcloud en entrant l'adresse `192.168.1.1`. Vous devrez renseigner un mot de passe pour y accéder. Celui-ci devrait se trouver à l'arrière de votre box OVHcloud.

- Pour le modèle **VMG8823-B50B**, le mot de passe se trouve à côté de « Admin Password ». Le mot de passe par défaut est « 1234 ».
- Pour les autres modèles, le mot de passe se trouve à côté de « Login Password ».

Positionnez-vous ensuite sur le menu `Network Setting`{.action}, puis cliquez sur `Broadband`{.action}.

![diagnosticfibre](images/acces-internet-box-ovh-test-internet-step1.png){.thumbnail}

Sur la page qui apparaît, modifiez l'interface correspondant à votre « [Profil modem](/pages/web_cloud/internet/internet_access/advanced_config_router_manually) », en cliquant sur le bouton représentant une feuille avec un crayon :

- Pour le profil standard, modifiez l'interface « ETH ».
- Pour le profil Bouygues, modifiez l'interface « ETH-BT ».
- Pour le profil Orange, modifiez l'interface « ETH-OR ».

![diagnosticfibre](images/acces-internet-box-ovh-test-internet-step2.png){.thumbnail}

En dessous de « PPP Information », renseignez vos identifiants PPP à côté de « PPP User Name » et « PPP Password ».

Cliquez sur `OK`{.action}, puis patientez quelques instants le temps que la manipulation soit prise en compte. Si le voyant « **INTERNET** » reste éteint, [prenez contact avec notre équipe support](https://help.ovhcloud.com/csm?id=csm_get_help) afin de poursuivre le diagnostic.

![diagnosticfibre](images/acces-internet-box-ovh-test-internet-step3.png){.thumbnail}

### Étape 4 : vérifier le fonctionnement jusqu'à vos équipements personnels <a name="check-personal-equipments"></a>

Poursuivez en vérifiant le fonctionnement de votre accès Internet fibre jusqu'à vos équipements personnels, comme votre ordinateur ou une tablette.

> [!warning]
>
> Sachez que les informations ci-dessous ont pour but de vous accompagner dans certaines tâches liées à la configuration de votre ordinateur. Elles ne se substituent cependant pas à l'accompagnement d'un professionnel, comme un technicien informatique, si vous rencontrez des difficultés.
>

#### 4.1 Vérifier l'environnement entre votre box OVHcloud et l'ordinateur

Il se peut qu'un élément perturbe la liaison entre votre box OVHcloud et votre ordinateur. Pour le déterminer, réalisez les vérifications et manipulations ci-dessous :

- éteignez et/ou éloignez le plus possible toutes les sources électriques proches de votre box OVHcloud (base téléphonique, enceinte, chargeur, lampe, etc.) ;

- si votre box OVHcloud et votre ordinateur communiquent en Wi-Fi, connectez-les via un câble Ethernet. S'ils sont trop éloignés, essayez de les rapprocher le plus possible (au minimum dans une même pièce) ;

- si vous utilisez un équipement tiers entre votre box OVHcloud et votre ordinateur (comme un répéteur Wi-Fi, des boîtiers CPL, un switch ou un hub), écartez-le afin de connecter directement votre box OVHcloud et l'ordinateur.

Si votre connexion fonctionne de nouveau, c'est qu'un élément perturbe la liaison entre votre box OVHcloud et votre ordinateur : écartez-le afin de résoudre la panne. Si votre connexion ne fonctionne toujours pas, poursuivez la lecture de cette documentation.

#### 4.2 Vérifier quelques éléments basiques de votre ordinateur

Il se peut qu'un élément basique de votre ordinateur (comme la configuration de votre navigateur Internet ou de l'ordinateur lui-même) perturbe le bon fonctionnement de votre connexion. Pour le déterminer, réalisez les vérifications et manipulations ci-dessous :

- essayez de vous connecter via un onglet de navigation privée à votre navigateur Internet ;

- utilisez, si cela est possible, un autre navigateur Internet ;

- vérifiez que votre antivirus ou pare-feu ne ralentit pas ou ne bloque pas la connexion sur votre ordinateur ;

- vérifiez que la date et l'heure sont à jour sur votre ordinateur. Si ce n'est pas le cas, l'accès à certains sites bénéficiant d'un certificat SSL pourrait ne plus fonctionner ;

- si vous avez activé le protocole **IPv6** sur votre accès Internet OVHcloud, assurez-vous que le ou les sites qui ne fonctionnent pas sont bien accessibles via ce protocole. Si ce n'est pas le cas, désactiver l'IPv6 pourrait rétablir l'accès à ces pages. Cette gestion s'effectue dans l'espace client, en cliquant sur l'onglet `Mon accès`{.action} de l'accès à Internet concerné, puis sur la section « Caractéristiques ».

Si votre connexion fonctionne de nouveau, c'est qu'un élément perturbe son fonctionnement. Reconfigurez, réinitialisez ou écartez cet élément afin de résoudre la panne. Si votre connexion ne fonctionne toujours pas, poursuivez la lecture de cette documentation.

#### 4.3 Vérifier l'état de la carte réseau de votre ordinateur

> [!primary]
>
> La manipulation décrite ci-dessous a été réalisée depuis un ordinateur utilisant le système d'exploitation **Windows 10**. Si vous en utilisez un autre, les éléments ci-dessous peuvent vous donner quelques pistes à explorer de votre côté.
>
> Sachez cependant que ceux-ci ne se substituent pas à l'aide d'un professionnel, comme un technicien informatique, si vous rencontrez des difficultés.
>

Pour débuter la manipulation, effectuez un clic droit sur l'image en bas à gauche représentant le logo **Windows** et cliquez sur `Connexions réseau`{.action}. Dans la fenêtre qui apparaît, assurez-vous d'être bien positionné sur l'onglet `État`{.action} dans la barre de menu à gauche, puis cliquez sur `Modifier les options d'adaptateur`{.action}.

![diagnosticfibre](images/acces-internet-laptop-test-step1.png){.thumbnail}

Dans la nouvelle fenêtre qui apparaît, les différentes cartes réseau (Wi-Fi ou Ethernet) installées sur votre ordinateur s'affichent. 

Si l'une de vos cartes n'apparaît pas dans la liste, c'est que celle-ci n'est pas installée ou qu'elle est hors service. Dans ce cas, vous devez vous rapprocher d'un professionnel, tel qu'un technicien informatique. 

![diagnosticfibre](images/acces-internet-laptop-test-step2.png){.thumbnail}

Vous pouvez remarquer différents états concernant les cartes réseau.

|États|Illustration|Description|
|---|---|---|
|Active et connectée|![diagnosticfibre](images/acces-internet-laptop-test-step3.png){.thumbnail}|La carte réseau est activée et vous êtes connecté à la box OVHcloud. La connexion depuis cette carte doit donc être fonctionnelle.|
|Active et non connectée|![diagnosticfibre](images/acces-internet-laptop-test-step4.png){.thumbnail}|La carte réseau est activée, mais vous n'êtes pas connecté à la box OVHcloud. La connexion depuis cette carte n'est donc pas fonctionnelle.|
|Désactivée|![diagnosticfibre](images/acces-internet-laptop-test-step5.png){.thumbnail}|La carte réseau est désactivée. La connexion depuis cette carte n'est donc pas fonctionnelle.|

Poursuivez la lecture de cette documentation selon l'état de la carte réseau qui doit être utilisée par votre ordinateur.

**Carte réseau désactivée** :

Pour l'activer, faites un clic droit sur l'image représentant la carte, puis cliquez sur `Activer`{.action}. Patientez alors le temps de son activation. Si la manipulation échoue, la carte est peut-être mal installée ou hors service. Dans ce cas, vous devrez vous rapprocher d'un professionnel, comme un technicien informatique. 

![diagnosticfibre](images/acces-internet-laptop-test-step6.png){.thumbnail}

**Carte réseau active et non connectée** :

Selon votre méthode de connexion, une icône (Wi-Fi ou câble) sera présente en bas à droite de votre écran.

- **Pour une connexion Wi-Fi** (image de gauche) : l'icône indique que des connexions sont disponibles et vous invite à vous connecter à un réseau Wi-Fi. Pour cela, cliquez sur l'icône, sélectionnez le nom de votre réseau Wi-Fi (SSID), puis renseignez le mot de passe correspondant (clé Wi-Fi). Si besoin, ces informations se situent à l'arrière de votre box OVHcloud.

- **Pour une connexion Ethernet par câble** (image de droite) : l'icône indique qu'aucune connexion n'est disponible et vous précise que la liaison entre votre ordinateur et votre box OVHcloud n'est pas détectée. Vérifiez alors si un câble est bien présent entre votre ordinateur jusqu'à un port **LAN** de votre box OVHcloud, ainsi que son état. Si possible, essayez un autre câble. Enfin, essayez de relier ce câble à un autre port **LAN** derrière votre box OVHcloud. 

![diagnosticfibre](images/acces-internet-laptop-test-step7.png){.thumbnail}

**Carte réseau active et connectée** :

Selon votre méthode de connexion, une icône de connexion Wi-Fi (image de gauche) ou de connexion câble (image de droite) sera présente en bas à droite de votre écran. Celle-ci indique que vous disposez d'un accès à Internet.

![diagnosticfibre](images/acces-internet-laptop-test-step8.png){.thumbnail}

Si un triangle jaune est positionné sur l'icône de connexion (Wi-Fi ou câble), ceci indique que votre ordinateur est bien connecté à votre box OVHcloud mais qu'il ne dispose pas d'un accès à Internet. 

Plusieurs causes peuvent expliquer cet état. Nous vous conseillons alors de :

- vérifier si votre box OVHcloud est toujours connectée à Internet. Reportez-vous à l'état des voyants comme décrit précédemment ;
- vous assurer que la clé Wi-Fi utilisée est correcte. Essayez de vous connecter de nouveau en renseignant la bonne clé ;
- redémarrer votre ordinateur ainsi que votre box OVHcloud en utilisant pour celle-ci le bouton-poussoir « ON/OFF », situé à l'arrière.

![diagnosticfibre](images/acces-internet-laptop-test-step9.png){.thumbnail}

#### 4.4 Modifier la configuration Wi-Fi de votre box OVHcloud

> [!primary]
>
> Si vous n'utilisez pas une connexion Wi-Fi, poursuivez dès à présent vers la manipulation suivante : « [4.5 Vérifier la configuration réseau de votre box OVHcloud](#check-box-network) ».
>

Votre connexion Wi-Fi n'est toujours pas fonctionnelle ? Deux vérifications peuvent ici vous permettre de rétablir votre accès.

- **Changer de canal Wi-Fi** : Le réseau Wi-Fi est diffusé sur une plage de fréquences comportant 13 canaux. Si plusieurs box diffusent sur le même canal, des lenteurs de navigation, des coupures, voire une impossibilité de se connecter au réseau Wi-Fi peuvent survenir. Il est donc intéressant de tester différents canaux, afin de trouver le plus stable et le mieux adapté à votre situation ;

- **Modifier la clé Wi-Fi** : Votre réseau Wi-Fi étant accessible par le biais d'une clé, il est possible que celle que vous utilisez ne soit pas correcte. Il est alors conseillé de modifier la clé Wi-Fi, afin d'être sûr d'en utiliser une fonctionnelle.

Pour accéder à la configuration de votre réseau Wi-Fi OVHcloud, suivez ces étapes :

1. Connectez-vous à votre [espace client OVHcloud](/links/manager) et cliquez sur `Télécom`{.action}.
1. Cliquez sur `Offres Internet`{.action} puis sur le *Pack* contenant l'accès à Internet concerné.
1. Cliquez sur votre accès à Internet fibre ou xDSL dans le cadre `Accès Internet` à droite.
1. Positionnez-vous sur l'onglet `Mon modem`{.action} et cliquez sur `Configurer les réseaux Wi-Fi`{.action} dans la section `Configuration générale`{.action}.

![diagnosticfibre](images/espaceclient2022.png){.thumbnail}

Dans la page qui apparaît, cliquez sur le bouton représentant des points de suspension (à droite du réseau Wi-Fi que vous souhaitez configurer), puis sur `Éditer`{.action}. La configuration actuelle s'affiche en dessous du tableau. Vous pouvez y modifier le canal et la clé Wi-Fi. 

Validez vos changements grâce au bouton `Valider`{.action} et **patientez cinq minutes, le temps que la modification soit prise en compte par votre box OVHcloud.** Si nécessaire, effectuez plusieurs tests concernant le canal Wi-Fi afin de trouver le plus stable et le mieux adapté à votre situation.

![diagnosticfibre](images/wifi-2022.png){.thumbnail}

#### 4.5 Vérifier la configuration réseau de votre box OVHcloud <a name="check-box-network"></a>

Si la connexion n'est toujours pas fonctionnelle, assurez-vous que la configuration réseau actuellement en place sur votre box OVHcloud permet toujours à vos équipements personnels de communiquer entre eux.

Pour cela, suivez ces étapes :

1. Connectez-vous à votre [espace client OVHcloud](/links/manager) et cliquez sur `Télécom`{.action}.
1. Cliquez sur `Offres Internet`{.action} puis sur le *Pack* contenant l'accès à Internet concerné.
1. Cliquez sur votre accès à Internet fibre ou xDSL dans le cadre `Accès Internet` à droite.
1. Positionnez-vous sur l'onglet `Mon modem`{.action} et descendez dans la page jusqu'à voir la section `Configuration réseau`{.action}.

Nous allons nous intéresser spécifiquement aux tableaux « IP LAN » et « DHCP ».

![diagnosticfibre](images/acces-internet-laptop-test-step12-2022.png){.thumbnail}

Si vous n'avez pas modifié la configuration réseau de votre box OVHcloud, vous devriez trouver les informations ci-dessous :

- **Pour la configuration IP LAN** :

|Méthode de récupération d'adresse IP|Adresse IP LAN|Masque de sous-réseau|
|---|---|---|
|Statique|192.168.1.1|255.255.255.0|

- **Pour la configuration DHCP** :

|Serveur DHCP|Passerelle|DNS Primaire|DNS secondaire|Nom de domaine DHCP|Plage DHCP|Durée d'allocation d'une adresse|
|---|---|---|---|---|---|---|
|Actif|192.168.1.1|91.121.161.184|188.165.197.144|lan|192.168.1.64|86400|

Si vous ne retrouvez pas ces éléments dans la configuration de votre box, c'est qu'elle a été modifiée. Rapprochez-vous alors de la personne gérant votre installation informatique ou votre réseau, pour qu'elle puisse s'assurer que la configuration en place est bien fonctionnelle.

Vous avez également la possibilité de réinitialiser la configuration de votre box OVHcloud. Toutefois, assurez-vous que cette opération ne provoquera pas l'indisponibilité de certains éléments de votre réseau local. 

Pour réinitialiser la configuration de votre box OVHcloud, depuis l'onglet `Mon modem`{.action}, descendez dans la page jusqu'à voir la section `Configurations avancées`{.action}, puis cliquez sur `Réinitialiser la configuration OVHcloud`{.action}. **Patientez cinq minutes le temps que la modification soit prise en compte par votre modem.**

![diagnosticfibre](images/acces-internet-laptop-test-step13-2022.png){.thumbnail}

#### 4.6 Vérifier la configuration de la carte réseau de votre ordinateur

> [!primary]
>
> La manipulation décrite ci-dessous a été réalisée depuis un ordinateur utilisant le système d'exploitation **Windows 10**. Si vous en utilisez un autre, les éléments ci-dessous peuvent vous donner quelques pistes à explorer de votre côté.
>
> Sachez cependant que ceux-ci ne se substituent pas à l'aide d'un professionnel, comme un technicien informatique, si vous rencontrez des difficultés.
>

Si la connexion n'est toujours pas fonctionnelle sur votre ordinateur, vérifier la configuration de la carte réseau utilisée sur celui-ci peut permettre de rétablir votre accès.

Pour cela, effectuez un clic droit sur l'image en bas à gauche représentant le logo **Windows** et cliquez sur `Connexions réseau`{.action}. Dans la fenêtre qui apparaît, assurez-vous d'être bien positionné sur l'onglet `État`{.action} dans la barre de menu à gauche, puis cliquez sur `Modifier les options d'adaptateur`{.action}.

![diagnosticfibre](images/acces-internet-laptop-test-step1.png){.thumbnail}

Dans la nouvelle fenêtre qui apparaît, les différentes cartes réseau (Wi-Fi ou Ethernet) installées sur votre ordinateur s'affichent. Effectuez un clic droit sur la carte (Wi-Fi ou câble) concernée, puis sélectionnez `Propriétés`{.action}. Assurez-vous que la case à côté de `Protocole Internet version 4 (TCP/IPv4)` est bien cochée. Ensuite, cliquez sur le nom `Protocole Internet version 4 (TCP/IPv4)` pour qu'il s'affiche en surbrillance, puis cliquez sur le bouton `Propriétés`{.action}.

Au sein de cette nouvelle fenêtre, assurez-vous que « Obtenir une adresse IP automatiquement » et « Obtenir les adresses des serveurs DNS automatiquement » sont bien cochés. Cliquez finalement sur les boutons `OK`{.action} pour valider vos modifications, le cas échéant. 

![diagnosticfibre](images/acces-internet-laptop-test-step14.png){.thumbnail}

## Aller plus loin

Échangez avec notre [communauté d'utilisateurs](/links/community).
