---
title: SSH rakto keitimas praradimo atveju
excerpt: SSH rakto keitimas praradimo atveju
slug: ssh_rakto_keitimas_praradimo_atveju
legacy_guide_number: g2069
---


## 
Praradus SSH raktą, dėl pakartotinio diegimo ar kitų veiksmų, jūs tikriausiai nebegalėsite prisijungti prie savo virtualios mašinos, jeigu nebuvo sukonfigūruota jokia alternatyvi prisijungimo prie virtualios mašinos priemonė.

Prieigos atkūrimui galite naudoti rescue režimą, leidžiantį prisijungti su slaptažodžiu, ir tik po to galėsite keisti savo failus.

Šiame gide paaiškinama, kaip konfigūruojamas admin naudotojo authorized_keys failas, siekiant pridėti naują SSH raktą, leisiantį atkurti prieigą prie jūsų virtualios mašinos.


## Reikalavimai

- [SSH raktų kūrimas]({legacy}1769)
- [Virtualios mašinos perjungimas į rescue režimą]({legacy}2029)




## 
Po to, kai jūsų virtualios mašinos diskas bus prijungtas rescue režimu, jūs turėsite prieigą prie visų failų.

Su jūsų SSH raktais susijęs failas yra:


```
/home/NOM_UTILISATEUR/.ssh/authorized_keys
```


Jeigu norite pridėti naują SSH raktą, jums tereikia atlikti šio failo redagavimą ir pridėti naują SSH raktą:


```
admin@instance:~$ sudo vim /mnt/home/NOM_UTILISATEUR/.ssh/authorized_keys

ssh-rsa 1111111111122222222222333333333333444444444555555555556666666666
777777777778888888888999999900000000000000000000000000== old@sshkey
ssh-rsa AAAAAAAAABBBBBBBBBBBCCCCCCCCCCCCCCCCDDDDDDDDDDDDDDDDDDDEEEEEEEEE
EEFFFFFFFFFFFFFGGGGGGGGGGGGGhhhhhhhhhhhhhhhhhhhhhhhhhh== new@sshkey
```



## Svarbu:
Keičiant numatytojo naudotojo SSH raktą, jums tereikia patekti į šio naudotojo asmeninį katalogą.

Pavyzdžiui, admin naudotojo atveju, ieškomas failas bus kataloge:


```
/home/admin/.ssh/authorized_keys
```


Ubuntu 15.10 virtualiai mašinai priskirtas numatytasis naudotojas yra ubuntu, taigi ieškomas failas bus kataloge:


```
/home/ubuntu/.ssh/authorized_keys
```



## Jūs taip pat galite keisti savo numatytojo naudotojo slaptažodį naudojant rescue režimą ir šias komandas (jeigu naudotojas yra [b]admin[/b]):

- Keičiamas šakninis katalogas ir pereinama tiesiai prie virtualios mašinos disko:


```
root@instance:/home/admin# mount /dev/vdb1 /mnt/
root@instance:/home/admin# chroot /mnt/
```


- Keičiamas admin slaptažodis:


```
root@instance:/# passwd admin
```



Atlikus ir išsaugojus šiuos keitimus, jums tereikės iš naujo paleisti savo virtualią mašiną diske, taip galėsite prisijungti prie savo virtualios mašinos su nauju SSH raktu.


## 

- [Papildomų SSH raktų konfigūravimas]({legacy}1924)
- [Persijungimas į root ir slaptažodžio kūrimas]({legacy}1786)




## 
[Grįžti į Cloud gidų sąrašą]({legacy}1785)

