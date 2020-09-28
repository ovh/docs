---
title: RAID por hardware
slug: raid-hardware
excerpt: Como comprobar el estado del RAID por hardware y de los discos con controladora RAID&#58; LSI, LSI MegaRaid y 3ware (obsoleto).
section: RAID y discos
---


## Requisitos
- Tener acceso *root* por SSH.
- Tener un servidor con RAID por hardware.



> [!warning]
>
> Es peligroso manipular los comandos MegaCli y lsiutil si no está seguro de cómo hacerlo, ya que corre el riesgo de perder sus datos. Por ese motivo, es importante hacer un backup antes de realizar cualquier operación.
> 


## Controladora RAID MegaRaid

### 1. Informacion
Antes de comprobar el estado del RAID, verifique que tiene una controladora RAID de tipo MegaRaid.

<div> <style type="text/css" scoped>span.prompt:before{content:"# ";}</style> <pre class="highlight command-prompt"> <span class="prompt">lspci | grep -i lsi | grep -i megaraid</span> <span class="output">03:00.0 RAID bus controller: LSI Logic / Symbios Logic MegaRAID SAS 2108 [Liberator] (rev 05)</span> </pre></div>
Esto confirma que el servidor efectivamente tiene una controladora RAID MegaRaid.

Utilice el comando MegaCli para mostrar los conjuntos de RAID disponibles:

<div> <style type="text/css" scoped>span.prompt:before{content:"# ";}</style> <pre class="highlight command-prompt"> <span class="prompt">MegaCli -LDInfo -Lall -aALL (o bien: storcli /c0 /vall show)</span> <span class="output">Adapter 0 - Virtual Drive Information:</span> <span class="output">Virtual Drive: 0 (Target Id: 0)</span> <span class="output">Name :</span> <span class="output">RAID Level : Primary-1, Secondary-0, RAID Level Qualifier-0</span> <span class="output">Size : 36.321 GB</span> <span class="output">Sector Size : 512</span> <span class="output">Mirror Data : 36.321 GB</span> <span class="output">State : Optimal</span> <span class="output">Strip Size : 64 KB</span> <span class="output">Number Of Drives : 2</span> <span class="output">Span Depth : 1</span> <span class="output">Default Cache Policy: WriteBack, ReadAdaptive, Cached, Write Cache OK if Bad BBU</span> <span class="output">Current Cache Policy: WriteBack, ReadAdaptive, Cached, Write Cache OK if Bad BBU</span> <span class="output">Default Access Policy: Read/Write</span> <span class="output">Current Access Policy: Read/Write</span> <span class="output">Disk Cache Policy : Disk's Default</span> <span class="output">Encryption Type : None</span> <span class="output">Bad Blocks Exist: No</span> <span class="output">Is VD Cached: No</span> <span class="blank">&nbsp;</span> <span class="blank">&nbsp;</span> <span class="output">Virtual Drive: 1 (Target Id: 1)</span> <span class="output">Name :</span> <span class="output">RAID Level : Primary-1, Secondary-0, RAID Level Qualifier-0</span> <span class="output">Size : 2.727 TB</span> <span class="output">Sector Size : 512</span> <span class="output">Mirror Data : 2.727 TB</span> <span class="output">State : Optimal</span> <span class="output">Strip Size : 64 KB</span> <span class="output">Number Of Drives : 2</span> <span class="output">Span Depth : 1</span> <span class="output">Default Cache Policy: WriteBack, ReadAdaptive, Cached, Write Cache OK if Bad BBU</span> <span class="output">Current Cache Policy: WriteBack, ReadAdaptive, Cached, Write Cache OK if Bad BBU</span> <span class="output">Default Access Policy: Read/Write</span> <span class="output">Current Access Policy: Read/Write</span> <span class="output">Disk Cache Policy : Disk's Default</span> <span class="output">Encryption Type : None</span> <span class="output">Bad Blocks Exist: No</span> <span class="output">Is VD Cached: Yes</span> <span class="output">Cache Cade Type : Read Only</span> <span class="blank">&nbsp;</span> <span class="output">Exit Code: 0x00</span> </pre></div>
En la respuesta anterior, vemos que tenemos dos discos virtuales, cada uno de los cuales está formado por dos discos físicos. Es decir, que tenemos un total de cuatro discos.

En este caso, el estado del RAID indica que es Optimal, lo que significa que funciona correctamente.

Si el estado del RAID muestra Degraded, le recomendamos que compruebe el estado de los discos duros.


