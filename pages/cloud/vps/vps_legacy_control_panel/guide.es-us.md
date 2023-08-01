---
title: Gestionar un VPS Legacy
excerpt: Cómo administrar un VPS de una antigua gama desde el área de cliente de OVHcloud
updated: 2023-06-29
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
> 

## Objetivo

Puede identificar si un VPS procede de una antigua gama gracias al nombre de referencia que aparece en el [área de cliente de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws): si dicha referencia interna está en formato *vpsXXXX.ovh.net* (donde *X* representa un número) y no ha migrado el VPS correspondiente a [nuestra gama actual de productos](https://www.ovhcloud.com/es/vps/), se trata de un VPS *legacy*. 

La referencia de un VPS de gama actual se presenta de esta manera: *vps-XXXXXXX.vps.ovh.net* (donde *X* puede ser una cifra o una letra).

Un VPS *legacy* implica algunas diferencias en términos de gestión.

**Esta guía explica las funcionalidades del área de cliente de OVHcloud dedicadas a la gestión de un VPS *legacy*.**

## Requisitos

- Un [VPS *legacy*](https://www.ovhcloud.com/es/vps/) en su cuenta de OVHcloud
- Haber iniciado sesión en el [área de cliente de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws).

## Procedimiento

Conéctese al [área de cliente de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws), abra la pestaña `Bare Metal Cloud`{.action} y seleccione su servidor entre los `servidores privados virtuales`{.action}.

En la pestaña `Inicio`{.action} puede acceder a las operaciones principales del VPS desde la sección **Atajos**.

![controlpanel](images/legacy_vps_1.png){.thumbnail}

### Eliminar mi VPS

Esta opción abrirá una ventana emergente para iniciar el proceso de [baja del servicio](/pages/account/billing/how_to_cancel_services).

### Reiniciar en modo de rescate

Haga clic en esta opción para reiniciar el VPS en modo de rescate. Para más información, consulte [nuestra guía](/pages/cloud/vps/rescue).

### Reiniciar mi VPS

Esta opción del área de cliente realizará un *hard reboot* de su VPS si hace clic en `Confirmar`{.action} en la ventana que aparece.

Puede que sea necesario reiniciar para aplicar actualizaciones de configuración o solucionar un problema. En su lugar, realice un *soft reboot* en línea de comandos:

```bash
sudo reboot
```

### Reinstalar mi VPS

Haga clic aquí para instalar un nuevo sistema operativo. Se abrirá una ventana en la que deberá elegir:

- un sistema operativo de los que ofrecemos.
- el idioma;
- una [llave SSH](/pages/cloud/dedicated/creating-ssh-keys-dedicated) (opcional)

Es posible que el servicio tenga limitadas las opciones de sistemas operativos.

> [!primary]
>
> Algunos sistemas operativos propietarios o plataformas como Plesk o cPanel requieren licencias que generan costes adicionales. Las licencias pueden gestionarse desde el área de cliente. Acceda a la sección `Bare Metal Cloud`{.action} y abra `Licencias`{.action}.

Recibirá un mensaje de correo electrónico cuando la instalación haya finalizado. Este proceso puede tardar hasta 30 minutos.

#### Conexión a su VPS tras la reinstalación

Al reinstalar su VPS, le enviaremos por correo electrónico la contraseña root para conectarse a su VPS por [SSH](/pages/cloud/dedicated/ssh_introduction), a menos que haya seleccionado una [llave SSH](/pages/cloud/dedicated/creating-ssh-keys-dedicated) para preinstalar.

#### Desactivación del acceso al servidor para el usuario root

El usuario **root** se crea por defecto en los sistemas GNU/Linux. Es el nivel más alto de acceso a un sistema operativo. Dejar el VPS accesible a través del usuario root y su contraseña puede ser peligroso, ya que esta cuenta puede realizar operaciones irreversibles.

Es posible desactivar las conexiones de usuarios root a través del protocolo SSH. No olvide [crear otro usuario](/pages/cloud/vps/secure_your_vps#createuser) antes de seguir los pasos que se indican a continuación.

Utilice un editor de texto como *vim* o *nano* para editar este archivo de configuración:

```bash
sudo nano /etc/ssh/sshd_config
```

Localice la siguiente línea:

```console
PermitRootLogin yes 
```

Cambie **yes** a **no** después de `PermitRootLogin`. Guarde y salga del editor.

Para que este cambio tenga efecto, debe reiniciar el servicio SSH con uno de los siguientes comandos:

```bash
sudo systemctl restart ssh
```

```bash
sudo systemctl restart sshd
```

Esto debería ser suficiente para aplicar los cambios. En caso contrario, reinicie el VPS (`~$ sudo reboot`).

A continuación, se rechazarán las conexiones al servidor a través del usuario root (`ssh root@IPv4_VPS`).

### KVM

Utilice esta opción para conectarse a su VPS a través de KVM. Para más información, consulte [nuestra guía](/pages/cloud/vps/using_kvm_for_vps).

### Cambiar el propietario

Este enlace le dirige al formulario que deberá rellenar en caso de cambio de propietario de un VPS. Si necesita ayuda para realizar este procedimiento, puede ponerse en contacto con nuestro equipo de soporte creando un tíquet en el [área de cliente de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws).

### Migrar a la nueva gama

Su VPS puede migrarse automáticamente a la gama actual. Descubra las ventajas de esta oferta en [nuestras FAQ dedicadas a la migración de VPS](https://www.ovhcloud.com/es/vps/vps-offer-migration/).

## Más información

[Introducción al SSH](/pages/cloud/dedicated/ssh_introduction)

[Creación y uso de llaves SSH](/pages/cloud/dedicated/creating-ssh-keys-dedicated)

[Proteger un VPS](/pages/cloud/vps/secure_your_vps)

[Configurar una nueva instalación de Windows Server](/pages/cloud/vps/windows_first_config)

[Primeros pasos con un VPS](/pages/cloud/vps/starting_with_a_vps)

Únase a nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
