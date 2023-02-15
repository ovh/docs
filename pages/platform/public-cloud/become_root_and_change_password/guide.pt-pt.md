---
title: 'Tornar-se o utilizador root e selecionar uma palavra-passe'
slug: tornar-se_root_e_definir_uma_palavra-passe
excerpt: 'Saiba como tornar-se o utilizador root e criar uma palavra-passe para a conta root'
section: Introdução
order: 08
updated: 2022-03-24
---

**Última atualização: 24/03/2022**

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

## Sumário

Para realizar determinadas tarefas num servidor (como a instalação de pacotes, por exemplo), é necessário dispor de um nível de acesso elevado. Nos servidores Linux, este nível denomina-se “root”.

**Este manual explica-lhe como tornar-se o utilizador root e como criar uma palavra-passe para a conta root.**

## Requisitos

- Uma [instância Public Cloud ](https://docs.ovh.com/pt/public-cloud/public-cloud-primeiros-passos/#3o-passo-criacao-de-uma-instancia) na sua conta OVHcloud
- Ter acesso à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt)

## Instruções

### Definição da password "root" <a name="settingtherootpassword"></a>

Em primeiro lugar, estabelecer uma [ligação SSH](https://docs.ovh.com/pt/public-cloud/public-cloud-primeiros-passos/#4o-passo-conexao-a-instancia) ao seu servidor com o seu utilizador predefinido.

Para isso, utilize o comando indicado abaixo e defina uma palavra-passe para o utilizador “root” (por motivos de segurança, a palavra-passe não é mostrada):

```bash
~$ sudo passwd root
Enter new UNIX password:
Retype new UNIX password:
passwd: password updated successfully 
```

### Atualizar o sistema (Debian e Ubuntu)

Para atualizar os _pacotes_ de software instalados no seu servidor, insira o seguinte comando:

```bash
~$ sudo apt update && sudo apt upgrade -y
```

### Atualizar o sistema (CentOS e Fedora)

Para atualizar o sistema operativo do servidor, insira o seguindo comando:

```bash
sudo yum update
```

### Ligar-se como root

Para se tornar o utilizador root, insira o seguinte comando:

```bash
~$ sudo su -
~#
```

A seguir, indique a palavra-passe root.


### Ativar a ligação "root" e a autenticação por palavra-passe

#### Para as ligações através da consola VNC integrada na Área de Cliente OVHcloud

Em primeiro lugar, [defina a palavra-passe root](#settingtherootpassword)

De seguida, aceda à consola VNC:

Clique nas `...`{.action} à direita da sua instância, e em `Dados da instância`{.action} 

![access instance](images/instancedetails.png){.thumbnail} 

Vá ao separador `Consola VNC`{.action}. Quando solicitado, introduza o seu nome de ligação como **root** e insira a sua palavra-passe.

![vnc](images/vnc.png){.thumbnail} 

#### Para as ligações que utilizam terminais Linux

Em primeiro lugar, [defina a palavra-passe root](#settingtherootpassword)

A seguir, ative a autenticação da ligação "root" e da palavra-passe no seu ficheiro **sshd_config**:

```bash
~$ sudo sed -i 's/#PermitRootLogin prohibit-password/PermitRootLogin yes/g' /etc/ssh/sshd_config

~$ sudo sed -i 's/PasswordAuthentication no/PasswordAuthentication yes/g' /etc/ssh/sshd_config
```

Reinicie o serviço SSH:

```bash
~$ service sshd restart
```

Uma vez terminado, deverá poder aceder ao seu servidor com o utilizador root e a palavra-passe definida.

#### Para as ligações que utilizam Putty

Em primeiro lugar, [defina a palavra-passe root](#settingtherootpassword)

A seguir, ative a autenticação da ligação "root" e da palavra-passe no seu ficheiro **sshd_config**:


```bash
~$ sudo sed -i 's/#PermitRootLogin prohibit-password/PermitRootLogin yes/g' /etc/ssh/sshd_config

~$ sudo sed -i 's/PasswordAuthentication no/PasswordAuthentication yes/g' /etc/ssh/sshd_config
```

Reinicie o serviço SSH:

```bash
~$ service sshd restart
```

No agente de autenticação Putty (*pageant key list*), elimine a sua chave SSH privada.

![remove private key](images/pageantkeylist.png){.thumbnail}

Uma vez terminado, deverá poder aceder ao seu servidor com o utilizador root e a palavra-passe definida.

## Quer saber mais?

Fale com a nossa comunidade de utilizadores em <https://community.ovh.com/en/>.