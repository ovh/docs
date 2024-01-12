---
title: "Desplegar cPanel en un VPS"
excerpt: "Descubra cómo crear instancias de un VPS con la aplicación cPanel preinstalada"
updated: 2024-01-12
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
> 

## Objectivo

cPanel es un panel de control que facilita la gestión de los alojamientos web. Hace que las tareas complejas sean más accesibles, incluso para los nuevos usuarios. Ofrece una amplia gama de funcionalidades como, por ejemplo, para la gestión: 

- mensajes de correo
- dominios
- bases de datos
- de la seguridad
- etc.

Gracias a una interfaz gráfica que permite automatizar los parámetros, el alojamiento de sitios web se simplifica.

**Descubra cómo desplegar cPanel con las aplicaciones preinstaladas en un VPS.**

## Requisitos

- Tener contratado un servicio [VPS reciente](https://www.ovhcloud.com/es/vps/){.external} (ofertas Value, **Essential**, **Comfort** o **Elite**).
- Acceso al [área de cliente de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws).

## Procedimiento

Para instalar su servidor cPanel, primero necesita contratar un VPS con una distribución cPanel.

![horizon](images/cpanel_order.png){.thumbnail}

Cuando su VPS esté listo, recibirá un correo electrónico proporcionando la información para conectarse a su servidor Cpanel.

> Su aplicación:
>
> Puede conectarse a su cPanel desde: https://hostname:2087/session_parameters

Si su VPS ya esta listo y quiere tener cPanel, puede reinstalar el VPS desde su panel de control OVHcloud  con la plantilla  "Centos 7 - cPanel" (disponible solo con una solución de VPS compatible).

> [!warning]
>
> Si reinstala el VPS, toda la información almacenada puede perderse.
>

### Primera conexión

Una vez que reciba el email con el enlace único, por favor proceda al enlace para realizar la configuración inicial.

> [!primary]
>
> Si el enlace ya ha caducado, por favor conéctese a su VPS vía SSH usando el usuario CentOS y ejecute el comando "sudo whmlogin" para generar un nuevo enlace.
>

La URL anterior permite iniciar sesión sin credenciales (usuario y contraseña) en su administrador WHM.

#### Paso 1: Lea y acepte los términos de cPanel.

![horizon](images/license_validation.png){.thumbnail}

#### Paso 2: Proporcione la dirección de correo electrónico y los servidores DNS que desea configurar en su VPS

![horizon](images/setup_config_cpanel.png){.thumbnail}

#### Paso 3: Establecer la contraseña de root

![horizon](images/change_root.png){.thumbnail}

Ahora usted debería poder iniciar sesión en WHM y SSH usando el usuario y la contraseña de root que acaba de configurar.

### Proteja su servicio

Le recomendamos que tome más medias adicionales para proteger su WHM y VPS. Por esto le recomendamos que lea las recomendamos proporcionadas por cPanel aquí:

Además, le recomendamos configurar el [firewall](/pages/bare_metal_cloud/dedicated_servers/firewall_network) y una [solución de backup](/pages/bare_metal_cloud/virtual_private_servers/secure_your_vps) en su VPS.

## Más información

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>
