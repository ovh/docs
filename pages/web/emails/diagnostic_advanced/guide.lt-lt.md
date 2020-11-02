---
deprecated: true
title: OVH el. paštas pažangiam naudojimui
excerpt: Informacija apie OVH svetainių talpinimo planų el. paštą pažangiam naudojimui.
slug: ovh_el_pastas_pazangiam_naudojimui
legacy_guide_number: g2117
---

## Ką tikrinti, jei el. laiškas neišsiunčiamas ar negaunamas?

Jei jūsų el. laiškai negali būti išsiųsti arba gauti, jūs turėtumėte atsakyti į šiuos klausimus:

Ar mano el. pašto sprendimas yra veikiantis? Jūsų el. laiškai bus veikiantys, jeigu jūsų naudojamas el. pašto sprendimas yra aktyvus. Jeigu jūsų el. laiškai susieti su svetainių talpinimo planu, įsitikinkite, kad jūsų planas tebegalioja. Šią informaciją galite peržiūrėti kliento valdymo sąsajoje. Jūsų domenas taip pat turi būti galiojantis.

- Ar el. laiškai veikia per žiniatinklio paštą? Norėdami įsitikinti, kad problema nėra susijusi su konfigūravimo klaida, atlikite siuntimo ir gavimo testą tiesiai OVH žiniatinklio sąsajoje. Jeigu viskas veikia be klaidų, patikrinkite savo programos konfigūraciją vadovaudamiesi prieinamais gidais.

- Negalite prisijungti prie žiniatinklio pašto? Įsitikinkite, kad jungiatės su teisingu slaptažodžiu, jei būtina, jūs galite jį pakeisti. Slaptažodžio keitimo procedūra aprašyta šiame gide aukščiau.

