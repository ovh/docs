---
title: Remplacement à chaud - Raid Matériel
slug: hotswap-raid-hard
excerpt: Retrouvez ici les principales étapes à suivre pour permettre le remplacement d’un disque à chaud sur un serveur en Raid Materiel.
section: RAID & disques
---


## Prérequis
Le remplacement à chaud n'est possible que sur les gammes de serveur mHG, HG, et bHG.

Pour réaliser les différentes étapes de ce guide, il faut :

- Disposer d'un serveur mHG, HG, ou bHG.
- Avoir un serveur en RAID Matériel (avec une carte MegaRAID).
- Disposer d'un accès SSH (Linux et VmWare ESXi).
- Disposer d'un accès RDP (Windows).
- Les utilitaires MegaCLI et/ou StorCLI doivent être installés (normalement par défaut).


## Sous Linux

### Étape 1 &#58; Identifier le disque a remplacer
En vue d'un remplacement de disque, il faudra fournir au technicien l'Enclosure ID, le slot ID, et le Serial Number du disque à remplacer.

Ou à défaut (disque non détecté par ex), les mêmes informations mais pour les disques qui ne sont **PAS** à remplacer et le spécifier au technicien.

On va dans un premier temps lister les disques présents sur le serveur. Tout en pouvant récupérer les informations citées ci-dessus.


#### Lister les disques
Pour lister les disques, vous pouvez utiliser la commande suivante : MegaCli -PdList -aALL | egrep "Slot|Device ID|Device Id"

Par exemple :

<div> <style type="text/css" scoped>span.prompt:before{content:"# ";}</style> <pre class="highlight command-prompt"> <span class="prompt">MegaCli -PdList -aALL | egrep "Slot|Device ID|Device Id"</span> <span class="output">Enclosure Device ID: 252</span> <span class="output">Slot Number: 0</span> <span class="output">Device Id: 6</span> <span class="output">Enclosure Device ID: 252</span> <span class="output">Slot Number: 1</span> <span class="output">Device Id: 5</span> <span class="output">Enclosure Device ID: 252</span> <span class="output">Slot Number: 2</span> <span class="output">Device Id: 4</span> <span class="output">Enclosure Device ID: 252</span> <span class="output">Slot Number: 3</span> <span class="output">Device Id: 7</span> </pre></div>
La commande MegaCli -PdList -aALL, sans le *GREP* permet d'afficher toutes les informations d'un disque.



> [!primary]
>
> Equivalent via la commande storcli :
> <div> <style type="text/css" scoped>span.prompt:before{content:"# ";}</style> <pre class="highlight command-prompt"> <span class="prompt">storcli /call show all</span> <span class="blank">&nbsp;</span> <span class="output">PD LIST :</span> <span class="output">=======</span> <span class="blank">&nbsp;</span> <span class="output">----------------------------------------------------------------------------</span> <span class="output">EID:Slt DID State DG       Size Intf Med SED PI SeSz Model               Sp</span> <span class="output">----------------------------------------------------------------------------</span> <span class="output">252:0     6 Onln   0 744.687 GB SATA SSD N   N  512B INTEL SSDSC2BB800H4 U</span> <span class="output">252:1     5 Onln   0 744.687 GB SATA SSD N   N  512B INTEL SSDSC2BB800H4 U</span> <span class="output">252:2     4 Onln   0 744.687 GB SATA SSD N   N  512B INTEL SSDSC2BB800H4 U</span> <span class="output">252:3     7 Onln   0 744.687 GB SATA SSD N   N  512B INTEL SSDSC2BB800H4 U</span> <span class="output">----------------------------------------------------------------------------</span> </pre></div>
> Il s'agit d'un extrait du retour de la commande storcli. D'autres informations sont visibles, comme le listing des disques en fonction des raids etc...
> 

Avec MegaCLI, vous pouvez aussi lister les disques en fonction des raids avec cette commande : MegaCli -CfgDsply -a0.


#### Tester et identifier un disque &#58;
Pour tester un disque / identifier son Serial Number, il faut effectuer la commande smartctl comme suit :

<div> <style type="text/css" scoped>span.prompt:before{content:"# ";}</style> <pre class="highlight command-prompt"> <span class="prompt">smartctl -a -d megaraid,6 /dev/sda | grep Serial</span> <span class="output">Serial Number:    BTWH509602CV800CGN</span> </pre></div>
Le chiffre **6** dans cette commande correspond au Device ID du disque (*Device ID* sous MegaCLI, et *DID* sous storCLI).

Cette information se trouve dans le listing des disques, effectué à l'étape précédente.

