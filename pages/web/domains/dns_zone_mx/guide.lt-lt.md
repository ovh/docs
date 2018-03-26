---
title: 'Svetainių talpinimas: MX konfigūravimas naudojant OVH DNS zoną'
excerpt: 'Svetainių talpinimas: MX konfigūravimas naudojant OVH DNS zoną'
slug: svetainiu_talpinimas_mx_konfiguravimas_naudojant_ovh_dns_zona
legacy_guide_number: g2012
---


## Naudojatės OVH el. pašto pasiūlymu
Jeigu naudojatės el. pašto sprendimu, suteiktu su OVH svetainių talpinimo planu, jūs turėtumėte naudoti šiuos MX serverius savo DNS zonoje:

- El. pašto serveriai [Anti-Virus + Anti-Spam]:


|Lauko tipas|Pirmenybė|Paskirtis|
|MX|1|mx1.mail.ovh.net.|
|MX|5|mx2.mail.ovh.net.|
|MX|10|mx3.mail.ovh.net.|



## Svarbu:
Šiuo metu ankstesni MX serveriai tebeveikia el. pašto paslaugoms, sukurtoms iki 2016-05-23, tačiau siekdami užtikrinti atnaujinimą rekomenduojame naudoti aukčiau nurodytus MX serverius.


## Neturite jokios OVH el. pašto paslaugos
Jei neturite jokios OVH el. pašto paslaugos, jūs negalėsite gauti el. laiškų be el. pašto paskyros.
Tačiau galėsite naudoti Alias (nukreipimus).

Pavyzdžiui, jei kuriate alias alias@mypersonaldomain.ovh nukreipimą į realų el. pašto adresą monadresse@monAutredomaine.com, naudokite šią konfigūraciją:
El. pašto serveris [Alias]:
|Lauko tipas|Pirmenybė|Paskirtis|
|MX|1|redirect.ovh.net|


Dėmesio: jūs galite naudoti Alias (nukreipimus), jei naudojatės el. pašto paslauga. Išsamesnė informacija apie el. pašto nukreipimus pateikta šiame gide: []({legacy}2001).


## Naudojatės kito paslaugų teikėjo el. pašto pasiūlymu

- Jūsų MX serveriui suteiktas prieglobos (host) serverio pavadinimas:


Jeigu savo domenui naudojate OVH DNS zoną, bet naudojatės kito paslaugų teikėjo el. pašto pasiūlymu (talpinamu ne OVH ar dedikuotame serveryje), OVH DNS zona konfigūruojama tuo pačiu būdu, tik naudojant ne OVH, o kito paslaugų teikėjo el. pašto serverius:
El. pašto serveriai:
|Lauko tipas|Pirmenybė|Paskirtis|
|MX|1|jūsų el. pašto serveris|
|MX|5|kitas jūsų el. pašto serveris|



- Jūsų MX serveriui nesuteiktas prieglobos (host) serverio pavadinimas, bet žinomas(-i) IP adresas(-ai):


Jeigu savo domenui naudojate OVH DNS zoną, bet naudojatės kito paslaugų teikėjo el. pašto pasiūlymu (pvz., talpinamu lokaliame serveryje), turite sukonfigūruoti OVH DNS zoną, kad galėtumėte susieti šį IP adresą su prieglobos (host) serverio pavadinimu (priešingu atveju, negalėsite naudoti MX įrašo, nukreipiančio į IP adresą):
El. pašto serveris:
|Subdomenas|Lauko tipas|Pirmenybė|Paskirtis|
|mail2|A||el. pašto serverio IP|
||MX|1|mail2.votre_domaine|




## Paskelbimo trukmė
Dėmesio: po atliktų pakeitimų DNS zonoje, naujų įrašų paskelbimas gali užtrukti iki 24 val., prieš įsigaliojant keitimams.

