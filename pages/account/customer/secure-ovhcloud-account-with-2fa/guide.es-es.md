---
title: 'Proteger su cuenta de OVHcloud con la doble autenticación'
slug: proteger-su-cuenta-con-una-2FA
excerpt: 'Cómo mejorar la seguridad de su cuenta de OVHcloud activando la doble autenticación'
section: Seguridad
---

**Última actualización: 16/04/2020**

## Objetivo

OVHcloud pone a su disposición herramientas para reforzar la seguridad de su cuenta y de sus servicios.
Puede activar la autentificación de dos factores (2FA). Esta se agrega a su nombre de usuario y contraseña, y se gestiona desde uno de sus dispositivos, ya sea un teléfono, una tableta o una llave de seguridad.  

**Cuáles son los diferentes métodos propuestos y cómo activarlos**

## Requisitos

- Haber iniciado sesión en el [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager).
- Disponer de un móvil (para el método por SMS), un teléfono inteligente o una tableta (para el método a través de la aplicación móvil) o una llave de seguridad U2F (Universal Second Factor).
- Haber consultado las [recomendaciones sobre la gestión de la contraseña de acceso a su cuenta](https://docs.ovh.com/es/customer/gestionar-su-contrase%C3%B1a/).

## Procedimiento

Tiene la posibilidad de activar uno o varios métodos de doble autenticación con el fin de proteger y controlar el acceso a su área de cliente.
Le proponemos tres métodos diferentes:

- **Mediante SMS**. Introduzca su número de teléfono móvil. Se le enviará por SMS un código de uso único cada vez que intente conectarse a su cuenta de OVHcloud. La principal ventaja de este método es que utiliza un código que se envía a un dispositivo distinto a su ordenador. En caso de sufrir una intrusión, por ejemplo, de un programa maligno, su cuenta permanecerá protegida. Sin embargo, debe tener suficiente cobertura de red para recibir los SMS.

- **Mediante una aplicación móvil de OTP**. Instale una aplicación móvil de OTP en su teléfono inteligente o tableta con sistema operativo Android o iOS. Luego, asocie la aplicación a su cuenta de OVHcloud. En cada intento de conexión, la aplicación generará un código de uso único válido durante un corto tiempo.
Tras asociar por primera vez la aplicación a su cuenta, ya no será necesario que su dispositivo esté conectado a internet para que se generen los códigos.


- **Mediante una llave de seguridad U2F**. Para aplicar este método, es necesario conectar una memoria USB de seguridad U2F a su ordenador cada vez que inicie sesión en su cuenta de OVHcloud. Entonces la autenticación se realiza automáticamente. Este método ofrece un nivel de seguridad más alto, pues se basa en un dispositivo de seguridad independiente; totalmente aparte de su ordenador, teléfono inteligente o tableta, y que está menos expuesto a los riesgos de pirateo.

### Etapa 1: activar su primer método de doble autenticación

- [Activar el método de doble autenticación por SMS](https://docs.ovh.com/es/customer/activar-la-doble-autenticacion-por-sms/).
- [Activar el método de doble autenticación por aplicación móvil](https://docs.ovh.com/es/customer/activar-la-doble-autenticacion-por-aplicacion-movil/).
- [Activar el método de doble autenticación por llave de seguridad](https://docs.ovh.com/es/customer/activar-la-doble-autenticacion-por-llave-de-seguridad/).

Tras añadir el primer método, puede agregar uno o dos más a fin de disponer de múltiples medios para iniciar sesión en su cuenta.

### Etapa 2: guardar los códigos de seguridad

Cuando añade una doble autenticación por primera vez, se le comunicarán los códigos de seguridad. Guárdelos cuidadosamente. En consecuencia, le aconsejamos guardarlos en un gestor de contraseñas.

![2FA](images/2facodes.png){.thumbnail}

Podrá eliminarlos o regenerarlos en su área de cliente:

![2FA](images/2facodesaction.png){.thumbnail}

> [!warning]
>
> Le recordamos que es indispensable guardar estos códigos de seguridad y asegurarse de que sean válidos. En caso de indisponibilidad de su/s método/s de seguridad seleccionado/s (debido al robo o pérdida de su teléfono o de su llave de seguridad), el acceso a su área de cliente podría quedar bloqueado.
> 



### Etapa 3: iniciar sesión en el área de cliente con la doble autenticación

Tras activar la doble autenticación, la pantalla de identificación le mostrará el método de seguridad seleccionado. Si desea utilizar otro, haga clic en el botón `«Intentarlo con otro método»`{.action}.

![2FA](images/2fasmsloginedit.png){.thumbnail}

Entonces aparecerán todos los métodos que activó:

![2FA](images/2faloginchoice.png){.thumbnail}

### ¿Qué se debe hacer en caso de pérdida o avería de uno de los dispositivos?

Si perdió su dispositivo (teléfono inteligente, tableta o llave de seguridad) o este dejó de funcionar, le aconsejamos que utilice los otros métodos de doble autenticación activos en su cuenta.

También puede utilizar uno de los códigos de seguridad que tiene a su disposición. 


### Eliminar un dispositivo asociado a la doble autenticación

> [!warning]
>
> Aunque se elimine un dispositivo, la doble autenticación sigue activa. 
> 
> Antes de eliminar un dispositivo y para evitar que se bloquee el acceso a su cuenta, compruebe que dispone de alguna de las siguientes opciones:
> 
> - Un dispositivo operativo
> 
> - Otro método de doble autenticación operativo 
> 
> - Códigos de seguridad válidos.
> 

Si desea eliminar un dispositivo, inicie sesión en su [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}. Haga clic en su nombre en la esquina superior derecha (primer paso en la siguiente imagen) y, seguidamente, en sus iniciales (segundo paso). 

![2FA](images/hub2FAb.png){.thumbnail}

Haga clic en `«Seguridad»`{.action} (primer paso en la siguiente imagen) y, seguidamente, en el icono de 3 puntos `«...»`{.action} (segundo paso) a la derecha del dispositivo que va a eliminar. Por último, haga clic en `«Eliminar»`{.action} (tercer paso).

![2FA](images/hub2FAc.png){.thumbnail}


## Más información

Interactúe con nuestra comunidad de usuarios en [https://community.ovh.com/en/](https://community.ovh.com/en/).