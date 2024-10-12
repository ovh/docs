---
title: "Alojamento web -Como gerir utilizadores FTP"
excerpt: "Saiba como criar, modificar ou eliminar utilizadores FTP no seu alojamento web da OVHcloud"
updated: 2024-10-07
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

## Objetivo

As ofertas de alojamento web da OVHcloud dão acesso a um espaço de armazenamento FTP. Este espaço FTP permite, por exemplo, publicar ficheiros nos seus websites ou aplicações. O acesso a este espaço é possível através de um utilizador FTP ou SSH e da respetiva palavra-passe. No âmbito das suas atividades, poderá ter de criar vários utilizadores FTP para os seus diferentes colaboradores.

**Saiba como criar, modificar ou eliminar utilizadores FTP no seu alojamento web da OVHcloud.**

> [!primary]
>
> Este guia só é válido para os alojamentos web do tipo **Pro** ou **Performance**. Apenas estas 2 ofertas permitem a ativação de vários utilizadores FTP.

## Requisitos

- Ter um plano de [alojamento OVHcloud](/links/web/hosting) compatível.
- Ter acesso à [Área de Cliente OVHcloud](/links/manager), secção `Web Cloud`{.action}.

## Instruções

### Criar um novo utilizador FTP no seu alojamento web <a name="create-ftp-user"></a>

Para criar um novo utilizador FTP no seu alojamento web através da Área de Cliente OVHcloud, execute as seguintes ações:

1. Aceda à [Área de Cliente OVHcloud](/links/manager).
2. Na linha situada no topo da Área de Cliente, clique no separador `Web Cloud`{.action}.
3. Na coluna da esquerda, clique no menu pendente `Alojamentos`{.action}.
4. Selecione o alojamento web em causa.
5. Na página que vai aparecer, clique no separador `FTP-SSH`{.action}.
6. Para criar um novo utilizador FTP, clique no botão `Criar utilizador`{.action} à direita. Dependendo da resolução da sua tela, o botão pode ser localizado na parte inferior da página.

![FTP-SSH create user](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh/create-user.png){.thumbnail}

Surge a seguinte janela:

![FTP-SSH create user step 1](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh/create-user-step-1.png){.thumbnail}

Introduza as definições do novo utilizador FTP definindo os seguintes elementos/formulários:

- *Utilizador* : corresponde ao nome de utilizador FTP completo que vai definir para o seu colaborador. Deverá utilizá-lo para se ligar ao espaço de armazenamento FTP do seu alojamento web. Qualquer que seja o novo utilizador FTP criado no seu alojamento web, o nome escolhido será sempre precedido do login FTP principal do seu alojamento web, seguido de um hífen.
- Por exemplo, se o seu login FTP principal for `FTPLogin` e pretender criar um novo utilizador FTP `user1`, o login FTP do seu novo utilizador será `FTPLogin-user1`.

- *Pasta raiz* : corresponde ao nome do diretório ou subdiretório no qual o utilizador FTP terá o direito de se ligar no espaço de armazenamento FTP.
- Por exemplo, se o seu colaborador precisa de aceder ao conjunto do espaço de armazenamento FTP do seu alojamento web, deixe este formulário vazio. Caso contrário, especifique o nome do diretório ao qual será autorizado aceder (exemplos: `www`, `blog`, `website1`, `www/development`, etc.).

- *Protocolo de ligação* : permite definir o(s) protocolo(s) que o utilizador FTP poderá utilizar para se ligar ao espaço de armazenamento FTP do seu alojamento web.
- Por exemplo, se selecionar a terceira opção (os protocolos **FTP**,**SFTP** e **SSH**), o utilizador FTP poderá ligar-se com os três protocolos. Assim, o colaborador que irá utilizar este utilizador FTP poderá, por exemplo, escolher ligar-se em linha de comandos através do protocolo **SSH** mas também gerir o conteúdo FTP a partir do mesmo protocolo.

Depois de definidos os parâmetros, clique em `Seguinte`{.action} para aceder à etapa 2 da criação do novo utilizador FTP:

![FTP-SSH create user step 2](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh/create-user-step-2.png){.thumbnail}

Nesta segunda etapa, só deverá definir e confirmar, nos 2 formulários, a palavra-passe do novo utilizador FTP. Siga a política de palavras-passe listada logo abaixo dos 2 formulários para passar para a etapa 3.

Depois de escolher a sua palavra-passe e de a confirmar, clique em `Seguinte`{.action} para aceder à etapa 3 da criação do novo utilizador FTP:

![FTP-SSH create user step 3](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh/create-user-step-3.png){.thumbnail}

Esta última etapa resume as configurações escolhidas para o seu novo utilizador FTP. Se estes parâmetros correspondem ao que deseja, clique em `Validar`{.action} para finalizar o pedido de criação de um novo utilizador FTP no seu alojamento web.

