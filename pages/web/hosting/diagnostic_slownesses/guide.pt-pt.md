---
title: "O meu site é lento. O que fazer?" 
excerpt: "Identifique a origem da lentidão do seu website e descubra como resolver esta situação"
slug: slow-website-fix
section: Diagnóstico
order: 01
---

**Última atualização: 17/11/2022**
 
> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

## Objetivo

Um abrandamento no seu site resulta de um carregamento excessivamente longo para apresentar o conjunto ou certas partes do seu site. 

Se o carregamento for demasiado longo, o pedido efetuado a partir do seu browser pode atingir o tempo máximo de execução autorizado pelo servidor onde se encontra o seu alojamento. Neste caso, o servidor devolve o código "**504 Gateway Timeout**" para assinalar ao visitante que a variável "max_execution_time" foi atingida, o que impede igualmente a execução do pedido pedido pedido.

A lentidão tem principalmente duas origens:

- uma sobrecarga ao nível da infraestrutura partilhada na qual está alojado o seu site;
- um pedido demasiado longo ou demasiado pesado para ser executado na infraestrutura partilhada onde está alojado o seu site. 

A grande maioria das lentilhas provém, na realidade, do website e não do seu alojamento partilhado. Criámos este guia para o ajudar melhor nesta situação.

Em casos raros, os ecrãs também podem ser provocados pelo seu fornecedor de acesso à Internet ou por um débito de ligação à Internet demasiado reduzido. Verifique a sua conectividade de rede **antes** de continuar os seus diagnósticos.

**Saiba como diagnosticar a origem da lentidão do seu website e agir em conformidade.**

