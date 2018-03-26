---
title: 'Partilhado: Guia de otimização das performances do seu site'
excerpt: 'Partilhado: Guia de otimização das performances do seu site'
id: '1396'
slug: partilhado_guia_de_otimizacao_das_performances_do_seu_site
legacy_guide_number: g1396
---


## Generalidades

## As questões que se colocam:
Em caso de lentidão, veja as questões a colocar:


- Desde quando existe lentidão?

Pode verificar se o problema está ligado a uma recente modificação no website, por exemplo, a adição de um novo plugin mal otimizado ou de um novo tema que faz muitas chamadas externas e que poderá tornar o seu website lento.

- Esta lentidão é aleatória ou permanente?

Sempre com o objetivo de resolver o problema de lentidão, seria interessante verificar a que momento do dia encontra o problema de lentidão de forma a identificar se corresponde a uma forte afluência ao site ou se outros trabalhos foram lançados no alojamento no mesmo momento.

- É na totalidade ou somente em parte do seu site?

Se o impacto se sente numa só página e não na totalidade do website, seria interessante analisar essa página em particular e verificar quais os pedidos ou scripts que estão a causar a lentidão.

- Obtém um erro? Se sim, de que tipo?

Verifique se os erros são gerados de forma a tentar verificar melhor a origem do problema. Pode encontrar diferentes tipos de erros bem como as principais causas para os mesmos.


![](images/img_1876.jpg){.thumbnail}


