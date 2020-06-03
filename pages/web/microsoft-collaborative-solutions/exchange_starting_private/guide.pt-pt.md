---
title: 'Primeiros passos com um servidor Private'
slug: exchange_primeiros_passos_com_um_servidor_private
excerpt: 'Descubra como configurar o seu servidor Private Exchange.'
legacy_guide_number: g2074
section: 'Primeiros passos com Exchange'
---

**Última atualização: 25/03/2020**

## Objetivo

Acaba de efetuar a encomenda de uma plataforma Private Exchange. Este guia explica em pormenor como realizar a sua primeira configuração.

**Descubra como configurar a sua plataforma Private Exchange**

## Requisitos

- Ter encomendado uma [solução Private Exchange OVHcloud](https://www.ovh.com/pt/emails/){.external}.
- Ter acesso à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager).

## Instruções

### Etapa 1: receção do e-mail de configuração da sua platforma

Uma vez realizada a encomenda, receberá no endereço de e-mail referenciado na sua Área de Cliente, as informações para configurar a sua plataforma Private Exchange. 

Para consultar este e-mail a partir da sua [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager), clique no seu perfil, no topo da página à direita, e depois em `A minha conta`{.action}. Dirija-se ao separador `E-mails recebidos`{.action} e pesquise o e-mail com o assunto:

> **\[xx-11111-ovh] O seu serviço Private Exchange 20_xxx_ será entregue em breve!**


![first-use-private-exchange](images/first-use-private-exchange-01.png){.thumbnail}

Este e-mail contém um link que permite completar duas etapas da configuração da sua plataforma:

- personalizar o link de acesso ao seu webmail (certificado SSL dedicado);
- indicar um endereço de e-mail para validar o seu certificado (atenção: este endereço de e-mail deve existir e deverá conseguir aceder-lhe).

Clique no link mencionado no e-mail e passe à [etapa 2 ](./#etapa-2-inicializacao-da-sua-plataforma){.external}.

### Etapa 2: inicialização da sua plataforma

Após ter clicado no link de e-mail na [etapa 1](./#etapa-1-rececao-do-e-mail-de-configuracao-da-sua-platforma){.external}, deve identificar-se na página exibida.

Será então redirecionado para a página de configuração:
![first-use-private-exchange](images/first-use-private-exchange-02.png){.thumbnail}

Complete a configuração de acordo com as indicações da tabela que se segue.

| Informação          	| Descrição                                                                                                                                                                                                                             	|
|----------------------	|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------	|
| Nome do seu servidor 	| No menu pendente, escolha o subdomínio associado ao seu nome de domínio. <br> No campo livre, introduza o nome de domínio que deseja associar.                                                                   	|
| E-mail               	| Escolha um endereço de e-mail da lista proposta. Este servirá para receber o e-mail de validação do certificado SSL da sua plataforma, é portanto imperativo que seja válido ou que redirecione para um endereço de e-mail acessível onde o possa receber.
| DNS Assist           	| Ao assinalar esta opção estará a autorizar a configuração automática da sua zona DNS para o nome de domínio da sua plataforma. O domínio deve ser gerado na mesma conta OVHcloud que a sua plataforma. Se não assinalar esta opção, ser-lhe-á enviado um e-mail contendo as informações de configuração da sua zona DNS. 	|

Após a validação desta etapa surgirá uma mensagem a indicar que a configuração foi bem sucedida. Ser-lhe-á igualmente recordado o endereço de e-mail de validação do certificado SSL e o endereço de acesso ao webmail da sua plataforma.

### Etapa 3: configuração manual da zona DNS do nome de domínio da sua plataforma

> [!primary]
>
> Esta etapa é facultativa se tiver assinalado a opção "**DNS Assist**" na [etapa 2](./#etape-2-initializacao-da-sua-plateforma){.external}.
> 

Se o nome de domínio não for gerado na mesma conta de cliente ou não estiver alojado na OVHcloud, ser-lhe-á enviado um segundo e-mail contendo as informações necessárias para configurar manualmente a sua zona DNS.

O e-mail contém os endereços IPv4 e IPv6 da sua plataforma. Indique estes endereços na zona DNS do subdomínio previamente criada na [etapa 2](./#etapa-2-inicializacao-da-sua-plataforma){.external}, sob as formas respetivas de um registo de tipo "A" e de um registo de tipo "AAAA". Para o orientar na criação de um nome de domínio OVHcloud, consulte o nosso guia ["Editar uma zona DNS"(]../../domains/alojamento_partilhado_como_editar_a_minha_zona_dns/).



### Etapa 4: validação do seu certificado SSL

Após ter concluído a [etapa 2](./#etapa-2-inicializacao-da-sua-plataforma){.external}, ser-lhe-á enviado um e-mail para o endereço selecionado para validar o seu certificado SSL.

Este e-mail ser-lhe-á enviado pela entidade responsável pela emissão do certificado SSL com o assunto:

> **ORDER #1111111 - Domain Control Validation for exchange.oseudominio.com**

Copie o código contido no e-mail e clique no link de validação do certificado SSL.

Cole o código na caixa correspondente da janela exibida e clique em `Next`{.action}.

![first-use-private-exchange](images/first-use-private-exchange-03.png){.thumbnail}

Surgirá uma mensagem a informar se o código inserido é válido. Se for o caso, clique em `Close window`{.action}.

### Finalização

Uma vez validado o certificado SSL, será ainda necessário aguardar 4 horas pela entrega do serviço. Durante este período, a sua plataforma Private Exchange não estará visível na sua Área de Cliente.

Assim que o servidor esteja pronto e disponível, ser-lhe-á enviado um e-mail de confirmação com o assunto:

> **\[xx-11111-ovh] O seu serviço Private Exchange 20_xxx_ está pronto!**

Para adicionar o primeiro nome de domínio à sua plataforma e configurar as contas, consulte o nosso guia ["Adicionar um domínio ao serviço Exchange"](../exchange_20132016_a_primeira_configuracao_do_servico/){.external}

## Quer saber mais?

[Editar uma zona DNS](../../domains/alojamento_partilhado_como_editar_a_minha_zona_dns/){.external}

[Adicionar um nome de domínio ao serviço Exchange ](../exchange_20132016_a_primeira_configuracao_do_servico/){.external}

Fale com a nossa comunidade de utilizadores: <https://community.ovh.com/en/>.