### 2. Estado de los discos
En primer lugar, es necesario mostrar los **Device Id** para cada disco duro para poder probarlos bien con la herramienta **smartmontools**:

<div> <style type="text/css" scoped>span.prompt:before{content:"# ";}</style> <pre class="highlight command-prompt"> <span class="prompt">MegaCli -PDList -aAll | egrep 'Slot\ Number|Device\ Id|Inquiry\ Data|Raw|Firmware\ state' | sed 's/Slot/\nSlot/g' (o bien: storcli /c0 /eall /sall show)</span> <span class="blank">&nbsp;</span> <span class="output">Slot Number: 0</span> <span class="output">Device Id: 4</span> <span class="output">Raw Size: 279.460 GB [0x22eec130 Sectors]</span> <span class="output">Firmware state: Online, Spun Up</span> <span class="output">Inquiry Data: BTWL3450062J300PGN  INTEL SSDSC2BB300G4                     D2010355</span> <span class="blank">&nbsp;</span> <span class="output">Slot Number: 1</span> <span class="output">Device Id: 5</span> <span class="output">Raw Size: 279.460 GB [0x22eec130 Sectors]</span> <span class="output">Firmware state: Online, Spun Up</span> <span class="output">Inquiry Data: BTWL345003X6300PGN  INTEL SSDSC2BB300G4                     D2010355</span> <span class="blank">&nbsp;</span> <span class="output">Slot Number: 2</span> <span class="output">Device Id: 7</span> <span class="output">Raw Size: 2.728 TB [0x15d50a3b0 Sectors]</span> <span class="output">Firmware state: Online, Spun Up</span> <span class="output">Inquiry Data:       PN2234P8K2PKDYHGST HUS724030ALA640                    MF8OAA70</span> <span class="blank">&nbsp;</span> <span class="output">Slot Number: 3</span> <span class="output">Device Id: 6</span> <span class="output">Raw Size: 2.728 TB [0x15d50a3b0 Sectors]</span> <span class="output">Firmware state: Online, Spun Up</span> <span class="output">Inquiry Data:       PN2234P8JYP59YHGST HUS724030ALA640                    MF8OAA70</span> </pre></div>
Con el comando smartctl de la herramienta **smartmontools**, pruebe cada disco duro individualmente como se indica a continuación:

<div> <style type="text/css" scoped>span.prompt:before{content:"# ";}</style> <pre class="highlight command-prompt"> <span class="prompt">smartctl -d megaraid,N -a /dev/sdX</span> </pre></div>
**Device ID** del disco duro.

Periférico asociado al RAID (**/dev/sda** = primer RAID; **/dev/sdb** = segundo RAID; etc.)



> [!primary]
>
> En determinados casos, puede obtener el siguiente mensaje:
> <div> <style type="text/css" scoped>span.prompt:before{content:"$ ";}</style> <pre class="highlight command-prompt"> <span class="output">/dev/sda [megaraid_disk_00] [SAT]: Device open changed type from 'megaraid' to 'sat'</span> </pre></div>
> En ese caso, deberá sustituir megaraid por sat+megaraid:
> <div> <style type="text/css" scoped>span.prompt:before{content:"# ";}</style> <pre class="highlight command-prompt"> <span class="prompt">smartctl -d sat+megaraid,N -a /dev/sdX</span> </pre></div>



> [!warning]
>
> Si un disco contiene errores, realice un backup de sus datos y contacte con el soporte de OVH indicando el Enclosure ID, el Slot Number, el Device ID y el número de serie del disco para que podamos identificar el disco defectuoso.
> Si tiene todos esos datos, usted mismo puede programar la sustitución directamente desde el área de cliente, seleccionando el nombre del servidor y haciendo clic en `Sustitución de discos`{.action}.
> 


### 3. Resincronizacion
Si se han sustituido uno o más discos, el RAID se resincronizará automáticamente.

Puede utilizar el siguiente comando para ver qué disco duro se está reconstruyendo:

