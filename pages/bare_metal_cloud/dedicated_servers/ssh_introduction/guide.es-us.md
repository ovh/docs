---
title: Introducción al SSH
excerpt: "Cómo utilizar las conexiones SSH para acceder al servidor"
updated: 2024-01-16
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
> 

## Objetivo

El protocolo de comunicación SSH (Secure Shell) es la herramienta principal para establecer conexiones de host encriptadas a través de redes no seguras. La herramienta OpenSSH está instalada de forma nativa en todos los servidores de OVHcloud (VPS, servidores dedicados, instancias de Public Cloud) para permitir conexiones seguras a servidores remotos y otras operaciones.

**Esta guía explica cómo acceder a su servidor de forma segura por SSH.**

<iframe width="560" height="315" src="https://www.youtube.com/embed/gi7JqUvcEt0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

> [!warning]
> La configuración, la gestión y la responsabilidad de los servicios que OVHcloud pone a su disposición recaen sobre usted. Por lo tanto, usted deberá asegurarse de que estos funcionan correctamente.
>
> Si necesita ayuda para llevar a cabo estas acciones, puede ponerse en contacto con un [proveedor especializado](https://partner.ovhcloud.com/es/directory/) o hablar con nuestra comunidad de usuarios en https://community.ovh.com/en/. OVHcloud no puede ofrecerle asistencia técnica.
>

## Requisitos

- Tener un [servidor dedicado](https://www.ovhcloud.com/es/bare-metal/) o un [VPS](https://www.ovhcloud.com/es/vps/) en su cuenta de OVHcloud.
- Una aplicación cliente SSH (en línea de comandos o en interfaz gráfica)

> [!primary]
> Esta guía no se aplica a las instalaciones estándar de servidores Windows, ya que se basan en el protocolo de escritorio remoto (*Remote Desktop Protocol*) para las conexiones. No obstante, las conexiones SSH se utilizan para el modo de rescate de OVHcloud. Para más información, consulte el apartado [Más información](#gofurther) sobre esta guía.
>

## Procedimiento

Existen varios métodos para autentificar una conexión a un periférico remoto por SSH.<br>
Las instrucciones siguientes se refieren al método de autenticación a través de un nombre de usuario y una contraseña.<br>
También puede configurar llaves SSH para activar las conexiones seguras sin contraseña. Para más información, consulte nuestra [guía sobre llaves SSH](/pages/bare_metal_cloud/dedicated_servers/creating-ssh-keys-dedicated).

Las claves de conexión (usuario y contraseña) se envían por correo electrónico después de instalar o reinstalar el servidor desde su [Panel de configuración de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es).
El nombre de usuario corresponde al sistema operativo, por ejemplo `ubuntu` o `debian`.<br>
Para conectarse, también debe especificar la dirección IPv4 o el nombre del host del servidor. Esta información está disponible en el email de instalación y en el área de cliente.

No olvide consultar también nuestras guías "Primeros pasos":

- Para un [servidor dedicado](/pages/bare_metal_cloud/dedicated_servers/getting-started-with-dedicated-server)
- Para un [servidor dedicado de la gama de productos **Eco**](/pages/bare_metal_cloud/dedicated_servers/getting-started-with-dedicated-server-eco)
- Para un [VPS](/pages/bare_metal_cloud/virtual_private_servers/starting_with_a_vps)

### Conexión desde una distribución GNU/Linux o macOS

Por lo general, los clientes en línea de comandos SSH (OpenSSH) están disponibles por defecto. Abra la aplicación Terminal y conéctese al servidor con el siguiente comando:

```bash
ssh username@server_IP
```

Si el puerto SSH del servidor no es el puerto estándar, utilice el siguiente comando:

```bash
ssh username@server_IP -p port_number
```

### Conexión desde un equipo con Windows

Las últimas versiones de Windows incorporan de forma nativa OpenSSH para las conexiones desde el PowerShell o desde la línea de comandos.

Haga clic derecho en el botón Iniciar de Windows y seleccione `Windows PowerShell`{.action}. También puede utilizar el campo de búsqueda para iniciar uno de estos programas.

![PowerShell](images/windowsps.png){.thumbnail}

Conéctese al servidor con el siguiente comando:

```bash
ssh username@server_IP
```

Si el puerto SSH del servidor no es el puerto estándar, utilice el siguiente comando:

```bash
ssh username@server_IP -p port_number
```

<a name="login"></a>

### Conexión y finalización

Cuando se le pida una contraseña, escriba la del usuario que se conecta y pulse `Enter`.

Si se trata de una nueva conexión, su cliente SSH recibirá una huella de llave (*fingerprint*) del servidor. Introduzca "yes" para confirmar la contraseña del usuario que se conecta.

```bash
ssh ubuntu@203.0.113.100
```
```console
The authenticity of host '203.0.113.100 (203.0.113.100)' can't be established.
ECDSA key fingerprint is SHA256:rRwrdsmJfzvJF5k0a4JmMSdaWbTlCgRKBukbmQ3gmso.
Are you sure you want to continue connecting (yes/no/[fingerprint])?
Warning: Permanently added '203.0.113.100' (ECDSA) to the list of known hosts.
ubuntu@203.0.113.100's password:
```

La huella de clave se guarda en su dispositivo y se comprueba con cada nueva conexión. Si la clave ha cambiado en la máquina remota, se mostrará un mensaje de aviso cuando intente conectarse, por ejemplo:

```console
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@    WARNING: REMOTE HOST IDENTIFICATION HAS CHANGED!     @
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
Host key verification failed.
Offending ECDSA key in /home/user/.ssh/known_hosts:3
```

Esto significa que ha ocurrido una de las siguientes situaciones:

- Se ha reinstalado el servidor.
- Se ha reinstalado el servicio SSH en el servidor.
- Usted se conecta a otro host con la misma dirección IP.

> [!primary]
> El mensaje de advertencia no necesariamente indica un problema de seguridad. Sin embargo, si no ha iniciado ninguna de estas situaciones, el servidor remoto puede verse comprometido.
>

Para solucionar el problema, utilice el siguiente comando con la dirección IP del servidor:

```bash
ssh-keygen -f ~/.ssh/known_hosts -R 203.0.113.100
```

También puede abrir el archivo `known_hosts` en su carpeta personal con un editor de texto y eliminar la línea "offending" especificada en el mensaje de aviso:

```bash
nano ~/.ssh/known_hosts
```

Guarde los cambios y salga del editor. La nueva huella de clave debe ser aceptada la próxima vez que se conecte al servidor.

En Windows, también se especifica la ruta del archivo `known_hosts` y la línea a eliminar, por ejemplo:

```console
Offending ECDSA key in C:\\Users\\Name_Windows_User/.ssh/known_hosts:3
```

Para solucionar este problema, utilice el siguiente comando con la dirección IP del servidor:

```bash
ssh-keygen -f "C:\Users\Name_Windows_User\.ssh\known_hosts" -R 203.0.113.100
```

También puede tener acceso a esta carpeta, hacer clic derecho en el archivo y abrirlo con la aplicación Bloc de notas.

![known_hosts](images/windowskh.png){.thumbnail}

Elimine la línea correspondiente, en este caso la tercera. Guarde los cambios y salga del editor. La nueva huella de clave debe ser aceptada la próxima vez que se conecte al servidor.

### Uso de clientes gráficos o software compatibles con SSH

Para cada tipo de sistema operativo, existen numerosos programas que permiten conectarse al servidor mediante el protocolo SSH. 

Por ejemplo, [PuTTY](https://putty.org/){.external} para Windows es un programa de cliente SSH de código abierto con una interfaz gráfica de usuario. También ha sido utilizado en otras plataformas y está disponible a través [del sitio oficial](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html), gestores de paquetes de software y a través de [Homebrew](https://brew.sh/).

Inicie PuTTY e introduzca la dirección IP del servidor. Especifique el número de puerto si no se utiliza el puerto estándar. Haga clic en `Open`{.action} para conectarse. Se le pedirá el nombre de usuario y la contraseña.

![PuTTY](images/putty_01.png){.thumbnail}

Una de las ventajas de PuTTY es la posibilidad de registrar varias sesiones. Introduzca la información de conexión en el campo `Saved Sessions` y haga clic en `Save`{.action}.

![PuTTY](images/putty_02.png){.thumbnail}

Como de costumbre, el aviso de huella aparece en la primera conexión. Haga clic en `Accept`{.action} para guardar la huella digital de la clave o seleccione `Connect Once`{.action}.

![PuTTY](images/putty_03.png){.thumbnail}

Consulte las FAQ oficiales y la documentación de PuTTY para más información.

## Más información <a name="gofurther"></a>

[Configuración de las cuentas de usuario y del acceso root en un servidor](/pages/bare_metal_cloud/dedicated_servers/changing_root_password_linux_ds)

[Creación de llaves SSH](/pages/bare_metal_cloud/dedicated_servers/creating-ssh-keys-dedicated)

[Modo de rescate del servidor dedicado](/pages/bare_metal_cloud/dedicated_servers/rescue_mode)

[VPS modo de rescate](/pages/bare_metal_cloud/virtual_private_servers/rescue)

Si necesita formación o asistencia técnica para implantar nuestras soluciones, póngase en contacto con su representante de ventas o haga clic en [este enlace](https://www.ovhcloud.com/es/professional-services/) para obtener un presupuesto y solicitar un análisis personalizado de su proyecto a nuestros expertos del equipo de Servicios Profesionales.

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.