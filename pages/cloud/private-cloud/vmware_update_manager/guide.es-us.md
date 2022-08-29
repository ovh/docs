---
title: Utilizar VMware Update Manager
excerpt: Utilice la herramienta de VMware para mantener actualizados sus hosts.
slug: utilizar_vmware_update_manager
section: Funcionalidades de VMware vSphere
order: 11
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
>

**Última actualización: 09/12/2021**

## Objetivo

El gestor de actualizaciones de VMware permite mantener los hosts actualizados instalando los *Bug Fixes* y Parches de Seguridad, sin intervención de nuestro equipo.     

> [!primary]
> Las actualizaciones de vCenter o las principales actualizaciones siempre requieren nuestra participación.

**Esta guía explica cómo funciona esta herramienta.**

## Requisitos

- Ser contacto administrador del [Hosted Private Cloud Infrastructure](https://www.ovhcloud.com/es/enterprise/products/hosted-private-cloud/) para recibir las claves de conexión.
- Tener un usuario activo con los permisos específicos de NSX (creado en el [área de cliente de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws)).

## Procedimiento

### Maintenance Mode

Antes de trabajar en un host, debe ponerlo en modo de mantenimiento.    
De hecho, patcher conlleva la mayor parte del tiempo un reinicio del host y esto limitará el impacto sobre sus MV de producción. 

En el menú de la interfaz vSphere, acceda al panel de administración de `Hosts y Clusters`{.action}.

![Mantenimiento](images/en01menu.png){.thumbnail}

Haga clic derecho en el servidor situado a la izquierda de la pantalla. En la sección `Maintenance Mode`{.action}, seleccione `Enter Maintenance Mode`{.action}.

![Mantenimiento](images/en02maintenance.png){.thumbnail}

Asegúrese de que la casilla esté marcada en el siguiente paso y haga clic en `OK`{.action}.

![Mantenimiento](images/en03enter.png){.thumbnail}

Suponiendo que el DRS esté activo, sus MV de producción se migrarán a otro host.

> [!primary]
> Si ha personalizado su entorno, podría necesitar realizar manualmente la migración de las MV.
>

Se mostrará la siguiente advertencia:     

![Mantenimiento](images/en04warning.png){.thumbnail}

El host está en modo de mantenimiento.

![Mantenimiento](images/en05maintenanced.png){.thumbnail}

### Update Manager

Seleccione su host y acceda a la sección `Update`{.action}.
Verá los diferentes estados básicos y la conformidad del host.     

Deberá utilizar una "línea de base" para comprobar que se cumple dicha regla.

![Update](images/en06summary.png){.thumbnail}

En la sección `Attached Baselines`, haga clic en `Attach`{.action} y luego `Attach Baseline or Baseline Group`{.action}.

![Update](images/en07attach.png){.thumbnail}

Existen líneas de base predefinidas para los diferentes niveles de parches recomendados.

> [!primary]
> En nuestro ejemplo, utilizamos los parches críticos, pero puede utilizar las dos líneas existentes o crear otras que desee para cubrir las diferentes necesidades de su entorno.
>

Seleccione la línea de base necesaria y haga clic en `Attach`{.action}.

![Update](images/en08define.png){.thumbnail}

El resumen de conformidad se actualizará a continuación.     

![Update](images/en09noncompliant.png){.thumbnail}

Vuelva a la sección `Attached Baselines`, seleccione todas las líneas de base y haga clic en `Stage`{.action}.

![Update](images/en10bisstage.png){.thumbnail}

Seleccione el host y vuelva a hacer clic en `Stage`{.action}.

![Update](images/en10terstagea.png){.thumbnail}

La transferencia se inicia y durará en función del número y el tamaño de los parches.

![Update](images/en10terstage.png){.thumbnail}

En la sección `Attached Baselines`, seleccione todas las líneas de base asignadas y haga clic en `Remediate`{.action}.

![Update](images/en10remediate.png){.thumbnail}

Seleccione el host y haga clic de nuevo en `Remediate`{.action}.

![Update](images/en11remediate.png){.thumbnail}

El proceso de actualización comenzará y durará en función del número y el tamaño de los parches aplicados.<br>
Si es necesario, el host se reiniciará automáticamente.

![Update](images/en12remediating.png){.thumbnail}

Al final del proceso, se reiniciará la verificación de la conformidad (o puede obligarse haciendo clic en el enlace) y aparecerá una marca de verificación verde.

![Update](images/en13compliant.png){.thumbnail}

Su host está actualizado.    

No olvide sacarlo del modo de mantenimiento y volverá a estar en producción.

## Más información

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
