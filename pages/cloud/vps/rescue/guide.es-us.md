---
title: Activar el modo de rescate en un VPS
slug: rescue
excerpt: Cómo reiniciar un VPS en modo de rescate.
section: Diagnóstico y modo de rescate
---

**Última actualización: 15/07/2020**

## Objetivo

En el modo de rescate, puede reiniciar su servidor en una configuración independiente de OVHcloud. Su disco se puede montar como una partición independiente.

La ventaja de esto es que puede realizar pruebas y hacer cambios de configuración cuando sea más conveniente para usted y cuando tenga el menor impacto en las operaciones realizadas por su servidor. Esto también le permite corregir cualquier error de configuración realizado, que le impidió acceder al servidor desde la unidad.

In modo de rescate, puede:

- Cambia tu contraseña de root;
- Solucionar problemas de red;
- Arreglar un sistema operativo defectuoso;
- Corrija una configuración incorrecta del firewall;
- prueba de rendimiento del disco.

También permite corregir los errores de manipulación que pueda haber cometido que le impidan acceder al disco del servidor.

> [!warning]
>
> Si tiene servicios en línea, el modo de rescate los interrumpirá cuando la máquina se reinicie en el entorno de rescate de OVH.
> 

**Esta gua explica cómo reiniciar un VPS en modo de rescate.**

## Requisitos

- Tener acceso al [área de cliente](https://ca.ovh.com/auth/?action=gotomanager){.external}.


## Procedimiento

Una vez que haya iniciación sesión en su panel de control, haga clic en la pestaña Servidores, después en la columna de la derecha elija su VPS.

![Sección VPS en el área de cliente](images/vps_rescue6.png){.thumbnail}

En la pantalla principal de su VPS, debajo de Su VPS, haga clic en el botón de boot `···`{.action} y seleccione `Reiniciar en modo de rescate`{.action}.

![Confirmación de reinicio en modo de rescate](images/vps_rescue7.png){.thumbnail}

El reinicio puede tomar varios minutos.

> [!primary]
>
> Una vez finalizada esta etapa, recibirá por correo electrónico las claves SSH del modo de rescate. Puede consultar el mensaje en el área de cliente, en `Mi cuenta`{.action} > `Mensajes recibidos`{.action}.
> 

![Service emails area in the Control Panel](images/service_emails.png){.thumbnail}

Ahora puede conectarse a través de SSH a su VPS en modo de rescate. Para volver al modo normal, simplemente reinicie su VPS haciendo clic en el botón de boot `···` {.action} y seleccione Reiniciar mi `VPS` {.action}.

## Más información

[Introducción al SSH](../../dedicated/introduccion-ssh/)

Interactúe con nuestra comunidad de usuarios en [ovh.es/community](https://www.ovh.es/community/).