Nous connaissons donc désormais l'Enclosure ID, le Slot ID, et le Serial Number du disque à remplacer.


### Étape 2 &#58; Allumer un disque
Pour permettre au technicien de remplacer votre disque à chauf, il faut allumer (faire clignoter) le disque HS.

Dans notre exemple, nous avons donc le disque Enclosure ID **252**, Slot ID **0**, et Serial Number **BTWH509602CV800CGN** à remplacer.

La commande pour faire clignoter le disque est la suivante : MegaCli -PdLocate -start -physdrv[EncID:SlotID] -a0.

<div> <style type="text/css" scoped>span.prompt:before{content:"# ";}</style> <pre class="highlight command-prompt"> <span class="prompt">MegaCli -PdLocate -start -physdrv[252:0] -a0</span> <span class="blank">&nbsp;</span> <span class="output">Adapter: 0: Device at EnclId-252 SlotId-0  -- PD Locate Start Command was successfully sent to Firmware</span> <span class="blank">&nbsp;</span> <span class="output">Exit Code: 0x00</span> </pre></div>

> [!primary]
>
> Equivalent via la commande storcli :
> <div> <style type="text/css" scoped>span.prompt:before{content:"# ";}</style> <pre class="highlight command-prompt"> <span class="prompt">rescue:~# storcli /call /e252 /s0 start locate</span> <span class="output">Controller = 0</span> <span class="output">Status = Success</span> <span class="output">Description = Start Drive Locate Succeeded.</span> </pre></div>

Pour éteindre le disque allumé suite à l'intervention, il suffit de remplacer le "start" par "stop" dans les commandes ci-dessus.

A ce moment là, l'intervention est prête à être effectuée. Vous pouvez alors fournir les informations récoltées précédemment au support et indiquer que le disque est allumé.


### Étape 3 &#58; Verifier la reconstruction
Une fois l'intervention effectuée par le Datacentre, vous pouvez lister de nouveau les RAID et les disques, et voir que le disque remplacé est bien en **Rebuild**.

<div> <style type="text/css" scoped>span.prompt:before{content:"# ";}</style> <pre class="highlight command-prompt"> <span class="prompt">MegaCli -PdList -aALL | egrep "Slot|Device ID|state"</span> <span class="output">Enclosure Device ID: 252</span> <span class="output">Slot Number: 0</span> <span class="output">Firmware state: Rebuild</span> <span class="output">Enclosure Device ID: 252</span> <span class="output">Slot Number: 1</span> <span class="output">Firmware state: Online, Spun Up</span> <span class="output">...</span> </pre></div><div> <style type="text/css" scoped>span.prompt:before{content:"# ";}</style> <pre class="highlight command-prompt"> <span class="prompt">storcli /call show all</span> <span class="output">PD LIST :</span> <span class="output">=======</span> <span class="blank">&nbsp;</span> <span class="output">----------------------------------------------------------------------------</span> <span class="output">EID:Slt DID State DG       Size Intf Med SED PI SeSz Model               Sp</span> <span class="output">----------------------------------------------------------------------------</span> <span class="output">252:0     6 Rbld   0 744.687 GB SATA SSD N   N  512B INTEL SSDSC2BB800H4 U</span> <span class="output">252:1     5 Onln   0 744.687 GB SATA SSD N   N  512B INTEL SSDSC2BB800H4 U</span> <span class="output">252:2     4 Onln   0 744.687 GB SATA SSD N   N  512B INTEL SSDSC2BB800H4 U</span> <span class="output">252:3     7 Onln   0 744.687 GB SATA SSD N   N  512B INTEL SSDSC2BB800H4 U</span> </pre></div>
Le RAID est en état **Dégradé** le temps de la reconstruction, cela est normal.

