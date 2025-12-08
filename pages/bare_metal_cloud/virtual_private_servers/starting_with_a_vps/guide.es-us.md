---
title: Primeros pasos con un VPS
excerpt: Aprenda a gestionar un VPS en su área de cliente y descubra las primeras etapas de su uso, incluyendo las conexiones a distancia y las medidas de seguridad
updated: 2025-09-11
---

## Objetivo

Un servidor privado virtual o VPS (del inglés «virtual private server») es un servidor dedicado virtualizado que ofrece una gran flexibilidad y un mayor control sobre las soluciones de alojamiento web tradicionales. A diferencia de los planes de hosting gestionados por OVHcloud, en los que las tareas de gestión están cubiertas, la administración de un VPS es responsabilidad suya. Como administrador del sistema, es responsable de la configuración, el mantenimiento y la seguridad del servidor para garantizar su buen funcionamiento y fiabilidad.

**Descubra la información necesaria para empezar a utilizar un VPS.**

## Requisitos

- Tener un [VPS](/links/bare-metal/vps) en el área de cliente de OVHcloud
- Tienes acceso a tu [área de cliente de OVHcloud](/links/manager).

> [!warning]
> No todas las funciones de VPS mencionadas en esta página están disponibles en las Local Zones de OVHcloud.
>
> Para más información, consulte la [página web de las Local Zones](/links/bare-metal/vps-lz).

## Procedimiento

### Contenido

