---
title: OVHcloud AntiSpam - Boas práticas e desbloqueio de um endereço IP
slug: antispam-best-practices
excerpt: Descubra as nossas boas práticas antisspam e como desbloquear um endereço IP bloqueado para SPAM
section: Diagnóstico e Modo Rescue
order: 04
---

**Última atualização: 17/10/2022**

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

O procedimento consiste em identificar o problema, resolvê-lo e desbloquear o seu IP.

### Identificar e resolver o problema

**Antes de desbloquear um endereço IP, certifique-se de que tomou as seguintes medidas:**

- Elimine o envio de e-mail (por exemplo: parar todos os softwares de e-mail como o qmail, Postfix, Sendmail, etc.).
- Verifique a fila de espera dos e-mails (por exemplo qmHandle para qmail, postfila -p para Postfix) e esvazie-a.
- Analise os logs graças à **Message-ID** presente no alerta de bloqueio.
- Se enviar SPAM ou e-mails ilegítimos, recomendamos vivamente que resolva o problema **antes** de desbloquear o endereço IP. Consulte a segunda parte deste guia para conhecer as [boas práticas](#bestpractices) em matéria de envio de e-mails. 

Uma vez o problema resolvido, pode desbloquear o seu endereço IP efetuando os passos seguintes.

> [!alert]
> 
> Não desbloqueie de forma alguma o endereço IP antes de ter suspendido o envio dos e-mails a partir do seu servidor e de ter esvaziado a sua fila de espera de e-mails. Caso contrário, será imediatamente bloqueado uma segunda vez, por um período mais longo. 
>

### Desbloquear o endereço IP

#### Desbloquear o endereço IP a partir da Área de Cliente

Na [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt), aceda à secção `Bare Metal Cloud`{.action} e clique em `IP`{.action}.

Um pop-up indica-lhe o IP ou o serviço bloqueado para SPAM.

![Alerta antisspam](images/alertantispam.png){.thumbnail}

Na secção "Os meus endereços IP públicos e serviços associados", clique no botão `...`{.action} junto do IP ou do serviço correspondente e selecione o `Anti-Spam`{.action}.

![antisspam](images/antispam.png){.thumbnail}

Na nova janela, clique em `Desbloquear o antisspam`{.action} e valide.

![Desbloquear IP](images/unblockip.png){.thumbnail}

O IP está em curso de desbloqueio, a operação pode levar vários minutos.

Após o tratamento, o IP será desbloqueado.

#### Desbloquear o endereço IP a partir da API OVHcloud

Ligue-se à interface [API da OVHcloud](https://eu.api.ovh.com/console/) e siga os passos abaixo. Para mais informações sobre a utilização das API OVHcloud, consulte o nosso guia "[Primeiros passos com as API OVHcloud](https://docs.ovh.com/pt/api/first-steps-with-ovh-api/)".

Em primeiro lugar, obtenha a lista dos endereços IP de cada serviço OVHcloud (Hosted Private Cloud / VPS / Public Cloud / Servidor Dedicado):

> [!api]
>
> @api {GET} /ip
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
> @api {GET} /ip/{ip}/spam
>

**ip** : especifique o bloco de IP recuperado no passo anterior com a máscara de rede. Por exemplo, 122.122.122.121/28.<br>
**state** : especifique o estado que procura.

Eis um exemplo de resultado (neste caso, o bloco 122.122.122.121/28 foi selecionado):

```bash
"122.122.122.122" 
```

Para obter informações sobre o bloqueio, aceda à seguinte chamada. Caso contrário, passe à [etapa seguinte](#unblockip).

> [!api]
>
> @api {GET} /ip/{ip}/spam/{ipSpamming}
>

**ip** : especifique o bloco de IP recuperado no passo anterior com a máscara de rede.<br>
**ipSpamming** : indique o IP anteriormente recuperado no estado "blockedForSpam", por exemplo.

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
> @api {GET} /ip/{ip}/spam/{ipSpamming}/stats
>

**ip** : especifique o bloco de IP recuperado no passo anterior com a máscara de rede.<br>
**ipSpamming** : indique o IP anteriormente recuperado no estado "blockedForSpam", por exemplo.<br>
**from and to** : utilize o formato de data utilizado na função anterior (YYYY-MM-DDTHH:MM+01:SS).

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
Não desbloqueie de forma alguma o endereço IP sem ter suspendido o envio dos e-mails a partir do seu servidor e esvaziado a sua fila de espera de e-mails. Caso contrário, será imediatamente bloqueado uma segunda vez, por um período mais longo. 
>

Para desbloquear o seu endereço IP, utilize a seguinte chamada:

> [!api]
>
> @api {POST} /ip/{ip}/spam/{ipSpamming}/unblock
>

**ip** : especifique o bloco de endereços IP recuperado no passo anterior com a máscara de rede.<br>
**ipSpamming** : especifique o endereço IP anteriormente recuperado no estado "blockedForSpam", por exemplo.

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


### Em caso de falsos positivos

Em certos casos, o alerta antisspam pode ser um falso positivo. Se verificou e verificou que a **Message-ID** está associada a um e-mail legítimo, deve assegurar-se de que as suas mensagens eletrónicas estão em conformidade com os [RFC](#rfc) e as [boas práticas](#bestpractices) indicadas abaixo.


## Quer saber mais?
 
Fale com a nossa comunidade de utilizadores: <https://community.ovh.com/en/>.