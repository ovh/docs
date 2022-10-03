---
title: O que fazer em caso de página "403 forbidden"?
excerpt: Saiba como repor o seu site online quando apresenta uma página "403 forbidden"
slug: diagnostico-403-forbidden
section: Diagnóstico
Order: 08
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

**Última atualização: 16/06/2022**

## Objetivo

Algumas alterações nos direitos de acesso aos ficheiros do seu site, no ficheiro **.htaccess** ou na instalação de um plugin de segurança podem traduzir-se numa página **"403 forbidden"**.

Também pode acontecer que, após uma deteção de anomalias, os nossos robôs de segurança tenham sido levados a bloquear temporariamente o acesso aos ficheiros do seu alojamento. Este tipo de bloqueio automático visa impedir o envio de códigos maliciosos para outras entidades e protegê-lo juridicamente.

![403error](images/403error.png){.thumbnail}

**Saiba como desbloquear o acesso ao seu site em caso de apresentação "403 forbidden".**

> [!warning]
>
> A responsabilidade sobre a configuração e a gestão dos serviços que a OVHcloud disponibiliza recai sobre o utilizador. Assim, deverá certificar-se de que estes funcionam corretamente.
>
> Este manual fornece as instruções necessárias para realizar as operações mais habituais. No entanto, se encontrar dificuldades, recomendamos que recorra a um [prestador especializado](https://partner.ovhcloud.com/pt/) e/ou que contacte o editor do serviço. Não poderemos proporcionar-lhe assistência técnica. Para mais informações, aceda à secção [Quer saber mais?](#gofurther).
>

## Requisitos

- Ter um [serviço de alojamento web](https://www.ovhcloud.com/pt/web-hosting/) OVHcloud.
- Dispor dos [dados de acesso](../aceder-espaco-de-armazenamento-ftp-alojamento-web/#1-recuperar-as-informacoes-de-acesso) ao espaço de armazenamento do seu alojamento.
- Ter acesso à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt).

## Instruções

### Etapa 1: analisar a situação

Se a página **"403 forbidden"** surgiu na sequência de uma alteração errada do seu site, [restaure todo ou parte do espaço de armazenamento do seu alojamento](../restauracao-ftp-filezilla-area-de-cliente/) numa data anterior.

Se os backups disponíveis não lhe permitem restabelecer o acesso ao seu site, contacte um [fornecedor especializado](https://partner.ovhcloud.com/pt/).

Se a página **"403 forbidden"** não aparecer após uma modificação do seu site, consulte o seu correio. Se recebeu um e-mail dos nossos serviços indicando um encerramento do seu alojamento por razões de segurança, passe para [o passo 2](#step2).

Se a página **"403 forbidden"** aparecer sem ação da sua parte e não tiver recebido emails dos nossos serviços, contacte um [fornecedor especializado](https://partner.ovhcloud.com/pt/).

### Etapa 2: proteger as suas soluções <a name="step2"></a>

Em primeiro lugar, verifique a segurança do(s) seu(s) computador(s):

- Atualizações de segurança;
- Verifique também que está instalado um antivírus, atualize-o e lance uma análise completa. Se não possuir nenhum, consulte um [[prestador de serviços especializado](https://partner.ovhcloud.com/pt/directory/)](https://partner.ovhcloud.com/pt/) antes de qualquer instalação;
- Altere todas as suas palavras-passe locais, incluindo as dos seus endereços de e-mail, de acordo com estas [boas práticas](https://docs.ovh.com/pt/customer/gerir-a-palavra-passe/#gerar-uma-boa-palavra-passe);
- Altere as palavras-passe do conjunto dos seus serviços OVHcloud, nomeadamente da sua [base de dados](../alterar-palavra-passe-base-de-dados/) e do acesso ao seu [espaço de armazenamento FTP](../alterar-palavra-passe-utilizador-ftp/).

> [!warning]
>
> Antes de alterar a palavra-passe da base de dados do seu site a partir da [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt), atualize o ficheiro de configuração do seu site para que este se ligue à base de dados com a nova palavra-passe.
>
> Caso contrário, a alteração da palavra-passe da sua base de dados levará a um corte do site ou dos serviços que o utilizam.
>
> Em caso de dúvida sobre as operações a realizar, contacte os [parceiros da OVHcloud](https://partner.ovhcloud.com/pt/).
>

### Etapa 3: intervir no seu alojamento

Em primeiro lugar, tome nota da data de envio do e-mail da OVHcloud que indica a desativação do seu alojamento, assim como da(s) pasta(s) que contém os exemplos de ficheiros ilegítimos.

#### Caso n°1: o seu alojamento foi desativado há menos de duas semanas

Se o seu alojamento foi encerrado há menos de duas semanas e contém apenas um site, restaure o espaço de armazenamento seguindo as instruções deste [manual](../restauracao-ftp-filezilla-area-de-cliente/#restaurar-o-espaco-de-armazenamento-a-partir-da-area-de-cliente).

Se o seu alojamento foi encerrado há menos de duas semanas e contém vários sites, deverá restaurar apenas a(s) pasta(s) que contém os ficheiros ilegítimos de acordo com as instruções deste [guia](../restauracao-ftp-filezilla-area-de-cliente/#restaurar-um-ficheiro-a-partir-de-um-programa-ou-uma-interface).

> [!warning]
>
> O restauro do seu espaço de armazenamento por si só não será suficiente para corrigir potenciais falhas de segurança previamente presentes no seu site.
> Para identificar estas falhas de segurança, pode analisar os ["logs web"](https://docs.ovh.com/pt/hosting/partilhado_consultar_as_estatisticas_e_os_logs_do_meu_site/#logs) do seu alojamento ou recorrer a um [prestador especializado](https://partner.ovhcloud.com/pt/) a fim de realizar uma auditoria de segurança das suas soluções.
>

#### Caso n°2: o seu alojamento foi desativado há mais de duas semanas

Se o seu alojamento foi encerrado há mais de duas semanas, contacte um [fornecedor especializado](https://partner.ovhcloud.com/pt/) para efetuar uma auditoria de segurança das suas soluções. 

### Etapa 4: reativar o alojamento web

> [!warning]
>
> Recomendamos que realize uma auditoria de segurança **antes** da reabertura do alojamento. Qualquer envio de código malicioso a partir do seu alojamento pode implicar a sua responsabilidade jurídica.
>

#### Reativar o alojamento com o FileZilla

> [!primary]
>
> Se deseja instalar o software **FileZilla** para manipular os ficheiros do seu site, siga as instruções deste [guia](../partilhado_guia_de_utilizacao_do_filezilla/).
>

Abra o FileZilla e ligue-se ao seu espaço de armazenamento. A seguir, clique em `Servidor`{.action} na barra de menu e, a seguir, em `Indicar comando personalizado`{.action} (o título pode ser ligeiramente diferente consoante a versão do FileZilla que utilizar):

![command_filezilla1](images/command_filezilla1.png){.thumbnail}

Na nova janela, insira o seguinte comando e valide:

```
SITE CHMOD 705 /
```

![command_filezilla2](images/command_filezilla2.png){.thumbnail}

Uma resposta **"200 Permissions changed on /"** confirma que a operação foi bem realizada. Para o verificar, tente novamente aceder ao seu site.

#### Reativar o alojamento com o Explorador FTP "net2ftp"

Na [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt), aceda à secção `Web Cloud`{.action} e clique em `Alojamentos`{.action } e em `FTP-SSH`{.action}.

De seguida, clique no botão `Explorador FTP`{.action} e ligue-se ao espaço de armazenamento seguindo as instruções deste [guia](../aceder-espaco-de-armazenamento-ftp-alojamento-web/#1-ligacao-atraves-de-ftp-explorer). Clique no botão `Avançado`{.action} e, a seguir, no botão `Go`{.action} junto de "Send arbitrary FTP commands to the FTP server".

![net2ftp](images/net2ftp.png){.thumbnail}

Na parte superior da página, introduza o comando abaixo e clique no botão que representa um "V" verde.

![result_command_on_net2ftp](images/result_command_on_net2ftp.png){.thumbnail}

Uma resposta **"200 Permissions changed on /"** confirma que a operação foi bem realizada. Para o verificar, tente novamente aceder ao seu site.

## Quer saber mais? <a name="gofurther"></a>

[Piratagem do seu website WordPress: conselhos e casos práticos](../piratagem_do_seu_website_wordpress_conselhos_e_casos_praticos/)

[Partilhado: ativação da firewall](../partilhado_ativacao_da_firewall/)

[Mudar a versão de PHP do alojamento web](../configurar_o_php_num_alojamento_web_alojamentos_2014_ovh/)

Para serviços especializados (referenciamento, desenvolvimento, etc.), contacte os [parceiros OVHcloud](https://partner.ovhcloud.com/pt/).

Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, convidamo-lo a consultar as nossas diferentes [ofertas de suporte](https://www.ovhcloud.com/pt/support-levels/).

Fale com a nossa comunidade de utilizadores em <https://community.ovh.com/en/>.