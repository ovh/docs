---
deprecated: true
title: 'TVS, Joomla diegimas rankiniu būdu'
excerpt: Kaip rankiniu būdu diegti Joomla?
id: '1978'
slug: tvs_joomla_diegimas_rankiniu_budu
legacy_guide_number: g1978
---


## 1 dalis: pasiruošimas diegimui

## Reikalingi įrankiai
Joomla! diegimui į talpinimo planą reikės FTP programos, pavyzdžiui, FileZilla (nemokamai).

## Diegimui reikalingi prisijungimo parametrai
Įsitikinkite, kad žinote teisingą OVH kliento ID ir paskyros slaptažodį, nes gali prireikti prisijungti prie valdymo sąsajos.


- Reikės FTP prisijungimo vardo ir slaptažodžio, kad galėtumėte prisijungti prie failų saugyklos. Šiame gide pateikiama informacija, kaip sužinoti FTP prisijungimo duomenis:[]({legacy}1374)

- Taip pat reikės SQL identifikacinių duomenų ir slaptažodžio. Šiame gide pateikiama informacija, kaip sužinoti SQL prisijungimo duomenis:[]({legacy}1374)



![](images/img_3141.jpg){.thumbnail}


## 2 dalis: diegimo failų parsiuntimas

- Atidarykite kūrėjo svetainę: [Joomla!](http://aide.joomla.fr/telechargements/joomla-3-0-package-d-installation-et-patchs).

Kūrėjo svetainėje rasite nuorodą į naujausią stabilią TVS versiją.


Paprastai parsiųstas failas bus suarchyvuotas (zip), todėl prieš įkeliant failus, juos reikės išarchyvuoti (išskleisti). Visą reikiamą pagalbą šia tema rasite internete.

![](images/img_3142.jpg){.thumbnail}


## 3 dalis: failų įkėlimas per FTP

## Failų katalogo išarchyvavimas
Atidarykite katalogą, kuriame išsaugotas archyvas.

Dešiniuoju pelės mygtuku spragtelėkite katalogą ir pasirinkite Išarchyvuoti viską....

Nurodykite paskirtį ir išarchyvuokite failus naujame kataloge.

Jeigu reikia pagalbos išarchyvuojant failus, skaitykite internete pateikiamus gidus.

Naujai sukurtas katalogas bus pavadintas Joomla.

![](images/img_3143.jpg){.thumbnail}

## Prisijungimas prie svetainių talpinimo per FTP
Norėdami įkelti Joomla! failus į talpinimo planą, visų pirma turite prisijungti per FTP.

Esame paruošę atskirą prisijungimo prie svetainių talpinimo saugyklos per FTP gidą:[]({legacy}1374)

![](images/img_3144.jpg){.thumbnail}

## Failų perkėlimas per FTP
Sekite šiuos žingsnius, kad įkeltumėte savo failus per FTP.

## 1 žingsnis
Kai prisijungsite su FileZilla:

Skyriuje Local Site, kuris atitinka jūsų kompiuterio failus, atidarykite išskleistą Joomla! katalogą, kuriame yra TVS failai.

Skyriuje Distant Site, kuris atitinka OVH saugyklą, atidarykite katalogą www. Į šį katalogą reikės įkelti TVS failus.

Jeigu tokio katalogo nėra, galite jį sukurti.

Failus būtinai kelkite į www katalogą, kad diegimo sistema būtų pasiekiama per pagrindinį domeną.

![](images/img_3145.jpg){.thumbnail}

## 2 žingsnis
Kai atverti reikiami katalogai:

Skyriuje Local Site matysite visus Joomla! TVS diegimo failus.

Spragtelėkite bet kurį failą ir spauskite CTRL+A, kad pažymėtumėte visus failus.

Tuomet pele nuvilkite failus į Distant Site, www kataloge.

Gali būti, kad katalogas "www" nebus tuščias. Nebūtina trinti ten esančių failų. Šį atvejį apžvelgsime vėliau.

![](images/img_3146.jpg){.thumbnail}

## 3 žingsnis
Failų perkėlimas baigtas.

Visi failai turi būti perkelti į nuotolinį FTP serverį. Tai gali užtrukti kelias minutes. 

Kai perkėlimas bus baigtas, patikrinkite, ar visi failai buvo perkelti.

Failų įkėlimo per FTP dalis baigta.

![](images/img_3147.jpg){.thumbnail}


## 4 dalis: susiejimas su duomenų baze

- Prieš pradėdami diegimą išvalykite naršyklės spartinančiąją atmintinę, kad išvengtumėte galimų klaidų.


Joomla! ir duomenų bazės susiejimas atliekamas vadovaujantis TVS diegimo etapais:

## 1 žingsnis
Įveskite savo domeną. Automatiškai bus paleistas diegimo vedlys.

Pirmiausiai reikės nustatyti Joomla! konfigūracijos informaciją:

Select Language: Pasirinkite Joomla! diegimo kalbą.

Site Name: Nurodykite svetainės pavadinimą, tai gali įtakoti SEO.

Description: Įveskite svetainės apibūdinimą, tai gali įtakoti SEO.

Site Offline: Galite užblokuoti viešą prieigą prie svetainės.

Email: Įveskite galiojantį administratoriaus el. pašto adresą.

Username: Įveskite administratoriaus vardą, kurį vėliau naudosite prisijungimui prie administravimo sąsajos.

Password: Įveskite administratoriaus slaptažodį, kurį vėliau naudosite prisijungimui prie administravimo sąsajos.

Confirm Password: Įveskite slaptažodį dar kartą.

Spragtelėkite Next, kad pereitumėte prie kito žingsnio.

![](images/img_3148.jpg){.thumbnail}

## 2 žingsnis
Įveskite duomenų bazės parametrus (kaip juos gauti, nurodyta gido pradžioje):

Database Type: Pasirinkite MySQL tipą.

Server Name: Įveskite duomenų bazių serverio pavadinimą, nurodytą bazės įdiegimo laiške arba valdymo sąsajoje.

Username: Pavadinimas nurodytas bazės įdiegimo laiške, jis sutampa su duomenų bazės pavadinimu.

Password: Nurodytas bazės įdiegimo laiške, jį galima keisti.

Database Name: Nurodytas kuriant duomenų bazę.

Table Prefix: Naudinga, kai toje pačioje bazėje naudojamos kelios Joomla! svetainių versijos. Kiekvienai versijai reikia suteikti skirtingą prefiksą.

Old Database Process: Jeigu pasirinksite "Backup", visos duomenų bazėje esančios lentelės (su tokiu pat prefiksu) bus pervadintos pridedant prefiksą "bak_". 

Spragtelėkite Next, kad pereitumėte prie kito žingsnio.

![](images/img_3149.jpg){.thumbnail}


## Baigimas

## Diegimo žingsnių užbaigimas
Norėdami baigti Joomla! diegimą, pereikite prie diegimo žingsnių.

## 1 žingsnis
Pereisite prie apžvalgos lango.

Reikės nurodyti informaciją:


- Site Type:


Pradedantiesiems rekomenduojame rinktis Learn Joomla! English (GB) sample data.


- Email configuration


Nurodykite, ar siųsti diegimo informaciją el. paštu. Atkreipkite dėmesį, kad informacijoje bus nurodomas įvestas administratoriaus slaptažodis.

Norėdami tęsti, spragtelėkite Install.

![](images/img_3150.jpg){.thumbnail}

## 2 žingsnis
Palaukite, kol svetainė bus įdiegta.

![](images/img_3151.jpg){.thumbnail}

## 3 žingsnis
Saugumo sumetimais Joomla! patars ištrinti diegimo katalogą.

Tai padarysite spragtelėję Remove Installation folder.

![](images/img_3152.jpg){.thumbnail}

## 4 žingsnis
Matysite pranešimą apie sėkmingai ištrintą katalogą.

Dabar galite jungtis prie Joomla! administravimo srities. Atsidariusiame lange įveskite administratoriaus duomenis arba pereikite prie Joomla! svetainės peržiūros.

![](images/img_3153.jpg){.thumbnail}

## Joomla! administravimo dalis
Norėdami peržiūrėti, kaip atrodo Joomla! administravimo sąsaja, spragtelėkite paveikslėlį šalia.

![](images/img_3154.jpg){.thumbnail}


## Naudinga informacija
OVH pagalbos skyrius nėra apmokytas teikti Joomla! konfigūravimo ir palaikymo pagalbą./green]

