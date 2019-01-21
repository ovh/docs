---
title: 'Gerir os motores de execução do alojamento Cloud Web'
slug: gerir-motores-execucao-alojamento-cloud-web
excerpt: 'Saiba como gerir os motores de execução do seu alojamento Cloud Web'
section: 'Configuração do alojamento'
hidden: true
---

**Última atualização: 21/01/2019**

## Sumário

O alojamento Cloud Web oferece a possibilidade de construir um projeto em diferentes linguagens de programação. Para o fazer, poderá ser necessário utilizar um motor de execução específico. 

**Saiba como gerir os motores de execução do seu alojamento Cloud Web.**

## Requisitos

- Ter um serviço de alojamento [Cloud Web](https://www.ovh.pt/alojamento-partilhado/cloud-web.xml).
- Ter acesso à [Área de Cliente OVH](https://www.ovh.com/auth/?action=gotomanager).

## Instruções

Para se adaptar da melhor forma ao seu projeto, o alojamento Cloud Web oferece-lhe a possibilidade de gerir vários motores de execução. A utilização de um motor específico dependerá das necessidades do seu projeto. 

Desta forma, em primeiro lugar, **certifique-se de que o seu projeto é tecnicamente compatível com o seu alojamento Cloud Web**. Pode consultar as linguagens compatíveis na seguinte ligação: <https://www.ovh.pt/alojamento-partilhado/cloud-web.xml>. 

Depois de decidir os motores de execução que pretende utilizar, pode efetuar as seguintes ações:

### 1 - Aceder à gestão dos motores de execução

Para aceder aos motores de execução do seu alojamento Cloud Web, deve aceder à [Área de Cliente OVH](https://www.ovh.com/auth/?action=gotomanager){.external}, clicar em `Alojamentos`{.action} na barra à esquerda e escolher o nome do alojamento Cloud Web em questão. Por fim, clique no separador `Aplicativos de software em tempo de execução`{.action}.

A tabela que aparece indica os motores de execução que foram adicionados ao alojamento Cloud Web. Ao instalar um alojamento, um motor será automaticamente criado. A seguir, terá a possibilidade de:

- alterar um motor de execução já existente;
- adicionar um novo motor de execução (o número de motores de execução depende do serviço Cloud Web que subscreveu);
- definir um motor enquanto `Escolha padrão`;
- eliminar um motor de execução.

![cloudweb](images/cloud-web-runtime-step1.png){.thumbnail}

Antes de efetuar qualquer operação num motor de execução, recomendamos que se certifique de que esta não fará com que o website ou a aplicação que utilizam o motor fiquem inacessíveis. 

Para o ajudar neste passo, na janela `Aplicativos de software em tempo de execução`{.action}, consulte o `Número de sites relacionados` do motor de execução correspondente. A seguir, na janela `Multi-site`{.action}, poderá consultar o motor de execução que utiliza cada domínio na coluna `Aplicativos de software em tempo de execução`.

Assim que estiver pronto para realizar a operação, avance para o passo seguinte.

![cloudweb](images/cloud-web-runtime-step2.png){.thumbnail}

### 2 - Gerir os motores de execução

#### 1. Alterar um motor de execução

Para alterar um motor de execução, aceda à janela `Aplicativos de software em tempo de execução`{.action} do alojamento Cloud Web em questão. Na tabela, clique nos três pontos que aparecem no final da linha correspondente ao motor que pretende alterar e, a seguir, clique em `Alterar`{.action}. 

![cloudweb](images/cloud-web-runtime-step3.png){.thumbnail}

Na nova janela que aparecerá, preencha as informações necessárias. Dependendo do motor selecionado, é possível que lhe sejam solicitadas informações adicionais.

|Informação|Descrição| 
|---|---| 
|Nome personalizado|Insira um nome que lhe permita reconhecer este motor do resto dos motores na sua Área de Cliente OVH.|  
|Motor de execução|Escolha o novo motor de execução desejado.|  

Depois de preencher os campos, clique em `Validar`{.action}.

![cloudweb](images/cloud-web-runtime-step4.png){.thumbnail}

### 3 - Associar o motor a um multi-site

Uma vez que dispõe dos motores de execução necessários para o seu projeto, certifique-se de que estes estão corretamente associados aos seus multi-sites. Para isso, aceda ao separador `Multi-site`{.action} do alojamento Cloud Web em questão. Na tabela que aparece, consulte a coluna `Aplicativos de software em tempo de execução` para verificar que o motor de execução associado ao domínio é o correto.

Se pretender alterar o motor de execução associado a um multi-site, clique no ícone em forma de roda dentada no final da linha correspondente ao domínio e selecione a opção `Alterar`{.action}. Aparecerá uma nova janela onde deverá selecionar o motor de execução correto. Siga os passos indicados até finalizar a operação. Relembramos que o website ou a aplicação acessíveis a partir do domínio em questão devem ser compatíveis com o motor de execução escolhido. 

![Cloud Web](images/cloud-web-runtime-step5.png){.thumbnail}

## Quer saber mais?

Fale com a nossa comunidade de utilizadores em [https://community.ovh.com/en/](https://community.ovh.com/en/){.external}