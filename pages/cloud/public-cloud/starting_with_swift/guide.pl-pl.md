---
title: Pierwsze kroki z API Swift
excerpt: Pierwsze kroki z API Swift
slug: pierwsze_kroki_z_api_swift
legacy_guide_number: g1916
section: Zarządzanie w interfejsie Horizon
---


## 
Aby zautomatyzować operacje w ramach Public Cloud, można skorzystać z API OpenStack do wygenerowania różnych skryptów. Klient Swift firmy OpenStack pozwala na zarządzanie kontenerami i obiektami. 

Będziesz mógł na przykład w sposób regularny  wysyłać pliki do kontenerów, aby wykonywać ich kopie zapasowe. 

Przewodnik ten wyjaśnia, jak korzystać z API OpenStack, w celu zarządzania instancjami za pomocą klienta Python Swfit.


## Wstępne wymagania

- [Przygotowanie środowiska do korzystania z API OpenStack]({legacy}1851) poprzez zainstalowanie python-swift client
- [Pobranie zmiennych środowiskowych OpenStack]({legacy}1852)




## Dokumentacja Swift
Możesz uzyskać listę dostępnych poleceń czytając dokumentację:


```
admin@serveur-1:~$ swift --help
```


Oto lista najważniejszych poleceń:

|delete|Usuwa kontener lub obiekty znajdujące się w kontenerze.|
|---|
|delete|Usuwa kontener lub obiekty znajdujące się w kontenerze.|
|download|Pobieranie plików z kontenera|
|list|Wyświetlenie listy kontenerów konta lub obiektów kontenera|
|post|Aktualizuje metadane dla konta, kontenera lub obiektu. Tworzy kontener, jeśli ten nie istnieje.|
|stat|Wyświetla informacje dotyczące konta, kontenera lub obiektu.|
|upload|Wysyła pliki lub katalogi na kontener.|
|capabilities|Wyświetla listę parametrów środowiska Swift|
|tempurl|Tworzy tymczasowy adres URL.|


Można również otrzymać pomoc w zakresie określonej komendy dodając do niej "--help".


```
admin@serveur-1:~$ swift post --help

Updates meta information for the account, container, or object.
If the container is not found, it will be created automatically.

Positional arguments:
[container] Name of container to post to.
[object] Name of object to post. Specify multiple times
for multiple objects.
[...]
```


Dokumentacja jest również dostępna na [stronie Openstack](http://docs.openstack.org/cli-reference/content/swiftclient_commands.html).


## Utworzenie publicznego kontenera obiektów

- Utwórz kontener "container1":


```
admin@serveur-1:~$ swift post container1
```


- Skonfiguruj uprawnienia tak, aby był on kontenerem publicznym:


```
admin@serveur-1:~$ swift post --header "X-Container-Read: .r:*" container1
```


- Sprawdź konfigurację kontenera:


```
admin@serveur-1:~$ swift stat container1

Account: AUTH_b3e26xxxxxxxxxxxxxxxxxxxb0ba29
Container: container1
Objects: 0
Bytes: 0
Read ACL: .r:*
Write ACL:
Sync To:
Sync Key:
Accept-Ranges: bytes
X-Trans-Id: B2210C05:8D93_052711A1:01BB_561CC9DF_1B305:30D7
X-Storage-Policy: Policy-0
Connection: close
X-Timestamp: 1444726875.27475
Content-Type: text/plain; charset=utf-8
```





## Wysyłka pliku na kontener

- Wyślij zawartość lokalnego katalogu na kontener:


```
admin@serveur-1:~$ swift upload container1 images/

images/OVHlogo.png
images/OVHSummitKeynote.jpg
```



Jeśli przesyłasz cały katalog a nie pojedynczy plik, do plików zostanie automatycznie dodany prefiks.

- Pobierz listę plików kontenera:


```
admin@serveur-1:~$ swift list container1

images/OVHSummitKeynote.jpg
images/OVHlogo.png
text1.txt
text2.txt
text3.txt
```



Można wyświetlić pliki posiadające określony prefiks korzystając z argumentu "--prefix":


```
admin@serveur-1:~$ swift list container1 --prefix images

images/OVHSummitKeynote.jpg
images/OVHlogo.png
```


W związku z tym, że kontener został skonfigurowany tak, żeby był publiczny, plik jest dostępny pod tym adresem:

```
https://storage.gra1.cloud.ovh.net/v1/AUTH_b3e26xxxxxxxxxxxxxxxxxxxb0ba29/container1/images/OVHlogo.png
```


Adres ten składa się z punktu dostępu API dla Object Storage, który możesz pobrać w menu [Dostęp i bezpieczeństwo w interfejsie Horizon]({legacy}1774) oraz z nazwy kontenera i nazwy pliku (wraz z prefiksem).


## Pobieranie plików

- Pobierz plik:


```
admin@serveur-1:~$ swift download container1 text1.txt

text1.txt [auth 0.328s, headers 0.452s, total 0.453s, 0.000 MB/s]
```



Można pobrać kilka plików posiadających taki sam prefiks. Skorzystaj z tego polecenia:


```
admin@serveur-1:~$ swift download container1 --prefix images

images/OVHlogo.png [auth 0.383s, headers 0.520s, total 0.522s, 0.135 MB/s]
images/OVHSummitKeynote.jpg [auth 0.371s, headers 0.514s, total 0.559s, 2.657 MB/s]
```




## Usuwanie kontenera lub obiektu

- Usuń plik:


```
admin@serveur-1:~$ swift delete container1 text1.txt

text1.txt
```



Podobnie jak w przypadku pobierania, można usunąć kilka plików posiadających  taki sam prefiks. Skorzystaj z tego polecenia:

```
admin@serveur-1:~$ swift delete container1 images/*

images/OVHSummitKeynote.jpg
images/OVHlogo.png
```



- Usuń kontener:


```
admin@serveur-1:~$ swift delete container1

text2.txt
text3.txt
```



Operacja ta spowoduje usunięcie wszystkich plików znajdujących się na kontenerze.


## 
[Przewodniki Cloud]({legacy}1785)

