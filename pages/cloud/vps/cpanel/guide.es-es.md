---
title: 'Desplegar cPanel en un VPS'
excerpt: 'Cómo instanciar un VPS con la aplicación cPanel preinstalada'
updated: 2021-10-14
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
> 

**Última actualización: 14/10/2021**

## Objetivo

cPanel es un panel de configuración diseñado para los proveedores de hosting. El alojamiento del sitio web en cuestión se simplifica gracias a la interfaz gráfica que permite automatizar los parámetros.

**Esta guía explica cómo desplegar cPanel con aplicaciones preinstaladas en un VPS.**

## Requisitos

- Un [VPS de la gama actual](https://www.ovhcloud.com/es-es/vps/) (oferta Value, Essential, Comfort o Elite).
- Haber iniciado sesión en el [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es).

## Procedimiento

Para instalar su servidor cPanel, primero debe contratar un VPS con la distribución cPanel.

![cPanel](images/cpanel_order.png){.thumbnail}

Cuando su VPS esté listo, recibirá un correo electrónico con los datos de acceso para conectarse a su servidor cPanel:

```
 |    Sus aplicaciones:
 |    Puede conectarse a cpanel desde https://<ip>:2087/<session_parameters>
```

Si ya tiene un VPS y desea instalar cPanel, puede reinstalar el VPS desde el [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es) utilizando el modelo CentOS 7 - cPanel (disponible únicamente con un VPS compatible).

> [!warning]
>
> Si reinstala un VPS, todos los datos almacenados en el VPS se perderán.
> 

### Primera conexión

Una vez que haya recibido el mensaje de correo electrónico con el único enlace, haga clic en este enlace para realizar la configuración inicial.

> [!primary]
>
> Si el enlace ya ha caducado, por favor conéctese a su VPS vía SSH usando el usuario CentOS y ejecute el comando "sudo whmlogin" para generar un nuevo enlace.
>

La URL anteriormente citada le permite conectarse a su interfaz WHM sin claves de usuario y contraseña.

#### 1\. Leer las condiciones de uso de cPanel

Lea y acepte las condiciones de uso de cPanel

![cPanel](images/license_validation.png){.thumbnail}

#### 2\. Completar los campos obligatorios

Indique los servidores de correo y de nombres (nameservers) que quiera configurar en el servidor VPS.

![cPanel](images/setup_config_cpanel.png){.thumbnail}

#### 3\. Establecer la contraseña root

![cPanel](images/change_root.png){.thumbnail}

Ahora debería poder conectarse a WHM y por SSH utilizando el usuario root con la contraseña que acaba de establecer.

### Seguridad del servicio

Le recomendamos que tome todas las medidas necesarias para proteger su WHM y su VPS. Para ello, le recomendamos que lea las recomendaciones de cPanel [aquí](https://docs.cpanel.net/knowledge-base/security/tips-to-make-your-server-more-secure/){.external}.

Le recomendamos que consulte nuestra guía sobre cómo [proteger un VPS](../consejos-proteccion-vps/), utilizar [nuestras soluciones de backup](../) y configurar el [firewall de red](/pages/cloud/dedicated/firewall_network).

## Más información

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
