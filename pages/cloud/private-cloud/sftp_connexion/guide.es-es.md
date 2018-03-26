---
title: Conexión en SFTP
excerpt: ''
slug: conexion_en_sftp
legacy_guide_number: g589
section: Primeros pasos
---


## 
En un primer momento es necesario abrir un terminal en su máquina a fin de poner en marcha la conexión SFTP.

Ubuntu GNOME, por ejemplo, se encuentra en Aplicaciones > Accesorios > Terminal.

Una vez lanzado el terminal, verifique que posee el comando sftp : 


```
# man sftp
```

(este es un ejemplo; por supuesto, puede utilizar el autocompletado)
Una vez efectuada la verificación, puede lanzar el comando de la siguiente manera : 


```
# sftp admin@pcc-178-32-194-8.ovh.com
```


Le será pedida una contraseña : 


```
# sftp admin@pcc-178-32-194-8.ovh.com
Connecting to pcc-178-32-194-8.ovh.com...
admin@pcc-178-32-194-8.ovh.com's password:
```


La contraseña a introducir es aquella que le permite conectarse a vSphere y que recibe en el mail de entrega : 


```
* Puede descargarlo en : https://pcc-178-32-194-8.ovh.com/client/VMware-viclient.exe
* dirección IP/Nombre : pcc-178-32-194-8.ovh.com
* usuario : admin
* contraseña : xxxxxxx
```


Una vez conectado, puede listar sus datastores :


```
sftp> ls
pcc-000714
sftp>
```


A continuación, es necesario colocarse en el datastore para importar la imagen de ejemplo.
Para ello debe utilizar el siguiente comando:


```
sftp> cd pcc-000714
```

 (este es un ejemplo que debe ser sustituido por el datastore obtenido por el comando anterior)
Una vez en el datastore, sólo resta importar el archivo deseado:


```
sftp> put /home/ubuntu-11.10-desktop-i386-fr.iso to /datastore/pcc-000714/ubuntu-11.10-desktop-i386-fr.iso
/home/loic/Bureau/ubuntu-11.10-desktop-i386-fr.iso 100% 655MB 8.0MB/s 01:22
```




## Requisitos previos
Será necesario haber descargado e instalado un cliente FTP/SFTP.
El más disponible es Filezilla, en esta dirección :


- [Lien de téléchargement Filezilla](http://downloads.sourceforge.net/filezilla/FileZilla_3.5.2_win32-setup.exe)




## Configuración y uso
Para la conexión en SFTP a su Private Cloud, será necesario introducir 3 informaciones que habrá recibido en el mail de activación de Private Cloud :


```
* Puede descargarlo en : https://pcc-178-32-194-8.ovh.com/client/VMware-viclient.exe
* Dirección IP/Nombre : pcc-178-32-194-8.ovh.com
* usuario : admin
* contraseña : xxxxxxx
```


Vea un ejemplo de configuración con la recuperación de pcc-000714 (en el ejemplo):

![](images/connection_sftp_filezilla.png){.thumbnail}
Una vez conectado, haga doble clic en el pcc-000714 (en el ejemplo) y, a continuación, arrastre y suelte el archivo para transferir:

![](images/connection_sftp_filezilla.png){.thumbnail}

