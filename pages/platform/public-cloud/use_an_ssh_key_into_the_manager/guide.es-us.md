---
title: 'Usar una clave SSH en la interfaz de Public Cloud'
slug: usar-una-clave-ssh-en-la-interfaz-de-public-cloud
excerpt: 'Instrucciones paso a paso sobre cómo usar una clave SSH para simplificar el acceso a los servidores en la nube'
section: 'Base de conocimientos'
---

**Última actualización: 4/12/2019**

## Introducción
SSH es un protocolo que permite acceder a un servidor y comunicarse con él de forma autenticada y cifrada.

Existen dos formas de añadir una clave SSH desde la interfaz de Public Cloud:

- El primer método es el más directo y consiste en añadir la clave en el momento de crear una instancia.
- El segundo método consiste en añadir la clave desde el gestor de claves SSH.


### Requisitos:
- Una [clave SSH](../crear-llave-ssh/){.ref}


## Creación de una instancia
Para crear una instancia en la nube desde la interfaz de cliente de Public Cloud, haga clic en `Crear una instancia`{.action} en el menú «Instancias» situado en la sección `Proceso`{.action} del menú de la izquierda.

![Add a server](images/compute.png){.thumbnail}

A continuación, durante la creación de la instancia, en el paso 3, se le pedirá su clave SSH.

![Add a server](images/selectkey.png){.thumbnail}

Si ya tiene claves, simplemente seleccione la de su preferencia.

Si desea añadir una clave, haga clic en `Añadir una clave`{.action}. Asigne un nombre a su clave en el campo «Nombre de la clave SSH» y péguela en el campo «Clave SSH». Haga clic en `Añadir una clave`{.action} para terminar.

![Add a key](images/addkey.png){.thumbnail}

## En la herramienta de gestión de claves

Una vez seleccionadas las «claves SSH» en el menú de la izquierda de su proyecto, estará disponible la pestaña «Claves SSH».

![Add a key](images/addkeymenu.png){.thumbnail}

Haga clic en `Añadir una clave`{.action} y, luego, en `Añadir esta clave`{.action}, después de haber asignado un nombre a la llave y haberla pegado en el campo.

![Add a key](images/addkeymenu1.png){.thumbnail}

Esta clave estará disponible para usarse en el momento de [crear su próxima instancia en la nube](../crear_una_instancia_desde_el_area_de_cliente_de_ovh){.ref}.

## Más información

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
