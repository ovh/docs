---
title: "How to migrate a website from a web hosting plan to a VPS"
excerpt: "Find out how to migrate your website from a web hosting plan to an OVHcloud VPS"
updated: 2025-10-23
---

## Objective

As your website evolves, its resource consumption becomes so high that your web hosting plan no longer meets your needs in terms of performance or the ability to handle increasingly complex tasks. By migrating to a VPS, you can improve your website’s speed and responsiveness, increase the available computing resources (CPU, RAM, etc.), and have more control over the server environment. This guide focuses on the essential steps for migrating efficiently to a VPS, while ensuring service continuity.

**Find out how to migrate your website from a web hosting plan to a VPS.**

## Requirements

- An OVHcloud [web hosting plan](/links/web/hosting)
- A [VPS](/links/bare-metal/vps) in your OVHcloud account
- You must be logged in to your [OVHcloud Control Panel](/links/manager)

## Instructions

> [!warning]
>
> OVHcloud provides services for which you are responsible with regard to their configuration and management. It is therefore your responsibility to ensure that they function correctly.
>
> This guide is designed to help you with common tasks. Nevertheless, we recommend contacting a [specialist service provider](/links/partner) if you encounter any difficulties. We will not be able to assist you. You can find more information in the [Go further](#go-further) section of this guide.
>

### Step 1 - Back up your website files and database <a name="step1"></a>

The first step is to back up all of your website’s files, usually via the **F**ile **T**ransfer **P**rotocol (**FTP**), as well as your database.

If you use WordPress, follow our guide on [Backing up your WordPress website](/pages/web_cloud/web_hosting/how_to_backup_your_wordpress) to find out how to back up your WordPress website files and database, then go to [step 2](#step2).

#### Step 1.1 - Log in to your web hosting plan’s FTP storage space

Follow the steps in our guide on "[Logging in to your web hosting plan’s FTP storage space](/pages/web_cloud/web_hosting/ftp_connection)" to log in to your Web Hosting plan’s FTP storage space.

#### Step 1.2 - Backing up files via FTP <a name="step1.2"></a>

If you are not using a CMS (WordPress, Joomla!, Drupal, PrestaShop, etc.), download a full backup of all the files in your FTP space to your device locally. This includes all the HTML, CSS, JavaScript, images, and configuration files (`config.php`, `.env`, etc.) that make up your website. Ensure that you retrieve all of the folders and files from the root directory (often named `public_html` or `www`), so that all of the content required for your website to work is backed up for migration.

If you are using a CMS and want to back up its files, choose the backup method that best suits it by clicking on the tab concerned.

> [!tabs]
> PrestaShop
>>
>> For PrestaShop, back up critical directories such as:
>>
>> - `/admin`: for files related to the back-office.
>> - `/modules`: for installed modules.
>> - `/img`: for all images and icons.
>> - `/themes`: for your website's theme files.
>>
>> For more details on the structure of PrestaShop files, please refer to their [official technical documentation](https://docs.prestashop-project.org/welcome).
>>
> Joomla!
>>
>> For Joomla!, important files to back up include directories:
>>
>> - `/administrator`: For the administration interface.
>> - `/components`, `/plugins`: For installed extensions.
>> - `/images`: For your website's media files.
>>
>> Find more information on the structure of Joomla! files in the [official Joomla! documentation](https://docs.joomla.org/).
>>
> Drupal
>>
>> For Drupal, the important folders to back up are:
>>
>> - `/sites` : Contains the files specific to your site.
>> - `/modules` and `/themes`: For custom modules and themes.
>>
>> For more information, please refer to the [official Drupal documentation](https://www.drupal.org/docs).

> [!primary]
>
> Once you have downloaded all of your website’s files, make sure you store them in an easily identifiable local folder, so that they can be transferred to the VPS later on.

#### Step 1.3 - Back up the database

> [!primary]
>
> If you are already using a Web Cloud Database for your website, you can continue using it without migrating it. Your VPS will connect to the Web Cloud Database to manage the data.

If you plan to migrate the database on the VPS, follow the steps in our guide on "[Retrieving the backup of a Web Hosting plan’s database](/pages/web_cloud/web_hosting/sql_database_export)" to back up your database.

### Step 2 - Configure your VPS <a name="step2"></a>

> [!primary]
>
> If you do not have a VPS yet, go to [OVHcloud VPS product page](/links/bare-metal/vps) to buy one. Make sure you choose a VPS that matches your website’s resource requirements (RAM, CPU, storage, etc.) and the technical specifications of your CMS. If you are not familiar with VPS solutions, please read our guide on [How to get started with a VPS](/pages/bare_metal_cloud/virtual_private_servers/starting_with_a_vps).

#### Step 2.1 - Log in to your VPS

Refer to the “Logging in to your VPS” section of our guide on “[How to get started with a VPS](/pages/bare_metal_cloud/virtual_private_servers/starting_with_a_vps)” to log in to your VPS.

#### Step 2.2 - Install and configure a web server on your VPS <a name="step2.2"></a>

Once you are logged in to your VPS, install and configure a web development environment on your VPS. This step is essential to ensure that your server is ready to host your website once the files and database have been transferred.

To install this web environment, please read our guide on "[How to install a web development environment on a VPS or a dedicated server](/pages/bare_metal_cloud/virtual_private_servers/install_env_web_dev_on_vps)".

### Step 3 - Transfer your website files via SFTP

Using **S**ecure **F**ile **T**ransfer **P**rotocol (**SFTP**) is the recommended way to transfer files from your website to your VPS. It offers a higher level of security than FTP, thanks to the encryption provided by the SSH service, already enabled by default on your OVHcloud VPS.

#### Step 3.1 - Log in to your VPS via SFTP

Follow our [guide on using FileZilla](/pages/web_cloud/web_hosting/ftp_filezilla_user_guide) and enter the following details:

- **Host**: Use the IP address of your VPS.
- **Username** and **Password**: The credentials for your SSH user account on the VPS.
- **Port**: Use port 22 (default port for SFTP).

#### Step 3.2 - Transfer your website files to the VPS

Once you are logged in to your VPS, the tree-view of your local files will appear on the left-hand side of the FileZilla interface, and the tree-view of your VPS on the right-hand side.

The web directory (or web root) is where your website files will be stored to be accessible on the internet. **By default, it may be a folder named `/var/www/html` or another directory configured during your web server installation in [step 2.2](#step2.2)**. Ensure your files are placed in the directory configured as the **web root** to ensure your site functions correctly.

> [!warning]
>
> If you are connected via SFTP with a non-root user (e.g., `debian`), you will not have permission to write directly into `/var/www/html`.

**Simple procedure: drop into `/home` then move with `sudo`**

##### In FileZilla (SFTP)

- On the "Remote Site" side (right panel), go to: `/home/debian/`
- Drag and drop your database file (e.g., `backup.sql`) into `/home/debian/`. **Do not place this backup in the folder you will copy to the web root** (e.g., `/home/debian/site/`) **or in the web root** (e.g., `/var/www/html`), as it could be publicly downloadable.
- Create a `site` folder in `/home/debian/` (right-click → `Create a directory`{.action}), then open it.
- Select all your website files (the database file should no longer be there) and drag and drop them into `/home/debian/site/`. **Do not drop your SQL dumps into this folder**. Keep them outside the web root, (e.g., `/home/debian/backup.sql`).

##### On your VPS

Connect to the VPS via SSH by referring to the "Connect to your VPS" section of our guide "[Getting started with a VPS](/pages/bare_metal_cloud/virtual_private_servers/starting_with_a_vps)".

Run the following commands:

> [!warning]
>
> In this example, the web root is `/var/www/html`. If your web root is different (configured in step 2.2), replace `/var/www/html` with your actual path.

Create the web root if it does not exist:

```bash
sudo mkdir -p /var/www/html
```

Copy the contents of `/home/debian/site/` to the web root while preserving the directory structure and metadata:

```bash
sudo rsync -a /home/debian/site/ /var/www/html/
```

Alternative if `rsync` is not installed:

```bash
sudo cp -a /home/debian/site/. /var/www/html/
```

Assign ownership of the files to the web service (`www-data` for Nginx/Apache on Debian/Ubuntu):

```bash
sudo chown -R www-data:www-data /var/www/html
```

Set directory permissions to `755` (navigable) and file permissions to `644` (readable):

```bash
sudo find /var/www/html -type d -exec chmod 755 {} \;
sudo find /var/www/html -type f -exec chmod 644 {} \;
```

### Step 4 - Import the database onto your VPS (optional)

> [!warning]
>
> If your database is already hosted on a Web Cloud Databases service, you do not need to migrate it to the VPS. You can keep the database on the Web Cloud Databases service and configure your VPS to connect to this database ([step 5](#step5)).

#### Before you begin

- Your backup file (`.sql`) was placed in step 3.2 (e.g., `/home/debian/backup.sql`).
- The **D**ata**B**ase **M**anagement **S**ystem (**DBMS**) (MySQL / MariaDB) and its command-line client were installed in [step 2.2](#step2.2).
- The database **`db_name`** :
    - **already exists** if you created it during step 2.2 (or via your admin panel).
    - **can be created automatically** if your backup `.sql` contains `CREATE DATABASE`.
    - **otherwise, create it before importing** :

    ```bash
    sudo mysql -e "CREATE DATABASE db_name CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;"
    ```

    (replace `db_name` with your desired name).

#### Import the database

1. Connect to the VPS via SSH by referring to the "Connect to your VPS" section of our guide "[Getting started with a VPS](/pages/bare_metal_cloud/virtual_private_servers/starting_with_a_vps)".
2. Launch the import using the DBMS client:

    In the example below, we use MySQL as the DBMS. Use the official documentation of the DBMS you installed during [step 2.2](#step2.2) to use the appropriate command for importing the database onto your VPS.

    ```bash
    mysql -u user_name -p db_name < /home/debian/backup.sql
    ```

    - Replace `user_name` with your MySQL (MySQL/MariaDB) username, not your SSH login.
    - Replace `db_name` with the name of the database to import.

3. Enter the DBMS user password when prompted and wait for the import to complete.

### Step 5 - Set up your website’s configuration files <a name="step5"></a>

After you have transferred your website files and, if necessary, imported the database onto your VPS, it is important to update your website’s configuration files to ensure that it will work properly. The main variables to adjust are often the database connection information, as well as folder paths. Here are the specific configurations to update for the main CMSs.

> [!tabs]
> WordPress
>>
>> Modify the following variables in the `wp-config.php` file:
>>
>> - **DB_NAME**: The database name.
>> - **DB_USER**: The database user.
>> - **DB_PASSWORD**: The user password.
>> - **DB_HOST**: The database host (usually localhost on a VPS).
>>
>> For more details, see the [WordPress official documentation](https://developer.wordpress.org/advanced-administration/wordpress/wp-config/).
>>
>> To avoid security issues, refer to the official documentation on [file permissions for WordPress](https://wordpress.org/support/article/changing-file-permissions/)
>>
> PrestaShop
>>
>> Modify the following variables in the `parameters.php` file:
>>
>> - **database_host**: The host of the database.
>> - **database_name**: The name of the database.
>> - **database_user**: The database user.
>> - **database_password**: The database password.
>>
>> For more details, see the [PrestaShop official documentation](https://devdocs.prestashop-project.org/8/development/configuration/configuring-prestashop/).
>>
>> To avoid any security issues, please refer to the [official documentation](https://devdocs.prestashop-project.org/) on file permissions for PrestaShop.
>>
> Joomla!
>>
>> Modify the following variables in the `configuration.php` file:
>>
>> - **public $host**: The database host (often localhost).
>> - **public $db**: The database name.
>> - **public $user**: The database user.
>> - **public $password**: The database password.
>>
>> For more details, see the [official documentation of Joomla!](https://docs.joomla.org/).
>>
>> To avoid security issues, refer to the official documentation on [file permissions for Joomla!](https://docs.joomla.org/What_are_the_recommended_file_and_directory_permissions%3F).
>>
> Drupal
>>
>> Modify the following variables in the `settings.php` file:
>>
>> - **host**: The database host (often localhost).
>> - **database**: The name of the database.
>> - **username**: The database user.
>> - **password**: The database password.
>>
>> For more details, see the [official Drupal documentation](https://www.drupal.org/documentation).
>>
>> To avoid security issues, refer to the official documentation on [file permissions for Drupal](https://www.drupal.org/docs/administering-a-drupal-site/security-in-drupal/securing-file-permissions-and-ownership).
>>
> Without CMS
>>
>> **1. Update database connection information**
>>
>> Identify the configuration files (such as `config.php` or `.env`). Some of them can be located in sub-folders. In these files, locate the database connection settings and modify them to match the new VPS connection values:
>>
>> - **DB_HOST**: The address of the database server.
>> - **DB_NAME**: The name of the database.
>> - **DB_USER**: The database user.
>> - **DB_PASSWORD**: The password.
>>
>> **2. Configure file paths**
>>
>> Some websites use absolute paths (e.g. `/home/user/public_html/`) for specific files or resources such as images, CSS files, etc. Verify that these paths are correctly matched to the server structure on the VPS, e.g. `/var/www/html/`.
>>
>> To avoid file upload errors or broken links, make sure to adjust these paths in any configuration files, `.htaccess`, or other scripts that contain links to these resources. This ensures that the website correctly finds all the elements it needs to function properly, even after the migration.
>>
>> **3. Modify the .htaccess file** (optional)
>>
>> Ensure that the file `.htaccess` is configured correctly for the new environment. If you use rewrite rules (`RewriteRule`) to customize URLs, check that the paths are adapted to the structure of your VPS (e.g. `/var/www/html/` instead of `/public_html/`). This ensures that redirections and access work properly.
>>
>> If the `.htaccess` file includes access restrictions or security settings, such as disabling the directory list or configuring caching, modify these settings to match the security configurations and conditions of your new server.
>>
>> **4. Configure file and folder permissions**
>>
>> Ensure that the permissions (e.g. `chmod`) of files and folders are configured correctly to avoid access errors. On a VPS, the recommended permissions are often `755` for folders and `644` for files, but this may vary depending on your security needs.

If you use a Web Cloud Databases database, check that your VPS is authorized to connect to it. To do this, add the VPS IP address to the list of authorized IP addresses. This configuration secures access to the database and prevents connection problems. Please refer to the "Authorize an IP address" section of our guide "[Getting started with the Web Cloud Databases service](/pages/web_cloud/web_cloud_databases/starting_with_clouddb)".

### Step 6 - Attach your domain name to the VPS IP address

> [!primary]
>
> Before modifying your DNS zone records to point to the VPS IP address, we recommend reducing the **T**ime **T**o **L**ive (**TTL**). This speeds up the propagation of changes, as the DNS servers will update the information more quickly. Follow the "Time to propagate" step in our guide on [Editing an OVHcloud DNS zone](/pages/web_cloud/domains/dns_zone_edit) to adjust the TTL and configure the records to point the domain name to the VPS.

To point your website’s domain name to your VPS, configure the domain name’s DNS records to direct traffic to your VPS’s public IP address. To guide you through this process, follow our guide on [Editing an OVHcloud DNS zone](/pages/web_cloud/domains/dns_zone_edit).

### Step 7 - Check that your website is working properly

Once the migration is complete, test your website to make sure it works as expected. Check all essential features (forms, user connections, online payment, etc.) and ensure that all pages display correctly.

### Step 8 - Secure your VPS

Once you have migrated your website to your VPS, it is vital to secure your server, to protect your data and ensure that your services work properly. Here are a few steps you can take to increase the security of your VPS:

- Change the SSH password and default SSH access port provided by OVHcloud.
- Configure a firewall.
- Configure two-factor authentication (2FA).
- Monitor logs.
- etc.

For a full list of security best practices, please read our guide on "[How to secure a VPS](/pages/bare_metal_cloud/virtual_private_servers/secure_your_vps)".

## Go further <a name="go-further"></a>
 
For specialized services (SEO, development, etc.), contact [OVHcloud partners](/links/partner).
 
Join our [community of users](/links/community).
