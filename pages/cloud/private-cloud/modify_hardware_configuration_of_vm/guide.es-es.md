---
title: Cambiar los recursos de una máquina virtual
excerpt: Cómo escalar su máquina virtual
slug: cambiar_la_configuracion_del_hardware_de_una_maquina_virtual
section: Gestión de las máquinas virtuales
order: 03
updated: 2020-06-25
---

**Última actualización: 25/6/2020**

## Objetivo

Una vez creada una máquina virtual, sus recursos no son fijos, sino que se pueden modificar para agilizar su infraestructura, con algunas restricciones.

**Esta guía explica cómo escalar su máquina virtual.**

## Requisitos

- Haber creado una máquina virtual.
- Estar conectado a su cliente vSphere HTML.

## Procedimiento

Todos los cambios que se describen a continuación se deben realizar desde su Private Cloud en vSphere haciendo clic con el botón derecho del ratón en una máquina virtual y, luego, en `«Modificar los parámetros»`{.action}.

![Édition des ressources](images/hardware01.png){.thumbnail}

En este menú, puede aumentar los recursos de su máquina virtual. 

![Édition des ressources](images/hardware02.png){.thumbnail}

En la parte superior de la imagen, observará que tiene la posibilidad de añadir periféricos. Abordaremos esta opción más adelante en esta guía.


### La unidad central de procesamiento (CPU)

El número de unidades centrales de procesamiento (CPU) estará limitado a los espacios disponibles en el servidor.

Si su máquina virtual migra hacia un servidor con menos unidades centrales de procesamiento que las asignadas a su máquina, se activará el estado `«Unidad central de procesamiento (CPU) preparada»`, lo que disminuirá el rendimiento.

![Ajout de CPU](images/hardware03.png){.thumbnail}

También puede reservar una cierta frecuencia (mínima y máxima) y especificar el número de núcleos por ranura.

Si marca la casilla `«Conexión de la unidad central de procesamiento (CPU) en caliente»`{.action}, podrá cambiar estos valores cuando se inicie la máquina virtual.

Según el sistema operativo utilizado, la adición en caliente podría no ser compatible y provocar fallos en el servidor.

Puede hacer la reserva, es decir, asignar un mínimo de *MHz* (megahercios) a su máquina virtual.

El umbral, ilimitado por defecto, permite restringir la unidad de procesamiento externo de su máquina virtual a un valor en *MHz*. Puede, por ejemplo, limitar una máquina virtual de desarrollo.


### La memoria (RAM)

Al igual que con la unidad central de procesamiento (CPU), la memoria (RAM) está limitada a los recursos del servidor.

También tiene la posibilidad de hacer una reserva, de manera que su máquina virtual siempre tenga un mínimo de RAM reservada.

![Ajout de mémoire](images/hardware04.png){.thumbnail}


### El disco duro

En cuanto al disco duro, puede aumentar su tamaño según el espacio restante en el datastore utilizado por la máquina virtual.

![Ajout de stockage](images/hardware05.png){.thumbnail}

Recomendamos utilizar controladores de discos SCSI en lugar de IDE, ya que estos últimos no permiten, por ejemplo, copias de seguridad mediante el <i>software</i> Veeam.

También puede seleccionar el modo del disco:

- `Dependiente`: incluye el disco durante una instantánea.

- `Independiente-persistente`: permite conservar los datos al reiniciar una máquina, pero no se tiene en cuenta durante una instantánea.

- `Independiente-no persistente`: tiene la particularidad de no conservar los datos. Si se reinicia la máquina, se eliminan todos los datos.


### La tarjeta de red

Puede cambiar la tarjeta de red de su máquina virtual, la conexión de la tarjeta al iniciar la máquina virtual y el tipo de tarjeta, así como verificar el id. del puerto y su dirección MAC.

![Ajout du réseau](images/hardware06.png){.thumbnail}

Esta interfaz es útil en caso de que falle la red. Puede comprobar que el *id. del puerto* se corresponda con el especificado en las pestañas `«Redes»`{.action} y `«Puertos»`{.action} de la tarjeta en cuestión.


### El lector de CD/DVD

El lector de CD/DVD permite, por ejemplo, montar una imagen ISO en su máquina virtual.

![Ajout d'un lecteur CD / DVD](images/hardware07.png){.thumbnail}

Recomendamos eliminar el lector de CD/DVD después de usarlo, ya que podría impedir el desplazamiento de la máquina virtual.


### Adición de periféricos

En la parte superior derecha de esta ventana, se pueden añadir periféricos adicionales.

Puede añadir discos de otro espacio de almacenamiento «Datastore» o tarjetas de red si necesita usar varias redes privadas.

![Ajout de périphériques](images/hardware08.png){.thumbnail}

## Más información

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
