---
title: "Visualizar e gerir todos os seus websites a partir da Área de Cliente OVHcloud"
excerpt: "Descubra como consultar e gerir os seus websites a partir da Área de Cliente OVHcloud"
updated: 2025-05-27
---

## Objetivo

A vista `Websites` permite centralizar a apresentação do conjunto dos seus websites, independentemente do seu alojamento. Permite o acompanhamento das funcionalidades ativadas em cada website e permite um acesso rápido às ações essenciais. Esta interface é particularmente útil para as agências ou para os profissionais da web que gerem um grande número de domínios repartidos por vários alojamentos.

**Saiba como visualizar e gerir os seus websites a partir da Área de Cliente.**

## Requisitos

- Ter acesso à [Área de Cliente OVHcloud](/links/manager).
- Ter um [plano de alojamento web](/links/web/hosting).

## Instruções

### Aceder à vista `Websites`

Aceda à [Área de Cliente OVHcloud](/links/manager) e aceda à secção `Web Cloud`{.action}. No menu à esquerda, clique em `Websites`{.action}. Aparecerá uma tabela com o conjunto dos seus websites e as suas principais informações.

![vista_websites](images/website_view_tab.png){.thumbnail}

#### Domínio

Apresenta o domínio principal do website, tal como está configurado no separador Multi-site do seu alojamento.

Ao clicar, será redirecionado para o separador `Multisite`{.action} do alojamento correspondente.

#### Diagnóstico

Informa-o se o seu domínio aponta corretamente para o alojamento web associado. Para cada domínio, são possíveis três resultados de diagnóstico:

- `A/AAAA` verde: Os registos A e/ou AAAA do seu domínio apontam corretamente para o endereço IP do seu alojamento web.
- `A/AAAA` amarelo: Os registos A e/ou AAAA do seu domínio apontam para um endereço IP diferente daquele do seu alojamento web.
- `A/AAAA` cinzento: Não foi configurado nenhum registo A ou AAAA, o seu domínio não aponta para nenhum endereço IP.

Ao clicar, será redirecionado para o separador `Multisite`{.action} do alojamento correspondente.

Para mais informações sobre diagnósticos, consulte a secção "Diagnosticar os seus nomes de domínio" do nosso guia "[Partilhar o alojamento entre vários sites](/pages/web_cloud/web_hosting/multisites_configure_multisite)".

#### Pasta raiz

Indica o diretório do seu alojamento (por exemplo: www, app, public_html, etc.) para o qual o domínio aponta.

Ao clicar, será redirecionado para o separador `Multisite`{.action} do alojamento correspondente.

#### Nome do serviço

Nome técnico do serviço de alojamento web no qual o site está configurado, sob a forma `abcdv.clusterXX.hosting.ovh.net`.

Ao clicar, será redirecionado para o separador `Informações gerais`{.action} do alojamento em causa.

#### Nome a ser apresentado

Alias personalizado definido pelo cliente para identificar melhor o seu serviço na Área de Cliente.

Ao clicar, será redirecionado para o separador `Informações gerais`{.action} do alojamento em causa.

### Plano

Apresenta o tipo de oferta associada ao alojamento: Starter, Perso, Pro ou Performance.

Ao clicar, será redirecionado para o separador `Informações gerais`{.action} do alojamento em causa.

#### Git

Apresenta o estado da integração Git no website:

- Ativo: O repositório Git está ligado.
- Inativo: O repositório Git não está ativado.
- Em curso: O repositório Git está em curso de configuração.
- Erro: É detetado um erro na configuração do repositório Git.

Ao clicar, será redirecionado para o separador `Multisite`{.action} do alojamento correspondente.

#### Logs separados

Indica se um espaço de logs está ativado no domínio selecionado.

Ao clicar, será redirecionado para o separador `Multisite`{.action} do alojamento correspondente.

Consulte a nossa página "[Acompanhe e analise o tráfego dos seus websites](/links/web/hosting-traffic-analysis)" para mais informações.

> [!warning]
>
> Os logs separados não podem ser ativados para um nome de domínio externo. Esta opção só está disponível para os domínios registados na OVHcloud.
>

#### CDN

Apresenta o estado do CDN (**C**ontent **D**elivery **N**etwork) no nome de domínio:

- Ativo: O CDN está em funcionamento.
- Desativado: O CDN está desativado.
- N/A: Não aplicável (oferta não compatível).

Ao clicar, será redirecionado para o separador `Multisite`{.action} do alojamento correspondente.

O CDN permite armazenar em cache elementos estáticos do seu website, como as imagens. Consulte a nossa página "[Shared CDN](/links/web/hosting-options-cdn)" para mais informações.

### SSL

Indica se o SSL está ativado ou não no domínio em questão.

Ao clicar, será redirecionado para o separador `Multisite`{.action} do alojamento correspondente.

O SSL permite-lhe beneficiar de uma ligação segura (**https://**) no nome de domínio selecionado. Consulte a nossa página "[Proteja eficazmente o seu site OVHcloud com um certificado SSL premium](/links/web/hosting-options-ssl)" para mais informações.

#### Firewall

Se a firewall da aplicação está ativada ou não no domínio.

Ao clicar, será redirecionado para o separador `Multisite`{.action} do alojamento correspondente.

Consulte a nossa página "[As opções indispensáveis para o seu alojamento web](/links/web/hosting-options)" para mais informações.

#### Boost

Indica se a opção boost está ativada ou não no seu alojamento web. A opção Boost permite aumentar temporariamente os recursos CPU e RAM do seu alojamento web.

Ao clicar, será redirecionado para o separador `Aplicar opção boost ao serviço`{.action} de alojamento.

Para mais informações sobre a opção Boost, consulte a secção "Boost temporariamente ao seu alojamento Performance" do nosso guia "[Alojamento web - Como fazer evoluir a sua oferta](/pages/web_cloud/web_hosting/how_to_upgrade_web_hosting_offer)".

## Quer saber mais? <a name="go-further"></a>
 
Para serviços especializados (referenciamento, desenvolvimento, etc.), contacte os [parceiros OVHcloud](/links/partner).
 
Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](/links/support).
 
Fale com a nossa [comunidade de utilizadores](/links/community).