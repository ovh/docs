---
title: 'Crear firmas automáticas'
excerpt: 'Cómo agregar firmas automáticas a sus cuentas de correo electrónico'
slug: exchange_20132016_firma_automatica_disclaimer
section: Funcionalidades de las cuentas Exchange
order: 07
---

**Última actualización: 26/3/2020**


## Objetivo

El área de cliente de OVHcloud le permite crear firmas genéricas (pies de mensaje) para direcciones de correo electrónico que utilicen el mismo dominio (firma «corporativa»). Estas se añadirán automáticamente a los correos electrónicos enviados desde la cuenta de un usuario.

**Esta guía explica cómo crear una firma automática desde el área de cliente de OVHcloud.**


## Requisitos

- Tener acceso al [área de cliente de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws).
- Tener una solución [Exchange](https://www.ovhcloud.com/es-es/emails/hosted-exchange/) ya configuradas.


## Procedimiento


En primer lugar, acceda a su [área de cliente de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws), diríjase a la sección `Webcloud`{.action}, y seleccione su servicio Exchange de la columna `Microsoft`{.action} > `Exchange`{.action}. Haga clic en la pestaña `Más +`{.action} en la barra horizontal y seleccione `Pies de página`{.action}.

![exchangesig](images/exchange-footer-step1.png){.thumbnail}

En esta sección podrá consultar sus dominios asociados y crear un pie de mensaje para cada uno ellos. Haga clic en el icono `...`{.action} y seleccione `Editar`{.action} para abrir el editor HTML.

![exchangesig](images/exchange-footer-step2.png){.thumbnail}

El editor ofrece una selección de variables que corresponden a los datos del usuario en la configuración de su cuenta. Puede, por ejemplo, redactar un mensaje de cierre genérico y agregar una firma apropiada u otra información de contacto debajo, utilizando las variables. Haga clic en la flecha hacia abajo para seleccionar una variable y, a continuación, seleccione `Insertar una variable`{.action} para agregarla al panel de edición.

![exchangesig](images/exchange-footer-step3aag.gif){.thumbnail}

La firma se crea mediante etiquetas HTML que ofrecen algunas opciones de formato. Utilice la barra de herramientas en la parte superior para personalizar la firma. También puede comprobar el código HTML haciendo clic en `Fuente HTML`{.action}.
 
![exchangesig](images/exchange-footer-step4.png){.thumbnail}

Marque la casilla «Activar la firma solo para los correos de salida» para evitar agregar este pie a los correos electrónicos enviados entre usuarios del mismo dominio. Haga clic en `Aceptar`{.action} una vez que haya terminado de crear su firma. De ahora en adelante esta firma se adjuntará a los correos electrónicos enviados desde las cuentas de usuario de dicho dominio. Una vez creadas, puede editar o eliminar las firmas desde el área de cliente de OVHcloud.

Tenga en cuenta los siguientes datos antes de introducir firmas para los usuarios:

- Aparte de «Nombre», «Apellido» y «Nombre visible», los datos de la cuenta no se pueden editar desde el área de cliente de OVHcloud, sino que deberá indicarlos en el webmail OWA del usuario («Opciones» > «General» > «Mi cuenta»).

![exchangesig](images/exchange-footer-step5.png){.thumbnail}

- La firma se agregará al cuerpo del correo electrónico sin espacios, por lo que es recomendable comenzar la firma con al menos una línea en blanco.
- OWA no indica si una firma está habilitada en este dominio y **no se sincroniza**. Cuando los usuarios agregan sus [propias firmas](../exchange_2016_guia_de_uso_de_outlook_web_app/#anadir-una-firma), los correos electrónicos incluyen tanto el pie del mensaje individual como el de todo el dominio.
- El editor admite formato HTML, hipervínculos, imágenes, etc. Sin embargo, las firmas no deben abusar de estas opciones. Es posible que los destinatarios utilicen clientes de correo electrónico incompatibles con HTML y las imágenes incrustadas, o que las firmas se muestren de forma diferente a la previsualizada. Tenga en cuenta que las etiquetas HTML se eliminarán por completo si se envía un mensaje como «Texto sin formato» desde OWA.
- Las «iniciales» no están activadas en el servicio, por lo que agregar esta variable no tendrá ningún efecto.

## Más información

[Usar Outlook Web App con una cuenta Exchange](../exchange_2016_guia_de_uso_de_outlook_web_app)

[Delegar permisos en una cuenta Exchange](../exchange_2013_dar_permisos_full_access_a_una_cuenta)

[Compartir un calendario con el webmail OWA](../exchange_2016_compartir_un_calendario_con_el_webmail_owa)

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
