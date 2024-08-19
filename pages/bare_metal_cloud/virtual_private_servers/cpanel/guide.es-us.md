---
title: "Desplegar cPanel en un VPS"
excerpt: "Descubra cómo crear instancias de un VPS con la aplicación cPanel preinstalada"
updated: 2024-01-31
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

- Tener contratado un servicio [VPS reciente](https://www.ovhcloud.com/es/vps/){.external} con un [OS compatible con cPanel](https://www.ovhcloud.com/es/vps/os/).
- Haber iniciado sesión en el [área de cliente de OVHcloud](/links/manager).

## Procedimiento

Si ya tiene un VPS y desea instalar cPanel, puede reinstalar el VPS desde su [área de cliente de OVHcloud](/links/manager) a través de un [OS compatible con cPanel](https://www.ovhcloud.com/es/vps/os/).

> [!warning]
>
> Si reinstala un VPS, todos los datos almacenados en el VPS se perderán.
> 

Para instalar su servidor cPanel, contrate un VPS con la distribución cPanel.

![cPanel](images/cpanel_order.png){.thumbnail}

Cuando su VPS esté listo, recibirá un correo electrónico con los datos de acceso para conectarse a su servidor cPanel:

```
 |    Sus aplicaciones:
 |    Application: cpanel
 |    Puede conectarse a cpanel desde https://<ip>:2087/<session_parameters>
```

### Primera conexión

Una vez que haya recibido el mensaje de correo electrónico con el enlace único, haga clic en este enlace para realizar la configuración inicial. Si el enlace ya ha expirado, conéctese al servidor por [SSH](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction) y ejecute el comando `sudo whmlogin` para generar un nuevo enlace.

La URL generada por el comando `sudo whmlogin` le permite conectarse sin credenciales (usuario y contraseña) a su interfaz WHM. WHM es una capa de cPanel. Puede acceder a cPanel después de realizar los siguientes pasos.

#### Etapa 1: leer y aceptar las condiciones de uso de cPanel

Lea y acepte las condiciones de uso de cPanel.

![cPanel](images/license_validation.png){.thumbnail}

#### Etapa 2: Completar los campos obligatorios

Indique los servidores de correo y de nombres (nameservers) que quiera configurar en el servidor VPS.

![cPanel](images/setup_config_cpanel.png){.thumbnail}

#### Etapa 3: Establecer la contraseña root

![cPanel](images/change_root.png){.thumbnail}

A partir de ahora, puede conectarse a su servidor por SSH utilizando el usuario root con la contraseña que acaba de establecer.

### Crear una cuenta cPanel desde la interfaz WHM

Una vez conectado a su interfaz WHM, haga clic en `Create a New Account`{.action} para crear una cuenta cPanel.

![cPanel](images/create_new_account.png){.thumbnail}

Rellene el formulario y confirme la creación de su cuenta cPanel.

![cPanel](images/create_new_account_form.png){.thumbnail}

En la nueva pantalla, haga clic en el botón `Go to cPanel`{.action} a la derecha de la pantalla.

![cPanel](images/go_to_cpanel.png){.thumbnail}

Será redirigido a su interfaz cPanel.

![cPanel](images/manager_cpanel.png){.thumbnail}

Ya puede utilizar cPanel. Para más información sobre cPanel, consulte la [documentación oficial](https://docs.cpanel.net/).

> [!primary]
>
> En la barra de navegación de su navegador, introduzca las siguientes URL para conectarse a:
>
> - cPanel: https&#58;//&#60;IP_V4&#62;:2083/ (utilice las claves recién creadas en la interfaz WHM)
> - WHM: https&#58;//&#60;IP_V4&#62;:2087/ (utilice el nombre de usuario "root" y la contraseña recibida en el email de compra del servicio o la contraseña SSH que haya cambiado en la interfaz WHM)
>
> Encuentre su dirección IPv4 en el mensaje de correo electrónico que recibió al contratar su VPS con la distribución cPanel.
>

### Proteger el servicio

Le recomendamos que tome todas las medidas necesarias para proteger su WHM y su VPS. Para ello, le recomendamos que lea [las recomendaciones de cPanel](https://docs.cpanel.net/knowledge-base/security/tips-to-make-your-server-more-secure/).

Asimismo, le recomendamos que consulte nuestra guía para [proteger un VPS](/pages/bare_metal_cloud/virtual_private_servers/secure_your_vps), utilice [nuestras soluciones de backup](/products/bare-metal-cloud-virtual-private-servers) y configure el [Edge Network Firewall](/pages/bare_metal_cloud/dedicated_servers/firewall_network).

## Más información

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
