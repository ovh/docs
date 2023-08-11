---
title: Clonar una MV
routes:
    canonical: '/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/clone_a_vm'
excerpt: Cómo clonar una MV existente en vSphere
updated: 2020-11-18
---

**Última actualización: 18/11/2020**

## Objetivo

Clonar una MV permite crear una copia de la máquina virtual original.

**Esta guía explica cómo realizar la operación.**

## Requisitos

- Tener contratado un servicio [Managed Bare Metal](https://www.ovhcloud.com/es-es/managed-bare-metal/){.external}.
- Disponer de al menos una MV en su cluster.
- Estar conectado a la [interfaz vSphere](/pages/bare_metal_cloud/managed_bare_metal/vsphere-interface).

## Procedimiento

### Clonar la MV

Desde su [interfaz vSphere](/pages/bare_metal_cloud/managed_bare_metal/vsphere-interface), acceda a la sección `Hosts and Clusters`.

Haga clic derecho en la MV que desea clonar y, a continuación, seleccione  `Clone`{.action} > `Clone to Virtual Machine...`{.action}. 

![Clone to Virtual Machine](images/clonevm01.png){.thumbnail}

Asígnele un nombre a esta nueva MV e indique su localización en el árbol de directorios.

![Asignarle un nombre a la MV](images/clonevm02.png){.thumbnail}

### Seleccionar los recursos

Indique el cluster, el host, la vApp o el pool de recursos de esta MV.

![Recursos de la MV](images/clonevm03.png){.thumbnail}

### Seleccionar el almacenamiento

Indique la localización del almacenamiento (espacio en disco) de esta MV. 

El formato de disco virtual es de tipo «Thin Provision»: se creará un disco virtual, pero solo utilizará el espacio en disco usado realmente en el almacenamiento, independientemente del espacio en disco que se haya utilizado anteriormente en la MV de origen.

Para más información, consulte esta [guía](/pages/bare_metal_cloud/managed_bare_metal/choosing-disk-type).

A través de `VM Storage Policy`, podrá elegir la política de almacenamiento predefinida si dispone de datastores, o la opción [VM Encryption](/pages/bare_metal_cloud/managed_bare_metal/vm_encrypt).

![Almacenamiento MV](images/clonevm04.png){.thumbnail}

### Configurar el sistema

Este paso permite definir la configuración de red que quiere aplicar en su MV. Podrá elegir entre dos opciones:

- Si no marca ninguna casilla, no se producirá ningún cambio en la configuración de red de la nueva MV con respecto a la de origen.

- La opción `Customize this virtual marchine”s hardware`{.action} le permitirá definir la nueva configuración que desea implementar en la nueva MV.

![Red MV](images/clonevm05.png){.thumbnail}

> [!warning]
>
> Si la máquina virtual no está personalizada, deberá modificar la configuración de la MV clonada antes de iniciarla para evitar posibles conflictos de IP/MAC. 
>
>En ese caso, solo tendrá que deshabilitar la tarjeta de red en los parámetros de la máquina virtual clonada, justo antes de encenderla.
>
>![Desconectar la MV](images/clonevm06.png){.thumbnail}
>

## Más información

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
