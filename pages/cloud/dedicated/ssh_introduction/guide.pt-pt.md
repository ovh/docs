---
title: Introdução ao SSH
slug: ssh-introducao
excerpt: Saiba como aceder ao seu servidor usando o protocolo SSH
section: SSH e chave SSH
order: 1
---

**Última atualização 03/01/2018**

## Sumário

O protocolo de comunicação SSH (Secure Shell) vem instalado de origem em todo o tipo de servidores OVH (VPS, servidores dedicados, instâncias Public Cloud). Este serviço permite estabelecer uma ligação segura e efetuar todo o tipo de operações na sua máquina.

**Como usar o serviço SSH para aceder ao servidor?**

## Requisitos

- Dispor de um serviço dedicado OVH  (VPS, servidores dedicados, instâncias Public Cloud).


## Instruções

### Software compatível

Existem muitas opções para efetuar o acesso SSH. Este guia inclui alguns exemplos associados às soluções disponíveis.

#### Windows

- [PuTTY](http://www.putty.org/){.external} (Gratuito)
- [MobaXterm](https://mobaxterm.mobatek.net/) (versão gratuita e versão paga)
- [SecureCRT](http://www.vandyke.com/products/securecrt/){.external} (Pago)

O modo Developer / Programador das últimas versões Windows 10 e Windows Server inclui o acesso a uma linha de comandos bash. Sobre esta questão, veja a informação disponibilizada pela Microsoft: <https://docs.microsoft.com/fr-fr/windows/wsl/install-win10>.

#### Mac

- O Mac OS X inclui a ferramenta `Terminal`{.action}.


#### Linux

- A ferramenta `Terminal`{.action} vem instalada de origem em todas as versões Linux.
- Para tirar partido duma gestão multi-terminal, sugerimos a instalação do pacote `Terminator`. Sobre esta questão, consulte a informação do Ubuntu: <http://manpages.ubuntu.com/manpages/zesty/man1/terminator.1.html>.
- [OpenSSH](http://www.openssh.com){.external} (Gratuito).


### Utilização inicial do SSH

#### Etapa 1: primeira ligação

Para estabelecer um ligação SSH à máquina, é necessário dispor dos seguintes dados:

- IPv4 ou nome da máquina;
- palavra-passe root da máquina (enviada por email durante a instalação da mesma).


Comandos para efetuar a ligação:

```sh
ssh root@IP_do_servidor
```

Ou então:

```sh
ssh root@nome_do_servidor
```

De seguida, irá obter a seguinte mensagem:

```sh
The authenticity of host servername (IP_do_servidor) cant be established.
RSA key fingerprint is a9:bb:55:35:86:xx:xx:00:xx:00:2b:2c:79:10:96:3c.
Are you sure you want to continue connecting (yes/no)? YES
Warning: Permanently added servername,IP_do_servidor (RSA) to the list of known hosts.
Password:
root@vps12345:~#
```

No primeiro acesso, o cliente SSH recebe uma «fingerprint» (certificado digital) da chave RSA. Trata-se do certificado digital do servidor com o qual estabeleceu ligação. Este certificado é verificado em cada ligação. Se for alterado, será informado. Esta alteração está associada às seguintes situações:

- a máquina foi reinstalada;
- o servidor SSH foi reinstalado;
- está ligado a outra máquina.

Recapitulando, na primeira ligação deverá aceitar o certificado digital. Este será registado pelo cliente SSH.


#### Etapa 2: manual bash

As várias versões Linux incluem um manual com todos os comandos e argumentos disponíveis.

```sh
man bash
```

#### Etapa 3: atualização

A versão Linux e o cliente SSH devem estar sempre atualizados. Para confirmar esta situação, use o comando:

```sh
ssh -V
```

Em caso de dúvida, consulte a informação do cliente SSH utilizado.


## Quer saber mais?

Fale com a nossa comunidade de utilizadores <https://community.ovh.com/en/>.