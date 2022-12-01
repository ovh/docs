---
title: 'Guia de utilização do acelerador CDN num alojamento web'
slug: guia_de_utilizacao_do_acelerador_geocache_num_alojamento_web
excerpt: 'Melhore o seu site acelerando o seu carregamento no alojamento Web graças ao CDN'
section: Otimizar o seu site
order: 03
---

> [!primary]
>
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

**Última atualização: 23/12/2021**

## Objetivo

Se deseja melhorar a experiência dos seus utilizadores acelerando o seu site, a técnica mais eficaz é ativar um CDN (Content Delivery Network). Este último permite colocar em cache os ficheiros estáticos tais como as imagens, os css e os javascript, nos servidores mais próximos dos seus clientes.

**Descubra como gerar a opção CDN do seu alojamento Web.**

## Definição

**Como funciona um CDN ?**

O CDN (Content Delivery Network) é literalmente uma rede dedicada à disponibilização de conteúdos. Utiliza vários servidores implementados em todo o mundo para apresentar o seu website. Quanto mais próximos esses servidores estiverem dos seus utilizadores, mais rápido será o seu website para eles.

Para funcionar, cada servidor guarda na sua memória cache uma parte do seu website. Geralmente, é aconselhável incluir os ficheiros ditos estáticos: as imagens, os ficheiros javascript e css que permitem o bom funcionamento do seu site, mas que são modificados muito raramente.

## Requisitos

