---
deprecated: true
title: Automatinis objektų pašalinimas
excerpt: Automatinis objektų pašalinimas
slug: automatinis_objektu_pasalinimas
section: Object Storage
---


## 
Siekiant supaprastinti jūsų Object Storage valdymą, jums gali prireikti nustatyti kai kurių failų galiojimo trukmę.
Tai jums leis, pavyzdžiui, saugoti kai kurias atsargines kopijas tik tam tikru laikotarpiu.
Šiame gide paaiškinama, kaip įjungti automatinį failų pašalinimą po nustatymo termino arba pasirinktą dieną.


## Reikalavimai

- [Paruošti aplinką OpenStack API naudojimui]({legacy}1851)
- [Įkelti OpenStack aplinkos kintamuosius]({legacy}1852)




## 
Jūs galite pašalinti savo failus dviem būdais:

- Po nustatyto sekundžių skaičiaus;
- Pasirinktą dieną.




## Po nustatyto sekundžių skaičiaus
Jums reikės sukonfigūruoti savo objektų antraštę X-Delete-After:


```
root@server:~$ swift post --header "X-Delete-After: 3600" container test.txt
```


Taigi test.txt failas bus pašalintas po 1 valandos.


## Pasirinktą dieną
Pirmiausia turite žinoti pašalinimo datą epoch formatu.
Naudodami [konvertavimo įrankį](http://www.epochconverter.com/) galėsite greitai susirasti reikiamą vertę.

Po to galėsite įvesti šią datą atraštėje X-Delete-At:


```
root@server:~$ swift post --header "X-Delete-At: 1448928000000" container test.txt
```


Taigi test.txt failo pašalinimo data: 2015-12-01.


## 
[Grįžti į Cloud gidų sąrašą]({legacy}1785)

