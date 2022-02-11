---
title: 'Usar una clave SSH en la interfaz de Public Cloud'
slug: usar-una-clave-ssh-en-la-interfaz-de-public-cloud
excerpt: 'Instrucciones paso a paso sobre cómo usar una clave SSH para simplificar el acceso a los servidores en la nube'
section: 'Gestión de las instancias desde el área de cliente'
order: 04
---

**Última actualización: 10/02/2022**

## Objetivo

SSH es un protocolo que permite acceder a un servidor y comunicarse con él de forma autenticada y cifrada.

**Descubra cómo utilizar las claves SSH con el área de cliente de OVHcloud.**

## Requisitos

- Haber creado un [proyecto de Public Cloud](https://docs.ovh.com/us/es/public-cloud/crear_tu_primer_proyecto_de_public_cloud/) desde el área de cliente.
- Estar conectado al [área de cliente de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws).
- Tener una [clave SSH](../public-cloud-primeros-pasos/).


## Procedimiento

> [!primary]
>
Si quiere registrar una clave SSH en el área de cliente de OVHcloud, le recomendamos que utilice el cifrado RSA o ECDSA. ED25519 no está soportado actualmente.
>

Existen dos formas de añadir una clave SSH desde la interfaz de Public Cloud:

- El primer método es el más directo y consiste en añadir la clave en el momento de crear una instancia.
- El segundo método consiste en añadir la clave desde el gestor de claves SSH.


## Creación de una instancia

Para crear una instancia en la nube desde la interfaz de cliente de Public Cloud, haga clic en `Crear una instancia`{.action} en el menú `Instances` situado en la sección **Compute**{.action} del menú de la izquierda.

![Add a server](images/compute.png){.thumbnail}

A continuación, durante la creación de la instancia, en el paso 3, se le pedirá su clave SSH.

![Add a server](images/selectkey.png){.thumbnail}

Si ya tiene claves, simplemente seleccione la de su preferencia.

Si desea añadir una clave, haga clic en `Añadir una clave`{.action}. Asigne un nombre a su clave en el campo «Nombre de la clave SSH» y péguela en el campo «Clave SSH». Haga clic en `Añadir una clave`{.action} para terminar.

![Add a key](images/addkey.png){.thumbnail}

## En la herramienta de gestión de claves

Una vez seleccionadas las «claves SSH» en el menú de la izquierda de su proyecto, estará disponible la pestaña «Claves SSH».

![Add a key](images/addkeymenu.png){.thumbnail}

Haga clic en `Añadir una clave`{.action} y, luego, en `Añadir esta clave`{.action}, después de haber asignado un nombre a la clave y haberla pegado en el campo.

![Add a key](images/addkeymenu1.png){.thumbnail}

Esta clave estará disponible para usarse en el momento de [crear su próxima instancia en la nube](../empezar-con-una-instancia-public-cloud){.ref}.

## Más información

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
