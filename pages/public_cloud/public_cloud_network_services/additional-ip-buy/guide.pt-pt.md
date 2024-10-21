---
title: Adicionar um Additional IP
excerpt: "Descubra como encomendar endereços Additional IP para as suas instâncias"
updated: 2023-01-04
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

> [!primary]
>
> A partir de 6 de outubro de 2022, a nossa solução "Failover IP" passou a designar-se [Additional IP](https://www.ovhcloud.com/pt/network/additional-ip/). Isto não afeta as suas funcionalidades.
>

## Objetivo

Pode precisar de configurar um endereço Additional IP nas suas instâncias por vários motivos:

- Tem vários sites na sua instância.
- Aloja projetos internacionais.

Para responder a estas necessidades, pode comprar um endereço Additional IP para as suas instâncias Public Cloud.

Estes endereços Additional IP só poderão ser migrados para as instâncias de um mesmo projeto.

**Este guia explica como comprar um Additional IP para o seu projeto Public Cloud da OVHcloud.**

## Requisitos

- Ter acesso à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}.
- Dispor de pelo menos uma instância. Para isso, consulte [o guia para criar uma instância a partir da Área de Cliente](/pages/public_cloud/compute/public-cloud-first-steps#3o-passo-criacao-de-uma-instancia).

> [!warning]
> Esta funcionalidade não está atualmente disponível para as instâncias Metal.
>

## Instruções

Aceda à Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt), aceda à secção `Public Cloud`{.action} e selecione o projeto Public Cloud em questão.

No menu à esquerda, abra o `Public IPs`{.action} em `Network`.

Abra o separador `Aditional IP`{.action} e clique no botão `Ações`{.action}. Selecione `Adicionar um novo IP`{.action}.

![Adicionar IP](images/buyaddIP_01.png){.thumbnail}

Na etapa 1 do comando, clique em `Seguinte`{.action}.

![Adicionar IP](images/buyaddIP_02.png){.thumbnail}

A etapa 2 permite selecionar um país para o novo endereço IP.

![Adicionar IP](images/buyaddIP_03.png){.thumbnail}

Os seguintes países estão disponíveis para a geolocalização dos IP:

|          |          |          |           |                |
|:--------:|:--------:|:--------:|:---------:|:--------------:|
| Bélgica  | Finlândia  | França   | Alemanha   | República Checa |
| Irlanda  |  Itália   | Lituânia | Países Baixos | Reino Unido    |
| Portugal |  Espanha   |  Polónia |  Suíça |                 |

> [!primary] **Disponibilidade**
> 
> É possível que alguns destes países não estejam listados, dependendo da disponibilidade atual dos endereços IPv4.
> 

> [!primary] **Locação**
>
> A geolocalização de IP baseia-se unicamente em organismos de referência.
> 
> Por exemplo, o [RIPE NCC](https://www.ripe.net/){.external} serve a Europa como registo regional da Internet.
>
> Se precisar de verificar a geolocalização de outra forma, contacte diretamente as organizações em causa. A OVHcloud não lhe poderá fornecer assistência nesta matéria.

Depois de selecionar o país, clique em `Seguinte`{.action}.

No último passo, selecione a sua instância no menu pendente. A seguir, clique em `Gerar nota de encomenda`{.action}.

![Adicionar IP](images/buyaddIP_04.png){.thumbnail}

A nota de encomenda será aberta automaticamente a fim de finalizar a sua compra.

Para mais informações, consulte o nosso manual sobre a [gestão das encomendas da OVHcloud](/pages/account_and_service_management/managing_billing_payments_and_services/managing_ovh_orders).

Também pode consultar a nota de encomenda na sua Área de Cliente, na secção `Dashboard`{.action}, clicando em `Ver as minhas encomendas`{.action}.

O próximo passo consiste em configurar o IP no seu sistema operativo. Consulte o [nosso guia dedicado a esta configuração](/pages/public_cloud/public_cloud_network_services/getting-started-04-configure-additional-ip-to-instance).

## Quer saber mais?

[Configurar um Additional IP](/pages/public_cloud/public_cloud_network_services/getting-started-04-configure-additional-ip-to-instance)

Se precisar de formação ou de assistência técnica para implementar as nossas soluções, contacte o seu representante comercial ou clique em [esta ligação](https://www.ovhcloud.com/pt/professional-services/) para obter um orçamento e solicitar uma análise personalizada do seu projecto aos nossos especialistas da equipa de Serviços Profissionais.

Fale com nossa comunidade de utilizadores: <https://community.ovh.com/en/>.