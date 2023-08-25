---
title: 'Funcionamiento del certificado SSL en la CDN'
excerpt: 'Cómo añadir un certificado SSL al servicio CDN'
updated: 2018-02-22
---


## Objetivo

Es posible añadir un [certificado SSL](https://www.ovhcloud.com/es-es/web-hosting/options/ssl/){.external} a su red de distribución de contenidos (CDN, del inglés *content delivery network*) para que los usuarios puedan establecer conexiones seguras incluso pasando por la CDN.

**Esta guía explica cómo funcionan los certificados SSL Let's Encrypt que ofrece OVH.**


## Requisitos

- Tener contratada la solución [CDN de OVH](https://www.ovh.es/cdn/){.external}.
- Tener acceso a la gestión de la zona DNS del dominio.

## Procedimiento

### Obtener el certificado Let's Encrypt de OVH para los subdominios que utilizan la CDN

- Si no ha configurado ningún certificado y añade un primer subdominio a la CDN, se generará automáticamente un certificado Let's Encrypt para dicho dominio.
- Si añade a la CDN un nuevo subdominio, el certificado se regenerará automáticamente para incluir el subdominio recientemente configurado.


Para poder crear el certificado, es necesario que el subdominio que acaba de añadir apunte correctamente a la CDN. Para más información, consulte nuestra guía sobre cómo [configurar un dominio en la CDN](/pages/network/content_delivery_network_infrastructure/first_domain_name_configuration){.external}.

El certificado se renovará automáticamente en los 20 días previos a la expiración del certificado.

> [!warning]
>
> El certificado Let's Encrypt que proporciona OVH puede utilizarse en los 100 primeros dominios o subdominios configurados en la CDN. Si quiere utilizarlo en más de 100 dominios, deberá configurar su propio certificado *wildcard* o multidominio.
>


### ¿Cuánto tiempo tarda en crearse un certificado?

Generar (o regenerar) un certificado y desplegarlo en todos nuestros puntos de presencia tarda un promedio de dos horas.

![Creación de un certificado SSL](images/ssl_in_progress.png){.thumbnail}


Si cree que el proceso de creación está bloqueado, compruebe que todos los dominios configurados en su solución apuntan a la CDN. De lo contrario, no será posible crear el certificado.

Tenga en cuenta que, si ha cambiado el destino del dominio durante el proceso de creación, nuestro sistema volverá a intentar crear el certificado periódicamente durante 48 horas. Una vez transcurrido este período de tiempo, la tarea de creación se cancelará.

El sistema volverá a intentar crear el certificado cuando añada un nuevo dominio o si solicita manualmente un certificado.

Una vez activado el certificado, podrá ver lo siguiente en el área de cliente:

![SSL validado](images/ssl_validated.png){.thumbnail}


### Añadir un certificado propio

- Si todavía no ha añadido un dominio o no tiene ningún certificado, puede utilizar la opción `Añadir mi certificado`{.action} desde la pestaña SSL de su CDN.


![Añadir un certificado SSL](images/add_ssl.png){.thumbnail}

- Si ya tiene un certificado Let's Encrypt, utilice la opción `Sustituir por mi certificado`{.action}.

![Sustituir un certificado SSL](images/change_ssl.png){.thumbnail}


## Más información

[Primera configuración de un dominio](/pages/network/content_delivery_network_infrastructure/first_domain_name_configuration){.external}

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.