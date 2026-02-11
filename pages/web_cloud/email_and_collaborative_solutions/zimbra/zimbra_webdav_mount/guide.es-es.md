---
title: "Zimbra - Configurar una carpeta WebDAV en su ordenador"
excerpt: "Configure el acceso WebDAV a la Maleta Zimbra en su ordenador para gestionar y compartir sus archivos directamente desde su sistema"
updated: 2026-02-10
---

<style>
.w-600 {
  max-width:600px !important;
}
.h-600 {
  max-height:600px !important;
}
</style>

## Objetivo

Las cuentas de correo Zimbra Pro disponen de un espacio de almacenamiento, llamado **Maleta**, que se puede utilizar para intercambiar archivos mediante la función WebDAV. Esta función está disponible a través del Webmail Zimbra y también se puede configurar en su ordenador para mostrar la Maleta como un volumen de almacenamiento.

**Descubra cómo montar una carpeta WebDAV Zimbra en su ordenador.**

## Requisitos

- Disponer de una dirección de correo [Zimbra Pro](/links/web/emails) OVHcloud.
- Disponer de un ordenador con Windows o macOS.
- Tener los identificadores relacionados con la dirección de correo asociada a la cuenta Zimbra Pro correspondiente.

## Procedimiento

WebDAV (Web-based Distributed Authoring and Versioning) es una extensión del protocolo HTTP que permite gestionar de forma remota archivos en un servidor y modificarlos como si estuvieran en local.

El espacio de almacenamiento asignado a su cuenta de correo Zimbra se comparte entre sus correos y los archivos presentes en la Maleta. Cada archivo subido a la Maleta Zimbra no puede superar los 100 MB.

En esta documentación, utilizaremos la dirección de correo de ejemplo `john.smith@mydomain.ovh` y la carpeta de la Maleta que montaremos será la carpeta `Briefcase`, que está presente por defecto.

### Montar una carpeta desde Windows

Antes de poder conectarse a su carpeta WebDAV desde el explorador de Windows, es necesario activar y configurar los servicios relacionados con la conexión a un volumen WebDAV.

#### 1. Activar el servicio WebClient

> [!tabs]
> **Paso 1**
>>
>> - Abra `Servicios`{.action} desde el menú Inicio de Windows.
>>
>> ![MX plan](images/windows-services-01.png){.thumbnail .w-600}
>>
> **Paso 2**
>>
>> 1. Identifique el servicio **WebClient** en la lista.
>> 2. Haga clic derecho en **WebClient**, luego haga clic en `Propiedades`{.action}.
>> 3. Cambie el *Tipo de inicio* a **Automático**.
>> 4. Haga clic en `Iniciar`{.action} para iniciar el servicio, luego haga clic en `Aceptar`{.action} para validar los cambios.
>>
>> ![MX plan](images/windows-services-02.png){.thumbnail .w-600}

#### 2. Modificar la clave de registro WebClient

> [!tabs]
> **Paso 1**
>>
>> - Abra el `Editor del Registro`{.action} desde el menú Inicio de Windows.
>>
>> ![MX plan](images/windows-regedit-01.png){.thumbnail .w-600}
>>
> **Paso 2**
>>
>> 1. Identifique el servicio **WebClient** en el árbol `HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\WebClient\Parameters\BasicAuthLevel`.
>> 2. Haga doble clic en la clave del registro `BasicAuthLevel`.
>> 3. Cambie el *Valor de datos*: por defecto definido como `1`, cámbielo a `2` y haga clic en `Aceptar`{.action} para validar los cambios.
>>
>> ![MX plan](images/windows-regedit-02.png){.thumbnail .w-600}

#### 3. Importar el certificado SSL del servidor Zimbra

