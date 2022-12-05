---
title: Utilizar el escritorio remoto con Microsoft 365 apps
legacy_guide_number: 2339
slug: office365-proplus-escritorio-remoto
excerpt: Cómo instalar y utilizar Microsoft 365 apps en un escritorio remoto (RDS) o en un ordenador compartido
section: Office
order: 04
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
>

**Última actualización: 06/09/2021**

## Objetivo

Quiere utilizar la suite de software presente en el pack Microsoft 365 apps en una máquina remota o compartida. Para ello, siga el procedimiento de instalación descrito en esta guía.

**Esta guía explica cómo instalar y utilizar Microsoft 365 apps en un escritorio remoto (RDS) o en un ordenador compartido.**

## Requisitos

- Disponer de una licencia Microsoft 365 apps para empresas (anteriormente Office 365 ProPlus).
- Utilizar Microsoft Windows a través de un escritorio remoto (**R**emote **D**esktop **S**ervices)

> [!warning]
>
> La licencia Microsoft 365 Apps for business no es compatible con un uso a través de RDS y ordenador compartido.
> 

## Procedimiento

Esta guía se basa en la información proporcionada en la guía Microsoft [Implementar Aplicaciones de Microsoft 365 con Servicios de Escritorio remoto](https://docs.microsoft.com/es-es/deployoffice/deploy-microsoft-365-apps-remote-desktop-services).

> [!warning]
>
> La configuración, la gestión y la responsabilidad de los servicios que OVHcloud pone a su disposición recaen sobre usted. Por lo tanto, usted deberá asegurarse de que estos funcionen correctamente.
> 
> Esta guía le ayudará a realizar las operaciones más habituales. No obstante, si tiene alguna duda le recomendamos que contacte con un proveedor de servicios especializado o con el editor del servicio. Nosotros no podremos asistirle. Para más información, consulte el apartado «Más información» de esta guía.
> 

### Método 1: Configuración manual

Instalar una solución Microsoft 365 Apps para una empresa en un ordenador compartido utilizando los servicios de Escritorio remoto (RDS) no funciona sin una configuración específica. Sin esta configuración, debería obtener el siguiente mensaje:

![correo electrónico](images/4717.png){.thumbnail}

> [!primary]
>
> Si ya ha instalado la licencia Office 365 Proplus, deberá **desinstalarla**.
>

- Una vez desinstalada la licencia, [haga clic aquí](https://www.microsoft.com/en-us/download/details.aspx?id=49117){.external} para descargar la herramienta de despliegue Microsoft 365.


- **Ejecute** la herramienta de despliegue en su máquina.


- Modifique el archivo de `configuration.xml`.

![Office 365](images/4720.png){.thumbnail}

Edite el archivo de `configuration.xml` y desmarque las siguientes líneas:

```xml
Display Level="None" AcceptEULA="True"
Property Name="SharedComputerLicensing" Value="1"
```

Si estas líneas no existen, puede copiarlas y pegarlas en el archivo.

- Guarde los cambios realizados. Abra un terminal powershell y ejecute estos dos comandos desde el directorio en el que se encuentra el archivo de `configuration.xml`:

```powershell
./setup.exe /download configuration.xml
```

y

```powershell
./setup.exe /configure configuration.xml
```
> [!primary]
>
> La ejecución de estos comandos puede tardar varios minutos.

- Abra el editor del registro de windows ejecutando `Regedit` y siga los pasos que se indican a continuación:

```powershell
HKEY\_LOCAL\_MACHINE\\SOFTWARE\\Microsoft\\Office\\ClickToRun\\Configuration
```

- Compruebe la siguiente llave:

```powershell
SharedComputerLicensing
```
Asegúrese de que su valor sea de `1`. Si esta llave no existe, puede crearla.

![correo electrónico](images/4723.png){.thumbnail}

- Ejecute una aplicación de la suite Office 365 y introduzca su nombre de usuario y contraseña.

![correo electrónico](images/4724.png){.thumbnail}

- Ahora puede utilizar su suite Office 365 desde su ordenador compartido utilizando los servicios de Escritorio remoto (RDS).


![correo electrónico](images/4726.png){.thumbnail}


## Más información

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
