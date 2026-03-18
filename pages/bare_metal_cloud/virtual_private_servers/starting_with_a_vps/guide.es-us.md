---
title: Primeros pasos con un VPS
excerpt: "Descubra cómo gestionar un VPS en su área de cliente de OVHcloud y descubra los primeros pasos para su uso, incluyendo las conexiones remotas y las medidas de seguridad"
updated: 2026-01-21
---

## Objetivo

Un servidor privado virtual (VPS) es un servidor que administra completamente.

A diferencia de un alojamiento web gestionado, usted es responsable de los siguientes elementos:

- Configuración: gestionar y configurar su servidor.
- Seguridad: proteger su VPS contra ataques.
- Mantenimiento: mantener el servidor actualizado y operativo.
- Copias de seguridad: probar regularmente sus copias de seguridad para garantizar la restauración de los datos.

## Requisitos

- Tener una oferta [VPS](/links/bare-metal/vps) activa en su área de cliente de OVHcloud.

<!-- CP-NAV-START:baremetal-vps -->
---

### Acceso al área de cliente de OVHcloud

- **Enlace directo:** [VPS management](/links/control-panel/baremetal-vps)
- **Ruta de navegación:** `Bare Metal Cloud`{.action} > `Servidores privados virtuales`{.action} > Seleccione su VPS

---
<!-- CP-NAV-END:baremetal-vps -->

## Procedimiento

Para entender la interfaz de gestión de su VPS y las acciones disponibles en el área de cliente de OVHcloud, consulte nuestro [guía dedicada a la toma en mano del área de cliente de OVHcloud para los VPS](/pages/bare_metal_cloud/virtual_private_servers/understand-vps-control-panel).

**Índice:**

