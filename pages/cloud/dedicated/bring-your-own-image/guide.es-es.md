---
title: Utilizar la funcionalidad Bring Your Own Image
excerpt: Cómo desplegar las imágenes con Bring Your Own Image
slug: bringyourownimage
section: Uso avanzado
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
> 

**Última actualización: 25/11/2022**

## Objetivo

Gracias a la tecnología Bring Your Own Image, ya puede desplegar imágenes *cloudready* directamente en sus servidores dedicados. Así podrá utilizar bare metal como recurso para sus despliegues.

**¿Qué significa *cloudready*?**
<br>En una frase, ser agnóstico de la infraestructura en la que se inicia la imagen.
Además de los requisitos y limitaciones indicados más abajo, debe asegurarse de que la imagen (recuperada, generada) se ajuste a las expectativas técnicas de una imagen cloudready. La imagen debe ser capaz de arrancar correctamente cualquiera que sea la tipología de servidor en la que se inicie, y debe también embarcar el servicio Cloud Init en el caso de utilizar un Config Drive. Por último, las configuraciones del sistema deben permitir que el SO se inicie plenamente, en particular las relativas a la red.

**Cómo configurar BringYourOwnImage desde la APIv6 de OVHcloud**

## Requisitos

- Tener un [servidor dedicado de OVHcloud](https://www.ovhcloud.com/es-es/bare-metal/).
- Estar conectado al [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es) para la sección ["Despliegue desde el área de cliente"](#viacontrolpanel) de esta guía.
- Estar conectado a la [API de OVHcloud](https://api.ovh.com/){.external} para la sección ["Despliegue a través de la API"](#viaapi) de esta guía.
- Haber generado los [credenciales para utilizar la APIv6](https://docs.ovh.com/es/api/first-steps-with-ovh-api/) en la sección ["Despliegue a través de la API"](#viaapi) de esta guía.
- El tamaño de la imagen debe ser inferior a la cantidad de memoria RAM del servidor menos 3 GiB.

> [!warning]
>
> Una nueva instalación por BringYourOwnImage borrará todos los datos del servidor.
>

## Procedimiento

**Limitaciones técnicas**

Actualmente existen algunas limitaciones técnicas ligadas al uso de productos físicos como los servidores dedicados.
Al preparar el despliegue, tenga en cuenta los siguientes imperativos. La lista no es completa.

- Tipo de arranque: **uefi** o **legacy**
- Tipo de partición: **MBR** o **GPT**
- Formato de imagen: **qcow2** o **raw**

Si su servidor dispone de un boot **uefi**, deberá prever en su imagen una partición **EFI** para que su servidor pueda empezar a funcionar.

**Métodos de despliegue**

- [Despliegue desde el área de cliente](#viacontrolpanel): le permitirá desplegar su imagen rápidamente y fácilmente desde el área de cliente de OVHcloud.
- [Despliegue a través de la API](#viaapi): puede utilizar las API de OVHcloud para integrarlas en sus propios scripts para automatizar el despliegue.

### Desplegar su imagen desde el área de cliente de OVHcloud <a name="viacontrolpanel"></a>

Seleccione el servidor desde el [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr), en la sección `Bare Metal Cloud`{.action} y, seguidamente, en los `Servidores dedicados`{.action}

En el recuadro `Información general`, haga clic en el botón `...`{.action} delante de `Información general`. Haga clic en `Instalar`{.action}.

![bring your ownimage](images/byoi-controlpanel01.png){.thumbnail}

En la nueva ventana, seleccione `Instalar desde una imagen personalizada`{.action} y haga clic en `Instalar`{.action}.

![bring your ownimage](images/byoi-controlpanel02.png){.thumbnail}

El sistema le redirigirá a la página de configuración. Asegúrese de que la URL de su imagen tiene el formato adecuado. Complete el resto de campos obligatorios en esta página. Una vez que haya confirmado que la información es correcta, haga clic en `Instalar el sistema`{.action}.

Consulte los detalles de las opciones en el apartado ["Tablas de opciones"](#options) de esta guía. 

Para activar `ConfigDrive`, consulte la documentación disponible en [esta página](https://cloudinit.readthedocs.io/en/latest/topics/datasources/configdrive.html).

![bring your ownimage](images/byoi-controlpanel03.png){.thumbnail}

### Desplegar su imagen desde las API <a name="viaapi"></a>

Conéctese a [https://api.ovh.com/](https://api.ovh.com/){.external} y acceda a la sección `/dedicated/server`{.action}. El campo `Filter` le permitirá buscar "BringYourOwnImage".

Dispone de tres llamadas a la API asociadas a la funcionalidad BringYourOwnImage.

![calls API](images/apicalls.png){.thumbnail}

Para crear y desplegar su imagen, utilice la siguiente llamada y complete los campos necesarios:

> [!api]
>
> @api {POST} /dedicated/server/{serviceName}/bringYourOwnImage
>


| Campo | Descripción |
|-|-|
| serviceName | El nombre del servidor. |
| URL | URL donde obtener la imagen. |
| checkSum | El checksum de su imagen. |
| checkSumType | El checksum de la imagen a desplegar (md5, sha1, sha256, sha512). |
| enable (ConfigDrive)* | Activar la creación de la partición ConfigDrive (cloud-init) |
| hostname (ConfigDrive)* | El hostname del servidor. |
| sshKey (ConfigDrive)* | Su llave SSH pública. |
| userData (ConfigDrive)* | Su script de post-instalación. |
| userMetadatas (ConfigDrive)* | Meta datas utilizadas por CloudInit en el momento del arranque. |
| description | El nombre de su imagen. |
| diskGroupId | El id del disco que se debe utilizar. |
| httpHeader | Sólo si es necesario para descargar la imagen. |
| type | El tipo/formato de su imagen (qcow2, raw, ova). |

* ConfigDrive es una partición utilizada por cloud-init en el primer arranque del servidor para establecer la configuración deseada. Puede elegir si desea activar o no esta opción.

![POST API call](images/postapicall.png){.thumbnail}

Una vez que haya completado todos los campos, ejecute el despliegue haciendo clic en `Execute`{.action}.

### Comprobar el despliegue

Puede seguir el despliegue de su imagen a través de la siguiente llamada a la API o a través del KVM/[IPMI](../utilizar-ipmi-servidor-dedicado/).

> [!api]
>
> @api {GET} /dedicated/server/{serviceName}/bringYourOwnImage
>

En este ejemplo, el despliegue se está iniciando.

![GET API call](images/getapicall.png){.thumbnail}

El despliegue puede tardar unos diez minutos. Una vez completada la operación, el estado del despliegue pasará a ser "done" y el servidor se reiniciará en el disco.

#### Ejemplos de retorno

Aquí hay algunos ejemplos:

| Mensaje | Significado |
|-|-|
| Can't write qcow2 on disk. | No se puede escribir la imagen qcow2 en el disco. |
| Could not download, qcow2 image is too big to download in memory. | No hay suficiente espacio en RAM para descargar la imagen. |
| Could not download image located: `http://path/of/your/image`. | No se ha podido descargar la imagen: `http://ruta/de/su/imagen`. |
| Bad format image, expected: qcow2, raw. | El formato de la imagen es incorrecto. |
| Bad checkSumType, expected : sha1, sha256, md5. | El tipo de checksum es incorrecto. |
| Bad $checkSumType for downloaded file, got : 1234 while expecting 5678. | El checksum es incorrecto. |
| Can not move backup GPT data estructuration to the end of disk. | El formato del disco es incorrecto. |
| Could not create configdrive on disk. | No se ha podido crear la partición de configuración del disco. |


### Eliminar el despliegue

Puede eliminar su despliegue gracias a la siguiente llamada:

> [!api]
>
> @api {DELETE} /dedicated/server/{serviceName}/bringYourOwnImage
>

Esto borrará el estado del despliegue y pondrá el servidor en modo de rescate.

## Más información

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
