---
title: 'Gestión de dominios vSAN'
excerpt: 'Cómo gestionar los dominios de fallo vSAN'
updated: 2021-12-23
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
> 

**Última actualización: 23/12/2021**

## Objetivo

Esta guía explica el funcionamiento y la aplicación de los dominios de fallos vSAN.

## Requisitos

- Ser contacto administrador de la infraestructura [Hosted Private Cloud](https://www.ovhcloud.com/es-es/enterprise/products/hosted-private-cloud/) para recibir las claves de conexión.
- Tener un usuario activo con permisos específicos para NSX (creado en el [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es).
- Haber desplegado un [datastore vSan](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_vsan)

## Procedimiento

### Funcionamiento

Un dominio de fallos (fault domain) hace referencia a un conjunto de servidores, periféricos de almacenamiento o componentes de red agrupados en un emplazamiento físico del datacenter, que pueden verse afectados colectivamente por una avería.

En vSAN, es posible agrupar los servidores dentro de los dominios de fallos vSAN teniendo en cuenta su ubicación física.
Por lo tanto, conviene tener varios dominios de fallos para disfrutar de la resiliencia de vSAN, replicando así los objetos de las MV a través de estos grupos de servidores. Para más información, consulte [esta guía](https://core.vmware.com/resource/vmware-vsan-design-guide#sec8-sub3).

Los servidores de OVHcloud están repartidos por distintos racks. Así, en función de estos racks, es posible crear dominios de fallo vSAN.

Por ejemplo, la estrategia por defecto vSAN (nivel de tolerancia FTT=1 con RAID1 (Mirorring)) necesita al menos 3 dominios de fallos (por 2 réplicas + 1 objeto witness).

### Aplicación

Es recomendable aplicar este procedimiento cuando varios servidores se encuentren en el mismo rack. Asimismo, deberá elegir el mismo número de servidores por cada dominio de fallo vSAN.
De este modo, los datos estarán mejor distribuidos y disfrutarán de una mejor protección en caso de fallo de un dominio de avería.

Cada servidor de OVHcloud dispone de la información del rack en el que está alojado.

Acceda al menú `Hosts and Clusters`{.action}, haga clic en el servidor correspondiente y abra la pestaña `Summary`{.action}. La información se encuentra en "Custom Attributes": atributo **Rack**.

![attribut Rack](images/01.png){.thumbnail}

En el menú `Hosts and Clusters`{.action}, seleccione el cluster correspondiente y haga clic en la pestaña `Configure`{.action} y seleccione el menú `vSAN`{.action}. A continuación, seleccione `Fault Domains`{.action}.

Arrastre el servidor a la casilla **+** de los dominios falsos.

![fault domain](images/02.png){.thumbnail}

Asigne un nombre al dominio (puede utilizar, por ejemplo, el nombre del rack) en el campo "Fault domain name" y confirme haciendo clic en `CREATE`{.action}.

<img src="https://raw.githubusercontent.com/ovh/docs/develop/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_vsan_fault_domain/images/03.png" alt="nombre fault domain" class="thumbnail" width="70%" height="70%">

Podrá consultar el progreso de la tarea de creación del dominio en la ventana `Recent Tasks`{.action}.

![fault domain task](images/04.png){.thumbnail}

Repita la operación en tantos dominios de fallos como haya racks diferentes.

![adición múltiple de dominios](images/05.png){.thumbnail}

Si lo necesita, añada un servidor a un dominio existente moviéndolo sobre él y confirme haciendo clic en `MOVE`{.action}.

<img src="https://raw.githubusercontent.com/ovh/docs/develop/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_vsan_fault_domain/images/06.png" alt="adición del servidor" class="thumbnail" width="70%" height="70%">

La información sobre el espacio en disco utilizado, disponible y total se muestra sobrevolando el dominio de avería.

<img src="https://raw.githubusercontent.com/ovh/docs/develop/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_vsan_fault_domain/images/07.png" alt="fault domain information" class="thumbnail" width="60%" height="60%">

El cluster vSAN ya dispone de resiliencia de datos a través de los dominios de fallo.

## Más información

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
