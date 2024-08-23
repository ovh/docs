---
title: "Melhorar a segurança dos e-mails através do registo DMARC"
excerpt: Saiba como o DMARC funciona e como configurá-lo para o seu serviço de e-mail
updated: 2023-12-13
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

## Objetivo

O registo **D**omain-based **M**essage **A**uthentication, **R**eporting, and **C**onformance (DMARC) é um mecanismo de segurança de e-mail. Baseia-se no resultado das verificações [SPF](/pages/web_cloud/domains/dns_zone_spf) e [DKIM](/pages/web_cloud/domains/dns_zone_dkim).

**Saiba como o DMARC funciona e como configurá-lo para o seu serviço de e-mail.**

> [!warning]
>
> A OVHcloud oferece serviços cuja configuração, gestão e responsabilidade são da sua responsabilidade. Assim, deverá certificar-se de que estes funcionam corretamente.
> 
> Este guia fornece as instruções necessárias para realizar as operações mais habituais. No entanto, se encontrar dificuldades, recomendamos que recorra a um [fornecedor especializado](/links/partner). Não poderemos proporcionar-lhe assistência técnica. Mais informações na secção [Quer saber mais?](#go-further) deste tutorial.
>

## Requisitos

- Ter acesso à secção de gestão do domínio (associada à sua solução de e-mail) a partir da [Área de Cliente OVHcloud](/links/manager).
- Um dos mecanismos de autenticação, [SPF](/pages/web_cloud/domains/dns_zone_spf) e/ou [DKIM](/pages/web_cloud/domains/dns_zone_dkim) deve estar configurado na zona DNS do nome de domínio da oferta de e-mail.

## Instruções

O DMARC permite ao proprietário de um nome de domínio gerir a segurança dos e-mails emitidos com o seu nome de domínio. O seu objetivo é:

- Declarar, ao servidor destinatário, as ações a realizar em caso de falha dos mecanismos de autenticação SPF e/ou DKIM.
- Controlar melhor a utilização do seu nome de domínio e detetar as tentativas de usurpação através dos relatórios enviados em caso de falha de autenticação dos e-mails. Além disso, melhora igualmente a segurança ao criar a ligação entre os protocolos SPF e DKIM.

O registro DMARC contém informações sobre políticas para e-mails maliciosos que tentam falsificar seu nome de domínio.<br>
O DMARC consulta os mecanismos de autenticação [SPF](/pages/web_cloud/domains/dns_zone_spf) e [DKIM](/pages/web_cloud/domains/dns_zone_dkim) para verificar os e-mails recebidos.<br>
O resultado dessas verificações SPF e/ou DKIM é traduzido pelo DMARC em “itens de ação” quando um e-mail falha nas verificações. Essas medidas podem incluir a quarantina ou a rejeição dos e-mails afetados.

### Como funciona o DMARC? <a name="how-dmarc-works"></a>

Um exemplo é apresentado para compreender como funciona o DMARC.

Quando o endereço de **contacto@mydomain.ovh** envia um e-mail para o endereço de destino **recipiente@otherdomain.ovh**, o servidor de receção irá consultar a zona DNS do domínio emissor **mydomain.ovh** para ler as instruções de registo DMARC.

O registo DMARC fornece uma descrição geral da política a adotar relativamente aos resultados dos testes SPF e DKIM. Pode igualmente indicar um ou vários endereços de e-mail (representados no nosso exemplo pelo endereço **report@mydomain.ovh**) utilizados para receber os relatórios de falhas de e-mails enviados a partir do nome de domínio **mydomain.ovh**.

Depois de ler as instruções de registo DMARC do nome de domínio **mydomain.ovh** pelo servidor de receção de **« otherdomain.ovh »**, os e-mails serão entregues no endereço **recipiente@otherdomain.ovh**, ou marcados como « SPAM » ou rejeitados.

![dmarc](/pages/assets/schemas/emails/dns-dmarc-diagram.png){.thumbnail}

### Configurar o DMARC

Existem duas formas de configurar o DMARC na sua zona DNS da OVHcloud:

- Através [da ferramenta de configuração DMARC](#dmarc-record). Este registo permite uma configuração simplificada do DMARC. Preencha os campos com as configurações DMARC necessárias para a sua configuração. Este registo é lido como um registo TXT pelos servidores DNS.
- Através de um [registo TXT](#txt-record). Este registo standard pode ser utilizado como parte da configuração DMARC a partir da Área de Cliente OVHcloud. Irá permitir-lhe integrar o conjunto das tags de configuração DMARC, incluindo as que estão ausentes através do registo DMARC da OVHcloud. No entanto, é necessário respeitar as regras de sintaxe do protocolo DMARC.

#### Registo DMARC <a name="dmarc-record"></a>

Pode adicionar o registo DMARC à sua zona DNS a partir da Área de Cliente OVHcloud. Para isso, aceda à [Área de Cliente OVHcloud](/links/manager) e aceda à secção `Web Cloud`{.action}. Na coluna da esquerda, selecione o nome de domínio correspondente na secção `Nomes de domínio`{.action} e, em seguida, clique no separador `Zona DNS`{.action} para aceder à zona DNS.

Depois de apresentar a zona DNS, clique no botão `Adicionar uma entrada`{.action} e, a seguir, em « Campos de e-mail » `DMARC`{.action}.

- **Subdomínio**: Esta entrada deve **obrigatoriamente começar por** `_dmarc`. Se você está aplicando seu DMARC ao conjunto do domínio, não insira nada além de `_dmarc` nesta caixa. Se definir o DMARC para um subdomínio associado ao seu domínio principal, adicione o subdomínio após `_dmarc`. Por exemplo, se um utilizador tiver de aplicar o DMARC a um subdomínio *subdomain.mydomain.ovh*, deverá introduzir `_dmarc.subdomain` na casa « subdomínio » para o nome de domínio *mydomain.ovh*.

A seguir, poderá encontrar uma descrição completa das tags utilizadas para **o registo DMARC** da OVHcloud:

- **Version (v=)**: campo obrigatório que determina a versão do protocolo DMARC.

- **Regra para o domínio (p=)**: política a adotar pelo destinatário a pedido do proprietário do domínio remetente. A política aplica-se ao domínio inquirido e aos subdomínios, exceto se a marca de subdomínio **sp=** indicar instruções diferentes. Os valores possíveis são os seguintes:
    - *none* : o proprietário do domínio não pede nenhuma ação específica relativa à entrega das mensagens.
    - *quarantine*: Se a verificação do mecanismo DMARC falhar, os destinatários devem considerar as mensagens de correio eletrónico como suspeitas. Dependendo das capacidades do servidor destinatário, isto pode significar « colocar na pasta de spam » e/ou « indicar como suspeito ».
    - *reject* : rejeição dos e-mails que falham na verificação do mecanismo DMARC.

> [!warning]
>
> A configuração do parâmetro `p=` pode ter um impacto importante na possibilidade de entrega dos e-mails do seu domínio. É aconselhável configurar `p=none` e efetuar uma análise dos relatórios de falha durante várias semanas, de forma a resolver eventuais anomalias. Passar para `p=quarantine` ou `p=reject` requer um controlo total dos parâmetros de segurança do e-mail, relativamente ao [SPF](/pages/web_cloud/domains/dns_zone_spf) e ao [DKIM](/pages/web_cloud/domains/dns_zone_dkim). A utilização do fator `pct=`, apresentado abaixo, permite uma transição progressiva.

- **Percentagem de mensagens filtradas (pct=)** (valor entre 0 e 100, o padrão é 100) - a percentagem do fluxo de mensagens ao qual a política DMARC deve ser aplicada. O objetivo da marca « pct » é permitir aos proprietários de domínios uma implementação lenta do mecanismo DMARC.

- **URI de criação de relatórios globais (rua=)** - endereços para os quais os relatórios devem ser enviados (lista de texto simples, separada por vírgulas). Qualquer URI válido pode ser especificado. A menção « mailto:» deve preceder o destinatário de e-mail (exemplo: `mailto:address@example.com`).

- **Regra para os subdomínios (sp=)**: política a adotar pelo destinatário para todos os subdomínios. Aplica-se unicamente aos subdomínios do domínio inquirido e não ao próprio domínio. A sintaxe é idêntica à da tag « p » definida acima. Se esta tag estiver ausente, a política especificada pela tag « p » será aplicada para os subdomínios.

- **Modo de alinhamento para SPF (aspf=)** (o padrão é `r`): indica o modo de alinhamento SPF Os valores são os seguintes:
    - `r`(relaxed) para o modo flexível : os e-mails podem ser, por exemplo, enviados a partir de um subdomínio do nome de domínio declarado. Fala-se aqui de alinhamento parcial.
    - `s`(strict) para o modo strict: os e-mails devem ser enviados a partir do nome de domínio declarado e apenas deste. O resultado é, portanto, « alinhado ».

> [!primary]
>
> No âmbito dos mecanismos de autenticação SPF e DKIM, o **alinhamento** refere-se à correspondência entre o nome de domínio (e/ou a assinatura do domínio) utilizado aquando do envio **e** o nome de domínio inscrito nestes mecanismos.
>
> **Exemplos**
>
> - **Alinhado**: quando o endereço *john.smith@mydomain.ovh* transmite uma mensagem do serviço de e-mail associado ao nome de domínio *mydomain.ovh* e os mecanismos de autenticação SPF e DKIM estão configurados, obtém-se um resultado alinhado.
> - **Parcialmente alinhado**: quando o endereço *john.smith@subdomain.mydomain.ovh* transmite uma mensagem a partir do serviço de e-mail associado ao nome de domínio *mydomain.ovh*, mas os mecanismos de autenticação SPF e DKIM foram configurados unicamente no domínio principal (ou seja, *mydomain.ovh*), obtém-se um resultado parcialmente alinhado.
> - **Falha dos mecanismos de autenticação**: o remetente tenta enviar um e-mail como *john.smith@mydomain.ovh* passando por outro endereço (como *robert@example.com*) ou utilizando um serviço de envio de e-mail que não está listado no SPF. Quando isso acontece, os mecanismos de autenticação SPF e DKIM devolvem uma falha como resultado.

![dmarc](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/dns-dmarc-01.png){.thumbnail}

#### Registo TXT <a name="txt-record"></a>

Pode adicionar o registo TXT à sua zona DNS a partir da [Área de Cliente OVHcloud](/links/manager) e, a seguir, aceda à secção `Web Cloud`{.action}. Clique em `Nomes de domínio`{.action} e escolha o domínio em causa. De seguida, clique no separador `Zona DNS`{.action}.

Depois de apresentar a zona DNS, clique no botão `Adicionar uma entrada`{.action} e, a seguir, em « Campos » `TXT`{.action}.

- **Subdomínio**: Esta entrada deve **obrigatoriamente começar por** `_dmarc`. Se você está aplicando seu DMARC ao conjunto do domínio, não insira nada além de `_dmarc` nesta caixa. Se definir o DMARC para um subdomínio associado ao seu domínio principal, adicione o subdomínio após `_dmarc`. Por exemplo, se for necessário aplicar o DMARC a um subdomínio *subdomain.mydomain.ovh*, é necessário introduzir `_dmarc.subdomain` na casa « subdomínio » para o nome de domínio *mydomain.ovh*

Abaixo, poderá encontrar a lista das tags utilizadas para criar um **registo TXT** com os parâmetros DMARC. Esta lista é complementar às tags mencionadas na secção anterior « [Registo DMARC](#dmarc-record) ».

- **adkim** (o padrão é `r`): indica o modo de alinhamento DKIM. Os valores são os seguintes:
    - `r`(relaxed) para o modo flexível: Os e-mails que falham na autenticação DKIM são marcados como « indesejados » pelo servidor destinatário.
    - `s`(strict) para o modo strict: os e-mails que falham na autenticação DKIM são rejeitados pelo servidor destinatário.

- **ruf** - Endereços aos quais devem ser comunicadas as informações de erro específicas da mensagem, incluindo uma lista de texto simples separada por vírgulas Se esta tag estiver presente, o proprietário do domínio remetente pede aos destinatários que enviem relatórios de falhas detalhados sobre os e-mails que falham na avaliação DMARC de forma específica (ver a tag `fo` abaixo). O formato da mensagem a gerar deve seguir o formato especificado para a etiqueta `rf`. A menção « mailto:» deve preceder o destinatário de e-mail (exemplo: `mailto:address@example.com`).

- **fo** (texto simples; o padrão é `0`) - Opções detalhadas do relatório de falha. Os geradores de relatórios podem optar por cumprir as opções solicitadas. O conteúdo desta tag deve ser ignorado se uma tag `ruf` (acima) não for igualmente especificada. O valor desta tag é uma lista de caracteres separados por dois pontos (`:`) que mostram as seguintes opções de geração de relatórios de falhas:
     - **0** : gera um relatório de falha DMARC se todos os mecanismos de autenticação (DKIM **ET** SPF) não conseguem produzir um resultado « não » alinhado.
     - **1** - Fornece um Relatório de Falhas DMARC se um mecanismo de autenticação (DKIM **OU** SPF) não produzir um resultado « sucesso » alinhado.
     - **d** : gera um relatório de falhas DKIM se o mecanismo de autenticação DKIM falhar, independentemente do alinhamento.
     - **s** : gera um relatório de falhas SPF se o mecanismo de autenticação SPF falhar, independentemente do alinhamento.

- **rf** (texto simples separado por vírgulas, o valor predefinido é `afrf`) — Esta etiqueta indica o tipo de formato esperado para os relatórios que apresentam detalhes específicos sobre as falhas de autenticação das mensagens. Atualmente, é suportado apenas o `afrf` (Auth Failure Reporting Format).

- **ri** (inteiro não assinado de 32 bits para texto simples; o padrão é 86400) - Intervalo necessário, em segundos, entre as razões agregadas. Esta etiqueta especifica a frequência com que os destinatários do correio eletrónico geram relatórios agregados sobre os resultados da avaliação DMARC para o domínio em questão.

![dmarc](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/dns-dmarc-02.png){.thumbnail}

#### Exemplos de registo <a name="record-example"></a>

> [!warning]
>
> Nos nossos 2 exemplos, o parâmetro `p=`é utilizado na sua forma restritiva para ilustrar o comportamento de um serviço de e-mail nesse caso.
>
> A configuração do parâmetro `p=` pode ter um impacto importante na possibilidade de entrega dos e-mails do seu domínio. Aconselhamos que configure `p=none` e efetue uma análise dos relatórios de falhas durante várias semanas, a fim de resolver eventuais anomalias. Passar para `p=quarantine` ou `p=reject` requer um controlo total dos parâmetros de segurança do e-mail, relativamente ao [SPF](/pages/web_cloud/domains/dns_zone_spf) e ao [DKIM](/pages/web_cloud/domains/dns_zone_dkim). A utilização do fator `pct=`, apresentado abaixo, permite uma transição progressiva.

##### Primeiro exemplo

Para ilustrar este primeiro exemplo, utilizámos o [registo DMARC](#dmarc-record) na zona DNS e aplicámos-lhe os seguintes parâmetros:

![dmarc](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/dns-dmarc-03.png){.thumbnail}

Obtemos o seguinte resultado:

```
"v=DMARC1;p=quarantine;pct=100;rua=mailto:report@mydomain.ovh;aspf=s;"
```

Todos os e-mails enviados (**pct=100**) são processados através dos mecanismos de autenticação SPF e/ou DKIM. Os e-mails que falharam no teste SPF são automaticamente rejeitados porque "**aspf=s**" (mecanismo SPF em modo strict). Um relatório de erros sobre a falha dos mecanismos de autenticação SPF e/ou DKIM é enviado para o endereço `report@mydomain.ovh` (**rua=mailto:report@mydomain.ovh**).

##### Segundo exemplo

Neste segundo exemplo, usamos um [registo TXT](#txt-record) para usar etiquetas que não estão disponíveis através do [registo DMARC](#dmarc-record) simplificado.

![dmarc](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/dns-dmarc-04.png){.thumbnail}

Obtemos o seguinte resultado:

```
"v=DMARC1; p=quarantine; pct=100; ruf=mailto:report@mydomain.ovh; fo=0; adkim=r; aspf=s; adkim=r; ri=86400"
```

- **p=quarantine**: As mensagens de correio eletrónico que não passem os testes DMARC são tratadas como « suspeitas ».

- **pct=100** : a política DMARC aplica-se a 50% das mensagens provenientes do fluxo de e-mail do proprietário do domínio.

- **ruf=mailto:report@mydomain.ovh** : endereço de e-mail para o qual devem ser enviados os relatórios de falha detalhados através do argumento « mailto ».

- **fo=0** Opções de relatório de falhas. O valor « 0 » indica que os relatórios de falhas do DMARC só devem ser gerados se os mecanismos de autenticação SPF e DKIM falharem em produzir um resultado alinhado « pass ».

- **adkim=r**: o modo de alinhamento do identificador DKIM requerido pelo proprietário do domínio é "relaxed" (modo flexível). Neste modo, o DKIM deve fornecer uma assinatura válida e o identificador do cabeçalho "From" pode ser parcialmente alinhado.

- **aspf=s**: O modo de alinhamento do SPF é « strict ». Isto significa que o nome de utilizador do domínio alinhado deve corresponder exatamente ao endereço IP de origem da mensagem.

- **adkim=r**: o modo de alinhamento do identificador DKIM requerido pelo proprietário do domínio é « relaxed » (modo flexível). Neste modo, o DKIM deve fornecer uma assinatura válida e o identificador do cabeçalho « From » pode ser parcialmente alinhado.

- **ri=86400** : define o intervalo solicitado entre as relações agregadas, em segundos. Neste caso, deve ser gerada, pelo menos, uma relação de transmissão agregada a cada 86400 segundos (ou seja, uma vez por dia).

## Quer saber mais? <a name="go-further"></a>

Para serviços especializados (referenciamento, desenvolvimento, etc.), contacte os [parceiros OVHcloud](/links/partner).

Se pretender beneficiar de uma assistência ao uso e à configuração das suas soluções OVHcloud, sugerimos que consulte as nossas diferentes [ofertas de suporte](/links/support).

Fale com nossa [comunidade de utilizadores](/links/community).