<div> <style type="text/css" scoped>span.prompt:before{content:"# ";}</style> <pre class="highlight command-prompt"> <span class="prompt">MegaCli -PDList -aAll | egrep 'Slot\ Number|Device\ Id|Inquiry\ Data|Raw|Firmware\ state' | sed 's/Slot/\nSlot/g' (o bien: storcli /c0 /eall /sall show)</span> <span class="blank">&nbsp;</span> <span class="output">Slot Number: 0</span> <span class="output">Device Id: 4</span> <span class="output">Raw Size: 279.460 GB [0x22eec130 Sectors]</span> <span class="output">Firmware state: Online, Spun Up</span> <span class="output">Inquiry Data: BTWL3450062J300PGN  INTEL SSDSC2BB300G4                     D2010355</span> <span class="blank">&nbsp;</span> <span class="output">Slot Number: 1</span> <span class="output">Device Id: 5</span> <span class="output">Raw Size: 279.460 GB [0x22eec130 Sectors]</span> <span class="output">Firmware state: Online, Spun Up</span> <span class="output">Inquiry Data: BTWL345003X6300PGN  INTEL SSDSC2BB300G4                     D2010355</span> <span class="blank">&nbsp;</span> <span class="output">Slot Number: 2</span> <span class="output">Device Id: 7</span> <span class="output">Raw Size: 2.728 TB [0x15d50a3b0 Sectors]</span> <span class="output">Firmware state: Online, Spun Up</span> <span class="output">Inquiry Data:       PN2234P8K2PKDYHGST HUS724030ALA640                    MF8OAA70</span> <span class="blank">&nbsp;</span> <span class="output">Slot Number: 3</span> <span class="output">Device Id: 6</span> <span class="output">Raw Size: 2.728 TB [0x15d50a3b0 Sectors]</span> <span class="output">Firmware state: Rebuild</span> <span class="output">Inquiry Data:       PN2234P8JYP59YHGST HUS724030ALA640                    MF8OAA70</span> </pre></div>
Para ver el progreso de la reconstrucción de un disco, puede utilizar el siguiente comando:

<div> <style type="text/css" scoped>span.prompt:before{content:"# ";}</style> <pre class="highlight command-prompt"> <span class="prompt">MegaCli -PDRbld -ShowProg -PhysDrv [EncID:SlotID] -aALL (o bien: storcli /c0/eEncID/sSlotID show rebuild)</span> </pre></div>
Enclosure ID

Slot ID



> [!primary]
>
> Puede obtener estos valores mostrando la información de los discos duros como se indica más arriba.
> 


### 4. CacheCade


> [!primary]
>
> El CacheCade es un módulo creado por LSI para mejorar el rendimiento de lectura aleatoria de los discos duros utilizando un disco SSD como periférico frontal de caché.
> 

Para comprobar la configuración del CacheCade, puede utilizar el siguiente comando:

<div> <style type="text/css" scoped>span.prompt:before{content:"# ";}</style> <pre class="highlight command-prompt"> <span class="prompt">MegaCli -CfgCacheCadeDsply -a0 (o bien: storcli /c0 /dall show cachecade)</span> </pre></div>
Para comprobar qué RAID está asociado al CacheCade:

<div> <style type="text/css" scoped>span.prompt:before{content:"# ";}</style> <pre class="highlight command-prompt"> <span class="prompt">MegaCli -CfgCacheCadeDsply -a0 | grep "Associated LDs"</span> </pre></div>

## Controladora RAID LSI

### 1. Informacion
Antes de comprobar el estado del RAID, verifique que tiene una controladora RAID de tipo LSI:

<div> <style type="text/css" scoped>span.prompt:before{content:"# ";}</style> <pre class="highlight command-prompt"> <span class="prompt">lspci | grep -i lsi | grep -v megaraid</span> <span class="output">01:00.0 Serial Attached SCSI controller: LSI Logic / Symbios Logic SAS2004 PCI-Express Fusion-MPT SAS-2 [Spitfire] (rev 03)</span> </pre></div>
Esto confirma que el servidor efectivamente tiene una controladora RAID LSI.



> [!primary]
>
> El comando grep -v megaraid sirve para retirar el parámetro MegaRaid del resultado del comando lspci, ya que las tarjetas MegaRaid también son fabricadas por LSI Corporation.
> 

Para obtener la información sobre los RAID disponibles, puede utilizar el comando lsiutil:



> [!warning]
>
> Atención, los valores 1,0 y 21 del comando siguiente pueden ser distintos según la versión. Preste mucha atención cuando utilice este tipo de comando.
> 

