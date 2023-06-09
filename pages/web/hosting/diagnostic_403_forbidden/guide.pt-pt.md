---
title: O que fazer em caso de página "403 forbidden"?
excerpt: Descubra como repor o seu site online quando apresenta uma página "403 forbidden"
slug: diagnostico-403-forbidden
section: Diagnóstico
order: 08
updated: 2023-06-09
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

**Última atualização: 09/06/2023**

## Objetivo

Uma página **"403 forbidden"** pode aparecer quando:

- os direitos de acesso FTP (CHMOD) são insuficientes ou limitados. O servidor web do alojamento web recusa o acesso ao ficheiro/pasta/website ao qual deseja aceder através do seu browser.

- o ficheiro **.htaccess** contém uma regra de restrição de acesso;

- um plugin de segurança protege o acesso aos seus ficheiros/pasta/website através do seu browser;

- está ativada uma firewall aplicativa.

Após a deteção de um funcionamento suspeito, os nossos robôs de segurança podem bloquear temporariamente o acesso aos ficheiros do seu alojamento web. Este dispositivo permite impedir:

- a progressão de uma eventual pirataria dos seus dados presentes no seu alojamento web;

- o envio de códigos maliciosos para outras entidades/sítios web, o que poderá implicar a pirataria destes últimos;

- a realização de operações ilegais.
 
 Este dispositivo também visa protegê-lo juridicamente contra as ações resultantes de uma eventual pirataria do seu alojamento web em direção a outras organizações/websites. 
 
 *Se este tipo de bloqueio for afetado, é-lhe enviada uma notificação para o endereço de e-mail do contacto "administrador" do seu alojamento web*

![403error](images/403error.png){.thumbnail}

**Descubra como desbloquear o acesso ao seu site em caso de apresentação "403 forbidden".**

