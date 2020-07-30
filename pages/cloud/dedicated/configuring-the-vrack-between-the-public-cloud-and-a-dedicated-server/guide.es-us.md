---
title: 'Configurar el vRack entre Public Cloud y un servidor dedicado'
slug: configurar-vrack-entre-public-cloud-servidor-dedicado
excerpt: 'Cómo configurar una red privada entre una instancia de Public Cloud y un servidor dedicado'
section: vRack
---

**Última actualización: 25/10/2018**

## Objetivo

El [vRack](https://www.ovh.com/world/es/soluciones/vrack/){.external} es una red privada que permite configurar el direccionamiento entre dos o más [servidores dedicados](https://www.ovh.com/world/es/servidores_dedicados/){.external} de OVHcloud. También permite añadir [instancias de Public Cloud](https://www.ovh.com/world/es/public-cloud/instancias/){.external} para crear una infraestructura de recursos físicos y virtuales.

**Esta guía explica cómo configurar la red privada entre una instancia de Public Cloud y un servidor dedicado.**


## Requisitos

- Tener activado un servicio [vRack](https://www.ovh.com/world/es//soluciones/vrack/){.external}.
- Tener un [servidor dedicado](https://www.ovh.com/world/es/servidores_dedicados/){.external} compatible con el vRack.
- Estar conectado al [área de cliente de OVHcloud](https://ca1.ovh.com/auth/?action=gotomanager){.external}.
- Tener acceso al rango elegido de direcciones IP privadas.


## Procedimiento

### Crear un proyecto de Public Cloud

Inicie sesión en su [panel de control de OVHcloud](https//ca.ovh.com/auth/?action=gotomanager){.external}.

Haga click en `Servidores`{.action} y a continuación en `contratar`{.action}.

![Crear un proyecto](images/pci-project-01_2020.png){.thumbnail}

Debajo del menú **contratar**, haga click en `Proyecto Cloud`{.action} .

![Crear un proyecto](images/pci-project-02_2020.png){.thumbnail}

Establezca el nombre de su proyecto, lea y acepte lo contratos, y a haga click en `Continuar`{.action} .

![Crear un proyecto](images/pci-project-03a_2020.png){.thumbnail}

Seleccione el método de pago y haga click en `Crear mi proyecto`{.action}.

![Crear un proyecto](images/pci-project-03b_2020.png){.thumbnail}

Una vez que su proyecto este configurado, usted necesitara añadir el vrack. Para ello, haga click en `Servidores`{.action} y después en `vRack`{.action}

![Activar el vRack](images/pci-vrack-00_2020.png){.thumbnail}

Seleccione su vRack existente, seleccione su Proyecto Cloud, y haga click en `Añadir`{.action}.

![Activar el vRack](images/pci-vrack-00a_2020.png){.thumbnail}

A continuación, debe habilitar la redes privadas. Haga click en el botón `Permitir red privada`{.action} dentro de la pagina del proyecto.

![Activar el vRack](images/pci-vrack-01_2020.png){.thumbnail}

Aquí puede crear la configuración de su red y nombrarla. Una vez que este configurada según sus preferencia haga click en `Crear`{.action}.

![Enable vRack](images/pci-vrack-02_2020.png){.thumbnail}


### Crear una instancia de Public Cloud

En la pagina de su proyecto, haga click en el botón `crear una instancia`{.action}.

![Crear una instancia](images/pci-01_2020.png){.thumbnail}

Seleccione el modelo, la región y la imagen. Luego elija su Red privada.

![Crear una instancia](images/pci-02_2020.png){.thumbnail}


Finalmente, seleccione el periodo de facturación y haga click en Crear una instancia {.action}. Para obtener información detallada sobre la diversas opciones, por favor consulte la siguiente guía: [Crear una instancia desde el área de cliente de OVHcloud](../public-cloud/crear_una_instancia_desde_el_area_de_cliente_de_ovh/){.external)

### Configurar las interfaces de red

Para configurar las interfaces de red entre la instancia de Public Cloud que acaba de crear y el servidor dedicado, consulte la guía [Configurar varios servidores dedicados en el vRack](../configurar-vrack-en-servidor-dedicado/){.external}.


## Más información

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>
