---
title: "Desplegar cPanel en un VPS"
excerpt: "Descubra cómo instanciar un VPS con la aplicación cPanel preinstalada"
updated: 2024-01-12
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
> 

## Objetivo

cPanel es un panel de control que facilita la gestión de los alojamientos web. Hace que las tareas complejas sean más accesibles, incluso para los nuevos usuarios. Ofrece una amplia gama de funcionalidades como, por ejemplo, para la gestión: 

- mensajes de correo
- dominios
- bases de datos
- de la seguridad
- etc.

Gracias a una interfaz gráfica que permite automatizar los parámetros, el alojamiento de sitios web se simplifica.

**Descubra cómo desplegar cPanel con las aplicaciones preinstaladas en un VPS.**

**Esta guía explica cómo desplegar cPanel con aplicaciones preinstaladas en un VPS.**

## Requisitos

- Tener contratado un servicio [VPS reciente](https://www.ovhcloud.com/es-es/vps/){.external} (ofertas Value, **Essential**, **Comfort** o **Elite**).
- Haber iniciado sesión en el [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es).

## Procedimiento

Para instalar su servidor cPanel, contrate un VPS con la distribución cPanel.

![cPanel](images/cpanel_order.png){.thumbnail}

Cuando su VPS esté listo, recibirá un correo electrónico con los datos de acceso para conectarse a su servidor cPanel:

```
 |    Sus aplicaciones:
 |    Application: cpanel
 |    Puede conectarse a cpanel desde https://<ip>:2087/<session_parameters>
```

Si ya tiene un VPS y desea instalar cPanel, puede reinstalar el VPS desde su [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es) a través de un [OS compatible con cPanel](https://www.ovhcloud.com/es-es/vps/os/).

> [!warning]
>
> Si reinstala un VPS, todos los datos almacenados en el VPS se perderán.
> 

### Primera conexión

Una vez que haya recibido el mensaje de correo electrónico con el enlace único, haga clic en este enlace para realizar la configuración inicial. Si el enlace ya ha expirado, conéctese al servidor por SSH y ejecute el comando «sudo whmlogin» para generar un nuevo enlace.

La URL generada por el comando sudo whmlogin le permite conectarse sin credenciales (usuario y contraseña) a su interfaz WHM. WHM es una capa de cPanel. Puede acceder a cPanel después de realizar los siguientes pasos.

#### Etapa 1: leer y aceptar las condiciones de uso de cPanel

Lea y acepte las condiciones de uso de cPanel.

![cPanel](images/license_validation.png){.thumbnail}

#### 2\. Completar los campos obligatorios

Indique los servidores de correo y de nombres (nameservers) que quiera configurar en el servidor VPS.

![cPanel](images/setup_config_cpanel.png){.thumbnail}

#### 3\. Establecer la contraseña root

![cPanel](images/change_root.png){.thumbnail}

Ahora debería poder conectarse a WHM y por SSH utilizando el usuario root con la contraseña que acaba de establecer.

### Seguridad del servicio

Le recomendamos que tome todas las medidas necesarias para proteger su WHM y su VPS. Para ello, le recomendamos que lea las recomendaciones de cPanel [aquí](https://docs.cpanel.net/knowledge-base/security/tips-to-make-your-server-more-secure/){.external}.

Le recomendamos que consulte nuestra guía sobre cómo [proteger un VPS](/pages/bare_metal_cloud/virtual_private_servers/secure_your_vps), utilizar [nuestras soluciones de backup](/products/bare-metal-cloud-virtual-private-servers) y configurar el [firewall de red](/pages/bare_metal_cloud/dedicated_servers/firewall_network).

## Más información

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
