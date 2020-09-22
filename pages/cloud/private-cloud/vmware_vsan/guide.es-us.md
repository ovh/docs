---
title: 'Implementar la hiperconvergencia VMware con vSAN'
slug: vmware-vsan
excerpt: 'Cómo aprovechar la potencia de la hiperconvergencia en las máquinas virtuales con vSAN'
section: 'Funcionalidades de VMware vSphere'
---

**Última actualización: 25/08/2020**

## Objetivo

OVH le permite implementar VMware vSAN en su solución Private Cloud.

**Esta guía explica cómo aprovechar la potencia de la hiperconvergencia en sus máquinas virtuales con vSAN.**

## Requisitos

* Tener contratado un servicio [Private Cloud](https://www.ovhcloud.com/es/enterprise/products/hosted-private-cloud/){.external}.
* Tener al menos tres hosts vSAN.
* Estar conectado al cliente vSphere.

## Procedimiento

### vSAN: conceptos clave

#### ¿Qué es vSAN?

vSAN es una solución de almacenamiento de objetos de VMware. Permite agregar un conjunto de discos situados directamente en los hosts VMware y los presenta como un datastore único. Este tipo de arquitectura, que utiliza las capacidades de procesamiento y de almacenamiento distribuidas en un conjunto de hosts físicos, también recibe el nombre de «**arquitectura hiperconvergente**». Como este datastore es una construcción virtual gestionada por el software vSAN, también se denomina Software-Defined Storage o SDS. Una de las ventajas de vSAN es que está totalmente integrado en vSphere y se administra directamente desde vCenter.

#### ¿Qué es el almacenamiento de objetos?

vSAN es un sistema de almacenamiento basado en objetos. Las MV alojadas en este datastore están compuestas por diferentes objetos, a diferencia del almacenamiento «tradicional», donde las MV están formadas por archivos alojados en un LUN (número de unidad lógica). Para proteger estos objetos, solo hay que replicarlos en varios hosts del cluster, mientras que habitualmente es el nivel de RAID de los discos el que garantiza esta protección.

Una MV está formada por los siguientes objetos:

* los archivos de la MV (VMX, NVRAM, logs, snapshots de la memoria...), también llamados VM Home;
* los discos virtuales (VMDK);
* el swap;
* los snapshots de los discos.

Los elementos que constituyen un objeto se denominan componentes. Por ejemplo, si un objeto está replicado en dos hosts, está formado por dos componentes. El número de componentes asociados a un objeto determina el nivel de resiliencia de los datos.

#### Protección de los datos

Con el fin de garantizar la protección de los datos en caso de fallo de hardware (hosts, discos, etc.), es necesario definir el nivel de redundancia esperado. Para ello, vSAN ofrece dos mecanismos complementarios: Failure To Tolerate (FTT) y Failure Tolerance Method (FTM).

##### Failure To Tolerate

El primer nivel de redundancia hace referencia al número de fallos (pérdida de un disco, de un host o de la red) que el cluster vSAN debe ser capaz de soportar. Este valor, denominado en inglés **Failure To Tolerate** o FTT, representa el nivel de errores tolerado, que puede ir desde 0 (ninguna redundancia) hasta 3 (máxima redundancia). Según el nivel esperado, vSAN creará varios componentes y los distribuirá en cada uno de los hosts. De este modo, en caso de fallo seguirá siendo posible acceder a las máquinas virtuales. Cuanto mayor es el nivel de redundancia esperado, mayor será el número de hosts necesarios:

* Para un FTT de 1, son necesarios al menos 3 hosts.
* Para un FTT de 2, son necesarios al menos 5 hosts.
* Para un FTT de 3, son necesarios al menos 7 hosts.

> [!warning]
>
> Si configura un nivel de FTT 0, los datos no tendrán ningún tipo de redundancia, por lo que existe riesgo de no disponibilidad de las MV correspondientes.
>

##### Failure Tolerance Method

Además del número de errores tolerado, vSAN permite elegir entre dos métodos de protección de los datos (en inglés, «**Failure Tolerance Methods**» o FTM): el *mirroring* y el *erasure coding*. Estos mecanismos funcionan de forma similar a los clusters RAID que utilizan los controladores de discos duros, pero se aplican directamente a los objetos y, por consiguiente, a los componentes.

* **Mirroring** (RAID 1): Es el nivel por defecto. Cada objeto se escribe simultáneamente en dos hosts diferentes (en espejo).
* **Erasure coding + FTT 1** (RAID 5): Cada objeto se divide en tres componentes y se calcula un cuarto componente de paridad, que permite encontrar los datos que faltan en caso de pérdida de uno de los componentes. Para poder escribir cuatro componentes es necesario tener cuatro hosts.
* **Erasure coding + FTT 1** (RAID 6): Cada objeto se divide en cuatro componentes y dos componentes de paridad, que permiten recalcular dos fragmentos perdidos. En este caso, para escribir seis componentes en distintas localizaciones y garantizar la redundancia, es necesario tener seis hosts.

Estos parámetros determinarán el número de componentes que constituyen un objeto y, por lo tanto, el número mínimo de hosts y de fallos (en hosts, discos, etc.) que la plataforma puede soportar sin perder acceso a los datos.

**Configuración de los objetos en función de FTT y FTM**


| Failure Tolerance Method (FTM)   | Failure To Tolerate (FTT) | RAID equivalente | Núm. mínimo de hosts | Núm. de errores tolerado |
|------------------------|----------------------------------|------------------------|------------------------|------------------------|
| Mirroring | 1 | RAID 1 | 3 | 1 |
| Mirroring | 2 | RAID 1 | 5 | 2 |
| Mirroring | 3 | RAID 1 | 7 | 3 |
| Mirroring | 1 | RAID 5 | 4 | 1 |
| Mirroring | 2 | RAID 6 | 6 | 2 |

> [!primary]
>
> En el caso del *erasure coding*, los niveles de protección RAID 5 y 6 imponen respectivamente un FTT de 1 o 2. El resto de valores (0 o 3) no son compatibles.
>

#### Consumo de espacio en disco

Como es natural, el uso de mecanismos de redundancia consume mucho espacio, por lo que será necesario encontrar un equilibrio. La ventaja de vSAN es que permite elegir las políticas de redundancia por MV y no globalmente a nivel del datastore. De esta forma, podemos tener distintas políticas en función del tipo de entorno.

**Exceso de consumo debido a la redundancia**

| Nivel de protección   | RAID 1 | RAID 5 | RAID 6 |
|------------------------|----------------------------------|------------------------|------------------------|
| 3 hosts con FTT 1          | x2    | - | - |
| 4 hosts con FTT 1          | x2    | x1,33 | - |
| 5 hosts con FTT 1          | x2    | x1,33 | - |
| 6 hosts con FTT 2          | x2    | - | x1,5 |

> [!warning]
>
> Por motivos de rendimiento y de resiliencia, VMware recomienda no superar el 70% del espacio en un host vSAN.
>

#### Espacio neto útil para los datos del usuario

Veamos, a modo de ejemplo, una estimación conservadora del espacio disponible para los datos en diferentes packs SDDC vSAN 256 o 512, teniendo en cuenta el límite del 70% recomendado por VMware.

| Núm. de hosts vSAN 256  | FTT  | Capacidad del host (en TB)  | Espacio total  | 	Espacio útil con política RAID 1 (en TB)  | Espacio útil con política RAID 5 (en TB)  | Espacio útil con política RAID 6 (en TB)  |
|---|---|---|---|---|---|---|
| 3  | 1  | 4  | 12  | 4,2  | n/a  | n/a  |
| 4  | 1  | 4  | 16  | 5,6  | 8,4  | n/a  |
| 5  | 1  | 4  | 20  | 7,0  | 10,5  | n/a  |
| 6  | 1  | 4  | 24  | 8,4  | 12,6  | n/a  |
| 6  | 2  | 4  | 24  | n/a  | n/a  | 11,1  |

| Núm. de hosts vSAN 512  | FTT  | Capacidad del host (en TB)  | Espacio total  | 	Espacio útil con política RAID 1 (en TB)  | Espacio útil con política RAID 5 (en TB)  | Espacio útil con política RAID 6 (en TB)  |
|---|---|---|---|---|---|---|
| 3  | 1  | 8  | 24  | 8,4  | n/a  | n/a  |
| 4  | 1  | 8  | 32  | 11,2  | 16,8  | n/a  |
| 5  | 1  | 8  | 40  | 14,0  | 21,0  | n/a  |
| 6  | 1  | 8  | 48  | 16,8  | 25,2  | n/a  |
| 6  | 2  | 8  | 48  | n/a  | n/a  | 22,2  |

> [!primary]
>
> Estas cifras se basan en el supuesto de que el **100% de las MV** utilizan la misma política de almacenamiento.
> No se tienen en cuenta los posibles incrementos provocados por la desduplicación o la compresión, que varían considerablemente en función del tipo de dato almacenado.
> Así pues, se trata de una estimación muy conservadora.
>

#### Grupos de discos (*disk groups*)

Los discos físicos presentes en los hosts se agrupan en grupos de discos. Los grupos de discos constituyen la unidad básica de gestión por vSAN, y están formados por un disco de caché SSD (obligatorio) y hasta 7 discos de almacenamiento (para ofrecer el máximo rendimiento, las configuraciones de OVH utilizan exclusivamente discos SSD NVMe). Cada host que participa en vSAN debe tener al menos un grupo de discos y un máximo de cinco.

Al crear un *disk group*, se añaden discos de caché al pool de almacenamiento y, por lo tanto, se aumenta el espacio de caché y mejora el rendimiento global.

En contrapartida, como todas las escrituras se realizan en el volumen de caché, un fallo en el disco de caché de un host inutiliza automáticamente los discos de almacenamiento del *disk group* correspondiente. Si el host dispone de un único *disk group*, este ya no estará disponible para vSAN hasta que se sustituya el disco que falla.

La operación de asignación de los discos de caché y de almacenamiento a un *disk group* se denomina **reclamación** o *claiming*, y tiene lugar al iniciar vSAN.

##### El testigo (*witness*)

Existe un objeto llamado **testigo** o *witness*. Su función es resolver los posibles problemas de particiones en el cluster. Una partición se produce cuando algunos miembros del cluster no se pueden comunicar o cuando un host está aislado.

Por ejemplo, con una política RAID 1, si las dos copias de un objeto se encuentran en una partición distinta y se modifican simultáneamente, no es posible saber dónde están los datos de referencia. Y ahí es donde interviene el *witness*. Se trata de un archivo de pequeño tamaño (2 MB) que contiene únicamente metadatos y que permite decidir cuál es la copia que sirve de referencia. En un cluster de 3 hosts con una política RAID 1, dos hosts recibirán una copia de los datos y el tercero (el *witness*) contiene información sobre los objetos de datos. En caso de partición o aislamiento, el host que siga teniendo acceso al *witness* seguirá funcionando en modo degradado. Cuando el problema se haya solucionado, el host aislado se resincronizará con los datos más recientes.

El *witness* solo se utiliza en la política RAID 1, ya que en RAID 5 o 6 los datos y su
paridad se distribuyen en todos los hosts, puesto que su número es suficiente para evitar cualquier ambigüedad en caso de aislamiento de un host.

##### Visualización de los objetos

Para visualizar el estado de los objetos, haga clic en el cluster, abra la pestaña `Monitor`{.action} y vaya a la sección `vSAN`{.action}.

A continuación, haga clic en `Virtual Objects`{.action}.

![Objetos](images/vsan_21.png){.thumbnail}

Podrá ver tres tipos de objetos vSAN:

* VM Home
* Disco duro (*hard disk*)
* Archivo de swap RAM (archivo vswp)

Al hacer clic en un objeto, podrá ver cómo está almacenado en el cluster, así como los distintos componentes que conforman el objeto.

![](images/vsan_22.png){.thumbnail}

Para ilustrar los otros tipos de objetos, a continuación vamos a crear un snapshot de la máquina virtual.

![](images/vsan_23.png){.thumbnail}

Se añadirá entonces un nuevo objeto «snapshot» a cada uno de los objetos «hard disk».

#### Máximos de vSAN

##### vSAN 6.6

* 5 *disk groups* por host
* 9000 componentes por host vSAN
* 35 discos de almacenamiento por host
* 64 hosts por cluster vSAN
* 1 único datastore vSAN por cluster
* 6000 máquinas virtuales por cluster
* 12 *stripes* por objeto
* Tolerancia de pérdida de host: 3
* Tamaño máximo de disco virtual: 62 TB

#### Limitaciones de vSAN

##### vSAN 6.6

Las siguientes funciones de vSphere no son compatibles:

* RDM, VMFS, partición de diagnóstico
* Raw Device Mapping (RDM)
* Storage I/O Control
* Reserva de volumen SCSI

### Activar vSAN

> [!warning]
>
> En vSphere 6.5, las operaciones relativas a vSAN solo están disponibles en la versión Flash de vSphere Web Client y no en la interfaz HMTL 5.
>

#### Desactivación del modo de alta disponibilidad (vSphere HA)

vSAN se basa en las funcionalidades de alta disponibilidad del cluster. No obstante, antes de realizar cualquier operación deberá desactivar este modo.

Para ello, acceda a la configuración del cluster en el que esté activado vSAN y, en la sección **vSphere Availability**, haga clic en `Edit`{.action}. Desmarque la casilla correspondiente.

![Desactivación del modo HA](images/vsan_01.png){.thumbnail}

#### Configuración vSAN

Esta guía explica las funcionalidades básicas de vSAN. Por lo tanto, utilizaremos las opciones por defecto, perfectamente válidas para este uso.

![Configuración vSAN](images/vsan_03.png){.thumbnail}

Las únicas opciones que vamos a activar son la desduplicación y la compresión. Estas opciones permiten optimizar el almacenamiento de datos, guardando una única vez los datos que se repitan.

Este proceso es posible gracias al uso de discos flash de alto rendimiento en lugar de los discos mecánicos tradicionales.

![Configuración de red](images/vsan_04.png){.thumbnail}

Las tarjetas de red aparecerán habilitadas por defecto para el tráfico vSAN.

Haga clic en `Next`{.action} para seleccionar los discos que quiera utilizar para el almacenamiento vSAN. Si activa vSAN por primera vez, los discos se detectarán automáticamente.

![Configuración de discos](images/vsan_05.png){.thumbnail}

> [!primary]
>
> Si los discos ya se han iniciado en un despliegue vSAN anterior, no tendrá que volver a seleccionarlos. La pantalla de selección estará vacía, pero podrá pasar a la siguiente etapa.
>
> ![Lista de discos vacía](images/vsan_06.png){.thumbnail}
>

La última pantalla le permite comprobar que la configuración es correcta antes de iniciar el proceso.

![](images/vsan_07.png){.thumbnail}

La activación de vSAN podría tardar unos minutos. Una vez finalizada, podrá consultar la información de configuración en la pestaña `vSAN`{.action}.

![](images/vsan_08.png){.thumbnail}

> [!warning]
>
> Es importante reactivar la función de alta disponibilidad del cluster.
>

### Desactivar vSAN

> [!warning]
>
> En vSphere 6.5, las operaciones relativas a vSAN solo están disponibles en la versión Flash de vSphere Web Client y no en la interfaz HMTL 5.
>

#### Evacuar el datastore

Utilizando un datastore (Storage) vMotion, deberá evacuar todas las máquinas virtuales ubicadas en el datastore vSAN o eliminar las que ya no le sirvan.

En la pestaña `Storage`{.action} del inventario, compruebe que no haya ninguna máquina virtual instalada en el datastore vSAN.

![](images/vsan_09.png){.thumbnail}

#### Eliminación de los grupos de discos

Si quiere eliminar toda la información de configuración vSAN de los discos, puede borrar el grupo de discos creado por vSAN al activarlo.

Para ello, abra la pestaña `vSAN`{.action} en la configuración del cluster y vaya a la sección `Disk Management`{.action}.

![](images/vsan_11.png){.thumbnail}

Para cada uno de los hosts, seleccione el grupo de discos correspondiente y haga clic en el icono de eliminación situado sobre la tabla.

Confirme la operación haciendo clic en `Yes`{.action}.

![](images/vsan_12.png){.thumbnail}

Las dos primeras opciones son útiles si quiere que el datastore vSAN siga funcionando después de eliminar un host del cluster.

Como va a eliminar todo el datastore, no es necesario migrar los datos. Así pues, puede seleccionar la última opción `No data evacuation`{.action}.

La eliminación tarda unos instantes.

Repita la operación en cada uno de los nodos del cluster hasta eliminar el grupo de discos en su totalidad.

![](images/vsan_13.png){.thumbnail}

Si aparece algún mensaje de error relativo a la salud del grupo de discos, puede ignorarlo.

#### Desactivación de la alta disponibilidad

Al igual que para la activación, es necesario desactivar la alta disponibilidad en el cluster antes de detener vSAN. Para ello, vaya a la configuración del cluster y, en la sección **vSphere Availability**, haga clic en `Edit`{.action}. Desmarque la casilla correspondiente y acepte con `OK`{.action}.

![](images/vsan_14.png){.thumbnail}

#### Desactivación de vSAN

Una vez desactivada la alta disponibilidad, podrá detener vSAN.

También en la configuración del cluster, haga clic en el botón `Editar`{.action}.

![](images/vsan_16.png){.thumbnail}

Desmarque la casilla `Turn on vSAN`{.action}.

![](images/vsan_17.png){.thumbnail}

Por último, confirme la solicitud.

![](images/vsan_18.png){.thumbnail}

> [!primary]
>
> Si la alta disponibilidad no se ha desactivado correctamente, aparecerá un mensaje de error.
>
> ![](images/vsan_19_FR.png){.thumbnail}
>

Una vez finalizada la operación, se mostrará un mensaje de confirmación.

![](images/vsan_20.png){.thumbnail}

> [!warning]
>
> En caso de que el cluster siga alojando máquinas virtuales almacenadas en datastores externos, es necesario reactivar las funciones de alta disponibilidad después de esta manipulación.
>

## Más información

Interactúe con nuestra comunidad de usuarios en [https://community.ovh.com/en/](https://community.ovh.com/en/){.external}.
