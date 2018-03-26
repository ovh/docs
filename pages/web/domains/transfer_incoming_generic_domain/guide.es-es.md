---
title: Transferir a OVH un dominio genérico
slug: transferir-un-dominio-generico
excerpt: Cómo realizar la transferencia de un dominio genérico a OVH
section: Operaciones en los dominios
order: 1
---

**Última actualización: 15/03/2018**

## Objetivo

La transferencia de un dominio permite cambiar el agente registrador que lo gestiona. Dicha transferencia puede tardar entre uno y diez días.

**Esta guía explica cómo realizar la transferencia de un dominio genérico a OVH.**

## Requisitos
- Tener un dominio genérico (con una extensión como .com, .net, .info...) con otro agente registrador.
- Estar facultado para solicitar la transferencia del dominio. El propietario y las personas que lo administren deben haber sido informados.
- El dominio debe haber sido creado más de 61 días antes.
- El dominio no debe haber sido transferido o haber cambiado de propietario en los últimos 61 días.
- El dominio debe estar desbloqueado.
- El solicitante debe poseer el código de transferencia o tener la posibilidad de obtenerlo.
- Las direcciones de correo electrónico de los contactos que figuran en el Whois deben ser válidas.

## Procedimiento

### 1. Comprobar la información relativa al dominio

Si tiene un dominio registrado con otro proveedor y quiere cambiar de agente registrador, puede transferirlo a OVH. La transferencia involucra a varias entidades: OVH, su actual agente registrador y otras partes. Durante el procedimiento, serán necesarias varias confirmaciones. **Por lo tanto, es importante comprobar que la información relativa al dominio esté actualizada.**

