---
title: "Personalizar os servidores DNS de um domínio (Hosts)"
excerpt: 'Saiba como personalizar os servidores DNS do seu domínio OVHcloud'
updated: 2026-03-27
---

<style>
details>summary {
    color:rgb(33, 153, 232) !important;
    cursor: pointer;
}
details>summary::before {
    content:'\25B6';
    padding-right:1ch;
}
details[open]>summary::before {
    content:'\25BC';
}
</style>

## Objetivo

Os **servidores DNS** alojam as configurações DNS dos domínios: as *zonas DNS*.

<iframe class="video" width="560" height="315" src="https://www.youtube-nocookie.com/embed/BvrUi26ShzI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Estas *zonas DNS* são compostas por informações técnicas: os *registos DNS*. Numa utilização clássica, os *registos DNS* permitem:

- apresentar o seu website com o seu domínio, utilizando o endereço IP do seu servidor de alojamento (registos DNS de tipo *A* e *AAAA*).
- redirecionar os e-mails recebidos no(s) seu(s) endereço(s) de e-mail personalizado(s) com o seu domínio (registos DNS de tipo *MX*).
- configurar informações relacionadas com a segurança/autenticação dos seus serviços (alojamento web, servidor de e-mail, etc.) associados ao seu domínio (registos DNS de tipo *SPF*, *DKIM*, *DMARC*, etc.).

Para mais informações sobre estes temas, consulte os seguintes guias:

- [Saber tudo sobre os servidores DNS](/pages/web_cloud/domains/dns_server_general_information).
- [Saber tudo sobre a zona DNS](/pages/web_cloud/domains/dns_zone_general_information).
- [Editar uma zona DNS da OVHcloud](/pages/web_cloud/domains/dns_zone_edit).

Em função das suas necessidades, pode personalizar o nome dos servidores DNS do seu domínio OVHcloud utilizando os "**Hosts**".

**Saiba como personalizar os servidores DNS do seu domínio OVHcloud.**

## Requisitos

- Dispor de um [domínio](/links/web/domains) registado na OVHcloud.

<!-- CP-NAV-START:web-domains -->
---

### Acesso à Área de Cliente OVHcloud

- **Ligação direta:** [Nomes de domínio](/links/control-panel/web-domains)
- **Caminho de navegação:** `Web Cloud`{.action} > `Nomes de domínio`{.action} > Selecione o seu nome de domínio

---
<!-- CP-NAV-END:web-domains -->

## Instruções

> [!warning]
>
> **Personalizar os servidores DNS de um domínio é uma operação sensível**: efetuar uma alteração inadequada pode impedir o acesso ao seu website e/ou tornar indisponível a receção de novas mensagens nos seus endereços de e-mail.
> Siga cuidadosamente os passos descritos abaixo ou contacte um [fornecedor especializado](/links/partner) em caso de dúvida.
>

### 1 - Regra geral <a name="step1"></a>

Alguns registos, como a **Verisign** (que gere as extensões *.com*, *.net* e outros TLD), utilizam um modelo técnico chamado **host objects**.

Em alguns casos, este modelo exige a criação prévia de um registo específico para um servidor DNS antes de poder ser **utilizado por um domínio**.

Outros registos não necessitam deste registo e aceitam diretamente o nome do servidor DNS.

De modo geral, a OVHcloud cria automaticamente os **host objects** quando dizem respeito a um domínio gerido pela OVHcloud.

> [!warning]
>
> **O separador "Hosts" só é necessário num caso específico**: o servidor DNS pertence a um domínio gerido pela OVHcloud e deve ser utilizado por outro domínio que não é gerido pela OVHcloud *mas está sob o mesmo registo* (por exemplo, dois domínios em *.com*).
>

#### Casos possíveis

