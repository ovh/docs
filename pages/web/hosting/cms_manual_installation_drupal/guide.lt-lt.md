---
deprecated: true
title: 'TVS, Drupal diegimas rankiniu būdu'
excerpt: Kaip rankiniu būdu diegti Drupal?
id: '1976'
slug: tvs_drupal_diegimas_rankiniu_budu
legacy_guide_number: g1976
---


## 1 dalis: pasiruošimas diegimui
Reikalingi įrankiai

Drupal diegimui į talpinimo planą reikės FTP programos, pavyzdžiui, FileZilla (nemokamai).

## Diegimui reikalingi prisijungimo parametrai
Įsitikinkite, kad žinote teisingą OVH kliento ID ir paskyros slaptažodį, nes gali prireikti prisijungti prie [valdymo sąsajos](https://www.ovh.com/manager/web/login/).


- Reikės FTP prisijungimo vardo ir slaptažodžio, kad galėtumėte prisijungti prie failų saugyklos. 

- Taip pat reikės SQL duomenų bazės, leidžiančios prisijungti prie duomenų bazės, identifikacinių duomenų ir slaptažodžio. Šiame gide pateikiama informacija, kaip sužinoti SQL prisijungimo duomenis:[]({legacy}1909)




## 2 dalis: diegimo failų parsiuntimas

- Atidarykite kūrėjo svetainę: [Drupal](http://drupal.org/).



![](images/img_3234.jpg){.thumbnail}
Kūrėjo svetainėje rasite nuorodą į naujausią stabilią TVS versiją.

Šiame pavyzdyje naudojama 7.41 versija.
Paprastai parsiųstas failas bus suarchyvuotas (zip), todėl prieš įkeliant failus, juos reikės išarchyvuoti (išskleisti). Visą reikiamą pagalbą rasite internete.


## 3 dalis: failų įkėlimas per FTP

- Failų katalogo išarchyvavimas


Atidarykite katalogą, kuriame išsaugotas archyvas.

Dešiniuoju pelės mygtuku spragtelėkite katalogą ir pasirinkite Išarchyvuoti viską....

Nurodykite paskirtį ir išarchyvuokite failus naujame kataloge.

Jeigu reikia pagalbos išarchyvuojant failus, skaitykite internete pateikiamus gidus.

Naujai sukurtas katalogas bus pavadintas Drupal-xxx (xxx nurodo versijos numerį).

![](images/img_3233.jpg){.thumbnail}
Prisijungimas prie svetainių talpinimo per FTP

Norėdami įkelti Drupal failus į talpinimo planą, visų pirma turite prisijungti per FTP.

Esame paruošę atskirą prisijungimo prie svetainių talpinimo saugyklos per FTP gidą:[]({legacy}1374)
Failų perkėlimas per FTP

Sekite šiuos žingsnius, kad įkeltumėte savo failus per FTP.

## 1 žingsnis
Kai prisijungsite su FileZilla:

Skyriuje Local Site, kuris atitinka jūsų kompiuterio failus, atidarykite išskleistą Drupal-xxx katalogą, kuriame yra TVS failai.

Skyriuje Distant Site, kuris atitinka OVH saugyklą, atidarykite katalogą www. Į šį katalogą reikės įkelti TVS failus.
Jeigu tokio katalogo nėra, galite jį sukurti.
Failus būtinai kelkite į www katalogą, kad diegimo sistema būtų pasiekiama per pagrindinį domeną.

## 2 žingsnis
Kai atverti reikiami katalogai:

Skyriuje Local Site matysite visus Drupal TVS failus.

Spragtelėkite bet kurį failą ir spauskite CTRL+A, kad pažymėtumėte visus failus.

Tuomet pele nuvilkite failus į Distant Site, www kataloge.

![](images/img_3199.jpg){.thumbnail}
Gali būti, kad katalogas www nebus tuščias. Nebūtina trinti ten esančių failų. Šį atvejį apžvelgsime vėliau.

## 3 žingsnis
Bus vykdomas failų perkėlimas.

Palaukite, kol failai bus perkelti į FTP saugyklą. Tai gali užtrukti kelias minutes. 

Kai perkėlimas bus baigtas, patikrinkite, ar visi failai buvo perkelti.

Failų įkėlimo per FTP dalis baigta.

![](images/img_3200.jpg){.thumbnail}


## 1 žingsnis - Drupal diegimas
Įveskite savo domeną atsidariusiame naršyklės lange.

Pateksite į puslapį

Pažymėkite Standard
Install with commonly used features pre-configured. ir spragtelėkite Save and continue, jei norite tęsti.

![](images/img_3219.jpg){.thumbnail}


## 2 etapas - kalbos pasirinkimas
Pasirinkite diegimo kalbą „English“ ir spauskite „Save and continue“.

![](images/img_3218.jpg){.thumbnail}


## 3 žingsnis - prisijungimas prie duomenų bazės
3 žingsnis

Gaukite visus duomenų bazės identifikacinius duomenis(pagalbą rasite [čia]({legacy}1374)).

Įveskite reikiamą duomenų bazės informaciją:

Pažymėkite MySQL, MariaDB ar pan.

Database name: Duomenų bazės pavadinimas, nurodytas kuriant bazę kliento paskyroje.

Username: Sutampa su duomenų bazės pavadinimu.

Database password: Slaptažodis atsiunčiamas el. paštu, po duomenų bazės sukūrimo, jį galima keisti valdymo sąsajoje.

Spragtelėkite ADVANCED OPTIONS.

![](images/img_3202.jpg){.thumbnail}

- Database host: Duomenų bazės serverio pavadinimas, nurodytas duomenų bazės sukūrimo laiške arba kliento sąsajoje. Pavadinimo galūnė paprastai .mysql.db.

Database port: Palikite tuščią.

Table prefix: Naudinga naudoti, kai su viena duomenų baze susiejamos kelios Drupal svetainės. Kiekvienai svetainei reikia nurodyti atskirą prefiksą. Jei abejojate, palikite tuščią.


![](images/img_3203.jpg){.thumbnail}
Svarbu: Duomenų bazės informacija nėra siunčiama automatiškai, po talpinimo plano įdiegimo. Informacija siunčiama tik per valdymo sąsają sukūrus duomenų bazę.
Spragtelėkite Save and continue, kad patvirtintumėte duomenų bazės informaciją.


## 4 žingsnis - Diegimo eiga
Jei pateikėte teisingą duomenų bazės informaciją, diegimas paleidžiamas. Priešingu atveju, reikės ištaisyti pateiktus duomenis.


- Jums tereikia palaukti, kol bus baigtas diegimas.



![](images/img_3190.jpg){.thumbnail}


## 5 žingsnis - Drupal administravimo konfigūravimas
Jūsų Drupal TVS administravimo informacija:

Site deprecated: true
title: Įveskite domeno pavadinimą.

Site email: Įveskite adresą, kurį naudos jūsų svetainė pranešimų siuntimui jūsų abonentams.

Username: Nurodykite jūsų svetainės administratoriaus paskyros pavadinimą. Šiame pavyzdyje naudojame admin. 

Email: Įveskite veikiantį el. pašto adresą, kuris bus susietas su jūsų administratoriaus paskyra.

Password: Įveskite administratoriaus paskyros slaptažodį.

Confirm password: Pakartotinai įveskite slaptažodį.

Eikite žemiau.

![](images/img_3206.jpg){.thumbnail}

- Default Country: Pasirinkite svetainės šalį/kalbą.
- Default time zone: Pasirinkite svetainės laiko juostą.

- Automatic updates & email notifications: Patariame įjungti šias parinktis, jei norite užtikrinti stabilų jūsų svetainės veikimą.

- Spragtelėkite Save and Continue.



![](images/img_3207.jpg){.thumbnail}


## 6 žingsnis - baigimas
Jūsų Drupal TVS jau įdiegta. Spragtelėkite Visit my new Site.

![](images/img_3208.jpg){.thumbnail}
Jums belieka naudotis Drupal ir kurti savo svetainę.

![](images/img_3209.jpg){.thumbnail}


## Drupal pagalba
Jei prireiktų Drupal naudojimo patarimų, Drupal pagalba greičiausiai bus suteikta specializuotame Drupal forume, pvz., [čia](https://www.drupal.org/support).
OVH pagalbos skyrius nėra apmokytas teikti Drupal konfigūravimo ir palaikymo pagalbą.
Tačiau galite vadovautis gidu: []({legacy}2053).


## Dažnai pasitaikančios klaidos
Dažnai pasitaikanti klaida: svetainė kuriama

Įkėlėte failus per FTP, tačiau vis tiek matomas puslapis „svetainė kuriama“.

Diegiant talpinimo paslaugą, OVH automatiškai įkeliamas laukimo puslapis, kol jūsų failai įkeliami į interneto svetainę.

Jeigu tiesiog įkėlėte failus į www katalogą ir neištrynėte ten buvusių, yra klaidos rizika.

Problemą pataisysite, jei ištrinsite ar pervadinsite index.html failą, kurį įdiegė OVH į jūsų svetainių talpinimo planą.

Rekomenduojame failą pervadinti, kad vėliau prireikus galėtumėte atkurti jo pavadinimą ir naudoti puslapį kaip laikiną pranešimą apie vykdomus darbus.

Kita naudinga informacija: failai turi būti www kataloge, kad būtų pasiekiami iš interneto.

![](images/img_3217.jpg){.thumbnail}
Dažnai pasitaikanti klaida: PHP versija

Čia pateikiama dažnai pasitaikanti PHP versijos klaida.

Priežastis paprasta: neįjungta naujausia PHP versija.

PHP versijos keitimas prieinamas svetainių talpinimo planuose:[Keisti PHP versiją]({legacy}1207).

