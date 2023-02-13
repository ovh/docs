---
title: Configurar una nueva instalación de Windows Server
slug: windows-first-config
routes:
    canonical: 'https://docs.ovh.com/us/es/vps/windows-first-config/'
excerpt: Cómo activar la conexión al escritorio remoto y la respuesta ICMP
section: Primeros pasos
updated: 2022-01-18
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
> 

**Última actualización: 18/01/2022**

## Objetivo

Después de una nueva instalación de un sistema operativo Windows Server en un servidor dedicado, en ocasiones puede desactivarse el acceso remoto y la respuesta ICMP (Internet Control Message Protocol).

**Esta guía explica cómo configurar Windows para reactivar el ICMP y autorizar las conexiones a través del protocolo Remote Desktop Protocol.**

## Requisitos

- Una distribución Windows instalada en un [servidor dedicado de OVHcloud](https://www.ovhcloud.com/es/bare-metal/).
- Tener acceso al [área de cliente](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es).

## Procedimiento

### 1. acceso al KVM

Para acceder a la consola KVM, consulte la [guía KVM](../utilizar-ipmi-servidor-dedicado/#utilizar-el-kvm-a-traves-de-su-navegador-web-solo-para-los-servidores-mas-recientes).

### 2. finalizar la instalación de Windows

Una vez establecida la sesión KVM, se mostrarán los monitores de configuración inicial. Aquí debe configurar su **país/región**, el **idioma de Windows** y su **teclado**. Una vez realizada la operación, haga clic en `Next`{.action}.

![KVM](images/setup-03.png){.thumbnail}

En la segunda pantalla, introduzca una contraseña para su cuenta de administrador y confírmela y haga clic en `Finish`{.action}.

![KVM](images/setup-04.png){.thumbnail}

Windows aplicará sus preferencias y mostrará la pantalla de conexión. Haga clic en el botón `Send CtrlAltDel`{.action} en la esquina superior derecha para conectarse.

![KVM](images/setup-05.png){.thumbnail}

Introduzca la contraseña que haya creado para su cuenta de administrador y haga clic en la flecha.

![KVM](images/setup-06.png){.thumbnail}

La configuración inicial ha finalizado. Una vez conectado, deberá modificar los parámetros necesarios del firewall de Windows.

### 3. modificar el firewall de Windows

Abra las `Herramientas de administración`{.action} del panel de configuración `Sistema y Seguridad`{.action} y haga doble clic en `Firewall Windows con seguridad avanzada`{.action}.

![Admin](images/windows4.png){.thumbnail}

Aquí puede activar las respectivas reglas "ICMP" y "Remote Desktop" (escritorio remoto). Haga clic derecho en la regla y seleccione `Autorizar regla`{.action} en el menú contextual.

![Activado](images/windows5.png){.thumbnail}

El servidor debe responder a las solicitudes que utilicen estos protocolos.

## Más información

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.