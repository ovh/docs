---
title: 'Cómo instalar un certificado SSL en un VPS'
excerpt: 'Descubra cómo instalar un certificado SSL en un VPS de OVHcloud'
updated: 2025-01-24
---

## Objetivo

La seguridad de su sitio web es fundamental para proteger los datos sensibles de sus usuarios y mejorar su confianza. Gracias a un certificado SSL (**S**ecure **S**ockets **L**ayer), puede cifrar los intercambios entre sus visitas y su sitio web, reforzando al mismo tiempo su credibilidad. Esta guía explica cómo utilizar **Let's Encrypt**, un servicio gratuito y automatizado.

**Descubra cómo instalar un certificado SSL en un VPS de OVHcloud.**

> [!warning]
>
> OVHcloud pone a su disposición servicios cuya configuración, gestión y responsabilidad recaen sobre usted. Por lo tanto, usted deberá asegurarse de que estos funcionen correctamente.
>
> Este tutorial le ayudará a realizar las tareas más habituales. No obstante, le recomendamos que, si necesita ayuda, contacte con un [proveedor especializado](/links/partner) o con el editor del servicio. Nosotros no podremos asistirle. Para más información, consulte la sección [Más información](#go-further) de este tutorial.
>

## Requisitos

- Tener un producto [VPS](/links/bare-metal/vps)
- Tener acceso de administrador (sudo) por SSH a su VPS
- Disponer de un sitio web operativo accesible en `HTTP`

## Procedimiento

### Contenido

- [Etapa 1 - Conéctese a su VPS OVHcloud](#step1)
- [Etapa 2 - Instale Certbot](#step2)
- [Etapa 3 - Obtener un certificado SSL con Let's Encrypt](#step3)
- [Etapa 4 - Configure su servidor web](#step4)
- [Etapa 5 - Activar la renovación automática](#step5)

### Etapa 1 - Conéctese a su VPS OVHcloud <a name="step1"></a>

1. Descargue un cliente SSH como [PuTTY](/pages/web_cloud/web_hosting/ssh_using_putty_on_windows) o utilice el terminal integrado de su sistema operativo.
2. Conéctese a su VPS OVHcloud con la información de conexión que le facilitamos:

```bash
ssh root@<vps_ip>
```
Sustituya `<vps_ip>` por la dirección IP de su VPS OVHcloud.

### Etapa 2 - Instale Certbot <a name="step2"></a>

Certbot es una herramienta que permite gestionar automáticamente los certificados Let's Encrypt. Siga los pasos que se indican a continuación para instalar Certbot según su distribución Linux.

> [!tabs]
> **Ubuntu/Debian**
>>
>> ```bash
>> sudo apt update
>> sudo apt install certbot
>> ```
>>
> **CentOS**
>>
>> ```bash
>> sudo yum install epel-release
>> sudo yum install certbot
>> ```
>>
> **Fedora**
>>
>> ```bash
>> sudo dnf install certbot
>> ```

Para asegurarse de que Certbot está instalado correctamente, ejecute el siguiente comando:

```bash
certbot --version
```

Esto debe mostrar la versión instalada de Certbot.

### Etapa 3 - Obtener un certificado SSL con Let's Encrypt <a name="step3"></a>

> [!primary]
>
> Si ha instalado su servidor web (Nginx o Apache), le recomendamos que utilice los plugins Certbot para automatizar la configuración SSL y activar las redirecciones `HTTPS`. Estos plugins simplifican la instalación gestionando directamente los ficheros de configuración del servidor web.

#### Uso automático con los plugins Certbot Nginx o Apache (recomendado)

En función del servidor web, utilice las líneas de comandos correspondientes:

> [!tabs]
> **Nginx**
>>
>> Instale el plugin Certbot Nginx :
>>
>> ```bash
>> sudo apt install python3-certbot-nginx -y
>> ```
>>
>> Genere el certificado SSL :
>>
>> ```bash
>> sudo certbot --nginx -d your_domain
>> ```
>>
> **Apache**
>>
>> Instale el plugin Certbot Apache :
>>
>> ```bash
>> sudo apt install python3-certbot-apache -y
>> ```
>>
>> Genere el certificado SSL :
>>
>> ```bash
>> sudo certbot --apache -d your_domain
>> ```

Certbot configurará automáticamente el certificado SSL y la redirección `HTTPS`. Asegúrese de que su sitio web está accesible en `HTTPS`.

#### Uso en modo independiente

Si prefiere configurar el servidor manualmente, use Certbot en modo independiente. Este modo utiliza un servidor temporal integrado en Certbot para validar su dominio y generar un certificado SSL.

Utilice el siguiente comando para solicitar un certificado:

```bash
sudo certbot certonly --standalone -d your_domain
```

Sustituya `your_domain` por su dominio.

> [!warning]
> Este método detiene temporalmente cualquier servicio que utilice el puerto 80 (por ejemplo, otro servidor web).

Una vez generado el certificado, los archivos están disponibles en `/etc/letsencrypt/live/your_domain/`:

- `fullchain.pem`: el certificado completo.
- `privkey.pem`: la clave privada.

### Etapa 4 - Configure su servidor web <a name="step4"></a>

> [!primary]
> Si ha utilizado la solución automática (con los plugins Certbot) anteriormente ([Etapa 3](#step3)) y su sitio web está accesible en `HTTPS`, vaya directamente al [Etapa 5](#step5).

#### Ejemplo para Nginx

1\. Abra el archivo de configuración de su sitio web (por ejemplo, `/etc/nginx/sites-available/your_domain.conf`).

2\. Añada las siguientes líneas para activar el SSL:

```nginx
server {
    listen 443 ssl;
    server_name your_domain;

    ssl_certificate /etc/letsencrypt/live/your_domain/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/your_domain/privkey.pem;

    # Parámetros de seguridad adicionales
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers HIGH:!aNULL:!MD5;

    # Redirección HTTP a HTTPS
    location / {
        try_files $uri $uri/ =404;
    }
}
```

3\. Añada una redirección automática `HTTP` hacia `HTTPS`:

```nginx
server {
    listen 80;
    server_name your_domain;
    return 301 https://$host$request_uri;
}
```

4\. Pruebe y reinicie Nginx:

```bash
sudo nginx -t
sudo systemctl reload nginx
```

Asegúrese de que su sitio web está accesible en `HTTPS`.

#### Ejemplo para Apache

1\. Active los módulos SSL y las cabeceras:

```bash
sudo a2enmod ssl
sudo a2enmod headers
```

2\. Modifique la configuración de su sitio web (por ejemplo, `/etc/apache2/sites-available/your_domain.conf`) para incluir:

```apache
<VirtualHost *:80>
    ServerName your_domain
    DocumentRoot /var/www/your_domain

    Redirect permanent / https://your_domain/

    <Directory /var/www/your_domain>
        AllowOverride All
        Require all granted
    </Directory>

    ErrorLog ${APACHE_LOG_DIR}/ssltest_error.log
    CustomLog ${APACHE_LOG_DIR}/ssltest_access.log combined
</VirtualHost>

<VirtualHost *:443>
    ServerName your_domain
    DocumentRoot /var/www/your_domain

    # Activar SSL
    SSLEngine on
    SSLCertificateFile /etc/letsencrypt/live/your_domain/fullchain.pem
    SSLCertificateKeyFile /etc/letsencrypt/live/your_domain/privkey.pem

    # Parámetros de seguridad adicionales
    SSLProtocol all -SSLv3 -TLSv1 -TLSv1.1
    SSLCipherSuite HIGH:!aNULL:!MD5
    SSLHonorCipherOrder on

    <Directory /var/www/your_domain>
        AllowOverride All
        Require all granted
    </Directory>

    ErrorLog ${APACHE_LOG_DIR}/ssltest_error.log
    CustomLog ${APACHE_LOG_DIR}/ssltest_access.log combined
</VirtualHost>
```

3\. Pruebe y reinicie Apache:

```bash
sudo apachectl configtest
sudo systemctl restart apache2
```

Asegúrese de que su sitio web está accesible en `HTTPS`.

### Etapa 5 - Active la renovación automática <a name="step5"></a>

Los certificados Let's Encrypt son válidos durante 90 días. Configure la renovación automática con Certbot:

Pruebe la renovación automática:

```bash
sudo certbot renew --dry-run
```

Certbot configura automáticamente una tarea `cron` o un timer systemd para gestionar la renovación. Compruebe su estado con:

```bash
sudo systemctl list-timers | grep certbot
```

## Más información <a name="go-further"></a>
 
Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con [partners de OVHcloud](/links/partner).
 
Interactúe con nuestra [comunidad de usuarios](/links/community).