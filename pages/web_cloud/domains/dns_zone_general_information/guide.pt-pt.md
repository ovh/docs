---
title: "Saber tudo sobre a zona DNS"
excerpt: "Descubra o papel de uma zona DNS e os registos que contém para um domínio"
updated: 2024-06-17
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

## Objetivo

A sigla **DNS**, que significa **D**omain **N**ame **S**ystem, é um conjunto de elementos (servidores DNS, zonas DNS, etc.) que permitem fazer corresponder um domínio a um endereço IP.

É essencial diferenciar os **servidores DNS** da **zona DNS**. De facto, é ao nível do **servidor DNS** que está configurada uma **zona DNS**.

Para uma melhor compreensão do conjunto, recomendamos que consulte previamente o nosso guia "[Saber tudo sobre os servidores DNS](/pages/web_cloud/domains/dns_server_general_information)".

Por exemplo, quando pretende aceder ao site *domain.tld* através de um browser da Internet, o seu pedido é inicialmente tratado por este conjunto DNS. Este conjunto DNS vai fornecer em resposta ao seu browser o endereço IP do servidor que aloja o site *domain.tld*.

Assim, quando introduzir *domain.tld*, os **servidores DNS** associados a este domínio serão interrogados. Estes últimos contêm a **zona DNS** do nome de domínio *domain.tld* na qual está indicado o endereço IP do alojamento de *domain.tld*. O seu browser é capaz de apresentar o site *domain.tld* contido no alojamento web. Isto é conhecido como resolução DNS.

**Descubra o papel de uma zona DNS, o que ela contém e como funciona com um domínio.**

## Instruções

### Função de uma zona DNS

A zona DNS de um domínio contém uma configuração aplicável a este último. É composta por informações técnicas, chamadas *registos DNS*. A zona DNS é, por assim dizer, um centro de informação para um domínio.

Poderá, por exemplo, especificar:

- O endereço IP (registos DNS do tipo *A* e *AAAA*) do seu alojamento web para apresentar o seu website com o seu nome de domínio.
- Os servidores de e-mail (registos DNS do tipo *MX*) para os quais o seu domínio deve reencaminhar os e-mails que recebe.
- Informações relacionadas com a segurança / autenticação dos seus serviços (alojamento web, servidor web, servidor de e-mail, etc.) associados ao seu nome de domínio (registos DNS do tipo SPF, DKIM, DMARC, etc.).

Uma zona DNS está alojada / registada em **servidores DNS**. Os **servidores DNS** devem ser declarados (junto do agente registador de um domínio) para utilizar a zona DNS que alojam.

Para obter mais informações, consulte a nossa página web explicando [como funciona um servidor DNS](/links/web/domains-dns-server).

### Os registos DNS

Existem vários registos DNS. Todos eles têm um objetivo específico na resolução DNS. Na OVHcloud, eles são distinguidos em três partes:

- Os registos de apontador (A, AAAA, CNAME, DNAME, NS)
- Os registos de e-mail (MX, SPF, DKIM, DMARC)
- Os registos alargados (TXT, SRV, CAA, NAPTR, LOC, SSHFP, TLSA)

Consulte o nosso manual sobre [os registos DNS](/pages/web_cloud/domains/dns_zone_records) para mais informações sobre os diferentes tipos de registos mencionados acima. Nele encontrará elementos que lhe permitirão, por exemplo, compreender melhor a [edição de uma zona DNS da OVHcloud](/pages/web_cloud/domains/dns_zone_edit).

### Exemplo de zona DNS

Para melhor se representar o que é uma zona DNS, encontre abaixo um exemplo de zona DNS alojada na OVHcloud para o nome de domínio *domain.tld*. Esta última está configurada nos servidores DNS *dns200.anycast.me* e *ns200.anycast.me* da OVHcloud:

![DNS zone dashboard](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/dns-zone-dashboard.png){.thumbnail}

Em comparação, eis o seu equivalente em « modo de texto »:

```bash
$TTL 3600
@	IN SOA dns200.anycast.me. tech.ovh.net. (2024051800 86400 3600 3600000 60)
                 IN NS     ns200.anycast.me.
                 IN NS     dns200.anycast.me.
                 IN MX     1 mx1.mail.ovh.net.
                 IN MX     5 mx2.mail.ovh.net.
                 IN MX     10 mx3.mail.ovh.net.
                 IN A      203.0.113.0
www              IN A      203.0.113.0
```

Neste exemplo, a zona DNS especifica, entre outras, as seguintes informações aos pedidos DNS que lhe são enviados:

- Os servidores DNS declarados para o nome de domínio *domain.tld* são os servidores DNS *dns200.anycast.me* e *ns200.anycast.me*.
- O servidor deve reenviar o endereço IP 203.0.113.0 se uma query DNS for efetuada para o nome de domínio *domain.tld* ou para o subdomínio *www.domain.tld*. Por exemplo, por trás do endereço IP 203.0.113.0 pode-se encontrar o site *domain.tld*.
- Para os e-mails, a zona DNS indica que os pedidos DNS realizados para os endereços de e-mail em *@domain.tld* devem ser enviados para o servidor *mx1.mail.ovh.net* em prioridade. Se este demorar muito tempo a responder ou estiver indisponível, o pedido será então reenviado para o servidor *mx2.mail.ovh.net* e assim por diante até ao último servidor declarado *mx3.mail.ovh.net*.
- O SOA (**S**tart **O**f **A**uthority) da zona DNS da OVHcloud indica que a data da última atualização da zona DNS é 18/05/2024 e que o prazo de atualização da zona DNS é de 3600 segundos. Nas zonas DNS alojadas fora da OVHcloud, os SOA podem conter outros elementos tais como o endereço de e-mail do administrador da zona DNS. Por razões de segurança, a OVHcloud optou por não apresentar esta informação no SOA.

## Quer saber mais?

[Saber tudo sobre os servidores DNS](/pages/web_cloud/domains/dns_server_general_information)

[Saber tudo sobre os registos DNS](/pages/web_cloud/domains/dns_zone_records)

[Criar uma zona DNS OVHcloud](/pages/web_cloud/domains/dns_zone_create)

[Editar uma zona DNS da OVHcloud](/pages/web_cloud/domains/dns_zone_edit)

[Gerir o histórico de uma zona DNS da OVHcloud](/pages/web_cloud/domains/dns_zone_history)

[Eliminar uma zona DNS da OVHcloud](/pages/web_cloud/domains/dns_zone_deletion)
 
Para serviços especializados (referenciamento, desenvolvimento, etc), contacte os [parceiros OVHcloud](/links/partner).
 
Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](/links/support).
 
Fale com nossa [comunidade de utilizadores](/links/community).