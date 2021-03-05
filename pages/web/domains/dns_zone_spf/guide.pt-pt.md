---
title: Como configurar o registo SPF de um domínio
excerpt: Saiba como adicionar um registo SPF à zona DNS do seu domínio
slug: partilhado_o_campo_spf
section: Uso avançado
order: 5
---

**Última atualização: 26/03/2018**

## Sumário

O registo SPF (Sender Policy Framework) é um sistema de autenticação de mensagens de e-mail. Com este mecanismo, os servidores de receção de e-mail conseguem identificar os servidores de envio como fidedignos ou não fidedignos. O registo SPF é adicionado na Zona DNS, onde estão indicados os servidores ou os endereços IP autorizados a enviar mensagens de e-mail.

**Aprenda a configurar um registo SPF na zona DNS do seu domínio.**

## Requisitos

- Ter acesso à secção de gestão do domínio na [Área de Cliente OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}.
- Ter acesso à [Área de cliente OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}.
- O domínio do e-mail tem que usar a configuração da OVH (os servidores DNS da OVH).

> [!warning]
>
> Se o domínio não usar os servidores DNS da OVH, a configuração SPF deverá ser efetuada no sistema do agente responsável pela gestão do seu domínio.
> Se o seu domínio for gerido pela OVH, verifique se este está usar a configuração OVH. Para tal, aceda à [Área de Cliente](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}, selecione o domínio e clique em `Servidores DNS`{.action}.
>

## Instruções

### 1 - Para que serve o registo SPF?

 O registo SPF é um método de autenticação dos endereços de e-mail associados ao seu domínio, que permite evitar as práticas de spoofing (i.e. falsificação dos remetentes de e-mail).

Esta autenticação é possível graças aos parâmetros incluídos no registo SPF. Os parâmetros incluem:

- **servidores e endereços IP**: esta informação indica os servidores e endereços IP de envio fidedignos.
- **qualifier**: indica ao servidor de receção como reagir perante um e-mail com uma origem não fidedigna (i.e. potencialmente insegura).

Resumindo, o registo SPF deve incluir a origem (*source*) de envio dos e-mails associados ao seu domínio. Os e-mails podem ter como origem o seu servidor, o servidor de um prestador de serviços, ou um dos serviços de e-mail da OVH.

> [!primary]
>
> O registo SPF é apenas uma indicação dada aos servidores de receção de e-mails. Cabe a estes servidores «aceitarem» ou não a autenticação SPF atribuída aos servidores de envio.
>

### 2 - A configuração SPF da OVH

A configuração da OVH é usada pelos serviços de e-mail indicados abaixo:

