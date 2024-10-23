---
title: "Como remover um endereço IP de uma lista de IPs bloqueados"
excerpt: "Descubra como solicitar a remoção de um endereço IP de uma blocklist se os seus serviços são afetados por fornecedores de antispam"
updated: 2024-10-21
---

## Objetivo

*blocklist* (ou lista de bloqueio) é uma ferramenta antisspam utilizada para bloquear e-mails que possam conter código malicioso ou ser considerados spam. Se um domínio de correio eletrónico ou um endereço IP estiverem bloqueados, o correio eletrónico proveniente desse nome de domínio ou endereço IP pode não chegar ao respetivo cliente (servidor de entrada / antivírus), com impacto na reputação e fiabilidade de entrega do remetente. Os e-mails que apesar de tudo chegam a ser transmitidos podem ser encaminhados para a pasta de spam do destinatário em vez da caixa de entrada.

É importante notar que as listas de bloqueio podem incluir nomes de domínio e endereços IP que não representam uma ameaça para os utilizadores. Além disso, alguns serviços de filtragem de correio publicitário não solicitado tomam em consideração a reverse DNS ao classificarem endereços IP como, por exemplo, o SpamRATS.

> [!primary]
> Consulte o nosso manual sobre [como evitar que os seus e-mails sejam marcados como spam](/pages/bare_metal_cloud/dedicated_servers/mail_sending_optimization) para conhecer as boas práticas a seguir com um servidor de e-mail.
>

**Descubra as ações a realizar para retirar os seus endereços IP OVHcloud de uma blocklist, caso estejam incluídos.**

> [!warning]
> As informações deste manual podem ser alteradas para os endereços IP que adquiriu recentemente. A OVHcloud não pode ser responsabilizada pelas ações de fornecedores terceiros.
>
> Recomendamos que contacte um [fornecedor de serviços especializado](/links/partner) ou que contacte a [nossa comunidade](/links/community) se encontrar dificuldades ou dúvidas relativamente à administração, utilização ou implementação de serviços num servidor.
>

## Requisitos

- Os seus serviços não estão atualmente afetados por um processo de comunicação de abuso.

## Na Prática

### Fornecedores suportados

