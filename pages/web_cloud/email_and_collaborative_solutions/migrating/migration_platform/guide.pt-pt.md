---
title: "Migrar os endereços de e-mail de uma plataforma de e-mail OVHcloud para outra"
excerpt: "Saiba como migrar os endereços de e-mail de uma plataforma Exchange ou E-mail Pro para outra plataforma Exchange, E-mail Pro ou MX Plan"
updated: 2021-10-21
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

## Objetivo

Deseja migrar os seus endereços de e-mail presentes numa plataforma Exchange ou E-mail Pro para outra plataforma Exchange, E-mail Pro ou MX Plan. Neste guia, poderá encontrar um processo de migração em duas fases:

1. **Configurar a plataforma de destino**.
2. **Migrar as contas de e-mail** da sua plataforma atual para a nova.

![email-migração](images/migration_platform01.gif){.thumbnail}

> [!primary]
>
> Para migrar uma solução MX Plan para uma plataforma Exchange ou E-mail Pro, sugerimos que siga o nosso guia [Migrar um endereço de e-mail MX Plan para uma conta E-mail Pro ou Exchange](/pages/web_cloud/email_and_collaborative_solutions/migrating/migration_control_panel).
>

**Saiba como migrar os endereços de e-mail de uma plataforma Exchange ou E-mail Pro para outra plataforma Exchange ou E-mail Pro.**

## Requisitos

