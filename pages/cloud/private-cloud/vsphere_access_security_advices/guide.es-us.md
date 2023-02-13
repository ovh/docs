---
title: 'Buenas prácticas de seguridad en vSphere Web Client'
slug: seguridad-acceso-vsphere-web
excerpt: 'Cómo proteger el acceso a vSphere Web Client'
section: 'Primeros pasos'
updated: 2020-06-30
---

**Última actualización: 30/06/2020**

## Objetivo

Restringir el acceso a su infraestructura es una medida recomendable para garantizar su seguridad. Existen distintas formas de hacerlo.

**Esta guía ofrece algunos consejos para proteger rápida y fácilmente el acceso al cliente web vSphere**.

## Requisitos

- Haber iniciado sesión en el [área de cliente de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws){.external}.

## Procedimiento

### Controlar los accesos por IP

En primer lugar, debe restringir los accesos por IP. Le aconsejamos que utilice siempre un sistema de lista blanca. Esta técnica consiste en prohibir el acceso por defecto a todas las direcciones IP e indicar las direcciones que sí pueden acceder a la infraestructura.

Puede realizar esta operación directamente desde el [área de cliente de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws){.external}. Una vez conectado a su Private Cloud, abra la pestaña `Seguridad`{.action}. Se mostrará una tabla en la que podrá consultar las direcciones IP autorizadas o denegadas. Para añadir nuevas direcciones IP, haga clic en el botón `Añadir IP`{.action}, situado a la derecha.

![Añadir IP](images/adding_ip.png){.thumbnail}


### Crear usuarios específicos

Le recomendamos encarecidamente que cree un acceso personal para cada usuario que necesite acceder a la infraestructura. Puede realizar esta operación desde el [área de cliente de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws){.external}, en la pestaña `Usuarios`{.action}. Para añadir nuevos usuarios, haga clic en el botón `Crear un usuario`{.action}.

![Usuarios](images/users.png){.thumbnail}


Al crear un usuario, deberá asignarle una contraseña.

> [!primary]
>
> Para proteger mejor sus datos, la contraseña debe seguir una serie de recomendaciones:
>
> - tener un mínimo de ocho caracteres;
> - incluir al menos tres tipos de caracteres diferentes;
> - no elegir una palabra que esté en el diccionario;
> - no incluir datos personales (nombre, apellidos o fecha de nacimiento); 
> - no utilizar la misma contraseña para varias cuentas de usuario;
> - guardar la contraseña en un gestor de contraseñas;
> - cambiar la contraseña cada tres meses;
> - utilizar una contraseña diferente a las utilizadas anteriormente.
>

A continuación, podrá administrar los permisos de cada usuario haciendo clic en los tres puntos (`...`{.action}) situados al final de la línea correspondiente a cada usuario.

![Configuración de los parámetros de los usuarios](images/users_edit.png){.thumbnail}

### Limitar la duración de las sesiones

Le recomendamos que cierre la sesión cuando termine de utilizar el cliente. Es posible añadir un plazo de expiración para limitar la duración de las sesiones.

Puede configurar este parámetro directamente en el [área de cliente de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws){.external}. Una vez conectado a su Private Cloud, abra la pestaña `Seguridad`{.action}. A continuación, haga clic en el botón `Cambiar el plazo de expiración`{.action}, situado a la derecha.

![Expiración de la sesión](images/security-expiration.png){.thumbnail}

Se abrirá una ventana en la que podrá elegir el tiempo (en minutos) que debe transcurrir antes de que expire una sesión.

![Expiración de la sesión](images/expiration.png){.thumbnail}

## Más información

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
