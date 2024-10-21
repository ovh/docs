---
title: 'Añadir un dominio a un servicio Exchange'
excerpt: 'Cómo añadir un dominio a un servicio Exchange'
updated: 2023-06-14
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
>

## Objetivo

Añadir un dominio a un servicio Exchange es un requisito indispensable para poder utilizar las cuentas de dicho servicio. También es posible añadir varios dominios a un servicio Exchange o Email Pro.

**Esta guía explica cómo añadir un dominio a una plataforma Exchange o Email Pro.**

## Requisitos

- Tener una [solución Exchange](https://www.ovhcloud.com/es-es/emails/) o [Email Pro](https://www.ovhcloud.com/es-es/emails/email-pro/).
- Tener uno o más dominios.
- Estar en condiciones de modificar la configuración del dominio ([zona DNS](/pages/web_cloud/domains/dns_zone_edit)).
- Haber iniciado sesión en el [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es).

## Procedimiento

### Acceder a la gestión del servicio

Una vez que el servicio Exchange o Email Pro haya sido creado y esté disponible, puede administrarlo desde el [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es).

En la sección `Web Cloud`{.action}:

- **Exchange**: Haga clic en `Microsoft`{.action} y seleccione `Exchange`{.action}. 
- **Email Pro**: Haga clic en `Email Pro`{.action}.

Por último, seleccione el servicio correspondiente.

### Añadir un dominio

Para añadir un dominio, abra la pestaña `Dominios asociados`{.action}. Se mostrará una tabla con los dominios asociados a su servicio. Haga clic en el botón `Añadir un dominio`{.action} y siga los pasos que se le indican para añadir el dominio.

> [!warning]
>
> Todas las direcciones creadas en el servicio de correo podrán ver en el directorio el conjunto de direcciones de este servicio, incluidas aquellas que posean un nombre de dominio diferente. Para disociar la visualización de los dominios, debe contratar una nueva [solución Exchange o Email Pro](https://www.ovhcloud.com/es-es/emails/) para el o los dominios en cuestión.
>

![Add Domain](images/add_domain_exchange_step1.png){.thumbnail}

A continuación, se le ofrecerán dos opciones:

- **seleccionar un dominio de la lista**: solo se mostrarán los dominios que utilicen la configuración de OVHcloud y que se encuentren bajo el mismo ID de cliente.

- **Introducir un nombre de dominio no gestionado por su cuenta OVHcloud** : deberá estar en condiciones de modificar la configuración del dominio (su zona DNS) para que el servicio pueda funcionar correctamente. En este caso, deberá añadir un registro DNS CNAME.

A continuación, haga clic en `«Siguiente»`{.action}.

![Add Domain](images/add_domain_exchange_step2.png){.thumbnail}

Se mostrará un mensaje informativo relativo al modo de configuración del dominio.

- **Si ha introducido un dominio no gestionado por OVHcloud**: el modo no autoritario se configurará por defecto.

- **Si ha seleccionado en la lista un dominio gestionado por OVHcloud**: deberá elegir entre dos modos.
    - **Autoritario** : Es conveniente si solo utiliza su solución Exchange o Email Pro con su nombre de dominio. No permite utilizar otra solución de correo conjuntamente con el servicio.|
    - **No autoritario** : Es el modo adecuado cuando utiliza con su dominio la solución Exchange o Email Pro conjuntamente con otra solución de correo. Debe indicar el servidor de su otra solución de correo.|

>
> - Cuando se transmite un correo electrónico a su plataforma de correo electrónico (*Server A*) en modo **autoritario**, esto significa que todas las direcciones de correo electrónico de su nombre de dominio solo están alojadas en esta plataforma. <br> <br> Por ejemplo, si enviamos un correo electrónico a la dirección "*mary.johnson@mydomain.ovh*", el "*Server A*" devuelve un mensaje de error al remitente, porque esta dirección no no existe en "*Server A*".
> - Cuando se transmite un correo electrónico a su plataforma de correo electrónico (*Server A*) en modo **no autorizado**, esto significa que las direcciones de correo electrónico de su nombre de dominio se distribuyen entre el correo electrónico principal de su plataforma (*Server A*) y otro servicio de correo electrónico (*Server B*). <br> <br> Por ejemplo, si enviamos un correo electrónico a la dirección "*mary.johnson@mydomain.ovh*", el *Server A* reenviará el correo electrónico al "*Server B*" para que éste lo entregue.
>
>![Agregar dominio](images/add_domain_exchange_authoritative.png){.thumbnail}
>

> [!warning]
>
> Si recibe el mensaje "**dominio autorizado detectado**" al agregar su nombre de dominio a su plataforma de correo electrónico, esto significa que este nombre de dominio está declarado en modo **autorizado** en otra plataforma de correo electrónico. Deberá cambiarlo al modo **no autorizado** en ambas plataformas para que puedan coexistir.

Haga clic en el botón `«Siguiente»`{.action} para continuar con la adición del dominio.

![Add Domain](images/add_domain_exchange_step3.png){.thumbnail}

**Si ha seleccionado en la lista** un dominio gestionado por OVHcloud, podrá configurarlo automáticamente. Para ello, marque las casillas y haga clic en el botón `Siguiente`{.action} para continuar.

**Si ha introducido un dominio no gestionado por OVHcloud** , deberá realizar la configuración en la siguiente etapa.

![emailpro](images/add_domain_exchange_step4.png){.thumbnail}

Una vez realizada la configuración, compruebe que la información mostrada es correcta y haga clic en `Confirmar`{.action} para añadir el dominio. Realice esta misma operación para todos los dominios que quiera añadir.

### Configurar el dominio (DNS)

Una vez asociado el dominio, asegúrese de que su configuración es correcta comprobando la información indicada en la tabla. La etiqueta verde indica que la configuración del dominio es correcta. Si debe modificarla, se mostrará una etiqueta roja.

- **Si ha elegido la configuración automática al añadir el dominio**: la visualización en el área de cliente de OVHcloud puede tardar unos minutos en actualizarse.

- **Si ha introducido un dominio no gestionado por OVHcloud**: haga clic en la etiqueta roja para ver los cambios que debe realizar. Si el dominio no utiliza la configuración de OVHcloud (es decir, si no utiliza los servidores DNS de OVH), deberá realizar los cambios necesarios desde el panel que le ofrezca su proveedor para gestionar sus servidores DNS. Si necesita añadir un registro CNAME, puede consultar la guía [Crear un registro CNAME al añadir un dominio asociado](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/exchange_dns_cname).

> [!primary]
>
> El tiempo de propagación necesario para que la modificación de la configuración de un dominio sea plenamente efectiva es de un máximo de 4 a 24 horas.
>

Para comprobar que la configuración del dominio es correcta, vuelva a la tabla `Dominios asociados`{.action} del servicio. La etiqueta verde indica que el dominio está correctamente configurado. Si sigue estando roja, es posible que la propagación todavía no haya finalizado.

![emailpro](images/add_domain_exchange_step5.png){.thumbnail}

### Configurar y utilizar cuentas

Una vez que haya añadido los dominios, ya puede configurar sus cuentas de correo con ellos. Para ello, acceda a la pestaña `Cuentas de correo`{.action} de su Exchange. Si lo necesita, puede contratar cuentas adicionales utilizando el botón `Acción`{.action}/`Contratar cuentas`{.action} o `Añadir cuenta`{.action}.

Le recordamos que todas las direcciones creadas en su servicio podrán ver en el directorio el conjunto de direcciones de este servicio, incluidas aquellas que posean un nombre de dominio diferente.

Una vez que haya configurado las cuentas, ¡ya puede utilizarlas! Para ello, OVHcloud pone a su disposición el **webmail** disponible en la dirección <https://www.ovhcloud.com/es-es/mail/>. Para un uso óptimo de su dirección en un programa, asegúrese de que sea compatible con el servicio. 

Si desea configurar su cuenta de correo electrónico en un cliente de correo o un dispositivo (smartphone o tablet) u obtener ayuda sobre las funcionalidades de su servicio de correo, consulte la documentación disponible en las páginas [Exchange](/products/web-cloud-email-collaborative-solutions-microsoft-exchange) y [Email Pro](/products/web-cloud-email-collaborative-solutions-email-pro).

Puede adquirir licencias Outlook en el [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es) y licencias de Office 365 en la página <https://www.ovhcloud.com/es-es/collaborative-tools/microsoft-365/>. Si desea disfrutar del cliente de correo Outlook o de otros programas de la suite Office, le recomendamos una de estas soluciones.

### Eliminar un dominio de una plataforma

Si quiere eliminar un dominio asociado a su servicio Exchange o Email Pro, debe comprobar que este no esté asociado a cuentas de correo, alias, recursos, cuentas compartidas (solo en Exchange), grupos, contactos externos o pies de página configurados. En ese caso, deberá **asociar estas cuentas a otro dominio** de su plataforma o **eliminarlas**.

> [!warning]
>
> Antes de eliminar las cuentas de correo, asegúrese de que no se utilizan. Es posible que necesite guardar estas cuentas. Si lo necesita, consulte la guía [Migrar manualmente su dirección de correo electrónico](/pages/web_cloud/email_and_collaborative_solutions/migrating/manual_email_migration), en la que se explica cómo exportar los datos de una cuenta desde el área de cliente o desde un cliente de correo.

Acceda a la pestaña `Dominios asociados`{.action} de su plataforma. Desde la tabla, en la columna `Cuentas` se indica el número de cuentas asociadas a los dominios de su lista.

![emailpro](images/add_domain_exchange_step6.png){.thumbnail}

Si las cuentas de correo están asociadas al dominio que quiere desvincular, tiene 2 posibilidades:

- **Asociar las cuentas a otro dominio** : acceda a la pestaña `Cuentas de correo`{.action}. A la derecha de las cuentas que quiera modificar, haga clic en el botón `...`{.action} y luego `Editar`{.action}.
    ![emailpro](images/add_domain_exchange_step8.png){.thumbnail}
    Desde el diálogo de edición, puede cambiar el dominio asociado a la cuenta desde el menú desplegable.
    ![emailpro](images/add_domain_exchange_step9.png){.thumbnail}

- **Eliminar las cuentas de su plataforma**: acceda a la pestaña `Cuentas de correo`{.action}. A la derecha de la cuenta que desea eliminar, haga clic en el botón `...`{.action} y, a continuación, `Restablecer la cuenta`{.action} o `Restaurar`{.action}
    ![emailpro](images/add_domain_exchange_step7.png){.thumbnail}

Una vez que haya realizado la reasignación de las cuentas a otro dominio, o bien su restauración, ya puede proceder a la eliminación del mismo. 

En la pestaña `Dominios asociados`{.action} de su plataforma, haga clic en el botón `...`{.action} situado al final de la línea correspondiente al dominio y seleccione `Eliminar el dominio`{.action}.

![emailpro](images/add_domain_exchange_step10.png){.thumbnail}

## Más información

[Crear un registro CNAME al añadir un dominio asociado](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/exchange_dns_cname)

[Editar una zona DNS de OVHcloud](/pages/web_cloud/domains/dns_zone_edit)

Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con los [partners de OVHcloud](https://partner.ovhcloud.com/es-es/).
Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestros distintos [servicios de soporte.](https://www.ovhcloud.com/es-es/support-levels/)

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