> [!primary]
>
> Para exportar el certificado SSL, utilizamos el navegador [Mozilla Firefox](https://www.firefox.com/).

> [!tabs]
> **Paso 1**
>>
>> 1. Abra su navegador web, cargue la página https://zimbra1.mail.ovh.net/, luego haga clic en el icono del candado en la barra de direcciones.
>> 2. Haga clic en `Conexión segura`{.action}.
>> 3. Haga clic en `Más información`{.action}.
>>
>> ![MX plan](images/windows-ssl-01.png){.thumbnail .w-600}
>>
> **Paso 2**
>>
>> 1. Haga clic en `Ver certificado`{.action}.
>> 2. Desde la ventana que aparece, permanezca en la pestaña `zimbra1.mail.ovh.net` y haga clic en `PEM (cert)`{.action} para descargar el certificado SSL.
>>
>> ![MX plan](images/windows-ssl-02.png){.thumbnail .w-600}
>>
> **Paso 3**
>>
>> - Cambie la extensión del archivo de `.pem` a `.cer`.
>>
>> ![MX plan](images/windows-ssl-03.png){.thumbnail .w-600}
>>
> **Paso 4**
>>
>> 1. Abra el archivo `zimbra1-mail-ovh-net.cer`, luego haga clic en `Instalar certificado…`{.action}.
>> 2. Haga clic en `Equipo local`{.action}, luego haga clic en `Siguiente`{.action}.
>> 3. Marque `Colocar todos los certificados en el siguiente almacén`, luego haga clic en `Examinar…`{.action}.
>> 4. Seleccione la carpeta `Entidades de certificación raíz de confianza`, luego haga clic en `Aceptar`{.action}.
>>
>> ![MX plan](images/windows-ssl-04.png){.thumbnail .w-600}

#### 4. Montar el volumen

En nuestro ejemplo, utilizamos la dirección de correo de la cuenta Zimbra `john.smith@mydomain.ovh` y la carpeta `Briefcase`, creada por defecto en el espacio de almacenamiento de Zimbra.

1. Abra el explorador de archivos de Windows y haga clic en `Este equipo`{.action}.
2. En la barra superior, haga clic en el botón `…`{.action}, luego en `Asignar unidad de red`{.action}.
3. En la ventana que aparece, escriba la ruta de acceso a la carpeta. Según nuestro ejemplo, la ruta es `\\zimbra1.mail.ovh.net@SSL\dav\john.smith@mydomain.ovh\Briefcase`. Haga clic en `Finalizar`{.action}.
4. Se abre una ventana de autenticación, escriba el `Nombre de usuario` que corresponde a la dirección de correo completa y la `Contraseña` asociada a la misma. Haga clic en `Aceptar`{.action}.

![MX plan](images/windows-mount-01.png){.thumbnail .w-600}

Su volumen de red ahora se muestra. Puede depositar sus archivos en él, dentro del límite de 100 MB por archivo.

![MX plan](images/windows-mount-02.png){.thumbnail .w-600}

### Montar una carpeta desde macOS

En macOS, no es necesario activar un servicio ni registrar el certificado SSL, basta con montar el volumen directamente desde el **Finder**.

> [!tabs]
> **Paso 1**
>>
>> - Abra el **Finder**.
>> - En la barra superior, haga clic en el menú `Ir a`{.action}.
>> - Haga clic en `Conectar al servidor`{.action} (`⌘ + K`).
>>
>> ![MX plan](images/macos-mount-01.png){.thumbnail .w-600}
>>
> **Paso 2**
>>
>> > [!warning]
>> >
>> > Es importante reemplazar el `@` de su dirección de correo por `%40` en la entrada de la ruta de acceso.
>>
>> - Desde la ventana que aparece, escriba la ruta de conexión adaptada a su dirección de correo y la carpeta que desea conectar. Según nuestro ejemplo, la ruta es `https://zimbra1.mail.ovh.net/dav/john.smith%40mydomain.ovh/Briefcase`.
>> - Haga clic en `Conectar`{.action}.
>>
>> ![MX plan](images/macos-mount-02.png){.thumbnail .w-600}
>>
> **Paso 3**
>>
>> 1. Se muestra una ventana de validación del servidor `zimbra1.mail.ovh.net`, haga clic en `Conectar`{.action}.
>> 2. Una nueva ventana le pedirá que escriba el `Nombre` que corresponde a su dirección de correo completa y la `Contraseña` asociada a la misma. Marque `Guardar esta contraseña en mi llavero` si desea conservarla para una conexión futura a otra carpeta. Haga clic en `Conectar`{.action} para montar el volumen.
>>
>> ![MX plan](images/macos-mount-03.png){.thumbnail .w-600}

Ahora tiene acceso al espacio de almacenamiento de su Maleta Zimbra. Puede depositar cualquier tipo de archivo que no supere los 100 MB.

![MX plan](images/macos-mount-04.png){.thumbnail .w-600}

## Más información <a name="go-further"></a>

[Primeros pasos con la oferta Zimbra](/pages/web_cloud/email_and_collaborative_solutions/zimbra/getting_started_zimbra)

[Configurar su dirección de correo Zimbra en un software de mensajería](/pages/web_cloud/email_and_collaborative_solutions/zimbra/zimbra_mail_apps)

[Usar el webmail Zimbra](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_zimbra)

[Preguntas frecuentes sobre la solución Zimbra OVHcloud](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/faq-zimbra)

Para servicios especializados (posicionamiento, desarrollo, etc.), póngase en contacto con los [socios OVHcloud](/links/partner).

Si desea beneficiarse de un soporte en el uso y configuración de sus soluciones OVHcloud, le invitamos a consultar nuestras diferentes [ofertas de soporte](/links/support).

Interactúe con nuestra [comunidad de usuarios](/links/community).