<div> <style type="text/css" scoped>span.prompt:before{content:"# ";}</style> <pre class="highlight command-prompt"> <span class="prompt">MegaCli -LDInfo -Lall -aALL</span> <span class="blank">&nbsp;</span> <span class="blank">&nbsp;</span> <span class="output">Adapter 0 -- Virtual Drive Information:</span> <span class="output"> Drive: 0 (Target Id: 0)</span> <span class="output">Name                :</span> <span class="output">RAID Level          : Primary-1, Secondary-0, RAID Level Qualifier-0</span> <span class="output">Size                : 1.454 TB</span> <span class="output">Sector Size         : 512</span> <span class="output">Is VD emulated      : Yes</span> <span class="output">Mirror Data         : 1.454 TB</span> <span class="output">State               : Degraded</span> <span class="output">Strip Size          : 256 KB</span> <span class="output">Number Of Drives per span:2</span> <span class="output">Span Depth          : 2</span> <span class="output">Default Cache Policy: WriteThrough, ReadAhead, Direct, No Write Cache if Bad BBU</span> <span class="output">Current Cache Policy: WriteThrough, ReadAhead, Direct, No Write Cache if Bad BBU</span> <span class="output">Default Access Policy: Read/Write</span> <span class="output">Current Access Policy: Read/Write</span> <span class="output">Disk Cache Policy   : Enabled</span> <span class="output">Encryption Type     : None</span> <span class="output">Bad Blocks Exist: No</span> <span class="output">PI type: No PI</span> <span class="blank">&nbsp;</span> <span class="output">Is VD Cached: No</span> <span class="blank">&nbsp;</span> <span class="output">Exit Code: 0x00</span> </pre></div>
Enfin, vous pouvez également vérifier la progression de la reconstruction avec la commande suivante MegaCli -PDRbld -ShowProg -PhysDrv [EncID:SlotID] -a0

<div> <style type="text/css" scoped>span.prompt:before{content:"# ";}</style> <pre class="highlight command-prompt"> <span class="prompt">MegaCli -PDRbld -ShowProg -PhysDrv [252:0] -a0</span> <span class="blank">&nbsp;</span> <span class="output">Rebuild Progress on Device at Enclosure 252, Slot 0 Completed 93% in 0 Minutes.</span> <span class="blank">&nbsp;</span> <span class="output">Exit Code: 0x00</span> </pre></div>

> [!primary]
>
> Equivalent via la commande storcli :
> <div> <style type="text/css" scoped>span.prompt:before{content:"# ";}</style> <pre class="highlight command-prompt"> <span class="prompt">storcli /call /e252 /s0 show rebuild</span> </pre></div>


## Sous Windows
Ce guide est basé sur un système Windows Server 2012 R2 Standard. L'outil MegaRaid Storage Manager est installé par défaut.


### Étape 1 &#58; Verifier que le serveur possede bien une carte MegaRaid
On se rend donc dans le menu de Gestion des périphériques, et on constate bien la présence de la carte MegaRaid (9271-4i)


![device](images/device.png){.thumbnail}


### Étape 2 &#58; Identifier le disque
Dans un premier temps, nous allons ouvrir MegaRAID Storage Manager.


![login](images/login.png){.thumbnail}

Cliquez alors sur Login, et renseignez votre login/password. (Les manipulations dans notre cas sont effectuées en étant Administrateur).

On arrive ensuite sur l'écran de Management de la carte MegaRaid.


![dashboard](images/dashboard.png){.thumbnail}

Nous allons à présent vérifier le **Serial Number** de notre disque HS et sa position dans le serveur (**Enclosure ID** et **Slot ID**).

On va dans l'onglet Logical, et on arrive sur ceci.


![logical-view-2](images/logical-view-2.png){.thumbnail}

Sur cet écran, énormément d'informations sont présentes.

On retrouve, sur la gauche, la vue logique de notre RAID. Ici, nous avons un RAID 10 (id0) en état optimal. Il est composé de deux grappes de 2 disques.

Nous pouvons voir que notre disque **Slot Number 1** est dans la 1ère grappe. Sur la partie droite de l'écran, on récupère les informations dont nous avons besoin (**Enclosure/Slot/Serial**).

Donc notre disque a pour **Enclosure ID 252**, **Slot Number 1**, et **Serial Number BTWH509504BN800CGN**.

A partir de ce moment, nous allons pouvoir allumer (faire clignoter physiquement) le disque à remplacer en vue du remplacement par un technicien en Datacentre.


### Étape 3 &#58; Allumer un disque
Avec l'outil MegaRAID Storage Manager il sera très facile d'allumer la LED du dique à remplacer.



> [!primary]
>
> Avant toute chose, il est préférable de stopper les Locator sur chaque disque afin d'éviter toute erreur en Datacentre. En effet, si lors d'une intervention précédente la LED n'a pas été éteinte, il y aura deux disques d'allumés sur le serveur.
> 

Pour cela, il faut donc effectuer un clic-droit sur chaque disque, et cliquer sur **stop locating drive**.


![stop-locate](images/stop-locate.png){.thumbnail}

Maintenant on peut donc allumer le disque qui nous intéresse.

On effectue un clic-droit sur notre disque, **Slot ID 1**, et **Serial Number BTWH509504BN800CGN**.


![clic-locate](images/clic-locate.png){.thumbnail}

Ensuite, on clique sur **start locating drive**

