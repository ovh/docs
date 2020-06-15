---
title: 'Primeros pasos con un VPS'
slug: primeros-pasos-con-vps
excerpt: 'Cómo utilizar un VPS'
section: 'Primeros pasos'
order: 1
---

**Última actualización: 08/06/2020**
 
## Objetivo

Un servidor virtual privado (VPS, por sus siglas en inglés) es un servidor dedicado virtualizado. A diferencia de un alojamiento web (compartido), cuya gestión técnica recae en OVHcloud, usted es el único responsable de la administración de su VPS.

**Esta guía ofrece algunos consejos para que pueda empezar a utilizar su VPS recién entregado e instalado.**


> [!warning]
>
> La responsabilidad sobre las máquinas que OVHcloud pone a su disposición recae íntegramente en usted. Nuestros técnicos no son los administradores de las máquinas, ya que no tienen acceso a ellas. Por lo tanto, la gestión del software y la seguridad le corresponde a usted. Esta guía le ayudará a realizar las operaciones más comunes en su VPS. 
>
> No obstante, si tiene problemas o dudas sobre la administración, la utilización o la seguridad de su servidor, le recomendamos que contacte con un proveedor de servicios especializado. Para más información, consulte el apartado «Más información» de esta guía.
> 


## Requisitos

- Haber contratado un VPS en el [sitio web de OVHcloud](https://www.ovhcloud.com/es/vps/){.external}.
- Haber iniciado sesión en el [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}.
- Haber recibido el correo electrónico con sus datos de acceso tras la instalación


## Procedimiento

Conéctese al [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}, acceda a la sección `Servidores`{.action} y seleccione su servidor de la lista de navegación de la izquierda debajo de `VPS`{.action}. 

El panel de control que aparece le muestra toda la información importante sobre su servicio y le permite llevar a cabo las operaciones básicas. La apariencia puede variar según la gama de su VPS. 

- Si acaba de contratar un VPS, la referencia seguirá esta nomenclatura: *vps-XXXXXXX.vps.ovh.net* (donde las *X* representan una secuencia de números y letras). 
- Si tiene un VPS más antiguo, verá que la referencia tiene una estructura diferente: *vpsXXXX.ovh.net* (donde las *X* representan un número). 

Para la gama actual de VPS, lea detenidamente la sección siguiente de esta guía, **Primeros pasos (gama actual de VPS)**. 

Para un modelo de VPS más antiguo, siga leyendo esta guía haciendo clic en el enlace siguiente: [Primeros pasos (antigua gama de VPS)](./#primeros-pasos-antigua-gama-de-vps_1).

### Primeros pasos (gama actual de VPS):

#### Conectarse a su VPS (gama actual)

Al instalar el VPS por primera vez o reinstalarlo desde el área de cliente, se creará un usuario con todos los derechos y recibirá un correo electrónico con los datos de acceso.
El nombre de usuario se generará en función del sistema operativo, por ejemplo, «ubuntu» o «debian». 

Puede conectarse a su VPS por SSH con el nombre de usuario y la contraseña. SSH es un protocolo de comunicaciones seguras. Para más información, consulte [esta guía de introducción al SSH para servidores dedicados OVHcloud](../../dedicated/introduccion-ssh/). Puede acceder al servidor a través de un terminal de línea de comandos (en Linux o Mac) o utilizando un software de terceros en Windows (le recomendamos PuTTy).

Si utiliza PuTTy, tan solo tiene que abrir la aplicación e introducir el nombre del servidor o la dirección IPv4 para establecer la conexión. Tendrá que introducir el nombre de usuario y la contraseña, y a continuación podrá acceder a la interfaz de línea de comandos (CLI).

![Uso de putty](images/putty1.png){.thumbnail}

Una vez abierto el terminal, introduzca el comando siguiente para conectarse a su VPS con los datos de conexión proporcionados en el correo electrónico (nombre de usuario y dirección IPv4):

```sh
ssh nombre_de_usuario@IPv4_de_su_VPS
```

Al estar conectado con privilegios root (un usuario sudo), puede introducir comandos para realizar tareas administrativas. Le recomendamos que primero cambie su contraseña:

```sh
~$ sudo passwd
New password:
Retype new password:
passwd: password updated successfully
```

Tenga en cuenta que no se muestran las contraseñas. Cambie al usuario «root» y establezca su contraseña admin:

```sh
$ sudo su -
# passwd
New password:
Retype new password:
passwd: password updated successfully
```

#### Instalar o reinstalar su VPS (gama actual)

Puede realizar cualquier reinstalación directamente desde el área de cliente de OVHcloud. En la pestaña «Inicio», busque «SO / Distribución» en la sección **Su VPS**. Haga clic en `...`{.action}, y en `Reinstalar mi VPS`{.action}.

![Reinstalación del VPS](images/2020panel_02.png){.thumbnail}

Se abrirá una ventana donde tendrá que elegir:

- la distribución;
- una llave SSH, si ya ha creado alguna desde el área de cliente.

![Reinstalación del VPS](images/2020panel_01.png){.thumbnail}

> [!primary]
>
> Para algunas distribuciones, como Plesk o Windows, es necesario disponer previamente de una licencia, que se puede adquirir, o bien directamente en OVHcloud, o bien a través de un revendedor. A continuación, tendrá que integrarla de forma manual o desde el área de cliente. Puede gestionar sus licencias en la sección `Servidores`{.action}, seleccionando `Licencias`{.action} en la columna izquierda.
En esta misma pantalla puede también contratar licencias (utilizando el botón `Contratar`{.action}) o añadir su propia licencia SPLA de Windows o de SQL Server (con el botón `Añadir una licencia SPLA`{.action}).
> 

En el área de cliente se mostrará una barra de progreso indicando el estado de la tarea de reinstalación, que puede tardar hasta 30 minutos:

### Primeros pasos (antigua gama de VPS)

#### Conectarse a su VPS (antigua gama)

Al instalar (o reinstalar) su VPS, se le enviará un correo electrónico con una contraseña de acceso root, la conexión que utiliza el protocolo SSH. SSH es un protocolo de comunicaciones seguras. Para más información, consulte [esta guía de introducción al SSH para servidores dedicados OVHcloud](../../dedicated/introduccion-ssh/). 

El acceso se realiza a través de un terminal (en Linux o MAC) o utilizando software de terceros en Windows (PuTTy, por ejemplo).

Si utiliza PuTTy, tan solo tiene que abrir la aplicación e introducir el nombre del servidor o la dirección IPv4 para establecer la conexión. Tendrá que introducir el nombre de usuario y la contraseña, y a continuación podrá acceder a la interfaz de línea de comandos (CLI).

![Uso de putty](images/putty1.png){.thumbnail}

Una vez abierto el terminal, ejecute el siguiente comando para conectarse a su VPS:

```sh
ssh root@IPv4_de_su_VPS
```

Como alternativa, también puede utilizar este comando:

```sh
ssh root@referencia_de_su_VPS
```

#### Instalar o reinstalar su VPS (antigua gama)

La reinstalación se realiza directamente desde el área de cliente. Para ello, solo tiene que hacer clic en el botón `Reinstalar mi VPS`{.action}:

![Reinstalación del VPS](images/reinstall_manager.png){.thumbnail}

Se abrirá una ventana donde tendrá que elegir:

- la distribución;
- el idioma de instalación, y
- una llave SSH, si ya ha creado alguna desde el área de cliente.


![Menú de reinstalación del VPS](images/reinstall_menu.png){.thumbnail}

> [!primary]
>
> Para algunas distribuciones, como Plesk o Windows, es necesario disponer previamente de una licencia, que se puede adquirir, o bien directamente en OVHcloud, o bien a través de un revendedor. A continuación, tendrá que integrarla de forma manual o desde el área de cliente. Puede gestionar sus licencias en la sección `Servidores`{.action}, seleccionando `Licencias`{.action} en la columna izquierda.
En esta misma pantalla puede también contratar licencias (utilizando el botón `Contratar`{.action}) o añadir su propia licencia SPLA de Windows o de SQL Server (con el botón `Añadir una licencia SPLA`{.action}).
> 

En el área de cliente se mostrará una barra de progreso indicando el estado de la tarea de reinstalación, que puede tardar hasta 30 minutos:

### Proteger el VPS

Como se explica en la sección "Objetivos" de esta guía, usted es quien se encarga de administrar su VPS. Es decir: usted es responsable de los datos y de su protección.

Por favor, consulte la guía sobre la [seguridad de un VPS](../consejos-proteccion-vps/) si necesita algunas nociones básicas.


### Proteger el dominio con un certificado SSL

Una vez haya instalado y protegido su VPS, es probable que también quiera proteger su nombre de dominio y su sitio web. Para ello, debe instalar un certificado SSL que le permita tener su sitio en *https* y no solo en *http*.

Puede instalar dicho certificado SSL directamente en el VPS de forma manual. Para ello, consulte la documentación oficial de la distribución que utilice.

Si prefiere automatizar la protección de su sitio web, OVHcloud le ofrece la solución [SSL Gateway](https://www.ovh.es/ssl-gateway/). Para más información, consulte la [página comercial](https://www.ovh.es/ssl-gateway/){.external} o las [guías](https://docs.ovh.com/es/ssl-gateway/){.external} de la solución.

## Más información

[Introducción al SSH](../../dedicated/introduccion-ssh/){.external}

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>