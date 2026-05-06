---
title: "VPS - Activar los registros de inicio de Windows"
excerpt: "Descubra cómo activar los registros de inicio de Windows para facilitar el diagnóstico y la resolución de problemas de inicio de su VPS"
updated: 2026-01-21
---

## Objetivo

Los registros de inicio de Windows permiten identificar los controladores y servicios cargados durante el inicio del sistema.  
Son especialmente útiles para el **diagnóstico de problemas de inicio**, de **pantallas azules** o de **bloqueos del sistema**.

**Este tutorial le explica cómo activar los registros de inicio en un servidor Windows para facilitar el análisis y la resolución de problemas de su VPS.**

## Requisitos

- Tener una oferta [VPS](/links/bare-metal/vps) activa en su área de cliente de OVHcloud.

## Procedimiento

### Activación de los registros de inicio de Windows

Los registros de inicio de Windows pueden ser útiles para diagnosticar errores del servidor.

Para activarlos, siga los pasos que se indican a continuación navegando por las pestañas:

> [!tabs]
> 1. **Conectarse al servidor**
>>
>> Conéctese a su servidor a través de un escritorio remoto o una [sesión KVM](/pages/bare_metal_cloud/virtual_private_servers/using_kvm_for_vps).
>>
> 2. **Abrir la utilidad "Ejecutar"**
>>
>> Abra el menú `Inicio` de Windows y haga clic en `Ejecutar`{.action}.
>>
>> ![KVM](/pages/assets/screens/other/windows/windows_start_run.png){.thumbnail}
>>
> 3. **Abrir `msconfig`**
>>
>> Escriba `msconfig` y haga clic en `Aceptar`{.action}.
>>
>> ![KVM](/pages/assets/screens/other/windows/windows_msconfig.png){.thumbnail}
>>
> 4. **Activar los registros**
>>
>> En la nueva ventana, active la opción de registros junto a `Boot log`. A continuación, haga clic en `Aceptar`{.action}.
>>
>> ![KVM](/pages/assets/screens/other/windows/windows_log.png){.thumbnail}
>>

Al siguiente inicio de su servidor, los registros se guardarán en un archivo `.txt`. La ruta de acceso al archivo es: `C:\Windows\ntbtlog.txt`.

Para acceder al archivo de registro en modo rescue, siga las instrucciones del tutorial "[Activar y utilizar el modo de rescate en un VPS](/pages/bare_metal_cloud/virtual_private_servers/rescue)".

## Más información

[Cambiar la contraseña de administrador en un servidor Windows](/pages/bare_metal_cloud/virtual_private_servers/resetting_a_windows_password)

[Preguntas frecuentes sobre VPS](/pages/bare_metal_cloud/virtual_private_servers/vps-faq)

[Introducción al SSH](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction)

[Seguridad de un VPS](/pages/bare_metal_cloud/virtual_private_servers/secure_your_vps)

[¿Cómo recuperar el acceso al servidor en caso de pérdida de la contraseña del usuario?](/pages/bare_metal_cloud/dedicated_servers/replacing-user-password)

Interactúe con nuestra [comunidad de usuarios](/links/community).