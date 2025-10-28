---
title: "Alojamento web - Como utilizar o FileZilla"
excerpt: "Saiba como aceder ao espaço de armazenamento do seu alojamento web OVHcloud e gerir os dados nele contidos graças ao software FileZilla"
updated: 2025-09-12
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
</style>

> [!primary]
> **Ferramenta FTP Explorer/Net2FTP desativada**
>
> Para os alojamentos web, já não é possível ligar-se ao espaço de armazenamento FTP através da ferramenta online FTP Explorer/Net2FTP. Para continuar a ligar-se em FTP ao seu alojamento web, utilize os programas [FileZilla](https://filezilla-project.org/download.php) ou [Cyberduck](https://cyberduck.io/).

## Objetivo

O FileZilla é um software disponível gratuitamente em vários sistemas operativos (Windows, macOS, etc.).

Permite publicar ficheiros ou o seu website [ligando-se ao espaço de armazenamento](/pages/web_cloud/web_hosting/ftp_connection) do seu alojamento web.

**Saiba como aceder ao espaço de armazenamento do seu alojamento web OVHcloud e gerir os dados nele contidos graças ao software FileZilla.**

## Requisitos

- Estar ligado à [Área de Cliente OVHcloud](/links/manager).
- Ter um serviço de [alojamento Web da OVHcloud](/links/web/hosting).
- Ter instalado o software FileZilla no seu computador. Este último está disponível gratuitamente a partir da página [filezilla-project.org](https://filezilla-project.org/download.php).

## Apresentação da interface <a name="interface"></a>

/// details | Clique aqui para visualizar o conteúdo desta secção.

![FileZilla-interface](/pages/assets/screens/other/web-tools/filezilla/main-interface.png){.thumbnail}

- A parte superior **enquadrada** permite uma ligação rápida ao seu alojamento ao introduzir o seu nome de **host**, o nome de **utilizador**, a sua **password** associada e o número de **porta** utilizado.
- **zona 1**: Detalhes sobre o histórico de operações, ligação ao espaço FTP, transferência de ficheiros, erros, etc. Para saber mais, aceda à [documentação oficial do FileZilla](https://filezilla-project.org/).
- **zona 2**: Arborescência dos diretórios/ficheiros locais no seu computador.
- **zona 3**: Arborescência de diretórios/ficheiros distantes quando está ligado ao seu alojamento.
- **zona 4**: Lista dos diretórios/ficheiros no diretório selecionado localmente no seu computador.
- **zona 5**: Lista dos diretórios/ficheiros distantes no diretório selecionado no seu alojamento.
- **zona 6**: Lista das operações de transferência em curso, pendentes ou em erro entre o seu computador e o seu alojamento.

///

## Instruções

### 1 - Obter as informações de ligação ao espaço de armazenamento do alojamento web <a name="part-1"></a>

Efetue as seguintes ações:

1. Aceda à [Área de Cliente OVHcloud](/links/manager) e aceda à secção `Web Cloud`{.action}.
2. Clique no menu `Alojamentos`{.action} e escolha o alojamento web em causa.
3. Na página que se abrir, clique no separador `FTP - SSH`{.action}.
4. Na nova página, serão apresentadas as informações relativas ao seu espaço de armazenamento. Inclua os seguintes itens:
    - O `Servidor FTP e SFTP` representado sob a seguinte forma: `ftp.clusterXXX.hosting.ovh.net` (em que cada um dos 3 `X` corresponde a um número compreendido entre `0` e `9`).
    - Um dos utilizadores presentes na coluna `Login` da tabela situada na parte inferior da página. Também pode utilizar o `Login principal` se desejar.
    - O número do `Port FTP` ou o número do `Port SFTP` em função do protocolo de ligação que pretende utilizar para se ligar ao seu espaço de armazenamento.

> [!primary]
>
> Por razões de segurança, a palavra-passe de um utilizador não aparece na página do separador `FTP - SSH`{.action}. Se se esquecer da palavra-passe, consulte [este manual](/pages/web_cloud/web_hosting/ftp_change_password) para obter mais informações.

### 2 - Ligue-se ao espaço de armazenamento do seu alojamento graças ao FileZilla

Existem dois protocolos para a transferência de ficheiros para estabelecer ligação:

- **F**ile **T**ransfer **P**rotocol (**FTP**).
- **S**ecure **F**ile **T**ransfer **P**rotocol (**SFTP**).

> [!primary]
>
> Sempre que possível, recomendamos que privilegie a utilização do protocolo **SFTP** para se ligar ao seu espaço de armazenamento com FileZilla.
>
> O protocolo **SFTP** encripta o intercâmbio de dados entre o dispositivo e o alojamento web. No entanto, se encontrar restrições de utilização, nomeadamente na segmentação dos utilizadores ou das pastas, deverá nesse caso utilizar o protocolo **FTP**.

**Clique no protocolo de ligação pretendido para visualizar as explicações.**

/// details | Aceder via SFTP ao espaço de armazenamento do seu alojamento web graças ao FileZilla. <a name="sftp"></a>

O **SFTP** utiliza, tal como o SSH, a porta 22 predefinida em vez da porta 21. Se utiliza um serviço de alojamento Cloud Web, deve utilizar a porta que se apresenta na sua [Área de Cliente OVHcloud](/links/manager). A porta 22 é desativada por segurança em SSH e em SFTP para os alojamentos Cloud Web.

> [!success]
>
> O SFTP pode ser ativado de forma gratuita para todas as ofertas de alojamento OVHcloud (exceto para as ofertas anteriores, 60free e demo1g).
>

**Verificar a ativação do protocolo SFTP**

Para isso, volte ao separador FTP-SSH`{.action} do seu [Área de Cliente OVHcloud](/links/manager) tal como indicado na [primeira parte](#part-1) deste guia.

Na tabela que se encontra na parte inferior da página, repare na coluna `SFTP` para verificar se o utilizador (presente na coluna `Nome de utilizador` da tabela) em questão dispõe de um acesso SFTP ativo. Se não for o caso, será apresentada a menção `Desativado`.

Se o acesso SFTP do utilizador em questão estiver `Desativado` na tabela, efetue as seguintes etapas:

- Para as ofertas Perso, selecione a opção situada à esquerda da menção `Desativado` na tabela.

- Para as ofertas Pro e Performance:

    - 1 : Clique no botão `...`{.action} à direita da linha correspondente ao utilizador, depois em `Alterar`{.action}.
    - 2: Na janela que se abrir, secção `Protocolos de ligação`, selecione a escolha `FTP e SFTP`{.action} e, em seguida, clique em `Seguinte`{.action}.
    - 3: Verifique o resumo da modificação solicitada e depois clique em `Validar`{.action}.

**Ligar-se em SFTP com FileZilla**

![hosting](/pages/assets/screens/other/web-tools/filezilla/quick-connect.png){.thumbnail}

A partir da barra de ligação rápida, preencha as informações utilizando a tabela abaixo:

|Informações a introduzir|Detalhes|
|---|---| 
|Host| Endereço do servidor que permite aceder ao espaço de armazenamento do seu alojamento web.<br> Apresenta geralmente esta forma: `ftp.clusterXXX.hosting.ovh.net` (os `XXX` representam o número do cluster onde se encontra o seu alojamento web).|
|Utilizador|ID que lhe permite aceder ao espaço de armazenamento do seu alojamento.|
|Palavra-passe|Palavra-passe associada ao utilizador.|
|Porta|Introduza o número da porta SFTP obtida anteriormente na [primeira parte](#part-1) deste manual para uma ligação SFTP.|

Depois de tudo estar inserido corretamente no quadro **1** da imagem abaixo, clique em `Ligação rápida`{.action}.

![hosting](/pages/assets/screens/other/web-tools/filezilla/quick-connect-successfull.png){.thumbnail}

Ao fazer isso, uma caixa de diálogo é aberta (veja a imagem abaixo) para certificar a conexão ao host no qual você está prestes a se conectar. Ao estar ligado a um host OVHcloud, pode selecionar a opção *Confie sempre nesse host, adicione esta chave à cache* para que o software não volte a pedir-lhe.

![hosting](/pages/assets/screens/other/web-tools/filezilla/unknown-host-key-message.png){.thumbnail}

///

/// details | Aceder via FTP ao espaço de armazenamento do seu alojamento web graças ao FileZilla.

![hosting](/pages/assets/screens/other/web-tools/filezilla/quick-connect.png){.thumbnail}

A partir da barra de ligação rápida, preencha as informações utilizando a tabela abaixo:

|Informações a introduzir|Detalhes|
|---|---| 
|Host| Endereço do servidor que permite aceder ao espaço de armazenamento do seu alojamento web.<br> Apresenta geralmente esta forma: `ftp.clusterXXX.hosting.ovh.net` (os `XXX` representam o número do cluster onde se encontra o seu alojamento web).|
|Utilizador|ID que lhe permite aceder ao espaço de armazenamento do seu alojamento.|
|Palavra-passe|Palavra-passe associada ao utilizador.|
|Porta|Normalmente, o serviço é preenchido de forma automática pelo software. Caso contrário, insira a porta `21` para uma ligação FTP.|

Depois de tudo estar inserido corretamente no quadro **1** da imagem abaixo, clique em `Ligação rápida`{.action}.

![hosting](/pages/assets/screens/other/web-tools/filezilla/quick-connect-successfull.png){.thumbnail}

Se a ligação foi efetuada com sucesso, será informado através do estado presente na caixa **2** da imagem acima. Pode assim ver os seus diretórios/pastas e ficheiros já presentes no seu alojamento (ver caixa **3**).

///

### Erros de ligação

**Clique no erro encontrado para apresentar a solução.**

/// details | Authentication failed - Could not connect to server 

A mensagem apresentada abaixo indica um erro de identificação aquando da ligação em FTP ou SFTP ao alojamento partilhado:

![alojamento](/pages/assets/screens/other/web-tools/filezilla/authentification-failed-could-not-connect-server.png){.thumbnail}

Este tipo de mensagem é gerada por um erro no binário Login/Palavra-passe.

Verifique as suas credenciais para assegurar que não é introduzido nenhum erro. Se necessário, pode [alterar a palavra-passe do acesso FTP](/pages/web_cloud/web_hosting/ftp_change_password) do seu alojamento web diretamente na [Área de Cliente OVHcloud](/links/manager).

///

/// details | Connection timed out after 20 seconds of inactivity - Could not connect to server

No caso abaixo, o erro é gerado por um nome de host incorreto:

![alojamento](/pages/assets/screens/other/web-tools/filezilla/connection-timed-out-after-20s.png){.thumbnail}

Verifique este último em relação ao nome do host declarado na sua [Área de Cliente OVHcloud](/links/manager).

///

### 3 - Transferência dos ficheiros

Para transferir os seus ficheiros através de (S)FTP, pode selecioná-los e deslizar e descarregar ficheiros/ficheiros a partir da janela da esquerda *(computador)* para a janela da direita *(alojamento)* (**zonas 4 e 5**, descritas na secção deste tutorial relativa à [interface](#interface) do FileZilla).

Tenha o cuidado de selecionar corretamente o diretório alvo na janela da direita.

Uma vez realizada esta ação, os seus ficheiros serão colocados automaticamente em fila de espera para serem colocados no servidor.

![alojamento](/pages/assets/screens/other/web-tools/filezilla/drag-drop-en.png){.thumbnail}

### 4 - Outras funcionalidades do FileZilla

**Clique nos títulos abaixo para ver os respetivos conteúdos.**

/// details | Vista da fila de espera

Está disponível uma vista na fila (**zona 6** descrita na secção deste tutorial relativa à [interface](#interface) de FileZilla).

Nesta zona, encontrará:

- os ficheiros que aguardam serem colocados no servidor remoto ainda presentes na fila de espera;
- os ficheiros para os quais a transferência falhou;
- os ficheiros para os quais a transferência foi bem-sucedida no alojamento remoto.

![alojamento](/pages/assets/screens/other/web-tools/filezilla/waiting-list-view.png){.thumbnail}

///

/// details | Menu contextual do servidor

Clique com o botão direito do rato num dos ficheiros presentes na **zona 5** (descrita na secção deste tutorial relativa à [interface](#interface) de FileZilla).

Surge um menu contextual e tem várias opções à sua disposição:

- Descarregar: Descarregar o ficheiro para a pasta local aberta.
- Adicionar os ficheiros à fila de espera: Adicione o ficheiro à fila de espera, permite-lhe, por exemplo, adiar o download dos dados.
- Apresentar/Editar: Permite-lhe apresentar ou editar diretamente um ficheiro presente no seu alojamento. No entanto, deve ter um software capaz de ler o ficheiro instalado no seu computador.
- Criar uma pasta: Permite-lhe criar uma nova pasta diretamente no alojamento remoto.
- Atualizar: Atualize a visualização dos dados de forma a apresentar corretamente os diferentes ficheiros presentes.
- Eliminar: Permite-lhe eliminar o ficheiro selecionado.
- Renomear: Permite-lhe alterar o nome do ficheiro selecionado.
- Copiar o(s) endereço(s) na área de transferência: Permite-lhe copiar automaticamente o link direto para o ficheiro selecionado. Exemplo de URL que pode ser gerado: `ftp://loginftp@ftp.clusterXXX.hosting.ovh.net/www/my_folder1/my_file.jpg`
- Permissões de ficheiro: Permite-lhe modificar as permissões dos ficheiros (Chmod).

![alojamento](/pages/assets/screens/other/web-tools/filezilla/contextual-menu-server.png){.thumbnail}

///

/// details | Direitos de acesso (Chmod) aos ficheiros e às pastas

clique com o botão direito do rato num dos ficheiros presentes no servidor e selecione `Permissões de ficheiro...`{.action}.

Pode alterar as permissões de acesso (Chmod) dos seus ficheiros e das pastas presentes no alojamento.

Geralmente, é mais fácil gerir os direitos Chmod com o valor numérico `XXX` (composto de 3 dígitos, podendo ir de 0 a 7). O painel de autorizações pode então ir de `000` (nenhum direito) a `777` (todos os direitos).

> [!alert]
>
> Atenção, não é recomendado que coloque os direitos Chmod 000 nos seus ficheiros ou pastas. Com efeito, já não terá a possibilidade (pelo menos em FTP) de gerir este elemento (incluindo enquanto administrador FTP).
>
> O mesmo se aplica aos direitos Chmod 777 pois, ao contrário do Chmod 000, todos podem agir sobre a pasta ou o ficheiro, o que apresenta uma falha de segurança consequente para os seus dados alojados.
>

O primeiro dos três números `XXX` que definem o Chmod corresponde aos direitos do proprietário/administrador, o segundo aos direitos de grupo (raramente utilizado e geralmente igual a 0) e o terceiro aos visitantes do seu site no seu alojamento.

Por predefinição, recomendamos que não ultrapasse as permissões Chmod **705** para as pastas e as permissões Chmod **604** para os ficheiros.

Quanto mais alto for o número, mais elevadas são as permissões.

![alojamento](/pages/assets/screens/other/web-tools/filezilla/change-file-attributes.png){.thumbnail}

Indique as permissões que deseja atribuir, o valor Chmod será automaticamente atualizado.

Pode selecionar a opção "Cursão nas sub-pastas".

Esta situação terá por efeito alterar os direitos do processo em questão, bem como dos processos e ficheiros que nele possam estar presentes.

///

/// details | Reabertura de um website

> [!primary]
>
> Independentemente de uma ação da sua parte, o seu alojamento pode ser desativado após a deteção de ficheiros maliciosos ou não autorizados no seu alojamento pelos nossos sistemas de segurança.
>
> Deverá [proteger as suas soluções](/pages/web_cloud/web_hosting/diagnostic_403_forbidden#step-2) corrigindo as falhas de segurança evocadas na notificação de bloqueio recebida por e-mail.
>

A seguir, clique em `Servidor`{.action} e selecione `Introduza um comando personalizado`{.action} (esta opção pode também chamar-se `Introduza um comando FTP`{.action}).

Introduza o seguinte comando:

```bash
SITE CHMOD 705 /
```

> [!warning]
>
> Este comando não está funcional em SFTP.
>

![alojamento](/pages/assets/screens/other/web-tools/filezilla/site-chmod-705-command.png){.thumbnail}

Se obtiver o erro `550 would not change perms on /. not such file or directory`, utilize o seguinte comando:

```bash
SITE CHMOD 705 .
```

> [!primary]
>
> Para verificar se a reabertura está efetiva, teste o seu site a partir de um browser ao fim de alguns minutos.
>

> [!warning]
>
> Queira testar a visualização após 3 horas no máximo.<br>
> De facto, os nossos robôs passam pelo menos a cada 3 horas para verificar as alterações de estado.<br>
> Em função do momento em que a operação acima for realizada, o restabelecimento da visualização do seu site poderá ser mais ou menos rápido.<br>
> Se o prazo de 3 horas expirou e o seu site ainda não estiver online, verifique se o comando indicado foi realizado repetindo a operação.<br>
> Se ainda não funcionar, contacte o nosso suporte.
> 

///

/// details | Transferência de ficheiros binários

Para os ficheiros binários, como por exemplo os ficheiros do tipo **CGI**, pode ser interessante escolher a forma como a transferência será realizada.

Para alterar o tipo de transferência, selecione `Transferência`{.action} no menu principal e `Tipo de transferência`{.action}.

![alojamento](/pages/assets/screens/other/web-tools/filezilla/transfert-binary-files.png){.thumbnail}

///

/// details | Comparação de pastas

![alojamento](/pages/assets/screens/other/web-tools/filezilla/comparison-tool.png){.thumbnail}

A opção de comparação de ficheiros apresenta cores nas **zonas 4** e **5** (apresentadas na secção deste tutorial relativa à [interface](#interface) de FileZilla). Esta opção permite salientar as diferenças entre os ficheiros e pastas locais e os do servidor. 

Ao clicar direito no ícone, pode alterar o método de comparação. Ser-lhe-á sugerido que ative ou desative a opção, mas também que:

- comparar o tamanho dos ficheiros;
- comparar o horário;
- ocultar os ficheiros idênticos.

**Significado das cores:**

- Amarela: O ficheiro existe apenas de um lado.
- Verde: O ficheiro é mais recente que o ficheiro não colorido do outro lado.
- Vermelho: Os tamanhos dos ficheiros são diferentes.

///

## Quer saber mais? <a name="go-further"></a>

A seguir, encontrará o link para o nosso manual para [resolver os erros recorrentes durante a utilização de um programa FTP](/pages/web_cloud/web_hosting/ftp_recurring_ftp_problems).

De forma mais geral, consulte [o conjunto dos nossos guias relativos aos alojamentos partilhados](/products/web-cloud-hosting).

Não hesite em consultar a [página oficial do FileZilla](https://filezilla-project.org/).

Para serviços especializados (referenciamento, desenvolvimento, etc.), contacte os [parceiros OVHcloud](/links/partner).

Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](/links/support).

Fale com a nossa [comunidade de utilizadores](/links/community).