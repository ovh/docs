---
title: 'Sharing files with the Plik tool'
excerpt: Find out how to use the Plik tool to send files to other people
updated: 2022-02-14
---

**Last updated 14th February 2022**

## Objective

The online [Plik](https://plik.ovhcloud.com) tool allows you to share files between different people, offering secure access options to these files.

**Learn how to use the Plik online tool to share files.**

## Requirements

- An [OVHcloud account](/pages/account_and_service_management/account_information/ovhcloud-account-creation)

## Instructions

### API connection

First, go to <https://plik.ovhcloud.com>.

To upload files, you must be authenticated. Click `Login with OVH`{.action}.

![login](images/plik-login-EU.png)

Log in to your OVHcloud account, which will give the OVHcloud API access to the Plik tool.<br>
Enter your credentials and click the `Log in`{.action} button to continue.

![API](images/api-login-EU.png)

> [!primary]
>
> If you have enabled [two-factor authentication](/pages/account_and_service_management/account_information/secure-ovhcloud-account-with-2fa) on your OVHcloud account, you will then need to enter the code provided by the authentication method you have defined on your account. 
>

### Upload files

Once you have logged in, click on the word `Plik`{.action} in the top left-hand corner to access the menu for adding files.

Click `Add files`{.action} and select the file you want to add, or drag and drop your files.

> [!primary]
>
> Files are limited to 10 GB in size.
>

![Add files - options](images/plik-add-files-options.png)

There are several options for configuring your uploads:

- `Destruct after the first download` - This option will delete your uploaded file after the first download.
- `Streaming` - The file will not be stored on the server. Instead, the file upload begins when the remote user begins the download.
- `Removable` - Allows end users to delete the uploaded file.
- `Password` - Protect your upload by imposing a username and password that the remote user must enter.
- `Comments` - Add comments to your download. The *Markdown* language is supported.
- `Files will be automatically removed in` - Choose the number of days (30 maximum), hours or minutes after which you want your uploaded files to be automatically deleted.

> [!primary]
>
> When you protect your upload with a password, the default username is "plik".
>

Once you have added your files and selected the options you want, click the green `Upload`{.action} button on the left-hand side. This will open a new page with your attached files.

![upload file](images/plik-upload-EU.png)

The download options are then available.

### Download files

On the download page, new options are available:

- `Zip archive` - Places all files you uploaded into a compressed folder.
- `Add files` - Allows you to add other files.
- `Delete` - Deletes all previously uploaded files.

You can also delete files one by one by clicking the `X`{.action} button to the right of each file.

![download file](images/plik-download-EU.png)

To allow others to download your files, give them the link to the individual file under the file name.<br>
You can also link them to all files in the session by sharing the URL in your browser's address bar.<br>
You can also share the QR code on the left. If you have uploaded several files, the QR code will display each file.

### Account options

Click on your username in the top right-hand corner to access your account options.

![download file](images/account-options.png)

Using this menu, you can log out, generate tokens to use the Plik tool in the command line, delete each upload (via the `Remove`{.action} button to the right of each upload) or delete all uploads (via the `DELETE UPLOADS`{.action} button).

## Go further

Join our community of users on <https://community.ovh.com/en/>.
