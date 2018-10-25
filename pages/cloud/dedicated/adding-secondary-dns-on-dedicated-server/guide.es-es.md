---
title: 'Crear un DNS secundario en un servidor dedicado'
slug: crear-dns-secundario-servidor-dedicado
excerpt: 'Cómo crear un DNS secundario en un servidor dedicado de OVH'
section: 'Uso avanzado'
---

**Última actualización: 25/10/2018**

## Objetivo

Si quiere utilizar su [servidor dedicado](https://www.ovh.es/servidores_dedicados/){.external} como DNS principal para su dominio, puede añadir dicho dominio al servidor como DNS secundario.

**Esta guía explica cómo crear un DNS secundario y añadirlo a un servidor dedicado de OVH.**


## Requisitos

* Tener un [servidor dedicado](https://www.ovh.es/servidores_dedicados/){.external} con Windows instalado.
* Disponer de un [dominio](https://www.ovh.es/dominios/){.external} y poder administrarlo desde el [área de cliente de OVH](https://www.ovh.com/auth/?action=gotomanager){.external}.
* Estar conectado al [área de cliente de OVH](https://www.ovh.com/auth/?action=gotomanager){.external}.


## Procedimiento

### Obtener un código de verificación para el dominio

En la sección `Dedicado`{.action} del área de cliente, haga clic en `Servidores dedicados`{.action} en la columna izquierda y seleccione el servidor dedicado.

![DNS secundario](images/dns2-01.png){.thumbnail}

Abra la pestaña `DNS secundario`{.action} y haga clic en el botón `Añadir un dominio`{.action}.

![DNS secundario](images/dns2-02.png){.thumbnail}

Introduzca su dominio en el campo **Dominio** y haga clic en `Siguiente`{.action}.

![DNS secundario](images/dns2-03.png){.thumbnail}

Aparecerá un mensaje informando de la necesidad de crear un registro de tipo TXT en la zona DNS del dominio. Anote el subdominio y el valor que se indican en el mensaje y haga clic en `Cancelar`{.action}.

![DNS secundario](images/dns2-04a.png){.thumbnail}


### Verificar el dominio

En la sección `Web`{.action} del [área de cliente de OVH](https://www.ovh.com/auth/?action=gotomanager){.external}, haga clic en `Dominios`{.action} en la columna izquierda y seleccione el dominio.

![Verificación del dominio](images/domain-verification-01.png){.thumbnail}

Abra la pestaña `Zona DNS`{.action} y haga clic en el botón `Añadir un registro`{.action}.

![Adición del registro](images/domain-verification-02.png){.thumbnail}

Seleccione el tipo de registro `TXT`{.action} y haga clic en `Siguiente`{.action}.

![Selección del tipo de registro](images/domain-verification-03.png){.thumbnail}

En los campos **Subdominio** y **Valor**, introduzca la información obtenida anteriormente. Haga clic en `Siguiente`{.action} para continuar.

![Adición del registro](images/domain-verification-04.png){.thumbnail}

Haga clic en `Aceptar`{.action} para añadir el registro.

![Adición del registro](images/domain-verification-05.png){.thumbnail}

> [!primary]
>
> Es necesario un tiempo de propagación DNS de entre 4 y 24 horas para que el registro esté activo en todos los servidores mundiales.
>

### Añadir el DNS secundario al servidor

Repita los pasos realizados al principio de esta guía: vuelva a la sección `Dedicado`{.action}, haga clic en `Servidores dedicados`{.action} y seleccione de nuevo el servidor. Abra la pestaña `DNS secundario`{.action} y haga clic en el botón `Añadir un dominio`{.action}.

![DNS secundario](images/dns2-02.png){.thumbnail}

Introduzca  su dominio en el campo **Dominio** y haga clic en `Siguiente`{.action}.

![DNS secundario](images/dns2-03.png){.thumbnail}

Como ya ha creado el registro TXT del dominio, haga clic directamente en `Siguiente`{.action} para continuar.

![DNS secundario](images/dns2-04b.png){.thumbnail}

Por último, haga clic en `Añadir`{.action} para confirmar el registro.

![DNS secundario](images/dns2-05.png){.thumbnail}


## Más información

[Editar una zona DNS de OVH](https://docs.ovh.com/es/domains/web_hosting_como_editar_mi_zona_dns/){.external}

Interactúe con nuestra comunidad de usuarios en [ovh.es/community](https://www.ovh.es/community/){.external}.