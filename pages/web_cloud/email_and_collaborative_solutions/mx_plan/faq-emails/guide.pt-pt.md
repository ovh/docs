---
title: FAQ e-mails OVHcloud
excerpt: "Consulte as perguntas mais frequentes sobre os e-mails"
updated: 2025-05-21
---

<style>
details>summary {
    color:rgb(33, 153, 232) !important;
    cursor: pointer;
}
details>summary::before {
    content:'\25B6';
    padding-right:1ch;
}
details[open]>summary::before {
    content:'\25BC';
}
.w-500 {
  max-width:500px !important;
}
</style>

## FAQ de e-mail

Nesta página, encontrará as perguntas mais frequentes sobre a utilização dos seus e-mails em função das ofertas de e-mail OVHcloud.

### As ofertas de e-mail na OVHcloud

A OVHcloud oferece atualmente 4 ofertas de e-mail. Para compreender as suas especificidades, navegue através dos separadores em baixo:

> [!tabs]
> **E-mails / MX Plan**
>>>
>>![MX Plan](images/mxplan01.png){.thumbnail .w-500}
>>>
>> 1. A oferta de e-mail mais antiga da OVHcloud, que inclui as funções essenciais de um serviço de e-mail com 5 GB de espaço de armazenamento por conta de e-mail.
>> 2. Incluída com as ofertas de alojamento web e pode ser encomendada através da [Área de Cliente OVHcloud](/links/manager).
>> 3. Esta oferta está disponível em 3 tecnologias de correio eletrónico diferentes. **Roundcube**, **OWA** (Outlook Web Access) e **Zimbra**.
>>>
> **Zimbra Mail**
>>>
>>![Zimbra Mail](images/zimbra01.png){.thumbnail .w-500}
>>>
>> 1. Oferta de e-mail mais recente da OVHcloud, oferece um serviço de e-mail flexível e evolutivo em três níveis de oferta e de funcionalidades.
>> 2. Pode encomendar uma conta Zimbra através da [Área de Cliente OVHcloud](/links/manager) ou diretamente em [ovhcloud.com](/links/web/email).
>> 3. Como o nome indica, utiliza a interface **Zimbra**.
>>>
> **E-mails Pro**
>>>
>>>![Email Pro](images/emailpro01.png){.thumbnail .w-500}
>>>
>> 1. Oferta de e-mail baseada na tecnologia Exchange, com funcionalidades essenciais e um espaço de armazenamento de 10 GB.
>> 2. Pode encomendar uma conta E-mail Pro através da [Área de Cliente OVHcloud](/links/manager) ou diretamente através de [ovhcloud.com](/links/web/email).
>> 3. Esta oferta utiliza a interface webmail **OWA** (Outlook Web Access).
>>>
> **Exchange**
>>>
>>>![Exchange](images/exchange01.png){.thumbnail .w-500}
>>>
>> 1. Oferta de e-mail completa com funcionalidades de colaboração online com 50 GB ou 300 GB de espaço de armazenamento.
>> 2. Incluída com as ofertas de alojamento web e pode ser encomendada através da [Área de Cliente OVHcloud](/links/manager).
>> 3. Esta oferta utiliza a interface webmail **OWA** (Outlook Web Access).
>>>

> [!success]
>
> Salvo indicação em contrário, as questões abordadas abaixo dizem respeito ao conjunto das ofertas de e-mail OVHcloud.

/// details | Quais são as diferenças entre as tecnologias de e-mail utilizadas pelas ofertas **MX Plan**?

A oferta MX Plan é distinta pela sua evolução, que se baseia em três tecnologias de e-mail distintas. Cada uma detém a sua própria interface webmail:

- **Roundcube**.
- **OWA** (Outlook Web Access).
- **Zimbra**.

Esta diversidade de tecnologias implica uma ergonomia de funcionamento diferente para cada interface. Algumas funcionalidades podem ser configuradas através da Área de Cliente, enquanto outras são configuradas através do webmail.

Pode encontrar em seguida um quadro recapitulativo das principais funcionalidades e-mails, classificadas por tecnologia e localização de configuração:

![MX plan](images/email_feature_table.png){.thumbnail .w-500}

///

/// details | Como identificar a tecnologia utilizada na minha oferta **MX Plan**?