> [!primary]
>
> Após a validação do pedido de criação, o novo utilizador pode demorar até 15 minutos até ser corretamente tomado em conta no alojamento web.

Se necessário, teste este novo utilizador FTP através do nosso guia "[Aceder ao espaço de armazenamento FTP do alojamento web](/pages/web_cloud/web_hosting/ftp_connection)".

### Modificar um utilizador FTP

Para editar um utilizador FTP, execute as seguintes ações:

1. Aceda à [Área de Cliente OVHcloud](/links/manager).
2. Na linha situada no topo da Área de Cliente, clique no separador `Web Cloud`{.action}.
3. Na coluna da esquerda, clique no menu pendente `Alojamentos`{.action}.
4. Selecione o alojamento web em causa.
5. Na página que vai aparecer, clique no separador `FTP-SSH`{.action}.
6. Na tabela que se encontra na parte inferior da página e na parte direita da linha correspondente ao utilizador FTP em questão, clique no botão `...`{.action} e, em seguida, clique em `Alterar`{.action}.

![FTP-SSH edit user](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh/edit-user1.png){.thumbnail}

Surge a seguinte janela:

![FTP-SSH edit user step 1](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh/modify-a-user-step1.png){.thumbnail}

Com exceção do nome de utilizador FTP e da respetiva palavra-passe associada, pode alterar aqui a *Pasta raiz* e os *Protocolos de ligação* definidos para o utilizador FTP. Se for necessário, consulte a secção "[Criar um novo utilizador FTP no alojamento web](#create-ftp-user)" situada mais acima neste guia para mais informações sobre os *Pasta raiz* e *Protocolos de ligação*.

Além disso, pode *Desativar utilizador* selecionando a caixa de verificação adequada. Esta opção pode ser útil se pretender impedir que um colaborador aceda ao seu espaço FTP sem eliminar os logs FTP e SSH associados. Estes logs permitem-lhe determinar quais as operações realizadas pelo seu colaborador se verificar intervenções não desejadas no seu alojamento web.

Depois de realizar as alterações, clique em `Seguinte`{.action} para aceder à etapa 2. Verifique os seus pedidos de alteração e depois clique em `Validar`{.action} para finalizar o pedido de modificação do utilizador FTP no seu alojamento web.

> [!primary]
>
> Se pretender alterar a palavra-passe de utilizador FTP, consulte o guia "[Modificar a palavra-passe de um utilizador FTP](/pages/web_cloud/web_hosting/ftp_change_password)".
>
> Se pretender alterar o nome de utilizador FTP, note que esta funcionalidade não está disponível. É obrigatório que [criar um novo utilizador FTP](#create-ftp-user) com o novo nome de utilizador desejado. Poderá, em seguida, [eliminar o antigo utilizador FTP](#delete-ftp-user) se necessário.

### Eliminar um utilizador FTP <a name="delete-ftp-user"></a>

Para eliminar um utilizador FTP, execute as seguintes ações:

1. Aceda à [Área de Cliente OVHcloud](/links/manager).
2. Na linha situada no topo da Área de Cliente, clique no separador `Web Cloud`{.action}.
3. Na coluna da esquerda, clique no menu pendente `Alojamentos`{.action}.
4. Selecione o alojamento web em causa.
5. Na página que vai aparecer, clique no separador `FTP-SSH`{.action}.
6. Na tabela que se encontra na parte inferior da página e na parte direita da linha correspondente ao utilizador FTP em questão, clique no botão `...`{.action} e, em seguida, clique em `Eliminar`{.action}.

![FTP-SSH delete user](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh/delete-user1.png){.thumbnail}

Surge a seguinte janela:

![FTP-SSH delete user confirmation](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh/delete-user1-confirmation.png){.thumbnail}

Clique em `Validar`{.action} para eliminar definitivamente o utilizador FTP do seu alojamento web.

## Quer saber mais?

[Aceder ao espaço de armazenamento FTP do alojamento web](/pages/web_cloud/web_hosting/ftp_connection).

[Modificar a palavra-passe de um utilizador FTP](/pages/web_cloud/web_hosting/ftp_change_password).

[Utilizar uma ligação SSH num alojamento web](/pages/web_cloud/web_hosting/ssh_on_webhosting).

[Utilizar PuTTY para se ligar em SSH](/pages/web_cloud/web_hosting/ssh_using_putty_on_windows)

[Utilize o FileZilla com o seu alojamento web](/pages/web_cloud/web_hosting/ftp_filezilla_user_guide)

[Utilize o Cyberduck com o seu alojamento web](/pages/web_cloud/web_hosting/ftp_cyberduck_user_guide_on_mac)

Para serviços especializados (referenciamento, desenvolvimento, etc), contacte os [parceiros OVHcloud](/links/partner).

Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](/links/support).

Fale com nossa [comunidade de utilizadores](/links/community). 