---
title: Migracao das contas de E-mail utilizando o OVH Mail Migrator
slug: exchange-migracao-de-contas-email-ovh-mail-migrator
excerpt: Descubra como utilizador o OVH Mail Migrator
section: Migração de contas
order: 02
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

**Última atualização: 25/11/2021**

## Objetivo

[OVH Mail Migrator](https://omm.ovh.net/){.external} é uma ferramenta criada pela OVHcloud. Permite migrar as suas contas de e-mail para os seus endereços de e-mail OVHcloud ou um serviço de e-mail externo. O processo trata de diferentes tipos de conteúdos, tais como os e-mails, os contactos, os calendários e as tarefas, desde que estes sejam compatíveis com os seus endereços de e-mail.

**Aprenda a migrar as suas contas de e-mail para a OVHcloud graças à nossa ferramenta OVH Mail Migrator.**

## Requisitos

- Ter um serviço de e-mail na OVHcloud, como uma oferta [Exchange](https://www.ovhcloud.com/pt/emails/){.external}, [E-mail Pro](https://www.ovhcloud.com/pt/emails/email-pro/){.external} ou MX Plan (através da oferta MX Plan ou incluída numa oferta de [alojamento web OVHcloud](https://www.ovhcloud.com/pt/web-hosting/){.external}).
- Ter dados de acesso relativos às contas de e-mail que pretende migrar (as contas de origem).
- Ter dados de acesso relativos às contas de e-mail OVH que recebem os dados migrados (as contas de destino).

## Instruções

**OVH Mail Migrator** está acessível a partir da página <https://omm.ovh.net/>. Gere 3 tipos de migrações:

- [Migração única](#standalone): Migrar uma conta de e-mail para outra conta de e-mail. Esta solução é recomendada para migrar uma ou algumas contas de e-mail (os passos devem ser repetidos para cada endereço migrado).
- [Migração por ficheiro](#file): Migrar o conteúdo de uma conta de e-mail, recuperado previamente num ficheiro, para outro endereço de e-mail. Os formatos PST, ICS e VCF são aqui tomados a cargo.
- [Migração múltipla (modo projeto)](#project): Permite gerir várias migrações num único projeto. Esta solução dirige-se às pessoas que desejam migrar um número consequente de endereços.

### Migração única <a name="standalone"></a>

#### Iniciar a migração

Na página <https://omm.ovh.net/>, no separador `Migration`{.action}, clique em `Nova migração`{.action}.

![omm](images/omm-migration-create.png){.thumbnail}

Na nova página, preencha as informações para cada parte.

- **Conta**: introduza as informações da **conta de origem** e da **conta de destino**. Relembramos que o conteúdo da **conta de origem** será migrado para a **conta de destino**.

|Informação|Descrição|
|---|---|
|Tipo de servidor|Selecione o tipo de servidor que corresponde às suas contas. Se um deles for um endereço OVHcloud, **Hosted by OVHcloud (Autodetect)**, isto permite-lhe completar automaticamente as informações, com exceção da palavra-passe.|
|URL do servidor|Indique o endereço do servidor onde estão alojadas as suas contas. Este campo pode ser completado automaticamente aquando da escolha do tipo de servidor.|
|Nome de utilizador|Introduza o endereço de e-mail completo.|
|Conta administrador com delegação|Este campo aparece apenas com certos tipos de servidores.|
|Palavra-passe|Insira a palavra-passe do endereço de e-mail.|

- **Opções**: selecione os elementos que deseja migrar. Alguns conteúdos podem não estar disponíveis de acordo com o tipo de servidor escolhido anteriormente.

- **Informações**: introduza um endereço de e-mail para ser notificado sobre o progresso da migração.

Clique em `Iniciar a migração`{.action} depois de as informações estarem completadas. Se estas últimas estiverem corretas, o processo começará.

A página que aparece então detalha o seguimento da migração. Considere conservar o `ID de migração`{.action} apresentado e aguarde até que o processo esteja concluído; este prazo varia em função do número de elementos a migrar. Se pretender aceder novamente a este processo, consulte a secção "Seguir uma migração única".

#### Acompanhar a migração  

Existem dois caminhos para aceder ao acompanhamento de uma migração única:

- após o e-mail recebido, notifica-o do progresso da migração;
- a partir da página <https://omm.ovh.net/>, no separador `Migration`{.action}, clique em `Seguinte / Sincronizar`{.action}. Deverá indicar o `ID de migração` {.ação} e a `Conta source` {.ação} em causa.

![omm](images/omm-migration-track.png){.thumbnail}

A página que aparece permite-lhe seguir o progresso da sua migração. Uma mensagem indica-lhe se o processo vai começar, está em curso ou está concluído. Dependendo desta situação, podem ocorrer várias interações:

- `Interromper o processo `{.action}: Permite anular a migração. Os elementos já migrados serão conservados na conta de destino.
- `Eliminar os elementos migrados`{.action}: Permite eliminar elementos já migrados para a conta de destino. Pode eliminar elementos a partir de um ponto de sincronização preciso.
- `Sincronizar`{.action}: Permite recuperar novos elementos não migrados numa anterior sincronização entre a conta de origem e a conta de destino. Consideramos esta ação como uma migração dos elementos em falta na conta de destino em relação à conta de origem.

### Migração por ficheiro <a name="file"></a>

#### Iniciar a migração

Na página <https://omm.ovh.net/>, no separador `PST / ICS / VCF`{.action} acima, clique em `Nova migração PST / ICS / VCF`.

Aqui, deverá dispor do ficheiro com o conteúdo que pretende migrar para a conta de e-mail.

![omm](images/omm-migration-files.png){.thumbnail}

Na nova página, introduza as informações da **conta de destino** e clique no botão `Iniciar a migração`{.action}.

Se as informações introduzidas estiverem corretas, deverá selecionar o ficheiro no seu computador. De seguida, clique no botão `Upload`{.action} e aguarde durante o download; isto pode levar algum tempo, dependendo do tamanho do ficheiro. Pode consultar o progresso da transferência nesta página.

Depois de fazer o download do ficheiro OMM, introduza novamente a palavra-passe da **conta de destino** e clique em `Iniciar a migração`{.action}. Se as informações indicadas estiverem corretas, poderá lançar a migração clicando no botão `Iniciar a migração`{.action}.

A página que aparece então detalha o seguimento da migração. Considere conservar o `Identificador de migração`{.action} apresentado e aguarde até ao fim da migração; este prazo varia em função do número de elementos a migrar. Para aceder novamente a este processo, consulte a secção abaixo.

#### Acompanhar a migração

Existem dois caminhos para aceder ao acompanhamento de uma migração por ficheiro PST, ICS ou VCF:

- a partir do e-mail recebido após o início da migração;

- a partir da página <https://omm.ovh.net/>, passando o rato no separador `Migration`{.action} na barra de menu por cima da página e clicando em `Seguinte / Sincronizar`{.action}. De seguida, deverá introduzir o `Identificador de migração` {.ação} e a `Conta de destino` {.ação} em causa.

![omm](images/omm-migration-track.png){.thumbnail}

A página que aparece permite-lhe seguir o progresso da sua migração. Uma mensagem indica-lhe se o processo vai começar, está em curso ou está concluído. Dependendo desta situação, podem ocorrer várias interações:

- Interromper o processo: Permite anular a migração. Os elementos já migrados serão conservados na conta de destino.
- Eliminar os elementos migrados: Permite eliminar os elementos migrados na conta de destino.

### Realizar e seguir uma migração múltipla (modo projeto) <a name="project"></a>

Na página <https://omm.ovh.net/>, no separador `Projeto`{.action} acima, clique em `Novo projeto de migrações múltiplas`{.action}.

![omm](images/omm-migration-project.png){.thumbnail}

Complete as informações do **Novo Projeto**:

- Atribua um nome ao seu projeto de migração.
- Uma palavra-passe para aceder à interface de acompanhamento do seu projeto de migração.
- um endereço de e-mail para ser notificado sobre o progresso do seu projeto de migração.

Clique em `Criar o projeto`{.action}. A página seguinte permite-lhe gerir e seguir o seu projeto de migração. Mantenha **o número do projeto** apresentado acima.

![omm](images/omm-migration-project01.png){.thumbnail}

Pode desde já iniciar a migração das suas contas. A interface apresenta diferentes separadores:

- `Continuar`: Permite seguir o progresso das migrações no seu projeto. Dispõe de um botão que permite aguardar e retomar as migrações em curso.

- `Criação múltipla`: Permite adicionar na fila de espera várias migrações graças à importação de um ficheiro (CSV ou Excel). Este último deve respeitar uma formatação precisa; recomendamos que utilize os modelos fornecidos. O ficheiro apresenta-se sob a forma:

``` 

"Source Type(IMAP/Exchange/POP)";Source Server url;Source Login/Mail;Source Password;Destination Type;"Destination Url(can be leaved empty if hosted by OVH)";Destination Mail;Destination Password;Source admin mail (delegation);Destination Admin Mail (delegation)
IMAP;myimap.server.com;mywonderfulmail@myserver.com;My_password;Exchange;https://ex3.mail.ovh.net/ews/exchange.asmx;mygreatmailaddress@mydomain.ovh;My_password2;"";""

```

É preferível abri-lo com um software de mesa para o completar.

- `Adicionar`: Permite adicionar, conta a conta, migrações na fila de espera. No entanto, poderá conservar os servidores de origem e de destino enquanto valores predefinidos.

![omm](images/omm-migration-project02.png){.thumbnail}

- `Opções`: Permite personalizar os elementos que a ferramenta OVH Mail Migrator deve migrar, bem como o número de pedidos simultâneos que a ferramenta pode efetuar quando realiza as migrações.

![omm](images/omm-migration-project03.png){.thumbnail}

- `Desligar`: Permite que se desligue da página de acompanhamento do projeto, sem consequências sobre o desenrolar da migração.

Para aceder de novo ao seguimento do seu projeto de migração, aceda à página <https://omm.ovh.net/>, no separador `Projeto`{.action} acima, clique em `Seguir um projeto`{.action}. Deverá indicar o `ID do projeto de migração`{.action} e a `palavra-passe`{.action} associada a este último.

## Quer saber mais?
 
Fale com a nossa comunidade de utilizadores: <https://community.ovh.com/en/>.
