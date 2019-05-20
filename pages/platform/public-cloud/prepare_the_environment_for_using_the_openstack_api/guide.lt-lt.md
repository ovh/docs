---
title: OpenStack naudojimo aplinkos paruošimas
excerpt: OpenStack naudojimo aplinkos paruošimas
slug: openstack_naudojimo_aplinkos_paruosimas
legacy_guide_number: g1851
---


## 
Norėdami valdyti Public Cloud paslaugas per komandinę eilutę, jūs turite įdiegti Python OpenStack klientus.
Tai leis jums valdyti Object Storage, taip pat automatizuoti įvairius veiksmus, kuriuos norite atlikti naudodami šiuos klientus.

Šiame gide yra aprašoma OpenStack klientų diegimo procedūra.


## Debian

- Atidarykite komandinę eilutę, arba prisijunkite per SSH prie aplinkos, kurią norite sukonfigūruoti.

- [Persijungimas į root](https://www.ovh.lt/g1786.persijungimas_i_root_nadotoja_ir_slaptazodzio_kurimas)

- Atnaujinkite programinės įrangos šaltinių bazes:

```
root@vps187763:~# apt-get update
```


- Įdiekite Nova (compute) ir Glance (image service) klientus

```
root@vps187763:~# apt-get install python-glanceclient python-novaclient -y
```



Atlikus šį žingsnį, rekomenduojama sukurti atskirą vartotoją, kad nereikėtų jungtis su root vartotoju.

- Norėdami peržiūrėti nova ir glance CLI instrukcijas, įveskite šias komandas:

```
admin@vps187763:~$ nova help
```



```
admin@vps187763:~$ glance help
```


- Išsami API OpenStack dokumentacija yra pateikta [čia](http://docs.openstack.org/cli-reference/content/)




## CentOS

- Atidarykite komandinę eilutę, arba prisijunkite per SSH prie aplinkos, kurią norite sukonfigūruoti.

- [Persijungimas į root](https://www.ovh.lt/g1786.persijungimas_i_root_nadotoja_ir_slaptazodzio_kurimas)

- Atnaujinkite programinės įrangos šaltinių bazes:

```
[root@vps187769 ~]# yum update -y
```


- Įdiekite rpm rdo-release:

```
[root@vps187769 ~]# yum install -y https://rdoproject.org/repos/rdo-release.rpm
```


- Įdiekite nova:

```
[root@vps187769 ~]# yum install -y python-novaclient
```


- Įdiekite glance:

```
[root@vps187769 ~]# yum install -y python-glanceclient
```



Šaltinis: [https://www.rdoproject.org/Quickstart](https://www.rdoproject.org/Quickstart)
Atlikus šį žingsnį, rekomenduojama sukurti atskirą vartotoją, kad nereikėtų jungtis su root vartotoju.

- Norėdami peržiūrėti nova ir glance CLI instrukcijas, įveskite šias komandas:

```
admin@vps187769:~$ nova help
```



```
admin@vps187769:~$ glance help
```


- Išsami API OpenStack dokumentacija yra pateikta [čia](http://docs.openstack.org/cli-reference/content/)




## 

- Atsisiųskite ir įdiekite [2.7.10 Python versiją](https://www.python.org/downloads/release/python-2710/)

- Paleiskite komandinę eilutę

- Įdiekite PIP naudodami easy_install:



![](images/img_3060.jpg){.thumbnail}

- Swift diegimas



![](images/img_3061.jpg){.thumbnail}

- CLI pagalbą galima peržiūrėti naudojant šią komandą:


```
C:\Windows\system32>swift --help
```





## 
[Grįžti į Cloud gidų turinį]({legacy}1785)

