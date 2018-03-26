---
title: Objekt-Container synchronisieren
excerpt: Objekt-Container synchronisieren
slug: objekt-container_synchronisieren
section: Object Storage
legacy_guide_number: g1919
---


## 
Wenn Sie Ihre Objekte von einem Rechenzentrum in ein anderes (oder auch von einem Projekt zu einem anderen) migrieren möchten, ist die Synchronisation Ihrer Objekte zwischen den Containern die beste Lösung, um eine Service-Unterbrechung bei der Migration zu vermeiden.

In dieser Hilfe erfahren Sie, wie Sie dieses Vorhaben optimal umsetzen.


## Voraussetzungen

- [Vorbereitung der Umgebung für die Verwendung der OpenStack API]({legacy}1851) mit Swift Client;
- [Laden der OpenStack Umgebungsvariablen]({legacy}1852);
- zwei Object Containert in zwei verschiedenen Rechnenzentren.




## Erstellung des Synchronisations-Keys
Damit die Container sich identifizieren können, müssen Sie einen Key erstellen und diesen anschließend auf jedem der Object Container konfigurieren:


- Key erstellen:


```
root@serveur-1:~$ sharedKey=$(openssl rand -base64 32)
```





## Konfiguration des Ziel-Containers
Zunächst müssen Sie den Key auf dem Ziel-Container konfigurieren. Dieser befindet sich in unserem Beispiel in BHS.


- Überprüfen der Region in den Umgebungsvariablen:


```
root@serveur-1:~$ env | grep OS_REGION

OS_REGION_NAME=BHS1
```


- Konfiguration des Keys auf dem Ziel-Container:


```
root@serveur-1:~$ swift post --sync-key "$sharedKey" containerBHS
```



Die korrekte Konfiguration können Sie mit folgendem Befehl überprüfen:


```
root@serveur-1:~$ swift stat containerBHS
Account: AUTH_b3e269xxxxxxxxxxxxxxxxxxxx2b0ba29
Container: containerBHS
Objects: 0
Bytes: 0
Read ACL:
Write ACL:
Sync To:
Sync Key: 4cA5j5LyaaG2ws32d1fsdQSxnvIJv+y2qFnbnm6Kw=
Meta Access-Control-Allow-Origin: https://www.ovh.com
Accept-Ranges: bytes
X-Storage-Policy: Policy-0
Connection: close
X-Timestamp: 1444812373.28095
X-Trans-Id: B2210C05:895E_9E45A961:01BB_561E52E1_16A3:5298
Content-Type: text/plain; charset=utf-8
```



- Abruf der Adresse des Ziel-Containers, um diese anschließend auf dem Quell-Container zu konfigurieren:


```
root@serveur-1:~$ destContainer=$(swift --debug stat containerBHS 2>&1 | grep 'curl -i.*storage' | awk '{ print $4 }')
```





## Konfiguration des Quell-Containers

- Änderung der Region in den Umgebungsvariablen:


```
root@serveur-1:~$ export OS_REGION_NAME=GRA1
```


- Konfiguration des Keys auf dem Quell-Container:


```
root@serveur-1:~$ swift post --sync-key "$sharedKey" containerGRA
```


- Konfiguration des Ziels auf dem Quell-Container:


```
root@serveur-1:~$ swift post --sync-to "$destContainer" containerGRA
```



Wie bereits zuvor können Sie die korrekte Konfiguration mit folgendem Befehl überprüfen:


```
root@serveur-1:~$ swift stat containerGRA
Account: AUTH_b3e269f057d14af594542d6312b0ba29
Container: containerGRA
Objects: 3
Bytes: 15
Read ACL:
Write ACL:
Sync To: https://storage.bhs1.cloud.ovh.net/v1/AUTH_b3e269f057d14af594542d6312b0ba29/containerBHS
Sync Key: 4cA5j5LyaaG2wU4lDYnDmEwQSxnvIJv+y2qFnbnm6Kw=
Accept-Ranges: bytes
Connection: close
X-Timestamp: 1444813114.55493
X-Trans-Id: B2210C05:879E_052711B1:01BB_561E559B_24AE:6B1B
X-Storage-Policy: Policy-0
Content-Type: text/plain; charset=utf-8
```




## Überprüfung der Synchronisation
Nach kurzer Zeit (abhängig von Anzahl und Größe der zu synchronisierenden Dateien) können Sie überprüfen, ob der Prozess korrekt abgelaufen ist. Lassen Sie hierfür einfach die in beiden Ordner enthaltenen Dateien auflisten.


- Liste der Dateien im Quell-Container:


```
root@serveur-1:~$ swift list containerGRA
test1.txt
test2.txt
test3.txt
```


- Liste der Dateien im Ziel-Container:


```
root@serveur-1:~$ swift list containerBHS
test1.txt
test2.txt
test3.txt
```



Dieser Guide ist auch für eine Objektmigration von RunAbove auf Public Cloud verwendbar.


## 
... lesen Sie auch unsere anderen Hilfen zum Thema Cloud!

