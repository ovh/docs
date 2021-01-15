---
deprecated: true
title: 'Svetainių talpinimas: Cyberduck (MAC) naudojimo gidas'
excerpt: Šiame gide pateikiami patarimai apie Cyberduck aplikacijos naudojimą.
id: '1598'
slug: svetainiu_talpinimas_cyberduck_mac_naudojimo_gidas
legacy_guide_number: g1598
---


## Pristatymas
Cyberduck – tai aplikacija, skirta MAC. 

Ši programa leidžia įkelti interneto svetainę on-line, jungiantis prie svetainių talpinimo erdvės (FTP). 

Norėdami parsisiųsti Cyberduck, eikite į oficialią svetainę:


- Oficiali Cyberduck svetainė (ne OVH svetainė): [cyberduck.io](https://cyberduck.io/)



![](images/img_2344.jpg){.thumbnail}
Cyberduck – tai aplikacija, skirta MAC naudotojams. Jeigu naudojate Windows, rinkitės FileZilla: []({legacy}1380)


## Sąsaja
Pirmą kartą paleidus programą, matysis toks langas.

- Viršuje esanti zona leidžia greitai prisijungti iš naujo, taip pat greitai atlikti įvairius veiksmus, kai tik būsite prisijungę prie savo FTP paskyros (keisti pavadinimą, redaguoti ir t.t.).

- Viduryje esanti zona jums leidžia peržiūrėti pridėtas žymes (jūsų iš anksto įregistruotas FTP prieigas), po prisijungimo galima peržiūrėti jūsų svetainių talpinimo vietos turinį.

- Žemiau pateikta zona suteikia informaciją apie atliekamus veiksmus (prisijungimas prie FTP serverio), taip pat prie tam tikrų įrašų, pavyzdžiui, norint pridėti naują žymę.



![](images/img_2343.jpg){.thumbnail}
Cyberduck paskelbimo personalizavimas

Galite personalizuoti Cyberduck sąsają, kad jūsų aplikacija būtų veiksmingesnė ir pritaikyta tik jums.

Norėdami atlikti šiuos veiksmus, spragtelėkite Presentation ir Personalize toolbar.... 

Pasirodžiusiame lange nutempkite visus pageidaujamus elementus į užduočių juostą. Norėdami patvirtinti savo keitimus, spragtelėkite Done

![](images/img_2345.jpg){.thumbnail}


## FTP prisijungimas
Norėdami prisijungti prie savo interneto svetainių talpinimo erdvės (FTP), sekite šiuos žingsnius:

1. Kairiajame viršutiniame lange spragtelėkite New connection.

2. Naujai atsidariusiame lange įveskite savo FTP prisijungimo duomenis:

- FTP serveris  
- Naudotojo vardas 
- Slaptažodis 
- Prievadas (21)

3. Pažymėkite Add to access parameters, jeigu norite, kad Cyberduck įsimintų jūsų slaptažodį 

4. Spragtelėkite Connect, kad prisijungtumėte prie savo svetainių talpinimo erdvės (FTP)


![](images/img_2361.jpg){.thumbnail}

- Jūs galite išsaugoti savo slaptažodį Cyberduck pažymėdami Add to access parameters. Šis pasirinkimas neprivalomas; jums nieko nepažymėjus, jūs turėtumėte iš naujo įvesti slaptažodį, kad prisijungtumėte prie savo interneto talpinimo erdvės.

- Jeigu jums nežinomi FTP prisijungimo duomenys, vadovaukitės šiuo gidu: [Atkurti mano FTP identifikacinius duomenis](https://www.ovh.lt/g1374.svetaines-ikelimas).


Jūs turėtumėte matyti įspėjamąjį pranešimą apie tai, kad serveryje palaikomos užšifruotos jungtys (SSL).

- Jeigu serveris nesuderinamas su FTP-SSL, jūs turėtumėte pažymėti Nebeskelbti ir būtinai pasirinkti Toliau.

- Jeigu pageidaujate naudotis saugia jungtimi, turėtumėte naudoti  [SFTP jungtį](#utiliser_cyberduck_connexion_sftp). Tačiau ši jungtis prieinama tik tokiu atveju, jeigu turite SSH prieigą prie savo interneto svetainių talpinimo plano.



![](images/img_2349.jpg){.thumbnail}

- Jeigu jūs nežinote, ar SSH prieiga suteikiama su jūsų svetainių talpinimo planu, peržiūrėkite mūsų  [interneto svetainių pasiūlymus](http://www.ovh.lt/svetainiu-talpinimas/). 

- Jeigu vis dar nesate tikri dėl savo pasirinkimo, pagal nutylėjimą rinkitės Toliau. Serveris atmes prisijungimą, jeigu neturite SSH prieigos savo plane.



- Rekomenduojame išsaugoti savo prisijungimo duomenis naudojantis žymė. Taip galėsite atmintyje išsaugoti tam tikrus prisijungimo duomenis. 

- Prireikus skaitykite šį gidą: [Kas yra žymė?](#utiliser_cyberduck_quest-ce_quun_signet).




## SFTP prisijungimas
Jeigu jūsų pasiūlymas suderinamas su SSH prieiga, jūs galite jungtis per SFTP. Ši prieiga būtina, kad SFTP prisijungimas veiktų.

- Jeigu jūs nežinote, ar SSH prieiga suteikiama su jūsų svetainių talpinimo planu, peržiūrėkite mūsų  [interneto svetainių pasiūlymus](http://www.ovh.lt/svetainiu-talpinimas/).

- Jeigu vis dar nesate tikri dėl savo pasirinkimo, rinkitės [FTP prieigą](#utiliser_cyberduck_connexion_ftp) vietoje SFTP. Serveris atmes prisijungimą, jeigu neturite SSH prieigos savo plane.


Norėdami prisijungti prie savo svetainių talpinimo plano, vadovaukitės šiais žingsniais:

1. Spragtelėkite New connection viršutiniame kairiajame kampe 

2. Išskleidžiamame meniu pasirinkite SFTP (Dile transfer over SSH protocol) (pažymėta oranžine spalva)

3. Nurodykite prisijungimo prie FTP duomenis:

- FTP serveris 
- Naudotojo vardas 
- Slaptažodis 
- Prievadas (22)

4. Pažymėkite Add to access parameters, jeigu norite, kad Cyberduck įsimintų jūsų slaptažodį 

5. Spragtelėkite Connect, kad prisijungtumėte prie savo interneto svetainių talpinimo erdvės (FTP)


![](images/img_2362.jpg){.thumbnail}

- Jūs galite išsaugoti savo slaptažodį Cyberduck pažymėdami Add to access parameters. Šis pasirinkimas neprivalomas; jums nieko nepažymėjus, jūs turėtumėte iš naujo įvesti slaptažodį, kad prisijungtumėte prie savo interneto talpinimo erdvės.

- Jeigu jums nežinomi FTP prisijungimo duomenys, vadovaukitės šiuo gidu: [Atkurti mano FTP identifikacinius duomenis](https://www.ovh.lt/g1374.svetaines-ikelimas).


Pirmą kartą jungiantis prie svetainių talpinimo plano, pasirodys langas: Host is not known.

- Pažymėkite Always ir paspauskite Allow. Taip patvirtinti host serverį, prie kurio jungiatės (t.y. OVH serverį).



![](images/img_2363.jpg){.thumbnail}

- Rekomenduojame išsaugoti savo prisijungimo duomenis naudojantis žymė. Taip galėsite atmintyje išsaugoti tam tikrus prisijungimo duomenis. 

- Prireikus skaitykite šį gidą: [Kas yra žymė?](#utiliser_cyberduck_quest-ce_quun_signet).




## Prisijungimo klaidos
Bandant prisijungti prie svetainių talpinimo erdvės, Cyberduck gali pasirodyti klaida. Žemiau pateikiamos 2 dažniausiai pasitaikančios klaidos, kurias galite matyti.
Pakartotinis nutrauktos sesijos atidarymas

Šį pranešimą taip pat lydi užrašas 530 Login authentification failed. Dažniausiai ši klaida susijusi su jūsų nurodytais prisijungimo duomenimis, kurie tikriausiai buvo klaidingi. 


- Patikrinkite įvestus prisijungimo duomenis;

- Prireikus pakeiskite savo sukurtą Žymę (pasirenkant žymę ir spaudžiant pieštuko formos piktogramą).



![](images/img_2352.jpg){.thumbnail}

- Jeigu jums nežinomi jūsų FTP prisijungimo duomenys, vadovaukitės šiuo gidu: [Atkurti mano FTP duomenis](https://www.ovh.lt/g1374.svetaines-ikelimas).


Prisijungimo klaida

Šį pranešimą taip pat lydi užrašas Timed out waiting for initial connect reply. Šis pranešimas nurodo, kad daugeliu atvejų host serveris nepasiekiamas: šis serveris tikriausiai klaidingas arba nepasiekiamas.


- Patikrinti nurodytus prisijungimo duomenis;

- Prireikus jūs taip pat turėtumėte pakeisti sukurtą Žymę (pasirenkant žymę ir spaudžiant pieštuko formos piktogramą).


Ši klaida taip pat gali atsirasti dėl įdiegtos ugniasienės arba vietinio tinklo, blokuojančio 21 ar 22 prievadą, kurie naudojami prisijungimui prie FTP. Šiuo atveju, jūs turite patikrinti asmeninę konfigūraciją.

![](images/img_2353.jpg){.thumbnail}

- Primename, kad prisijungimo prie jūsų svetainių talpinimo erdvės host serveris yra ftp.jusu-domenas.tld (pakeiskite į savo domeną) arba ftp.clusterXXX.ovh.net (pakeiskite XXX į savo klasterio numerį).

- Prireikus vadovaukitės šiuo gidu: [Sužinoti mano FTP prisijungimo duomenis](https://www.ovh.lt/g1374.svetaines-ikelimas).




## Kas yra žymė?
Prisijungimo prie failų talpinimo (FTP) erdvės palengvinimui rekomenduojame naudoti žymes. Tai leis išsaugoti prisijungimo duomenis.

Norėdami pridėti:


- Prisijunkite prie savo interneto svetainių talpinimo erdvės (FTP arba SFTP)
- Pereikite prie žymių rodymo (pažymėta mėlyna ir toliau žalia spalva)
- Paspauskite [+] formos logotipą (pažymėta oranžine spalva) lango apačioje, kairėje



![](images/img_2346.jpg){.thumbnail}
Naujai atsidariusiame lange matysite savo prisijungimo duomenis. Kitą kartą paleidžiant Cyberduck, galite dukart spragtelėti ženkliuką ir prisijungti dar greičiau.


## Failų perkėlimas
Failų perkėlimas leidžia perkelti interneto svetainę į jūsų svetainių talpinimo erdvę. Pagal nutylėjimą, šioje erdvėje failus reikia kelti į www katalogą (bylą).

Failus galite perkelti įvairiais būdais.
Tempiant ir paleidžiant
Norėdami perkelti savo failus per FTP, jūs galite paprasčiausiai juos pasirinkti ir pervilkti iš vietinio (jūsų kompiuterio) katalogo lango į Cyberduck langą (jūsų talpinimo erdvę).


- Atlikus šį veiksmą, jūsų failai bus automatiškai perkelti į laukimo eilę ir galiausiai pateks į serverį. Taip pat matysite naujai atsidariusį langą.



![](images/img_2354.jpg){.thumbnail}
Naudojant perkėlimo sąsają

Galite naudoti perkėlimo sąsają, kuri atidarys naują langą ir leis peržiūrėti jūsų failus. Jūs turėtumėte pasirinkti pageidaujamus failus ir spragtelėti Transfer.


- Atlikus šį veiksmą, jūsų failai bus automatiškai perkelti į laukimo eilę ir galiausiai pateks į serverį. Matysite naujai atsidariusį langą.



![](images/img_2355.jpg){.thumbnail}
Vykdomo perkėlimo peržiūra

Jūs turite galimybę peržiūrėti visų perkėlimo į svetainių talpinimo erdvę operacijų istoriją. Taip pat galite sužinosite:


- failus, kurie bus perkelti į nuotolinį serverį, bet dar yra laukimo eilėje (ar dar tik siunčiami);
- failus, kurių perkėlimas nepavyko;
- failus, kuriuos pavyko sėkmingai perkelti į nuotolinę svetainių talpinimo erdvę.


Šis langas bus atidarytas dviems skirtingais būdais:


- Automatiškai, inicijuojant perkėlimą;
- Spaudžiant Window ir Transfers.



![](images/img_2356.jpg){.thumbnail}


## Galimi veiksmai su failu/katalogu
Pasirinkę svetainių talpinimo erdvėje esantį failą arba katalogą (Cyberduck lange), galėsite atlikti įvairius veiksmus.

Atlikę šiuos veiksmus galėsite: 


- Skaityti failo arba katalogo informaciją ir keisti teises (CHMOD);
- Redaguoti failą su savo pasirinkta aplikacija; 
- Pervadinti failą arba katalogą; 
- Ištrinti failą arba katalogą; 
- Parsisiųsti pasirinktus elementus;
- Sukurti naują katalogą arba failą.


Šis sąrašas negalutinis, galimi ir kiti veiksmai. Prireikus peržiūrėkite informaciją oficialiame Cyberduck puslapyje.

![](images/img_2357.jpg){.thumbnail}


## Failų ir katalogų teisės
Jūs galite keisti svetainių talpinimo erdvėje esančių failų ir katalogų teises (CHMOD).

Visos teisės suskirstytos į 3 galimas rūšis: 


- Savininko teisės; 
- Grupės teisės;
- Viešos (kitų) teisės.


Norėdami prisijungti prie šios sąsajos, pasirinkite pageidaujamus failus ar katalogus ir skiltyje Actions spragtelėkite Read information. 

Naujai atsidariusiame lange spragtelėkite Permissions ir atlikite pageidaujamus keitimus: 


- UNIX leidimai: vertė automatiškai atsinaujins visiems trims žemiau pateiktiems langeliams; 
- Pasirinkite pageidaujamus langelius: vertė automatiškai atsinaujins UNIX leidimams.



![](images/img_2358.jpg){.thumbnail}


## Svetainės atidarymas
Jūs galite pakartotinai atidaryti savo interneto svetainę naudojant asmeninę užklausą.

Daugeliu atveju, šie veiksmai atliekami po to, kai OVH saugumo sumetimais uždarė jūsų svetainių talpinimo planą dėl įsilaužimo.

Norėdami naudoti komandą: 


- Spragtelėkite Go to
- Spragtelėkite Send command...



![](images/img_2359.jpg){.thumbnail}
Naujai atsidariusiame lange įveskite komandą:


- CHMOD 705 /
- Spragtelėkite Send.


Žemiau esančiame lange matysite patvirtinimo pranešimą 200 Permissions changed on /.


- Norėdami patikrinti, ar pakartotinis atidarymas jau įsigaliojo, atidarykite savo interneto svetainę naršyklėje.



![](images/img_2360.jpg){.thumbnail}

- Ši komanda neveikia per SFTP. Norėdami ją atlikti, naudokite [FTP prisijungimą](#utiliser_cyberduck_connexion_ftp).

- Primename: svetainės atidarymą testuokite ne vėliau kaip po 3 valandų. Mūsų robotai kas 3 valandas tikrina būsenos pakeitimą. Priklausimai nuo atlikimo momento, jūsų svetainė gali būti atidaryta greičiau.

- Jeigu po 3 valandų jūsų svetainė dar neatidaryta, susisiekite su mūsų pagalbos tarnyba.




## Informacija apie prisijungimo serverį
Tam tikrais atvejais mūsų pagalba gali jūsų paklausti, koks yra Cyberduck prisijungimo serveris.  

Toks tikrinimas gali būti atliekamas, jei pastebite savo FTP erdvės sulėtėjimą arba kitas anomalijas. 

Šiam tikslui jūs turėtumėte visų pirma aktyvuoti žurnalą:


- Paspauskite Presentation;
- Paspauskite Show/hide drawer log .


Cyberduck lango apačioje matysite langą. Jūs turėtumėte:


- Prisijungti prie savo FTP erdvės;
- Perkelti viską į žurnalo viršų;
- Atnaujinti/atkurti webmXXX.



![](images/img_2364.jpg){.thumbnail}

