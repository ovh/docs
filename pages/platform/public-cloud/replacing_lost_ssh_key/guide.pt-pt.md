---
title: Alterar a chave SSH em caso de perda
excerpt: Alterar a chave SSH em caso de perda
slug: alterar_a_chave_ssh_em_caso_de_perda
legacy_guide_number: g2069
---


## 
Em caso de perda da password SSH, que se trate de uma reinstalação do seu computador, ou outro problema, é possível que deixe de poder aceder à sua instância se não configurou um acesso alternativo.

Para recuperar o acesso, implementámos um modo de rescue que permite que se ligue com a ajuda de uma password de forma a poder modificar os seus ficheiros.

Este guia explica como configurar o ficheiro authorized_keys do utilizador admin de forma a poder adicionar uma nova chave SSH para recuperar o acesso à sua instância.


## Pré-requisitos

- [Criação das chaves SSH]({legacy}1769)
- [Passar uma instância para modo de rescue]({legacy}2029)




## 
Após montar o disco da sua instância em modo de rescue, poderá aceder então ao conjunto dos seus ficheiros.

O ficheiro que contém as suas chaves SSH é o ficheiro:


```
/home/NOME_UTILIZADOR/.ssh/authorized_keys
```


Se deseja adicionar uma nova chave SSH, basta que o edite e adicione a nova chave:


```
admin@instance:~$ sudo vim /mnt/home/NOME_UTILIZADOR/.ssh/authorized_keys

ssh-rsa 1111111111122222222222333333333333444444444555555555556666666666
777777777778888888888999999900000000000000000000000000== old@sshkey
ssh-rsa AAAAAAAAABBBBBBBBBBBCCCCCCCCCCCCCCCCDDDDDDDDDDDDDDDDDDDEEEEEEEEE
EEFFFFFFFFFFFFFGGGGGGGGGGGGGhhhhhhhhhhhhhhhhhhhhhhhhhh== new@sshkey
```



## Informações:
Para modificar a chave SSH do seu utilizador padrão, basta que aceda à pasta pessoal deste último.

Por exemplo, para o utilizador admin, o ficheiro encontra-se na seguinte pasta:


```
/home/admin/.ssh/authorized_keys
```


Para uma instância sob Ubuntu 15.10, o utilizador padrão será ubuntu, o ficheiro estará então na seguinte pasta:


```
/home/ubuntu/.ssh/authorized_keys
```



## A saber:
Poderá alterar igualmente a password do seu utilizador padrão ao utilizar o modo de rescue e os seguintes comandos (no caso de ser o utilizador admin) :


- Vamos alterar a pasta raiz para nos deslocarmos para a raiz do disco da instância:


```
root@instance:/home/admin# mount /dev/vdb1 /mnt/
root@instance:/home/admin# chroot /mnt/
```


- Vamos alterar a password admin :


```
root@instance:/# passwd admin
```



Após a modificação efetuada e guardada, basta que reinicie a sua instância em disco rígido de forma a poder ligar-se à sua instância com a nova chave SSH.


## 

- [Configurar as chaves SSH suplementares]({legacy}1924)
- [Tornar-se root e definir uma palavra-passe]({legacy}1786)




## 
[Voltar à página inicial dos guias Cloud]({legacy}1785)

