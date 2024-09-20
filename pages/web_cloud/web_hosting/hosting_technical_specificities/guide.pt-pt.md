---
title: "Especificidades técnicas relacionadas com os alojamentos partilhados"
excerpt: "Saiba neste guia diferentes informações e especificidades técnicas relacionadas com os alojamentos Web"
updated: 2023-12-08
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

## Objetivo

As ofertas de alojamento web da OVHcloud são partilhadas. Por conseguinte, a configuração destas propostas contém algumas especificidades técnicas. Recomendamos que consulte estas especificações *antes* de utilizar o seu alojamento web da OVHcloud.

**Saiba neste guia diferentes informações e especificidades técnicas relacionadas com os alojamentos Web.**

## Requisitos

- Ter um serviço de [alojamento web OVHcloud](/links/web/hosting){.external} compatível.
- Ter acesso à [Área de Cliente OVHcloud](/links/manager){.external}.

## Instruções

> [!warning]
>
> A responsabilidade sobre a configuração e a gestão dos serviços que a OVHcloud disponibiliza recai sobre o utilizador. Assim, deverá certificar-se de que estes funcionam corretamente.
> 
> Este manual fornece as instruções necessárias para realizar as operações mais habituais. No entanto, se encontrar dificuldades, recomendamos que recorra a um [prestador de serviços especializado](/links/partner) e/ou que contacte o editor do serviço. Não poderemos proporcionar-lhe assistência técnica. Para mais informações, aceda à secção "[Quer saber mais?](#go-further)" deste guia.
> 

### FTP

- Utilizar o **modo passivo** para as ligações FTP. Certifique-se de que o script ou o cliente FTP está configurado em conformidade.

- Se encontrar o erro de acesso "falha de autenticação de ligação 530" ao aceder ao espaço de armazenamento FTP: Certifique-se de que as informações de acesso ao seu espaço FTP estão corretas. Para isso, aceda à [Área de Cliente OVHcloud](/links/manager) e aceda à secção `Web Cloud`{.action}. Na coluna da esquerda, clique em `Alojamentos`{.action} e selecione o alojamento web em causa. Na página que vai aparecer, clique no separador `FTP - SSH`{.action}.

Nele, encontrará todas as informações de ligação ao seu espaço de armazenamento FTP, com exceção da palavra-passe.

As palavras-passe nunca são apresentadas, mas podem ser alteradas.

Encontre mais informações sobre este assumpto no nosso guia "[Ligar-se ao espaço de armazenamento FTP do alojamento web](/pages/web_cloud/web_hosting/ftp_connection)".

### E-mails <a name="emails"></a>

A fim de garantir uma boa qualidade de serviço em toda a infraestrutura partilhada e simplificar o envio dos seus e-mails para os seus destinatários, aplicamos quotas de envios nos nossos serviços de alojamento web.

Num período escorregadio de 3600 segundos (1 hora), a sua oferta de alojamento web permitir-lhe-á enviar as seguintes quotas de e-mail:

|Ofertas|Alojamento gratuito 100M|Starter|Perso|Pro|Performance|
|---|---|---|---|---|---|
|Quantidade máxima de envio de e-mails por hora e por serviço|10|20|100|200|2000|

> [!primary]
>
> Estas limitações aplicam-se apenas **unicamente** aos e-mails emitidos com a função *mail()* de PHP e não diz respeito aos outros pacotes de e-mail (envio SMTP).
>

Exceto no caso de suspeitas de spam ou phishing, a expedição dos seus e-mails poderá ser adiada. Os seus e-mails serão conservados numa fila até que o número de e-mails enviados durante essa hora seja inferior ao limite.

Em caso de abuso ou pirataria, uma parte ou o conjunto do seu serviço poderá ser suspenso (de acordo com as CGU/CGV e Condições particulares da sua oferta). Receberá uma notificação por e-mail sobre a suspensão do acesso. Nesse caso, use os seguintes guias:

- [Seguir e gerir os e-mails automatizados do alojamento web](/pages/web_cloud/web_hosting/mail_function_script_records);
- [Casos práticos - Dicas sobre como hackear o seu website](/pages/web_cloud/web_hosting/cms_what_to_do_if_your_site_is_hacked).

