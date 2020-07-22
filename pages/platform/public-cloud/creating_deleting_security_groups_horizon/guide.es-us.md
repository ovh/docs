---
title: 'Crear y eliminar un grupo de seguridad en Horizon'
slug: crear-eliminar-grupo-seguridad-en-horizon
excerpt: 'Cómo crear o eliminar un grupo de seguridad desde Horizon'
section: Horizon
---

**Última actualización: 18/06/2018**

## Objetivo

Los grupos de seguridad son conjuntos de reglas de filtrado de las direcciones IP y puertos que se aplican a todas las instancias de un proyecto determinado y que determinan el acceso de red a la instancia. Las reglas del grupo son específicas para un proyecto. Sus miembros pueden editar las reglas predeterminadas para su grupo y añadir nuevos conjuntos de reglas.

Todos los proyectos que no tengan un grupo de seguridad establecido utilizan uno predeterminado, que se aplica a cada instancia. En OVH, la configuración predeterminada del grupo de seguridad permite tanto el tráfico saliente como el entrante en las instancias.

**Esta guía explica cómo crear y eliminar un grupo de seguridad a través de Horizon.**

## Requisitos

- [Tener acceso a Horizon](../crear_un_acceso_a_horizon/){.external}.


## Procedimiento

En primer lugar, conéctese al panel [Horizon](https://horizon.cloud.ovh.net/){.external} y elija la región en la que desea crear un grupo de seguridad en el menú situado en la parte superior izquierda de la pantalla.

![Elección de la región](images/1_H_sec_groups_region_choosing.png){.thumbnail}

El grupo de seguridad se creará en la región seleccionada. Si un grupo de seguridad se va a utilizar en más de una región, es necesario crearlo en cada una de ellas.

Haga clic en `Network`{.action} y seleccione `Security Groups`{.action}.

Para crear un grupo de seguridad, haga clic en el botón `+ Create Security Group`{.action}.

![Grupos de seguridad](images/2_H_crete_sec_group.png){.thumbnail}

A continuación, asigne un nombre al grupo e indique su descripción (opcional). Confirme haciendo clic en el botón `Create Security Group`{.action}.

![Creación de grupos de seguridad](images/3_H_new_sec_gr_name.png){.thumbnail}

Para eliminar un grupo de seguridad, marque la casilla correspondiente y haga clic en el botón `Delete Security Groups`{.action}.


## Más información

Interactúe con nuestra comunidad de usuarios en [https://community.ovh.com/en/](https://community.ovh.com/en/){.external}.
