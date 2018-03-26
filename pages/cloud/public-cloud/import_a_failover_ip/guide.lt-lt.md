---
title: IP Failover importavimas
excerpt: IP Failover importavimas
slug: ip_failover_importavimas
legacy_guide_number: g1883
---


## 
Jeigu jums reikia konfigūruoti IP Failover adresą virtualiose mašinose dėl bent vienos iš šių priežasčių:

- jūs turite keletą interneto svetainių toje pačioje virtualioje mašinoje; 
- jūs talpinate tarptautinius projektus;
- jūs norite perkelti savo veiklą iš dedikuoto serverio į Public Cloud virtualią mašiną;

OVH siūlo galimybę importuoti IP Failover adresą, susietą su kita OVH paslauga.

Šiame gide paaiškinama, kaip migruoti IP Failover adresą į jūsų OVH Public Cloud projektą.


## Reikalavimai

- Turėti IP Failover adresą, susietą su dedikuotu serveriu. Pavyzdžiui, paslaugų valdymo sąsajos Dedicated skiltyje yra prieinamas IP adresas:



![](images/img_2817.jpg){.thumbnail}


## į Public Cloud

- Prisijunkite prie OVH valdymo sąsajos Cloud skilties;
- Spragtelėkite Importuoti IP Failover:



![](images/img_2818.jpg){.thumbnail}

- Matysite langą:



![](images/img_2819.jpg){.thumbnail}

- Pažymėkite pasirinktą IP Failover ir spauskite Patvirtinti;
- Importavimas užtruks keletą sekundžių.



![](images/img_3810.jpg){.thumbnail}

- IP adresas yra importuotas.



![](images/img_3811.jpg){.thumbnail}

- Spragtelėkite simbolį ir pasirinkite virtualų serverį, kuriam bus priskirtas IP adresas:



![](images/img_3812.jpg){.thumbnail}

- Pažymėkite norimą serverį:



![](images/img_3813.jpg){.thumbnail}

- Patvirtinkite paspaudę Priskirti (Attach);
- IP adreaas yra priskirtas.



![](images/img_3814.jpg){.thumbnail}


## į dedikuotą serverį
Jūs galite pakartotinai migruoti savo IP Failover adresą į dedikuotą serverį.

Šiam tikslui iš naujo prisijunkite prie OVH valdymo sąsajos Dedicated skilties IP dalies ir spragtelėkite sraigtelį, esantį IP Failover adreso dešinėje:

![](images/img_3300.jpg){.thumbnail}
Po to tereikia perkelti IP adresą į dedikuotą serverį.


## 
[Grįžti į Cloud gidų turinį]({legacy}1785)

