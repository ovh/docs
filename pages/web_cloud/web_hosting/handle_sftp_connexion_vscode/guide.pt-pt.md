---
title: "Gerir o seu alojamento web com Visual Studio Code via SFTP"
excerpt: "Administrar um website num alojamento web com Visual Studio Code graças a uma extensão SFTP"
updated: 2023-11-06
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

## Objetivo

Se dispõe de um alojamento web OVHcloud, pode aceder a um espaço de armazenamento que lhe permite gerir o seu site. O acesso a este espaço de armazenamento é possível através do protocolo SFTP. Embora seja possível conectar-se com um terminal, também pode utilizar o ambiente de desenvolvimento integrado (IDE) Visual Studio Code para gerir as pastas e os ficheiros do seu website.

> [!primary]
>
> Se pretender administrar o seu website remotamente sem utilizar o Visual Studio Code, pode instalar o cliente FTP FileZilla. Não hesite em consultar o nosso guia "[Utilizar o FileZilla com o seu alojamento OVHcloud](/pages/web_cloud/web_hosting/ftp_filezilla_user_guide)". Se pretender conectar-se ao seu website em SSH, descubra a nossa documentação "[Utilizar o acesso SSH do seu alojamento web](/pages/web_cloud/web_hosting/ssh_on_webhosting)".
>

**Saiba como administrar o seu website através do Visual Studio Code.**
  
## Requisitos

