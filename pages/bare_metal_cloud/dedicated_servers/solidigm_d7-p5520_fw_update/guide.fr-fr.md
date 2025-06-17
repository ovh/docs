---
title: "Serveurs Dédiés - Mise à jour du firmware de votre SSD Solidigm D7-P5520"
excerpt: "Découvrez comment mettre à jour le firmware de votre SSD Solidigm D7-P5520 sur vos serveurs dédiés Linux, ESXi et Windows"
updated: 2025-06-16
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

Les mises à jour régulières du firmware jouent un rôle essentiel dans la préservation des performances, de la stabilité et de la sécurité de vos disques. Ces mises à jour comprennent souvent des corrections de bugs critiques, une compatibilité améliorée et des fonctions de sécurité avancées qui sont indispensables pour préserver l'intégrité de vos données et maintenir une efficacité opérationnelle optimale.

Un correctif important a été introduit dans ce nouveau firmware (version 9CV10490). Nous vous recommandons vivement de mettre à jour votre firmware afin d’éviter une panne prématurée.

> **Notes de mise à jour du firmware :**
>
> Mitigates the following issues besides some other minor/corner case fixes:
>
> - Admin Command Timeout During Read Intensive Workloads
>
> - Drive May Fail to Enumerate Following Unplanned Power Cycle
>
> - Failure of MOS-FET Component Leads to Higher Drive Failure Rate
>

L'objectif de ce guide est de vous aider à mettre à niveau le firmware de votre Solidigm D7-P5520 PCIe 4.0 NVMe.

Drive Part Number (Numéro de référence du lecteur) :

- SSDPF2KX019T1O (1,92 To de capacité)
- SSDPF2KX038T1O (3,84 To de capacité)
- SSDPF2KX076T1O (7,86 To de capacité)
- SSDPF2KX153T1O (15,36 To de capacité)

## Prérequis

Un serveur Bare Metal avec un périphérique Solidigm D7-P5520 PCIe 4.0 NVMe, parmi les gammes suivantes :

- High Grade
- Scale
- Advance
- Rise (processeurs : AMD Ryzen R5-5600X ; AMD Ryzen R7-5800X ; AMD Ryzen R7-3700pro ; AMD Epyc Epyc7302 ; Intel Xeon  E5-2689v4) 

## En pratique

> [!alert]
>
> Avant toute tentative de mise à jour du firmware, une sauvegarde des données du lecteur doit être effectuée. Découvrez comment sauvegarder vos données grâce à notre guide sur [Backup Storage](/pages/bare_metal_cloud/dedicated_servers/services_backup_storage).
> La mise à jour du firmware ne formate pas le lecteur ni ne supprime les données, mais une erreur de mise à jour du firmware peut se produire. Ne mettez pas le lecteur ou le serveur hors tension pendant le processus de mise à jour du firmware.
>

> [!primary]
>
> Toutes les commandes doivent être exécutées en tant que root sous Linux et VMware ESXi, et avec un compte administrateur sous Windows.
>

### Linux

#### Configuration logicielle testée par OVHcloud

| Plateforme | Outil de flash | Firmware | Résultat |
| -- | -- | -- | -- |
| OS Debian 11/12 | sofu 2.1 | 9CV10490 | OK |
| Ubuntu 22.04/24.04 OS | sofu 2.1 | 9CV10490 | OK |
| Rocky 8/9 OS | sofu 2.1 | 9CV10490 | OK |

#### Étape 1 - Télécharger le paquet du firmware

Téléchargez le paquet du firmware sur votre serveur :

```bash
wget https://last-public-ovh-baremetal.snap.mirrors.ovh.net/hardware/P5520/P5520_FW_to9CV10490_Linux_64.zip
```

Décompressez l'archive :

```bash
unzip P5520_FW_to9CV10490_Linux_64.zip
```

#### Étape 2 - Rendre l'outil exécutable

```bash
chmod +x sofu_2.1_x64
```

#### Étape 3 - Mettre à jour le firmware

L'outil détecte uniquement les périphériques NVMe Solidigm D7-P5520 et démarre le flash si le firmware n'est pas à jour :

