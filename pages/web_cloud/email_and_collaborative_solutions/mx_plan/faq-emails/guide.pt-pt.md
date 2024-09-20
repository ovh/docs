---
title: FAQ e-mails OVHcloud
updated: 2024-06-27
---

## FAQ: e-mails

### O que fazer se for impossível enviar ou receber e-mails?

Na maioria dos casos, a impossibilidade de enviar ou receber e-mails está relacionada com a configuração do seu endereço no webmail. Para o verificar, aceda ao [webmail](/links/web/email) e faça um teste de envio e receção a partir do seu endereço.

- Se tudo funcionar normalmente, é porque o fenómeno tem mesmo origem na configuração do seu endereço.
- No entanto, se continuar a experimentar problemas no envio e na receção de e-mails, tem outras soluções ao seu dispor.

Recebe uma mensagem de erro no seguimento do envio de um e-mail? Se sim, leia toda a mensagem de erro, pois ela poderá especificar a razão (caixa cheia, caixa não existente...).

Também pode verificar se o domínio envia corretamente os e-mails. Para isso, a partir da [Área de Cliente OVHcloud](/links/manager), selecione a zona DNS do seu domínio e observe os registos de tipo MX instalados. Estes registos devem encontrar-se sob a forma «mx\*.mail.ovh.net» (asterisco a ser substituído por um algarismo entre 0 e 3).
Se os registos MX forem diferentes, é porque é possível que tenha um serviço de e-mail de um operador que não é a OVHcloud.

**Truques e dicas**: Se não conseguir ligar-se ao seu webmail, talvez tenha introduzido a palavra-passe errada. Verifique-a e, se necessário, pode alterá-la a partir da [Área de Cliente](/links/manager) antes de tentar uma nova conexão. Para isso, pode recorrer à nossa [documentação](/pages/web_cloud/email_and_collaborative_solutions/troubleshooting/diagnostic_advanced).

### Como configurar o meu endereço de e-mail e utilizá-lo com o webmail?

Pode configurar a sua conta de e-mail em programas como o Outlook, o Thunderbird, o Mail (em Mac)...
Disponibilizamos guias que o ajudarão nesse processo. Aceda a eles [aqui](/products/web-cloud-email-collaborative-solutions-mx-plan).

Graças ao [webmail](/links/web/email), pode aceder a qualquer momento à sua caixa de e-mails, a partir de qualquer aparelho conectado. Depois de criar a sua conta de e-mail, aceda a ela a partir deste endereço.

**Truques e dicas**: Se configurar a sua conta de e-mail num programa de correio eletrónico, sugerimos que o faça com o protocolo IMAP. Assim, os e-mails ficarão armazenados no servidor e poderá consultá-los onde quer que esteja, a partir do [webmail](/links/web/email). Para isso, pode recorrer à nossa [documentação](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_generalities).

### Como gerir os serviços de e-mail?

Todos os seus endereços de e-mail são geridos através da [Área de Cliente OVHcloud](/links/manager). Para o fazer, aceda e selecione o produto em questão. Pode alterar palavras-passe de endereços de e-mail, verificar a percentagem de espaço utilizado, criar novos endereços de e-mail ou eliminar endereços existentes.

**Dicas**: Com as soluções de e-mail MX Plan, pode delegar a gestão de uma conta de e-mail para outra conta OVHcloud, continuando a manter o controlo. Para o fazer, basta configurar uma delegação através da [Área de Cliente OVHcloud](/links/manager): Aceda à Área de Cliente OVHcloud, consulte a secção `E-mails` e selecione o domínio em questão. A seguir, aceda ao separador `E-mails` e selecione uma opção:

- `Gerir os elementos partilhados por todos os endereços de e-mail`{.action} na parte direita da interface, se pretender delegar a gestão de todas as suas contas para este domínio
- `Gestão da delegação`{.action}, se pretender delegar a gestão de uma conota específica (clique em `...`{.action} junto à conta em questão)  

Tenha em conta que é necessário um ID de cliente OVHcloud (NIC handle) para ambas as opções.

### O que devo saber antes de criar um endereço de e-mail?

Criar um endereço de e-mail não é uma operação complexa, mas é necessário respeitar as regras para definir o **nome do seu endereço de e-mail** e a sua **palavra-passe**.

O **nome do seu endereço de e-mail** deve respeitar as seguintes regras:

- Mínimo de 2 caracteres
- Máximo de 32 caracteres
- Nenhum caráter acentuado
- Sem caracteres especiais exceto os seguintes: `.`, `,`, `-` e `_`

A **palavra-passe** deve respeitar as seguintes regras:

