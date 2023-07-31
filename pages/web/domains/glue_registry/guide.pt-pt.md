---
title: "Personalizar os servidores DNS de um nome de domínio (Glue Records)"
excerpt: "Saiba como personalizar os servidores DNS do seu domínio OVHcloud"
updated: 2023-07-27
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

## Objetivo

Os **servidores DNS** alojam as configurações DNS dos nomes de domínio: as *zonas DNS*. 

Estas *zonas DNS* são compostas por informações técnicas: *registos DNS*. Numa utilização clássica, os *registos DNS* permitem:

- apresentar o seu website com o seu nome de domínio, através do endereço IP do seu servidor de alojamento (registos DNS dos tipos *A* e *AAAA*).
- reencaminhar os e-mails recebidos no(s) seu(s) endereço(s) de e-mail(s) personalizado(s) com o seu nome de domínio (registos DNS do tipo *MX*).
- configurar as informações ligadas à segurança/autenticação dos seus serviços (alojamento web, servidor de e-mail, etc.) associados ao seu nome de domínio (registos DNS do tipo *SPF*, *DKIM*, *DMARC*, etc.).

Para mais informações sobre estes temas, consulte a nossa documentação sobre [servidores DNS da OVHcloud](/pages/web/domains/dns_server_general_information) e sobre [a edição de uma zona DNS da OVHcloud](/pages/web/domains/dns_zone_edit).

Consoante as suas necessidades, é possível personalizar o nome dos servidores DNS do seu nome de domínio OVHcloud com « ***Glue Records*** ».

**Saiba como personalizar os servidores DNS do seu domínio OVHcloud.**

## Requisitos

- Ter um nome de domínio registado na OVHcloud.
- Ter acesso à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}, parte `Web Cloud`{.action}.

## Instruções

