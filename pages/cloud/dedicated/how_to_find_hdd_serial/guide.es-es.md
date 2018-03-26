---
title: Obtener el numero de serie de un disco duro
slug: obtener-numero-de-serie-disco
excerpt: Cómo conocer el numero de serie de un disco duro para sustituirlo
section: RAID y discos
---


## Requisitos
Para minimizar el riesgo de error durante la sustitución de un disco, pedimos a nuestros clientes que proporcionen el número de serie del disco que quieran sustituir.

En determinados casos, por ejemplo cuando el disco duro no es detectado, es imposible extraer el número de serie. En ese caso, proporcione el número de serie de todos los demás discos y solicite la sustitución de aquel cuyo número de serie no haya indicado.

En la mayoría de los casos, puede obtenerlo utilizando la herramienta **smartmontool**, que permite probar los discos.

Para realizar estas operaciones, es necesario:

- Tener acceso SSH.
- Necesitar la sustitución de un disco.
- La utilidad **sas2ircu** (disponible en la web de [Broadcom](https://www.broadcom.com/support/download-search/?dk=sas2ircu){.external}) debe estar previamente instalada (solo para Windows).


## RAID por software

### En Linux
Para conocer los números de serie de los discos de un servidor con RAID por software, utilice smartctl:

<div> <style type="text/css" scoped>span.prompt:before{content:"# ";}</style> <pre class="highlight command-prompt"> <span class="prompt">smartctl -a /dev/sdX | grep Serial</span> <span class="output">Serial Number:    KKKKKKKKKK</span> </pre></div>
Periférico detectado por su sistema operativo, p. ej. **/dev/sda**, **/dev/sdb**, etc.)


### En Windows
El procedimiento en Windows es parecido al utilizado en Linux. En este caso nos serviremos de la utilidad **sas2ircu** y los mismos comandos que en Linux.



> [!primary]
>
> Es importante ejecutar la consola de comandos como administrador para no obtener un error.
> 

Para conocer los números de serie de los discos en un servidor con RAID por software, utilice el siguiente comando:

<div> <style type="text/css" scoped>span.prompt:before{content:"# ";}</style> <pre class="highlight command-prompt"> <span class="prompt">.\smartctl -a /dev/sdX</span> <span class="output">Serial Number:    KKKKKKKKKK</span> </pre></div>
Periférico detectado por su sistema operativo, p. ej. **/dev/sda**, **/dev/sdb**, etc.


![smart_sdb_windows](images/smart_sdb_windows.png){.thumbnail}


## RAID por hardware
Para comandos más avanzados, siga la guía «[RAID por hardware](https://docs.ovh.com/es/dedicated/raid-hardware/){.ref}».


### Controladora MegaRaid

#### 1. Identificar los conjuntos de RAID
Utilice el comando smartctl para obtener los números de serie de los discos. No obstante, deberá saber cuántos conjuntos RAID tiene en su servidor.

Para obtener esta información, utilice el siguiente comando:

<div> <style type="text/css" scoped>span.prompt:before{content:"# ";}</style> <pre class="highlight command-prompt"> <span class="prompt">MegaCli -LDInfo -Lall -aALL | egrep 'Adapter|Size' | grep -v Strip</span> <span class="output">Adapter 0 — Virtual Drive Information:</span> <span class="output">Size : 36.321 GB</span> <span class="output">Adapter 1 — Virtual Drive Information:</span> <span class="output">Size : 2.727 TB</span> </pre></div>
En este ejemplo, hay dos RAID configurados en el servidor (**Adapter 0** y **Adapter 1**). Deberían estar asociados a **/dev/sda** y **/dev/sdb**.


#### 2. Obtener la información sobre los discos
A continuación, obtenga la información sobre los discos duros con el siguiente comando:

<div> <style type="text/css" scoped>span.prompt:before{content:"# ";}</style> <pre class="highlight command-prompt"> <span class="prompt">MegaCli -PDList -aAll | egrep 'Slot\ Number|Device\ Id|Inquiry\ Data|Raw|Firmware\ state' | sed 's/Slot/\nSlot/g'</span> <span class="blank">&nbsp;</span> <span class="output">Slot Number: 0</span> <span class="output">Device Id: 4</span> <span class="output">Raw Size: 279.460 GB [0x22eec130 Sectors]</span> <span class="output">Firmware state: Online, Spun Up</span> <span class="output">Inquiry Data: BTWL3450062J300PGN  INTEL SSDSC2BB300G4                     D2010355</span> <span class="blank">&nbsp;</span> <span class="output">Slot Number: 1</span> <span class="output">Device Id: 5</span> <span class="output">Raw Size: 279.460 GB [0x22eec130 Sectors]</span> <span class="output">Firmware state: Online, Spun Up</span> <span class="output">Inquiry Data: BTWL345003X6300PGN  INTEL SSDSC2BB300G4                     D2010355</span> <span class="blank">&nbsp;</span> <span class="output">Slot Number: 2</span> <span class="output">Device Id: 7</span> <span class="output">Raw Size: 2.728 TB [0x15d50a3b0 Sectors]</span> <span class="output">Firmware state: Online, Spun Up</span> <span class="output">Inquiry Data:       PN2234P8K2PKDYHGST HUS724030ALA640                    MF8OAA70</span> <span class="blank">&nbsp;</span> <span class="output">Slot Number: 3</span> <span class="output">Device Id: 6</span> <span class="output">Raw Size: 2.728 TB [0x15d50a3b0 Sectors]</span> <span class="output">Firmware state: Online, Spun Up</span> <span class="output">Inquiry Data:       PN2234P8JYP59YHGST HUS724030ALA640                    MF8OAA70</span> </pre></div>

#### 3. Obtener el número de serie
El **Device ID** y el **Adapter ID** serán utilizados para indicar a smartctl qué disco buscar y en qué conjunto de RAID.

El comando debería tener el siguiente formato:

<div> <style type="text/css" scoped>span.prompt:before{content:"# ";}</style> <pre class="highlight command-prompt"> <span class="prompt">smartctl -d megaraid,N -a /dev/sdX | grep Serial</span> <span class="output">Serial Number:    XXXXXXX</span> </pre></div>
**Device ID** del disco

Periférico del RAID (**/dev/sda** = primer RAID; **/dev/sdb** = segundo RAID; etc.)



> [!primary]
>
> En determinadas situaciones, podría obtener la siguiente respuesta:
> <div> <style type="text/css" scoped>span.prompt:before{content:"$ ";}</style> <pre class="highlight command-prompt"> <span class="output">/dev/sda [megaraid_disk_00] [SAT]: Device open changed type from 'megaraid' to 'sat'</span> </pre></div>
> En ese caso, deberá sustituir megaraid por sat+megaraid:
> <div> <style type="text/css" scoped>span.prompt:before{content:"# ";}</style> <pre class="highlight command-prompt"> <span class="prompt">smartctl -d sat+megaraid,N -a /dev/sdX | grep Serial</span> <span class="output">Serial Number:    XXXXXXX</span> </pre></div>


### Controladora LSI
Las tarjetas controladoras RAID LSI utilizan un módulo llamado **sg-map** que asocia los periféricos a rutas **/dev/sgX** (siendo **X** el número del periférico).

Puede consultar la guía «[RAID por hardware (Controladora RAID LSI)](https://docs.ovh.com/es/dedicated/raid-hardware/#controladora-raid-lsi_1){.ref}» para determinar qué disco corresponde a qué **device sg**.

Una vez sepa qué disco corresponde a qué **device sg**, utilice el siguiente comando:

<div> <style type="text/css" scoped>span.prompt:before{content:"# ";}</style> <pre class="highlight command-prompt"> <span class="prompt">smartctl -a /dev/sgX | grep Serial</span> <span class="output">Serial Number:    XXXXXXX</span> </pre></div>
Número de periférico **sg** (p. ej.: **/dev/sg0**, **/dev/sg1**)