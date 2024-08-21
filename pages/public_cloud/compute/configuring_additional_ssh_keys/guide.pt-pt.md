---
title: Configurar as chaves SSH suplementares
excerpt: Saiba como configurar chaves SSH adicionais para a sua instância Public Cloud
updated: 2024-01-08
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

## Objetivo
 
Ao criar uma instância, pode ser configurada uma única chave SSH para a ligação inicial. Para permitir o acesso da sua instância a outros utilizadores, podem ser adicionadas chaves suplementares configurando o ficheiro *authorized_keys*.

**Este guia explica-lhe como configurar chaves SSH suplementares para as ligações à sua instância.**

## Requisitos

- Ter uma [instância Public Cloud](https://www.ovhcloud.com/pt/public-cloud/) na sua conta OVHcloud.
- Estar ligado à [Área de Cliente OVHcloud](/links/manager).
- Ter acesso à instância via SSH enquanto administrador (sudo).

## Instruções

> [!primary]
>
Atualmente, suportamos os seguintes formatos de chave SSH: **RSA**, **ECDSA** e **ED25519**.
>

### Criação da chave SSH

Para criar uma nova chave SSH, consulte o [guia dos primeiros passos com o Public Cloud](/pages/public_cloud/compute/public-cloud-first-steps).

### Configuração do novo utilizador

[Ligue-se à sua instância em SSH](/pages/public_cloud/compute/public-cloud-first-steps#connect-to-instance) e crie um novo utilizador através dos comandos abaixo:

```bash
~$ sudo adduser user2

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

Abra o ficheiro *authorized_keys* na pasta pessoal do novo utilizador com um editor de texto:

```bash
~$ sudo nano /home/user2/.ssh/authorized_keys
```

Adicione ao ficheiro a chave pública criada na primeira etapa. Registe e feche o editor.

Se a pasta .ssh ainda não existir, pode criá-la com este comando:

```bash
~$ sudo mkdir /home/user2/.ssh/
```

Pode configurar várias chaves SSH adicionando-as aos ficheiros *authorized_keys* das pastas de utilizador correspondentes.

A partir de agora, poderá ligar-se ao utilizador e à chave privada configuradas anteriormente:

```bash
~$ ssh user2@instance_IP
```
```console
Linux b2-7-de1 5.10.0-10-cloud-amd64 #1 SMP Debian 5.10.84-1 (2021-12-08) x86_64

user2@server:~$
```

## Quer saber mais?

[Criar uma primeira instância Public Cloud e ligar-se a ela](/pages/public_cloud/compute/public-cloud-first-steps)

[Alterar a chave SSH em caso de perda](/pages/public_cloud/compute/replacing_lost_ssh_key)

Junte-se à nossa comunidade de utilizadores em <https://community.ovh.com/en/>.
