---
title: 'Evitar el bloqueo de las máquinas virtuales con la opción Veeam Backup Managed'
excerpt: 'Cómo implementar una solución de elusión con el mecanismo VMware DRS'
updated: 2022-02-22
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón "Contribuir" de esta página.
>


## Objetivo

Durante el backup que se realiza al eliminar un snapshot de una máquina virtual en un datastore NFS, es posible que se bloquee la máquina virtual durante unos treinta segundos o que se bloquee el disco.
Esto se debe a que el snapshot de la máquina virtual está instalado en el backup proxy, que funciona en un host diferente. Si el proxy y la máquina virtual están situados en el mismo host, no se producirá ningún fallo de funcionamiento.

**Esta guía explica cómo evitar que se produzca el bloqueo utilizando el mecanismo VMware DRS.**

## Requisitos

- Ser contacto administrador de la infraestructura [Hosted Private Cloud](https://www.ovhcloud.com/es/enterprise/products/hosted-private-cloud/) para recibir las claves de conexión.
- Tener un usuario activo (creado en el [área de cliente de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws)
- Activar la opción [Veeam Backup Managed](https://www.ovhcloud.com/es/enterprise/products/hosted-private-cloud/veeam-backup-managed/){.external}.

## Procedimiento

> [!primary]
>
> Antes de empezar, tenga en cuenta las siguientes consideraciones:
>
> - En los entornos de gran tamaño, la creación de varias reglas puede tardar mucho tiempo.
> - El usuario debe añadir manualmente las nuevas máquinas virtuales a las reglas.
> - Todas las máquinas virtuales de las que se realice el backup pero que no estén incluidas en las reglas pueden seguir quedándose bloqueadas.
>

Para implementar esta solución, abra la pestaña `Configure`{.action} y haga clic en el cluster correspondiente. A continuación, abra la pestaña `VM/Host Rules`{.action}.

![vSphere](images/en01add.png){.thumbnail}

Cree una regla VM/Host que permita conservar las máquinas virtuales juntas y añádales un *backup proxy*. Si tiene un gran número de máquinas virtuales para realizar el backup, puede crear varias reglas y asociarles varios *backups proxy*. El algoritmo de OVH le garantiza que el backup de la máquina virtual será realizado por el *backup proxy* situado en el mismo host ESXi que la máquina virtual.

> [!warning]
>
> Si añade un nuevo *backup proxy*, esta operación tendrá un coste adicional.
>

![proxy](images/en02proxy.png){.thumbnail}

Cree otra regla para separar las máquinas virtuales (**Separate Virtual Machines**), de modo que los *backups proxy* permanezcan en distintos hosts.

![proxy](images/en03proxy2.png){.thumbnail}

Tenga en cuenta que es necesario haber creado una regla antiafinidad para que los *backups proxy* nunca estén en el mismo host y tantas reglas de afinidad como *backups proxy*.

## Más información

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
