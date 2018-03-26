---
title: Virtualios mašinos perjungimas į rescue režimą
excerpt: Virtualios mašinos perjungimas į rescue režimą
slug: virtualios_masinos_perjungimas_i_rescue_rezima
legacy_guide_number: g2029
---


## 
Dėl nesėkmingai atlikto konfigūravimo ar SSH rakto praradimo jūs galite prarasti prieigą prie savo virtualios mašinos.
OVH siūlo naudoti rescue režimą, suteikiantį prieigą prie duomenų, ir galimybę koreguoti įvairius jūsų konfigūravimo failus.

Rescue režimo veikimas paprastas:
Jūsų virtuali mašina paleidžiama naujame atvaizde, arba naudojama bazinės konfigūracijos virtuali mašina.
Jūsų virtualios mašinos diskas susietas su jūsų virtualia mašina kaip papildomas diskas, todėl pakanka tik jį pridėti norint gauti prieigą prie duomenų.

Šiame gide paaiškinamas Rescue mode naudojimas.


## Reikalavimai

- [Sukurti virtualią mašiną OVH kliento valdymo sąsajoje]({legacy}1775)




## Persijungimas į Rescue režimą
Norėdami perjungti serverį į Rescue režimą spragtelėkite rodyklę virtualios mašinos dešiniajame viršutiniame kampe ir rinkitės Paleidimas Rescue režimu:

![](images/img_3494.jpg){.thumbnail}
Po to pasirinkite atvaizdą, kuriame norite perkrauti savo serverį Rescue režimu:

![](images/img_3495.jpg){.thumbnail}
Jums pateikiami pagal nutylėjimą siūlomi atvaizdai ir papildomas atvaizdas Distribution Rescue Made-in-OVH, leidžiantis prisijungti prie virtualios mašinos Rescue režimu naudojant laikiną slaptažodį.

Po serverio perjungimo į Rescue režimą naujai atsidariusiame lange žemiau dešinėje matysite laikiną slaptažodį:

![](images/img_3497.jpg){.thumbnail}


## Prieiga prie duomenų
Kaip paaiškinta aukščiau, jūsų virtualios mašinos duomenys bus susieti Rescue režimu kaip papildomas diskas.  
Norėdami gauti prieigą, tiesiog pridėkite diską vadovaudamiesi instrukcijomis:


- Prisijungimas root teisėmis:


```
admin@instance:~$ sudo su
```


- Prieinamų diskų patikrinimas:


```
root@instance:/home/admin# lsblk
NAME MAJ:MIN RM SIZE RO TYPE MOUNTPOINT
vda 253:0 0 1G 0 disk
└─vda1 253:1 0 1023M 0 part /
vdb 253:16 0 10G 0 disk
└─vdb1 253:17 0 10G 0 part
```


- Skirsnio pridėjimas;


```
root@instance:/home/admin# mount /dev/vdb1 /mnt
```



Jūsų duomenys dabar prieinami /mnt kataloge.

Jūs galite, pavyzdžiui, redaguoti failą, kuriame pateiktas admin naudotojui skirtų SSH raktų sąrašas:


```
root@instance:/home/admin# vim /mnt/home/admin/.ssh/authorized_keys
```




## Įprastas virtualios mašinos paleidimas iš naujo
Atlikę šiuos veiksmus galėsite iš naujo paleisti virtualią mašiną įprastomis priemonėmis. Tiesiog spragtelėkite rodyklę virtualios mašinos dešiniajame viršutiniame kampe ir rinkitės Išėjimas iš Rescue režimo:

![](images/img_3496.jpg){.thumbnail}


## OpenStack API
Jūs galite iš naujo paleisti savo virtualią mašiną rescue režimu ir per OpenStack API naudodami šią eilutę:


```
root@server:~# nova rescue INSTANCE_ID
```


Norėdami išeiti iš Rescue režimo naudokite šią eilutę:


```
root@server:~# nova unrescue INSTANCE_ID
```




## 

- [SSH raktų kūrimas]({legacy}1769)
- [Papildomų SSH raktų konfigūravimas]({legacy}1924)




## 
[Grįžti į Cloud gidų sąrašą]({legacy}1785)

