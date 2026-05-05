---
title: 'Utilizar o seu endereço de e-mail a partir do webmail Roundcube'
updated: 2026-05-04
---

## Objetivo

Com a oferta MX Plan da OVHcloud, pode enviar e receber e-mails a partir de um software de terceiros ou através de um webmail. A OVHcloud disponibiliza um serviço de mensagens online denominado Roundcube que permite, através de um browser web, aceder a uma conta de e-mail.

**Saiba como utilizar o webmail Roundcube para os seus endereços de e-mail OVHcloud**

## Requisitos

- Dispor de uma solução de e-mail OVHcloud **MX Plan**, proposta entre as nossas [ofertas de alojamento web](/links/web/hosting), incluída num [alojamento gratuito 100M](/links/web/domains-free-hosting), ou encomendada separadamente como solução autónoma.
- Dispor das informações de ligação ao endereço de e-mail MX Plan que pretende consultar. Para mais informações, consulte o nosso guia [Primeiros passos com a oferta MX Plan](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_generalities).
- A sua solução de e-mail OVHcloud **MX Plan** deve utilizar a tecnologia de webmail **Roundcube**. Para a identificar, siga as instruções abaixo.

> [!primary]
> 
> **Como identificar a tecnologia utilizada na minha oferta MX Plan?**
>
> A tecnologia de e-mail utilizada para a sua oferta MX Plan é caracterizada pela interface do seu webmail. Para a identificar a partir da sua área de cliente, siga o caminho abaixo:
>
> 1. Aceda à sua [área de cliente OVHcloud](/links/manager).
> 1. Aceda à secção `Web Cloud`{.action}.
> 1. Clique em `MX Plan`{.action}.
> 1. Selecione o domínio em questão.
> 1. No separador `Informações gerais`{.action} (selecionado por predefinição), verifique a tecnologia utilizada na menção **Webmail**.
>
> ![MX plan](images/technology-email.png){.thumbnail .w-500}

<!-- CP-NAV-START:web-mx-plan -->
---

### Acesso à área de cliente OVHcloud

- **Ligação direta:** [MX Plan](/links/control-panel/web-mx-plan)
- **Para aceder aos seus serviços:** `Web Cloud`{.action} > `MX Plan`{.action} > Selecione o seu serviço MX Plan

---
<!-- CP-NAV-END:web-mx-plan -->

## Instruções

**Índice**

