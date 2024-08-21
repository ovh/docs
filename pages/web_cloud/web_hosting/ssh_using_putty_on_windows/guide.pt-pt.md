---
title: 'Partilhado: Utilização do Putty em Windows'
excerpt: 'Partilhado: Utilização do Putty em Windows'
updated: 2020-05-05
---

## Introdução
Nos sistemas Windows existem vários programas disponíveis para a utilização de SSH.
Um dos mais populares e fáceis de utilizar é o "Putty".
Pode efetuar o seu download [no website oficial](http://www.putty.org/).

Será então necessário ter consigo os seus identificadores FTP

- Servidor FTP.
- Login FTP.
- Password FTP.

Encontrará estas informações no Painel de configuração. Aceda à secção FTP ou siga as instruções abaixo
[este guia](/pages/web_cloud/web_hosting/ftp_connection).

## Inicio do Putty

- Após a sua instalação, inicie o Putty
- No campo Host Name (or IP address) introduza o seu servidor FTP.
- No campo Port introduza 22 se não estiver já colocada.
- Selecione SSH.
- Clique em Open.

![Putty](/pages/assets/screens/other/web-tools/putty/configuration.png){.thumbnail}

## Ligação ao seu alojamento

- Na linha de comandos que é aberta introduza o seu login FTP, e depois selecione "Enter".
- Introduza de seguida a sua mot de passe FTP, e depois selecione "Enter".

Por razões de segurança do Putty, nesta última etapa não consegue visualizar os caracteres quando introduz a password. Se a password ou o login não estiverem corretos, recomece de novo.

- Se os seus identificadores FTP forem introduzidos de forma correta receberá uma mensagem de "Welcome to Ovh"

## Utilização do SSH
Para a utilização do SSH é necessário consultar[este guia](https://www.ovh.com/fr/g1962.mutualise_le_ssh_sur_les_hebergements_mutualises).

