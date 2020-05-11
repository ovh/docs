---
title: 'Correo: Redirecciones de correo'
excerpt: 'Correo: Redirecciones de correo'
slug: correo_redirecciones_de_correo
legacy_guide_number: g2001
section: 'Gestión de la cuenta de correo'
---

**Última actualización: 22/01/2019**

## Objetivo

En esta guía encontrará toda la información necesaria para configurar las redirecciones de correo electrónico, por ejemplo, para redirigir los correos recibidos en una dirección A a una dirección B.

## Introducción

### ¿Qué es una redirección de correo?

Una redirección permite redirigir el correo que recibe en una primera dirección hacia una o varias direcciones alternativas.

Por ejemplo, usted desea que cuando reciba un correo en **public@mydomain.com**, este se reenvíe a **private@otherdomain.com**. De este modo puede proporcionar su primera dirección al remitente (**public@mydomain.com**), sin tener que darle su dirección verdadera (**private@otherdomain.com**).

Existen dos tipos de redirecciones: 

- La redirección simple (esquema 1): el correo se envía directamente a la dirección de correo de redirección y el destinatario no recibe el correo. 

- La redirección con copia local (esquema 2): el correo se entrega tanto al destinatario como a la dirección de correo de redirección.

![correo electrónico](images/schema-redirect.png){.thumbnail}

> [!primary]
>
> Se puede configurar una redirección a varias direcciones de correo electrónico.

## Requisitos

