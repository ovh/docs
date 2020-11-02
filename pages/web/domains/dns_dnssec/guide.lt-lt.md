---
deprecated: true
title: Apsaugokite savo domeną su DNSSEC
excerpt: ''
slug: apsaugokite_savo_domena_su_dnssec
section: Security
order: 1
---


## Reikalavimai

- Domenas turi būti registruotas OVH, tai techninis reikalavimas, reikalingas DNS atnaujinimams registre.
- Domenui turi būti priskirtas plėtinys: .fr, .com, .be, .net, .eu, .pl, .re, .pm, .yt, .wf, .tf, .info, .li, .ch, .biz, .de, .sx, .org, .se, .nl, .in, .us, .at, .nu, .la, .ac, .cz, .me, .sh, .io, .uk, .co.uk, .me.uk, .org.uk, taip pat gali būti naujai pasirodęs plėtinys .paris, .club, .xyz, .wiki, .ink bei visi kiti Donuts plėtiniai (ateityje pasirodys daugiau plėtinių).




## Du naudojimo atvejai

- Jūsų domenas yra trečiųjų šalių DNS serveriuose (jūsų dedikuotame serveryje ar kitame serveryje). Šiuo atveju jums reikia naudotis šiuo [gidu](http://guides.ovh.com/dnssec). Gide bus paaiškinta, kaip sugeneruoti raktus, pasirašyti jūsų zoną ir pateikti OVH viešąjį raktą, leidžiantį atnaujinti informaciją apie DS registravimą registre.

- Jūs naudojate OVH bendrus DNS, toks naudojimo atvejis aprašomas [gide](http://gidai.ovh.lt/). Mes skaidriai valdome raktus, jų periodinę rotaciją, DS registravimo atnaujinimą, taip pat zonos parašą.


Jeigu abejojate, galite visa tai patikrinti savo [kliento paskyroje](https://www.ovh.com/manager/web), skiltyje Domenai > DNS valdymas. Jeigu sąraše esantys DNS serveriai atrodo taip: 
nsXX.ovh.net, 
dnsXX.ovh.net, ar Xns200.anycast.me, jūs tikrai naudojate OVH DNS serverius.


## Įjungimas

- Pirmiausia prisijunkite prie savo [kliento paskyros](https://www.ovh.com/manager/web).

- Pasirinkite domeną savo paskyros skiltyje Domenai.



![](images/img_2896.jpg){.thumbnail}

- Įsitikinkite, kad naudojate OVH DNS serverius, skiltyje DNS valdymas.



![](images/img_3966.jpg){.thumbnail}

- Patikrinę DNS, spauskite DNSSEC įjungimo mygtuką.



![](images/img_3967.jpg){.thumbnail}
Iššokančiame lange galėsite patvirtinti operaciją. Jums nurodoma, kad operacija gali užtrukti iki 24 val.

![](images/img_2895.jpg){.thumbnail}

- Atlikę patvirtinimo veiksmą, matysite įjungimo mygtuką.



![](images/img_3968.jpg){.thumbnail}

- Skiltyje vykdomos operacijos patikrinkite, kad operacija prasidėjo.



![](images/img_3969.jpg){.thumbnail}


## Išjungimas
Norėdami išjungti DNSSEC parinktį, pasirinkite savo domeną iš naujo ir spauskite Išjungti mygtuką. Šią operaciją galėsite patvirtinti iššokančiame lange. Atkreipkite dėmesį: jeigu vykdomas aktyvavimas, jūs turėtumėte palaukti, kol jis bus užbaigtas (mygtukas bus pilkas), kad jūsų domeno DNSSEC konfigūracija neliktų tarpinėje būsenoje.

![Išjungimas](images/img_3970.jpg){.thumbnail}


## 1 būdas: naudojant Firefox ar Chrome
Jūs galite įdiegti Firefox plėtinį, leidžiantį patikrinti, ar jūsų lankomi tinklalapiai yra apsaugoti DNSSEC, ir jeigu taip, koks patvirtinimo rezultatas. Šis plėtinys [prieinamas čia](http://www.dnssec-validator.cz/). Įdiegę pamatysite raktą kairėje naršyklės adreso juostos pusėje. Domenų, kurių raktas yra žalias, svetainės IP adresas patvirtintas DNSSEC.

![DNSSEC patvirtinimo Firefox modulis: svetainė yra saugi](images/img_119.jpg){.thumbnail}
Jeigu raktas oranžinės spalvos, vadinasi, jūsų IPT atvirkštinis DNS serveris nėra suderinamas su DNSSEC. Tai ne problema: galite naudoti alternatyvius DNS serverius norėdami atlikti tokį patvirtinimą. Firefox modulyje jums siūlomas sąrašas, prie kurio galite prieiti paspaudę dešiniuoju pelės klavišu ant rakto, vėliau pasirinkdami "Preferences". 

Šio plėtinio alpha versija taip pat galima su Chrome, [šiame puslapyje](https://chrome.google.com/webstore/detail/hpmbmjbcmglolhjdcbicfdhmgmcoeknm).


## 2 būdas: naudojant konsolę, prieš tai paskelbus kelią iki rakto
Norėdami patikrinti, ar DNSSEC teisingai sukonfigūruotas domenui, galite naudoti dig įrankį. Siekiant patvirtinti DNSSEC, reikia žinoti kelią iki viešojo rakto (šiuo raktu pasirašomas raktas, kuriuo pasirašoma root "." zona). Šis raktas prieinamas internete. Kad viską supaprastintume, mes atkuriame raktą kaip nurodyta žemiau, jūs galite jį nukopijuoti tokį, koks jis yra faile /etc/trusted-key.key (viskas turi būti vienoje eilutėje)
:


```
. 172717 IN DNSKEY 257 3 8 AwEAAagAIKlVZrpC6Ia7gEzahOR+9W29euxhJhVVLOyQbSEW0O8gcCjF
FVQUTf6v58fLjwBd0YI0EzrAcQqBGCzh/RStIoO8g0NfnfL2MTJRkxoX
bfDaUeVPQuYEhg37NZWAJQ9VnMVDxP/VHL496M/QZxkjf5/Efucp2gaD
X6RS6CXpoY68LsvPVjR0ZSwzz1apAzvN9dlzEheX7ICJBBtuA6G3LQpz
W5hOA2hzCTMjJPJ8LbqF6dsV6DoBQzgul0sGIcGOYl7OyQdXfZ57relS
Qageu+ipAdTTJ25AsRTAoub8ONGcLmqrAmRLKBP1dfwhYB4N7knNnulq
QxA+Uk1ihz0=
```


Atkreipkite dėmesį, kad neturėtumėte kopijuoti rakto nepatikrinę jo autentiškumo, kadangi DNSSEC, kaip ir bet kurioje kriptografinėje sistemoje, naudojama tikrinimo grandinė ir šakninių elementų patikimumas yra pagrindas. Oficiali platinimo vieta yra [IANA](https://data.iana.org/root-anchors/), failas pasirašytas naudojant GPG.
IP patvirtinimo Eurid komanda:

```
$ dig +sigchase www.eurid.eu
;; RRset to chase:
www.eurid.eu. 544 IN CNAME eurid.eu.
[...]
;; WE HAVE MATERIAL, WE NOW DO VALIDATION
;; VERIFYING DS RRset for eu. with DNSKEY:55231: success
;; OK We found DNSKEY (or more) to validate the RRset
;; Ok, find a Trusted Key in the DNSKEY RRset: 19036
;; VERIFYING DNSKEY RRset for . with DNSKEY:19036: success

;; Ok this DNSKEY is a Trusted Key, DNSSEC validation is ok: SUCCESS
```


Paskutinė eilutė nurodo, kad patvirtinimas sėkmingas, kadangi žinomo root zonos viešojo rakto patikimumo grandinė yra atsekama ir gera.

Jei matysite toliau pateiktą pranešimą, vadinasi, dig nerado root rakto /etc/trusted-key.key:

```
$ dig +sigchase www.eurid.eu
No trusted keys present
```




## 3 būdas: konsolėje, iš anksto nenurodant root rakto
Jei negalite nurodyti rakto kaip ankstesniame pavyzdyje, galite patvirtinimui naudoti trečiųjų šalių serverius. Kai kurie rekursiniai DNS serveriai tvirtina DNSSEC ir yra prieinami viešai. Tolimesniame pavyzdyje naudosime [DNS-OARC](https://www.dns-oarc.net/oarc/services/odvr) serverius ir juose tvirtinsime www.eurid.eu IP:


```
$ dig +dnssec www.eurid.eu @149.20.64.21

; <<>> DiG 9.7.3 <<>> +dnssec www.eurid.eu @149.20.64.21
;; global options: +cmd
;; Got answer:
;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 26117
;; flags: qr rd ra ad; QUERY: 1, ANSWER: 6, AUTHORITY: 7, ADDITIONAL: 16
[...]
```


Atsakyme yra žyma ad, nurodanti, jog rekursinis serveris gavo ir patvirtino atsakymą.

