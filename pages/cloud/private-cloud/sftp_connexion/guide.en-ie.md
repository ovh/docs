---
title: SFTP connection
excerpt: ''
slug: sftp_connection
legacy_guide_number: g589
---


## 
First you must open a terminal on your machine in order to launch the SFTP connection.

Under Ubuntu GNOME for example it is found in Applications > Accessories > Terminal.

Once the terminal is started, make sure you have the sftp command:



```
# man sftp
```

(this is only an example, you need to use autocompletion)
Once this verification is done you must launch the order in the following way:


```
# sftp admin@pcc-178-32-194-8.ovh.com
```


You're password will then be requested:


```
# sftp admin@pcc-178-32-194-8.ovh.com
Connecting to pcc-178-32-194-8.ovh.com...
admin@pcc-178-32-194-8.ovh.com's password:
```


The password to be entered is the one to allow you to connect to vSphere and received in the mail delivery:


```
* You can download it at: https://pcc-178-32-194-8.ovh.com/client/VMware-viclient.exe
* IP address/Name: pcc-178-32-194-8.ovh.com
* user name: admin
* password: xxxxxxx
```


Once connected you can list your datastores:


```
sftp> ls
pcc-000714
sftp>
```


You then need to place it in your datastore to, for example, import an image.
To do this you must use the following command:


```
sftp> cd pcc-000714
```

 (this is only an example, you must still replace it by the datastore obtained by the previous command)
Once in the datastore, all that remains is to import the file you want:


```
sftp> put /home/ubuntu-11.10-desktop-i386-fr.iso to /datastore/pcc-000714/ubuntu-11.10-desktop-i386-fr.iso
/home/loic/Bureau/ubuntu-11.10-desktop-i386-fr.iso 100% 655MB 8.0MB/s 01:22
```




## Pre-requisites
You need to download and install an FTP/SFTP client.

Filezilla is the most widely used and can be downloaded at the following address:


- [Filezilla download link](http://downloads.sourceforge.net/filezilla/FileZilla_3.5.2_win32-setup.exe)




## Configuration and usage
For the SFTP connection to your Private cloud, you will need to enter the information (3 in total) you have received in the Private Cloud activation mail:


```
* You can download it at: https://pcc-178-32-194-8.ovh.com/client/VMware-viclient.exe
* IP address/name: pcc-178-32-194-8.ovh.com
* user name: admin
* password: xxxxxxx
```


Here is a sample configuration with recovering pcc-000714 (in the example):

![](images/connection_sftp_filezilla.png){.thumbnail}
Once connected, you can double click on PCC-000 714 (in the example), then drag and drop the file to upload:

![](images/connection_sftp_filezilla.png){.thumbnail}

