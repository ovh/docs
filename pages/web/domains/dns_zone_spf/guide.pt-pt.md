---
title: Como configurar o registo SPF de um domínio
excerpt: Saiba como adicionar um registo SPF à zona DNS do seu domínio
slug: partilhado_o_campo_spf
section: DNS e zona DNS
order: 5
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.

**Última atualização: 25/02/2021**

## Objetivo

O registo SPF (Sender Policy Framework) é um sistema de autenticação de mensagens de e-mail. Com este mecanismo, os servidores de receção de e-mail conseguem identificar os servidores de envio como fidedignos ou não fidedignos.
<br>Permite prevenir potenciais usurpações de identidade com os endereços de e-mail que utilizam o seu nome de domínio (spoofing).
<br>Também permite autenticar os e-mails que envia.
<br>O registo SPF é adicionado como um registo numa zona DNS onde estão indicados os servidores ou os endereços IP autorizados a enviar e-mails para o domínio em questão.

Esta autenticação é possível graças aos parâmetros incluídos no registo SPF. Os parâmetros incluem:

- **servidores ou vários endereços IP**: tal permitirá identificá-los como fontes de envio legítimas;
- **um qualificador**: permitirá recomendar ao servidor que recebe os e-mails uma forma específica de reagir a uma mensagem considerada não legítima, ou seja, proveniente de uma fonte que apresenta um risco.

Resumindo, o registo SPF deve incluir a origem (<i>source</i>) de envio dos e-mails associados ao seu domínio. Estas fontes podem ser o seu próprio servidor, o do seu prestador de serviços ou uma das soluções de e-mail da OVHcloud.

> [!primary]
>
> O registo SPF é apenas uma indicação dada aos servidores de receção de e-mails. Cabe a estes servidores «aceitarem» ou não a autenticação SPF atribuída aos servidores de envio.

**Saiba como configurar um registo SPF no seu domínio da OVHcloud.**

## Requisitos

- Ter acesso à secção de gestão do domínio na Área de [Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}.
- Ter acesso à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}.
- O domínio em questão deve utilizar a configuração da OVHcloud (ou seja, os servidores DNS da OVHcloud).

> [!warning]
>
> Se o domínio não usar os servidores DNS da OVHcloud, a alteração SPF deve ser realizada através da interface do agente responsável pela configuração do domínio.
>
> Se o domínio estiver registado na OVHcloud, verifique se este último utiliza a nossa configuração OVHcloud na sua Área de [Cliente](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external} a partir do separador `Servidores DNS`{.action}, depois de posicionado no domínio em questão.

## Instruções

### A configuração SPF OVHcloud

A configuração da OVHcloud aplica-se às seguintes soluções:

- MX Plan sozinho ou incluído numa oferta de [alojamento web da OVHcloud](https://www.ovhcloud.com/pt/web-hosting/){.external};
- [E-mail Pro](https://www.ovhcloud.com/pt/emails/email-pro/){.external};
- [Hosted Exchange](https://www.ovhcloud.com/pt/emails/hosted-exchange/){.external}.

Ao encomendar uma destas soluções, recomendamos que utilize um registo SPF com as informações da OVHcloud na zona DNS do seu domínio. Exemplo de parâmetros OVHcloud:

```bash
mydomain.ovh IN TXT "v=spf1 include:mx.ovh.com ~all"
```

Esta configuração não se aplica às ofertas Provider Exchange ou [Private Exchange](https://www.ovhcloud.com/pt/emails/hosted-exchange/){.external}.

Para a oferta Exchange Provider, a configuração é a seguinte:

```bash
mydomain.ovh IN TXT "v=spf1 include:mx.ovh.com a:gw1.ex-mail.biz a:gw2.ex-mail.biz ~all"
```

> [!primary]
> Para a oferta Private Exchange, é necessário introduzir os endereços IP do seu servidor de e-mail. Para limitar o tamanho do registo SPF, pode criar um registo SPF que contenha estes endereços IP num subdomínio e um registo SPF que o contenha, utilizando a categoria "include" no domínio.

### Verificar a configuração SPF atual

Se o seu domínio estiver a usar a configuração da OVHcloud, verifique se o registo SPF já está configurado. Para isso, aceda à Área de [Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}. Na secção `Domínios`{.action}, selecione o domínio em questão. Clique no separador `Zona DNS`{.action}.

Irá aparecer uma tabela Este último apresenta a zona DNS do seu domínio na OVHcloud. É constituída por vários registos, todos simbolizados por uma linha da tabela.

> [!primary]
>
> Se o seu domínio for gerido pela OVHcloud, verifique se este último utiliza os servidores DNS da OVHcloud a partir do separador `Servidores DNS`{.action}.

Na tabela, para consultar a linha correspondente ao SPF OVHcloud, pode utilizar um filtro de visualização. Uma vez que isto pode ocorrer em dois locais diferentes, selecione a opção `TXT`{.action} ou `SPF`{.action}, passando de um para o outro, caso seja necessário. Por conseguinte, a apresentação do quadro pode ser diferente.

- **É apresentado** um SPF correspondente às informações OVHcloud da sua oferta: o seu domínio já utiliza a configuração da OVHcloud. Se preferir usar outra configuração, siga as instruções indicadas na etapa 3 (Alterar o registo SPF).

- **O SPF não corresponde às informações da OVHcloud**: o seu domínio já utiliza um SPF personalizado. A sua alteração ou a escolha da configuração da OVHcloud é feita na etapa seguinte. Se a sua configuração estiver errada, deverá alterá-la.

- **Na coluna alvo** não são apresentados SPF: verifique previamente se o registo não é criado como SPF ou TXT alterando a filtragem. Se não aparecer nenhum registo SPF, independentemente da filtragem, o seu domínio não o utiliza. Para realizar a configuração, siga as instruções indicadas na etapa 3 (Alterar o registo SPF).

> [!primary]
>
> O SPF tem a seguinte forma: "v=spf1 `fontes` `qualificadoras`". Por exemplo, o SPF da OVHcloud é: "v=spf1 include:mx.ovh.com ~all".

![domínio](images/spf_records_check_OVH_configuration.png){.thumbnail}

### Configurar o registo SPF

Para adicionar um registo SPF na configuração da OVHcloud do seu domínio, aceda à Área de [Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}. Selecione `Domínios`{.action}, clique no domínio pretendido e aceda ao separador `Zona DNS`{.action}.

Para adicionar um registo SPF, clique em `Adicionar uma entrada`{.action}.

![domínio](images/spf_records_add_entry_step1.png){.thumbnail}

Na nova janela, irá visualizar vários registos DNS. Para adicionar um SPF, tem duas possibilidades:

- [Adicionar um registo TXT](#txtrecord): para utilizadores experientes ou que já disponham do registo completo. Por exemplo, o seu fornecedor de solução de e-mail transmite-lhe o valor.
- [Adicionar um registo SPF](#spfrecord): para os utilizadores que não possuem a totalidade do registo. Por exemplo, dispõe apenas de um endereço de IP ou do nome do host do servidor de e-mail.
- [Adicionar um registo SPF ](#spfrecordovhcloud)e utilizar **a configuração da OVHcloud**: para os utilizadores que apenas possuem as ofertas de e-mail OVHcloud no seu nome de domínio (exceto [Private Exchange](https://www.ovhcloud.com/pt/emails/hosted-exchange/){.external} e Exchange Provider).

![domínio](images/spf_records_add_entry.png){.thumbnail}

#### Adicionar um registo SPF <a name="spfrecord"></a>

Escolheu o registo `SPF`{.action}

O assistente de configuração também permite personalizar o registo SPF. Para tal, deverá preencher os espaços em branco e responder às várias questões. Veja abaixo as opções disponíveis e a respetiva descrição.

Vamos abordá-las gradualmente.

![domínio](images/spf_records_add_entry_personnalize_step1.png){.thumbnail}

| Detalhes                                                                        | Descrição                                                                                                                                                               |
| ------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Subdomínio                                                                      | Indique se o registo SPF deve incluir um subdomínio associado ao seu domínio. Esta opção é válida se usar um subdomínio para enviar e-mail.                             |
| TTL                                                                             | Trata-se do tempo de propagação que será aplicado à configuração deste registo DNS.                                                                                     |
| Ativar um IP para enviar e-mails                                                | A selecionar se o seu website e os seus endereços de e-mail estiverem alojados num servidor que utilize o mesmo endereço de IP (por exemplo, no seu servidor dedicado). |
| Autorizar servidores MX para enviarem e-mails                                   | A selecionar se os servidores de receção de e-mails também puderem enviar e-mails.                                                                                      |
| Autorizar envio a partir de todos os servidores cujo nome inclui o seu domínio. | Opção a utilizar com precaução, pois permite legitimar de forma muito ampla as fontes de envio que utilizam o seu nome de domínio.                                      |

A questão: «** O correio associado ao seu domínio é enviado a partir de outros servidores ?**», inclui os seguintes campos:

| Detalhes | Descrição                                                                                                                                                                                                                                                                                                                                                      |
| -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| a        | Insira aqui os domínios. Esta opção identifica os servidores de alojamento destes sites como origem fidedigna de envio (i.e. origem fidedigna de envio dos e-mails com os seus endereços).                                                                                                                                                                     |
| mx       | Permite indicar como fidedignos os servidores de receção de e-mail (servidores MX), se estes também forem usados para enviar correio. Serão assim identificados como uma fonte de envio legítima.                                                                                                                                                              |
| ptr      | Introduza aqui os nomes de hosts cuja _reverse_ está funcional (graças a um registo PTR na zona DNS). Serão assim identificados como uma fonte de envio legítima.                                                                                                                                                                                              |
| ip4      | Permite indicar como fidedignos os IP ou intervalos de IP (IPv4) usados para a enviar e-mails com os seus endereços.                                                                                                                                                                                                                                           |
| ip6      | Permite indicar como fidedignos os intervalos de IP (IPv6) usados para enviar e-mails com os seus endereços.                                                                                                                                                                                                                                                   |
| include  | Introduza aqui os nomes de domínio que incluem as suas próprias regras SPF. Isto irá permitir que estas últimas sejam utilizadas no seu próprio domínio. Por exemplo, a OVHcloud utiliza este método na sua configuração SPF: "v=spf1 include:mx.ovh.com ~all", o que permite à OVHcloud gerir o SPF de mx.ovh.com e permitir que os seus clientes o utilizem. |

Por fim, a questão: «** as informações indicadas descrevem todos os hosts que enviam e-mail através do seu domínio?**», oferece três opções:

| Detalhes                            | Descrição                                                                                                                                                                                                                                |
| ----------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Sim, tenho a certeza                | Pede aos servidores que recebem e-mails associados ao seu domínio para rejeitarem mensagens de origem não fidedigna (não indicada no registo SPF).                                                                                       |
| Sim, mas prefiro usar o «safe mode» | Pede aos servidores que recebem e-mails associados ao seu domínio para aceitarem e-mails de origem não fidedigna (não indicada no SPF), e que estes sejam marcados (tagged) como potencialmente não fidedignos (como spam, por exemplo). |
| Não                                 | Pede aos servidores que recebem e-mails associados ao seu domínio para aceitarem e-mails de origem não fidedigna, sem outras ações. Com esta opção, o cabeçalho (header) do e-mail ficará maior.                                         |

Depois de inseridas todas as informações, clique em `Seguinte`{.action}. Certifique-se de que as informações estão corretas e clique em `Confirmar`{.action}.

> [!primary]
>
> A propagação das alterações efetuadas pode demorar entre 4 e 24 horas.

#### Utilizar o registo SPF OVHcloud <a name="spfrecordovhcloud"></a>

Escolheu o registo `SPF`{.action} e deseja aplicar a configuração da OVHcloud.

Clique no botão `Utilizar o SPF para partilhar a OVHcloud`{.action} no topo da janela de assistência. Aparecerão as informações relativas ao SPF da OVHcloud. Clique no botão `Validar`{.action} para concretizar alteração.

![domínio](images/spf_records_add_entry_step2.png){.thumbnail}

> [!primary]
>
> A propagação das alterações efetuadas pode demorar entre 4 e 24 horas.

#### Adicionar um registo TXT <a name="txtrecord"></a>

Entre os registos propostos, clique em `TXT`{.action} e introduza as informações pedidas. No campo `Valor`{.action}, insira os parâmetros SPF que deseja utilizar.

Para terminar a ação, clique em `Seguinte`{.action}. Certifique-se que as informações estão corretas. Depois clique em `Confirmar`{.action}.

> [!primary]
>
> A propagação das alterações efetuadas pode demorar entre 4 e 24 horas.

![domínio](images/spf_records_add_TXT_entry.png){.thumbnail}

### Modificar um registo SPF

Para alterar o registo SPF na configuração OVHcloud do seu domínio, aceda à Área de [Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}. Selecione `Domínios`{.action}, clique no domínio pretendido e aceda ao separador `Zona DNS`{.action}.

A tabela apresenta a configuração da OVHcloud do seu domínio. Cada linha corresponde a um registo DNS. Consulte neste quadro o seu registo TXT ou SPF e clique no botão `...`{.action} para editar a entrada.

## Saiba mais

[Editar uma zona DNS da OVHcloud](../alojamento_partilhado_como_editar_a_minha_zona_dns/){.external}.

[Alterar os servidores DNS de um domínio OVHcloud](../partilhado_generalidades_sobre_os_servidores_dns/){.external}.

Fale com a nossa comunidade de utilizadores: [https://community.ovh.com/en/](https://community.ovh.com/en/){.external}.
