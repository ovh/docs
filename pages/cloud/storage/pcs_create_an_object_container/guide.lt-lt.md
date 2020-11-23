---
deprecated: true
title: Objektų konteinerio kūrimas
excerpt: Objektų konteinerio kūrimas
slug: objektu_konteinerio_kurimas
section: Object Storage
legacy_guide_number: g1921
---


## 
Norint naudoti su Public Cloud suteikiamą duomenų saugyklos sprendimą, pirmiausiai reikia sukurti konteinerį, kuriame bus saugomi failai.

Šiame gide paaiškinama, kaip kaip tai padaryti OpenStack Horizon sąsajoje.


## Reikalavimai

- [Prieigos prie Horizon kūrimas]({legacy}1773)




## 

- Prisijunkite prie Horizon
- Meniu pasirinkite „Obejktų saugykla“



![](images/img_2935.jpg){.thumbnail}

- Spragtelėkite „Sukurti konteinerį“


Atsidarys naujas langas:

![](images/img_2937.jpg){.thumbnail}
Atsidariusiame lange galite:

- Pavadinti savo konteinerį
- Pasirinkti konteinerio tipą:

|Public|Prieinamas visiems|
|---|
|Public|Prieinamas visiems|
|Privé|Prieinamas tik prisijungus|


Po to matysite savo konteinerį ir naujas galimas operacijas:

![](images/img_2938.jpg){.thumbnail}
Galėsite:

- Matyti konteinerio informaciją
- Keisti prieigą į viešą ar privačią
- Ištrinti konteinerį


Spragtelėję konteinerio pavadinimą taip pat galėsite:

- Sukurti pseudo katalogą


Į saugyklą įkelti duomenys saugomi naudojant klasikinę failų medžio struktūrą (katalogas -> subkatalogas)...
Visi failai saugomi tame pačiame lygmenyje, dėl to sumažėja prieiga prie failų.
Pseudo katalogai išsaugomi kaip prefiksai, todėl galite įvairiai rūšiuoti savo failus.

- Įkelti failus
- Trinti failus ir pseudo katalogus
- Parsisiųsti failus
- Kopijuoti failus
- Peržiūrėti failų detales




## 
[Grįžti į Cloud gidų sąrašą]({legacy}1785)