- Mínimo de 9 caracteres
- Máximo de 30 caracteres
- Nenhum caráter acentuado

> [!warning]
> Por razões de segurança, recomendamos que não utilize duas vezes a mesma palavra-passe. Escolha uma palavra-passe que não possa ser relacionada com as suas informações pessoais (evite qualquer referência ao seu sobrenome, nome ou data de nascimento, por exemplo) e renove-a regularmente.

### Como recuperar a minha palavra-passe esquecida?

Por razões de segurança e de confidencialidade, não é possível **recuperar** uma palavra-passe. Conforme descrito no nosso "[Alterar a palavra-passe de um endereço de e-mail](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_change_password)", é necessário redefinir a sua palavra-passe se não a souber mais.

> [!primary]
>
> Se pretender armazenar uma palavra-passe, é aconselhável utilizar um gestor de palavra-passe, como, por exemplo, **Keepass**.

### Como limitar a receção de spam?

De modo a limitar a receção de spam, pode aplicar regras aos seus e-mails (chamadas «Filtros» no serviço MX Plan). Elas terão por objetivo eliminar ou transferir e-mails para a pasta «Mensagens indesejadas» aquando da receção.
Para isso, aceda à [Área de Cliente](/links/manager). Depois, na rubrica `E-mail`, selecione o domínio em causa. Clique no separador `E-mail`{.action} e, na coluna `Filtro`{.action}, clique no botão de ação.

Se não visualiza a coluna `Filtro`{.action}, a criação de filtros deverá ser feita através de regras de gestão da caixa de entrada no [webmail](/links/web/email). Para mais informações, consulte este guia: [Criar regras inbox no OWA](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/creating-inbox-rules-in-owa-mx-plan).

**Truques e dicas**: Se definir um filtro quanto à receção de spam, é possível que alguns e-mails legítimos sejam considerados indesejados. São os chamados «falsos positivos». Se isso lhe acontecer, sugerimos que faça um pedido de assistência a partir da [Área de Cliente OVHcloud](/links/manager). Assim, faremos o necessário para que essas mensagens deixem de ser consideradas spam.

### O meu endereço de e-mail está cheio, já não tenho espaço. O que posso fazer?

Se subscreveu [um dos nossos serviços de e-mail OVHcloud](/links/web/emails) e uma das suas contas de e-mail está saturada, consulte o nosso guia « [Gerir o espaço de armazenamento de uma conta de e-mail](/pages/web_cloud/email_and_collaborative_solutions/troubleshooting/email_manage_quota) ». Este guia ajuda-o a determinar se pode otimizar o espaço existente ou se é necessário mudar de oferta de e-mail para aumentar a capacidade de armazenamento.

### Desejo mudar de oferta de e-mail para o meu endereço, como posso fazê-lo mantendo o conteúdo?

Deseja mudar [de oferta de e-mail](/links/web/emails) para beneficiar de mais espaço e de funcionalidades, mas deseja conservar o conteúdo do seu endereço existente. Para isso, consulte um dos nossos manuais:

- [Migrar um endereço de e-mail MX Plan para uma conta E-mail Pro ou Exchange](/pages/web_cloud/email_and_collaborative_solutions/migrating/migration_control_panel)
- [Migrar os seus endereços de e-mail de uma plataforma de e-mail OVHcloud para outra](/pages/web_cloud/email_and_collaborative_solutions/migrating/migration_control_panel)
- [Migrar manualmente o seu endereço de e-mail](/pages/web_cloud/email_and_collaborative_solutions/migrating/manual_email_migration)
- [Migrar contas de e-mail através do OVH Mail Migrator](/pages/web_cloud/email_and_collaborative_solutions/migrating/migration_omm)
- [Migrar uma conta Gmail para uma conta de e-mail OVHcloud através do OVH Mail Migrator](/pages/web_cloud/email_and_collaborative_solutions/migrating/security_gmail)

### O serviço Office 365 Pro Plus contém uma licença Skype?

O serviço Office 365 Pro Plus não contém uma licença Skype. Só está incluído o programa Skype for Business.

### Como transferir sem interrupção de serviço os meus e-mails, o meu website, a minha base de dados e o meu domínio para os servidores OVHcloud?

Consulte o guia "[Migrar o seu website e os seus serviços associados para a OVHcloud](/pages/web_cloud/web_hosting/hosting_migrating_to_ovh)" para obter o conjunto das etapas a seguir.

## Quer saber mais? <a name="go-further"></a>

Para serviços especializados (referenciamento, desenvolvimento, etc), contacte os [parceiros OVHcloud](/links/partner).

Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](/links/support).

Fale com nossa [comunidade de utilizadores](/links/community).
