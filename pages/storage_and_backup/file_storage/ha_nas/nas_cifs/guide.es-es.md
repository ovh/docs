---
title: Montar un NAS-HA a través de un recurso compartido CIFS
excerpt: Configurar y montar un NAS-HA mediante el protocolo CIFS
updated: 2025-10-23
---

## Objetivo

**Descubra cómo configurar y montar su espacio de almacenamiento NAS-HA OVHcloud mediante el protocolo CIFS.**

## Requisitos

- Un [servidor dedicado](/links/bare-metal/bare-metal) **o** un [VPS](/links/bare-metal/vps) **o** una [instancia de Public Cloud](/links/public-cloud/public-cloud).
- Una oferta [NAS-HA](/links/storage/nas-ha).

## Procedimiento

### Configuración para Microsoft Windows

- **Windows Server 2008**: haga clic en el menú `Start`{.action} > `All the programs`{.action} > `Accesories`{.action} > `Command prompt`{.action}.
- **Windows Server 2012**: haga clic en el icono `Windows PowerShell`{.action} en la barra de tareas.
- **Windows Server 2016/2019/2022/2025**: haga clic en el menú `Start`{.action} y seleccione el icono de `Windows PowerShell`{.action}.

Ejecute el siguiente comando:

```bash
net use z: \\CIFS_SERVER_IP\CIFS_PATH
```

#### Ejemplo

- Montaje CIFS para un NAS-HA:

```bash
net use z: \\10.16.101.8\zpool-000206_PARTITION_NAME_1
```

> [!alert]
>
> El usuario SMB/CIFS es `nobody`, cualquier cambio de permisos efectuado por este usuario puede generar conflictos con los permisos NFS existentes.
>

Pueden aparecer los siguientes mensajes de error:


```console
System error 1272 has occurred.

You can't access this shared folder because your organization's security policies block unauthenticated guest access. These policies help protect your PC from unsafe or malicious devices on the network.
```

```console
System error 3227320323 has occurred.
```

> [!primary]
>
> Para corregir estos errores, consulte la documentación oficial de Microsoft:<br>
> [Cómo habilitar inicios de sesión de invitado no seguros en SMB2 y SMB3](https://learn.microsoft.com/es-es/windows-server/storage/file-server/enable-insecure-guest-logons-smb2-and-smb3?tabs=powershell).<br>
> [Control del comportamiento de la firma SMB](https://learn.microsoft.com/es-es/windows-server/storage/file-server/smb-signing?tabs=powershell).

### Configuración para Linux

Conéctese a su servidor a través de SSH y escriba el siguiente comando:

```sh
mount -t cifs -o uid=root,gid=100,dir_mode=0700,username=root,password= //IP_SERVEUR_CIFS/CHEMIN_CIFS /mnt/FolderMount
```

> [!warning]
>
> Para montar recursos compartidos por nombre de host (en lugar de por direcciones IP), se necesita la utilidad `mount.cifs`. Suele formar parte del paquete `cifs-utils`.
>
> `mount.cifs` es un envoltorio que resuelve los nombres de host y añade el parámetro `ip=` a los parámetros de montaje transmitidos al núcleo.
> 
> Sin `mount.cifs`, los intentos de montaje por nombre de host darán lugar al siguiente error:
>
> ```text
> mount: /mnt/FolderMount: mount(2) system call failed: No route to host.
>        dmesg(1) may have more information after failed mount system call.
> ```
>

## Más información

[Preguntas frecuentes sobre los NAS](/pages/storage_and_backup/file_storage/ha_nas/nas_faq)

Si necesita formación o asistencia técnica para implantar nuestras soluciones, póngase en contacto con su representante de ventas o haga clic en [este enlace](/links/professional-services) para obtener un presupuesto y solicitar un análisis personalizado de su proyecto a nuestros expertos del equipo de Servicios Profesionales.

Interactúe con nuestra [comunidad de usuarios](/links/community).