- [Paso 1: Conexión inicial](#initial-connection)
    - [Distribución GNU/Linux](#linuxconnect)
    - [Distribución Windows](#winconnect)
- [Paso 2: Uso de la cuenta root](#rootaccount)
- [Paso 3: Seguridad de su VPS](#secure)
- [Paso 4: Asociar un nombre de dominio](#domain)

### Paso 1: Conexión inicial <a name="initial-connection"></a>

#### Linux: <a name="linuxconnect"></a>

Cuando se conecta a su VPS por primera vez, tenga en cuenta que **la cuenta con la que se conecta no es root**.

En OVHcloud, por motivos de seguridad y para proteger los servicios de nuestros clientes, creamos automáticamente un **nombre de usuario vinculado al sistema operativo elegido** en el momento de su pedido.

El nombre de usuario exacto a utilizar para la conexión se indica claramente en su correo electrónico de entrega del VPS.

Por ejemplo:

- Para **Debian**, el nombre de usuario será **debian**.
- Para **Ubuntu**, el nombre de usuario será **ubuntu**.
- Para **Rocky Linux**, el nombre de usuario será **rocky**.

La contraseña temporal asociada a esta cuenta se le envía a través de un enlace seguro en su correo electrónico de entrega.

> [!primary]
> **Nota importante**: cuando realice su **primera conexión**, se le pedirá que **cambie esta contraseña temporal**.
>
> Una vez modificada la contraseña, **la sesión se cerrará automáticamente**. Este es un comportamiento normal. A continuación, deberá **volver a conectarse con su nueva contraseña**.

```bash
ssh username@IPv4_VPS
```

- Reemplace "username" por el usuario correspondiente a su sistema operativo.
- Reemplace "IPv4_de_votre_VPS" por la dirección IP indicada en el correo electrónico de entrega.

#### Windows: <a name="winconnect"></a>

##### Finalizar la instalación de Windows

Una vez instalado el sistema operativo Windows, recibirá un correo electrónico con el nombre de cuenta del usuario por defecto `Windows user`.

A continuación, deberá terminar el proceso de instalación de Windows estableciendo su idioma de visualización, su disposición del teclado y su contraseña de administrador.

Esto se realiza en la consola VPS KVM: en la pestaña `Inicio`{.action}, haga clic en el botón `...`{.action} junto al nombre de su VPS en la sección **Su VPS** y elija `KVM`{.action}.

Encuentre más información sobre esta herramienta en nuestro "[guía KVM](/pages/bare_metal_cloud/virtual_private_servers/using_kvm_for_vps)".

Para finalizar la configuración inicial de su VPS Windows, siga los pasos a continuación navegando por las pestañas:

> [!tabs]
> 1. **Configuración regional**
>>
>> Una vez establecida la sesión KVM, termine la configuración inicial de Windows configurando su **país/region**, el **idioma de Windows** preferido y su **disposición del teclado**. A continuación, haga clic en el botón `Siguiente`{.action} en la parte inferior derecha.
>>
>> ![KVM](/pages/assets/screens/other/windows/windows_locale.png){.thumbnail}
>>
> 2. **Contraseña de administrador**
>>
>> Establezca una contraseña para su cuenta Windows `Administrator`/`admin`, confírmela y haga clic en `Finalizar`{.action}.
>>
>> ![KVM](/pages/assets/screens/other/windows/windows_admin.png){.thumbnail}
>>
> 3. **Pantalla de inicio de sesión**
>>
>> Windows aplicará sus configuraciones y mostrará la pantalla de inicio de sesión. Haga clic en el botón `Send CtrlAltDel`{.action} en la parte superior derecha para iniciar sesión.
>>
>> ![KVM](/pages/assets/screens/other/windows/windows_vnc.png){.thumbnail}
>>
> 4. **Inicio de sesión de administrador**
>>
>> Introduzca la contraseña `Administrator` que creó en el paso anterior y haga clic en la `flecha`.
>>
>> ![KVM](/pages/assets/screens/other/windows/windows_login.png){.thumbnail}
>>

##### Conectarse al servidor con RDP

En su equipo Windows local, puede utilizar la aplicación cliente "Conexión a Escritorio Remoto" para conectarse al VPS.

![Windows remote](/pages/assets/screens/other/windows/windows_rdp.png){.thumbnail}

Introduzca la dirección IPv4 de su VPS, seguido de su identificador y contraseña. Normalmente, aparece un mensaje de advertencia, pidiéndole que confirme la conexión debido a un certificado desconocido. Haga clic en `Sí`{.action} para conectarse.

También puede utilizar otra aplicación de terceros compatible con RDP. Esta condición es necesaria si Windows no está instalado en su dispositivo local.

> [!primary]
>
Si tiene dificultades con este procedimiento, verifique que las conexiones remotas (RDP) estén permitidas en su dispositivo comprobando los ajustes del sistema, las reglas del firewall y las posibles restricciones de red.
>

Para facilitar el diagnóstico en caso de problema, le recomendamos **activar los registros de arranque de Windows** siguiendo nuestro [guía dedicada](/pages/bare_metal_cloud/virtual_private_servers/windows-boot-logs).

### Paso 2: Uso de la cuenta root (opcional pero recomendado) <a name="rootaccount"></a>

El usuario root está deshabilitado por defecto por motivos de seguridad de su producto.

Para las tareas de administración, utilice sudo desde su usuario principal:

```bash
sudo commande
```

Si desea activar root:

```bash
sudo passwd root
```

### Paso 3: Seguridad de su VPS <a name="secure"></a>

Si desea asegurar su VPS, le invitamos a seguir nuestro guía "[Seguridad de un VPS](/pages/bare_metal_cloud/virtual_private_servers/secure_your_vps)". Este guía le guía paso a paso y detalla especialmente las siguientes acciones:

- Actualizar el sistema.
- Modificar el puerto de escucha SSH por defecto.
- Configurar el firewall interno.
- Instalar fail2ban para bloquear intentos de conexión repetidos.
- Realizar copias de seguridad de su sistema y datos.

### Paso 4: Asociar un nombre de dominio (opcional pero recomendado) <a name="domain"></a>

La puesta en marcha de su VPS pasa generalmente por el uso y la configuración de un nombre de dominio. 

Para ello, le recomendamos realizar las siguientes acciones:

- [Editar la zona DNS](/pages/web_cloud/domains/dns_zone_edit) añadiendo las entradas necesarias para que el dominio apunte a la dirección IPv4 de su VPS.
- [Activar un certificado SSL gratuito (Let's Encrypt)](/pages/bare_metal_cloud/virtual_private_servers/install-ssl-certificate) para asegurar el acceso a sus sitios web a través de HTTPS.

## Más información

[VPS FAQ](/pages/bare_metal_cloud/virtual_private_servers/vps-faq)

[Introducción al SSH](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction)

[Seguridad de un VPS](/pages/bare_metal_cloud/virtual_private_servers/secure_your_vps)

[¿Cómo recuperar el acceso al servidor en caso de pérdida de la contraseña del usuario?](/pages/bare_metal_cloud/dedicated_servers/replacing-user-password)

Interactúe con nuestra [comunidad de usuarios](/links/community).