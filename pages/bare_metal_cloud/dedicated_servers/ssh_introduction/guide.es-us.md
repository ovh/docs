---
title: Cómo empezar con buen pie con las conexiones SSH
excerpt: "Cómo utilizar SSH para acceder a un servidor de OVHcloud desde la mayoría de los puestos de trabajo"
updated: 2024-12-03
---

<style>
details>summary {
    color:rgb(33, 153, 232) !important;
    cursor: pointer;
}
details>summary::before {
    content:'\25B6';
    padding-right:1ch;
}
details[open]>summary::before {
    content:'\25BC';
}
</style>

## Objetivo

El protocolo de comunicación SSH (Secure Shell) es el medio preferido para establecer conexiones de host cifradas a través de redes públicas. La utilidad OpenSSH está disponible en todos los servidores de OVHcloud (VPS, servidores dedicados, instancias de Public Cloud) para permitir conexiones a distancia seguras a los servidores, así como otras operaciones.

**Esta guía explica cómo conectarse de forma segura a un servidor mediante SSH.**

> [!warning]
> OVHcloud ofrece servicios cuya configuración y gestión son responsabilidad suya. Por lo tanto, es su responsabilidad asegurarse de que funcionen correctamente.
>
> Esta guía está diseñada para ayudarle con las tareas más habituales. No obstante, le recomendamos que, si necesita ayuda, se ponga en contacto con un [proveedor de servicios especializado](/links/partner) o con la [comunidad de OVHcloud](/links/community). Para más información, consulte la sección [Más información](#gofurther) de esta guía.
>

## Requisitos

- Un [servidor dedicado](/links/bare-metal/bare-metal) o un [VPS](/links/bare-metal/vps) en su cuenta de OVHcloud

> [!primary]
> Esta guía no se aplica a las instalaciones estándar de Windows Server, ya que se basan en el Protocolo de escritorio remoto (RDP) para las conexiones. Sin embargo, las conexiones SSH son relevantes cuando se utiliza el modo de rescate de OVHcloud. Para más información, consulte la sección [Más información](#gofurther) de esta guía.
>

## Procedimiento

Hay varias formas de autenticar una conexión a un host remoto por SSH. Las siguientes instrucciones describen el método de autenticación con **nombre de usuario y contraseña**.  
También puede configurar la autenticación de claves para habilitar conexiones seguras sin intercambio de contraseñas. Para más información, consulte nuestras guías:

- [Cómo crear y utilizar claves para la autenticación SSH](/pages/bare_metal_cloud/dedicated_servers/creating-ssh-keys-dedicated)
- [Cómo crear y utilizar claves para la autenticación SSH con PuTTY](/pages/web_cloud/web_hosting/ssh_using_putty_on_windows)

Las claves de acceso iniciales (identificador y contraseña) se envían por correo electrónico tras la instalación o la reinstalación del servidor desde el [área de cliente de OVHcloud](/links/manager).

El nombre de usuario corresponde al sistema operativo, por ejemplo, `ubuntu` o `debian`. Para conectarse, debe especificar también la dirección IP o el `hostname` del servidor. Estos detalles están disponibles en el email de instalación y en el área de cliente.

Si desea más información sobre este tema, consulte nuestras guías Primeros pasos:

- Para un [servidor dedicado](/pages/bare_metal_cloud/dedicated_servers/getting-started-with-dedicated-server)
- Para un [servidor dedicado de la gama **Eco**](/pages/bare_metal_cloud/dedicated_servers/getting-started-with-dedicated-server-eco)
- Para un [VPS](/pages/bare_metal_cloud/virtual_private_servers/starting_with_a_vps)

### Cómo conectarse a un servidor remoto desde una distribución GNU/Linux o macOS

/// details | Despliegue esta sección

#### Establecer una conexión

Por defecto, suele estar disponible un cliente en línea de comandos para SSH (protocolo OpenSSH). Abra la aplicación de línea de comandos (Terminal) y conéctese al servidor con el siguiente comando:

```bash
ssh username@server_IP
```

Si ha cambiado el puerto SSH del servidor, utilice en su lugar este comando:

```bash
ssh username@server_IP -p port_number
```

#### Conexión y fingerprint

Cuando se le pida, escriba la contraseña del usuario que inicia sesión (o péguela con un clic a través del botón central del ratón) y presione `Entrar`{.action}.

Si se trata de una nueva conexión, su cliente SSH recibirá un **sello de llave** del servidor. Introduzca `yes` para confirmar y, a continuación, la contraseña del usuario que se conecta para conectarse.

Ejemplo de salida:

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

La huella digital se guardará en el dispositivo y se comprobará cada vez que se conecte. Si la clave ha cambiado en el host remoto, recibirá un mensaje de advertencia cuando intente conectarse.

Ejemplo de salida:

```console
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@    WARNING: REMOTE HOST IDENTIFICATION HAS CHANGED!     @
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
Host key verification failed.
Offending ECDSA key in /home/user/.ssh/known_hosts:3
```

Esto significa que se produjo uno de los siguientes eventos:

- El servidor se ha reinstalado correctamente.
- El servicio SSH en el servidor se ha reinstalado correctamente.
- Se conecta a un host diferente con la misma dirección IP.

> [!primary]
> El mensaje de advertencia no indica necesariamente un problema de seguridad. Sin embargo, si no es el origen de uno de estos incidentes, el servidor remoto podría verse comprometido.
>

Para solucionar este problema, utilice el siguiente comando con la dirección IP del servidor:

```bash
ssh-keygen -f ~/.ssh/known_hosts -R 203.0.113.100
```

También puede editar el archivo `known_hosts` que se encuentra en la carpeta `home` de su cuenta de usuario local con un editor de texto.

Ejemplo:

```bash
nano ~/.ssh/known_hosts
```

Localice la línea `offending` especificada en el mensaje de advertencia (en este ejemplo, sería la tercera línea). Resalte toda la fila y elimínela.

Guarde los cambios y salga del editor. Tendrá que confirmar la nueva huella digital la próxima vez que se conecte al servidor.

///

### Cómo conectarse a un servidor remoto desde un dispositivo Windows

/// details | Despliegue esta sección

#### Establecer una conexión

Las versiones más recientes del sistema operativo Windows incluyen OpenSSH, que permite utilizarlo directamente desde aplicaciones nativas de línea de comandos (PowerShell o Símbolo del sistema).

Haga clic derecho en el botón `Inicio`{.action} de Windows y seleccione `Windows PowerShell`{.action}. También puede utilizar el campo de búsqueda para iniciar una de las aplicaciones de línea de comandos.

![PowerShell](images/windowsps.png){.thumbnail}

Conéctese al servidor con el siguiente comando:

```bash
ssh username@server_IP
```

Si ha cambiado el puerto SSH del servidor, utilice en su lugar este comando:

```bash
ssh username@server_IP -p port_number
```

#### Conexión y fingerprint

Cuando se le pida, escriba la contraseña del usuario que inicia sesión (o péguela haciendo clic con el botón secundario) y presione `Entrar`{.action}.

Si se trata de una nueva conexión, su cliente SSH recibirá un **sello de llave** del servidor. Introduzca `yes` para confirmar y, a continuación, la contraseña del usuario que se conecta para conectarse.

Ejemplo de salida:

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

La huella digital se guardará en el dispositivo y se comprobará cada vez que se conecte. Si la clave ha cambiado en el host remoto, recibirá un mensaje de advertencia cuando intente conectarse.

Ejemplo de salida:

```console
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@    WARNING: REMOTE HOST IDENTIFICATION HAS CHANGED!     @
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
Host key verification failed.
Offending ECDSA key in C:\\Users\\Name_Windows_User/.ssh/known_hosts:3
```

Esto significa que se produjo uno de los siguientes eventos:

- El servidor se ha reinstalado correctamente.
- El servicio SSH en el servidor se ha reinstalado correctamente.
- Se conecta a un host diferente con la misma dirección IP.

> [!primary]
> El mensaje de advertencia no indica necesariamente un problema de seguridad. Sin embargo, si no es el origen de uno de estos incidentes, el servidor remoto podría verse comprometido.
>

Para solucionar este problema, escriba el siguiente comando con el nombre de su cuenta de usuario de Windows local y la dirección IP del servidor:

```bash
ssh-keygen -f "C:\Users\Name_Windows_User\.ssh\known_hosts" -R 203.0.113.100
```

También puede tener acceso a esta carpeta, hacer clic derecho en el archivo y abrirlo con un editor de texto (Notepad, Notepad++, etc.)

![known_hosts](images/windowskh.png){.thumbnail}

Localice la línea `offending` especificada en el mensaje de advertencia (en este ejemplo, sería la tercera línea). Resalte toda la fila y elimínela.

Guarde los cambios y salga del editor. Tendrá que confirmar la nueva huella digital la próxima vez que se conecte al servidor.

///

### Uso de clientes GUI dedicados o de programas compatibles SSH

Si prefiere una interfaz gráfica de usuario, puede encontrar numerosas aplicaciones de software para cada tipo de sistema operativo que le permiten conectarse a hosts remotos a través del protocolo SSH.

Por ejemplo, [PuTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html) es un cliente SSH de código abierto con muchas funciones útiles. Para más información sobre cómo utilizarlo para conectarse a los servidores de OVHcloud, consulte nuestro tutorial:

[Cómo usar PuTTY](/pages/web_cloud/web_hosting/ssh_using_putty_on_windows)

<a name="gofurther"></a>

## Más información

[Configuración de cuentas de usuario y acceso root en un servidor](/pages/bare_metal_cloud/dedicated_servers/changing_root_password_linux_ds)

[Cómo crear y utilizar claves para la autenticación SSH](/pages/bare_metal_cloud/dedicated_servers/creating-ssh-keys-dedicated)

[Cómo crear y utilizar claves para la autenticación SSH con PuTTY](/pages/web_cloud/web_hosting/ssh_using_putty_on_windows)

[Modo de rescate en un servidor dedicado](/pages/bare_metal_cloud/dedicated_servers/rescue_mode)

[Modo de rescate en un VPS](/pages/bare_metal_cloud/virtual_private_servers/rescue)

Para servicios especializados (posicionamiento web, desarrollo...), póngase en contacto con los [partners de OVHcloud](/links/partner).

Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestras distintas soluciones [pestañas de soporte](/links/support).

Interactúe con nuestra [comunidad de usuarios](/links/community).