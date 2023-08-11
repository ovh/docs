---
title: "Substituição do par de chaves SSH perdida"
excerpt: "Saiba como obter o acesso SSH ao seu servidor dedicado"
updated: 2023-02-06
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

**Última atualização: 06/02/2023**

## Objetivo

Se [utilizar chaves SSH](/pages/bare_metal_cloud/dedicated_servers/creating-ssh-keys-dedicated) para se ligar ao seu servidor dedicado, a perda da sua chave SSH privada poderá implicar a perda total de acesso ao seu servidor.

No entanto, pode ligar-se ao seu servidor através do [modo rescue OVHcloud](/pages/bare_metal_cloud/dedicated_servers/rescue_mode), graças a uma password provisória que lhe permitirá modificar os seus ficheiros.

**Saiba como substituir as chaves SSH em caso de perda de acesso ao seu servidor.**

> [!warning]
>
> A responsabilidade sobre a configuração e a gestão dos serviços que a OVHcloud disponibiliza recai sobre o utilizador. Assim, deverá certificar-se de que estes funcionam corretamente.
>
> Este guia fornece as instruções necessárias para realizar as operações mais habituais. No entanto, se encontrar dificuldades, recomendamos que recorra a um [prestador de serviços especializado](https://partner.ovhcloud.com/pt/directory/) e/ou que contacte o editor do serviço. Não poderemos proporcionar-lhe assistência técnica. Para mais informações, aceda à secção [Quer saber mais?](#go-further).
>

## Requisitos

- Ter um [servidor dedicado](https://www.ovhcloud.com/pt/bare-metal/) na sua conta OVHcloud
- Ter acesso à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt)

## Instruções

### Etapa 1: Desativar a chave SSH atual

Para aceder ao servidor em modo rescue, a chave SSH ativa deve ser desativada primeiro.

Aceda à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt) e navegue até à secção `Chaves SSH`{.action}. Se necessário, consulte o nosso manual ["Criar chaves SSH"](/pages/bare_metal_cloud/dedicated_servers/creating-ssh-keys-dedicated#cpsshkey).

A chave pública armazenada na Área de Cliente é inútil sem a chave privada correspondente, pode eliminá-la. Clique no botão <i class="icons-ellipsis icons-border-rounded icons-masterbrand-blue"></i> à direita da chave e selecione a opção `Eliminar a chave`{.action}.

![Eliminar chave](images/replace-lost-key-01.png){.thumbnail}

Na janela que aparecer, clique em `Confirmar`{.action}.

### Etapa 2: Criar um novo par de chaves

Crie um novo par de chaves SSH no seu ambiente de trabalho, tal como descrito na primeira parte do manual ["Criar chaves SSH"](/pages/bare_metal_cloud/dedicated_servers/creating-ssh-keys-dedicated).

### Etapa 3: Aceder ao servidor em modo rescue e substituir a chave

Siga os passos indicados no manual sobre o [modo rescue](/pages/bare_metal_cloud/dedicated_servers/rescue_mode) para aceder ao servidor e montar as partições.

Quando tiver acesso aos seus ficheiros, abra o ficheiro "authorized_keys" em causa num editor de texto. Este ficheiro armazena as chaves SSH e encontra-se na pasta `home` do utilizador ligado ao seu servidor. (Substitua "USER_NAME" pelo seu nome de utilizador)

```
rescue-customer:~# sudo nano /mnt/home/USER_NAME/.ssh/authorized_keys
```

Copie a sua nova chave pública (criada na etapa 2) no ficheiro. O conteúdo do ficheiro deverá ser o seguinte exemplo:

```console
ssh-rsa 1111111111122222222222333333333334444444555 55555556666666666
7777777777788888888999999990000000000000000000000 0000= old@sshkey
ssh-rsa AAAAAABBBBBBBBBBBBBBBBBBBBBBCCCCCCCCCCCCCCDDDDDDDDDDDEEEEEEE
EEFFFFFFFFFFFFFFFFFFFGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGHhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
```

Pode eliminar a cadeia de chave "old" (agora obsoleta) do ficheiro. Registe e saia do editor.

Volte para o modo de arranque "normal" e reinicie o servidor na sua [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt). Consulte o guia ["Ativar e utilizar o modo rescue"](/pages/bare_metal_cloud/dedicated_servers/rescue_mode), se necessário.

Agora tem acesso ao servidor com o novo par de chaves SSH.

## Quer saber mais? <a name="go-further"></a>

[Alterar a palavra-passe root num servidor dedicado](/pages/bare_metal_cloud/dedicated_servers/changing_root_password_linux_ds)

Junte-se à nossa comunidade de utilizadores em <https://community.ovh.com/en/>.