- Estar ligado à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt).
- Ter um serviço de [alojamento Web da OVHcloud](https://www.ovhcloud.com/pt/web-hosting/).

## Instruções

### Implementar a opção CDN

> [!primary]
> 
> A opção CDN já se encontra incluída nas soluções de alojamento web Performance.

####  Se a opção CDN não for encomendada ou ativada no seu alojamento Web

Aceda à Área de [Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt) e selecione a opção `Web Cloud`{.action}. Clique em `Alojamentos`{.action} e selecione o plano correspondente. Clique em `...`{.action} à direita de "Opção CDN" e, a seguir, em `Encomendar um CDN`{.action} ou `Ativar a opção`{.action} se a opção CDN já estiver incluída no seu alojamento.

> [!primary]
> 
> Se possui uma opção CDN anterior a 19/11/2020, pode encomendar a nova oferta Shared CDN clicando em `Atualizar o CDN para a versão superior`{.action}.

![CDN](images/manage_CDN_01.png){.thumbnail}

Será então redirecionado para a página onde será gerada a nota de encomenda. Uma vez efetuada e paga a encomenda, o serviço ficará disponível em apenas alguns minutos.

#### Se a opção CDN já estiver ativa no seu alojamento Web

Aceda à Área de [Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt) e selecione a opção `Web Cloud`{.action}. Clique em `Alojamentos`{.action} e selecione o plano correspondente. No separador `Multisite`{.action}, clique na roda dentada situada à direita da entrada multisite e depois em `Alterar`{.action}.

Assinale a opção "Ativar o CDN", clique em `Seguinte`{.action} e depois em `Validar`{.action}.

![CDN](images/manage_CDN_01_02.png){.thumbnail}

> [!warning]
> 
> No caso de um nome de domínio externo na OVHcloud adicionado à opção multisite no alojamento Web, deve mencionar o endereço IP do CDN do seu alojamento na zona DNS do nome do domínio.<br>
> Consulte a [lista de endereços IP dos clusters e alojamento Web](https://docs.ovh.com/pt/hosting/lista-dos-enderecos-ip-dos-clusters-e-alojamentos-web/) para encontrar o endereço IP específico do CDN do seu cluster.

**Porque não posso beneficiar do IP geolocalizado com a opção CDN?** <br>
<br>
O CDN utiliza o princípio dos IP anycast. Não recorrerá ao mesmo servidor em função da sua geolocalização, o que é extremamente eficaz para reduzir o tempo de carregamento dos seus ficheiros estáticos. A geolocalização do endereço IP é, portanto, inútil. <br>
No que diz respeito ao SEO (referenciamento nos motores de pesquisa), a velocidade de apresentação do seu website é mais importante do que a geolocalização do endereço IP do seu alojamento.

### Gerir o Shared CDN 

> [!primary]
> 
> A opção Shared CDN já está incluída nas ofertas de alojamento web Performance ou está disponível na encomenda desde 19/11/20. Para as versões mais antigas, consulte o parágrafo [Gerir o seu CDN (versão histórica)](#cdnbusiness).

#### Limpar a cache do Shared CDN

É por vezes útil esvaziar a cache do CDN, nomeadamente sempre que modifica os seus ficheiros estáticos. Por exemplo, quando realiza uma nova versão do seu site. É possível esvaziar a cache para cada uma das suas entradas multisite.

Dirija-se ao separador `Multisite`{.action} do seu alojamento, clique em `...`{.action} à direita da entrada multisite e, a seguir, `Purgar o CDN`{.action}.

![CDN](images/manage_sharedCDN_01.png){.thumbnail}

#### Configurar as opções do Shared CDN

Dirija-se ao separador `Multisite`{.action} do seu alojamento, clique em `...`{.action} à direita da entrada multisite e depois em `Alterar o CDN`{.action}. 

> [!warning]
> 
> Algumas opções estão bloqueadas na oferta Basic e requerem a subscrição do [CDN security](https://www.ovhcloud.com/pt/web-hosting/options/cdn/) ou do [CDN Advanced](https://www.ovhcloud.com/pt/web-hosting/options/cdn/).

![CDN](images/manage_sharedCDN_02.png){.thumbnail}

- **Ainda online**: Permite a manutenção dos dados do CDN online em caso de falha do servidor.

- **HTTP/2**: Protocolo que permite um melhor desempenho do seu website em termos de segurança e de latência.

- **Dev-mode**: permite-lhe desativar a cache durante o desenvolvimento do seu site.

- **Brotli**: tipo de compressão que permite otimizar o tamanho dos seus ficheiros em cache.

- **Regra de cache**: Crie até 5 regras. Elas definem a frequência de atualização de cache para certos recursos precisos no seu site. ([seguir o próximo passo](#cacherules)). 

Depois de escolher as opções, clique em `Aplicar configuração`{.action} e, a seguir, em `Validar a configuração`{.action} na janela seguinte.

![CDN](images/manage_sharedCDN_03.png){.thumbnail}

##### **Criar uma regra de implementação de cache** <a name="cacherules"></a>

Para adicionar uma regra de cache num dos elementos do seu site, clique no separador `Multisite`{.action} do seu alojamento, clique em `...`{.action} à direita da entrada multisite e, a seguir, em `Configurar o CDN`{.action}.

Sob a menção **Regras de cache**, clique no botão `Adicionar uma regra`{.action}.

![CDN](images/manage_sharedCDN_04.png){.thumbnail}

- **Nome de regra**: Atribua um nome à sua regra.

- **URI**: Indique o subconjunto de recursos do seu website através do seu caminho no URL. Para as ofertas CDN-Basic e CDN-Security, só é possível introduzir uma extensão de ficheiro. 

- **Duração**: indique a duração da colocação em cache do recurso selecionado.

- **Classificação**:  Classifique as suas regras por ordem de execução (da mais baixa à mais elevada).

Depois de escolher, clique no botão `Criar a regra`{.action}.

As regras aparecem numa lista. Pode alterar uma regra clicando em `...`{.action} à direita desta e, a seguir, em `Alterar a regra`{.action}; ou eliminá-la clicando em `Eliminar a regra`{.action}.

![CDN](images/manage_sharedCDN_05.png){.thumbnail}

Depois de configurar as regras e selecionar as opções, clique em `Aplicar configuração`{.action} e, a seguir, em `Validar a configuração`{.action} na janela seguinte.

> [!warning]
>
> Para beneficiar de um limite de regras mais elevado e de vantagens de parâmetros sobre a criação de regras de cache, pode optar pela opção [CDN Advanced](https://www.ovhcloud.com/pt/web-hosting/options/cdn/).

#### Configurar as opções do CDN Security

Dirija-se ao separador `Multisite`{.action} do seu alojamento, clique em `...`{.action} à direita da entrada multisite e depois em `Alterar o CDN`{.action}. 

> [!primary]
>
> As opções apresentadas abaixo requerem a subscrição do [CDN security](https://www.ovhcloud.com/pt/web-hosting/options/cdn/) ou do [CDN Advanced](https://www.ovhcloud.com/pt/web-hosting/options/cdn/).
>

Dirija-se ao separador `Multisite`{.action} do seu alojamento, clique em `...`{.action} à direita da entrada multisite e depois `Alterar o CDN`{.action}.

- **Cross-Origin Resource Sharing (CORS)**: Indique na lista os domínios externos que serão autorizados a aceder aos recursos do seu website para os partilhar.

	Depois de ativar a função, clique em `Editar a lista de recursos externos`{.action} para adicionar os nomes de domínio autorizados a partilhar os seus recursos.

	![CDN](images/manage_CDNsecurity_01.png){.thumbnail}

	Depois de preencher a lista, clique em `Confirmar`{.action}.

> [!primary]
>
> Quando ativa a opção CORS sem especificar domínios na lista, isso significa que todos os nomes de domínio estão autorizados a utilizar os recursos do seu website.

- **HTTPS-redirect** : Proteja a globalidade do tráfego do seu website reencaminhando-o para o protocolo HTTPS de forma temporária ou permanente.

	Depois de ativar a função, clique no menu pendente para escolher entre o `Reencaminhamento permanente (301)` ou o `Reencaminhamento temporário (302)`.

	![CDN](images/manage_CDNsecurity_02.png){.thumbnail}

- **HTTP Strict Transport Security (HSTS)**: Imponha o acesso ao seu website unicamente em HTTPS. Desta forma, a sua solução web fica protegida contra os ataques de degradação (ou ataques de replicação).

	Uma vez a função ativada, determine o período de vida útil durante o qual o browser irá aplicar a função HSTS no seu website.

	![CDN](images/manage_CDNsecurity_03.png){.thumbnail}

> [!primary]
> 
> Quando ativar a função HSTS no seu website, ela irá forçar o protocolo HTTPS no seu browser, até ao fim do período dito "idade máxima", mesmo após a desativação da função no seu Espaço Cliente. No entanto, se a cache for esvaziada no browser que já efetuou uma visita ao seu website, este último aplicará o novo estado da função HSTS.

- **Mixed content**: Torne o carregamento de todo o conteúdo das suas páginas web de forma segura, participando assim numa experiência de utilizador ideal. Todos os recursos do seu site, internos e externos, devem estar disponíveis em HTTPS para evitar um erro de segurança do browser.

- **Firewall da aplicação**: A **W**eb **A**pplication **F**irewall (WAF) protege o seu site de ataques fraudulentos, tais como injeção de código, pedidos ilegítimos ou roubo de dados. Cobre falhas conhecidas na web ao filtrar os pedidos e pacotes transmitidos (a lista de falhas é administrada pela OVHcloud e é regularmente atualizada para alargar a sua proteção).

> [!warning]
>
> Para a instalação de um [módulo 1 clique da OVHcloud](../partilhado_guias_dos_modulos_dos_alojamentos_partilhados/), o WAF deve ser desativado para evitar que a instalação do módulo seja bloqueada.

> [!primary]
> 
> O WAF é inteiramente administrado pela OVHcloud, a lista das falhas é regularmente atualizada.

#### Configurar as opções do CDN Advanced

Dirija-se ao separador `Multisite`{.action} do seu alojamento, clique em `...`{.action} à direita da entrada multisite e depois em `Alterar o CDN`{.action}.

> [!primary]
>
>  As opções apresentadas abaixo requerem a subscrição do [CDN Advanced](https://www.ovhcloud.com/pt/web-hosting/options/cdn/)

- **Header HTTP de geolocalização**: Determine o país do visitante para personalizar a experiência proposta. O código do país é adicionado automaticamente no header de cada pedido para ser manipulado pelo seu servidor de origem. Os elementos de identificação no header apresentam-se sob as designações `Geo-Country-Code`, `Geo-Country-Name`, `Geo-Region`, `Geo-City`.

- **Prefetch**: Antecipe o carregamento do próximo recurso. Introduza-a automaticamente na cache CDN graças ao *header link* do seu website. Este mecanismo é utilizado principalmente para carregar CSS, JavaScript, imagens, favicons ou ainda apólices web que são exigidas pelo tema do website. 

	No exemplo abaixo, quando está na página de transações que exibe "Hello", um sub-pedido despoleta o pré-carregamento do recurso `/cache/style.css`.

	```
	<?php
	header("Link: </cache/style.css>; rel=prefetch");
	print 'Hello'
	?>
	```

- **Móvel redirect**:  Reencaminhe automaticamente os visitantes "Mobile" para um website otimizado. À escolha: reencaminhar sistematicamente para a raiz de outro website, ou conservar o URL substituindo apenas o domínio (ou subdomínio).

- **Purga avançada**: Personalize a sua purga escolhendo os elementos da cache a esvaziar: todo o site, pasta, URI, extensão de ficheiros ou através de uma expressão personalizada e regular. 

	No separador Multisite, clique no botão `...`{.action} à direita da entrada multisite e, a seguir, em `Purger o CDN`{.action}. 

	![CDN](images/manage_CDNadvanced_01.png){.thumbnail}

- **Query String**: Gestão da colocação em cache de conteúdo, baseada nos parâmetros (também designados por *Query String*) do pedido URL. Em função da sua configuração, escolha o comportamento da cache CDN:
	- *Desativado*: O recurso é colocado em cache com os seus parâmetros não triados. O que vai criar, por exemplo, 2 iterações na cache do CDN para 2 URL com os mesmos parâmetros numa ordem diferente.
	- *Ativado - Selecionar os parâmetros*: O recurso é colocado em cache fazendo a triagem dos seus parâmetros. Antes de armazenar o URL na cache do CDN, efetua-se uma triagem. Por exemplo, apenas uma iteração será guardada para 2 URL com os mesmos parâmetros numa ordem diferente.
	- *Ativado - Ignorar os parâmetros*: O recurso é colocado em cache sem nenhum parâmetro. A cache CDN não terá em conta os parâmetros introduzidos no URL, pelo que armazenará o URL sem os parâmetros na cache.

- **Prewarm**: Importe a cache permanente dos seus recursos primordiais. O CDN antecipa e refresca automaticamente a cache, sem esperar pelo pedido do utilizador. Esta função aplica-se apenas a conteúdos estáticos com um TTL superior a 0 e o recurso não deve exceder 1GB. Uma bitola indica-lhe o nível de consumo dos recursos em *Prewarm*, em função da lista dos seus URLs. O total dos recursos mobilizados por estes URLs não deve ultrapassar 1GB.

	Para definir a lista dos URLs que devem estar em *Prewarm*, clique em `Editar a lista dos URLs`{.action}.

	Com a ajuda dos campos `Protocolo`, `Nome de domínio` e `Caminho do recurso`, escreva um dos links para um recurso que deseja adicionar à função **Prewarm** e depois clique em `Adicionar`{.action}.

	Uma lista forma-se no quadro inferior, com o conjunto dos links que listou, pode eliminar o da sua escolha selecionando-o e clicando em `Retirar`{.action}.

	![CDN](images/manage_CDNadvanced_02.png){.thumbnail}

- **Cache rule**: Crie até 100 regras. Elas definem a frequência de atualização de cache para certos recursos precisos no seu site. Consulte o manual [na próxima etapa](#cacherulesadv) para obter mais informações.

Depois de escolher as opções, clique em `Aplicar configuração`{.action} e, a seguir, em `Validar a configuração`{.action} na janela seguinte.

##### **Criar uma regra de cache avançada** <a name="cacherulesadv"></a>

Para adicionar uma regra de cache num dos elementos do seu site, clique no separador `Multisite`{.action} do seu alojamento, clique em `...`{.action} à direita da entrada multisite e, a seguir, em `Configurar o CDN`{.action}.

Sob a menção **Regras de cache**, clique no botão `Adicionar uma regra`{.action}.

![CDN](images/manage_CDNadvanced_03.png){.thumbnail}


* **Nome da regra**: Atribua um nome à sua regra.
* **Tipo de recurso**: Escolha entre as opções seguintes:
    * **Extensão**: Introduza uma extensão de ficheiro válida sem que tenha de o aperfeiçoar, por exemplo: css
    * **Pasta**:  Introduza um caminho válido para uma das pastas presentes no diretório raiz do seu website.
    * **Expressão regular personalizada**: Aplica-se a todas as URI do seu website.
    * **URI**: Indique o subconjunto de recursos do seu website através do seu caminho no URL.
* **Recurso**: defina os atributos em função do tipo de recurso escolhido.
* **Duração**: Indique a duração de implementação de cache do recurso selecionado.
* **Classificação**:  Classifique as suas regras por ordem de execução (da mais baixa à mais elevada).

Depois de escolher, clique no botão `Criar a regra`{.action}.

As regras aparecem numa lista. Pode alterar uma regra clicando em `...`{.action} à direita desta e, a seguir, em `Alterar a regra`{.action}. Pode eliminá la clicando em `Eliminar a regra`{.action}.

![CDN](images/manage_CDNadvanced_04.png){.thumbnail}

Depois de configurar as regras e selecionar as opções, clique em `Aplicar configuração`{.action} e, a seguir, em `Validar a configuração`{.action} na janela seguinte.

### Visualizar as estatísticas do CDN

No separador `Multisite`{.action} do seu alojamento, abaixo da tabela, pode visualizar as estatísticas do seu CDN, indicando o número de pedidos por minuto medidos no mesmo.

![CDN](images/manage_CDNstat_01.png){.thumbnail}

### Gerir o seu CDN Business <a name="cdnbusiness"></a>

> [!primary]
>
> A opção CDN já está incluída nas ofertas de alojamento web Performance ou nas ofertas encomendadas antes de 19/11/2020.

#### Esvaziar a cache do CDN

É por vezes útil esvaziar a cache do CDN, nomeadamente sempre que modifica os seus ficheiros estáticos. Por exemplo, quando realiza uma nova versão do seu site. Neste caso, pode esvaziar a cache do CDN na sua totalidade.

Aceda à Área de [Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt) e selecione a opção `Web Cloud`{.action}. Clique em `Alojamentos`{.action} e selecione o plano correspondente. Clique em `...`{.action} à direita de "Opção CDN" e depois em `Limpar a cache`{.action}.

![CDN](images/manage_CDN_02.png){.thumbnail}

### Como colocar em cache os meus ficheiros no CDN?

**Com CMS**

Os principais CMS propõem numerosos plugins que permitem configurar a colocação em cache dos ficheiros estáticos para que estes sejam automaticamente tomados em conta pelo CDN. Outros permitem a configuração automática dos ficheiros estáticos, ativando a colocação em cache integrada no CMS. Para mais informações, consulte a documentação oficial do CMS que utiliza ou do editor do plugin.

**Sem CMS**

Mesmo que não utilize um CMS, poderá beneficiar da cache do CDN. Para isso, deve adicionar headers aos pedidos HTTP. Existem várias técnicas que permitem adicionar headers. Uma das mais simples é definir regras dentro de um ficheiro.htaccess, em função das extensões de ficheiros.

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

### Desativar a opção CDN para um website

Esta ação permite desativar o CDN para uma ou várias das suas entradas multisite, sem eliminar a opção CDN do seu alojamento Web.

Aceda à Área de [Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt) e selecione a opção `Web Cloud`{.action}. Clique em `Alojamentos`{.action} e selecione o plano correspondente. No separador `Multisite`{.action}, clique em `...`{.action} à direita da entrada multisite e depois em `Alterar`{.action}.

Desmarque a opção "Ativar o CDN", clique em `Seguinte`{.action} e depois em `Validar`{.action}.

![CDN](images/manage_CDN_03.png){.thumbnail}

### Eliminar a opção CDN no seu alojamento

Esta ação tem como objetivo eliminar a opção CDN para a totalidade do seu alojamento Web.

Aceda à Área de [Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt) e selecione a opção `Web Cloud`{.action}. Clique em `Alojamentos`{.action} e selecione o plano correspondente. Clique em `...`{.action} à direita de "Opção CDN" e depois em `Eliminar CDN`{.action}.

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

Fale com a nossa comunidade de utilizadores: <https://community.ovh.com/en/>.