<div> <style type="text/css" scoped>span.prompt:before{content:"# ";}</style> <pre class="highlight command-prompt"> <span class="prompt">lsiutil -p1 -a 1,0 21</span> <span class="blank">&nbsp;</span> <span class="output">LSI Logic MPT Configuration Utility, Version 1.63-OVH (27a4f9f54c)</span> <span class="blank">&nbsp;</span> <span class="output">1 MPT Port found</span> <span class="blank">&nbsp;</span> <span class="output">     Port Name         Chip Vendor/Type/Rev    MPT Rev  Firmware Rev  IOC</span> <span class="output"> 1.  ioc0              LSI Logic SAS2004 03      200      13000000     0</span> <span class="blank">&nbsp;</span> <span class="output">RAID actions menu, select an option:  [1-99 or e/p/w or 0 to quit] 1</span> <span class="blank">&nbsp;</span> <span class="blank">&nbsp;</span> <span class="output">Volume 0 is DevHandle 011e, Bus 1 Target 0, Type RAID1 (Mirroring)</span> <span class="output">  Volume Name:</span> <span class="output">  Volume WWID:  0aaf504551c8efe5</span> <span class="output">  Volume State:  optimal, enabled, background init complete</span> <span class="output">  Volume Settings:  write caching disabled, auto configure hot swap enabled</span> <span class="output">  Volume draws from Hot Spare Pools:  0</span> <span class="output">  Volume Size 1906394 MB, 2 Members</span> <span class="output">  Primary is PhysDisk 1 (DevHandle 0009, Bus 0 Target 0)</span> <span class="output">  Secondary is PhysDisk 0 (DevHandle 000a, Bus 0 Target 1)</span> <span class="blank">&nbsp;</span> <span class="output">RAID actions menu, select an option:  [1-99 or e/p/w or 0 to quit] 0</span> </pre></div>
Aquí vemos un disco virtual formado por dos discos físicos.

En este caso, el estado del RAID indica que es Optimal, lo que significa que funciona correctamente.

Si el estado del RAID muestra Degraded, le recomendamos que compruebe el estado de los discos duros.


### 2. Estado de los discos
Para comprobar el estado de los discos a partir de la controladora RAID, puede utilizar el siguiente comando:

<div> <style type="text/css" scoped>span.prompt:before{content:"# ";}</style> <pre class="highlight command-prompt"> <span class="prompt">lsiutil -p1 -a 2,0 21</span> <span class="blank">&nbsp;</span> <span class="output">LSI Logic MPT Configuration Utility, Version 1.63-OVH (27a4f9f54c)</span> <span class="blank">&nbsp;</span> <span class="output">1 MPT Port found</span> <span class="blank">&nbsp;</span> <span class="output">     Port Name         Chip Vendor/Type/Rev    MPT Rev  Firmware Rev  IOC</span> <span class="output"> 1.  ioc0              LSI Logic SAS2004 03      200      13000000     0</span> <span class="blank">&nbsp;</span> <span class="output">RAID actions menu, select an option:  [1-99 or e/p/w or 0 to quit] 2</span> <span class="blank">&nbsp;</span> <span class="blank">&nbsp;</span> <span class="output">PhysDisk 0 is DevHandle 000a, Bus 0 Target 1</span> <span class="output">  PhysDisk State:  optimal</span> <span class="output">  PhysDisk Size 1906394 MB, Inquiry Data:  ATA      HGST HUS724020AL AA70</span> <span class="output">  Path 0 is DevHandle 000a, Bus 0 Target 1, online, primary</span> <span class="output">  Path 1 is DevHandle 000a, invalid</span> <span class="blank">&nbsp;</span> <span class="output">PhysDisk 1 is DevHandle 0009, Bus 0 Target 0</span> <span class="output">  PhysDisk State:  optimal</span> <span class="output">  PhysDisk Size 1906394 MB, Inquiry Data:  ATA      HGST HUS724020AL AA70</span> <span class="output">  Path 0 is DevHandle 0009, Bus 0 Target 0, online, primary</span> <span class="output">  Path 1 is DevHandle 0009, invalid</span> <span class="blank">&nbsp;</span> <span class="output">RAID actions menu, select an option:  [1-99 or e/p/w or 0 to quit] 0</span> </pre></div>
En este caso, los dos discos están en estado Optimal.

Como la controladora LSI utiliza **sg-map**, debemos probar el periférico **/dev/sgX** (sustituyendo **X** por el número del periférico, como **/dev/sg1**) correspondiente a los discos duros para poder probarlo correctamente con **smartmontools**.

Puede mostrarlos como se indica a continuación:

<div> <style type="text/css" scoped>span.prompt:before{content:"# ";}</style> <pre class="highlight command-prompt"> <span class="prompt">cat /proc/scsi/scsi | grep Vendor</span> <span class="output">  Vendor: LSI      Model: Logical Volume   Rev: 3000</span> <span class="output">  Vendor: ATA      Model: HGST HUS724020AL Rev: AA70</span> <span class="output">  Vendor: ATA      Model: HGST HUS724020AL Rev: AA70</span> </pre></div>

