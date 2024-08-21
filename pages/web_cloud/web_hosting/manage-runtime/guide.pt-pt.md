---
title: "Gerir os motores de execução de um alojamento Cloud Web"
excerpt: "Saiba como gerir os motores de execução do seu alojamento para concretizar os seus projetos"
updated: 2022-07-27
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

## Objetivo

A Cloud Web oferece a possibilidade de construir um projeto em diferentes linguagens de programação. De facto, para concretizar um projeto, é possível que tenha de utilizar um motor de execução específico.

**Saiba como gerir os motores de execução do seu alojamento Cloud Web.**

## Requisitos

- Ter um serviço de alojamento [Cloud Web](/links/web/hosting-cloud-web-offer).
- Ter acesso à [Área de Cliente OVHcloud](/links/manager), secção `Web Cloud`{.action}.

## Instruções

Para melhor se adaptar ao seu projeto, a Cloud Web permite-lhe dispor de um ou vários motores de execução. A utilização de um ou outro motor de execução dependerá das necessidades específicas de cada projeto. 

Desta forma, em primeiro lugar, **certifique-se de que o seu projeto é tecnicamente compatível com o seu alojamento Cloud Web**. Pode consultar as linguagens compatíveis na seguinte ligação: <https://www.ovhcloud.com/pt/web-hosting/cloud-web-offer/> 

Depois de escolher o ou os motores de execução que pretende utilizar, pode efetuar as seguintes ações:

### Etapa 1: aceder à gestão dos motores de execução

Para aceder aos motores de execução do seu alojamento Cloud Web, aceda à [Área de Cliente OVHcloud](/links/manager){.external}. Clique em `Alojamentos`{.action} na barra de serviços à esquerda e, em seguida, selecione o alojamento Cloud Web correspondente. Por fim, clique no separador `Motores de execução`{.action}.

A tabela que aparece indica os motores de execução adicionados atualmente ao seu alojamento Cloud Web. Ao instalar um alojamento, um motor será automaticamente criado.

![cloudweb](/pages/assets/screens/control_panel/product-selection/web-cloud/cloud-web/runtime-software-application/tab-phpfpm7-4.png){.thumbnail}

### Etapa 2: gerir os motores de execução

A gestão dos motores de execução do seu alojamento Cloud Web realiza-se de várias formas:

