---
title: "Saber tudo sobre os registos DNS"
excerpt: "Descubra os diferentes tipos de registos DNS disponíveis numa zona DNS da OVHcloud"
updated: 2024-07-17
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.

## Objetivo

A sigla **DNS**, que significa **D**omain **N**ame **S**ystem, é um conjunto de elementos (servidores DNS, zonas DNS, etc.) que permitem fazer corresponder um domínio a um endereço IP.

Recomendamos que consulte previamente os nossos manuais "[Saber tudo sobre os servidores DNS](/pages/web_cloud/domains/dns_server_general_information)" e "[Saber tudo sobre a zona DNS](/pages/web_cloud/domains/dns_zone_general_information)" nesta ordem.

A zona DNS de um domínio constitui o ficheiro de configuração deste último. É composta por informações técnicas, chamadas *registos DNS*. A zona DNS é, por assim dizer, um centro de informação para um domínio.

Este manual tem como objetivo apresentar os diferentes tipos de registos DNS disponíveis numa zona DNS gerida na OVHcloud. É complementar aos seguintes guias:

- [Criar uma zona DNS da OVHcloud](/pages/web_cloud/domains/dns_zone_create)
- [Editar uma zona DNS da OVHcloud](/pages/web_cloud/domains/dns_zone_edit)
- [Gerir o histórico de uma zona DNS da OVHcloud](/pages/web_cloud/domains/dns_zone_history)
- [Eliminar uma zona DNS da OVHcloud](/pages/web_cloud/domains/dns_zone_deletion)

**Descubra os diferentes tipos de registos DNS disponíveis numa zona DNS da OVHcloud.**

## Instruções

### Os registos DNS

**A [edição de uma zona DNS](/pages/web_cloud/domains/dns_zone_edit) é uma operação sensível**: Uma alteração inadequada poderia, por exemplo, tornar indisponível o acesso ao seu website ou a receção de novos e-mails.

A lista abaixo apresenta os objetivos e as especificidades de cada registo. Esta tecnologia permitir-lhe-á compreender melhor as operações que realiza com os seus serviços DNS.

#### Registos de apontamento <a name="pointer-records"></a>

Selecione o registo à sua escolha clicando nos separadores seguintes.