> [!primary]
>
> Cada línea representa un periférico sg, que están montados en el orden en el que se indican, por ejemplo:
> |---|---|---|---|
> |
> Vendor: LSI
> |
> Model: Logical Volume
> |
> Rev: 3000
> |
> => /dev/sg0
> |
> |
> Vendor: ATA
> |
> Model: HGST HUS724020AL
> |
> Rev: AA70
> |
> => /dev/sg1
> |
> |
> Vendor: ATA
> |
> Model: HGST HUS724020AL
> |
> Rev: AA70
> |
> => /dev/sg2
> |
> |
> etc.
> ||||
> 
> 

Para saber cuál es el periférico correcto con un solo comando, puede utilizar el siguiente:

<div> <style type="text/css" scoped>span.prompt:before{content:"# ";}</style> <pre class="highlight command-prompt"> <span class="prompt">cat /proc/scsi/scsi | grep Vendor | nl -v 0 | sed 's/^/\/dev\/sg/' | grep -v LSI | cut -d ' ' -f1,6 | sed 's/sg\ /sg/' | sed 's/\/dev\/sg.\ /\/dev\/sg/'</span> <span class="output">/dev/sg1</span> <span class="output">/dev/sg2</span> </pre></div>
Con el comando smartctl de la herramienta **smartmontools**, pruebe cada disco duro individualmente como se indica a continuación:

<div> <style type="text/css" scoped>span.prompt:before{content:"# ";}</style> <pre class="highlight command-prompt"> <span class="prompt">smartctl -a /dev/sgX</span> </pre></div>
Número del periférico **sg** mostrado con el comando anterior.



> [!warning]
>
> Si un disco contiene errores, realice un backup de sus datos y contacte con el soporte de OVH. Si tiene todos esos datos, usted mismo puede programar la sustitución directamente desde el área de cliente, seleccionando el nombre del servidor y haciendo clic en `Sustitución de discos`{.action}.
> 


### 3. Resincronizacion
Si se han sustituido uno o más discos, el RAID se resincronizará automáticamente.

Para comprobar si el RAID se está resincronizando y seguir el progreso de la resincronización, puede utilizar el siguiente comando:



> [!warning]
>
> Atención, los valores 3,0 y 21 del comando siguiente pueden ser distintos según la versión. Preste mucha atención cuando utilice este tipo de comando.
> 

<div> <style type="text/css" scoped>span.prompt:before{content:"# ";}</style> <pre class="highlight command-prompt"> <span class="prompt">lsiutil -p1 -a 3,0 21</span> <span class="blank">&nbsp;</span> <span class="output">LSI Logic MPT Configuration Utility, Version 1.63-OVH (27a4f9f54c)</span> <span class="blank">&nbsp;</span> <span class="output">1 MPT Port found</span> <span class="blank">&nbsp;</span> <span class="output">     Port Name         Chip Vendor/Type/Rev    MPT Rev  Firmware Rev  IOC</span> <span class="output"> 1.  ioc0              LSI Logic SAS2004 03      200      13000000     0</span> <span class="blank">&nbsp;</span> <span class="output">RAID actions menu, select an option:  [1-99 or e/p/w or 0 to quit] 3</span> <span class="blank">&nbsp;</span> <span class="output">Volume 0 is DevHandle 011e, Bus 1 Target 0, Type RAID1 (Mirroring)</span> <span class="blank">&nbsp;</span> <span class="output">Volume 0 State:  degraded, enabled, resync in progress</span> <span class="output">Resync Progress:  total blocks 624943104, blocks remaining 484024888, 77%</span> <span class="blank">&nbsp;</span> <span class="output">RAID actions menu, select an option:  [1-99 or e/p/w or 0 to quit] 0</span> </pre></div>

> [!warning]
>
> El valor en porcentaje indicado en el resultado del comando no es el porcentaje realizado, sino el porcentaje restante.
> 


## Controladora RAID 3ware


> [!alert]
>
> Esta controladora RAID está obsoleta y es inestable. Le recomendamos encarecidamente que contacte con el soporte de OVHcloud para planificar una intervención de sustitución de esta controladora RAID por una LSI. Este tipo de intervención requiere la reinstalación del servidor, por lo que deberá haber realizado previamente un backup de sus datos.
> 
