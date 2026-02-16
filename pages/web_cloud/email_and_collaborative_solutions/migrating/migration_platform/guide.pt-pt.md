---
title: "Migrar os endereços de e-mail de uma plataforma de e-mail OVHcloud para outra"
excerpt: "Saiba como migrar os endereços de e-mail de uma plataforma Exchange ou E-mail Pro para outra plataforma Exchange, E-mail Pro, MX Plan ou Zimbra"
updated: 2026-01-16
---

## Objetivo

Deseja migrar os seus endereços de e-mail presentes numa plataforma Exchange ou E-mail Pro para outra plataforma Exchange, E-mail Pro, MX Plan ou Zimbra. Neste guia, poderá encontrar um processo de migração em duas fases:

1. **Configurar a plataforma de destino**.
2. **Migrar as contas de e-mail** da sua plataforma atual para a nova.

![email-migração](images/migration_platform01.gif){.thumbnail}

> [!primary]
>
> Para migrar uma solução MX Plan para uma plataforma Exchange ou E-mail Pro, sugerimos que siga o nosso guia [Migrar um endereço de e-mail MX Plan para uma conta E-mail Pro ou Exchange](/pages/web_cloud/email_and_collaborative_solutions/migrating/migration_control_panel).
>

**Saiba como migrar os endereços de e-mail de uma plataforma Exchange ou E-mail Pro para outra plataforma Exchange ou E-mail Pro.**

## Requisitos

- Dispor de uma plataforma **"fonte"** com contas configuradas [Exchange](/links/web/emails-hosted-exchange) ou [E-mail Pro](/links/web/email-pro) ou [Zimbra](/links/web/zimbra).
- Ter uma plataforma de **"destino"** com contas [Exchange](/links/web/emails-hosted-exchange), [E-mail Pro](/links/web/email-pro) ou MX Plan (através da oferta MX Plan ou incluída numa oferta de [alojamento web OVHcloud](/links/web/hosting)). Esta plataforma deve dispor de contas não configuradas ou disponíveis para acolher os endereços de e-mail que devem ser migrados.
- Ter acesso à [Área de Cliente OVHcloud](/links/manager).

## Instruções

### Configurar a plataforma de destino

> [!warning]
>
> Antes de iniciar a sua migração, se acabou de encomendar a sua nova oferta de e-mail, adicione primeiro o nome de domínio à sua plataforma de e-mail. Se estiver a migrar para uma plataforma MX Plan, o nome de domínio anexado sendo "fixo", pode passar diretamente para a [próxima etapa](#accountsmigration).
>
> Selecione o separador `Domínios associados`{.action} ou `Domínio`{.action} na sua plataforma, em seguida clique em `Adicionar um domínio`{.action}. Uma vez o nome de domínio adicionado, certifique-se de que a indicação `OK` ou `Ativo`{.action} está bem presente na coluna `Status`.
>
> ![exchange](images/account_migration_adddomain.png){.thumbnail}
>
> Para mais informações sobre a adição de um domínio, siga [o guia E-mail Pro](/pages/web_cloud/email_and_collaborative_solutions/email_pro/first_config) ou [o guia Exchange](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/exchange_adding_domain).

### Migrar as contas de e-mail <a name="accountsmigration"></a>

A migração das suas contas de e-mail far-se-á em 3 passos: **Alterar** o nome da conta de e-mail original, **criar** uma nova conta de e-mail e **migrar** da plataforma de origem para a nova.

![email-migração](images/migration_platform03.gif){.thumbnail}

> [!warning]
>
> Caso específico:
>
> - Se tiver de migrar **uma conta Exchange ou Zimbra PRO** para uma conta **E-mail Pro** ou **Zimbra STARTER**, deve assegurar-se de que as suas contas de e-mail não excedam os 10 Go (E-mail Pro) ou 15 Go (Zimbra STARTER). As funções colaborativas, a sincronização de calendários e contactos não estão presentes no E-mail Pro ou Zimbra STARTER e não podem ser migradas.
> - Se tiver de migrar **uma conta Exchange, E-mail Pro ou Zimbra** para uma conta **MX Plan**, deve assegurar-se de que a sua conta de e-mail não exceda os 5 Go. As funções colaborativas, a sincronização de calendários e contactos não estão presentes no MX Plan e não podem ser migradas.

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

Migre a conta de e-mail "source" para a sua nova plataforma com a ajuda da nossa ferramenta [OMM](/links/web/omm) (OVHcloud Mail Migrator).

Para mais informações sobre OMM, consulte o nosso guia [Migrar contas de e-mail através do OVHcloud Mail Migrator](/pages/web_cloud/email_and_collaborative_solutions/migrating/migration_omm).

![email-migração](images/migration_platform06.png){.thumbnail}

O tempo de migração depende da quantidade de dados a migrar para a sua nova conta. Pode variar de alguns minutos a várias horas.

Depois da migração, verifique que encontra todos os seus elementos ao aceder ao webmail [Webmail](/links/web/email).

Depois de efetuar a migração, pode conservar ou eliminar a conta de origem com o nome provisório.

Se pretender eliminá-lo, aceda ao separador `Contas de e-mail`{.action} da plataforma de e-mail original, clique no botão `...`{.action} e em `Reinicializar esta conta`{.action}.

### Verificar ou modificar a configuração do seu domínio

Nesta etapa, os seus endereços de e-mail já devem ser migrados e funcionais. Por questões de segurança, sugerimos que verifique se a configuração do seu domínio está correta ao consultar a Área de Cliente.

Para isso, selecione o serviço E-mail Pro, Exchange ou Zimbra em causa, em seguida dirija-se ao separador `Domínios associados`{.action} ou `Domínio`{.action} na sua plataforma. Verifique a rubrica ou a coluna `Diagnóstico`{.action}.

![exchange](images/check_the_dns_records_associated_domains.png){.thumbnail}

> [!primary]
>
> Se acabou de migrar ou alterar um registo DNS do seu domínio, é possível que a visualização na [Área de Cliente OVHcloud](/links/manager) necessite de algumas horas para se atualizar.
>

Para modificar a configuração, clique na pastilha vermelha e realize a manipulação solicitada. Esta última necessita de um tempo de propagação de 4 a 24 horas no máximo para estar plenamente efetiva.

### Utilizar os endereços de e-mail migrados

Só precisa de utilizar os seus endereços de e-mail migrados. Para isso, a OVHcloud disponibiliza uma aplicação online (_web app_) acessível no endereço [Webmail](/links/web/email). Introduza os dados de acesso relativos ao seu endereço de e-mail.

Se configurou uma das contas migradas num cliente de e-mail (exemplo: Outlook, Thunderbird), deve configurá-lo novamente. As informações de ligação ao servidor OVHcloud foram alteradas após a migração.

> [!primary]
>
> Também pode migrar manualmente endereços de e-mail para a OVHcloud utilizando a nossa ferramenta [OVHcloud Mail Migrator (OMM)](/links/web/omm). Para isso, deverá dispor das informações (utilizador, palavra-passe, servidores) do e-mail de origem e do e-mail de destino.
>

## Quer saber mais?

[Como gerir os contactos (gestores) dos serviços OVHcloud](/pages/account_and_service_management/account_information/managing_contacts)

[Primeiros passos com a oferta E-mail Pro](/pages/web_cloud/email_and_collaborative_solutions/email_pro/first_config)

[Primeiros passos com a oferta Exchange](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/exchange_starting_hosted)

[Primeiros passos com a oferta Zimbra](/pages/web_cloud/email_and_collaborative_solutions/zimbra/getting_started_zimbra)

Fale com nossa [comunidade de utilizadores](/links/community).
