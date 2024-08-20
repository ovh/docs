---
title: 'Proteger su cuenta de OVHcloud con la doble autenticación'
excerpt: 'Cómo mejorar la seguridad de su cuenta de OVHcloud activando la doble autenticación (2FA)'
updated: 2024-08-21
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
>

## Objetivo

OVHcloud pone a su disposición herramientas para reforzar la seguridad de su cuenta y de sus servicios.
Puede activar la autentificación de dos factores (2FA). Esta se agrega a su nombre de usuario y contraseña, y se gestiona desde uno de sus dispositivos, ya sea un teléfono, una tableta o una llave de seguridad.  

**Descubra los diferentes métodos de doble autenticación propuestos y cómo activarlos.**

Esta guía explica cómo:

- [Comprender los diferentes métodos de doble autenticación](#instructions)
- [Activar su primer método de doble autenticación](#enabling-2fa)
- [Descubrir cómo conectarse con la doble autenticación](#login-2fa)
- [Conocer las gestiones si su teléfono/tablet/llave se pierde/le roban/daña](#lost-device)
- [Saber cómo desactivar completamente la doble autenticación](#disable-2fa)

## Requisitos

- Haber iniciado sesión en el [área de cliente de OVHcloud](/links/manager).
- Disponer de un móvil (para el método por SMS), un teléfono inteligente o una tableta (para el método a través de la aplicación móvil) o una llave de seguridad U2F (Universal Second Factor).
- Haber consultado las [recomendaciones sobre la gestión de la contraseña de acceso a su cuenta](/pages/account_and_service_management/account_information/manage-ovh-password).

## Procedimiento <a name="instructions"></a>

Tiene la posibilidad de activar uno o varios métodos de doble autenticación con el fin de proteger y controlar el acceso a su área de cliente.

Le proponemos cuatro métodos diferentes (haga clic en las fichas siguientes para ver su presentación):

> [!tabs]
> SMS
>>![2FA sms](images/sms.svg)<br>
>> Para este método, debe introducir su número de teléfono móvil.
>> Recibirá un código de un solo uso por SMS cada vez que intente conectarse a su cuenta de OVHcloud.
>>
>> La principal ventaja de este método es que utiliza un código que se envía a un dispositivo distinto del equipo. En caso de intrusión, por ejemplo a través de un programa malicioso, su cuenta permanecerá protegida.
>> No obstante, debe disponer de una cobertura de red suficiente para recibir los SMS.
>>
> Aplicación móvil
>>![2FA OTP](images/app.svg)<br>
>> Para este método, debe instalar una aplicación **OTP** en su smartphone o tablet Android o iOS.
>> Existen numerosas aplicaciones OTP (no hay ninguna aplicación OTP desarrollada por OVHcloud), que se pueden descargar desde Google Play Store para Android o desde Apple Store para iOS. Las dos aplicaciones siguientes son gratuitas:
>>
>> - FreeOTP para Android
>> - OTP Auth para iOS
>>
>> Una vez que la aplicación se haya asociado a su cuenta de OVHcloud, generará un código de un solo uso válido durante un breve período de tiempo (unos segundos) en cada intento de conexión.
>>
>> > [!success]
>> > **Ventajas de este método**:
>> >
>> > - Una vez que la aplicación se haya asociado por primera vez a su cuenta, ya no será necesario estar conectado a internet en su smartphone o tablet para que se generen los códigos.
>> > - Puede utilizar una sola aplicación OTP para todos sus servicios o sitios web que requieran doble autenticación.
>>
> Clave de seguridad
>>![2FA U2F](images/key.svg)<br>
>> Para este método, debe disponer de una llave física **U2F** que conecte a un puerto USB de su ordenador cada vez que se conecte a su cuenta de OVHcloud. La autenticación se realiza automáticamente.
>>
>> Este método ofrece un nivel de seguridad más elevado, ya que se basa en un dispositivo de seguridad independiente, totalmente separado de su ordenador, smartphone o tablet, y que está menos expuesto a los riesgos de pirateo.
> Códigos de seguridad
>>![2FA codes](images/code.svg)<br>
>> Al configurar la doble autenticación (mediante **SMS**, **aplicación móvil** o **clave de seguridad**) por primera vez, se mostrarán 10 códigos de seguridad **de un solo uso** en el área de cliente.
>>
>> Este método de doble autenticación viene como complemento de un método ya activado (por **SMS**, **aplicación móvil** o **clave de seguridad**), no puede activarse por sí solo.
>>
>> En cada intento de conexión, puede introducir uno de los 10 códigos de un solo uso.
>> Es esencial tener siempre al menos 1 código de seguridad restante. No olvide regenerarlos desde su área de cliente si los ha utilizado todos o los ha perdido.

### Etapa 1 - Activar su primer método de doble autenticación <a name="enabling-2fa"></a>

Conéctese al [área de cliente de OVHcloud](/links/manager){.external}, haga clic en su nombre en la esquina superior derecha (1) y seleccione sus iniciales (2). A continuación, haga clic en `Seguridad`{.action} (3) y luego en `Activar la doble autenticación`{.action} (4).

![Enabling 2FA](images/2024-001-enabling-2fa.png){.thumbnail}

**Haga clic en la ficha correspondiente al método que desee:**

> [!tabs]
> SMS
>> Elija el método por SMS y haga clic en `Siguiente`{.action}.
>>
>>![2FA sms](images/2024-002-sms-choice.png){.thumbnail width="400"}<br>
>> Introduzca su número de teléfono móvil en formato internacional (por ejemplo, +33612345678 para un teléfono móvil en España) y valide.
>> A continuación, se envía un código de verificación por SMS al número que haya indicado.
>>
>>![2FA sms](images/2fasms3edit.png){.thumbnail width="400"}<br>
>> Introduzca este código en el campo previsto a tal efecto.<br>
>> También puede añadir una descripción para el número de teléfono indicado.
>>
>>![2FA sms](images/2024-002-sms-code.png){.thumbnail width="400"}<br>
>> La doble autenticación está ahora activada. También es posible añadir otros números.
> Aplicación móvil
>> Elija el método por aplicación móvil y haga clic en `Siguiente`{.action}.
>>
>>![2FA mobileapp](images/2024-003-otp-choice.png){.thumbnail width="400"}<br>
>> Se genera un código QR, escanearlo a través de su aplicación OTP. Si su aplicación OTP no ofrece esta opción, haga clic en `Mostrar el secreto`{.action} para ver un código que debe introducir en la aplicación OTP.<br>
>> La aplicación genera un código de un solo uso.
>> Introduzca el código en el campo previsto a tal efecto (a la derecha del código QR). También puede agregar una descripción para este método de autenticación.
>>
>>![2FA mobileapp](images/2024-003-otp-code.png){.thumbnail width="400"}<br>
>> La doble autenticación está ahora activada.
> Clave de seguridad
>> Elija el método por llave de seguridad y haga clic en `Siguiente`{.action}.
>>
>>![2FA securitykey](images/2024-004-u2f-choice.png){.thumbnail width="400"}<br>
>> Conecte su llave de seguridad cuando se le pida. Si dispone de un botón, púlselo.
>>
>>![2FA securitykey](images/2024-004-u2f-insert.png){.thumbnail width="400"}
>>
>> > [!warning]
>> > Se abrirá una ventana emergente en la que deberá validar la llave. Si no ve esta ventana, asegúrese de que su navegador no bloquea las ventanas emergentes.
>>
>> Una vez reconocida la llave, puede añadir una descripción.
>> La doble autenticación está ahora activada.

Una vez añadido el primer método, también puede **añadir uno o dos métodos más** para disponer de múltiples medios para conectarse a su cuenta.

### Etapa 2 - Guardar los códigos de seguridad <a name="codes"></a>

Al añadir la doble autenticación por primera vez, se mostrarán 10 códigos de seguridad **de un solo uso** en el área de cliente.

**Guárdelos cuidadosamente**. Le recomendamos que los guarde en un gestor de contraseñas, como [KeePass](https://keepass.info/){.external} o [Bitwarden](https://bitwarden.com/) (estas dos aplicaciones son gratuitas).

![2FA](images/2024-005-backup-codes.png){.thumbnail width="544"}

Puede regenerar o eliminar los códigos de seguridad desde su área de cliente:

![2FA](images/emergency-codes.png){.thumbnail}

> [!warning]
>
> **Se recomienda encarecidamente que guarde estos códigos de seguridad** y que se asegure de que son válidos.
> Sin el código de seguridad que posee y en caso de robo o pérdida de su teléfono/smartphone/tablet o de su llave de seguridad, el acceso a su área de cliente y sus servicios podría ser bloqueado.
>

### Etapa 3 - Conectarse al área de cliente de OVHcloud con la doble autenticación <a name="login-2fa"></a>

Conéctese al [área de cliente de OVHcloud](/links/manager){.external} e introduzca su identificador (o dirección de correo electrónico principal) y contraseña.

La pantalla de identificación muestra el último método de doble autenticación utilizado o introducido. Si desea utilizar otro método, haga clic en el botón `Probar con otro método`{.action}.

![2FA](images/2024-007-log-in-01.png){.thumbnail width="400"}

Aparecerán todos los métodos que haya activado, incluido el método de los códigos de seguridad.

![2FA](images/2024-007-log-in-02.png){.thumbnail width="400"}

Si elige este último método, solo tendrá que introducir uno de sus códigos de seguridad.

![2FA](images/2024-007-log-in-03.png){.thumbnail width="400"}

### ¿Qué debo hacer si pierdo o me roban uno de mis dispositivos? <a name="lost-device"></a>

Si el dispositivo (teléfono móvil, smartphone o llave de seguridad) se pierde, le roban o deja de funcionar, puede:

- utilizar [los códigos de seguridad](#codes) activos de los que ha realizado una copia de seguridad;
- utilizar otro dispositivo de doble autenticación a su disposición, si ha activado más de uno;
- [desactivar la doble autenticación](#disable-2fa).

> [!warning]
>
> Si pierde o le roban uno de sus dispositivos, la seguridad de su cuenta de OVHcloud puede verse comprometida.
> Una vez que vuelva a tener acceso a su área de cliente, deberá **eliminar este dispositivo de la lista de dispositivos utilizados para la doble autenticación**.
>
> Consulte el capítulo siguiente de esta guía para obtener más información sobre la eliminación de un dispositivo.
>

### Eliminar un dispositivo asociado a la doble autenticación <a name="delete-device"></a>

> [!warning]
>
> Aunque se elimine un dispositivo, la doble autenticación sigue activa. 
> 
> Antes de eliminar un dispositivo y para evitar que se bloquee el acceso a su cuenta, compruebe que dispone de alguna de las siguientes opciones:
> 
> - Un dispositivo operativo
> - Otro método de doble autenticación operativo 
> - Códigos de seguridad válidos.
> 

Para eliminar un dispositivo, conéctese al [área de cliente de OVHcloud](/links/manager){.external}. Haga clic en su nombre en la esquina superior derecha y luego en sus iniciales.

A continuación, haga clic en `Seguridad`{.action}, luego en los `...`{.action} a la derecha de su dispositivo que quiera eliminar y, por último, en `Eliminar`{.action}.

![2FA](images/2024-006-delete-device.png){.thumbnail}

Recibirá el último código de verificación en el dispositivo que quiera eliminar. Introduzca este código en la ventana que se abre y haga clic en `Validar`{.action} para completar la eliminación.

Si ya no tiene acceso al dispositivo que desea eliminar, no podrá eliminarlo usted mismo del área de cliente de OVHcloud.
En este caso, **póngase en contacto directamente con el equipo de soporte técnico de OVHcloud [creando un tíquet desde el Centro de ayuda](https://help.ovhcloud.com/csm?id=csm_get_help) o siguiendo el proceso descrito [a continuación](#2FA-deletion).

> [!warning]
>
> La eliminación de un único dispositivo no desactiva la doble autenticación en su cuenta de OVHcloud.
>

### Desactivar la doble autenticación por completo <a name="disable-2fa"></a>

#### Si tiene acceso al área de cliente de OVHcloud

Para desactivar por completo la doble autenticación en su cuenta de OVHcloud, es necesario eliminar **todos** los periféricos indicados **y también desactivar los códigos de seguridad**.

Para eliminar cada dispositivo, consulte la [sección dedicada de esta guía](#delete-device).

Una vez que haya eliminado todos los dispositivos, desactive los códigos de seguridad haciendo clic en el botón `Desactivar los códigos 2FA`{.action}.

![2FA codes](images/disabling-codes.png){.thumbnail}

#### Si no tiene acceso al área de cliente de OVHcloud <a name="2FA-deletion"></a>

Si ya no dispone de dispositivos válidos ni de códigos de seguridad válidos, deberá solicitar la desactivación de la doble autenticación proporcionando los documentos de justificación de identidad correspondientes a su cuenta de OVHcloud.

En primer lugar, acceda a [la página de autenticación en el área de cliente de OVHcloud](/links/manager).

Introduzca su usuario y contraseña de OVHcloud para acceder a la fase de doble autenticación. Haga clic en el botón `No tengo acceso a mi móvil, a la llave de seguridad U2F ni a mis códigos de seguridad`{.action}.<br>
Si no ve este botón, haga clic en el botón `Probar con otro método`{.action} y luego en `No tengo acceso a mi móvil, a la llave de seguridad U2F ni a mis códigos de seguridad`{.action}.

La siguiente interfaz le permite descargar y enviar a nuestro equipo los documentos necesarios para desactivar la doble autenticación en su cuenta.

> [!warning]
>
> - Atención, asegúrese de que todos sus documentos son correctos y legibles antes de enviarlos.
> - **Se aceptan formatos**: jpg, jpeg, pdf, png. El tamaño máximo del archivo para cada documento es de 10 MB.
> - En caso de documentos no válidos, este procedimiento se cancelará y deberá realizar uno nuevo.

En un plazo de 72 horas, recibirá la confirmación de la desactivación de la doble autenticación por correo electrónico.

/// details | Lista de justificantes

|Tipo de cuenta OVHcloud|Justificantes a adjuntar|
|---|---|
|Particular|- Documento de identidad (DNI, permiso de conducir o pasaporte), que menciona el nombre completo, la fecha de nacimiento y la fecha de expiración, a nombre del titular de la cuenta de OVHcloud. <br><br>- Justificante de domicilio correspondiente al registrado en la cuenta OVHcloud, de menos de dos meses.<br>**Si, después de un traslado, no ha actualizado su dirección en su área de cliente de OVHcloud, deberá proporcionar :**<br>- Un justificante de domicilio en la antigua dirección <br>- Un justificante de domicilio en la nueva dirección, de menos de dos meses.<br> Si vive ahora en un tercero, deberá proporcionar:<br>- Un justificante de domicilio a nombre de la persona que le aloje, de menos de dos meses<br>- Un certificado de alojamiento firmado por la persona que le aloje|
|Empresa|- Documento de identidad (DNI, permiso de conducir o pasaporte) que mencione el nombre completo, la fecha de nacimiento y la fecha de expiración al nombre de una persona autorizada para representar a la empresa.<br><br>- Documento de registro de la empresa que indica la persona autorizada para representar la empresa.|

///

Una vez que haya reunido los documentos justificativos, póngase en contacto con nuestro equipo de soporte:

- España: 91 758 34 77
- América Latina: 1-855-684-5463

> [!warning]
>
> Los justificantes deberán enviarnos desde una dirección de correo electrónico registrada en su cuenta de OVHcloud.

Tras comprobar sus documentos, un asesor podrá desactivar manualmente la doble autenticación en su cuenta de OVHcloud.

> [!success]
>
> Por motivos de seguridad, una vez restablecido el acceso a su cuenta, le recomendamos que reactive la doble autenticación lo antes posible.

## Más información

Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con [partners de OVHcloud](https://partner.ovhcloud.com/es-es/directory/).

Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestras distintas soluciones [pestañas de soporte](https://www.ovhcloud.com/es-es/support-levels/).

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.