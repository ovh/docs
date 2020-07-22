---
title: 'Empezar con una instancia Windows'
excerpt: 'Cómo finalizar la instalación de una instancia Windows e iniciar la primera conexión'
slug: empezar-con-una-instancia-windows
legacy_guide_number: 1995
section: 'Primeros pasos'
---

**Última actualización: 25/11/2019**

## Objetivo

Puede utilizar el Public Cloud para alojar sitios web en IIS o, incluso, aplicaciones que sean compatibles únicamente con Windows. Nuestras instancias pueden instalarse en distribuciones [Windows Desktop]({ovh_www}/public-cloud/prices/){.external}.

Una vez que haya creado su instancia, debe completar la instalación mediante la consola VNC.

**En esta guía, explicaremos las etapas que deberá seguir para poder acceder a su instancia Windows después de haberla instalado.**

## Requisitos

- Haber creado un proyecto de Public Cloud.
- Haber creado [una instancia en el área de cliente](../crear_una_instancia_desde_el_area_de_cliente_de_ovh/) en una distribución Windows Desktop.

## Procedimiento

### Etapa 1: configurar su contraseña

A diferencia de una instancia Linux, una instancia Windows no se instala con una llave SSH preconfigurada. 

Por ello, deberá terminar la instalación con la consola VNC: 

- Haga clic en los `...`{.action} a la derecha de su instancia, luego en `Detalles de la instancia`{.action}:

![windowsinstance](images/firststepswindows1.png){.thumbnail}

- Vaya a la pestaña `Consola VNC`{.action}

![windowsinstance](images/firststepswindows2.png){.thumbnail}

- Seleccione la información de lenguaje y teclado, luego ingrese la contraseña de su elección:

![windowsinstance](images/firststepswindows3.png){.thumbnail}

> [!primary]
>
> No todas las teclas del teclado de la consola VNC corresponden a las del teclado AZERTY. Por favor, compruebe varias veces su contraseña antes de validarla.
>

![windowsinstance](images/firststepswindows4.png){.thumbnail}

### Etapa 2: acceder al escritorio remoto

Una vez que haya establecido la contraseña, podrá acceder a su instancia Windows mediante una conexión al escritorio remoto.

Desde un equipo con Windows:

![windowsinstance](images/firststepswindows5.png){.thumbnail}

Si se conecta desde un equipo con Linux, introduzca el siguiente comando:

```
rdesktop 12.34.56.789 -u administrator
```
 
### Etapa 3: mejorar la navegación en Internet

Por defecto, se activará la seguridad reforzada de Internet Explorer. Mientras navegue, aparecerá varias veces un mensaje de advertencia y bloqueará las descargas:

![windowsinstance](images/firststepswindows6.png){.thumbnail}

Con el fin de evitar esta situación, podrá desactivar la seguridad reforzada desde su gestor de servidor.

- Abra el **Gestor de servidor,** luego seleccione la pestaña `Servidor local`{.action} (1).

![windowsinstance](images/firststepswindows7.png){.thumbnail}

- Haga clic en `Activo`{.action} (2) al lado de **Configuración de seguridad reforzada de Internet Explorer** para poder desactivar la opción.

![windowsinstance](images/firststepswindows8.png){.thumbnail}

## Más información

[Acceso y seguridad en Horizon](../acceso_y_seguridad_en_horizon/){.external}

[Acceder a la consola de una instancia](../acceder_a_la_consola_de_una_instancia/){.external}

[Añadir crédito cloud](../anadir_credito_cloud/){.external}

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
