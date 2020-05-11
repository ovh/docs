---
title: 'Configurar la doble autenticación en una cuenta Exchange'
slug: configurar-2fa-exchange
excerpt: 'Cómo configurar la doble autenticación en una cuenta Exchange'
section: 'Funcionalidades de Exchange'
order: 3
---

**Última actualización: 11/3/2020**

## Objetivo

Si desea optimizar la seguridad de su cuenta Exchange, puede activar la doble autenticación (2FA). Esta genera un código que deberá introducir cada vez que inicie sesión, además de su contraseña. El código se genera mediante una aplicación de *contraseña de un solo uso* (OTP) que deberá instalar en su teléfono inteligente o tableta.

**Cómo activar la autenticación de dos factores en su cuenta Exchange**

## Requisitos

- Tener un plan [Exchange de OVHcloud](https://www.ovh.es/emails/){.external}.
- Haber iniciado sesión en el [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager).
- Haber instalado una aplicación OTP en un teléfono inteligente o en una tableta con sistema operativo Android o iOS.

> [!primary]
>**Las aplicaciones móviles OTP**
>
> Existen numerosas aplicaciones OTP. Dos de estas aplicaciones son gratuitas:
> 
> - Para Android: Free OTP
> - Para iOS: OTP Auth
> 

## Procedimiento

### Primera configuración:

#### Paso 1: activar la doble autenticación en la plataforma 

Al momento de realizar la primera configuración, es necesario activar la doble autenticación en la plataforma antes de activarla en una cuenta.

Inicie sesión en el [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager) y acceda a la sección «Web». En la barra de servicios a la izquierda, haga clic en `«Microsoft»`{.action} y seleccione `«Exchange»`{.action}. Por último, seleccione el servicio Exchange correspondiente.

Acceda a la pestaña `«Seguridad»`{.action} de la plataforma. Debajo de la opción «Doble autenticación», haga clic en `«Activar`{.action}». Para terminar, desplácese hasta el final de la página y haga clic en `«Guardar los cambios»`{.action}.

![2fa-exchange](images/2fa-exchange.gif){.thumbnail}

#### Paso 2: activar la doble autenticación en una cuenta

Una vez activada la doble autenticación en la plataforma, puede activarla en una de sus cuentas.

Desde su plataforma Exchange, acceda a la pestaña `«Cuentas de correo»`{.action}. Haga clic en `«...»`{.action} a la derecha de la cuenta en la que desea activar la doble autenticación y, seguidamente, en `«Activar la doble autenticación»`{.action}.

![2fa-exchange](images/2fa-exchange-01.png){.thumbnail}

Para asociar su cuenta a su aplicación OTP, inicie sesión en su [correo electrónico basado en la web](https://www.ovh.com/fr/mail/).

Al conectarse por primera vez, aparece un código QR. Utilice la aplicación OTP para escanearlo e introduzca el código que la aplicación generó para conectarse.

![2fa-exchange](images/2fa-exchange-02.png){.thumbnail}

Las próximas veces que se conecte, solo se le solicitará el código que generó la aplicación.

### Desactivar la doble autenticación

La doble autenticación de su cuenta puede desactivarse de tres maneras diferentes.

Inicie sesión en el [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager) y acceda a la sección «Web». En la barra de servicios a la izquierda, haga clic en `«Microsoft»`{.action} y seleccione `«Exchange»`{.action}. Por último, seleccione el servicio Exchange correspondiente.

En la pestaña `«Cuentas de correo»`{.action} de su plataforma Exchange, haga clic en `«...»`{.action} a la derecha de la cuenta en la que ya haya activado la doble autenticación.

![2fa-exchange](images/2fa-exchange-04.png){.thumbnail}

Seleccione la opción que corresponde a sus necesidades según la siguiente tabla:

| N.°                 	| Función    | Descripción                                                                                                        	
|----------------------------------	|------------------|------------------|
| 1. | «Desactivar la doble autenticación» | Permite eliminar la doble autenticación durante un periodo de tiempo determinado en horas. Una vez superado el plazo, la doble autenticación se reactivará. <br> *Ejemplo: un usuario ha olvidado su teléfono inteligente y no puede autenticarse con la aplicación OTP.*   |
| 2. | «Restablecer la doble autenticación» | Permite restablecer el código QR solicitado al conectarse por primera vez al correo electrónico basado en la web.<br> *Ejemplo: un usuario ha cambiado de teléfono inteligente y debe volver a configurar su aplicación OTP.* |
| 3. | «Eliminar la doble autenticación» | Elimina por completo la doble autenticación de la cuenta. | 

## Más información

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