> [!warning]
>
> **Personalizar os servidores DNS de um domínio é uma operação sensível** : efetuar uma alteração inadequada pode bloquear o acesso ao seu website e/ou tornar indisponível a receção de novos e-mails. 
> Recomendamos que siga os passos indicados abaixo ou, em caso de dúvida, que recorra a um [fornecedor especializado](https://partner.ovhcloud.com/pt/diretory/).
>

### Etapa 1: recupere os servidores DNS atualmente utilizados pelo seu nome de domínio <a name="step1"></a>

Pode recuperar os servidores DNS atualmente utilizados pelo seu nome de domínio através da ferramenta DNS online [Zonemaster](https://zonemaster.fr/en/run-test){.external}.

Para isso, aceda à ligação [https://zonemaster.fr](https://zonemaster.fr/en/run-test){.external}, introduza o seu nome de domínio sem as *www* (exemplo: *domain.tld*) e escolha o botão `Options`{.action} situado logo abaixo do formulário de introdução do nome de domínio.

Nas opções disponíveis, clique diretamente no botão `Fetch NS from parent zone`{.action}.

Surge um resultado:

![glue-zonemaster](images/glue-dns-zonemaster.png){.thumbnail}

Recupere os *servidores DNS* e conserve **todos** os seus endereços IPv4 (sob a forma *X.X.X.X* em que os *X* estão compreendidos entre *0* e *255*) e IPv6 (os outros IPs que não são IPv4) associados. Poderá precisar dela para o resto deste guia.

No nosso exemplo acima, o domínio **domain.tld** utiliza atualmente os seguintes **servidores DNS**:

- **dnsX1.ovh.net** associado ao IPv4 *111.222.333.443* e ao IPv6 *0000:00d0:1:0000::1*;
- **dnsX2.ovh.net** associado ao IPv4 *111.222.333.444* e ao IPv6 *0000:00d0:1:0000::2*.

Se precisar de mais informações, consulte o nosso tutorial sobre a ferramenta [Zonemaster](/pages/web/domains/dns_zonemaster)

### Etapa 2: adicionar os registos « GLUE » <a name="step2"></a>

> [!success]
>
> Antes de começar, tenha em atenção que:
>
> - Pode criar servidores DNS personalizados diretamente no nome de domínio que os vai utilizar. Por exemplo, pode criar os DNS personalizados *dns1.domain.tld* e *dns2.domain.tld* para o nome de domínio *domain.tld*.
>
> - Pode também criar servidores DNS personalizados num domínio para os utilizar com outro domínio. Por exemplo, pode criar os DNS personalizados *dns1.domain1.tld* e *dns2.domain1.tld* para o nome de domínio *domain2.tld*. Deverá recuperar os servidores DNS e os seus endereços IP associados em relação ao *domain2.tld*.
> Além disso, o *domain1.tld* deve ser registado na OVHcloud para implementar os « GLUE » records.
>

Aceda à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external} e aceda à secção `Web Cloud`{.action}. Na coluna da esquerda, clique em `Nomes de domínio`{.action} e escolha o domínio que vai utilizar para personalizar os nomes dos servidores DNS. 

Na nova página, clique no separador `GLUE`{.action}.

Aparecerá uma tabela com os registos « GLUE » atualmente configurados na OVHcloud para o seu domínio (se existirem). Para adicionar um novo registo « GLUE », clique no botão `Adicionar`{.action}.

![glueregistry](images/glue-add.png){.thumbnail}

Na janela que se abre no seu ecrã, complete as informações pedidas:

|Informações|Detalhes|
|---|---|
|Nome do host|Personalize o nome do host que pretende utilizar enquanto servidor DNS personalizado.|
|IP(s) de destino|Especifique o(s) endereço(s) de IP (IPv4 e / ou IPv6) ao(s) qual(is) o nome do host deve ser associado. Trata-se do(s) endereço(s) de IP do servidor DNS atualmente utilizado(s) pelo seu domínio. Se houver vários endereços IP, separe-os por *vírgulas*.|

![glueregistry](images/glue-add-glue.png){.thumbnail}

Na imagem acima, ao retomar o exemplo do [etapa 1](#step1), o « GLUE » que se deseja adicionar aqui (a partir do nome de domínio *domain.tld*) é **dns1.domain.tld**. 

Para este « GLUE », indicam-se como endereços IP do *servidor DNS de destino* os endereços IP *111.222.333.443* (IPv4) e *0000:00d0:1:0000::1* (IPv6). Estes endereços IP correspondem a um dos dois servidores DNS atualmente utilizados para *domain.tld* (**dnsX1.ovh.net**). 

Este « GLUE » é adicionado para que **dns1.domain.tld** possa, no final, substituir o nome do servidor DNS **dnsX1.ovh.net** atualmente utilizado pelo nome de domínio *domain.tld*.

Depois de preencher as informações, clique no botão `Seguinte`{.action}, leia as informações apresentadas e clique em `Validar`{.action}. Repita esta operação as vezes que forem necessárias, de acordo com o número de servidores DNS utilizados pelo seu domínio.

No nosso exemplo, deverá repetir a operação para criar o « GLUE » **dns2.domain.tld**. Este último substituirá o servidor DNS **dnsX2.ovh.net** atualmente associado aos IPv4 *11.222.333.444* e IPv6 *0000:00d0:1:0000::2*

### Etapa 3: criar os registos DNS do tipo A e AAAA correspondentes aos DNS personalizados

Deve criar os registos *A* e *AAAA* para os nomes dos hosts que definiu no passo anterior. Os registos *A* e *AAAA* devem ter como alvo o endereço IP de destino correspondente ao nome do host criado anteriormente.

Esta operação é realizada através da interface do prestador responsável pela configuração DNS do seu domínio. A partir daí, existem duas possibilidades:

- **o seu domínio não utiliza uma zona DNS ativa na OVHcloud** : contacte o prestador responsável por esta última. Depois de realizar esta operação, avance para o passo seguinte.
- **O seu domínio utiliza uma zona DNS ativa na OVHcloud**: aceda à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external} e aceda à secção `Web Cloud`{.action}. Na coluna da esquerda, clique em `Nomes de domínio`{.action} e selecione o domínio que utilizou para criar os « GLUE » durante a [etapa 2](#step2). Aceda ao separador `Zona DNS`{.action} e clique em `Adicionar uma entrada`{.action}. Selecione a entrada do tipo *A* ou *AAAA* em função do tipo de IP associado que pretende adicionar. Siga os passos indicados para introduzir o *subdomínio* e o endereço *IPv4* (A) ou *IPv6* (AAAA). Se necessário, consulte as instruções descritas na nossa documentação « [Editar uma zona DNS da OVHcloud](/pages/web/domains/dns_zone_edit) ».

![glueregistry](images/glue-dns-zone-add.png){.thumbnail}

> [!primary]
>
> Em qualquer caso, é necessário um tempo de propagação de 4 a 24 horas para que a modificação da zona DNS seja tida em conta em toda a rede DNS. Recomendamos-lhe que aguarde este prazo antes de prosseguir.
>

Retomando o exemplo anterior, os registos « GLUE » que se deseja adicionar (a partir do domínio *domain.tld*) são **dns1.domain.tld** e **dns2.domain.tld**. O objetivo é substituir os servidores DNS atuais **dnsX1.ovh.net** e **dnsX2.ovh.net**.

Por este facto, adicionam-se os seguintes registos na zona DNS ativa do domínio *domain.tld*:

 - Um registo DNS do tipo *A* para o *subdomínio* **dns1.domain.tld** para o IP *11.222.333.443* (IPv4 do servidor DNS **dnsX1.ovh.net**);
 - Um registo DNS do tipo *AAAA* para o *subdomínio* **dns1.domain.tld** para o IP *0000:00d0:1:0000::1* (IPv6 do servidor DNS **dnsX1.ovh.net*);
 - Um registo DNS do tipo *A* para o *subdomínio* **dns2.domain.tld** para o IP *11.222.333.444* (IPv4 do servidor DNS **dnsX2.ovh.net**);
 - Um registo DNS do tipo *AAAA* para o *subdomínio* **dns2.domain.tld** para o IP *0000:00d0:1:0000::2* (IPv6 do servidor DNS **dnsX2.ovh.net**).

Aguarde o tempo da propagação DNS.

### Etapa 4: alterar os servidores DNS do seu domínio

Deve modificar os servidores DNS do seu domínio substituindo os servidores DNS antigos pelos servidores DNS personalizados criados anteriormente.

Para isso, aceda à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external} e aceda à secção `Web Cloud`{.action}. Na coluna da esquerda, clique em ‘Nomes de domínio‘ {.action} e selecione *o nome do domínio para o qual pretende personalizar os servidores DNS*.
 
Aceda ao separador `Servidores DNS`{.action} e clique em `Modificar os servidores DNS`{.action}. Substitua os seus servidores DNS atuais pelos que pretende utilizar como servidores DNS personalizados. 

Conclua os passos e, se necessário, consulte as instruções descritas na nossa documentação « [Alterar os servidores DNS de um nome de domínio OVHcloud](/pages/web/domains/dns_server_general_information) ».

> [!primary]
> 
> Se tiver personalizado servidores DNS num domínio para os utilizar com um outro domínio que não esteja registado na OVHcloud, contacte o fornecedor onde está registado o outro domínio para modificar os servidores DNS.
>

![glueregistry](images/glue-dns-servers-modify.png){.thumbnail}

> [!primary]
>
> É necessário um tempo de propagação de 24 a 48 horas para que a alteração dos servidores DNS seja tida em conta em toda a rede DNS. Recomendamos-lhe que aguarde este prazo antes de prosseguir.
>

No nosso exemplo de personalização dos servidores DNS do nome de domínio *domain.tld*, substituímos o servidor DNS **dnsX1.ovh.net** por **dns1.domain.tld** e o servidor DNS **dnsX2.ovh.net** por **dns2.domain.tld** e, em seguida, aguardamos o tempo da propagação DNS.

### Etapa 5: substituir os registos DNS na zona DNS ativa do seu domínio

Para que a personalização dos servidores DNS seja visível na rede DNS (efetuando um *Whois*, um *dig ns* ou através de um analisador de configuração DNS), deverá substituir os registos do tipo *NS* na zona DNS ativa do seu domínio.

Esta operação é realizada através da interface do prestador responsável pela configuração DNS do seu domínio. Existem duas possibilidades:

- **o seu domínio não utiliza uma zona DNS ativa na OVHcloud** : contacte o prestador responsável por esta última para efetuar a alteração.
- **O seu domínio utiliza uma zona DNS ativa na OVHcloud**: aceda à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external} e aceda à secção `Web Cloud`{.action}. Na coluna da esquerda, clique em `Nomes de domínios`{.action} e selecione o domínio para o qual personalizou os servidores DNS. Aceda ao separador `Zona DNS`{.action} e clique em `Editar em modo de texto`{.action}. 

Uma janela com a zona DNS em modo *textual* aparece:

![glueregistry](images/dns-text-format-edition.png){.thumbnail}

> [!warning]
>
> Uma alteração inadequada no modo *textual* na zona DNS pode interromper o acesso ao seu website e/ou tornar indisponível a receção de novas mensagens nos seus endereços de e-mail.
> Contacte um [fornecedor especializado](https://partner.ovhcloud.com/pt/diretory/) em caso de dúvida.
>

Nesta janela, substitua **unicamente nos registos do tipo *NS*** os nomes dos servidores DNS pelos seus próprios nomes de servidores DNS personalizados **sem esquecer** de incrementar de « 1 » o primeiro valor numérico da linha *SOA*. Depois de efetuar as alterações, clique em `Seguinte`{.action} e em `Validar`{.action}.

A alteração não será imediatamente visível na [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}. Aguarde cerca de 20 minutos e aceda à Área de Cliente OVHcloud para verificar se as alterações foram aplicadas corretamente.

> [!primary]
>
> É necessário um prazo de propagação de 4 a 24 horas para que as alterações efetuadas na zona DNS sejam tomadas em conta em toda a rede DNS.
>

Para compreender melhor esta última etapa, retomemos o nosso exemplo com o nome de domínio *domain.tld* e a sua zona DNS em modo « texto » visível na imagem acima.

São observados os seguintes elementos: 

- o primeiro valor numérico da linha *SOA* é o seguinte: *2023071700*;
- existem dois registos do tipo *NS* para o nome de domínio *domain.tld*;
- os registos do tipo *NS* ainda visam os dois servidores DNS **dnsX1.ovh.net** e **dnsX2.ovh.net*.

Para finalizar a personalização dos servidores DNS para o nome de domínio *domain.tld*, é preciso :

- incrementar de « 1 » o primeiro valor numérico da linha *SOA* : *202307170**1*** (tenha em conta que se o primeiro valor numérico fosse o seguinte:*2023071704*, aumentaria sempre de « 1 » e obteria-se o seguinte resultado: *202307170**5*** );
- substituir o alvo **dnsX1.ovh.net.** por **dns1.domain.tld.** apenas para a linha que começa por **IN NS**;
- substituir o alvo **dnsX2.ovh.net.** por **dns2.domain.tld.** apenas para a linha que começa por **IN NS**.

Depois de fazer as modificações, o resultado do nosso exemplo será o seguinte:

```bash
$TTL 3600
@	IN SOA dnsX1.ovh.net. tech.ovh.net. (2023071701 86400 3600 3600000 300)
                  IN NS     dns1.domain.tld.
                  IN NS     dns2.domain.tld.
```

Para o nosso domínio *domain.tld*, os servidores DNS que forem apresentados após a alteração e a propagação de DNS serão **dns1.domain.tld.** e **dns2.domain.tld.**.

Se necessário, consulte as instruções descritas na nossa documentação « [Editar uma zona DNS da OVHcloud](/pages/web/domains/dns_zone_edit) ».

> [!success]
>
> Quando os servidores DNS são personalizados diretamente para o domínio que vai utilizar, a zona DNS pode não ver o nome do domínio nos alvos dos registos do tipo *NS*, mas apenas o *subdomínio*.
>
> Por exemplo, em vez de exibir os seguintes registos:
> 
> - domain.tld IN NS dns1.domain.tld.
> - domain.tld IN NS dns2.domain.tld..
>
> a zona DNS pode apresentar os registos como se segue:
>
> - domain.tld IN NS dns1
> - domain.tld IN NS dns2
>
> Tenha em atenção que este resultado é igual e a configuração funcionará sem problemas. Este fenómeno é gerado pelo facto de se tratar do mesmo nome de domínio de ambos os lados do registo *NS*.
>

## Quer saber mais?

[Generalidades sobre os servidores DNS da OVHcloud](/pages/web/domains/dns_server_general_information)

[Editar uma zona DNS da OVHcloud](/pages/web/domains/dns_zone_edit)

Para serviços especializados (referenciamento, desenvolvimento, etc), contacte os [parceiros OVHcloud](https://partner.ovhcloud.com/pt/directory/).

Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](https://www.ovhcloud.com/pt/support-levels/).

Fale com nossa comunidade de utilizadores: <https://community.ovh.com/en/>.
