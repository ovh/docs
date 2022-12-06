---
title: 'Primeiros passos com o serviço Hosted Exchange'
slug: exchange_20132016_a_primeira_configuracao_do_servico
excerpt: 'Como configurar pela primeira vez um serviço Hosted Exchange'
section: Primeiros passos com Exchange
order: 01
---

**Última atualização: 21/01/2019**

## Sumário

O serviço Hosted Exchange permite beneficiar de endereços de e-mail profissionais que facilitam o trabalho colaborativo, graças a funcionalidades tais como a sincronização do calendário e dos contactos.

**Saiba como começar a utilizar o serviço Hosted Exchange.**

## Requisitos

- Ter uma oferta [Hosted Exchange](https://www.ovhcloud.com/pt/emails/hosted-exchange/){.external}.
- Ter recebido o e-mail com a confirmação da instalação da solução Hosted Exchange.
- Dispor de um domínio.
- Ter acesso à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}.

## Instruções

### 1 - Aceder à interface de gestão do serviço

Depois de ativado, o serviço Hosted Exchange pode ser gerido a partir da [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}.

Para isso, aceda à Área de Cliente OVHcloud, clique em `Microsoft`{.action} e, a seguir, em `Exchange`{.action}. Finalmente, clique no nome do serviço Hosted Exchange em questão.

> [!primary]
>
> Na Área de Cliente OVHcloud, o nome de um serviço Hosted Exchange é composto por: **hosted-**, uma parte do seu identificador de cliente e um algarismo (1 para o primeiro serviço Hosted Exchange instalado, 2 para o segundo, etc.).
>

### 2 - Realizar a primeira configuração do serviço

Uma vez que o seu serviço nunca foi utilizado, deverá realizar a sua primeira configuração que lhe permitirá utilizar novos endereços de e-mail Exchange.

Para isso, aceda pela primeira vez à interface de gestão do seu serviço Hosted Exchange onde um assistente de configuração irá aparecer. Para começar, clique no botão `Começar`{.action}.

Este assistente de configuração permite realizar várias operações. Consulte a tabela abaixo para obter ajuda com determinadas operações, dependendo da sua situação.

|Operação|Descrição|
|---|---|
|Escolha do domínio|Defina o nome de domínio que será utilizado para os seus endereços de e-mail Exchange. Este fará parte do seu endereço de e-mail (exemplo: contact@mypersonaldomain.ovh).|
|Configuração do domínio|Se o domínio for gerido pela OVHcloud com o mesmo ID de cliente que o serviço Exchange, este será configurado automaticamente. No caso contrário, deverá realizar a configuração de forma manual.|
|Configuração das contas Exchange|Defina o nome dos endereços de e-mail Exchange e adicione informações adicionais.|
|Migração de dados (caso aplicável)|Se pretender migrar os seus endereços de e-mail a partir de uma solução da OVHcloud (MX Plan ou E-mail Pro), pode efetuar a migração a partir deste assistente. Se estiver a utilizar um software de mensagens, também deverá configurar novamente as suas contas.|

### 3 - Adicionar domínios adicionais (opcional)

Após concluir a primeira configuração do seu domínio, também pode configurar domínios adicionais caso ainda não o tenha feito através do assistente.

> [!warning]
>
> Todos os endereços criados no serviço Exchange poderão ver no diretório os restantes endereços associados ao serviço, incluindo aqueles que possuem um domínio diferente. Se não pretender que todos os endereços sejam apresentados no mesmo diretório, deve encomendar um novo serviço Hosted Exchange para o(s) domínio(s) em questão.
>

Para adicionar um novo domínio, selecione o serviço Hosted Exchange correspondente na [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external} e clique no separador `Domínios associados`{.action}. A tabela apresenta os domínios que estão configurados ou prestes a serem configurados no seu serviço. Para adicionar novos domínios, clique no botão `Adicionar domínio`{.action} e siga os passos.

