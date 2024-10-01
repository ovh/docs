---
title: Gestionar los contactos de los servicios
excerpt: Cómo gestionar los distintos contactos de los servicios de OVHcloud
updated: 2024-02-16
---

## Objetivo

La mayoría de servicios creados en OVHcloud los gestionan varios contactos. Cada uno de esos contactos está asociado a una cuenta de cliente. 

**Esta guía explica cómo gestionar los contactos de los servicios de OVHcloud.**

## Definición

Existen tres tipos de contactos:

- **El contacto administrador** se encarga de los aspectos administrativos y técnicos del servicio. Tiene permisos para modificar el resto de contactos y puede realizar cambios en los datos del propietario de servicios como, por ejemplo, los dominios.
- **El contacto técnico** solo se encarga de los aspectos técnicos del servicio.
- **El contacto de facturación** solo se encarga de los aspectos relativos a la facturación del servicio. En concreto, es el que recibe las notificaciones referentes a las renovaciones. 

![Gestión de contactos](images/managing_contacts_scheme.png){.thumbnail}

## Requisitos

- Estar conectado a su [área de cliente de OVHcloud](/links/manager){.external}.
- Tener acceso a la dirección de correo electrónico que se indica en el perfil de su cuenta.
- Tener los permisos necesarios sobre el servicio correspondiente.
- Conocer la dirección de correo electrónico principal indicada en la cuenta de OVHcloud del nuevo contacto (para poder modificarlo).
- El nuevo contacto debe tener acceso a la dirección de correo electrónico que se indica en el perfil de su cuenta.
- El antiguo y el nuevo contacto de facturación deben estar al corriente de pago.

## Procedimiento

> [!primary]
> Solo es posible gestionar los contactos entre dos cuentas de OVHcloud situadas en la misma zona geográfica.
> Por ejemplo, no es posible gestionar los contactos entre una cuenta en Europa y una cuenta en Canadá.

### Acceder a la gestión de los contactos

Conéctese a su [área de cliente de OVHcloud](/links/manager){.external}, haga clic en el nombre asociado a su cuenta de cliente en la esquina superior derecha y seleccione `Gestión de contactos`{.action}.

![Gestión de contactos](images/hubcontacts.png){.thumbnail}

Se mostrará una tabla con todos los servicios en los que su identificador de cliente aparece como contacto.

![Gestión de contactos](images/managing_contacts_02.png){.thumbnail}

### Cambiar los contactos de un servicio

Una vez en la página de gestión de los contactos, haga clic en `...`{.action} a la derecha del servicio que quiere modificar y, seguidamente, en `Modificar los contactos`{.action}. Introduzca el o los nuevos contactos que desee (introduzca la dirección de correo electrónico principal de la cuenta correspondiente) y haga clic en `Confirmar`{.action} su solicitud.

![Gestión de contactos](images/managing_contacts_03.png){.thumbnail}

![Gestión de contactos](images/managing_contacts_04.png){.thumbnail}

Los contactos implicados en el proceso de modificación recibirán un mensaje de correo electrónico.

#### Soy contacto administrador

Como administrador, puede realizar distintas modificaciones en los contactos de un servicio:

- Indicar un nuevo contacto técnico y/o de facturación. Para ello, es necesario que tanto usted como los nuevos contactos validen el cambio. Una vez validado, el antiguo contacto recibirá un mensaje de correo electrónico informándole del cambio.

- Ponerse a sí mismo como contacto técnico y/o de facturación. Usted deberá validar la solicitud. El antiguo contacto recibirá un mensaje de correo electrónico informándole del cambio de contacto. 

- Indicar un nuevo contacto administrador en su lugar. Para ello, es necesario que tanto usted como el nuevo contacto administrador validen el cambio. 

#### Soy contacto técnico

Como contacto técnico, solo puede designar a otro contacto técnico que ocupe su lugar. Para ello, es necesario que tanto usted como el nuevo contacto técnico validen el cambio.

#### Soy contacto de facturación

Como contacto de facturación, solo puede designar a otro contacto de facturación que ocupe su lugar. Para ello, es necesario que tanto usted como el nuevo contacto de facturación validen el cambio.

> [!warning]
> El antiguo y el nuevo contacto de facturación deben estar al corriente de pago.

### Validar, rechazar o realizar el seguimiento de un cambio de contacto

Para gestionar y realizar el seguimiento de las solicitudes en curso, haga clic en `Gestión de contactos`{.action} > `Mis solicitudes`{.action}. Ahí es donde puede aceptar o rechazar una solicitud.

![Gestión de contactos](images/managing_contacts_05.png){.thumbnail}

Para ello, recibirá por correo electrónico un código de verificación (también llamado «token») que deberá introducir para aceptar o denegar la solicitud de cambio.

> [!primary]
> Este código es personal, de un solo uso y diferente para los dos contactos que lo reciben.

En el mensaje de correo electrónico anterior también encontrará un enlace con el que podrá acceder directamente a la página en la que podrá aceptar o denegar la solicitud de cambio. Si utiliza dicho enlace, el código de verificación (token) se completará de forma automática.

En caso de que uno de los contactos no haya recibido el mensaje de correo electrónico, deberá comprobar que la dirección del contacto que se indica en el perfil de su cuenta esté actualizada. Si no lo está, actualícela y vuelva a solicitar el envío del email haciendo clic en `Volver a enviar la solicitud`{.action}.

![Gestión de contactos](images/managing_contacts_06.png){.thumbnail}

Si solo uno de los contactos valida la solicitud de cambio, aparecerá un mensaje informándole de que la solicitud está pendiente de validación por parte del otro contacto. Si el contacto acaba de validar la solicitud de cambio, es posible que la información que se muestra en el [área de cliente de OVHcloud](/links/manager){.external} tarde unos minutos en actualizarse.

![Gestión de contactos](images/managing_contacts_007.png){.thumbnail}

Una vez que los dos contactos hayan validado la solicitud, el cambio se hará efectivo en minutos. Los dos contactos recibirán un mensaje de correo electrónico informándole de que la solicitud de cambio se ha realizado correctamente.

## Más información

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