```bash
./sofu_2.1_x64
```

/// details | **Exemple de résultat sur un serveur avec 3 disques Solidigm à mettre à jour**

```bash
root@labo:~# ./sofu_2.1_x64
 
- PHAX410202711P9BGN 1 -
 
DeviceStatus : Healthy
DevicePath : /dev/nvme0n1
ProductFamily : Intel SSD DC P5520 Series
FirmwareUpdateAvailable : 9CV10490
Index : 0
Firmware : 9CV10207
Bootloader : Value not found
SerialNumber : PHAX410202711P9BGN
ModelNumber : INTEL SSDPF2KX019T1O
 
Updating firmware...
 
 
Status : Firmware updated successfully. Please reboot the system.
 
=================================================
            S U C C E S S
=================================================
 
Status : Firmware updated successfully. Please reboot the system.
 
 
- PHAX220103V43P8CGN 1 -
 
DeviceStatus : Healthy
DevicePath : /dev/nvme1n1
ProductFamily : Intel SSD DC P5520 Series
FirmwareUpdateAvailable : 9CV10490
Index : 1
Firmware : 9CV10207
Bootloader : Value not found
SerialNumber : PHAX220103V43P8CGN
ModelNumber : INTEL SSDPF2KX038T1O
 
Updating firmware...
 
 
Status : Firmware updated successfully. Please reboot the system.
 
=================================================
            S U C C E S S
=================================================
 
Status : Firmware updated successfully. Please reboot the system.
 
 
- PHAX3413009F7P6DGN 1 -
 
DeviceStatus : Healthy
DevicePath : /dev/nvme2n1
ProductFamily : Intel SSD DC P5520 Series
FirmwareUpdateAvailable : 9CV10490
Index : 2
Firmware : 9CV10207
Bootloader : Value not found
SerialNumber : PHAX3413009F7P6DGN
ModelNumber : INTEL SSDPF2KX076T1O
 
Updating firmware...
 
 
Status : Firmware updated successfully. Please reboot the system.
 
=================================================
            S U C C E S S
=================================================
 
Status : Firmware updated successfully. Please reboot the system.
```

///

Le message suivant doit s’afficher pour chaque périphérique NVMe Solidigm D7-P5520 dont le firmware n’est pas à jour :

```bash
Status : Firmware updated successfully. Please reboot the system.
 
=================================================
            S U C C E S S
=================================================
 
Status : Firmware updated successfully. Please reboot the system.
```

Une fois la mise à jour du firmware terminée, veuillez redémarrer votre serveur.

#### Étape 4 - Vérifier que la version du firmware est à jour après le redémarrage du serveur

Pour vérifier que le firmware est à jour, il suffit de relancer l'outil *Sofu* :

```bash
./sofu_2.1_x64
```

L'outil doit renvoyer le message suivant pour chaque lecteur : **"The selected drive contains current firmware as of this tool release."**

Vous pouvez également vérifier pour chaque NVMe que la version du firmware est bien celle attendue : **9CV10490**

/// details | **Exemple de résultat sur un serveur avec 3 disques Solidigm à mettre à jour**

```bash
root@labo:~# ./sofu_2.1_x64
 
- PHAX410202711P9BGN 1 -
 
DeviceStatus : Healthy
DevicePath : /dev/nvme0n1
ProductFamily : Intel SSD DC P5520 Series
FirmwareUpdateAvailable : The selected drive contains current firmware as of this tool release.
Index : 0
Firmware : 9CV10490
Bootloader : Value not found
SerialNumber : PHAX410202711P9BGN
ModelNumber : INTEL SSDPF2KX019T1O
 
Updating firmware...
 
 
Status : The selected drive contains current firmware as of this tool release.
 
 
- PHAX220103V43P8CGN 1 -
 
DeviceStatus : Healthy
DevicePath : /dev/nvme1n1
ProductFamily : Intel SSD DC P5520 Series
FirmwareUpdateAvailable : The selected drive contains current firmware as of this tool release.
Index : 1
Firmware : 9CV10490
Bootloader : Value not found
SerialNumber : PHAX220103V43P8CGN
ModelNumber : INTEL SSDPF2KX038T1O
 
Updating firmware...
 
 
Status : The selected drive contains current firmware as of this tool release.
 
 
- PHAX3413009F7P6DGN 1 -
 
DeviceStatus : Healthy
DevicePath : /dev/nvme2n1
ProductFamily : Intel SSD DC P5520 Series
FirmwareUpdateAvailable : The selected drive contains current firmware as of this tool release.
Index : 2
Firmware : 9CV10490
Bootloader : Value not found
SerialNumber : PHAX3413009F7P6DGN
ModelNumber : INTEL SSDPF2KX076T1O
 
Updating firmware...
 
 
Status : The selected drive contains current firmware as of this tool release.
```

