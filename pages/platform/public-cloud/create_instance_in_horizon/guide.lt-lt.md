---
title: Virtualios mašinos kūrimas Horizon sąsajoje
excerpt: Kaip Horizon sąsajoje sukurti virtualią mašiną?
slug: virtualios_masinos_kurimas_horizon_sasajoje
legacy_guide_number: g1772
---


## 
Jums gali prireikti kurti virtualias mašinas Horizon sąsajoje, ypač jeigu norite vienu metu sukurti keletą virtualių mašinų ar konfigūruoti specialią saugumo grupę savo virtualioms mašinoms. Šiame gide paaiškinama, kaip tai padaryti.


## 
Norint sukurti virtualią mašiną, reikės:


- Prisijungti prie Horizon sąsajos
- Kairiajame meniu spragtelėti Instances
- Spragtelėti Launch the Instance.
- Užpildyti formą:



## Details
Čia įveskite tokią informaciją:

|Availability zone|Palikite nova (pažymėta pagal nutylėjimą)|
|Instance name|Pageidaujamas virtualios mašinos pavadinimas|
|Šablonas|Pasirinkite kuriamos virtualios mašinos tipą|
|Number of instances|Nurodykite, kiek virtualių mašinų sukurti|
|Instance boot source|Pasirinkite virtualios mašinos kūrimo šaltinį (Paleisti iš atvaizdo ar momentinės kopijos)|
|Image name|Pasirinkite virtualios mašinos atvaizdą (tik tuo atveju, jeigu virtuali mašina kuriama iš atvaizdo)|
|Instance snapshot|Pasirinkite momentinę kopiją (tik tuo atveju, jeigu virtuali mašina kuriama iš momentinės kopijos)|



## Access and Security
Šioje skiltyje galima nurodyti SSH raktą ir virtualios mašinos saugumo grupę.

|Key pair|Pasirinkite SSH raktų porą, kurią naudosite jungimuisi prie virtualios mašinos (raktų sugeneravimui spragtelėkite mygtuką +|
|Security groups|Pasirinkite saugumo grupę, kuriai priklausys kuriama virtuali mašina (leidimas atverti prievadus)|



## Network
Šioje skiltyje galite nurodyti, prie kokių tinklų bus prijungta virtuali mašina.

|Selected networks|Pasirinkite tinklą ar tinklus, prie kurių bus prijungta virtuali mašina|



## Post-Creation
Šioje skiltyje nurodomi veiksmai po kūrimo.

|Source of the Script|Įveskite komandą arba nurodykite Failą|
|Script data|Nurodykite scenarijaus kodą, jis neturi viršyti 16KB)|
|Script file|Spragtelėkite "Browse" ir pasirinkite podiegiminį scenarijų|



## Pažangūs nustatymai
Šioje skiltyje galima keisti virtualios mašinos disko skaidymą.

|Disk partitionement|Automatic arba Manual|
|Configuration disk|Konfigūruoti OpenStack, kad metaduomenys būtų įrašomi į specialų diską, kuris bus prijungtas prie virtualios mašinos jos paleidimo metu.|




## 
[Grįžti į Cloud gidų sąrašą]({legacy}1785)

