---
title: Kaip migruoti serverius iš vRack 1.0 į vRack 2.0
excerpt: Kaip migruoti serverius iš vRack 1.0 į vRack 2.0
slug: kaip_migruoti_serverius_is_vrack_10_i_vrack_20
legacy_guide_number: g1994
---


## 
Šiame gide paaiškinsime, kaip migruoti iš vrack 1.0 į vrack 2.0.


## 
Norėdami atlikti šią operaciją, jūs turite:

- Turėti prie vRack 1.0 prijungtus serverius su dviem tinklo kortomis (serveriai su profesionalaus naudojimo parinktimi, išskyrus SP);
- Turėti vrack 1.0 paslaugą.




## 
Norint migruoti serverius iš vRack 1.0 į vRack 2.0 reikia atlikti šiuos veiksmus:

- Nustatyti, kokios tinklo kortos yra papildomos (antros) kiekviename serveryje;
- Sukurti vRack 2.0;
- Laikinai sukurti IP adresą vRack 2.0 sąsajoje;
- Išjungti vRack 1.0 ir iš naujo sukonfigūruoti vRack 2.0.




## vRack 2.0 sąsajos nustatymas

## Norint prijungti serverį į vRack 2.0, jums būtina turėti serverį su dviem tinklo kortomis.
vRack 2.0 sąsajos identifikavimas serveryje:

Norint sužinoti tinklo sąsajas Linux OS ar režime rescue pro:

Peržiūrėti sąsajas:


```
ifconfig -a | grep eth | awk '{print $1}'
```


Pavyzdys:


```
#ifconfig -a | grep eth | awk '{print $1}'
eth0
eth1
```


eth0 yra jūsų pagrindinė sąsaja, jūs galite peržiūrėti savo ip su ifconfig

tuomet atlikti:


```
#ifconfig eth1 up
#ethtool eth1 | grep "Link detected"
Link detected: yes
```


Jeigu nematote "Link detected", tai nėra gerai, atlikite:


```
#ifconfig eth1 down
```


atlikite tą patį su kitais.

Mūsų pavyzdyje naudojame eth1.


## vRack 2.0 sukūrimas
Sukurkite vRack 2.0 pagal vRack sukūrimo gidą.


## vRack 1.0 pridėjimas į vRack 2.0
Norėdami migruoti vRack 1.0 į vRack 2.0, įtraukite vRack 1.0 į vRack 2.0.

Prisijunkite prie valdymo sąsajos:
https://www.ovh.com/manager/

Ir kairėje pasirinkite vRack 2.0.

Pamatysite:

![](images/img_3295.jpg){.thumbnail}
Kairiajame vertikaliame stulpelyje tarp paslaugų pasirinkite vRack 1.0.

Tuomet pasirinkite "Pridėti".


## Paslaugų įtraukimas į 2.0
Tam, kad užbaigtumėte migravimą iš vRack 1.0 į vRack 1.5, pridėkite serverius į vRack 1.5. Šiuos veiksmus galėsite atlikti prisijungę prie valdymo sąsajos: https://www.ovh.com/manager/dedicated

Tuomet kairiame meniu pasirinkite vRack 2.0.

Pamatysite:

![](images/img_3297.jpg){.thumbnail}
Pasirinkite serverį turimų paslaugų stulpelyje kairėje.

Tuomet paspauskite "Pridėti".


## Laikinas IP konfigūravimas vRack 2.0 valdymo sąsajoje

## Pirmiausiai laikinai sukonfigūruokite vRack 2.0, kad patikrintumėte vRack veikimą.
Kiekvienam serveriui vRack sąsajoje pridėkite atskirą privatų IP: 

Pavyzdžiui:
(serveryje su Debian eth1 vRack 2.0 sąsajai bloką 10.0.0.0/24)

Konfigūracijos byloje:

/etc/network/interfaces

pridėkite: 

```
auto eth1
iface eth1 inet static
address 10.0.0.1
netmask 255.255.255.0
broadcast 10.0.0.255
```


Paleiskite savo tinklo tarnybą:


```
service networking restart
```


Visoms kitoms OS skaitykite gido VrackInfrastructureServer skyrių "Privatūs IP", skirtą jūsų OS.

## Svarbu:
Patikrinkite, ar serveriuose sukonfigūruoti IP atsako į ping užklausas.
Jeigu visi serveriai atsako į ping, tuomet pereikite prie kito žingsnio.

Jeigu ne, atlikite šia komandą:


```
arping -I INTERFACE_VRACK_2.0 1.1.1.1
```

INTERFACE_VRACK_2.0: pakeiskite jūsų vRack 2.0 sąsajos pavadinimu, mūsų atveju tai eth1.


## vRack 1.0 išjungimas ir vRack 2.0 konfigūravimas iš naujo.

## Svarbu:
Galimas trumpas ryšio sutrikimas, kol jūsų IP bus perkeliami iš 1.0 į 2.0 sąsają.
Pašalinkite laikinas vRack 2.0 sąsajos ir vRack 1.0 sąsajos konfigūracijas, 

perkraukite sąsajas. 

Tuomet pridėkite savo vRack 1.0 IP adresą į vRack 2.0 sąsają. 

Debian pavyzdys:

Konfigūracijos ištrauka prieš keitimą:


```
auto eth0.XXXX
iface eth0.XXXX inet static
address 172.16.0.1
netmask 255.240.0.0
post-up ip r a 172.16.0.0/12 via 172.31.255.254 dev eth0.XXXX ;

auto eth1
iface eth1 inet static
address 10.0.0.1
netmask 255.255.255.0
broadcast 10.0.0.255
```


Konfigūracijos ištrauka po keitimo:

```
auto eth1
iface eth1 inet static
address 172.16.0.1
netmask 255.240.0.0
broadcast 255.240.0.0
```


paleiskite tinklo sąsajas iš naujo.

Visoms kitoms OS skaitykite atitinkamą gido VrackInfrastructureServer skyrių, skirtą jūsų OS.

Tinklo sąsajos turi pradėti veikti iš karto.


## Viešojo IP bloko atvejis

## Svarbu:
Nesivadovaukite šiuo skyriumi, jeigu tai ACE apkrovos balansavimui ar ASA ugniasienei skirtas IP blokas.

## Jeigu jūs turite viešą IP bloką ir jūsų serveriai yra suderinami su vRack 2.0, jūs galite įtraukti savo viešą bloką į vRack 2.0:
Tam prisijunkite prie valdymo sąsajos:
https://www.ovh.com/manager/dedicated

Ir meniu kairėje pasirinkite viešą bloką.

Tuomet pamatysite:

![](images/img_3297.jpg){.thumbnail}

## Pasirinkite serverį turimų paslaugų stulpelyje kairėje.
Tuomet paspauskite "Pridėti".

## Svarbu:
Įvykdžius šią operaciją, vienai minutei bus prarastas ryšys.


## vRack 1.0 pašalinimas

## Svarbu:
Neatlikite šių veiksmų, jeigu turite paslaugų, kurios veikia tik su vRack 1.0, pavyzdžiui:

Senas serveris SP, suderinamas su vRack 1.0, jei naudojamas:
Cisco ACE apkrovos balansavimas;
Cisco ASA ugniasienė, skirta vRack.

Jeigu turite tokią įrangą, jūs negalite atjungti vRack 1.0.
Kai tarp serverių atsirado ryšys per vRack 2.0, jūs galite pašalinti serverius iš vRack 1.0.

Prisijunkite prie valdymo sąsajos:

https://www.ovh.com/manager

Pagrindiniame puslapyje:

Pasirinkite vRack 1.0
Tuomet pasirinkite Šalinti serverį iš vRack.
Šalinkite serverį pasirinkdami jį iš vRack esančių serverių stulpelio ir paspausdami ">>"

Visiems serveriams pradėjus veikti vRack 2.0 ir juos pašalinus iš vRack 1.0, susisiekite su pagalba, kad vRack 1.0 būtų visiškai pašalintas.

