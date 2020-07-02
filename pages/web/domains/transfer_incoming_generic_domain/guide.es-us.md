---
title: 'Transferir un dominio a OVHcloud'
slug: transferir-un-dominio-generico
excerpt: 'Cómo realizar la transferencia de un dominio a OVHcloud'
section: 'Operaciones en los dominios'
order: 1
---

**Última actualización: 04/05/2020**

## Objetivo

La transferencia de un dominio permite cambiar el agente registrador que lo gestiona. Una de las posibilidades es transferirlo a OVHcloud. Esta operación suele tardar entre uno y diez días.

**Esta guía explica cómo transferir a OVHcloud un dominio genérico.**

## Requisitos

- Tener un dominio que cumpla las siguientes condiciones:
  - estar registrado con otro agente registrador y haber sido creado más de 60 días antes;
  - no haber sido transferido o haber cambiado de propietario en los últimos 60 días;
  - estar desbloqueado.
- Estar facultado para solicitar la transferencia del dominio.
- Poder desbloquear el dominio.
- Poseer el código de transferencia o tener la posibilidad de obtenerlo.
- Haber informado al propietario del dominio y a sus administradores de la solicitud de transferencia.


## Procedimiento

Si tiene un dominio registrado con otro proveedor y quiere cambiar de agente registrador, puede transferirlo a OVHcloud.

La operación de transferencia se desarrolla en varias etapas e involucra a varias entidades, entre las que se incluye el actual agente registrador y OVHcloud. La siguiente tabla resume las etapas de una transferencia.

|Etapa|Descripción|Quién realiza la acción|Dónde|Plazo|
|---|---|---|---|---|
|1|Comprobar la información relativa al dominio|El administrador del dominio|En el actual agente registrador|-|
|2|Desbloquear el dominio y obtener el código de transferencia|El administrador del dominio, con el consentimiento del titular|En el actual agente registrador|-|
|3|Solicitar la transferencia del dominio|Cualquiera que disponga del código de transferencia, con el consentimiento del titular|En el nuevo agente registrador (OVH en este caso)|-|
|4|Realizar la primera fase de verificación|El propietario del dominio y el administrador que figuran en el nuevo agente registrador|Por correo electrónico|Máximo 5 días|
|5|Realizar la segunda fase de verificación|El actual agente registrador|A través de una solicitud enviada por la entidad que gestiona la extensión del dominio|Máximo 5 días|

> [!warning]
>
> Este procedimiento se aplica a la mayoría de las transferencias. Sin embargo, según la extensión del dominio, es posible que varíe. Puede consultar la información del dominio en cuestión en la página <https://www.ovh.com/world/es/dominios/precios/>.
>

### 1. Comprobar la información relativa al dominio

**En primer lugar, es importante comprobar que la información relativa al dominio esté actualizada.** Tras la entrada en vigor del RGPD, son pocos los datos visibles en el Whois. Por lo tanto, le recomendamos que consulte la información relativa al dominio en su agente registrador actual.

- **Si los datos con correctos**, vaya al siguiente paso.

- **Si los datos son incorrectos o no son visibles**, contacte con su actual agente registrador para comprobarlos y/o corregirlos.

