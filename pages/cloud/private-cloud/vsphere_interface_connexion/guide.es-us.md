---
title: Conectarse a la interfaz vSphere
excerpt: Cómo conectarse a la interfaz vSphere
slug: instalar_el_vsphere_client
legacy_guide_number: g600
section: Primeros pasos
order: 2
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón "Contribuir" de esta página.
>

**Última actualización: 24/06/2022**

## Objetivo

**Esta guía explica cómo conectarse a vSphere.**

## Requisitos

- Ser contacto administrador de la infraestructura [Hosted Private Cloud](https://www.ovhcloud.com/es/enterprise/products/hosted-private-cloud/), para recibir claves de conexión.
- Haber añadido direcciones IP a la sección `Seguridad`{.action} de su [área de cliente de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws). Para más información, consulte nuestra guía [Autorizar a las IP a conectarse al vCenter](https://docs.ovh.com/us/es/private-cloud/autorizar-direcciones-ip-a-conectarse-al-vcenter/).

## Procedimiento

### Conseguir las claves

Las claves de acceso se envían por correo electrónico al activar un servicio Hosted Private Cloud, modificar una contraseña o crear un usuario.

```
Dirección IP/Nombre: pcc-xxx-xxx-xxx-xxx.ovh.com Nombre de usuario: admin Contraseña: xxxxxx
```

El siguiente documento de VMware incluye los diferentes puertos que debe abrir en su firewall para, por ejemplo, acceder a la consola: [Acceso a la consola](https://kb.vmware.com/kb/1012382){.external-link}.

### Utilizar el cliente web HTML5

El cliente web HTML5 está disponible en la interfaz web de su Hosted Private Cloud en la dirección: <https://pcc-xxx-xxx-xxx-xxx.ovh.com/ui> (sustituya «pcc-xxx-xx-xx-xxx.ovh.com» por la dirección de su Hosted Private Cloud).

![Conexión a la interfaz vSphere HTML5](images/connection_interface_w_html5.png){.thumbnail}

Accederá a la siguiente interfaz:

![Conexión a la interfaz vSphere HTML5](images/vsphere-client-html5.png){.thumbnail}

La página `Home`{.action} permite acceder a los principales menús de su vCenter.

## Más información

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
