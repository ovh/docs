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

**Última atualização: 10/02/2022**

## Objetivo

Em caso de perda de chaves SSH, seja na sequência de uma reinstalação de correio, é possível que não esteja em condições de se ligar à sua instância se não tiver configurado nenhum meio alternativo de se ligar à sua instância.

Para recuperar o acesso, disponibilizámos-lhe um [modo de rescue](https://docs.ovh.com/pt/public-cloud/passar_uma_instancia_em_modo_de_rescue/) que lhe permite ligar-se através de uma palavra-passe e depois modificar os seus ficheiros.

**Este manual explica-lhe como configurar o ficheiro *authorized_keys* do utilizador *admin* para poder adicionar uma nova chave SSH para recuperar o acesso à sua instância.**

## Requisitos

- Ter uma [Instância Public Cloud](https://www.ovhcloud.com/pt/public-cloud/) na sua conta OVHcloud
- Ter acesso à sua instância via SSH em [modo rescue](../passar_uma_instancia_em_modo_de_rescue/)
- Criar uma chave SSH

## Instruções

> [!primary]
>
Se pretender guardar uma chave SSH na Área de Cliente OVHcloud, recomendamos que utilize a encriptação RSA ou ECDSA. ED25519 não está atualmente a ser utilizado.
>

Depois de montar o disco da sua instância em [modo rescue](../passar_uma_instancia_em_modo_de_rescue/#aceder-a-sua-informacao), poderá aceder ao conjunto dos seus ficheiros.

O ficheiro que contém as suas chaves SSH é o seguinte:

```sh
/mnt/home/NOME_UTILIZADOR/.ssh/authorized_keys
```

Para adicionar a nova chave SSH, basta editar o ficheiro e adicionar a nova chave:

```sh
sudo vim /mnt/home/NOME_UTILIZADOR/.ssh/authorized_keys
ssh-rsa 1111111111122222222222333333333333444444444555555555556666666666
777777777778888888888999999900000000000000000000000000== old@sshkey
ssh-rsa AAAAAAAAABBBBBBBBBBBCCCCCCCCCCCCCCCCDDDDDDDDDDDDDDDDDDDEEEEEEEEE
EEFFFFFFFFFFFFFGGGGGGGGGGGGGhhhhhhhhhhhhhhhhhhhhhhhhhh== new@sshkey
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

[Tornar-se o utilizador root e selecionar uma palavra-passe](https://docs.ovh.com/pt/public-cloud/tornar-se_root_e_definir_uma_palavra-passe/)

Fale com a nossa comunidade de utilizadores em <https://community.ovh.com/en/>.
