---
title: "Recuperar o backup de uma base de dados eliminada"
excerpt: "Saiba como recuperar o backup de uma base de dados quando esta foi eliminada a partir da Área de Cliente OVHcloud"
updated: 2024-07-25
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

## Objetivo

A maioria dos nossos serviços de [alojamento web](/links/web/hosting) incluem bases de dados. Se, acidentalmente, eliminar uma base de dados associada ao seu alojamento web, pode tentar recuperar a cópia de segurança através das nossas API.

**Saiba como recuperar, através das API OVHcloud, o backup de uma base de dados quando esta foi eliminada a partir da Área de Cliente OVHcloud.**

> [!warning]
>
> A OVHcloud oferece-lhe serviços cuja configuração, gestão e responsabilidade é da sua responsabilidade. Assim, deverá assegurar o seu bom funcionamento.
>
> Este guia fornece as instruções necessárias para realizar as operações mais habituais. No entanto, se encontrar dificuldades, recomendamos que recorra a um [fornecedor especializado](/links/partner). Não poderemos fornecer-lhe assistência complementar a nível das API. Para mais informações, consulte a secção ["Quer saber mais?"](#go-further) deste guia.
>

## Requisitos

- Dispor de um [serviço de alojamento web OVHcloud](/links/web/hosting) ativo que inclui uma (ou várias) base(s) de dados partilhada(s) OVHcloud associada(s).
- A eliminação da base de dados deve ter menos de 30 dias.

## Instruções

As API da OVHcloud são disponibilizadas para permitir que os programadores ou os integradores associem, por exemplo, funcionalidades presentes ou não na Área de Cliente OVHcloud diretamente nas suas aplicações ou soluções.

> [!warning]
>
> Os backups propostos pela OVHcloud para os alojamentos partilhados e as suas bases de dados associadas são não contratuais. Além disso, oferecemos-lhe os nossos serviços para o ajudar em situações de emergência. Recomendamos que efetue regularmente os seus próprios backups de segurança para paliar as eventuais perdas de dados.
>
> Além disso, quando uma base de dados é eliminada pelo seu utilizador ou administrador, a OVHcloud não poderá garantir a recuperação do backup pelas razões acima mencionadas.
>

### Etapa 1 - Obter o nome do alojamento web ao qual estava associada a base de dados eliminada

Para recuperar o nome do seu alojamento web, execute as seguintes ações:

1. Aceda à [Área de Cliente OVHcloud](/links/manager).
2. Na linha situada no topo da Área de Cliente, clique no separador `Web Cloud`{.action}.
3. Na coluna da esquerda, clique no menu pendente `Alojamentos`{.action}.
4. Selecione o alojamento web em causa.
5. No canto superior esquerdo da página que é apresentada, encontre o nome do seu alojamento web à direita da menção `Alojamentos /`{.action}.

![API](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/find-webhosting-name.png){.thumbnail}

### Etapa 2 - Ligar-se às API OVHcloud e permitir-lhes o acesso aos seus serviços

Para isso, efetue as seguintes ações:

- Aceda ao nosso website [API OVHcloud](/links/api) (verifique se está em `https://eu.api.ovh.com` se os seus serviços estão alojados na Europa e em `https://ca.api.ovh.com` se estiverem alojados fora da Europa).
- Na página que se abrir, clique em `Explore the OVHcloud API`{.action}.
- Na nova página que aparece, e no lado esquerdo da página, aceda ao formulário situado à direita do formulário `v1`{.action} e selecione/introduza a escolha `/hosting/web`.
- Na lista de API que aparece em baixo na coluna da esquerda, procure e clique na seguinte API: **GET /hosting/web/{serviceName}/dump**. Pode também clicar diretamente na API para aceder:

> [!api]
>
> @api {v1} /hosting/web GET /hosting/web/{serviceName}/dump
>

- À direita da página será apresentada a API com os seus diferentes formulários a preencher.
- Clique no botão situado no canto superior direito intitulado `Authenticate`{.action} e, a seguir, no botão `Login with OVHcloud SSO`{.action}.
- Abre-se a interface de ligação ao seu [Área de Cliente OVHcloud](/links/manager).
- Ligue-se com o seu identificador de cliente e clique em `Authorize`{.action} para utilizar as API da OVHcloud com os serviços presentes na sua Área de Cliente.
- De seguida, será automaticamente reencaminhado para a página anterior da API **GET /hosting/web/{serviceName}/dump** ao estar ligado à Área de Cliente OVHcloud.

### Etapa 3 - Verificar a disponibilidade dos backups e recuperar o ID do último backup

Para isso, preencha os diferentes formulários tal como se especifica a seguir:

- Para a secção intitulada `PATH PARAMETERS`:
- `serviceName`: Introduza o nome do seu alojamento web anteriormente recuperado na etapa 1 deste guia.

- Para a secção intitulada `QUERY-STRING PARAMETERS`:
- `creationDate.from`: Deixe o formulário vazio.
- `creationDate.to`: Deixe o formulário vazio.
- `databaseName`: Introduza o nome da base de dados eliminada acidentalmente. (exemplo: **deletedDatabase.mysql.db**).
- `deletionDate.from`: Deixe o formulário vazio.
- `deletionDate.to`: Deixe o formulário vazio.
- `orphan`: Introduza o valor em minúsculas: `true`.

![API](/pages/assets/screens/api/get-hosting-web-servicename-dump.png){.thumbnail}

Depois de preencher os diferentes formulários, clique no botão azul `Try`{.action} situado no canto inferior direito das duas secções previamente preenchidas.

Se tiver introduzido tudo corretamente e houver backups disponíveis para a base de dados eliminada, aparecerá uma lista de números de ID de backup na janela `RESPONSE`{.action} ao descer para a página abaixo do botão `Try`{.action}.

![API](/pages/assets/screens/api/get-hosting-web-servicename-dump-response.png){.thumbnail}

Cada um destes números corresponde a um identificador de backup disponível (ID). Estes números de ID de backup são apresentados entre os mais recentes e os mais antigos. **Copie o ID mais alto da lista** (sem o `,` no final) se deseja recuperar (no passo 4 deste guia) o último backup da sua base de dados eliminada.

Se não aparecer nenhum ID na janela, certifique-se de que está ligado com o identificador de cliente OVHcloud correto (se tiver mais do que um). Verifique também as informações introduzidas nas secções **PATH PARAMETERS** e **QUERY-STRING PARAMETERS**. De seguida, volte a executar a operação.

Se, apesar de tudo, não tiver um ID que apareça, é porque não há ou mais backups disponíveis para a base de dados eliminada na nossa infraestrutura.

### Etapa 4 - Recuperar o último backup

Graças ao número de identificação de backup recuperado no passo 3, poderá descarregar, graças a uma ligação gerada pela API, o último backup da sua base de dados eliminada.

Para isso, aceda ao nosso website [API OVHcloud](/links/api) e efetue as seguintes ações:

- No lado esquerdo da página, aceda ao formulário situado à direita do formulário `v1`{.action} e selecione/introduza a escolha `/hosting/web`{.action}.
- Na lista de API que aparece em baixo na coluna da esquerda, procure e clique na seguinte API: **GET /hosting/web/{serviceName}/dump/{id}**. Pode também clicar diretamente na API para aceder:

> [!api]
>
> @api {v1} /hosting/web GET /hosting/web/{serviceName}/dump/{id}
>

- À direita da página será apresentada a API com os seus diferentes formulários a preencher.

Preencha os diferentes formulários da parte `PATH PARAMETERS` assim:

- `id`: Copie o número de identificação de backup recuperado na etapa 3. Se não esteve desligado do nosso site API OVHcloud, a interface pode propor-lhe diretamente os diferentes números de ID de backup disponíveis. Se tal for o caso, pode clicar diretamente no primeiro número de ID da lista presente logo abaixo do formulário **id**.
- `serviceName`: Introduza o nome do seu alojamento web anteriormente recuperado na etapa 1 deste guia.

![API](/pages/assets/screens/api/get-hosting-web-servicename-dump-id.png){.thumbnail}

Depois de preencher os diferentes formulários, clique no botão azul `Try`{.action} situado no canto inferior direito da secção previamente preenchida.

Se tudo tiver sido indicado corretamente, o seguinte resultado aparecerá na janela `RESPONSE`{.action} quando descer para a página abaixo do botão `Try`{.action} :

![API](/pages/assets/screens/api/get-hosting-web-servicename-dump-id-response.png){.thumbnail}

```bash
{
  "taskId": null,
  "orphan": true,
  "status": "created",
  "deletionDate": "2024-07-18T20:02:00+02:00",
  "databaseName": "deleteDatabase.mysql.db",
  "url": "Find here the complete URL to download the deleted database backup",
  "type": "now",
  "creationDate": "2024-06-17T22:17:42+02:00",
  "id": 22XXXXX888
}
```

> [!warning]
>
> As linhas presentes no resultado acima nem sempre aparecem nesta ordem.
>

Neste resultado, copie a totalidade do URL em "HTTPS" **sem os aspas** presentes à direita da menção `"url":` e, a seguir, cole-o na barra de pesquisa do seu browser para iniciar a transferência do backup.

### Etapa 5 - Criar uma nova base de dados, importar o ficheiro de backup e restabelecer a ligação entre o seu website e a nova base de dados

Uma vez recuperada a cópia de segurança da base de dados, deverá criar uma nova base de dados. Para isso, consulte o guia "[Criar uma base de dados no alojamento web](/pages/web_cloud/web_hosting/sql_create_database)".

Quando esta nova base de dados for criada, importe o backup através do nosso guia "[Importar um backup para a base de dados de um alojamento web](/pages/web_cloud/web_hosting/sql_importing_mysql_database)".

Para terminar, associe a sua base de dados OVHcloud ao ficheiro de configuração do seu website, presente no [espaço de armazenamento FTP do seu alojamento OVHcloud](/pages/web_cloud/web_hosting/ftp_connection).
Para isso, substitua as informações de ligação da base de dados eliminada acidentalmente pelas da sua nova base de dados OVHcloud. Estas informações encontram-se no ficheiro de "configuração/ligação à sua base de dados" do seu website.

> [!success]
>
> Para associar a sua nova base de dados se utilizar um Content Management System (CMS) como WordPress, Joomla!, Drupal ou PrestaShop, encontre as informações sobre os seus ficheiros de configuração a partir de **na etapa 2** do guia "[Alterar a palavra-passe de uma base de dados](/pages/web_cloud/web_hosting/sql_change_password)".
>

## Quer saber mais? <a name="go-further"></a>

[Criar uma base de dados no alojamento web](/pages/web_cloud/web_hosting/sql_create_database).

[Importar um backup para a base de dados de um alojamento web](/pages/web_cloud/web_hosting/sql_importing_mysql_database).

[Alterar a palavra-passe de uma base de dados](/pages/web_cloud/web_hosting/sql_change_password).
 
Para serviços especializados (referenciamento, desenvolvimento, etc), contacte os [parceiros OVHcloud](/links/partner).
 
Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](/links/support).
 
Fale com nossa [comunidade de utilizadores](/links/community).