- [Spamhaus](https://check.spamhaus.org/)

    - [Spamhaus Block List (SBL)](https://www.spamhaus.org/blocklists/spamhaus-blocklist/)  
    Se [o endereço IP estiver na lista de bloqueios (SBL) do Spamhaus](https://check.spamhaus.org/sbl/listings/ovh.net/), crie um pedido de assistência a partir do [centro de ajuda OVHcloud](https://help.ovhcloud.com/csm?id=csm_get_help). A nossa equipa de suporte enviará o seu pedido à nossa equipa de notificação de abusos, que contactará o fornecedor da lista de bloqueio.
    - [Exploits Block List (XBL)](https://www.spamhaus.org/blocklists/exploits-blocklist/) ou [Combined Spam Sources (CSS)](https://www.spamhaus.org/blocklists/combined-spam-sources/)  
    Se o seu IP está na *Explorações Block List* e/ou na lista combinada das fontes de spam, isso deve-se a problemas de configuração. Siga os passos indicados no website do Spamhaus para retirar o IP da lista (veja o exemplo abaixo). Depois de executar com êxito as etapas descritas abaixo, você poderá removê-las da lista.  
    /// details | Exemplo
    
    ![spamhaus example](images/blocklist1.png){.thumbnail}  
    ![spamhaus example](images/blocklist2.png){.thumbnail}

    ///

- [SpamCop](https://www.spamcop.net/bl.shtml)

- [Barracuda](https://www.barracudacentral.org/lookups)

- [SpamRATS](https://spamrats.com/lookup.php)  
    Se utilizar o seu próprio servidor de correio eletrónico, deverá configurar o domínio no campo PTR onde estão localizados os dados do responsável. Só os servidores de e-mail corretamente configurados são eliminados da lista.  
    Deverá também [configurar a resolução DNS inversa](/pages/bare_metal_cloud/virtual_private_servers/configuring-reverse-dns).  
    > [!primary]
    > **Boas práticas:**
    >
    > Os endereços IP utilizados para enviar mensagens de correio eletrónico devem corresponder ao nome de domínio do responsável. Também pode utilizar subdomínios para a resolução DNS inversa, como `mail.nome_de_dominio.com` ou `gateway.nome_de_dominio.com`.

### Fornecedores não suportados

#### s5h.net

/// details | Mais informações...

Para pedir a eliminação, vá a esta página a partir do endereço IP bloqueado. Você deve ser removido imediatamente da lista.

Também pode fazê-lo com as ferramentas *telnet*, *curl* ou *wget*.

Para remover o endereço IPv4 da lista através de *curl*, inicie sessão no servidor de correio eletrónico especificado e execute o seguinte comando:

```bash
curl -4 http://www.usenix.org.uk/content/rblremove
```

Para efetuar a mesma operação através de *telnet* a partir de um sistema anfitrião Windows/Linux, introduza as linhas *GET* e *Host* após o comando *telnet*, tal como indicado abaixo.

```bash
telnet www.usenix.org.uk 80
```

```bash
GET /content/rblremove HTTP/1.1
```

```bash
Host: www.usenix.org.uk
```

Para mais informações, consultar: <http://www.usenix.org.uk/content/rbl.html>

///

#### UCEprotect

/// details | Mais informações...

Recentemente, a UCE Protect colocou mais de mil novos ASNs no seu blocklist. Infelizmente, o nosso ASN (AS16276) foi afetado. Para consultar a lista dos outros ASN afetados e o número de novos ASN adicionados, queira verificar as ligações seguintes:

- http://www.uceprotect.net/en/l3charts.php
- http://stats.uceprotect.net/?page=su

A nossa equipa encarregada das indicações de abuso contactou a UCEProtect para retirar o nosso ASN da blocklist. De forma geral, a UCEProtect deseja que os operadores de rede dos ASN recentemente bloqueados paguem pela remoção rápida da lista. Como todos os principais fornecedores, a OVHcloud não paga pela eliminação da blocklist, pois trata-se de um serviço que está fora do nosso controlo. Pagar pela remoção de um blocklist só aumenta o blocklist como um todo, o que prejudica a indústria.

O UCEProtect pretende eliminar automaticamente os ASN após uma semana, o que esperamos venha a acontecer, mas, como está fora do nosso controlo, não podemos dar quaisquer garantias a este respeito.

Se está afetado por esta situação, recomendamos que:

1. Utilizar endereços IPv6 para enviar e-mails. O UCEProtect não bloqueia os e-mails enviados através do IPv6. Todos os nossos serviços OVHcloud são entregues com, pelo menos, um único endereço IPv6, que pode configurar. O IPv6 já é suportado em todos os principais fornecedores de e-mail.
2. Solicitar à parte recetora que entre em contacto com seu provedor de e-mail para parar de usar o UCEProtect blocklist por enquanto.

///

#### Fabel Spamsources

/// details | Mais informações...

Para remover um IP da lista do Fabel Spamsources, vá para [página de remoção da lista](https://www.spamsources.fabel.dk/delist).

Clique em `Please login to continue`{.action}, introduza o seu endereço de e-mail e verifique a sua caixa de entrada. Utilize o código de verificação para terminar a ligação.

Introduza o seu endereço IP, indique o motivo do pedido de eliminação e clique no botão `Submit Query`{.action}.

![fabel exemplo](images/blocklist3.png){.thumbnail}

A remoção da lista deve levar entre 20 e 30 minutos.

///

#### MIPSpace

/// details | Mais informações...

Para [remover um IP do MIPSpace](https://www.mipspace.com/remove.php), aceda em primeiro lugar a [Área de Cliente OVHcloud](/links/manager) e certifique-se de que as seguintes informações estão atualizadas:

- [A resolução reverse DNS](/pages/bare_metal_cloud/virtual_private_servers/configuring-reverse-dns) (campo PTR).
- Os detalhes da sua organização (*RWhois*) na secção `Network`{.action}: Abra `IP`{.action} e depois clique no botão `Engrenagem`{.action} à direita. Selecione `Gerir as minhas organizações`{.action} no menu pendente.

///

## Quer saber mais?

Para serviços especializados (referenciamento, desenvolvimento, etc), contacte os [parceiros OVHcloud](/links/partner).

Fale com nossa [comunidade de utilizadores](/links/community).