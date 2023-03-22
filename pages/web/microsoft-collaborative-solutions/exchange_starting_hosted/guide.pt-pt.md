---
title: 'Primeiros passos com o serviço Hosted Exchange'
slug: exchange_20132016_a_primeira_configuracao_do_servico
excerpt: 'Como configurar pela primeira vez um serviço Hosted Exchange'
section: Primeiros passos com Exchange
order: 01
updated: 2023-03-06
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

<style>
.w-640 {
  max-width:640px !important;
}
</style>

**Última atualização: 06/03/2023**

## Sumário

O serviço Hosted Exchange permite beneficiar de endereços de e-mail profissionais que facilitam o trabalho colaborativo, graças a funcionalidades tais como a sincronização do calendário e dos contactos.

**Saiba como começar a utilizar o serviço Hosted Exchange.**

## Requisitos

- Ter uma oferta [Hosted Exchange](https://www.ovhcloud.com/pt/emails/hosted-exchange/){.external}.
- Ter recebido o e-mail com a confirmação da instalação da solução Hosted Exchange.
- Dispor de um domínio.
- Ter acesso à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}.

## Instruções

### Aceder à gestão do seu serviço

Depois de ativado, o serviço Hosted Exchange pode ser gerido a partir da Área de [Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}.

Para isso, ligue-se a este último, clique em `Microsoft`{.action} e depois em `Exchange`{.action}. Finalmente, clique no nome do serviço Hosted Exchange em questão.

> [!primary]
>
> O nome de um serviço Hosted Exchange na sua Área de Cliente OVHcloud começa por **hosted-**, depois contém uma parte do seu identificador de cliente e acaba por um número (1 para o primeiro serviço Hosted Exchange instalado, 2 para o segundo, etc.).
>

### Efetuar a primeira configuração do serviço

Uma vez que o seu serviço nunca foi utilizado, deverá realizar a sua primeira configuração que lhe permitirá utilizar novos endereços de e-mail Exchange.

Para isso, aceda pela primeira vez à interface de gestão do seu serviço Hosted Exchange onde um assistente de configuração irá aparecer. Para começar, clique no botão `Começar`{.action}.

Este assistente de configuração permite realizar várias operações. Consoante a sua situação:

#### Escolher um domínio

Escolha um dos seus nomes de domínio na lista ou selecione a caixa `O meu nome de domínio não figura na lista abaixo` para introduzir um nome de domínio que não é gerido na sua Área de Cliente **mas que pode configurar**.

![email](images/exchange-wizard01.png){.thumbnail}

#### Apenas vai utilizar a oferta Exchange OVH com este domínio?

A questão "**Vai utilizar apenas a oferta Exchange OVH com este domínio?** " vai determinar o tipo de configuração do seu domínio. 

- Se utilizar uma oferta Exchange sozinha ou com outras ofertas de **e-mail OVHcloud**, a configuração poderá ser realizada de forma automática ou manual, utilizando apenas os servidores de e-mail da OVHcloud.
- Se utiliza a sua oferta Exchange em complemento de um serviço de e-mail **externo às ofertas de e-mail OVHcloud**, ser-lhe-á pedido que indique, sob a menção `Servidor de envio (SMTP)`, o URL do servidor de receção do seu serviço de e-mail externo.

![email](images/exchange-wizard02.png){.thumbnail}

#### Como pretende configurar a sua zona DNS?

- **Configuração automática**: O domínio indicado será automaticamente configurado ao nível da sua Zona DNS, se este for gerido pela OVHcloud com o mesmo identificador de cliente que o seu serviço Exchange.
- **Configuração manual**: O domínio não é gerido na mesma Área de Cliente que a sua plataforma, é gerido por outro fornecedor de nome de domínio, ou deseja simplesmente realizar a sua própria configuração.<br> No final do processo de configuração ou na secção `Domínios associados`{.action} da plataforma, poderá encontrar os valores que pretende introduzir.

