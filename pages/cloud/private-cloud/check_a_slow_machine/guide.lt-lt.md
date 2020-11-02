---
deprecated: true
title: Mašinos patikrinimas sulėtėjimo atveju
excerpt: ''
slug: masinos_patikrinimas_suletejimo_atveju
legacy_guide_number: g601
---


## 
Veiksmai, kurių reikia imtis, jeigu VM veikimas ženkliai sulėtėja. 

Naudokite vSphere klientinė programą, kurią galite įsidiegti lokaliai, arba naudokite RDP jungtį, kurią suteikėme PCC aktyvavimo metu.


## Virtualių mašinų patikrinimas:
Visų pirma pasirinksime probleminę VM, vėliau atidarysime skirtuką "Performance". Čia matysime CPU, RAM ir kitų VM naudojamų resursų grafiką. Jeigu šiame langelyje pastebime pernelyg didelį naudojimą, įsitikiname, kad tokį naudojimą sukėlė VM.
Šiuo atveju, galite didinti savo VM resursus, prieš tai patikrinę, ar VM nustatymų skirtuke "Resursai" nėra jokių apribojimų (dešiniuoju pelės klavišu spragtelėkite VM => "Edit Settings" => "Ressources").


## Klasterio patikrinimas / resursų bankas (pool)
Klasteryje arba resursų banke (pool) atidarykite langelį "Našumas", kuriame matysite grafinį našumo bei panaudotų resursų atvaizdavimą:

![](images/img_95.jpg){.thumbnail}
Langelyje "Resursų paskirstymas" galite matyti VM panaudotų resursų globalią statistiką:

![](images/img_96.jpg){.thumbnail}
Galimi du atvejai:

- Jeigu mazgas perkrautas, galite rankiniu būdu perkelti savo VM į kitą mazgą arba atlikti migravimą "karštai" naudojant vMotion.

Jeigu turite "Enterprise" licenciją, galite naudoti DRS funkciją, suteikiančią galimybę automatiškai valdyti šią operaciją, atsižvelgiant į panaudotus mazgo resursus.


- Jeigu visų jūsų mazgų apkrova pernelyg didelė, jūs turėtumėte pridėti papildomų mazgų langelyje "OVH Private Cloud" arba "OVH saugykla".




## Saugyklų patikrinimas
Jūs galite kontroliuoti ne tik VM resursus, bet ir saugyklas. Atidarę duomenų saugyklos langelį, pasirinkite savo NAS ir skirtuką "performance":

![](images/img_97.jpg){.thumbnail}


## Tinklo patikrinimas
Galiausiai galėsite patikrinti tinklo būklę.
Savo tvarkytuve matysite panaudotą duomenų kiekį, taip pat galimus apribojimus jūsų VLAN:


- Tvarkytuvas v5 -> Private Cloud -> Santrauka/Pagrindinis puslapis



