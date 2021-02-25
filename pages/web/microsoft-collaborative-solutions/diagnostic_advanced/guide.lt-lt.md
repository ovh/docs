---
deprecated: true
title: 'Exchange diagnostika: ką daryti klaidos atveju?'
excerpt: 'Exchange diagnostika: ką daryti klaidos atveju?'
slug: exchange_diagnostika_ka_daryti_klaidos_atveju
legacy_guide_number: g2277
---


## Diagnostikos atlikimas
Prisijunkite prie savo kliento valdymo sąsajos paspaudę [čia](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie).

Po prisijungimo kairiajame stulpelyje pasirinkite Microsoft meniu ir savo Exchange paslaugą.

![](images/img_4450.jpg){.thumbnail}
Po to spauskite langelį Diagnostika, įveskite savo Exchange paskyros el. pašto adresą bei slaptažodį ir paleiskite diagnostiką.

Exchange diagnostikos atlikimas gali užtrukti nuo 3 iki 10 minučių.

![](images/img_4451.jpg){.thumbnail}
Pateikiame Exchange paskyros diagnostikos rezultato pavyzdį:

Galimi veiksmai:


- Nauja diagnostika: inicijuoti naują diagnostiką

- Sukurti pagalbos užklausą: leidžia sukurti pranešimą pagalbai, pateikiant diagnostikos rezultatą



![](images/img_4471.jpg){.thumbnail}


## Klaidos po diagnostikos atlikimo?
Išsamiai aprašysime kiekvieną galimą klaidą siekdami jums padėti ją išspręsti:


- DĖMESIO: Paskyra užblokuota dėl SPAM siuntimo:


El. pranešimų siuntimas iš jūsų paskyros laikinai užblokuotas, tačiau el. laiškų gavimas leidžiamas.

Jeigu jūsų paskyra užblokuota dėl SPAM, tai matoma Exchange paslaugos El. pašto paskyros skiltyje. Šiuo atveju, paskyra pažymėta SPAM. Jūs galite spragtelėti paskyrą ir būsite nukreipti į el. laišką, gautą po blokavimo.

Jūs turėtumėte atsakyti į šį el. laišką siekdami atblokuoti savo paskyrą.

![](images/img_4453.jpg){.thumbnail}

- DĖMESIO: Paskyra nustojo galioti:


Šiuo atveju, jūsų abonementas nebeveikia. Išjungtas tiek el. laiškų gavimas, tiek siuntimas. Jūs turėtumėte susiekti su OVH pagalba siekdami pakartotinai įjungti savo paslaugą.

- DĖMESIO: Paskyra išjungta dėl saugumo priežasčių:


Jūs galite nustatyti savo saugumo taisykles savo Exchange paslaugai. Tačiau dėl saugumo nustatymų paskyra gali būti laikinai užblokuota, kol konfigūruojamos jūsų taisyklės.

Jūs galite nustatyti, kad paskyra bus užblokuota po tam tikro nesėkmingų bandymų prisijungti skaičiaus visai jūsų pasirinktai trukmei.

Jeigu paskyra užblokuota dėl jūsų atliktų saugumo nustatymų, jūs galite arba palaukti, kol praeis jūsų nustatytas blokavimo laikas, arba susisiekti su OVH pagalba dėl paskyros atblokavimo.

- DĖMESIO: Nepavyko prisijungti prie žiniatinklio pašto:


Slaptažodis, įvestas diagnostikos atlikimo tikslais, yra neteisingas, šiuo atveju galite paleisti diagnostiką iš naujo.

Jūs taip pat galite atnaujinti savo slaptažodį prisijungę prie savo Exchange paslaugos valdymo sąsajos, skiltyje El. pašto paskyra, po to paleiskite diagnostiką iš naujo. Jeigu problema kartojasi, susisiekite su OVH pagalba.

- DĖMESIO: Domeno MX įrašai neteisingi:


Klaida nurodo, jog el. laiško gavimas neįmanomas dėl klaidos: DĖMESIO: Bandomasis el. laiškas nebuvo gautas.

Exchange paslaugai teisingi šie MX įrašai:


- Tik Exchange: mx1.mail.ovh.net
- Exchange + E-mail pop/imap talpinama OVH: mx1.mail.ovh.net
- Exchange + E-mail pop/imap talpinama ne OVH: ex.mail.ovh.net arba ex2.mail.ovh.net



- DĖMESIO: Domeno SRV įrašai neteisingi:


SRV įrašai būtini automatiniam jūsų Exchange paskyros konfigūravimui suderinamoje el. pašto programoje, pvz., Outlook 2010, 2013 ir 2016.

Jūs turėtumėte patikrinti savo SRV lauką domeno DNS zonoje.

Exchange paslaugai būtinas šis SRV laukas:

|Pirmumas|0|
|Svarba|0|
|Prievadas|443|
|Paskirtis Hosted pasiūlymas| ex.mail.ovh.net ar ex2.mail.ovh.net |
|Paskirtis Private pasiūlymas| jūsų-prieblogos-serveri-pavadinimas|



- DĖMESIO: Bandomasis el. laiškas negalėjo būti išsiųstas iš paskyros


Ši klaida nurodo, kad el. laiškų siuntimas iš jūsų el. pašto paskyros neįmanomas.

Galimos priežastys:


- Jūsų paskyra suspenduota
- Įvestas slaptažodis neteisingas
- Jūsų paskyra užblokuota dėl SPAM
- Gedimas Exchange infrastruktūroje


Šiuo atveju, vadovaukitės aukčiau pateiktomis rekomendacijomis norėdami ištaisyti šią klaidą arba kreipkitės į OVH pagalbą po diagnostikos atlikimo.

