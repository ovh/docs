---
deprecated: true
title: CDN GeoCache akceleratoriaus naudojimas svetainių talpinimo planuose
excerpt: Nemokamai su svetainių talpinimo planais suteikiamo GeoCache akceleratoriaus naudojimo gidas
slug: cdn_geocache_akceleratoriaus_naudojimas_svetainiu_talpinimo_planuose
legacy_guide_number: g1290
---


## 
Prisijunkite prie [valdymo sąsajos](https://www.ovh.com/manager/web), su savo prisijungimo ID ir slaptažodžiu.

Spragtelėkite svetainių talpinimo paslaugą ir eikite į skyrių Svetainių talpinimas.

![](images/img_2904.jpg){.thumbnail}


## GeoCache akceleratoriaus spartinančiosios atmintinės išvalymas
TTL (Time to Live = failų saugojimo trukmė OVH buvimo taškuose (PoP)) yra nuo 5 iki 60 minučių (šią trukmę valdo mūsų optimizavimo serveriai). Pasibaigus nustatytam laikotarpiui failai ištrinami iš atmintinės. Kai lankytojai į juos kreipiasi dar kartą, failai vėl patalpinami atmintinėje susietame buvimo taške.

Failo įkėlimo į atmintinę paspartinimui buvimo taške (pavyzdžiui, kai pakeičiamas failų turinys) reikia išvalyti naudojamą atmintinę. Po to failai bus įkelti į atmintinę buvimo taške iškart, kai tik lankytojas į juos kreipsis iš šiam buvimo taškui priskirtos zonos. 

OVH tinklo buvimo taškų spartinančiąją atmintinę išvalysite spragtelėję CDN bazės atmintinės valdymas.

![](images/img_2957.jpg){.thumbnail}


## GeoCache akceleratoriaus išjungimas
Jeigu nenorite naudoti nemokamai su svetainių talpinimo paslauga suteikto GeoCache, jį galite išjungti keliais būdais:


- Nenaudoti IP (A lauko) jūsų talpinimo plane, susietame su GeoCache.
- Redaguoti talpinimo plano šakniniame kataloge esantį taisyklių failą (žr. kitą skyrių).


Čia paaiškinsime, kaip pakeisti IP adresą, naudojamą jūsų talpinimo plane.

Pereikite į su jūsų GeoCache talpinimo planu susieto domeno skyrių Domenai ir DNS. Po to spragtelėkite DNS zona.

Tarp visų DNS zonos laukų suraskite A lauką, kuris susietas su IP 213.xxx.xxxx.xxx*

*Šis IP yra priskirtas GeoCache akceleratoriui, susietam su talpinimo planu. Norint vėliau atkurti GeoCache veikimą, reikės vėl nurodyti šį IP. Visų IP adresų sąrašas pateikiamas žemiau. Norėdami sužinoti IP adresą, taip pat galite kreiptis į pagalbos tarnybą. Rekomenduojame pasižymėti šį adresą iš karto, kad vėliau nebeieškotumėte šios informacijos.

Spragtelėkite mygtuką Redaguoti (užrašinės ir geltono pieštuko piktogramą) šalia A lauko, po to atsidarys redagavimo langas. 

Atsidariusiame lange matysite tokius laukelius:


- Subdomenas: pagal nutylėjimą pasirinktas A laukas (nieko nekeiskite).
- Pasirinkti IP: rinkitės „Svetainių talpinimas“.
- Pasirinkti talpinimo planą: pasirinkite domeną, susietą su talpinimo planu.
- Pasirinkti šalį: pasirinkite norimą IP geolokalizaciją.


Patvirtinkite keitimus spragtelėdami mygtuką Patvritinti apačioje. Jūsų IP bus pakeistas, keitimai įsigalios po kelių akimirkų.

Čia pateikiamas IP, susietų su 3 PoP / 17 PoP CDN GeoCache, sąrašas.

Savo paslaugos klasterį sužinosite valdymo sąsajoje spragtelėję "Svetainių talpinimas", po to "FTP" arba talpinimo plano suteikimo el.laiške.

|Klasteris|Be GeoCache|3 PoP (Basic)|17 PoP (Business)|
|002|37.187.184.2|213.186.33.2 ou 213.186.33.68|213.186.33.69|
|003|37.187.184.4|213.186.33.4 ou 213.186.33.84|213.186.33.85|
|005|37.187.184.16|213.186.33.16 ou 213.186.33.94|213.186.33.95|
|006|37.187.184.17|213.186.33.17 ou 213.186.33.96|213.186.33.97|
|007|37.187.184.18|213.186.33.18 ou 213.186.33.104|213.186.33.105|
|010|37.187.184.19|213.186.33.19 ou 213.186.33.106|213.186.33.107|
|011|37.187.184.40|213.186.33.40 ou 213.186.33.150|213.186.33.151|
|012|37.187.184.48|213.186.33.48 ou 213.186.33.152|213.186.33.153|
|013|37.187.184.24|213.186.33.24 ou 213.186.33.82|213.186.33.83|
|014|37.187.184.87|213.186.33.87 ou 213.186.33.168|213.186.33.169|
|015|37.187.184.3|213.186.33.3 ou 213.186.33.170|213.186.33.171|
|017|37.187.184.50|213.186.33.50 ou 213.186.33.172|213.186.33.173|




## 
Reikiamą failą pasieksite per FTP prisijungę prie savo svetainių talpinimo plano.

Tam rekomenduojame naudoti Filezilla klientinę programą.


## GeoCache akceleratoriaus įjungimas ir išjungimas
Prisijungę prie savo talpinimo plano per FTP, jūs pagal nutylėjimą atsiduriate šakniniame kataloge, kuriame galite rasti daugybę failų bei katalogų, taip pat mus dominantį failą .ovhconfig.

Atkurkite šį failą savo kompiuteryje jį parsisiųsdami (du kartus spragtelėkite failą), vėliau atidarykite/redaguokite failą su teksto redaktoriumi. Prireikus pervadinkite failą į ovhconfig.txt.

Failą sudarančiose eilutėse redakuokite environment, pakeiskite „production“ į development (rašymas anglų k.)

Vėl pervadinkite .ovhconfig failą ir įkelkite jį į šakninį FTP katalogą (vietoje esamo katalogo).

Norėdami pakartotinai įjungti GeoCache, atlikite visą operaciją iš naujo, pakeisdami environment nustatymus į production.

![](images/img_1207.jpg){.thumbnail}
Jūs galite taip pat pridėti šią eilutę savo .htaccess faile:

```
Header set Cache-Control "no-cache"
```



