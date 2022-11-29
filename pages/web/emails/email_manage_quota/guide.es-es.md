---
title: Gestionar el espacio de almacenamiento de una cuenta de correo
slug: manage-email-quota
excerpt: "Cómo gestionar y optimizar el espacio de almacenamiento de una dirección de correo"
section: 'Diagnóstico'
order: 02
---

**Última actualización: 17/11/2022**

## Objetivo

Cada cuenta de correo de OVHcloud dispone de un espacio de almacenamiento dedicado. Gestionar bien el espacio de almacenamiento permite evitar la saturación, también llamada "overquota". Por defecto, los mensajes que usted reciba y envíe se almacenan en el servidor de su cuenta de correo. También es posible almacenar los mensajes de correo en local en su ordenador a través de un cliente de correo electrónico (Outlook, Mail de macOS, Thunderbird, etc.).

**Esta guía explica cómo gestionar y optimizar el espacio de almacenamiento de una dirección de correo electrónico.**

## Requisitos

- Disponer de una solución de correo electrónico de OVHcloud previamente configurada (**MX Plan**, incluida en nuestros [planes de hosting](https://www.ovhcloud.com/fr/web-hosting/), incluida en un [alojamiento Start10M gratuito](https://www.ovhcloud.com/fr/domains/free-web-hosting/) o contratada por separado como solución autónoma, como [**Hosted Exchange**](https://www.ovhcloud.com/fr/emails/hosted-exchange/) o [**Email Pro**](https://www.ovhcloud.com/fr/emails/email-pro/)).
- Estar conectado al [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr){.external}, en la sección `Web Cloud`{.action}.
- Disponer de la información de conexión a las direcciones de correo electrónico correspondientes.

> [!primary]
>
> **Casos particulares**
>
> - En el caso del hosting gratuito Start 10M, es necesario activar previamente el alojamiento para poder crear una dirección de correo. Puede realizar esta operación desde el [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr){.external}, accediendo al dominio correspondiente.
> - Si tiene un [alojamiento web](https://www.ovhcloud.com/fr/web-hosting/){.external}, deberá activar su solución MX Plan incluida antes de continuar la lectura de esta guía. Para ello, consulte nuestra guía [Activar las direcciones de correo incluidas en su alojamiento web](https://docs.ovh.com/fr/hosting/activer-email-hebergement-web/).

## En la práctica <a name="instructions"></a>

La gestión del espacio de almacenamiento de su cuenta de correo se dividirá en 3 pasos en esta guía. Se pueden realizar en el orden o de forma independiente, según lo necesite.

- [**Comprobar**](#check-quota) el límite actual de su cuenta de correo. Esta operación le permitirá evaluar su consumo actual en las dos siguientes etapas.
- [**Optimizar**](#optimise) su cuenta de correo. Esta etapa le proporciona consejos que le permitirán mantener un espacio de almacenamiento sin elementos superfluos.
- [**Archivar** o **cambiar de servicio de correo**](#archiveorswitch). Si el paso anterior no es suficiente, encontrará la información necesaria para configurar un espacio de archivado local (en su ordenador) para sus emails a través de su cliente de correo. También encontrará la información necesaria para cambiar la solución de correo de su cuenta a una solución que disponga de un mayor espacio de almacenamiento.

![Correo electrónico](images/email-quota-intro.gif){.thumbnail}

### 1. **Comprobar** el límite actual de su cuenta de correo <a name="check-quota"></a>

Puede realizar esta acción desde el área de cliente si tiene la gestión del servicio de correo en cuestión, o desde el webmail si es únicamente el usuario de la cuenta de correo.

#### Desde el área de cliente <a name="quotacontrolpanel"></a>

Desde el [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr){.external}, acceda al apartado `Web Cloud`{.action} y siga las indicaciones de su solución:

> [!tabs]
> **Emails (MXplan)**
>>
>> Haga clic en `Correo electrónico`{.action} y seleccione el servicio MX Plan correspondiente. Abra la pestaña `Cuentas de correo`{.action}. Se abrirá una ventana en la que se mostrarán las cuentas de correo existentes. En la columna `Tamaño`, puede consultar el consumo en curso de almacenamiento de su dirección de correo electrónico.<br><br>
>>![Correo electrónico](images/email-quota-quotacontrolpanel01.png){.thumbnail}<br>
>>
> **Email Pro**
>>
>> Haga clic en `Email Pro`{.action} y seleccione el nombre de la plataforma correspondiente. Abra la pestaña `Cuentas de correo`{.action}. Se abrirá una ventana en la que se mostrarán las cuentas de correo existentes. En la columna `Tamaño`, puede consultar el consumo en curso de almacenamiento de su dirección de correo electrónico.<br><br>
>>![Correo electrónico](images/email-quota-quotacontrolpanel02.png){.thumbnail}<br>
>>
> **Exchange**
>>
>> Haga clic en `Microsoft`{.action} / `Exchange`{.action} y seleccione el nombre de la plataforma correspondiente. Abra la pestaña `Cuentas de correo`{.action}. Se abrirá una ventana en la que se mostrarán las cuentas de correo existentes. En la columna `Tamaño`, puede consultar el consumo en curso de almacenamiento de su dirección de correo electrónico.<br><br>
>>![Correo electrónico](images/email-quota-quotacontrolpanel03.png){.thumbnail}<br>
>>

#### Desde el webmail <a name="quotawebmail"></a>

Para conectarse al webmail, acceda a la página <https://www.ovhcloud.com/fr/mail/>e introduzca los datos de conexión a su cuenta de correo. Seleccione a continuación el webmail correspondiente a su solución:

> [!tabs]
> **OWA**: **Emails (MX Plan)** / **Email Pro** / **Exchange**
>>
>> Haga clic en el botón <i class=".icons-gear-concept icons-masterbrand-blue"></i>situado en la parte superior derecha de la pantalla y seleccione `Opciones`{.action}. Haga clic en `Mi cuenta`{.action} en la sección `General`{.action} de la columna izquierda. Puede ver el límite actual de su cuenta en la parte inferior derecha del formulario.<br><br>
>>![Correo electrónico](images/email-quota-webmail01.png){.thumbnail}<br>
>>
> **Roundcube**: **Emails (MXplan)**
>>
>> Cuando se conecta al webmail Roundcube, la cuota se muestra en la parte inferior izquierda, materializada por un campo y el porcentaje consumido.<br><br>
>>![Correo electrónico](images/email-quota-webmail02.png){.thumbnail}<br>
>>

### 2. **Optimizar** su cuenta de correo <a name="optimise"></a>

Si su cuenta de correo está saturada, significa que no podrá recibir mensajes de correo.<br>
Cuando una persona le envía un mensaje de correo electrónico, recibe un mensaje de error del tipo *"552, "5.2.2", en respuesta automática, La cuenta de correo a la que ha enviado un mensaje ha agotado su cuota. "*.<br>
Cuando la cuenta de correo está saturada, puede enviar mensajes por su parte. No obstante, estos mensajes no podrán almacenarse en su bandeja de salida.

#### Optimizar el espacio asignado a su cuenta de correo

Antes de realizar cualquier otra operación en su cuenta de correo, es necesario conocer correctamente el contenido de su cuenta de correo para eliminar todos los elementos superfluos. Por favor, compruebe algunos de ellos en particular:

- `1`{.action} **La Papelera (trash)**: esta contiene los elementos que ha eliminado. Para no acumular mensajes de correo en esta carpeta, le recomendamos que vacíe la papelera periódicamente.
- `2`{.action} **Elementos enviados (huele messages)**: al enviar un mensaje de correo electrónico, este se transmite al destinatario. pero también se conservará en su cuenta de correo en los elementos enviados. Le recomendamos que purgue regularmente esta carpeta o archive su contenido localmente en su ordenador o en un espacio de almacenamiento remoto de tipo "cloud".
- `3`{.action} **Los mensajes de correo almacenados que contienen documentos adjuntos voluminosos**: los mensajes de correo que contienen adjuntos tienen más espacio en su cuenta de correo. Le recomendamos que almacene los widgets en un espacio de almacenamiento local (ordenador) o remoto (cloud).
- `4`{.action}**Ordenar sus carpetas**: cuando tiene muchos directorios en su cuenta de correo, es menos fácil medir el espacio ocupado en su cuenta e-mail. Realice regularmente un inventario de sus carpetas y de su contenido.

![Correo electrónico](images/email-quota-optimise01.png){.thumbnail}

#### Aumentar la capacidad de su cuenta de correo

Es posible aumentar la capacidad de almacenamiento de su cuenta de correo si esta no ha alcanzado su capacidad máxima. A continuación explicamos cómo hacerlo, en función de su plan:

> [!tabs]
> **Emails (MXplan)**
>>
>> La capacidad de una cuenta MXplan puede ir desde 2,5 MB hasta 5 GB. Si está saturado y tiene una capacidad inferior a 5 GB, puede modificar su capacidad a través de la>
>> En la pestaña `Cuentas de correo` {.action}, haga clic en el botón <i class="icons-ellipsis icons-border-rounded icons-masterbrand-blue"></i>situado al final de la línea correspondiente a la cuenta que quiera modificar y seleccione `Editar` {.action}.
>> En la casilla `Cuota` {.action}, seleccione el tamaño que más le convenga, haga clic en `Siguiente` {.action} y luego en `Aceptar` {.action}.<br><br>
>> ![email](images/email-quota-more01.png) {.thumbnail}<br>
>>
> **Email Pro**
>> 
>> La solución Email Pro tiene una capacidad única de 10 GB. Si necesita un mayor almacenamiento, deberá contratar un plan que le ofrezca más espacio. Para ello, lea la sección >
>>
> **Exchange**
>>
>> Si su cuenta Exchange se satura en sus 50 GB, es posible que los productos **Hosted** y **Provider** contraten una opción de extensión para aumentar su capacidad a 300 GB.<br>
>> En la pestaña `Cuentas de correo`{.action} de su plataforma, haga clic en el botón <i class="icons-ellipsis icons-border-rounded icons-masterbrand-blue"></i>situado al final de la línea correspondiente a la cuenta que quiera modificar y seleccione `Aumentar la capacidad a 300 GB`{.action}. Elija el modo de facturación más adecuado y haga clic en `Aceptar`{.action}.<br><br>
>>![Correo electrónico](images/email-quota-more02.png){.thumbnail}<br>
>>
>> Si su cuenta Exchange ya ha llenado sus 300 GB de almacenamiento en un servicio **Hosted** o **Provider**, deberá liberar espacio en su cuenta Exchange eliminando elementos superfluos o [archivando los mensajes](#archiveorswitch) de correo en su ordenador local. Esta situación se aplica igualmente a las cuentas Exchange de 50 GB presentes en una solución **Private**.
>>

### 3- **Archivar** o **cambiar de servicio de correo** <a name="archiveorswitch"></a>

#### Archivar los mensajes de correo en local en su ordenador

> [!warning]
> 
> Los siguientes datos se basan en una configuración IMAP de su cuenta de correo, siendo esta la configuración más común. La configuración POP se basa en el principio de almacenamiento local del correo. En nuestro contexto, no es apropiado archivar los mensajes que ya se almacenan localmente en su ordenador.

Cuando ha configurado su dirección de correo electrónico en su cliente de correo electrónico con IMAP, **por defecto**, el contenido visible corresponde a lo que se está **sincronizando en el servidor de correo**. Esto significa que los mensajes de correo se cargan en su ordenador, pero desaparecen si se eliminan del servidor. Para **archivarlos en su ordenador**, debe configurar su cliente de correo.

![Correo electrónico](images/email-quota-step03-archive.png){.thumbnail}

Si lo desea, es posible liberar el espacio de almacenamiento de su cuenta e-mail almacenando sus emails directamente en su ordenador. Para ello, deberá utilizar un cliente de correo instalado en su ordenador.
ya que el cliente de correo convertirá su correo en archivos para poder almacenarlo en su ordenador. No obstante, es necesario configurar la función "archivo" del cliente de correo. Los mensajes de correo estarán entonces en una carpeta "local" y no directamente en el servidor de su cuenta de correo.

A continuación ofrecemos una lista no exhaustiva de las guías de configuración para los clientes de correo electrónico, en función de la solución que posea:

A continuación ofrecemos una lista no exhaustiva de las guías de configuración para los clientes de correo que utilizan:

- el protocolo IMAP de las ofertas **MXplan** y **Email Pro**;
- el protocolo MAPI de la solución **Exchange** para Outlook Windows;
- el protocolo EWS de la solución **Exchange** para Outlook macOS.

> [!tabs]
> **Emails (MXplan)**
>>
>> Configuración de una cuenta MXplan en **Windows**:<br><br>
>> - >
>> - ><br>
>> Configuración de una cuenta MXplan en **macOS**:<br><br>
>> - >
>> - >
>> - >
>>
> **Email Pro**
>>
>> Configuración de una cuenta Email Pro en **Windows**:<br><br>
>> - >
>> - >
>> - ><br>
>> Configuración de una cuenta Email Pro en **macOS**:<br><br>
>> - >
>> - >
>> - >
>>
> **Exchange**
>>
>> Configuración de una cuenta Exchange en **Windows**:<br><br>
>> - >
>> - >
>> - ><br>
>> Configuración de una cuenta Exchange en **macOS**:<br><br>
>> - >
>> - >
>> - >
>>

Una vez instalado el cliente de correo, siga las instrucciones que se indican a continuación para preparar el archivo comprimido en su cliente de correo.

> [!tabs]
> **Outlook**
>>
>> En Outlook, asegúrese de que, en la columna de la izquierda, esté presente la carpeta "archivado" o "en mi ordenador" para poder guardar en su ordenador los elementos que desee guardar localmente. Consulte la documentación de Microsoft para preparar su carpeta de archivos:<br><br>
>> - >
>> - >
>>
> **Mail macOS**
>>
>> Desde Mail en macOS, cree una carpeta que aparecerá en la sección "En mi Mac" de la columna izquierda. Para ello, consulte la documentación de Apple:<br><br>
>> - >
>>
> **Thunderbird**
>>
>> Desde Windows, macOS o Linux puede mover sus mensajes de correo a una carpeta de la izquierda. Consulte la documentación de Mozilla:<br><br>
>> - >
>>

#### Cambiar de plan para aumentar su capacidad <a name="switchingoffer"></a>

En el siguiente menú, seleccione la solución actual de su cuenta de correo:

> [!tabs]
> **Emails (MXplan)**
>>
>> Si su cuenta de correo ya tiene una capacidad máxima de 5 GB, puede optar por migrar a una solución [**Email Pro** de 10 GB](https://www.ovhcloud.com/fr/emails/email-pro/) o [**Hosted Exchange** de 50 GB](https://www.ovhcloud.com/fr/emails/hosted-exchange/). Para ello, puede contratar el servicio más adecuado y consultar nuestra guía [Migrar una dirección de correo MX Plan a una cuenta Email Pro o Exchange](https://docs.ovh.com/fr/microsoft-collaborative-solutions/migration-adresse-e-mail-mutualisee-vers-exchange/). 
>>
> **Email Pro**
>>
>> La solución Email Pro tiene una capacidad única de 10 GB. Puede optar por migrar a un servicio [**Hosted Exchange** de 50 GB](https://www.ovhcloud.com/fr/emails/hosted-exchange/). Para ello, le recomendamos que contrate el plan más adecuado y consulte nuestra guía "[Migrar sus direcciones de correo de una plataforma de correo de OVHcloud a otra](https://docs.ovh.com/fr/microsoft-collaborative-solutions/migration-email-platform/)".
>>
> **Exchange**
>>
>> Si su cuenta Exchange llega a saturación de 50 GB de espacio, es posible contratar una opción de extensión para ampliar su capacidad a 300 GB. Solo si la cuenta Exchange está presente en un servicio **Hosted** o **Provider**.<br>
>> En la pestaña `Cuentas de correo`{.action} de su plataforma Exchange, haga clic en el botón <i class="icons-ellipsis icons-border-rounded icons-masterbrand-blue"></i>situado al final de la línea correspondiente a la cuenta que quiera modificar y seleccione `Aumentar la capacidad a 300 GB`{.action}.<br><br>
>> ![Correo electrónico](images/email-quota-more02.png){.thumbnail}<br>
>>

## Más información

[Migrar una cuenta MX Plan a una cuenta Email Pro o Exchange](https://docs.ovh.com/fr/microsoft-collaborative-solutions/migration-adresse-e-mail-mutualisee-vers-exchange/)

[Migrar manualmente una dirección de correo electrónico](https://docs.ovh.com/fr/emails/migrer-ses-adresses-email-manuellement/)

[Migrar sus direcciones de correo de una plataforma de correo de OVHcloud a otra](https://docs.ovh.com/fr/microsoft-collaborative-solutions/migration-email-platform/)

Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestros distintos [servicios de soporte](https://www.ovhcloud.com/fr/support-levels/).

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/>.