Para obter mais informações, pode consultar o nosso manual [Adicionar um domínio a um serviço Exchange](https://docs.ovh.com/gb/en/microsoft-collaborative-solutions/adding-domain-exchange/){.external} (versão em inglês).

> [!primary]
>
> Se for necessário realizar uma ação específica para configurar o domínio, uma etiqueta vermelha aparecerá na coluna `Diagnóstico`{.action}. Ao clicar, aparecerão as alterações necessárias. Se o domínio não utilizar a configuração da OVHcloud (ou seja, se não utilizar os seus servidores DNS), deverá realizar as modificações a partir da interface que lhe permite gerir a configuração do seu domínio. 
>

![Adicionar um domínio](images/first-steps-hosted-exchange-add-domain.png){.external}


### 4 - Configurar contas Exchange adicionais (opcional)

É possível configurar domínios adicionais caso ainda não o tenha feito através do assistente.

Para o fazer, clique no serviço Hosted Exchange corresponde na [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external} e aceda ao separador `Contas de e-mail`{.action}. A tabela apresenta as contas que estão configuradas ou prestes a serem configuradas no seu serviço.

As contas que ainda não foram configuradas aparecem na tabela como “*@configureme.me*”. Para as configurar, clique no ícone em forma de lápis e siga os passos.

> [!primary]
>
> Repita esta etapa conforme o necessário, de acordo com o número de contas que possui. Poderá encomendar novas contas através do botão `Ações`{.action} e clicar em `Encomendar contas`{.action}.
>

![Adicionar uma conta](images/first-steps-hosted-exchange-add-account.png){.external}

### 5 - Utilizar os endereços de e-mail

As contas foram configuradas e estão prontas a usar. Para isso, a OVHcloud disponibiliza o webmail **Outlook Web Application** (OWA). Pode aceder através do endereço [https://www.ovh.pt/mail/](https://www.ovh.com/pt/mail/){.external}, inserindo as credenciais do seu endereço de e-mail. Para mais informações, consulte os manuais da OVHcloud sobre [OWA](https://docs.ovh.com/pt/microsoft-collaborative-solutions/){.external}.

Se quiser, também pode configurar o seu endereço de e-mail num software (cliente) de correio eletrónico ou dispositivo externo (smartphone ou tablet), consulte os manuais da OVHcloud sobre as [soluções colaborativas da Microsoft](https://docs.ovh.com/pt/microsoft-collaborative-solutions/){.external}. Para uma utilização otimizada do seu endereço Exchange num software, certifique-se de que seja compatível com o serviço.

A OVHcloud propõe licenças Outlook que poderá contratar na [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}, assim como as licenças Office 365, que poderá contratar através da página [Office 365 da OVHcloud](https://www.ovhcloud.com/pt/collaborative-tools/microsoft-365/){.external}. Caso pretenda usufruir do software de correio eletrónico Outlook ou de outros programas da suite Office, recomendamos uma destas soluções.

> [!primary]
>
> O Exchange permite uma sincronização completa das suas configurações (filtros, assinaturas, pastas, etc.), quer numa aplicação web quer num software de correio eletrónico compatível.
> Assim, se utilizar o Exchange em três dispositivos e através de três modos de ligação diferentes (webmail, software de correio eletrónico ou de cliente compatíveis), todas as suas informações ficarão disponíveis ao mesmo tempo.
>

### 6 - Configurar as funções de colaboração (opcional)

Uma vez que o serviço Hosted Exchange estiver configurado e operacional, pode ativar as funções de colaboração na sua [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}. Estas funções permitem-lhe criar recursos (salas de reunião, equipas, etc.) e grupos, entre outros.

Para ativar as diferentes funções, selecione o seu serviço Hosted Exchange na [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external} e escolha a ação que quer realizar.

Para mais informações, consulte os manuais da OVHcloud sobre as [soluções colaborativas da Microsoft](https://docs.ovh.com/pt/microsoft-collaborative-solutions/){.external}.

![Funções colaborativas](images/first-steps-hosted-exchange-intro-to-functions.png){.external}


## Quer saber mais?

Fale com a nossa comunidade de utilizadores em <https://community.ovh.com/en/>.