A tecnologia de e-mail utilizada para a oferta MX Plan é caracterizada pela interface do seu webmail. Para o identificar a partir da Área de Cliente, siga o seguinte caminho:

1. Aceda à [Área de Cliente OVHcloud](/links/manager).
1. Aceda à secção `Web Cloud`{.action}.
1. Clique em `MX Plan`{.action}.
1. Selecione o domínio em questão.
1. No separador `Informações gerais`{.action}, selecione por predefinição.
1. Registe a tecnologia utilizada como **Webmail**.

![MX plan](images/technology-email.png){.thumbnail .w-500}

///


/// details | O que é preciso saber antes de criar um endereço de e-mail?

Criar um endereço de e-mail não é uma operação complexa, mas é necessário respeitar as regras para definir o **nome do seu endereço de e-mail** e a sua **palavra-passe**.

O **nome do seu endereço de e-mail** deve respeitar as seguintes regras:

- Mínimo de 2 caracteres.
- Máximo de 32 caracteres.
- Nenhum caráter acentuado.
- Sem caracteres especiais, exceto os seguintes: `.`, `,`, `-` e `_`.

A **palavra-passe** deve respeitar as seguintes regras:

- Mínimo de 9 caracteres.
- Máximo de 30 caracteres.
- Nenhum caráter acentuado.

> [!warning]
> Por motivos de segurança, não utilize a mesma palavra-passe duas vezes. Escolha um que não tenha qualquer relação com as suas informações pessoais (evite mencionar, por exemplo, o seu nome, sobrenome e data de nascimento). Altere-o regularmente.

///

/// details | O que fazer se deixar de receber os meus e-mails?

Encontrará abaixo as principais razões de uma falha na receção dos seus e-mails.

1. **Software de correio eletrónico**: A falha na receção de correio eletrónico está frequentemente associada à configuração do endereço de correio eletrónico no software de correio eletrónico (Outlook, Mail para macOS, Thunderbird, etc.). Para o verificar, aceda a [webmail](/links/web/email). Se verificar que existem e-mails na pasta A receber do webmail que não estão presentes no software de mensagens, a resposta será provavelmente a sua configuração do software. Para mais informações, consulte a nossa página "[Impossível enviar ou receber e-mails](/pages/web_cloud/email_and_collaborative_solutions/troubleshooting/diagnostic_advanced)".
1. **Configuração DNS**: O seu serviço de e-mail está associado a um domínio. Os registos MX na zona DNS designam os servidores de receção de e-mail. Se alterou recentemente os servidores DNS ou a zona DNS, estes registos MX podem ter sido "interrompidos". O que explicaria um corte na receção dos e-mails.Para mais informações sobre o assumpto, consulte a nossa página "[Impossível enviar ou receber e-mails](/pages/web_cloud/email_and_collaborative_solutions/troubleshooting/diagnostic_advanced)".
1. **Quota de e-mail ultrapassada**: Se a quota de armazenamento da sua conta de e-mail for atingida, já não será possível receber e-mails e o seu remetente receberá uma mensagem de erro indicando que a sua conta de e-mail está cheia. Gerir o espaço de armazenamento de uma conta de e-mail Para mais informações, consulte a nossa página "[Gerir o espaço de armazenamento de uma conta de e-mail ](/pages/web_cloud/email_and_collaborative_solutions/troubleshooting/email_manage_quota)".
1. **Regras da caixa de entrada**: A regra da caixa de entrada pode impedir a entrega de mensagens de correio eletrónico para a pasta A receber ou redirecioná-las para a pasta SPAM. Consulte as suas regras a partir do seu programa de mensagens (Outlook, Mail de macOS, Thunderbird, etc.) ou a partir de [webmail](/links/web/email).
1. **Incidente ou manutenção**: Consultar a nossa página "[Web Cloud status](https://web-cloud.status-ovhcloud.com/pt/)" para verificar se uma operação não está em curso no seu serviço de e-mail.

> [!primary]
>
> **Truques e dicas**: Se não for possível estabelecer ligação ao webmail, é possível que a palavra-passe esteja errada. Verifique-a e, se necessário, pode alterá-la a partir da [Área de Cliente OVHcloud](/links/manager) e renovar a ligação.

///

/// details | O que fazer se não conseguir enviar os meus e-mails?

