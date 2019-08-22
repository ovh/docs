---
title: Installa Wordpress sulla tua istanza
excerpt: Installa Wordpress sulla tua istanza
slug: installa_wordpress_sulla_tua_istanza
legacy_guide_number: g2060
---


## 
WordPress è un sistema di gestione dei contenuti (CMS) che ti permette di creare il tuo sito in tutta semplicità, anche se non possiedi conoscenze tecniche specifiche per la sua gestione.

Contrariamente ai VPS OVH, sulle istanze Public Cloud non sono presenti template Wordpress preinstallati, ma puoi comunque decidere di installare manualmente il tuo CMS sulla tua istanza.

Questa guida ti mostra come effettuare questa operazione.


## Requisiri necessari

- [Crea un'istanza dallo Spazio Cliente OVH]({legacy}1775)




## Installa il tuo server Web
Per installare il tuo server Web sulla tua istanza Public Cloud, verifica innanzi tutto che la tua istanza sia aggiornata:


- Per Debian/Ubuntu:


```
admin@instance:~$ sudo apt-get update && sudo apt-get upgrade -y
```


- Per Fedora/CentOS:


```
[admin@instance ~]$ sudo yum update && sudo yum upgrade
```



A questo punto, installa il server Web.
Nel nostro esempio, utilizziamo Apache con questi elementi:

- Php5
- Php5-mysql
- Server Mysql

- Per Debian/Ubuntu:


```
admin@instance:~$ sudo apt-get install apache2 php5 php5-mysql mysql-server -y
```


- Per Fedora/CentOS:


```
[admin@instance ~]$ sudo yum install httpd php php-mysql mariadb-server -y
```



Per configurare l'account "root" del database MySQL ti viene richiesta la password.

Una volta effettuata l'operazione, riavvia il server Web per rendere effettive le tue modifiche.


- Per Debian/Ubuntu:


```
admin@instance:~$ sudo service apache2 restart
```


- Per Fedora/CentOS:


```
admin@instance:~$ sudo service httpd restart
```





## Scarica Wordpress
Accedi al sito di [Wordpress](https://it.wordpress.org/txt-download/) e scarica la versione più recente:


```
admin@instance:~$ wget https://it.wordpress.org/wordpress-4.4-it_IT.tar.gz
```


Decomprimi la cartella che hai appena scaricato:


```
admin@instance:~$ tar zxvf wordpress-4.4-it_IT.tar.gz
```



- Elimina il contenuto della cartella predefinita del server Web:


```
admin@instance:~$ sudo rm -R /var/www/html/
```


- Sposta il contenuto della cartella Wordpress nella cartella predefinita del server Web:


```
admin@instance:~$ sudo mv wordpress /var/www/html
```



Una volta completato il trasferimento, assegna al server Web i permessi di scrittura nella cartella.


- Per Debian/Ubuntu:


```
admin@instance:~$ sudo chown -R www-data:www-data /var/www/html/
```


- Per Fedora/CentOS:


```
[admin@server-7 ~]$ sudo chown -R apache:apache /var/www/html/
```





## Configura il tuo MySQL
Contrariamente a MySQL Server che puoi installare su Debian/Ubuntu, MariaDB non configura la tua password di root durante l'installazione.
È necessario avviare il server MariaDB e poi configurare la password utilizzando questi comandi:


- per avviare il server di database:


```
[admin@instance ~]$ sudo /sbin/service mariadb start
```


- per riconfigurare la password di root:


```
[admin@instance ~]$ sudo /usr/bin/mysql_secure_installation
```



Una volta configurata la tua password di root, puoi accedere al tuo server di database:


```
admin@instance:~$ sudo mysql -u root -p
```


A questo punto, è possibile creare un nuovo utente e un database dedicato a WordPress.


- Per creare l'utente:


```
mysql> CREATE USER 'wordpress'@'localhost' IDENTIFIED BY 'P@ssw0rd';
```


- Per creare il database:


```
mysql> CREATE DATABASE `wordpress` ;
```


- Assegna tutti i permessi all'utente "wordpress" sul database "wordpress" utilizzando questo comando:


```
mysql> GRANT ALL PRIVILEGES ON `wordpress` . * TO 'wordpress'@'localhost';
```





## Configura Wordpress
Una volta configurato il database, apri il tuo browser e inserisci l'indirizzo IP della tua istanza per accedere al tuo sito Wordpress.

Si apre la pagina in cui inserire le informazioni di accesso al tuo database.

![](images/img_3674.jpg){.thumbnail}
A questo punto, inserisci le informazioni relative al tuo sito e agli accessi del tuo account amministratore.

![](images/img_3675.jpg){.thumbnail}
Una volta confermati i dati inseriti, potrai accedere al pannello di gestione del tuo sito utilizzando l'utente che hai appena creato.


## 

- [Effettua il backup della tua istanza]({legacy}1881)
- [Configura il tuo Object Storage su Owncloud]({legacy}2000)




## 
[Ritorna all'indice delle guide Cloud]({legacy}1785)

