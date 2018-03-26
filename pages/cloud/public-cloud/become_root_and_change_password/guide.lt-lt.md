---
title: Persijungimas į root nadotoją ir slaptažodžio kūrimas
excerpt: Persijungimas į root nadotoją ir slaptažodžio kūrimas
slug: persijungimas_i_root_nadotoja_ir_slaptazodzio_kurimas
legacy_guide_number: g1786
---


## 
Norint atlikti tam tikrus veiksmus, jums kartais gali prireikti root prieigos ar atlikti operacijas kaip root naudotojas, ypač jei tai:

- Paketų diegimas;
- Slaptažodžio suteikimas naudotojui ar root naudotojui (privaloma KVM prieigai gauti);
- Tam tikrų administratoriaus užduočių atlikimas.




## Reikalavimai

- []({legacy}1775)
- Prisijungimas per SSH su naudotoju pagal nutylėjimą (admin arba distribucijos pavadinimas naujausiems vaizdams)



## Informacija
Šiame gide daroma prielaida, kad naudotojas pagal nutylėjimą yra pavadintas admin.


## Slaptažodžio kūrimas

- Suteikite slaptažodį admin naudotojui (slaptažodžio paskelbimas nematomas dėl saugumo priežasčių):

```
~$ sudo passwd
Enter new UNIX password:
Retype new UNIX password:
passwd: password updated successfully
```


- Suteikite slaptažodį root naudotojui (slaptažodžio paskelbimas nematomas dėl saugumo priežasčių):

```
~$ sudo passwd root
Enter new UNIX password:
Retype new UNIX password:
passwd: password updated successfully
```





## Kiti pavyzdžiai

- Paketų atmintinės atnaujinimas (Debian / Ubuntu)

```
~$ sudo apt-get update
```


- Sistemų atnaujinimas (CentOS / Fedora)

```
~$ sudo yum update
```


- Konfigūracinio failo redagavimas:

```
~$ sudo vi /etc/hosts.allow
```





## 

- Persijungimas į root

```
~$ sudo su -
~#
```


- Root slaptažodžio kūrimas (po persijungimo į root naudotoją):

```
~# passwd
Enter new UNIX password:
Retype new UNIX password:
passwd: password updated successfully
```


- Slaptažodžio kūrimas admin naudotojui

```
~# passwd admin
Enter new UNIX password:
Retype new UNIX password:
passwd: password updated successfully
```





## 
[Grįžti į Cloud gidus]({legacy}1785)