## Firebug
Uma ferramenta de análise que poderá ser interessante é o [Firebug](https://addons.mozilla.org/fr/firefox/addon/firebug/).

É um módulo para o browser Mozilla Firefox.

Este módulo permite, entre outros, analisar em detalhe os tempos de carregamento da sua página.

Para tal, deverá aceder ao separador "Rede".

No exemplo ao lado constatamos que a página demora 5,6 segundos a carregar. Graças ao Firebug, temos noção que uma das imagens carregas, "accueil.pn" demora 2,42 a ser carregada pois tem como tamanho 1MB. Poderemos otimizar a imagem para melhorar os tempos de acesso ao website.

![](images/img_1886.jpg){.thumbnail}


## Estatísticas do seu website

## Leitura dos dados
É agora possível consultar as estatísticas do seu website a partir do novo [espaço cliente](https://www.ovh.com/manager/web/login.html).


- Pedidos HTTP: Indica o número de hits médios no website. (Hit: Pedido de acesso a um ficheiro (qualquer que seja a sua natureza, texto, imagem, etc.) formado a partir de uma chamada de uma página web a partir do seu browser).

Os hits são classificados por código http: 2xx/3xx - 4xx - 5xx


- Tempos médios de resposta: Corresponde ao tempo médio de resposta das páginas. Diferenciamos as páginas do tipo Dynamic e Static.

- Ultrapassar o plafon de recursos: Este gráfico mostra-lhe a utilização feita pelos Workers PHP, o que pode sugerir uma possível mudança de oferta de alojamento. A utilização de PHP-FPM pode ajudá-lo a reduzir a utilização dos Workers PHP.

- Utilização do CPU: Indica a utilização do CPU do seu website. Pode levar a uma possível sobrecarga.

- Ligações de saída: Permite de consultar as ligações de saída para os servidores, por exemplo, em caso de hack o servidor poderá servir para atacar outros websites externos. É possível de verificar as chamadas externas realizadas pelos módulos do tipo Facebook, Twitter...etc. Pode ser o motivo pela qual o seu website está lento.



![](images/img_2105.jpg){.thumbnail}

- No caso visível na ecrã, o website foi hackeado a 11 de Julho, e no seguimento deste hack os tempos de ligação ao seu website e as ligações de saída aumentaram exponencialmente. No seguimento da correção da falha de segurança, os temps de resposta, as ligações de saída e a utilização do CPU voltaram ao normal.




## PHP-FPM
Adaptámos o PHP-FPM à nossa infraestrutura Web com o objetivo de acelerar as respostas PHP.

Nos nossos laboratórios de teste obtivemos performances até 7 vezes superiores ao anterior mecanismo.

Está disponível um guia que diz respeito à utilização do PHP-FPM:


- []({legacy}1175)


Algumas variáveis do servidor são modificáveis através da utilização do PHP-FPM:

|Variável|sem PHP-FPM|com PHP-FPM|
|max_execution_time|120s|300s|
|max_input_vars|2000|16000|
|memory_limit|128M|512M|



![](images/img_1890.jpg){.thumbnail}

- O ficheiro .ovhconfig funciona na raiz do alojamento ou numa pasta de nível 1 (ex : /www/) mas não nas pastas de nível 2 ou superior (ex : /www/test/ , /www/test/test2/).


Vejamos um gráfico de exemplo de utilização do PHP-FPM.

Podemos consultar que após a colocação dele, a carga CPU baixa radicalmente e as performances do website crescem.

![](images/img_2167.jpg){.thumbnail}


## Plugins

## Utilização do plugin de cache
A utilização dos CMS chama muitas "libraries", uma vez que uma só página pode tratar muitos elementos. Os browsers dos visitantes tem de carregar e ler a totalidade desses elementos.

Com o intuito de otimizar a utilização do seu CMS é aconselhado a utilização de plugins de ache que lhe permitem evitar a regeneração da totalidade do conteúdo do seu website a cada carregamento da página web.

Aconselhamos que procure por um plugin de cache nos sites comunitários do CMS que utiliza (Joomla! - PrestaShop - WordPress), com o objetivo de otimizar o seu website.

![](images/img_1892.jpg){.thumbnail}

## Desativação - eliminação de plugins inúteis
Sempre com o intuito de melhorar as performances do seu CMS, pode ser interessante a desativação, e quem saiba a completa eliminação, dos plugins não utilizados. Isto evitará que o browser carregue elementos inúteis.


## CDN
Com a finalidade de melhorar as performances de acesso aos seus sites, de download e de beneficiar de um referenciamento natual otimizado, é possível utilizar o CDN (Content Delivery Network) OVH para armazenar os seus ficheiros, as suas aplicações, os seus websites, mais perto dos utilizadores finais.

Desta forma melhora os tempos de resposta para os seus utilizadores finais por todo o mundo, uma vez que as partes estáticas do seu site serão carregadas diretamente pelo seu visitante no ponto de presença mais próximo dele.

Encontras as nossas ofertas comerciais que dizem respeito ao CDN no seguinte link:: [Oferta Comercial CDN](https://www.ovh.com/fr/cdn/)

![](images/img_1891.jpg){.thumbnail}


## SQL

## Porque devo otimizar uma base de dados?
Deve efetuá-lo para que a sua base de dados mantenha sempre a mesma performance.
É entendido por performance, o rápido carregamento dos conteúdos presentes na base de dados a cada pedido efetuado.

![](images/img_2002.jpg){.thumbnail}
Para tal, é necessária uma base estrutura e otimizada, e iremos ver como poderemos melhor otimizar a sua base.

## 1 Na base de dados

- Indexar a base de dados:


Para aumentar a rapidez das pesquisas aquando de um pedido, é necessário criar um index com os campos que são utilizados nos parâmetros WHERE.

Exemplo:

```
Faz regularmente uma pesquisa de uma pessoa ao pesquisar pela sua cidade. Deve indexar o campo "cidade" com o seguinte pedido:

ALTER TABLE `test` ADD INDEX ( `cidade` );
```



- Purgar a base de dados:


Alguns dos seus dados já não são consultados. Porque os devo arquivar? As suas tabelas estarão mais vazias e as pesquisas serão mais rápidas.

## 2. Nos seus scripts

- Limitação na apresentação:


Limitar a apresentação dos pedidos a um número restrito (por exemplo 10 por página) com a parte LIMIT no seu pedido SQL.


- Reagrupamento dos pedidos:


reagrupar os seus pedidos no inicio dos scripts da seguinte forma:


```
ligacao_base
pedido1
requete2
...
desligar_base

Apresentação ...
Tratamento dos dados
Ciclos ...
Apresentação ...
...
```



- Otimizar a mesma através da utilização da cache:


Se possui elementos que são recuperados da base de dados e não são alterados, coloque-os em cache.

Este tipo de truques leva a que os acessos à base de dados desçam drasticamente e aceleram o carregamento do seu site.

Pode igualmente realizar a cache de sessão.
Coloque os resultados dos pedidos em variáveis de sessão, e sempre que um pedido for idêntico não o execute, recupere as variáveis da sessão.


- Recuperar unicamente os dados úteis:


Nos seus pedidos SQL verifique que seleciona apenas os dados de que necessita, e que não se esqueceu das ligações entre as tabelas.

Exemplo:



```
(where table1.champs = table2.champs2)
```



- Evitar as opções que utilizam muitos recursos:


Evite utilizar "HAVING", por exemplo, o que atrasa os seus pedidos, da mesma forma que deve evitar utilizar "GROUP BY" sem que o mesmo seja estritamente necessário.

