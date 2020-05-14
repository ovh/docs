---
title: 'Otimizar o desempenho do seu website'
excerpt: 'Saiba como analisar a latência do seu website e como a melhorar'
id: '1396'
slug: partilhado_guia_de_otimizacao_das_performances_do_seu_site
legacy_guide_number: g1396
---

**Última atualização em 5 de fevereiro de 2020**

## Sumário
Este guia destina-se a clientes que pretendem melhorar o desempenho do seu website.
Este guia irá fornecer-lhe informações básicas sobre os pontos que podem afetar o desempenho dos websites.

**Saiba como melhorar o desempenho do seu website.**

> [!warning]
> Este caso de uso irá mostrar-lhe como utilizar uma ou mais soluções OVHcloud com ferramentas externas e irá descrever as ações a executar num contexto específico. Lembre-se de adaptar estas ações à sua situação. Em caso de dificuldade durante a execução destas ações, contacte um fornecedor especializado e/ou discuta a situação com a nossa comunidade em <https://community.ovh.com/en/>. A OVHcloud não lhe poderá prestar apoio técnico nesta questão.

## Requisitos
- um [plano de Alojamento Web OVHcloud](https://www.ovh.pt/alojamento-partilhado/){.external}
- um e-mail a confirmar a configuração do seu plano de Alojamento Web
- um [nome de domínio](https://www.ovh.pt/dominios/){.external} que pode ser utilizado para aceder ao seu website
- acesso à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}

## Instruções

### Passo 1: Definir o âmbito

#### Questões que deve colocar:
Se o seu website está lento, pode ser útil analisar as questões abaixo para o ajudar a restringir o âmbito da investigação.

1. **Quando é que o seu website começou a ficar lento?**
Desta forma, pode identificar se a latência é provocada por uma alteração recente no website, por exemplo, a adição de um novo plugin mal otimizado ou de um novo tema que possa estar a enviar muitas consultas externas e a tornar o seu website lento.
2. **Esta lentidão é pontual ou constante?**
Poderá ser útil verificar se existe um período do dia em que o website está lento, e depois identificar se é provocado por um pico no tráfego, ou por outras tarefas que começam a ser executadas no pacote de alojamento em simultâneo.
3. **Está a afetar todo o website ou apenas parte do mesmo?**
Se afeta apenas uma página web e não todo o website, é útil analisar essa página em particular e verificar quais os pedidos ou scripts que estão a causar a latência.
4. **Obtém uma página de erro? Se sim, que tipo de erro?**
Verifique se os erros são gerados para identificar a origem da latência. Para obter uma melhor visão geral dos erros que ocorrem no seu alojamento, consulte os logs.

A resposta a estas questões pode ajudá-lo a centrar-se em pontos específicos e a diagnosticar áreas de melhoria.

A utilização de um CMS, como o WordPress, PrestaShop, Drupal ou Joomla!, requer muitas bibliotecas para permitir que uma única página web possa gerir diversos elementos.
Os browsers têm de carregar e ler todos estes elementos.
Fornecemos recomendações sobre a oferta de alojamento web a utilizar para os CMS acima indicados na [página de produto](https://www.ovh.pt/alojamento-partilhado/){.external}.

Encontrará mais informações acerca do plano a escolher [nesta página](https://www.ovh.pt/alojamento-partilhado/qual_alojamento_partilhado_escolher.xml){.external}.


### Passo 2: Verificar a versão PHP
A utilização da versão php mais recente do seu site pode ter um impacto significativo no desempenho.
Para verificar se o seu website é compatível com a versão PHP mais recente, pode consultar [a documentação oficial do PHP](https://php.net/eol.php){.external}.

**PHP-FPM**

Adaptámos o PHP-FPM à nossa infraestrutura web, para acelerar as respostas do PHP e reduzir radicalmente a carga da CPU.
Os testes demonstraram que o desempenho é até **7 vezes mais rápido** comparado com o mecanismo anterior.

Algumas variáveis do servidor são alteradas através da utilização do PHP-FPM:

|Variável|sem PHP-FPM|com PHP-FPM|
| ------------- |:-------------:| -----:|
|max_execution_time|120s|300s|
|max_input_vars|2000|16000|
|memory_limit|128M|512M|

Pode obter informações sobre como atualizar o PHP [neste guia](../configurar_o_php_num_alojamento_web_alojamentos_2014_ovh/){.external}.

Para mudar para a utilização do PHP-FPM na versão _estável_ ou para obter detalhes sobre opções mais avançadas do seu alojamento web, consulte [este guia](../modificar_o_ambiente_de_execucao_do_meu_alojamento_web/){.external}.

O ficheiro _.ovhconfig_ funciona na raiz do pacote de alojamento ou num subdiretório de nível 1 (por ex.: _/www/_), mas não em diretórios de nível 2 ou superiores (por ex.: _/www/test/_ , _/www/test/test2/_)


### Passo 3: Verificar o conteúdo multimédia (imagens, vídeos...)
Ao aceder a um website, todos os conteúdos têm de ser descarregados pelo browser.

Isto pode ser especialmente problemático durante o acesso a um website não otimizado através de um dispositivo móvel.

A utilização de imagens e vídeos comprimidos é uma boa forma de reduzir o tempo de carregamento.
Podem ser utilizados vários algoritmos e ferramentas para otimizar o seu conteúdo. Os plugins também existem para os CMS mais comuns.
Cabe-lhe a si escolher os mais adequados às suas necessidades específicas.

Encontrará mais informações sobre este tópico no Passo 5 abaixo.

### Passo 4: Otimizar os seus scripts
Correlacione os gráficos da utilização de recursos do seu alojamento (mais informações abaixo) para encontrar a origem dos atrasos e consultar os logs nas datas destes picos.

Pode aceder aos seus logs, estatísticas e gráficos diretamente a partir da [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}.

Como aceder aos logs:
\- Clique no domínio na secção `Alojamento`{.action},
\- Clique no separador `Mais +`{.action} e, de seguida, selecione `Estatísticas e logs`{.action}.
\- De seguida, clique nas hiperligações apresentadas para aceder às _Estatísticas de visitas do website_ ou aos _Logs_.
![logs](images/logs_highlighted.png){.thumbnail}


Como aceder aos gráficos:
\- Clique no domínio da secção `Alojamento`{.action},
\- Na secção `Informação geral`{.action}, desloque-se para baixo até à parte inferior da página, onde pode consultar os gráficos da utilização do seu alojamento.
\- Nessa secção, pode selecionar o tipo de informação e o período de tempo para a visualização dos dados.
![gráficos](images/graphs_highlighted.png){.thumbnail}

Quais são os diferentes tipos de informação que podem ser visualizados?

- **Pedidos HTTP**: Indicam o número médio de hits do website. Os hits são classificados pelo estado HTTP 2xx/3xx/4xx/5xx.

- **Tempo médio de resposta**: Corresponde ao tempo médio de resposta da página. É feita uma distinção ente páginas dinâmicas e estáticas.

- **Superação do limite de recursos**: Este gráfico mostra a utilização feita pelos workers PHP, para o orientar para um pacote de alojamento web diferente, se necessário. A utilização de PHP-FPM pode ajudá-lo a reduzir a utilização dos workers PHP.

- **Utilização da CPU**: Indica a utilização da CPU do seu website. Pode ajudar a detetar uma possível sobrecarga da CPU.

- **Ligações de saída**: Permite-lhe visualizar o pedido TCP enviado pelo servidor, por exemplo, se o seu website for acedido de modo ilícito (<i>hacking</i>), o servidor poderá ser utilizado para atacar outros websites externos. Pode ainda verificar as chamadas externas realizadas por módulos como o Facebook, Twitter, etc. A redução do número de pedidos TCP enviados é uma boa forma de reduzir o tempo de carregamento, uma vez que se o servidor ao qual está a solicitar o conteúdo está a demorar a responder, o atraso no carregamento do seu website irá aumentar.

- **Comandos FTP**: Apresenta os diferentes comandos FTP que foram utilizados no alojamento. Por exemplo, as tentativas de início de sessão efetuadas com e sem sucesso, descarregar, carregar e eliminar ficheiros...

As duas categorias seguintes são apenas apresentadas se estiver atualmente a utilizar uma base de dados na sua oferta de alojamento.
Não se esqueça de selecionar o nome da sua base de dados e o período desejado.

- **Tempo de resposta SQL**: Apresenta o tempo de resposta das consultas.

- **Pedidos SQL**: Apresenta o número de pedidos.

### Passo 5: Analisar os pedidos de rede
Uma ferramenta útil para análise é a [Network Monitor](https://developer.mozilla.org/en-US/docs/Tools/Network_Monitor){.external} que está diretamente integrada no browser Mozilla Firefox e permite analisar em detalhe o tempo de carregamento de uma página.

Esta ferramenta permite analisar quais os elementos do seu site mais lentos/pesados a carregar.
Pode ajudar a restringir quais as imagens e os conteúdos que estão a aumentar o tempo de carregamento do website e a dar prioridade aos locais onde as otimizações devem ser feitas.

Pode aceder a esta ferramenta premindo a tecla F12 do seu teclado (via Firefox ou Chrome).

A redução do número de pedidos TCP enviados é também uma boa forma de reduzir o tempo de carregamento, uma vez que se o servidor ao qual está a solicitar o conteúdo está a demorar a responder, o atraso no carregamento do seu website irá aumentar também.

**CDN**

Para melhorar o acesso ao website, o descarregamento no website e obter uma classificação naturalmente otimizada, pode utilizar a OVHcloud CDN (Content Delivery Network) da OVHcloud para armazenar os seus ficheiros, aplicações e websites mais próximo dos seus utilizadores finais.

Por conseguinte, irá melhorar os tempos de resposta dos visitantes em todo o mundo, porque as partes estáticas do seu website serão descarregadas diretamente pelo visitante no ponto de presença mais próximo do mesmo.

Conheça a nossa [solução CDN aqui](https://www.ovh.pt/cdn/){.external}.


### Passo 6: Analisar o sistema de gestão de conteúdos (CMS) e os plugins utilizados

_Este passo é opcional se não utilizar um CMS._

Para garantir a adaptação da sua oferta de alojamento às necessidades do seu CMS, pode encontrar uma comparação dos nossos serviços na [página de produto](https://www.ovh.pt/alojamento-partilhado/){.external}.

- **Utilização de um plugin de cache:** A utilização de um CMS requer várias bibliotecas para que uma única página web consiga gerir uma grande quantidade de elementos. Para otimizar o seu CMS, deve utilizar diversos plugins de cache para evitar regenerar todo o conteúdo do seu website sempre que uma página é carregada. Recomendamos que procure plugins de cache em websites da comunidade relacionados com o CMS que utiliza (Joomla! - PrestaShop - WordPress) para evitar regenerar todo o conteúdo do seu website sempre que carrega a página web.

- **Desativação de plugins não utilizados:** Pode ser uma boa ideia desativar ou até mesmo eliminar plugins não utilizados para melhorar o desempenho do website. Isto evitará que elementos inúteis sejam descarregados.

### Passo 7: Otimizar a sua base de dados

_Este passo é opcional se não estiver a utilizar uma base de dados._
Pode aceder à sua base de dados utilizando o PHPMyAdmin; as instruções sobre como utilizar o PHPMyAdmin sairiam do âmbito deste guia pelo que não serão detalhadas em maior pormenor.
No entanto, existem vários guias externos sobre esta matéria.

**Como aceder à base de dados via phpMyAdmin:** Para aceder à sua base de dados via phpMyAdmin, siga o procedimento disponibilizado na [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}:

- Clique no seu domínio na secção `Alojamento`{.action}.
- Aceda ao separador `Base de dados`{.action}.
- Clique nos 3 pontos`...`{.action} à direita da sua base de dados para aceder a phpMyAdmin.

**Porquê otimizar uma base de dados?** É necessário efetuar a manutenção da base de dados para garantir o seu bom desempenho. Por outras palavras, a informação incluída na base de dados deve ser devolvida logo que possível ao script que a solicitou. Para o efeito, a base de dados deve estar bem estruturada e otimizada. Vamos analisar como pode otimizar da melhor forma a sua base de dados.

#### Na base de dados

- **Indexar a base de dados:** Para aumentar a velocidade das pesquisas durante uma consulta, deve indexar os campos que são utilizados nas cláusulas WHERE. Exemplo: Faz regularmente a pesquisa de pessoas pela localidade. Deve indexar o campo “localidade” com o seguinte pedido:

```
ALTER TABLE `test` ADD INDEX (`localidade`);
```

- **Limpar a base de dados:** Se existem dados que já não consulta, porque não os arquiva? As suas tabelas estarão mais vazias e as consultas à base de dados serão efetuadas mais rapidamente.

#### Nos seus scripts

- **Limitar os resultados:** Limita o número de resultados apresentados (por exemplo, a 10 por página) com a parte LIMIT da sua consulta SQL.


- **Agrupar os seus pedidos:** Agrupe os seus pedidos no início do script da seguinte forma:

```
open_connection
request1
request2
...
close_connection

Display...
Treat data
Loop through data...
Display...
...
```

Fechar a ligação após o pedido permite disponibilizar de imediato o servidor da base de dados para outros pedidos (e evita a produção do erro "O utilizador já tem mais de 'max_ligações_utilizador' ligações ativas").

#### Otimize a sua base de dados ao utilizar a cache

- Se existirem elementos na sua base de dados que não mudam, coloque-os em cache. Se seguir esta sugestão, irá diminuir drasticamente a necessidade de acesso à sua base de dados e acelerar o tempo de carregamento do seu site.

- Pode igualmente realizar a cache de sessão, o que significa que coloca os resultados das consultas numa variável de sessão. Desta forma, sempre que uma consulta seja idêntica não precisa de a executar, basta recuperar as variáveis da sessão.

- Recuperar apenas os dados utilizados: Nos seus pedidos SQL, certifique-se de que seleciona apenas os dados de que necessita e que não se esqueceu das hiperligações entre as tabelas.

Exemplo:

```
(where table1.champs = table2.champs2)
```

#### Evitar as opções que utilizam muitos recursos:
Evite utilizar a cláusula “HAVING”, por exemplo, que atrasa as suas consultas. Deve ainda evitar a utilização de “GROUP BY”, a menos que seja estritamente necessário.


#### SQL Privado
Se, apesar de todas as alterações e otimizações realizadas, a base de dados estiver lenta, ou se for efetuado um grande número de consultas na base de dados, é aconselhável mudar para a nossa oferta de SQL Privado para ter mais recursos disponíveis.
Encontrará uma comparação das nossas ofertas na [página de produto](https://www.ovh.pt/alojamento-partilhado/opcoes-sql.xml){.external}.

## Vá mais longe

[Alterar a configuração de um plano de alojamento web](../modificar_o_ambiente_de_execucao_do_meu_alojamento_web/){.external}

[Gestão de uma base de dados num pacote de alojamento web](../gestao-de-uma-base-de-dados-a-partir-de-um-alojamento-partilhado-ovh/){.external}

[Iniciar a utilização do serviço SQL Privado](../sql-privado-primeira-utilizacao/){.external}

Junte-se à nossa comunidade de utilizadores em <https://community.ovh.com/en/>.