> [!tabs]
> **A**
>> **A**ddress <br><br>
>> Liga um domínio a um endereço IPv4 `X.X.X.X` (em que os `X` são números entre `0` e `255`). Por exemplo, o endereço IPv4 do servidor onde está alojado o seu website.
>>
> **AAAA** 
>> 4 letras **A**, pois este registo está codificado em quatro vezes mais bits que o registo histórico de apontamento **A**
>> Associe um domínio a um endereço IPv6. Por exemplo, o endereço IPv6 do servidor onde está alojado o seu website.
>>
>> > [!primary]
>> > Os endereços IPv6 são progressivamente implementados para compensar a falta de endereços IPv4 devido à expansão contínua das utilizações digitais. A codificação em 128 bits dos endereços IPv6 permite assim fornecer um maior número de endereços IP.
>> >
>> > No entanto, se o seu servidor já dispõe de um IPv4, recomendamos que privilegie a utilização deste ao seu IPv6.<br>
>> > De facto, os IPv6 não são ainda corretamente interpretados em toda a rede Internet, o que pode causar perturbações de afixação ou de acesso.
>> >
> **CNAME**
>> **C**anonical **NAME** <br><br>
>> Utiliza o endereço IP de outro domínio ao criar um link chamado alias. Por exemplo, se *www.domain.tld* for um alias de *domain.tld*, isso indica que *www.domain.tld* utilizará o endereço IP de *domain.tld*.
>>
>> > [!alert]
>> >
>> > Um registo TXT que utilize o mesmo domínio ou subdomínio que um registo CNAME perturba o funcionamento deste último. O seu registo CNAME só funcionará parcialmente ou de todo.
>>
>> > [!warning]
>> >
>> > Por convenção, os campos CNAME não podem ser diretamente utilizados por um domínio na sua própria zona DNS. Com efeito, o domínio só deve apontar obrigatória e diretamente para um endereço IP com um campo de tipo A (ou AAAA, se se tratar de um IPv6).
>> >
>> > Para seguir o exemplo acima, não poderá criar um campo CNAME para o domínio *domain.tld* na zona DNS que criou para este domínio.
>> > No entanto, poderá criar campos CNAME com todos os subdomínios (exemplos: *subdomain.domain.tld* ou *www.domain.tld*) do domínio *domain.tld* na zona DNS criada para *domain.tld*.
>> >
>> > Se pretender ir mais longe do ponto de vista técnico sobre este assumpto, poderá encontrar, no final desta página, [um caso particular de uso relativo aos CNAME e às zonas DNS criadas para subdomínios](#cnameusecase).
>>
> **DNAME**
>> **D**elegation **NAME** <br><br>
>> Permite gerar um "alias" para o conjunto dos subdomínios de um domínio. Este registo evita criar uma multitude de registos CNAME. De facto, um registo CNAME redireciona de forma independente apenas um subdomínio para um único alvo.
>>
>> Exemplo: ao criar um registo DNAME de *domain.tld* para *ovh.com*, todos os sub-domínios de *domain.tld* (como *dname.domain.tld* e *xxx.domain.tld*) serão reencaminhados respetivamente para os subdomínios de *ovh.com* (tais como o *dname.ovh.com* e *xxx.ovh.com*).
>>
>> Por outras palavras, o registo DNAME indica que *dname.domain.tld* e *xxx.domain.tld* devem apresentar, respetivamente, os resultados de *dname.ovh.com* e *xxx.ovh.com*.
>>
>> > [!warning]
>> > 
>> > Por outro lado, *domain.tld*, enquanto domínio, não mostrará o destino do domínio *ovh.com*, pois o registo DNAME só é válido para os subdomínios dos domínios definidos no registo DNAME.
>> >
>> > Além disso, se pegar num dos exemplos acima, se o subdomínio alvo *xxx.ovh.com* não apontar para lado nenhum, o registo DNAME também não mostrará nada para *xxx.domain.tld*.
>>
>> > [!success]
>> >
>> > O registo DNAME é geralmente utilizado para uma alteração do nome da empresa. Também pode ser implementado quando um utilizador dispõe de várias extensões de domínios (.pt, .net, .com, .info, ...) para os reencaminhar facilmente entre si.
>> >
> **NS**
>> **N**ame **S**erver<br><br>
>> Define os servidores DNS associados à sua zona DNS. Por exemplo, se os registos NS da sua zona DNS mostrarem os servidores *dnsXX.ovh.net* e *nsXX.ovh.net*, deverá utilizar estes últimos no separador `Servidores DNS`{.action} da sua Área de Cliente OVHcloud. Para mais informações, consulte o nosso manual "[Modificar os servidores DNS de um domínio OVHcloud](/pages/web_cloud/domains/dns_server_edit)".
>>
>> > [!warning]
>> >
>> > Se [editar uma zona DNS da OVHcloud](/pages/web_cloud/domains/dns_zone_edit), não altere, através do botão `Alterar em modo de texto`{.action}, os registos DNS da sua zona DNS em benefício de servidores DNS externos à OVHcloud. De facto, esta zona DNS **só** funciona com servidores DNS da OVHcloud.
>> >

#### Registos de e-mail <a name="mail-records"></a>

Selecione o registo à sua escolha clicando nos separadores seguintes.

> [!tabs]
> **MX**
>> **M**ail e**X**changer <br><br>
>> Associe um domínio a um servidor de e-mail. Por exemplo, o endereço *10 mx1.mail.ovh.net* corresponde a um dos servidores de e-mail OVHcloud quando possui uma oferta de e-mail OVHcloud. É provável que o seu fornecedor de e-mail disponha de vários servidores de e-mail: assim, devem ser criados vários campos MX. Consulte o nosso manual "[Adicionar um campo MX à configuração do domínio](/pages/web_cloud/domains/dns_zone_mx)".
>>
>> > [!warning]
>> >
>> > De forma geral, recomendamos que na zona DNS utilize apenas um ou vários servidores do mesmo fornecedor de e-mail.
>> > Se já dispõe de serviços de e-mail noutro fornecedor de e-mail e adicionou em paralelo (sem substituir) os servidores de e-mail do seu novo fornecedor de e-mail, corre o risco de receber aleatoriamente os seus e-mails num dos seus dois fornecedores.
>> > 
> **SPF**
>> **S**ender **P**olicy **F**ramework <br><br>
>> Permite evitar potenciais usurpações de identidade nos endereços de e-mail que utilizam o seu nome de domínio (*spoofing*). Por exemplo, o registo `v=spf1 include:mx.ovh.com ~all` indica que apenas os servidores de envio relacionados com a oferta de e-mail OVHcloud podem ser considerados legítimos pelo servidor de receção. Pode introduzir este registo sob a forma de um registo TXT ou através do nosso sistema de configuração automática.
>>
>> Para mais informações, consulte o nosso manual "[Adicionar um registo SPF à configuração do seu domínio](/pages/web_cloud/domains/dns_zone_spf)".
>>
> **DKIM**
>> **D**omain**K**eys **I**dentified **M**ail <br><br>
>> Permite verificar a autenticidade do nome de domínio do remetente e assegurar a integridade do e-mail enviado. O registo DKIM tem a forma de uma chave composta por vários caracteres. A chave DKIM é fornecida pelo seu prestador de serviços de e-mail (se esta funcionalidade for proposta por este), é possível que a introduza sob a forma de um campo TXT.
>>
>> Consulte a nossa documentação "[Configurar um registo DKIM](/pages/web_cloud/domains/dns_zone_dkim)" para saber mais.
>>
> **DMARC**
>> **D**omain-based **M**essage **A**uthentication, **R**eporting and **C**onformance <br><br>
>> Contribui para a autenticação dos e-mails em associação com os métodos SPF e/ou DKIM. Este valor ser-lhe-á dado pelo seu fornecedor de e-mail (se esta funcionalidade for proposta por este último), e será no mínimo associado a um registo SPF ou DKIM.
>>
>> Consulte a nossa documentação "[Configurar um registo DMARC no seu domínio](/pages/web_cloud/domains/dns_zone_dmarc)" para saber mais.

#### Registos alargados <a name="extended-records"></a>

Selecione o registo à sua escolha clicando nos separadores seguintes.

> [!tabs]
> **TXT**
>> **T**e**XT** <br><br>
>> Permite adicionar o valor da sua escolha, em formato de texto, na zona DNS do seu domínio. Este registo é frequentemente utilizado em processos de verificação/validação ou de segurança.
>>
>> > [!warning]
>> >
>> > O registo TXT está limitado a 255 caracteres. No entanto, em alguns casos, o valor pode ser dividido em vários registos. Insira o seu fornecedor quando este lhe solicitar que indique um valor superior ao limite de 255 caracteres.
>> >
>> > Este limite não é, no entanto, existente se passar pela funcionalidade `Alterar em modo de texto`{.action} descrita no nosso guia "[Editar uma zona DNS da OVHcloud](/pages/web_cloud/domains/dns_zone_edit)" (para utilizadores experientes).
>>
> **SRV**
>> **S**e**RV**ice resource <br><br>
>> Permite indicar o endereço de um servidor que gere um serviço. Por exemplo, pode indicar o endereço de um servidor SIP ou de um servidor que permita a configuração automática de um software de mensagens.
>>
> **CAA**
>> **C**ertification **A**uthority **A**uthorization <br><br>
>> Permite listar as autoridades de certificação autorizadas a serem entregues dos certificados SSL para um domínio.
>>
>> > [!warning]
>> >
>> > Se configurar uma entrada CAA para um domínio, esta configuração também será aplicada a **todos os subdomínios** desse mesmo domínio.
>> >
>> > Se utilizar um certificado SSL Let's Encrypt com o seu domínio num alojamento partilhado OVHcloud e um registo CAA, este último impedirá a regeneração do certificado SSL Let's Encrypt.
>>
> **NAPTR**
>> **N**ame **A**uthority **P**oin**T**e**R** <br><br>
>> Utilizado em telecomunicações para dirigir um pedido emitido por um terminal móvel para um servidor. Um registo SRV pode ser associado para gerar de forma dinâmica URIs (Uniform Resource Identifier) alvos.
>>
> **LOC**
>> **LOC**ation <br><br>
>> Utilizado para indicar as informações de posição geográfica (nomeadamente com latitude, longitude e altitude).
>>
> **SSHFP**
>> **S**ecure **SH**ell **F**inger**P**rint <br><br>
>> Utilizado para introduzir o vestígio de uma chave pública SSH.
>>
> **TLSA**
>> **T**ransport **L**ayer **S**ecurity **A**uthentification <br><br>
>> Utilizado para indicar o cunho de um certificado SSL/TLS. Vai permitir conservar o *hash* de um certificado diretamente na zona DNS do seu domínio através de um registo DNS.
>>
>> Este registo é utilizado no âmbito do protocolo **D**NS-based **A**uthentication of **N**amed **E**ntities (DANE).
>>
>> O protocolo DANE permite a um cliente (browser, cliente de e-mail, cliente FTP, cliente SSH, etc.) consultar o registo TLSA. Desta forma, garante que um certificado SSL/TLS utilizado para um nome de domínio é o que certifica esse mesmo nome de domínio.
>>
>> Se necessário, pode consultar mais pormenores no website da [**I**nternet **E**ngineering **T**ask **F**orce (**IETF***)](https://datatracker.ietf.org/doc/html/rfc6698){.external} (EN).
>>

#### Casos particulares de utilização: a utilização dos registos CNAME <a name="cnameusecase"></a>

Alguns utilizadores criam zonas DNS diretamente para o subdomínio de um domínio (por exemplo *subdomain-with-its-own-DNS-zone.domain.tld*). A regra indicada no separador "CNAME" da parte "[Registos de apontamento](#pointer-records)" aplica-se igualmente neste caso.

Como a zona DNS foi criada para o subdomínio (no nosso exemplo *subdomain-with-its-own-DNS-zone.domain.tld*), este último é considerado como um domínio de pleno direito na sua zona DNS.

Por isso, e neste caso específico, não poderá criar um campo CNAME para *subdomain-with-its-own-DNS-zone.domain.tld* na zona DNS que criou para este último. No entanto, pode criar campos CNAME tais como *subdomain.subdomain-with-its-own-DNS-zone.domain.tld* ou *xxx.subdomain-with-its-own-DNS-zone.domain.tld*.

## Quer saber mais?

[Saber tudo sobre os servidores DNS](/pages/web_cloud/domains/dns_server_general_information)

[Saber tudo sobre a zona DNS](/pages/web_cloud/domains/dns_zone_general_information)

[Como configurar o registo SPF de um domínio](/pages/web_cloud/domains/dns_zone_spf)

[Proteja o seu domínio contra o Cache Poisoning graças ao DNSSEC](/pages/web_cloud/domains/dns_dnssec)
 
Para serviços especializados (referenciamento, desenvolvimento, etc), contacte os [parceiros OVHcloud](/links/partner).
 
Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](/links/support).
 
Fale com nossa [comunidade de utilizadores](/links/community).