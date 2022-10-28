---
title: Utilizar o SSL Gateway
slug: utilizar-o-ssl-gateway
legacy_guide_number: 2370
excerpt: Torne as ligacoes para o seu website seguras
---


## Generalidades

### Pre-requisitos


> [!primary]
>
> - Ter encomendado um serviço [SSL Gateway](../order-ssl-gateway/guide.pt-pt.md).
> - Ter acesso ao seu Espaço Cliente Sunrise.
>

## Utilizacao
Vamos ver agora como utilizar o seu serviço SSL Gateway


### Configuracao do servico
- Ligue-se ao seu [Espaço Cliente](https://www.ovh.com/manager){.external}.
- Clique de seguida na secção `Sunrise`{.action}.

![bouton sunrise](images/4.PNG){.thumbnail}

- Clique de seguida em `SSL Gateway`{.action} para poder consultar o serviço.

![bouton ssl gateway](images/5.PNG){.thumbnail}

- Selecione a oferta que deseja configurar.

![page commerciale](images/6.PNG){.thumbnail}

- Chegará então à página de gestão da sua oferta.

![config globale](images/7.PNG){.thumbnail}

- Description des informations.

![partie infos](images/8.PNG){.thumbnail}


|IPv4|Endereço IPv4 da gateway OVH para o qual deve apontar|
|IPv6|Endereço IPv6 da gateway OVH para o qual deve apontar|
|Zone|Zona geográfica do endereço IP do seu SSL Gateway|
|IPv4 de saída|Endereços IPv4 OVH que se ligarão ao seu servidor|
|Oferta|Tipo de oferta subscrita|
|Documentação|Link para este guia de utilização|
|Estado|Estado do seu serviço SSL Gateway|
|Data de expiração|Data de expiração do seu serviço SSL Gateway|
|Cancelar|Botão para solicitar a rescisão do seu serviço SSL Gateway|
|Migrar para a oferta Advanced|Permite a migração da oferta Free para a oferta Advanced|

- Descrição da configuração

![partie conf](images/9.PNG){.thumbnail}


|Configuração|Botão que permite modificar a configuração do seu serviço SSL Gateway|
|HSTS [[1]](#id5){.note-ref #id1}|Obriga o browser a efetuar as suas próximas ligações ao seu website via HTTPS|
|Reverse|Permite atribuir um domínnio/subdomínio ao seu endereço IP IP SSL Gateway|
|Reencaminhamento HTTPS [[2]](#id6){.note-ref #id2}|Reencaminha o visitante para a versão HTTPS do seu website quando ele acede via HTTP|
|Servidor HTTPS [[3]](#id7){.note-ref #id3}|Ativa o HTTPS entre o servidor SSL Gateway e o seu servidor|
|Restrição dos endereços IP source|Se o campo está preenchido, apenas os endereços IP ou redes específicas podem ligar-se ao SSL Gateway|
|Configuração dos ciphers [[4]](#id8){.note-ref #id4}|Permite escolher um nível de segurança para o seu certificado SSL/TLS|


> [!primary]
>
> [[1]](#){.note-ref #id5} - ([1](#id1){.fn-backref}) 
> <cite>Mais informações sobre o HSTS.</cite>
> 
> [[2]](#){.note-ref #id6} - ([1](#id2){.fn-backref}) 
> <cite>Após ter verificado que o seu website funciona corretamente com o protocolo HTTPS, é possível que encaminhe todo o tráfego HTTP para HTTPS.
> É no entanto recomendado que aguarde 24h antes de apontar o seu domínio para a oferta SSL Gateway antes de efetuar esse reencaminhamento, de forma a que os visitantes do seu website tenham a nova configuração DNS funcional.</cite>
> 
> [[3]](#){.note-ref #id7} - ([1](#id3){.fn-backref}) 
> <cite>Permite tornar seguro do "inicio ao fim" a ligação. O servidor SSL Gateway irá ligar-se ao seu servidor a partir da porta standard de HTTPS, a porta 433. Atenção, é obrigatório que disponha de um certificado SSL/TLS no seu servidor para poder ativar esta opção. Sem isso, o seu website não irá funcionar. Não é no entanto necessário que esse certificado tenha sido renovado no seu servidor.</cite>
> 
> [[4]](#){.note-ref #id8} - ([1](#id4){.fn-backref}) 
> <cite>O nível mais elevado trará melhores proteções mas poderá não funcionar com os browsers mais antigos.</cite>
>


### Configuracao do dominio
O bloco seguinte compreende 4 separadores:

- **Domínios**
- **Servidores**
- **Trabalhos**
- **Gráficos**


![onglet Domaines](images/10.PNG){.thumbnail}

O separador **"Domínios"** permite adicionar e eliminar os seus domínnios e subdomínios ao seu SSL Gateway.

- Clique em `+ Domínio`{.action} para poder adicionar um domínio ou subdomínio.

> [!faq]
>
> Dispõe de uma oferta **"Free"**
>> 
>> Apenas será possível adicionar um só **domínio**, bem como do seu **subdomínio "www"** e de um segundo **subdomínio à escolha**:
>> 
>> > [!primary]
>> >
>> > |Domínio|example.com|
>> > |Subdomínio www|www.example.com|
>> > |Subdomínio à escolha|blog.example.com|
>> > 
>> 
>> 
>> > [!warning]
>> >
>> > - Oferta Free:
>> > 
>> > Apenas os domínios até 3 níveis (www.example.org) são autorizados.
>> > 
>> 
>> - Faça a sua escolha e depois clique de seguida em `Adicionar`{.action} para validar a sua escolha.
>>
>> ![ajout domaine free](images/11.PNG){.thumbnail}
>>
> Dispõe de uma oferta **"Advanced"**
>> 
>> Será possível adicionar o domínio e subdomínio que desejar.
>> 
>> > [!primary]
>> >
>> > - Oferta Advanced:
>> > 
>> > Os domínios de 4º nível (blog.portugal.example.org) e superiores são autorizados.
>> > 
>> 
>> - Faça a sua escolha e depois clique de seguida em `Adicionar`{.action} para validar a sua escolha.
>> 
>> ![ajout domaine advanced](images/12.PNG){.thumbnail}
>>
>

> [!warning]
>
> Para adicionar um domínio ou subdomínio, ser-lhe-á enviado um e-mail a indicar que deve apontá-lo para o endereço IP do SSL Gateway num prazo de 3 dias.
> Esta operação é necessária para validar a criação do certificado SSL/TLS.
> 


O separador **"Servidores"** permite gerir o(s) endereço(s) IP do(s) alojamento(s) do seu website.

- Clique em `+ Servidor`{.action} para poder adicionar um endereço IP e uma porta correspondente ao servidor que aloja o seu website.

![onglet serveurs](images/13.PNG){.thumbnail}

> [!faq]
>
> Dispõe de uma oferta **"Free"**
>> 
>> Apenas poderá dispor de um só endereço IP/PORTA.
>> 
>
> Dispõe de uma oferta **"Advanced"**
>> 
>> Pode adicionar até 3 endereços IP/PORTA para os seus domínios e subdomínios.
>> 
>> > [!primary]
>> >
>> > Se indicar vários endereços IP/PORTAS, o seu SSL Gateway repartirá a carga com o sistema Round Robin.
>> > Para mais informações sobre o DNS Round Robin consulte o seguinte endereço: (em Inglês)
>> > 
>> 
>> - Faça a sua escolha e depois clique de seguida em `Adicionar`{.action} para a validar.
>> 
>> ![ajout IP/PORT advanced (interne)](images/15.PNG){.thumbnail}
>> 
>

> [!warning]
>
> Não é ainda possívela a adição dos endereços IPv6 dos seus servidores.
> Esta situção não é impeditiva, uma vez que o seu domínio ou subdomínio pode apontar para o seu SSL Gateway em IPv6.
> O seu SSL Gateway encarregar-se-á de seguida em bascular o tráfego IPv6 para o endereço IPv4 do seu servidor de forma transparente.
> 


O separador **"Trabalhos"** permite consultar as operações em curso no seu SSL Gateway.

![onglet tâches](images/13-bis.PNG){.thumbnail}

> [!warning]
>
> Se não detetarmos o apontamento do seu domínio ou subdomínio para o endereço IP do SSL Gateway, o certificado SSL/TLS não será criado.
> O acesso será no entanto possível via "HTTP". Se for o caso, um "thumbnail" "HTTP" será apresentado no separador "Entradas".
> 
> ![http only](images/14.PNG){.thumbnail}
>

O separador **"Gráficos"** permite consultar o número de ligações e pedidos por minuto efetuados via o seu SSL Gateway.

![onglet metriques](images/17.PNG){.thumbnail}

> [!faq]
>
> Dispõe de uma oferta **"Free"**
>> 
>> Será possível consultar os gráficos de 24h.
>> 
>
> Dispõe de uma oferta **"Advanced"**
>> 
>> Será possível consultar os gráficos de 1 mês.
>> 
>


## Renovacao do certificado SSL

### Ponto importante


> [!primary]
>
> Para poder renovar o certificiado Let's Encrypt, é necessário que o domínio ou subdomínio apontem para o IP da oferta SSL Gateway.
> - Se não é o caso, os nossos robots irão constatá-lo 7 dias antes da data de renovação do certificado SSL/TLS, receberá um e-mail dando-lhe 3 dias para efetuar essa operação.
> - Findos os 3 dias, e se a operação não for efetuada, o certificado não será renovado e será necessário que o regenere manualmente com a ajuda deste botão:
> 
> ![Regenerate SSL](images/16.PNG){.thumbnail}
> 
>

## Truques

### Correcao do IP source nos Logs

#### Apresentacao
Quando um cliente visita o seu website ele liga-se ao SSL Gateway via HTTPS, e depois o SSL Gateway faz seguir o pedido para o seu servidor após ter desencriptado a informação e filtrado os atataques. Todos os pedidos para o seu servidor são provenientes do SSL Gateway.

Para que possa saber o endereço do seu visitante, o SSL Gateway adiciona-o nos cabeçalhos HTTP standards:

- X-Forwarded-For e X-Remote-Ip: Endereço do cliente, tal como é visto pelo SSL Gateway.
- X-Forwarded-Port e X-Remote-Port: Porta source do cliente, tal como é vista pelo SSL Gateway.

Estes campos podem ser forjados por um cliente malicioso, e somente devem ser tomados em conta se vierem de uma fonte de confiança como o SSL Gateway. A lista dos endereços IP sources utilizada pelo SSL Gateway encontar-se em:

- O seu Espaço Cliente Sunrise
- Separador SSL Gateway
- Campo "IPv4 de saída"

À hora da redeção deste guia esses endereços são **213.32.4.0/24** e **144.217.9.0/24**. Podem ser adicionados outros endereços IP no futuro.

Se gere o seu servidor, pode configurá-lo para ter em consideração de forma automática esta configuração ao invés do IP do SSL Gateway.


#### Apache
- Crie o seguinte ficheiro:
/etc/apache2/conf-available/remoteip.conf
- Introduza as seguintes linhas:

```bash
# Trust X-Forwarded-For headers from the SSL Gateway
# See https://www.ovh.com/manager/sunrise/sslGateway/index.html#/sslGateway for an up to date list
RemoteIPHeader X-Forwarded-For
RemoteIPInternalProxy 213.32.4.0/24
```


Pode de seguida substituir as variáveis %h por %a nas diretivas LogFormat da configuração do Apache.

- Após ter a configuraçaõ pronta, basta que a ative com os seguintes comandos:

```bash
# Ativa o módulo e depois a configuração
a2enmod remoteip
a2enconf remoteip

# Reinicie o Apache para ter em consideração o módulo (um "reinicio" é suficiente para a configuração)
service apache2 restart
```


Pode encontrar mais informações sobre esta funcionalidade na [documentação oficial do Apache](https://httpd.apache.org/docs/current/en/mod/mod_remoteip.html){.external} (em Inglês).


#### Nginx
- Abra o ficheiro de configuração correspondente ao website a tornar seguro. Ele encontra-se por normal em:
/etc/nginx/sites-enabled
- Introduza as seguintes linhas na secção server:

```bash
# Trust X-Forwarded-For headers from the SSL Gateway
# See https://www.ovh.com/manager/sunrise/sslGateway/index.html#/sslGateway for an up to date list
set_real_ip_from 213.32.4.0/24;
real_ip_header X-Forwarded-For;
```


Pode encontrar mais informações sobre esta funcionalidade na [documentação oficial do Nginx](http://nginx.org/en/docs/http/ngx_http_realip_module.html){.external} (em Inglês).

## Quer saber mais?

Para serviços especializados (referenciamento, desenvolvimento, etc), contacte os [parceiros OVHcloud](https://partner.ovhcloud.com/pt/).

Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](https://www.ovhcloud.com/pt/support-levels/).

Fale com nossa comunidade de utilizadores: <https://community.ovh.com/en/>. 