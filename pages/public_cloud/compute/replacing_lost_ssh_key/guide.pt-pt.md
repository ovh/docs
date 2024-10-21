---
title: "Como substituir um par de chaves SSH numa instância Public Cloud"
excerpt: "Saiba como restaurar o acesso ao servidor substituindo um par de chaves SSH por uma nova em caso de perda da sua chave privada"
updated: 2024-06-13
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

## Objetivo

A perda da sua chave SSH privada leva à perda do acesso à sua instância se não configurou outro método de acesso.

No entanto, pode ligar-se à sua instância através do modo rescue da OVHcloud, que lhe permite ligar-se com uma palavra-passe provisória e alterar os seus ficheiros.

**Este guia explica como substituir as suas chaves SSH em caso de perda de acesso à sua instância.**

> [!warning]
> A OVHcloud fornece serviços cuja configuração e gestão são da sua responsabilidade. É da sua responsabilidade assegurar o seu bom funcionamento.
>
> Este guia fornece as instruções necessárias para realizar as operações mais habituais. Contudo, se encontrar algum problema, recomendamos que contacte um [fornecedor de serviços especializado](/links/partner) ou que contacte a [nossa comunidade de utilizadores](/links/community).
>

## Requisitos

- Uma [instância Public Cloud](/links/public-cloud/public-cloud) na sua conta OVHcloud
- Ter acesso à [Área de Cliente OVHcloud](/links/manager)

## Instruções

### Etapa 1: Criar um novo par de chaves

Crie um novo par de chaves SSH no seu dispositivo local, seguindo as instruções da primeira parte do [guia de criação de uma chave SSH](/pages/bare_metal_cloud/dedicated_servers/creating-ssh-keys-dedicated).

### Etapa 2: aceder à sua instância em modo rescue

Siga os passos indicados no [manual do modo rescue](/pages/public_cloud/compute/put_an_instance_in_rescue_mode) para reiniciar a instância em modo rescue, aceder à mesma e montar as suas partições.

Depois de utilizar o comando `mount` (conforme descrito no guia) e ter a sua partição do sistema acessível, pode utilizar o seguinte comando:

```bash
chroot path/to/partition/mountpoint
```

O caminho para o ficheiro varia em função do ponto de montagem utilizado. Se tiver montado a sua partição em `/mnt`, deve introduzir o seguinte:

```bash
chroot /mnt/
```

Agora você deve ter acesso total de escrita aos seus arquivos nesta pasta.

### Etapa 3: substituir a chave

Abra o arquivo "authorized_keys" com um editor de texto. Este ficheiro armazena as chaves SSH e encontra-se na pasta `home` do utilizador com o qual está a aceder à instância.

Exemplo:

```bash
nano /mnt/home/USER_NAME/.ssh/authorized_keys
```

Substitua `USER_NAME` pelo seu nome de utilizador real.

Copie e cole a nova chave pública (criada no passo 1) no ficheiro. Deve ser semelhante ao seguinte exemplo:

```console
ssh-rsa 1111111111122222222222333333333333444444444555555555556666666666
777777777778888888888999999900000000000000000000000000== old@sshkey
ssh-rsa AAAAAAAAABBBBBBBBBBBCCCCCCCCCCCCCCCCDDDDDDDDDDDDDDDDDDDEEEEEEEEE
EEFFFFFFFFFFFFFGGGGGGGGGGGGGhhhhhhhhhhhhhhhhhhhhhhhhhh== new@sshkey
```

Por razões de segurança, elimine a cadeia de chaves obsoleta "old" do ficheiro. Salve suas alterações e saia do editor.

Reinicie a instância no modo "normal" a partir da [Área de Cliente OVHcloud](/links/manager). Consulte as instruções do [manual sobre o modo rescue](/pages/public_cloud/compute/put_an_instance_in_rescue_mode), se necessário.

Já tem acesso à instância com o seu novo par de chaves SSH.

## Quer saber mais?

Fale com nossa [comunidade de utilizadores](/links/community).
