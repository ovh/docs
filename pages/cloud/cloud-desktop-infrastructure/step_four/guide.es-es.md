---
title: 4. Asignar escritorios virtuales a los usuarios
slug: asignar-escritorios-virtuales
excerpt: Cómo asignar escritorios virtuales a los distintos usuarios
section: Primera configuración
order: 4
---

**Última actualización: 16/02/2018**

## Objetivo

Una vez [creado el pool](https://docs.ovh.com/es/cloud-desktop-infrastructure/crear-pool/){.external}, pasamos a autorizar usuarios en los distintos escritorios virtuales.

**Esta guía explica cómo añadir dichos usuarios.**


## Requisitos

- Haber creado usuarios en el Active Directory, en caso de haber creado una relación de aprobación, o haber creado usuarios desde el [área de cliente de OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es){.external}.
- Estar conectado a VMware Horizon 7.1.



## Procedimiento

### Administrar los usuarios

La plataforma se entrega con 10 usuarios genéricos creados (con el formato «vdiXX», donde «XX» representa un número). El email de notificación de la entrega del servicio contiene la información de conexión.


## Asignar escritorios virtuales

Las operaciones se desarrollan en VMware Horizon 7.1. La pestaña `Entitlements`{.action} del grupo permite asociarle usuarios para darles acceso a los escritorios virtuales desplegados.

- Haga clic en `Add Entitlement`{.action} para abrir el menú contextual.

![Add Entitlement](images/1200.png){.thumbnail}

- Busque y seleccione el usuario o usuarios que quiera asociar y acepte.

![Selección del usuario](images/1201.png){.thumbnail}


Los usuarios asociados a un grupo ya podrán [conectarse y utilizar los escritorios virtuales](https://docs.ovh.com/es/cloud-desktop-infrastructure/conectarse-escritorio-virtual/){.external}.


## Más información

Interactúe con nuestra comunidad de usuarios en [ovh.es/community](https://www.ovh.es/community/){.external}.
