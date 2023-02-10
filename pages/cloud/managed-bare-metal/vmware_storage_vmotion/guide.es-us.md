---
title: VMware Storage VMotion
routes:
    canonical: 'https://docs.ovh.com/us/es/private-cloud/vmware_storage_vmotion/'
excerpt: Cómo migrar en caliente una máquina virtual a un host diferente
slug: vmware_storage_vmotion
section: Funcionalidades de VMware vSphere
order: 05
updated: 2020-11-18
---

**Última actualización: 18/11/2020**

## Objetivo

El **Storage vMotion** permite modificar la ubicación del almacenamiento de los archivos de la máquina virtual manteniendo la máquina virtual encendida. Es posible mover la máquina virtual por completo o disco por disco.

**Esta guía explica cómo realizar esta operación.**

## Procedimiento

### Migrar el disco de una máquina virtual

Para migrar los archivos de una máquina virtual hacia otro datastore, solo tendrá que hacer clic derecho en la máquina virtual encendida y seleccionar la opción `Migrate...`{.action}.

![Migrar disco](images/VmotionStorage1.png){.thumbnail}

### Seleccionar el tipo de vMotion

Puede elegir entre diversas opciones de **vMotion**. En nuestro ejemplo, solo queremos migrar la máquina virtual hacia otro banco de datos. Para ello, deberá seleccionar la opción `Change storage only`{.action}.

La opción `Change compute resource only`{.action} permite migrar la máquina virtual hacia otro host.  

Para más información sobre la operación **vMotion**, consulte nuestra [guía](../vmware-vmotion-new/).

![Selección de vMotion](images/VmotionStorage2.png){.thumbnail}

### Seleccionar el datastore

También puede elegir hacia qué almacenamiento desea migrar los datos.

Asimismo, es posible modificar la política de almacenamiento durante esta operación.

De este modo, si dispone de la opción [VM encryption](https://docs.ovh.com/gb/en/private-cloud/vm-encrypt/), podrá aplicar las políticas de almacenamiento creadas.

![Selección del datastore](images/VmotionStorage3.png){.thumbnail}

En caso de que disponga de varios discos virtuales en la misma máquina, podrá migrar un único disco utilizando el botón `Advanced`{.action}.

Aparecerá la siguiente interfaz:

![Datastore vMotion](images/VmotionStorage6.png){.thumbnail}

### Completar la operación vMotion

Haga clic en `Finish`{.action} para lanzar la migración.

![Completar la operación vMotion](images/VmotionStorage4.png){.thumbnail}

### Monitorizar la operación vMotion

Puede consultar el estado de la migración en su lista de tareas recientes. La duración de esta operación dependerá del tamaño de la MV, los accesos IO y el ancho de banda utilizado.

![Monitorizar la operación vMotion](images/VmotionStorage5.png){.thumbnail}

## Más información

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
