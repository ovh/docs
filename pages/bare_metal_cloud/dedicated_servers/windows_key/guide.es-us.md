---
title: 'Cambiar la clave de activación de Windows Server'
excerpt: 'Cómo cambiar la clave de activación de Windows Server'
updated: 2022-07-07
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
> 

## Objetivo

Al instalar un sistema operativo Windows Server, es posible que la clave de activación registrada no sea la correcta. Eso ocurre cuando el sistema se instala en versión de prueba, en cuyo caso la clave tiene una duración de 120 días. Una vez transcurrido este período, ya no podrá utilizar el sistema.

**Esta guía explica cómo cambiar la clave de activación de su entorno Windows Server.**

## Requisitos

- Disponer de un [servidor dedicado](https://www.ovhcloud.com/es/bare-metal/os/server-windows/) con Windows instalado en su cuenta OVHcloud
- Disponer de una licencia Windows SPLA en su cuenta de OVHcloud
- Tener acceso administrativo al servidor a través de una conexión de escritorio remoto

## Procedimiento

### Eliminar la clave anterior

Cuando el sistema está en versión de prueba, se registra una clave por defecto. Para modificarla, abra el cuadro de diálogo **Ejecutar** (teclas `Windows`+`R`).

![Abrir el cuadro de diálogo Ejecutar](images/executer.png){.thumbnail}

![Ejecutar](images/executer2.png){.thumbnail}

A continuación, introduzca el siguiente comando:

```bash
cscript.exe c:\windows\system32\slmgr.vbs -upk
```

### Introducir la nueva clave

Ya puede introducir la nueva clave. Para ello, en el cuadro de diálogo **Ejecutar**, introduzca el siguiente comando:

```bash
cscript.exe c:\windows\system32\slmgr.vbs -ipk CLAVE_KMS
```

Las claves de producto de las versiones compatibles de Windows Server se encuentran en la tabla disponible en la [página oficial de Microsoft](https://learn.microsoft.com/en-gb/windows-server/get-started/kms-client-activation-keys).

> [!primary]
>
> Las versiones Core utilizan las mismas claves KMS que las versiones no Core.
> 

### Utilizar kms.ovh.net

Para asociar su clave a nuestro robot de activación, introduzca el siguiente comando en el cuadro de diálogo `Ejecutar`{.action}:

```bash
cscript.exe c:\windows\system32\slmgr.vbs -skms kms.ovh.net
```

> [!primary]
>
> Si tiene un VPS o una instancia de Public Cloud, debe utilizar **kms.cloud.ovh.net**.
> 

### Activar el sistema
Por último, para activar su sistema Windows, ejecute el siguiente comando:

```bash
cscript.exe c:\windows\system32\slmgr.vbs -ato
```

## Más información
  
Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
