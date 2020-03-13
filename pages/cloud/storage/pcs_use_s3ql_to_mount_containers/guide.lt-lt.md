---
title: Objektų saugyklos su S3QL prijungimas
excerpt: Objektų saugyklos su S3QL prijungimas
slug: objektu_saugyklos_su_s3ql_prijungimas
section: Object Storage
legacy_guide_number: g1908
---


## 
S3QL - tai failų sistema, kuri gali būti naudojama lokaliam duomenų saugojimui naudojant Cloud saugyklų sprendimus, pvz., Object Storage.
Ši sistema suteikia daug privalumų, pavyzdžiui, geresnis suspaudimas, šifravimas, momentinių kopijų kūrimas, skirtas tik atsarginiam kopijavimui.

Daugiau informacijos rasite [kūrėjų svetainėje](http://www.rath.org/s3ql-docs/).

Šiame gide paaiškinama, kaip prijungti objektų saugyklą su šia failų sistema.


## Reikalavimai

- [Prieiga prie Horizon sąsajos]({legacy}1773)
- [Saugykla]({legacy}1790)



## Dėmesio!
Naudokite objektų saugyklą, nes failų sistema gali sumažinti operacijų spartą.


## Failų sistemos kūrimas

- Sukurkite failą su prisijungimo informacija: 


```
admin@serveur1:~$ sudo vim s3qlcredentials.txt

[swift]
backend-login: SUTEIKTAS_PAVADINIMAS:VARTOTOJO_VARDAS
backend-password: SLAPTAŽODIS
storage-url: swiftks://auth.cloud.ovh.net/REGIONO_PAVADINIMAS:CT_PAVADINIMAS
fs-passphrase: SLAPTAŽODIS
```



Reikalingą informaciją, pvz., SUTEIKTAS_PAVADINIMAS ar VAROTOJO_VARDAS rasite OpenRC faile.
Išsamesnį paaiškinimą rasite šiame gide:

- [Horizon prieiga ir saugumas]({legacy}1774)


Argumentai REGIONO_PAVADINIMAS ir CT_PAVADINIMAS turi būti pritaikyti prie objektų konteinerio vietos ir pavadinimo.


- Pakeiskite autentifikacijos failo teises:

```
admin@serveur1:~$ sudo chmod 600 s3qlcredentials.txt
```


- Objektų konteinerio formatavimas:

```
admin@serveur1:~$ sudo mkfs.s3ql --backend-options domain=default --authfile s3qlcredentials.txt swiftks://auth.cloud.ovh.net/GRA:CT_S3QL
```



Taip pat reikės nurodyti slaptažodį, kurį išsaugojote autentifikacijos faile. Jeigu nenorite konfigūruoti slaptažodžio, ištrinkite eilutę fs-passphrase: SLAPTAŽODIS. Tokiu atveju, prijungiant failų sistemą, nereikės įvesti slaptažodžio.


## Failų sistemos prijungimas

- Prijungimo taško sukūrimas


```
admin@serveur1:~$ sudo mkdir /mnt/container
```


- Objektų konteinerio prijungimas


```
admin@serveur1:~$ sudo mount.s3ql --authfile s3qlcredentials.txt swiftks://auth.cloud.ovh.net/GRA:CT_S3QL /mnt/container/
```


- Prijungimo patikrinimas:


```
admin@serveur1:~$ sudo df -h

Filesystem Size Used Avail Use% Mounted on
/dev/vda1 9.8G 927M 8.5G 10% /
udev 10M 0 10M 0% /dev
tmpfs 393M 5.2M 388M 2% /run
tmpfs 982M 0 982M 0% /dev/shm
tmpfs 5.0M 0 5.0M 0% /run/lock
tmpfs 982M 0 982M 0% /sys/fs/cgroup
swiftks://auth.cloud.ovh.net/GRA:CT_S3QL 1.0T 0 1.0T 0% /mnt/container
```



S3QL negalima naudoti „offline“ režimu.

Be to, nepatariama sukonfigūruoti prijungimo /etc/fstab faile, geriau yra naudoti scenarijų, kuris būtų paleidžiamas kiekvieno serverio įkrovimo metu.


## D.U.K.
Rekomenduojame perskaityti [S3QL D.U.K.](https://bitbucket.org/nikratio/s3ql/wiki/FAQ)


## 
[Grįžti į Cloud gidų sąrašą]({legacy}1785)

