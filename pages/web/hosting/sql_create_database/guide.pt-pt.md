---
title: 'Criar e gerir uma base de dados a partir de um alojamento web'
slug: criar-base-de-dados
excerpt: 'Saiba como usar as bases de dados incluídas num plano de alojamento web OVHcloud'
section: Bases de dados
order: 01
---

**Última atualização: 03/02/2022**

## Sumário

As bases de dados (BDD) servem para armazenar os designados «elementos dinâmicos», como comentários ou artigos. São usadas em praticamente todos os sistemas de gestão de conteúdos (content management systems - CMS), como o WordPress ou o Joomla!.

**Este guia explica os primeiros passos a dar com uma base de dados a partir do seu plano de alojamento web OVHcloud e oferece informações essenciais acerca de como a gerir.**

## Requisitos

- um [plano de alojamento web OVHcloud](https://www.ovhcloud.com/pt/web-hosting/);
- uma base de dados disponível no seu plano de alojamento web;
- acesso à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt), com as autorizações necessárias para gerir o plano de alojamento web. 

## Instruções

### Passo 1: Aceder à secção de gestão da base de dados no plano de alojamento web

Aceda à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt) e selecione `Web Cloud`{.action} na barra de navegação superior. Clique em `Planos de alojamento`{.action} e, a seguir, escolha o plano de alojamento em causa. Depois, clique no separador `Bases de dados`{.action}.

A tabela desta secção contém todas as bases de dados criadas no âmbito do seu plano de alojamento web.

![databasecreation](images/database-creation-step1.png){.thumbnail}

### Passo 2: Criar a base de dados

Há duas formas de criar uma nova base de dados:

- **Se ainda não criou uma base de dados**\: clique no botão  `Criar uma base de dados`{.action}.

- **Se já criou uma base de dados**\: clique no botão `Ações`{.action} e, a seguir, em `Criar uma base de dados`{.action}.

Na janela que se abrir, selecione a informação adequada e clique em `Seguinte`{.action}.

