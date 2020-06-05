---
title: 'Especificidades técnicas relacionadas com os alojamentos partilhados'
slug: especificidades-tecnicas-alojamentos-partilhados
excerpt: 'Neste guia encontrará as diferentes informações e especificidades técnicas relacionadas com os alojamentos partilhados'
section: 'Configuração do alojamento'
order: 4
---

**Última atualização: 27/05/2020**

## Objetivo

**Este guia trata dos pormenores técnicos da infraestrutura dos alojamentos web OVHcloud, em função das dúvidas mais frequentes.**

## Requisitos

- Ter um serviço de [alojamento web OVH](https://www.ovh.pt/alojamento-partilhado/){.external} compatível.
- Ter acesso à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}.

## Instruções

> [!warning]
>
> A responsabilidade sobre a configuração e a gestão dos serviços que a OVHcloud disponibiliza recai sobre o utilizador. Assim, deverá certificar-se de que estes funcionam corretamente.
> 
> Este manual fornece as instruções necessárias para realizar as operações mais habituais. No entanto, se encontrar dificuldades, recomendamos que recorra a um prestador de serviços especializado e/ou que contacte o editor do serviço. Não poderemos proporcionar-lhe assistência técnica. Para mais informações, aceda à secção «Quer saber mais?» deste guia.
> 

### FTP