- Ter um serviço de [alojamento web OVHcloud](/links/web/hosting)
- Instalar [Microsoft Visual Studio Code](https://visualstudio.microsoft.com/#vscode-section) na sua máquina

## Instruções
 
> [!warning]
>
> A OVHcloud oferece-lhe serviços cuja configuração, gestão e responsabilidade é da sua responsabilidade. Assim, deverá assegurar o seu bom funcionamento.
> 
> Nós disponibilizamos-lhe este tutorial a fim de o acompanhar nas tarefas mais comuns. No entanto, se encontrar dificuldades, recomendamos que recorra a um [fornecedor especializado](/links/partner) ou a [editor do IDE Visual Studio Code](https://code.visualstudio.com/){.external}. Não poderemos proporcionar-lhe assistência técnica. Mais informações na secção ["Quer saber mais?"](#go-further) deste tutorial.
>

### Instalar a extensão SFTP para o Visual Studio Code

> [!warning]
>
> Neste tutorial, optámos pela extensão "SFTP/FTP sync" de *Natizyskunk*. Você é livre para escolher outra. No entanto, observe que uma extensão no Visual Studio Code é um software muitas vezes criado por um desenvolvedor independente, que pode interromper o seu desenvolvimento a qualquer momento.
>

Depois de iniciar o Visual Studio Code, aceda ao menu horizontal na parte superior da interface e clique em `View`{.action} e `Extensions`{.action}.

![hosting](/pages/assets/screens/other/web-tools/vscode/view_extensions.png){.thumbnail}

Para executar a mesma ação com a combinação de teclas de atalho do teclado, selecione:

- `Ctrl + Shift + X` se você estiver no Windows, 
- `Maj + Command + X` se você estiver no macOS.

No canto superior esquerdo da interface, introduza o nome da extensão "SFTP/FTP sync" de *Natizyskunk* e clique em `Install`{.action}.

![hosting](/pages/assets/screens/other/web-tools/vscode/extensions.png){.thumbnail}

Também é possível instalar [a extensão "SFTP/FTP sync"](https://marketplace.visualstudio.com/items?itemName=Natizyskunk.sftp#sftp-sync-extension-for-vs-code) a partir da marketplace do Visual Studio.
  
### Inicializar o projeto localmente

Para sincronizar os ficheiros do seu website presentes no alojamento web a partir do Visual Studio Code, insira a localização do seu projeto localmente. Para isso, crie uma pasta no local desejado.

Volte para Visual Studio Code no menu horizontal na parte superior da interface, clique em `View`{.action} e em `Command Palette`{.action} para apresentar o editor de comandos.

Para executar a mesma ação com a combinação de teclas de atalho do teclado, selecione:

- `Ctrl + Shift + P` se estiver no Windows, 
- `Maj + Command + P` se estiver no macOS.

Introduza o seguinte comando: `SFTP: Config`.

![hosting](/pages/assets/screens/other/web-tools/vscode/SFTP_config.png){.thumbnail}

Através deste comando, o Visual Studio Code irá criar o ficheiro de configuração "sftp.json" na raiz da pasta local anteriormente criada. No entanto, visto que o Visual Studio Code ainda não sabe onde o seu projeto se encontra localmente, deverá aparecer a seguinte mensagem:

![hosting](/pages/assets/screens/other/web-tools/vscode/SFTP_folder.png){.thumbnail}

Clique em `Open Folder`{.action}, dirija-se a um local da pasta local à sua escolha e clique em `Select Folder`{.action} para confirmar.

![hosting](/pages/assets/screens/other/web-tools/vscode/select_folder.png){.thumbnail}

No Visual Studio Code, introduza novamente o comando `SFTP: Config`. Um arquivo de configuração chamado "sftp.json" aparece no Visual Studio Code.

![hosting](/pages/assets/screens/other/web-tools/vscode/sftp_json_default.png){.thumbnail}

Este ficheiro está presente na pasta .vscode, que por sua vez está posicionado na raiz do seu projeto local.

### Configurar o ficheiro sftp.json

Antes de trabalhar no seu projeto, transfira-o para a pasta local que criou anteriormente. No entanto, em primeiro lugar, certifique-se de que o ficheiro "sftp.json" está configurado corretamente. As informações úteis estão presentes na sua [Área de Cliente OVHcloud](/links/manager). Na parte `Web Cloud`{.action}, clique em `Alojamentos`{.action}. Selecione o alojamento em causa e depois clique no separador `FTP - SSH`{.action}.

ficheiro "sftp.json", insira os valores para as seguintes entradas:

#### name 

Localize-o em ambas as localizações realçadas a laranja.

![hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh/hosting_name.png){.thumbnail}

> [!primary]
>
> O valor `name`(nome) é personalizável, pelo que pode atribuir um valor à sua escolha. No entanto, se você configurar vários arquivos "sftp.json", é melhor tomar como referência os valores visíveis acima por razões de organização.
>

#### host

Ainda no separador `FTP-SSH`{.action}, o nome do host (`host`) é visível sob a menção `Servidor FTP e SFTP`{.action}.

![hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh/hostname.png){.thumbnail}

#### username

Localize o nome de utilizador (`username`) na coluna `Nome de utilizador`{.action} do quadro.

#### remotePath

Encontre o caminho remoto (`remotePath`) na menção `Caminho da pasta home`{.action}. No entanto, se estiver configurado mais do que um utilizador, é possível que o caminho indicado seja diferente. Nesse caso, substitua o nome de utilizador indicado após `home/` por um da sua escolha na lista `Nome de utilizador`{.action} do seu alojamento web.

**Exemplo**: Se o seu nome de utilizador for "john-smith" receberá `home/john-smith`

Por fim, não se esqueça de adicionar esta linha no ficheiro "sftp.json": `"openSsh": true`

> [!primary]
>
> Para não ter de introduzir a sua palavra-passe após cada comando no Visual Studio Code, guarde-a no ficheiro "sftp.json" adicionando a linha: `"password": "<password>"`
>

Apresentamos a seguir um exemplo de ficheiro "sftp.json":

```json

{
    "name": "<name>",
    "host": "<host>",
    "protocol": "sftp",
    "port": 22,
    "username": "myusername",
    "password": "mypassword",
    "remotePath": "/home/myusername",
    "uploadOnSave": false,
    "useTempFile": false,
    "openSsh": true
}

```

Para obter mais informações sobre as opções do ficheiro "sftp.json", consulte a [documentação do projeto](https://github.com/Natizyskunk/vscode-sftp/wiki/configuration).

### Fazer download do projeto localmente

Depois de configurar o ficheiro "" sftp.json, transfira o conteúdo do seu projeto para recuperar o conjunto das pastas e ficheiros do seu website. Para isso, aceda ao Visual Studio Code e introduza o seguinte comando: `SFTP: Download Project`.

Visual Studio Code irá pedir-lhe que selecione a pasta que deseja descarregar para o seu alojamento web. Introduza o valor `name` previamente definido no ficheiro "sftp.json" .

![hosting](/pages/assets/screens/other/web-tools/vscode/download_project.png){.thumbnail}

Se for solicitado, introduza a palavra-passe associada ao utilizador indicado no ficheiro "sftp.json" e, em seguida, clique em `enter`. Após o download, visualize o conjunto das pastas e ficheiros do seu projeto no explorador de ficheiros situado na coluna à esquerda da interface Visual Studio Code.

![hosting](/pages/assets/screens/other/web-tools/vscode/explorer.png){.thumbnail}

> [!primary]
>
> Lembre-se de que a configuração correta do ficheiro "sftp.json" é primordial. Se você encontrar um erro antes de fazer o download do seu projeto, isso geralmente é causado por uma falha de configuração do arquivo "sftp.json". Para todas as questões, consulte [FAQ do plug-in](https://github.com/Natizyskunk/vscode-sftp/blob/HEAD/FAQ.md){.external}.
>

### Efetuar alterações nos ficheiros

Agora que o projeto é baixado localmente em sua máquina, você pode facilmente editar, adicionar ou excluir arquivos no Visual Studio Code.

Se pretender que as alterações locais sejam sincronizadas sempre que efetuar uma cópia de segurança de um ficheiro, adicione esta linha ao ficheiro "sftp.json": `"uploadOnSave": true`

Para desativar esta função, mantendo-a no ficheiro "sftp.json", substitua o valor `true` por `false`.

Até agora, só mencionámos os comandos: `SFTP: Config` e `SFTP: Download Project`. Existem outros comandos que pode consultar por autocompletação introduzindo `SFTP:` no editor de comandos.

![hosting](/pages/assets/screens/other/web-tools/vscode/list_commands.png){.thumbnail}

Encontre a lista dos comandos [aqui](https://github.com/Natizyskunk/vscode-sftp/wiki/Commands){.external}.

Agora, pode aceder e modificar o conteúdo do seu alojamento web através do Visual Studio Code.
Este guia tem como objetivo apresentar de forma eficaz a gestão de um projeto a partir do Visual Studio Code. É apropriado para uma primeira experiência. No entanto, se modificar vários ficheiros e estes estiverem sincronizados no seu alojamento web, não poderá ver o histórico das suas alterações para eventualmente voltar atrás ou corrigir um erro.

## Quer saber mais? <a name="go-further"></a>

[Ligar-se ao espaço de armazenamento FTP do alojamento web](/pages/web_cloud/web_hosting/ftp_connection)

[Utilizar o FileZilla com o seu alojamento OVHcloud](/pages/web_cloud/web_hosting/ftp_filezilla_user_guide)

[Utilizar o acesso SSH do alojamento web](/pages/web_cloud/web_hosting/ssh_on_webhosting). Lembre-se de que, para utilizar o SSH, deve dispor de um [plano de alojamento web Pro ou Performance](/links/web/hosting).

Para serviços especializados (referenciamento, desenvolvimento, etc), contacte os [parceiros OVHcloud](/links/partner).

Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](/links/support).

Fale com nossa [comunidade de utilizadores](/links/community).