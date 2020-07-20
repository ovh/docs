---
title: Activar el modo de rescate en un VPS
slug: rescue
excerpt: Cómo reiniciar un VPS en modo de rescate.
section: Diagnóstico y modo de rescate
---

**Última actualización: 18/04/2018**

## Objetivo

El modo *rescue* o modo de rescate es un modo que permite arrancar el servidor con una configuración OVH específica y montar el disco como una partición independiente.

Tiene la ventaja de que permite realizar pruebas o manipulaciones en el momento que mejor le convenga, cuando suponga un menor trastorno para las operaciones del servidor.

También permite corregir los errores de manipulación que pueda haber cometido que le impidan acceder al disco del servidor.

> [!warning]
>
> Si tiene algún servicio en producción, el modo de rescate lo interrumpirá hasta que reinicie la máquina en modo normal.
> 

Esta gua explica cómo reiniciar un VPS en modo de rescate.

## Requisitos

- Tener acceso al [área de cliente](https://www.ovh.com/auth/?action=gotomanager){.external}.


## Procedimiento

Para reiniciar el VPS en modo de rescate, conéctese al área de cliente y acceda a la sección `Cloud`{.action}. Seleccione el VPS en la columna izquierda.

![Sección VPS en el área de cliente](images/vps_rescue1.png){.thumbnail}

En la pantalla principal del VPS, haga clic en el botón `Reiniciar en modo de rescate`{.action} y acepte la confirmación de reinicio del VPS.

![Confirmación de reinicio en modo de rescate](images/vps_rescue2.png){.thumbnail}

Una barra de progreso mostrará el estado de la tarea de reinicio (podría tardar varios minutos):

![Progreso de la tarea de reinicio en modo de rescate](images/rescue_task.png){.thumbnail}

> [!primary]
>
> Una vez finalizada esta etapa, recibirá por correo electrónico las claves SSH del modo de rescate. Puede consultar el mensaje en el área de cliente, en `Mi cuenta`{.action} > `Mensajes recibidos`{.action}.
> 

Ya puede conectarse a su VPS en modo de rescate por SSH.

Una vez realizadas las operaciones necesarias en modo de rescate, podrá reiniciar el VPS sobre su disco principal utilizando el botón `Reiniciar mi VPS`{.action}.


## Más información

[Introducción al SSH](https://docs.ovh.com/es/dedicated/ssh-introduction/)

Interactúe con nuestra comunidad de usuarios en [ovh.es/community](https://www.ovh.es/community/).