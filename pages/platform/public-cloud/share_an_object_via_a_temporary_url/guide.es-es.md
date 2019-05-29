---
title: 'Compartir un objeto con una URL temporal'
slug: compartir_un_objeto_con_una_direccion_temporal
excerpt: 'Cómo compartir un objeto sin comunicar información personal'
section: OpenStack
---

**Última actualización: 27/02/2019**

## Objetivo 

OpenStack Swift permite almacenar una gran cantidad de archivos. Para gestionarlos a través de la API es necesario estar autenticado con un **token**. El token, que proviene del sistema de autenticación y utiliza su ID de cliente y contraseña, permite confirmar que dispone de los permisos necesarios (lectura, escritura…) en Swift.

Si quiere enviar un archivo a otra persona, pero no desea facilitarle sus claves de autenticación personales, las URL temporales (tempURL) pueden serle útiles.

**Esta guía explica cómo compartir un objeto con una URL temporal.**

## Requisitos

- [Preparar el entorno para utilizar la API de OpenStack](https://docs.ovh.com/es/public-cloud/preparar_el_entorno_para_utilizar_la_api_de_openstack/){.ref}.
- Cargar las variables de entorno de OpenStack.
- Tener Python instalado en su equipo.

## Procedimiento

### Funcionamiento de las URL temporales

Una dirección temporal o URL temporal (**tempURL**) es una funcionalidad que permite controlar los archivos compartidos. Para ello se basa en los siguientes elementos:

- **la URL del punto de acceso**, por ejemplo, `https://storage.sbg1.cloud.ovh.net`;
- **la ruta del objeto**, que contiene el proyecto, el contenedor y el nombre del objeto, por ejemplo,`v1/AUTH_tenant/default/file`;
- **el parámetro tempurlsign**, que corresponde a una firma generada con su clave secreta, el método HTTP, la ruta del archivo y la fecha de expiración;
- **el parámetro url_expires**, que corresponde a la fecha de expiración de la URL temporal.

### Generar la URL temporal (tempURL)

#### 1. Generar la clave

En primer lugar, es necesario generar una clave. Puede utilizar la misma para todos los archivos del proyecto, lo que significa que solo tendrá que generar una clave para todas las URL temporales. 

> [!primary]
>
> Le recomendamos que elija una clave segura, de al menos 20 caracteres. No obstante, en cualquier momento puede generar una nueva clave.
> 

Para generar la clave puede utilizar diversas soluciones, como los comandos `sha512sum` o `sha256sum`. Utilice el método más adecuado según su caso, en función del nivel de cifrado deseado. Por ejemplo, de más o menos eficaz:

- date +%s | sha512sum
- date +%s | sha256sum
- date +%s | md5sum 

Una vez que tenga la clave, puede configurarla en su proyecto con el cliente Swift utilizando el siguiente comando (no olvide sustituir la cadena «12345» por su clave):

```bash
swift post -m "Temp-URL-Key: 12345"
```

También puede utilizar curl:

```bash
curl -i -X POST \ -H "X-Account-Meta-Temp-URL-Key: 12345" \ -H "X-Auth-Token: abcdef12345" \ https://storage.sbg1.cloud.ovh.net/v1/AUTH_ProjectID
```

> [!primary]
>
> El nombre de la cabecera completa es `X-Account-Meta-Temp-Url-Key`, pero el cliente Swift utiliza `Temp-Url-Key`, ya que añade automáticamente la cadena `X-Account-Meta`.
> 

Una vez que haya configurado la clave en la cuenta, utilice el siguiente comando para comprobar que la cabecera se haya aplicado correctamente:

```bash
swift stat
```

También puede utilizar curl:

```bash
curl -i -X HEAD \ -H "X-Auth-Token: abcdef12345" \ https://storage.sbg1.cloud.ovh.net/v1/AUTH_ProjectID
```

#### 2. Generar la URL

Las operaciones que se describen a continuación pueden realizarse sin conexión. Utilice el comando que se indica a continuación para generar la URL temporal. No olvide sustituir los siguientes valores con la información correspondiente:



- **GET**: Método HTTP.
- **60**: Duración de validez del enlace, en segundos.
- **/v1/AUTH_tenant/default/file**: Ruta del archivo (en esta etapa, no es necesario añadir el punto de acceso).
- **12345**: Su clave.

```
swift tempurl GET 60 /v1/AUTH_tenant/default/file 12345
```

Este comando devolverá la **tempURL**, donde podrá ver la **ruta del archivo**, la **firma** y la **fecha de expiración**.

```
v1/AUTH_tenant/default/file?temp_url_sig=8016dsdf3122d526afds60911cde59fds3&temp_url_expires=1401548543
```

Para que esta URL funcione correctamente, solo tiene que añadir al principio la dirección del punto de acceso:

```
https://storage.sbg1.cloud.ovh.net/v1/AUTH_tenant/default/file?temp_url_sig=8016dsdf3122d526afds60911cde59fds3&temp_url_expires=1401548543
```

En este ejemplo, la URL temporal permite que cualquiera se descargue el archivo **file**, que se encuentra en el contenedor **default**, durante 60 segundos y sin autenticación. Al cabo de 60 segundos, la URL dejará de funcionar.

> [!primary]
>
> Los usuarios más avanzados que quieran generar direcciones temporales sin el script **swift-temp-url** pueden consultar directamente la documentación oficial de OpenStack.

## Más información

Interactúe con nuestra comunidad de usuarios en [ovh.es/community](https://www.ovh.es/community/){.external}.