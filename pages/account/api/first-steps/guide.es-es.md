---
title: 'Primeros pasos con las API de OVHcloud'
slug: first-steps-with-ovh-api
excerpt: 'Cómo utilizar las API de OVHcloud'
section: 'Primeros pasos'
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón "Contribuir" de esta página.
>

**Última actualización: 30/05/2022**

## Objetivo

Las API disponibles en [https://api.ovh.com/](https://api.ovh.com/){.external} le permiten adquirir, gestionar, actualizar y configurar productos de OVHcloud sin utilizar una interfaz gráfica como el área de cliente.

**Cómo utilizar las API de OVHcloud y cómo asociarlas a sus aplicaciones**

## Requisitos

- Disponer de una cuenta de OVHcloud activa y conocer sus claves de acceso.
- Estar en la página web de las [API de OVHcloud](https://api.ovh.com/){.external}.

## Procedimiento

> [!warning]
>
> La configuración, la gestión y la responsabilidad de los servicios que OVHcloud pone a su disposición recaen sobre usted. Por lo tanto, usted deberá asegurarse de que estos funcionen correctamente.
> 
> Esta guía le ayudará a realizar las operaciones más habituales. No obstante, si tiene alguna duda le recomendamos que contacte con un proveedor de servicios especializado o con el editor del servicio. Nosotros no podremos asistirle. Para más información, consulte el apartado [«Más información»](#gofurther) de esta guía.
>

### Uso sencillo

#### Conectarse a la API de OVHcloud

En la página de las [API de OVHcloud](https://api.ovh.com/), haga clic en `Explore the OVH API`{.action} para ver la lista de API. 

Para utilizar las API en sus productos, debe conectarse a este sitio web con sus claves de OVHcloud.

- Haga clic en `Login`{.action} en la parte superior derecha. 
- Introduzca sus claves de OVHcloud. 
- Establezca una temporalidad bajo el botón **Validity**, durante la cual podrá autorizar las acciones a través de la API de OVHcloud.

![API](images/login.png){.thumbnail} 

> [!primary]
>
> Si su cuenta de OVHcloud está protegida por una [doble autenticación](https://docs.ovh.com/es/customer/proteger-su-cuenta-con-una-2FA/), también deberá introducir el código generado por SMS o aplicación OTP o llave U2F.
>

#### Explorar los productos disponibles en las API

Una vez que se haya conectado, podrá consultar la lista de productos de OVHcloud que disponen de las API. Esta lista se ordena por orden alfabético.

![API](images/api-list.png){.thumbnail} 

Para ver, por ejemplo, las API asociadas a los dominios, haga clic en **/domain** en la lista.

Haga clic en el producto para ver la lista de las API del mismo. 

![API](images/api-displayed.png){.thumbnail} 

#### Ejecutar una API

Existen 4 tipos de API disponibles que utilizan los denominados métodos HTTP: 

**GET** 

El objetivo de la solución GET es recuperar los datos de un recurso.

Por ejemplo, para consultar la lista de dominios, utilice la siguiente API:
 
> [!api]
>
> @api {GET} /domain
>

**POST**

El método POST se utiliza para enviar datos adicionales al recurso. 

Por ejemplo, para añadir un registro a su zona DNS, utilice la siguiente API:

> [!api]
>
> @api {POST} /domain/zone/{zoneName}/record
>

**PUT**

El método PUT se utiliza para sustituir los datos actuales del recurso por los datos de la consulta.

Por ejemplo, si se ha equivocado al guardar la zona DNS, utilice la siguiente API:

> [!api]
>
> @api {PUT} /domain/zone/{zoneName}/record/{id}
>

**DELETE**

El método DELETE se utiliza para eliminar el recurso llamado.

Por ejemplo, si no desea conservar el registro DNS que ha añadido a su zona DNS, utilice la siguiente API:

> [!api]
>
> @api {DELETE} /domain/zone/{zoneName}/record/{id}
>

##### Parámetros de la API

Haga clic en la API que desee y seleccione **Parameters** para asignar las variables relativas a su aplicación.

Por ejemplo, para añadir un registro TXT a su zona DNS, podrá elegir los siguientes parámetros:

![API](images/parameters.png){.thumbnail} 

Una vez configurados los parámetros, puede ejecutar la API haciendo clic en `Execute`{.action}. 

La pestaña `Result` mostrará el informe de ejecución de la API.

![API](images/result.png){.thumbnail} 

Las pestañas `PHP` y `Python` contienen los elementos que se añadirán al script en función del idioma utilizado.

### Uso avanzado: combinar las API de OVHcloud con una aplicación

#### Crear las claves de su aplicación

Todas las aplicaciones que quieran comunicarse con la API de OVHcloud deben notificarse con antelación.

Para ello, haga clic en el siguiente enlace: [https://eu.api.ovh.com/createToken/](https://eu.api.ovh.com/createToken/){.external}.

Introduzca su identificador de cliente, su contraseña y el nombre de su aplicación. El nombre será útil más adelante si desea permitir que otras personas lo usen.

También puede añadir una descripción de la aplicación y una temporalidad. 

El campo `Rights` le permite restringir el uso de la aplicación a determinadas API.<br>
Para autorizar todas las API de OVHcloud para un método HTTP, introduzca una estrella `*` en el campo, como en el siguiente ejemplo, en el que está autorizado el método GET para todas las API:

![API keys](images/api-keys.png){.thumbnail} 

Al hacer clic en `Create keys`{.action}, obtendrá tres llaves:

- la clave de aplicación, llamada **AK**. Por ejemplo:

```console
7kbG7Bk7S9Nt7ZSV
```

- su clave secreta, a no divulgar, llamada **AS**. Por ejemplo:

```console
EXEgWIz07P0HYwtQDs7cNIqCiQaWSuHF
```

- una clave "**consumer key**" secreta, a no divulgar, llamada **CK**. Por ejemplo:

```console
MtSwSrPpNjqfVSmJhLbPyr2i45lSwPU1
```

En este caso, la clave **CK** está asociada a su cuenta.

El token **CK** puede utilizarse para delegar permisos. Para más información, consulte la siguiente guía: [Cómo gestionar la cuenta de un cliente de OVHcloud a través de las API](https://docs.ovh.com/gb/en/api/api-rights-delegation/) (guía en inglés).

#### Uso inicial de la API

Una vez que haya obtenido las tres claves (**AK**, **AS**, **CK**), puede firmar las solicitudes de API. La firma se calcula de la siguiente manera:

```console
"$1$" + SHA1_HEX(AS+"+"+CK+"+"+METHOD+"+"+QUERY+"+"+BODY+"+"+TSTAMP)
```

Para simplificar el desarrollo de sus aplicaciones, OVHcloud le proporciona wrappers API en varios lenguajes.
Utilizarlas le permitirá no preocuparse por el cálculo de la firma y centrarse en el desarrollo de su aplicación.

- *Perl* : <https://github.com/ovh/perl-ovh>
- *Python* : <https://github.com/ovh/python-ovh>
- *PHP* : <https://github.com/ovh/php-ovh>
- *Node.js* : <https://github.com/ovh/node-ovh>
- *Swift* : <https://github.com/ovh/swift-ovh>
- *C#* : <https://github.com/ovh/csharp-ovh>

Este es un ejemplo de uso de la sección `/me`, que permite gestionar su cuenta de OVHcloud:

```python
import ovh

# Instantiate. Visit https://api.ovh.com/createToken/?GET=/me
# to get your credentials
client = ovh.Client(
    endpoint='ovh-eu',
    application_key='<application key>',
    application_secret='<application secret>',
    consumer_key='<consumer key>',
)

# Print nice welcome message
print("Welcome", client.get('/me')['firstname'])
```

## Más información <a name="gofurther"></a>

[Gestionar los dominios a través de la API](https://docs.ovh.com/es/domains/api/) (documentación en inglés)

[Cómo gestionar la cuenta de un cliente de OVHcloud a través de las API](https://docs.ovh.com/us/en/api/api-rights-delegation/) (guía en inglés)

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
