---
title: 'Tornar-se o utilizador root e selecionar uma palavra-passe'
slug: tornar-se_root_e_definir_uma_palavra-passe
excerpt: 'Saiba como tornar-se o utilizador root e criar uma palavra-passe para a conta root'
legacy_guide_number: g1786
---

**Última atualização: 23/04/2019**

## Sumário

Para realizar determinadas tarefas num servidor (como a instalação de pacotes, por exemplo), é necessário dispor de um nível de acesso elevado. Nos servidores Linux, este nível denomina-se “root”.

**Saiba como tornar-se o utilizador root e criar uma palavra-passe para a conta root.**

## Requisitos

* Dispor de um projeto Public Cloud ativo.
* Poder ligar-se ao servidor através de SSH.

> [!primary]
>
> Este manual supõe que o utilizador predefinido tem como nome “admin”.
>

## Instruções

### Alterar a palavra-passe root

Em primeiro lugar, ligue-se ao servidor por SSH.

Para isso, utilize o comando indicado abaixo e defina uma palavra-passe para o utilizador “admin” (por motivos de segurança, a palavra-passe não é mostrada):

```sh
~$ sudo passwd
Enter new UNIX password:
Retype new UNIX password:
passwd: password updated successfully 
successfully
```

### Atualizar os repositórios (Debian e Ubuntu)

Para atualizar os _pacotes_ de software instalados no seu servidor, insira o seguinte comando:

```
sudo apt-get update
```

### Atualizar o sistema (CentOS e Fedora)

Para atualizar o sistema operativo do servidor, insira o seguindo comando:

```
~$ sudo yum update
```

### Alterar o ficheiro de configuração

Para atualizar o ficheiro de configuração do servidor, insira o seguindo comando:

```
~$ sudo vi /etc/hosts.allow
```

### Ligar-se como root

Para se tornar o utilizador root, insira o seguinte comando:

```
~$ sudo su -
~#
```

A seguir, indique a palavra-passe root.

## Quer saber mais?

Fale com a nossa comunidade de utilizadores em [https://community.ovh.com/en/](https://community.ovh.com/en/)