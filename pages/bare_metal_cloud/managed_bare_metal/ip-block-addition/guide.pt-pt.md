---
title: Adicionar um bloco IP
excerpt: Encomendar um bloco IP no seu Managed Bare Metal
updated: 2020-11-18
---

## Objetivo

Um bloco IP pode servir para tornar os seus serviços acessíveis na Internet. 

**Este manual explica como encomendar, adicionar e migrar um bloco IP associado ao seu Managed Bare Metal.**

## Requisitos

* Ter acesso à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}.
* Dispor de uma [infraestrutura Managed Bare Metal](https://www.ovhcloud.com/pt/managed-bare-metal/){.external} na sua conta OVHcloud.

## Instruções

### Encomendar um bloco IP

Para encomendar um bloco IP adicional para o seu **Managed Bare Metal**, aceda à sua Área de Cliente OVHcloud. Na secção `Bare Metal Cloud`, clique na opção `IP` no menu à esquerda e, a seguir, clique em `Encomendar IP adicionais`{.action}. De seguida, selecione o seu **Managed Bare Metal** no menu pendente antes de passar para o seguinte passo.

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
> Não hesite em consultar o nosso manual sobre o [plugin OVHcloud Network](/pages/bare_metal_cloud/managed_bare_metal/plugin_ovh_network){.external-link} para saber quais são os IP reservados do seu bloco, assim como a sua utilização.
>

- País do bloco IP: importante em certos casos para o referenciamento dos seus serviços (um site português terá um melhor SEO em Portugal se o IP também for português)
- Nome da rede (informação visível no whois do bloco IP)
- Número de clientes estimados (quantos clientes finais serão alojados nesses IP)
- Descrição da rede (informação visível no whois do bloco IP)
- Utilização (informação sobre a utilização (web, SSL, cloud, etc.))

Após ter confirmado o último passo, receberá uma nota de encomenda do seu bloco IP. Se esta estiver correta, só precisará de a pagar através dos métodos de pagamento disponíveis na parte inferior da página.

### Migrar um bloco IP entre dois Managed Bare Metal

A migração de um bloco IP requer a deslocação manual dos blocos através da APIv6 OVHcloud.

Utilize a seguinte chamada API:

> [!api]
>
> @api {v1} /ip POST /ip/{ip}/move
> 

Os campos devem ser preenchidos da seguinte forma:

- ip: bloco IP com /mask
- nexthop “newPrimaryIp” (sensível a maiúsculas/minúsculas)
- to: Managed Bare Metal de destino sob a forma pcc-XXX-XXX-XXX-XXX

![campo nexthop](images/move-api.png){.thumbnail}

O resultado terá este formato:

![campo nexthop](images/api-result.png){.thumbnail}

De seguida, utilize esta chamada API para mover o IP no “IP parking”:

> [!api]
>
> @api {v1} /ip POST /ip/{ip}/park
> 

> [!warning]
>
> Esta chamada associa a rede nas VM que utilizam os IP em questão.
>

Poderá acompanhar a transferência do bloco IP na sua [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external} na secção `Bare Metal Cloud`{.action} > `Managed Bare Metal`{.action}. Clique no seu serviço Managed Bare Metal e, depois, no separador `Operações`{.action}.

A referência da operação é “removeIpRipeBlock”.

![operations manager](images/operations.png){.thumbnail}

## Quer saber mais?

Fale com a nossa comunidade de utilizadores em <https://community.ovh.com/en/>.
