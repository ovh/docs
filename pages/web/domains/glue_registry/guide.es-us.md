---
title: 'Personalizar los servidores DNS de un dominio'
slug: glue_record
excerpt: 'Cómo personalizar los servidores DNS de un dominio en OVHcloud'
section: 'DNS (servidor y zona)'
order: 7
---

**Última actualización: 05/05/2020**

## Objetivo

Los servidores DNS alojan la configuración DNS de los dominios. Esta configuración DNS, también llamada zona DNS, contiene una serie de datos técnicos: los registros. Convencionalmente, estos registros sirven de enlace entre el dominio y el servidor o servidores en los que están alojados el sitio web y las cuentas de correo electrónico.

Según sus necesidades, es posible personalizar el nombre de los servidores DNS de su dominio en OVHcloud.

**Esta guía explica cómo personalizar los servidores DNS de un dominio en OVHcloud.**

## Requisitos

- Tener un [dominio](https://www.ovh.com/world/es/dominios/){.external} registrado en OVH.
- Estar conectado al [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}, en la sección `Web`{.action}.

## Procedimiento

**Personalizar los servidores DNS de un dominio es una operación delicada**. Una modificación errónea podría deshabilitar el acceso al sitio web y la recepción de nuevos mensajes en las direcciones de correo electrónico. Siga los pasos que se describen a continuación y pida ayuda si no está seguro de la acción que va a realizar.

### 1. Añadir los registros Glue

Conéctese al [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}. En la columna izquierda, haga clic en `Dominios`{.action} y seleccione el dominio cuyos servidores DNS quiera personalizar. A continuación, abra la pestaña `Glue`{.action}, en la que podrá consultar una tabla con los registros Glue configurados actualmente en OVHcloud para su dominio. 

Para añadir un nuevo registro Glue, haga clic en el botón `Añadir`{.action}.

![Registro Glue](images/customize-dns-servers-step1.png){.thumbnail}

Introduzca la información solicitada:

|Campo|Descripción|  
|---|---|
|Nombre del host|Indique el nombre de host que quiera utilizar como servidor DNS personalizado.|
|IP de destino|Introduzca las direcciones IP a las que debe estar asociado el nombre del host, es decir, la dirección IP del servidor DNS que utiliza actualmente su dominio.|

Una vez que haya introducido los datos, haga clic en el botón `Añadir`{.action}, compruebe que la información es correcta y haga clic en `Aceptar`{.action}. Repita esta acción tantas veces como sea necesario, según el número de servidores DNS que utilice el dominio.

![Registro Glue](images/customize-dns-servers-step2.png){.thumbnail}

### 2. Crear los registros A correspondientes

A continuación, es necesario crear los registros A para los nombres de host que haya indicado en el paso anterior. Cada registro A debe apuntar a la dirección IP de destino correspondiente al nombre de host creado anteriormente.

Para ello, utilice el panel que le ofrezca el proveedor que gestione la configuración DNS de su dominio. Pueden darse dos situaciones:

- **Si el dominio no utiliza la configuración DNS de OVHcloud**, deberá ponerse en contacto con el proveedor que gestione dicha configuración. Una vez realizada esta operación, vaya al siguiente paso.

- **Si el dominio utiliza la configuración DNS de OVHcloud**, abra la pestaña `Zona DNS`{.action} y añada un nuevo registro A haciendo clic en `Añadir un registro`{.action}. Seleccione el tipo de registro `A`{.action} y siga los pasos que se indican. Si necesita ayuda, consulte la guía [Editar una zona DNS de OVHcloud](../web_hosting_como_editar_mi_zona_dns/){.external}.

![Registro Glue](images/customize-dns-servers-step3.png){.thumbnail}

### 3. Cambiar los servidores DNS de un dominio

Por último, solo queda cambiar los servidores DNS del dominio. Para ello, abra la pestaña `Servidores DNS`{.action} y haga clic en `Cambiar los servidores DNS`{.action}. Sustituya los servidores DNS actuales por los que quiera utilizar. 

Siga los pasos que se indican y, si necesita ayuda, consulte la guía [Cambiar los servidores DNS de un dominio en OVHcloud](../web_hosting_informacion_general_sobre_los_servidores_dns/){.external}.

Una vez que haya editado los servidores DNS, espere a que se apliquen los cambios. Tenga en cuenta que es necesario un tiempo máximo de propagación de 48 horas.

![Registro Glue](images/customize-dns-servers-step4.png){.thumbnail}

## Más información

Interactúe con nuestra comunidad de usuarios en [https://community.ovh.com/en/](https://community.ovh.com/en/){.external}.