///

### ESXi 8.0

#### Configuration logicielle testée par OVHcloud

| Plateforme | Outil de flash | Firmware | Result |
| -- | -- | -- | -- |
| SE ESXi 8.0U2c | sofu 2.2 | 9CV10490 | OK |

#### Étape 1 - Télécharger le package du firmware

Téléchargez le paquet du firmware sur votre serveur :

```bash
wget https://last-public-ovh-bare.metal.snap.mirrors.ovh.net/hardware/P5520/P5520_FW_to_9CV10490_ESXi.zip --no-check-certificate
```

**Par défaut, la politique de pare-feu d'ESXi bloque le trafic HTTPS sortant. Si vous ne parvenez pas à télécharger le firmware, vous devrez peut-être ajouter une règle de pare-feu pour autoriser les connexions HTTPS sortantes.**

Décompressez l'archive :

```bash
unzip -d /tmp P5520_FW_to_9CV10490_ESXi.zip
```

#### Étape 2 - Installer Sofu

```bash
esxcli software vib install -v /tmp/solidigm-firmware-updater_2.2.201-400.vib --no-sig-check
```

Redémarrez votre serveur, ce qui est nécessaire afin de mettre à jour le binaire.

#### Étape 3 - Mettre à jour le firmware

Ouvrez le répertoire de l'outil :

```bash
cd /opt/solidigm/sofu/
```

L'outil détecte uniquement les périphériques NVMe Solidigm D7-P5520 et démarre le flash si le firmware n'est pas à jour :

```bash
./sofu
```

/// details | **Exemple de résultat sur un serveur avec 4 disques Solidigm à mettre à jour**

```bash
[root@labo:~] cd /opt/solidigm/sofu/
[root@labo:/opt/solidigm/sofu] ./sofu
 
- BTAX444308M31P9BGN 1 -
 
ModelNumber : INTEL SSDPF2KX019T1O
Firmware : 9CV10207
SerialNumber : BTAX444308M31P9BGN
FirmwareUpdateAvailable : 9CV10490
DeviceStatus : Healthy
Index : 0
ProductFamily : Intel SSD DC P5520 Series
Bootloader : Value not found
DevicePath : nvmeMgmt-nvmhba0
 
Updating firmware...
 
 
Status : Firmware update successful. Please reboot to apply update.
 
=================================================
            S U C C E S S
=================================================
 
Status : Firmware update successful. Please reboot to apply update.
 
 
- PHAX216501QX1P9BGN 1 -
 
ModelNumber : INTEL SSDPF2KX019T1O
Firmware : 9CV10207
SerialNumber : PHAX216501QX1P9BGN
FirmwareUpdateAvailable : 9CV10490
DeviceStatus : Healthy
Index : 1
ProductFamily : Intel SSD DC P5520 Series
Bootloader : Value not found
DevicePath : nvmeMgmt-nvmhba1
 
Updating firmware...
 
 
Status : Firmware update successful. Please reboot to apply update.
 
=================================================
            S U C C E S S
=================================================
 
Status : Firmware update successful. Please reboot to apply update.
 
 
- PHAX2165021L1P9BGN 1 -
 
ModelNumber : INTEL SSDPF2KX019T1O
Firmware : 9CV10207
SerialNumber : PHAX2165021L1P9BGN
FirmwareUpdateAvailable : 9CV10490
DeviceStatus : Healthy
Index : 4
ProductFamily : Intel SSD DC P5520 Series
Bootloader : Value not found
DevicePath : nvmeMgmt-nvmhba4
 
Updating firmware...
 
 
Status : Firmware update successful. Please reboot to apply update.
 
=================================================
            S U C C E S S
=================================================
 
Status : Firmware update successful. Please reboot to apply update.
 
 
- BTAX4443088A1P9BGN 1 -
 
ModelNumber : INTEL SSDPF2KX019T1O
Firmware : 9CV10207
SerialNumber : BTAX4443088A1P9BGN
FirmwareUpdateAvailable : 9CV10490
DeviceStatus : Healthy
Index : 5
ProductFamily : Intel SSD DC P5520 Series
Bootloader : Value not found
DevicePath : nvmeMgmt-nvmhba5
 
Updating firmware...
 
 
Status : Firmware update successful. Please reboot to apply update.
 
=================================================
            S U C C E S S
=================================================
 
Status : Firmware update successful. Please reboot to apply update.
```

