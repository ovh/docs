---
title: Conectarse a la interfaz vSphere
excerpt: Cómo conectarse a la interfaz vSphere
slug: instalar_el_vsphere_client
legacy_guide_number: g600
section: Primeros pasos
order: 2
---

**Última actualización: 28/12/2021**

## Objetivo

**Esta guía explica las diferentes formas de conectarse a vSphere.**

## Requisitos

- Ser contacto administrador de la infraestructura [Hosted Private Cloud](https://www.ovhcloud.com/es-es/enterprise/products/hosted-private-cloud/), para recibir claves de conexión.
- Tener un usuario activo (creado en el [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es).

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

### Utilizar el cliente web flash

El cliente web flash está disponible en la interfaz web de su Hosted Private Cloud en la dirección: <https://pcc-xxx-xxx-xxx-xxx.ovh.com/vsphere-client> (sustituya «pcc-xxx-xx-xx-xxx.ovh.com» por la dirección de su Hosted Private Cloud).

Para conectarse, utilice las claves de acceso recibidas:

![Cliente vSphere](images/vsphere-client.png){.thumbnail}

Accederá a la siguiente interfaz:

![Conexión a la interfaz vSphere](images/connection_interface_w.png){.thumbnail}

La página `Home`{.action} permite acceder a los principales menús de su vCenter.

## Más información

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