> [!warning]
>
> A OVHcloud disponibiliza serviços cuja configuração, gestão e responsabilidade lhe incumbem. Assim, deverá certificar-se de que estes funcionam corretamente.
>
> Este manual fornece as instruções necessárias para realizar as operações mais habituais. No entanto, se encontrar dificuldades, recomendamos que recorra a um [fornecedor especializado](https://partner.ovhcloud.com/pt/directory/) e/ou que troque informações com a nossa [comunidade de utilizadores](https://community.ovh.com/en/). Não poderemos proporcionar-lhe assistência técnica. Para mais informações, aceda à secção [Quer saber mais?](#go-further) deste manual.
>

## Requisitos

- Ter um [serviço de alojamento web](https://www.ovhcloud.com/pt/web-hosting/) OVHcloud.
- Dispor dos [dados de acesso](/pages/web/hosting/ftp_connection) ao espaço FTP de armazenamento do seu alojamento.
- Ter acesso à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt).

## Instruções

### Etapa 1: analisar a situação

Se a página **"403 forbidden"** surgiu na sequência de uma modificação do seu website, [restaure todo ou parte do espaço de armazenamento FTP do seu alojamento](/pages/web/hosting/ftp_save_and_backup) numa data anterior.

Se os backups disponíveis não lhe permitem restabelecer o acesso ao seu website, contacte um [fornecedor especializado](https://partner.ovhcloud.com/pt/directory/).

Se a página **"403 forbidden"** não aparecer após uma modificação do seu website, consulte o seu e-mail. Se recebeu um e-mail dos nossos serviços indicando que o seu alojamento web foi encerrado por razões de segurança, passe diretamente para [etapa 2](#step-2) deste manual.

Se a página **"403 forbidden"** aparecer sem ação da sua parte e não tiver recebido um e-mail dos nossos serviços sobre o assumpto, verifique as permissões de acesso FTP (CHMOD) dos seus ficheiros/pastas bem como o código contido no(s) seu(s) ficheiro(s) **.htaccess**. Verifique também se esta situação não é gerada por um plugin de segurança ou por uma firewall de aplicação. Se necessário, contacte um [fornecedor especializado](https://partner.ovhcloud.com/pt/directory/).

### Etapa 2: proteger as suas soluções <a name="step-2"></a>

Em primeiro lugar, verifique a segurança do(s) seu(s) posto(s)/aparelho(s) informático(s):

- Atualize a segurança dos seus dispositivos.

- Verifique que está instalado um antivírus, atualize-o e lance uma análise completa. Se não possuir nenhum, consulte um [fornecedor especializado](https://partner.ovhcloud.com/pt/directory/) antes de qualquer instalação.

- Altere todas as suas palavras-passe locais, nomeadamente as dos seus endereços de e-mail, respeitando as **boas práticas** definidas no [presente guia](/pages/account/customer/manage-ovh-password).

- Altere as palavras-passe do conjunto dos seus serviços OVHcloud, nomeadamente as da sua [base de dados](/pages/web/hosting/sql_change_password) e do acesso ao seu [espaço de armazenamento FTP](/pages/web/hosting/ftp_change_password).

> [!warning]
>
> Antes de alterar a palavra-passe da base de dados do seu website a partir do seu [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt), atualize o ficheiro de configuração do seu website para que se ligue à base de dados com a nova palavra-passe.
>
> Caso contrário, a alteração da palavra-passe da sua base de dados irá causar uma interrupção no acesso ao seu website ou aos seus serviços/clientes que o utilizam.
>
> Em caso de dúvida sobre as operações a realizar, contacte os [parceiros OVHcloud](https://partner.ovhcloud.com/pt/directory/).
>

### Etapa 3: intervir no seu alojamento

Em primeiro lugar, tome nota da data de envio do e-mail da OVHcloud que indica a desativação do seu alojamento web, assim como da(s) pasta(s) que contém os exemplos de ficheiros ilegítimos.

> [!primary]
>
> Os nossos robôs de segurança podem aplicar dois níveis de desativação no seu alojamento web: 
>
> - uma desativação aplicando "**CHMOD 700**" à raiz FTP do seu alojamento web;
> - uma desativação aplicando "**CHMOD 000**" à raiz FTP do seu alojamento web.
>
> No caso de uma desativação por restrição de acesso FTP em "**CHMOD 000**", contacte obrigatoriamente as nossas [equipas de suporte](https://www.ovhcloud.com/pt/support-levels/) para fazer o ponto da situação antes de prosseguir com os passos descritos neste guia. 
>
> Em função da sua situação, estes últimos aplicarão uma restrição menos elevada, transformando o "**CHMOD 000**" em "**CHMOD 700**" para que possa atuar no espaço FTP do seu alojamento web.
>

#### Caso n°1: o seu alojamento foi desativado há menos de duas semanas

Se o seu alojamento foi encerrado há menos de duas semanas e contém apenas um website, restaure o seu espaço de armazenamento FTP. Se ele contiver vários websites, apenas restaure a(s) pasta(s) que contém(m) os ficheiros ilegítimos.

Para restaurar todo ou parte do seu espaço de armazenamento FTP, consulte o [nosso guia](/pages/web/hosting/ftp_save_and_backup) sobre o assumpto.

> [!warning]
>
> O restauro do seu espaço de armazenamento FTP por si só não é suficiente para corrigir potenciais falhas de segurança previamente presentes no seu website.
> Para identificar estas falhas de segurança, analise os ["logs web"](/pages/web/hosting/logs_and_statistics) do seu alojamento web ou recorra a um [fornecedor especializado](https://partner.ovhcloud.com/pt/directory/) para realizar uma auditoria de segurança dos seus websites.
>

#### Caso n°2: o seu alojamento foi desativado há mais de duas semanas

Se o seu alojamento foi encerrado há mais de duas semanas, contacte um [fornecedor especializado](https://partner.ovhcloud.com/pt/directory/) para efetuar uma auditoria de segurança dos seus websites. 

> [!success
>
> Para mais informações sobre os [passos 2 e 3](#step-2) anteriores, consulte o nosso manual sobre [ações a realizar em caso de pirataria do seu website](/pages/web/hosting/cms_what_to_do_if_your_site_is_hacked).
>

### Etapa 4: reativar o alojamento web <a name="reactivate-web-hosting"></a>

> [!warning]
>
> Recomendamos que realize uma auditoria de segurança **antes** da reabertura do alojamento. Qualquer envio de código malicioso a partir do seu alojamento pode implicar a sua responsabilidade jurídica.
>

#### Reativar o alojamento com o FileZilla

> [!primary]
>
> Para instalar o software **FileZilla** para manipular os ficheiros do seu website, siga as instruções deste [tutorial](/pages/web/hosting/ftp_filezilla_user_guide).
>

Abra o FileZilla e depois [ligue-se ao seu espaço de armazenamento FTP](/pages/web/hosting/ftp_connection). A seguir, clique em `Servidor`{.action} na barra de menu e depois em `Indicar comando personalizado`{.action} (o título pode ser diferente segundo a versão do FileZilla que utiliza):

![command_filezilla1](images/command_filezilla1.png){.thumbnail}

Na nova janela, insira o seguinte comando e valide:

```
SITE CHMOD 705 /
```

![command_filezilla2](images/command_filezilla2.png){.thumbnail}

Uma resposta **"200 Permissions changed on /"** confirma que a operação foi bem realizada. Para o verificar, tente novamente aceder ao seu site.

> [warning]
>
> A modificação pode demorar alguns minutos (até 20 minutos) até ficar visível no browser.
>
> Em função do seu website, poderá também ser necessário esvaziar a cache do seu browser.
>

Se o comando acima não funcionar, pode tentar este outro comando:

```
SITE CHMOD 705 .
```

#### Reativar o alojamento com o Explorador FTP "net2ftp"

Na [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt), aceda à secção `Web Cloud`{.action} e clique em `Alojamentos`{.action } e em `FTP-SSH`{.action}.

Carregue no botão `Explorador FTP`{.action} e ligue-se ao seu [espaço de armazenamento FTP](/pages/web/hosting/ftp_connection).

Clique no botão `Avançado`{.action} e, a seguir, no botão `Go`{.action} junto de "Send arbitrary FTP commands to the FTP server".

![net2ftp](images/net2ftp.png){.thumbnail}

Na parte superior da página, insira o seguinte comando:

```
SITE CHMOD 705 /
```

e clique no botão que representa um "V" verde.

![result_command_on_net2ftp](images/result_command_on_net2ftp.png){.thumbnail}

Uma resposta **"200 Permissions changed on /"** confirma que a operação foi bem realizada. Para o verificar, tente novamente aceder ao seu site.

> [warning]
>
> A modificação pode demorar alguns minutos (até 20 minutos) até ficar visível no browser.
>
> Em função do seu website, poderá também ser necessário esvaziar a cache do seu browser.
>

## Quer saber mais? <a name="go-further"></a>

[Piratagem do seu website WordPress: conselhos e casos práticos](/pages/web/hosting/cms_what_to_do_if_your_site_is_hacked)

[Partilhado: ativação da firewall](/pages/web/hosting/multisites_activating_application_firewall)

[Mudar a versão de PHP do alojamento web](/pages/web/hosting/php_configure_php_on_your_web_hosting_2014)

Para serviços especializados (referenciamento, desenvolvimento, etc), contacte os [parceiros OVHcloud](https://partner.ovhcloud.com/pt/directory/).

Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](https://www.ovhcloud.com/pt/support-levels/).

Fale com nossa comunidade de utilizadores: <https://community.ovh.com/en/>. 