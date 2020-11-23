---
deprecated: true
title: 'Svetainių talpinimas: valdymas ir prieiga prie slaptažodžių'
excerpt: 'Svetainių talpinimas: valdymas ir prieiga prie slaptažodžių'
id: '1909'
slug: svetainiu_talpinimas_valdymas_ir_prieiga_prie_slaptazodziu
legacy_guide_number: g1909
---


## Slaptažodis prieigai prie OVH valdymo sąsajos (Tvarkytuvo)
Tai yra slaptažodis, susietas su jūsų OVH identifikatoriumi. Jūsų identifikatoriaus pavyzdys yra ab12345-ovh. Identifikatorius generuojamas automatiškai, užsiregistravus [OVH svetainėje](http://www.ovh.lt).

* OVH identifikatorius dar vadinamas kliento ID, nichandle, arba nic.
Identifikatoriaus slaptažodį jūs kuriate patys. Jis nėra persiunčiamas el. paštu saugumo sumetimais, nes iš valdymo sąsajos yra valdomos visos paslaugos (užsakomos, modifikuojamos, trinamos).
Jeigu pamiršote savo prisijungimo prie [OVH paskyros](http://www.ovh.com/manager/web) slaptažodį, galite jį pakeisti prisijungimo puslapyje.

![](images/img_2847.jpg){.thumbnail}
Jums tereikia įvesti savo kliento ID (pvz:ab12345-ovh) ir paspausti Siųsti.

![](images/img_2848.jpg){.thumbnail}
El. paštu, kurį nurodėte registracijos metu, bus atsiųstas el. laiškas. Jums reikės patvirtinti slaptažodžio keitimą. Priešingu atveju, jums reikės atlikti [url="https://www.ovh.lt/cgi-bin/lt/procedure/procedureChangeEmail.cgi"]el. pašto adreso keitimo procedūrą iki slaptažodžio keitimo.
Jeigu jūs nežinote savo ID, o el. pašto adresas negalioja, susisiekite su mūsų pagalbos tarnyba. Mes paprašysime jūsų pateikti papildomą informaciją, kuria galėtume jus identifikuoti.


## FTP prisijungimas
Turite būti užsisakę svetainių prieglobos paslaugą, kad galėtumėte naudoti FTP (File Tansfer Protocol) protokolą.
Įdiegus svetainių talpinimo paslaugą, gausite el. laišką, kuriame bus nurodytas FTP prisijungimo vardas (login) ir slaptažodis.

Laiško kopiją taip pat rasite paslaugų valdymo sąsajoje, skyriuje Pagalba, tuomet El. laiškų istorija.

![](images/img_2849.jpg){.thumbnail}
Tokie laiškai yra saugojami neribotą laiką.
Jeigu jūs keitėte šį slaptažodį, tuomet jūs esate vienintelis asmuo, kuris jį žino. Jūs negalėsite surasti slaptažodžio paslaugų valdymo sąsajoje, nes mes nesaugome šios informacijos. Esant reikalui, slaptažodį keiskite valdymo sąsajoje. Procedūra aprašyta šiame [gide](https://www.ovh.lt/g1374.svetaines-ikelimas-i-interneta#failu_perkelimas_per_ftp_ftp_prisijungimo_duomenu_gavimas).


## SQL (duomenų bazės) slaptažodis
Duomenų bazė nėra suteikiama su nemokama talpinimo paslauga Start10M.
Užsakius svetainių talpinimo paslaugą, duomenų bazė nėra sukuriama automatiškai. Jums reikia ją susikurti patiems, kuomet paslauga jau yra įdiegta. 
Duomenų bazės kūrimo procedūra pateikta [šiame gide](https://www.ovh.lt/g1374.svetaines-ikelimas-i-interneta#duomenu_baziu_importavimas_-_eksportavimas_sql_prisijungimo_duomenys).
Slaptažodis įvedamas kuriant duomenų bazę ir nėra nurodomas duomenų bazės kūrimo laiške. 

Jeigu pamiršote duomenų bazės slaptažodį:


- Jūsų svetainė paskelbta internete ir naudoja duomenų bazę: slaptažodis išsaugotas konfigūraciniame faile, kurį rasite prisijungę per FTP (pvz., WordPress naudoja failą wp-config.php).

- Neturite svetainės, kuri naudotų duomenų bazę ir norite sukurti naują slaptažodį: pakeiskite slaptažodį valdymo sąsajoje. Slaptažodžio keitimo procedūra pateikta [šiame gide](https://www.ovh.lt/g1374.svetaines-ikelimas-i-interneta#duomenu_baziu_importavimas_-_eksportavimas_sql_prisijungimo_duomenys).


Dėmesio: Duomenų bazės slaptažodžio keitimas gali turėti rimtų pasekmių. Dėl to gali sutrikti svetainės, kuri naudoja duomenų bazę, veikla.

Po slaptažodžio keitimo būtina atnaujinti svetainės konfigūracinį failą ir jame nurodyti naują slaptažodį.


## Prisijungimas prie Webmail
El. pašto slaptažodis nurodomas kuriant el. pašto dėžutę. Prisijungimui prie [webmail](https://ssl0.ovh.net) sąsajos įveskite visą el. pašto adresą ir slaptažodį.
Jeigu pamiršote el. pašto slaptažodį, galite jį keisti valdymo sąsajoje. Keitimo procedūra aprašyta [šiame gide](https://www.ovh.lt/g1343.el-pasto-adreso-kurimas#pagalba_kaip_keisti_el_pasto_slaptazodi).
Pakeitus el. pašto dėžutės slaptažodį būtina jį atnaujinti ir pašto programoje.


## SSH prisijungimas
Prisijungimas per SSH (Secure Shell) galimas tik jei užsakytas PRO ar galingesnis planas. Prisijungimui naudokite FTP prisijungimo vardą ir slaptažodį.

Planai, kuriuose galimas prisijungimas per SSH, yra nurodyti [mūsų svetainėje](https://www.ovh.lt/svetainiu-talpinimas/).


## Moduliai vienu spragtelėjimu
Diegiant modulį vienu spragtelėjimu reikia nurodyti administratoriaus slaptažodį. Jis nėra siunčiamas el. paštu.
Jeigu pamiršote slaptažodį, galėsite jį atkurti prisijungimo prie modulio puslapyje. Beveik visos TVS turi slaptažodžio priminimo nuorodą.

Pavyzdys su WordPress:

![](images/img_2851.jpg){.thumbnail}
Jeigu modulis įdiegtas naudojant naują sąsają, jo slaptažodį galima keisti ir valdymo sąsajoje.

Prisijungę prie valdymo sąsajos, skyriuje Svetainių talpinimas pasirinkite talpinimo planą.

![](images/img_2855.jpg){.thumbnail}
Po to spragtelėkite Moduliai 1 spragtelėjimu ir dešinėje pusėje spragtelėkite Keisti slaptažodį

![](images/img_2854.jpg){.thumbnail}

