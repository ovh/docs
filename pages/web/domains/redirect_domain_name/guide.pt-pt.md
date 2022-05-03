---
title: 'Reencaminhar um domínio gerido pela OVHcloud'
slug: reencaminhamento-dominio
excerpt: 'Descubra os diferentes tipos de reencaminhamento e como criar um reencaminhamento para um domínio gerido pela OVHcloud'
section: Geral
order: 1
---

**Última atualização: 21/12/2018**


## Sumário

O reencaminhamento de um domínio permite reencaminhá-lo para um novo destino. Existem diferentes tipos de reencaminhamentos que se adaptam às diferentes necessidades dos utilizadores.

**Descubra os diferentes tipos de reencaminhamentos e como criar um reencaminhamento para um domínio gerido pela OVHcloud**

## Requisitos

- Ter acesso à [Área de Cliente OVHcloud](https://ovh.com/auth){.external}.
- Ter acesso ao seu alojamento web (se pretender adicionar um [ficheiro .htaccess](https://docs.ovh.com/pt/hosting/partilhado_tudo_sobre_o_ficheiro_htaccess/){.external}).

## Instruções

### Como funciona o reencaminhamento de um domínio

Antes de criar um reencaminhamento para o seu domínio, é importante saber para o que serve. O reencaminhamento permite que um domínio aponte para um novo destino (geralmente, para outro domínio).

Existem muitos casos em que pode ser necessário reencaminhar um domínio, sendo que o mais normal seja realizar uma mudança do nome de um website. Neste caso concreto, o reencaminhamento permite orientar automaticamente os visitantes que acedem ao antigo nome de domínio para o novo.

Existem várias formas de o fazer:

- **A partir da Área de Cliente OVHcloud**: pode aceder a um assistente de configuração para configurar o seu reencaminhamento.

- **Através de um ficheiro (é necessário ter conhecimentos de programação)**: pode criar o reencaminhamento num ficheiro (geralmente, um ficheiro *.htaccess*).

Tenha em conta que o reencaminhamento pode afetar o posicionamento do seu website, pelo que deverá prestar especial atenção às ações que realiza e, caso necessário, contactar um perito em posicionamento web.

### Reencaminhar um domínio através da Área de Cliente

Uma vez ligado à [Área de Cliente OVHcloud](https://ovh.com/auth){.external}, clique em `Domínios`{.action} na barra de serviços à esquerda, selecione o domínio correspondente e aceda à janela `Reencaminhamento`{.action}.

A tabela mostra os reencaminhamentos ativos para o domínio.

Para adicionar um reencaminhamento, clique em `Adicionar um reencaminhamento`{.action}.


Na janela que aparece, deverá definir o nome de domínio (ou subdomínio) que pretende reencaminhar). Esta será a origem do reencaminhamento.

![Etapa 1: Criação de um reencaminhamento](images/adding_redirection_1.png){.thumbnail}

A seguir, deve escolher o tipo de destino para o qual pretende reencaminhar o domínio selecionado. Pode escolher entre duas opções:

- **Reencaminhamento para um endereço web**

Reencaminhe um domínio para outro domínio. Esta solução é ideal se alterou o nome de domínio do seu website.

- **Reencaminhamento para um servidor OVHcloud ou externo**

Modifique a configuração DNS de um domínio substituindo-a por outro destino (registo A, AAAA ou CNAME). É a opção ideal se o seu website já não está alojado no mesmo sítio, mas o domínio continua a ser o mesmo.
Se o seu domínio utiliza a configuração da OVHcloud, também pode realizar esta opção diretamente a partir da Área de Cliente (["Como editar a minha zona DNS?"](https://docs.ovh.com/pt/domains/alojamento_partilhado_como_editar_a_minha_zona_dns/){.external}).

Este manual só explica como realizar um reencaminhamento **para um endereço web**. Se necessita de mais informações sobre como realizar um reencaminhamento para um servidor da OVHcloud ou externo, pode entrar em contacto com o seu fornecedor para saber que registos DNS deve modificar antes de realizar o reencaminhamento.

![Etapa 2: Criação de um reencaminhamento](images/adding_redirection_2.png){.thumbnail}

Para reencaminhar um domínio **para um endereço web**, selecione o tipo de reencaminhamento que pretende realizar. Pode escolher entre duas opções:

|Tipo de reencaminhamento|Descrição|
|---|---|
|Visível|O domínio que inserir no seu browser (endereço antigo) será reencaminhado para o novo domínio. O antigo endereço que é apresentado no browser será substituído pelo novo endereço.|
|Invisível|O domínio que inserir no seu browser (endereço antigo) não será reencaminhado para o novo domínio. Terá sempre acesso ao antigo endereço, que, através de um *iframe*, mostrará o website alojado no novo domínio. Atenção: note que esta ação não é compatível com todos os websites e que pode afetar o seu posicionamento.|

![Escolha entre reencaminhamento visível e invisível](images/redirection_3xx_1.png){.thumbnail}

#### Para um reencaminhamento visível

Pode escolher entre duas opções:

|Tipo de reencaminhamento|Código HTTP|Descrição|
|---|---|---|
|Visível permanente|301|É o tipo de reencaminhamento “standard”.|
|Visível temporário|302|Este tipo de reencaminhamento deve ser utilizado de forma pontual (em circunstâncias temporárias, por exemplo). O posicionamento nos motores de busca será pior do que com um reencaminhamento de tipo 301.|

Uma vez escolhido o tipo de reencaminhamento visível, deverá indicar o destino do reencaminhamento (ou seja, o endereço web para o qual apontará o reencaminhamento).

![Escolha entre o reencaminhamento visível permanente ou temporário](images/redirection_3xx_2.png){.thumbnail}

Depois de inseridas todas as informações, clique em `Seguinte`{.action}. Certifique-se de que as informações estão corretas e clique em `Confirmar`{.action}.

> [!primary]
>
> A propagação das alterações pode demorar até entre 1 e 24 horas.
>

#### Para um reencaminhamento invisível

Para criar um reencaminhamento invisível (código HTTP 200), preencha a informação solicitada (endereço web e opções) e clique em `Seguinte`{.action}. Certifique-se de que as informações estão corretas antes de clicar em `Confirmar`{.action}.

|Campos|Descrição|
|---|---|
|Título |É o título do seu website. Aparecerá, por exemplo, como título da página nas janelas dos browsers.|
|Palavras-chave|Estas palavras-chave podem ser utilizadas pelos motores de busca para posicionar a página.|
|Descrição|Descrição do website que  os motores de busca podem utilizar nos seus resultados.|

> [!primary]
>
> A propagação das alterações pode demorar até entre 1 e 24 horas.
>

![Criação de um reencaminhamento invisível](images/invisible_redirection.png){.thumbnail}

### Reencaminhar um domínio através de um ficheiro .htaccess

Os ficheiros .htaccess são ficheiros de configuração nos quais é possível especificar os comandos. Quando o servidor web (Apache) executa o código do seu website, os comandos serão interpretados e executados. Estes comandos, entre outras ações, permitem criar reencaminhamentos.

É necessário ter conhecimentos técnicos para alterar um ficheiro .htaccess, uma vez que, se utilizar subdiretórios no seu alojamento, uma manipulação incorreta poderia  tornar um ou vários websites inacessíveis. Se precisar de ajuda para modificar um ficheiro .htaccess, recomendamos que contacte um programador web especializado.

Também pode consultar o manual ["Tudo sobre o ficheiro .htaccess"](https://docs.ovh.com/pt/hosting/partilhado_tudo_sobre_o_ficheiro_htaccess/){.external} no qual encontrará uma série de conselhos sobre a sua utilização.

> [!primary]
>
> Antes de realizar qualquer alteração, recomendamos que **realize uma cópia de segurança do seu ficheiro .htaccess** para poder restabelecer a versão anterior caso seja necessário.
>

- **Reencaminhamento permanente**

O código enviado será um HTTP 301, que avisa os robôs dos motores de busca que devem atualizar as suas ligações para o novo endereço.

Este é o código que deve adicionar para reencaminhar todo o website:

```
Redirect permanent/http://novo-site.tld/
```

Para alterar um diretório/ficheiro:

```
Redirect permanent/antigo_diretorio http://novo-site.tld/novo_diretorio
Redirect permanent/antigo_ficheiro.php http://site.tld/novo_ficheiro.php
```

- **Redirect gone**

Se o ficheiro já não existir, é preferível substituir a mensagem *Error 404: Documento não encontrado* por uma mensagem mais explícita de tipo *410: O documento já não existe*:

```
Redirect gone /supprime.html
```

- **Redirect seeother**

Se quiser alterar a extensão de um ficheiro, _seeother_ permite-lhe modificá-la enviando um código HTTP 303:

```
Redirect seeother/exemplo.doc http://site.tld/exemplo.pdf
```

- **Redirect Temp**

É possível utilizar um reencaminhamento temporário de tipo HTTP 302 quando transfere temporariamente ficheiros para outro website:

```
Redirect temp / http://outro_website.tld/site/
```

## Quer saber mais?

[Tudo sobre o ficheiro .htaccess](https://docs.ovh.com/pt/hosting/partilhado_tudo_sobre_o_ficheiro_htaccess/){.external}

[Como editar a minha zona DNS?](https://docs.ovh.com/pt/domains/alojamento_partilhado_como_editar_a_minha_zona_dns/){.external}

Fale com a nossa comunidade de utilizadores em [https://community.ovh.com/en/](https://community.ovh.com/en/){.external}