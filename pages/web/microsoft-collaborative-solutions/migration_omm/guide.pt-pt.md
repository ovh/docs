---
title: Migracao das contas de E-mail utilizando o OVH Mail Migrator
slug: exchange-migracao-de-contas-email-ovh-mail-migrator
legacy_guide_number: 1624
excerpt: Descubra como utilizador o OVH Mail Migrator
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk „Zaproponuj zmianę” na tej stronie.
>

**Última atualização: 08/03/2018**

## Objetivo

[OVH Mail Migrator](https://omm.ovh.net/){.external} é uma ferramenta criada pela OVH. Permite migrar as suas contas de e-mail para os seus endereços de e-mail OVH. O processo trata de diferentes tipos de conteúdos, tais como os e-mails, os contactos, os calendários e as tarefas, desde que estes sejam compatíveis com os seus endereços de e-mail.

**Aprenda a migrar as suas contas de e-mail para a OVH graças à nossa ferramenta OVH Mail Migrator.**


## Requisitos

- Ter um serviço de e-mail na OVH, como uma oferta [Exchange](https://www.ovhcloud.com/pt/emails/){.external}, [E-mail Pro](https://www.ovhcloud.com/pt/emails/email-pro/){.external} ou MX Plan (através da oferta MX Plan ou incluída numa oferta de [alojamento web OVH](https://www.ovhcloud.com/pt/web-hosting/){.external}).
- Ter dados de acesso relativos às contas de e-mail que pretende migrar (as contas de origem).
- Ter dados de acesso relativos às contas de e-mail OVH que recebem os dados migrados (as contas de destino).

## Instruções

[OVH Mail Migrator](https://omm.ovh.net/){.external} est accessible depuis la page <https://omm.ovh.net/>. Ele gere três tipos de migrações e permite segui-las.

|Tipo de migração|Descrição|
|---|---|
|Migração única|Migrar o conteúdo de um endereço de e-mail para outro endereço de e-mail. Esta solução é recomendada para migrar um ou alguns endereços (os passos devem ser repetidos para cada endereço migrado).|
|Migração por ficheiro|Migrar o conteúdo de um endereço de e-mail, recuperado num ficheiro, para outro endereço de e-mail. Os formatos PST, ICS e VCF são aqui tomados a cargo.|
|Migração múltipla (modo projeto)|Permite gerir várias migrações num único projeto. Esta solução dirige-se às pessoas que desejam migrar um número consequente de endereços.|

Consulte este manual em função da migração mais adequada ao seu projeto.

### Realizar uma migração única

Aceda à página <https://omm.ovh.net/>, passe o rato no separador `Migration` {.action} na barra de menu no topo da página e clique em `Nova migração` {.action}.

![omm](images/omm-migration-create.png){.thumbnail}

Na nova página, preencha as informações para cada parte.

- **Conta**: introduza as informações da **conta de origem** e da **conta de destino**. Relembramos que o conteúdo da **conta de origem** será migrado para a **conta de destino**.

|Informação|Descrição|
|---|---|
|Tipo de servidor|Selecione o tipo de servidor que corresponde às suas contas. Se um deles for um endereço OVH, o **Hosted by OVH (Autodetect)** permite-lhe completar automaticamente as informações.|
|URL do servidor|Indique o endereço do servidor onde estão alojadas as suas contas. Este campo pode ser completado automaticamente aquando da escolha do tipo de servidor.|
|Nome de utilizador|Indique o endereço de e-mail completo das suas contas.|
|Conta administrador com delegação|Este campo aparece apenas com certos tipos de servidores.|
|Palavra-passe|Indique a palavra-passe das suas contas.|

- **Opções**: selecione os elementos que deseja migrar. Alguns conteúdos podem não estar disponíveis de acordo com o tipo de servidor escolhido anteriormente.

- **Informações**: introduza um endereço de e-mail que receberá notificações sobre o progresso da migração.

Clique no botão `Iniciar a migração`{.action} depois de as informações estarem completadas. Se estas últimas estiverem corretas, o processo começará.

A página que aparece então detalha o seguimento da migração. Considere conservar o `ID de migração`{.action} apresentado e aguarde até que o processo esteja concluído; este prazo varia em função do número de elementos a migrar. Se pretender aceder novamente a este processo, consulte a secção "Seguir uma migração única".

### Seguir uma migração única

Existem dois caminhos para aceder ao acompanhamento de uma migração única:

- a partir do e-mail recebido notificando-o de que a migração começou;
- a partir da página da ferramenta, <https://omm.ovh.net/>passando o rato no separador `Migration` {.action} na barra de menu no topo da página e clicando em `Seguimento / Sincronizar` {.action}. Deverá indicar o `ID de migração` {.ação} e a `Conta source` {.ação} em causa.

![omm](images/omm-migration-track.png){.thumbnail}

A página que aparece permite-lhe seguir o progresso da sua migração. Uma mensagem indica-lhe se o processo vai começar, está em curso ou está concluído. Dependendo desta situação, podem ocorrer várias interações:

|Cenários|Descrição|
|---|---|
|Interromper o processo|Permite anular a migração. Os elementos já migrados serão conservados na conta de destino.|
|Eliminar os elementos migrados|Permite eliminar elementos já migrados para a conta de destino. Pode eliminar elementos a partir de um ponto de sincronização preciso.|
|Sincronizar|Permite recuperar novos elementos não migrados numa anterior sincronização entre a conta de origem e a conta de destino. Consideramos esta ação como uma migração dos elementos em falta na conta de destino em relação à conta de origem.|

### Migrar por ficheiro

Ligado à página <https://omm.ovh.net/>, passe o rato no separador `PST / ICS / VCF` {.action} na barra de menu no topo da página e, em função da migração que deseja realizar, clique em `Nova migração PST` {.ação}, `Nova migração ICS` {.ação} ou `Nova migração VCF` {.ação}.

Aqui, deve estar na posse do ficheiro com o conteúdo que pretende migrar.

![omm](images/omm-migration-files.png){.thumbnail}

Na nova página, introduza as informações da **conta de destino** e clique no botão `Iniciar a migração`{.action}. Relembramos que o conteúdo do ficheiro PST, ICS ou VCF será migrado para a **conta de destino**.

Se as informações introduzidas estiverem corretas, deverá selecionar o ficheiro no seu computador. De seguida, carregue no botão `Upload`{.action} e aguarde durante o download; isto pode levar algum tempo, dependendo do tamanho do ficheiro. Pode consultar o progresso da transferência nesta página.

Depois de fazer o download do ficheiro, introduza novamente a palavra-passe da **conta de destino** e clique em `Iniciar a migração`{.action}. Se as informações indicadas estiverem corretas, poderá lançar a migração ao clicar novamente no botão `Iniciar a migração`{.action}.

A página que aparece então detalha o seguimento da migração. Considere conservar o `ID de migração`{.action} apresentado e aguarde até que o processo esteja concluído; este prazo varia em função do número de elementos a migrar. Se pretender aceder novamente a este processo, consulte a secção "Seguir uma migração por ficheiro".

### Seguir uma migração por ficheiro

Existem dois caminhos para aceder ao acompanhamento de uma migração por ficheiro PST, ICS ou VCF:

- a partir do e-mail recebido notificando-o de que a migração começou;

- a partir da página da ferramenta, <https://omm.ovh.net/> passando o rato no separador `Migration` {.action} na barra de menu no topo da página e clicando em `Seguimento / Sincronizar` {.action}. De seguida, deverá introduzir o `Identificador de migração` {.ação} e a `Conta de destino` {.ação} em causa.

![omm](images/omm-migration-track.png){.thumbnail}

A página que aparece permite-lhe seguir o progresso da sua migração. Uma mensagem indica-lhe se o processo vai começar, está em curso ou está concluído. Dependendo desta situação, podem ocorrer várias interações:

|Cenários|Descrição|
|---|---|
|Interromper o processo|Permite anular a migração. Os elementos já migrados serão conservados na conta de destino.|
|Eliminar os elementos migrados|Permite eliminar os elementos migrados para a conta de destino.|

### Realizar e seguir uma migração múltipla (modo projeto)

Aceda à página <https://omm.ovh.net/>, passe o rato no separador `Projeto` {.action} na barra de menu no topo da página e clique em `Novo projeto de migrações múltiplas` {.action}.

![omm](images/omm-migration-project.png){.thumbnail}

Na nova página, preencha as informações do **Novo Projeto**:

|Informação|Descrição|
|---|---|
|Nome|Defina um nome para o seu projeto de migração.|
|Palavra-passe|Defina uma password para o seu projeto, de forma a geri-la a partir da ferramenta OVH Mail Migrator.|
|E-mail|Insira um endereço de e-mail que receberá notificações sobre o progresso do seu projeto de migração.|

A seguir, clique em `Criar o projeto`{.action}. A página que aparecer permite-lhe gerir e seguir o seu projeto de migração. Considere conservar o **identificador do projeto** apresentado.

Pode desde já começar as suas migrações de contas. Para isso, vários separadores estão acessíveis:

|Separador|Descrição|
|---|---|
|Continuar|Permite seguir o progresso das migrações do seu projeto. Um botão oferece-lhe também a possibilidade de aguardar e retomar as migrações.|
|Criação múltipla|Permite adicionar na fila de espera várias migrações graças à importação de um ficheiro (CSV ou Excel). Este último deve respeitar uma formatação precisa; recomendamos que utilize os modelos fornecidos.|
|Adicionar|Permite adicionar conta a conta das migrações na fila de espera. No entanto, poderá conservar os servidores de origem e de destino enquanto valor predefinido.|
|Opções|Permite personalizar os elementos que a ferramenta OVH Mail Migrator deve migrar, bem como o número de pedidos simultâneos que a ferramenta pode efetuar quando realiza as migrações.|
|Terminar sessão|Permite que se desligue da página de acompanhamento do projeto; isto permite-lhe identificar-se para seguir um eventual outro projeto de migração.|

Se pretender aceder de novo ao seguimento do seu projeto de migração, ligue-se à página <https://omm.ovh.net/> , passe o rato no separador `Projeto` {.action} na barra de menu no topo da página, e clique em `Seguir um projeto` {.action}. Deverá indicar o `ID do projeto de migração` {.action} e a `palavra-passe` {.action} associada a este último.

## Quer saber mais?
 
Fale com a nossa comunidade de utilizadores: <https://community.ovh.com/en/>.