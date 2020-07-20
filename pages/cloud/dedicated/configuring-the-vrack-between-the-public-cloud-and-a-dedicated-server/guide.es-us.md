---
title: 'Configurar el vRack entre Public Cloud y un servidor dedicado'
slug: configurar-vrack-entre-public-cloud-servidor-dedicado
excerpt: 'Cómo configurar una red privada entre una instancia de Public Cloud y un servidor dedicado'
section: vRack
---

**Última actualización: 25/10/2018**

## Objetivo

El [vRack](https://www.ovh.es/soluciones/vrack/){.external} es una red privada que permite configurar el direccionamiento entre dos o más [servidores dedicados](https://www.ovh.es/servidores_dedicados/){.external} de OVH. También permite añadir [instancias de Public Cloud](https://www.ovh.es/public-cloud/instancias/){.external} para crear una infraestructura de recursos físicos y virtuales.

**Esta guía explica cómo configurar la red privada entre una instancia de Public Cloud y un servidor dedicado.**


## Requisitos

- Tener activado un servicio [vRack](https://www.ovh.es/soluciones/vrack/){.external}.
- Tener un [servidor dedicado](https://www.ovh.es/servidores_dedicados/){.external} compatible con el vRack.
- Estar conectado al [área de cliente de OVH](https://www.ovh.com/auth/?action=gotomanager){.external}.
- Tener acceso al rango elegido de direcciones IP privadas.


## Procedimiento

### Crear un proyecto de Public Cloud

En la sección `Cloud`{.action} del [área de cliente de OVH](https://www.ovh.com/auth/?action=gotomanager){.external}, haga clic en el botón `Contratar`{.action}, situado en la esquina superior izquierda.

![Crear un proyecto](images/pci-project-01.png){.thumbnail}

Seleccione `Proyecto cloud`{.action}.

![Crear un proyecto](images/pci-project-02.png){.thumbnail}

Asigne un nombre al proyecto, elija la forma de pago y haga clic en `Crear el proyecto`{.action}.

![Crear un proyecto](images/pci-project-03.png){.thumbnail}

Una vez creado el proyecto, haga clic en el botón `Activar las redes privadas`{.action}.

![Activar el vRack](images/pci-vrack-01.png){.thumbnail}

A continuación, marque la opción `Existente`{.action} y seleccione el vRack en la lista desplegable.

![Activar el vRack](images/pci-vrack-02.png){.thumbnail}


### Crear una instancia de Public Cloud

Una vez en la página del proyecto, haga clic en el botón `Acciones`{.action}.

![Crear una instancia](images/pci-01.png){.thumbnail}

En la lista desplegable, seleccione la opción `Añadir un servidor`{.action}.

![Crear una instancia](images/pci-02.png){.thumbnail}

Haga clic en `Opciones avanzadas`{.action}.

![Crear una instancia](images/pci-03.png){.thumbnail}

Por último, haga clic en la lista desplegable del apartado **Asociar a la red privada** y seleccione el vRack. Haga clic en `Continuar`{.action}, situado en la parte superior del cuadro de diálogo, para volver a la pantalla anterior.

![Crear una instancia](images/pci-04.png){.thumbnail}

Por último, seleccione las opciones de instalación y haga clic en el botón `Iniciar ahora`{.action}.

![Crear una instancia](images/pci-05.png){.thumbnail}


### Configurar las interfaces de red

Para configurar las interfaces de red entre la instancia de Public Cloud que acaba de crear y el servidor dedicado, consulte la guía [Configurar varios servidores dedicados en el vRack](https://docs.ovh.com/es/dedicated/configurar-vrack-en-servidor-dedicado/){.external}.


## Más información

Interactúe con nuestra comunidad de usuarios en [ovh.es/community](https://www.ovh.es/community/){.external}.