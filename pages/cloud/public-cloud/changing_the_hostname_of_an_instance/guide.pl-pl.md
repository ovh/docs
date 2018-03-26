---
title: Zmiana hostname instancji
excerpt: Zmiana hostname instancji
slug: zmiana_hostname_instancji
legacy_guide_number: g1928
section: Tutoriale
---


## 
Cloud-Init pozwala na skonfigurowanie instancji Public Cloud podczas jej tworzenia oraz podczas każdego restartu. 
Jeśli chcesz ponownie skonfigurować hostname, na przykład na skutek błędu podczas tworzenia instancji lub aby zmienić konfigurację serwera mailowego, musisz wyłączyć moduł Cloud-Init, który zajmuje się konfiguracją hostname, aby nie został on przywrócony. 

Przewodnik ten wyjaśnia, jak skonfigurować cloud-init, aby móc zmienić hostname instancji.


## Wstępne wymagania

- Instancja




## Wyłączenie modułu cloud-init

- Modyfikacja pliku konfiguracyjnego:

```
admin@serveur-1:~$ sudo vim /etc/cloud/cloud.cfg
```


- Wyłączenie modułu:

```
manage_etc_hosts: false
```





## Zmiana hostname

- Zmodyfikuj plik /etc/hostname:

```
admin@serveur-1:~$ sudo vim /etc/hostname

webserver
```


- Zmodyfikuj plik /etc/hosts:

```
admin@serveur-1:~$ sudo vim /etc/hosts

127.0.1.1 webserver.localdomain webserver
127.0.0.1 localhost
```


- Zrestartuj instancję:

```
admin@serveur-1:~$ sudo reboot
```



Po restarcie zmiana hostname została wzięta pod uwagę:

```
admin@webserver:~$ sudo cat /etc/hosts

127.0.1.1 webserver.localdomain webserver
127.0.0.1 localhost
```




## 
[Przewodniki Cloud]({legacy}1785)

