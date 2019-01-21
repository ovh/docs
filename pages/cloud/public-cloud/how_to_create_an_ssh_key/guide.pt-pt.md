---
title: 'Criar chaves SSH'
slug: criacao-de-chaves-ssh
excerpt: 'Como criar uma chave SSH para se ligar uma instância'
section: Segurança
---

**Última atualização: 21/01/2019**

## Sumário

Quando criar uma [instância Public Cloud](https://www.ovh.pt/public-cloud/instances/){.external}, não receberá nenhum e-mail com as suas credenciais. Neste caso, a autenticação é realizada através de chaves SSH protegidas.

**Saiba como criar uma chave SSH para se ligar uma instância.**

> [!primary]
>
Note que as chaves SSH não são utilizadas para a autenticação nas instâncias que executam o sistema operativo Windows. Para estas chaves, deve sempre utilizar um nome de utilizador e uma palavra-passe.
>

## Requisitos

* Criar um projeto [Public Cloud](https://www.ovh.pt/public-cloud/instances/){.external} na sua conta OVH.
* Ter acesso à [Área de Cliente OVH](https://www.ovh.com/auth/?action=gotomanager){.external}.

## Instruções

### Criar uma chave SSH em Linux e Mac

Abra a aplicação Terminal (linha de comandos) e execute o seguinte comando para criar uma chave SSH de 4096 bits:

```sh
# ssh-keygen -b 4096
```

O comando apresenta o resultado abaixo e pede-lhe para registar a chave que acabou de criar:

```sh
Generating public/private rsa key pair.
Enter file in which to save the key (/home/user/.ssh/id_rsa):
```

> [!warning]
>
> Guarde a parte privada da chave de forma segura e limite o seu acesso unicamente para as pessoas autorizadas.
> 

Uma vez que registou a chave, a linha de comandos apresentará os seguintes elementos:

```ssh
Your identification has been saved in /home/user/.ssh/id_rsa.
Your public key has been saved in /home/user/.ssh/id_rsa.pub.
The key fingerprint is:
0a:3a:a4:ac:d1:40:6d:63:6d:fd:d9:fa:d6:b2:e0:36 user@host
The key's randomart image is:
+---[RSA 4096]----+
|      .          |
|                 |
| .               |
|. . . .          |
|. .=.o .S.       |
| =o.o. ..   .    |
|o +   .  . o ..  |
|.. .      oEoo . |
|o.        .o+oo  |
+-----------------+
```

Pode consultar e mostrar a chave através do seguinte comando:

```ssh
# cat .ssh/id_rsa.pub
```

A execução deste comando apresenta os seguintes elementos:

```ssh
cat /home/user/.ssh/id_rsa.pub
ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQC8teh2NJ42qYZV98gTNhumO1b6rMYIkAfRVazl
k6dSS3xf2MXJ4YHsDacdjtJ+evXCFBy/IWgdkFtcvsGAMZ2N1RdvhDyQYcy6NDaJCBYw1K6Gv5fJ
SHCiFXvMF0MRRUSMneYlidxU3U2q66yt/wPmw1yRsQagtNKHAzFUCSOB1nFz0RkqvqgARrHTY0bd
aS0weA//aK9f6z+Y4THPbcCj4xPH4iGikFMPrFivP8Z6tidzVpAtbr1sXmJGZazYWrU3FoK2a1sF
i4ANmLy7NULWK36yU0Rp9bFJ4o0/4PTkZiDCsK0QyHhAJXdLN7ZHpfJtHIPCnexmwIMLfIhCWhO5
 user@host
```

### Criar uma chave SSH em Windows

#### Com PuTTY

[PuTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/){.external} é um cliente SSH utilizado pelo Windows. Poderá ligar-se remotamente a um servidor Linux. O seu software associado, [PuTTYgen](https://the.earth.li/~sgtatham/putty/latest/w64/puttygen.exe){.external}, pode ser utilizado para criar chaves SSH.

Comece por descarregar o programa [PuTTYgen](https://the.earth.li/~sgtatham/putty/latest/w64/puttygen.exe){.external} para poder gerar a chave.

Execute o programa e selecione RSA como tipo de chave. A seguir, introduza 4096 no número de bits e clique em `Generate`{.action}.

![Gerar a chave](images/puttygen-01.png){.thumbnail}

De seguida, mova o rato de forma aleatória na zona vazia situada por baixo da barra de progresso.

![Gerar a chave](images/puttygen-02.gif){.thumbnail}

À medida que for movendo o rato, a barra de progresso irá ficando completa. Quando a barra estiver completamente cheia, significa que a chave está pronta.

![Gerar a chave](images/puttygen-03.png){.thumbnail}

### Importar uma chave SSH para a Área de Cliente OVH

Selecione e copie o texto da sua chave pública e, a seguir, aceda à [Área de Cliente OVH](https://www.ovh.com/auth/?action=gotomanager){.external}.

Aceda ao menu `Cloud`{.action}.

![menu cloud](images/cloud-menu.png){.thumbnail}

Selecione o seu projeto Public Cloud no menu à esquerda e, a seguir, clique em `Infraestrutura`{.action}.

![selecione o projeto](images/select-project.png){.thumbnail}

Selecione o separador `Chaves SSH`{.action}.

![registar a chave SSH](images/save-ssh-key-01.png){.thumbnail}

A seguir, introduza a chave 4096 bytes no espaço disponível. Atribua-lhe um nome e clique no botão `Adicionar esta chave`{.action}.

![registar a chave SSH](images/save-ssh-key-02.png){.thumbnail}

A sua chave ficará registada na Área de Cliente OVH para a autenticação.

## Quer saber mais?

Fale com a nossa comunidade de utilizadores em [https://community.ovh.com/en/](https://community.ovh.com/en/){.external}