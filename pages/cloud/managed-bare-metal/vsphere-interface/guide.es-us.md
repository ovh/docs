---
title: Conectarse a la interfaz vSphere
routes:
    canonical: 'https://docs.ovh.com/us/es/private-cloud/instalar_el_vsphere_client/'
excerpt: Cómo conectarse a la interfaz vSphere
slug: instalar_el_vsphere_client
legacy_guide_number: g600
section: Primeros pasos
order: 2
updated: 2020-11-18
---

**Última actualización: 18/11/2020**

## Objetivo

**Esta guía explica las diferentes formas de conectarse a vSphere.**

## Requisitos

- Ser contacto administrador del servicio Hosted Managed Bare Metal para recibir las claves de acceso.
- Tener un usuario activo en el área de cliente.


## Procedimiento

### Conseguir las claves

Las claves de acceso se envían por correo electrónico al activar un servicio Hosted Managed Bare Metal, modificar una contraseña o crear un usuario.

```
Dirección IP/Nombre: pcc-xxx-xxx-xxx-xxx.ovh.com Nombre de usuario: admin Contraseña: xxxxxx
```

El siguiente documento de VMware incluye los diferentes puertos que debe abrir en su firewall para, por ejemplo, acceder a la consola: [Acceso a la consola](https://kb.vmware.com/kb/1012382){.external-link}.

### Utilizar el cliente web HTML5

El cliente web HTML5 está disponible en la interfaz web de su Hosted Managed Bare Metal en la dirección: `https://pcc-xxx-xxx-xxx-xxx.ovh.com/ui` (sustituya «pcc-xxx-xx-xx-xxx.ovh.com» por la dirección de su Hosted Managed Bare Metal).

![Conexión a la interfaz vSphere HTML5](images/connection_interface_w_html5.png){.thumbnail}

Accederá a la siguiente interfaz:

![Conexión a la interfaz vSphere HTML5](images/vsphere-client-html5.png){.thumbnail}

La página `Home`{.action} permite acceder a los principales menús de su vCenter. Desde ahí podrá realizar diversas acciones como:

- desplegar una máquina virtual desde `Hosts and Clusters`{.action};
- navegar en sus datastores.

### Utilizar el cliente web flash

El cliente web flash está disponible en la interfaz web de su Hosted Managed Bare Metal en la dirección: `https://pcc-xxx-xxx-xxx-xxx.ovh.com/vsphere-client` (sustituya «pcc-xxx-xx-xx-xxx.ovh.com» por la dirección de su Hosted Managed Bare Metal).

Para conectarse, utilice las claves de acceso recibidas:

![Cliente vSphere](images/vsphere-client.png){.thumbnail}

Accederá a la siguiente interfaz:

![Conexión a la interfaz vSphere](images/connection_interface_w.png){.thumbnail}

La página `Home`{.action} permite acceder a los principales menús de su vCenter. Desde ahí podrá realizar diversas acciones como:

- desplegar una máquina virtual desde `Hosts and Clusters`{.action};
- navegar en sus datastores.


## Más información

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
