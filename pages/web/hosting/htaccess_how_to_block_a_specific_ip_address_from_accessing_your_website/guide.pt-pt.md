---
title: 'Partilhado: htacess, como impedir que certos IPs acedam ao meu website?'
excerpt: 'Partilhado: htacess, como impedir que certos IPs acedam ao meu website?'
id: '1970'
slug: partilhado_htacess_como_impedir_que_certos_ips_acedam_ao_meu_website
legacy_guide_number: g1970
---

Necessit apenas de criar um ficheiro com o nome .htaccess e de o colocar na pasta www (ou numa pasta particular se desejar restringir o acesso a esta).

## Para bloquear
Este ficheiro deverá conter regras de bloqueio. Cada regra é definida numa linha na seguinte forma


```
Deny from adresse_IP
Ou Deny from plage_IP
Ou Deny from domaine
```


Basta substituir o termo genérico pelo elemento que deseja bloquear. Veja alguns exemplos:


- Deseja bloquear o endereço IP 192.168.1.2, deve escrever:


```
Deny from 192.168.1.2
```


- Deseja bloquear todos os endereços IP 192.168.x.x, deve escrever:


```
Deny from 192.168
```


- Deseja bloquear todos os endereços IP que tem uma identificação Wanadoo ( é um exemplo, não terá de o fazer), deve escrever:


```
Deny from .wanadoo.fr
```





## Para autorizar
Para autorizar apenas alguns endereços é necessário que substitua 'deny' por 'allow' (vamos utilizar os mesmos exemplos).

Exemple :

- Deseja autorizar o endereço IP 192.168.1.2, deve escrever:


```
order deny,allow
deny from all
Allow from 192.168.1.2
```



Não é possível autorizar uma range de IP não completa, se escrever:


```
order deny,allow
deny from all
Allow from 192.168.1
```


Funcionará, mas se colocar um IP menor receberá, por exemplo, um erro 500:


```
order deny,allow
deny from all
Allow from 192.168
```




## 
Tudo sobre o ficheiro .htaccess no seguinte link: [Clique aqui](https://www.ovh.com/fr/g1967.mutualise_tout_sur_le_fichier_htaccess)

