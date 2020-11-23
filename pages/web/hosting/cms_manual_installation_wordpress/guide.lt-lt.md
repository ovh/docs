---
deprecated: true
title: 'TVS, Wordpress diegimas rankiniu būdu'
excerpt: Kaip rankiniu būdu diegti Wordpress?
id: '1977'
slug: tvs_wordpress_diegimas_rankiniu_budu
legacy_guide_number: g1977
---


## 1 dalis: pasiruošimas diegimui

## Reikalingi įrankiai
WordPress diegimui į talpinimo planą reikės FTP programos, pavyzdžiui, FileZilla (nemokamai).

## Diegimui reikalingi prisijungimo parametrai
Įsitikinkite, kad žinote teisingą OVH kliento ID ir paskyros slaptažodį, nes gali prireikti prisijungti prie valdymo sąsajos.


- Reikės FTP prisijungimo vardo ir slaptažodžio, kad galėtumėte prisijungti prie failų saugyklos. Šiame gide pateikiama informacija, kaip sužinoti FTP prisijungimo duomenis:[]({legacy}1374)

- Taip pat reikės SQL duomenų bazės, leidžiančios prisijungti prie duomenų bazės, identifikacinių duomenų ir slaptažodžio. Šiame gide pateikiama informacija, kaip sužinoti SQL prisijungimo duomenis:[]({legacy}1374)



![](images/img_3125.jpg){.thumbnail}


## 2 dalis: diegimo failų parsiuntimas

