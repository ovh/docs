---
title: Primera configuración de Windows Server (firewall)
slug: windows-first-config
excerpt: Cómo activar la conexión al escritorio remoto mediante KVM
section: Primeros pasos
---

## Objectivo
Cuando instala Windows Server en un [VPS](https://www.ovhcloud.com/en-ca/vps/){.external}, la conexión a su escritorio remoto puede estar deshabilitado, al igual que la respuesta del protocolo ICMP .


**Esta guía le mostrará qué configuraciones deben cambiarse para volver a habilitar la conexión de escritorio remoto y ICMP.**

## Requisitos

- un VPS con Windows Server 2012, 2012 R2 o 2016;
- acceso al [área de cliente de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws){.external}.

## Procedimiento

### Paso 1: inicie sesión en KVM

Para acceder al KVM de su VPS, siga la [Guía KVM](../utilizar_el_kvm_para_los_vps) {.external}a

### Paso 2: Configurar ajustes de Windows

En la primera pantalla de configuración, deberá configurar los ajustes para su ** País / región **, ** Idioma ** y ** Diseño de teclado **. Cuando haya hecho esto, haga clic en `Siguiente`{.acción}.

![KVM](images/setup-03.png){.thumbnail}

Luego, elija una contraseña para su cuenta de administrador. Ingrese dos veces, luego haga clic en ` Terminar ` {.action}.

![KVM](images/setup-04.png){.thumbnail}

Windows ahora aplicará su configuración. Cuando haya terminado, verá la siguiente pantalla. En este punto, deberá hacer clic en el botón `enviar CtrlAltDel` {.action} para iniciar sesión.

![KVM](images/setup-05.png){.thumbnail}

En la pantalla de inicio de sesión, ingrese la contraseña que creó para su cuenta de administrador y presione la tecla `Enter` {.action} en su teclado.

![KVM](images/setup-06.png){.thumbnail}

### Paso 3: Modificar el firewall de Windows

Una vez que la configuración se haya completado y haya iniciado sesión, vaya a `Herramientas administrativas` {.action}, luego a` Firewall de Windows con seguridad avanzada` {.action}.

![Admin](images/windows4.png){.thumbnail}

Luego deberá habilitar el ICMP y las reglas de conexión de escritorio remoto * (haga clic con el botón derecho -> Habilitar regla) *.

![Enabled](images/windows5.png){.thumbnail}

Su servidor ahora estará configurado para conexiones de escritorio remoto.

## Màs información

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>