- Erro de acesso («Erro de autenticação de login 530»): Assegure-se de que as informações de acesso ao seu espaço FTP estão corretas. Para isso, verifique-as através da [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}, no separador `FTP - SSH`. As palavras-passe nunca são exibidas, mas podem ser alteradas. Consulte os nossos [guias FTP](https://docs.ovh.com/pt/hosting/aceder-espaco-de-armazenamento-ftp-alojamento-web/).

- As conexões FTP devem utilizar o **modo passivo**. Certifique-se de que o script ou o cliente FTP está ajustado em conformidade.

- De modo a conectar-se através de **SFTP**, precisa de um [**alojamento Pro** ou superior. Pode atualizar o serviço diretamente na [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager) («Informações gerais», «Plano», «Alterar serviço»).

### Base de dados / SQL

### Conexões simultâneas à base de dados

- Nas ofertas de alojamento web (bases de dados partilhadas), há um limite de 30 conexões simultâneas por base de dados (200 se for a base de dados privada já incluída). Consulte as nossas [ofertas de alojamento](https://www.ovh.pt/alojamento-partilhado/) para conhecer as opções disponíveis em cada plano de alojamento web.

- Também pode encomendar bases de dados **Private SQL** suplementares, que dispõem de opções de personalização:

    - *max_connections*: 100 de forma padrão, com a possibilidade de passar para 200

    - *max_user_connections*: 50 de forma padrão, com a possibilidade de passar para 200

Para saber mais, consulte as nossas [ofertas de alojamento](https://www.ovh.pt/alojamento-partilhado/) e este [guia](https://docs.ovh.com/pt/hosting/sql-privado-primeira-utilizacao/).

#### Conexões a partir de um servidor externo

- Por razões de segurança, não é possível conectar-se a partir de um servidor externo à base de dados de um alojamento web OVHcloud, mesmo que sejam bases de dados SQL partilhadas ou privadas. Apenas os servidores OVHcloud Web Hosting podem conectar-se aos servidores das bases de dados. Qualquer outra conexão vai provocar o erro seguinte:

```bash
Warning: MySQL Connection Failed: Host ip.your.connection is not allowed to connect...
```


#### Variáveis do servidor SQL partilhado

- Aceda à interface PhpMyAdmin e introduza **show variables** para consultar as variáveis do servidor MySQL.

- A versão MySQL não pode ser alterada para as bases de dados integradas no alojamento web.

Para mais informações sobre a gestão das bases de dados, consulte o guia [Criar uma base de dados num alojamento web](https://docs.ovh.com/pt/hosting/criar-base-de-dados/).

### PHP

- É recomendável que consulte as nossas [ofertas de alojamento web](https://www.ovh.pt/alojamento-partilhado/php.xml) a fim de assegurar que o serviço de alojamento web que deseja encomendar se adequa às suas necessidades.

- Verifique os detalhes de configuração do seu alojamento web. Para isso, consulte a rubrica «Informações técnicas do seu alojamento web», mais abaixo neste guia. 

- Pode modificar a versão PHP do seu alojamento web, quer a partir da [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager) («**Configuração**»), quer alterando o ficheiro .ovhconfig. Também são possíveis configurações mistas neste último caso. Os seguintes guias contêm instruções pormenorizadas:

[Configurar o ficheiro .ovhconfig do alojamento web](https://docs.ovh.com/pt/hosting/configurar-ficheiro-ovhconfig/)  
[Alterar a configuração do alojamento web](https://docs.ovh.com/pt/hosting/modificar_o_ambiente_de_execucao_do_meu_alojamento_web/)


> [!primary]
> O ficheiro .ovhconfig está funcional na pasta raiz do alojamento web ou num subdiretório de primeiro nível (em geral, _/www/_). A única forma de substituir os principais parâmetros do ficheiro .ovhconfig é utilizar outro ficheiro .ovhconfig numa subpasta.
> O facto de situar este ficheiro mais profundamente na estrutura do diretório não terá nenhum efeito (por ex.: _/www/test/_, _/www/test/test2/_). Assegure-se que o ficheiro é legível pelo CMS (CHMOD 604 ou 644).


#### PHP-FPM

O PHP-FPM está ativado de forma padrão na infraestrutura do alojamento web, de modo a acelerar as respostas PHP. Atenção: ele poderá não estar ativo se estiver em uso uma oferta de alojamento web antiga que não tenha sido atualizada (serviços subscritos antes de 2014).

*Certas variáveis são diferentes sem PHP-FPM:*

|Variável|Sem PHP-FPM|Com PHP-FPM|
|---|---|---|
|max_execution_time|120s|300s|
|max_input_vars|2000|16000|
|memory_limit|128M|512M|


#### Scripts PHP

Quando estiver conectado ao alojamento web via SSH, o tráfego de saída será bloqueado por razões de segurança. Por isso, recomendamos que use scripts PHP. Para mais informações, consulte o [guia SSH](https://docs.ovh.com/pt/hosting/partilhado_o_ssh_nos_alojamentos_partilhados/). Também pode consultar as orientações oficiais [Manual do PHP](https://www.php.net/manual/pt_BR/function.system.php) acerca da execução dos comandos.

Por exemplo, pode utilizar a função *gethostbyaddr()* para obter o nome do host:

```php
1. <?php
2. echo gethostbyaddr($_SERVER["REMOTE_ADDR"]);
3. ?>
```


> [!warning]
> A OVHcloud não força as atualizações do PHP. Os nossos clientes são inteiramente responsáveis pela segurança dos seus serviços e pela atualização regular dos programas instalados.
>


#### Informações técnicas do seu alojamento web

Consulte as respetivas páginas de informação para verificar as bibliotecas disponíveis para o seu alojamento web.

Pode encontrar várias informações sobre o seu cluster através da seguinte ligação: [https://cluster015.hosting.ovh.net/infos/](https://cluster015.hosting.ovh.net/infos/){.external}

Substitua o cluster indicado no URL pelo seu. Para saber em que cluster de alojamento web está o seu serviço, aceda à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external} e selecione `Web`{.action} na barra de navegação superior. Clique em `Alojamento`{.action} na barra à esquerda e escolha o alojamento em causa. De seguida, clique no separador `FTP - SSH`{.action}. O URL de acesso FTP ao seu alojamento indicará o número do cluster.

Para conhecer as especificidades técnicas do serviço Cloud Web, clique aqui: <https://cloudweb-infos.hosting.ovh.net/>

## Política de utilização de cookies

**Os cookies e trackers usados no âmbito do serviço de alojamento partilhado.**

De modo a assegurar o bom funcionamento dos sites alojados no âmbito do serviço de alojamento partilhado, os terminais dos visitantes desses sites recebem o cookie «SERVER ID». Esse cookie permite garantir um serviço de repartição de carga do tráfego de entrada entre as diferentes infraestruturas utilizadas no alojamento do site (OVHcloud Load Balancer). Ele permite ao utilizador a permanência no mesmo servidor host durante toda a sessão. Isto possibilita a manutenção e a preservação da coerência do percurso do utilizador.

O cookie «SERVER ID» constitui um registo no terminal do utilizador que indica a instância (servidor) da infraestrutura com a qual se dá a interação. O cookie é anónimo, isto é, não utiliza nenhum dado pessoal do utilizador.

O cookie «SERVER ID» permanece no terminal do utilizador por menos de 24 horas.

Como se trata de um cookie anónimo e necessário ao funcionamento do serviço de alojamento partilhado, não é abrangido pelo pedido prévio de consentimento do visitante do site, conforme estipulado pelo Regulamento Geral de Proteção de Dados (RGPD). 

## Informações sobre as ferramentas estatísticas

**OVHcloud Web Statistics**

A OVHcloud disponibiliza ao cliente estatísticas de visitantes e de medição de audiência do(s) site(s) alojado(s) no âmbito do serviço de alojamento partilhado (daqui em diante, «OVHcloud Web Statistics»). As OVHcloud Web Statistics permitem, nomeadamente, identificar a zona geográfica dos visitantes dos sites, as características dos seus terminais, as páginas visitadas e os códigos HTTP. As OVHcloud Web Statistics estão ativadas de forma padrão e podem ser desativadas a pedido junto do Apoio ao Cliente. A fim de fornecer estas informações estatísticas, a OVHcloud opera tratamentos de dados.

Os relatórios OVHcloud Web Statistics são estabelecidos a partir de dados de tráfego anonimizados, como o endereço IP e os logs dos utilizadores, o URL do pedido, a duração do pedido e o «user agent».

Os dados citados são anonimizados e agregados por meio de algoritmos operados pela OVHcloud, dentro da sua própria infraestrutura. Em particular, o endereço IP do visitante presente nos dados de tráfego é extraído sob uma forma anonimizada, antes de ser tratado e analisado para se determinar a sua geolocalização (limitada à escala da região). Assim, no quadro das OVHcloud Web Statistics, não se conserva nenhum dado pessoal que permita a identificação, direta ou indireta, dos visitantes dos sites citados.  

## Quer saber mais?

[Aceder ao espaço de armazenamento do alojamento web](../aceder-espaco-de-armazenamento-ftp-alojamento-web/)

[Ativar o HTTPS num website com certificado SSL](../ativar-https-website-certificado-ssl/)

[Otimizar o desempenho do seu website](../partilhado_guia_de_otimizacao_das_performances_do_seu_site/)

Fale com a nossa comunidade de utilizadores em <https://community.ovh.com/en/>.