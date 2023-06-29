---
title: 'Tornar-se o utilizador root e selecionar uma palavra-passe'
excerpt: 'Saiba como tornar-se o utilizador root e criar uma palavra-passe para a conta root'
updated: 2022-03-24
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

**Última atualização: 24/03/2022**

## Sumário

Para realizar determinadas tarefas num servidor (como a instalação de pacotes, por exemplo), é necessário dispor de um nível de acesso elevado. Nos servidores Linux, este nível denomina-se “root”.

**Este manual explica-lhe como tornar-se o utilizador root e como criar uma palavra-passe para a conta root.**

## Requisitos

- Uma [instância Public Cloud ](/pages/platform/public-cloud/public-cloud-first-steps#3o-passo-criacao-de-uma-instancia) na sua conta OVHcloud
- Ter acesso à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt)

## Instruções

### Definição da password "root" <a name="settingtherootpassword"></a>

Em primeiro lugar, estabelecer uma [ligação SSH](/pages/platform/public-cloud/public-cloud-first-steps#4o-passo-conexao-a-instancia) ao seu servidor com o seu utilizador predefinido.

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

Em primeiro lugar, [defina a palavra-passe root](#settingtherootpassword).

De seguida, aceda à consola VNC:

Clique nas `...`{.action} à direita da sua instância, e em `Dados da instância`{.action} 

![access instance](images/instancedetails.png){.thumbnail} 

Vá ao separador `Consola VNC`{.action}. Quando solicitado, introduza o seu nome de ligação como **root** e insira a sua palavra-passe.

![vnc](images/vnc.png){.thumbnail} 

#### Para as ligações que utilizam terminais Linux

Em primeiro lugar, [defina a palavra-passe root](#settingtherootpassword).

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

Em primeiro lugar, [defina a palavra-passe root](#settingtherootpassword).

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

Se precisar de formação ou de assistência técnica para implementar as nossas soluções, contacte o seu representante comercial ou clique em [esta ligação](https://www.ovhcloud.com/pt/professional-services/) para obter um orçamento e solicitar uma análise personalizada do seu projecto aos nossos especialistas da equipa de Serviços Profissionais.

Fale com a nossa comunidade de utilizadores em <https://community.ovh.com/en/>.