![email](images/exchange-wizard03.png){.thumbnail}

#### **Configuração das contas Exchange**

Defina o nome dos endereços de e-mail Exchange e adicione informações adicionais.

![email](images/exchange-wizard04.png){.thumbnail}

#### **Caso particular**

- Se configurar a plataforma Exchange com um domínio não gerido na mesma Área de Cliente que esta plataforma, ou noutro prestador de serviços de domínio, poderá obter a seguinte janela:<br>
![email](images/exchange-wizard05.png){.thumbnail .w-640}<br>
Nesta janela, deverá adicionar um **registo CNAME** na zona DNS do domínio. Esta entrada tem como objetivo verificar que gere corretamente este nome de domínio.<br>

> [!warning]
> Sem esta validação por campo CNAME, é impossível utilizar a plataforma com este nome de domínio.

- Se configurar a plataforma Exchange com um domínio não gerido na mesma Área de Cliente que esta plataforma, se for gerido por outro prestador de serviços de domínio, ou se tiver optado por configurar manualmente o seu domínio, aparecerá a seguinte janela:<br>
![email](images/exchange-wizard06.png){.thumbnail .w-640}<br>
Poderá consultar aqui os valores a inserir na sua zona DNS. Os **campos MX** correspondem à receção dos seus e-mails. O **campo SRV** corresponde à configuração automática dos seus endereços de e-mail.

Encontre os detalhes de configuração da sua zona DNS relativos ao seu serviço de e-mail na nossa página "[Adicionar um campo MX à configuração do seu domínio](https://docs.ovh.com/pt/domains/e-mail-partilhado-manual-de-configuracao-mx-com-zona-dns-ovh/)".

### Adicionar nomes de domínio adicionais (facultativo)

Depois de concluir a primeira configuração do seu domínio, também pode configurar, através do assistente, os nomes de domínio adicionais, caso ainda não o tenha feito.

> [!warning]
>
> Todos os endereços criados no serviço Exchange serão visíveis no diretório de endereços deste serviço, incluindo os que possuem um domínio diferente. Se não pretender que todos os endereços sejam apresentados no mesmo diretório, deve encomendar um novo serviço Hosted Exchange para o(s) domínio(s) em questão.
>

Para adicionar um novo nome de domínio, selecione o serviço Hosted Exchange na sua [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external} e clique no separador `Domínios associados`{.action}. A tabela apresenta os domínios que estão configurados ou prestes a serem configurados no seu serviço. Para adicionar novos domínios, clique no botão `Adicionar domínio`{.action} e siga os passos.