Para ello, puede utilizar nuestra herramienta **Whois**, disponible en la siguiente página: [https://www.ovh.es/soporte/herramientas/check_whois.pl](https://www.ovh.es/soporte/herramientas/check_whois.pl){.external}. El resultado mostrará varios datos.

- **Si son correctos**: Desbloquee el dominio en su actual agente registrador.
- **Si son incorrectos o no son visibles**: Contacte con su actual agente registrador para comprobarlos y/o corregirlos.

> [!primary]
>
> Si no sabe o no recuerda cuál es su actual agente registrador, las líneas **Registrar** que aparecen en el resultado de la herramienta [Whois](https://www.ovh.es/soporte/herramientas/check_whois.pl){.external} pueden darle una orientación sobre su identidad.
>

A continuación resumimos las etapas de una transferencia.

|Etapa|Acción|Quién realiza la acción|Dónde|Plazo|
|---|---|---|---|---|
|1|Desbloquear el dominio|El administrador del dominio, con el consentimiento del propietario|En el actual agente registrador|-|
|2|Obtener el código de transferencia|El administrador del dominio, con el consentimiento del propietario|En el actual agente registrador|-|
|3|Solicitar la transferencia del dominio|Cualquiera que disponga del código de transferencia, con el consentimiento del propietario |En el nuevo agente registrador (OVH en este caso)|-|
|4|Primera validación de la transferencia|El propietario del dominio y el administrador que figuran en el nuevo agente registrador|Por correo electrónico|Máximo 5 días|
|5|Segunda validación de la transferencia|El actual agente registrador|A través de una solicitud enviada por la entidad que gestiona la extensión del dominio|Máximo 5 días|

### 2. Desbloquear el dominio

Una vez verificada la información, es necesario desbloquear el dominio. Esta operación solo puede realizarse en el actual agente registrador. Por lo tanto, le invitamos a que se ponga en contacto con él para conocer el procedimiento que este haya establecido.

Cuando haya desbloqueado el dominio, el agente registrador deberá comunicarle un código de transferencia. Este código puede llamarse de distintas formas: código de transferencia, Auth-Code, Auth-Info, código EPP...

Tenga en cuenta que OVH no es el actual agente registrador del dominio, por lo que no podemos desbloquearlo ni proporcionarle el código de transferencia.

> [!warning]
>
> Una vez desbloqueado el dominio, dispone de 7 días para solicitar su transferencia a OVH. Pasado ese plazo, el dominio volverá a bloquearse si no se ha realizado ninguna solicitud de cambio de agente registrador.
>

### 3. Solicitar la transferencia a OVH

Una vez desbloqueado el dominio, y con el código de transferencia en su posesión, puede solicitar la transferencia del dominio a OVH. Para ello, realice un pedido de transferencia desde [nuestra web](https://www.ovh.es/){.external}.

Introduzca su nombre de dominio y continúe con el pedido. Cuando se le pida el código de transferencia, introdúzcalo en el campo situado junto al dominio. Si todavía no tiene el código de transferencia, puede marcar la casilla `Indicar el código de autenticación posteriormente`{.action}. En la medida de lo posible, le recomendamos que se asegure previamente de que podrá obtener el código antes de continuar. 

El pedido consta de distintos pasos que le permitirán completar el dominio con un [plan de hosting](https://www.ovh.es/hosting/){.external} u otras soluciones de OVH, y elegir servidores DNS si así lo desea. Estas opciones pueden ser interesantes si la transferencia del dominio se inscribe en un proyecto más amplio de migración de sus servicios (sitio web y correo) a OVH. En ese caso, la guía [Migrar un sitio web y el correo a OVH](https://docs.ovh.com/es/hosting/web_hosting_transferir_un_sitio_web_y_el_correo_sin_cortes_del_servicio/){.external} explica en detalle cómo hacerlo.

> [!warning]
>
> Preste especial atención a los servidores DNS elegidos durante el pedido. Si su dominio es utilizado por un sitio web o el correo, deberá introducir los servidores DNS que estén configurados actualmente en el dominio.
>

Una vez generada la orden de pedido, deberá abonarla para que comience la transferencia. El procedimiento de transferencia se iniciará cuando se reciba el pago. Según la extensión del dominio genérico, es posible consultar el progreso desde el [área de cliente de OVH](https://www.ovh.com/auth/?action=gotomanager){.external}.

### 4. Confirmar la transferencia

Una vez iniciada la transferencia, se realizarán dos fases de verificación.

#### Primera fase de verificación

Comienza en el momento en que se inicia la transferencia, y puede durar hasta 5 días. En esta fase se envían dos solicitudes de verificación.

|Quién recibe la solicitud de verificación|A dónde se envía la solicitud de verificación|
|---|---|
|El propietario del dominio|A la dirección de correo electrónico del propietario que figure en la base de datos Whois|
|El administrador indicado al realizar el pedido en OVH|A la dirección de correo electrónico indicada en el perfil del administrador en OVH|

A continuación, pueden darse varias situaciones.

|Escenarios posibles|Consecuencia|
|---|---|
|El propietario y el administrador confirman la solicitud|Paso a la segunda fase de verificación en un plazo máximo de 24 horas|
|Uno de los dos contactos confirma la solicitud y el otro la deja sin responder|Paso a la segunda fase de verificación una vez transcurrido un plazo de 5 días|
|Ninguno de los dos contactos responde a la solicitud|La transferencia se abandona una vez transcurrido un plazo de 5 días|
|Uno de los dos contactos rechaza la solicitud|La transferencia se abandona una vez notificado el rechazo por uno cualquiera de los dos contactos|

La confirmación se realiza desde una interfaz de OVH. Los mensajes enviados por correo electrónico a los dos contactos contienen un enlace a dicha interfaz, en la que deberán confirmar o editar la información mostrada.

![Dominio](images/domaintransfer_gTLD_validation.png){.thumbnail}

En caso de que la transferencia haya sido abandonada, asegúrese de que las distintas partes implicadas estén de acuerdo con la misma y de que sus direcciones de correo electrónico estén actualizadas. La transferencia podrá reiniciarse más adelante desde el [área de cliente de OVH](https://www.ovh.com/auth/?action=gotomanager){.external}, seleccionando `Dominios`{.action} en la columna izquierda y haciendo clic en `Operaciones en curso`{.action}.

#### Segunda fase de verificación

Una vez iniciada la segunda fase, el actual agente registrador (que todavía no es OVH) recibirá una solicitud de validación. A continuación, pueden darse varias situaciones.

|Escenarios posibles|Consecuencia|
|---|---|
|El actual agente registrador valida la transferencia|La transferencia se realiza en un plazo máximo de 24 horas|
|El actual agente registrador no responde a la solicitud|La transferencia se realiza una vez transcurrido un plazo de 5 días|
|El actual agente registrador rechaza la solicitud|La transferencia se abandona una vez notificado el rechazo por el agente registrador|

En caso de que el actual agente registrador rechace la transferencia, le invitamos a que contacte con este último para conocer las razones que han motivado el rechazo. La transferencia podrá reiniciarse más adelante desde el [área de cliente de OVH](https://www.ovh.com/auth/?action=gotomanager){.external}, seleccionando `Dominios`{.action} en la columna izquierda y haciendo clic en `Operaciones en curso`{.action}.

### 5. Gestionar el dominio

Una vez finalizado el procedimiento de transferencia, podrá administrar el dominio desde el [área de cliente de OVH](https://www.ovh.com/auth/?action=gotomanager){.external}.

Recuerde que, cuando la transferencia del dominio genérico es de pago, OVH añade un año a la fecha de expiración del dominio.

## Más información

[Migrar un sitio web y el correo a OVH](https://docs.ovh.com/es/hosting/web_hosting_transferir_un_sitio_web_y_el_correo_sin_cortes_del_servicio/){.external}

Interactúe con nuestra comunidad de usuarios en [ovh.es/community](https://www.ovh.es/community/){.external}.