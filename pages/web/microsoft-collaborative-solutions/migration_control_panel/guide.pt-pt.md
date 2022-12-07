---
title: 'Migrar um endereço de e-mail MX Plan para uma conta E-mail Pro ou Exchange'
slug: migracao-endereco-email-partilhado-vers-exchange
excerpt: 'Saiba como migrar um endereço de e-mail MX Plan para uma conta E-mail Pro ou Exchange'
section: 'Migração de contas'
order: 02
---

**Última atualização: 22/11/2022**

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

## Objetivo

A OVHcloud oferece várias soluções de e-mail: MX Plan (vendido isoladamente ou incluído numa oferta de alojamento web), E-mail Pro e Exchange. Estas beneficiam de funcionalidades próprias e podem adaptar-se a várias utilizações. As suas necessidades evoluem? A OVHcloud oferece-lhe uma ferramenta de migração que lhe permite passar de uma solução para outra.

**Saiba como migrar um endereço de e-mail MX Plan para uma conta E-mail Pro ou Exchange.**

## Requisitos

- Ter um endereço de e-mail MX Plan (através da oferta MX Plan ou incluída numa oferta de [alojamento web da OVHcloud](https://www.ovhcloud.com/pt/web-hosting/){.external}).
- Dispor de um serviço [Exchange](https://www.ovhcloud.com/pt/emails/hosted-exchange/){.external} ou [E-mail Pro](https://www.ovhcloud.com/pt/emails/email-pro/){.external} com pelo menos uma conta não configurada (que aparecerá sob a forma "@configureme.me").
- **Não ter configurado um reencaminhamento para o endereço de e-mail MX Plan que pretende migrar.**
- Ter acesso à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}.

## Instruções

### 1 - Definir o projeto

As soluções E-mail Pro e Exchange dispõem de uma base de funcionalidades comum. No entanto, subsistem diferenças consoante os casos de utilização. Ao escolher um endereço Exchange, dispõe da totalidade das funções colaborativas, como a sincronização do calendário e dos contactos. A solução E-mail Pro, por sua vez, propõe algumas, mas estas estão limitadas a uma utilização apenas através de um webmail.

Antes de continuar, é importante saber para que oferta deseja migrar os seus endereços de e-mail MX Plan. Para o ajudar nesta escolha, consulte a página das [soluções de e-mails profissionais da OVHcloud](https://www.ovhcloud.com/pt/emails/){.external} que propõe uma comparação pormenorizada das ofertas. Tem a possibilidade de acumular as soluções e de utilizar para um mesmo nome de domínio uma ou várias contas E-mail Pro e Exchange. Além disso, se tiver de migrar várias contas, recomendamos que execute um plano de migração.

### Etapa 2: encomendar as suas contas E-mail Pro ou Exchange

Esta etapa é facultativa se já dispõe de um serviço Exchange ou E-mail Pro para o qual está a migrar.

Caso contrário, aceda à [Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt) e encomende o serviço E-mail Pro ou Exchange à sua escolha. Siga os passos indicados e aguarde até que o serviço esteja instalado. Receberá um e-mail no final desta operação.

> [!primary]
>
> Uma vez a conta encomendada, deixe-a na forma "@configureme.me" num primeiro tempo. Na verdade, será renomeado durante a migração.
>

### 3 - Realizar a migração

Antes de iniciar a migração, terá de identificar a versão do MXPlan a partir da qual migra.

Para isso, aceda à Área de [Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}, na secção `Web Cloud`{.action}. Clique em `E-mails`{.action} e selecione o serviço correspondente. Consulte a tabela abaixo para consultar a versão em baixo.

|Versão antiga da oferta MX Plan|Nova versão da oferta MX Plan|
|---|---|
|![email](images/mxplan-starter-legacy-step1.png){.thumbnail}<br> A sua oferta situa-se no quadro "Subscrição"|![email](images/mxplan-starter-new-step1.png){.thumbnail}<br>Poderá encontrar uma `Referência do servidor` na secção "Resumo" que começa por "mxplan-"|
|Continuar a ler na secção «[Versão antiga da oferta MX Plan](#VersionHistoriqueMxplan)».|Continuar a ler na secção «[Nova versão da oferta MX Plan](#NouvelleVersionMxplan)».|

#### 3.1 Migrar uma oferta MXPlan histórica <a name="VersionHistoriqueMxplan"></a>

> [!primary]
>
> A sua conta OVHcloud deve ter um contacto com o administrador **e** contacto técnico do serviço MX plan a migrar, **bem como** do serviço E-mail Pro ou Exchange para o qual migra.
>
> Para mais informações sobre as alterações de contactos, consulte o nosso guia para [gerir os contactos dos seus serviços](https://docs.ovh.com/pt/customer/gestao_dos_contactos/).
>

A migração pode ser efetuada a partir de duas interfaces:<br>

- **o do assistente de configuração Hosted Exchange**, apenas se encomendou um serviço Hosted Exchange e ainda não o configurou;
- **do MX Plan**, quando tiver um serviço E-mail Pro ou Exchange (configurado ou não) e um endereço MX Plan que pretende migrar.

> Lembre-se de que antes de iniciar a migração, certifique-se de que nenhum **reencaminhamento* ou que nenhum **atendedor automático* está configurado no seu MXplan.
> ![email](images/mxplan-legacy-redirect.png){.thumbnail}

Quando estiver pronto, continue a ler este manual em função da interface selecionada. Lembramos que o tempo de migração depende da quantidade de conteúdo a migrar para a sua nova conta. Pode variar de alguns minutos a várias horas.

> [!warning]
>
> Uma vez confirmada a migração, já não poderá aceder ao seu antigo endereço de e-mail MX Plan nem anular o processo de migração. Recomendamos vivamente que realize esta operação num momento adequado.
>
> Mesmo que já não possa aceder ao seu endereço de e-mail atual, as mensagens já recebidas e as recebidas não serão perdidas. Todos estarão imediatamente acessíveis a partir da sua nova conta.
>

##### **Migração a partir do assistente de configuração Exchange**

Para aceder, selecione na Área de [Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external} o serviço em questão. O assistente deverá aparecer para o ajudar a configurar o seu novo serviço Exchange. Durante este processo, poderá selecionar as contas de e-mail MX Plan a migrar.

Se o assistente de configuração não for apresentado, aparecerão as informações gerais do serviço Exchange. Neste caso, deverá realizar a migração das suas contas através da interface MX Plan.

##### **Migração a partir da interface MX Plan**

Para realizar a migração a partir desta interface, aceda à secção `E-mails`{.action} da Área de Cliente OVHcloud. De seguida, selecione o serviço que tem o nome de domínio dos seus endereços de e-mail. Clique no ícone em forma de engrenagem na linha da conta de e-mail em causa (também designada conta de origem) e, a seguir, em `Migrar a conta`{.action}.

![Exchange](images/access_the_migration_tool.png){.thumbnail}

Na nova janela, selecione o destino (para o qual pretende migrar o endereço) e clique em `Seguinte`{.action}. Se possuir no mínimo uma conta "livre" (ou seja, ainda não parametrizada), a migração efetuar-se-á para uma destas contas. De seguida, leia as informações apresentadas, valide-as e clique em `Seguinte`{.action}.

Se não possuir uma conta "livre", aparecerá um botão `Encomendar contas`{.action}. Siga os passos e aguarde até que as contas estejam instaladas para efetuar novamente a operação.

Por fim, confirme a palavra-passe do endereço de e-mail original (aquela que pretende migrar) e clique em `Migrar`{.action}. Esta operação deve ser repetida tantas vezes quantas as necessárias para a migração de outras contas.

![Exchange](images/account_migration_steps.png){.thumbnail}

#### 3.2 Migrar a nova versão do MXPlan <a name="NouvelleVersionMxplan"></a>

> [!warning]
>
> Se acabou de encomendar a sua nova oferta de e-mail, adicione o domínio à sua plataforma de e-mail antes de começar a migração. <br> - *Por exemplo, para migrar a conta "myemail@mydomain.ovh", deve adicionar o nome de domínio "mydomain.ovh" à sua plataforma.*
>
>Selecione o separador `Domínios associados`{.action} na sua plataforma, e clique em `Adicionar um domínio`{.action}. Uma vez adicionado o domínio, certifique-se de que a menção `OK` está na coluna `Estatuto`.
>
>![exchange](images/account_migration_adddomain.png){.thumbnail}
>
> Para mais informações sobre a adição de um domínio, siga [o guia E-mail Pro](https://docs.ovh.com/pt/emails-pro/configuracao-inicial/#2-adicionar-o-dominio) ou [o guia Exchange](https://docs.ovh.com/gb/en/microsoft-collaborative-solutions/adding-domain-exchange/).

A migração do seu MXPlan far-se-á em 3 grandes etapas, **Renomear**, **Criar** e **Migrar**.

![Exchange](images/mxplan-migration-configure-account.gif){.thumbnail}

1\. **Altere** o nome da conta MXPlan para migrar com um nome provisório (exemplo: para migrar a conta MX plan *john.smith@mydomain.ovh*, renome-a em *john.smith01@mydomain.ovh*).

No separador `Contas de e-mail`{.action} da plataforma MX Plan, clique no botão `...`{.action} e depois em `Alterar`{.action}.

![Exchange](images/mxplan-migration-configure-account01.png){.thumbnail}

> [!primary]
>
> A alteração da conta não é imediata. Aguarde até ao fim da operação antes de avançar para a etapa seguinte.

2\. **Crie** o seu endereço de e-mail na nova conta da sua plataforma E-mail Pro ou Exchange (tomando o exemplo anterior, vai criar *john.smith@mydomain.ovh* na sua nova plataforma).

No separador `Contas de e-mail`{.action} da plataforma E-mail Pro ou Exchange, clique no botão `...`{.action} e depois em `Alterar`{.action}.

![Exchange](images/mxplan-migration-configure-account02.png){.thumbnail}

3\. **Migre** a conta MXPlan para a sua nova plataforma com a nossa ferramenta [OMM](https://omm.ovh.net/) (OVH Mail Migrator).

Para mais informações sobre OMM, consulte o nosso guia [Migrar contas de e-mail através do OVH Mail Migrator](../exchange-migracao-de-contas-email-ovh-mail-migrator/).

![Exchange](images/mxplan-migration-configure-account03.png){.thumbnail}

O tempo de migração depende da quantidade de conteúdo a migrar para a sua nova conta. Pode variar de alguns minutos a várias horas.

Após a migração, verifique que encontra os seus elementos ao aceder ao webmail no endereço <https://www.ovh.com/pt/mail/>

Pode conservar ou eliminar a conta de origem com o nome provisório após esta migração.

Se pretender eliminá-lo, aceda ao separador `Contas de e-mail`{.action} do MXPlan e clique no botão `...`{.action} e em `Reinicializar esta conta`{.action}.

### 4 - Domínios: Consultar, Verificar e Alterar dados DNS

Nesta etapa, os seus endereços de e-mail já devem ser migrados e funcionais. Por questões de segurança, sugerimos que verifique se a configuração do seu domínio está correta ao consultar a Área de Cliente.

Para isso, selecione o serviço E-mail Pro ou Exchange em questão e aceda ao separador `Domínios associados`{.action}. Na tabela que vai aparecer, a coluna "Diagnóstico" irá permitir-lhe ver se a configuração DNS está correta: se a configuração tiver de ser alterada, aparecerá uma etiqueta vermelha.

> [!primary]
>
> Se acabou de migrar ou alterar um registo DNS do seu domínio, é possível que a visualização na [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external} necessite de algumas horas para se atualizar.
>

Para alterar a configuração, clique na etiqueta vermelha e execute a operação solicitada. A propagação pode demorar entre 4 e 24 horas.

![Exchange](images/check_the_dns_records_associated_domains.png){.thumbnail}

### 5 - utilizar os seus endereços de e-mail migrados

Só precisa de utilizar os seus endereços de e-mail migrados. Para isso, a OVHcloud disponibiliza uma aplicação online (_web app_) acessível no endereço <https://www.ovh.com/pt/mail/>. Introduza os dados de acesso relativos ao seu endereço de e-mail.

Se configurou uma das contas migradas num cliente de e-mail (como o Outlook), deve configurá-la novamente. As informações de ligação ao servidor OVHcloud foram alteradas após a migração. Para o ajudar nas suas operações, consulte o nosso manual através das secções dos guias [E-mail Pro](../../emails-pro/) e [Hosted Exchange](../). Se não consegue reconfigurar a conta de forma imediata, o acesso através da aplicação online é sempre possível.

## Organização do conteúdo dos seus endereços de e-mail na sequência de uma migração <a name="content-after-migration"></a>

Quando se liga pela primeira vez à sua nova conta de e-mail, o conteúdo migrado pode estar parcialmente oculto. Para apresentar todos os elementos, a partir do webmail, clique no master junto da "Caixa de Receção" para revelar os subpasta. O conteúdo migrado da sua antiga conta de e-mail deverá aparecer.

![exchange](images/owa_migrate_content.png) {.thumbnail}

As pastas predefinidas, como "elementos enviados" ou "lixeira", aparecem em inglês ("Sent items" e "Trash"), à exceção das pastas que criou.

Após uma migração, não hesite em explorar todas as pastas e subpastas da sua conta para garantir que todos os elementos estão presentes.

### Migrar Manual

Também pode migrar manualmente os seus endereços de e-mail para a nova oferta de e-mail OVHcloud utilizando apenas o seu software de correio. Apoie-se no nosso guia [Migrar manualmente o seu endereço de e-mail](../../emails/migrar-os-enderecos-email-manualmente/). No entanto, recomendamos que só utilize este método quando os métodos principais não forem possíveis.

## Quer saber mais?

[Como gerir os contactos (gestores) dos serviços OVHcloud](../../customer/gestao_dos_contactos/){.external}.

[Guias E-mail Pro](../../emails-pro/){.external}.

[Guias Exchange](../../microsoft-collaborative-solutions/){.external}.

Fale com a nossa comunidade de utilizadores: <https://community.ovh.com/en/>.