- MX Plan (isolado ou incluído na oferta de [Alojamento da OVH](https://www.ovh.pt/alojamento-partilhado/){.external});

- [E-mail Pro](https://www.ovh.pt/emails/email-pro/){.external};
- [Hosted Exchange](https://www.ovh.pt/emails/hosted-exchange/){.external}.

O domínio associado a estes serviços deverá usar o SPF com os parâmetros da OVH. Exemplo de parâmetros OVH:

```bash
mypersonaldomain.ovh IN TXT "v=spf1 include:mx.ovh.com ~all"
```

Se o seu domínio estiver a usar a configuração DNS OVH, verifique se o registo SPF já está configurado. Para tal, aceda à [Área de Cliente OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}. No menu da esquerda, aceda à secção `Domínios`{.action}, selecione o domínio pretendido e clique no separador `Zona DNS`{.action}.

De seguida irá visualizar a tabela relativa à configuração DNS do seu domínio. Esta tabela inclui vários registos (um por cada linha). 

> [!primary]
>
> Se o seu domínio for gerido pela OVH, clique no separador `Servidores DNS`{.action} para verificar se os parâmetros OVH estão a ser usados.
>

Esta informação pode estar incluída no registo SPF ou no registo TXT. Para facilitar a consulta, use o filtro acima da tabela e selecione: `SPF`{.action} ou `TXT`{.action}. 

- Se a coluna «Destino» incluir os parâmetros **"v=spf1 include:mx.ovh.com ~all"**, significa que seu domínio está a usar a configuração OVH. Se preferir usar outra configuração, siga as instruções indicadas na etapa 3 (Alterar o registo SPF).

- **A coluna «Destino» apresenta parâmetros diferentes dos da OVH**: o seu domínio está a usar uma autenticação SPF personalizada. Se preferir usar outra configuração, siga as instruções indicadas na etapa 3 (Alterar o registo SPF)

- **Não existe qualquer informação na coluna «Destino»**. Verificou os registos SPF e TXT?
 Se não for apresentada qualquer informação, significa que a autenticação SPF não foi configurada. Para realizar a configuração, siga as instruções indicadas na etapa 3 (Alterar o registo SPF).

> [!primary]
>
> O SPF tem o seguinte formato: "v=spf1 sources qualifier". Exemplo do SPF OVH: "v=spf1 include:mx.ovh.com ~all".
>

![domínio](images/spf_records_check_OVH_configuration.png){.thumbnail}

### 3 - Alterar o SPF

Para alterar a autenticação SPF do seu domínio, aceda à [Área de Cliente OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}. No menu à esquerda, selecione `Domínios`{.action}. Agora clique no domínio pretendido para consultar a `Zona DNS`{.action}.

Na tabela pode ver a configuração OVH do seu domínio. Cada linha corresponde a um registo DNS.

Para alterar ou adicionar um registo SPF na Zona DNS, clique em `Adicionar uma entrada`{.action}. 

![domínio](images/spf_records_add_entry_step1.png){.thumbnail}

Na nova janela são apresentados vários tipos de registo DNS. Para configurar a autenticação SPF, existem duas possibilidades:

- **usar a configuração manual**: indicada para utilizadores mais experientes, ou que disponham das informações necessárias à configuração (facultadas pelo prestador de serviços que gere serviço de e-mail).
- **usar o assistente de configuração SPF**: indicado para utilizadores menos experientes, ou sem acesso à informação solicitada durante a configuração manual.

Esta secção inclui as instruções para os dois métodos.

![domínio](images/spf_records_add_entry.png){.thumbnail}

#### Configuração manual do registo SPF

Na lista de registos, selecione `TXT`{.action} e introduza a informação solicitada. No campo `Valor`{.action}, insira os parâmetros SPF que deseja utilizar.

Para terminar a ação, clique em `Seguinte`{.action}. Certifique-se que as informações estão corretas. Depois clique em `Confirmar`{.action}.

> [!primary]
>
> A propagação das alterações efetuadas na zona DNS pode demorar até 24 horas.
>

![domínio](images/spf_records_add_TXT_entry.png){.thumbnail}

#### Usar o assistente de configuração SPF da OVH

Na lista dos registos, selecione `SPF`{.action}. A seguir tem duas opções à escolha:

- usar SPF para as soluções OVH (Plano MX, E-mail Pro e Hosted Exchange);
- personalizar o SPF com o nosso assistente.

##### Utilizar o SPF OVH

Clique no botão `Utilizar SPF no alojamento OVH`{.action}. De seguida irá ver a informação relativa ao SPF. Clique no botão `Validar`{.action} para concretizar alteração.

> [!primary]
>
> A propagação das alterações efetuadas na zona DNS pode demorar até 24 horas.

![domínio](images/spf_records_add_entry_step2.png){.thumbnail}

##### Personalizar o SPF

O assistente de configuração também permite personalizar o registo SPF. Para tal, deverá preencher os espaços em branco e responder às várias questões. Veja abaixo as opções disponíveis e a respetiva descrição.

|Detalhes|Descrição|
|---|---|
|Subdomínio|Indique se o registo SPF deve incluir um subdomínio associado ao seu domínio. Esta opção é válida se usar um subdomínio para enviar e-mail.|
|TTL (Time to Live)|Tempo de propagação (de concretização) das alterações efetuadas na zona DNS.|
|Ativar um IP para enviar e-mails|Opção útil se o site e os endereços de e-mail estiverem alojados num servidor que usa o mesmo endereço IP (e.g. um servidor dedicado).|
|Autorizar servidores MX para enviarem e-mails|Opção útil se os servidores de receção de e-mails também forem usados como servidores de envio.|
|Autorizar envio a partir de todos os servidores cujo nome inclui o seu domínio.|Esta opção não é recomendada, pois define demasiadas origens (sources) de envio como fidedignas.|

![domínio](images/spf_records_add_entry_personnalize_step1.png){.thumbnail}

A questão: «** O correio associado ao seu domínio é enviado a partir de outros servidores ?**», inclui os seguintes campos:

|Detalhes|Descrição|
|---|---|
|a|Insira aqui os domínios. Esta opção identifica os servidores de alojamento destes sites como origem fidedigna de envio (i.e. origem fidedigna de envio dos e-mails com os seus endereços).|
|mx|Permite indicar como fidedignos os servidores de receção de e-mail (servidores MX), se estes também forem usados para enviar correio. |
|ptr|Permite indicar como fidedignos os endereços dos hosts com *reverse DNS* ativado (através do registo PTR na Zona DNS).|
|ip4|Permite indicar como fidedignos os IP ou intervalos de IP (IPv4) usados para a enviar e-mails com os seus endereços.|
|ip6|Permite indicar como fidedignos os intervalos de IP (IPv6) usados para enviar e-mails com os seus endereços.|
|include| Esta configuração permite que um domínio use o SPF de outro domínio. Por exemplo, a OVH usa este método na configuração SPF: "v=spf1 include:mx.ovh.com ~all", para que possa ser usado pelos domínios dos clientes.|

Por fim, a questão: «** as informações indicadas descrevem todos os hosts que enviam e-mail através do seu domínio?**», oferece três opções:

|Detalhes|Descrição|
|---|---|
|Sim, tenho a certeza|Pede aos servidores que recebem e-mails associados ao seu domínio para rejeitarem mensagens de origem não fidedigna (não indicada no registo SPF).|
|Sim, mas prefiro usar o «safe mode»|Pede aos servidores que recebem e-mails associados ao seu domínio para aceitarem e-mails de origem não fidedigna (não indicada no SPF), e que estes sejam marcados (tagged) como potencialmente não fidedignos (como spam, por exemplo).|
|Não|Pede aos servidores que recebem e-mails associados ao seu domínio para aceitarem e-mails de origem não fidedigna, sem outras ações. Com esta opção, o cabeçalho (header) do e-mail ficará maior.|

Atenção: o registo SPF é apenas uma indicação dada aos servidores de receção de e-mails. Cabe a estes servidores «aceitarem» ou não a autenticação SPF atribuída aos servidores de envio.

Depois de inseridas todas as informações, clique em `Seguinte`{.action}. Certifique-se que as informações estão corretas e clique em `Confirmar`{.action}.

> [!primary]
>
> A propagação das alterações efetuadas na zona DNS pode demorar até 24 horas.
>

## Quer saber mais?

Fale com a nossa comunidade de utilizadores: <https://community.ovh.com/en/>