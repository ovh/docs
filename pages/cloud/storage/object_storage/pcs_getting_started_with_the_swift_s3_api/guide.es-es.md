---
title: Object Storage Swift - Primeros pasos con la API Swift S3
excerpt: "Cómo utilizar la API Swift S3"
slug: pcs/getting-started-with-the-swift-s3-api
section: OpenStack Swift Storage Class Specifics
order: 020
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
>

**Última actualización: 22/09/2020**

## Objetivo

El middleware Swift s3api que garantiza la compatibilidad de la API S3 ha sido activado en todas las regiones del Public Cloud.

**Esta guía explica cómo acceder a los objetos Swift utilizando un programa diseñado para interactuar con puntos de terminación compatibles con S3.**

## Requisitos

- [Preparar el entorno para utilizar la API de OpenStack](https://docs.ovh.com/es/public-cloud/preparar_el_entorno_para_utilizar_la_api_de_openstack/)
- [Parámetros de acceso y seguridad en Horizon](https://docs.ovh.com/es/public-cloud/acceso_y_seguridad_en_horizon/)

## Procedimiento

### Establecer las variables de entorno OpenStack

```bash
user@host:~$ source <user_name>-openrc.sh
Please enter your OpenStack Password for project <project_name> as user <user_name>:

user@host:~$
```

### Instalar el cliente OpenStack si es necesario

```bash
user@host:~$ pip install python-openstackclient

user@host:~$
```

Consulte [aquí](https://docs.openstack.org/python-openstackclient/latest/) la referencia de los pedidos de OpenStack.

### Crear claves de conexión EC2

Los tokens S3 son diferentes, necesita 2 parámetros (**access** y **secreto**) para generar un token S3.
La información de identificación se almacenará de forma segura en Keystone. Para generarla:

#### Generar el token S3 con el cliente python-openstack

```bash
user@host:~$ openstack ec2 credentials create
+------------+----------------------------------------------------------------------------------------------------------------------------+
| Field      | Value                                                                                                                      |
+------------+----------------------------------------------------------------------------------------------------------------------------+
| access     | 5a4d8b8d88104123a862c527ede5a3d3                                                                                           |
| links      | {u'self': u'https://auth.cloud.ovh.net/v3/users/d74d05ff121b44bea9216495e7f0df61/credentials/OS-                     |
|            | EC2/5a4d8b8d88104123a862c527ede5a3d3'}                                                                                     |
| project_id | 20e124b71be141299e111ec26b1892fa                                                                                           |
| secret     | 925d5fcfcd9f436d8ffcb20548cc53a2                                                                                           |
| trust_id   | None                                                                                                                       |
| user_id    | d74d05ff121b44bea9216495e7f0df61                                                                                           |
+------------+----------------------------------------------------------------------------------------------------------------------------+
```

#### Generar el token S3 con curl

```bash
. openrc.sh
TMP_FILE=$(mktemp)
OS_USER_ID=$(curl -s -D $TMP_FILE -X POST "${OS_AUTH_URL}auth/tokens" -H "Content-Type: application/json" -d '{"auth":{"identity":{"methods":["password"],"password":{"user":{"name":"'$OS_USERNAME'","domain":{"id":"default"},"password":"'$OS_PASSWORD'"}}},"scope":{"project":{ "id":"'$OS_TENANT_ID'","domain":{"id":"default"}}}}}' | jq -r '.["token"]["user"]["id"]')
OS_TOKEN=$(awk '/^X-Subject-Token/ {print $2}' $TMP_FILE |  tr -d "\r")
curl -s -X POST -H "Content-Type: application/json" -H "X-Auth-Token: $OS_TOKEN" -d '{"tenant_id": "'$OS_TENANT_ID'"}' "${OS_AUTH_URL}users/${OS_USER_ID}/credentials/OS-EC2" | jq .
{
  "credential": {
    "user_id": "d74d05ff121b44bea9216495e7f0df61",
    "links": {
      "self": "https://auth.cloud.ovh.net/v3/users/d74d05ff121b44bea9216495e7f0df61/credentials/OS-EC2/660c89cfc4764271ba169941c7b2f310"
    },
    "tenant_id": "20e124b71be141299e111ec26b1892fa",
    "access": "660c89cfc4764271ba169941c7b2f310",
    "secret": "fc9e8eb545724accadcfabbd99207df1",
    "trust_id": null
  }
}
```

### Configurar el cliente AWS

Instale el cliente AWS y configure como sigue:

```bash
user@host:~$ pip install awscli awscli-plugin-endpoint
[...]
user@host:~$ cat ~/.aws/credentials

[default]
aws_access_key_id = <access_key>
aws_secret_access_key = <secret_key>

user@host:~$ cat ~/.aws/config

[plugins]
endpoint = awscli_plugin_endpoint

[profile default]
region = <region>
s3 =
  endpoint_url = https://s3.<region>.cloud.ovh.net
  signature_version = s3v4
s3api =
  endpoint_url = https://s3.<region>.cloud.ovh.net
```

El acceso de tipo `alojamiento virtual` y el acceso de tipo `ruta de acceso` están incluidos en todas las regiones, pero le recomendamos que utilice el estilo `alojado virtual`, ya que el acceso de tipo `ruta de acceso` se reducirá a partir del 30 de septiembre de 2020.

### Utilizar el cliente AWS

Utilice el siguiente comando para consultar la lista de contenedores:

```bash
user@host:~$ aws --profile default s3 ls
```

Utilice el siguiente comando para crear un nuevo bucket:

```bash
user@host:~$ aws --profile default s3 mb s3://bucket
```

> [!primary]
>
> Los buckets S3 solo pueden crearse en la estrategia PCS (almacenamiento de objetos).
>

> [!primary]
>
> El nombre del contenedor debe cumplir las siguientes reglas:
>  
> - El nombre del contenedor puede tener entre 3 y 63 caracteres, y solo puede contener caracteres minúsculos, cifras, puntos y guiones.  
> - Cada nombre del contenedor debe comenzar por una letra minúscula o una cifra.  
> - El nombre del contenedor no puede contener guiones bajos, terminar con guiones, tener puntos seguidos o utilizar guiones adyacentes a puntos.  
> - El nombre del contenedor no puede formatearse como una dirección IP (198.51.100.24).  
>

Utilice el siguiente comando para descargar un archivo local en Swift:

```bash
user@host:~$ aws --profile default s3 cp file.txt s3://bucket/file.txt
```

Utilice el siguiente comando para descargar un objeto desde Swift:

```bash
user@host:~$ aws --profile default s3 cp file.txt s3://bucket/file.txt
```

Utilice el siguiente comando para eliminar un objeto Swift:

```bash
user@host:~$ aws --profile default s3 rm s3://bucket/file.txt
```

Utilice el siguiente comando para eliminar un bucket:

```bash
user@host:~$ aws --profile default s3 rb s3://bucket
```

## Más información

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
