---
title: 'Importar una IP Failover'
excerpt: 'Importar una IP Failover'
slug: importar_una_ip_failover
legacy_guide_number: g1883
section: 'Red e IP'
---

**Última actualización: 6/12/2019**

## Objetivo

Si necesita configurar una dirección IP de conmutación en sus instancias porque:

- Tiene varios sitios web en su instancia 
- Aloja varios proyectos internacionales
- Quiere migrar de un servidor dedicado a una instancia de Public Cloud

... puede importar una dirección IP de conmutación que esté asociada a otro servicio de OVHcloud.

**Esta guía explica cómo importar esta IP de conmutación en su proyecto de Public Cloud de OVHcloud.**

## Requisitos

- Tener un [proyecto de Public Cloud](https://www.ovhcloud.com/es-es/public-cloud/) en su cuenta de OVHcloud
- Tener acceso al [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es){.external}
- Tener una [dirección IP de conmutación](https://www.ovhcloud.com/es-es/bare-metal/ip/){.external}

## Procedimiento

Primero, inicie sesión en el [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es){.external} y seleccione su proyecto en la sección `Public Cloud`{.action}. 
A continuación, seleccione `Failover IP`{.action} en la sección "Network".

![IP Section](images/import.png){.thumbnail}

Haga clic en `Acciones`{.action} y seleccione `Importar una IP`{.action} para mostrar todas las direcciones IP que se pueden importar en su proyecto de Public Cloud.

![IP Section](images/import1.png){.thumbnail}

Haga clic en los tres puntos a la derecha de la IP que quiere importar y haga clic en `Importar esta IP Failover`{.action}.

![Import Failover IP](images/import2.png){.thumbnail}

Haga clic en `Importar`{.action}:

![Import confirm](images/importconfirm.png){.thumbnail}

A continuación, se volverá a cargar la página y se mostrará la siguiente información para confirmar que la IP se ha migrado correctamente.

Una vez importada la IP de conmutación, haga clic en los tres puntos a la derecha y, después, en `Modificar la instancia asociada`{.action}.

![Import Failover IP](images/modifyinstance.png){.thumbnail}

Se abrirá una ventana emergente donde podrá elegir la instancia a la que desea migrar su IP:

![Import Failover IP](images/modifyinstance1.png){.thumbnail}

Haga clic en `Asociar`{.action}. A continuación, se volverá a cargar la página con una confirmación de que la IP se ha asociado a la instancia:

![Import Failover IP](images/modifycompleted.png){.thumbnail}

Ahora, su IP de conmutación está asociada a su instancia.

El siguiente paso será configurar la IP en su sistema operativo. Puede consultar nuestra guía a continuación: [Configurar una IP failover](https://docs.ovh.com/es/public-cloud/configurer-une-ip-failover/){.external}.

## Más información

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.