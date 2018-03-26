---
title: Connessione in SFTP
excerpt: ''
slug: connessione_in_sftp
legacy_guide_number: g589
---


## 
In un primo momento è necessario aprire un terminale sulla tua macchina al fine di avviare la connessione SFTP.

In Ubuntu GNOME per esempio si trova in Applicazioni > Accessori > Terminale

Una volta lanciato il terminale, verifica se possiedi il comando sftp:


```
# man sftp
```

(questo è un esempio ovviamente; puoi utilizzare il completamento automatico)
Una volta effettuata questa verifica puoi lanciare il comando come segue:


```
# sftp admin@pcc-178-32-194-8.ovh.com
```


Ti verrà poi chiesta la password:


```
# sftp admin@pcc-178-32-194-8.ovh.com
Connecting to pcc-178-32-194-8.ovh.com...
admin@pcc-178-32-194-8.ovh.com's password:
```


La password da inserire è quella che consente di connettersi a vSphere, ricevuta nel recapito della posta:


```
* Puoi scaricare da: https://pcc-178-32-194-8.ovh.com/client/VMware-viclient.exe
* indirizzo IP/Nome: pcc-178-32-194-8.ovh.com
* nome utente: admin
* password: xxxxxxx
```


Una volta connesso, potrai elencare i tuoi datastores:


```
sftp> ls
pcc-000714
sftp>
```


In seguito devi posizionarti nel datastore per importare la tua immagine, ad esempio.
Per ciò occorrerà utilizzare il comando seguente:


```
sftp> cd pcc-000714
```

 (Questo è un esempio. Questo deve essere sostituito dal datastore ottenuto dal comando precedente)
Una volta dentro il datastore, non resta che importare il file desiderato:


```
sftp> put /home/ubuntu-11.10-desktop-i386-fr.iso to /datastore/pcc-000714/ubuntu-11.10-desktop-i386-fr.iso
/home/loic/Bureau/ubuntu-11.10-desktop-i386-fr.iso 100% 655MB 8.0MB/s 01:22
```




## Prerequisiti
Sarà necessario aver scaricato e installato un server FTP / SFTP.
Il più comune è Filezilla, disponibile al seguente indirizzo:


- [Lien de téléchargement Filezilla](http://downloads.sourceforge.net/filezilla/FileZilla_3.5.2_win32-setup.exe)




## Configurazione e utilizzo
Per la connessione in SFTP al tuo Private Cloud, sarà necessario inserire 3 informazioni che hai ricevuto nella mail d'attivazione del Private Cloud:


```
* Puoi scaricare da: https://pcc-178-32-194-8.ovh.com/client/VMware-viclient.exe
* indirizzo IP/Nome: pcc-178-32-194-8.ovh.com
* nome utente: admin
* password: xxxxxxx
```


Ecco un esempio di configurazione con il recupero di pcc-000714
(nell'esempio):

![](images/connection_sftp_filezilla.png){.thumbnail}
Una volta connesso, puoi cliccare due volte sul pcc-000714 (nell'esempio) e così effettuare un drag and drop del file da trasferire:

![](images/connection_sftp_filezilla.png){.thumbnail}

