---
title: 'Utilização do diagnóstico de erros Exchange'
excerpt: 'Saiba como realizar um diagnóstico automatizado dos erros nas contas Exchange'
slug: diagnostico_exchange_o_que_fazer_em_caso_de_erro
legacy_guide_number: g2277
section: Diagnóstico Exchange
order: 1
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

**Última atualização: 08/07/2022**

## Objetivo

Os erros nas contas de e-mail Exchange podem ter várias causas. Um diagnóstico automático das funcionalidades da conta permite reduzir este número de causas. Os resultados destes testes também serão úteis em caso de pedido de assistência relativo ao seu serviço Exchange.

**Saiba como lançar um diagnóstico Exchange e interpretar os resultados.**

## Requisitos

- Dispor de uma [solução Exchange OVHcloud](https://www.ovhcloud.com/pt/emails/hosted-exchange/) já instalada
- Dispor das informações de identificação para a conta Exchange a verificar
- Ter acesso à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt)
- Estar atualizado nos [pagamentos](https://docs.ovh.com/pt/billing/gerir-faturas-ovhcloud/#pay-bills) deste serviço e do domínio associado.

## Instruções

### Realizar um diagnóstico

Aceda à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt), na secção `Web Cloud`{.action}. Selecione `Microsoft`{.action} e clique em `Exchange`{.action} e selecione o seu serviço.

![Diagnóstico Exchange](images/img_4450.png){.thumbnail}

Clique no separador `Diagnósticos`{.action} e selecione a conta Exchange correspondente no menu pendente. Introduza a palavra-passe da conta no campo previsto para este efeito e clique em `Iniciar o diagnóstico`{.action}.

![Diagnóstico Exchange](images/img_4451.png){.thumbnail}

O diagnóstico demorará cerca de 3 a 10 minutos. Eis um exemplo:

![Diagnóstico Exchange](images/img_4471.png){.thumbnail}

A página de resultados propõe duas ações para continuar:

- `Novo diagnóstico`{.action}: lança outro diagnóstico.

- `Criar um pedido de assistência`{.action}: permite-lhe criar um ticket junto do nosso suporte técnico. O ticket conterá os resultados do diagnóstico.

### Explicações dos erros

Recorra ao seguinte resumo dos erros possíveis para encontrar a solução mais rápida.

### A conta está bloqueada por envio de spam <a name="blocked"></a>

Uma conta bloqueada recebe sempre e-mails mas o envio foi desativado pelo sistema de proteção automática contra spam.

Pode verificá-lo no separador `Contas de e-mail`{.action} do seu serviço Exchange. A conta terá uma menção `SPAM` na coluna "Estado" do quadro.

Consulte o nosso guia [O que fazer em caso de conta bloqueada por spam?](../bloqueado-por-spam/) para permitir às nossas equipas de segurança reativar a conta.

### A subscrição à conta expirou <a name="expired"></a>

Uma vez que a sua assinatura deixou de estar ativa, o envio e a receção foram desativados.<br>
Para reativar a subscrição, basta reconfigurar a [periodicidade de faturação](https://docs.ovh.com/pt/microsoft-collaborative-solutions/gestao-faturacao-exchange/#periodicity) na [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt).

### A conta está bloqueada pela política de segurança

Se uma política de segurança estiver ativa na [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt), a conta pode ser temporariamente bloqueada.

Pode, por exemplo, decidir que a conta será bloqueada após várias tentativas de ligação sem efeito, por um período determinado por si.

Neste caso, pode aguardar que a conta esteja de novo disponível ou contactar as nossas equipas Exchange criando um pedido de assistência.

Para mais informações sobre esta funcionalidade, consulte o nosso [guia sobre a política de segurança](../gerir-politica-de-seguranca-palavra-passe/).

### A autenticação ao webmail falhou <a name="password"></a>

Isto pode dever-se à introdução de uma palavra-passe de conta incorreta. Verifique primeiro que a palavra-passe está correta, ligando-se ao [webmail](../exchange_2016_guia_de_utilizacao_do_outlook_web_app/) e reinicie o diagnóstico.

Se necessário, pode alterar a palavra-passe da conta em causa no separador `Contas de e-mail`{.action} na sua [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt). Se o problema persistir, crie um pedido de assistência.

### O registo MX do domínio não é válido

Este erro indica que os e-mails não podem ser recebidos e estará também associado a este erro "**ATENÇÃO: O e-mail de teste não foi recebido.** ".

Em função da utilização do seu serviço Exchange, os seguintes servidores MX são válidos:

- Exchange sozinho: mx0.mail.ovh.net, mx1.mail.ovh.net mx2.mail.ovh.net, mx3.mail.ovh.net & mx4.mail.ovh.net
- Exchange + E-mail POP/IMAP alojado pela OVHcloud: mx0.mail.ovh.net, mx1.mail.ovh.net mx2.mail.ovh.net, mx3.mail.ovh.net & mx4.mail.ovh.net
- Exchange + E-mail POP/IMAP não alojado pela OVHcloud: ex<b>?</b>.mail.ovh.net

<a name="hostname"></a>

> [!warning]
> Nos nossos guias, utilizamos como nome de servidor: ex<b>?</b>.mail.ovh.net. Deverá substituir o "? " pelo número correspondente ao servidor do seu serviço Exchange.<br>
> Encontrará estas informações na Área de Cliente OVHcloud, na secção `Web Cloud`{.action}. Abra `Microsoft`{.action}, depois `Exchange`{.action} e selecione o seu serviço. O nome do servidor aparece na zona **Ligação** do separador `Informações gerais`{.action}.
>

> [!primary]
>
> O nome técnico de um serviço Exchange OVHcloud é composto por um prefixo (**hosted-** ou **private-**), uma parte do seu "identificador de cliente" e um número incremental que indica o número de serviços Exchange alojados ou privados registados na sua conta de cliente.
>

### O registo SRV do domínio não é válido

O registo SRV serve para a configuração automática da sua conta Exchange com um software de mensagens compatível como o Microsoft Outlook.

Pode verificar estes parâmetros na [zona DNS do seu domínio](../../domains/alojamento_partilhado_como_editar_a_minha_zona_dns/).

Eis os valores para um serviço Exchange:

Campo | Valor
------------ | -------------
Subdomínio | _autodiscover._tcp
Prioridade | 0
Peso | 0
Porta | 443
Destino | [ex<b>?</b>.mail.ovh.net](#hostname)(substituir o "?" pelo número correspondente ao servidor do seu serviço Exchange)

### O e-mail de teste não pôde ser enviado a partir da conta

Este erro indica um erro geral de envio de e-mails que pode ter várias causas:

- [A sua conta foi suspensa](#expired)
- [A password introduzida está incorreta](#password)
- [A sua conta foi bloqueada devido ao envio de correio indesejável](#blocked)
- [Ocorreu um incidente na infraestrutura](https://web-cloud.status-ovhcloud.com/)

## Saiba mais

Fale com a nossa comunidade de utilizadores: <https://community.ovh.com/en/>.
