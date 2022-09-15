---
title: "Tutoriais - Utilizar o FileZilla com o seu alojamento OVHcloud"
slug: partilhado_guia_de_utilizacao_do_filezilla
excerpt: "Encontre aqui um tutorial para a utilização do software Filezilla no seu alojamento partilhado."
section: FTP e SSH
order: 04
---

**Última atualização: 13/09/2022**

> [!primary]
>
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

## Objetivo

O FileZilla é um software disponível gratuitamente em vários sistemas operativos (Windows, macOS, etc.).
Permite publicar ficheiros ou o seu website [acedendo ao espaço FTP](https://docs.ovh.com/pt/hosting/aceder-espaco-de-armazenamento-ftp-alojamento-web/) do seu alojamento.

**Saiba como utilizar o software Filezilla com o seu alojamento partilhado.**

> [!warning]
>
> A responsabilidade sobre a configuração e a gestão dos serviços que a OVHcloud disponibiliza recai sobre o utilizador. Assim, deverá certificar-se de que estes funcionam corretamente.
> 
> Este tutorial está disponível para o acompanhar nas suas operações mais habituais. No entanto, se encontrar dificuldades, recomendamos que recorra a um [prestador de serviços especializado](https://partner.ovhcloud.com/pt/) e/ou que contacte o editor do software. Não poderemos proporcionar-lhe assistência técnica. Para mais informações, aceda à secção ["Quer saber mais?"](#go-further) deste tutorial.
> 

## Requisitos

- Estar ligado à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt).
- Ter um serviço de [alojamento Web da OVH](https://www.ovhcloud.com/pt/web-hosting/){.external}.
- Ter instalado o software Filezilla no seu computador. Este último está disponível gratuitamente a partir da página [filezilla-project.org](https://filezilla-project.org/download.php){.external}

## Apresentação da interface <a name="interface"></a>

![alojamento](images/1818.png){.thumbnail}

- A parte superior **enquadrada** permite uma ligação rápida ao seu alojamento ao introduzir o seu nome de **host**, o nome de **utilizador**, a sua **password** associada e o número de **porta** utilizado.
- **zona 1**: detalhes sobre o histórico de operações, ligação ao espaço FTP, transferência de ficheiros, erros, etc. Para saber mais, aceda à [documentação oficial do Filezilla](https://filezilla-project.org/){.external}.
- **zona 2**: arborescência dos diretórios/ficheiros locais no seu computador.
- **zona 3**: arborescência de diretórios/ficheiros distantes quando está ligado ao seu alojamento.
- **zona 4**: lista dos diretórios/ficheiros no diretório selecionado localmente no seu computador.
- **zona 5**: lista dos diretórios/ficheiros distantes no diretório selecionado no seu alojamento.
- **zona 6**: lista das operações de transferência em curso, pendentes ou em erro entre o seu computador e o seu alojamento.

## Instruções

### Ligação com Filezilla em FTP

![alojamento](images/quickcnt.png){.thumbnail}

A partir da barra de ligação rápida, complete as informações através da seguinte tabela:

|Informação solicitada|Detalhes|
|---|---|
|Host| Endereço do servidor que permite aceder ao espaço de armazenamento do seu alojamento.<br><br> Para os alojamentos partilhados, tem geralmente esta forma: `ftp.clusterXXX.hosting.ovh.net` (os `XXX` representam o número do cluster onde está o seu alojamento)|
|Utilizador|Identificador que lhe permite aceder ao espaço de armazenamento do seu alojamento.|
|Palavra-passe|Password associada ao utilizador.|
|Porta|Geralmente, é automaticamente complementado pelo software. Caso contrário, introduza:<br><br>- a porta 21 para uma ligação FTP;<br>- a porta 22 para uma ligação SFTP (no caso de esta estar ativada). Encontre mais informações sobre o SFTP na secção [dedicada deste tutorial](#sftp).|

Se não possuir estas informações, aceda à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external} na secção "Web Cloud" e clique em `Alojamentos`{.action}. De seguida, selecione o nome do alojamento correspondente e aceda ao separador `FTP - SSH`{.action}. Aparecerá a informação relativa ao seu espaço de armazenamento:

![alojamento](images/loginFTP-SSH.png){.thumbnail}

> [!warning]
>
> Algumas ofertas da OVHcloud não utilizam a porta 22 para as ligações em SFTP e/ou SSH. Utilize as portas que aparecem na sua [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}
>

Quando tudo estiver corretamente introduzido na caixa **1** da imagem abaixo, clique em `Ligação rápida`{.action}.

![alojamento](images/1819.png){.thumbnail}

Se a ligação for bem-sucedida, será informado através do estado presente na caixa **2**. Assim, poderá consultar os seus diretórios/pastas e ficheiros já presentes no seu alojamento (caixa **3**).

### Ligação com Filezilla em SFTP <a name="sftp"></a>

O **SFTP** (para **S**ecure **F**ile **T**ransfer **P**rotocol) é um protocolo semelhante ao **FTP**. Como o SSH, utiliza a porta 22 predefinida em vez da porta 21. Se utiliza uma oferta de alojamento Cloud Web, deve utilizar a porta apresentada na [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}. A porta 22 é desativada por segurança em SSH e SFTP para os alojamentos Cloud Web.

> [!success]
>
> O SFTP pode ser ativado gratuitamente para todas as ofertas de alojamento da OVHcloud (exceto as antigas ofertas 60free/demo1g).
> 

#### Verificar a ativação de SFTP

Em primeiro lugar, verifique se o SFTP está ativado para o seu **Login FTP**.

Aceda à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}, na secção "Web Cloud", e clique em `Alojamentos`{.action}. De seguida, selecione o nome do alojamento correspondente e aceda ao separador `FTP - SSH`{.action}.

De seguida, verifique se o **SFTP** está ativo na tabela.

![Ativação SFTP oferta start](images/enable_sftp_start.png){.thumbnail}

Se não estiver ativo:

- Clique no botão `...`{.action} à direita da tabela e, a seguir, em `Editar`{.action}.

![Ativação SFTP 1](images/enable_sftp_1.png){.thumbnail}

- Na nova janela, verifique se está ativada uma das 2 opções seguintes:
    - **FTP e SFTP**: para ativar apenas o SFTP além do FTP.
    - **FTP, SFTP e SSH**: para ativar o FTP, o SFTP e o SSH.

![Ativação SFTP 2](images/enable_sftp_2.png){.thumbnail}

- A seguir, clique em `Seguinte`{.action} e depois em `Validar`{.action}

#### Lançar a ligação SFTP

![alojamento](images/quickcnt.png){.thumbnail}

Na secção superior da Filezilla e para estabelecer a ligação ao servidor remoto (alojamento), insira os seguintes elementos:

- Host: `ftp.clusterXXX.hosting.ovh.net` (não se esqueça de substituir os `X` pelos do seu cluster de alojamento)
- Identificador: o seu login FTP
- Password: a palavra-passe FTP associada ao login
- Porta: 22

Depois de clicar no botão `Ligação rápida`{.action}, irá abrir uma caixa de diálogo (ver imagem abaixo) para certificar a ligação ao host ao qual se vai ligar. Uma vez ligado a um host OVHcloud, pode selecionar *Sempre confiar nesse host, adicionar esta chave à cache* para que o software não o peça novamente no futuro.

![alojamento](images/1834.png){.thumbnail}

### Erros de ligação

A mensagem apresentada abaixo indica um erro de identificação aquando da ligação em FTP ou SFTP ao alojamento partilhado:

![alojamento](images/1820.png){.thumbnail}

Este tipo de mensagem é gerada por um erro no binário Login/Palavra-passe.

Verifique os seus dados de acesso para garantir que não há erros. Se necessário, pode alterar a palavra-passe do acesso FTP do seu alojamento diretamente na [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}.

> [!success]
> Está disponível um guia sobre a [alteração da palavra-passe FTP](https://docs.ovh.com/pt/hosting/alterar-palavra-passe-utilizador-ftp/) nas ofertas partilhadas.

No caso abaixo, o erro é gerado por um nome de host incorreto:

![alojamento](images/1824.png){.thumbnail}

Verifique este último em relação ao nome do host declarado na sua [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}.

### Transferência dos ficheiros

Para transferir os seus ficheiros através de FTP, pode selecioná-los e deslizar e descarregar ficheiros/ficheiros a partir da janela da esquerda *(computador)* para a janela da direita *(alojamento)* (**zonas 4 e 5**, descritas na secção deste tutorial relativa à [interface](#interface) do Filezilla).

Tenha o cuidado de selecionar corretamente o diretório alvo na janela da direita.

Uma vez realizada esta ação, os seus ficheiros serão colocados automaticamente em fila de espera para serem colocados no servidor.

![alojamento](images/drag-drop-en.png){.thumbnail}

### Vista da fila de espera

Está disponível uma vista na fila (**zona 6** descrita na secção deste tutorial relativa à [interface](#interface) de Filezilla).

Nesta zona, encontrará:

- os ficheiros que aguardam serem colocados no servidor remoto ainda presentes na fila de espera;
- os ficheiros para os quais a transferência falhou;
- os ficheiros para os quais a transferência foi bem-sucedida no alojamento remoto.

![alojamento](images/1822.png){.thumbnail}

### Menu contextual Servidor

Clique com o botão direito do rato num dos ficheiros presentes na **zona 5** (descrita na secção deste tutorial relativa à [interface](#interface) de Filezilla).

Surge um menu contextual e tem várias opções à sua disposição:

- Descarregar: descarregar o ficheiro para a pasta local aberta.
- Adicionar os ficheiros à fila de espera: adicione o ficheiro à fila de espera, permite-lhe, por exemplo, adiar o download dos dados.
- Apresentar/Editar: permite-lhe apresentar ou editar diretamente um ficheiro presente no seu alojamento. No entanto, deve ter um software capaz de ler o ficheiro instalado no seu computador.
- Criar uma pasta: permite-lhe criar uma nova pasta diretamente no alojamento remoto.
- Atualizar: atualize a visualização dos dados de forma a apresentar corretamente os diferentes ficheiros presentes.
- Eliminar: permite-lhe eliminar o ficheiro selecionado.
- Renomear: permite-lhe alterar o nome do ficheiro selecionado.
- Copiar o(s) endereço(s) na área de transferência: permite-lhe copiar automaticamente o link direto para o ficheiro selecionado. Exemplo de URL que pode ser gerado: `ftp://loginftp@ftp.cluster0XX.hosting.ovh.net/www/mondossier1/monfichier.jpg`
- Permissões de ficheiro: permite-lhe modificar as permissões dos ficheiros (Chmod)

![alojamento](images/1830.png){.thumbnail}

## Informações úteis

### Direitos de acesso (Chmod) aos ficheiros e às pastas

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

![alojamento](images/1831.png){.thumbnail}

Indique as permissões que deseja atribuir, o valor Chmod será automaticamente atualizado.

Pode selecionar a opção "Cursão nas sub-pastas".

Esta situação terá por efeito alterar os direitos do processo em questão, bem como dos processos e ficheiros que nele possam estar presentes.

### Reabertura de site

> [!primary]
>
> Independentemente de uma ação da sua parte, o seu alojamento pode ser desativado após a deteção de ficheiros maliciosos ou não autorizados no seu alojamento pelos nossos sistemas de segurança.
>
> Deverá [proteger as suas soluções](https://docs.ovh.com/pt/hosting/diagnostico-403-forbidden/) corrigindo as falhas de segurança evocadas na notificação de bloqueio recebida por e-mail.
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

![alojamento](images/1829.png){.thumbnail}

Se obtiver o erro `550 would not chance perms on /. not such file or director`, utilize o seguinte comando:

```bash
SÍTIO CHMOD 705
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

### Transferência de ficheiros binários

Para os ficheiros binários, como por exemplo os ficheiros do tipo **CGI**, pode ser interessante escolher a forma como a transferência será realizada.

Para alterar o tipo de transferência, selecione `Transferência`{.action} no menu principal e `Tipo de transferência`{.action}.

![alojamento](images/1832.png){.thumbnail}

### Comparação de dossiers

![alojamento](images/1823.png){.thumbnail}

A opção de comparação de ficheiros apresenta cores nas **zonas 4** e **5** (apresentadas na secção deste tutorial relativa à [interface](#interface) de Filezilla). Esta opção permite salientar as diferenças entre os ficheiros e pastas locais e os do servidor. 

Ao clicar direito no ícone, pode alterar o método de comparação. Ser-lhe-á sugerido que ative ou desative a opção, mas também que:

- comparar o tamanho dos ficheiros;
- comparar o horário;
- ocultar os ficheiros idênticos.

**Significado das cores:**

- Amarela: o ficheiro existe apenas de um lado.
- Verde: o ficheiro é mais recente que o ficheiro não colorido do outro lado.
- Vermelho: os tamanhos dos ficheiros são diferentes.

## Quer saber mais? <a name="go-further"></a>

A seguir, encontrará o link para o nosso manual para [corrigir erros recorrentes durante a utilização de um programa FTP](https://docs.ovh.com/pt/hosting/partilhando-os-problemas-ftp-recrutamento/).

De forma mais geral, consulte [o conjunto dos nossos guias relativos aos alojamentos partilhados](https://docs.ovh.com/pt/hosting/).

Não hesite em consultar a [página oficial do Filezilla](https://filezilla-project.org/).

Para serviços especializados (referenciamento, desenvolvimento, etc.), contacte os [parceiros OVHcloud](https://partner.ovhcloud.com/pt/).

Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](https://www.ovhcloud.com/pt/support-levels/).

Fale com a nossa comunidade de utilizadores: <https://community.ovh.com/en/>.