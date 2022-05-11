---
title: 'Partilhado DynHost'
slug: partilhado_dynhost
excerpt: 'Saiba como configurar um registo DNS dinâmico (DynHost) para o seu nome de domínio OVHcloud'
section: 'DNS e zona DNS'
order: 6
---

**Última atualização: 06/06/2018**

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

## Objetivo

A zona Domain Name System (DNS) de um domínio constitui o ficheiro de configuração deste último. É composta por informações técnicas, conhecidas como registos. Por várias razões, como o autoalojamento do seu próprio servidor de jogo sem beneficiar de um endereço IP dito "fixo", pode revelar-se indispensável atualizar dinamicamente um registo DNS de forma a evitar uma interrupção prolongada de um dos seus serviços. 

**Saiba como configurar um registo DNS dinâmico (DynHost) para o seu nome de domínio OVHcloud.**

## Requisitos

- Ter acesso à secção de gestão do domínio na [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}
- Utilizar a configuração da OVHcloud (os servidores DNS) para o domínio em questão.
- O registo DynHost que está prestes a criar não deve já existir na zona DNS da OVHcloud do seu nome de domínio enquanto registo "A".

> [!warning]
>
> - Se o domínio não usar os servidores DNS da OVHcloud, deverá contactar o fornecedor responsável pela configuração para saber o que fazer a seguir.
> 
> - Se o domínio estiver registado na OVHcloud, pode verificar se este último utiliza a nossa configuração. Para isso, aceda à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}, clique em “Domínios” e selecione o domínio em questão. A seguir, clique no separador `Servidores DNS`{.action}.
>

## Instruções

### 1 - criar um utilizador DynHost

O primeiro passo consiste em criar um utilizador DynHost. que lhe permitirá realizar a atualização do registo DNS dinâmico que pretende criar. Para iniciar a operação, aceda à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}, clique em `Nomes de domínio`{.action} na barra à esquerda e escolha o domínio em causa. Por fim, clique no separador `DynHost`{.action}.

![dynhost](images/use-dynhost-step1.png){.thumbnail}

A seguir, clique no botão `Gerir os acessos`{.action} e, a seguir, em `Criar um identificador`{.action}. Na nova janela, preencha as informações necessárias:

|Informações|Descrição|
|---|---|
|Sufixo do identificador|Defina um sufixo ao identificador DynHost que está a criar.|
|Subdomínio|Especifique o subdomínio afetado pela criação do registo DNS dinâmico.|
|Palavra-passe|Defina uma palavra-passe para o identificador DynHost e confirme-a.|

Depois de preencher os campos, clique no botão `Validar`{.action}. O identificador aparece no quadro presente na página atual. Repita este passo sempre que necessário se precisar de dados DynHost adicionais.

![dynhost](images/use-dynhost-step2.png){.thumbnail}

### Etapa 2: criar o registo DNS dinâmico (DynHost)

A segunda etapa consiste em criar o registo DNS que deverá ser atualizado de forma dinâmica. Relembramos que este não deve já existir na zona DNS da OVHcloud do seu nome de domínio enquanto registo "A". Para o verificar e, se necessário, eliminá-lo, consulte o nosso manual "[Editar uma zona DNS da OVHcloud](https://docs.ovh.com/pt/domains/alojamento_partilhado_como_editar_a_minha_zona_dns/){.external}".

Quando estiver pronto para criar o registo DynHost, clique no separador `DynHost`{.action} e, em seguida, no botão `Adicionar um DynHost`{.action}. Na nova janela, preencha as informações necessárias:

|Informações|Descrição|
|---|---|
|Subdomínio|Indique o subdomínio cujo registo DNS deverá ser atualizado de forma dinâmica. Este subdomínio deve corresponder ao domínio indicado durante a criação do utilizador DynHost.|
|IP de destino|Indique o endereço IP que deve ser atualmente utilizado pelo registo DNS. De acordo com o princípio do DynHost, esta será atualizada posteriormente.|

Depois de preencher os campos, clique no botão `Validar`{.action}. O registo DynHost aparece no quadro presente na página atual. Repita este passo sempre que necessário se precisar de mais registos DynHost.

![dynhost](images/use-dynhost-step3.png){.thumbnail}

### Etapa 3: automatizar a alteração do DynHost

Agora que o utilizador e o registo DynHost foram criados, a última etapa consiste em automatizar a atualização do registo DNS de forma a que seja realizada de forma dinâmica. Para isso, é necessário utilizar um cliente que se encarregará de verificar regularmente se o endereço IP de destino mudou para o atualizar.

> [!warning]
>
> A instalação e a configuração do cliente devem ser realizadas de acordo com os seus conhecimentos. Apresentamos a seguir algumas informações sobre como a realizar. Contudo, se precisar de ajuda, recomendamos que recorra a um prestador de serviços especializado. Não poderemos proporcionar-lhe assistência técnica. 
>

Uma vez que existem grandes possibilidades, saiba que este cliente pode ser instalado no seu servidor ou no seu computador, ou pode já estar disponível na interface do seu router se este for compatível. Depois de escolher e instalar o cliente, deverá configurá-lo através das informações do utilizador DynHost criado anteriormente.

Dependendo do cliente utilizado, é possível que seja também necessário um endereço URL de atualização para além dos elementos do utilizador DynHost e do subdomínio em questão. Se for este o caso, utilize o seguinte endereço URL para substituir as informações genéricas:

> https://www.ovh.com/nic/update?system=dyndns&hostname=**$HOSTNAME**&myip=**$IP**

|Informações|Substituir por|
|---|---|
|$HOSTNAME|O subdomínio abrangido pela alteração.|
|$IP|O novo endereço IP de destino.|

Pode verificar se o endereço IP de destino foi atualizado na sua Área de Cliente a partir do separador `DynHost`{.action}. Verifique o endereço IP que aparece na coluna `Alvo`{.action}.

![dynhost](images/use-dynhost-step4.png){.thumbnail}

## Quer saber mais?

Fale com a nossa comunidade de utilizadores em <https://community.ovh.com/en/>.
