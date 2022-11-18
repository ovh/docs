---
title: 'Especificidades técnicas relacionadas com os alojamentos partilhados'
slug: especificidades-tecnicas-alojamentos-partilhados
excerpt: 'Neste guia encontrará as diferentes informações e especificidades técnicas relacionadas com os alojamentos partilhados'
section: Configuração do alojamento
order: 05
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

**Última atualização: 28/07/2022**

## Objetivo

**Este guia trata dos pormenores técnicos da infraestrutura dos alojamentos web OVHcloud, em função das dúvidas mais frequentes.**

## Requisitos

- Ter um serviço de [alojamento web OVH](https://www.ovhcloud.com/pt/web-hosting/){.external} compatível.
- Ter acesso à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}.

## Instruções

> [!warning]
>
> A responsabilidade sobre a configuração e a gestão dos serviços que a OVHcloud disponibiliza recai sobre o utilizador. Assim, deverá certificar-se de que estes funcionam corretamente.
> 
> Este manual fornece as instruções necessárias para realizar as operações mais habituais. No entanto, se encontrar dificuldades, recomendamos que recorra a um [prestador de serviços especializado](https://partner.ovhcloud.com/pt/directory/) e/ou que contacte o editor do serviço. Não poderemos proporcionar-lhe assistência técnica. Para mais informações, aceda à secção «Quer saber mais?» deste guia.
> 

### FTP

- Erro de acesso («Erro de autenticação de login 530»): Assegure-se de que as informações de acesso ao seu espaço FTP estão corretas. Para isso, verifique-as através da [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}, no separador `FTP - SSH`. As palavras-passe nunca são exibidas, mas podem ser alteradas. Consulte os nossos [guias FTP](https://docs.ovh.com/pt/hosting/aceder-espaco-de-armazenamento-ftp-alojamento-web/).

- As conexões FTP devem utilizar o **modo passivo**. Certifique-se de que o script ou o cliente FTP está ajustado em conformidade.

### E-mails <a name="emails"></a>

Para garantir uma boa qualidade de serviço para todos e simplificar o envio dos seus e-mails para os seus destinatários, aplicamos quotas para os nossos serviços de alojamento web.

Durante um período de 3600 segundos (ou seja, 1 hora), a sua oferta de alojamento permitir-lhe-á enviar as seguintes quotas de e-mail:

|Offres|Start 10M|Perso|Pro|Performance|
|---|---|---|---|---|
|Quantidade máxima de envio de e-mails por hora e por serviço|10|100|200|2000|

- Para além das suspeitas de spamming ou phishing, a expedição dos seus e-mails poderá ser diferida. Os seus e-mails serão guardados numa fila de espera até que o número de e-mails enviados na hora anterior seja inferior ao limite.
- Em caso de abuso ou de risco comprovado, o seu serviço será suspenso e ser-lhe-á enviado um e-mail a informá-lo da suspensão do serviço. O que fazer em caso de conta bloqueada por spam? Consulte [nosso guia](https://docs.ovh.com/pt/microsoft-collaborative-solutions/bloqueado-por-spam/).

### Base de dados / SQL

### Conexões simultâneas à base de dados

- Nas ofertas de alojamento web (bases de dados partilhadas), há um limite de 30 conexões simultâneas por base de dados (200 com uma base de dados CloudDB). Consulte as nossas [ofertas de alojamento](https://www.ovhcloud.com/pt/web-hosting/) para conhecer as opções disponíveis em cada plano de alojamento web.

- Também pode encomendar bases de dados **CloudDB** suplementares, que dispõem de opções de personalização:

    - *max_connections*: 100 de forma padrão, com a possibilidade de passar para 200

    - *max_user_connections*: 50 de forma padrão, com a possibilidade de passar para 200

Para saber mais, consulte as nossas [ofertas de alojamento](https://www.ovhcloud.com/pt/web-hosting/) e este [guia](https://docs.ovh.com/pt/clouddb/comecar-com-clouddb/).

#### Conexões a partir de um servidor externo

- Por razões de segurança, não é possível conectar-se a partir de um servidor externo à base de dados de um alojamento web OVHcloud, mesmo que sejam bases de dados SQL partilhadas ou CloudDB. Apenas os servidores OVHcloud Web Hosting podem conectar-se aos servidores das bases de dados. Qualquer outra conexão vai provocar o erro seguinte:

```bash
Warning: MySQL Connection Failed: Host ip.your.connection is not allowed to connect...
```


#### Variáveis do servidor SQL partilhado

- Aceda à interface PhpMyAdmin e introduza **show variables** para consultar as variáveis do servidor MySQL.

- A versão MySQL não pode ser alterada para as bases de dados integradas no alojamento web.

Para mais informações sobre a gestão das bases de dados, consulte o guia [Criar uma base de dados num alojamento web](https://docs.ovh.com/pt/hosting/criar-base-de-dados/).

### PHP

- É recomendável que consulte as nossas [ofertas de alojamento web](https://www.ovhcloud.com/pt/web-hosting/uc-programming-language/) a fim de assegurar que o serviço de alojamento web que deseja encomendar se adequa às suas necessidades.

> [!warning]
>
> A modificação do ficheiro **php.ini** está indisponível nas ofertas de alojamento partilhado. Isto porque a configuração PHP é global ao conjunto da infraestrutura partilhada.
>

- Verifique os detalhes de configuração do seu alojamento web. Para isso, consulte a rubrica «Informações técnicas do seu alojamento web», mais abaixo neste guia. 

- Pode modificar a versão PHP do seu alojamento web, quer a partir da [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt) («**Configuração**»), quer alterando o ficheiro .ovhconfig. Também são possíveis configurações mistas neste último caso. Os seguintes guias contêm instruções pormenorizadas:

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
|max_execution_time|120s|165s|
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

Pode encontrar várias informações sobre o seu cluster através da seguinte ligação: <https://webhosting-infos.hosting.ovh.net>

Substitua o cluster indicado no URL pelo seu. Para saber em que cluster de alojamento web está o seu serviço, aceda à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external} e selecione `Web Cloud`{.action}. Clique em `Alojamento`{.action} e escolha o alojamento em causa. De seguida, clique no separador `FTP - SSH`{.action}. O URL de acesso FTP ao seu alojamento indicará o número do cluster.

Para conhecer as especificidades técnicas do serviço Cloud Web, clique aqui: <https://cloudweb-infos.hosting.ovh.net/>

### Informações sobre backups automáticos <a name="backup"></a>

> [!warning]
>
> A OVHcloud compromete-se a fornecer um serviço de backup automático de dados, bem como a disponibilização desses backups. No entanto, é da sua responsabilidade implementar a sua própria política de restauração e determinar pontos de restauro nos momentos que considere oportunos.

### Espaço de disco

Todas as nossas ofertas de alojamento web partilhado situadas:

- em Gravelines (GRA), França, dispõem de backups automáticos no dia 1 / D-2 / D-3 / D-7 / D-14. Estes backups são igualmente armazenados no datacenter de Roubaix (RBX), em França.

- em Beauharnois (BHS), no Canadá, dispõem de backups automáticos a D-1 / D-2 / D-3 / D-7 / D-14. Estes backups são igualmente armazenados no datacenter de Beauharnois (BHS), no Canadá.

Saiba como [ligar-se ao espaço de armazenamento](https://docs.ovh.com/pt/hosting/aceder-espaco-de-armazenamento-ftp-alojamento-web/) ou [restaurar o espaço de armazenamento do alojamento web](https://docs.ovh.com/pt/hosting/restauracao-ftp-filezilla-area-de-cliente/) nos nossos documentos.

###### Base de dados / SQL

Para as bases de dados partilhadas (incluídas na sua oferta de alojamento Web) ou os servidores de base de dados (CloudDB), propostos em Gravelines (GRA), em França e Beauharnois (BHS), no Canadá, o backup das bases de dados é feito todos os dias. Estes backups estão acessíveis (através de [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external} ou através das [API OVHcloud](https://api.ovh.com/). Os backups são igualmente armazenados numa outra infraestrutura. Estes dados são replicados em 3 locais distintos em França: Roubaix(RBX), Estrasburgo(SBG) e Gravelines(GRA). A política de retenção dos backups é de 30 dias.

Saiba como [Recuperar o backup da base de dados de um alojamento web](https://docs.ovh.com/pt/hosting/partilhado_guia_de_exportacao_de_uma_base_de_dados_mysql/) no nosso manual.

##### E-mail

Para as contas de e-mails partilhadas (incluídas na sua oferta de alojamento Web), é realizado um backup automático diário, que é copiado para outro centro de dados.

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