- Ar paslaugoje vykdomi numatyti priežiūros darbai? Jūs galite patikrinti suplanuotus ir šiuo metu vykdomus priežiūros darbus [šiame puslapyje](http://travaux.ovh.net/).

- Ar mano domeno nukreipimas yra teisingas? Patikrinkite, kad jūsų domenas teisingai naudoja OVH el. pašto pasiūlymo el. pašto serverius (MX įrašus). Vadovaukitės [šiuo gidu](https://docs.ovh.com/lt/domains/svetainiu_talpinimas_mx_konfiguravimas_naudojant_ovh_dns_zona/).

## SMTP serverio atsako kodai

### SMTP komandos

SMTP užklausos naudojamas el. pašto perkėlimui.
Kreipiantis į SMTP serverį, su juo būtina komunikuoti siunčiant užklausas (komandas).
Serveriui gavus komandą, generuojamas SMTP atsakas.

### SMTP atsakas

Atsakas į SMTP komandas užtikrina užklausų ir veiksmų sinchronizavimą el. pašto perkėlimo eigoje, siekiant, kad SMTP klientas visada žinotų SMTP serverio būseną. 
Kiekviena užklausa turi generuoti atsaką.

SMTP atsakas susideda iš trijų skaitmenų ir teksto.
Skaitmenų kodas skirtas serveriams, kuomet nustatomas kitas žingsnis.
Tekstas naudingas tik naudotojui.

Kiekvienas atsako skaitmuo turi savo reikšmę:

- Pirmas skaitmuo nurodo, ar atsakas yra tinkamas, netinkamas ar neužbaigtas. Pagal šį pirmąjį skaitmenį SMTP klientas galės nustatyti, koks bus kitas veiksmas.

- Antras ir trečias skaitmuo pateiks papildomą informaciją.

### Greita SMTP atsako analizė

Pirmam atsako kodo skaitmeniui galimos keturios vertės:

- 2xx  Teigiamas atsakas:

Užklaustas veiksmas atliktas sėkmingai. Galima inicijuoti naują užklausą.

- 3xx  Laikinas teigiamas atsakas:

Užklausa priimta, tačiau užklaustas veiksmas laukia išsamesnės informacijos.
SMTP klientas turėtų išsiųsti kitą užklausą, patikslinančią šią informaciją. 

- 4xx  Laikinas neigiamas atsakas:

Užklausa buvo atmesta ir užklaustas veiksmas nebuvo atliktas. 
Tačiau klaidos sąlyga yra laikina, todėl užklausą galima pateikti iš naujo.

- 5xx  Neigiamas atsakas:

Užklausa buvo atmesta ir užklaustas veiksmas nebuvo atliktas. 
SMTP klientas neturėtų kartoti tos pačios užklausos.

### Paaiškinimas

Žemiau pateikti SMTP atsako kodai, kuriuos dažniausiai naudoja SMTP serveriai: 

|Atsako kodas|Išsami informacija|Veiksmai|
|---|---|---|
|211|Pranešimas, nurodantis sistemos būklę, arba pagalbos atsakas|Pateikiama papildoma informacija|
|214|Pagalbos pranešimas|Pateikiama informacija apie serverį ir dažniausiai nukreipiama į D.U.K. puslapį|
|220|Serveris paruoštas﻿|Pranešimas, nurodantis, kad serveris paruoštas|
|221|Perdavimo kanalas uždarytas|Serveris uždaro jungtį po sėkmingos komunikacijos|
|250|Pranešimas perduotas|Jūsų el. laiškas buvo sėkmingai perduotas|
|251|Galutinio naudotojo nebuvimas serveryje, bet pranešimas bus perduotas|Pranešimas bus perduotas kitam serveriui (nukreipiant, kitam MX serveriui, ...)|
|252|Serveris negali patikrinti galutinio naudotojo, bet mėgins perduoti pranešimą|Šiuo metu galutinio naudotojo patikra negalima, bet pranešimas greičiausiai bus perduotas|
|354|Serveris gavo siuntėjo ir gavėjo adresus|Serveris laukia el. laiško turinio, kad galėtų jį perduoti|
|420|Laiko limitas viršijamas, prisijungimo problema|Tokį klaidos pranešimą generuoja tik GroupWise el. pašto serveriai. Susisiekite su paskirties el. pašto serverio administratoriumi|
|421|Paslauga neprieinama, perdavimo kanalas uždaromas|Klaidos kilmė nenustatyta, įsitikinkite, kad siuntimas į kitą domeną yra veikiantis. Jei taip, mėginkite išsiųsti vėliau|
|432|Sustabdytas el. laiško gavimas Exchange serveryje|Tokį klaidos pranešimą generuoja tik Microsoft Exchange el. pašto serveriai. Susisiekite su paskirties el. pašto serverio administratoriumi|
|449|Nukreipimo klaida|Šį klaidos pranešimą generuoja tik Microsoft Exchange el. pašto serveriai. Microsoft rekomenduoja atlikti diagnostiką su [WinRoute](https://support.microsoft.com/en-us/kb/281382) įrankiu|
|450|Užklaustas veiksmas neatliktas: el. pašto dėžutė neprieinama (pvz., el. pašto dėžutė perpildyta/užimta ar laikinai užblokuota dėl saugumo priežasčių ar buvimo juodajame sąraše)|Patikrinkite, ar jūsų el. pašto serverio IP adresas nėra juodajame sąraše ([SpamHaus](https://www.spamhaus.org/lookup/)), ir taip pat patikrinkite, ar jūsų el. laiške nėra žodžių, kurie gali būti laikomi SPAM.|
|451|Užklaustas veiksmas neatliekamas: vietinio apdorojimo klaida|Tai gali įvykti dėl laikino apkrovos padidėjimo ar neteisingai atliktos siuntėjo domeno SPF patikros. Vadovaukitės papildomu pranešimu, kurį pateikė serveris, arba susisiekite su serverio administratoriumi, jei klaida kartojasi|
|452|Užklaustas veiksmas neatliktas: nepakanka vietos diske|Jūsų el. pašto serveris yra perpildytas. Tai gali būti ir dėl to, kad vienu metu siunčiamas didelis pranešimų kiekis. Patikrinkite savo el. pašto siuntimo dėžutę ir mėginkite dar kartą|
|455|Serveris negali gauti nustatymų|Palaukite, po to mėginkite iš naujo. Nesėkmės atveju susisiekite su paskirties el. pašto serverio administratoriumi|
|500|Sintaksės klaida, užklausa neatpažinta (pvz., užklausa pernelyg ilga komandinėje eilutėje)|Klaida gali įvykti dėl siuntėjo įdiegtos antivirusinės programos ar ugniasienės nustatymų. Patikrinkite nustatymus ir mėginkite dar kartą|
|501|Sintaksės klaida nustatymuose ar argumentuose|Klaida gali įvykti dėl klaidingai nurodyto gavėjo el. pašto adreso ar dėl siuntėjo įdiegtos antivirusinės programos ar ugniasienės nustatymų. Patikrinkite gavėjo el. pašto adresą, taip pat savo antivirusinės programos ar ugniasienės nustatymus|
|502|Užklausa neįgyvendinta|Siunčiant el. laišką su jūsų SMTP serveriu, jūsų naudojami nustatymai ir parinktys yra teisingi, tačiau išjungti konfigūracijoje. Susisiekite su savo paslaugos teikėju|
|503|Neteisinga užklausų seka serveriui|Tai gali įvykti dėl autentifikavimo problemos, įsitikinkite, kad esate tinkamai autentifikuoti SMTP serveryje, jūsų el. pašto programos konfigūracijos lygmeniu|
|504|Užklausos nustatymas neįgyvendintas|Siunčiant el. laišką su jūsų SMTP serveriu, jūsų naudojami nustatymai ir parinktys yra teisingi, tačiau išjungti konfigūracijoje. Susisiekite su savo paslaugos teikėju|
|550|Užklaustas veiksmas neatliktas: el. pašto dėžutė neprieinama|Paskirties el. pašto serveris negalėjo patikrinti naudojamo el. pašto. Paskirties el. pašto adresas gali būti negaliojantis arba turi problemų su ugniasienės nustatymais ar jungtimi. Patikrinkite gavėjo el. pašto adresą ir/ar mėginkite dar kartą|
|551|Naudotojas nėra vietinis|Tai dažniausiai naudojama strategija apsaugai nuo SPAM. Nurodoma, kad el. laiško perdavimas neleidžiamas dėl tam tikros priežasties, trukdančios perduoti jūsų pranešimą kitam serveriui. Susisiekite su savo paslaugos teikėju|
|552|Užklaustas veikmas nutrauktas: viršijama saugyklos vieta|Naudotojas, su kuriuo mėginate susisiekti, nebeturi prieinamos vietos diske el. laiškams gauti. Deja, vienintelis sprendimas šiuo atveju yra susisiekti su gavėju kitomis priemonėmis|
|553|Užklaustas veiksmas neatliktas: el. pašto adresas neautorizuotas|Tai įvyksta dėl neteisingai nurodyto paskirties el. pašto adreso. Įsitinkikite, kad paskirties el. pašto adresas yra teisingas|
|554|Operacija nepavyko, „Jokios SMTP paslaugos“|Problema dažniausiai susijusi su juodaisiais sąrašais. Įsitikinkite, kad jūsų el. pašto serverio IP adresas nėra juodajame sąraše ([SpamHaus](https://www.spamhaus.org/lookup/))|
|555|MAIL FROM / RCPT TO, nustatymai nežinomi arba neįgyvendinti|Išsiunčiamų el. laiškų SMTP serveris negali teisingai įregistruoti naudojamą el. pašto adresą jūsų nustatymuose „Nuo“ arba „Kam“. Įsitikinkite, kad nurodyti el. pašto adresai yra teisingi, ir taip pat patikrinkite, ar neviršijote OVH nustatyto limito: 200 el. laiškų /val. /paskyrai ir 300 el. laiškų /val. /ip|