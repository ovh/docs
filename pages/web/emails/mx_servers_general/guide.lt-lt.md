---
title: 'Svetainių talpinimas: bendrai apie MX serverius'
excerpt: 'Svetainių talpinimas: bendrai apie MX serverius'
slug: svetainiu_talpinimas_bendrai_apie_mx_serverius
legacy_guide_number: g2003
---


## Kas yra MX serveris?
MX serveriai - tai el. pašto serveriai, kuriuos apibrėžiate savo domeno DNS zonoje. Tai serveriai, kurie gauna domeno el. laiškus.

Pavyzdžiui:

- Jei norite gauti el. laiškus OVH talpinamu el. pašto adresu monadresse@mypersonaldomain.ovh, jums reikės užpildyti domeno naudojamos DNS zonos (arba OVH) MX laukus.


Taip galėsite susieti savo domeną su el. pašto serveriais.

Galima naudoti įvairias konfigūracijas. Šiame gide apžvelgiami tik pagrindiniai modeliai, taip pat pateikiami pažangaus naudojimo pavyzdžiai. 

Domeno, DNS serverių ir DNS zonos schema atrodytų taip:

![](images/img_3414.jpg){.thumbnail}


## Reikalavimai

- Prieiga prie [kliento valdymo sąsajos](https://www.ovh.com/manager/web/login/).

Jei nebeturite prieigos prie savo kliento paskyros, vadovaukitės [šiuo gidu](https://www.ovh.lt/g1909.slaptazodziu-valdymas).


- Pageidavimas naudoti OVH el. pašto paslaugas.




## Kur konfigūruojami domeno MX serveriai?
Visų pirma turite žinoti, kur įregistruotas jūsų domenas ir kokie DNS serveriai naudojami.


- Domeno DNS serverius galite rinktis tik savo domeno registratoriaus paskyroje.
- Būtent šiuose jūsų domeno naudojamuose DNS serveriuose yra jūsų domeno DNS zona.
- Būtent šioje DNS zonoje jūs galėsite pakeisti MX įrašus, apibrėžiančius domeno el. pašto serverius.


Pateikiame OVH DNS zonos pavyzdį. Viduryje pateikiami įvairūs laukų tipai (NS / MX /A / CNAME / TXT). 
Dešinėje - paskirtis.

||NS|ns109.ovh.net.|
||NS|dns109.ovh.net.|
||MX 1|mx1.mail.ovh.net.|
||MX 5|mx2.mail.ovh.net.|
||MX 10|mx3.mail.ovh.net.|
||A|213.186.33.18|
||TXT|"v=spf1 include:mx.ovh.com ~all"|
|_autodiscover._tcp|SRV|0 0 443 mailconfig.ovh.net.|
|_imaps._tcp|SRV|0 0 993 ssl0.ovh.net.|
|_submission._tcp|SRV|0 0 465 ssl0.ovh.net.|
|autoconfig|CNAME|mailconfig.ovh.net.|
|ftp|CNAME|ftp.cluster017.ovh.net.|
|imap|CNAME|ssl0.ovh.net.|
|mail|CNAME|ssl0.ovh.net.|
|pop3|CNAME|ssl0.ovh.net.|
|smtp|CNAME|ssl0.ovh.net.|
|www|A|213.186.33.18|


Taigi šioje DNS zonoje, domeno el. pašto serveriai (MX) yra:

```
MX 1 mx1.mail.ovh.net.
MX 5 mx2.mail.ovh.net.
MX 10 mx3.mail.ovh.net.
```


Skaičius MX dešinėje nurodo pirmumą.

## Svarbu:
Šiuo metu ankstesni MX serveriai tebeveikia el. pašto paslaugoms, sukurtoms iki 2016-05-23, tačiau siekdami užtikrinti atnaujinimą rekomenduojame naudoti aukčiau nurodytus MX serverius.
Taigi jūs turite pakeisti būtent šiuos laukus, jei norite pakeisti el. pašto serverį.
Dėmesio: Po atliktų keitimų DNS zonoje, naujų įrašų paskelbimas gali užtrukti iki 24 val., prieš įsigaliojant keitimams.


## Naudojatės OVH DNS zona
Šioje situacijoje rekomenduojame vadovautis gidu: []({legacy}2012).


## Neturite OVH DNS zonos
Šioje situacijoje rekomenduojame vadovautis gidu: []({legacy}2011).