|Informação|Descrição|  
|---|---|  
|Motor da base de dados|Escolha o motor que a base de dados vai usar. As bases de dados incluídas num [plano de alojamento web OVHcloud](https://www.ovhcloud.com/pt/web-hosting/) só dispõem de motores MySQL.|  
|Versão da base de dados|Escolha a versão usada pelo motor da base de dados. Verifique se o seu site é compatível com a versão que escolheu. |  
|Tipo de base de dados|Escolha a dimensão da base de dados. Esta dimensão refere-se ao espaço disponível de que a base de dados dispõe para efetuar armazenamento. |   

A seguir, introduza as informações pedidas e clique em `Avançar`{.action}.

|Informação|Descrição|   
|---|---|   
|Utilizador|Introduza um nome de utilizador personalizado para ficar associado à base de dados.|   
|Palavra-passe|Introduza uma palavra-passe para este utilizador e confirme-a.|   

Verifique se todas as informações exibidas no resumo estão corretas. Em caso positivo, clique em `Confirmar`{.action} para lançar a criação da base de dados. Pode repetir este processo as vezes que precisar a fim de criar múltiplas bases de dados (em função do número máximo de bases de dados incluídas).

> [!primary]
>
> Por razões de segurança, cumpra os critérios requeridos quando criar a palavra-passe. Além disso, recomendamos que:
>
> - não use uma palavra-passe já existente;
>
> - crie uma palavra-passe que não contenha informações pessoais (como nome, sobrenome, data de nascimento, etc.);
>
> - renove a palavra-passe de forma regular;
>
> - não guarde registos escritos da sua palavra-passe e não a envie a outras pessoas através do e-mail;
>
> - não guarde palavras-passe no navegador, mesmo que ele lho sugira.
>

> [!warning]
>Tenha em atenção que, se alterar a palavra-passe de uma base de dados, todas as aplicações que acedem a essa base de dados devem ser atualizadas em conformidade.
>


![databasecreation](images/database-creation-step2.png){.thumbnail}

### Passo 3: Gerir a base de dados

> [!warning]
>Este guia não se substitui ao apoio de um professional, como um webmaster. Caso encontre dificuldades, recomendamos que recorra aos serviços de um fornecedor especializado e/ou que contacte o editor de software da sua solução. Não poderemos ajudá-lo pessoalmente. Para mais informações, consulte a secção «Saiba mais» neste guia.
>

A base de dados está pronta a ser usada. Para isso, vai precisar das suas informações de conexão: o nome de utilizador e a palavra-passe que criou, o nome da base de dados que especificou e o endereço do servidor. Estas informações são essenciais para a ligação do site à base de dados.

Em função do software usado, esta ligação pode ter de ser configurada manualmente ou através de uma interface gerada pelo próprio backend do site. Como este procedimento implica a configuração do seu site e não os serviços prestados pela OVHcloud, recomendamos que recorra aos recursos mais adequados disponíveis em linha. 

#### Aceder à interface phpMyAdmin

A OVHcloud disponibiliza uma ferramenta em linha para a gestão de bases de dados: a phpMyAdmin. Para aceder a esta aplicação, no separador `Bases de dados`{.action} clique em `...`{.action}, à direita da base de dados em causa, e a seguir selecione `Ir para phpMyAdmin`{.action} no menu suspenso.

As informações de conexão estarão pré-preenchidas na nova janela; só precisará de introduzir a palavra-passe da base de dados. Esta também é uma boa forma de verificar a sua palavra-passe atual; por exemplo, se recebeu uma mensagem de «autorização negada» num CMS.

![databasecreation](images/database-creation-step3.png){.thumbnail}


#### Backups de bases de dados

Para cada base de dados de alojamento web, todos os dias serão criados snapshots de forma automática (até 32 entidades). Isso significa que pode simplesmente restaurar uma versão anterior de uma base de dados a partir da Área de Cliente OVHcloud. 

Para verificar os snapshots disponíveis e a sua data/hora de criação, clique no símbolo junto ao círculo verde na tabela das suas bases de dados. A partir daqui também pode fazer download de cada backup das bases de dados. Para mais informações, consulte o guia [Recuperar a cópia de segurança da base de dados de um alojamento web](../partilhado_guia_de_exportacao_de_uma_base_de_dados_mysql/).

#### Problemas frequentes

**Demasiadas conexões**

As bases de dados dos alojamentos web têm um limite de 30 conexões simultâneas (variável de sistema *max_connections*). Assim, os pedidos SQL devem ser otimizados de modo a evitar este tipo de erro. Se continuar a encontrar problemas, considere tomar medidas alternativas; por exemplo: mudar para uma  [CloudDB](https://www.ovh.pt/cloud/cloud-databases/) ou fazer um [upgrade do plano de alojamento](https://www.ovhcloud.com/pt/web-hosting/uc-best-web-hosting/). 

**Erros de conexão ou «not found»**

Deve sempre usar o nome da base de dados nos scripts e ficheiros de configuração, em vez de endereços IP ou _localhosts_.

**Falta de espaço**

Se a base de dados de um alojamento web exceder o espaço de armazenamento recomendado, passará automaticamente para o modo «read only»/«select only». O administrador receberá uma notificação por e-mail.

Depois de a base de dados ser otimizada (limpa), pode recalcular a sua dimensão na Área de Cliente OVHcloud para a desbloquear. O melhor a fazer é descarregar a base de dados, gerir a revisão localmente e voltar a carregá-la por importação. Para mais informações, consulte [este guia](../partilhado_guia_de_otimizacao_das_performances_do_seu_site/#passo-7-otimizar-a-sua-base-de-dados).


## Saiba mais

[Alterar a palavra-passe da base de dados de um alojamento web](../alterar-palavra-passe-base-de-dados/)

[Recuperar a cópia de segurança da base de dados de um alojamento web](../partilhado_guia_de_exportacao_de_uma_base_de_dados_mysql/)

[Importar um backup para a base de dados de um alojamento web](../partilhado_guia_de_importacao_de_uma_base_de_dados_mysql/)

[Otimizar o desempenho do seu website](../partilhado_guia_de_otimizacao_das_performances_do_seu_site/)

Junte-se à nossa comunidade de utilizadores em <https://community.ovh.com/en/>.
