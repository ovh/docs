---
title: 'Resolver un error en un dominio'
slug: domain-errors
section: Tareas habituales
order: 01
---

**Última actualización: 01/09/2022**

## Objetivo

La creación de un nombre de dominio, su transferencia, su cambio de propietario son otras operaciones para las que puede producirse un error. En ese caso, puede ser necesaria una intervención por su parte.

**Esta guía explica cómo actuar cuando se produce un error en un dominio.**

## Requisitos

- Tener uno o más dominios.
- Haber iniciado sesión en el [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es).
- Estar actualizado en los [pagos](https://docs.ovh.com/es/billing/gestionar-facturas-ovh/#pay-bills) y [renovaciones](https://docs.ovh.com/es/billing/renovacion-automatica-ovh/#renewal-management) de los servicios asociados (dominio y alojamiento web).

## Procedimiento

Acceda a la sección [Web Cloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr) y seleccione `Dominios`{.action} en el área de cliente de OVHcloud` `{.action}. Haga clic en `Operaciones en curso`{.action} sobre la lista de dominios.

Una tabla le permite consultar todas las operaciones relacionadas con los dominios en su área de cliente.

![Dominio](images/domain-error-table01.png){.thumbnail}

- `Dominio`: Nombre de dominio afectado por la operación.
- `Operación`:  Operación en curso sobre el dominio.
- `Comentario`: Detalles de la operación en curso. Instrucciones.
- `Fecha de tratamiento`: Fecha de creación de la operación.
- `Fecha de actualización`:  Calendario de actualización de la operación en curso.
- `Fecha de finalización`: Fecha de finalización de la operación.
- `Estado`: Estado actual de la operación.

No todas las operaciones listadas en esta tabla requieren su intervención para que se realicen normalmente.<br>
En esta guía explicamos las operaciones **en error** con ejemplos recurrentes.

![Dominio](images/domain-error-table02.png){.thumbnail}

### Ejemplos

> [!primary]
>
> La siguiente lista de ejemplos es incompleta. Si se produce un error que no se explica en la siguiente guía:
>
> - Compruebe que está actualizado en los [pagos](https://docs.ovh.com/es/billing/gestionar-facturas-ovh/#pay-bills) y [renovaciones](https://docs.ovh.com/es/billing/renovacion-automatica-ovh/#renewal-management) de sus dominios.
> - Compruebe si puede hacer algo haciendo clic en el botón `...`{.action} situado al final de la línea correspondiente a la operación.
> - Lea el mensaje descriptivo y compruebe si le permite resolver el error.
>
> Si, a pesar de estas comprobaciones, no está en condiciones de cambiar el dominio, puede abrir un tíquet de asistencia desde el área de cliente.
>

#### Solicitar documentos

Algunas extensiones de dominios necesitan justificar su uso proporcionando documentos. En ese caso, deberá enviar los documentos desde la ventana `Operaciones en curso`{.action}.

![Dominio](images/domain-error01.png){.thumbnail}

Para entregar el documento o documentos necesarios, haga clic en el botón `...`{.action} situado al final de la línea correspondiente a la operación.<br>
Aparecerá la siguiente ventana, en la que podrá consultar la sección "Descripción" para obtener más información sobre el documento que desea adjuntar y un botón para descargar el documento.

![Dominio](images/domain-error02.png){.thumbnail}

#### Falta información

Al registrar un dominio, a veces es necesario completar los datos de "contacto". Si las direcciones IP no se ajustan a los criterios del dominio, puede ver el error que se indica a continuación.

![Dominio](images/domain-error03.png){.thumbnail}

Haga clic en el botón `...`{.action} a la derecha de la operación.<br>
Se abrirá una ventana en la que deberá completar los campos con la información del contacto correspondiente.

![Dominio](images/domain-error04.png){.thumbnail}

#### Código de transferencia erróneo 

Al transferir su dominio a OVHcloud, debe introducir un código de transferencia (**authInfo**) durante el pedido. Si el código es incorrecto, la operación se suspende, pero puede reiniciarla introduciendo el código correcto.

![Dominio](images/domain-error05.png){.thumbnail}

Haga clic en el botón `...`{.action} a la derecha de la operación.<br>
Se abrirá una ventana en la que deberá introducir el código de transferencia (**authInfo**) y reanudar la operación.

![Dominio](images/domain-error06.png){.thumbnail}

#### Error en los servidores DNS

Si los servidores DNS asociados a un dominio no funcionan, puede producirse un error.<br>
En el ejemplo a continuación, la dirección IP del servidor DNS no responde.

![Dominio](images/domain-error07.png){.thumbnail}

En la sección `Dominios`{.action}, seleccione el dominio correspondiente y abra la pestaña `Servidores DNS`{.action}. Desde esta pestaña, [modifique sus servidores DNS](https://docs.ovh.com/fr/domains/generalites-serveurs-dns/). 

#### Error en un dominio **.ie**, **.de** o **.it** después de una actualización de DNS

Al modificar los servidores DNS, es posible que el registro compruebe los nuevos servidores DNS y la zona DNS asociada y bloquee el dominio si la configuración no es correcta.

> [!warning]
>
> Este tipo de bloqueo es iniciado por el registro y no por OVHcloud. De este modo, aunque el dominio esté bloqueado por el Registro, sus servidores DNS aparecerán como `Activos` en su área de cliente de OVHcloud.

Para comprobar si el dominio está bloqueado, acceda al cuadro de `operaciones en curso`{.action}.

![Dominio](images/domain-error08.png){.thumbnail}

Para comprobar su dominio, le recomendamos que utilice la herramienta de verificación del Registro:

- Para un dominio.**.de** : <https://nast.denic.de/>.
- Para un dominio en **.it**: <https://dns-check.nic.it/>.

> [!primary]
>
> Si su registro no proporciona una herramienta de verificación de servidores DNS, es posible consultar sus nuevos servidores DNS mediante el comando `nslookup` en una "petición de pedido" Windows o a través del comando `dig` en un "terminal" Linux o macOS. 
>
> Si los servidores DNS están disponibles, la herramienta le devuelve una dirección IP.
>
> En cualquier caso, asegúrese de que el administrador del servidor DNS está bien configurado para alojar la zona DNS del dominio.

Una vez que haya identificado el origen del error y que lo haya corregido, puede hacer clic en el botón `...`{.action} a la derecha de la operación correspondiente y reanudar la operación de verificación DNS.

#### Error interno de OVHcloud

Se puede encontrar un error con los detalles "error interno". Este error no permite ninguna acción específica por su parte.<br>
En primer lugar, compruebe que el dominio y los servidores DNS estén activos. 

Si detecta una anomalía que no está relacionada con la configuración de los servidores DNS o de la zona DNS, puede abrir un tíquet de soporte a OVHcloud para identificar el origen del fallo de funcionamiento.

![Dominio](images/domain-error09.png){.thumbnail}

## Más información

[Transferir un dominio a OVHcloud](https://docs.ovh.com/es/domains/transferir-un-dominio-generico/)

[Transferir un dominio a otro agente registrador](https://docs.ovh.com/es/domains/transferencia_saliente_de_un_dominio_generico_o_geografico/)

[Cambiar los servidores DNS de un dominio de OVHcloud](https://docs.ovh.com/es/domains/web_hosting_informacion_general_sobre_los_servidores_dns/)
 
Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
