---
title: Tornar-se root e definir uma palavra-passe
excerpt: Tornar-se root e definir uma palavra-passe
slug: tornar-se_root_e_definir_uma_palavra-passe
legacy_guide_number: g1786
---


## 
Para efetuar certas ações deverá tornar-se root, nomeadamente para:

- A instalação de pacotes
- Definir passwords para um utilizador ou root (indispensável para aceder ao KVM)
- Para efetuar certos trabalhos de administração




## Pré-requisitos

- []({legacy}1775)
- Estar ligado por SSH com o utilizador padrão (admin ou o nome da distribuição para as imagens mais recentes)



## Informações
Este guia foi desenvolvido com o principio que o utilização padrão é admin.


## Definir uma palavra-passe

- Definir uma password para o utilizador admin (A password não será apresentada em "plein text" por razões de segurança):

```
~$ sudo passwd
Enter new UNIX password:
Retype new UNIX password:
passwd: password updated successfully
```


- Definir uma password para o utilizador root (A password não será apresentada em "plein text" por razões de segurança):

```
~$ sudo passwd root
Enter new UNIX password:
Retype new UNIX password:
passwd: password updated successfully
```





## Outros exemplos

- Atualizar a cache de pacotes (Debian / Ubuntu)

```
~$ sudo apt-get update
```


- Atualizar o sistema (CentOS / Fedora)

```
~$ sudo yum update
```


- Editar um ficheiro de configuração:

```
~$ sudo vi /etc/hosts.allow
```





## 

- Tornar-se root

```
~$ sudo su -
~#
```


- Definir uma palavra-passe para o utilizador root (depois de se tornar root):

```
~# passwd
Enter new UNIX password:
Retype new UNIX password:
passwd: password updated successfully
```


- Definir uma palavra-passe para o utilizador admin

```
~# passwd admin
Enter new UNIX password:
Retype new UNIX password:
passwd: password updated successfully
```





## 
[Voltar ao índice dos guias Cloud]({legacy}1785)