> [!primary]
>
> **Após a realização do conjunto dos diagnósticos indicados neste guia**, caso se verifique que o abrandamento provém da nossa infraestrutura de alojamento, recordamos que esta é partilhada entre vários utilizadores.
>
> Os utilizadores partilham os recursos da infraestrutura de alojamento partilhado para fazer funcionar os seus websites. Se um deles solicitar a infraestrutura partilhada, isso pode ter consequências para os outros alojamentos presentes nessa mesma infraestrutura.
>
> As nossas ofertas de alojamento partilhado não dispõem de "Service Level Agreement" (SLA). 
>
> Se precisar de um serviço com uma taxa de disponibilidade SLA superior a 99%, sugerimos que considere a utilização de um [Servidor Privado Virtual (VPS)](https://www.ovhcloud.com/pt/vps/) ou de um [Servidor Dedicado](https://www.ovhcloud.com/pt/bare-metal/).
>
> Além disso, as performances da infraestrutura de alojamento partilhado OVHcloud são monitorizadas 24 horas por dia e 7 dias por semana. Isto de forma a garantir-lhe uma alta taxa de disponibilidade e, se for caso disso, um restabelecimento rápido dos seus serviços em caso de sobrecarga comprovada.*
>

## Requisitos

- Dispor de um site alojado numa das nossas ofertas de [alojamento partilhado OVHcloud](https://www.ovhcloud.com/pt/web-hosting/)
- Ter acesso à Área de Cliente OVHcloud (https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt)

## Instruções

> [!warning]
>
> A OVHcloud disponibiliza serviços cuja configuração, gestão e responsabilidade lhe incumbem. Assim, deverá certificar-se de que estes funcionam corretamente.
> 
> Este manual fornece as instruções necessárias para realizar as operações mais habituais. No entanto, se encontrar dificuldades, recomendamos que recorra a um [fornecedor especializado](https://partner.ovhcloud.com/pt/). De facto, não poderemos fornecer-lhe assistência **a partir do momento em que a infraestrutura em que o seu alojamento partilhado está presente não esteja em causa**. Para mais informações, aceda à secção ["Quer saber mais?"](#go-further) deste manual.
>

> [!success]
>
> Recomendamos que registe os resultados de diagnóstico à medida que avançamos neste manual. De facto, estes resultados revelar-se-ão muito úteis para a resolução da sua situação, independentemente da origem da lentidão.
>

### Compreender a noção de Time To First Byte (TTFB)

O *Time To First Byte* (TTFB) representa a duração que o seu alojamento web vai colocar para reenviar o primeiro byte de dados ao seu browser, no seguimento de um pedido efetuado por este último para apresentar o seu website.

Quando não há sobrecarga ao nível da infraestrutura de alojamento partilhado e o seu website está otimizado ao máximo, o TTFB não ultrapassa os 800ms.

**Um TTFB elevado não significa automaticamente que as suas lentidões provenham do seu alojamento partilhado**

De facto, para os Content Managment System (CMS) como WordPress, Joomla!, PrestaShop ou Drupal, a página que efetua a partir do seu browser Internet pode gerar pedidos complementares internamente no seu alojamento. O seu alojamento não devolverá nada ao seu browser enquanto estes pedidos internos não forem concluídos.

> **Exemplo**
>
> A partir do seu browser, pode solicitar que apresente a página inicial do seu website. O pedido vai ligar de forma padrão ao ficheiro "**index.php**" do seu website.
>
> Uma vez que o pedido chega ao ficheiro "**index.php**", este é executado pelo servidor web do seu alojamento partilhado. 
>
>Na sua execução, o ficheiro "**index.php**" deve recuperar as informações entre os outros ficheiros que compõem o seu website, ou mesmo os elementos presentes na sua base de dados. 
>
>Cada um destes pedidos de informações gera um pedido interno sobre o seu serviço de alojamento. 
>
>O ficheiro "**index.php**" irá aguardar o resultado de todos os pedidos internos que solicitou **antes** que devolva o primeiro byte de dados ao seu browser.
>
>Se o seu ficheiro "**index.php**" gera pedidos "lentos" ou pesados de executar, o TTFB será elevado e o seu site levará vários segundos a aparecer. As performances da sua oferta de alojamento não estão em causa.

Ferramentas de diagnóstico online permitem-lhe recuperar o TTFB do seu alojamento. No entanto, a maior parte deles funcionam como browsers e os seus resultados devem ser relativizados.<br>
Com efeito, estas ferramentas não estão em condições de ter em conta os pedidos internos solicitados pelo ficheiro que ligou através do seu browser, como no exemplo acima com o ficheiro "**index.php**".

### Etapa 1 - determine se as lentidões provêm do alojamento ou do seu website

Esta primeira etapa permite-lhe determinar se os atrasos provêm:

- do seu site, devido ao seu funcionamento interno;
- ou da infraestrutura de alojamento partilhado onde o seu site se encontra.

Todos os diagnósticos da etapa 1 devem ser realizados **sem exceção** para determinar se as lentidões provêm dos seus serviços de alojamento web ou do website que aloja.

#### 1.1 - Verifique o estado dos seus serviços OVHcloud

Para ter a certeza de que os seus serviços (alojamento partilhado **e** base de dados) não são objeto de manutenção ou incidente, recupere as informações sobre o cluster e file do seu alojamento partilhado, assim como as informações gerais relativas à sua base de dados. De seguida, poderá verificar o seu estado em [status.ovhcloud.com](https://web-cloud.status-ovhcloud.com/).

Para conhecer o cluster e filer onde se encontra o alojamento partilhado, aceda ao seu [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt), vá à secção `Web Cloud`{.action}, clique em `Alojamentos`{.action} e escolha o alojamento web em causa. No separador `Information gerais`{.action}, localize o `datacenter` do seu alojamento partilhado bem como o `filer` onde está.

![Recuperar Filer](images/DropFilerCluster1.png){.thumbnail}

A seguir, clique no separador ``Multisites`{.action} para obter o número do cluster onde está o seu alojamento partilhado.

![Recuperar o cluster](images/DropFilerCluster2.png){.thumbnail}

> [!success]
>
> Se um incidente ou uma manutenção são declarados na infraestrutura onde se encontra o seu alojamento partilhado, siga-os até à sua resolução pelos nossos administradores. **Não é necessário realizar outras ações ao seu nível**.
>
> Pode inscrever-se com o seu endereço de e-mail na declaração de incidente ou de manutenção a fim de ser notificado por e-mail do progresso das operações.
>
> Uma vez o estado do incidente ou da manutenção assinalado como **resolvido**, a estabilização da carga acumulada pode requerer um prazo máximo de **3 horas** após a notificação de resolução para se recuperar completamente.
>

Se nenhum incidente ou nenhuma manutenção forem declarados, prossiga os seus diagnósticos.

#### 1.2 - Testar o site em vários aparelhos

Teste o seu website a partir de outro dispositivo/computador e a partir de outro ponto de acesso à Internet. Esvaziando a cache do seu browser sempre que tentar fazê-lo, de forma a que o seu site seja diretamente carregado a partir do alojamento web.

#### 1.3 - Teste o alojamento com um ficheiro independente do seu website

Coloque na raiz do seu website no [espaço de armazenamento FTP do seu alojamento partilhado](https://docs.ovh.com/pt/hosting/aceder-espaco-de-armazenamento-ftp-alojamento-web/) um ficheiro que denominará `phpinfo.php`.

Neste ficheiro, insira o seguinte código:

```bash
<?php
phpinfo();
?>
```

> [!warning]
>
> Em certos casos, os ficheiros "**.htaccess**" presentes nos diretórios/dossiers situados a montante ou ao mesmo nível que o local onde colocou o seu ficheiro "**phpinfo.php**" podem influir na visualização num browser do "**phpinfo.php**". 
>
> As manipulações num ficheiro "**.htaccess**" podem ter consequências na visualização do seu site. Recorra a um [fornecedor especializado](https://partner.ovhcloud.com/pt/) se sentir dificuldades em realizar o seguinte.
>
> Se não for apresentada e **unicamente para os utilizadores experientes**, renomeie os seus ficheiros "**.htaccess**" em "**.htaccess_OLD**" para que o servidor não os execute durante o seu teste. Dê-lhes o nome correto quando o diagnóstico for efetuado.
>

**Exemplo** se o domínio que permite o acesso ao seu website for "domain.tld" e o ficheiro "**phpinfo.php**" estiver na raiz do seu website, este será acessível graças ao seguinte URL: `http://domain.tld/phpinfo.php` (ou `https://domain.tld/phpinfo.php`).

> [!primary]
>
> Se a chamada do ficheiro "**phpinfo.php**" apresentar **instantaneamente** um quadro de configuração, isto significa que os atrasos não provêm do alojamento partilhado onde se encontra o seu website. Caso contrário, o ficheiro aparecerá tão lentamente como as outras páginas. 
>
> Por outras palavras, se a lentidão se verifica apenas numa parte das páginas ou do conteúdo do seu website, isso significa que o alojamento partilhado **não é a causa dos atrasos** encontrados no seu website.
>

#### 1.4 - Teste a conectividade da sua base de dados:

Aceda à sua base de dados seguindo *** o etapa 3** do nosso manual sobre a [criação de uma base de dados partilhada](https://docs.ovh.com/pt/hosting/criar-base-de-dados/).

Se utiliza uma base de dados numa oferta **CloudDB**, consulte o nosso guia sobre [a ligação à sua base de dados presente numa oferta Cloud DB](https://docs.ovh.com/pt/clouddb/conexao-base-de-dados-servidor-bdd/).

Se a ligação for bem-sucedida, poderá aceder à seguinte interface:

![PHPMyAdmin](images/pma.png){.thumbnail}

> [!warning]
>
> Se encontrar um erro, consulte o nosso manual sobre os [erros comuns encontrados com uma base de dados](https://docs.ovh.com/pt/hosting/erros-frequentes-bases-de-dados/). De seguida, altere a sua situação usando o guia acima para tentar novamente aceder à base de dados.
>

#### 1.5 - Interpretação dos diagnósticos efetuados

**Caso n°1**

As seguintes afirmações aplicam-se **todas** à sua situação:

- pelo menos uma página, um script ou um ficheiro (incluindo o ficheiro "**phpinfo.php**") encarregou-se rapidamente dos testes da etapa 1;
- a ligação à base de dados foi efetuada corretamente durante os testes do passo 1.

> Isto significa que a lentidão que encontra provém diretamente dos scripts que compõem o seu website. Pode passar diretamente para [etapa 2](#step2) para seguir os conselhos de otimização para resolver a sua situação.

**Caso n°2**

As seguintes afirmações aplicam-se **todas** à sua situação:

- **nenhum incidente ou manutenção** foram declarados ou declarados como **resols** há menos de três horas para os seus serviços de alojamento web no nosso site [status-ovhcloud.com](https://web-cloud.status-ovhcloud.com/) ;
- o **caso n°1** detalhado acima não corresponde à sua configuração.

> Serão necessárias investigações no lado da OVHcloud. Contacte os nossos serviços de assistência sobre as soluções Web, para que possam confirmar consigo a origem dos abrandamentos que encontra.

### Etapa 2 - identifique a(s) fonte(s) que gera(m) a lentidão do seu website <a name="step2"></a>

Neste momento, sabe que as lentidões são geradas pelas páginas/scripts/ficheiros que compõem o seu website.

> [!warning]
>
> Se encontrar dificuldades para realizar as ações que se seguem, pode contactar um dos nossos [prestadores especializados](https://partner.ovhcloud.com/pt/). A OVHcloud não prestará assistência ao desenvolvimento e/ou otimização do conteúdo do seu website.
>

Encontre aqui as ações a realizar para identificar a(s) fonte(s) da(s) lentidão e otimizar o seu website.

#### 2.1 - Verifique a configuração do seu alojamento web

Verifique o motor PHP, a versão PHP e o ambiente de execução utilizados no seu alojamento web, através do nosso guia sobre a [configuração do seu alojamento web](https://docs.ovh.com/pt/hosting/modificar_o_ambiente_de_execucao_do_meu_alojamento_web/).

Se utiliza no seu alojamento web uma versão de PHP obsoleta, o motor "**PHP CGI**" e/ou o ambiente "**legacy**" e **se o seu website for compatível**, dê preferência à utilização do motor "**PHP**" (PHP FPM), o ambiente "**stable**" ou "**stable64**" com a versão de PHP mais recente possível.

Para comparar as versões de PHP disponíveis em função do ambiente de execução utilizado, consulte ***a etapa 2** do guia sobre a [configuração da versão PHP no seu alojamento](https://docs.ovh.com/pt/hosting/configurar_o_php_num_alojamento_web_alojamentos_2014_ovh/).

Utilizar uma versão de PHP recente, o ambiente de execução "**stable**" ou "**stable64**" com o motor "**PHP**" (PHP FPM) torna o seu site muito mais fluido e rápido. A título indicativo, o motor "**PHP**" (PHP FPM) pode ter um desempenho 50 vezes superior ao do motor "**PHP CGI**" para executar as suas tarefas.

#### 2.2 - Analise as ligações de saída / ligações TCP realizadas pelo seu alojamento web

As ligações de saída são muito exigentes em termos de recursos. Quando estas ligações são numerosas, quando não são executadas corretamente ou quando permanecem ativas durante demasiado tempo, monopolizam tantos recursos ao nível do seu alojamento web que já não são suficientes para fazer funcionar normalmente o resto do seu website. 

Isto traduz - se em atrasos ou mesmo em códigos "504 gateway timeout".

Para analisar as ligações de saída do seu alojamento, consulte os logs **OUT** deste último. Pode consultar o nosso manual sobre [a consulta dos logs do seu alojamento](https://docs.ovh.com/pt/hosting/partilhado_consultar_as_estatisticas_e_os_logs_do_meu_site/).

Se verificar que existem muitas ligações de saída no seu alojamento, compare os seus logs **OUT** com os seus logs **WEB** através do seu horário. Isto permitir-lhe-á identificar o(s) script(s) responsável(eis) por esta situação.

Se utilizar um Content Management System (CMS) como WordPress, Joomla!, PrestaShop ou Drupal, identifique o(s) plugin(s) e/ou o tema que gera este fluxo de ligações de saída.

#### 2.3 - Analise o fluxo de pedidos HTTP efetuado para o seu alojamento web:

Para realizar esta ação, consulte os logs **WEB** do seu alojamento web através do nosso manual sobre [como consultar os logs do seu alojamento](https://docs.ovh.com/pt/hosting/partilhado_consultar_as_estatisticas_e_os_logs_do_meu_site/).

Os pedidos mais exigentes em termos de recursos são os pedidos HTTP de tipo **POST** e os de tipo **PUT**. Estas devem efetuar, respetivamente, alterações e inserções.

Os pedidos HTTP de tipo **GET** apenas recuperam elementos presentes no alojamento para os apresentar no seu browser Internet. Em geral, são pouco exigentes em termos de recursos. No entanto, podem gerar descidas se várias centenas delas forem pedidas por segundo durante um intervalo de vários minutos.

Se encontrar nos seus logs uma das seguintes situações:

- os pedidos de tipo **POST** ou **PUT** são efetuados várias vezes por minuto e de forma permanente;
- os pedidos **POST** ou **PUT** são executados várias vezes por minuto num mesmo ficheiro.

Identifique e otimize o script/ficheiro em causa para diminuir o fluxo de pedidos HTTP.

Com efeito, quanto menos o número de pedidos for elevado, menos os recursos atribuídos ao seu alojamento partilhado serão solicitados.

> [!success]
>
> Para identificar os elementos longos a carregar numa das páginas do seu website, pode, por exemplo, efetuar uma análise de rede com a ajuda do browser **Firefox**. 
>
> Para isso, carregue na tecla `F12` quando estiver no seu browser Firefox e selecione o separador `rede`. Carregue a sua página web com os teclados `Ctrl + Maj + R` para que a ferramenta lhe mostrar os pedidos executados para carregar a sua página. Identifique os elementos mais longos a carregar para depois os otimizar.
>
>![Análise de rede Firefox](images/F12.png){.thumbnail}
>

Para diminuir o fluxo de pedidos a cada um dos carregamentos das suas páginas, pode também implementar um Content Delivery Network (CDN). que permitirá colocar em cache o conteúdo estático do seu website. O seu alojamento web será menos solicitado e disporá de mais recursos para tratar o resto dos pedidos que não podem ser colocados em cache.

> [!primary]
>
> A OVHcloud oferece várias [ofertas CDN](https://www.ovhcloud.com/pt/web-hosting/options/). Se pretender utilizá-los ou ativar um para o seu alojamento web, aceda à Área de Cliente OVHcloud (https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt) e consulte o nosso guia sobre [utilização do CDN OVHcloud](https://docs.ovh.com/pt/hosting/guia_de_utilizacao_do_acelerador_geocache_num_alojamento_web/).
>

#### 2.4 - otimize a sua base de dados

> [!warning]
>
> As ações que realiza na sua base de dados podem ter consequências irreversíveis se não forem realizadas de forma metódica e correta. Recorra a um [fornecedor especializado](https://partner.ovhcloud.com/pt/) se não tem a certeza das ações a realizar. 
>

Verifique se um número consequente de pedidos é efetuado para a sua base de dados.<br>
Com efeito, esta situação pode gerar uma sobrecarga e conduzir a atrasos, ou mesmo a códigos "504 Gateway Timeout".

Verifique também o tamanho das suas tabelas presentes na sua base de dados.<br>
Se uma mesa é chamada regularmente e esta é volumosa, o carregamento desta mesa pode fazer-se mais lentamente e gerar pedidos lentos.<br>
A acumulação destes pedidos lentos pode provocar um atraso no acesso ao website, ou mesmo um código "504 Gateway Timeout".

Se tem tabelas volumosas ou fluxos de pedidos em bases de dados consequentes, otimize as suas tabelas e implemente soluções que permitem diminuir os fluxos de pedidos para a sua base de dados.

Se verificar que existem dados não utilizados ou obsoletos na sua base de dados, limpe-a para melhorar o seu desempenho no dia a dia.

#### 2.5 - Otimize as suas imagens

Se, por exemplo, uma imagem estiver presente no seu site em resolução "1000x2000" e esta aparecer em 100x200 píxeis na página do seu website, isso gera um consumo de recursos no lado do alojamento que pode ser otimizado.

De facto, o servidor deverá realizar uma operação de redimensionamento da imagem e apresentá-la ao tamanho solicitado no website.

Se o seu site contém muitas imagens, isso pode representar um consumo de recursos não negligenciável ao nível dos recursos atribuídos ao seu alojamento.

Redimensione todas as suas imagens para minimizar o consumo de recursos.

#### 2.6 - Otimize o resto do seu website

Consulte o nosso guia sobre a [otimização das performances para o seu website](https://docs.ovh.com/pt/hosting/partilhado_guia_de_otimizacao_das_performances_do_seu_site/).

Pode encontrar pistas de otimização para o seu site analisando-o em [gtmetrix.com](https://gtmetrix.com){.external} (este site não está associado à OVHcloud).

> [!success]
>
> Independentemente da lentidão, quanto mais otimizado for o seu website, mais otimizado será o seu referenciamento natural nos motores de busca.
>

### Conclusão

Se o seu alojamento web e a sua base de dados ***não estiverem em causa** e o seu website continuar a ser lento, apesar da realização de **todas as etapas** deste guia, isso provavelmente significa que a oferta que utiliza para alojar o seu website não é ou deixou de ser adaptada às suas necessidades. 

Pode considerar uma [oferta de alojamento partilhado](https://www.ovhcloud.com/pt/web-hosting/) superior ou uma infraestrutura dedicada como um [Servidor Privado Virtual (VPS)](https://www.ovhcloud.com/pt/vps/) ou um [Servidor Dedicado](https://www.ovhcloud.com/pt/bare-metal/). 

## Quer saber mais? <a name="go-further"></a>

Para serviços especializados (referenciamento, desenvolvimento, etc), contacte os [parceiros OVHcloud](https://partner.ovhcloud.com/pt/).

Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](https://www.ovhcloud.com/pt/support-levels/).

Fale com nossa comunidade de utilizadores: <https://community.ovh.com/en/>. 
