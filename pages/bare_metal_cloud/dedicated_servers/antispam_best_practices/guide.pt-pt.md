---
title: OVHcloud AntiSpam - Boas práticas e desbloqueio de um endereço IP
excerpt: Descubra as nossas boas práticas antisspam e como desbloquear um endereço IP bloqueado para SPAM
updated: 2026-01-06
---

## Objetivo

Para cada endereço IP disponível nos produtos e serviços da OVHcloud, na qualidade de Fornecedor de Acesso à Internet, registá-lo-emos e reservá-lo-emos junto de organizações como a [RIPE](https://www.ripe.net/) ou a [ARIN](https://www.arin.net/). Neste caso, parecemos ser o contacto *abusivo* da propriedade intelectual em caso de litígio na base de dados *WHOIS*.

Se um endereço IP é objeto de um relatório junto de organizações como Spamhaus, SpamCop, etc, que lutam contra o SPAM, os websites maliciosos e o phishing, é a reputação do conjunto da rede OVHcloud que está em jogo.

Por isso, é importante que a OVHcloud se ocupe da reputação, qualidade e segurança da rede, que constitui igualmente uma parte importante do seu serviço.

### Como funciona o sistema de proteção?

O nosso sistema baseia-se na tecnologia antisspam de Vade Secure.

Quando um endereço IP for bloqueado para SPAM, um e-mail será enviado à sua conta, contendo informações como no exemplo abaixo:

> 
> Estimado/a Cliente,
>
> A nossa proteção Antispam detetou um envio importante de spam a partir de um dos seus IP:
122.122.122.122
>
> Para garantir a segurança da nossa rede, o tráfego de saída do seu servidor para a porta 25 foi suspenso.
> Para que possa efetuar as verificações, eis uma amostra dos e-mails bloqueados:
>
> Destination IP: 188.95.235.33 - Mensagem-ID: d24aa492-5f37-457f-9595-23ddc9e0f714@xxxxxxxxxxxxx.xx.local - Spam score: 300 <br>
> Destination IP: 188.95.235.33 - Mensagem-ID: fc090jdhf934iu09bf084bfo92@xxxxxxxxxxxxx.com - Spam score: 300<br>
> Destination IP: 188.95.235.33 - Mensagem-ID: P0hbfo93407684bfoqljrlqvpLatS3RRB9rZw7e8s@xxxxxxxxxxxx.online - Spam score: 300<br>
> Destination IP: 188.95.235.33 - Mensagem-ID: 6ZUnls843bnf0934StxFasYGmhtDJRo@xxxxxxxxxxxx.online - Spam score: 300<br>
> Destination IP: 188.95.235.33 - Mensagem-ID: zcb.3z54da3kdfkl45802n0c0q98rqcc57e3b8aadfac63b2c408e3f5f9a27.1d44jkgnddfef.166489320375@xxxxxx.xxxx.net - Spam score: 300<br>
> Destination IP: 188.95.235.33 - Mensagem-ID: zcb.3z54da33hn98v9bcq-nrf3r67cc57e3b8aadfac63b2c408e3f5f9a27.1d44jd9340252.1655508652095@xxxxxx.xxxx.net - Spam score: 300
> <br>
> <br>

## Instruções

**O que fazer quando receber o e-mail de alerta?**

O processo envolve a identificação do problema, a sua resolução e o desbloqueio do seu IP.

### Identificar e resolver o problema

**Antes de desbloquear um endereço IP, certifique-se de que tomou as seguintes medidas:**

- Elimine o envio de e-mail (por exemplo: parar todos os softwares de e-mail como o qmail, Postfix, Sendmail, etc.).
- Verifique a fila de espera dos e-mails (por exemplo qmHandle para qmail, postqueue -p para Postfix) e esvazie-a.
- Analise os logs graças à **Message-ID** presente no alerta de bloqueio.
- Se enviar SPAM ou e-mails ilegítimos, recomendamos vivamente que resolva o problema **antes** de desbloquear o endereço IP. Consulte este guia para [melhores práticas (EN)](/pages/bare_metal_cloud/dedicated_servers/antispam_best_practices#bestpractices) no matéria de envio de e-mails. 

Uma vez o problema resolvido, pode desbloquear o seu endereço IP efetuando os passos seguintes.

> [!alert]
> 
> Não desbloqueie de forma alguma o endereço IP antes de ter suspendido o envio dos e-mails a partir do seu servidor e de ter esvaziado a sua fila de espera de e-mails. Caso contrário, será imediatamente bloqueado uma segunda vez, por um período mais longo. 
>

### Desbloquear o endereço IP

#### Desbloquear o endereço IP a partir da Área de Cliente

Aceda à [Área de Cliente OVHcloud](/links/manager), clique em `Network`{.action} no menu à esquerda do ecrã e, a seguir, em `Endereços IP Públicos`{.action}.

Pode utilizar o menu suspenso sob **Os meus endereços IP públicos e serviços associados** para filtrar os seus serviços por categoria, ou escrever diretamente o endereço IP desejado na barra de pesquisa.

Se tiver uma alerta sobre uma das suas IPs, encontrará um selo de status vermelho na coluna **Alerta IP**.

![Alerta anti spam](images/blockedIP_new.png){.thumbnail}

Clique no botão `⁝`{.action} ao lado da IP ou do serviço correspondente e selecione `Desbloqueio anti-spam`{.action}.

![antispam](images/antispam_new.png){.thumbnail}

Na janela que se abre, clique em `Desbloquear o IP`{.action} em baixo e valide.

![Desbloquear IP](images/unblockip_new.png){.thumbnail}

O IP está em curso de desbloqueio, a operação pode levar vários minutos.

Após o tratamento, o IP será desbloqueado.

#### Desbloquear o endereço IP a partir da API OVHcloud

Ligue-se à interface [API da OVHcloud](/links/api) e siga os passos abaixo. Para mais informações sobre a utilização das API OVHcloud, consulte o nosso guia "[Primeiros passos com as API OVHcloud](/pages/manage_and_operate/api/first-steps)".

Em primeiro lugar, obtenha a lista dos endereços IP de cada serviço OVHcloud (Hosted Private Cloud / VPS / Public Cloud / Servidor Dedicado):

> [!api]
>
> @api {v1} /ip GET /ip
>

**tipo**: Indique o tipo de IP (Dedicated, PCC, VPS, vRack, PCI, etc.)

Eis um exemplo:

```bash
"2001:41d0:67:d200:/56",
"2001:41d0:68:a00:/56",
"2001:41d0:68:f00::/56",
"2001:41d0:117:db00:/56",
"122.122.122.121/28",
"145.56.222.96/28",
"188.81.49.30/28",
```

A seguir, procure os endereços IP num determinado estado graças à seguinte chamada. Se já conhece o endereço IP bloqueado, pode passar ao [passo seguinte](#unblockip):

> [!api]
>
> @api {v1} /ip GET /ip/{ip}/spam
>

**ip**: especifique o bloco de IP recuperado no passo anterior com a máscara de rede. Por exemplo, 122.122.122.121/28.<br>
**state**: especifique o estado que procura.

Eis um exemplo de resultado (neste caso, o bloco 122.122.122.121/28 foi selecionado):

```bash
"122.122.122.122" 
```

Para obter informações sobre o bloqueio, aceda à seguinte chamada. Caso contrário, passe à [etapa seguinte](#unblockip).

> [!api]
>
> @api {v1} /ip GET /ip/{ip}/spam/{ipSpamming}
>

**ip**: especifique o bloco de IP recuperado no passo anterior com a máscara de rede.<br>
**ipSpamming**: indique o IP anteriormente recuperado no estado "blockedForSpam", por exemplo.

Eis um exemplo de resultado (neste caso, o bloco 122.122.122.121/28 e o IP 122.122.122.122 foram selecionados):

```bash
time: 3600,
data: "2022-08-29T17:42:50+01:00",
ipSpamming: "122.122.122.122",
state: "blockedForSpam" 
```

Então:

```bash
- The IP is blocked for 1 hour (or 3600 seconds).
- It was blocked on 29/08/2022 at 5:42 p.m.
- Its current state is blocked.
```

Se deseja obter as estatísticas sobre o que foi detetado, utilize a chamada api seguinte, caso contrário passe à [etapa seguinte](#unblockip).

> [!api]
>
> @api {v1} /ip GET /ip/{ip}/spam/{ipSpamming}/stats
>

**ip**: especifique o bloco de IP recuperado no passo anterior com a máscara de rede.<br>
**ipSpamming**: indique o IP anteriormente recuperado no estado "blockedForSpam", por exemplo.<br>
**from and to**: utilize o formato de data utilizado na função anterior (YYYY-MM-DDTHH:MM+01:SS).

Eis um exemplo:

```bash
{
"messageId": "2PXQSX-3JRAUU-SF@obfuscated.com",
"destinationIp": "188.95.235.33",
"date": 1385640992,
"spamscore": 410
}
```

##### **Desbloquear o IP** <a name="unblockip"></a>

> [!alert]
> IMPORTANTE!
> Não desbloqueie de forma alguma o endereço IP sem ter suspendido o envio dos e-mails a partir do seu servidor e esvaziado a sua fila de espera de e-mails. Caso contrário, será imediatamente bloqueado uma segunda vez, por um período mais longo. 
>

Para desbloquear o seu endereço IP, utilize a seguinte chamada:

> [!api]
>
> @api {v1} /ip POST /ip/{ip}/spam/{ipSpamming}/unblock
>

**ip**: especifique o bloco de endereços IP recuperado no passo anterior com a máscara de rede.<br>
**ipSpamming**: especifique o endereço IP anteriormente recuperado no estado "blockedForSpam", por exemplo.

Eis um exemplo:

```bash
"message": "This IP address is still blocked for 129 seconds"
```

E um resultado pouco mais de 129 segundos depois:

```bash
time: 3600,
data: "2022-08-29T17:42:50+01:00",
ipSpamming: "122.122.122.122",
state: "unblocking" 
```

O endereço IP está a ser desbloqueado e a operação pode levar alguns minutos.

### Em caso de falso positivo

Em alguns casos, o alerta antispam pode ser um falso positivo. Se verificou e constatou que o **Message-ID** está associado a um e-mail legítimo, deve assegurar-se de que os seus e-mails estão em conformidade com as [RFC](#rfc) e com as [boas práticas](#bestpractices) referenciadas abaixo.

#### RFC <a name="rfc"></a>

As RFC (Request For Comments) são documentos destinados a descrever aspectos técnicos da Internet. Estes documentos são produzidos e publicados pela IETF (Internet Engineering Task Force), um grupo que produz e define essencialmente normas.
Encontre mais informações nos seguintes links: 
<br>
- [RFC](https://en.wikipedia.org/wiki/Request_for_Comments)<br>
- [IETF](https://www.ietf.org/)<br>
- [Internet Draft](https://en.wikipedia.org/wiki/Internet_Draft)

#### Boas práticas <a name="bestpractices"></a>

As boas práticas são métodos recomendados que são frequentemente baseados nos documentos RFC e que visam aconselhá-lo sobre a melhor forma de proceder. Trata-se aqui das regras básicas a respeitar para que os seus e-mails não sejam considerados como spam.

**Volume de envio**

Se o volume dos seus e-mails enviados for muito elevado, é aconselhável:

- reservar um bloco de endereços IP dedicado exclusivamente à utilização dos e-mails.
- fornecer um endereço *abuse* nesse bloco para receber reclamações.
- configurar corretamente os [Reverses](/pages/bare_metal_cloud/dedicated_servers/mail_sending_optimization#configurer-le-reverse-ip) em todas as endereços IP. 

Esta última operação permitirá isolar simultaneamente a IP e a reputação do domínio se enviar e-mails de diferentes domínios, receber as reclamações e, assim, fazer o necessário para ser desbloqueado pelas diferentes organizações. O *reverse* permite também localizar mais rapidamente um problema num formulário utilizando o domínio X ou Y, pois os e-mails não são enviados a partir da mesma IP e não têm o mesmo *reverse*.

**Conteúdo do seu e-mail**

- Evite utilizar palavras-chave de spam nos seus e-mails, como "comprar" ou "última chance". Evite maiúsculas desnecessárias, assuntos genéricos, pontos de exclamação e percentagens de desconto.
- Pense em fornecer um link de **desinscrição** para as pessoas que não solicitaram receber o seu e-mail ou que considerem que este é ilegítimo.
- Preste especial atenção a que os seus e-mails contenham o endereço do remetente (ou um alias), um assunto e uma boa proporção de texto, imagens e links no corpo da mensagem.
- A relação texto/imagem e texto/link deve ser elevada. Não sobrecarregue o e-mail com links hipertexto e evite o JavaScript.

**FBL (*Feedback Loop*) - Ciclo de avaliação**

Este sistema permite acompanhar diretamente os feedbacks de alguns provedores de acesso à Internet, informando-lhe que os seus utilizadores sinalizaram a sua mensagem como ilegal e que foi classificada como spam. Isto permitirá interagir diretamente com estes FAI em relação à sua reputação. Eis alguns FBL:

- [Yahoo & AOL Postmaster](https://senders.yahooinc.com/contact)
- [SpamCop](https://www.spamcop.net/)
- [Outlook & live.com](https://sendersupport.olc.protection.outlook.com/pm/)

**Autenticação**

Certos serviços de autenticação permitem-lhe proteger a sua reputação:

- **Sender-ID**: trata-se de uma tecnologia de autenticação de e-mails desenvolvida pela Microsoft que valida a autenticidade do seu nome de domínio verificando o endereço IP do remetente. Esta tecnologia baseia-se na norma IETF: [RFC4406](https://datatracker.ietf.org/doc/rfc4406/).
- **SPF**: *Sender Policy Framework* é um padrão de verificação do domínio do remetente. Baseia-se na [RFC4408](https://datatracker.ietf.org/doc/rfc4408/) e consiste em adicionar um campo SPF ou TXT ao DNS do domínio, que contém a lista das endereços IP autorizadas a enviar e-mails a partir desse domínio.
- **Reverse DNS ou Reverse IP**: O *reverse* permite "traduzir" uma IP num domínio. Isto permite encontrar o domínio associado ao endereço IP.
- **DKIM**: Esta norma é descrita na [RFC4871](https://datatracker.ietf.org/doc/html/rfc4871). AOL e Google (Gmail) funcionam com base nisso. 

Para mais informações sobre os serviços acima mencionados, consulte o nosso guia "[Optimizar o envio de e-mails](/pages/bare_metal_cloud/dedicated_servers/mail_sending_optimization)".

#### Casos específicos de envios de e-mails

- **Para um servidor Microsoft (Outlook, etc.)**

A Microsoft utiliza uma política de lista branca. Isto significa que qualquer servidor está inicialmente numa lista negra. Uma procedimento específico é então necessário para validar o seu servidor de e-mail. Para mais informações, convidamo-lo a consultar a secção **Para um servidor Microsoft (Outlook, etc.)** do nosso guia "[Como evitar que os seus e-mails sejam marcados como spam](/pages/bare_metal_cloud/dedicated_servers/mail_sending_optimization)".

- **Para um servidor Gmail**

A adição de registos específicos (por exemplo, um registo DMARC) pode facilitar a receção dos e-mails se o seu destinatário tiver um endereço Gmail. A seguinte documentação da Google pode ajudá-lo nesse processo: [Adicionar um campo DMARC](https://support.google.com/a/answer/2466563/).

A Google também oferece um [artigo dedicado](https://support.google.com/mail/answer/81126/) à prevenção de spam para utilizadores do Gmail.

### Declarar um falso positivo

Se os seus e-mails estão em conformidade, pode informar-nos enviando um exemplo do seu e-mail (incluindo o cabeçalho). O nosso suporte técnico ajudará-o nas próximas etapas. Basta criar um ticket de assistência a partir do seu espaço cliente e incluir as seguintes informações:

- A IP do serviço bloqueada por SPAM.
- Uma cópia original do ou dos e-mails marcados como SPAM (deverá conseguir identificá-los através do **Message-ID** incluído no alerta de bloqueio). Se nenhum **Message-ID** for fornecido, basta-nos enviar uma cópia dos e-mails enviados antes da receção do alerta. Por favor, forneça apenas a cópia do e-mail sinalizado como SPAM.
- O ficheiro .EML do e-mail fornecido. Este deve incluir o **cabeçalho** e o **rodapé** do e-mail. Se não souber como extrair um ficheiro .EML, convidamo-lo a consultar o seguinte guia: [Recuperar o cabeçalho de um e-mail](/pages/web_cloud/email_and_collaborative_solutions/troubleshooting/diagnostic_headers).

Uma vez enviadas as informações, o nosso serviço de assistência comunicará com o Vade Secure para uma análise mais aprofundada da situação.

## Quer saber mais?
 
Fale com a nossa [comunidade de utilizadores](/links/community).