> [!primary]
>
> Si no sabe o no recuerda cuál es su actual agente registrador, las líneas **Registrar** que aparecen en el resultado de la herramienta [Whois](https://www.ovh.es/soporte/herramientas/check_whois.pl){.external} pueden darle una orientación sobre su identidad.
>

### 2. Desbloquear el dominio y obtener el código de transferencia

Una vez que haya comprobado la información, es necesario desbloquear el dominio. Esta operación solo puede realizarse en el actual agente registrador. Por lo tanto, le invitamos a que se ponga en contacto con él para conocer el procedimiento que este haya establecido.

Una vez desbloqueado el dominio, el agente registrador deberá enviarle el código de transferencia correspondiente. Este código puede llamarse de distintas formas: código de transferencia, Auth-Code, Auth-Info, código EPP…

Tenga en cuenta que OVHcloud no es el actual agente registrador del dominio, por lo que no podemos desbloquearlo ni proporcionarle el código de transferencia.

> [!warning]
>
> Una vez desbloqueado el dominio, dispone de 7 días para solicitar su transferencia a OVHcloud. Pasado ese plazo, el dominio volverá a bloquearse si no se ha realizado ninguna solicitud de cambio de agente registrador.
>

### 3. Solicitar la transferencia del dominio a OVH

Una vez desbloqueado el dominio, y con el código de transferencia en su poder, puede solicitar la transferencia a OVHcloud desde nuestro [sitio web](https://www.ovh.com/){.external}. Para ello, introduzca el dominio en el campo de registro de un dominio y continúe con el pedido.

Cuando se le pida el código de transferencia, introdúzcalo en el campo situado junto al dominio. Si todavía no tiene el código de transferencia, puede marcar la casilla `Indicar el código de autenticación posteriormente`{.action}. No obstante, le recomendamos que, antes de continuar, se asegure previamente de que podrá obtener el código.

Si lo desea, puede completar el pedido con un [plan de hosting](https://www.ovh.com/world/es/hosting/){.external} u otras soluciones de OVHcloud. Esto puede ser interesante si la transferencia del dominio se inscribe en un proyecto más amplio de migración de sus servicios. En ese caso, la guía [Migrar un sitio web y el correo a OVHcloud](../..//hosting/web_hosting_transferir_un_sitio_web_y_el_correo_sin_cortes_del_servicio/){.external} explica en detalle cómo hacerlo.

> [!warning]
>
> Preste especial atención a los siguientes elementos durante el pedido:
>
> - **Los datos del propietario del dominio**: Con la entrada en vigor del RGPD, asegúrese de que la información del propietario introducida es la misma que la registrada en el actual agente registrador para evitar cualquier sospecha de robo de dominio.
>
> - **Los servidores DNS del dominio**: Si el dominio es utilizado por un sitio web o el correo, introduzca los servidores DNS que estén configurados actualmente para evitar una interrupción del servicio.
>

Una vez generada la orden de pedido, deberá abonarla para que comience la transferencia. El procedimiento de transferencia se iniciará cuando recibamos el pago. Puede consultar el progreso desde el [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}, seleccionando `Dominios`{.action} en la columna izquierda y haciendo clic en `Operaciones en curso`{.action}.

### 4. Realizar la primera fase de verificación

Una vez iniciada la transferencia, se realizarán dos fases de verificación. La primera puede durar hasta cinco días y comienza en el momento en que se inicia la transferencia, con el envío de dos solicitudes de verificación. 

|Quién recibe la solicitud de verificación|A dónde se envía la solicitud de verificación|
|---|---|
|El propietario del dominio|A la dirección de correo electrónico del propietario que figure en el Whois, si esta es visible. Si no lo es, a la dirección de correo electrónico del propietario indicada al realizar el pedido en OVHcloud.|
|El administrador indicado al realizar el pedido en OVHcloud|A la dirección de correo electrónico que figura en el perfil del administrador en OVHcloud.|

La confirmación por ambas partes se realiza desde una interfaz de OVHcloud. Los mensajes enviados por correo electrónico contienen un enlace a dicha interfaz. 

![Transferencia de dominios](images/domaintransfer_gTLD_validation.png){.thumbnail}

A continuación, pueden darse varias situaciones, en función de las acciones realizadas por el propietario del dominio y el administrador.

|Escenarios posibles|Resultado|
|---|---|
|El propietario del dominio y el administrador confirman la solicitud de transferencia.|La transferencia pasa a la segunda fase de verificación en un plazo de 24 horas.|
|Uno de los dos contactos confirma la solicitud y el otro la deja sin responder|La transferencia pasa a la segunda fase de verificación al cabo de cinco días.|
|Ninguno de los dos contactos responde a la solicitud|La transferencia pasa a la segunda fase de verificación al cabo de cinco días.|
|Uno de los dos contactos rechaza la solicitud|La transferencia se anula una vez notificado el rechazo por uno cualquiera de los dos contactos.|

En caso de que se anule la transferencia, asegúrese de que las distintas partes implicadas estén de acuerdo con la misma y de que sus direcciones de correo electrónico sean correctas. El proceso podrá reanudarse más adelante desde el [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}, seleccionando `Dominios`{.action} en la columna izquierda y haciendo clic en `Operaciones en curso`{.action}.

### 5. Realizar la segunda fase de verificación

En la segunda fase, el actual agente registrador (que todavía no es OVHcloud) recibirá una solicitud de validación. Aquí también pueden darse varias situaciones.

|Escenarios posibles|Resultado|
|---|---|
|El actual agente registrador valida la transferencia.|La transferencia se realiza en un plazo de 24 horas.|
|El actual agente registrador no responde a la solicitud.|La transferencia se realiza al cabo de cinco días.|
|El actual agente registrador rechaza la solicitud.|La transferencia se anula una vez notificado el rechazo.|

En caso de que el actual agente registrador rechace la transferencia, le invitamos a que contacte con él para conocer el motivo. El proceso podrá reanudarse más adelante desde el [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}, seleccionando `Dominios`{.action} en la columna izquierda y haciendo clic en `Operaciones en curso`{.action}.

### 6. Administrar el dominio en OVHcloud

Una vez finalizado el procedimiento de transferencia, podrá administrar el dominio desde el [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}. Para ello, haga clic en `Dominios`{.action} en la columna izquierda y seleccione el dominio correspondiente.

## Más información

[Migrar un sitio web y el correo a OVHcloud](../..//hosting/web_hosting_transferir_un_sitio_web_y_el_correo_sin_cortes_del_servicio/){.external}

Interactúe con nuestra comunidad de usuarios en [https://community.ovh.com/en/](https://community.ovh.com/en/){.external}.
