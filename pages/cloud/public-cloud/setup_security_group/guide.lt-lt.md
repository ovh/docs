---
title: Saugumo grupių konfigūravimas
excerpt: Saugumo grupių konfigūravimas
slug: saugumo_grupiu_konfiguravimas
legacy_guide_number: g1925
---


## 
Galite saugumo sumetimais sukonfigūruoti saugumo grupes, kuriose bus nustatyta prieiga prie jūsų VM.

Saugumo grupėse galite autorizuoti ar blokuoti įeinančius ir išeinančius prisijungimus. Tai gali būti taikoma tik tam tikriems IP adresams arba tam tikroms VM, esančioms vienoje saugumo grupėje.

Šiame gide paaiškinama, kaip tokiu būdu apsaugoti savo VM.


## Reikalavimai

- [Sukurti prieigą prie Horizon]({legacy}1773)
- Prisijungimas prie Horizon sąsajos




## Saugumo grupės kūrimas

- Spragtelėkite „Access & Security“, po to „Security groups“.



![](images/img_2959.jpg){.thumbnail}
Matysite „default“ grupę, ji praleidžia visą įeinantį ir išeinantį srautą.

- Spragtelėkite „Create security group“.



![](images/img_2960.jpg){.thumbnail}

- Kai įvesite pavadinimą ir apibūdinimą, spragtelėkite „Create security group“.


Spragtelėję „Manage rules“ matysite pagal nutylėjimą sukurtas taisykles:

![](images/img_2961.jpg){.thumbnail}
Nauja saugumo grupė pagal nutylėjimą praleidžia tik išeinantį srautą.


## VM su saugumo grupe konfigūravimas

- Pereikite į „Instances“
- Sukurkite naują VM (instance)
- Pereikite į „Access & Security“ ir pažymėkite naujai sukurtą grupę



![](images/img_2962.jpg){.thumbnail}
Sukurtų VM saugumo grupės konfigūraciją galima keisti prie „Actions“ pasirinkus „Edit security groups“.

![](images/img_2964.jpg){.thumbnail}


## Saugumo grupės konfigūravimas
Kaip nurodyta anksčiau, naujai sukurta saugumo grupė praleidžia tik išeinantį srautą:


```
root@serveur:~$ ssh admin@149.xxx.xxx.177

ssh: connect to host 149.xxx.xxx.177 port 22: Connection timed out
```



- Meniu „Access & security“ spragtelėkite „Security groups“.
- Spragtelėkite „Manage rules“, po to „Add rule“.



![](images/img_2963.jpg){.thumbnail}
Kai pridėsite taisyklę, reikės palaukti kelias minutes, kol ji įsigalios.

![](images/img_2965.jpg){.thumbnail}

```
root@serveur:~$ ssh admin@149.xxx.xxx.177

Last login: Tue Oct 13 13:56:30 2015 from proxy-109-190-254-35.ovh.net
admin@serveur1:~$
```




## 
[Grįžti į Cloud gidų sąrašą]({legacy}1785)

