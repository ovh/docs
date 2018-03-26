---
title: OVF Tool
slug: ovf-tool
legacy_guide_number: '2163202'
section: Outils de migration des Machines Virtuelles
---








[OVFTOOL](https://www.vmware.com/support/developer/ovf/){.external-link} est un outil qui permet d'**exporter/importer** des machines virtuelles au format .OVF (compatible Windows, Linux et Mac).

Dans ce guide nous utilisons l'application OVFTOOL en version 4.0 sous **Linux Debian**.

![](images/ovftool.png){.thumbnail}

Pour afficher de l'aide supplémentaire par rapport à cette application utilisez la commande "**ovftool --help"** ou encore "**ovftool --help examples"** pour obtenir des exemples de cas précis.

![](images/ovftool2.png){.thumbnail}

Voici un exemple d'**export** de la machine virtuelle SQL3 provenant du Dedicated Cloud pcc-37-187-228-180.ovh.com au format **.ovf**.

![](images/ovftool3.png){.thumbnail}

Avant **export**, la machine virtuelle doit être éteinte pour cela nous utilisons la commande "**ovftool powerOffSource**" comme indiqué dans le **screenshot** ci-dessous.

![](images/ovftool5.png){.thumbnail}

Sur le **vCenter** dans les tâches récentes nous voyons l'arrêt de la machine virtuelle concernée en l'occurrence SQL3.

![](images/ovftool4.png){.thumbnail}

Maintenant nous pouvons exporter la machine virtuelle avec la commande suivante

"**ovftool vi://utilisateur:password@Dedicatedcloud/datacentre/vm/lenomdevotreVM /ladestination**"

![](images/ovftool6.png){.thumbnail}

Nous constatons que l'**export** s'est déroulé correctement.

![](images/ovftool7.png){.thumbnail}

Vous souhaitez convertir votre fichier .OVF au format .VMX, utilisez la commande "**ovftool -tt=vmx fichier.ovf /destination/**"

![](images/ovftool8.png){.thumbnail}

![](images/ovftool9.png){.thumbnail}

Pour **importer** il est nécessaire de connaitre le data-store de destination "**ovftool -ds=datastore fichier.ovf**"

![](images/ovftool11.png){.thumbnail}

La machine virtuelle est **déployée** dans votre infrastructure.

![](images/ovftool12.png){.thumbnail}

Enfin la **migration** à froid de la machine virtuelle "SQL3" vers une autre infrastructure Dedicated Cloud. (le transfert est réalisé sans machine tierce)

![](images/ovftool14.png){.thumbnail}
