---
title: Adicionar um domínio a uma plataforma de e-mail
slug: adding-domain-exchange
excerpt: Saiba como adicionar um domínio à sua plataforma Exchange ou E-mail Pro
section: Introdução ao Exchange
order: 04
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

**Última atualização: 07/10/2022**

## Objetivo

Adicionar um domínio a um serviço Exchange é indispensável para poder utilizar as suas contas incluídas neste último. Também é possível adicionar vários domínios a um serviço Exchange ou E-mail Pro.

**Saiba como adicionar um domínio à plataforma Exchange ou E-mail Pro.**

## Requisitos

- Dispor de uma solução [Exchange](https://www.ovhcloud.com/pt/emails/) ou [Email Pro](https://www.ovhcloud.com/pt/emails/email-pro/).
- Dispor de um ou vários domínios.
- Ter a possibilidade de alterar a configuração do domínio [zona DNS](https://docs.ovh.com/pt/domains/alojamento_partilhado_como_editar_a_minha_zona_dns/).
- Ter acesso à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt).

## Instruções

### Aceder à gestão do seu serviço

Depois de ativado, o serviço Exchange ou E-mail Pro pode ser gerido a partir da [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt).

Na secção `Web Cloud`{.action}:

- **Exchange**: Clique em `Microsoft`{.action} e, a seguir, em `Exchange`{.action}. 
- **Email Pro**: Clique em `Email Pro`{.action}.

Por fim, selecione o nome do serviço em questão.

### Adicionar um domínio

Para adicionar um domínio, clique no separador `Domínios associados`{.action}. A tabela apresenta os domínios associados ao seu serviço. Para adicionar um novo, clique no botão `Adicionar um domínio`{.action}.

> [!warning]
>
> Todos os endereços criados no seu serviço de e-mail poderão visualizar no diretório o conjunto dos endereços deste serviço, incluindo os que possuem um nome de domínio diferente. Para dissociar a apresentação dos domínios, deve encomendar uma nova [solução Exchange ou Email Pro](https://www.ovhcloud.com/pt/emails/) para o(s) domínio(s) em causa.
>

![Add Domain](images/add_domain_exchange_step1.png){.thumbnail}

Na janela de adição do domínio, deverá escolher:

- **selecionar um domínio da lista**: só aparecem os domínios que utilizam a configuração da OVHcloud e que foram indicados como contactos no seu ID de cliente;

- **introduzir um domínio não gerido pela sua conta OVHcloud**: para que o serviço possa funcionar corretamente, precisa de alterar a configuração do domínio (a sua zona DNS). Nesse caso, deverá ser adicionada uma entrada DNS CNAME.

Selecione a opção adequada e clique em `Seguinte`{.action}.

![Add Domain](images/add_domain_exchange_step2.png){.thumbnail}

A janela apresenta agora informações sobre a configuração dos modos.

- **Se indicou um domínio não gerido pela OVHcloud**: o modo não autoritário será configurado por predefinição.

- **Se selecionou na lista um domínio gerido pela OVHcloud**: deverá escolher entre dois modos.

|Modo|Descrição|
|---|---|
|Autorytatywny|Para usar o seu domínio apenas com o Exchange ou o E-mail Pro. Não permite a utilização de outra solução de e-mail com o seu serviço.|
|Nieautorytatywny|Para usar o serviço Exchange ou E-mail Pro juntamente com outra solução de e-mail, Deverá introduzir o servidor da sua outra solução de e-mail.|

> [!primary]
>
> A escolha do modo não é definitiva e pode ser alterada a partir da Área de Cliente OVHcloud.
>

Clique em `Seguinte`{.action} para adicionar o domínio.

![Add Domain](images/add_domain_exchange_step3.png){.thumbnail}

**Se escolheu um domínio gerido pela OVHcloud na lista**, a configuração pode ser realizada de forma automática. Para isso, selecione as opções e clique no botão `Seguinte`{.action} para adicionar o domínio.

**Se indicou um domínio não gerido pela OVHcloud**, a configuração será efetuada no passo seguinte.

![emailpro](images/add_domain_exchange_step4.png){.thumbnail}

No final do processo, verifique as informações apresentadas e clique em `Confirmar`{.action} para validar a adição do domínio. Repita este passo as vezes que forem necessárias para adicionar vários domínios.

### Configurar o domínio (DNS)

Quando o domínio for adicionado como domínio associado, certifique-se de que a configuração está correta. Para tal, consulte a tabela apresentada. Uma etiqueta verde indica que o domínio está corretamente configurado. No caso de a etiqueta ser de cor vermelha:

- **se escolheu uma configuração automática ao adicionar o domínio**: a visualização na Área de Cliente OVHcloud pode demorar alguns instantes para se atualizar;

- **se indicou um domínio não gerido pela OVHcloud**: clique na etiqueta vermelha para apresentar as alterações que deve realizar. Se este domínio não utilizar a configuração da OVHcloud (os seus servidores DNS), deverá realizar as modificações a partir da interface que lhe permite gerir a configuração do seu domínio. No quadro de uma configuração CNAME, pode obter mais informações a partir da documentação intitulada [Criar um registo CNAME para adicionar um domínio associado](https://docs.ovh.com/pt/microsoft-collaborative-solutions/exchange_20132016_adicionar_um_campo_do_tipo_cname/).

> [!primary]
>
> A alteração da configuração de um domínio pode demorar até 4 a 24 horas até ficar efetiva.
>

Para verificar se a configuração de um domínio está correta, aceda à tabela `Domínios associados`{.action} do seu serviço. Se a etiqueta for verde, o domínio está corretamente configurado. Caso contrário, a propagação poderá não ter terminado.

![emailpro](images/add_domain_exchange_step5.png){.thumbnail}

### Configurar e utilizar as contas

Agora que adicionou os domínios desejados ao seu serviço, pode configurar as suas contas de e-mail com estas últimas. Esta operação é realizada no separador `Contas de e-mail`{.action}. Se necessário, pode encomendar contas suplementares graças ao botão `Action`{.action}/`Encomendar contas`{.action} ou `Adicionar uma conta`{.action}.

Relembramos que todos os endereços criados no seu serviço poderão visualizar no diretório o conjunto dos endereços deste serviço, incluindo os que possuem um nome de domínio diferente.

Depois de configurar as contas, só precisa de as utilizar. Para isso, a OVHcloud coloca à sua disposição o **webmail** acessível no endereço <https://www.ovh.com/pt/mail/>. Para otimizar a utilização do seu endereço num software, certifique-se de que este é compatível com o serviço. 

Se pretender configurar o seu endereço de e-mail num software de correio eletrónico ou periférico, como um smartphone ou um tablet, ou obter ajuda relativamente às funcionalidades do seu serviço de e-mail, consulte os nossos documentos acessíveis a partir das páginas [Exchange](https://docs.ovh.com/pt/microsoft-collaborative-solutions/) e [E-mail Pro](https://docs.ovh.com/pt/emails-pro/).

Pode adquirir licenças Outlook na [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt) e licenças Office 365 na página <https://www.ovhcloud.com/pt/collaborative-tools/microsoft-365/>. Caso pretenda usufruir do software de correio eletrónico Outlook ou de outros programas da suite Office, recomendamos uma destas soluções.

### Eliminar um domínio de uma plataforma

Se pretender retirar um domínio associado ao seu serviço Exchange ou E-mail Pro, deve verificar que este não está associado a contas de e-mail, alias, recursos, contas partilhadas (apenas no Exchange), grupos, contactos externos ou pés de página sempre configurados. Neste caso, será necessário **associar estas contas a outro domínio** na sua plataforma ou **eliminá**-las.

> [!warning]
>
> Antes de eliminar as contas de e-mail, certifique-se de que estas não são utilizadas. Pode ser necessário um backup destas contas. Se necessário, consulte o guia [Migrar manualmente o seu endereço de e-mail](https://docs.ovh.com/pt/emails/migrar-os-enderecos-email-manualmente/), que lhe descreverá como exportar os dados de uma conta a partir da Área de Cliente ou a partir de um software de correio eletrónico.

Dirija-se ao separador `Domínios associados`{.action} da sua plataforma. Na tabela, a coluna `Contas` indica o número de contas associadas aos domínios da sua lista.

![emailpro](images/add_domain_exchange_step6.png){.thumbnail}

Se existirem contas de e-mail associadas ao nome de domínio que pretende desassociar, tem 2 possibilidades:

- **Associar as contas a outro domínio**: aceda ao separador `Contas de e-mail`{.action}. À direita das contas a modificar, clique no botão `...`{.action} e depois `Alterar`{.action}.
    ![emailpro](images/add_domain_exchange_step8.png){.thumbnail}
    Na janela de alteração, pode alterar o domínio associado à conta através do menu pendente.
    ![emailpro](images/add_domain_exchange_step9.png){.thumbnail}

- **Eliminar as contas da sua plataforma**: aceda ao separador `Contas de e-mail`{.action}. À direita da conta a eliminar, clique no botão `...`{.action} e, a seguir, `Renovar esta conta`{.action} ou `Reinicializar`{.action}.
    ![emailpro](images/add_domain_exchange_step7.png){.thumbnail}

Uma vez efetuada a reatribuição das contas a outro nome de domínio, ou a sua reinicialização, é agora possível proceder à eliminação do nome de domínio. 

No separador `Domínio associados`{.action} da sua plataforma, clique no botão `...`{.action} à direita do domínio em causa e, a seguir, em `Eliminar este domínio`{.action}.

![emailpro](images/add_domain_exchange_step10.png){.thumbnail}

## Quer saber mais?

[Criar um registo CNAME para adicionar um domínio associado](https://docs.ovh.com/pt/microsoft-collaborative-solutions/exchange_20132016_adicionar_um_campo_do_tipo_cname/)

[Editar uma zona DNS da OVHcloud](https://docs.ovh.com/pt/domains/alojamento_partilhado_como_editar_a_minha_zona_dns/)

Para serviços especializados (referenciamento, desenvolvimento, etc.), contacte os [parceiros OVHcloud](https://partner.ovhcloud.com/pt/).
Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](https://www.ovhcloud.com/pt/support-levels/)

Fale com a nossa comunidade de utilizadores: <https://community.ovh.com/en/>.