- Ter uma plataforma **"fonte"** com contas [Exchange](https://www.ovhcloud.com/pt/emails/hosted-exchange/){.external} ou [E-mail Pro](https://www.ovhcloud.com/pt/emails/email-pro/){.external} configuradas.
- Ter uma plataforma de **"destino"** com contas [Exchange](https://www.ovhcloud.com/pt/emails/hosted-exchange/){.external}, [E-mail Pro](https://www.ovhcloud.com/pt/emails/email-pro/){.external} ou MX Plan (através da oferta MX Plan ou incluída numa oferta de [alojamento web OVHcloud](https://www.ovhcloud.com/pt/web-hosting/){.external}). Esta plataforma deve dispor de contas não configuradas ou disponíveis para acolher os endereços de e-mail que devem ser migrados.
- Ter acesso à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}.

## Instruções

### Configurar a plataforma de destino

Antes de iniciar a migração, caso tenha encomendado a nova oferta de e-mail, adicione o domínio à plataforma [E-mail Pro](/pages/web_cloud/email_and_collaborative_solutions/email_pro/first_config#2-adicionar-o-dominio) ou [Exchange](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/exchange_adding_domain). Se migrar para uma plataforma MX Plan, o domínio associado é "fixo", pode passar diretamente para [o passo seguinte](#accountsmigration).

> Selecione o separador `Domínios associados`{.action} na sua plataforma e clique em `Adicionar domínio`{.action}. Configure o seu domínio em **nonauthoritative**. Uma vez adicionado o domínio, certifique-se de que a menção `OK` está presente na coluna `Estado`.
>
> ![email-migração](images/migration_platform02.png){.thumbnail}
>
> Para mais informações sobre a adição de um domínio, siga [o guia E-mail Pro](/pages/web_cloud/email_and_collaborative_solutions/email_pro/first_config#2-adicionar-o-dominio) ou [o guia Exchange](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/exchange_adding_domain).

### Migrar as contas de e-mail <a name="accountsmigration"></a>

A migração das suas contas de e-mail far-se-á em 3 passos: **Alterar** o nome da conta de e-mail original, **criar** uma nova conta de e-mail e **migrar** da plataforma de origem para a nova.

![email-migração](images/migration_platform03.gif){.thumbnail}

> [!warning]
>
> Caso específico:
>
> - Se tiver de migrar **uma conta Exchange** para uma conta **E-mail Pro**, certifique-se de que as suas contas de e-mail não excedem os 10GB. As funções colaborativas, a sincronização dos calendários e os contactos não estão presentes no E-mail Pro e não podem ser migradas.
> - Se tiver de migrar **uma conta Exchange ou E-mail Pro** para uma conta **MX Plan**, certifique-se de que a sua conta de e-mail não excede os 5GB. As funções colaborativas, a sincronização dos calendários e contactos não estão presentes no MX Plan e não podem ser migradas.

#### Alterar o nome

Dê um nome provisório à conta de e-mail a migrar (exemplo: para migrar a conta de e-mail *john.smith@mydomain.ovh*, renomee-a para *john.smith01@mydomain.ovh*).

No separador `Contas de e-mail`{.action} da sua plataforma de e-mail, clique no botão `...`{.action} e depois em `Alterar`{.action}.

![email-migração](images/migration_platform04.png){.thumbnail}

#### Criar

Crie o seu endereço de e-mail na nova conta da sua plataforma E-mail Pro, Exchange ou MX Plan (tomando o exemplo anterior, vai então criar *john.smith@mydomain.ovh* na sua nova plataforma)

No separador `Contas de e-mail`{.action} da sua plataforma, clique no botão `...`{.action}, à direita da conta de e-mail de destino, e depois em `Alterar`{.action}.

![email-migração](images/migration_platform05.png){.thumbnail}

#### Migrar

> [!warning]
> 
> Apenas os dados das suas contas de e-mail serão migrados (e-mails, contactos, calendários, regras da caixa de receção, etc.). As funcionalidades ligadas à sua plataforma deverão ser recriadas na nova plataforma:
>
> - [alias](/pages/web_cloud/email_and_collaborative_solutions/common_email_features/feature_redirections) 
> - [Delegação de direitos](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/feature_delegation) 
> - [Grupos](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/feature_groups)
> - Contactos externos
> - [Posto de página](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/feature_footers)

Migre a conta de e-mail "source" para a sua nova plataforma com a ajuda da nossa ferramenta [OMM](https://omm.ovh.net/) (OVH Mail Migrator).

> Se tiver de migrar várias contas de e-mail, sugerimos que utilize o modo [Project](/pages/web_cloud/email_and_collaborative_solutions/migrating/migration_omm#project) via [OMM](https://omm.ovh.net/Project/Create), o que lhe permitirá importar uma tabela em formato CSV contendo as informações das contas de e-mail a migrar.

Para mais informações sobre OMM, consulte o nosso guia [Migrar contas de e-mail através do OVH Mail Migrator](/pages/web_cloud/email_and_collaborative_solutions/migrating/migration_omm).

![email-migração](images/migration_platform06.png){.thumbnail}

O tempo de migração depende da quantidade de dados a migrar para a sua nova conta. Pode variar de alguns minutos a várias horas.

Depois da migração, verifique que encontra todos os seus elementos ao aceder ao webmail <https://www.ovh.pt/mail/>.

Depois de efetuar a migração, pode conservar ou eliminar a conta de origem com o nome provisório.

Se pretender eliminá-lo, aceda ao separador `Contas de e-mail`{.action} da plataforma de e-mail original, clique no botão `...`{.action} e em `Reinicializar esta conta`{.action}.

### Verificar ou modificar a configuração do seu domínio

Nesta etapa, os seus endereços de e-mail já devem ser migrados e funcionais. Por questões de segurança, sugerimos que verifique se a configuração do seu domínio está correta ao consultar a Área de Cliente.

Para isso, selecione o serviço E-mail Pro ou Exchange em questão e aceda ao separador `Domínios associados`{.action}. Na tabela que vai aparecer, a coluna "Diagnóstico" irá permitir-lhe ver se a configuração DNS está correta: se a configuração tiver de ser alterada, aparecerá uma etiqueta vermelha.

> [!primary]
>
> Se acabou de migrar ou alterar um registo DNS do seu domínio, é possível que a visualização na [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external} necessite de algumas horas para se atualizar.
>

Para alterar a configuração, clique na etiqueta vermelha e execute a operação solicitada. A propagação desta última pode demorar entre 4 e 24 horas.

![email-migração](images/check_the_dns_records_associated_domains.png){.thumbnail}

### Utilizar os endereços de e-mail migrados

Só precisa de utilizar os seus endereços de e-mail migrados. Para isso, a OVHcloud disponibiliza uma aplicação online (_web app_) acessível no endereço <https://www.ovh.pt/mail/>. Introduza os dados de acesso relativos ao seu endereço de e-mail.

Se configurou uma das contas migradas num cliente de e-mail (exemplo: Outlook, Thunderbird), deve configurá-lo novamente. As informações de ligação ao servidor OVHcloud foram alteradas após a migração.
<br>Para o ajudar nas suas operações, consulte o nosso manual através das secções dos guias [E-mail Pro](/products/web-cloud-email-collaborative-solutions-email-pro){.external} e [Hosted Exchange](/products/web-cloud-email-collaborative-solutions-microsoft-exchange){.external}. Se não consegue reconfigurar a conta de forma imediata, o acesso através da aplicação online é sempre possível.

> [!primary]
>
> Também pode migrar manualmente endereços de e-mail para a OVHcloud utilizando a nossa ferramenta [OVH Mail Migrator (OMM)](https://omm.ovh.net/){.external}. Para isso, deverá dispor das informações (utilizador, palavra-passe, servidores) do e-mail de origem e do e-mail de destino.
>

## Quer saber mais?

[Como gerir os contactos (gestores) dos serviços OVHcloud](/pages/account_and_service_management/account_information/managing_contacts){.external}.

[Guides E-mail Pro](/products/web-cloud-email-collaborative-solutions-email-pro){.external}.

[Guias Exchange](/products/web-cloud-email-collaborative-solutions-microsoft-exchange){.external}.

Fale com a nossa comunidade de utilizadores: <https://community.ovh.com/en/>.
