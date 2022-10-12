---
title: Object Storage Swift - Montowanie kontenera obiektów za pomocą S3QL
excerpt: Montowanie kontenera obiektów za pomocą S3QL
slug: pcs/use-s3ql-to-mount-object-storage-containers
section: OpenStack Swift Storage Class Specifics
legacy_guide_number: g1908
order: 160
---


##
S3QL to system plików, który można zamontować, aby lokalnie przechowywać dane wykorzystując rozwiązania przestrzeni dyskowej cloud takie jak Object Storage.
System ten proponuje funkcje takie jak: transparentna kompresja, szyfrowanie czy snapshotting wykorzystywany do tworzenia kopii zapasowych.

Szczegółowe informacje są dostępne na url="http://www.rath.org/s3ql-docs/"]stronie autora[/url].

Przewodnik ten wyjaśnia, jak zamontować kontener obiektów jako system plików.


## Wstępne wymagania

- [Dostęp do interfejsu Horizon]({legacy}1773)
- [Dodawanie przestrzeni dyskowej](https://docs.ovh.com/pl/public-cloud/dodanie_przestrzeni_dyskowej/)



## Uwaga
Wykorzystywanie kontenera obiektów jako systemu plików może zmniejszyć wydajność operacji.


## Tworzenie systemu plików

- Utwórz plik zawierający informacje dotyczące logowania:

```
admin@serveur1:~$ sudo vim s3qlcredentials.txt

[swift]
backend-login: TENANT_NAME:USERNAME
backend-password: PASSWORD
storage-url: swiftks://auth.cloud.ovh.net/REGION_NAME:CT_NAME
fs-passphrase: PASSPHRASE
```



Informacje takie jak TENANT_NAME, USERNAME mogą zostać pobrane z pliku OpenRC.
Zapoznaj się z tym przewodnikiem, aby pobrać plik:

- [Dostęp i bezpieczeństwo w interfejsie Horizon]({legacy}1774)


Argumenty REGION_NAME i CT_NAME można dostosować w zależności od nazwy i lokalizacji kontenera obiektów.


- Zmień uprawnienia dostępu do pliku uwierzytelniania:

```
admin@serveur1:~$ sudo chmod 600 s3qlcredentials.txt
```


- Formatowanie kontenera obiektów:

```
admin@serveur1:~$ sudo mkfs.s3ql --backend-options domain=default --authfile s3qlcredentials.txt swiftks://auth.cloud.ovh.net/REGION_NAME:CT_NAME
```



Następnie należy dodać hasło, które dodałeś w pliku uwierzytelniania.
Jeśli nie chcesz go konfigurować, należy usunąć linię "fs-passphrase: PASSPHRASE"
z pliku uwierzytelniania, aby nie nastąpiła blokada podczas montowania systemu plików.


## Montowanie systemu plików

- Tworzenie punktu montowania

```
admin@serveur1:~$ sudo mkdir /mnt/container
```


- Montowanie kontenera obiektów

```
admin@serveur1:~$ sudo mount.s3ql --backend-options domain=default --authfile s3qlcredentials.txt swiftks://auth.cloud.ovh.net/REGION_NAME:CT_NAME /mnt/container/
```


- Weryfikacja:

```
admin@serveur1:~$ sudo df -h

Filesystem Size Used Avail Use% Mounted on
/dev/vda1 9.8G 927M 8.5G 10% /
udev 10M 0 10M 0% /dev
tmpfs 393M 5.2M 388M 2% /run
tmpfs 982M 0 982M 0% /dev/shm
tmpfs 5.0M 0 5.0M 0% /run/lock
tmpfs 982M 0 982M 0% /sys/fs/cgroup
swiftks://auth.cloud.ovh.net/REGION_NAME:CT_NAME 1.0T 0 1.0T 0% /mnt/container
```



Nie będzie możliwości korzystania z S3QL w trybie offline.
Nie zaleca się również konfigurowania trwałości za pomocą pliku /etc/fstab, lecz za pomocą skryptu, który będzie się uruchamiał podczas uruchamiania serwera.