- [adicionar ou alterar um motor de execução](./#21-Adicionar-ou-alterar-um-motor-de-execucao){.external} (o número máximo de motores depende do [plano escolhido](/links/web/hosting-cloud-web-offer){.external});
- definir um motor enquanto escolha predefinida;
- eliminar um motor de execução.

#### 2.1 Adicionar ou alterar um motor de execução

> [!primary]
>
> Antes de alterar um motor de execução, certifique-se de que essa ação não causará a indisponibilidade dos sites ou aplicações que utilizam o motor. Para isso, consulte a coluna `Número de multi-sites relacionados` do motor em questão. Na janela `Multi-site`, poderá também consultar o motor utilizado para cada domínio na coluna Motor de execução da tabela.
> 
> Para permitir a eliminação de um motor de execução, é necessário eliminar as entradas multisite que utilizam este último.

Para adicionar ou alterar um motor de execução, aceda ao separador `Motores de execução`{.action} do alojamento Cloud Web em questão. A partir daí:

- **se pretender adicionar um motor**: clique em `Ações`{.action} na parte superior da tabela e em `Adicionar um motor de execução`{.action};
- **se pretender alterar um motor**: clique no botão `...`{.action} à direita do motor em questão e, a seguir, em `Alterar`{.action}.

Na nova janela que aparecerá, preencha as informações necessárias e prossiga em função do motor de execução selecionado:

- [PHP](./#php){.external} 
- [Node.js](./#nodejs){.external}
- [Ruby](./#ruby){.external} 
- [Python](./#python){.external} 

##### **PHP**

|Informação|Descrição| 
|---|---| 
|Nome personalizado|Insira um nome que lhe permita distinguir este motor do resto dos motores na sua Área de Cliente OVHcloud.|  
|Motor de execução|Escolha o novo motor de execução desejado.|  

Concluída esta etapa, clique no botão `Validar`{.action}. Certifique-se de que este motor de execução está a ser utilizado pelo(s) multi-site(s) pretendido(s). Para isso, passe para a etapa 3 [“ Associar o motor de execução a um multi-site ”](./#etapa-3-associar-o-motor-de-execucao-a-um-multi-site){.external}.

##### **Node.js**

|Informação|Descrição| 
|---|---| 
|Nome personalizado|Insira um nome que lhe permita distinguir este motor do resto dos motores na sua Área de Cliente OVHcloud.|
|Motor de execução|Escolha o novo motor de execução desejado.|
|Caminho de acesso do diretório público|Indique o diretório no qual ficará alojado o conteúdo estático (o motor não executará este conteúdo).|
|Ambiente da aplicação|Indique se se trata de um ambiente de “produção”, de “teste” ou de “desenvolvimento”. Tenha em conta que este último tem um comportamento diferente e apresenta erros diretamente na interface web. Utilize-o com precaução.|
|Script de lançamento da aplicação|Indique o script que chamará a tecnologia Node.js.|

Concluída esta etapa, clique no botão `Validar`{.action}. Certifique-se de que este motor de execução está a ser utilizado pelo(s) multi-site(s) pretendido(s). Para isso, passe para a etapa 3 [“ Associar o motor de execução a um multi-site ”](./#etapa-3-associar-o-motor-de-execucao-a-um-multi-site){.external}.

![cloudweb](/pages/assets/screens/control_panel/product-selection/web-cloud/cloud-web/runtime-software-application/modify-a-runtime-software-application-nodejs8.png){.thumbnail}

##### **Ruby**

|Informação|Descrição| 
|---|---| 
|Nome personalizado|Insira um nome que lhe permita distinguir este motor do resto dos motores na sua Área de Cliente OVHcloud.|
|Motor de execução|Escolha o novo motor de execução desejado.|
|Caminho de acesso do diretório público|Indique o diretório no qual ficará alojado o conteúdo estático (o motor não executará este conteúdo).|
|Ambiente da aplicação|Indique se se trata de um ambiente de “produção”, de “teste” ou de “desenvolvimento”. Tenha em conta que este último tem um comportamento diferente e apresenta erros diretamente na interface web. Utilize-o com precaução.|
|Script de lançamento da aplicação|Dê nome ao script que chamará o motor de execução Ruby.|

Concluída esta etapa, clique no botão `Validar`{.action}. Certifique-se de que este motor de execução está a ser utilizado pelo(s) multi-site(s) pretendido(s). Para isso, passe para a etapa 3 [“ Associar o motor de execução a um multi-site ”](./#etapa-3-associar-o-motor-de-execucao-a-um-multi-site){.external}.

![cloudweb](/pages/assets/screens/control_panel/product-selection/web-cloud/cloud-web/runtime-software-application/modify-a-runtime-software-application-ruby2-6.png){.thumbnail}

##### **Python**

|Informação|Descrição| 
|---|---| 
|Nome personalizado|Insira um nome que lhe permita distinguir este motor do resto dos motores na sua Área de Cliente OVHcloud.|
|Motor de execução|Escolha o novo motor de execução desejado.|
|Caminho de acesso do diretório público|Indique o diretório no qual ficará alojado o conteúdo estático (o motor não executará este conteúdo).|
|Ambiente da aplicação|Indique se se trata de um ambiente de “produção”, de “teste” ou de “desenvolvimento”. Tenha em conta que este último tem um comportamento diferente e apresenta erros diretamente na interface web. Utilize-o com precaução.|
|Script de lançamento da aplicação|Dê nome ao script que chamará o motor de execução Python.|

Concluída esta etapa, clique no botão `Validar`{.action}. Certifique-se de que este motor de execução está a ser utilizado pelo(s) multi-site(s) pretendido(s). Para isso, passe para a etapa 3 [“ Associar o motor de execução a um multi-site ”](./#etapa-3-associar-o-motor-de-execucao-a-um-multi-site){.external}.

![cloudweb](/pages/assets/screens/control_panel/product-selection/web-cloud/cloud-web/runtime-software-application/modify-a-runtime-software-application-python3.png){.thumbnail}

### Etapa 3: associar o motor de execução a um multi-site

> [!primary]
> No nosso exemplo, foram criados apenas os motores PHP e Node.js. É possível que, no seu projeto, utilize Ruby ou Python. Neste caso, as operações descritas abaixo são
> aplicáveis.
> 
> A utilização de dois motores de execução em paralelo no seu alojamento Cloud Web depende do [seu plano](/links/web/hosting-cloud-web-offer){.external}.
> 

Uma vez que dispõe dos motores de execução necessários para o seu projeto, certifique-se de que estes estão corretamente associados aos seus multi-sites. Para isso, aceda ao separador `Multi-site`{.action} do alojamento Cloud Web em questão. 

Na tabela, consulte a coluna `Motor de execução` para verificar se o motor apresentado para os domínios em questão é o correto. Os nomes que aparecem correspondem ao “nome personalizado” que definiu.

![cloudweb](/pages/assets/screens/control_panel/product-selection/web-cloud/cloud-web/runtime-software-application/runtime-software-applications.png){.thumbnail}

Se pretender alterar um motor associado a um multi-site, clique no ícone em forma de roda dentada à direita do domínio em questão e, em seguida, em `Alterar`{.action}.

De seguida, selecione o motor certo junto da opção `Motor de execução` na janela que irá aparecer. Lembrete: os nomes que aparecem correspondem ao “nome personalizado” que definiu. É imperativo que o website ou a aplicação acessível a partir do domínio em questão seja compatível com o motor escolhido. 

Depois de selecionado, siga os passos até ao fim.

![cloudweb](/pages/assets/screens/control_panel/product-selection/web-cloud/cloud-web/multisite/modify-a-domain-step-1.png){.thumbnail}

## Quer saber mais?

Para serviços especializados (referenciamento, desenvolvimento, etc), contacte os [parceiros OVHcloud](/links/partner).

Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](/links/support).

Fale com nossa [comunidade de utilizadores](/links/community).