- [Panel de control](#controlpanel)
- [Funciones VPS disponibles en la pestaña «Inicio»](#hometab)
- [Conectarse a su VPS](#connect)
    - [Distribución GNU/Linux](#linuxconnect)
    - [Distribución Windows](#winconnect)
- [Proteger su VPS](#secure)
- [Asociar un dominio](#domain)

Conéctese al [área de cliente de OVHcloud](/links/manager), acceda a la sección `Bare Metal Cloud`{.action} y seleccione su servidor en la sección `Servidores privados virtuales`{.action}.

<a name="controlpanel"></a>

### Panel de control

La pestaña `Inicio`{.action} contiene información importante sobre su servicio y le permite realizar operaciones esenciales.

![VPS Home](images/vpshome.png){.thumbnail}

#### Su VPS <a name="yourvps"></a>

Consulte a continuación la información básica sobre su VPS y el estado del servicio. Haga clic en las fichas siguientes para ver los detalles.

> [!tabs]
> Nombre
>>
>> Para personalizar el nombre de su VPS, haga clic en el botón `...`{.action} y seleccione `Cambiar el nombre`{.action}. Esta funcionalidad es útil para facilitar la navegación por el área de cliente cuando se gestionan varios servicios VPS. Sin embargo, el nombre interno del servicio permanece en formato *vps-XXXXXXX.vps.ovh.net*.
>>
> Boot
>>
>> El modo de arranque indicado es **modo normal**, en el que el servidor carga el sistema operativo instalado (*LOCAL*), o **modo de rescate**, que OVHcloud proporciona en caso de solución de problemas. Utilice el botón `...`{.action} para [reiniciar el VPS](#reboot-current-range) o inícielo en modo de rescate si es necesario.
>>
>> Si lo necesita, puede consultar más información en nuestra guía sobre el [modo rescue](/pages/bare_metal_cloud/virtual_private_servers/rescue).
>>
> SO / Distribución
>>
>> Es el sistema operativo instalado actualmente. Utilice el botón `...`{.action} para [reinstalar el mismo sistema operativo o seleccionar otro de las opciones disponibles](#reinstallvps).
>>
>> > [!warning]
>> >
>> > Una reinstalación provocará el borrado de todos los datos alojados actualmente en el VPS (excepto los discos adicionales).
>>
>> > [!primary]
>> >
>> > Si ha contratado un VPS **Windows**, solo puede elegir un SO Windows para la reinstalación. Asimismo, si Windows no ha sido seleccionado durante el pedido, no podrá instalarse después de la entrega del VPS.
>>
>>
>> Una vez instalado el sistema, deberá implementar las actualizaciones de seguridad. Para más información, consulte [a continuación](#reinstallvps) y en nuestra guía [Proteger un VPS](/pages/bare_metal_cloud/virtual_private_servers/secure_your_vps).
>> 
> Zona / Localización
>>
>> Estas secciones proporcionan información sobre la localización de su VPS. Esto puede ser útil para identificar y evaluar los posibles impactos en su servicio, como los mencionados en los [informes de incidencias o de mantenimiento](https://bare-metal-servers.status-ovhcloud.com/).
>>

#### Su configuración

<iframe class="video" width="560" height="315" src="https://www.youtube-nocookie.com/embed/k6Cp1ZzfQvE?si=2HGd5uaerGvc4WLs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Haga clic en las fichas siguientes para ver los detalles de esta sección.

> [!tabs]
> Plantilla
>>
>> Este elemento indica la referencia comercial que identifica el modelo de VPS correspondiente a los [productos VPS en nuestro sitio web](/links/bare-metal/vps).
>>
> vCores / Memoria / Almacenamiento
>> 
>> Los recursos actuales de su VPS se muestran aquí y pueden actualizarse por separado haciendo clic en el botón correspondiente. Tenga en cuenta que las actualizaciones están limitadas por el modelo de VPS elegido y solo pueden estar disponibles pasando a una [gama superior](/links/bare-metal/vps).
>>
> Discos adicionales
>>
>> Añada discos adicionales a su VPS para aumentar la capacidad de almacenamiento de su servidor más allá de la incluida en la configuración inicial. Por ejemplo, puede almacenar datos de copia de seguridad.

#### IP

Haga clic en las fichas siguientes para ver los detalles de esta sección.

> [!tabs]
> IPv4
>>
>> La dirección IPv4 pública principal del VPS se configura automáticamente durante la instalación. Para más información sobre la gestión de las IP, consulte nuestra guía [Configuring IP aliasing](/pages/bare_metal_cloud/virtual_private_servers/configuring-ip-aliasing).
>>
> IPv6 / Gateway
>> 
>> Aquí puede ver la dirección IPv6 pública y la dirección de la puerta de enlace asociada. que se asocian automáticamente al VPS durante la instalación. Para más información, consulte [esta guía](/pages/bare_metal_cloud/virtual_private_servers/configure-ipv6).
>> 
> DNS secundario
>>
>> Esta funcionalidad es útil para alojar servicios DNS. La guía [Configurar el DNS secundario de OVHcloud en un VPS](/pages/bare_metal_cloud/virtual_private_servers/adding-secondary-dns-on-vps) explica en detalle este aspecto.

#### Backup

Estas opciones hacen referencia a servicios VPS adicionales que pueden solicitarse desde el área de cliente.

> [!tabs]
> Snapshot
>>
>> Un snapshot en un VPS es una copia de seguridad instantánea del estado del servidor, que permite restaurar rápidamente el sistema en caso de fallo. La opción `Snapshot` permite crear un snapshot manual como punto de restauración único.
>>
> Backup automatizado
>>
>> Automáticamente se crea una copia de seguridad diaria del sistema (excluyendo discos adicionales) y se conserva durante 24 horas (solo aplicable a los servicios contratados a partir del 7 de agosto de 2025). Al cambiar a la opción **Automatic Backup Premium**, dispondrá de las últimas 7 copias de seguridad diarias de su VPS para el montaje y la restauración.  
En comparación con las copias instantáneas manuales, esta función aumenta la seguridad de los datos al crear varios puntos de restauración a intervalos regulares.
>>

Para más información sobre las soluciones de backup disponibles para su servicio, consulte la [página del producto VPS](/links/bare-metal/vps-options) y nuestras [guías respectivas](/products/bare-metal-cloud-virtual-private-configuration-servers-backups).

#### Mi solución

En estas secciones se ofrece la información más importante sobre la facturación del servicio. Encontrará toda la información sobre este tema en la [documentación correspondiente](/products/account-and-service-management-managing-billing-payments-and-services).

<a name="hometab"></a>

### Funciones VPS disponibles en la pestaña «Inicio»

> [!warning]
>
> OVHcloud pone a su disposición servicios cuya configuración y gestión le incumben. Por lo tanto, es su responsabilidad asegurarse de que funcionen correctamente.
>
> Esta guía explica las tareas más habituales. No obstante, le recomendamos que contacte con un [proveedor de servicios especializado](/links/partner) o con [nuestra comunidad](/links/community) si tiene problemas o dudas sobre la administración, el uso o la implementación de servicios en un servidor.
>

#### Reinstalar su VPS <a name="reinstallvps"></a>

Las reinstalaciones pueden realizarse desde el área de cliente. Haga clic en `...`{.action} al lado de **OS / Distribución** y luego en `Reinstalar mi VPS`{.action}.

![Reinstall](/pages/assets/screens/control_panel/product-selection/bare-metal-cloud/vps/cp_reinst.png){.thumbnail}

En la nueva ventana, seleccione un sistema operativo de la lista desplegable. Las opciones ofrecidas son imágenes compatibles [con un VPS de OVHcloud](/pages/public_cloud/compute/image-life-cycle) y funcionan inmediatamente después de la instalación.

Si ha seleccionado un sistema operativo compatible, puede proporcionar una **clave pública** para su instalación automática. Puede elegir entre dos opciones:

- Copie manualmente la cadena de llave y péguela en el campo `Su llave SSH pública`.
- [Si previamente ha almacenado](/pages/bare_metal_cloud/dedicated_servers/import-keys-control-panel) una clave pública en su [área de cliente de OVHcloud](/links/manager), seleccione la clave deseada en el menú desplegable `Llave SSH a preinstalar`.

![VPSnewreinstallation](images/reinstall.png){.thumbnail}

Para más información, consulte nuestras guías:

- [Cómo crear y utilizar claves para la autenticación SSH](/pages/bare_metal_cloud/dedicated_servers/creating-ssh-keys-dedicated)
- [Cómo crear y utilizar claves para la autenticación SSH con PuTTY](/pages/web_cloud/web_hosting/ssh_using_putty_on_windows)

Si ha seleccionado una llave SSH y no necesita una contraseña para conectarse, active la opción `No quiero recibir por correo electrónico los códigos de autenticación de mi VPS`.

> [!warning]
>
> La reinstalación formateará todos los discos del servidor. Le recomendamos que cree un snapshot del VPS antes de continuar para poder volver al estado anterior en caso de incidencia.
>

> [!primary]
>
> **Licencias**
>
> Algunos sistemas operativos o plataformas propietarias, como Plesk o cPanel, requieren licencias que generan costes adicionales. Las licencias pueden administrarse desde el área de cliente. Acceda a la sección `Bare Metal Cloud`{.action} y, en la columna izquierda, haga clic en `Licencias`{.action}.
>
> Para tener un sistema operativo **Windows** que funcione en un VPS, es necesario **seleccionar en el proceso de pedido**. Un VPS con otro SO instalado no puede reinstalarse con Windows como se describe anteriormente.
>

El proceso de reinstalación puede tardar unos minutos.

#### Reiniciar su VPS <a name="reboot-current-range"></a>

Es posible que sea necesario reiniciar para aplicar configuraciones actualizadas o solucionar un problema. En la medida de lo posible, realice un reinicio por software desde la interfaz gráfica del servidor (Windows, Plesk, etc.) o desde la línea de comandos:

```bash
sudo reboot
```

No obstante, puede realizar un reinicio de hardware en cualquier momento desde el [área de cliente de OVHcloud](/links/manager). En la pestaña `Inicio`{.action} , haga clic en `...`{.action} junto a `Boot` en la sección **Su VPS**. Seleccione `Reiniciar mi VPS`{.action} y haga clic en `Aceptar`{.action} en la ventana que se abre.

![Reboot](/pages/assets/screens/control_panel/product-selection/bare-metal-cloud/vps/cp_reboot.png){.thumbnail}

<a name="connect"></a>

### Conectarse a su VPS

> [!warning]
>
> Por motivos de seguridad, la primera vez que se conecte a su VPS, deberá cambiar la contraseña recibida por correo electrónico por una nueva contraseña segura. Una vez realizado el cambio, es posible que la interfaz que utilice (Putty, por ejemplo) se cierre automáticamente para proceder a la desconexión. Vuelva a iniciar sesión con la nueva contraseña.
>

Al instalar por primera vez o al reinstalar desde el Panel de control, se crea automáticamente un usuario con permisos elevados. El nombre del usuario dependerá del sistema operativo, por ejemplo, «ubuntu» o «rocky».

Recibirá por correo electrónico el nombre de usuario y la contraseña necesarios para conectarse a su VPS por SSH. SSH es un protocolo de comunicación seguro que se utiliza para establecer conexiones cifradas con un host remoto.

La mayoría de los sistemas operativos de escritorio actuales tendrán un cliente **OpenSSH** instalado de forma nativa. Esto significa que sus claves de acceso le permiten establecer rápidamente una conexión con su VPS en la aplicación de línea de comandos adecuada (`Terminal`, `Command prompt`, `Powershell`, etc.). Introduzca el siguiente comando:

```bash
ssh username@IPv4_VPS
```

Por ejemplo:

```bash
ssh ubuntu@203.0.113.101
```

También puede utilizar cualquier aplicación de terceros compatible con **OpenSSH**.

<a name="linuxconnect"></a>

#### Distribución GNU/Linux

Una vez que se haya conectado, puede sustituir la contraseña predefinida del usuario actual por una frase de contraseña segura utilizando este comando:

```bash
passwd
```

En una distribución GNU/Linux, **una petición de contraseña no mostrará sus entradas de teclado**.

Escriba su contraseña actual y pulse `Enter`{.action}. Escriba la nueva frase de contraseña y vuelva a escribirla en el siguiente mensaje para confirmarla.

```console
Changing password for ubuntu.
Current password:
New password: 
Retype new password: 
passwd: password updated successfully
```

> [!warning]
> 
> **Activación de la cuenta de usuario root**
>
> No es necesario utilizar la cuenta de usuario root para iniciar la administración del servidor. Esta cuenta debe estar habilitada en el sistema operativo del servidor para poder usarla. Además, como medida de seguridad, las conexiones SSH con el usuario root están **desactivadas** por defecto.
> 
A menos que se indique lo contrario, todas las acciones de administración descritas en nuestra documentación pueden ser realizadas por la cuenta de usuario por defecto, es decir, escribiendo `sudo` seguido del pedido correspondiente. Para más información, consulte nuestra guía "[Configuración de las cuentas de usuario y del acceso root en un servidor](/pages/bare_metal_cloud/dedicated_servers/changing_root_password_linux_ds)".
>

**Le recomendamos que siga estos pasos**:

- Familiarícese con las conexiones SSH consultando nuestra guía [Introducción al SSH](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction).
- Utilice las llaves SSH como método avanzado y más práctico para las conexiones a distancia en nuestra guía [Crear y utilizar llaves SSH](/pages/bare_metal_cloud/dedicated_servers/creating-ssh-keys-dedicated).
- Utilice nuestra guía [Proteger un VPS](/pages/bare_metal_cloud/virtual_private_servers/secure_your_vps) para proteger su sistema contra ataques automatizados por *brute force* y otras amenazas habituales.

> [!primary]
>
Tenga en cuenta que si ha seleccionado una **distribución con aplicación** (Plesk, cPanel, Docker), es posible que las medidas de seguridad genéricas no se apliquen a su sistema. Consulte nuestras guías [Primeros pasos con las aplicaciones preinstaladas](/pages/bare_metal_cloud/virtual_private_servers/apps_first_steps) y [Desplegar cPanel en un VPS](/pages/bare_metal_cloud/virtual_private_servers/cpanel), así como la documentación oficial del editor correspondiente.
>

Si ha perdido la contraseña de usuario o root, consulte [esta guía](/pages/bare_metal_cloud/dedicated_servers/replacing-user-password) para obtener información sobre cómo restablecerla.

<a name="winconnect"></a>

#### VPS Windows

##### Paso 1: finalizar la instalación de Windows

Una vez instalado el sistema operativo Windows, recibirá un mensaje de correo electrónico con el nombre de cuenta del usuario predeterminado `Windows user`.

A continuación, deberá completar el proceso de instalación de Windows estableciendo el idioma para mostrar, la distribución del teclado y la contraseña de administrador.

En la consola VPS KVM, haga clic en el botón `...`{.action} al lado del nombre de su VPS en la sección [Su VPS](#yourvps) y seleccione `KVM`{.action}. Para más información sobre esta herramienta, consulte nuestra [guía KVM](/pages/bare_metal_cloud/virtual_private_servers/using_kvm_for_vps).

Para finalizar la configuración inicial de su VPS Windows, siga los pasos que se indican a continuación en las fichas:

> [!tabs]
> 1. **Configuración regional**
>>
>> Una vez establecida la sesión KVM, puede completar la configuración inicial de Windows configurando **país/región**, **idioma de Windows** preferido y **distribución de teclado**. Haga clic en el botón `Siguiente`{.action} situado en la esquina inferior derecha.<br><br>
>>![KVM](/pages/assets/screens/other/windows/windows_locale.png){.thumbnail}<br>
>>
> 2. **Contraseña de administrador**
>>
>> Establezca una contraseña para su cuenta Windows `Administrator` / `admin` y confírmela, luego haga clic en `Finalizar`{.action}.<br><br>
>>![KVM](/pages/assets/screens/other/windows/windows_admin.png){.thumbnail}<br>
>>
> 3. **Pantalla de conexión**
>>
>> Windows aplicará la configuración y mostrará la pantalla de inicio de sesión. Haga clic en el botón `Send CtrlAltDel`{.action} en la esquina superior derecha para conectarse.<br><br>
>>![KVM](/pages/assets/screens/other/windows/windows_vnc.png){.thumbnail}<br>
>>
> 4. **Usuario administrador**
>>
>> Introduzca la contraseña `Administrator` que creó en el paso anterior y haga clic en la `flecha`.<br><br>
>>![KVM](/pages/assets/screens/other/windows/windows_login.png){.thumbnail}<br>
>>

##### Paso 2: conectarse al servidor con RDP

En su dispositivo Windows local, puede usar la aplicación cliente `Remote Desktop Connection` para conectarse al VPS.

![Windows Remote](/pages/assets/screens/other/windows/windows_rdp.png){.thumbnail}

Introduzca la dirección IPv4 de su VPS, su identificador y su contraseña. Normalmente, aparece un mensaje de advertencia solicitándole que confirme la conexión debido a un certificado desconocido. Haga clic en `Sí`{.action} para conectarse.

También puede utilizar otra aplicación de terceros compatible con RDP. Este requisito es necesario si Windows no está instalado en el dispositivo local.

> [!primary]
>
Si tiene problemas con este procedimiento, compruebe que las conexiones remotas (RDP) están permitidas en su dispositivo comprobando la configuración del sistema, las reglas de firewall y las posibles restricciones de red.
>

##### Activación de los registros de arranque de Windows (opcional)

Los registros de inicio de Windows pueden ser útiles para los diagnósticos de errores del servidor.

Para activarlas, siga los pasos que se indican a continuación en las fichas:

> [!tabs]
> 1. **Conectarse al servidor**
>>
>> Conectarse al servidor a través de un escritorio remoto o una sesión [KVM](/pages/bare_metal_cloud/virtual_private_servers/using_kvm_for_vps).<br>
>>
> 2. **Abrir la utilidad "Run"**
>>
>> Abra el menú Inicio de Windows y haga clic en `Ejecutar`{.action}.<br><br>
>>![KVM](/pages/assets/screens/other/windows/windows_start_run.png){.thumbnail}<br>
>>
> 3. **Abrir "msconfig"**
>>
>> Escriba "msconfig" y haga clic en `OK`{.action}.<br><br>
>>![KVM](/pages/assets/screens/other/windows/windows_msconfig.png){.thumbnail}<br>
>>
> 4. **Activar los logs**
>>
>> En la nueva ventana, active la opción logs junto a `Boot log`. Haga clic en `OK`{.action}.<br><br>
>>![KVM](/pages/assets/screens/other/windows/windows_log.png){.thumbnail}<br>
>>

La próxima vez que inicie el servidor, los logs se guardarán en un archivo `.txt`. La ruta del archivo es: `C:\Windows\ntbtlog.txt`.

Para acceder al archivo de registro en modo de rescate, siga las instrucciones de la guía "[modo de rescate del VPS](/pages/bare_metal_cloud/virtual_private_servers/rescue)".

<a name="secure"></a>

### Proteger el VPS

Como administrador de su VPS, es responsable de la seguridad de las aplicaciones y los datos alojados en él.

Para más información sobre la protección de su sistema, consulte nuestra guía [Proteger un VPS](/pages/bare_metal_cloud/virtual_private_servers/secure_your_vps).

> [!primary]
>
Tenga en cuenta que si ha seleccionado una **distribución con aplicación** (Plesk, cPanel, Docker), es posible que las medidas de seguridad genéricas no se apliquen a su sistema. Consulte nuestras guías [Primeros pasos con las aplicaciones preinstaladas](/pages/bare_metal_cloud/virtual_private_servers/apps_first_steps) y [Desplegar cPanel en un VPS](/pages/bare_metal_cloud/virtual_private_servers/cpanel), así como la documentación oficial del editor correspondiente.
>

<a name="domain"></a>

### Asociar un dominio

Por lo general, la conexión de un VPS a internet requiere la asignación de un dominio y su configuración DNS. Si gestiona su dominio con OVHcloud, puede consultar nuestra guía [Editar una zona DNS de OVHcloud](/pages/web_cloud/domains/dns_zone_edit) para obtener instrucciones.

#### Proteger un dominio con un certificado SSL

Una vez configurado el VPS, puede proteger su dominio y su sitio web. Para ello, es necesario disponer de un certificado SSL, que permita el acceso a internet de su VPS a través de *HTTPS* en lugar de *HTTP* no seguro.

Puede instalar el certificado SSL directamente en el VPS. Consulte la documentación oficial de su distribución VPS.

Para un proceso más automatizado, OVHcloud también ofrece la solución SSL Gateway. Para más información, consulte la [página del producto](/links/web/ssl-gateway) o la [guía](/products/web-cloud-ssl-gateway).

## Más información

[FAQ VPS](/pages/bare_metal_cloud/virtual_private_servers/vps-faq)

[Introducción al SSH](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction)

[Proteger un VPS](/pages/bare_metal_cloud/virtual_private_servers/secure_your_vps)

[Cómo recuperar el acceso al servidor en caso de pérdida de la contraseña del usuario](/pages/bare_metal_cloud/dedicated_servers/replacing-user-password)

Interactúe con nuestra [comunidad de usuarios](/links/community).
