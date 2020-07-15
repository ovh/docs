---
title: Introducción al SSH
slug: introduccion-ssh
excerpt: Cómo utilizar el servicio SSH para acceder a un servidor
section: SSH y llave SSH
order: 1
---

**Última actualización: 18/01/2018**

## Objetivo

El servicio SSH (Secure Shell), que está instalado en todas las máquinas, permite conectarse a la máquina de manera segura y tener un control total sobre ella.

**Esta guía explica cómo utilizar el servicio SSH para acceder a un servidor.**

## Requisitos

- Tener un servicio de OVHcloud en el que el protocolo de comunicación SSH esté instalado de forma nativa: VPS, servidor dedicado o instancia de Public Cloud. 


## Procedimiento

### Programas compatibles

Existen varios programas que permiten conectarse a través de SSH. A continuación indicamos algunos de ellos.

#### En Windows

- [Putty](http://www.putty.org/){.external} (gratuito)
- [MobaXterm](https://mobaxterm.mobatek.net/){.external} (versión gratuita y de pago)
- [SecureCRT](http://www.vandyke.com/products/securecrt/){.external} (de pago)

A partir de las últimas versiones de Windows 10 y de Windows Server, el modo de programador permite acceder a una consola Bash. Si desea más información, consulte la documentación oficial de Microsoft: <https://docs.microsoft.com/es-es/windows/wsl/install-win10>.

#### En Mac

- La herramienta **Terminal** está incluida de serie en Mac OS X y viene instalada por defecto en la máquina.


#### En Linux

- Las herramientas **Console** o **Terminal** vienen instaladas de forma nativa y pueden utilizarse para conectarse.
- Para trabajar en varias pestañas simultáneamente, puede instalar el paquete **Terminator**. Encontrará más información en la siguiente página: <https://gnometerminator.blogspot.com.es/p/introduction.html>.
- [OpenSSH](http://www.openssh.com){.external} (gratuito)


### Pasos para conectarse por SSH

#### 1. Primera conexión

Para conectarse a la máquina por SSH, es necesario disponer de la siguiente información:

- IPv4 o nombre de la máquina
- contraseña *root* de la máquina (se le enviará por correo electrónico en el momento de la instalación)


Para conectarse, utilice el siguiente comando:

```sh
ssh root@IP_del_servidor
```

Como alternativa, también puede utilizar este comando:

```sh
ssh root@nombre_del_servidor
```

Recibirá la siguiente respuesta:

```sh
The authenticity of host servername (IP_del_servidor) cant be established.
RSA key fingerprint is a9:bb:55:35:86:xx:xx:00:xx:00:2b:2c:79:10:96:3c.
Are you sure you want to continue connecting (yes/no)? YES
Warning: Permanently added servername,IP_del_servidor (RSA) to the list of known hosts.
Password:
root@vps12345:~#
```

La primera vez que se conecte, el cliente SSH recibirá una huella de llave RSA, que es la huella digital del servidor al que se está conectando. Dicha huella se comprueba en cada conexión sucesiva. Si esta cambia, recibirá una alerta, ya que esto significa que algo ha cambiado:

- o bien la máquina ha sido reinstalada, 
- o el servidor SSH ha sido reinstalado, 
- o usted se está conectando a otra máquina.

Así pues, al conectarse por primera vez deberá aceptar la huella, que el cliente SSH guardará en su equipo.


#### 2. Manual de ayuda

En las distribuciones Linux, puede consultar un manual en el que se describen todas los comandos posibles, así como sus argumentos.

```sh
man bash
```

#### 3. Actualización

La versión de su cliente SSH siempre debe ser la misma que la de su distribución. Puede comprobarlo introduciendo el siguiente comando: 

```sh
ssh -V
```

En caso de duda, consulte la documentación del cliente SSH que utilice. 


## Más información

Interactúe con nuestra comunidad de usuarios en [htps://community.ovh.com](https://community.ovh.com/){.external}.
