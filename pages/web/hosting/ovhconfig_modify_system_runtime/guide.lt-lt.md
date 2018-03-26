---
title: Svetainių talpinimo plano vykdymo aplinkos keitimas
excerpt: Svetainių talpinimo plano vykdymo aplinkos keitimas
id: '2149'
slug: svetainiu_talpinimo_plano_vykdymo_aplinkos_keitimas
legacy_guide_number: g2149
---


## Kaip keisti vykdymo aplinką?

## OVH valdymo sąsajoje
Pasirinkite savo svetainių talpinimo planą ir spauskite Keisti konfigūraciją.

![](images/img_4127.jpg){.thumbnail}
Jūs turite pakeisti esamą konfigūraciją.

![](images/img_4128.jpg){.thumbnail}
Atsidariusiame sąraše pasirinkite vieną iš žemiau aprašytų aplinkų.

![](images/img_4129.jpg){.thumbnail}

## Naudojant .ovhconfig failą
Atnaujinimas atliekamas jūsų svetainių talpinimo plano šakninio katalogo .ovhconfig faile.
Taigi keitimai atliekami arba valdymo sąsajoje, arba tiesiai .ovhconfig faile.

Daugiau informacijos apie .ovhconfig rasite čia: []({legacy}1207)


## Įvairios vykdymo aplinkos

## Legacy aplinka
Tai tradicinė aplinka svetainių talpinimo planuose. Anksčiau tai buvo vienintelė prieinama konfigūracija.


- Ši aplinka nuolat palaikoma. Tačiau rekomenduojama pereiti prie Stable aplinkos, jei norite naudotis stabiliais automatiniais atnaujinimais. Legacy aplinka gali būti naudinga ankstesnėms svetainėms, naudojančioms senas PHP versijas, arba jau nebepalaikomoms programoms (pavyzdžiui, ankstesnei mysql bazių jungčiai).


Jūs turite pridėti šią eilutę prie savo .ovhconfig* failo:


```
container.image=legacy
```



## Stable aplinka
Ši aplinka jums leidžia naudotis stabiliais automatiniais atnaujinimais.

Jūs turite pridėti šią eilutę prie savo .ovhconfig* failo:


```
container.image=stable
```



## Jessie.i386 aplinka
Ši aplinka leidžia naudotis Debian Jessie programinės įrangos lygmeniu.


- Būtent ši versija siūloma šiuo metu, jei renkatės Stable vykdymo aplinką.


Jūs turite pridėti šią eilutę prie savo .ovhconfig* failo:


```
container.image=jessie.i386
```


Rinktis Jessie.i386 vietoje Stable nerekomenduojama, tačiau toks pasirinkimas leidžia užtikrinti, kad Stable aplinkai pakeitus atvaizdą, atnaujinimas nepaveiks svetainės. Toks atvejis galimas tik jeigu svetainėje naudojamos išorinės programos (ne php skriptai).

## Testing aplinka
Ši aplinka leidžia naudotis patobulinimais, pataisymais, naujais atvaizdais, naujomis technologijomis, tačiau be garantijų.

Jūs turite pridėti šią eilutę prie savo .ovhconfig* failo:


```
container.image=testing
```


*Tai .ovhconfig failas, esantis jūsų svetainių talpinimo plano šakniniame kataloge "/".


## Atvaizdų skirtumai
|Aplinkos|legacy|stable|testing|jessie.i386|
|---|---|---|---|
|Aplinkos|legacy|stable|testing|jessie.i386|
|Susijęs atvaizdas|legacy|jessie.i386|jessie.i386|jessie.i386|
|Minimali PHP versija|4.4|5.3|5.3|5.3|
|Openssl|0.9.8o|1.0.1k (suderinama su TLS1.2)|1.0.1k (suderinama su TLS1.2)|1.0.1k (suderinama su TLS1.2)|
|Plėtinys php imagick||x|x|x|
|Plėtinys php memcache|x|x|x|x|
|Plėtinys php memcached||x|x|x|
|Plėtinys php mongo (PHP 5.4, 5.5, 5.6)||x|x|x|
|Plėtinys mysqlnd (en utf-8 uniquement)||x|x|x|
|Plėtinys redis||x|x|x|
|Opcache**|x|x|x|x|
|Python|2.6|2.7 et 3.4|2.7 et 3.4|2.7 et 3.4|
|Ruby|1.8.7|2.1.5|2.1.5|2.1.5|
|Rails|2.3.5|4.1.8|4.1.8|4.1.8|
|Perl|5.10|5.20|5.20|5.20|
|git|1.7.2.5|2.1.4|2.1.4|2.1.4|


**Būtina įjungti PHP-FPM: []({legacy}1175)


## Ar vykdymo aplinkos keitimas paveiks visą mano svetainių talpinimo planą?
Jūsų vykdymo aplinkos keitimas turės įtakos viso svetainių talpinimo plano veikimui.
Todėl vienu metu neleidžiama naudoti dviejų skirtingų vykdymo aplinkų.


## Kokiame plane galima keisti vykdymo aplinką?
Vykdymo aplinkos keitimas galimas visuose OVH svetainių talpinimo planuose.


## Ar keičiant aplinką išsaugomos PHP sesijos?
Pakeitus vykdymo aplinką PHP sesijos inicijuojamos iš naujo.

