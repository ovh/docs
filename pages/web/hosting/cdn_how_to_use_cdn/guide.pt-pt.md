---
title: 'Guia de utilização do Acelerador GeoCache num Alojamento Web'
excerpt: 'Guia de utilização do Acelerador GeoCache incluído nas ofertas de Alojamento Web'
slug: guia_de_utilizacao_do_acelerador_geocache_num_alojamento_web
legacy_guide_number: g1290
---

**Última atualização: 19/03/2020**

## Objetivo

Se deseja melhorar a experiência dos seus utilizadores acelerando o seu site, a técnica mais eficaz é ativar um CDN (Content Delivery Network).  Este último permite colocar em cache os ficheiros estáticos tais como as imagens, os css e os javascript, nos servidores mais próximos dos seus clientes.

**Descubra como gerar a opção CDN do seu alojamento Web.**

## Definição

**Como funciona um CDN ?**

O CDN (Content Delivery Network) é literalmente uma rede dedicada à disponibilização de conteúdos. Utiliza vários servidores implementados em todo o mundo para apresentar o seu website. Quanto mais próximos esses servidores estiverem dos seus utilizadores, mais rápido será o seu website para eles.

Para funcionar, cada servidor guarda na sua memória cache uma parte do seu website. Geralmente, é aconselhável incluir os ficheiros ditos estáticos: as imagens, os ficheiros javascript e css que permitem o bom funcionamento do seu site, mas que são modificados muito raramente.

## Requisitos

