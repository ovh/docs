---
title: 'Tutorial - Como bloquear o acesso ao meu site para alguns endereços IP através de um ficheiro .htaccess ?'
excerpt: "Descubra as ações possíveis através de um ficheiro .htaccess para bloquear o acesso ao seu site a determinados endereços IP"
slug: partilhado_htacess_como_impedir_que_certos_ips_acedam_ao_meu_website
section: Reescrita e autenticação
order: 01
---

**Última atualização: 12/09/2022**

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

## Objetivo

Este tutorial tem como objetivo ajudá-lo a proteger o acesso aos seus websites da rede externa, a prevenir ou corrigir eventuais intrusões ou tentativas de ataques DDoS (ataques de negação de serviço).

Pode realizar isto graças a um ficheiro ".htaccess", um ficheiro de texto específico, detetado pelo servidor web (Apache), e que permite definir regras especiais num diretório e no conjunto dos seus sub-diretórios.

Pode criar vários ficheiros ".htaccess" no [espaço FTP](https://docs.ovh.com/pt/hosting/aceder-espaco-de-armazenamento-ftp-alojamento-web/) do seu alojamento, mas **um só* por diretório ou sub-diretório para evitar conflitos entre diferentes ficheiros ".htaccess".

**Descubra como bloquear o acesso ao seu site para certos endereços IP através de um ficheiro ".htaccess".**

> [!warning]
>
> A OVHcloud disponibiliza serviços cuja configuração, gestão e responsabilidade lhe incumbem. Assim, deverá certificar-se de que estes funcionam corretamente.
> 
> Este manual fornece as instruções necessárias para realizar as operações mais habituais. No entanto, se encontrar dificuldades, recomendamos que recorra a um [fornecedor especializado](https://partner.ovhcloud.com/pt/). Não poderemos proporcionar-lhe assistência técnica. Para mais informações, aceda à secção [#go-further] deste manual.
>

## Requisitos

- Dispor de um [alojamento partilhado OVHcloud](https://www.ovhcloud.com/pt/web-hosting/)

## Instruções

> [!primary]
>
> O ficheiro ".htaccess" pode ser colocado em vários dossiês diferentes, respeitando a regra de um **único** ficheiro ".htaccess" por dossier ou sub-dossier.
>
> Os parâmetros definidos por um ficheiro ".htaccess" aplicam-se ao diretório onde está instalado, bem como a todos os seus sub-diretórios.
>
> Para editar (ou criar) estes diretórios, aceda ao espaço FTP do seu alojamento. Caso seja necessário, consulte o guia "[Aceder ao meu espaço de armazenamento](https://docs.ovh.com/pt/hosting/aceder-espaco-de-armazenamento-ftp-alojamento-web/)".
>

## Bloquear um IP, uma gama de IP, um domínio ou todos os IP de um País 

Existem várias regras para bloquear os acessos ao seu alojamento através do ".htaccess".<br>
Esteja atento à sintaxe e aos parâmetros que bloqueia para não ficar bloqueado durante a consulta dos seus websites e/ou scripts alojados.<br>
Em caso de erro, pode aceder ao [espaço FTP](https://docs.ovh.com/pt/hosting/aceder-espaco-de-armazenamento-ftp-alojamento-web/) do alojamento para corrigir a situação. 

> [!primary]
>
> Os alojamentos partilhados funcionam atualmente com **Apache 2.4**. Desde a versão **Apache 2.3**, foram implementadas variáveis e a sintaxe de redação das restrições/autorizações de acesso evoluiu.
>
> Uma vez que a antiga sintaxe é muito utilizada, ela ainda está ativa nas nossas infraestruturas. No entanto, é considerada obsoleta por *Apache* e poderá em breve deixar de estar disponível. Neste tutorial, encontrará exemplos que detalham as duas sintaxe.
>
> Para mais pormenores sobre a nova sintaxe, pode consultar as seguintes páginas oficiais:
>
> - [Documentação sobre o controlo de acesso Apache 2.4](https://httpd.apache.org/docs/2.4/en/howto/access.html) {.external}
> - [Documentação sobre o módulo mod_authz_core Apache 2.4](https://httpd.apache.org/docs/2.4/mod/mod_authz_core.html) {.external}
>

#### Bloquear um IP

Para bloquear um endereço IP específico, insira um dos dois códigos seguintes no seu ficheiro ".htaccess":

> [!tabs]
> Sintaxe histórico
>>
>> ```bash
>> Deny from IP_address
>> ```
>>
> Sintaxe a partir de Apache 2.3
>>
>> ```bash
>> <RequireAll>
>> Require all granted
>> Require not ip IP_address
>> </RequireAll>
>> ```
>>

- **Exemplo** : se pretender bloquear o endereço IP 192.168.1.2, deverá escrever um dos dois códigos seguintes:

> [!tabs]
> Sintaxe histórico
>>
>> ```bash
>> Deny from 192.168.1.2
>> ```
>>
> Sintaxe a partir de Apache 2.3
>>
>> ```bash
>> <RequireAll>
>> Require all granted
>> Require not ip 192.168.1.2
>> </RequireAll>
>> ```
>>

#### Bloquear uma gama de endereços IP

Para bloquear um intervalo de endereços IP, insira um dos dois códigos seguintes no seu ficheiro ".htaccess":

> [!tabs]
> Sintaxe histórico
>>
>> ```bash
>> Deny from IP_range
>> ```
>>
> Sintaxe a partir de Apache 2.3
>>
>> ```bash
>> <RequireAll>
>> Require all granted
>> Require not ip IP_range
>> </RequireAll>
>> ```
>>

- **Exemplo** : se pretender bloquear todos os IPs em 192.168.x.x, deverá escrever um dos dois códigos seguintes:

> [!tabs]
> Sintaxe histórico
>>
>> ```bash
>> Deny from 192.168
>> ```
>>
> Sintaxe a partir de Apache 2.3
>>
>> ```bash
>> <RequireAll>
>> Require all granted
>> Require not ip 192.168
>> </RequireAll>
>> ```
>>

#### Bloquear um domínio

Alguns domínios podem aceder ao seu alojamento através de reencaminhamentos ou pedidos.

Para bloquear um domínio, insira um dos dois códigos seguintes no seu ficheiro ".htaccess":

> [!tabs]
> Sintaxe histórico
>>
>> ```bash
>> Deny from domain
>> ```
>>
> Sintaxe a partir de Apache 2.3
>>
>> ```bash
>> <RequireAll>
>> Require not host domain
>> </RequireAll>
>> ```
>>

- **Exemplo** : se pretender bloquear o domínio domain.tld, deverá escrever um dos dois códigos seguintes:

> [!tabs]
> Sintaxe histórico
>>
>> ```bash
>> Deny from domain.tld
>> ```
>>
> Sintaxe a partir de Apache 2.3
>>
>> ```bash
>> <RequireAll>
>> Require not host domain.tld
>> </RequireAll>
>> ```
>>

#### Bloquear os endereços IP de um país

> [!primary]
>
> Todos os endereços IP (nomeadamente os endereços IP públicos) dispõem de uma geolocalização à escala de um país. Isto permite obter uma visão geral da proveniência dos fluxos de um IP e identificar fisicamente o IP. 
>
> O ".htaccess" permite, graças a este elemento, bloquear o conjunto dos IPs geolocalizados num país. 
> Por outras palavras, todas as pessoas que tentem visitar o seu site a partir deste país serão bloqueadas (a menos que utilizem uma ligação VPN com um IP geolocalizado noutro país).
>
> Os bloqueios através do ".htaccess" efetuam-se através dos "Country Codes" de duas letras (Norma ISO 3166-1 alpha2) dos países.
>
> Vários sites listam os países e os respetivos "Country Codes", entre os quais [https://www.iban.com/country-codes](https://www.iban.com/country-codes) {.external} (independente da OVHcloud).
>

Para bloquear o conjunto dos IPs de um país, insira um dos dois códigos seguintes no seu ficheiro ".htaccess":

> [!tabs]
> Sintaxe histórico
>>
>> ```bash
>> SetEnvIf GEOIP_COUNTRY_CODE Country_Code BlockCountry
>> Deny from env=BlockCountry
>> ```
>>
> Sintaxe a partir de Apache 2.3 
>> A colocar no topo do seu ".htaccess"
>>
>> ```bash
>> RewriteCond %{ENV:GEOIP_COUNTRY_CODE} ^(Country_Code)$
>> RewriteRule ^(.*)$ - [F,L]
>> ```
>>

- **Exemplo** : Se pretender bloquear os endereços IP geolocalizados nas Fiji (FJ) e na Gronelândia (GR), deverá escrever um dos dois códigos seguintes:

> [!tabs]
> Sintaxe histórico
>>
>> ```bash
>> SetEnvIf GEOIP_COUNTRY_CODE FJ BlockCountry
>> SetEnvIf GEOIP_COUNTRY_CODE GR BlockCountry
>> Deny from env=BlockCountry
>> ```
>>
> Sintaxe a partir de Apache 2.3 
>> A colocar no topo do seu ".htaccess"
>>
>> ```bash
>> RewriteCond %{ENV:GEOIP_COUNTRY_CODE} ^(FJ|GR)$
>> RewriteRule ^(.*)$ - [F,L]
>> ```
>>

### Para autorizar apenas alguns endereços IP, uma gama de endereços IP ou o conjunto de endereços IP de um país

Em vez de restringir o acesso a um ou vários IP e deixar os outros aceder ao seu alojamento, pode efetuar o contrário bloqueando o conjunto dos IP e autorizando apenas um ou vários IP a aceder ao seu serviço.

###### Autorizar um ou vários endereços IP

Para autorizar apenas um IP a aceder ao seu serviço, insira um dos dois códigos seguintes no seu ficheiro ".htaccess":

> [!tabs]
> Sintaxe histórico
>>
>> ```bash
>> order deny,allow
>> deny from all
>> Allow from IP_address
>> ```
>>
> Sintaxe a partir de Apache 2.3
>>
>> ```bash
>> Require ip IP_address
>> ```
>>

- **Exemplo** : se pretender autorizar apenas o acesso ao seu alojamento aos IPs 192.168.1.2 e 192.168.1.3, deverá escrever um dos dois códigos seguintes:

> [!tabs]
> Sintaxe histórico
>>
>> ```bash
>> order deny,allow
>> deny from all
>> Allow from 192.168.1.2
>> Allow from 192.168.1.3
>> ```
>>
> Sintaxe a partir de Apache 2.3
>>
>> ```bash
>> Require ip 192.168.1.2 192.168.1.3
>> ```
>>

###### Autorizar uma gama de endereços IP

Para autorizar um intervalo de endereços IP a aceder ao seu serviço, insira um dos dois códigos seguintes no seu ficheiro ".htaccess":

> [!tabs]
> Sintaxe histórico
>>
>> ```bash
>> order deny,allow
>> deny from all
>> Allow from IP_range
>> ```
>>
> Sintaxe a partir de Apache 2.3 
>> A colocar no topo do seu ".htaccess"
>>
>> ```bash
>> Require ip IP_range
>> ```
>>

- **Exemplo** : se pretender autorizar apenas o acesso ao seu alojamento ao intervalo de endereços IP 192.168.1.x, deverá escrever um dos dois códigos seguintes:

> [!tabs]
> Sintaxe histórico
>>
>> ```bash
>> order deny,allow
>> deny from all
>> Allow from 192.168.1
>> ```
>>
> Sintaxe a partir de Apache 2.3 
>> A colocar no topo do seu ".htaccess"
>>
>> ```bash
>> Require ip 192.168.1
>> ```
>>

###### Autorizar o conjunto dos endereços IP de um país

Para autorizar o acesso ao seu serviço a todos os endereços IP de um país, insira um dos seguintes códigos no seu ficheiro ".htaccess":

> [!tabs]
> Sintaxe histórico
>>
>> ```bash
>> order deny,allow
>> deny from all
>> SetEnvIf GEOIP_COUNTRY_CODE Country_Code AllowCountry
>> Allow from env=AllowCountry
>> ```
>>
> Sintaxe a partir de Apache 2.3 
>> A colocar no topo do seu ".htaccess"
>>
>> ```bash
>> RewriteCond %{ENV:GEOIP_COUNTRY_CODE} !^(Country_Code)$
>> RewriteRule ^(.*)$ - [F,L]
>> ```
>>

- **Exemplo** : Se pretender autorizar apenas o acesso ao seu alojamento pelas Fiji (FJ) e pela Gronelândia (GR), deverá escrever um dos dois códigos seguintes:

> [!tabs]
> Sintaxe histórico
>>
>> ```bash
>> order deny,allow
>> deny from all
>> SetEnvIf GEOIP_COUNTRY_CODE FJ AllowCountry
>> SetEnvIf GEOIP_COUNTRY_CODE GR AllowCountry
>> Allow from env=AllowCountry
>> ```
>>
> Sintaxe a partir de Apache 2.3 
>> A colocar no topo do seu ".htaccess"
>>
>> ```bash
>> RewriteCond %{ENV:GEOIP_COUNTRY_CODE} !^(FJ|GR)$
>> RewriteRule ^(.*)$ - [F,L]
>> ```
>>

#### Complementos no ficheiro ".htaccess"

Independentemente da segurança do acesso geral ao alojamento, o ficheiro ".htaccess" permite realizar outras ações. Encontrará a seguir outros três tutoriais da OVHcloud sobre o assumpto:

- [Proteger a interface de administração do seu site através do ".htaccess"](https://docs.ovh.com/pt/hosting/partilhado-htaccess-como-protecao-acesso-a-um-diretorio-por-autenticacao/).
- [Reescrever as URLs graças ao "mod_rewrite"](https://docs.ovh.com/pt/hosting/partilhado_htaccess_rescrita_de_urls_gracas_ao_mod_write/).

## Quer saber mas? <a name="go-further"></a>

Para serviços especializados (referenciamento, desenvolvimento, etc), contacte os [parceiros OVHcloud](https://partner.ovhcloud.com/pt/).

Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](https://www.ovhcloud.com/pt/support-levels/).

Fale com nossa comunidade de utilizadores: <https://community.ovh.com/en/>. 
