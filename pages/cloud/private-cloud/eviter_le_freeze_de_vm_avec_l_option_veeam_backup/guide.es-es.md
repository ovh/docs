---
title: 'Evitar el bloqueo de las máquinas virtuales con la opción Veeam Backup Managed'
slug: evitar-bloqueo-de-maquinas-virtuales-con-veeam-backup
excerpt: 'Cómo implementar una solución que evite el bloqueo utilizando las reglas de afinidad y antiafinidad de VMware'
section: 'Gestión de las máquinas virtuales'
---

**Última actualización: 14/12/2018**

## Objetivo

Durante el backup que se realiza al eliminar un snapshot de una máquina virtual en un datastore NFS, es posible que se bloquee la máquina virtual durante unos treinta segundos, o que se bloquee el disco.

Esto se debe a que el snapshot de la máquina virtual está instalado en el <i>backup proxy</i>, que funciona en un host diferente. Este fallo de funcionamiento no se producirá si el proxy y la máquina virtual se encuentran en el mismo host.

**Esta guía explica cómo evitar que se produzca el bloqueo utilizando las reglas de afinidad y antiafinidad de VMware.**

## Requisitos

- Tener contratado un servicio [Private Cloud](https://www.ovh.es/private-cloud/){.external}.
- Tener activada la opción [Veeam Backup Managed](https://www.ovh.es/private-cloud/opciones/veeam.xml){.external}.
- Estar conectado al cliente vSphere.

## Procedimiento

### Procedimiento

> [!primary]
>
> Antes de empezar, tenga en cuenta las siguientes consideraciones:
>
> - En los entornos de gran tamaño, la creación de varias reglas puede tardar mucho tiempo.
> - El usuario debe añadir manualmente las nuevas máquinas virtuales a las reglas.
> - Todas las máquinas virtuales de las que se realice el backup pero que no estén incluidas en las reglas pueden seguir quedándose bloqueadas.
>


Para implementar esta solución, haga clic derecho en el cluster correspondiente y seleccione `Settings`{.action} para modificar los ajustes.

Cree una regla VM/Host que permita conservar las máquinas virtuales juntas y añádales un *backup proxy*. Si tiene un gran número de máquinas virtuales para realizar el backup, puede crear varias reglas y asociarles varios *backups proxy*. El algoritmo de OVH le garantiza que el backup de la máquina virtual será realizado por el *backup proxy* situado en el mismo host ESXi que la máquina virtual.

> [!warning]
>
> Si añade un nuevo *backup proxy*, esta operación tendrá un coste adicional.
>

A continuación explicamos en detalle cómo crear las reglas.

En la sección **Configuration**, haga clic en `VM/Host Rules`{.action}. Haga clic en `Add`{.action} para crear una nueva regla.

![Crear regla VM/Host](images/image0_7.png){.thumbnail}

Cree otra regla para separar las máquinas virtuales (**Separate Virtual Machines**), de modo que los *backups proxy* permanezcan en distintos hosts.

![Crear regla VM/Host](images/image0_28.png){.thumbnail}

A continuación, haga clic en `VM/Host Groups`{.action}, cree un grupo de máquinas virtuales (**VM Group**) y añada el host al grupo.

![Crear grupo VM/Host](images/image1_9.png){.thumbnail}

Tenga en cuenta que es necesario haber creado una regla antiafinidad para que los *backups proxy* nunca estén en el mismo host y tantas reglas de afinidad como *backups proxy*.

## Más información

Interactúe con nuestra comunidad de usuarios en [ovh.es/community](https://www.ovh.es/community/){.external}.