---
title: Primeros pasos con las aplicaciones preinstaladas
slug: aplicaciones-preinstalables
excerpt: Cómo desplegar aplicaciones preinstaladas en las instancias de Public Cloud
section: Primeros pasos
order: 7
---

**Última actualización: 24 de agosto de 2020**

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
> 

## Objetivo

OVHcloud ofrece a los clientes de Public Cloud imágenes de aplicaciones preinstaladas para un despliegue rápido y fácil en pocos clics. 

**Esta guía explica cómo desplegar aplicaciones preinstaladas en las instancias de Public Cloud.**

## Requisitos

- Una [instancia de Public Cloud](../crear_una_instancia_desde_el_area_de_cliente_de_ovh/) en su cuenta de OVHcloud.

## Procedimiento

### Etapas comunes a todas las aplicaciones

#### Instale la aplicación preinstalada que desee.

Desde [el área de cliente de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws), las API de OVHcloud o la API de OpenStack Horizon podrá instalar en su instancia de Public Cloud la aplicación que desee.

#### Detalles de conexión a la aplicación

Una vez que haya creado la instancia y haya elegido una aplicación preinstalada, solo podrá consultar los datos de conexión a través de la API de OVHcloud.

1. Conéctese a la [consola API](https://api.ovh.com/console/)
2. Utilice a continuación [esta llamada a la API](https://api.ovh.com/console/#/cloud/project/%7BserviceName%7D/instance/%7BinstanceId%7D/applicationAccess#POST)

> Llamada a la API
>> > [!api]
>> >
>> > @api {POST} /cloud/project/{serviceName}/instancia/{instanceId}/aplicación Access
>> >
>
> Configuración
>
>> serviceName *
>>> Su ID de proyecto de Public Cloud
>>
>> instanceId *
>>> UUID de la instancia

#### Let's Encrypt SSL

Esta sección solo se aplica a las instalaciones de WordPress, Drupal, Joomla y PrestaShop. No se aplicará a las demás instalaciones.

1. Es necesario crear o modificar dos registros `A` en el área de cliente de OVHcloud que apuntan a la dirección IP del servidor. Por ejemplo, si el dominio es "personaldomain.ovh", es necesario crear registros `A` para:  

     personaldomain.ovh <br>
     www.personaldomain.ovh <br>  

Si su dominio está registrado en OVHcloud, puede seguir [esta guía.](../../domains/web_hosting_como_editar_mi_zona_dns/) 
<br>Si su dominio está registrado con otra empresa, deberá contactar con ella para solicitar ayuda sobre la configuración de sus registros `A`.

<ol start="2">
  <li>Tal vez tengan que esperar 24 horas antes de que ambos registros se propaguen por completo. Todavía puede comprobarlo con [mxtoolbox](https://mxtoolbox.com/DnsLookup.aspx) {.external}. Si la dirección IP de su dominio aparece en mxtoolbox del mismo modo que la de su servidor, puede pasar a la siguiente etapa.</li>

  <li>Conéctese al servidor por SSH con el usuario CentOS y ejecute los siguientes comandos para instalar Cura:</li>
</ol>

> [!warning]
>
> Sustituya a personaldomain.ovh por su propio dominio en los siguientes comandos.
>

```sh
sudo -i
dnf install -y epel-release
dnf install -y certbot python3-certbot-apache mod_ssl
echo "ServerName personaldomain.ovh;" >> /etc/httpd/conf/httpd.conf
systemctl restart httpd
```

<ol start="4">
  <li> Genere su certificado SSL utilizando Cura (siga las indicaciones en pantalla).</li>
</ol>

```sh
certbot certonly -d personaldomain.ovh --webroot
```

Al introducir "Input the webroot", debe introducir una variable del tipo "/var/www/wordpress". Si instala Joomla, debe sustituir "wordpress" por "joomla".

Ahora debe asegurarse de que Cierbot también sitúe esta variable en el archivo ssl.conf. Para ello, introduzca:

```sh
certbot -d personaldomain.ovh —apache
```

Cuando usted esté invitado, responda a la primera pregunta por "1" y a la segunda también por "1".

Si se ha generado el certificado SSL, obtendrá el siguiente resultado:

```sh
NOTAS IMPORTANTES:
 - Congratulaciones! Your certificate and chain have been saved at:
   /etc/letsencrypt/live/personaldomain.ovh/fullchain.pem
   Your key file has been saved at:
   /etc/letsencrypt/live/personaldomain.ovh/privkey.pem
   Your cert will expira on 2020-11-12. To obtain a new or tweaked
   version of this certificate in the future, simply run certbot again
   with the "certonly" option. To no interactively renew *all* of
   your certificates, run "certbot renew"
```

### cPanel 

A continuación se indican los primeros pasos para poner en servicio la imagen preinstalada de cPanel. A las etapas marcadas con un "\*", seguiremos una FAQ.

1. Obtenga su URL de un solo uso [siguiendo estos pasos](./#detalles-de-conexion-a-la-aplicacion).
2. Haga clic en la URL que devuelve la API.

> [!primary]
>
> Si el enlace ya ha expirado, conéctese a la instancia por SSH utilizando el usuario CentOS y ejecute el comando "whmlogin" para generar uno nuevo o reinstale la instancia.
>

<ol start="3">
  <li>Lea y acepte las condiciones particulares de cPanel.</li>
  <li>Introduzca sus servidores de correo y servidores DNS*.</li>
  <li>Establezca la contraseña root que utilizará la próxima vez que se conecte a WHM *.</li>
</ol>

![horizon](images/change_root.png){.thumbnail}

No es necesario realizar ningún otro paso para finalizar la primera configuración de esta aplicación.

> [!faq]
>
> ¿Puedo utilizar mis propios servidores DNS?
>> Sí, puede. Asegúrese de crear los registros Glue con su agente registrador de dominios. Por ejemplo, si quiere "ns1.mydomain.com" y "ns2.mydomain.com", debe configurar los registros Glue para que ambos apunten a la dirección IP de su servidor. Si tiene su dominio registrado con OVHcloud, puede seguir [esta guía.](../../domains/glue_record/#1-anadir-los-registros-glue) La creación puede tardar 24 horas.
> ¿Por qué establecer la contraseña root?
>> WHM utiliza por defecto el usuario root para la autenticación. La URL de un solo uso permite acceder a la primera configuración y cambiar la contraseña root. La próxima vez que se conecte a WHM, deberá utilizar el usuario root y la contraseña que haya establecido.
> ¿Dónde está mi licencia para cPanel?
>> Actualmente OVHcloud no ofrece ninguna licencia para los servidores Public Cloud que no sean las licencias Windows. Es necesario adquirir una licencia de cPanel a un proveedor externo. Para ello, le recomendamos que consulte directamente con el editor de cPanel.

### Plesk

A continuación se indican los primeros pasos para poner en servicio la imagen preinstalada de Plesk. A las etapas marcadas con un "\*", seguiremos una FAQ.

1. Para acceder a la aplicación, siga estos [pasos](./#detalles-de-conexion-a-la-aplicacion).
2. Haga clic en la URL que devuelve la API.
3. Conéctese con el nombre de usuario y la contraseña devueltos por la API.
4. Una vez conectado, Plesk le preguntará:   
    a) Sus datos.  
    b) Una nueva contraseña para el usuario "admin" que utilizará para conectarse a la interfaz de Plesk.  
    c) Información sobre la licencia.*  
    d) Leer y aceptar los contratos de licencia de usuario.  

No es necesario realizar ningún otro paso para finalizar la primera configuración de esta aplicación.

> \[!faq]
>
> ¿Dónde está mi licencia Plesk?
>> Actualmente OVHcloud no ofrece ninguna licencia para los servidores Public Cloud que no sean las licencias Windows. Los clientes deben adquirir una licencia de Plesk a un proveedor tercero. Para ello, le recomendamos que consulte directamente con el editor de Plesk.

### Virtualmin

A continuación se indican los primeros pasos para poner en servicio la imagen preinstalada de Virtualmin. 

1. Para acceder a la aplicación, siga estos [pasos](./#detalles-de-conexion-a-la-aplicacion).
2. Haga clic en la URL que devuelve la API.
3. Conéctese con el nombre de usuario y la contraseña devueltos por la API.
4. Una vez que se haya conectado, para que se adapte a sus necesidades y le ayude a configurar Virtualmin, complete el cuestionario de optimización.

No es necesario realizar ningún otro paso para finalizar la primera configuración de esta aplicación.

### Vestacp

A continuación se indican las primeras etapas relativas a la puesta en servicio de la imagen preinstalada de Vestacp.

1. Para acceder a la aplicación, siga estos [pasos](./#detalles-de-conexion-a-la-aplicacion).
2. Haga clic en la URL que devuelve la API.
3. Conéctese con el nombre de usuario y la contraseña devueltos por la API.

No es necesario realizar ningún otro paso para finalizar la primera configuración de esta aplicación.

### Docker

A continuación se indican los primeros pasos para poner en servicio la imagen preinstalada de Docker.

1. Conéctese al servidor por SSH utilizando el usuario CentOS.
2. Compruebe que Docker funciona con el comando "docker run hello-world".

No es necesario realizar ningún otro paso para finalizar la primera configuración de esta aplicación.

### GitLab

A continuación se indican los primeros pasos para poner en servicio la imagen preinstalada de GitLab.

1. Para acceder a la aplicación, siga estos [pasos](./#detalles-de-conexion-a-la-aplicacion).
2. Haga clic en la URL que devuelve la API.
3. Establezca su nueva contraseña.
4. Conéctese con el usuario root y la nueva contraseña que acaba de establecer.

Para más información, puede proteger su GitLab con un certificado SSL en [esta guía GitLab.](https://docs.gitlab.com/omnibus/settings/ssl.html){.external}..

No es necesario realizar ningún otro paso para finalizar la primera configuración de esta aplicación.

### OpenVPN

A continuación se indican los primeros pasos para poner en servicio la imagen preinstalada de OpenVPN.

1. Para acceder a la aplicación, siga estos [pasos](./#detalles-de-conexion-a-la-aplicacion).
2. Haga clic en la URL que devuelve la API.
3. Conéctese con el nombre de usuario y la contraseña devueltos por la API.

No es necesario realizar ningún otro paso para finalizar la primera configuración de esta aplicación.

### WordPress

A continuación se indican los primeros pasos para poner en servicio la imagen preinstalada de WordPress.

1. Para acceder a la aplicación, siga estos [pasos](./#detalles-de-conexion-a-la-aplicacion).
2. Haga clic en la URL que devuelve la API.
3. Siga las instrucciones de configuración de WordPress. Cuando se le pida información sobre la base de datos, utilice localhost como dirección. Para el nombre de usuario y la contraseña, utilice la información proporcionada por la API.

Para más información, asegúrese de que su sitio web está protegido con un certificado SSL gratuito, [siguiendo estos pasos](./#lets-encrypt-ssl).

No es necesario realizar ningún otro paso para finalizar la primera configuración de esta aplicación.

### Joomla

A continuación se indican los primeros pasos para poner en servicio la imagen preinstalada de Joomla.

1. Para acceder a la aplicación, siga estos [pasos](./#detalles-de-conexion-a-la-aplicacion).
2. Haga clic en la URL que devuelve la API.
3. Siga las instrucciones de configuración de Joomla. Cuando se le pida información sobre la base de datos, utilice localhost como dirección. Para el nombre de usuario y la contraseña, utilice la información proporcionada por la API.

Para más información, asegúrese de que su sitio web está protegido con un certificado SSL gratuito, [siguiendo estos pasos](./#lets-encrypt-ssl).

No es necesario realizar ningún otro paso para finalizar la primera configuración de esta aplicación.

### Drupal

A continuación se indican los primeros pasos para poner en servicio la imagen preinstalada de Drupal.

1. Para acceder a la aplicación, siga estos [pasos](./#detalles-de-conexion-a-la-aplicacion).
2. Haga clic en la URL que devuelve la API.
3. Siga las instrucciones de configuración de Drupal. Cuando se le pida información sobre la base de datos, utilice "localhost" como dirección. Para el nombre de usuario y la contraseña, utilice la información proporcionada por la API.

Para más información, asegúrese de que su sitio web está protegido con un certificado SSL gratuito, [siguiendo estos pasos](./#lets-encrypt-ssl).

No es necesario realizar ningún otro paso para finalizar la primera configuración de esta aplicación.

### Prestashop

A continuación ofrecemos las primeras etapas relativas a la puesta en servicio de la imagen preinstalada de Prestashop.

1. Para acceder a su aplicación, siga estos [pasos.](./#detalles-de-conexion-a-la-aplicacion).
2. Haga clic en la URL que devuelve la API.
3. Siga las instrucciones de configuración de PrestaShop. Cuando se le pida información sobre la base de datos, utilice siempre "localhost" como dirección y, para el nombre de usuario y la contraseña, utilice la información proporcionada por la API.
4. Una vez finalizada la instalación, puede eliminar la carpeta de instalación y editar la URL de administración utilizando un script que hemos colocado en el servidor para usted. Al ejecutar este script, aplicaremos la recomendación de seguridad de Prestashop después de la instalación. Solo tiene que conectarse al servidor por SSH y ejecutar los siguientes comandos:

```sh
sudo -i
sh /root/secure_prestashop.sh
rm -f /root/secure_prestashop.sh
```

> [!primary]
>
> Por favor, guarde el enlace devuelto. Solo podrá acceder a la administración de PrestaShop con el nuevo enlace.
>

Proteja su sitio web gratuitamente con un certificado SSL en [estos pasos](./#lets-encrypt-ssl).

No es necesario realizar ningún otro paso para finalizar la primera configuración de esta aplicación.

## Vaya más lejos

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
