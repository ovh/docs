---
title: SQL Privado - primeira utilização
slug: sql-privado-primeira-utilizacao
excerpt: Saiba como começar a usar e a gerir o serviço SQL Privado
section: SQL Privado
---

**Última atualização: 22/03/2018**

## Sumário

O serviço SQL Privado permite associar uma instância SQL, com recursos dedicados e garantidos, a um alojamento web OVH. Com esta solução, as bases de dados existentes, ou a serem criadas, irão beneficiar de maior performance e flexibilidade. Este serviço foi criado para clientes com necessidades mais exigentes ao nível das bases de dados.

**Descubra como começar a usar a solução SQL Privado.**

## Requisitos

- Ter uma instância SQL Privado (associada a um [alojamento web](https://www.ovhcloud.com/pt/web-hosting/){.external}, ou contratar uma através da página [Opções SQL](https://www.ovhcloud.com/pt/web-hosting/options/start-sql/){.external}).
- Ter um [Alojamento Web](https://www.ovhcloud.com/pt/web-hosting/){.external} e o serviço SQL Privado localizados no mesmo datacenter (confirme esta informação na Área de cliente OVH).
- Ter acesso à [Área de Cliente OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}.

## Instruções

### Ativação do seu servidor SQL Privado incluído com o seu plano de alojamento web

Se a sua oferta de alojamento inclui a opção SQL privado, aceda à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}. Na secção `Web Cloud`{.action}, clique em `Alojamentos`{.action} na coluna da esquerda.

No separador `Informações gerais`, no quadro `Configuração`, clique no botão `...`{.action} à direita da **Base de dados privada**. Finalmente, clique em `Ativar`{.action} para lançar o processo de ativação.

![Informações gerais](images/privatesql00-SQLactivation.png){.thumbnail}

Para concluir, siga as instruções seguintes para determinar o tipo e a versão do seu servidor SQL privado. De seguida, poderá aceder através da coluna da esquerda na `Base de dados`{.action}.

### Consultar as informações gerais da instância SQL Privado

Na [Área de Cliente OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}, no menu à esquerda, aceda à secção `Bases de dados`{.action} e clique na instância SQL que pretende configurar. Certifique-se que está no separador `Informações gerais`{.action}.

> [!primary]
>
> O nome do serviço SQL Privado pode ser apresentado de duas maneiras:
>
> - combinando parte do identificador de cliente com três algarismos (001 para o primeiro serviço SQL Privado instalado, 002 para o segundo, etc.);
> - ou começar com a designação *sqlprive-*, seguida dos elementos acima indicados.
>

Esta secção apresenta as informações essenciais da instância SQL. Sugerimos que dedique alguns minutos para verificar se estão corretas ou se correspondem às indicações descritas a abaixo.

|Informação|Detalhes|
|---|---|
|Estado do serviço|Indica se a instância está ativada, a ser reiniciada ou suspensa. Para configurar a instância SQL, esta tem que estar ativada.|
|Tipo|Indica o sistema de base de dados usado pelo servidor. O sistema «MySQL» é o mais comum, mas existem outros (PostgreSQL, MariaDB).|
|Versão|Indica a versão do sistema da base de dados. Por favor, verifique a compatibilidade do seu site com a versão selecionada.|
|RAM|Indica a RAM disponível para a instância, e avisa quando os limites da RAM são ultrapassados. Neste serviço, os recursos RAM são dedicados e garantidos. Se precisar de mais recursos, pode fazer um upgrade e receber notificações quando o limite de memória for atingido.|
|Infraestrutura|Indica a infraestrutura / plataforma usada pela sua instância (i.e. informação relativa à infraestrutura da OVH). |
|Datacenter|Indica o datacenter onde instância está alojada. Certifique-se que a instância e o alojamento web usado pelo seu site estão no mesmo datacenter.|
|Host|Indica o servidor OVH onde a instância foi criada. Esta informação, inerente à infraestrutura da OVH, poderá ser incluída na página sobre o [Estado dos Serviços](http://travaux.ovh.net/){.external}.|

![Informações gerais](images/privatesql01-General-information.png){.thumbnail}

### Criar uma base de dados

As bases de dados armazenam inúmeros dados do seu site (e.g. comentários de um blogue).

Para criar a primeira base de dados, clique no separador `Bases de dados`{.action} e no botão `Criar base de dados`{.action}.

![Criar uma base de dados](images/privatesql02-Adding-a-database.png){.thumbnail}

De seguida, surge uma janela com várias opções, como «criar utilizador». Para poder aceder à instância e efetuar ações na base de dados (leitura, inserção ou eliminação dos dados), é necessário criar um utilizador e atribuir as devidas permissões de acesso.

Para tal, selecione `Criar um utilizador`{.action}. Se preferir, pode ignorar esta opção e criar o utilizador mais tarde. 

Agora, preencha os campos de acordo com as indicações apresentadas. De seguida, clique em `Confirmar`{.action}.

- **Nome da base de dados** (obrigatório): nome da futura base de dados.
- **Nome de utilizador** (se a opção «criar utilizador» estiver selecionada): utilizador com permissões para aceder e realizar operações na base de dados.
- **Permissões** (se a opção «criar utilizador» estiver selecionada): permissões atribuídas ao utilizador da base de dados. Para uma utilização normal, selecione `Administrador`{.action}. As permissões podem ser redefinidas a qualquer momento.
- **Palavra-passe**/**Confirmar palavra-passe** (se a opção «criar utilizador» estiver selecionada): escolha uma palavra-passe e clique em confirmar.

> [!warning]
>
> Por razões de segurança, preencha os campos de acordo com as indicações apresentadas.
>

![Criar uma base de dados](images/privatesql03-Adding-a-database-part2.png){.thumbnail}

### Criar utilizador (opcional)

A utilização normal não exige mais do que um utilizador. Se adicionou um utilizador durante o processo de criação da base de dados (ver procedimento anterior), e não pretende criar mais utilizadores, passe à etapa seguinte. Todavia, certos projetos exigem o acesso de vários utilizadores à base de dados, e a definição de diferentes tipos de permissões para cada utilizador (e.g. leitura e escrita, só leitura,...). Precisa de criar mais utilizadores? Siga as instruções abaixo.

 Para criar um utilizador, clique no separador `Utilizadores e permissões`{.action} e no botão `Adicionar utilizador`{.action}.

![Adicionar utilizador](images/privatesql04-Adding-a-user.png){.thumbnail}

Na nova janela, preencha as informações de acordo com as indicações apresentadas, e clique em `Confirmar`{.action}.

- **Nome do utilizador**: utilizador com permissões para aceder e realizar operações na base de dados. A etapa seguinte mostra como definir as permissões de acesso.
- **Palavra-passe**/**Confirmar palavra-passe**: introduza uma palavra-passe e clique em confirmar.

> [!warning]
>
> Por razões de segurança, preencha os campos de acordo com as indicações apresentadas.
>

![Adicionar utilizador](images/privatesql05-Adding-a-user-part2.png){.thumbnail}

Depois de criar o utilizador, é necessário definir as permissões de acesso à base de dados (e.g. leitura, inserção ou eliminação de dados). Para tal, clique no ícone em forma de roda dentada e em `Gerir permissões`{.action}.

![Gerir permissões](images/privatesql06-Adding-a-right.png){.thumbnail}

Agora selecione o tipo de permissão. Para uma utilização normal, selecione `Administrador`{.action}.

![Gerir permissões](images/privatesql07-Adding-a-right-part2.png){.thumbnail}

### Importação de uma base de dados (opcional)

Este procedimento serve para importar um backup de uma base de dados já existente (e.g. de um site transferido para a OVH; ou para transferir bases de dados para a instância SQL Privado). Se não precisar de efetuar esta operação, passe à etapa seguinte.

As bases de dados podem ser importadas de várias formas. Este manual mostra como efetuar a importação através da Área de Cliente.  Pretende usar outro método? 

#### Etapa 1: aceder à área de importação de bases de dados

Clique no separador `Bases de dados`{.action}. A seguir clique no ícone em forma de roda dentada e em `Importar ficheiro`{.action}.

![Importar ficheiro](images/privatesql08-import-a-file.png){.thumbnail}

Na nova janela, selecione `Importar novo ficheiro`{.action}. Clique em `Seguinte`{.action}.

![Importar ficheiro](images/privatesql09-import-a-file-part2.png){.thumbnail}

#### Etapa 2: selecionar e enviar o ficheiro de backup

Introduza o nome do ficheiro (i.e. para ser identificado mais facilmente, caso pretenda restaurá-lo mais tarde). De seguida, clique em *browse*, aceda a localização correta e selecione o ficheiro de backup. Depois clique em `Enviar`{.action}.

Aguarde a confirmação de envio. De seguida, clique em `Seguinte`{.action}.

![Importar ficheiro](images/privatesql10-import-a-file-part3.png){.thumbnail}

#### Etapa 3: iniciar a importação da base de dados 

Nesta fase, tem várias opções disponíveis.

- **Eliminar conteúdo da base de dados**: o conteúdo da BD será completamente eliminado e substituído pelo conteúdo do backup. No nosso exemplo, a base de dados está vazia. Neste caso, não é necessário eliminar o conteúdo da BD.
- **Enviar e-mail no final da importação**: no final do processo, é enviado um e-mail para informar que a importação foi concluída.

![Importar ficheiro](images/privatesql11-import-a-file-part4.png){.thumbnail}

### Ligar o site à base de dados

Por esta altura, a base de dados está criada e as permissões dos utilizadores estão definidas. Agora só falta estabelecer a ligação entre o site e a base de dados. A concretização desta etapa depende do tipo de site, do CMS (WordPress, Joomla, etc.) ou da etapa de instalação do CMS / site.

Durante este procedimento, serão solicitadas cinco informações essenciais:

- **nome da base de dados**: nome atribuído à base de dados no momento da criação da mesma;
- **nome do utilizador**: nome atribuído ao utilizador durante criação da BD, ou a um utilizador criado posteriormente.
- **palavra-passe do utilizador**: palavra-passe do utilizador;
- **nome do servidor host**: endereço do servidor usado para ligar o site à base de dados. Esta informação está disponível na Área de Cliente, separador `Informações gerais`{.action}, tabela **Informações da ligação**.
- **porta do servidor**: porta de ligação à instância SQL Privado, que permite a comunicação entre o site e a base de dados. Esta informação está disponível na Área de Cliente, separador `Informações gerais`{.action}, tabela **Informações da ligação**.

> [!warning]
>
> Em certos casos, o campo `Porta`{.action} pode não estar disponível na área de configuração do site. Neste caso, terá de adicionar esta informação a seguir ao nome servidor host, separando os campos com «dois pontos» (exemplo: endereçohost:porta).
>

![Ligação SQL](images/privatesql12-sql_connection.png){.thumbnail}

Agora pode finalizar a instalação do CMS ou a transferência da base de dados para a nova instância SQL.

## Quer saber mais?

Fale com a nossa comunidade de utilizadores: <https://community.ovh.com/en/>.