Para obter mais informações, pode consultar o nosso manual [Adicionar um domínio a um serviço Exchange](https://docs.ovh.com/pt/microsoft-collaborative-solutions/adding-domain-exchange/){.external} (versão em inglês).

> [!primary]
>
> Se for necessário realizar uma ação específica para configurar o domínio, uma etiqueta vermelha aparecerá na coluna `Diagnóstico`{.action}. Ao clicar, aparecerão as alterações necessárias. Se este domínio não utilizar a configuração da OVHcloud (os seus servidores DNS), deverá realizar as alterações a partir da interface que lhe permite gerir a configuração do seu domínio. 
>

![Adicionar um domínio](images/first-steps-hosted-exchange-add-domain.png){.external}

### Configurar contas Exchange suplementares (facultativo)

Pode configurar contas adicionais se desejar e se ainda não o fez através do assistente.

Para isso, clique no serviço Hosted Exchange em causa na sua [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external} e, a seguir, no separador `Contas de e-mail`{.action}. A tabela apresenta as contas que estão configuradas ou prestes a serem configuradas no seu serviço.

As contas que ainda não foram configuradas aparecem na tabela como “*@configureme.me*”. Para as configurar, clique no ícone em forma de lápis e siga os passos.

> [!primary]
>
> Repita este passo sempre que necessário, em função do número de contas que possui. Pode encomendar novos recursos graças ao botão `Ações`{.action} e, a seguir, clicando em `Encomendar contas`{.action}.
>

![Adicionar uma conta](images/first-steps-hosted-exchange-add-account.png){.external}

### Utilizar os seus endereços de e-mail

As contas foram configuradas e estão prontas a usar. Para isso, a OVHcloud disponibiliza o webmail **Outlook Web Application** (OWA). Pode aceder através do endereço <https://www.ovhcloud.com/pt/mail/>, inserindo as credenciais do seu endereço de e-mail. Para mais informações, consulte os manuais da OVHcloud sobre OWA <https://docs.ovh.com/pt/microsoft-collaborative-solutions/>.

Se quiser, também pode configurar o seu endereço de e-mail num software (cliente) de correio eletrónico ou dispositivo externo (smartphone ou tablet), consulte os manuais da OVH sobre as <https://docs.ovh.com/pt/microsoft-collaborative-solutions/>. Para uma utilização otimizada do seu endereço Exchange num software, certifique-se de que seja compatível com o serviço.

A OVHcloud oferece, a partir da [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}, licenças Outlook como opção com a sua conta de e-mail Exchange.

Para subscrever, consulte a nossa página "[Obter uma licença Outlook para Exchange](https://docs.ovh.com/pt/microsoft-collaborative-solutions/exchange_2013_guia_das_licencas_outlook_exchange_2013/)". 

Pode igualmente obter licenças Office 365 na página <https://www.ovhcloud.com/fr/collaborative-tools/microsoft-365/>. Caso pretenda usufruir do software de correio eletrónico Outlook ou de outros programas da suite Office, recomendamos uma destas soluções.

> [!primary]
>
> Exchange permite uma sincronização completa das suas configurações (filtros, assinaturas, pastas, etc.), quer numa aplicação web quer num software de correio eletrónico compatível.
> Assim, se utilizar o Exchange em três dispositivos e através de três modos de ligação diferentes (webmail, software de correio eletrónico ou de cliente compatíveis), todas as suas informações ficarão disponíveis ao mesmo tempo.
>

### Parametrizar as funções colaborativas (facultativo)

Agora que o seu serviço Hosted Exchange está configurado e funcional, pode implementar as funcionalidades colaborativas inerentes ao serviço na sua [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}. Estas funções permitem-lhe criar recursos (salas de reunião, equipas, etc.) e grupos, entre outros.

Para ativar estas diferentes funções, selecione o serviço Hosted Exchange na sua [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external} e escolha entre os separadores que aparecem a ação a efetuar.

Para obter ajuda numa das funcionalidades, consulte a nossa documentação acessível a partir deste portal: <https://docs.ovh.com/pt/microsoft-collaborative-solutions/>.

## Saiba mais

[Criar um grupo de contactos](https://docs.ovh.com/pt/microsoft-collaborative-solutions/exchange_20132016_utilizacao_de_grupos_de_difusao_mailing_list/)

[Criar e utilizar uma conta partilhada](https://docs.ovh.com/pt/microsoft-collaborative-solutions/exchange-utilizacao-das-contas-partilhas/)

[Criar e utilizar contas de recurso](https://docs.ovh.com/pt/microsoft-collaborative-solutions/exchange_20132016_utilizacao_das_contas_de_recurso/)

[Delegar permissões numa conta de e-mail](https://docs.ovh.com/pt/microsoft-collaborative-solutions/exchange_3013_atribuir_permissoes_full_access_a_uma_conta/)

[Partilhar uma pasta a partir da interface OWA](https://docs.ovh.com/pt/microsoft-collaborative-solutions/exchange_2016_partilhar_uma_pasta_atraves_do_webmail_owa/)

[Gerir a faturação das suas contas Exchange](https://docs.ovh.com/pt/microsoft-collaborative-solutions/gestao-faturacao-exchange/)

Fale com a nossa comunidade de utilizadores: <https://community.ovh.com/en/>.