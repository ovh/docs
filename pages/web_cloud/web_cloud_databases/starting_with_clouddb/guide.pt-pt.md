---
title: 'Web Cloud Databases - Primeira utilização'
excerpt: 'Saiba como começar a utilizar a solução Web Cloud Databases'
updated: 2026-03-24
---

## Objetivo

A solução Web Cloud Databases fornece uma instância de bases de dados com recursos dedicados e garantidos, proporcionando desempenho e flexibilidade.
Por predefinição, a solução Web Cloud Databases está associada à rede de alojamentos web da OVHcloud. Também pode associá-la a qualquer outra rede através de uma lista de endereços IP autorizados.

**Saiba como começar a utilizar a solução Web Cloud Databases.**

## Requisitos

- Uma [instância Web Cloud Databases](/links/web/databases) (incluída num plano de [alojamento web Performance](/links/web/hosting)).

<!-- CP-NAV-START:web-cloud-databases -->
---

### Acesso à Área de Cliente OVHcloud

- **Ligação direta:** [Web Cloud Databases](/links/control-panel/web-cloud-databases)
- **Caminho de navegação:** `Web Cloud`{.action} > `Web Cloud Databases`{.action} > Selecione o seu serviço de base de dados

---
<!-- CP-NAV-END:web-cloud-databases -->

## Instruções

### Ativação do servidor Web Cloud Databases incluído no plano de alojamento web


Se o seu plano de alojamento inclui a opção Web Cloud Databases, clique nos separadores abaixo para visualizar cada uma das **3** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Aceda à página [Alojamentos](/links/control-panel/web-hosting) e selecione o alojamento web em causa.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Etapa 2**
>>
>> No separador `Informações gerais`, na secção `Configuração`, clique no botão `...`{.action} à direita de **Web Cloud Databases**. De seguida, clique em `Ativar`{.action} para iniciar o processo de ativação.
>>
>> ![Informações gerais](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/web-cloud-databases-enable.png){.thumbnail}
>>
> **Etapa 3**
>>
>> Siga as instruções apresentadas para determinar o tipo e a versão do servidor Web Cloud Databases. Ficará depois acessível na coluna da esquerda, em `Web Cloud Databases`{.action}.


### Consultar as informações gerais da instância


Clique nos separadores abaixo para visualizar cada uma das **2** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Aceda à página [Web Cloud Databases](/links/control-panel/web-cloud-databases) e escolha a solução correspondente.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
>> > [!primary]
>> >
>> > O nome do serviço Web Cloud Databases na Área de Cliente OVHcloud contém uma parte da sua referência de cliente e termina com três algarismos (001 para o primeiro serviço Web Cloud Databases instalado, 002 para o segundo, etc.).
>>
> **Etapa 2**
>>
>> Certifique-se de que está no separador `Informações gerais`{.action}.
>>
>> Verifique se as informações apresentadas estão corretas ou correspondem às indicações abaixo.
>>
>> |Informação|Detalhes|
>> |---|---|
>> |Estado do serviço|Indica se a instância está iniciada, a reiniciar ou suspensa. A instância deve estar iniciada para que possa realizar operações.|
>> |Tipo|Indica o sistema de bases de dados utilizado pelo servidor.|
>> |Versão|Indica a versão do sistema de bases de dados utilizada pelo servidor. Verifique a compatibilidade do seu website com a versão escolhida.|
>> |Saturação CPU|Indica o tempo de CPU em saturação. A instância Web Cloud Databases não é limitada em termos de CPU, mas é necessário garantir que não a sobrecarrega.|
>> |RAM|Indica a memória RAM disponível para a instância, bem como eventuais excedentes de memória. A instância Web Cloud Databases dispõe de recursos dedicados e garantidos: a sua memória RAM. Se necessário, pode aumentá-la e ser notificado caso consuma todos os recursos de memória da instância.|
>> |Infraestrutura|Indica a infraestrutura utilizada pela instância. Trata-se de uma informação inerente à infraestrutura da OVHcloud.|
>> |Datacenter|Indica o datacenter onde a instância foi criada.|
>> |Host|Indica o servidor OVHcloud no qual a instância foi criada. Trata-se de uma informação inerente à infraestrutura da OVHcloud e pode ser utilizada nas comunicações relativas a [incidentes OVHcloud](https://www.status-ovhcloud.com/).|
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/general-information/general-information.png){.thumbnail}


### Criar uma base de dados

> [!primary]
>
> Este passo não se aplica ao sistema de bases de dados Redis.