1. **Software de correio eletrónico**: Se o seu endereço de correio eletrónico não for enviado com segurança, poderá ser configurado no software de correio eletrónico (Outlook, Mail para macOS, Thunderbird, etc.). Para o verificar, aceda a [webmail](/links/web/email). Se verificar que consegue enviar e-mails a partir do webmail, o fenómeno será causado pela configuração do seu software. Para mais informações, consulte a nossa página "[Impossível enviar ou receber e-mails](/pages/web_cloud/email_and_collaborative_solutions/troubleshooting/diagnostic_advanced)".
1. **Código de erro**: Quando envia uma mensagem e o servidor destinatário a recusa, esta normalmente envia-lhe uma mensagem de erro com um código de erro. Analise a mensagem de erro, ela poderá especificar o motivo (limite máximo da conta de e-mail atingida, endereço de e-mail do destinatário inexistente, etc.). Para mais informações, consulte a nossa página "[Impossível enviar ou receber e-mails](/pages/web_cloud/email_and_collaborative_solutions/troubleshooting/diagnostic_advanced)".
1. **Tamanho do e-mail**: Quer seja o seu fornecedor de e-mail ou o servidor destinatário, existe um limite de tamanho para um e-mail. Aconselhamos que transmita principalmente imagens ou ficheiros pdf com um tamanho pequeno. No caso de ficheiros grandes, é preferível utilizar ferramentas de transferência de ficheiros como [plik.ovh](https://plik.ovh/).

///


/// details | Porquê configurar os registos SPF e DKIM?

**SPF (Sender Policy Framework)**

Permite aos servidores que recebem e-mails garantir que estes últimos foram enviados a partir de um servidor de confiança. Este protocolo é indispensável para legitimar as trocas de e-mails. De facto, sem registo SPF no nome de domínio do seu serviço de e-mail, os seus e-mails poderão ser considerados indesejados pelos destinatários.

Para saber como configurar um registo SPF no seu serviço de e-mail, consulte o nosso guia: "[Melhorar a segurança dos e-mails através de um registo SPF](/pages/web_cloud/domains/dns_zone_spf)".

**DKIM (DomainKeys Identified Mail)**

Permite assinar os e-mails para evitar o furto de identidade. Esta assinatura funciona com base no princípio do hash combinado com uma criptografia assimétrica. Este protocolo é complementar ao SPF. O SPF intervém na legitimidade do domínio, ao passo que o DKIM verifica que cada e-mail é assinado pelo serviço de e-mail correto aquando do envio. Este serviço também se torna um referência em termos de segurança do correio eletrónico. Alguns serviços de e-mail também podem considerar um e-mail indesejado se não estiver protegido por uma assinatura DKIM.

Para saber como configurar um registo DKIM no seu serviço de e-mail, consulte o guia: "[Melhorar a segurança dos e-mails através de um registo DKIM](/pages/web_cloud/domains/dns_zone_dkim)".

///


/// details | Como configurar o meu endereço de e-mail e utilizá-lo com o webmail?

Pode configurar a sua conta de e-mail em programas como o Outlook, o Thunderbird, o Mail (em Mac), etc.
Disponibilizamos guias que o ajudarão nesse processo. Aceda a eles [aqui](/products/web-cloud-email-collaborative-solutions-mx-plan).

> [!tabs]
> **E-mails e Zimbra Mail**
>>
>> **Computador com Windows**
>> - [Outlook para Windows](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_outlook_2016).
>> - [Thunderbird para Windows](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_thunderbird_windows).
>> - [Correio para Windows](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_windows_10).
>>
>> **Computador Apple Mac**
>> - [Outlook para macOS](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_outlook_2016_mac).
>> - [Mail para macOS](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_mail_macos).
>> - [Thunderbird para macOS](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_thunderbird_mac).
>>
>> **iPhone ou iPad**
>> - [Mail para o iPhone e o iPad](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_ios).
>>
>> **Smartphone ou tablet Android**
>> - [Gmail para Android](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_android).
>>
> **E-mails Pro**
>>
>> **Computador com Windows**
>> - [Outlook para Windows](/pages/web_cloud/email_and_collaborative_solutions/email_pro/how_to_configure_outlook_2016).
>> - [Thunderbird para Windows](/pages/web_cloud/email_and_collaborative_solutions/email_pro/how_to_configure_thunderbird).
>> - [Correio para Windows](/pages/web_cloud/email_and_collaborative_solutions/email_pro/how_to_configure_windows_10).
>>
>> **Computador Apple Mac**
>> - [Outlook para macOS](/pages/web_cloud/email_and_collaborative_solutions/email_pro/how_to_configure_outlook_2016_mac).
>> - [Mail para macOS](/pages/web_cloud/email_and_collaborative_solutions/email_pro/how_to_configure_mail_macos).
>> - [Thunderbird para macOS](/pages/web_cloud/email_and_collaborative_solutions/email_pro/how_to_configure_thunderbird_mac).
>>
>> **iPhone ou iPad**
>> - [Mail para o iPhone e o iPad](/pages/web_cloud/email_and_collaborative_solutions/email_pro/how_to_configure_ios).
>>
>> **Smartphone ou tablet Android**
>> - [Gmail para Android](/pages/web_cloud/email_and_collaborative_solutions/email_pro/how_to_configure_android).
>>
> **Microsoft Exchange**
>>
>> **Computador com Windows**
>> - [Outlook para Windows](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/how_to_configure_outlook_2016).
>> - [Thunderbird para Windows](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/how_to_configure_thunderbird).
>> - [Correio para Windows](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/how_to_configure_windows_10).
>>
>> **Computador Apple Mac**
>> - [Outlook para macOS](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/how_to_configure_outlook_2016_mac).
>> - [Mail para macOS](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/how_to_configure_mail_macos).
>> - [Thunderbird para macOS](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/how_to_configure_thunderbird_mac).
>>
>> **iPhone ou iPad**
>> - [Mail para o iPhone e o iPad](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/how_to_configure_ios).
>>
>> **Smartphone ou tablet Android**
>> - [Gmail para Android](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/how_to_configure_android).
>>

Graças ao [webmail](/links/web/email), pode aceder a qualquer momento à sua caixa de e-mails, a partir de qualquer aparelho conectado. Depois de criar a sua conta de e-mail, aceda a ela a partir deste endereço.

**Truques e dicas**: Se configurar a sua conta de e-mail num programa de correio eletrónico, sugerimos que o faça com o protocolo IMAP. Assim, os e-mails ficarão armazenados no servidor e poderá consultá-los onde quer que esteja, a partir do [webmail](/links/web/email). Para isso, pode recorrer à nossa [documentação](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_generalities).

///

/// details | Como gerir os serviços de e-mail?

O conjunto dos seus endereços de e-mail é gerido a partir da sua [Área de Cliente OVHcloud](/links/manager). Depois de se conectar, aceda ao produto em causa. Assim, pode alterar a palavra-passe dos seus endereços de e-mail, verificar o espaço utilizado, criar novos endereços ou eliminar endereços existentes.

**Truques e dicas**: Nas ofertas de e-mail MX Plan, pode delegar a gestão de uma conta de e-mail a outra conta OVHcloud, ao mesmo tempo que mantém o controlo sobre esta. Para isso, basta configurar uma delegação a partir da sua [Área de Cliente OVHcloud](/links/manager). Pode apoiar-se em [nossa documentação](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/feature_delegation).

///

/// details | O que devo saber antes de criar um endereço de e-mail?

Criar um endereço de e-mail não é uma operação complexa, mas é necessário respeitar as regras para definir o **nome do seu endereço de e-mail** e a sua **palavra-passe**.

O **nome do seu endereço de e-mail** deve respeitar as seguintes regras:

- Mínimo de 2 caracteres.
- Máximo de 32 caracteres.
- Nenhum caráter acentuado.
- Sem caracteres especiais exceto os seguintes: `.`, `,`, `-` e `_`.

A **palavra-passe** deve respeitar as seguintes regras:

- Mínimo de 9 caracteres.
- Máximo de 30 caracteres.
- Nenhum caráter acentuado.

> [!warning]
> Por razões de segurança, recomendamos que não utilize duas vezes a mesma palavra-passe. Escolha uma palavra-passe que não possa ser relacionada com as suas informações pessoais (evite qualquer referência ao seu sobrenome, nome ou data de nascimento, por exemplo) e renove-a regularmente.

///

/// details | Como recuperar a minha palavra-passe esquecida?

Por razões de segurança e de confidencialidade, não é possível **recuperar** uma palavra-passe. Conforme descrito no nosso "[Alterar a palavra-passe de um endereço de e-mail](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_change_password)", é necessário redefinir a sua palavra-passe se não a souber mais.

> [!primary]
>
> Se pretender armazenar uma palavra-passe, é aconselhável utilizar um gestor de palavra-passe, como, por exemplo, **Keepass**.
///

/// details | Como limitar a receção de spam?

De modo a limitar a receção de spam, pode aplicar regras aos seus e-mails (chamadas "Filtros" no serviço MX Plan). Elas terão por objetivo eliminar ou transferir e-mails para a pasta "Mensagens indesejadas" aquando da receção.
Para isso, aceda à [Área de Cliente OVHcloud](/links/manager), aceda à secção `Web Cloud`{.action} e clique em `MX Plan`{.action}. Selecione o domínio em causa, clique no separador `E-mails`{.action} e, na coluna `Filtros`, clique no ícone "Gestão dos filtros da conta".

Se não visualiza a coluna `Filtros`, a criação de filtros deverá ser feita através de regras de gestão da caixa de entrada no [webmail](/links/web/email). Para mais informações, consulte este guia: [Criar regras inbox no OWA](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/creating-inbox-rules-in-owa-mx-plan).

**Truques e dicas**: Se definir um filtro quanto à receção de spam, é possível que alguns e-mails legítimos sejam considerados indesejados. São os chamados "falsos positivos". Se isso lhe acontecer, sugerimos que faça um pedido de assistência a partir da [Área de Cliente OVHcloud](/links/manager). Assim, faremos o necessário para que essas mensagens deixem de ser consideradas spam.

///


/// details | O meu endereço de e-mail está cheio, já não tenho espaço. O que posso fazer?

Se subscreveu [um dos nossos serviços de e-mail OVHcloud](/links/web/emails) e uma das suas contas de e-mail está saturada, consulte o nosso guia "[Gerir o espaço de armazenamento de uma conta de e-mail](/pages/web_cloud/email_and_collaborative_solutions/troubleshooting/email_manage_quota)". Este guia ajuda-o a determinar se pode otimizar o espaço existente ou se é necessário mudar de oferta de e-mail para aumentar a capacidade de armazenamento.

///

/// details | Quero mudar de oferta de e-mail para o meu endereço, como posso fazê-lo mantendo o conteúdo?

Deseja mudar [de oferta de e-mail](/links/web/emails) para beneficiar de mais espaço e de funcionalidades, mas deseja conservar o conteúdo do seu endereço existente. Para isso, consulte um dos nossos manuais:

- [Migrar um endereço de e-mail MX Plan para uma conta E-mail Pro ou Exchange](/pages/web_cloud/email_and_collaborative_solutions/migrating/migration_control_panel).
- [Migrar os seus endereços de e-mail de uma plataforma de e-mail OVHcloud para outra](/pages/web_cloud/email_and_collaborative_solutions/migrating/migration_control_panel).
- [Migrar manualmente o seu endereço de e-mail](/pages/web_cloud/email_and_collaborative_solutions/migrating/manual_email_migration).
- [Migrar contas de e-mail através do OVH Mail Migrator](/pages/web_cloud/email_and_collaborative_solutions/migrating/migration_omm).
- [Migrar uma conta Gmail para uma conta de e-mail OVHcloud através do OVH Mail Migrator](/pages/web_cloud/email_and_collaborative_solutions/migrating/security_gmail).

///

/// details | ¿Office 365 Pro Plus incluye una licencia de Skype?

Office 365 Pro Plus no tiene licencia de Skype. Solo se incluye el software de Skype for Business.

///

/// details | ¿Cómo transferir sin interrupción del servicio a los servidores de OVHcloud: mi correo, mi sitio web, mi base de datos y mi dominio?

Para más información, consulte la guía "[Migrar un sitio web y los servicios asociados a OVHcloud](/pages/web_cloud/web_hosting/hosting_migrating_to_ovh)".

///



## Quer saber mais? <a name="go-further"></a>

Para serviços especializados (referenciamento, desenvolvimento, etc.), contacte os [parceiros OVHcloud](/links/partner).

Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](/links/support).

Fale com a nossa [comunidade de utilizadores](/links/community).
