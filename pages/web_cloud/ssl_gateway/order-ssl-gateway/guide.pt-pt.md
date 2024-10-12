---
title: 'Encomendar um SSL Gateway'
excerpt: 'Proteja as ligações ao seu website'
updated: 2024-10-01
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

## Objetivo

A oferta SSL Gateway é concebida para lhe fazer beneficiar de um certificado SSL para o seu nome de domínio e o seu serviço de alojamento (VPS, servidor mail, servidor dedicado, etc.).

> [!warning]
>
> Os SSL Gateways são incompatíveis com as ofertas de [alojamentos partilhados OVHcloud](/links/web/hosting). Se pretender beneficiar de um certificado SSL para este tipo de oferta, consulte o nosso guia "[Gerir um certificado SSL num alojamento web](/pages/web_cloud/web_hosting/ssl_on_webhosting)".
>

**Saiba como encomendar um SSL Gateway.**

## Requisitos

- Ter um [nome de domínio](/links/web/domains) ou um subdomínio ativo.
- Ter acesso à zona DNS do mesmo.

## Instruções

### Encomenda

Para encomendar a nossa oferta SSL Gateway, [clique aqui](/links/web/ssl-gateway).

Escolha a sua oferta e depois clique em `Encomendar agora`{.action}.

![order ssl gateway](/pages/assets/screens/website/order/configure-my-ssl-gateway.png){.thumbnail}

Na nova página que se abrir, indique no formulário `Procure o seu nome de domínio`{.action} o nome de domínio ou subdomínio em causa e clique no ícone em forma de lupa à direita.

> [!warning]
>
> - Oferta Gratuito: apenas são autorizados nomes de domínio de até 3 níveis (www.domain.tld).
>
> - Oferta Advanced: os nomes de domínio de 4º nível (blog.www.domain.tld) e mais são autorizados.
>

O nosso sistema irá detetar automaticamente o(s) endereço(s) IP do site associado ao seu domínio ou subdomínio. Se dispõe de vários IPs, escolha um.

> [!warning]
>
> - Se dispõe de vários endereços IP para o seu website, só poderá escolher um IP durante a encomenda.
> - Se dispõe da oferta Advanced, poderá adicionar até 2 IPs suplementares a partir da sua [Área de Cliente OVHcloud](/links/manager).
>

De seguida, escolha a localização do datacenter onde deseja instalar o SSL Gateway, entre 2 disponíveis.

Se desejar, e se esta estiver disponível durante a encomenda, selecione a opção `Faço a gestão da zona DNS deste domínio e autorizo a OVHcloud a modificar automaticamente o registo DNS requerido`{.action}. A zona DNS associada ao seu nome de domínio ou subdomínio será automaticamente atualizada com o endereço IP do SSL Gateway.

> [!warning]
>
> Qualquer alteração da sua zona DNS pode demorar até 24 horas até funcionar, devido à cache presente nos fornecedores de acesso à Internet.
>

Verifique que todas as suas escolhas estão corretas na página de encomenda e, em seguida, clique em `Continuar`{.action}.

Para terminar, deixe-se guiar até a validação / pagamento da sua nota de encomenda.

### Configuração da zona DNS

Depois de validar a nota de encomenda, e se não tiver selecionado a opção `Faço a gestão da zona DNS deste domínio e autorizo a OVHcloud a modificar automaticamente o registo DNS requerido`{.action}, ser-lhe-á enviado um e-mail solicitando que aponte o seu domínio ou subdomínio para a infraestrutura OVHcloud num prazo de 3 dias.

> [!warning]
>
> Sem alteração da sua zona DNS num prazo de 3 dias, a sua encomenda será anulada.
>

> [!faq]
>
> Caso 1: a sua zona DNS é gerida pelos servidores DNS partilhados da OVHcloud.
>>
>> - Se o seu identificador for o contacto *administrador* ou *técnico* desta zona DNS, deverá alterá-la na sua [Área de Cliente OVHcloud](/links/manager).
>> - Se não tiver sido contactado *administrador* ou *técnico* desta zona DNS, contacte a pessoa responsável para que efetue a alteração.
>>
>> Consulte as instruções do guia "[Criar uma zona DNS da OVHcloud para um domínio](/pages/web_cloud/domains/dns_zone_create)" se necessário.
>>
>
> Caso 2: a sua zona DNS não é gerida pelos servidores DNS partilhados da OVHcloud.
>>
>> - Neste caso, basta alterar o IP na sua zona DNS através da interface do seu prestador de serviços ou do seu servidor dedicado.
>>
>

Depois de processada a alteração pela nossa infraestrutura, receberá um e-mail de confirmação.

> [!warning]
>
> Qualquer alteração da sua zona DNS pode demorar até 24 horas até funcionar, devido à cache presente nos fornecedores de acesso à Internet.
>

## Quer saber mais?
 
Para serviços especializados (referenciamento, desenvolvimento, etc), contacte os [parceiros OVHcloud](/links/partner).
 
Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](/links/support).
 
Fale com nossa [comunidade de utilizadores](/links/community).