- Estar ligado à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}.
- Ter um serviço de [alojamento Web da OVH](https://www.ovh.pt/alojamento-partilhado/){.external}.

## Instruções

###  Ativar a opção CDN

> [!primary]
> 
> A opção CDN já se encontra incluída nas soluções de alojamento web Performance.

####  Se não possui CDN no seu alojamento Web

Ligue-se à sua [Área de Cliente](https://www.ovh.com/auth/?action=gotomanager){.external} e selecione `Web`{.action}. Clique em `Alojamentos`{.action} na barra de serviços situada à esquerda e selecione o plano correspondente. Clique em `...`{.action} à direita de "Opção CDN" e depois em `Encomendar um CDN`{.action}.

![CDN](images/manage_CDN_01.png){.thumbnail}

Será então redirecionado para a página onde será gerada a nota de encomenda. Uma vez efetuada e paga a encomenda, o serviço ficará disponível em apenas alguns minutos.

#### Se o CDN já estiver ativado no seu alojamento Web

Ligue-se à sua [Área de Cliente](https://www.ovh.com/auth/?action=gotomanager){.external} e selecione `Web`{.action}. Clique em `Alojamentos`{.action} na barra de serviços situada à esquerda e selecione o plano correspondente. No separador `Multisite`{.action}, clique na roda dentada situada à direita da entrada multisite e depois em `Alterar`{.action}.

Assinale a opção "Ativar o CDN", clique em `Seguinte`{.action} e depois em `Validar`{.action}.

![CDN](images/manage_CDN_01_02.gif){.thumbnail}

> [!warning]
> 
> No caso de um nome de domínio externo na OVHcloud adicionado à opção multisite no alojamento Web, deve mencionar o endereço IP do CDN do seu alojamento na zona DNS do nome do domínio.<br>
> Consulte a [lista de endereços IP dos clusters e alojamento Web](https://docs.ovh.com/fr/hosting/liste-des-adresses-ip-des-clusters-et-hebergements-web/){.external} para encontrar o endereço IP específico do CDN do seu cluster.

 
**Porque não posso beneficiar do IP geolocalizado com a opção CDN?** <br>
<br>
O CDN utiliza o princípio dos IP anycast. Não recorrerá ao mesmo servidor em função da sua geolocalização, o que é extremamente eficaz para reduzir o tempo de carregamento dos seus ficheiros estáticos. A geolocalização do endereço IP é, portanto, inútil. <br>
Relativamente ao SEO (referenciação nos motores de pesquisa), a velocidade de apresentação do seu website adquire mais importância do que a geolocalização de endereços IP do seu alojamento.


### Como colocar em cache os meus ficheiros no CDN?

**Com CMS**

Os principais gestores de conteúdo (CMS) distribuem inúmeros plugins que permitem configurar a colocação em cache dos ficheiros estáticos para que estes sejam automaticamente considerados pelo CDN. Outros permitem a configuração automática dos ficheiros estáticos, ativando a colocação em cache integrada no CMS. Para mais informações, consulte a documentação oficial do CMS que utiliza ou do editor do plugin.

**Sem CMS**

Mesmo que não utilize um CMS, poderá beneficiar da cache do CDN. Para isso, deve adicionar headers aos pedidos HTTP. Existem várias técnicas que permitem adicionar headers. Uma das mais simples é definir regras para um ficheiro .htaccess em função das extensões de ficheiros.

```htaccess
1. # Cache das imagens durante 1 semana
2. <FilesMatch "\.(jpg|jpeg|png|gif)$">
3. Header set Cache-Control "max-age=604800, public"
4. </FilesMatch>
5. 
6. # Cache dos javascript e CSS durante 1 mês
7. <FilesMatch "\.(js|css)$">
8. Header set Cache-Control "max-age=2592000"
9. </FilesMatch>
```
> [!warning]
>
> A colocação em cache utilizando headers HTTP permite fazê-lo no CDN, mas também no navegador dos seus utilizadores. Assim, para evitar que os seus visitantes não visualizem uma versão em cache demasiado antiga, é recomendada a alteração dos nomes dos ficheiros a cada nova versão.
> 



### Esvaziar a cache do CDN

É por vezes útil esvaziar a cache do CDN, nomeadamente sempre que modifica os seus ficheiros estáticos. Por exemplo, quando realiza uma nova versão do seu site. Neste caso, pode esvaziar a cache do CDN na sua totalidade.

Ligue-se à sua [Área de Cliente](https://www.ovh.com/auth/?action=gotomanager){.external} e selecione `Web`{.action}. Clique em `Alojamentos`{.action} na barra de serviços situada à esquerda e selecione o plano correspondente. Clique em `...`{.action} à direita de "Opção CDN" e depois em `Limpar a cache`{.action}.

![CDN](images/manage_CDN_02.png){.thumbnail}

### Desativar a opção CDN

Esta ação permite desativar o CDN para uma ou mais entradas multisite sem eliminar a opção CDN do seu alojamento Web.

Dirija-se à sua [Área de Cliente](https://www.ovh.com/auth/?action=gotomanager){.external} e selecione `Web`{.action}. Clique em `Alojamentos`{.action} na barra de serviços situada à esquerda e selecione o plano correspondente. No separador `Multisite`{.action}, clique na roda dentada situada à direita da entrada multisite e depois em `Alterar`{.action}.

Desmarque a opção "Ativar o CDN", clique em `Seguinte`{.action} e depois em `Validar`{.action}.

![CDN](images/manage_CDN_03.png){.thumbnail}

### Eliminar a opção CDN

Esta ação tem como objetivo eliminar a opção CDN para a totalidade do seu alojamento Web.

Dirija-se à sua [Área de Cliente](https://www.ovh.com/auth/?action=gotomanager){.external} e selecione `Web`{.action}. Clique em `Alojamentos`{.action} na barra de serviços situada à esquerda e selecione o plano correspondente. Clique em `...`{.action} à direita de "Opção CDN" e depois em `Eliminar CDN`{.action}.

![CDN](images/manage_CDN_04.png){.thumbnail}

Clique em `Validar`{.action} para confirmar a eliminação.

> [!warning]
>
> Receberá um e-mail com o procedimento a realizar para o encerramento do CDN, cujas instruções deverá seguir seja para confirmar ou para anular o pedido. 
> 


### Verificar que o CDN se encontra ativo

Para garantir que o CDN se encontra ativo no seu domínio, é possível efetuar uma verificação através de um terminal com a seguinte ordem:

```
curl -i http://yourpersonnaldomain.ovh/
```

Se o CDN estiver ativo no seu domínio, obterá o seguinte resultado:

```
HTTP/1.1 200 OK
Date: Mon, 01 Jan 2020 00:00:00 GMT
Content-Type: text/html; charset=UTF-8
Set-Cookie: SERVERID12345=123456; path=/; max-age=900
Vary: Accept-Encoding
X-Request-ID: 123456789
X-CDN-Pop: rbx1
X-CDN-Pop-IP: 00.111.22.333/44
X-Cacheable: Cacheable
Accept-Ranges: bytes
Transfer-Encoding: chunked
X-IPLB-Instance: 12345
```
As menções "*X-CDN*" permitem confirmar que passou através do CDN.

Caso o domínio não passe pelo CDN, obterá o seguinte resultado:

```
HTTP/1.1 200 OK
Date: Mon, 01 Jan 2020 00:00:00 GMT
Content-Type: text/html; charset=UTF-8
Set-Cookie: SERVERID12345=123456; path=/; max-age=900
Server: Apache
X-Powered-By: PHP/7.1
Vary: Accept-Encoding
X-IPLB-Instance: 12345
```

A ausência da menção "*X-CDN*" indica que não passou através do CDN.

## Quer saber mais?

Fale com a nossa comunidade de utilizadores: [https://community.ovh.com/en/](https://community.ovh.com/en/){.external}. 