Tačiau galite vadovautis gidu: []({legacy}2053).


- Specializuotą pagalbos forumą rasite [ šiuo adresu ](http://forum.joomla.org/).



## Dažnai pasitaikanti klaida: svetainė kuriama
Įkėlėte failus per FTP, tačiau vis tiek matomas puslapis „svetainė kuriama“.

Diegiant talpinimo paslaugą, OVH automatiškai įkeliamas laukimo puslapis, kol jūsų failai įkeliami į interneto svetainę.

Jeigu tiesiog įkėlėte failus į www katalogą ir neištrynėte ten buvusių, yra klaidos rizika.

Problemą pataisysite, jei ištrinsite ar pervadinsite index.html failą, kurį įdiegė OVH į jūsų svetainių talpinimo planą.

Rekomenduojame failą pervadinti, kad vėliau prireikus galėtumėte atkurti jo pavadinimą ir naudoti puslapį kaip laikiną pranešimą apie vykdomus darbus.

Kita naudinga informacija: failai turi būti www kataloge, kad būtų pasiekiami iš interneto.

![](images/img_3155.jpg){.thumbnail}

## Dažnai pasitaikanti klaida: PHP versija
Čia pateikiama dažnai pasitaikanti PHP versijos klaida.

Priežastis paprasta: neįjungta naujausia PHP versija.

PHP versijos keitimas prieinamas svetainių talpinimo planuose:[Keisti PHP versiją]({legacy}1207).

![](images/img_3156.jpg){.thumbnail}

## Dažnai pasitaikanti klaida: Magic Quotes
Tai yra blogai apibrėžtas kintamasis, kuris stabdo Joomla! diegimą.

Magic Quotes turi būti išjungtos (off), taigi, konfigūraciniame faile reikia nurodyti 0.

Naujuose 2014 planuose, jeigu įjungta PHP-FPM, kintamasis Magic Quote išjungtas pagal nutylėjimą. Senesniuose planuose šis kintamasis išjungiamas naudojant .htaccess failą.

PHP kintamųjų modifikavimo gidas 2014 m. talpinimo planuose:[Keisti PHP versiją]({legacy}1207)

PHP kintamųjų modifikavimo gidas senesniuose talpinimo planuose:[Keisti PHP kintamąjį](http://guide.ovh.com/ConfigPhp)

![](images/img_3157.jpg){.thumbnail}