///

Le message suivant doit s’afficher pour chaque périphérique NVMe Solidigm D7-P5520 dont le firmware n’est pas à jour :

```bash
Status : Firmware update successful. Please reboot to apply update.
 
=================================================
            S U C C E S S
=================================================
 
Status : Firmware update successful. Please reboot to apply update.
```

Une fois la mise à jour du firmware terminée, veuillez redémarrer votre serveur.

### Étape 4 - Vérifier que la version du firmware est à jour après le redémarrage du serveur

Pour vérifier que le firmware est à jour, il suffit de relancer l'outil logiciel :

```bash
cd /opt/solidigm/sofu/
./sofu
```

L'outil doit renvoyer le message suivant pour chaque lecteur : **"The selected drive contains current firmware as of this tool release."**

Vous pouvez également vérifier pour chaque NVMe que la version du firmware est bien celle attendue : **9CV10490**

/// details | **Exemple de résultat sur un serveur avec 4 disques Solidigm à mettre à jour**

```bash
[root@labo:~] cd /opt/solidigm/sofu/
[root@labo:/opt/solidigm/sofu] ./sofu

- BTAX444308M31P9BGN 1 -
 
ModelNumber : INTEL SSDPF2KX019T1O
Firmware : 9CV10490
SerialNumber : BTAX444308M31P9BGN
FirmwareUpdateAvailable : The selected drive contains current firmware as of this tool release.
DeviceStatus : Healthy
Index : 0
ProductFamily : Intel SSD DC P5520 Series
Bootloader : Value not found
DevicePath : nvmeMgmt-nvmhba0
 
Updating firmware...
 
 
Status : The selected drive contains current firmware as of this tool release.
 
 
- PHAX216501QX1P9BGN 1 -
 
ModelNumber : INTEL SSDPF2KX019T1O
Firmware : 9CV10490
SerialNumber : PHAX216501QX1P9BGN
FirmwareUpdateAvailable : The selected drive contains current firmware as of this tool release.
DeviceStatus : Healthy
Index : 1
ProductFamily : Intel SSD DC P5520 Series
Bootloader : Value not found
DevicePath : nvmeMgmt-nvmhba1
 
Updating firmware...
 
 
Status : The selected drive contains current firmware as of this tool release.
 
 
- PHAX2165021L1P9BGN 1 -
 
ModelNumber : INTEL SSDPF2KX019T1O
Firmware : 9CV10490
SerialNumber : PHAX2165021L1P9BGN
FirmwareUpdateAvailable : The selected drive contains current firmware as of this tool release.
DeviceStatus : Healthy
Index : 4
ProductFamily : Intel SSD DC P5520 Series
Bootloader : Value not found
DevicePath : nvmeMgmt-nvmhba4
 
Updating firmware...
 
 
Status : The selected drive contains current firmware as of this tool release.
 
 
- BTAX4443088A1P9BGN 1 -
 
ModelNumber : INTEL SSDPF2KX019T1O
Firmware : 9CV10490
SerialNumber : BTAX4443088A1P9BGN
FirmwareUpdateAvailable : The selected drive contains current firmware as of this tool release.
DeviceStatus : Healthy
Index : 5
ProductFamily : Intel SSD DC P5520 Series
Bootloader : Value not found
DevicePath : nvmeMgmt-nvmhba5
 
Updating firmware...
 
 
Status : The selected drive contains current firmware as of this tool release.
```

