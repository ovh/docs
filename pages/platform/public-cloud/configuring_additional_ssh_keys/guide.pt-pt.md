---
title: Configurar as chaves SSH suplementares
excerpt: Configurar as chaves SSH suplementares
slug: configurar_as_chaves_ssh_suplementares
legacy_guide_number: g1924
---


## 
Apenas será possível criar uma instância se dispuser de uma chave SSH.
Poderá autorizar o acesso a outros utilizadores que disponha de uma chave SSH à sua instância ao configurar o ficheiro authorized_keys..

Este guia explica-lhe como poderá configurar chaves SSH suplementares da sua instância para que possa dar o acesso a outras pessoas.


## Pré-requisitos

- Uma instância




## Criação da chave SSH
Para que possa criar a chave SSH sugerimos a consulta do seguinte guia:

- [Criação das chaves SSH]({legacy}1769)


Não será necessário adicioná-las no seu Espaço Cliente OVH.


## Configuração de um novo utilizador

- Ligue-se à sua instância
- Crie um novo utilizador

```
admin@serveur-1:~$ sudo adduser user2

Adding user `user2' ...
Adding new group `user2' (1001) ...
Adding new user `user2' (1001) with group `user2' ...
Creating home directory `/home/user2' ...
Copying files from `/etc/skel' ...

Enter new UNIX password:
Retype new UNIX password:
passwd: password updated successfully
Changing the user information for user2
Enter the new value, or press ENTER for the default
Full Name []:
Room Number []:
Work Phone []:
Home Phone []:
Other []:
Is the information correct? [Y/n] Y
```


- Adicione a chave SSH pública na pasta pessoal do novo utilizador

```
admin@serveur-1:~$ sudo vim /home/user2/.ssh/authorized_keys
```



Caso não existe, poderá criar a pasta .ssh.

```
admin@serveur-1:~$ sudo mkdir /home/user2/.ssh/
```


A partir desse momento já será possível que esse utilizador se ligue com a chave privada associada à chave anteriormente configurada.

```
root@serveur:~$ ssh user2@149.xxx.xxx.22

Linux serveur-1 3.2.0-4-amd64 #1 SMP Debian 3.2.68-1+deb7u1 x86_64
Last login: Fri Oct 16 08:14:24 2015 from proxy-109-190-254-35.ovh.net

user2@serveur-1:~$
```


Poderá configurar outras chaves SSH para o utilizador admin ao adicioná-las no ficheiro authorized_keys correspondente.

```
admin@serveur-1:~$ sudo vim /home/admin/.ssh/authorized_keys
```




## 
[Voltar à página principal dos guias Cloud]({legacy}1785)

