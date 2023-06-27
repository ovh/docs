---
title: Migrar manualmente una dirección de correo electrónico
excerpt: Cómo migrar manualmente su dirección de correo a otra dirección de correo
updated: 2021-01-05
---

**Última actualización: 27/10/2020**

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
> 

## Objetivo

[Es posible migrar automáticamente](https://docs.ovh.com/us/es/microsoft-collaborative-solutions/exchange-migracion-de-cuentas-correo-ovh-mail-migrator/){.external} una cuenta de correo a través de nuestra herramienta [OVH Mail Migrator](https://omm.ovh.net/){.external}. También puede migrar su cuenta de correo electrónico manualmente a través de los programas de correo.

**Esta guía explica cómo migrar manualmente una dirección de correo electrónico.**

> [!warning]
>
> La configuración, la gestión y la responsabilidad de los servicios que OVHcloud pone a su disposición recaen sobre usted. Por lo tanto, usted deberá asegurarse de que estos funcionen correctamente.
>
> Esta guía le ayudará a realizar las operaciones más habituales. No obstante, si tiene alguna duda le recomendamos que contacte con un proveedor de servicios especializado o con el editor del servicio. Nosotros no podremos asistirle al respecto. Para más información, consulte el apartado "Más información" de esta guía.
>

## Requisitos

- Disponer de un servicio de correo en OVHcloud, como una solución [Exchange](https://www.ovhcloud.com/es/emails/hosted-exchange/){.external} o MX Plan (a través de la solución MX Plan o incluida en un plan de [hosting de OVHcloud](https://www.ovhcloud.com/es/web-hosting/){.external}).
- Disponer del nombre de usuario y la contraseña de las cuentas de correo electrónico que quiera migrar (las cuentas de origen).
- Disponer del nombre de usuario y la contraseña de las cuentas de correo electrónico de OVHcloud que recibirán los datos que se migran (las cuentas de destino).

## Procedimiento

> [!primary]
> En primer lugar, compruebe si nuestra herramienta [OVH Mail Migrator](https://omm.ovh.net/){.external} permite la migración automática. Para ello, consulte la guía [Migrar cuentas de correo electrónico a través de OVH Mail Migrator](https://docs.ovh.com/us/es/microsoft-collaborative-solutions/exchange-migracion-de-cuentas-correo-ovh-mail-migrator/){.external}.

En esta guía hemos realizado las operaciones con los tres programas de correo más utilizados, **Outlook**, **Mail** en Mac OS y **Thunderbird**.

Las instrucciones siguientes se dividen en dos partes:

- **La exportación**. De este modo, podrá descargar una copia de seguridad completa de su dirección de correo para cambiarla a otro correo, programa de correo o importación a otra cuenta . Si debe mover elementos de una dirección de correo electrónico a otra dirección configurada en el mismo cliente de correo, puede copiar/pegar o arrastrar/soltar una a otra. No obstante, le recomendamos que utilice el sistema de exportación del programa que utilice.

- **La importación**. para poder guardar una copia de seguridad en su nuevo equipo o software. Compruebe que el archivo de backup que vaya a importar sea compatible con el cliente de correo que utilice.

### Outlook

Si tiene una cuenta de correo [Exchange de OVHcloud](https://www.ovhcloud.com/es/emails/hosted-exchange/), puede exportarla directamente en formato PST desde el área de cliente.

Conéctese al [área de cliente de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws){.external} y acceda al apartado `Web Cloud`{.action}. Haga clic en `Microsoft`{.action} y seleccione `Exchange`{.action}. Haga clic en el nombre del servicio Hosted Exchange correspondiente.

En la pestaña `Cuentas de correo`{.action}, haga clic en el botón `...`{.action} a la derecha de la cuenta de correo que quiera exportar y luego en `Exportar en formato PST`{.action}.

![correo electrónico](images/manager-export-pst01.png){.thumbnail}

A continuación, habrá que esperar el tiempo de la exportación, que puede tardar unos minutos a varias horas, según el tamaño de la exportación. Al final del archivo, solo tendrá que volver al botón `Exportar en formato PST`{.action} para descargar el archivo.

![correo electrónico](images/manager-export-pst02.png){.thumbnail}

#### Exportar desde Windows

- Haga clic en `archivo` en la parte superior izquierda, luego en `Abrir y Exportar` y, por último, en `importar y exportar`.

![correo electrónico](images/outlook-export-import-win.png){.thumbnail}

- Seleccione `Exportar datos a un archivo` y haga clic en `Siguiente`.

![correo electrónico](images/outlook-export-win02.png){.thumbnail}

- Seleccione `Archivo de datos Outlook (.pst)` y haga clic en `Siguiente`.

![correo electrónico](images/outlook-export-win03.png){.thumbnail}

- Seleccione el nombre de la cuenta de correo que quiera exportar.

> [!primary]
> Solo puede exportar una cuenta a la vez.

Marque `Incluir las subcarpetas` y haga clic en `Siguiente`.

![correo electrónico](images/outlook-export-win04.png){.thumbnail}

- Seleccione la carpeta de destino de la copia de seguridad e introduzca un nombre para ella haciendo clic en `Navegar`. Seleccione la opción más adecuada y haga clic en `Finalizar`.

![correo electrónico](images/outlook-export-win05.png){.thumbnail}

Comienza la exportación de su archivo. Al crear un archivo, se le pedirá que establezca una contraseña. Es opcional.

![correo electrónico](images/outlook-export-win06.png){.thumbnail}

#### Importar desde Windows

- Haga clic en `archivo` en la parte superior izquierda, luego en `Abrir y Exportar` y, por último, en `importar y exportar`.

![correo electrónico](images/outlook-export-import-win.png){.thumbnail}

- Seleccione `Importar de otro programa o archivo` y haga clic en `Siguiente`.

![correo electrónico](images/outlook-import-win02.png){.thumbnail}

- Seleccione `Archivo de datos Outlook (.pst)` y haga clic en `Siguiente`.

![correo electrónico](images/outlook-import-win03.png){.thumbnail}

- Seleccione el archivo de backup haciendo clic en `Navegar`. Seleccione la opción más adecuada y haga clic en `Finalizar`.

![correo electrónico](images/outlook-import-win04.png){.thumbnail}

- Si ha establecido una contraseña en el archivo de backup, introdúzcala y haga clic en `Aceptar`.

- Seleccione `Importar elementos a la carpeta actual` y haga clic en `Finalizar`.

Se inicia la importación de la copia de seguridad.

#### Exportar desde Mac OS

En la pestaña `Herramientas` de su ventana de Outlook, haga clic en `Exportar`.

![correo electrónico](images/outlook-export-mac01.png){.thumbnail}

En la ventana Exportar a archivo.olm, marque los elementos que quiera añadir al archivo de backup y haga clic en `Continuar`.

![correo electrónico](images/outlook-export-mac02.png){.thumbnail}

A continuación, seleccione la carpeta de destino para la copia de seguridad y haga clic en `Guardar`.

![correo electrónico](images/outlook-export-mac03.png){.thumbnail}

Se abrirá una ventana de progreso. Haga clic en `Continuar` al finalizar la operación. El archivo de backup aparecerá en la carpeta que haya elegido anteriormente.

#### Importar desde Mac OS

En la pestaña `Herramientas` de su ventana de Outlook, haga clic en `Importar`.

![correo electrónico](images/outlook-import-mac01.png){.thumbnail}

Seleccione el formato de la copia de seguridad que quiera importar y haga clic en `Continuar`.

![correo electrónico](images/outlook-import-mac02.png){.thumbnail}

Seleccione el archivo de backup y haga clic en `importar`.

![correo electrónico](images/outlook-import-mac03.png){.thumbnail}

Se abrirá una ventana de progreso. Haga clic en `Continuar` al finalizar la operación. La copia de seguridad se desplegará en su Outlook.

### Correo electrónico en Mac OS

#### Exportar

En la columna izquierda, seleccione una o más cuentas de correo. En el menú horizontal, haga clic en `Buzón de correo` y seleccione `Exportar buzón`.

![correo electrónico](images/mail-export-mac01.png){.thumbnail}

Seleccione la carpeta que desee o cree una nueva, y haga clic en `Elegir`.

![correo electrónico](images/mail-export-mac02.png){.thumbnail}

La exportación se presenta como archivo ".mbox".

#### Importar

Haga clic en `Archivo` en el menú horizontal y seleccione `Importar buzones de correo`.

![correo electrónico](images/mail-import-mac01.png){.thumbnail}

Seleccione el archivo de backup en formato ".mbox" y haga clic en `Continuar`.

![correo electrónico](images/mail-import-mac02.png){.thumbnail}

Desde la columna izquierda, los mensajes de correo importados se encuentran en una nueva cuenta de correo llamada "Importación". Puede arrastrar las carpetas y los mensajes desde la cuenta de importación a sus cuentas de correo ya configuradas. Una vez completadas las transferencias, podrá eliminar la cuenta de importación.

### Thunderbird

Actualmente no hay ninguna funcionalidad nativa para exportar o importar una cuenta de correo desde Thunderbird. No obstante, es posible guardar un perfil Thunderbird. que contiene todas las cuentas y emails en local en su ordenador. Vamos a consultar cómo guardar un perfil Thunderbird y reintegrarlo en una nueva instancia de Thunderbird.

#### Exportar

En la ventana principal, haga clic en el menú situado en la esquina superior derecha y seleccione `Ayuda` y luego en `Información de reparación`.

![correo electrónico](images/thunderbird_menu.png){.thumbnail}

Se mostrará una tabla. Identifique la línea `Directorio de perfil` y haga clic en el botón `Abrir carpeta correspondiente`.

![correo electrónico](images/thunderbird_open_folder.png){.thumbnail}

El sistema le dirigirá a la carpeta del perfil. Suba una carpeta en el árbol.

![correo electrónico](images/thunderbird_profil_folder1.png){.thumbnail}

Copie la carpeta del perfil haciendo clic derecho en ella y pegue la carpeta en la carpeta o el soporte que desee.

![correo electrónico](images/thunderbird_profil_folder2.png){.thumbnail}

#### Importar

En lugar de importar, se tratará de cargar el perfil.
Si ya hay cuentas de correo configuradas en la instancia Thunderbird de destino, estas estarán presentes en un perfil A.
Cuando Thunderbird cargue un nuevo perfil (perfil B), solo podrá cargar **los** elementos de este perfil B.
Por ese motivo, le recomendamos que cargue en primer lugar el nuevo perfil (perfil B) y luego configure las cuentas de correo del perfil A.

En primer lugar, debe iniciar Thunderbird a través del gestor de perfiles.

- En Windows, abra el menú `Iniciar` y seleccione el programa `Ejecutar`. Introduzca `thunderbird.exe -ProfileManager` y haga clic en `OK`.

![correo electrónico](images/thunderbird-run-profil.png){.thumbnail}

- En Mac OS, ejecute la aplicación Terminal y arrastre y coloque su aplicación Thunderbird en la ventana de la Terminal, añadiendo a la línea `/Contents/MacOS/thunderbird-bin-ProfileManager`. Pulse la tecla `Entrar` ( ⏎) para aceptar.

![correo electrónico](images/thunderbird-terminal-profil.png){.thumbnail}

La siguiente ventana muestra los perfiles existentes. Haga clic en `Crear un perfil` y luego en `Siguiente` cuando aparezca el mensaje informativo.

![correo electrónico](images/thunderbird-profil-create01.png){.thumbnail}

En el siguiente paso, asigne un nombre a su perfil e identifique la carpeta en la que se creará el perfil. Bajo la frase "Sus preferencias de usuario, preferencias y todos sus datos personales se guardarán en":

![correo electrónico](images/thunderbird-profil-create02.png){.thumbnail}

> [!primary]
> Le recomendamos que copie el backup de su perfil de Thunderbird en la carpeta de perfiles de Thunderbird.

Haga clic en `Elegir carpeta..` para seleccionar la carpeta que contenga la copia de seguridad. Haga clic en `Finalizar` para crear el perfil con la copia de seguridad.

A continuación, encontrará la ventana de selección de su perfil con el nuevo perfil seleccionado. Haga clic en `Iniciar Thunderbird`. Thunderbird se ejecutará con todos los elementos que tenga en su copia de seguridad.

### Comprobar la importación en la nueva dirección de correo

Cuando haya hecho lo necesario siguiendo las instrucciones de importación, compruebe que los elementos estén presentes en el servidor.

Conéctese al [webmail](https://www.ovh.com/world/es/mail/).

En el bandeja de entrada y en la columna de la izquierda encontrará las carpetas y los mensajes de correo electrónico de la dirección de correo electrónico que haya guardado.

> [!primary]
> Hay que tener en cuenta el plazo de carga de los elementos presentes en su ordenador al servidor de correo. La operación puede tardar varios minutos o varias horas en función de la conexión a internet.

## Más información

[Migrar una cuenta de correo con OVH Mail Migrator](https://docs.ovh.com/us/es/microsoft-collaborative-solutions/exchange-migracion-de-cuentas-correo-ovh-mail-migrator/){.external}

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
