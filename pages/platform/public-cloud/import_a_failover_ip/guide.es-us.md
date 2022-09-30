---
title: 'Importar una Additional IP'
excerpt: 'Importar una Additional IP'
slug: importar_una_ip_failover
section: 'Red e IP'
---

**Última actualización: 10/03/2022**

> [!primary]
>
> Desde el 6 de octubre de 2022, nuestra solución "Failover IP" se denomina desde ahora [Additional IP](https://www.ovhcloud.com/es/network/additional-ip/). Esto no afectará a sus funcionalidades ni al funcionamiento de sus servicios.
>

## Objetivo

Si necesita configurar una dirección IP de conmutación en sus instancias porque:

- Tiene varios sitios web en su instancia 
- Aloja varios proyectos internacionales
- Quiere migrar de un servidor dedicado a una instancia de Public Cloud

Puede importar una dirección IP de conmutación que esté asociada a otro servicio de OVHcloud.

**Esta guía explica cómo importar esta IP de conmutación en su proyecto de Public Cloud de OVHcloud.**

## Requisitos

- Tener un [proyecto de Public Cloud](https://www.ovhcloud.com/es/public-cloud/) en su cuenta de OVHcloud
- Tener acceso al [área de cliente de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws){.external}
- Tener una [dirección IP de conmutación](https://www.ovhcloud.com/es/bare-metal/ip/)

## Procedimiento

Primero, inicie sesión en el [área de cliente de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws){.external} y seleccione su proyecto en la sección `Public Cloud`{.action}. A continuación, seleccione `Additional IP`{.action} en la sección "Network".

Haga clic en `Acciones`{.action} y seleccione `Importar una IP`{.action} para mostrar todas las direcciones IP que se pueden importar en su proyecto de Public Cloud:

![IP Section](images/import1.png){.thumbnail}

Si todavía no tiene ninguna Additional IP en su proyecto de Public Cloud, la opción de importar una IP se mostrará en la página de inicio.

Haga clic en los tres puntos a la derecha de la IP que quiere importar y haga clic en `Importar esta Additional IP`{.action}.

![Import Additional IP](images/import2.png){.thumbnail}

Haga clic en `Importar`{.action}:

![Import confirm](images/importconfirm.png){.thumbnail}

A continuación, se volverá a cargar la página y se mostrará la siguiente información para confirmar que la IP se ha migrado correctamente.

Una vez importada la IP de conmutación, haga clic en los tres puntos a la derecha y, después, en `Modificar la instancia asociada`{.action}.

![Import Additional IP](images/modifyinstance.png){.thumbnail}

Se abrirá una ventana emergente donde podrá elegir la instancia a la que desea migrar su IP:

![Import Additional IP](images/modifyinstance1.png){.thumbnail}

Haga clic en `Asociar`{.action}. A continuación, se volverá a cargar la página con una confirmación de que la IP se ha asociado a la instancia:

![Import Additional IP](images/modifycompleted.png){.thumbnail}

Ahora, su IP de conmutación está asociada a su instancia.

El siguiente paso será configurar la IP en su sistema operativo. Puede consultar nuestra guía a continuación: [Configurar una Additional IP](https://docs.ovh.com/us/es/public-cloud/configurer-une-ip-failover/){.external}.

## Más información

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
