---
title: Redimensionar una instancia
excerpt: Cómo redimensionar una instancia desde el área de cliente de OVHcloud
slug: resize-an-instance-manager
section: 'Gestión de las instancias desde el área de cliente'
order: 6
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
>

**Última actualización: 25/08/2022**

## Objetivo

En algunos casos, bien debido a un aumento de la actividad o a sus nuevas necesidades, es posible que su instancia no pueda dar respuesta a esta nueva carga debido a la falta de recursos. Sin embargo, Public Cloud le permite aumentar los recursos de su instancia, con tal solo unos clics.

**Esta guía explica los pasos que debe seguir para cambiar el tamaño de su instancia desde el área de cliente de OVHcloud**

> [!warning]
>
> Sólo es posible redimensionar a un modelo superior para los modelos clásicos.
> Además, esta operación interrumpe la instancia durante la operación.
> 

> [!success]
>
> Las instancias de tipo *flex* permiten redimensionar hacia modelos superiores o inferiores gracias a un único tamaño de disco.
> 

## Requisitos

- Tener una [instancia de Public Cloud](https://www.ovhcloud.com/es/public-cloud/) en su cuenta de OVHcloud.
- Tienes acceso a tu [Panel de configuración de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws).

## Procedimiento

Conéctese al [área de cliente de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws), acceda a la sección `Public Cloud`{.action} y seleccione el proyecto de Public Cloud correspondiente. En el menú de la izquierda, haga clic en `Instancias`{.action}. 

Haga clic en `...`{.action} a la derecha de la instancia y seleccione `Editar`{.action}.

![public-cloud](images/editinstance.png){.thumbnail}

En la nueva pestaña, desplace la página hasta la sección **Modelo** para seleccionar el modelo que desee.

![public-cloud](images/template.png){.thumbnail}

> [!primary]
>
> En los modelos clásicos, puede cambiar a cualquier modelo con un disco similar o mayor. No es posible pasar a un modelo con un disco más pequeño.<br/>
>
> Solo **las instancias flexibles** pueden actualizarse y degradarse, conservando un tamaño de disco fijo de 50 GB.
>

Si su disco es igual o inferior a 50 GB, puede pasar a una `instancia flexible`{.action} si lo desea.

> [!warning]
> Atención: Si edita una instancia de tipo *flexible*, no es posible migrar a una instancia clásica desde el área de cliente. Para más información, consulte nuestra guía [Cambiar de una instancia flex a una instancia clásica](https://docs.ovh.com/us/es/public-cloud/modificar-una-instancia-flex/).
>

Una vez realizada la selección, haga clic en `Modificar el modelo`{.action} para confirmar la elección.

### Redimensionar el disco en Windows

Atención: Al redimensionar una instancia Windows, el tamaño de la partición no se actualiza automáticamente, por lo que deberá ampliarse utilizando el **disk manager**:

- Haga clic derecho en el menú `Start`{.action} e inicie el gestor del disco haciendo clic en `Disk Management`{.action}:

![public-cloud](images/2980.png){.thumbnail}

- Haga clic derecho en la partición principal y seleccione `Extend Volume`{.action}.

![public-cloud](images/2981a.png){.thumbnail}

- Haga clic en `Next`{.action} para acceder al `Extend Volume Wizard`. Seleccione los recursos del disco que quiera ampliar y haga clic en `Next`{.action}. 

![public-cloud](images/2978a.png){.thumbnail}

Haga clic en `Finish`{.action} para aceptar la opción que prefiera.

![public-cloud](images/wizard2021.png){.thumbnail}

- El nuevo tamaño del disco se mostrará en el gestor de disco.

![public-cloud](images/2979.png){.thumbnail}

## Más información

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.