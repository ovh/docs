---
title: Modificar os servidores DNS de uma instância
excerpt: Modificar os servidores DNS de uma instância
slug: modificar_os_servidores_dns_de_uma_instancia
legacy_guide_number: g1985
---


## 
O servidor DNS configurado de forma padrão nas instâncias será o da OVH (213.186.33.99), embora será possível que o modifique por outro(s).
No entanto, os servidores DNS são configurados automaticamente graças ao servidor DHCP e não basta alterar o ficheiro resolv.conf.

Este guia irá então explicar-lhe como poderá modificar a configuração DHCP da sua instância para que possa modificar os servidores DNS das suas instâncias


## Pré-requisitos

- Uma instância




## 

- Ligar-se a uma instância através de SSH


```
user@postelocal:~$ ssh admin@ip_da_instancia
```


- Tornar-se root


```
admin@instance:~$ sudo su
```



É possível consultar o ficheiro resolv.conf para que possa confirmar qual o servidor DNS configuraado:


```
root@instance:~$ cat /etc/resolv.conf

domain local
search local
nameserver 213.186.33.99
```



- Deverá editar então o ficheiro /etc/dhcp/dhclient.conf


```
root@instance:~$ vim /etc/dhcp/dhclient.conf
```


- E deverá adicionar a linha que permitirá a adição de um novo servidor DNS além do que está configurado de forma padrão

```
supersede domain-name-servers 213.186.33.99, 127.0.0.1;
```



Após este processo terminado, a sua instância irá dispor de 2 servidores DNS configurados:


```
root@instance:~$ cat /etc/resolv.conf

domain local
search local
nameserver 213.186.33.99
nameserver 127.0.0.1
```




## 
[Voltar à página principal dos guias Cloud]({legacy}1785)