### Base de dados / SQL

#### Ligações simultâneas à base de dados

Nas ofertas de alojamento web (bases de dados partilhadas), existe um limite de 30 ligações simultâneas por base de dados (este limite passa para 200 se utilizar uma oferta [Web Cloud Databases](/links/web/databases). Consultar [detalhes das nossas ofertas de alojamento web](/links/web/hosting) para conhecer as opções disponíveis em cada oferta de alojamento web.

Pode igualmente encomendar ofertas [Web Cloud Databases](/links/web/databases) suplementares, estas dispõem de opções de personalização:

- *max_connections*: 100 por predefinição, com possibilidade de passar para 200;
- *max_user_connections*: 50 por predefinição, com possibilidade de passar para 200.

Para saber mais, consulte os detalhes dos nossos [planos de alojamento web](/links/web/hosting) e o nosso guia "[Primeiros passos com a sua oferta Web Cloud Databases](/pages/web_cloud/web_cloud_databases/starting_with_clouddb)".

#### Ligações a partir de um servidor externo

Por razões de segurança, não é possível ligar-se a uma base de dados incluída numa oferta de alojamento web da OVHcloud a partir de um servidor externo. Apenas os servidores que contêm os alojamentos Web da OVHcloud podem ligar-se aos servidores da base de dados partilhada. Qualquer outra conexão provocará o seguinte erro:

```bash
Warning: MySQL Connection Failed: Host ip.your.connection is not allowed to connect ...
```

Apenas os servidores de bases de dados [Web Cloud Databases](/links/web/databases) permitem a servidores externos a ligação. Isto tendo previamente autorizado o endereço IP do seu servidor externo no servidor de bases de dados. Se necessário, consulte o guia "[Primeiros passos com a oferta Web Cloud Databases](/pages/web_cloud/web_cloud_databases/starting_with_clouddb)".

#### Variáveis do servidor SQL partilhado

Para conhecer as suas variáveis, ligue-se através da interface *PhpMyAdmin* à sua base de dados. Uma vez ligado, clique no separador "SQL` na parte superior da página e introduza o seguinte pedido no formulário central para verificar as variáveis do servidor MySQL:

```bash
SHOW VARIABLES;
``` 

> [!primary]
>
> A versão MySQL não pode ser alterada para as bases de dados integradas no alojamento Web.
>

Para mais informações sobre a gestão das bases de dados e sobre a ligação à interface *phpMyAdmin*, consulte o guia "[Criar uma base de dados num alojamento web](/pages/web_cloud/web_hosting/sql_create_database)".

### PHP

Recomendamos que consulte as nossas [ofertas de alojamento web](/links/web/hosting-programming-language) para se certificar de que a oferta de alojamento web que deseja encomendar se adapta às suas necessidades.

> [!warning]
>
> A modificação do ficheiro **php.ini** não está disponível nas ofertas de alojamento web. Isto porque a configuração PHP é global para o conjunto da infraestrutura partilhada.
>
> No entanto, pode modificar certos elementos como o *motor de execução PHP*, o*ambiente de execução* ou ainda a *versão de PHP* do seu alojamento web.
>
> Encontre mais pormenores sobre este assumpto no nosso guia "[Alojamento Web: ambiente, versão PHP, ".ovhconfig"](/pages/web_cloud/web_hosting/configure_your_web_hosting)"
>

Além disso, também pode verificar os detalhes de configuração do seu alojamento web. Para isso, consulte a secção "[Informações técnicas do seu alojamento web](#technical-infos-web-hosting)" na parte inferior deste guia.

#### PHP-FPM

O PHP-FPM está ativado de forma padrão na infraestrutura do alojamento web, de forma a acelerar as respostas PHP. Tenha em conta que poderá não estar ativo se estiver a executar uma oferta de alojamento web antiga que não tenha sido atualizada (serviços subscritos antes de 2014).

*Algumas variáveis são diferentes sem PHP-FPM:*

|Variável|Sem PHP-FPM|Com PHP-FPM|
|---|---|---|
|max_execution_time|120s|165s|
|max_input_vars|2000|16000|
|memory_limit|128M|512M|

#### PHP scripts

Quando estiver conectado ao alojamento web via SSH, o tráfego de saída será bloqueado por razões de segurança. Por isso, recomendamos que utilize scripts PHP. Para mais informações, consulte o nosso [guia SSH](/pages/web_cloud/web_hosting/ssh_on_webhosting). Pode consultar o "[PHP manual](https://www.php.net/manual/en/function.system.php)" relativo à execução de comandos.

Por exemplo, pode utilizar a função *gethostbyaddr()* para obter o nome do host:

```php
1. <?php
2. echo gethostbyaddr($_SERVER["REMOTE_ADDR"]);
3. ?>
```

> [!warning]
>
> A OVHcloud não altera automaticamente a versão de PHP do seu alojamento quando é implementada uma nova versão. O Utilizador é o responsável pela segurança e atualização regular dos conteúdos dos serviços.
>

### Informações técnicas sobre o alojamento web <a name="#technical-infos-web-hosting"></a>

Encontre e verifique as bibliotecas, linguagens e versões disponíveis para o seu alojamento web a partir desta página: <https://webhosting-infos.hosting.ovh.net>

Para conhecer as especificidades técnicas do serviço Cloud Web, aceda a esta página: <https://cloudweb-infos.hosting.ovh.net/>.

### Informações sobre os backups automáticos <a name="backup"></a>

> [!warning]
>
> A OVHcloud fornece um serviço de backup automático dos dados, bem como a disponibilização desses backups. No entanto, continua a ser um *não contratual* e está presente em complemento dos seus serviços. Efetivamente, é da sua responsabilidade implementar a sua própria política de restauro e determinar pontos de restauro nos momentos que julgar oportunos.
>

#### Espaço de disco / espaço de armazenamento FTP

Todas as nossas ofertas de alojamento web partilhado situadas:

- em Gravelines (GRA), em França, dispõem de backups automáticos a D-1 / D-2 / D-3 / D-7 / D-14. Estes backups são igualmente armazenados no datacenter de Roubaix (RBX), em França;

- em Beauharnois (BHS), no Canadá, dispõem de backups automáticos a D-1 / D-2 / D-3 / D-7 / D-14. Estes backups são também armazenados no datacenter de Beauharnois (BHS), no Canadá.

Descubra como [aceder ao espaço de armazenamento FTP do seu alojamento web](/pages/web_cloud/web_hosting/ftp_connection) ou [restaurar o espaço de armazenamento FTP do alojamento web](/pages/web_cloud/web_hosting/ftp_save_and_backup) nas nossas documentações.

#### Base de dados / SQL

> [!warning]
>
> A OVHcloud fornece um serviço de backup automático dos dados, bem como a disponibilização desses backups. No entanto, continua a ser um *não contratual* e está presente em complemento dos seus serviços. Efetivamente, é da sua responsabilidade implementar a sua própria política de restauro e determinar pontos de restauro nos momentos que julgar oportunos.
>

Para as bases de dados partilhadas (incluídas na sua oferta de alojamento web) ou os servidores de bases de dados (Web Cloud Databases), propostos em Gravelines (GRA), em França e em Beauharnois (BHS), no Canadá, o backup das bases de dados é efetuado todos os dias. Estes backups estão acessíveis (através da [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/pt/&ovhSubsidiary=pt){.external} ou através das [API OVHcloud](https://api.ovh.com/)). Os backups são também armazenados noutra infraestrutura. Estes dados são replicados num datacenter situado em Estrasburgo (SBG). A política de retenção dos backups é de 30 dias.

Saiba como é que [Obter a cópia de segurança da base de dados de um alojamento web](/pages/web_cloud/web_hosting/sql_database_export) no manual.

#### E-mail

> [!warning]
>
> A OVHcloud fornece um serviço de backup automático dos dados. No entanto, continua a ser um *não contratual* e está presente em complemento dos seus serviços. Efetivamente, é da sua responsabilidade implementar a sua própria política de restauro e determinar pontos de restauro nos momentos que julgar oportunos.
>

Para as contas de e-mail partilhadas (incluídas na sua oferta de alojamento web), é realizada uma cópia de segurança automática todos os dias e copiada para outro datacenter.

### Política de utilização de cookies

**Cookies e marcadores utilizados no âmbito do serviço de alojamento partilhado.**

Para assegurar o bom funcionamento dos websites alojados no âmbito do serviço de alojamento web partilhado, o cookie "SERVER ID" é colocado nos terminais dos visitantes desses websites. O cookie "SERVER ID" permite assegurar um serviço de repartição de carga do tráfego de entrada entre as diferentes infraestruturas utilizadas para o alojamento do website (OVHcloud Load Balancer). Permite que o utilizador permaneça no mesmo servidor host durante toda a sessão. 

> [!success]
>
> Em linguagem informática, é chamada "sessão" um determinado período durante o qual um dispositivo (computador, smartphone, etc.) interage com um servidor.
>

Isto permite manter e preservar a coerência do percurso do utilizador.

O cookie "SERVER ID" constitui um registo no terminal do utilizador que indica a instância (servidor) da infraestrutura com a qual o utilizador interage. O cookie é anónimo, isto é, não utiliza nenhum dado pessoal do utilizador.

O cookie "SERVER ID" é colocado no terminal do utilizador por um período inferior a 24 horas.

Para um cookie:

 - 1: necessária ao funcionamento do serviço de alojamento web partilhado;
 - 2: anónimo.

Não é abrangido pela recolha prévia do consentimento do visitante do website, nos termos da Regulamentação Geral de Proteção de Dados (RGPD).

### Informações sobre as ferramentas estatísticas

**OVHcloud Web Statistics**

A OVHcloud coloca à disposição do cliente estatísticas de frequência e de medição de audiência do(s) website(s) alojado(s) no âmbito do serviço de alojamento partilhado. (a seguir "OVHcloud Web Statistics"). "OVHcloud Web Statistics" permite, nomeadamente, identificar a zona geográfica dos visitantes dos websites alojados no âmbito do serviço de alojamento web partilhado, as características dos seus terminais, as páginas visitadas e os códigos HTTP. "OVHcloud Web Statistics" está ativado por predefinição como parte do serviço de alojamento partilhado e pode ser desativado a pedido do cliente ao contactar o suporte técnico. A fim de fornecer "OVHcloud Web Statistics", a OVHcloud realiza tratamentos de dados.

Os relatórios "OVHcloud Web Statistics" são estabelecidos a partir de dados de tráfego anónimos, tais como o endereço IP e os logs dos utilizadores dos websites alojados no âmbito de uma oferta de alojamento partilhado, o URL do pedido, a duração do pedido e o "utilizador".

Para serem utilizados no âmbito "OVHcloud Web Statistics", os dados citados são anonimizados e agregados através de algoritmos operados pela OVHcloud, dentro das suas próprias infraestruturas. Em particular, o endereço IP do visitante presente nos dados de tráfego é extraído sob forma anonimizada, de forma a ser tratado e analisado para determinar a sua geolocalização (limitada a um nível regional). Assim, no quadro das "OVHcloud Web Statistics", não se conserva nenhum dado pessoal que permita a identificação, direta ou indireta"dos visitantes citados.  

## Quer saber mais? <a name="go-further"></a>

[Ligar-se ao espaço de armazenamento FTP do alojamento web](/pages/web_cloud/web_hosting/ftp_connection)

[Passar o seu website em HTTPS graças ao SSL](/pages/web_cloud/web_hosting/ssl-activate-https-website)

[Otimização das performances do seu site](/pages/web_cloud/web_hosting/optimise_your_website_performance)

[Restaurar o espaço de armazenamento FTP do alojamento web](/pages/web_cloud/web_hosting/ftp_save_and_backup)

[Obter a cópia de segurança da base de dados de um alojamento web](/pages/web_cloud/web_hosting/sql_database_export)

Para serviços especializados (referenciamento, desenvolvimento, etc), contacte os [parceiros OVHcloud](/links/partner).

Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](/links/support).

Fale com nossa [comunidade de utilizadores](/links/community).