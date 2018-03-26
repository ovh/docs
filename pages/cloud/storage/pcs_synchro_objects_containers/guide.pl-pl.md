---
title: Synchronizacja kontenerów obiektów
excerpt: Synchronizacja kontenerów obiektów
slug: synchronizacja_kontenerow_obiektow
section: Object Storage
legacy_guide_number: g1919
---


## 
Jeśli chcesz przenieść swoje obiekty z jednego centrum danych do drugiego, z jednego projektu do drugiego, najlepszym rozwiązaniem, aby uniknąć przerwy w działaniu usługi podczas migracji, jest synchronizacja obiektów między kontenerami.
Przewodnik ten opisuje, jak wdrożyć to rozwiązanie.


## Wstępne wymagania

- [Przygotowanie środowiska do korzystania z API OpenStack]({legacy}1851) za pomocą klienta swift
- [Pobranie zmiennych środowiskowych OpenStack]({legacy}1852)
- 2 kontenery obiektów w 2 różnych centrach danych




## Utworzenie klucza synchronizacji
Najpierw należy utworzyć klucz, który trzeba będzie skonfigurować na każdym z kontenerów obiektów:


- Tworzenie klucza:


```
root@serveur-1:~$ sharedKey=$(openssl rand -base64 32)
```





## Konfiguracja kontenera docelowego
Najpierw należy skonfigurować klucz na kontenerze, który otrzyma dane. 
W naszym przykładzie kontener ten znajduje się w BHS.


- Sprawdzanie regionu w zmiennych środowiskowych:


```
root@serveur-1:~$ env | grep OS_REGION

OS_REGION_NAME=BHS1
```


- Konfigurowanie klucza na kontenerze docelowym:


```
root@serveur-1:~$ swift post --sync-key "$sharedKey" containerBHS
```



Za pomocą tego polecenia można sprawdzić, czy klucz został poprawnie skonfigurowany:


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



- Pobieranie adresu kontenera docelowego i konfiguracja tego adresu na kontenerze źródłowym:


```
root@serveur-1:~$ destContainer=$(swift --debug stat containerBHS 2>&1 | grep 'curl -i.*storage' | awk '{ print $4 }')
```





## Konfiguracja kontenera źródłowego

- Zmiana regionu w zmiennych środowiskowych:


```
root@serveur-1:~$ export OS_REGION_NAME=GRA1
```


- Konfiguracja klucza na kontenerze źródłowym:


```
root@serveur-1:~$ swift post --sync-key "$sharedKey" containerGRA
```


- Konfiguracja kontenera docelowego na kontenerze źródłowym:


```
root@serveur-1:~$ swift post --sync-to "$destContainer" containerGRA
```



Za pomocą tego polecenia można sprawdzić, czy konfiguracja została wykonana poprawnie:


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




## Sprawdzanie synchronizacji
Po kilku minutach (w zależności od liczby i rozmiaru plików do wysłania) można sprawdzić, czy synchronizacja przebiegła prawidłowo, poprzez uzyskanie listy plików na każdym kontenerze. 


- Pobranie listy plików dostępnych na kontenerze źródłowym:


```
root@serveur-1:~$ swift list containerGRA
test1.txt
test2.txt
test3.txt
```


- Pobranie listy plików dostępnych na kontenerze docelowym:


```
root@serveur-1:~$ swift list containerBHS
test1.txt
test2.txt
test3.txt
```



Przewodnik ten ma również zastosowanie w przypadku migracji obiektów z RunAbove na Public Cloud.


## 
[Przewodniki Cloud]({legacy}1785)

