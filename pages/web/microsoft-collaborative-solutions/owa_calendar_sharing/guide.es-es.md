---
title: 'Compartir un calendario con el webmail OWA'
excerpt: 'Cómo compartir calendarios en Exchange'
slug: exchange_2016_compartir_un_calendario_con_el_webmail_owa
legacy_guide_number: g1923
section: 'Outlook Web Application (OWA)'
---

**Última actualización: 19/2/2020**

## Objetivo

Esta herramienta de Exchange le permite conceder acceso a sus calendarios a otras personas.

**Esta guía explica cómo compartir calendarios y recuperarlos con Outlook Web App (OWA).**


## Requisitos

- Tener una [solución Exchange de OVHcloud](https://www.ovh.es/emails/hosted-exchange/) ya configurada.
- Tener acceso a la cuenta Exchange (dirección de correo electrónico y contraseña).


## Procedimiento


### Paso 1: seleccionar un calendario para compartir

Inicie sesión en su cuenta Exchange a través del [correo electrónico basado en la web de OVHcloud](https://www.ovh.es/mail). Cambie a la interfaz «Calendario». Para ello, haga clic en el «iniciador de aplicaciones» en la parte superior izquierda y seleccione el icono de `calendario`{.action}.

![sharecalendar](images/exchange-calendars-step1.png){.thumbnail}

A la izquierda, puede ver la lista de calendarios disponibles en esta cuenta. Haga clic derecho en el calendario que desea compartir y seleccione `Permisos de uso compartido`{.action} en el menú contextual.

![sharecalendar](images/exchange-calendars-step2.png){.thumbnail}


### Paso 2: invitar y autorizar a usuarios

En la nueva ventana, añada a los usuarios con los que vaya a compartir el calendario. Empiece a escribir para ver sugerencias de sus contactos, introduzca una dirección de correo electrónico completa o utilice la opción de búsqueda `Buscar en el directorio`{.action}. 

![sharecalendar](images/exchange-calendars-step3.png){.thumbnail}

A continuación, puede especificar una línea de asunto para el mensaje de correo electrónico que se enviará para aceptar el uso compartido del calendario.

![sharecalendar](images/exchange-calendars-step4.png){.thumbnail}

Se pueden especificar los siguientes permisos de acceso para cada usuario:

|Nombre|Descripción|
|---|---|
|Disponibilidad únicamente|Muestra la disponibilidad, pero no los detalles relativos a los eventos de calendario.|
|Información limitada|Muestra la disponibilidad, los títulos y las localizaciones de los eventos.|
|Toda la información|Muestra toda la información de los eventos.|
|Editor|Permite editar su calendario.|
|Delegar|Permite editar su calendario y seguir compartiéndolo.|

En cuanto a los contactos externos, tenga en cuenta que únicamente estarán disponibles las tres primeras opciones. Cuando termine de añadir los destinatarios, haga clic en `Enviar`{.action} para confirmar. Se enviarán las invitaciones para uso compartido.


### Paso 3: recuperar un calendario compartido

Las invitaciones para compartir un calendario se pueden aceptar directamente desde el mensaje de correo electrónico de confirmación haciendo clic en el botón azul `Aceptar`{.action}.

![sharecalendar](images/exchange-calendars-step5.png){.thumbnail}

El calendario compartido estará disponible en la interfaz «Calendario» de la cuenta, en el apartado «Otros calendarios».

> [!primary]
>
Por lo general, es posible compartir calendarios con usuarios externos, pero puede haber problemas de compatibilidad en función del cliente de correo electrónico o el servicio web utilizado. Para obtener más información, consulte la [documentación oficial de Microsoft](http://go.microsoft.com/fwlink/?LinkId=57561).
>


### Cambiar los permisos de calendario

Puede cambiar los permisos existentes para los calendarios existentes o revocar el acceso a ellos. Para ello, acceda al apartado «Calendario», haga clic derecho en el calendario correspondiente y seleccione `Permisos...`{.action} en el menú contextual. En la nueva ventana, simplemente elimine usuarios de la lista o cambie sus permisos de acceso. No olvide hacer clic en el botón `Guardar`{.action} para confirmar.

![sharecalendar](images/exchange-calendars-step6.png){.thumbnail}


### Usar calendarios en OWA

En este ejemplo, se muestra el apartado «Calendario» de OWA con varios calendarios:

![sharecalendar](images/exchange-calendars-step7.png){.thumbnail}

Al hacer clic en un calendario de la lista, este se añade o se elimina de la vista general en el medio. También puede utilizar el campo de búsqueda para añadir calendarios de disponibilidad de empleados de su empresa. Una vez añadidos, se puede hacer clic en el símbolo de la estrella para marcarlos como «favoritos».


## Más información

[Usar Outlook Web App con una cuenta Exchange](../exchange_2016_guia_de_uso_de_outlook_web_app/)

[Compartir carpetas en OWA](../exchange_2016_compartir_una_carpeta_con_el_webmail_owa/)

[Crear grupos de contactos](../exchange_20132016_uso_de_los_grupos_listas_de_correo/)


Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.