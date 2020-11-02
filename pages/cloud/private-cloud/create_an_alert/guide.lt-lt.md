---
deprecated: true
title: Įspėjimo kūrimas
excerpt: ''
slug: spejimo_kurimas
legacy_guide_number: g599
---


## 
vSphere klientinėje programoje įjunkite lokalią pagalbą arba naudokite RDP jungtį, kurią suteikėme PCC aktyvavimo metu.


## 
Galima sukurti įspėjimus visiems Private Cloud elementams: pačiam Private Cloud, grupėms, VM, duomenų saugykloms, tinklui...
Norint tai padaryti, pakanka dešiniuoju pelės klavišu spragtelėti Private Cloud ar bet kokį jo elementą ir pasirinkti "Alarm", po to "Add Alarm".

![](images/img_91.jpg){.thumbnail}
Skirtuke "General" nurodykite įspėjimo pavadinimą ir pasirinkite įsėjimo tipą:

![](images/img_92.jpg){.thumbnail}
Skirtuke "Triggers" nurodykite parametrus, kuriuos stebėti, taip pat įspėjimo sąlygas. Mygtukas "Add" leidžia personalizuoti taisyklę. Pavyzdžiui, galite stebėti mazgo RAM ir nurodyti būsenos slenkstį, kurį peržengus bus siunčiamas įspėjamasis el. laiškas.

![](images/img_93.jpg){.thumbnail}
Skirtuke "Reports" galite nurodyti intervalą, kuris bus naudojamas prieš įjungiant įspėjimą, priklausomai nuo pasikartojimo dažnumo.
Pavyzdžiui, jei mazgas naudojamas 95% ar didesniu intensyvumu ilgiau nei 5 minutes, gausite įspėjimą. 

Skirtuke "Action" nustatomas veiksmas, kurį atlikti aptikus įspėjimo situaciją: siųsti el. laišką, išjungti VM ar paleisti komandą.

![](images/img_103.jpg){.thumbnail}

