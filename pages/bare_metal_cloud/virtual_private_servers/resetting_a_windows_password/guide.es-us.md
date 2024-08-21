---
title: Cambiar la contraseña de administrador en un servidor Windows
excerpt: "Cómo restaurar la contraseña de la cuenta de administrador de Windows en un VPS o una instancia de Public Cloud utilizando el modo de rescate de OVHcloud"
updated: 2023-10-12
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
> 

## Objetivo

Al instalar o reinstalar un sistema operativo Windows Server, se le proporciona una contraseña de administrador (cuenta *Administrator*).

Si ha perdido su contraseña de administrador, puede restablecerla utilizando el modo de rescate de OVHcloud.

**Esta guía explica cómo restaurar la contraseña de la cuenta de administrador de un sistema operativo Windows Server mediante el modo de rescate de OVHcloud.**

## Requisitos

- Tener un [VPS](https://www.ovhcloud.com/es/vps/) o una [instancia de Public Cloud](https://www.ovhcloud.com/es/public-cloud/) en su cuenta de OVHcloud
- Haber iniciado sesión en el [área de cliente de OVHcloud](/links/manager).

## Procedimiento

### Paso 1: Reiniciar el servidor en modo de rescate

El modo de rescate debe estar activado para poder cambiar la contraseña de administrador.

Consulte la guía correspondiente al servicio para reiniciarlo en modo de rescate:

- [VPS](/pages/bare_metal_cloud/virtual_private_servers/rescue)
- [Instancia Public Cloud](/pages/public_cloud/compute/put_an_instance_in_rescue_mode)

### Paso 2: Montar la partición del sistema

Conéctese al servidor por SSH. (Consulte nuestra [guía de introducción SSH](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction) si es necesario.)

También puede abrir una conexión al servidor utilizando [KVM (VPS)](/pages/bare_metal_cloud/virtual_private_servers/using_kvm_for_vps) o la [consola VNC (instancia de Public Cloud)](/pages/public_cloud/compute/first_steps_with_public_cloud_instance#accessvnc).

Escriba los siguientes comandos para montar el sistema de archivos de Windows:

```bash
ntfsfix /dev/sdb2
```

```bash
mount -t ntfs-3g /dev/sdb2 /mnt
```

### Paso 3: Borrar la contraseña actual

En este paso, el archivo *SAM* se edita con una herramienta en modo de rescate. Enumere los usuarios de Windows con este comando:

```bash
chntpw -l /mnt/Windows/System32/config/SAM
```

```text
| RID -|---------- Username ------------| Admin? |- Lock? --|
| 01f4 | Administrator                  | ADMIN  | dis/lock |
| 01f7 | DefaultAccount                 |        | dis/lock |
| 01f5 | Guest                          |        | dis/lock |
| 01f8 | WDAGUtilityAccount             |        | dis/lock |
```

En este resultado de ejemplo, `Administrator` es la cuenta de administrador local. Inicie el procedimiento de restablecimiento con el siguiente comando. (Utilice `admin` si `Administrator` no existe.)

```bash
chntpw -u Administrator /mnt/Windows/System32/config/SAM
```

```text
RID     : 0500 [01f4]
Username: Administrator
fullname:
comment : Built-in account for administering the computer/domain
homedir :

00000220 = Administrators (which has 1 members)

Account bits: 0x0010 =
[ ] Disabled        | [ ] Homedir req.    | [ ] Passwd not req. |
[ ] Temp. duplicate | [X] Normal account  | [ ] NMS account     |
[ ] Domain trust ac | [ ] Wks trust act.  | [ ] Srv trust act   |
[ ] Pwd don't expir | [ ] Auto lockout    | [ ] (unknown 0x08)  |
[ ] (unknown 0x10)  | [ ] (unknown 0x20)  | [ ] (unknown 0x40)  |

Failed login count: 47034, while max tries is: 0
Total  login count: 5

- - - - User Edit Menu:
 1 - Clear (blank) user password
 2 - Unlock and enable user account [probably locked now]
 3 - Promote user (make user an administrator)
 4 - Add user to a group
 5 - Remove user from a group
 q - Quit editing user, back to user select
Select: [q] >
```

Escriba "1" y presione "Entrar". (Use primero la opción 2 si hay una "X" junto a "Deshabilitado".)

```text
Select: [q] > 1
Password cleared!
```

Escriba "q" y presione "Entrar" para salir de la herramienta. Escriba "y" cuando se le pida y presione "Entrar".

```text
Select: [q] > q
 
Hives that have changed:
 #  Name
 0  </mnt/Windows/System32/config/SAM>
Write hive files? (y/n) [n] : y
 0  </mnt/Windows/System32/config/SAM> - OK
```

### Paso 4: Reiniciar el servidor

Ya puede salir del modo de rescate y reiniciar el servidor. Si lo necesita, puede consultar la guía relativa al servicio:

- [VPS](/pages/bare_metal_cloud/virtual_private_servers/rescue)
- [Instancia Public Cloud](/pages/public_cloud/compute/put_an_instance_in_rescue_mode)

### Paso 5: Establecer una nueva contraseña (KVM / VNC)

> [!warning]
>
> No omita este paso. Una cuenta de administrador no protegida supone un riesgo de seguridad importante.
>

Conéctese al servidor e introduzca `cmd` en la barra de búsqueda para abrir el símbolo del sistema.

Establezca la contraseña del usuario actual ("Administrator"):

```powershell
net user Administrator *
```

![administratorpw](images/adminpw_win.png){.thumbnail}

Ahora puede iniciar sesión como «Administrator» con la nueva contraseña.

## Más información

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