- Conectarse al[área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager).
- Tener una solución MX Plan. Esta solución viene incluida en el [plan de hosting de OVHcloud]({ovh_www}/hebergement-web/){.external}, en el [alojamiento gratuito Start 10M](https://www.ovh.es/dominios/oferta_hosting_start10m.xml){.external} o puede contratarse por separado.

## Procedimiento

La versión puede variar en función de la fecha de activación de su servicio MX Plan o en el caso de que [el servicio haya sido migrado recientemente]({ovh_www}/mxplan-migration/){.external}. Antes de continuar, compruebe de qué versión dispone. 

Para ello, conéctese al [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}, y vaya a la sección «Web». En la columna izquierda, haga clic en `Correo electrónico`{.action} y seleccione el servicio correspondiente. Siga leyendo esta guía en función de su versión:

|Versión histórica de la solución MX Plan|Nueva versión de la solución MX Plan|
|---|---|
|![Correo electrónico](images/mxplan-starter-legacy.png){.thumbnail}<br> El nombre del producto aparece en el recuadro «Suscripción», en el epígrafe «Producto».|![Correo electrónico](images/mxplan-starter-new.png){.thumbnail}<br>El nombre del producto aparece en el recuadro «Resumen», en el epígrafe `Referencia del servidor`.|
|Siga leyendo esta guía en el apartado [Versión histórica de la solución MX Plan](./#version-historica-de-la-solucion-mx-plan).|Siga leyendo esta guía en el apartado [Nueva versión de la solución MX Plan](./#nueva-version-de-la-solucion-mx-plan_1).|

### Versión histórica de la solución MX Plan

#### Paso 1: Acceder a la gestión de las redirecciones
Por defecto, estará en la pestaña de `Información general`{.action} de su MX Plan. Haga clic sobre la pestaña `Correo electrónico`{.action} y a continuación en el botón de la derecha `Gestión de las redirecciones`{.action}.

![correo electrónico](images/mxplan-legacy-1.png){.thumbnail}


#### Paso 2: Añadir una redirección

Se mostrará una tabla con las redirecciones activas. Haga clic a la derecha, sobre el botón `Añadir una redirección`{.action}.

![correo electrónico](images/mxplan-legacy-2.png){.thumbnail}

Deberá completar los 3 parámetros siguientes:

|Elemento|Descripción| 
|---|---|  
|De la dirección |Introduzca la dirección de correo que desea redirigir.|  
|A la dirección|Introduzca la dirección de destino de su redirección. Puede utilizar una de sus direcciones de correo de OVHcloud o una dirección de correo externo.|
|Seleccione el tipo de copia deseada|Indique si desea: <br> - **Conservar una copia del correo en OVHcloud** (recibirá el correo en las dos direcciones, la principal y la redirección) <br> - **No conservar copia del correo**(se reenviará directamente a la redirección sin que la dirección principal lo reciba) <br> *ver el [esquema](./#introduccion){.external} al inicio de esta guía.*|

Haga clic en `Aceptar`{.action} para confirmar la redirección añadida.

![correo electrónico](images/mxplan-legacy-3.png){.thumbnail}

> [!primary]
> Al elegir el modo de copia «**Conservar una copia del correo en OVHcloud**», se crea una redirección de la dirección de correo hacia ella misma de forma automática en la lista de
> redirecciones, materializando esta copia local.
> 

### Nueva versión de la solución MX Plan

En la nueva versión del servicio MX Plan la gestión del redireccionamiento no se hace a través del área de cliente sino directamente a través del webmail de la dirección de correo en cuestión.

Diríjase al webmail de la dirección [mail.ovh.net](https://www.ovh.com/es/mail/){.external}. Introduzca **la dirección de correo** y la **contraseña** para conectarse.
![correo electrónico](images/webmail.png){.thumbnail}

#### Paso 1: Acceder a la gestión de las redirecciones

Una vez conectado a su dirección de correo a través del [webmail](https://www.ovh.com/es/mail/){.external}, haga clic en el icono con forma de rueda dentada en la parte superior derecha y a continuación pulse en `Opciones`{.action}.

![correo electrónico](images/mxplan-new-1.png){.thumbnail}
Desde la ventana de **Opciones**, en la columna de la izquierda, diríjase a la categoría de **Tratamiento automático**dentro de **Correo** y haga clic sobre `Reglas de la bandeja de entrada y de almacenamiento`{.action} 

![correo electrónico](images/mxplan-new-2.png){.thumbnail}

Esta ventana le permite gestionar sus redirecciones y también aplicar filtros sobre el conjunto de correos entrantes.

#### Paso 2: Añadir una redirección

Una vez en la ventana de gestión de las **Reglas de bandeja de entrada**, haga clic sobre el icono `+`{.action} en la parte superior izquierda.
![correo electrónico](images/mxplan-new-3.png){.thumbnail}

En esta ventana va a establecer las reglas necesarias para crear una redirección:

|Elemento|Descripción| 
|---|---|  
|Nombre |Defina el nombre de su redirección (recuadro 1).|  
|Criterios que deben cumplirse cuando llega el mensaje| Si su redirección afecta a todos los mensajes, seleccione **\[Aplicar a todos los mensajes]** (recuadro 2).|
|Operaciones que deben realizarse|Aquí es donde se realiza la redirección, seleccione **Transferir, redirigir o enviar** y **Redirigir el mensaje a....** (recuadro 3). Introduzca a continuación la dirección hacia la que quiere redirigir el correo delante de **Redirigir el mensaje a...** y después haga clic en `Guardar`{.action} (recuadro 4)|


![correo electrónico](images/mxplan-new-4.png){.thumbnail}

En nuestro ejemplo, se muestra una **redirección con copia local** (véase el [esquema 2](./#introduccion){.external} al inicio de esta guía). Si esto es lo que necesita, haga clic en `OK`{.action} (con el icono de disquete) en la parte superior izquierda y se aplicará la regla. De lo contrario, vaya al paso siguiente.



Para realizar una **redirección simple** ([esquema 1](./#introduccion){.external} al inicio de esta guía), añada una regla adicional a su **redirección con copia local** desde esta ventana. Haga clic en `Añadir una acción`{.action} (recuadro 1),después en **Mover, copiar o suprimir** y finalmente en **eliminar el mensaje**. Esta regla mueve el mensaje directamente a la papelera después de haberlo redirigido hacia el correo de redirección.

![correo electrónico](images/mxplan-new-5.png){.thumbnail}

Une vez haya completado todos los campos de la ventana, haga clic en `OK`{.action} (en el icono de disquete) en la parte superior izquierda.

## Más información

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com>.