---
title: "Enterprise File Storage - consideraciones del cliente NFS"
excerpt: "Parámetros específicos para comprobar y/o implementar para la solución Enterprise File Storage"
updated: 2024-10-10
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón "Contribuir" de esta página.
>

## Objetivo

**Descubra cómo permitir el acceso de lectura-escritura a su Enterprise File Storage desde algunos clientes NFS.**

## Requerimientos

- [Una solución Enterprise File Storage](/links/storage/enterprise-file-storage)

## Instrucciones

### Clientes NFS de Microsoft Windows

### Asegúrese de que el usuario de Windows que se utiliza para acceder a su Enterprise File Storage dispone de los permisos necesarios

En efecto, el par UID/GID debe configurarse en 0 (derecho unix root).

De lo contrario, se producirán errores de acceso a Enterprise File Storage porque, cuando se permite NFS en una máquina Windows, se crea un usuario UNIX con el UID y el GID predeterminados en -2 (o 4294967294).

Como solución alternativa, el UID y el GID pueden verse obligados a 0 en la máquina Windows que accede a su Enterprise File Storage.

- Inicie el Editor del Registro en el equipo cliente.
- Localice `HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\ClientForNFS\CurrentVersion\Default`.
- Cree dos valores DWORD, AnonymousUid y AnonymousGid.
- Establezca estos valores en el UID y el GID en 0.
- Reinicie el servicio NFS en el equipo cliente.

> [!primary]
>
> **Documentación de referencia:**
>
> - <https://techcommunity.microsoft.com/t5/running-sap-applications-on-the/installation-configuration-of-windows-nfs-client-to-enable/ba-p/367084>
> - <https://learn.microsoft.com/en-gb/archive/blogs/msdn/sfu/can-i-set-up-user-name-mapping-in-windows-vista>
> - <https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-server-2008-R2-and-2008/cc753302(v=ws.10)?redirectedfrom=MSDN>
> - <https://kb.netapp.com/on-prem/ontap/da/NAS/NAS-KBs/Unable_to_perform_write_operations_on_an_export_mounted_on_a_Windows_machine>

#### Permite conexiones de invitado no seguras para los protocolos SMB2 y SMB3

Es posible que necesite habilitar las conexiones de invitado para tener acceso a Enterprise File Storage, ya que no proporciona una cuenta de usuario, sino sólo acceso de invitado.

A continuación se explica cómo modificar la directiva de seguridad en consecuencia:

- Ejecute el comando `gpedit.msc` en el símbolo del sistema y seleccione `Edit group policy`.
- En el panel izquierdo, en `Local Computer Policy`, vaya a `Computer Configuration\Administrative Templates\Network\Lanman Workstation`.
- Abra `Enable insecure guest logons`, seleccione `Enabled` y seleccione  `OK`.

> [!primary]
>
> **Documentación de referencia:**
>
> - <https://learn.microsoft.com/en-us/windows-server/storage/file-server/enable-insecure-guest-logons-smb2-and-smb3?tabs=group-policy>

#### Solicite la activación de la funcionalidad "showmount" al soporte de OVHcloud

Por motivos de seguridad, la opción "showmount" para mostrar los recursos compartidos disponibles en un servidor NFS está desactivada por defecto.
No obstante, si se producen errores de tipo "invalid device error" durante determinadas operaciones de escritura, o si utiliza una aplicación que debe utilizar esta función de forma absoluta, abra un [tíquet de soporte de OVHcloud](https://help.ovhcloud.com/csm?id=csm_get_help) para solicitar la activación excepcional de la función.

> [!primary]
>
> **Documentación de referencia:**
>
> - <https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/showmount>

## Más información

Si necesita formación o asistencia técnica para implantar nuestras soluciones, póngase en contacto con su representante de ventas o haga clic en [este enlace](/links/professional-services) para obtener un presupuesto y solicitar un análisis personalizado de su proyecto a nuestros expertos del equipo de Servicios Profesionales.

Interactúe con nuestra [comunidad de usuarios](/links/community).