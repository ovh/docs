---
deprecated: true
title: Svetainių talpinimas FileZilla naudojimas
excerpt: FileZilla FTP kliento naudojimas duomenų persiuntimui į OVH svetainių talpinimo vietą
slug: svetainiu_talpinimas_filezilla_naudojimas
legacy_guide_number: g1380
---


## Pristatymas
FileZilla - tai programinė įranga, sukurta daugeliui platformų (Windows, MacOS ir t.t.).

Su šia programa galite lengvai perkelti failus FTP protokolu, į savo svetainių talpinimo plano (FTP) saugyklą.

Norėdami parsisiųsti programą, eikite adresu:
[filezilla-project.org](https://filezilla-project.org/download.php?type=client)

![](images/img_2400.jpg){.thumbnail}


## Sąsaja

## FileZilla langas
1 zona: pateikiama informacija apie prisijungimus, perkėlimus, prisijungimo klaidas ir t.t.
Paprastai duomenys nėra naudingi neinicijuotiems naudotojams.  

2 zona: nurodomas visas kelias iki jūsų svetainės katalogo (ar perkeltinų failų) jūsų kompiuteryje.

3 zona: nurodomas visas kelias iki serverio katalogo, kuriame esate šiuo metu.  

4 zona: nurodomi jūsų kompiuteryje atidaryti katalogai, taip pat failų pavadinimas, dydis, tipas ir keitimo data. 

5 zona: nurodomi jūsų serveryje atidaryti katalogai, taip pat failų pavadinimas, dydis, tipas, keitimo data, teisės ir savininkas.  

6 zona: pateikiamas failų, kurie bus perkelti (ar jau perkeliami) į serverį ar kompiuterį, laukimo sąrašas.

Sąsajos viršuje (pažymėta žalia spalva) nurodomas host serverio (serverio, prie kurio prisijungėte) pavadinimas ir FTP naudotojas, jo slaptažodis ir naudojamas prievadas.

![](images/img_1818.jpg){.thumbnail}

## Pagrindinė juosta
Pagrindinėje juostoje yra bazinių programos naudojimo funkcijų mygtukai. Ne visi mygtukai reikalingi failų persiuntimui. Trumpas mygtukų aprašymas:
 Serverių valdymo lango atvėrimas.
 Slėpti/rodyti kliento-serverio pranešimų (log) įrašus (1).
 Slėpti/rodyti kompiuterių failų medį (2).
 Slėpti/rodyti serverio failų medį (3).
 Slėpti/rodyti siuntimų eilę (6).
 Atnaujinti failų ir katalogų sąrašą.
 Pradėti ar sustabdyti siuntimų eilės apdorojimą (failų siuntimą).
 Atšaukti vykdomas operacijas.
 Atsijungti nuo serverio
 Prisijungti prie paskutinio prisijungto serverio.
 Rodyti failų filtravimo dialogo langą.
 Įjungti/išjungti katalogų lyginimą.
 Įjungti/išjungti sinchronizuotą navigaciją.
 Rekursyvi failų paieška.


## FTP prisijungimas
Iliustracijoje žaliai apibraukti laukeliai, į kuriuose reikia įrašyti nuotolinio serverio informaciją:
 - Hostname/serveris: ftp.jūsų-domenas.lt arba ftp.cluster0XX.ovh.net;
 - Login/prisijungimo vardas: FTP prisijungimo vardas;
 - Password/slaptažodis: FTP prisijungimo slaptažodis;
 - Port/prievadas: palikite tuščią arba įrašykite 21.

Kai informacija bus suvesta, spragtelėkite Quick connect (arba greitas prisijungimas) ir prisijungsite prie serverio.

![](images/img_1819.jpg){.thumbnail}


## SFTP prisijungimas
SFTP (SSH File Transfer Protocol) - tai FTP prisijungimas per 22 prievadą ir saugus failų perdavimas.
Dėmesio: toks prisijungimas galimas tik su [Pro](http://www.ovh.lt/svetainiu-talpinimas/) ar galingesniu planu.
Taip prisijungę galėsite keisti failų teises, kai to negalite daryti prisijungę per 21 prievadą.

Į iliustracijoje žaliai apibrauktus laukelius įrašykite tokią prisijungimo informaciją:
 - Hostname/serveris: ftp.jūsų-domenas.lt arba ftp.cluster0XX.ovh.net, arba newftp.cluster0XX.ovh.net;
 - Login/prisijungimo vardas: FTP prisijungimo vardas;
 - Password/slaptažodis: FTP prisijungimo slaptažodis;
 - Port/prievadas: šiuo atveju 22.

Po to spragtelėkite Quick connect (arba greitas prisijungimas) ir prisijungsite prie serverio. Matysite sertifikato patvirtinimo langą, kuris pavaizduotas iliustracijoje. 
Jungiantis prie OVH serverių, rekomenduojame pažymėti Always trust this host, add this key to the cache (arba Visada pasitikėti šiuo serveriu ir išsaugoti raktą atmintinėje).

![](images/img_1834.jpg){.thumbnail}


## Prisijungimo klaidos
Iliustracijoje pavaizduota klaida reiškia, kad neteisingai įvesti prisijungimo prie FTP duomenys.

Toks pranešimas gaunamas, kai neteisingai įvedamas prisijungimo vardas arba slaptažodis.

Patikrinkite prisijungimo duomenis ir įveskite juos dar kartą. Jeigu kopijuojate slaptažodį, kartais nukopijuojamas ir tarpas, esantis slaptažodžio gale, kuris laikomas simboliu, todėl slaptažodis tampa neteisingu. Pabandykite įvesti slaptažodį. Jeigu vis tiek negalėsite prisijungti, pakeiskite slaptažodį valdymo sąsajoje:

FTP slaptažodžio keitimo naudojant valdymo sąsają gidas:[]({legacy}1374)

![](images/img_1820.jpg){.thumbnail}
Šiuo atveju neteisingai įvestas prisijungimo mazgas (host).

![](images/img_1824.jpg){.thumbnail}


## Failų persiuntimas
Norėdami persiųsti failus, galite juos pažymėti viename langelyje ir pervilkti juos į kitą. Persiunčiant į serverį, failus vilkite iš kairiojo laukelio (lokalūs failai) į dešinį (serverio failai).

 - Dėmesio: Įsitikinkite, kad dešiniame laukelyje atvertas teisingas serverio katalogas.

Failai bus automatiškai patalpinti siuntimo eilėje ir pradėti kelti į serverį.

![](images/img_1821.jpg){.thumbnail}


## Siuntimo eilės apžvalga
Galite įjungti ir išjungti siuntimo eilės rodymą.

Įjungę siuntimų eilės rodymą, joje matysite:

 - Failus, kurie yra siuntimų eilėje ir dar nepersiųsti į ar neparsiųsti iš serverio.

 - Failus, kurių persiuntimas nepavyko.

 - Failus, kurie sėkmingai persiųsti.

![](images/img_1822.jpg){.thumbnail}


## Kontekstinis serverio meniu
Jeigu dešiniuoju klavišu spragtelėsite failus, esančius serveryje (žr. 5 zona), matysite kontekstinį meniu su tokiais pasirinkimais:

Download/Parsisiųsti: Parsiųsti failą į atvertą lokalų katalogą.

Add to download queue/Pridėti į siuntimo eilę: Failas bus įtrauktas į siuntimo eilę. Taip galite pridėti failus iš skirtingų katalogų.

View/Edit arba Peržiūrėti/redaguoti: Jeigu programa gali skaityti failą, galite jį redaguoti tiesiai serverį, neparsiųsdami jo.

Create directory/Sukurti katalogą: Sukuria naują katalogą serveryje.

Refresh/Atnaujinti: Atnaujina serverio failų lange matomų failų sąrašą.

Remove/Trinti: Ištrina pažymėtą failą/katalogą.

Rename/Pervadinti: Pervadina pažymėtą failą ar katalogą.

Copy address to clipboard/Kopijuoti adresą į iškarpinę: Automatiškai sukuria nuorodą į failą. Sugeneruotos nuorodos pavyzdys:

ftp://prisijungimo-vardas@ftp.cluster0XX.ovh.net/www/katalogas/failas.jpg

File permissions/Failų leidimai: Galite keisti failo prieigos teises (CHMOD). Galite arba varnelėmis pažymėti teises, arba nurodyti skaitinę reikšmę. Primename, kad talpinimo planuose didžiausios leistinos teisės yra 755.

![](images/img_1830.jpg){.thumbnail}


## Failų ir katalogų teisės
Failų teisių valdymą pasieksite dešiniuoju klavišu spragtelėję failą ir pasirinkę File permissions/Failų leidimai.

Atsidariusiame lange galėsite keisti failų prieigos teises (CHMOD).

Galite įvesti skaitinę teisių reikšmę arba varnelėmis pažymėti norimas teises ir skaitinė reikšmė bus apskaičiuota automatiškai.

Taip pat galite pažymėti Recursion in subfolders (Rekusrsija subkataloguose).

Pažymėjus minėtąjį laukelį bus pakeistos katalogo ir subkataloguose esančių failų teisės.

![](images/img_1831.jpg){.thumbnail}


## Pakartotinis svetainės atidarymas
Atidarykite FileZilla, spragtelėkite Server, tada Enter custom command/įvesti savo komandą.

Kai kuriose FileZilla versijose „Enter custom command/įvesti savo komandą“ naudojama funkcija vadinasi „Enter FTP command/įvesti FTP komandą“.

Įveskite komandą:


```
SITE CHMOD 705 /
```


Jeigu matysite tokią klaidą:

550 would not chance perms on /. not such file or directory

Įveskite pakoreguotą komandą:


```
SITE CHMOD 705 .
```


Norėdami patikrinti, ar atidarymas sėkmingas, pabandykite atidaryti savo svetainę naudodami interneto naršyklę.

Ši komanda neveikia prisijungus perSFTP.

![](images/img_1829.jpg){.thumbnail}
Pastaba: svetainės atblokavimą tikrinkite po 3 valandų. Mūsų robotai kas 3 valandas tikrina talpinimo planų būseną. Aukščiau nurodytas veiksmas bus efektyvus per daugiau ar mažiau tą patį laiką, koks nurodytas čia.

Jeigu ir po 3 valandų svetainė nebus pasiekiama internetu, susisiekite su pagalbos skyriumi.


## Banko informacijos persiuntimas
Jeigu reikia persiųsti binarinius failus, pavyzdžiui, CGI tipo failus, galite pakeisti persiuntimo tipą.

Viršutiniame meniu spragtelėkite Transfers/Persiuntimai, po to Transfer type/Persiuntimo tipas.

![](images/img_1832.jpg){.thumbnail}


## Katalogų palyginimas
Ši funkcija 3 ir 4 zonose skirtingomis spalvomis išryškina skirtumus tarp lokalių failų ir katalogų bei serveryje esančių failų ir katalogų.
Dešiniuoju pelės klavišu spragtelėję mygtuką  galėsite keisti lyginimo nuostatas. 
Galite įjungti ar išjungti šias nuostatas:
 - Failų dydžio lyginimo;
 - Failų datų lyginimo;
 - Identiškų failų slėpimo.

Spalvos:

- Oranžinė: Failas yra tik viename kompiuteryje (lokaliame ar serveryje);
- Žalia: Failas yra naujesnis nei kitame kompiuteryje (lokaliame ar serveryje) esantis nepažymėtas failas;
- Raudona: Skiriasi failų dydžiai.



![](images/img_1823.jpg){.thumbnail}


## Nustatymai

## Prisijungimo
Galite keisti prisijungimo prie serverio parametrus.

Visada būkite atidūs keisdami nustatymus, kadangi tai gali sukelti nenumatytus atvejus ir užblokuoti Jūsų IP adresą.

Prisijungimo parametrai keičiami skyriuje Edit/Redaguoti > Parameters/Nustatymai > Connection/Prisijungimai.

![](images/img_1825.jpg){.thumbnail}

## Persiuntimų
Galite keisti failų persiuntimo parametrus, pavyzdžiui, vienu metu persiunčiamų failų kiekį ar numatytąjį veiksmą, jeigu persiunčiamas failas jau egzistuoja.

Failų persiuntimo parametrai keičiami skyriuje Edit/Redaguoti > Parameters/Nustatymai > Transfers/Siuntimai.

![](images/img_1826.jpg){.thumbnail}


## Serveris, prie kurio jungiamasi
Kai kuriais atvejais mūsų pagalbos skyrius gali paprašyti nurodyti serverį, prie kurio jungiatės su FileZilla.

Pavyzdžiui, serverio pavadinimas reikalingas norint patikrinti sulėtėjusį veikimą ar anomalijas FTP saugykloje. Pavadinimą rasite:

- Žiūrėkite dali virš FTP slaptažodžio arba LOG failo pradžioje;
- Suraskite, kur nurodytas webmXXX serveris.



![](images/img_2399.jpg){.thumbnail}

