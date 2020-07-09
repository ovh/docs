---
title: 'Uso de instantáneas Snapshots en un servidor virtual privado (VPS)'
slug: usar-instantaneas-en-un-vps
excerpt: 'Cómo activar y usar la opción Instantáneas  en el panel de control de OVHcloud'
section: 'Opciones de copia de seguridad'
order: 1
---

**Última actualización: 22/4/2020**


## Objetivo

Crear una instantánea (<i>snapshot</i>) es una forma simple y rápida de proteger un sistema en funciones antes de realizar cambios (p. ej., probar una nueva configuración o <i>software</i>) que puedan tener consecuencias indeseadas o imprevistas. Sin embargo, no constituye una estrategia completa de copia de seguridad del sistema.

**En esta guía, se explica cómo usar las instantáneas en su servidor virtual privado (VPS) de OVHcloud.**

> [!primary]
>
Antes de aplicar las opciones de copia de seguridad, le recomendamos que consulte las [preguntas frecuentes y demás páginas del producto](https://www.ovhcloud.com/es-es/vps/options/) para acceder a una comparativa de los precios y otras informaciones.
>

## Requisitos

- Tener acceso al [panel de control de OVHcloud](https://www.ovh.com/auth/?action=gotomanager).
- Tener un [servicio de servidor virtual privado (VPS)](https://www.ovhcloud.com/es-es/vps/) de OVHcloud configurado.


## Procedimiento

Inicie sesión en el [área de cliente de OVHcloud para acceder al panel de control](https://www.ovh.com/auth/?action=gotomanager), navegue hasta la sección «Servidor» y seleccione su servidor en la barra lateral de la izquierda (debajo de `VPS`{.action}).

### Paso 1: Suscribirse a la opción «Instantáneas»

Acceda a la pestaña `«Inicio»`{.action} y desplácese hacia abajo hasta el cuadro «Resumen de opciones». Haga clic en `...`{.action} junto a la opción «Instantáneas» y, seguidamente, en `Contratar`{.action} (en el menú contextual).

![snapshotvps](images/snapshot_vps_step1b.png){.thumbnail}

En el siguiente paso, preste atención a la información sobre los precios y, a continuación, haga clic en `Contratar`{.action}. Se le guiará por el proceso de contratación y recibirá un mensaje de correo electrónico de confirmación.

### Paso 2: Tomar una instantánea

Una vez activada la opción, haga clic en `...`{.action} junto a la opción «Instantáneas» y, seguidamente, en `«Tomar una instantánea» (en el menú contextual). La instantánea puede tardar unos minutos en crearse. Después, aparecerá la fecha y hora de su creación en el cuadro «Resumen de opciones».

### Paso 3: Eliminar o restaurar una instantánea

Puesto que las instantáneas solo se pueden activar de una en una, se debe eliminar la instantánea existente antes de crear una nueva. En el menú contextual, seleccione `Eliminar la instantánea`{.action}.

![snapshotvps](images/snapshot_vps_step2.png){.thumbnail}

Si está seguro de que desea restablecer su servidor virtual privado (VPS) al estado de la instantánea, haga clic en `Restaurar la instantánea`{.action} y confirme la acción de restauración en la ventana emergente.


## Más información

[Usar copias de seguridad automatizadas en un servidor virtual privado (VPS)](../usar-copias-de-seguridad-automatizadas-en-un-vps/)


Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.