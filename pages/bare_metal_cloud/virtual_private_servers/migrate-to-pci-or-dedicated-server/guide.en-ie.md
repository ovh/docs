---
title: "How to migrate a website from a VPS to a Dedicated Server or a Public Cloud instance"
excerpt: "Find out how to migrate your website from a VPS to a Dedicated Server or a Public Cloud instance"
updated: 2025-01-09
---

## Objective

As your website grows, the resources of a VPS can quickly become insufficient to meet your growing needs in terms of performance, traffic management, or processing complex tasks. By migrating to a dedicated server or Public Cloud instance, you benefit from a more powerful and customizable infrastructure, adapted to more demanding workloads. This guide focuses on the essential steps for carrying out this migration efficiently, while ensuring service continuity.

**Find out how to migrate your website from a VPS to a dedicated server or a Public Cloud instance.**

## Requirements

- Administrative access to the source [VPS](/links/bare-metal/vps) (via SSH).
- A [dedicated server](/links/bare-metal/bare-metal) or [Public Cloud](/links/public-cloud/public-cloud) instance in your OVHcloud account.
- Administrator access to the destination server (via SSH).
- Knowledge of server management basics (Apache/Nginx, databases, etc.).

## Instructions

> [!warning]
>
> OVHcloud provides services that you are responsible for with regard to their configuration and management. It is therefore your responsibility to ensure that they function properly.
>
> We have provided you with this guide in order to help you with common tasks. However, we recommend contacting a [specialist provider](/links/partner) if you encounter any difficulties. We will not be able to assist you. You can find more information in the ["Go further"](#go-further) section of this guide.
>

### Content overview

- [Step 1 - Back up your website files and database](#step1)
- [Step 2 - Prepare the destination Dedicated Server or Public Cloud Instance](#step2)
- [Step 3 - Transfer the files and database to the destination server](#step3)
- [Step 4 - Configure the website on the destination server](#step4)
- [Step 5 - Update DNS records](#step5)
- [Step 6 - Check that your website is working properly](#step6)
- [Step 7 - Secure your dedicated server or Public Cloud instance](#step7)

### Step 1 - Back up your website files and database <a name="step1"></a>

The first step is to back up all of your website’s files.

#### Step 1.1 - Back up files <a name="step1.1"></a>

Log in to your VPS via SSH, and save your website files:

```bash
ssh <user>@<vps_ip>
cd /var/www/html
tar -czf site_backup.tar.gz *
```

Replace:

- `<user>`: by the user you use to connect to the VPS.
- `<vps_ip>`: by the IP address of your VPS.

#### Step 1.2 - Back up the database <a name="step1.2"></a>

If your website uses a database, save it using the command lines provided by your **D**ata**B**ase **M**anagement **S**ystem (**DBMS**).

> [!tabs]
> **MySQL and MariaDB**
>> ```bash
>> mysqldump -u <db_user> -p <db_name> > database_backup.sql
>> ```
>>
>> Replace:
>>
>> - `<db_user>`: by the database user name.
>> - `<db_name>`: by the database name.
>>
> **PostgreSQL**
>> To export your database, please refer to the [PostgreSQL official documentation](https://www.postgresql.org/docs/)
>>
> **MongoDB**
>> To export your database, please refer to the [official documentation of MongoDB](https://docs.mongodb.com/manual/)
>>
> **Open-source Redis®**
>> To export your database, please refer to the [official Redis documentation](https://redis.io/documentation)

If you are using another DBMS, refer to its official documentation to find the commands for backing up the database.

### Step 2 - Prepare the destination Dedicated Server or Public Cloud Instance <a name="step2"></a>

Before you migrate your website’s files and databases, prepare your destination server.

#### Step 2.1 - Create and configure the Public Cloud instance <a name="step2.1"></a>

If you are unfamiliar with Public Cloud, please refer to our guide on "[Getting started with Public Cloud](/pages/public_cloud/public_cloud_cross_functional/00-essential-info-to-get-started-on-public-cloud)".

To create and configure a Public Cloud instance, follow the steps in our guide on "[Creating and connecting to a Public Cloud instance](/pages/public_cloud/compute/public-cloud-first-steps)".

#### Step 2.2 - Install and configure the dedicated server <a name="step2.2"></a>

To prepare your dedicated server, please read our guide on "[Getting started with a dedicated server](/pages/bare_metal_cloud/dedicated_servers/getting-started-with-dedicated-server)".

This guide will help you in:

- Installation of an operating system.
- Your server configuration to allow access via SSH.
- The initial connection to prepare the deployment of your website files.

### Step 3 - Transfer the files and database to the destination server <a name="step3"></a>

After preparing your dedicated server or Public Cloud instance, transfer the backed-up files and database from your VPS.

#### Step 3.1 - Transfer files <a name="step3.1"></a>

Use the `rsync` tool to transfer archived files to the destination server. This method is fast, secure, and allows file permissions to be retained.

1\. Log in from your VPS and launch the transfer via SSH:

```bash
rsync -avz /var/www/html/site_backup.tar.gz <user>@<destination_ip>:/var/www/html/
```

Replace:

- `<user>`: by the destination server's user.
- `<destination_ip>`: by the IP address of the dedicated server or Public Cloud instance.

For more details on using `rsync`, please refer to our guide "[How to copy data from one server to another using rsync](/pages/bare_metal_cloud/dedicated_servers/how-to-copy-data-from-one-dedicated-server-to-another-using-rsync)".

2\. Once the files are transferred, connect to the destination server and extract the archive:

```bash
ssh <user>@<destination_ip>
cd /var/www/html
tar -xzf site_backup.tar.gz
```

#### Step 3.2 - Import the database <a name="step3.2"></a>

> [!warning]
>
> If your database is already hosted on a Web Cloud Databases service, you do not need to migrate it to the destination server. Keep the database on the Web Cloud Databases service, and configure your server to connect to this database ([step 4.2](#step4.2)).

1\. Create a new database

Connect via SSH to a dedicated server or a Public Cloud instance. Create a new database based on your DBMS:

> [!tabs]
> **MySQL and MariaDB**
>> To create a new database, please refer to [MySQL official documentation](https://dev.mysql.com/doc/refman/8.4/en/creating-database.html)
>>
> **PostgreSQL**
>> To create a new database, please refer to [PostgreSQL official documentation](https://docs.postgresql.fr/11/sql-createdatabase.html)
>>
> **MongoDB**
>> To create a new database, please refer to the [official documentation of MongoDB](https://www.mongodb.com/resources/products/fundamentals/create-database)
>>
> **Open-source Redis®**
>> To create a new database, please refer to [Redis official documentation](https://redis.io/docs/latest/operate/rc/databases/create-database/)

2\. Import the database

Use the command line below to import the database you backed up in [step 1.2](#step1.2).

In the example below, we use MySQL. Use the official DBMS documentation that you installed in the previous step to use the appropriate command line to import the database to your server.

```bash
mysql -u user_name -p db_name < root/to/database_backup.sql
```

Replace:

- `user_name`: by your MySQL username.
- `db_name`: by the database name.
- `root/to/database_backup.sql`: by the path of the backed-up SQL file.

### Step 4 - Configure the website on the destination server <a name="step4"></a>

After transferring the files and importing the database, configure your destination server to support your website.

#### Step 4.1 - Configure the web server <a name="step4.1"></a>

To associate your website with its domain or subdomain, configure a virtual host:

1\. Apache

> [!tabs]
> **Step 1**
>>
>> Create a configuration file for your website (replace `your_website` with a name that is meaningful for your project):
>>
>> ```bash
>> sudo nano /etc/apache2/sites-available/your_website.conf
>> ```
>>
> **Step 2**
>>
>> In the configuration file, define your virtual host settings. Replace `your_domain.com` with the domain or subdomain associated with your website, and `/var/www/html` with the path to your website directory:
>>
>> ```console
>> <VirtualHost *:80>
>>    ServerName your_domain.com
>>    DocumentRoot /var/www/html
>>    <Directory /var/www/html>
>>        AllowOverride All
>>        Require all granted
>>    </Directory>
>>    ErrorLog ${APACHE_LOG_DIR}/error.log
>>    CustomLog ${APACHE_LOG_DIR}/access.log combined
>> </VirtualHost>
>> ```
>>
> **Step 3**
>>
>> Enable website configuration by adding it to Apache's available websites:
>>
>> ```bash
>> sudo a2ensite your_website.conf
>> ```
>>
> **Step 4**
>>
>> Restart Apache to apply the configuration changes:
>>
>> ```bash
>> sudo systemctl reload apache2
>> ```

2\. Nginx

> [!tabs]
> **Step 1**
>>
>> Create a configuration file for your website (replace `your_website` with a name that is meaningful for your project):
>>
>> ```bash
>> sudo nano /etc/nginx/sites-available/your_website
>> ```
>>
> **Step 2**
>>
>> In the configuration file, define your virtual host settings. Replace `your_domain.com` with the domain or subdomain associated with your website, and `/var/www/html` with the path to your website directory:
>>
>> ```console
>> server {
>>   listen 80;
>>   server_name your_domain.com;
>>   root /var/www/html;
>>
>>   rental / {
>>       index.html index.php;
>>       try_files $uri $uri/ =404;
>>   }
>>
>>    error_log /var/log/nginx/error.log;
>>    access_log /var/log/nginx/access.log;
>> }
>> ```
>>
> **Step 3**
>>
>> Enable website configuration by creating a symbolic link in the `sites-enabled` directory:
>>
>> ```bash
>> sudo ln -s /etc/nginx/sites-available/your_website /etc/nginx/sites-enabled/
>> ```
>>
> **Step 4**
>>
>> Restart Nginx to apply the configuration changes:
>>
>> ```bash
>> sudo systemctl reload nginx
>> ```

#### Step 4.2 - Configure your website’s configuration files <a name="step4.2"></a>

Once you have configured your web server, it is important to update your website’s configuration files to ensure that it will work properly. The main variables to adjust are often the database connection information, as well as folder paths. Here are the specific configurations to update for the main CMSs.

> [!tabs]
> **WordPress**
>>
>> Modify the following variables in the `wp-config.php` file:
>>
>> - **DB_NAME**: The database name.
>> - **DB_USER**: The database user.
>> - **DB_PASSWORD** : the user password.
>> - **DB_HOST** : the database host (usually localhost).
>>
>> For more details, see the [WordPress official documentation](https://en.wordpress.org/support/article/editing-wp-config-php/).
>>
>> To avoid security issues, refer to the official documentation on [file permissions for WordPress](https://wordpress.org/support/article/changing-file-permissions/)
>>
> **PrestaShop**
>>
>> Modify the following variables in the `parameters.php` file:
>>
>> - **database_host** : the host of the database.
>> - **database_name**: The name of the database.
>> - **database_user** : the database user.
>> - **database_password** : the database password.
>>
>> For more details, see the [PrestaShop official documentation](https://devdocs.prestashop-project.org/8/development/configuration/configuring-prestashop/).
>>
>> To avoid any security issues, please refer to the [official documentation](https://devdocs.prestashop-project.org/) on file permissions for PrestaShop.
>>
> **Joomla!**
>>
>> Modify the following variables in the `configuration.php` file:
>>
>> - **public $host** : the database host (often localhost).
>> - **public $db**: The database name.
>> - **public $user** : the database user.
>> - **public $password** : the database password.
>>
>> For more details, see the [official documentation of Joomla!](https://docs.joomla.org/).
>>
>> To avoid security issues, refer to the official documentation on [file permissions for Joomla!](https://docs.joomla.org/What_are_the_recommended_file_and_directory_permissions%3F)
>>
> **Drupal**
>>
>> Modify the following variables in the `settings.php` file:
>>
>> - **host** : the database host (often localhost).
>> - **database**: The name of the database.
>> - **username** : the database user.
>> - **password**: The database password.
>>
>> For more details, see the [official Drupal documentation](https://www.drupal.org/documentation).
>>
>> To avoid security issues, refer to the official documentation on [file permissions for Drupal](https://www.drupal.org/docs/administering-a-drupal-site/security-in-drupal/securing-file-permissions-and-ownership)
>>
> **Without CMS**
>>
>> **1. Update database connection information**
>>
>> Identify the configuration files (such as `config.php` or `.env`). Some of them can be located in sub-folders. In these files, locate the database connection settings and modify them to match the new server connection values:
>>
>> - **DB_HOST** : address of the database server.
>> - **DB_NAME**: The name of the database.
>> - **DB_USER**: The database user.
>> - **DB_PASSWORD** : password.
>>
>> **2. Configure file paths**
>>
>> Some websites use absolute paths (e.g. `/home/user/public_html/`) for specific files or resources such as images, CSS files, etc. Verify that these paths are correctly matched to the server structure, e.g. `/var/www/html/`.
>>
>> To avoid file upload errors or broken links, make sure to adjust these paths in any configuration files, `.htaccess`, or other scripts that contain links to these resources. This ensures that the website correctly finds all the elements it needs to function properly, even after the migration.
>>
>> **3. Modify the .htaccess** file (optional)
>>
>> Ensure that the file `.htaccess` is configured correctly for the new environment. If you use rewrite rules (`RewriteRule`) to customize URLs, ensure that the paths are appropriate for your server structure (e.g. `/var/www/html/` instead of `/public_html/`). This ensures that redirections and access work properly.
>>
>> If the `.htaccess` file includes access restrictions or security settings, such as disabling the directory list or configuring caching, modify these settings to match the security configurations and conditions of your new server.
>>
>> **4. Configure file and folder permissions**
>>
>> Ensure that the permissions (e.g. `chmod`) of files and folders are configured correctly to avoid access errors. The recommended permissions are often `755` for folders and `644` for files, but this may vary depending on your security needs.
>>
>> > [!primary]
>> >
>> > If you have multiple users on the server (e.g. developers, administrators, etc.), use more restrictive permissions or configure specific groups for more control. For example, for sensitive files, use `chmod 640` or even `chmod 600`.

If you use a Web Cloud Databases database, make sure that your server is authorized to connect to it. To do this, add the server's IP address to the list of authorized IP addresses. This configuration secures access to the database and prevents connection problems. Please refer to the "Authorize an IP address" section of our guide "[Getting started with the Web Cloud Databases service](/pages/web_cloud/web_cloud_databases/starting_with_clouddb)".

### Step 5 - Update DNS records <a name="step5"></a>

> [!primary]
>
> Before you modify your DNS zone records to point to the IP address of the destination server, we recommend reducing the **T**ime **T**o **L**ive (**TTL**). This speeds up the propagation of changes, because DNS servers will update information more quickly. Follow the "Time to propagate" step in our guide on "[Editing an OVHcloud DNS zone](/pages/web_cloud/domains/dns_zone_edit)" to adjust the TTL to point the domain name to the destination server.

To point your website’s domain name to your dedicated server or Public Cloud instance, configure the domain name’s DNS records to direct traffic to your server’s public IP address. To guide you through this process, follow our guide on "[Editing an OVHcloud DNS zone](/pages/web_cloud/domains/dns_zone_edit)".

### Step 6 - Check that your website is working properly <a name="step6"></a>

Once the migration is complete, test your website to make sure it works as expected. Check all essential features (forms, user connections, online payment, etc.) and ensure that all pages display correctly.

### Step 7 - Secure your dedicated server or Public Cloud instance <a name="step7"></a>

Once you have migrated your website to a dedicated server or Public Cloud instance, it is vital to secure your server, to protect your data and ensure that your services work properly.

For a full list of security best practices, please refer to our guides "[Securing a dedicated server](/pages/bare_metal_cloud/dedicated_servers/securing-a-dedicated-server)" and "[Best practices for securing and structuring OVHcloud Public Cloud projects](/pages/public_cloud/public_cloud_cross_functional/securing_and_structuring_projects)".

## Go further <a name="go-further"></a>

For specialized services (SEO, development, etc.), contact the [OVHcloud partners](/links/partner).

Join our [community of users](/links/community).