Clique nos separadores abaixo para visualizar cada uma das **4** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Aceda à página [Web Cloud Databases](/links/control-panel/web-cloud-databases) e escolha a solução correspondente.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Etapa 2**
>>
>> Clique no separador `Bases de dados`{.action}.
>>
> **Etapa 3**
>>
>> Clique em `Criar base de dados`{.action}.
>>
>> ![web-cloud-databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/databases/add-database.png){.thumbnail}
>>
>> > [!primary]
>> >
>> > A criação de esquemas PostgreSQL não está atualmente disponível nos servidores Web Cloud Databases.
>>
> **Etapa 4**
>>
>> Preencha os campos de acordo com os critérios indicados. Pode criar diretamente um utilizador assinalando a opção **"Criar um utilizador"**:
>>
>> - **Nome da base de dados** (obrigatório): é o nome da sua futura base de dados.
>> - **Nome de utilizador** (apenas se a opção `Criar um utilizador` estiver assinalada): o utilizador que poderá conectar-se à base de dados e efetuar consultas.
>> - **Permissões** (apenas se a opção `Criar um utilizador` estiver assinalada): as permissões associadas ao utilizador na base de dados. Para uma utilização padrão, selecione `Administrador`{.action}. As permissões podem ser alteradas posteriormente.
>> - **Palavra-passe**/**Confirmar palavra-passe** (apenas se a opção `Criar um utilizador` estiver assinalada): selecione uma palavra-passe e confirme-a.
>>
>> Clique em `Validar`{.action}.
>>
>> ![web-cloud-databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/databases/add-database-confirmation.png){.thumbnail}


### Criar um utilizador

> [!primary]
>
> Este passo não se aplica ao sistema de bases de dados Redis.

Se criou o utilizador ao mesmo tempo que a base de dados no passo anterior, este passo é facultativo. No entanto, um projeto pode exigir vários utilizadores com permissões diferentes (por exemplo, leitura/escrita para um e apenas leitura para outro).


Se o seu projeto não necessitar de um utilizador adicional, pode avançar para o passo seguinte. Caso contrário, clique nos separadores abaixo para visualizar cada uma das **4** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Aceda à página [Web Cloud Databases](/links/control-panel/web-cloud-databases) e escolha a solução correspondente.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Etapa 2**
>>
>> Clique no separador `Utilizadores e permissões`{.action}.
>>
> **Etapa 3**
>>
>> Clique em `Adicionar utilizador`{.action}.
>>
>> ![web-cloud-databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/users-and-rights/add-user.png){.thumbnail}
>>
> **Etapa 4**
>>
>> Introduza um "nome de utilizador" e uma "palavra-passe" e clique em `Validar`{.action}.


Se precisar de alterar as permissões de um utilizador existente, consulte o nosso guia "[Web Cloud Databases - Alterar as permissões de um utilizador](/pages/web_cloud/web_cloud_databases/modify_rights_for_users)".

### Importar uma base de dados

> [!primary]
>
> Este passo aplica-se caso pretenda importar uma cópia de segurança de uma base de dados existente. Se não for o caso, avance para o passo seguinte.

Para importar uma base de dados, consulte o nosso guia "[Restaurar e importar uma base de dados no servidor de bases de dados](/pages/web_cloud/web_cloud_databases/restore-import-on-database-server)".

São descritos vários métodos de importação.

### Autorizar um endereço IP


Para que a instância Web Cloud Databases funcione, é necessário indicar os IPs ou intervalos de IP autorizados a conectar-se às bases de dados.

Para isso, clique nos separadores abaixo para visualizar cada uma das **4** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Aceda à página [Web Cloud Databases](/links/control-panel/web-cloud-databases) e escolha a solução correspondente.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Etapa 2**
>>
>> Na página apresentada, clique no separador `Endereços IP autorizados`{.action}.
>>
>> ![IPs autorizados](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/authorised-ips.png){.thumbnail}
>>
> **Etapa 3**
>>
>> Clique no botão `Adicionar um endereço IP / máscara`{.action} acima da tabela.
>>
>> ![Interface de IPs autorizados](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/authorized-ips/tab-0000-sftp-hosting-enabled.png){.thumbnail}
>>
>> > [!success]
>> >
>> > Se pretender alterar um endereço IP ou intervalo de IP já autorizado, clique no botão `...`{.action} à direita da linha correspondente na tabela e depois em `Editar whitelist`{.action}.
>>
> **Etapa 4**
>>
>> Na janela que se abre, vários campos devem ser preenchidos:
>>
>> ![Adicionar um endereço IP ou máscara](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/authorized-ips/add-an-ip-address-mask-confirmation.png){.thumbnail}
>>
>> - `IP/máscara *`{.action}: Introduza o endereço IP (p. ex., `203.0.113.44`) ou o intervalo de IP (p. ex., `203.0.113.0/24` que representa todos os endereços IP de `203.0.113.0` a `203.0.113.255`) que pretende autorizar na solução Web Cloud Databases.
>> - `Descrição`{.action} (opcional): Pode adicionar informações sobre a função do endereço IP ou do intervalo de IP em questão.
>> - `Base de dados`{.action}: Assinale esta opção para que o endereço IP ou o intervalo de IP possa aceder às bases de dados da solução Web Cloud Databases.
>> - `SFTP`{.action}: Assinale esta opção para que o endereço IP ou o intervalo de IP possa aceder aos logs da solução Web Cloud Databases.
>>
>> > [!warning]
>> >
>> > É fortemente desaconselhado assinalar a opção `Base de dados`{.action} para autorizar o intervalo de IP `0.0.0.0/0` a aceder às suas bases de dados.
>> >
>> > Isto permitiria que todos os endereços IPv4 existentes acedessem às suas bases de dados.
>>
>> Depois de introduzir as informações, clique no botão `Validar`{.action}.


### Autorizar as ligações a partir de um alojamento web OVHcloud <a name="trustip"></a>

Por predefinição, a solução Web Cloud Databases está automaticamente associada aos alojamentos web da OVHcloud. Se desejar, pode desativar o acesso dos alojamentos web da OVHcloud ao Web Cloud Databases.

Para isso, consulte os casos particulares do nosso guia "[Web Cloud Databases - Como autorizar um endereço IP?](/pages/web_cloud/web_cloud_databases/authorise_IP)" para ativar ou desativar o acesso dos alojamentos web da OVHcloud ao Web Cloud Databases.

### Associar o website à base de dados


Agora que a base de dados está criada, um ou mais utilizadores têm permissões sobre ela e pelo menos um endereço IP ou os alojamentos web da OVHcloud foram autorizados na instância Web Cloud Databases, só falta associar o website à base de dados. Este passo pode ser efetuado de várias formas, em função do website ou do CMS (WordPress, Joomla!, etc.) utilizado, bem como da etapa em que se encontra se estiver a instalar um website.

Para isso, necessita das seguintes 5 informações:

|Informação|Descrição|
|---|---|
|Nome da base de dados|O nome definido durante a criação da base de dados.|
|Nome de utilizador|O nome de utilizador definido durante a criação da base de dados ou um eventual utilizador adicional.|
|Palavra-passe do utilizador|A palavra-passe associada ao utilizador, definida nos passos anteriores.|
|Nome de host do servidor|O servidor a indicar para que o website se possa ligar à base de dados.|
|Porta do servidor|A porta de ligação à instância Web Cloud Databases, para que o website se possa ligar à base de dados.|

Para as obter, clique nos separadores abaixo para visualizar cada uma das **2** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Aceda à página [Web Cloud Databases](/links/control-panel/web-cloud-databases) e escolha a solução correspondente.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Etapa 2**
>>
>> Obtenha as seguintes informações de ligação:
>>
>> - **Servidor (nome de host) e porta:** visíveis no separador `Informações gerais`{.action}, na secção `Informações de ligação`.
>> - **Nome de utilizador:** visível no separador `Utilizadores e permissões`{.action}.
>> - **Palavra-passe:** a palavra-passe associada ao utilizador. Se a esqueceu, aceda ao separador `Utilizadores e permissões`{.action}, clique em `...`{.action} à direita do utilizador em causa e depois em `Alterar palavra-passe`{.action}.
>>
>> > [!warning]
>> >
>> > Se alterar a palavra-passe de um utilizador da base de dados, todas as aplicações/websites que acedem a esta base de dados devem ser atualizados em conformidade.

> [!warning]
>
> O campo `porta`{.action} pode não estar disponível na configuração do seu website. Deve adicionar este campo após o nome de host do servidor, separando-os com *:*.
>
> Por exemplo, para o nome de host `aaXXXXX-XXX.eu.clouddb.ovh.net` com a porta SQL `12345`, deverá introduzir `aaXXXXX-XXX.eu.clouddb.ovh.net:12345` na secção "Host" / "Nome de host".


### Obter os logs do servidor Web Cloud Databases

Para aceder aos logs da solução Web Cloud Databases, consulte o nosso guia "[Web Cloud Databases - Como obter os logs?](/pages/web_cloud/web_cloud_databases/retrieve-logs)".

## Quer saber mais?

[Criar bases de dados e utilizadores no servidor de bases de dados](/pages/web_cloud/web_cloud_databases/create-db-and-user-on-db-server)

[Conectar-se à base de dados do servidor de bases de dados](/pages/web_cloud/web_cloud_databases/connecting-to-database-on-database-server)

[Guardar e exportar uma base de dados no servidor de bases de dados](/pages/web_cloud/web_cloud_databases/save-export-on-database-server)

[Restaurar e importar uma base de dados no servidor de bases de dados](/pages/web_cloud/web_cloud_databases/restore-import-on-database-server)

[Configurar o servidor de bases de dados](/pages/web_cloud/web_cloud_databases/configure-database-server)

Para serviços especializados (referenciamento, desenvolvimento, etc.), contacte os [parceiros OVHcloud](/links/partner).

Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](/links/support).

Fale com nossa [comunidade de utilizadores](/links/community).
