---
title: "Managing your web hosting plan with Visual Studio Code via SFTP"
excerpt: "Administering a website on a web hosting plan with Visual Studio Code using an SFTP extension"
updated: 2023-11-06
---

## Objective

If you have an OVHcloud web hosting plan, you can access a storage space that allows you to manage your website. You can access this storage space via the SFTP protocol. Although you can log in with a terminal, you can also use the Visual Studio Code integrated development environment (IDE) to manage folders and files in your website.

> [!primary]
>
> If you want to administer your website remotely without using Visual Studio Code, you can install the FileZilla FTP client. Please refer to our guide on "[Using FileZilla with your OVHcloud hosting plan](/pages/web_cloud/web_hosting/ftp_filezilla_user_guide)". If you would like to log in to your website via SSH, please read our guide on "[Using SSH access for your web hosting plan](/pages/web_cloud/web_hosting/ssh_on_webhosting)".
>

**Find out how to manage your website using Visual Studio Code.**
  
## Requirements

- a [OVHcloud web hosting plan](/links/web/hosting)
- Install [Microsoft Visual Studio Code](https://visualstudio.microsoft.com/#vscode-section) on your machine

## Instructions
 
> [!warning]
>
> OVHcloud provides services that you are responsible for configuring, managing and managing. It is therefore up to you to ensure that it works properly.
> 
> We offer this tutorial to help you with common tasks. Nevertheless, we recommend contacting a [specialist provider](/links/partner) or [the publisher of the Visual Studio Code IDE](https://code.visualstudio.com/){.external} if you experience any difficulties. We will not be able to assist you. More information in the ["Go further"](#go-further) section of this tutorial.
>

### Install the SFTP extension for Visual Studio Code

> [!warning]
>
> In this tutorial, we have chosen the “SFTP/FTP sync” extension of *Natizyskunk*. You are free to choose another one. However, note that an extension on Visual Studio Code is software often created by an independent developer, who can stop its development at any time.
>

After starting Visual Studio Code, go to the horizontal menu at the top of the interface, click `View`{.action} then `Extensions`{.action}.

![hosting](/pages/assets/screens/other/web-tools/vscode/view_extensions.png){.thumbnail}

To do the same with the keyboard shortcut, select:

- `Ctrl + Shift + X` if you are on Windows, 
- `Maj + Command + X` if you are on macOS.

In the top left of the interface, enter the name of the *Natizyskunk* “SFTP/FTP sync” extension, and click `Install`{.action}.

![hosting](/pages/assets/screens/other/web-tools/vscode/extensions.png){.thumbnail}

You can also install [the "SFTP/FTP sync" extension](https://marketplace.visualstudio.com/items?itemName=Natizyskunk.sftp#sftp-sync-extension-for-vs-code) from the Visual Studio Marketplace.
  
### Initialize project locally

To synchronize your website files on the web hosting plan from Visual Studio Code, enter your project location locally. To do this, create a folder in the location you want.

Go back to Visual Studio Code in the horizontal menu at the top of the interface, click `View`{.action} then `Command Palette`{.action} to display the command editor.

To do the same with the keyboard shortcut, select:

- `Ctrl + Shift + P` if you are on Windows, 
- `Maj + Command + P` if you are on macOS.

Enter the following command: `SFTP: Config`.

![hosting](/pages/assets/screens/other/web-tools/vscode/SFTP_config.png){.thumbnail}

With this command, Visual Studio Code will create the configuration file "sftp.json" at the root of the local folder you created earlier. But because Visual Studio Code doesn't know where your project is locally, you should see the following message:

![hosting](/pages/assets/screens/other/web-tools/vscode/SFTP_folder.png){.thumbnail}

Click `Open Folder`{.action}, navigate to the local folder location of your choice and click `Select Folder`{.action} to confirm.

![hosting](/pages/assets/screens/other/web-tools/vscode/select_folder.png){.thumbnail}

In Visual Studio Code, reenter the command `SFTP: Config`. A configuration file named "sftp.json" appears in Visual Studio Code.

![hosting](/pages/assets/screens/other/web-tools/vscode/sftp_json_default.png){.thumbnail}

This file is located in the .vscode folder, which is located at the root of your local project.

### Configure the sftp.json file

Before you work on your project, upload it to your local folder that you created earlier. However, first, make sure that the “sftp.json” file is correctly configured. Useful information can be found in your [OVHcloud Control Panel](/links/manager). In the `Web Cloud`{.action} section, click `Hosting plans`{.action}. Select the web hosting plan concerned, then click on the `FTP - SSH`{.action} tab.

In the "sftp.json" file, enter the values for the following entries:

#### name

Locate it at the two locations highlighted in orange.

![hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh/hosting_name.png){.thumbnail}

> [!primary]
>
> The `name` value is customizable, so you can assign the value of your choice. However, if you are configuring multiple "sftp.json" files, it is best to use the values visible above as a reference for organizational reasons.
>

#### host

In the `FTP-SSH`{.action} tab, the host name (`host`) is visible under the mention `FTP and SFTP server`{.action}.

![hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh/hostname.png){.thumbnail}

#### username

Locate the `username` in the `Login`{.action} column of the table.

#### remotePath

Find the `remotePath` under `Home directory path`{.action}. However, if multiple users are configured, the specified path may be different. In this case, replace the username mentioned after `home/` with the one of your choice in the `Login`{.action} list of your web hosting plan.

**Example**: If your username is "john-smith" you will get `home/john-smith`.

Finally, remember to add this line in the file “sftp.json”: `"openSsh": true`.

> [!primary]
>
> To avoid entering your password after each command in Visual Studio Code, save it in the file “sftp.json” by adding the line: `"password": "<password>"`
>

Here is an example of a file called “sftp.json”:

```json

{
    "name": "<name>",
    "host": "<host>",
    "protocol": "sftp",
    "port": 22,
    "username": "myusername",
    "password": "mypassword",
    "remotePath": "/home/myusername",
    "uploadOnSave": false,
    "useTempFile": false,
    "openSsh": true
}

```

For more details on the options in the sftp.json file, see the [project documentation](https://github.com/Natizyskunk/vscode-sftp/wiki/configuration).

### Download the project locally

Once you have configured the “sftp.json” file, download the contents of your project to retrieve all of the folders and files on your website. To do this, go to Visual Studio Code and enter the following command: `SFTP: Download Project`.

Visual Studio Code prompts you to select the folder that you want to upload to your Web Hosting plan. Enter the value `name` previously defined in the file “sftp.json” .

![hosting](/pages/assets/screens/other/web-tools/vscode/download_project.png){.thumbnail}

If prompted, enter the user password entered in the “sftp.json” file, then click `enter`. After downloading, you view all of the folders and files in your project in the File Explorer located in the left column of the Visual Studio Code interface.

![hosting](/pages/assets/screens/other/web-tools/vscode/explorer.png){.thumbnail}

> [!primary]
>
> As a reminder, it is important to configure the “sftp.json” file correctly. If you encounter an error before downloading your project, it is usually caused by a configuration defect in the “sftp.json” file. If you have any questions, please refer to the [Extension FAQ](https://github.com/Natizyskunk/vscode-sftp/blob/HEAD/FAQ.md){.external}.
>

### Make changes to files

Now that the project is downloaded locally to your machine. You can easily edit, add, or delete files on Visual Studio Code.

If you would like your local changes to be synchronized every time you save a file, add this line to the "sftp.json" file: `"uploadOnSave": true`.

To disable this feature, while keeping it in the "sftp.json" file, change the value from `true` to `false`.

So far, we have only mentioned the commands: `SFTP: Config` and `SFTP: Download Project`. There are other commands that you can observe by auto-completion by typing `SFTP:` in the command editor.

![hosting](/pages/assets/screens/other/web-tools/vscode/list_commands.png){.thumbnail}

Find the list of commands [here](https://github.com/Natizyskunk/vscode-sftp/wiki/Commands){.external}.

You are now able to access and edit the content of your web hosting plan via Visual Studio Code.

The purpose of this tutorial is to provide an effective introduction to managing a project from within Visual Studio Code. It is suitable for a first experience. However, if you edit several files and they are synchronized on your Web Hosting plan, you will be unable to view your change history, and possibly undo the changes.

## Go further <a name="go-further"></a>

[Log in to your web hosting plan’s FTP storage space](/pages/web_cloud/web_hosting/ftp_connection)

[Use FileZilla with your OVHcloud hosting plan](/pages/web_cloud/web_hosting/ftp_filezilla_user_guide)

[Use SSH access on your web hosting plan](/pages/web_cloud/web_hosting/ssh_on_webhosting) (only available with a [Professional or Performance web hosting plan](/links/web/hosting))

For specialised services (SEO, development, etc.), contact [OVHcloud partners](/links/partner).

If you would like assistance using and configuring your OVHcloud solutions, please refer to our [support offers](/links/support).

Join our [community of users](/links/community).