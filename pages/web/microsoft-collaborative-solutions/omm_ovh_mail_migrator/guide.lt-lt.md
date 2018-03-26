---
title: El. pasto paskyru migravimas naudojant OVH Mail Migrator
slug: exchange-el-pasto-paskyru-migravimas-ovh-mail-migrator
legacy_guide_number: 1624
excerpt: OVH Mail Migrator sasajos naudojimas
---

OMM (OVH Mail Migrator) įrankis suteikia galimybę perkelti jūsų el. pašto paskyrų turinį (pvz., el. laiškus, kontaktus, kalendorių, užduotis ir t.t.) į Exchange, E-mail Pro ar MX Plan paskyras. Kitaip nei naudojant ribojantį PST eksportą, jums nebereikės ilgai laukti.

Pirmiausia atidarykite puslapį: [OVH Mail Migrator](https://omm.ovh.net){.external}.


## Naujas migravimas
Spragtelėkite `New migration`{.action} ir pereikite prie kito žingsnio.


![emails](images/2795_en.png){.thumbnail}


### Paskyra, is kurios migruojate
Pasirinkite paskyros, iš kurios migruojate, tipą ir įveskite serverio parametrus.

Jeigu jūsų naudojama paskyra talpinama OVH, rinkitės: **Hosted by OVH** (Autodetect). Įveskite el. pašto adresą ir spauskite **Detect settings**.

Po to gausite slaptažodžio užklausą.



> [!primary]
>
> Pavyzdžiui, jei migruojate iš MX Plan į E-mail Pro:
> Server type: Hosted by OVH
> Login: Jūsų MX Plan el. pašto adresas
> Spragtelėkite Detect settings
> Password: Jūsų el. pašto paskyros slaptažodis
> 


### Paskyra, i kuria migruojate

![emails](images/2796_en.png){.thumbnail}

Pasirinkite naujos paskyros tipą, įveskite el. pašto adresą ir slaptažodį. Serverio parametrų laukai bus užpildyti automatiškai.



> [!primary]
>
> Pavyzdžiui, jei migruojate iš MX Plan į E-mail Pro:
> Server type: Hosted by OVH
> Login: Jūsų E-mail Pro el. pašto adresas
> Spragtelėkite Detect settings
> Password: Jūsų E-mail Pro el. pašto paskyros slaptažodis
> 


### Parinktys
Pasirinkite elementus, kuriuos ketinate perkelti:

**E-mails**: El. laiškai, išsaugant naudojamą katalogų architektūrą.

**Calendars**: Kalendoriai, susiję su paskyra, atkuriant įvykius bei renginius (be kvietimų į renginius).

**Contacts**: Kontaktai, pridėti prie paskyros.

**InboxRules**: Taisyklės, nustatytos paskyroje (taikoma Exchange 2010 Sp1 ir naujesnių versijų paskyroms).

**Contact groups**: Kontaktų grupės, sukurtos paskyroje.

**Out of office settings**: Taisyklės, nustatytos pertraukų (nebuvimo laikotarpių) valdiklyje.

**Tasks**: Užduotys, numatytos paskyroje.


![emails](images/3768_en.png){.thumbnail}


### Uzbaigimas
Migruojant POP/IMAP paskyras į E-mail Pro ir Exchange, galima rinktis tik **E-mails** parinktį.

Jūs galite įvesti kitą el. pašto adresą, kuriuo bus siunčiami pranešimai apie migravimo eigą.

Įvedę visus duomenis, spragtelėkite `Start Migration`{.action} ir paleiskite operaciją.

Neteisingai įvedus prisijungimo vardą ir (ar) slaptažodį ar nurodžius klaidingą serverį, matysite klaidą:


![emails](images/2441.png){.thumbnail}

Po užduoties sukūrimo bus paleista migravimo operacija.

- Jūs galite stebėti migravimo eigą.


![emails](images/2798_en.png){.thumbnail}



> [!success]
>
> - 
> Svarbu: įsidėmėkite migravimo užduoties numerį (Migration ID), taip galėsite greičiau surasti ir stebėti paskyros migravimo eigą.
> 
> 


## PST failo importas
Turite .pst failą ir norite jį importuoti į savo el. pašto paskyrą? Tai įmanoma naudojant meniu `PST migration`{.action}.


![emails](images/3769_EN.png){.thumbnail}

Spragtelėkite `Pradėti migravimą`{.action}

Po to galėsite pasirinkti savo PST failą naudojant meniu `Browse`{.action}


![emails](images/3770.png){.thumbnail}

Pasirinkus .pst failą, jums reikės pakartotinai įvesti paskyros, į kurią importuojama, slaptažodį, prieš pradedant migravimą.

Pradėjus migravimą įsidėmėkite migravimo ID, jį reikės pateikti migravimo eigai stebėti.


## Migravimo stebejimas
Jūs galite stebėti paskyros migravimo eigą.

Šiam tikslui jums reikės:

- Migration ID (žr. ankstesnį žinsgnį)
- Paskyros, iš kurios migruojate, el. pašto adreso

Įveskite reikiamus duomenis, spauskite `Follow migration`{.action} ir patikrinkite migravimo būseną.


![emails](images/2799_en.png){.thumbnail}

Naujame lange matysite migravimo būseną. Jūs taip pat galėsite patikrinti operacijos eigą ir sužinoti, ar ji sėkmingai užbaigta.

- 
    1. Migration ID - migravimo operacijos numeris.
- 
    1. Creation date - migravimo operacijos sukūrimo data.
- 
    1. Last update - naujausias migravimo operacijos keitimas.
- 
    1. `Rollback`{.action} mygtukas suteikia galimybę atkurti paskyrą į pradinę būseną (iki migravimo).


![emails](images/2800_en.png){.thumbnail}


### Atsaukimas
**Cancel**: Vykdomo etapo užbaigimas ir būsimų žingsnių atšaukimas.

*Pavyzdžiui: jei migruojate kontaktus, 'Cancel' paspaudimu užbaigsite kontaktų migravimą,* *tačiau jei buvo pateikta ir kalendorių migravimo užklausa, ši užduotis nebus įvykdyta,* *operacija bus užbaigta.*


### Grizimas atgal
`Rollback`{.action} mygtukas suteikia galimybę atkurti paskirties paskyrą į pradinę būseną. Ši funkcija bus prieinama tik 48 valandas nuo migravimo proceso pabaigos.