A ce moment là, l'intervention est prête à être effectuée. Vous pouvez alors fournir les informations récoltées précédemment (**Enclosure ID, Slot ID, et Serial Number**), et indiquer que le disque est allumé.


### Étape 4 &#58; Verifier la reconstruction
Une fois l'intervention effectuée par le Datacentre, vous pouvez de nouveau aller dans l'outil MegaRAID Storage Manager, dans la partie Background operations, et vérifier que le disque est en cours de *Rebuild*.


![back](images/back.png){.thumbnail}

Le détail vous retournera ce type de résultat :


![1](images/1.png){.thumbnail}

Egalement, dans l'onglet **Logical**, nous avons toujours le détails du RAID et des disques.


![2](images/2.png){.thumbnail}

Le disque **Slot ID 1** est bien en cours de *Rebuild*.



> [!primary]
>
> Le RAID est en état dégradé lors du Rebuild, ce qui est normal.
> 

Enfin, il est préférable de refaire la manipulation du stop locate vu précédemment pour le disque qui vient d'être remplacé.


## Sous VmWare ESXi
Dans ce guide, nous allons partir du principe que vous avez reçu une alerte pour le disque **Slot Number 1**, **Serial Number BTWA547608CE800HGN** défectueux et que vous voulez le remplacer à chaud.

Pour cela, nous allons avoir besoin de l'**Enclosure ID**, le **Slot Number**, et le **Serial Number** du disque à remplacer pour les communiquer au Datacentre.



> [!primary]
>
> L'outil MegaCLI doit être installé sur le serveur.
> 


### Étape 1 &#58; Verifier que le serveur possede bien une carte MegaRaid
Avant de continuer, nous allons vérifier que le serveur possède bien une carte MegaRAID.

<div> <style type="text/css" scoped>span.prompt:before{content:"# ";}</style> <pre class="highlight command-prompt"> <span class="prompt">lspci | grep -i mega</span> <span class="output">0000:81:00.0 Mass storage controller: Avago (LSI / Symbios Logic) MegaRAID SAS Fusion Controller [vmhba2]</span> </pre></div>
Via le client Vsphere, vous pouvez également retrouver cette information dans Gérer, puis Onglet Matériel.


![gerer-host](images/gerer-host.png){.thumbnail}

Nous avons bien une carte LSI MegaRAID.


### Étape 2 &#58; Identifier le disque
En vue d'un remplacement de disque, il faudra fournir l'**Enclosure ID**, le **Slot Number**, et le **Serial Number** au Datacentre, du disque à remplacer.

Si le disque n'est plus détecté, par exemple, il faudra alors fournir les mêmes informations de tous les autres disques à **NE PAS** remplacer.

Dans un premier temps, nous allons lister les disques présents sur le serveur tout en pouvant récupérer les informations listées ci-dessus.


#### Lister les disques
<div> <style type="text/css" scoped>span.prompt:before{content:"# ";}</style> <pre class="highlight command-prompt"> <span class="prompt">[root@ns3043198:/opt/lsi/MegaCLI] ./MegaCli -PdList -aALL | egrep "Slot|Device ID|Device Id"</span> <span class="output">Enclosure Device ID: 252</span> <span class="output">Slot Number: 0</span> <span class="output">Device Id: 4</span> <span class="output">Enclosure Device ID: 252</span> <span class="output">Slot Number: 1</span> <span class="output">Device Id: 7</span> <span class="output">Enclosure Device ID: 252</span> <span class="output">Slot Number: 2</span> <span class="output">Device Id: 5</span> <span class="output">Enclosure Device ID: 252</span> <span class="output">Slot Number: 3</span> <span class="output">Device Id: 6</span> </pre></div>
Nous avons donc récupéré l'ID de notre disque HS **Slot Number 1** qui est le **Device ID 7**, et son **Enclosure ID 252**.


### Étape 3 &#58; Allumer un disque
Pour effectuer l'intervention de remplacement, il faut allumer (faire clignoter) le disque HS.



> [!primary]
>
> Avant d'allumer la LED du disque qui nous intéresse ici, nous allons dans un premier temps passer sur chacun des disques pour éteindre les LED (Dans le cas où une LED serait toujours allumée suite à une précédente intervention).
> 

Dans ce cas, nous avons 4 disques qui ont comme **Enclosure ID** 252, et comme **Slot Number** 1, 2, 3, et 4.

Nous allons donc utiliser la commande suivante : ./MegaCli -PdLocate -stop -physdrv[EncID:SlotID] -a0

