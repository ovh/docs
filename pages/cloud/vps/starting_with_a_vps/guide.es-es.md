---
title: 'Primeros pasos con un VPS'
slug: primeros-pasos-con-vps
excerpt: 'Cómo utilizar un VPS'
section: 'Primeros pasos'
order: 1
---

**Última actualización: 31/08/2018**
 
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

- Haber contratado un VPS en el [sitio web de OVHcloud](https://www.ovhcloud.com/es/){.external}.
- Haber recibido el mensaje de correo electrónico con sus claves de acceso tras la instalación.


## Procedimiento

Para consultar la información relacionada con su VPS, conéctese al [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}. Acceda a la sección `Cloud`{.action} y, en la columna izquierda, haga clic en `Servidores`{.action} y seleccione su VPS.

En esta pantalla podrá consultar todo lo relacionado con su VPS. En el centro encontrará la información general; en el lado derecho, las acciones que puede realizar (con sus correspondientes botones) y, en la parte inferior, las diferentes opciones.

### Conectarse al VPS

Al instalar (o reinstalar) su VPS, recibirá por correo electrónico la contraseña de acceso *root*, necesaria para conectarse mediante el protocolo SSH de comunicaciones seguras. El acceso se realiza a través de un terminal (en Linux o MAC) o utilizando software de terceros en Windows (Putty, por ejemplo).

Una vez abierto el terminal, ejecute el siguiente comando para conectarse a su VPS:

```sh
ssh root@IPv4_de_su_VPS
```

Como alternativa, también puede utilizar este comando:

```sh
ssh root@referencia_de_su_VPS
```

La referencia de su VPS siempre empezará por vpsXXXX.ovh.net (donde XXXX es una serie de números).


### Instalar o reinstalar el VPS

La reinstalación se realiza directamente desde el área de cliente. Para ello, solo tiene que hacer clic en el botón `Reinstalar mi VPS`{.action}.

![Reinstalación del VPS](images/reinstall_manager.png){.thumbnail}

Se abrirá una ventana donde deberá elegir:

- la distribución;
- el idioma de instalación, y
- una llave SSH, si ya ha creado alguna desde el área de cliente.


![Menú de reinstalación del VPS](images/reinstall_menu.png){.thumbnail}

> [!primary]
>
> Para algunas distribuciones, como Plesk o Windows, es necesario disponer previamente de una licencia, que se puede adquirir, o bien directamente en OVHcloud, o bien a través de un revendedor. A continuación, tendrá que añadirla, o bien de forma manual, o bien desde el área de cliente. Puede gestionar sus licencias en la sección `Dedicado`{.action}, seleccionando `Licencias`{.action} en la columna izquierda. En este mismo lugar puede también contratar licencias (utilizando el botón `Contratar`{.action}) o añadir su propia licencia SPLA de Windows o SQL Server (con el botón `Añadir una licencia SPLA`{.action}).
> 

En el área de cliente se mostrará una barra de progreso indicando el estado de la tarea de reinstalación, que puede tardar hasta 30 minutos.

### Proteger el VPS

Como se recuerda en el apartado «Objetivo» de esta guía, usted es el administrador de su VPS y, por lo tanto, el responsable de los datos almacenados, así como de su seguridad.

Nuestra guía relativa a la [seguridad de los VPS](https://docs.ovh.com/es/vps/consejos-proteccion-vps/){.external} ofrece unas nociones básicas sobre este aspecto.


### Proteger el dominio con un certificado SSL

Una vez haya instalado y protegido su VPS, es probable que también quiera proteger su nombre de dominio y su sitio web. Para ello, debe instalar un certificado SSL que le permita tener su sitio en «https» y no solo en «http».

Puede instalar dicho certificado SSL directamente en el VPS de forma manual. Para ello, consulte la documentación oficial de la distribución que utilice.

Si prefiere automatizar la protección de su sitio web, OVHcloud le ofrece la solución [SSL Gateway](https://www.ovh.es/ssl-gateway/){.external}. Para más información, consulte la [página comercial](https://www.ovh.es/ssl-gateway/){.external} o las [guías](https://docs.ovh.com/es/ssl-gateway/){.external} de la solución.

## Más información

[Introducción al SSH](https://docs.ovh.com/es/dedicated/introduccion-ssh/){.external}

Interactúe con nuestra comunidad de usuarios en [ovh.es/community](https://www.ovh.es/community/){.external}.