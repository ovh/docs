---
deprecated: true
title: Objektų konteinerių sinchronizavimas
excerpt: Objektų konteinerių sinchronizavimas
slug: objektu_konteineriu_sinchronizavimas
section: Object Storage
legacy_guide_number: g1919
---


## 
Jeigu norite perkelti objektus iš vieno duomenų centro į kitą, arba iš vieno projekto į kitą, geriausias sprendimas yra sinchronizavimas tarp konteinerių, nes taip išvengsite paslaugos veikimo nutrūkimo. Šiame gide paaiškinama, kaip atlikti sinchronizavimą.


## Reikalavimai

- [Paruošti aplinką API OpenStack naudojimui]({legacy}1851) su swift
- [Įkrauti OpenStack aplinkos kintamuosius]({legacy}1852)
- 2 objektų konteineriai 2 skirtinguose duomenų centreuose




## Sinchronizavimo rakto kūrimas
Konteineriai gali identifikuoti vienas kitą su raktais, kuriuos reikia įdiegti kiekvienam objektų konteineriui:


- Rakto kūrimas:


```
root@serveris-1:~$ sharedKey=$(openssl rand -base64 32)
```





## Paskirties katalogo kūrimas
Pirmiausiai sukonfigūruokite raktą konteineryje, į kurį bus keliami duomenys.
Pavyzdyje tai BHS duomenų centre esantis konteineris.


- Pakeiskite aplinkos kintamuosius pagal regioną:


```
root@serveris-1:~$ env | grep OS_REGION 

OS_REGION_NAME=BHS1
```


- Sukonfigūruokite raktą konteineryje, į kurį kelsite duomenis:


```
root@serveris-1:~$ swift post --sync-key "$sharedKey" containerBHS
```



Ar viskas sukonfigūruota teisingai, tikrinkite su komanda:


```
root@serveris-1:~$ swift stat containerBHS
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



- Konteinerio, į kurį bus keliami duomenys, adreso gavimas. Adresą reikės nurodyti konteineryje, iš kurio bus keliami duomenys:


```
root@serveris-1:~$ destContainer=$(swift --debug stat containerBHS 2>&1 | grep 'curl -i.*storage' | awk '{ print $4 }')
```





## Konteinerio, iš kurio bus iškeliami duomenys, konfigūravimas

- Pakeiskite regioną aplinkos kintamuosiuose:


```
root@serveris-1:~$ export OS_REGION_NAME=GRA1
```


- Rakto konfigūravimas konteineryje, iš kurio bus iškeliami duomenys:


```
root@serveris-1:~$ swift post --sync-key "$sharedKey" containerGRA
```


- Konteinerio, į kurį bus keliami duomenys, konfigūravimas konteineryje iš kurio bus iškeliami duomenys:


```
root@serveris-1:~$ swift post --sync-to "$destContainer" containerGRA
```



Kaip ir anksčiau, nustatymus galite patikrinti su šia komanda:


```
root@serveris-1:~$ swift stat containerGRA
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




## Sinchronizavimo patikrinimas
Po kelių akimirkų (priklausomai nuo failų dydžio) galėsite matyti failus naujoje saugykloje. Tai reiškia, kad failai sėkmingai perkeliami.


- Failų peržiūra sename konteineryje:


```
root@serveris-1:~$ swift list containerGRA
test1.txt
test2.txt
test3.txt
```


- Failų peržiūra naujame konteineryje:


```
root@serveur-1:~$ swift list containerBHS
test1.txt
test2.txt
test3.txt
```



Šis gidas naudingas migruojant RunAbove ir Public Cloud objektus


## 
[Grįžti į Cloud gidų sąrašą]({legacy}1785)

