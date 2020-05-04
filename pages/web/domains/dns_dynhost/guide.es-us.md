---
title: 'Configurar un DNS dinámico en un dominio'
slug: web_hosting_dynhost
excerpt: 'Cómo configurar un registro DNS dinámico (DynHost) en un dominio de OVH'
section: 'DNS (servidor y zona)'
order: 6
---

**Última actualización: 05/09/2018**

## Objetivo

La zona DNS (Domain Name System) de un dominio es el archivo de configuración en el que se almacena su información técnica en forma de registros. Existen diversos motivos por los que puede ser necesaria la actualización dinámica de un registro DNS para evitar la interrupción prolongada de un servicio. Esto sucede, por ejemplo, cuando el usuario aloja su propio servidor de juego sin disponer de una dirección IP fija. 

**Esta guía explica cómo configurar un registro DNS dinámico (DynHost) en un dominio de OVH.**

## Requisitos

- Tener acceso a la gestión del dominio desde el [área de cliente de OVH](https://www.ovh.com/auth/?action=gotomanager){.external}.
- Utilizar la configuración de OVH (es decir, sus servidores DNS) para el dominio en cuestión. 
- El registro DynHost que vaya a crear no debe existir en la zona DNS de OVH del dominio como registro A.

> [!warning]
>
> - Si el dominio no utiliza los servidores DNS de OVH, debe ponerse en contacto con el proveedor que gestione su configuración para que le informe de los pasos a seguir.
> 
> - Si el dominio está registrado con OVH, compruebe que utiliza nuestra configuración. Para ello, en el [área de cliente de OVH](https://www.ovh.com/auth/?action=gotomanager){.external}, seleccione el dominio en la columna izquierda y abra la pestaña `Servidores DNS`{.action}.
>

## Procedimiento

### 1. Crear un usuario DynHost

En primer lugar, debe crear un usuario DynHost. Este usuario es necesario para que posteriormente pueda actualizarse el registro DNS dinámico. Conéctese al [área de cliente de OVH](https://www.ovh.com/auth/?action=gotomanager){.external}, haga clic en `Dominios`{.action} en la columna izquierda y seleccione el dominio correspondiente. Abra la pestaña `DynHost`{.action}.

![DynHost](images/use-dynhost-step1.png){.thumbnail}

Haga clic en el botón `Gestionar los accesos`{.action} y luego en el botón `Crear un usuario`{.action}. Introduzca la información solicitada:

|Campo|Descripción|
|---|---|
|Sufijo del usuario|Establezca un sufijo para el usuario DynHost.|
|Subdominio|Indique el subdominio para el que quiere crear el registro DNS dinámico.|
|Contraseña|Establezca una contraseña para el usuario DynHost y confírmela.|

Una vez que haya completado todos los campos, haga clic en `Aceptar`{.action}. El usuario aparecerá en la tabla.
 Repita esta operación para cada usuario DynHost que quiera crear.

![DynHost](images/use-dynhost-step2.png){.thumbnail}

### 2. Crear un registro DNS dinámico (DynHost)

En segundo lugar, debe crear el registro DNS que se actualizará automáticamente. Le recordamos que el registro DynHost no debe existir en la zona DNS de OVH del dominio como registro A. Para comprobarlo y, en su caso, eliminar dicho registro, consulte nuestra guía [Editar una zona DNS de OVH](https://docs.ovh.com/es/domains/web_hosting_como_editar_mi_zona_dns/){.external}.

Para crear el registro DynHost, vuelva a la página principal de la pestaña `DynHost`{.action} y haga clic en el botón `Añadir un DynHost`{.action}. Introduzca la información solicitada:

|Campo|Descripción|
|---|---|
|Subdominio|Introduzca el subdominio al que pertenezca el registro DNS que deberá actualizarse dinámicamente. Este subdominio debe ser el mismo que haya indicado anteriormente al crear el usuario DynHost.|
|IP de destino|Introduzca la dirección IP que utilice actualmente el registro DNS. Esta dirección se actualizará posteriormente según el principio DynHost.|

Una vez que haya completado todos los campos, haga clic en `Aceptar`{.action}. El registro aparecerá en la tabla.
 Repita esta operación para cada registro DynHost que quiera crear.

![DynHost](images/use-dynhost-step3.png){.thumbnail}

### 3. Automatizar la actualización del DynHost

Por último, una vez que haya creado el usuario y el registro DynHost, debe automatizar la actualización de este último para que dicha actualización se realice dinámicamente. Para ello, es necesario utilizar un cliente que permita comprobar regularmente si la dirección IP de destino ha cambiado para actualizarla.

> [!warning]
>
> Usted mismo deberá encargarse de instalar y configurar dicho cliente.  A continuación ofrecemos algunas indicaciones sobre cómo hacerlo. No obstante, si necesita ayuda, le recomendamos que contacte con un proveedor especializado. Nosotros no podremos asistirle. 
>

Puede instalar un cliente en el servidor o en su ordenador. También existe la posibilidad de que disponga de un cliente en la interfaz de su router, si este es compatible. Una vez que haya elegido e instalado el cliente, deberá configurarlo utilizando la información del usuario DynHost creado anteriormente.

Según el cliente elegido, es posible que, además de los elementos del usuario DynHost y del subdominio correspondiente, sea necesaria una URL de actualización. En tal caso, utilice la siguiente URL sustituyendo la información genérica:

http://www.ovh.com/nic/update?system=dyndns&hostname=**$HOSTNAME**&myip=**$IP**

|Valor|Sustituir por...|
|---|---|
|$HOSTNAME|El subdominio afectado por la actualización.|
|$IP|La nueva dirección IP de destino.|

Puede verificar si la dirección IP de destino se ha actualizado correctamente en la pestaña `DynHost`{.action} del área de cliente. Compruebe la dirección IP que aparece en la columna `Destino`{.action}.

![DynHost](images/use-dynhost-step4.png){.thumbnail}

## Más información

Interactúe con nuestra comunidad de usuarios en [ovh.es/community](https://www.ovh.es/community/){.external}.