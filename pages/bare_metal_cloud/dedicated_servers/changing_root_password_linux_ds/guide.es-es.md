---
title: "Configuración de las cuentas de usuario y del acceso root en un servidor"
excerpt: "Cómo empezar a administrar cuentas de usuario en un sistema operativo GNU/Linux"
updated: 2024-02-19
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
> 

## Objetivo

Un servidor dedicado o un VPS de OVHcloud le permiten disfrutar de un "**acceso root**" a su servicio. En términos sencillos, esto significa que usted es el administrador del sistema y que tiene el nivel de permisos más alto.

Aunque el servidor no se utilice para fines que requieran la administración de usuarios reales, la gestión de las **cuentas de usuario** es un tema relacionado con la seguridad que no hay que subestimar. Esta guía proporciona algunos consejos básicos sobre los siguientes temas:

- Cómo configurar cuentas de usuario del sistema con distintos niveles de permisos
- Buenas prácticas para gestionar el acceso al servidor y ejecutar comandos con permisos elevados

## Requisitos

- Un [servidor dedicado](https://www.ovhcloud.com/es-es/bare-metal/) o un [VPS](https://www.ovhcloud.com/es-es/vps/) con un sistema operativo Linux en su cuenta de OVHcloud
- Disponer de las claves de conexión recibidas por correo electrónico tras la instalación.

## Procedimiento

En los siguientes ejemplos se supone que está conectado al servidor por SSH.<br>
Para más información, consulte nuestra guía "[Primeros pasos con SSH](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction)".

No olvide consultar también nuestras guías de primeros pasos:

- Para un [servidor dedicado](/pages/bare_metal_cloud/dedicated_servers/getting-started-with-dedicated-server)
- Para un [servidor dedicado de la gama **Eco**](/pages/bare_metal_cloud/dedicated_servers/getting-started-with-dedicated-server-eco)
- Para un [VPS](/pages/bare_metal_cloud/virtual_private_servers/starting_with_a_vps)

> [!warning]
> OVHcloud pone a su disposición servicios cuya configuración, gestión y responsabilidad recaen sobre usted. Por lo tanto, usted deberá asegurarse de que estos funcionen correctamente.
>
> Esta guía le ayudará a realizar las tareas más habituales. No obstante, le recomendamos que contacte con un [proveedor especializado](https://partner.ovhcloud.com/es-es/directory/) o con [nuestra comunidad](https://community.ovh.com/en/) si tiene problemas o dudas sobre la administración, el uso o la implementación de servicios en un servidor.
>

> [!primary]
>
> Las instrucciones de esta guía están basadas en un sistema operativo de servidor Debian/Ubuntu y no son exhaustivas. Los siguientes ejemplos proporcionan un punto de partida y ayudan a evitar los fallos de seguridad que se pueden explotar fácilmente. Con conocimientos básicos sobre la gestión de cuentas de usuario y las prácticas recomendadas asociadas, puede profundizar en los temas más relevantes para su caso de uso.
>
> Le recomendamos que consulte las **páginas del manual del sistema** para cada pedido que utilice. Puede hacerlo desde la línea de comandos introduciendo `man` seguido de un nombre de comando, función o archivo de sistema.
>

### Contenido

- [Gestión de cuentas de usuario](#accounts)
    - [Creación de una cuenta de usuario no privilegiada](#unprivileged)
    - [Creación de una cuenta de usuario con privilegios root](#privileged)
    - [Ejecutando comandos como administrador ("sudo")](#sudo)
    - [Desactivación de la cuenta de usuario](#disable)
    - [Activación de la cuenta de usuario](#enable)
    - [Eliminación de una cuenta de usuario](#delete)
    - [Cambio de cuenta de usuario](#switch)
    - [Cambiar a la cuenta root ("root shell")](#rootshell)
- [Activación de la conexión del usuario "root"](#enableroot)
    - [Activar la cuenta root](#rootstep1)
    - [Editar archivo "sshd_config"](#rootstep2)
    - [Reiniciar el servicio SSH](#rootstep3)


<a name="accounts"></a>

### Gestión de cuentas de usuario

Tenga en cuenta que las políticas de seguridad de los servidores pueden adaptarse a diferentes situaciones de uso y entornos de usuario. Los pasos que se describen a continuación proporcionan una explicación básica sobre la gestión de las cuentas de usuario, centrándose en la comodidad y la seguridad, no tienen validez universal.

Una vez instalado el servidor (con una plantilla de OVHcloud), deberá comenzar en las siguientes condiciones:

- Se crea una cuenta de usuario con permisos elevados y se le asigna el nombre del sistema operativo, por ejemplo, "ubuntu", "rocky", etc.
- Ha recibido la contraseña inicial de esta cuenta con el email de instalación.
- Puede utilizar un cliente SSH para conectarse al servidor con estas credenciales.

El símbolo del sistema tras la conexión varía en función del tipo de servicio y de la distribución instalada. Por ejemplo: 

```text
ubuntu@ns9356771:~$
```

Tenga en cuenta que los siguientes ejemplos de línea de comandos seguirán utilizando "ubuntu" para hacer referencia al "user account" preconfigurado.

Puede comprobar que esta cuenta ya se ha añadido al `sudo group` en el resultado de este comando:

```bash
id
```

```text
27(sudo)
```

También puede escribir `groups` para ver únicamente los grupos a los que pertenece la cuenta de usuario actual.

Esto significa que el usuario con el que ha iniciado sesión puede ejecutar todos los comandos precedidos del comando `sudo` (`root privileges`). Encontrará información más detallada en el [apartado correspondiente de la guía, a continuación](#sudo).

> [!primary]
> 
> **Definición de términos**
> 
> Para los fines de esta guía, se aplican las siguientes definiciones:
> 
> - `administrator`: persona autorizada a ejecutar todos los comandos en un servidor (administrador del servidor).
> - `sudo user`: cuenta de usuario utilizada por un administrador. Esta cuenta es miembro del `sudo group`. Otros recursos de conocimientos y tutoriales pueden etiquetar a un usuario como `sudoer`, `superuser`, `root user`, `admin`, etc.
> - `sudo group`: el `user group` con los permisos necesarios para ejecutar todos los comandos en un servidor (`root privileges`, cuyos detalles están definidos por la política de seguridad del sistema operativo).
> - `user group` / `group`: entidad técnica que compartimenta las `user account` para la gestión de la seguridad.
> - `root` / `root user` / `root account`: cuenta de usuario con `root privileges` que existe por defecto en los sistemas GNU/Linux y que se utiliza con fines específicos.
>
> Para conocer los detalles y los parámetros que se aplican a su sistema, puede empezar por las páginas `man` para `sudo` y `sudoers`.
>

<a name="unprivileged"></a>

#### Creación de una cuenta de usuario no privilegiada

Aunque no es necesario conceder acceso al servidor a otras personas, la creación de una cuenta de usuario sin permisos especiales (también denominada `normal user` o `regular user`) puede ser útil por motivos de seguridad. Por ejemplo, no hay riesgo de dañar accidentalmente el sistema eliminando o modificando los archivos de configuración del servidor al ejecutar comandos o procesos desde una cuenta de usuario sin permisos elevados.

Otro ejemplo de buena práctica es crear una cuenta de usuario dedicada a una aplicación alojada en el servidor. Incluso si esta aplicación pone en peligro esta cuenta de usuario, la falta de permisos elevados evitará daños mayores.

Crear una nueva cuenta de usuario (sustituya `username` por el nombre real de la cuenta de usuario, por ejemplo, el nombre de una aplicación):

```bash
sudo adduser username
```

Debe proporcionar una contraseña para la nueva cuenta. A continuación, se le pedirá que especifique los detalles del nuevo usuario, lo que es opcional.

```text
New password: 
Retype new password:
passwd: password updated successfully
```

Nota: En una distribución GNU/Linux, **una petición de contraseña no muestra las entradas de teclado**.

- Páginas `man` pertinentes: `adduser`, `useradd`

<a name="privileged"></a>

#### Creación de una cuenta de usuario con privilegios root

En esta sección, se crea una nueva cuenta de usuario para un `administrator` y se conceden permisos elevados en el servidor (`root privileges`).

Crear una nueva cuenta de usuario (sustituya `username` por el nombre real de la cuenta de usuario):

```bash
sudo adduser username
```

Añadir la nueva cuenta de usuario al `sudo group`:

```bash
sudo usermod -aG sudo username
```

Puede comprobar la pertenencia al `group` con el siguiente comando: 

```bash
groups username
```

Ejemplo:

```bash
groups ubuntu
```

```text
ubuntu sudo users
```

La nueva cuenta de usuario es ahora un `sudo user` y puede ejecutar todos los comandos.

Este se configura por defecto para el `sudo group`:

```text
# Allow members of group sudo to execute any command
%sudo   ALL=(ALL:ALL) ALL
```

Estas configuraciones se pueden encontrar en `/etc/sudoers` y en el directorio `/etc/sudoers.d`, respectivamente.


> [!primary]
>
> La administración adecuada de los usuarios, incluidos los métodos de autenticación de usuarios, depende del entorno de trabajo y de otros factores. Si necesita administrar cuentas de usuario y grupos en un servidor, consulte la documentación oficial del sistema operativo y las bases de conocimiento correspondientes.
>

<a name="sudo"></a>

#### Ejecutando comandos como administrador ("sudo")

Cualquier acción que requiera permisos elevados se rechazará a menos que se utilice el comando `sudo`.

Por ejemplo, para cambiar una contraseña para **cualquier cuenta de usuario**, escriba `sudo passwd` seguido de `username`:

```bash
sudo passwd ubuntu
```

```text
New password: 
Retype new password:
passwd: password updated successfully
```

El sistema le pedirá con frecuencia la contraseña de `sudo user` a la que está conectado cuando ejecute `sudo`.

- Páginas `man` pertinentes: `sudo_root`, `sudo`, `sudoers`

<a name="disable"></a>

#### Desactivación de la cuenta de usuario

Para desactivar un `user account`, introduzca:

```bash
sudo passwd -dl username
```

Esto bloqueará la cuenta (impidiendo que se conecte con contraseña) y la definirá como "*passwordless*", lo que desactivará la cuenta.

<a name="enable"></a>

#### Activación de la cuenta de usuario

Para reactivar un `user account` bloqueado sin contraseña, utilice los siguientes comandos (sustituya `initialpassword` por una contraseña temporal):

```bash
sudo usermod username -p initialpassword
```

```bash
sudo passwd -u username
```

Por motivos de seguridad, vuelva a cambiar la contraseña inicial de este usuario:

```bash
sudo passwd username
```

- Páginas `man` pertinentes: `passwd`, `usermod`

<a name="delete"></a>

#### Eliminación de una cuenta de usuario

Una forma sencilla de eliminar una cuenta y sus archivos es el siguiente comando:

```bash
sudo userdel -r -f username
```

- Páginas `man` pertinentes: `userdel`, `deluser`

<a name="switch"></a>

#### Cambio de cuenta de usuario

Como `sudo user`, puede cambiar a cualquier otra cuenta de usuario (sin tener que saber la contraseña):

```bash
sudo su username
```

El símbolo del sistema cambiará en consecuencia:

```text
ubuntu@ns9356771:~$ sudo su username
username@ns9356771:/home/ubuntu$
```

Para volver a su cuenta de usuario anterior, vuelva a cambiar o utilice `exit`.

<a name="rootshell"></a>

#### Cambiar a la cuenta "root" ("root shell")

Tras una nueva instalación del servidor (con una plantilla de OVHcloud), podrá utilizar la `root account` (la cuenta de usuario denominada `root`), pero no tendrá contraseña.

Por motivos de seguridad, el `root account` solo debe utilizarse cuando sea necesario y **solo es accesible desde el propio sistema**.

Para cambiar a `root account`, ejecute el siguiente comando:

```bash
sudo -s
```

El símbolo del sistema cambiará en consecuencia:

```text
ubuntu@ns9356771:~$ sudo -s
root@ns9356771:/home/ubuntu#
```

El carácter `#` al final del símbolo del sistema indica un `root shell`, en lugar de un símbolo del sistema que termina con `$`.

Utilice el siguiente comando para volver a la cuenta de usuario anterior:

```bash
exit
```

**La ejecución de comandos como `root user` no suele ser necesaria y puede incluso ser contraproducente.**

Una idea falsa común es la suposición de que debe utilizar el verdadero `root account` para ejecutar comandos que requieran permisos elevados (`root privileges`) en un sistema.

Sin embargo, tal como se configura por defecto en la política `/etc/sudoers`, el nivel de autorización de `root` es idéntico al de `sudo group`:

```text
# Allow members of group sudo to execute any command
%sudo   ALL=(ALL:ALL) ALL
```

```text
# User privilege specification
root    ALL=(ALL:ALL) ALL
```

> [!primary]
>
> Tenga en cuenta que es posible que los tutoriales y la documentación de usuario no siempre sigan una terminología coherente. A menos que haya comprobado que el uso de `root account` real es necesario para la acción prevista, la mejor práctica es ejecutar comandos `sudo` en su lugar. La manipulación de archivos y parámetros como `root` puede tener consecuencias inesperadas para el sistema.
>

<a name="enableroot"></a>

### Activación de la conexión del usuario "root"

> [!warning]
>
> Permitir que la cuenta root se conecte por SSH se considera un fallo de seguridad y no se recomienda.
>
> En primer lugar, siga los pasos que se indican en nuestras guías para proteger su sistema: 
>
> - [Proteger un servidor dedicado](/pages/bare_metal_cloud/dedicated_servers/securing-a-dedicated-server)
> - [Proteger un VPS](/pages/bare_metal_cloud/virtual_private_servers/secure_your_vps)
> 

<a name="rootstep1"></a>

#### Paso 1: activar la cuenta root

Introduzca el siguiente comando y, a continuación, introduzca la contraseña en el símbolo del sistema:

```bash
sudo passwd root
```

Puede cancelar esta acción introduciendo:

```bash
sudo passwd -d root
```

<a name="rootstep2"></a>

#### Paso 2: editar el archivo "sshd_config"

Utilice un editor de texto como `vim` o `nano` para editar este archivo de configuración:

```bash
sudo nano /etc/ssh/sshd_config
```

Puede consultar la siguiente línea:

```text
#PermitRootLogin prohibit-password
```

El carácter de inicio `#` transforma toda la línea en una cadena de "comentario" y, por lo tanto, cualquier aplicación que lea el archivo lo ignorará.

Esto significa que si no hay ninguna otra instrucción, la conexión con la cuenta de usuario `root` está **no activada**.

Añada la siguiente línea:

```text
PermitRootLogin yes
```

Esto permitirá conectarse al servidor con `root` y la contraseña correspondiente.

Guarde el archivo y salga del editor. Para revocar este tipo de acceso, repita los pasos y elimine la fila.

<a name="rootstep3"></a>

#### Paso 3: reiniciar el servicio SSH

Reinicie el servicio SSH con uno de los siguientes comandos:

```bash
sudo systemctl restart ssh
```

```bash
sudo systemctl restart sshd
```

Esto debería ser suficiente para aplicar los cambios. De lo contrario, reinicie el servidor desde la línea de comandos (`sudo reboot`).

## Más información

[Proteger un servidor dedicado](/pages/bare_metal_cloud/dedicated_servers/securing-a-dedicated-server)

[Proteger un VPS](/pages/bare_metal_cloud/virtual_private_servers/secure_your_vps)

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.