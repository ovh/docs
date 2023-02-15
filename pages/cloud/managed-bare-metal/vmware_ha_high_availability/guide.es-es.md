---
title: VMware HA (High Availability)
slug: vmware-ha-high-availability
routes:
    canonical: 'https://docs.ovh.com/es/private-cloud/vmware-ha-high-availability/'
excerpt: Gestionar la política de reinicio con la función HA
section: Funcionalidades de VMware vSphere
order: 02
updated: 2020-11-18
---

**Última actualización: 18/11/2020**

## Objetivo

La función principal de **VMware HA**(Alta disponibilidad) es reiniciar las máquinas virtuales en otro host del cluster en caso de fallo del hardware. Con **HA**también se pueden supervisar las máquinas virtuales y las aplicaciones.

![esquema HA](images/HA3.png){.thumbnail}

**Esta guía explica cómo configurar esta función**

## Requisitos

- Estar conectado a la [interfaz vSphere](../instalar_el_vsphere_client/).
- Tener contratado un [Managed Bare Metal de OVHcloud](https://www.ovhcloud.com/es/managed-bare-metal/){.external}.

## Procedimiento

### Activación

La funcionalidad HA está activa por defecto en el primer cluster que OVHcloud le proporciona cuando contrata el servicio Managed Bare Metal.

Si se crea un cluster nuevo, se puede activar la funcionalidad HA en el proceso de creación del cluster o posteriormente.

Si HA no está activo en su cluster, diríjase a la pestaña `Configure` de su cluster, y a la sección `Disponibilidad de vSphere` en la parte de `Servicios`.

Haga clic en `Editar`{.action} y marque la casilla para activar la funcionalidad HA.

Es importante activar también la supervisión del host. Esta configuración permite el envío de latidos entre los host ESXi para detectar una posible avería.
Será necesario desactivarla para llevar a cabo ciertas tareas como las actualizaciones con el update manager. En ese caso, el host estará aislado.

![activación HA](images/HA.png){.thumbnail}


### Configuración

#### Fallos y respuestas

Esta primera categoría permite definir la política de reinicio de las máquinas virtuales en función de los posibles fallos.

##### Respuesta en caso de fallo del host

Esta categoría va a definir la política de reinicio de las máquinas virtuales en caso de pérdida de un host.

Es posible definir que se reinicien sus máquinas virtuales de forma automática.
También se puede activar el reinicio por defecto en el cluster. Puede afinar esta configuración por máquina virtual en la pestaña `Reemplazo de las MV`.

También puede definir una condición diferente a la que viene por defecto (Recursos asignados), que vSphere HA comprobará antes de proceder con el reinicio.

![Fallo del host](images/HAparam1.PNG){.thumbnail}

##### Respuesta al aislamiento del host.

Esta categoría le permite definir las acciones que deben llevarse a cabo en caso de pérdida de conectividad de red en un host.

Puede elegir entre: 

- No hacer nada.
- Apagar las máquinas virtuales e intentar reiniciarlas en otro host disponible.
- Apagar el host en cuestión e intentar reiniciar las máquinas virtuales en otro host disponible.

![aislamiento del host](images/HAparam2.PNG){.thumbnail}

##### Almacén de datos con PDL

En caso de que falle un almacén de datos con estado PDL (pérdida permanente de dispositivo), se pueden definir las acciones que deben llevarse a cabo:

- No hacer nada.
- No hacer nada pero generar logs de los eventos.
- Apagar las máquinas virtuales e intentar reiniciarlas en los host que siguen teniendo conectividad con el almacén de datos.

![Almacén de datos con PDL](images/HAparam3.PNG){.thumbnail}

##### Almacén de datos con APD

En caso de que falle un almacén de datos con estado APD (all path down), se pueden definir las acciones que deben llevarse a cabo:

- No hacer nada.
- No hacer nada pero generar logs de los eventos.
- Apagar las máquinas virtuales e intentar reiniciarlas.

![Almacén de datos con APD](images/HAparam4.PNG){.thumbnail}

##### Supervisión de las MV

La supervisión de las máquinas virtuales está disponible después de instalar las [VMware tools](../instalar_las_vmware_tools/).
En caso de no haber respuesta a través de las **tools**(latidos), la máquina virtual se reiniciará de forma automática. Se puede realizar una configuración avanzada con respecto a esta funcionalidad (por ejemplo, con intervalos de reinicio).

![Supervisión de las MV](images/HAparam5.PNG){.thumbnail}

#### Control de admisión

vSphere HA utiliza el control de admisión para garantizar que se reserven recursos suficientes para la recuperación de máquinas virtuales cuando se produce un fallo en el host.

El control de admisión impone restricciones sobre el uso de recursos. No se permite ninguna acción que pueda infringir estas restricciones. Algunos ejemplos de acciones que pueden no estar permitidas son:

- Encendido de una máquina virtual
- Migración de una máquina virtual
- Aumento de la reserva de CPU o de memoria de una máquina virtual

El control de admisión de vSphere HA se basa en la cantidad de errores de host que el clúster puede tolerar sin perder la capacidad de conmutación por error. La capacidad de conmutación por error del host puede definirse de tres formas:

- [Porcentaje de recursos del cluster](https://docs.vmware.com/es/VMware-vSphere/6.5/com.vmware.vsphere.avail.doc/GUID-FAFEFEFF-56F7-4CDF-A682-FC3C62A29A95.html){.external-link}

- [Directiva de ranuras](https://docs.vmware.com/es/VMware-vSphere/6.5/com.vmware.vsphere.avail.doc/GUID-85D9737E-769C-40B6-AB73-F58DA1A451F0.html){.external-link}

- [Hosts de conmutación por error dedicados](https://docs.vmware.com/es/VMware-vSphere/6.5/com.vmware.vsphere.avail.doc/GUID-C4F5F9EE-4235-4151-BEBE-FCB2A752407B.html){.external-link}

#### Almacén de datos de latidos

Cuando el host principal de un cluster HA no puede comunicarse con un host subordinado en la red de gestión, el host principal utiliza el latido de almacén de datos para determinar si el host subordinado tiene fallos, si se encuentra en una partición de red o si está aislado de la red.

#### Opciones avanzadas

Es posible realizar varios ajustes de configuración avanzada en el cluster.

Para ello, debe dirigirse a [esta página](https://docs.vmware.com/es/VMware-vSphere/6.5/com.vmware.vsphere.avail.doc/GUID-E0161CB5-BD3F-425F-A7E0-BF83B005FECA.html){.external-link}.

### Regla HA

En la sección `configuración`, en la pestaña `Reglas MV/Host`, se puede crear una regla del tipo «Máquinas virtuales a máquinas virtuales».

Esta añadirá una condición de reinicio para garantizar que las máquinas virtuales de un primer grupo se enciendan antes de encender las de un segundo grupo.

Esta regla puede añadirse como complemento de las prioridades de reinicio configurables en la pestaña `Sustituciones de MV`.

## Más información

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>. 
