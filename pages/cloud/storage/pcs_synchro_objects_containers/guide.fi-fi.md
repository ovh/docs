---
deprecated: true
title: Object storage -säilöjen synkronointi
excerpt: Object storage -säilöjen synkronointi
slug: object_storage_-sailojen_synkronointi
section: Object Storage
legacy_guide_number: g1919
---


## 
Jos haluat siirtää objekteja konesalista toiseen, tai jopa projektista toiseen, on objektien synkronointi säilöjen välillä paras tapa välttää palvelukatkot migraation aikana.


## Edellytykset

- [Ympäristön valmistelu OpenStack API:n käyttöä varten]({legacy}1851) swift-asiakasohjelmalla
- [OpenStack-ympäristön muuttujien lataaminen]({legacy}1852)
- 2 object storagea kahdessa eri konesalissa




## Synkronointiavaimen luominen
Säilöjen tunnistamiseksi on luotava avain ja konfiguroitava se jokaiseen object storageen: 


- Luo avain:


```
root@serveur-1:~$ sharedKey=$(openssl rand -base64 32)
```





## Kohdesäilön konfigurointi
Ensimmäiseksi on konfiguroitava säilö, joka tulee vastaanottamaan tiedot. Tässä esimerkissä sen sijainti on BHS.


- Tarkista alue, joka on määritetty ympäristömuuttujissa: 


```
root@serveur-1:~$ env | grep OS_REGION

OS_REGION_NAME=BHS1
```


- Konfiguroi avain kohdesäilöön:


```
root@serveur-1:~$ swift post --sync-key "$sharedKey" containerBHS
```



Seuraavalla komennolla on mahdollista tarkistaa, onnistuiko konfigurointi: 


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



- Ota talteen kohdesäilön osoite, jotta voit konfiguroida sen seuraavaksi lähdesäilöön:


```
root@serveur-1:~$ destContainer=$(swift --debug stat containerBHS 2>&1 | grep 'curl -i.*storage' | awk '{ print $4 }')
```





## Lähdesäilön konfigurointi

- Vaihda aluetta ympäristömuuttujissa:


```
root@serveur-1:~$ export OS_REGION_NAME=GRA1
```


- Konfiguroi avain lähdesäilöön: 


```
root@serveur-1:~$ swift post --sync-key "$sharedKey" containerGRA
```


- Konfiguroi kohdesäilö lähdesäilöön: 


```
root@serveur-1:~$ swift post --sync-to "$destContainer" containerGRA
```



Kuten aiemmin, konfiguroinnin onnistumisen voi tarkistaa: 


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




## Synkronoinnin tarkistaminen
Jonkin ajan kuluttua (aika riippuu siirrettävien tiedostojen lukumäärästä ja koosta) voit tarkistaa toimiko synkronointi listaamalla kunkin säilön tiedostot.


- Listaa lähdesäilössä olevat tiedostot:


```
root@serveur-1:~$ swift list containerGRA
test1.txt
test2.txt
test3.txt
```



-Listaa kohdesäilössä olevat tiedostot: 


```
root@serveur-1:~$ swift list containerBHS
test1.txt
test2.txt
test3.txt
```


Tätä ohjetta voidaan käyttää myös RunAbove-objektien migraatiossa Public Cloudiin.


## 
[Paluu Cloud-tuotteiden ohjeiden valikkoon Cloud]({legacy}1785)

