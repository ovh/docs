---
title: Adicionar um bloco IP
excerpt: Encomendar um bloco IP no seu Hosted Private Cloud
updated: 2022-04-06
---

## Objetivo

Um bloco IP pode servir para tornar os seus serviços acessíveis na Internet. 

**Este manual explica como encomendar, adicionar e migrar um bloco IP associado ao seu Hosted Private Cloud.**

## Requisitos

- Ter contacto com o administrador da infraestrutura [Hosted Private Cloud](https://www.ovhcloud.com/pt/enterprise/products/hosted-private-cloud/), para receber dados de acesso.
- Ter um identificador de utilizador ativo [criado na Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt).

## Instruções

### Encomendar um bloco IP

Para encomendar um bloco IP adicional para o seu **Hosted Private Cloud**, aceda à sua Área de Cliente OVHcloud. Na secção `Hosted Private Cloud`, clique na opção `IP` no menu à esquerda e, a seguir, clique em `Encomendar IP adicionais`{.action}. De seguida, selecione o seu **Hosted Private Cloud** no menu pendente antes de passar para o seguinte passo.

Vários campos deverão ser preenchidos para criar o seu bloco IP

- Tamanho do bloco IP (de /28 a /24)

> [!primary]
>
> Esta tabela recapitula o número de IP presentes num bloco e o número de IP utilizáveis.
> 

|Tamanho do bloco|IP no bloco|IP utilizáveis na OVHcloud|
|:---:|:---:|:---:|
|28|16|11|
|27|32|27|
|26|64|59|
|25|128|123|
|24|256|251|

> [!primary]
>
> Não hesite em consultar o nosso manual sobre o [plugin OVHcloud Network](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/plugin_ovh_network){.external-link} para saber quais são os IP reservados do seu bloco, assim como a sua utilização.
>

- País do bloco IP: importante em certos casos para o referenciamento dos seus serviços (um site português terá um melhor SEO em Portugal se o IP também for português)
- Nome da rede (informação visível no whois do bloco IP)
- Número de clientes estimados (quantos clientes finais serão alojados nesses IP)
- Descrição da rede (informação visível no whois do bloco IP)
- Utilização (informação sobre a utilização (web, SSL, cloud, etc.))

> [!success]
>
> Antes da entrega, terá de pagar as taxas de ativação do bloco IP.
>

Após ter confirmado o último passo, receberá uma nota de encomenda do seu bloco IP. Se esta estiver correta, só precisará de a pagar através dos métodos de pagamento disponíveis na parte inferior da página.

### Migrar um bloco IP entre dois Hosted Private Cloud

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/Gemao3Fd7rI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

A migração de um bloco IP requer a deslocação manual dos blocos através da APIv6 OVHcloud.

Utilize a seguinte chamada API:

> [!api]
>
> @api {v1} /ip POST /ip/{ip}/move
> 

Os campos devem ser preenchidos da seguinte forma:

- ip: bloco IP com /mask
- nexthop “newPrimaryIp” (sensível a maiúsculas/minúsculas)
- to: Hosted Private Cloud de destino sob a forma pcc-XXX-XXX-XXX-XXX

![campo nexthop](images/move-api.png){.thumbnail}

O resultado terá este formato:

![campo nexthop](images/api-result.png){.thumbnail}

Se tiver de desassociar o bloco IP mais tarde, pode utilizar esta chamada API para mover o IP no “IP parking”:

> [!api]
>
> @api {v1} /ip POST /ip/{ip}/park
> 

> [!warning]
>
> Esta chamada associa a rede nas VM que utilizam os IP em questão.
>

Poderá acompanhar a transferência do bloco IP na sua [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external} na secção `Hosted Private Cloud`{.action} > `Private Cloud`{.action}. Clique no seu serviço Hosted Private Cloud e, depois, no separador `Operações`{.action}.

A referência da operação é “removeIpRipeBlock”.

![operations manager](images/operations.png){.thumbnail}

O IP aparecerá depois no `Endereços IP em Parking`{.action}.

![IP parking](images/ip-parking.png){.thumbnail}

## Quer saber mais?

Fale com a nossa comunidade de utilizadores em <https://community.ovh.com/en/>.
