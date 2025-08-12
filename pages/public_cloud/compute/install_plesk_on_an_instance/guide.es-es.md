---
title: "Cómo instalar Plesk en una instancia de Public Cloud"
excerpt: "Cómo instalar Plesk en una instancia de Public Cloud"
updated: 2025-04-08
---

## Objetivo

Plesk es un panel de control de servidores fácil de usar que puede instalarse en las instancias del Public Cloud de OVHcloud.

**Esta guía explica cómo instalar Plesk en una instancia de Public Cloud.** 

> [!warning]
> 
> La responsabilidad sobre los servicios que OVHcloud pone a su disposición recae íntegramente en usted. Nuestros técnicos no son los administradores de las máquinas, ya que no tienen acceso a ellas. Por lo tanto, la gestión del software y la seguridad le corresponde a usted.
>
> Esta guía le ayudará a realizar las tareas más habituales. No obstante, le recomendamos que contacte con un [proveedor especializado](/links/partner) o con [nuestra comunidad](/links/community) si tiene problemas o dudas sobre la administración, el uso o la implementación de servicios en un servidor.
>

## Requisitos

- [Crear una instancia desde el área de cliente de OVHcloud](/pages/public_cloud/public_cloud_cross_functional/create_a_public_cloud_project).
- [Tener acceso de administrador](/pages/public_cloud/compute/public-cloud-first-steps#connect-instance).

## Procedimiento

### 1. Instalar Plesk

Instalar Plesk desde una conexión SSH es bastante sencillo. Para ello, descargue y ejecute el script de instalación de Plesk utilizando uno de los siguientes comandos:

> [!primary]
>
> En función del SO de su instancia, el comando sudo solo puede no ser suficiente. Si encuentra un error, cambie al modo de superusuario antes de iniciar la instalación:
>
> <pre class="highlight language-console"><code class="language-console">sudo su</code></pre>
>

- **Instalación por defecto**

```bash
sudo sh <(curl https://autoinstall.plesk.com/one-click-installer || wget -O - https://autoinstall.plesk.com/one-click-installer)
```

- **Instalación personalizada**

```bash
sudo sh <(curl https://autoinstall.plesk.com/plesk-installer || wget -O - https://autoinstall.plesk.com/plesk-installer)
```

Espere mientras se instala Plesk. 

### 2. Finalizar la configuración y añadir una licencia

Una vez completada la instalación, la interfaz de línea de comandos (CLI) mostrará la siguiente información:

- Se generan dos URL:
    - Una con la dirección IP del servidor (en HTTPS con un certificado SSL autofirmado, que puede activar una alerta de seguridad en algunos navegadores).
    - El otro con un dominio Plesk (en HTTPS con un certificado SSL firmado, sin alerta de seguridad).
    - Ambas son seguras, pero se recomienda usar la segunda.
- Un mensaje dice: "También puede conectarse como 'root' con su contraseña 'root'." Sin embargo, por defecto no se genera ninguna contraseña root. Si es necesario, los clientes pueden seguir [esta guía](/pages/bare_metal_cloud/dedicated_servers/changing_root_password_linux_ds) para activar el usuario root y establecer una contraseña.

Una vez en la página de Plesk, siga las instrucciones que aparecen en pantalla para finalizar la instalación.

![plesk configuration](images/plesk_configuration.png){.thumbnail}

Para añadir su licencia de Plesk, necesitará la clave que le haya proporcionado su proveedor.

> [!primary]
>
> OVHcloud no comercializa licencias de Plesk para la solución Public Cloud. No obstante, puede adquirir una desde la web de [Plesk](https://www.plesk.com/).
> 

¿Desea cambiar su licencia, por ejemplo para sustituir una llave de prueba o para cambiar su oferta? Desde el interfaz de Plesk, vaya a `Tools & Settings`{.acción}. En la sección **Plesk**, seleccione `License information`{.acción}.
Para añadir su licencia de Plesk, necesitará 


## Más información

[Documentación oficial de Plesk](https://docs.plesk.com/es-ES/obsidian/)

Interactúe con nuestra [comunidad de usuarios](/links/community).