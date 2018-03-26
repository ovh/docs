---
title: Activer la QoS
slug: activer-la-qos
legacy_guide_number: '18121694'
space_key: CRXDSL
space_name: XDSL
---

> \[!info\]
>
> Par défaut la QoS n'est pas activée, il faut l'activer sur chaque interface modem (IF1, IF2, IFx...).

Préparation {#préparation}
-----------

Afin d'activer la QoS avec plusieurs connexions, vous aurez besoin de mesurer votre débit en download et upload pour chaque connexion.

Vous pouvez utiliser l'outil <http://proof.ovh.net/>, vous devrez vous assurer de tester chaque connexion indépendamment.

Activation de la QoS {#activation-de-la-qos}
--------------------

1.  Rendez-vous dans **Network &gt; SQM QoS**
2.  Pour chaque interface modem vous devez configurer une queue, la configuration se fait dans les trois onglets : Basic Settings, Queue Discpline et Link Layer Adaptation
3.  Pour ajouter des interfaces modems supplémentaire, cliquez sur "Add"

### Onglet Basic Settings {#onglet-basic-settings}

1.  Activez "**Enable this SQM instance**"
2.  Renseignez votre interface modem : **IF1, IF2**
3.  Renseignez les **débits maximum** de votre connexion en montant (upload) et descendant (Download), vous pouvez choisir de ne renseigner que l'upload si vous saturez votre connexion qu'en upload.
4.  Par exemple pour une ADSL de 2Mbps en Download et de 512Kbps en Upload , saisissez :
    1.  Download speed in kbit/s : 2000
    2.  Upload speed in kbit/s : 512

![](images/qos1-createqueues.png){.thumbnail}

### Onglet Queue Discipline {#onglet-queue-discipline}

1.  Sélectionnez la discipline "**sfq**"
2.  Sélectionnez la queue setup script "**otb.qos**"

![](images/qos2-queuediscipline.png){.thumbnail}

Onglet Link Layer Adaptation

1.  Pour le premier champ link layer, sélectionnez le bon champ suivant votre type de connexion :
    1.  ADSL : "**ATM ...**"
    2.  SDSL EFM / VDSL : "**Ethernet...**"
    3.  Cable / FTTH : "**none**"

2.  Pour le champ per Packet Overhead, saisissez une valeur suivant votre type de connexion :
    1.  ADSL : **44**
    2.  SDSL EFM / VDSL : **8**
    3.  Cable / FTTH : non disponible

3.  Enfin cliquez sur "**Save & Apply**"

![](images/qos3-linklayer-adaptation.png){.thumbnail}

Une fois que vous avez créé un "queue" par interface modem, la QoS est active pour la VoIP.

![](images/qos4-synthese.png){.thumbnail}

Une fois en place, si vous éprouvez encore des perturbations de la QoS en VoIP, nous vous conseillons d'adapter le réglage des débits download et upload à 80% du débit maximum de chacune de vos connexions.


