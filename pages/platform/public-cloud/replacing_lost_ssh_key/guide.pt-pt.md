---
title: Alterar a chave SSH em caso de perda
excerpt: Alterar a chave SSH em caso de perda
slug: alterar_a_chave_ssh_em_caso_de_perda
legacy_guide_number: g2069
section: Gestão a partir da Área de Cliente OVHcloud
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

**Última atualização: 27/09/2018**

## Objetivo

Em caso de perda de chaves SSH, seja na sequência de uma reinstalação de correio, é possível que não esteja em condições de se ligar à sua instância se não tiver configurado nenhum meio alternativo de se ligar à sua instância.

Para recuperar o acesso, disponibilizámos-lhe um [modo de rescue](https://docs.ovh.com/pt/public-cloud/passar_uma_instancia_em_modo_de_rescue/) que lhe permite ligar-se através de uma palavra-passe e depois modificar os seus ficheiros.

**Este manual explica-lhe como configurar o ficheiro *authorized_keys* do utilizador *admin* para poder adicionar uma nova chave SSH para recuperar o acesso à sua instância.**

## Requisitos

- Criar uma chave SSH
- Passar uma instância em modo rescue

## Instruções

> [!primary]
>
Se pretender guardar uma chave SSH na Área de Cliente OVHcloud, recomendamos que utilize a encriptação RSA ou ECDSA. ED25519 não está atualmente a ser utilizado.
>

Depois de montar o disco da sua instância em [modo rescue](https://docs.ovh.com/pt/public-cloud/passar_uma_instancia_em_modo_de_rescue/), poderá aceder ao conjunto dos seus ficheiros.

O ficheiro que contém as suas chaves SSH é o seguinte:

```sh
/home/NOME_UTILIZADOR/.ssh/authorized_keys
```

Para adicionar a nova chave SSH, basta editar o ficheiro e adicionar a nova chave:

```sh
sudo vim /mnt/home/NOME_UTILIZADOR/.ssh/authorized_keys
ssh-rsa 1111111111122222222222333333333334444444555 5555555666666666777777777777888888888899999000000= old@sshkey0000000000000000000
hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh= new@sshkey
```

### Alterar a chave SSH utilizador padrão

Para alterar a chave SSH do utilizador predefinida, só precisa de aceder à pasta pessoal do utilizador. Por exemplo, para o utilizador admin, o ficheiro a encontrar encontra-se na seguinte pasta:

```sh
/home/admin/.ssh/authorized_keys
```

Para uma instância sob Ubuntu 15.10, o utilizador predefinido será ubuntu, o ficheiro estará na seguinte pasta:

```sh
/home/ubuntu/.ssh/authorized_keys
```

### Alterar a palavra-passe de utilizador predefinida

Também pode alterar a palavra-passe do utilizador predefinido utilizando o modo rescue e os seguintes comandos (no caso de o utilizador ser admin):

A pasta raiz é alterada para ser colocada diretamente no disco da instância:

> [!primary]
>
No exemplo abaixo, utilizámos o vdb1 como nome do disco do servidor e como ponto de montagem.
>

```sh
/home/admin# mount /dev/vdb1 /mnt/
/home/admin# chroot /mnt/
```

Alteramos a palavra-passe admin:

```sh
passwd admin
```

Depois de efetuar esta modificação e de efetuar o backup, basta que reinicie a sua instância no seu disco para que se possa ligar à sua instância com a sua nova chave SSH.

## Saiba mais

[Passar uma instância em modo rescue](https://docs.ovh.com/pt/public-cloud/passar_uma_instancia_em_modo_de_rescue/)

Fale com a nossa comunidade de utilizadores em <https://community.ovh.com/en/>.