- [Aceder ao webmail Roundcube](#roundcube-connexion)
- [Interface geral do webmail Roundcube](#general-interface)
    - [Gestão das pastas (coluna da esquerda)](#leftcolumn)
    - [Lista de e-mails recebidos / enviados (janela superior)](#topwindow)
        - [Tipo de visualização](#topwindow-display)
        - [Ação sobre um e-mail selecionado](#topwindow-action)
        - [Procurar um e-mail](#topwindow-search)
    - [Conteúdo de um e-mail (janela inferior)](#lowerwindow)
- [Configurar as preferências da interface Roundcube](#roundcube-settings)
    - [Interface do utilizador](#user-interface-settings)
    - [Vista da caixa de correio](#mail-view-settings)
    - [Apresentação dos e-mails](#mail-display-settings)
    - [Redação de e-mails](#mail-writing-settings)
    - [Contactos](#contacts-settings)
    - [Pastas especiais](#special-folder-settings)
    - [Definições do servidor](#server-settings)
    - [Encriptação](#encryption)
- [Gerir as identidades e as suas assinaturas](#identity-signature)
    - [Identidade](#identity)
    - [Assinatura](#signature)
- [Livro de contactos](#contact-book)
    - [Grupos](#group)
    - [Contactos](#contacts)
    - [Importar contactos](#import-contacts)
    - [Exportar os contactos](#export-contacts)
- [Respostas (modelos)](#responses)
- [Adicionar um respondedor ou resposta automática](#automatic-respond)
- [Alterar a palavra-passe do seu endereço de e-mail](#password)
- [Redação de um e-mail](#email-writing)
- [Casos práticos](#usecase)

### Aceder ao webmail Roundcube <a name="roundcube-connexion"></a>

Aceda à página [Webmail](/links/web/email). Introduza um endereço de e-mail e a palavra-passe e, em seguida, clique em `Ligação`{.action}. 

![alojamento](images/webmail_login.png){.thumbnail}

Será então redirecionado para a interface Roundcube.

![alojamento](images/roundcube01.png){.thumbnail}

> [!primary]
> 
> Quando se ligar pela primeira vez à interface Roundcube, o aspeto pode ser diferente daquele que verá nesta documentação. Isto significa que o aspeto "clássico" foi definido na sua interface. Para o alterar, siga a secção "[Interface do utilizador](#user-interface-settings)" e selecione o aspeto "Larry".
> O aspeto da interface não terá impacto nas explicações que se seguem nesta documentação.

> [!warning]
> 
> Se for redirecionado para uma interface **O**utlook **W**eb **A**pp (OWA), isto significa que está na última versão da oferta MX Plan. Para mais informações sobre a sua oferta MX Plan, consulte a nossa página [Primeiros passos com a oferta MX Plan](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_generalities).
>
> Para se familiarizar com a interface **OWA**, consulte o nosso guia [Consultar a sua conta de e-mail a partir da interface OWA](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/email_owa).

### Interface geral do webmail Roundcube <a name="general-interface"></a>

Depois de se ligar à sua conta de e-mail, tem acesso à janela principal do Roundcube, que é composta por 3 zonas:

- [**Coluna da esquerda**](#leftcolumn): a árvore da sua conta de e-mail, composta por pastas e subpastas. A pasta principal é a `Caixa de entrada`.

- [**Janela superior**](#topwindow): a lista dos e-mails contidos na pasta selecionada na coluna da esquerda.

- [**Janela inferior**](#lowerwindow): o conteúdo do e-mail selecionado na janela superior.

#### Gestão das pastas (coluna da esquerda) <a name="leftcolumn"></a>

Nesta zona, aparecem as pastas presentes na sua conta de e-mail.

Para gerir as pastas com mais precisão, clique na roda dentada na parte inferior da coluna e, em seguida, em `Gerir pastas`{.action}.

![alojamento](images/roundcube02.png){.thumbnail}

Para criar uma pasta, clique no botão `+`{.action} no fundo da coluna `Pastas`.

Para eliminar uma pasta, selecione a pasta em questão, clique na roda dentada no fundo da coluna `Pastas` e, em seguida, em `Eliminar`{.action}. Para apagar o conteúdo, mas manter a pasta, clique em `Esvaziar`{.action}.

As caixas a assinalar ao nível das pastas correspondem às "subscrições". A subscrição determina se a pasta deve ser apresentada, ou não, na interface webmail ou no software de mensagens, mantendo o conteúdo da pasta. O objetivo é apenas ocultar ou mostrar uma pasta na conta de e-mail.

> [!primary]
>
> As pastas que apresentam uma caixa a assinalar cinzenta são pastas especiais. Não é possível eliminá-las ou retirar a sua subscrição.

#### Lista de e-mails recebidos / enviados (janela superior) <a name="topwindow"></a>

Esta janela apresenta o conteúdo da pasta selecionada na coluna da esquerda. 

##### Tipo de visualização <a name="topwindow-display"></a>

Esta janela é apresentada de uma forma que pode ser personalizada. Para tal, clique na roda dentada situada no canto superior esquerdo desta janela.

![alojamento](images/roundcube03.png){.thumbnail}

É possível configurar quatro parâmetros:

- **Disposição**: define a organização das janelas de gestão de uma conta de e-mail. Três opções:
    - `Ecrã grande`{.action} (*Widescreen*): três painéis lado a lado — pastas, lista de e-mails e painel de leitura alinhados horizontalmente;
    - `Secretária`{.action} (*Desktop*): lista de e-mails na parte superior, painel de leitura por baixo (disposição clássica);
    - `Lista`{.action} (*List*): sem painel de leitura — os e-mails abrem-se em janela inteira ao clicar.

- **Colunas da lista**: caixas a assinalar que determinam as colunas apresentadas na lista de e-mails. As colunas **Assunto** e **Tópico de discussão** estão sempre visíveis. Colunas opcionais disponíveis: `De`{.action}, `Para`{.action}, `De/Para`{.action}, `Responder a`{.action}, `Cópia`{.action}, `Data`{.action}, `Tamanho`{.action}, `Estado de leitura`{.action}, `Anexos`{.action}, `Indicador`{.action}, `Prioridade`{.action}.

- **Coluna de ordenação**: permite escolher a coluna de ordenação por predefinição. Opções disponíveis: `Nenhum`{.action}, `Data de receção`{.action}, `Data de envio`{.action}, `Assunto`{.action}, `De`{.action}, `Para`{.action}, `De/Para`{.action}, `Cópia`{.action} ou `Tamanho`{.action}.

- **Ordem de ordenação**: ascendente ou descendente.

Clique em `Guardar`{.action} para aplicar as suas opções.

> [!primary]
>
> Pode também **ordenar dinamicamente a lista** clicando diretamente no cabeçalho de uma coluna apresentada (por exemplo **Data**, **Assunto** ou **Tamanho**). Um segundo clique na mesma coluna inverte a ordem.

##### Ação sobre um e-mail selecionado <a name="topwindow-action"></a>

Quando um e-mail é selecionado, é possível agir sobre o mesmo. Estas são as ações possíveis:

- `Responder`{.action}: responder diretamente ao remetente.
- `Responder a todos`{.action}: responder diretamente a todos os destinatários presentes nos campos "A" e "Cópia".
- `Reencaminhar`{.action}: reencaminhar o e-mail selecionado a um ou vários destinatários.
- `Eliminar`{.action}: colocar o e-mail selecionado na "Reciclagem".
- `Indesejados`{.action}: colocar o e-mail selecionado diretamente na caixa de correio indesejado (Junk), classificá-lo como **spam**.
- `Marcar`{.action}: definir manualmente o estado de um e-mail.
- `Mais`{.action} 
    - `Imprimir este e-mail`{.action}.
    - `Transferir (.eml)`{.action}: recuperar o cabeçalho do e-mail e o seu conteúdo.
    - `Editar como novo`{.action}: criar um novo e-mail com base no e-mail selecionado.
    - `Mostrar a fonte`{.action}: apresentar o e-mail na sua forma bruta com o cabeçalho.
    - `Mover para`{.action}: mover o e-mail para uma pasta.
    - `Copiar para`{.action}: copiar o e-mail para uma pasta.
    - `Abrir numa nova janela`{.action}.

![alojamento](images/roundcube04.png){.thumbnail}

> [!primary]
>
> Se um dos seus correspondentes solicitar que lhe seja enviado um aviso de leitura quando ler o seu e-mail, obterá a seguinte mensagem: `o remetente desta mensagem solicitou ser avisado quando ler esta mensagem. Pretende avisar o remetente?`.
>

##### Procurar um e-mail <a name="topwindow-search"></a>

Está disponível uma ferramenta de pesquisa na parte superior direita da interface.

Introduza um termo no campo de pesquisa e, em seguida, valide com a tecla `Enter`{.action}: por predefinição, o Roundcube efetua a pesquisa em toda a pasta atual.

Clique na seta situada à direita da lupa para apresentar os filtros de pesquisa: pode restringir a pesquisa a determinados campos (assunto, corpo da mensagem, remetente, destinatários, etc.) ou alargar o seu âmbito a todas as pastas.

#### Conteúdo de um e-mail (janela inferior) <a name="lowerwindow"></a>

Quando um e-mail é selecionado na lista, este é apresentado na janela inferior.

À direita, encontram-se os atalhos das funções abaixo:

- `Apresentar em formato HTML`{.action} (predefinição)
- `Apresentar em formato de texto simples`{.action}
- `Responder`{.action}
- `Responder a todos`{.action}
- `Reencaminhar`{.action}
- `Apresentar numa nova janela`{.action}

![alojamento](images/roundcube05.png){.thumbnail}

### Configurar as preferências da interface Roundcube <a name="roundcube-settings"></a>

Os capítulos seguintes deste guia correspondem aos separadores que compõem a parte `Preferências`{.action} das `Definições`{.action} do Roundcube. A sua descrição não é exaustiva.

![alojamento](images/roundcube06.png){.thumbnail}

#### Interface do utilizador <a name="user-interface-settings"></a>

Defina aqui o `idioma` de utilização da interface Roundcube, o `fuso horário`, o `formato horário` e o `formato de data`.

A opção `Datas amigáveis` permite apresentar a data de receção/envio com termos relativos como "Hoje", "Ontem", etc.<br>
**Por exemplo**: estamos a **19/05/2022**, um e-mail enviado/recebido a **17/05/2022** às **17:38** será apresentado **Ter 17:38**, pois o e-mail corresponde à terça-feira anterior.

A caixa `Mostrar a próxima entrada da lista após eliminar ou mover` significa que, após uma ação de eliminação ou de deslocação de um e-mail, o elemento da linha inferior será sistematicamente selecionado, qualquer que seja a ordem de ordenação.

Pode escolher a estética de apresentação da sua interface. Pode optar entre o aspeto **Classic** ou o aspeto **Larry**.

#### Vista da caixa de correio <a name="mail-view-settings"></a>

Defina aqui a ergonomia para visualizar e agir sobre os e-mails. A opção `Disposição` permite organizar as 3 janelas descritas na parte [Lista de e-mails recebidos / enviados](#topwindow).

#### Apresentação dos e-mails <a name="mail-display-settings"></a>

Defina a forma como os e-mails são apresentados.<br>
É aconselhável manter a caixa `Apresentar em HTML` selecionada, para garantir que os e-mails formatados pelo remetente sejam apresentados corretamente.<br>
Também é aconselhável manter a opção `Permitir recursos remotos (imagens, estilos)` em `nunca`. De facto, isto evita o carregamento dos elementos de um e-mail que pareça malicioso.

#### Redação de e-mails <a name="mail-writing-settings"></a>

Defina o formato por predefinição quando da redação de um e-mail ou de uma resposta.<br>
É aconselhável passar a opção `Redigir e-mails em HTML` para `sempre`, para beneficiar por predefinição das ferramentas de edição HTML e não alterar uma assinatura HTML.

#### Contactos <a name="contacts-settings"></a>

Personalize aqui a organização das informações no seu livro de endereços.

#### Pastas especiais <a name="special-folder-settings"></a>

O Roundcube dispõe de 4 pastas especiais: `Rascunhos`, `Enviados`, `Indesejados`, `Reciclagem`.

Não aconselhamos a sua alteração, mas é possível atribuir o comportamento de uma pasta especial a outra pasta criada posteriormente, através dos menus pendentes.<br>

**Por exemplo**, pode atribuir o comportamento "Rascunhos" a outra pasta que tenha criado, clicando na lista pendente e selecionando essa pasta. Se nenhuma pasta lhe for atribuída, será automaticamente colocada na opção "Drafts". Os e-mails que aí forem guardados serão considerados rascunhos até ao seu envio efetivo.

> Na prática, crio uma subpasta "Rascunhos de e-mails de clientes". Acedo a `As minhas preferências`{.action} / `Pastas especiais`{.action} e escolho a opção "Rascunhos". No menu pendente, seleciono a pasta "Rascunhos de e-mails de clientes" para substituir "Drafts". Os e-mails redigidos nesta pasta serão considerados rascunhos.

#### Definições do servidor <a name="server-settings"></a>

Neste separador, pode otimizar o espaço ocupado numa conta de e-mail. De facto, a opção `Esvaziar a reciclagem ao terminar a sessão` permite evitar a acumulação dos elementos que foram eliminados. A opção `Eliminar diretamente os indesejados` eliminará automaticamente todos os e-mails considerados como spam.

> [!warning]
> 
> Não é aconselhável ativar a opção `Eliminar diretamente os indesejados`, no caso de um falso positivo (e-mail erradamente declarado como "spam") ser declarado como spam pelo servidor de receção. De facto, quando um e-mail é colocado na pasta "Indesejados", ainda é possível verificar se o e-mail é legítimo.

#### Encriptação <a name="encryption"></a>

Se o seu browser o permitir, pode instalar e ativar a extensão "Mailvelope". Trata-se de uma extensão de browser que integra o PGP (**P**retty **G**ood **P**rivacy) no seu serviço de mensagens web. O sistema de encriptação PGP e, por conseguinte, a extensão "Mailvelope" permitem:

- Encriptar e desencriptar e-mails no seu browser.
- Manter o conteúdo dos seus e-mails privado face ao seu fornecedor de e-mail.

Assim, só você pode ler os seus e-mails. Esta extensão é uma forma de proteger o seu webmail se receber e-mails de natureza confidencial.

Para mais informações, consulte a FAQ do "Mailvelope" no endereço <https://mailvelope.com/faq>.

### Gerir as identidades e as suas assinaturas <a name="identity-signature"></a>

A partir do Roundcube, clique em `Definições`{.action} na barra superior e, em seguida, em `Identidades`{.action} na coluna da esquerda. A "identidade" permite personalizar as informações enviadas aos destinatários como, por exemplo, o nome a apresentar ou a assinatura.

![alojamento](images/roundcube07.png){.thumbnail}

#### Definir os atributos de uma identidade <a name="identity"></a>

- **Nome a apresentar**: este nome aparecerá na parte "remetente" do destinatário.
- **E-mail**: corresponde ao endereço a partir do qual é enviado o e-mail.
- **Organização**: campo destinado ao nome de uma sociedade, associação ou outra entidade.
- **Responder a**: atribuir um endereço de e-mail de resposta diferente do do remetente.
- **Bcc**: colocar em cópia oculta um endereço de e-mail aquando de um envio.
- **Definir como predefinição**: quando existem várias identidades (assinaturas), atribui esta por predefinição.
- **Assinatura**: personalizar o rodapé de um e-mail aquando da sua redação (apelido, nome próprio, cargo ocupado, frases, imagens...).
- **Assinatura HTML**: ativa o formato HTML na assinatura.

> [!alert]
>
> Preencher a caixa **E-mail** com um endereço de e-mail diferente daquele com o qual está ligado é considerado uma usurpação de identidade eletrónica (*spoofing*). O endereço IP utilizado para o envio corre o risco de ser "banido" e/ou considerado como "spam" pelos seus destinatários.

#### Adicionar uma assinatura <a name="signature"></a>

Por predefinição, a caixa `assinatura` está em "texto simples". Este formato não permite uma edição avançada nem inserir uma imagem na sua assinatura. Para beneficiar das opções de edição avançada para uma assinatura, é aconselhável ativar o modo HTML clicando em **Assinatura HTML** sob a caixa de introdução.

> [!warning]
>
> Por conseguinte, se a assinatura estiver em formato HTML, será necessário passar para o modo HTML para a redação de um e-mail. Pode ativar esta opção por predefinição para cada redação de e-mail, a partir da secção `Definições`{.action} da interface Roundcube.
> Clique em `Preferências`{.action} na coluna da esquerda e, em seguida, em `Redação de e-mails`{.action}. Para a menção **Redigir e-mails em HTML**, selecione `Sempre`.
>

Para inserir uma imagem numa assinatura, a imagem deve estar alojada num servidor (um alojamento OVHcloud ou outro).<br>
**Carregar uma imagem a partir de um computador não permitirá a sua apresentação**.

Clique no botão `< >`{.action} na barra de ferramentas HTML e, em seguida, insira o seguinte código, substituindo `your-image-url` pelo endereço (URL) da imagem e `text-if-image-is-not-displayed` por um texto que substitua a imagem caso esta não possa ser apresentada.

```html
<img src="your-image-url" border="0" alt="text-if-image-is-not-displayed" />
```

![alojamento](images/roundcube08.png){.thumbnail}

### Livro de contactos <a name="contact-book"></a>

Clique em `Contactos`{.action}, na barra superior, para aceder ao livro de contactos. Este está dividido em **3 colunas**:

- **Grupos**: no livro de endereços, pode criar grupos para classificar os contactos.
- **Contactos**: visualize os contactos do livro de endereços ou do grupo selecionado.
- **Propriedades do contacto** ou **Adicionar um contacto**: esta janela apresenta-se quando um contacto é selecionado ou está em criação. Aí pode ler ou modificar as informações de um contacto.

![alojamento](images/roundcube09.png){.thumbnail}

#### Grupos <a name="group"></a>

Os grupos são subcategorias do livro de endereços. Permitem classificar os contactos em subconjuntos. Por exemplo, encontrará mais facilmente um contacto num grupo que tenha criado do que no conjunto do seu livro de endereços. Permitem-lhe também enviar um e-mail adicionando um grupo como destinatário, em vez de adicionar um a um os contactos do grupo.

Para criar um grupo, clique no botão `+`{.action} no fundo da coluna `Grupos`. Defina o nome do grupo e, em seguida, clique em `Guardar`{.action} para validar.

![alojamento](images/roundcube10.png){.thumbnail}

Para atribuir um contacto a um dos grupos, selecione um contacto na coluna `Contactos` e, na janela que aparece, clique no separador `Grupos`{.action}. Assinale o grupo que pretende atribuir ao contacto.

#### Contactos <a name="contacts"></a>

Na coluna `Grupos`, selecione o livro de endereços ou um dos grupos.

> [!primary]
>
> Quando cria um contacto a partir de um grupo selecionado, o contacto será automaticamente adicionado ao grupo.

Clique no botão `+`{.action} no fundo da coluna `Contactos` para criar um contacto.

![alojamento](images/roundcube11.png){.thumbnail}

Em seguida, preencha as informações do contacto.

> [!primary]
> Pode adicionar campos suplementares através do menu pendente `Adicionar campo...`{.action}, situado por baixo dos campos `Nome próprio` e `Endereço`.

#### Importar contactos <a name="import-contacts"></a>

A partir da janela `Contactos`{.action}, na barra superior, clique em `Importar`{.action} para abrir a janela de importação.

- `Importar de um ficheiro`: selecione um ficheiro CSV ou um ficheiro vCard no seu computador. Os contactos num ficheiro CSV devem ser separados por vírgulas. O ficheiro não deve ter mais de 20 MB.
- `Importar as atribuições de grupo`: se os contactos do seu ficheiro estiverem distribuídos por grupos, pode ativar esta opção para manter esta organização ou deixar esta opção em `nenhuma` para que nenhum grupo seja atribuído aos contactos.
- `Substituir todo o livro de endereços`: se já estiver configurado um livro, aconselhamo-lo a exportá-lo antes de assinalar esta opção ou a certificar-se de que pretende substituí-lo definitivamente.

![alojamento](images/roundcube-import-contact.png){.thumbnail}

#### Exportar os contactos <a name="export-contacts"></a>

A partir da janela `Contactos`{.action}, na barra superior, clique na seta apontada para baixo à direita do botão `Exportar`{.action}.

Pode escolher entre:

- `Exportar tudo`{.action} e o conjunto dos contactos será então exportado num ficheiro **.vcf**.
- `Exportar a seleção`{.action} para exportar unicamente os elementos que tiver escolhido na coluna `Contactos`{.action}.

![alojamento](images/roundcube-export-contact.png){.thumbnail}

### Respostas (modelos) <a name="responses"></a>

Esta função permite criar modelos de respostas aquando da redação de um e-mail.

A partir do Roundcube, clique em `Definições`{.action} na barra superior e, em seguida, em `Respostas`{.action} na coluna da esquerda.

Para adicionar uma resposta, clique no botão `+`{.action} no fundo da coluna `Respostas`.

![alojamento](images/roundcube12.png){.thumbnail}

> [!primary]
>
> As "respostas" redigem-se no formato de "texto simples".

### Adicionar um respondedor ou resposta automática <a name="automatic-respond"></a>

Pretende adicionar uma resposta automática ao seu endereço de e-mail quando estiver ausente ou indisponível. Esta função não pode ser ativada a partir do webmail, mas sim a partir da sua [área de cliente OVHcloud](/links/manager), na interface de gestão dos seus endereços de e-mail. Consulte o nosso guia "[Criar um respondedor para o seu endereço de e-mail](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/feature_auto_responses/)".

### Alterar a palavra-passe do seu endereço de e-mail <a name="password"></a>

Para alterar a palavra-passe do seu endereço de e-mail, deve ligar-se à sua [área de cliente OVHcloud](/links/manager), na interface de gestão dos seus endereços de e-mail. Consulte o nosso guia "[Alterar a palavra-passe de um endereço de e-mail](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_change_password/)".

### Redação de um e-mail <a name="email-writing"></a>

A partir do separador `E-mail`{.action} na barra superior, clique em `Redigir`{.action}.

Na janela de redação de um e-mail, encontram-se os seguintes campos:

- **De**: escolher uma [identidade](#identity) para definir o remetente.
- **Para**: adicionar destinatários e/ou um [grupo de destinatários](#group). O botão `+`{.action} à direita do campo permite introduzir vários endereços.

> [!primary]
>
> O campo **"Para"** não deve exceder os 100 destinatários, incluindo os contactos contidos num [grupo](#group).

- **Cc**: através do botão `Adicionar Cc`{.action}, adicionar destinatários em cópia simples.
- **Bcc**: através do botão `Adicionar Bcc`{.action}, adicionar destinatários em cópia oculta. Os outros destinatários do e-mail não verão os que estão em Bcc.
- **Reencaminhar para**: através do botão `Adicionar Reencaminhar para`{.action}, reencaminhar o e-mail a destinatários.
- **Tipo de editor**:
    - `Texto simples`: apenas texto sem formatação.
    - `HTML`: texto com formatação. Aparece uma barra de ferramentas HTML acima da janela de introdução.
- **Prioridade** do e-mail.
- **Aviso de abertura do e-mail**: é solicitado um aviso de receção ao destinatário.
- **Notificação de estado de entrega** quando o e-mail tiver sido devidamente entregue ao destinatário.
- **Guardar o e-mail enviado em**: escolher a pasta na qual será guardada uma cópia do e-mail.

Na barra superior, estão disponíveis as seguintes ações:

- `Cancelar`{.action} a redação de um e-mail com um pedido de confirmação.
- `Enviar`{.action} um e-mail.
- `Guardar`{.action} um e-mail na pasta especial "rascunho".
- `Ortografia`{.action}, para verificar o texto, com um menu que permite escolher o idioma.
- `Anexar`{.action} um ficheiro a um e-mail.
- `Assinatura`{.action}: adiciona a assinatura associada à [identidade](#identity) selecionada.
- `Respostas`{.action}: adiciona um modelo pré-registado na parte [Respostas](#responses).

![alojamento](images/roundcube13.png){.thumbnail}

### Casos práticos <a name="usecase"></a>

#### Falha na verificação do pedido

Encontra a seguinte mensagem ao tentar aceder ao seu webmail Roundcube:

```console
FALHA NA VERIFICAÇÃO DO PEDIDO
Para sua proteção, o acesso a este recurso está protegido contra ataques CSRF.
Se vê esta mensagem, provavelmente não terminou sessão antes de sair da aplicação web.
É necessária uma interação humana para continuar.
Contacte o administrador do seu servidor.
```

Tal como é indicado na mensagem, a sua conta de e-mail é considerada como já ligada. Falamos aqui de "sessão". Isto significa que a sua conta de e-mail já está a ser utilizada do ponto de vista do servidor de e-mail e que esta sessão anterior deve ser fechada. Verifique se a sua conta de e-mail não está já aberta no Roundcube. Esvazie igualmente os dados em cache no seu browser.

## Quer saber mais?

[Primeiros passos com a oferta MX Plan](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_generalities)

[Alterar a palavra-passe de um endereço de e-mail MX Plan](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_change_password)

[Criar um respondedor para o seu endereço de e-mail](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/feature_auto_responses/)

[Criar filtros para os seus endereços de e-mail](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/feature_filters)

[Utilizar os reencaminhamentos de e-mail](/pages/web_cloud/email_and_collaborative_solutions/common_email_features/feature_redirections)

Fale com a nossa [comunidade de utilizadores](/links/community).
