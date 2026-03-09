---
title: Redimensionar una instancia a través del área de cliente de OVHcloud
excerpt: "Cómo redimensionar una instancia Public Cloud desde el área de cliente de OVHcloud"
updated: 2026-03-04
---

## Objetivo

Si su instancia no dispone de recursos suficientes debido a un aumento de la actividad o a nuevas necesidades, puede aumentar sus recursos en pocos clics gracias a Public Cloud.

**Esta guía explica cómo redimensionar su instancia desde el área de cliente de OVHcloud.**

> [!warning]
>
> Solo es posible redimensionar a un modelo superior para los modelos clásicos.
> Además, esta operación provoca la interrupción de la instancia durante el tiempo de la operación.
>

> [!success]
>
> Las instancias de tipo *flex* permiten el redimensionamiento hacia modelos superiores o inferiores gracias a un tamaño de disco único.
>

## Requisitos

- Tener una [instancia de Public Cloud](/links/public-cloud/public-cloud) en su cuenta de OVHcloud.

<!-- CP-NAV-START:publiccloud-projects -->
---

### Acceso al área de cliente de OVHcloud

- **Enlace directo:** [Public Cloud Projects](/links/control-panel/publiccloud-projects)
- **Ruta de navegación:** `Public Cloud`{.action} > Seleccione su proyecto

---
<!-- CP-NAV-END:publiccloud-projects -->

## Procedimiento

En el menú de la izquierda, haga clic en `Instancias`{.action}.

Haga clic en `...`{.action} a la derecha de la instancia y seleccione `Editar`{.action}. También puede acceder a esta acción desde los detalles de la instancia haciendo clic en su nombre y luego en `Editar la plantilla`{.action}.

En la nueva pestaña, desplace la página hasta la sección **Modelo** para seleccionar el modelo de su elección.

> [!primary]
>
> Para los modelos clásicos, puede cambiar a cualquier modelo con un disco similar o mayor. No es posible cambiar a un modelo con un disco más pequeño.<br/>
>
> Solo **las instancias flexibles** pueden actualizarse o degradarse, conservando un tamaño de disco fijo de 50 GB.
>

Si su disco es igual o inferior a 50 GB, puede cambiar a una `Instancia flexible`{.action} si lo desea.

> [!warning]
> Si edita una instancia de tipo *flex*, no es posible volver a una instancia clásica a través del área de cliente. Para más información, consulte nuestra guía sobre [Cambiar de una instancia flex a una instancia clásica](/pages/public_cloud/compute/revert_a_flex_instance).
>

Una vez realizada la selección, haga clic en `Editar la plantilla`{.action} para confirmar su elección.

### Redimensionar el disco en Windows

Al redimensionar una instancia Windows, el tamaño de la partición no se actualiza automáticamente. Debe ampliarlo utilizando el **administrador de discos**:

- Haga clic derecho en el menú `Start`{.action} e inicie el administrador de discos haciendo clic en `Disk Management`{.action}:

![Menú contextual del menú Inicio con la opción Administración de discos](images/2980.png){.thumbnail}

- Haga clic derecho en la partición principal y seleccione `Extend Volume`{.action}.

![Clic derecho en la partición principal para ampliar el volumen](images/2981a.png){.thumbnail}

- En el menú `Extend Volume Wizard`, haga clic en `Next`{.action}. Seleccione los recursos del disco a ampliar y haga clic en `Next`{.action}.

![Asistente de extensión de volumen con selección de recursos del disco](images/2978a.png){.thumbnail}

Haga clic en `Finish`{.action} para confirmar su elección.

![Paso de finalización del asistente de extensión de volumen](images/wizard2021.png){.thumbnail}

- El nuevo tamaño del disco se mostrará en el administrador de discos.

![Administrador de discos mostrando el nuevo tamaño](images/2979.png){.thumbnail}

## Más información

Interactúe con nuestra [comunidad de usuarios](/links/community).