///

### Windows

#### Configuration logicielle testée par OVHcloud

| Plateforme | Outil de flash | Firmware | Resultat |
| -- | -- | -- | -- |
| Windows 2019 | sofu 2.1 | 9CV10490 | OK |
| Windows 2022 | sofu 2.1 | 9CV10490 | OK |
| Windows 2025 | sofu 2.1 | 9CV10490 | OK |

#### Étape 1 - Télécharger le package du firmware

Téléchargez le package du firmware sur votre serveur : <https://last-public-ovh-bare.metal.snap.mirrors.ovh.net/hardware/P5520/P5520_FW_to_9CV10490_Win64.zip>

**Version de l'outil : 2.1**

Décompressez l'archive. L'outil à utiliser est `sofu_2.1_win64.exe`, il se trouve dans le dossier décompressé.

#### Étape 2 - Mettre à jour le firmware

Exécutez Windows PowerShell en tant qu'administrateur, puis exécutez la commande suivante dans le répertoire où `sofu_2.1_win64.exe` a été décompressé :

```bash
.\sofu_2.1_win64.exe
```

/// details | **Exemple de résultat sur un serveur avec 4 disques Solidigm à mettre à jour**

```bash
PS C:\Users\admin\Desktop\P5520_FW_to_9CV10490_Win64> .\sofu_2.1_win64.exe
 
- PHAX2165021L1P9BGN 1 -
 
ModelNumber : INTEL SSDPF2KX019T1O
DevicePath : \\\\.\\PHYSICALDRIVE2
ProductFamily : Intel SSD DC P5520 Series
Firmware : 9CV10207
SerialNumber : PHAX2165021L1P9BGN
FirmwareUpdateAvailable : 9CV10490
Index : 2
Bootloader : Value not found
DeviceStatus : Healthy
 
Updating firmware...
 
 
Status : Firmware updated successfully. Please reboot the system.
 
=================================================
            S U C C E S S
=================================================
 
Status : Firmware updated successfully. Please reboot the system.
 
 
- BTAX4443088A1P9BGN 1 -
 
ModelNumber : INTEL SSDPF2KX019T1O
DevicePath : \\\\.\\PHYSICALDRIVE3
ProductFamily : Intel SSD DC P5520 Series
Firmware : 9CV10207
SerialNumber : BTAX4443088A1P9BGN
FirmwareUpdateAvailable : 9CV10490
Index : 3
Bootloader : Value not found
DeviceStatus : Healthy
 
Updating firmware...
 
 
Status : Firmware updated successfully. Please reboot the system.
 
=================================================
            S U C C E S S
=================================================
 
Status : Firmware updated successfully. Please reboot the system.
 
 
- BTAX444308M31P9BGN 1 -
 
ModelNumber : INTEL SSDPF2KX019T1O
DevicePath : \\\\.\\PHYSICALDRIVE4
ProductFamily : Intel SSD DC P5520 Series
Firmware : 9CV10207
SerialNumber : BTAX444308M31P9BGN
FirmwareUpdateAvailable : 9CV10490
Index : 4
Bootloader : Value not found
DeviceStatus : Healthy
 
Updating firmware...
 
 
Status : Firmware updated successfully. Please reboot the system.
 
=================================================
            S U C C E S S
=================================================
 
Status : Firmware updated successfully. Please reboot the system.
 
 
- PHAX216501QX1P9BGN 1 -
 
ModelNumber : INTEL SSDPF2KX019T1O
DevicePath : \\\\.\\PHYSICALDRIVE5
ProductFamily : Intel SSD DC P5520 Series
Firmware : 9CV10207
SerialNumber : PHAX216501QX1P9BGN
FirmwareUpdateAvailable : 9CV10490
Index : 5
Bootloader : Value not found
DeviceStatus : Healthy
 
Updating firmware...
 
 
Status : Firmware updated successfully. Please reboot the system.
 
=================================================
            S U C C E S S
=================================================
 
Status : Firmware updated successfully. Please reboot the system.
```