- Atidarykite kūrėjo svetainę: [WordPress](https://wordpress.org/).

Kūrėjo svetainėje rasite nuorodą į naujausią stabilią TVS versiją.


Paprastai parsiųstas failas bus suarchyvuotas (zip), todėl prieš įkeliant failus, juos reikės išarchyvuoti (išskleisti). Visą reikiamą pagalbą rasite internete.

![](images/img_3126.jpg){.thumbnail}


## 3 dalis: failų įkėlimas per FTP

## Failų katalogo išarchyvavimas
Atidarykite katalogą, kuriame išsaugotas archyvas.

Dešiniuoju pelės mygtuku spragtelėkite katalogą ir pasirinkite Išarchyvuoti viską....

Nurodykite paskirtį ir išarchyvuokite failus naujame kataloge.

Jeigu reikia pagalbos išarchyvuojant failus, skaitykite internete pateikiamus gidus.

Naujai sukurtas katalogas bus pavadintas wordpress.

![](images/img_3127.jpg){.thumbnail}

## Prisijungimas prie svetainių talpinimo per FTP
Norėdami įkelti WordPress failus į talpinimo planą, visų pirma turite prisijungti per FTP.

Esame paruošę atskirą prisijungimo prie svetainių talpinimo saugyklos per FTP gidą:[]({legacy}1374)

![](images/img_3128.jpg){.thumbnail}

## Failų perkėlimas per FTP
Sekite šiuos žingsnius, kad įkeltumėte savo failus per FTP.

## 1 žingsnis
Kai prisijungsite su FileZilla:

Skyriuje Local Site, kuris atitinka jūsų kompiuterio failus, atidarykite išskleistą wordpress katalogą, kuriame yra TVS failai.

Skyriuje Distant Site, kuris atitinka OVH saugyklą, atidarykite katalogą www. Į šį katalogą reikės įkelti TVS failus.

Jeigu tokio katalogo nėra, galite jį sukurti.

Failus būtinai kelkite į www katalogą, kad diegimo sistema būtų pasiekiama per pagrindinį domeną.

![](images/img_3129.jpg){.thumbnail}

## 2 žingsnis
Kai atverti reikiami katalogai:

Skyriuje Local Site matysite visus WordPress TVS failus.

Spragtelėkite bet kurį failą ir spauskite CTRL+A, kad pažymėtumėte visus failus.

Tuomet pele nuvilkite failus į Distant Site, www kataloge.

Gali būti, kad katalogas www nebus tuščias. Nebūtina trinti ten esančių failų. Šį atvejį apžvelgsime vėliau.

![](images/img_3130.jpg){.thumbnail}

## 3 žingsnis
Bus vykdomas failų perkėlimas.

Palaukite, kol failai bus perkelti į FTP saugyklą. Tai gali užtrukti kelias minutes. 

Kai perkėlimas bus baigtas, patikrinkite, ar visi failai buvo perkelti.

Failų įkėlimo per FTP dalis baigta.

![](images/img_3131.jpg){.thumbnail}


## 4 dalis: susiejimas su duomenų baze

## WordPress diegimo žingsniai

- Prieš tęsdami diegimą išvalykite naršyklės spartinančiąją atmintinę, kad išvengtumėte galimų klaidų.


WordPress ir duomenų bazės susiejimas atliekamas vadovaujantis TVS diegimo etapais.

## 1 žingsnis
Įveskite savo domeną.

Matysite tokį pranešimą.

Spragtelėkite Create configuration file.

![](images/img_3132.jpg){.thumbnail}

## 2 žingsnis
Nurodykite savo duomenų bazės duomenis (kaip sužinoti reikiamus duomenis nurodyta gido pradžioje).

Spragtelėkite Let's Go ir pereisite prie kito žingsnio.

![](images/img_3133.jpg){.thumbnail}

## 3 žingsnis
Įveskite reikiamą duomenų bazės informaciją:

Database name: Duomenų bazės pavadinimas, nurodytas kuriant bazę kliento paskyroje.

Username: Sutampa su duomenų bazės pavadinimu.

Password: Slaptažodis atsiunčiamas el. paštu, po duomenų bazės sukūrimo, jį galima keisti valdymo sąsajoje.

Database host: Duomenų bazės serverio pavadinimas, nurodytas duomenų bazės sukūrimo laiške arba kliento sąsajoje.

Table prefix: Naudinga naudoti, kai su viena duomenų baze susiejamos kelios WordPress svetainės. Kiekvienai svetainei reikia nurodyti atskirą prefiksą.

Svarbu: Duomenų bazės informacija nėra siunčiama automatiškai, po talpinimo plano įdiegimo. Informacija siunčiama tik per valdymo sąsają sukūrus duomenų bazę.

Spragtelėkite Submit, kad patvirtintumėte duomenų bazės informaciją.


- Šis etapas susieja WordPress ir duomenų bazę. Belieka tik užbaigti diegimą.



![](images/img_3134.jpg){.thumbnail}


## Baigimas

## Diegimo užbaigimas
WordPress TVS diegimą baigsite, kai atliksite toliau nurodytus žingsnius.

## 1 žingsnis
Spragtelėkite mygtuką Run the Install.

![](images/img_3135.jpg){.thumbnail}

## 2 žingsnis
Įveskite WordPress administravimo informaciją:

Site deprecated: true
title: Svetainės pavadinimas.

Username: Svetainės administratoriaus prisijungimo vardas.

Password, twice: Dukart įveskite WordPress administratoriaus slaptažodį.

Your e-mail: Įveskite veikiantį el. pašto adresą.

Privacy: Jeigu pažymėsite, paieškos varikliai indeksuos jūsų svetainę.

Wordpress diegimas prasidės, kai spragtelėsite mygtuką Install WordPress.

![](images/img_3136.jpg){.thumbnail}

## 3 žingsnis
WordPress svetainės diegimas baigtas!

Galite jungtis su nurodytais duomenimis ir kurti svetainę. Tiesiog spragtelėkite Log In.

![](images/img_3137.jpg){.thumbnail}

## WordPress administratoriaus sąsajos vaizdas
Čia pateikiamas WordPress administratoriaus sąsajos pavyzdys.

![](images/img_3138.jpg){.thumbnail}


## Naudinga informacija
OVH pagalbos skyrius nėra apmokytas teikti WordPress konfigūravimo ir palaikymo pagalbą.

Jūs galite peržiūrėti WordPress naudojimo gidą: []({legacy}2053).

WordPress pagalba greičiausiai bus suteikta specializuotame forume, pvz., [čia](https://wordpress.org/support/).

## Dažnai pasitaikanti klaida: svetainė kuriama
Įkėlėte failus per FTP, tačiau vis tiek matomas puslapis „svetainė kuriama“.

Diegiant talpinimo paslaugą, OVH automatiškai įkeliamas laukimo puslapis, kol jūsų failai įkeliami į interneto svetainę.

Jeigu tiesiog įkėlėte failus į www katalogą ir neištrynėte ten buvusių, yra klaidos rizika.

Problemą pataisysite, jei ištrinsite ar pervadinsite index.html failą, kurį įdiegė OVH į jūsų svetainių talpinimo planą.

Rekomenduojame failą pervadinti, kad vėliau prireikus galėtumėte atkurti jo pavadinimą ir naudoti puslapį kaip laikiną pranešimą apie vykdomus darbus.

Kita naudinga informacija: failai turi būti www kataloge, kad būtų pasiekiami iš interneto.

![](images/img_3139.jpg){.thumbnail}

## Dažnai pasitaikanti klaida: PHP versija
Čia pateikiama dažnai pasitaikanti PHP versijos klaida.

Priežastis paprasta: neįjungta naujausia PHP versija.

PHP versijos keitimas prieinamas svetainių talpinimo planuose:[Keisti PHP versiją]({legacy}1207).

![](images/img_3140.jpg){.thumbnail}

