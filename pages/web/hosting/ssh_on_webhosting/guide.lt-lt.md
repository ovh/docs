---
deprecated: true
title: 'Svetainių talpinimas: SSH prieiga'
excerpt: 'Svetainių talpinimas: SSH prieiga'
id: '1962'
slug: svetainiu_talpinimas_ssh_prieiga
legacy_guide_number: g1962
---


## Kas yra SSH ir kaip juo naudotis?
SSH prieigą galima naudoti OVH svetainių talpinimo planuose, pradedant [PRO](https://www.ovh.lt/svetainiu-talpinimas/svetainiu-talpinimas-pro.xml).

DĖMESIO: prieiga galima tik naudojant pagrindinę FTP paskyrą. Papildomos FTP paskyros neturi SSH prieigos.

Naudodami SSH prieigą jūs galite atlikti operacijas su failais (kaip FTP).

Plačiau apie SSH protokolą skaitykite [čia](https://en.wikipedia.org/wiki/Secure_Shell).


## Reikalavimai

- SSH parinktis yra galima pradedant planu [PRO](https://www.ovh.lt/svetainiu-talpinimas/svetainiu-talpinimas-pro.xml).

- Programėlė SSH prieigai?

- Turi būti atidarytas 22 portas jūsų namų interneto ugniasienėje (Firewall) ir maršrutizatoriuje (Box).




## SSH įjungimas / išjungimas naudotojui
Jūs galite valdyti savo SSH prisijungimus valdymo sąsajoje. Tereikia spragtelėti svetainių talpinimo plano domeną kairiajame stulpelyje ir pereiti prie FTP - SSH.

Sukūrus naujus FTP naudotojus, SSH jungtis bus taip pat įjungta tam pačiam naudotojui.

![](images/img_3945.jpg){.thumbnail}
Jūs galite išjungti SSH prisijungimą naudotojui paspaudę krumpiaratį, esantį jūsų identifikatoriaus kairėje, po to spauskite Keisti.

Keitimas įsigalios po kelių minučių.

![](images/img_3946.jpg){.thumbnail}


## Įvykdykite komandą
Linux OS :

-  KDE: Atidarykite pagrindinį meniu (pagal nutylėjimą jūsų ekrano apačioje kairėje) ir naujame paieškos lauke įveskite "konsole", po to spauskite pirmąjį paieškos rezultatą.

Mac OS :
- Spauskite savo darbalaukyje esantį standųjį diską, pažymėkite programų katalogą, po to naudotojo katalogą ir paleiskite programą "Terminal"

Windows:


- Windows nėra įdiegto SSH kliento, todėl jums būtina atsisiųsti programėlę. Viena labiausiai žinomų yra [Putty](http://www.putty.org/).




## Prisijungimas per SSH
Mac ir Linux OS:

- Komandinėje eilutėje įveskite SSH jusuFTPprisijungimovardas@jusuFtpserveris


Plačiau apie FTP slaptažodį skaitykite [šiame gide](https://www.ovh.lt/g1909.slaptazodziu-valdymas).

![](images/img_3093.jpg){.thumbnail}
Windows OS :
-Apie tai, kaip naudoti SSH Windows OS, skaitykite [šiame gide](https://www.ovh.com/fr/g1964.mutualise_utilisation_de_putty_sur_windows).


## Pagrindinių komandų sąrašas
Pakanka pakeisti arg į norimą aplanką, su kuriuo norite atlikti operaciją.

|Komanda|Reikšmė|Paaiškinimas|
|pwd|print working directory|parodyti darbinį aplanką|
|cd arg|change directory|pakeisti darbinį aplanką; arg atitinka naują aplanką. Komanda cd be argumento arg nukelia į home.|
|cd ..|change directory to ..|perkelti į aukštesnį aplanką aplankų medyje.|
|ls arg|list|Parodyti aplanko arg turinį. Be arg, ls parodomas darbinės direktorijos turinys.|
|ll arg|long list|Išsamios informacijos apie arg parodymas.|
|ls -a arg|list all|parodyti visas arg bylas, ir tuos, kurie prasideda .., jeigu tai aplankas. ls parinktys gali būti kombinuojamos: ls -al.|
|chmod rights arg|change rights|Pakeisti bylos arg teises.|
|mkdir arg|make directory|Sukurti aplanką arg.|
|rmdir arg|remove directory|Ištrinti aplanką arg, jeigu jis yra tuščias.|
|rm arg|remove|pašalinti bylą arg.|
|rm -r arg|remove recursively|pašalinti bylas ir kituose aplankuose esančiuose arg.|
|mv arg1 arg2|move|Pervadinti arba perkelti arg1 į arg2.|
|touch arg|touch|Sukurti tuščią bylą pavadinimu arg jeigu ji neegzistuoja, jeigu tokia byla yra, tuomet atnaujinti jos modifikavimo datą.|




## Paleisti skriptą naudojant nurodytą PHP versiją
Norėdami paleisti skriptą per SSH naudojant norimą PHP versiją, reikia naudoti šias komandas.

|Komanda|Versija|
|php.ORIG.4 (cgi)|4.4.9|
|php.ORIG.5_2 (cgi)|5.2.17|
|php.ORIG.5_3 (cgi-fcgi)|5.3.29|
|/usr/local/php5.3/bin/php (cli)|5.3.29|
|php.ORIG.5_4 (cgi-fcgi)|5.4.38|
|/usr/local/php5.4/bin/php (cli)|5.4.38|
|/usr/local/php5.5/bin/php (cli)|5.5.22|
|/usr/local/php5.6/bin/php (cli)|5.6.6|


Pavyzdžiui, jeigu norite paleisti skriptą skriptas.php naudojant 5.3 PHP versiją, jums reikia įvesti šią komandą: 
```
php.ORIG.5_3 myScript.php
```


Prieš skripto pavadinimą būtina nurodyti jo vietą.
Pavyzdžiui, jūsų failas skriptas.php yra aplanke /www/, ir jūs jį norite įvykdyti php 5.3 aplinkoje, tuomet jums būtina įvykdyti šią komandą:

```
php.ORIG.5_3 www/skriptas.php
arba
php.ORIG.5_3 /www/skriptas.php
```




## Mūsų viešieji prieglobos serverių raktai (patvirtinami pirmo prisijungimo per SSH metu).
Pirmą kartą jungiantis prie serverio jums reikės patvirtinti viešąjį raktą.