///

Le message suivant doit s’afficher pour chaque périphérique NVMe Solidigm D7-P5520 dont le firmware n’est pas à jour :

```bash
Status : Firmware updated successfully. Please reboot the system.
 
=================================================
            S U C C E S S
=================================================
 
Status : Firmware updated successfully. Please reboot the system.
```

Une fois la mise à jour du firmware terminée, veuillez redémarrer votre serveur.

#### Étape 3 - Vérifier que la version du firmware est à jour après le redémarrage du serveur

Pour vérifier que le firmware est à jour, exécutez simplement l'outil *Sofu* une fois de plus. Exécutez Windows PowerShell en tant qu'administrateur, puis exécutez la commande suivante dans le répertoire où `sofu_2.1_win64.exe` a été décompressé :

```bash
.\sofu_2.1_win64.exe
```

L'outil doit renvoyer le message suivant pour chaque lecteur : **"The selected drive contains current firmware as of this tool release."**

Vous pouvez également vérifier pour chaque NVMe que la version du firmware est bien celle attendue : **9CV10490**

/// details | **Exemple de résultat sur un serveur avec 4 disques Solidigm à mettre à jour**

```bash
PS C:\Users\admin\Desktop\P5520_FW_to_9CV10490_Win64> .\sofu_2.1_win64.exe
 
- PHAX2165021L1P9BGN 1 -
 
ModelNumber : INTEL SSDPF2KX019T1O
DevicePath : \\\\.\\PHYSICALDRIVE2
ProductFamily : Intel SSD DC P5520 Series
Firmware : 9CV10490
SerialNumber : PHAX2165021L1P9BGN
FirmwareUpdateAvailable : The selected drive contains current firmware as of this tool release.
Index : 2
Bootloader : Value not found
DeviceStatus : Healthy
 
Updating firmware...
 
 
Status : The selected drive contains current firmware as of this tool release.
 
 
- BTAX4443088A1P9BGN 1 -
 
ModelNumber : INTEL SSDPF2KX019T1O
DevicePath : \\\\.\\PHYSICALDRIVE3
ProductFamily : Intel SSD DC P5520 Series
Firmware : 9CV10490
SerialNumber : BTAX4443088A1P9BGN
FirmwareUpdateAvailable : The selected drive contains current firmware as of this tool release.
Index : 3
Bootloader : Value not found
DeviceStatus : Healthy
 
Updating firmware...
 
 
Status : The selected drive contains current firmware as of this tool release.
 
 
- BTAX444308M31P9BGN 1 -
 
ModelNumber : INTEL SSDPF2KX019T1O
DevicePath : \\\\.\\PHYSICALDRIVE4
ProductFamily : Intel SSD DC P5520 Series
Firmware : 9CV10490
SerialNumber : BTAX444308M31P9BGN
FirmwareUpdateAvailable : The selected drive contains current firmware as of this tool release.
Index : 4
Bootloader : Value not found
DeviceStatus : Healthy
 
Updating firmware...
 
 
Status : The selected drive contains current firmware as of this tool release.
 
 
- PHAX216501QX1P9BGN 1 -
 
ModelNumber : INTEL SSDPF2KX019T1O
DevicePath : \\\\.\\PHYSICALDRIVE5
ProductFamily : Intel SSD DC P5520 Series
Firmware : 9CV10490
SerialNumber : PHAX216501QX1P9BGN
FirmwareUpdateAvailable : The selected drive contains current firmware as of this tool release.
Index : 5
Bootloader : Value not found
DeviceStatus : Healthy
 
Updating firmware...
 
 
Status : The selected drive contains current firmware as of this tool release.
```

///

## Aller plus loin <a name="gofurther"></a>

Si vous avez besoin de formation ou d’assistance technique pour mettre en œuvre nos solutions, contactez votre représentant commercial ou cliquez sur [ce lien](/links/professional-services) pour obtenir un devis et demander à nos experts Professional Services une analyse personnalisée de votre projet.

Échangez avec notre [communauté d'utilisateurs](/links/community).