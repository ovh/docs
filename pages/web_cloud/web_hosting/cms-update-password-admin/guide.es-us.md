---
title: "Cómo cambiar la contraseña de administrador de un CMS"
excerpt: "Descubra cómo cambiar la contraseña de administrador de un CMS directamente desde la interfaz de administración del CMS o utilizando phpMyAdmin desde el área de cliente de OVHcloud"
updated: 2024-10-15
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón "Contribuir" de esta página.
>

## Objetivo

¿Ha perdido el acceso a su panel de administración de WordPress, PrestaShop, Joomla o Drupal? ¿O simplemente quiere reforzar la seguridad de su sitio web cambiando la contraseña de administrador? Esta guía explica cómo hacerlo, ya sea directamente desde el panel de administración del CMS o utilizando phpMyAdmin desde el área de cliente de OVHcloud.

**Descubra cómo cambiar la contraseña de administrador en los CMS WordPress, PrestaShop, Joomla y Drupal para garantizar la seguridad y el acceso óptimo a su sitio web.**

## Requisitos

- Tener un [plan de hosting](/links/web/hosting) que permita instalar un módulo en un clic.
- Haber creado un módulo en un clic en su alojamiento web (si todavía no ha realizado esta instalación, siga las instrucciones de esta [guía](/pages/web_cloud/web_hosting/cms_install_1_click_modules)).
- Estar conectado a su [área de cliente de OVHcloud](/links/manager) (solo para la parte asociada a phpMyAdmin).

## Procedimiento

Existen diversas formas de cambiar la contraseña de administrador del CMS en función de su situación:

- [a través del email automático (contraseña olvidada)](#via-email)
- [a través del panel de administración del CMS](#via-cms)
- [mediante phpMyAdmin desde el área de cliente de OVHcloud](#via-phpmyadmin)

> [!warning]
>
La configuración, la gestión y la responsabilidad de los servicios que OVHcloud pone a su disposición recaen sobre usted. Por lo tanto, usted deberá asegurarse de que estos funcionan correctamente.
> 
> Ponemos a su disposición este tutorial para ayudarle lo mejor posible en tareas habituales. No obstante, si necesita ayuda, le recomendamos que contacte con un [proveedor especializado](/links/partner) o con el editor del CMS que haya elegido instalar. Nosotros no podremos asistirle. Más información en la sección ["Más información"](#go-further) de este tutorial.
>
> Para contactar con los diferentes editores de los CMS mencionados, consulte los enlaces a sus páginas oficiales respectivas:
>
> - [WordPress](https://wordpress.com/support/){.external}
> - [Joomla!](https://www.joomla.org/){.external}
> - [Drupal](https://www.drupal.org/){.external}
> - [PrestaShop](https://www.prestashop.com/en/support){.external}

### Cambiar la contraseña del administrador por correo electrónico automático (olvidado) <a name="vía email"></a>

¿Todavía tiene acceso a su correo electrónico y a la interfaz de conexión? Este método es el más rápido, ya que evita tener acceso a los parámetros del CMS o utilizar phpMyAdmin.

> [!tabs]
> WordPress
>>
>> Para cambiar su contraseña de administrador de WordPress a través de la opción "Contraseña olvidada", siga los pasos de la sección "[Through the automatic emailer](https://wordpress.org/documentation/article/reset-your-password/#through-the-automatic-emailer)" de la documentación oficial de WordPress.
>>
> PrestaShop
>>
>> Acceda a la interfaz de conexión PrestaShop de su sitio web (de tipo `https://your-domain.com/admin/`) y haga clic en "Contraseña olvidada" para recibir un mensaje de correo electrónico invitándole a restaurar su contraseña.
>>
> Joomla!
>>
>> Para cambiar su contraseña de administrador Joomla! a través de la opción "Contraseña olvidada", siga los pasos de la sección "[Frontend](https://docs.joomla.org/Resetting_a_user_password/en)" de la documentación oficial de Joomla!.
>>
> Drupal
>>
>> Para cambiar la contraseña de administrador de Drupal a través de la opción "Olvidar contraseña", siga estos pasos:
>>
>> - Acceda a la interfaz de conexión del administrador.
>> - Haga clic en el enlace "Solicitar una nueva contraseña".
>> - En el cuadro de diálogo que aparece, introduzca el nombre de usuario o la dirección de correo electrónico asociada a la cuenta de administrador.
>> - Haga clic en "Enviar una nueva contraseña" o "Correo electrónico con la nueva contraseña".
>> - Abra el mensaje de correo electrónico recibido y haga clic en el enlace proporcionado.
>>: introduzca la nueva contraseña y confírmela.
>> - Vuelva a la página de inicio de sesión de Drupal e inicie sesión con la nueva contraseña que acaba de establecer.

### Cambiar la contraseña de administrador mediante el CMS <a name="via-cms"></a>

¿Tiene acceso al panel de administración del CMS y conoce su contraseña actual? Cambie su contraseña directamente desde la configuración de su cuenta de administrador.

> [!tabs]
> WordPress
>> Para cambiar su contraseña de administrador de WordPress a través de la interfaz de gestión del CMS, siga los pasos de la sección "[To Change Your Password](https://wordpress.org/documentation/article/reset-your-password/#to-change-your-password)" de la documentación oficial de WordPress.
>>
> PrestaShop
>>
>> La documentación oficial de PrestaShop no explica cómo cambiar la contraseña de administrador a través de la interfaz de conexión. Consulte la [documentación oficial de PrestaShop](https://help-center.prestashop.com/hc/en-us/articles/10799006732818-Recover-your-admin-password) para encontrar otro método para actualizar su contraseña.
>>
> Joomla!
>>
>> Para cambiar su contraseña de administrador Joomla! a través de la interfaz de administración, siga los pasos de la sección "[Backend](https://docs.joomla.org/Resetting_a_user_password/en)" de la documentación oficial de Joomla!.
>>
> Drupal
>>
>> La documentación oficial de Drupal no explica cómo cambiar la contraseña de administrador a través de la interfaz de inicio de sesión. Consulte la [documentación oficial de Drupal](https://www.drupal.org/node/44164) para obtener más información sobre cómo actualizar la contraseña.

### Cambiar la contraseña de administrador mediante phpMyAdmin desde el área de cliente de OVHcloud <a name="via-phpmyadmin"></a>

¿Ya no tiene acceso al panel de administración del CMS o no puede utilizar la funcionalidad "Contraseña olvidada" porque no puede acceder a la dirección de correo electrónico asociada? Utilice phpMyAdmin desde su [área de cliente de OVHcloud](/links/manager) para restaurar la contraseña directamente desde la base de datos.

Conéctese a su [área de cliente de OVHcloud](/links/manager) y seleccione `Web Cloud`{.action}. Haga clic en `Alojamientos`{.action} y seleccione el producto correspondiente. En la pestaña `Bases de datos`{.action}, identifique la base de datos utilizada por su CMS, haga clic en el botón `...`{.action} y luego en `Acceder a phpMyAdmin`{.action}.

Introduzca los identificadores de la base de datos (nombre de usuario y contraseña) que haya definido al crear la base de datos. Una vez conectado a phpMyAdmin, haga clic en la pestaña correspondiente a continuación.

> [!tabs]
> WordPress
>>
>> Siga los pasos de la sección "[Through phpMyAdmin](https://wordpress.org/documentation/article/reset-your-password/#through-phpmyadmin)" de la documentación oficial de WordPress.
>>
> PrestaShop
>>
>> Siga los pasos de la sección "[You do not have access to your e-mail address](https://help-center.prestashop.com/hc/en-us/articles/10799006732818-Recover-your-admin-password)" de la documentación oficial de PrestaShop.
>>
> Joomla!
>>
>> Siga los pasos de la sección "[Resetting in phpMyAdmin](https://docs.joomla.org/Resetting_a_user_password/en)" de la documentación oficial de Joomla!.
>>
> Drupal
>>
>> Una vez que se haya conectado a phpMyAdmin, siga estos pasos:
>>
>> - Seleccione la base de datos que utiliza Drupal para su sitio web.
>> - Busque la tabla `users_field_data` (para Drupal 8 y versiones posteriores) o users (para Drupal 7 y versiones anteriores).
>> - Encuentre el usuario administrador con `uid = 1`.
>> - Haga clic en `Modify`.
>> - En el campo `pass`, seleccione `MD5` en la columna `Function` a la derecha del campo.
>> - introduzca una nueva contraseña en la columna del valor.
>> - Confirme y guarde los cambios.

## Más información <a name="go-further"></a>

[Cómo gestionar su módulo en un clic](/pages/web_cloud/web_hosting/cms_manage_1_click_module)

[Tutorial - Instalar manualmente WordPress](/pages/web_cloud/web_hosting/cms_manual_installation_wordpress)

[Tutorial - Instalar manualmente Joomla!](/pages/web_cloud/web_hosting/cms_manual_installation_joomla)

[Tutorial - Instalar manualmente Drupal](/pages/web_cloud/web_hosting/cms_manual_installation_drupal)

[Tutorial - Instalar manualmente PrestaShop](/pages/web_cloud/web_hosting/cms_manual_installation_prestashop)
 
Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con [partners de OVHcloud](/links/partner).
 
Interactúe con nuestra [comunidad de usuarios](/links/community).