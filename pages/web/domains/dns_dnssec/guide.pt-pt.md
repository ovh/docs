---
title: "Proteger o seu nome de domínio com DNSSEC"
excerpt: "Saiba como proteger o seu domínio do Cache Poisoning ativando o DNSSEC"
updated: 2023-07-26
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

## Objetivo 

Um servidor DNS aloja uma ou várias zonas DNS. Uma zona DNS contém a configuração DNS de um domínio. É esta configuração que liga o seu nome de domínio aos diferentes serviços que lhe estão associados (servidor de alojamento para o seu website, servidores para os seus endereços de e-mail personalizados com o seu nome de domínio, etc.).

Em certos casos, os fluxos de dados que transitam pelos servidores DNS podem ser desviados por pessoas mal-intencionadas.
Em resumo, para o fazer, estas pessoas envenenam a cache dos servidores DNS com a configuração DNS que desejam aplicar ao seu domínio: é o que é chamado o « Cache poisoning ».
Desta forma, podem reencaminhar os fluxos de entrada do seu domínio para os seus próprios websites e para os seus próprios endereços de e-mail.

O **D**omain **N**ame **S**ystem **SEC**urity tensions (**DNSSEC**), permite proteger a configuração DNS do seu domínio contra o « Cache poisoning » verificando e autenticando as respostas DNS.

**Saiba como ativar o DNSSEC para o seu domínio para o proteger do « Cache poisoning ».**

Para mais informações sobre o funcionamento do **DNSSEC**, consulte a nossa página « [Compreender o DNSSEC](https://www.ovhcloud.com/pt/domains/dnssec/){.external} ».

Não hesite também em consultar os nossos manuais sobre [os servidores DNS da OVHcloud](/pages/web/domains/dns_server_general_information) e sobre a [edição de uma zona DNS da OVHcloud](pages/web/domains/dns_zone_edit/) se deseja mais informações sobre estes assumptos.

## Requisitos

- Ter um nome de domínio registado na OVHcloud.
- O domínio afetado deve dispor de uma extensão compatível com o DNSSEC.
- Ter acesso à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}, secção `Web Cloud`{.action}.

## Instruções

A ativação do **DNSSEC** é possível em dois casos:

- **O domínio utiliza os servidores DNS da OVHcloud**: a ativação é realizada através de um clique na [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external} (se ainda não estiver ativa por predefinição).

- **O seu domínio não utiliza os servidores DNS da OVHcloud** : contacte o prestador responsável pela configuração DNS do seu domínio e solicite-lhe os parâmetros. Aceda à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external} e aceda à secção `Web Cloud`{.action}. Na coluna da esquerda, clique em `Nomes de domínio`{.action} e escolha o domínio na lista.</br>
Selecione o separador `DS records`{.action}, clique no botão `Alterar`{.action} à direita e, a seguir, no botão `+`{.action} que aparecer.</br>
Os 4 campos « Key Tag », « Flag », « Algoritmo », « Chave pública (codificada em base64) » já podem ser preenchidos com os dados comunicados pelo seu prestador atual.

> [!primary]
>
> Para verificar se o domínio utiliza a configuração DNS da OVHcloud, aceda à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external} e aceda à secção `Web Cloud`{.action}. Na coluna da esquerda, clique em `Nomes de domínio`{.action} e escolha o domínio na lista. Selecione o separador `Servidores DNS`{.action} quando posicionado no domínio em questão.
>
> Se os nomes dos servidores DNS terminarem com *ovh.net*, *ovh.ca* ou *anycast.me*, o seu domínio utiliza bem os servidores DNS da OVHcloud.
>

### Etapa 1: aceder à gestão do nome de domínio <a name="step1"></a>

Para ativar a solução **DNSSEC** para o seu domínio, aceda à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external} e aceda à secção `Web Cloud`{.action}. Na coluna da esquerda, clique em `Nomes de domínio`{.action} e escolha o domínio na lista.

A página que aparece apresenta as informações gerais do mesmo. 

### Etapa 2: gerir o DNSSEC do seu nome de domínio

Ainda no separador `Informações gerais`{.action}, na sequência da [etapa 1](#step1), pode verificar o estado de ativação do **DNSSEC** no seu domínio.

Para isso, no quadro « Segurança », verifique o estado junto da menção « Delegação Segura - DNSSEC ».

![dnssec](images/ativate-dnssec-step2.png){.thumbnail}

Graças ao botão de ativação situado por cima da menção `Delegação Segura - DNSSEC`{.action}, poderá ativar ou desativar o **DNSSEC** no seu domínio. Ao realizar esta ação, aparecerá uma nova janela a partir da qual poderá validar a modificação.

![dnssec](images/ativate-dnssec-step3.png){.thumbnail}

> [!primary]
>
> A ativação/desativação do **DNSSEC** leva **24** horas para ficar efetiva.
>
> Além disso, se posteriormente pretender alterar os servidores DNS associados ao seu domínio, a modificação dos servidores DNS só será efetiva na OVHcloud após a desativação do **DNSSEC**. Depois disso, será necessário um prazo suplementar de **24** a **48** horas para a propagação DNS da modificação.
>
> No total, a modificação dos servidores DNS de um domínio com a solução **DNSSEC** ativa será plenamente efetiva passado as **48** às **72** horas.
>

## Quer saber mais?

[Generalidades sobre os servidores DNS da OVHcloud](/pages/web/domains/dns_server_general_information)

[Editar uma zona DNS da OVHcloud](/pages/web/domains/dns_zone_edit)

Para serviços especializados (referenciamento, desenvolvimento, etc), contacte os [parceiros OVHcloud](https://partner.ovhcloud.com/pt/directory/).

Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](https://www.ovhcloud.com/pt/support-levels/).

Fale com nossa comunidade de utilizadores: <https://community.ovh.com/en/>. 