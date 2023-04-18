---
title: 'Activar la certificación PCI DSS en el Private Cloud de OVH'
excerpt: 'Cómo activar la certificación PCI DSS en el servicio Private Cloud de OVH'
updated: 2020-05-27
---

**Última actualización: 11/04/2019**

## Objetivo

En la solución Private Cloud de OVH es posible activar la certificación PCI DSS. Esta certificación es necesaria, por ejemplo, para alojar [datos de tarjetas bancarias](https://www.ovh.es/private-cloud/payment-infrastructure/pci-dss.xml){.external}.

**Esta guía explica cómo activar la certificación PCI DSS en el servicio Private Cloud de OVH.**

## Requisitos

- Tener una infraestructura Private Cloud con versión 6.0 o superior.
- Estar conectado al [área de cliente de OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es).

## Procedimiento

### Activar la opción de seguridad avanzada

Para poder activar la certificación PCI DSS en su Private Cloud, debe tener activada la opción de seguridad correspondiente. Para comprobarlo, en la sección **Dedicado** del [área de cliente de OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es), haga clic en `Private Cloud`{.action} en la columna izquierda y seleccione su Private Cloud. 

A continuación, en la pestaña `Información general`{.action}, compruebe que la opción **Payment Card Industry Data Security Standard (PCI DSS)** del apartado **Opc. de seguridad** esté activada. **Tenga en cuenta que no es posible activar simultáneamente varias opciones de seguridad en un mismo Private Cloud.**

![Opc. de seguridad](images/HomeSDDCManager-2.png){.thumbnail}

Si todavía no está activa, haga clic en el botón `···`{.action} situado a la derecha y seleccione `Activar`{.action}. Para poder activarla, es necesario cumplir los siguientes requisitos:

- **Las opciones [NSX](https://www.ovh.es/private-cloud/opciones/nsx.xml){.external} y [vROps](https://www.ovh.es/private-cloud/opciones/vrops.xml){.external} deben estar activas:** Puede comprobarlo en la pestaña `Información general`{.action}, en el apartado **Opciones de Private Cloud**. Si alguna de ellas no está activa, haga clic en el botón `···`{.action} situado a la derecha de la opción correspondiente y seleccione `Activar`{.action}.

- **La política de acceso al vCenter debe ser restringida:** Puede comprobarlo en la pestaña `Seguridad`{.action}. Si tiene configurada una política abierta, puede cambiarla a restringida haciendo clic en el botón `Política de acceso al vCenter`{.action} y siguiendo los pasos que se indican. Para más información, consulte la guía [Presentación del área de cliente del Private Cloud de OVH](/pages/cloud/private-cloud/manager_ovh_private_cloud#security) (en inglés) si lo necesita.

- **Debe disponer de al menos una dirección IP autorizada a conectarse al vCenter:** Puede comprobarlo en la pestaña `Seguridad`{.action}. Si no dispone de una dirección IP autorizada, puede añadir una haciendo clic en el botón `Añadir un nuevo rango de direcciones IP`{.action}. Para más información, consulte la guía [Presentación del área de cliente del Private Cloud de OVH](/pages/cloud/private-cloud/manager_ovh_private_cloud#security) (en inglés) si lo necesita.<br>
  Para no perder la posibilidad de conectarse, le recomendamos que disponga de al menos dos direcciones IP autorizadas. Lógicamente, las IP deben ser fijas y no dinámicas para garantizar la accesibilidad.

- **El usuario «admin» debe disponer de los permisos necesarios y su información debe ser completa:** Para comprobarlo, abra la pestaña `Usuarios`{.action} y asegúrese de que el número de teléfono y la dirección de correo electrónico del usuario «admin» son correctos y de que dispone del permiso «**token validator**». Para editar esta información, haga clic en el botón `···`{.action} situado al final de la línea correspondiente y seleccione `Editar`{.action}. Para más información, consulte la guía [Presentación del área de cliente del Private Cloud de OVH](/pages/cloud/private-cloud/manager_ovh_private_cloud#users) (en inglés) si lo necesita.<br>
  Para no perder el acceso al vCenter, le recomendamos que siempre disponga de al menos dos usuarios con su respectiva información (diferentes direcciones de correo y números de teléfono) y permisos.

Una vez que haya finalizado la activación, deberá:

- validar el token enviado por SMS a los usuarios que dispongan del permiso «token validator» para confirmar que usted puede recibir los tokens necesarios para validar las operaciones;
- rellenar los documentos que recibirá por correo electrónico para completar el aspecto contractual. 

Mientras tanto, le recomendamos que siga leyendo esta guía para saber cómo utilizar la interfaz segura. 

> [!primary]
>
> Tenga en cuenta que no podrá acceder al cliente vSphere durante la activación de la opción de seguridad.
>

### Empezar a utilizar la interfaz segura

Una vez activada la opción de seguridad, recibirá por correo electrónico el procedimiento de validación de los tokens, en el que se explica, entre otras cosas, su funcionamiento y los pasos que debe seguir para poder utilizarlos. 

Como medida de precaución, tras la activación de la opción de seguridad:

- todos los usuarios de su Private Cloud se desactivarán;
- deberá cambiar las contraseñas de los usuarios para poder reactivarlos;
- en lo sucesivo, el cambio de las contraseñas de los usuarios solo podrá realizarse desde la interfaz segura (ya no será posible realizar esta operación desde el área de cliente de OVH). 

Le recordamos que no podrá acceder a la interfaz segura hasta que haya finalizado la activación de la opción de seguridad.

Conéctese a la interfaz segura a través del enlace que le habremos enviado por correo electrónico. Este enlace tendrá el siguiente formato: **https://pcc-xxx-xxx-xxx-xxx.ovh.com/secure/password-lost**. Una vez que se haya conectado, podrá cambiar la contraseña del usuario «admin» y, a continuación, la de los usuarios adicionales. Para más información, consulte nuestra guía [Utilizar la interfaz segura](/pages/cloud/private-cloud/interface-secure).

## Más información

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.