---
title: Otimizar o envio de e-mails
excerpt: Saiba como enviar e-mails limitando o risco de spam
slug: otimizar-enviar-emails
section: Utilização avançada
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

**Última atualização: 22/12/2022**

## Objetivo

As políticas antisspam são cada vez mais rigorosas. Para simplificar o envio de e-mails e para que os seus destinatários os recebam sem bloquear as ferramentas de segurança, são necessárias configurações para autenticar as suas mensagens e validar o seu conteúdo.

**Este guia dá-lhe alguns conselhos para otimizar o envio dos seus e-mails.**

> [!warning]
>
> A responsabilidade sobre a configuração e a gestão dos serviços que a OVHcloud disponibiliza recai sobre o utilizador. Assim, deverá certificar-se de que estes funcionam corretamente.
> 
> Este guia fornece as instruções necessárias para realizar as operações mais habituais. No entanto, se encontrar dificuldades ou dúvidas relativamente à administração, utilização ou implementação dos serviços num servidor, recomendamos que recorra a um [prestador de serviços especializado](https://partner.ovhcloud.com/pt/directory/).
> 

## Requisitos

- Ter um servidor de e-mail já configurado

> [!warning]
>
> O objetivo deste guia é fornecer-lhe alguns truques para otimizar o envio dos seus e-mails. Tenha em conta que cada serviço de mensagens tem as suas próprias diretivas e boas práticas para garantir a receção dos e-mails pelos destinatários. Recomendamos vivamente que os consulte.
>

## Instruções

### Configurar o registo SPF <a name="spfrecord"></a>

No caso de uma infraestrutura dedicada (servidor dedicado, VPS, instância Public Cloud ou Hosted Private Cloud), o campo SPF ótimo apresenta-se sob a forma:  `v=spf1 ip4:server_ipv4 ~all`. Não se esqueça de substituir 'server_ipv4' pelo endereço IPv4 do seu servidor.

> [!primary]
>
> O símbolo em frente ao *all* tem grande importância:
>
> - `+`: aceitar
> - `-`: não aceitar
> - `~`: falha suave (*soft fail*)
> - `?`: neutro
>

Para mais informações sobre a sintaxe do registo SPF, consulte a seguinte ligação: <http://www.open-spf.org/>.

Pode, naturalmente, ir mais longe, configurando o registo SPF de um domínio específico ou especificando um IPv6. Para saber como realizar esta operação, consulte o nosso manual sobre como [configurar o registo SPF](https://docs.ovh.com/pt/domains/partilhado_o_campo_spf/).

### Configurar o registo DKIM

A configuração de um registo DKIM (DomainKeys Identified Mail) oferece uma proteção suplementar para evitar que os seus e-mails sejam marcados como spam. Simplificando, o DKIM é uma assinatura que permite autenticar o domínio remetente.

Esta autenticação é realizada através de uma chave DKIM a adicionar na sua zona DNS. Encontrará diferentes geradores de chaves DKIM, entre os quais <http://dkimcore.org/tools/keys.html>. Queira seguir as indicações fornecidas no site do gerador à sua escolha.

### Configurar a reverse (*reverse IP*) <a name="reverseip"></a>

Sempre com o objetivo de otimizar o envio e de reduzir os riscos de bloqueio dos seus e-mails, uma reverse deve ser configurada com o seu nome de domínio.

Em primeiro lugar, deve criar um registo A na zona DNS do seu domínio com o endereço IP do seu servidor como alvo.

Se os seus servidores DNS são geridos pela OVHcloud, consulte este [guia](https://docs.ovh.com/pt/domains/alojamento_partilhado_como_editar_a_minha_zona_dns/#aceder-a-gestao-de-uma-zona-dns-da-ovhcloud).

Depois de alterar a zona DNS do domínio, é necessário aguardar 24 horas até que as alterações sejam efetivas.

Depois de fazer isso, adicione o registo PTR (também conhecido como reverse):

Na sua [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}, aceda ao separador `Bare Metal Cloud`{.action} e abra `IP`{.action}. 

Se deseja configurar a Reverse DNS num endereço Additional IP, clique no separador `Additional IP`{.action}.

O menu pendente em "**Os meus endereços IP públicos e serviços associados**" permite-lhe filtrar os seus serviços por categoria.

![Reverse IP](images/selectservice2022.png){.thumbnail}

Clique no botão `...`{.action} à direita da linha correspondente e, a seguir, em `Modificar a reverse`{.action}:

![Reverse IP](images/addreverse2022.png){.thumbnail}

Introduza o seu domínio na secção `Reverse` e clique em `Validar`{.action}.

![Reverse IP](images/enterreverse.png){.thumbnail}

> [!primary]
> Ao introduzir o seu nome de domínio na reverse, este verifica imediatamente se o registo A remete para o mesmo IP. Isto é utilizado nos procedimentos antisspam, pelo que o seu registo A deve ser válido e propagado. Há certas regras a seguir aquando da introdução da reverse:
>
>  - a reverse não pode começar por um `-`
>  - a reverse não pode ter mais de 80 caracteres
>  - a reverse não pode conter caracteres maiúsculos
>  - a reverse deve terminar com um `.`
>
> Por exemplo: "MyDomain.ca" no registo reverse seria **mydomain.ca.**
>

### Casos específicos de envio de e-mails

#### Para um servidor Microsoft (Outlook, etc...)
 
A Microsoft utiliza uma política de lista branca. Isto significa que, de início, todos os servidores estão na lista negra e é necessário um procedimento específico para que o seu servidor de e-mail seja validado.

Antes de começar o procedimento de whitelist do seu IP, certifique-se de que configurou corretamente uma [reverse](#reverseip) no seu IP (e não a reverse predefinida da OVHcloud).

A Microsoft também verifica o registo SPF, pelo que é recomendado que [configure um registo](#spfrecord).

A seguir, deve assinar os contratos SNDS (Smart Network Data Services) e JMRP (Junk Mail Reporting Partner Program).

Para subscrever gratuitamente o programa, basta criar uma conta JMRP/SNDS no seguinte endereço:
<https://postmaster.live.com/snds/JMRP.aspx?wa=wsignin1.0>

Uma vez a conta ativada, deve preencher o seguinte formulário:

- **Company name**: (nome da sua empresa)
- **Contact email address**: (um endereço de e-mail válido onde a Microsoft pode contactá-lo)
- **Complaint feedback email address**: (um endereço de e-mail válido onde poderá receber as queixas por spam, las *best practices* exigen que o endereço de e-mail seja o seguinte: **abuse@mydomain.com**.)

A seguir, adicione os endereços IP à secção `IP address or range`.

Ao clicar em `Add new Network`, ser-lhe-á pedido que defina um endereço de e-mail de contacto válido. Insira o endereço do tipo **abuse@mydomain.com** para receber queixas por spam.

Depois de inseridas as informações, clique em `Begin Setup` para transmitir o pedido. A Microsoft enviará então um e-mail intitulado `SNDS-JMRP Contract` e um segundo e-mail para **mydomain.com**.

Confirme as informações e a subscrição à JMRP/SNDS estará terminada.

Depois de realizar estas ações, se o seu IP aparecer como bloqueado, poderá pedir que o desbloqueie através do [procedimento junkmail](https://support.microsoft.com/en-us/getsupport?oaspworkflow=start_1.0.0.0&wfname=capsub&productkey=edfsmsbl3&locale=en-us&ccsid=635857671692853062). O procedimento demora normalmente 48 horas.

Por vezes, a Microsoft pode pedir-lhe a data da primeira faturação do seu IP/servidor. Nesse caso, envie à Microsoft uma cópia da sua fatura e indique o seu IP/servidor (ex: host nsXXX) na sua resposta.

Para mais informações queira abrir um [pedido de assistência](https://support.microsoft.com/en-us/getsupport?oaspworkflow=start_1.0.0.0&wfname=capsub&productkey=edfsmsbl3&ccsid=6364926882037750656) junto da Microsoft.

> [!warning]
>
> **Recusa da Microsoft**
>
> É possível que a Microsoft se recuse a desbloquear o(s) seu(s) endereço(s) IP, caso em que a OVHcloud não poderá intervir. É importante respeitar as boas práticas da Microsoft.
>

#### Para um servidor Gmail

A adição de registos específicos (por exemplo, um registo DMARC) pode facilitar a receção dos e-mails se o seu destinatário estiver no Gmail. Aqui está um artigo da Google que o pode ajudar: [Add a DMARC record](https://support.google.com/a/answer/2466563?hl=en){.external}.

A Google também disponibiliza um [artigo dedicado à prevenção do spam](https://support.google.com/mail/answer/81126?hl=en){.external} para os utilizadores do Gmail.

### Verificar as suas informações

Pode ser interessante utilizar um site como o [Mail Tester](http://www.mail-tester.com/) para verificar que todas as suas configurações estão corretas.


## Quer saber mais?

Para ser acompanhado sobre a implementação das suas soluções OVHcloud, contacte a nossa [rede de parceiros OVHcloud](https://partner.ovhcloud.com/pt/directory/).
 
Fale com a nossa comunidade de utilizadores: <https://community.ovh.com/en/>.