| Domínio do servidor DNS | Domínio a configurar | Criação do *host* pela OVHcloud             | Ação manual no menu "Hosts" | Exemplo |
| ----------------------------- | --------------------------- | ------------------------------------------- | ---------------------------------------------- | ------- |
| Gerido pela OVHcloud             | Gerido pela OVHcloud           | Automática                                 | Não                                            | *ns1.example.com* (domínio *example.com* gerido pela OVHcloud) é utilizado como servidor DNS para o domínio *test.com* (gerido pela OVHcloud) |
| Gerido pela OVHcloud             | Gerido pela OVHcloud           | Automática                                 | Não                                            | *ns1.example.com* (domínio *example.com* gerido pela OVHcloud) é utilizado como servidor DNS para o domínio *test.fr* (gerido pela OVHcloud) |
| **Gerido pela OVHcloud**         | **Outro registrar**         | **Configuração automática impossível**    | **Sim**                                        | ***ns1.example.com* (domínio *example.com* gerido pela OVHcloud) é utilizado como servidor DNS para o domínio *test.com* (gerido por outro registrar, mesma extensão *.com*)** |
| Gerido pela OVHcloud             | Outro registrar             | N/A                                         | Não                                            | *ns1.example.com* (domínio *example.com* gerido pela OVHcloud) é utilizado como servidor DNS para o domínio *test.fr* (gerido por outro registrar) |
| Não gerido pela OVHcloud         | Gerido pela OVHcloud           | Fora de perímetro                              | Não                                            | *ns1.example.net* (domínio gerido por outro registrar) é utilizado como servidor DNS para o domínio *test.com* (gerido pela OVHcloud) - o *host* deve ser criado junto do registrar que gere *example.net* |

**A terceira linha da tabela acima é o único cenário em que a criação manual do *host* no separador "Hosts" é necessária.**

### 2 - Obter os servidores DNS utilizados atualmente pelo seu domínio <a name="step2"></a>

