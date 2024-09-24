--- 
title: "Configurar o seu endereço de e-mail na interface online do Gmail"
excerpt: "Aprenda a configurar um endereço de e-mail MX Plan na interface on-line do Gmail"
updated: 2024-09-24
--- 

## Objetivo

Os endereços de e-mail da oferta MX Plan podem ser configurados em diferentes programas de e-mail e interfaces online compatíveis. Isto permite-lhe enviar e receber e-mails a partir do dispositivo ou da interface online à sua escolha.

**Saiba como configurar um endereço de e-mail MX Plan na interface online do Gmail.**

> [!warning]
>
> A OVHcloud oferece-lhe serviços cuja configuração, gestão e responsabilidade é da sua responsabilidade. Assim, deverá assegurar o seu bom funcionamento.
>
> Este guia fornece as instruções necessárias para realizar as operações mais habituais. No entanto, se encontrar dificuldades, recomendamos que recorra a um [parceiro especializado](/links/partner) e/ou que contacte o editor do serviço. Não poderemos proporcionar-lhe assistência técnica. Para mais informações, consulte a secção "Ir mais longe" deste guia.
>

## Requisitos

- Dispor de um endereço de e-mail MX Plan (incluído na oferta MX Plan ou numa oferta de [alojamento web da OVHcloud](/links/web/hosting)).
- Ter os dados associados ao endereço de e-mail OVHcloud que pretende configurar.
- Dispor dos identificadores da conta Gmail (Pessoal ou Profissional) na qual deseja configurar o endereço OVHcloud.

> [!primary]
>
> Esta documentação foi realizada a partir da nova interface do Gmail. Se as imagens forem um pouco diferentes da sua versão, as instruções permanecerão as mesmas e poderão ser seguidas.
>

## Na Prática

### Etapa 1: adicionar a conta de e-mail OVHcloud na interface do Gmail

Para começar, aceda à interface de gestão do Gmail a partir do browser. Uma vez nesta última, introduza as informações da sua conta Gmail e ligue-se.

Depois de aceder à interface, clique no ícone em forma de roda dentada e, a seguir, em `Ver todos os parâmetros`{.action}. Na página que se abrir, clique no separador `Contas e importação`{.action}.

![mxplan](images/configuration-gmail-web-step1.png){.thumbnail}

Ao lado de `Consultar outras contas de e-mail`, clique em `Adicionar uma conta de e-mail`{.action}. Na janela que se abrir, indique o seu endereço de e-mail OVHcloud e clique em `Seguinte`{.action}. Escolha `Importar os e-mails da minha outra conta (POP3)`{.action} e clique novamente em `Seguinte`{.action}.

![mxplan](images/configuration-gmail-web-step2.png){.thumbnail}

Indique agora os parâmetros do servidor POP (servidor de entrada) do seu endereço de e-mail OVHcloud:

|Informação|Descrição|
|---|---|
|Nome de utilizador|Introduza o endereço de e-mail **completo**.|
|Palavra-passe|Introduza a palavra-passe do endereço de e-mail.|
|Servidor POP|Introduza o servidor "ssl0.ovh.net".|
|Porta|Selecione a porta "995".|

Em relação às escolhas que pode assinalar:

- **"Conservar uma cópia da mensagem recuperada no servidor"** : recomendamos que selecione esta opção se pretender conservar uma cópia das mensagens recebidas do seu endereço de e-mail OVHcloud nos nossos servidores;

- **"Deve sempre utilizar uma ligação segura (SSL) quando recuperar os seus e-mails"** : certifique-se de que seleciona esta caixa de verificação para que a ligação ao seu endereço de e-mail OVHcloud possa ser efetuada;

- **"Adicionar uma etiqueta às mensagens de entrada"** : esta escolha permite-lhe adicionar uma etiqueta aos e-mails que serão importados do seu endereço de e-mail OVHcloud para a sua conta Gmail;

- **"Arquivar as mensagens de entrada (sem passar pela caixa de entrada)"** : esta escolha permite-lhe não visualizar na caixa de entrada da sua conta Gmail as mensagens importadas do seu endereço de e-mail OVHcloud.

Depois de preencher as informações, clique no botão `Adicionar uma conta`{.action}. Se os dados estiverem corretos, será estabelecida a ligação com êxito ao endereço de e-mail.

![mxplan](images/configuration-gmail-web-step3.png){.thumbnail}

A partir daí, se também pretender enviar e-mails com o seu endereço OVHcloud a partir da interface em linha do Gmail, selecione a caixa de verificação `Sim, gostaria de enviar e-mails a partir do endereço`{.action} e, em seguida, clique em `Seguinte`{.action}.

De seguida, preencha o nome que pretende apresentar como remetente quando forem enviados e-mails com o endereço de e-mail, selecione a caixa de verificação `Tratar como alias`{.action} e clique no botão `Etapa seguinte`{.action}.

![mxplan](images/configuration-gmail-web-step4.png){.thumbnail}

Indique agora os parâmetros do servidor SMTP (servidor de envio) do seu endereço de e-mail OVHcloud:

|Informação|Descrição|
|---|---|
|Servidor SMTP|Indique o servidor "ssl0.ovh.net".|
|Porta|Selecione a porta "587".|
|Nome de utilizador|Introduza o endereço de e-mail **completo**.|
|Palavra-passe|Introduza a palavra-passe do endereço de e-mail.|

Depois de preencher as informações, selecione a caixa ao lado de `Ligação segura TLS`{.action} e clique no botão `Adicionar uma conta`{.action}. Se os dados estiverem corretos, será estabelecida a ligação com êxito ao endereço de e-mail.

![mxplan](images/configuration-gmail-web-step5.png){.thumbnail}

Só precisa de validar esta adição inserindo um código de confirmação enviado para o seu endereço de e-mail OVHcloud. Para o obter, ligue-se à sua conta de e-mail como de costume a partir da nossa interface online acessível a partir de: [Webmail](/links/web/email).

Após a validação efetuada, o endereço de e-mail OVHcloud será apresentado no separador `Contas e importação`{.action}, ao qual terá acesso no início da operação.

### Etapa 2: utilizar o endereço de e-mail a partir da interface do Gmail

Depois de configurar o endereço de e-mail, já só precisa de o utilizar! Pode desde já enviar e receber mensagens sobre esta última a partir da interface do Gmail.

Para enviar uma mensagem com o seu endereço de e-mail OVHcloud a partir da interface online do Gmail, deve escolher, aquando da redação de uma nova mensagem, o endereço de e-mail que realizará o envio. Esta escolha é feita ao lado de `De`{.action} na janela de redação.

![mxplan](images/configuration-gmail-web-step6.png){.thumbnail}

Tenha em conta que pode sempre utilizar a nossa interface online, acessível a partir do endereço [Webmail](/links/web/email), para aceder ao seu endereço de e-mail OVHcloud. Pode ligar-se a ele graças aos dados de acesso.

## Vá mais longe

> [!primary]
>
> Para mais informações sobre a configuração de um endereço de e-mail a partir da interface Gmail online, consulte [o Centro de Ajuda do Google](https://support.google.com/mail/answer/21289?hl=pt&co=GENIE.Platform%3DDesktop).

Fale com a nossa comunidade de utilizadores: <https://community.ovh.com>.