<div> <style type="text/css" scoped>span.prompt:before{content:"# ";}</style> <pre class="highlight command-prompt"> <span class="prompt">[root@ns3043198:/opt/lsi/MegaCLI] ./MegaCli -PdLocate -stop -physdrv[252:0] -a0</span> <span class="blank">&nbsp;</span> <span class="output">Adapter: 0: Device at EnclId-252 SlotId-0  -- PD Locate Stop Command was successfully sent to Firmware</span> <span class="blank">&nbsp;</span> <span class="output">Exit Code: 0x00</span> <span class="prompt">[root@ns3043198:/opt/lsi/MegaCLI] ./MegaCli -PdLocate -stop -physdrv[252:1] -a0</span> <span class="blank">&nbsp;</span> <span class="output">Adapter: 0: Device at EnclId-252 SlotId-1  -- PD Locate Stop Command was successfully sent to Firmware</span> <span class="blank">&nbsp;</span> <span class="output">Exit Code: 0x00</span> <span class="prompt">[root@ns3043198:/opt/lsi/MegaCLI] ./MegaCli -PdLocate -stop -physdrv[252:2] -a0</span> <span class="blank">&nbsp;</span> <span class="output">Adapter: 0: Device at EnclId-252 SlotId-2  -- PD Locate Stop Command was successfully sent to Firmware</span> <span class="blank">&nbsp;</span> <span class="output">Exit Code: 0x00</span> <span class="prompt">[root@ns3043198:/opt/lsi/MegaCLI] ./MegaCli -PdLocate -stop -physdrv[252:3] -a0</span> <span class="blank">&nbsp;</span> <span class="output">Adapter: 0: Device at EnclId-252 SlotId-3  -- PD Locate Stop Command was successfully sent to Firmware</span> <span class="blank">&nbsp;</span> <span class="output">Exit Code: 0x00</span> </pre></div>
On passe désormais au disque que nous souhaitons remplacer pour allumer la LED.

Pour cela, nous utilisons la commande suivante : ./MegaCli -PdLocate -start -physdrv[EncID:SlotID] -a0

<div> <style type="text/css" scoped>span.prompt:before{content:"# ";}</style> <pre class="highlight command-prompt"> <span class="prompt">[root@ns3043198:/opt/lsi/MegaCLI] ./MegaCli -PdLocate -start -physdrv[252:1] -a0</span> <span class="blank">&nbsp;</span> <span class="output">Adapter: 0: Device at EnclId-252 SlotId-1  -- PD Locate Start Command was successfully sent to Firmware</span> <span class="blank">&nbsp;</span> <span class="output">Exit Code: 0x00</span> </pre></div>
A ce moment, l'intervention est prête à être effectuée. Vous pouvez alors fournir les informatiosn récoltées précédemment (**Enclosure ID, Slot Number ou Slot ID, Serial Number**), et indiquer que le disque est allumé.


### Étape 4 &#58; Verifier la reconstruction
Une fois l'intervention effectuée par le Datacentre, vous pouvez lister de nouveau les RAID et les disques afin de vérifier que le disque remplacé est bien en *Rebuild*.

<div> <style type="text/css" scoped>span.prompt:before{content:"# ";}</style> <pre class="highlight command-prompt"> <span class="prompt">[root@ns3043198:/opt/lsi/MegaCLI] ./MegaCli -PdList -aALL | egrep "Slot|Device ID|state"</span> <span class="output">Enclosure Device ID: 252</span> <span class="output">Slot Number: 0</span> <span class="output">Firmware state: Online, Spun Up</span> <span class="output">Enclosure Device ID: 252</span> <span class="output">Slot Number: 1</span> <span class="output">Firmware state: Rebuild</span> <span class="output">Enclosure Device ID: 252</span> <span class="output">Slot Number: 2</span> <span class="output">Firmware state: Online, Spun Up</span> <span class="output">Enclosure Device ID: 252</span> <span class="output">Slot Number: 3</span> <span class="output">Firmware state: Online, Spun Up</span> </pre></div>

> [!primary]
>
> Le RAID est en état dégradé lors du rebuild, ce qui est normal.
> 

Vous pouvez également vérifier la progression de la reconstruction avec la commande suivante :

<div> <style type="text/css" scoped>span.prompt:before{content:"# ";}</style> <pre class="highlight command-prompt"> <span class="prompt">[root@ns3043198:/opt/lsi/MegaCLI] ./MegaCli -PDRbld -ShowProg -PhysDrv [252:1] -a0</span> <span class="blank">&nbsp;</span> <span class="output">Rebuild Progress on Device at Enclosure 252, Slot 1 Completed 93% in 0 Minutes.</span> <span class="blank">&nbsp;</span> <span class="output">Exit Code: 0x00</span> </pre></div>