---
title: "Tutorial - Utilizar o Cyberduck com o meu alojamento web"
excerpt: "Saiba como utilizar a aplicação Cyberduck para se ligar ao seu alojamento web da OVHcloud"
updated: 2024-02-23
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

## Objetivo

Disponível no macOS e Windows, o Cyberduck é uma aplicação open-source de transferência de ficheiros. Esta opção permite aceder ao espaço de armazenamento FTP do seu alojamento web (através de protocolo FTP ou SFTP).

Para transferir o Cyberduck, aceda a [site oficial](https://cyberduck.io/) da aplicação.

![hosting](/pages/assets/screens/other/web-tools/cyberduck/logo.png){.thumbnail}

> [!primary]
>
> - Cyberduck é uma aplicação disponível em macOS e Windows. Como a interface e as funcionalidades do Cyberduck são bastante semelhantes nos dois sistemas operativos, o tutorial foi realizado em uma máquina Windows.
> - Este guia foi criado com uma versão gratuita do aplicativo em versão 8.7.2 que foi baixada a partir do [site oficial](https://cyberduck.io/).
>

> [!warning]
>
> A OVHcloud oferece-lhe serviços cuja configuração, gestão e responsabilidade é da sua responsabilidade. Assim, deverá assegurar o seu bom funcionamento.
>
> Este guia fornece as instruções necessárias para realizar as operações mais habituais. No entanto, se encontrar dificuldades, recomendamos que recorra a um [fornecedor especializado](/links/partner) e/ou que contacte o editor do serviço. Não poderemos proporcionar-lhe assistência técnica. Consulte [Quer saber mais?](#go-further) deste guia para mais informações.
>

## Requisitos

- Ter um plano de [alojamento web](/links/web/hosting){.external}.
- Ter transferido e instalado a aplicação Cyberduck no seu computador.

## Instruções

### Interface

Quando iniciar a aplicação, aparece a interface abaixo.

- A parte superior, rodeada de laranja, corresponde à barra de ferramentas. Permite-lhe estabelecer uma ligação ao seu espaço de alojamento, navegar na arborescência das suas pastas e ficheiros, consultar o histórico das suas ações, bem como numerosas outras ações.
- Abaixo está o conteúdo que você deseja exibir. Por exemplo, se clicar no ícone `History`{.action}, será apresentada uma lista das suas ações.

![hosting](/pages/assets/screens/other/web-tools/cyberduck/start-page.png){.thumbnail}

### Personalizar a apresentação do Cyberduck

Pode personalizar a vista do Cyberduck para a tornar mais eficiente e pessoal.

No menu principal, no topo da interface, clique em `View`{.action} e, a seguir, em `Customize Toolbar...`{.action}.

![hosting](/pages/assets/screens/other/web-tools/cyberduck/customize-toolbar.png){.thumbnail}

Na janela que aparece, arraste os elementos desejados para a barra de ferramentas. Por exemplo, se pretender adicionar um ícone `Download`{.action} na barra de ferramentas, arraste e solte o ícone `Download`{.action} na barra de ferramentas. Para validar as suas modificações, clique em `Done`{.action}.

![hosting](/pages/assets/screens/other/web-tools/cyberduck/customize-display.png){.thumbnail}

### Utilizar o Cyberduck

#### Ligação SFTP

> [!warning]
>
> Por razões de segurança, não é recomendado iniciar sessão através de FTP. A maioria dos sistemas operativos impede agora a capacidade de se conectar via FTP. Assim, prefira uma ligação SFTP.
>

Para se poder ligar ao seu espaço de alojamento web, siga as etapas abaixo:

**1.** Na barra de ferramentas, clique em `Open Connection`{.action}

**2.** No menu suspenso (quadro laranja da imagem), selecione `SFTP (SSH File Transfert Protocol)`{.action}

**3.** Introduza as informações de ligação ao seu espaço FTP:

- Server (Servidor)
- Nome de utilizador
- Password (Palavra-passe)
- Porta (22)

![hosting](/pages/assets/screens/other/web-tools/cyberduck/sftp-connection.png){.thumbnail}

> [!success]
>
> - Tem a possibilidade de guardar a sua palavra-passe no Cyberduck ao selecionar `Add to keychain`{.action}. Se não selecionar esta opção, ser-lhe-á solicitado que introduza a palavra-passe antes de aceder novamente ao seu alojamento web.
> - Se não souber todas as suas informações FTP (servidor, identificadores, etc.), consulte o guia "[Ligar-se ao espaço de armazenamento FTP do alojamento web](/pages/web_cloud/web_hosting/ftp_connection)".
> 

Ao efetuar a primeira ligação ao seu alojamento web, será apresentada uma janela com o título `Modified fingerprint`{.action}. Assinale a opção `Always`{.action} e valide. Isto permitir-lhe-á certificar definitivamente o host de ligação (OVHcloud).

> [!success]
>
> - Aconselhamos que guarde as suas informações de ligação através de um marcador. Isto permitir-lhe-á guardar na memória certas informações de ligação.
> - Consulte esta parte do guia: [O que é um marcador?](#signet)
> 

#### Erros de ligação

Quando tentar aceder ao seu alojamento web, é possível que tenha ocorrido um erro. Aqui estão os 2 erros mais frequentes que você pode encontrar.

- `Connection failed (<server-SFTP>) - DNS lookup for <server> failed`

Na maioria dos casos, este erro está associado aos dados que introduziu e que são provavelmente incorretos. Verifique as informações de ligação que introduziu.

![hosting](/pages/assets/screens/other/web-tools/cyberduck/open-session-failed.png){.thumbnail}

> [!success]
>
> - Se não souber todas as suas informações FTP (servidor, identificadores, etc.), consulte o guia "[Ligar-se ao espaço de armazenamento FTP do alojamento web](/pages/web_cloud/web_hosting/ftp_connection)".
> 

- `Connection failed (<server-SFTP>) - Operation timed out`

Esta mensagem também é acompanhada da menção `Operation timed out`. Geralmente, esta mensagem significa que o host não está localizado ou está incorreto. Deve verificar as informações de ligação que introduziu.

Este erro também pode ser provocado por uma firewall ou por uma rede local que bloqueie a porta 21 ou 22 e que seja utilizada para estabelecer ligação ao servidor. Neste caso, deve verificar a sua configuração pessoal.

![hosting](/pages/assets/screens/other/web-tools/cyberduck/connection-failed.png){.thumbnail}

> [!primary]
>
> - Lembrete-se de que o host de ligação para o seu espaço de alojamento é `ftp.cluster0XX.hosting.ovh.net` (substitua os `XXX` pelo seu número de cluster).
> - Se necessário, consulte o guia "[aceder ao espaço de armazenamento FTP do alojamento web](/pages/web_cloud/web_hosting/ftp_connection)".
>

<a name="signet"></a>

### O que é um marcador?

Para facilitar o acesso ao seu alojamento web, recomendamos que utilize os marcadores. Permitem pré-guardar as suas informações de ligação, para que não tenha de as introduzir a cada ligação.

Para adicionar este arquivo:

1. Aceda ao espaço FRP do seu alojamento web.
2. No topo da interface, na barra de ferramentas, clique no separador "Bookmarks" {.action} (quadro laranja na imagem abaixo).
3. No canto inferior esquerdo da janela, clique no ícone `+`{.action} para adicionar um novo marcador.

![hosting](/pages/assets/screens/other/web-tools/cyberduck/add-signet.png){.thumbnail}

Ser-lhe-á exibida uma janela com as informações de início de sessão e uma nova linha na lista de favoritos. Na próxima vez que iniciar o Cyberduck, poderá fazer duplo clique no marcador para estabelecer ligação mais rapidamente.

### Transferir ficheiros

A transferência de ficheiros permite-lhe colocar o seu website no seu espaço de alojamento web. Por padrão, você deve colocar seus arquivos no diretório (pasta) `www`. Pode transferir os seus ficheiros através de vários métodos.

#### Através de um arrastar-largar

Para realizar a transferência dos seus ficheiros, selecione e realize um arrastar e largar a partir da janela da pasta local (os seus ficheiros na sua máquina) para a janela de Cyberduck (espaço de armazenamento FTP do seu alojamento web). Uma vez realizada esta ação, os seus ficheiros irão automaticamente entrar em fila de espera para serem colocados no servidor. Ser-lhe-á exibida uma janela.

![hosting](/pages/assets/screens/other/web-tools/cyberduck/drag-drop-transfert-file.png){.thumbnail}

#### Através do menu principal

No menu do Cyberduck, clique em `File`{.action} e em `Upload...`{.action}. Selecione os ficheiros que pretende transferir para o servidor e clique em `Upload`{.action}.

![hosting](/pages/assets/screens/other/web-tools/cyberduck/transfert-files.png){.thumbnail}

### Ver transferências em curso

Pode consultar o histórico das transferências efetuadas para o espaço de armazenamento FTP do seu alojamento web. Assim, poderá encontrar:

- os ficheiros que aguardam serem colocados no servidor remoto (ainda presentes na fila de espera ou em curso de envio);
- os ficheiros para os quais a transferência falhou;
- os ficheiros para os quais a transferência foi bem sucedida no alojamento web remoto.

Existem duas formas para apresentar esta janela:

- automaticamente quando uma transferência é iniciada;
- ao clicar em `Window`{.action} (no menu principal) e depois em `Transfers`{.action}.

![hosting](/pages/assets/screens/other/web-tools/cyberduck/transfert-files-list.png){.thumbnail}

### Ações possíveis num ficheiro/pasta

Faça duplo clique num ficheiro ou numa pasta para executar as seguintes ações:

- Ler as informações de um ficheiro ou de uma pasta e modificar as suas permissões (CHMOD).
- Editar o ficheiro com a aplicação à sua escolha.
- Alterar o nome do ficheiro ou da pasta.
- Eliminar o ficheiro ou a pasta.
- Transferir o(s) item(ns) selecionado(s).
- Criar uma nova pasta ou ficheiro.

A lista acima não é exaustiva, podendo ser realizadas outras ações. Consulte [site oficial](https://cyberduck.io/) do Cyberduck se necessário.

### Informações úteis

#### Direitos dos ficheiros e das pastas

Pode modificar as permissões (CHMOD) dos seus ficheiros e das suas pastas presentes no alojamento web.

Estes últimos dividem-se em 3 famílias:

- Owner (proprietário)
- Group (Grupo)
- Others (Outros)

Faça duplo clique num ficheiro ou numa pasta e selecione `Info`{.action}. Aparecerá a seguinte janela:

![hosting](/pages/assets/screens/other/web-tools/cyberduck/transfert-files-list.png){.thumbnail}

Clique no separador `Permissions`{.action} e efetue as modificações desejadas:

- UNIX Permissions: este valor define os direitos das 3 famílias (Proprietário, Grupo e outros).
- Selecione as caixas de verificação desejadas: o valor será atualizado automaticamente para as permissões UNIX.

#### Reabertura do website

Pode efetuar a reabertura do seu website utilizando um comando personalizado.

Na maior parte dos casos, esta manipulação sucede a um encerramento seguro do espaço de armazenamento FTP do seu alojamento web pela OVHcloud, na sequência de um ataque pirata.

No menu do Cyberduck, clique em `Go`{.action} e em `Send command...`{.action}.

![hosting](/pages/assets/screens/other/web-tools/cyberduck/send-ftp-command.png){.thumbnail}

Na nova janela, insira o comando `CHMOD 705 /` e clique em `Send`{.action} para executar o comando. Em confirmação, a mensagem `200 Permissions changed on /` deverá aparecer na caixa em baixo.

Para verificar que a reabertura foi efetuada corretamente, ligue-se ao seu website a partir de um browser.

![hosting](/pages/assets/screens/other/web-tools/cyberduck/site-chmod-705-command.png){.thumbnail}

> [!warning]
>
> - Este comando não é funcional em SFTP. Para o efetuar, utilize uma ligação FTP.
> - Lembre-se de testar a visualização após um máximo de 3 horas. De facto, os nossos robôs passam a cada 3 horas para verificar as alterações de estado. Em função do momento em que a operação é realizada, o restabelecimento da visualização do seu site poderá ser mais ou menos rápido.
> - Se o prazo das 3 horas tiver expirado e o seu website ainda não estiver online, contacte o suporte da OVHcloud.
>

## Quer saber mais? <a name="go-further"></a>

[Tutorial - Utilizar o FileZilla com o seu alojamento OVHcloud](/pages/web_cloud/web_hosting/ftp_filezilla_user_guide)

Para serviços especializados (referenciamento, desenvolvimento, etc), contacte os [parceiros OVHcloud](/links/partner).

Fale com nossa [comunidade de utilizadores](/links/community).