Pode obter os servidores DNS utilizados atualmente pelo seu domínio com a ferramenta DNS online [Zonemaster](https://zonemaster.net/pt).

Para isso, aceda à ligação [https://zonemaster.net](https://zonemaster.net/pt), introduza o seu domínio sem as *www* (exemplo: *domain.tld*) e assinale o botão `Options`{.action} situado logo abaixo do formulário de introdução do domínio.

Nas opções disponíveis, clique diretamente no botão `Obter os NS a partir da zona-mãe`{.action}.

É apresentado um resultado:

![glue-zonemaster](/pages/assets/screens/other/web-tools/zonemaster/nameservers.png){.thumbnail}

Recupere os *servidores DNS* e conserve **todos** os seus endereços IPv4 (no formato *X.X.X.X*, em que cada *X* está compreendido entre *0* e *255*) e IPv6 (os outros IP que não são IPv4) associados. Irá precisar deles para o resto deste guia.

No nosso exemplo ilustrado acima, o domínio **domain.tld** utiliza atualmente os seguintes **servidores DNS**:

- **dnsX1.ovh.net** associado ao IPv4 *203.0.113.0* e ao IPv6 *2001:db8:1:1b00:203:0:113:0*.
- **dnsX2.ovh.net** associado ao IPv4 *203.0.113.1* e ao IPv6 *2001:db8:1:1b00:203:0:113:1*.

Se necessário, consulte o nosso tutorial sobre a ferramenta [Zonemaster](/pages/web_cloud/domains/dns_zonemaster) para mais informações.

### 3 - Adicionar os registos "host" <a name="step3"></a>

> [!warning]
>
> Os registos das extensões *.eu*, *.it*, *.be* e *.de* não consideram os registos "host" como "objetos", mas como "atributos".
>
> Por conseguinte, para estas extensões, passe **diretamente ao [passo 4](#step4)** deste guia sem realizar o passo 3.
>

> [!success]
>
> Antes de começar, tenha em conta que:
>
> - Pode criar servidores DNS personalizados diretamente no domínio que os vai utilizar. Por exemplo, pode criar os DNS personalizados *dns1.domain.tld* e *dns2.domain.tld* para o domínio *domain.tld*.
>
> - Também pode criar servidores DNS personalizados num domínio para os utilizar com outro domínio. Por exemplo, pode criar os DNS personalizados *dns1.domain1.tld* e *dns2.domain1.tld* para o domínio *domain2.tld*. Deverá obter os servidores DNS e os respetivos IP associados ao *domain2.tld*.
> Além disso, o *domain1.tld* deve estar registado na OVHcloud para configurar os hosts.
>

Clique nos separadores abaixo para ver cada um dos **3** passos.

> [!tabs]
> **Passo 1**
>>
>> Aceda à página [Nomes de domínio](/links/control-panel/web-domains) e escolha o domínio correspondente.
>>
>> ![Nomes de domínio](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-names.png){.thumbnail}
>>
> **Passo 2**
>>
>> Depois de aceder ao domínio correspondente, clique no separador `Hosts`{.action}.
>>
>> Na tabela apresentada, se existirem, encontrará os registos host atualmente configurados na OVHcloud para o seu domínio. Para adicionar um novo registo, clique no botão `Adicionar`{.action}.
>>
>> ![Glue Registry](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/hosts/add.png){.thumbnail}
>>
> **Passo 3**
>>
>> Na janela que aparece no ecrã, preencha as informações pedidas:
>>
>> |Informações|Detalhes|
>> |---|---|
>> |Nome do host|Personalize o nome do host que pretende utilizar como servidor DNS personalizado.|
>> |IP(s) de destino|Indique o(s) endereço(s) IP (IPv4 e/ou IPv6) ao(s) qual(is) o nome do host deve estar associado. Trata-se do(s) endereço(s) IP do servidor DNS atualmente utilizado pelo seu domínio. Se precisar de introduzir vários endereços IP, separe-os com *vírgulas*.|
>>
>> ![Glue Registry](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/hosts/add-another-glue-record-step-2.png){.thumbnail}
>>
>> Na imagem acima, retomando o exemplo do [passo 2](#step2), o host que se pretende adicionar aqui (a partir do domínio *domain.tld*) é **dns1.domain.tld**.
>>
>> Indicam-se para este host os seguintes endereços IP do *servidor DNS de destino*: *203.0.113.0* (IPv4) e *2001:db8:1:1b00:203:0:113:0* (IPv6). Estes IP correspondem a um dos dois servidores DNS atualmente utilizados para *domain.tld* (**dnsX1.ovh.net**).
>>
>> Adiciona-se este host para que **dns1.domain.tld** substitua, em última instância, o nome do servidor DNS **dnsX1.ovh.net** atualmente utilizado pelo domínio *domain.tld*.
>>
>> Depois de preencher as informações, clique no botão `Adicionar`{.action}. Tome conhecimento das informações apresentadas e clique em `Validar`{.action}. Repita esta operação tantas vezes quantas necessário, consoante o número de servidores DNS utilizados pelo seu domínio.
>>
>> No nosso exemplo, deverá repetir a operação para criar o host **dns2.domain.tld**. Este substituirá posteriormente o servidor DNS **dnsX2.ovh.net** atualmente associado aos endereços IP *203.0.113.1* (IPv4) e *2001:db8:1:1b00:203:0:113:1* (IPv6).

### 4 - Criar os registos DNS de tipo A e AAAA correspondentes aos DNS personalizados <a name="step4"></a>

Deve criar os registos *A* e *AAAA* para os nomes de host definidos no passo anterior. Os registos *A* e *AAAA* devem apontar para o endereço IP de destino correspondente ao nome do host criado anteriormente.

Esta operação efetua-se a partir da interface do fornecedor que gere a configuração DNS do seu domínio. Existem duas possibilidades:

**Clique numa das 2 possibilidades para ver o seu conteúdo.**

/// details | O seu domínio não utiliza uma zona DNS ativa na OVHcloud

Contacte o fornecedor que gere essa zona. Após a conclusão da operação, prossiga para o passo seguinte.

///

/// details | O seu domínio utiliza uma zona DNS ativa na OVHcloud

Clique nos separadores abaixo para ver cada um dos **4** passos.

> [!tabs]
> **Passo 1**
>>
>> Aceda à página [Zonas DNS](/links/control-panel/web-dns-zone) e escolha o domínio que utilizou para criar os hosts na [parte 3](#step3).
>>
>> ![Zonas DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
> **Passo 2**
>>
>> Clique em `Adicionar um registo`{.action}.
>>
> **Passo 3**
>>
>> Selecione o registo de tipo *A* ou *AAAA* em função do tipo de IP associado que pretende adicionar.
>>
>> ![Glue Registry](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/add-an-entry-2.png){.thumbnail}
>>
> **Passo 4**
>>
>> Introduza o *subdomínio* e o endereço *IPv4* (A) ou *IPv6* (AAAA) e prossiga até à validação da adição. Se necessário, consulte as instruções descritas na nossa documentação "[Editar uma zona DNS da OVHcloud](/pages/web_cloud/domains/dns_zone_edit)".

///

> [!primary]
>
> Em todos os casos, é necessário um período de propagação de 4 a 24 horas para que a modificação da zona DNS seja aplicada em toda a rede DNS. Recomendamos que aguarde este prazo antes de prosseguir.
>

Se retomarmos o nosso exemplo anterior, os registos "host" que se pretendem adicionar (a partir do domínio *domain.tld*) são **dns1.domain.tld** e **dns2.domain.tld**. O objetivo é substituir os servidores DNS atuais **dnsX1.ovh.net** e **dnsX2.ovh.net**.

Assim, adicionam-se os seguintes registos na zona DNS ativa do domínio *domain.tld*:

 - Um registo DNS de tipo *A* para o *subdomínio* **dns1.domain.tld** para o IP *203.0.113.0* (IPv4 do servidor DNS **dnsX1.ovh.net**).
 - Um registo DNS de tipo *AAAA* para o *subdomínio* **dns1.domain.tld** para o IP *2001:db8:1:1b00:203:0:113:0* (IPv6 do servidor DNS **dnsX1.ovh.net**).
 - Um registo DNS de tipo *A* para o *subdomínio* **dns2.domain.tld** para o IP *203.0.113.1* (IPv4 do servidor DNS **dnsX2.ovh.net**).
 - Um registo DNS de tipo *AAAA* para o *subdomínio* **dns2.domain.tld** para o IP *2001:db8:1:1b00:203:0:113:1* (IPv6 do servidor DNS **dnsX2.ovh.net**).

De seguida, aguarde a conclusão da propagação DNS.

### 5 - Substituir os registos NS na zona DNS ativa do seu domínio

Para que a personalização dos servidores DNS seja visível na rede DNS (ao efetuar um *Whois*, um *dig ns* ou através de um analisador de configuração DNS), deverá substituir os registos de tipo *NS* na zona DNS ativa do seu domínio.

Esta operação efetua-se a partir da interface do fornecedor que gere a configuração DNS do seu domínio. Existem duas possibilidades:

**Clique numa das 2 possibilidades para ver o seu conteúdo.**

/// details | O seu domínio não utiliza uma zona DNS ativa na OVHcloud

Contacte o fornecedor que gere essa zona para efetuar a modificação.

///

/// details | O seu domínio utiliza uma zona DNS ativa na OVHcloud

Clique nos separadores abaixo para ver cada um dos **3** passos.

> [!tabs]
> **Passo 1**
>>
>> Aceda à página [Zonas DNS](/links/control-panel/web-dns-zone) e escolha o domínio para o qual personalizou os servidores DNS.
>>
>> ![Zonas DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
> **Passo 2**
>>
>> Clique em `Modificar em modo de texto`{.action}.
>>
>> Aparece uma janela com a sua zona DNS em modo *texto*:
>>
>> ![Glue Registry](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/change-in-text-format-step-1.png){.thumbnail}
>>
>> > [!warning]
>> >
>> > Lembre-se de que efetuar uma alteração inadequada em modo *texto* na sua zona DNS pode impedir o acesso ao seu website e/ou tornar indisponível a receção de novas mensagens nos seus endereços de e-mail.
>> > Contacte um [fornecedor especializado](/links/partner) em caso de dúvida.
>>
> **Passo 3**
>>
>> Nesta janela, substitua **unicamente nos registos de tipo *NS*** os nomes dos servidores DNS pelos seus próprios nomes de servidores DNS personalizados **sem esquecer** de incrementar em "1" o primeiro valor numérico da linha *SOA*. Após efetuar as modificações, clique em `Seguinte`{.action} e em `Validar`{.action}.
>>
>> A modificação não será visível de imediato. Aguarde cerca de vinte minutos para verificar que as modificações foram aplicadas corretamente.

///

> [!primary]
>
> É necessário um período de propagação de 4 a 24 horas para que as alterações efetuadas na zona DNS sejam aplicadas em toda a rede DNS.
>

Para compreender melhor este passo, retomemos o nosso exemplo com o domínio *domain.tld* e a sua zona DNS em modo "texto" visível na imagem acima.

Observam-se os seguintes elementos:

- O primeiro valor numérico da linha *SOA* é o seguinte: *2023071700*.
- Existem dois registos de tipo *NS* para o domínio *domain.tld*.
- Os registos de tipo *NS* apontam ainda para os dois servidores DNS **dnsX1.ovh.net** e **dnsX2.ovh.net**.

Para prosseguir com a personalização dos servidores DNS do domínio *domain.tld*, deverá:

- Incrementar em "1" o primeiro valor numérico da linha *SOA*: *202307170**1*** (tenha em conta que se o primeiro valor numérico fosse o seguinte: *2023071704*, incrementar-se-ia igualmente em "1" e obter-se-ia o resultado seguinte: *202307170**5***).
- Substituir o destino **dnsX1.ovh.net.** por **dns1.domain.tld.** unicamente na linha que começa por **IN NS**.
- Substituir o destino **dnsX2.ovh.net.** por **dns2.domain.tld.** unicamente na linha que começa por **IN NS**.

Após as modificações, o resultado do nosso exemplo será o seguinte:

```bash
$TTL 3600
@	IN SOA dnsX1.ovh.net. tech.ovh.net. (2023071701 86400 3600 3600000 300)
                  IN NS     dns1.domain.tld.
                  IN NS     dns2.domain.tld.
```

Para o nosso domínio *domain.tld*, os servidores DNS que serão apresentados após a aplicação da modificação e a propagação DNS serão **dns1.domain.tld.** e **dns2.domain.tld.**.

Se necessário, consulte as instruções descritas na nossa documentação "[Editar uma zona DNS da OVHcloud](/pages/web_cloud/domains/dns_zone_edit)".

> [!success]
>
> No caso de uma personalização dos servidores DNS diretamente no domínio que os vai utilizar, é possível que a zona DNS não apresente o domínio nos destinos dos registos de tipo *NS*, mas unicamente o *subdomínio*.
>
> Por exemplo, em vez de apresentar os seguintes registos:
>
> - domain.tld IN NS dns1.domain.tld.
> - domain.tld IN NS dns2.domain.tld.
>
> A zona DNS pode apresentar os registos da seguinte forma:
>
> - domain.tld IN NS dns1.
> - domain.tld IN NS dns2.
>
> Fique tranquilo, o resultado é equivalente e esta configuração funcionará perfeitamente. Este fenómeno explica-se pela presença do mesmo domínio em ambos os lados do registo *NS*.
>

### 6 - Modificar os servidores DNS do seu domínio

Deve modificar os servidores DNS do seu domínio substituindo os antigos servidores DNS pelos servidores DNS personalizados criados anteriormente.

Para isso, clique nos separadores abaixo para ver cada um dos **4** passos.

> [!tabs]
> **Passo 1**
>>
>> Aceda à página [Nomes de domínio](/links/control-panel/web-domains) e escolha *o domínio para o qual pretende personalizar os servidores DNS*.
>>
>> ![Nomes de domínio](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-names.png){.thumbnail}
>>
> **Passo 2**
>>
>> Selecione o separador `Servidores DNS`{.action} e clique em `Modificar os servidores DNS`{.action}.
>>
>> ![Glue Registry](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-servers/modify-dns-servers.png){.thumbnail}
>>
> **Passo 3**
>>
>> Substitua os seus servidores DNS atuais pelos que pretende utilizar como servidores DNS personalizados.
>>
>> > [!warning]
>> >
>> > Se os seus servidores DNS personalizados foram criados com as extensões *.eu*, *.it*, *.be* ou *.de*, introduza **obrigatoriamente** o endereço IP associado a cada um dos seus servidores DNS personalizados.
>> >
>> > Sem esta informação, os servidores DNS personalizados não serão tidos em conta corretamente e não funcionarão com o seu domínio.
>>
> **Passo 4**
>>
>> Finalize os passos e, se necessário, consulte as instruções descritas na nossa documentação "[Modificar os servidores DNS de um domínio OVHcloud](/pages/web_cloud/domains/dns_server_edit)".
>>
>> > [!primary]
>> >
>> > Se personalizou servidores DNS num domínio para os utilizar com outro domínio que não está registado na OVHcloud, contacte o fornecedor onde está registado o outro domínio para modificar os servidores DNS.

> [!primary]
>
> É necessário um período de propagação de 24 a 48 horas para que a alteração dos servidores DNS seja aplicada em toda a rede DNS.
>

No nosso exemplo de personalização dos servidores DNS do domínio *domain.tld*, substitui-se o servidor DNS **dnsX1.ovh.net** por **dns1.domain.tld** e o servidor DNS **dnsX2.ovh.net** por **dns2.domain.tld** e, de seguida, aguarda-se a conclusão da propagação DNS.

## Quer saber mais?

[Informações gerais sobre os servidores DNS da OVHcloud](/pages/web_cloud/domains/dns_server_general_information)

[Editar uma zona DNS da OVHcloud](/pages/web_cloud/domains/dns_zone_edit)

Para serviços especializados (referenciação, desenvolvimento, etc.), contacte os [parceiros OVHcloud](/links/partner).

Se pretender usufruir de ajuda na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](/links/support).

Fale com a nossa [comunidade de utilizadores](/links/community).
