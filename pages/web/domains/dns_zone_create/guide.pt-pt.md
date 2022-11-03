---
title: Criar uma zona DNS para um domínio externo
slug: criar_uma_zona_dns_para_um_dominio_externo
excerpt: 'Saiba como criar uma zona DNS na OVHcloud para o seu domínio através da Área de Cliente'
section: 'DNS e zona DNS'
order: 02
---

**Última atualização: 05/06/2018**

## Objetivo

A zona Domain Name System (DNS) de um domínio constitui o ficheiro de configuração deste último. É composta por informações técnicas, conhecidas como registos. Numa utilização clássica, estes registos permitem fazer a ligação entre o seu nome de domínio e os servidores que alojam o seu website e os seus endereços de e-mail.

Por várias razões, poderá ter de criar uma zona DNS para o seu domínio na OVHcloud.

**Saiba como criar uma zona DNS na OVHcloud para o seu domínio através da Área de Cliente.**

## Requisitos

- Ter um domínio.
- O domínio em questão não deve dispor de uma zona DNS da OVHcloud nem estar a ser objeto de uma operação ou encomenda em curso na OVHcloud.
- Ter acesso à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}.

## Instruções

### 1 - criar a zona DNS através da Área de Cliente

Para iniciar esta operação, aceda à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}, clique em `Encomendar`{.action} na barra à esquerda e, a seguir, em `Zona DNS`{.action}.

Na nova página, indique o domínio para o qual pretende criar uma zona DNS da OVHcloud. Aguarde alguns instantes até que a ferramenta efetue as verificações relativas ao nome de domínio.

Se aparecer uma mensagem indicando que a zona DNS não pode ser criada, verifique que o nome de domínio cumpre os requisitos necessários ou peça à pessoa que o gere que o faça por si. Assim que tudo estiver correto, tente novamente.

![dnszonecreate](images/dns-zone-create-step1.png){.thumbnail}

Assim que a verificação estiver concluída, deve escolher ativar ou não as entradas mínimas para a zona DNS que vai criar. Esta escolha não é definitiva, pois poderá editar os registos da zona DNS uma vez criada esta última.

|Ativar o número mínimo de entradas?|Detalhes|
|---|---|
|Sim|Selecione esta escolha se deseja personalizar você mesmo a zona DNS mais tarde.|
|Não|Selecione esta escolha se estiver a planear utilizar serviços da OVHcloud como um [alojamento web](https://www.ovhcloud.com/pt/web-hosting/){.external}, estando a zona pré-configurada para este efeito.|

![dnszonecreate](images/dns-zone-create-step2.png){.thumbnail}

Depois de escolher, siga os passos até criar a zona DNS.

### Etapa 2: editar a zona DNS (facultativo)

Uma vez que a zona DNS para o seu domínio está criada, pode editá-la a partir de agora. Esta operação é opcional, mas pode ser indispensável se pretender assegurar a continuidade da disponibilidade dos serviços associados a este nome de domínio (como um website e e-mails).

Se pretender editar esta zona DNS, aceda à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}, clique em `Nomes de domínio`{.action} na barra à esquerda e escolha o domínio em causa. De seguida, clique no separador `Zona DNS`{.action}.

> [!primary]
>
> Se acabou de criar a zona DNS e o domínio ainda não aparecer na lista dos seus serviços `Nomes de domínio`{.action}, aguarde alguns instantes e recarregue a página.
>

Faça as ações necessárias. Para obter mais informações, consulte a secção "[Editar uma zona DNS da OVHcloud](https://docs.ovh.com/pt/domains/alojamento_partilhado_como_editar_a_minha_zona_dns/){.external}" (versão em inglês). Depois de alterar a zona DNS da OVHcloud do seu domínio, é necessário um tempo máximo de propagação de 4 a 24 horas para que as alterações sejam efetivas.

### Etapa 3: alterar os servidores DNS do domínio

Quando a zona DNS da OVHcloud estiver pronta a ser utilizada, deve associá-la ao seu domínio. Para isso, obtenha os servidores DNS da OVHcloud ativados para o seu domínio na Área de Cliente. Estes últimos aparecem abaixo do `Name Servers`{.action}.

![dnszonecreate](images/dns-zone-create-step3.png){.thumbnail}

Quando estiver na sua posse, **modifique os servidores DNS do seu nome de domínio a partir da interface do fornecedor que o gere.** Depois de efetuar a operação, é necessário aguardar um tempo máximo de 48 horas para que a alteração seja totalmente efetiva.

## Quer saber mais?

[Como editar a minha zona DNS?](https://docs.ovh.com/pt/domains/alojamento_partilhado_como_editar_a_minha_zona_dns/){.external}.

Fale com a nossa comunidade de utilizadores em <https://community.ovh.com/en/>
