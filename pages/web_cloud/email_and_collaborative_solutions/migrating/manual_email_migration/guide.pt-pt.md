---
title: Migrar manualmente o seu endereço de e-mail
excerpt: Saiba como migrar manualmente um endereço de e-mail para outro endereço de e-mail
updated: 2026-03-30
---

## Objetivo

[A migração automática](/pages/web_cloud/email_and_collaborative_solutions/migrating/migration_omm) de um endereço de e-mail é possível através da nossa ferramenta [OVHcloud Mail Migrator](/links/web/omm). Também pode migrar manualmente o seu endereço de e-mail através dos softwares de e-mail.

**Saiba como migrar manualmente o seu endereço de e-mail.**

> [!warning]
>
> A responsabilidade sobre a configuração e a gestão dos serviços que a OVHcloud disponibiliza recai sobre o utilizador. Assim, deverá certificar-se de que estes funcionam corretamente.
>
> Este manual fornece as instruções necessárias para realizar as operações mais habituais. No entanto, se encontrar dificuldades, recomendamos que recorra a um [prestador de serviços especializado](/links/partner) e/ou que contacte o editor do serviço. Não poderemos proporcionar-lhe assistência técnica. Para mais informações, aceda à secção deste manual intitulada: "Quer saber mais?"
>

## Requisitos

- Ter um serviço de e-mail na OVHcloud, como uma oferta [Exchange](/links/web/emails-exchange), [E-mail Pro](/links/web/email-pro), [Zimbra](/links/web/zimbra) ou MX Plan (através da oferta MX Plan ou incluída numa oferta de [alojamento web da OVHcloud](/links/web/hosting)).
- Ter dados de acesso relativos às contas de e-mail que pretende migrar (as contas de origem).
- Ter dados de acesso relativos às contas de e-mail OVHcloud que recebem os dados migrados (as contas de destino).

<!-- CP-NAV-START:web-mx-plan -->
<!-- CP-NAV-START:web-email-pro -->
<!-- CP-NAV-START:web-exchange -->
---

### Acesso à Área de Cliente OVHcloud

**MX Plan:**

- **Ligação direta:** [MX Plan](/links/control-panel/web-mx-plan)
- **Caminho de navegação:** `Web Cloud`{.action} > `MX Plan`{.action} > Selecione o seu serviço MX Plan

**E-mail Pro:**

- **Ligação direta:** [E-mail Pro](/links/control-panel/web-email-pro)
- **Caminho de navegação:** `Web Cloud`{.action} > `E-mail Pro`{.action} > Selecione a sua plataforma

**Exchange:**

- **Ligação direta:** [Exchange](/links/control-panel/web-exchange)
- **Caminho de navegação:** `Web Cloud`{.action} > `Exchange`{.action} > Selecione a sua plataforma

---
<!-- CP-NAV-END:web-exchange -->
<!-- CP-NAV-END:web-email-pro -->
<!-- CP-NAV-END:web-mx-plan -->

## Instruções

> [!primary]
> Em primeiro lugar, verifique se a migração automática é possível através da nossa ferramenta [OVHcloud Mail Migrator](/links/web/omm). Para isso, consulte o guia [Migrar contas de e-mail através do OVHcloud Mail Migrator](/pages/web_cloud/email_and_collaborative_solutions/migrating/migration_omm).

Neste manual, realizámos as operações nos 3 softwares de e-mail mais utilizados, **Outlook**, **Mail** para Mac OS e **Thunderbird**.

As instruções que se seguem dividem - se em duas partes:

- **A exportação**. Isto permite-lhe extrair uma cópia de segurança completa do seu endereço de e-mail e migrá-lo para outro computador, software de mensagens, ou importar para outra conta. Se tiver de migrar elementos de um endereço de e-mail para outro endereço que esteja configurado no mesmo software de correio, é possível copiar/colar ou deslizar/colocar um para o outro. No entanto, recomendamos que utilize o sistema de exportação do software que utiliza.

- **Importação**. Isto permite-lhe aplicar um backup que realizou no seu novo computador ou novo software. Verifique que o ficheiro de backup a importar é compatível com o software de e-mail que utiliza.

### Outlook

Se possui uma conta de e-mail [Exchange OVHcloud](/links/web/emails-hosted-exchange), é possível exportá-la diretamente para o formato PST a partir da Área de Cliente.

Uma vez na página do serviço Exchange, no separador `Contas de e-mail`{.action}, clique no botão `...`{.action} à direita da conta de e-mail a exportar e, a seguir, em `Exportar para o formato PST`{.action}.

![emails](images/manager-export-pst01.png){.thumbnail .w-640}

De seguida, será necessário aguardar o tempo de exportação que pode levar alguns minutos a várias horas, consoante o tamanho da exportação. No final, basta voltar ao botão `Exportar para o formato PST`{.action} para obter um link para descarregar o ficheiro.

![emails](images/manager-export-pst02.png){.thumbnail .w-640}

#### Windows

> [!tabs]
> **Exportar**
>>
>> - Clique em `Ficheiro`{.action} no canto superior esquerdo, depois em `Abrir e exportar`{.action} e, por fim, em `Importar/Exportar`{.action}.
>>
>> ![emails](images/outlook-export-import-win.png){.thumbnail .w-640}
>>
>> - Selecione `Exportar dados para um ficheiro`{.action} e clique em `Seguinte`{.action}.
>>
>> ![emails](images/outlook-export-win02.png){.thumbnail .w-640}
>>
>> - Selecione `Ficheiro de dados Outlook (.pst)`{.action} e clique em `Seguinte`{.action}.
>>
>> ![emails](images/outlook-export-win03.png){.thumbnail .w-640}
>>
>> - Selecione o nome da conta de e-mail a exportar.
>>
>> > [!primary]
>> > Só pode exportar uma conta de cada vez.
>>
>> Selecione bem `Incluir as sub-pastas`{.action} e clique em `Seguinte`{.action}.
>>
>> ![emails](images/outlook-export-win04.png){.thumbnail .w-640}
>>
>> - Escolha a pasta de destino do seu backup e introduza um nome para este ao clicar em `Percorrer`{.action}. Selecione a opção adequada e clique em `Terminar`{.action}.
>>
>> ![emails](images/outlook-export-win05.png){.thumbnail .w-640}
>>
>> A exportação do seu ficheiro começa. Ao criar um ficheiro, ser-lhe-á pedido que defina uma palavra-passe. É facultativo.
>>
>> ![emails](images/outlook-export-win06.png){.thumbnail .w-640}
>>
> **Importar**
>>
>> - Clique em `Ficheiro`{.action} no canto superior esquerdo, depois em `Abrir e exportar`{.action} e, por fim, em `Importar/Exportar`{.action}.
>>
>> ![emails](images/outlook-export-import-win.png){.thumbnail .w-640}
>>
>> - Selecione `Importar a partir de outro programa ou ficheiro`{.action} e clique em `Seguinte`{.action}.
>>
>> ![emails](images/outlook-import-win02.png){.thumbnail .w-640}
>>
>> - Selecione `Ficheiro de dados Outlook (.pst)`{.action} e clique em `Seguinte`{.action}.
>>
>> ![emails](images/outlook-import-win03.png){.thumbnail .w-640}
>>
>> - Escolha o seu ficheiro de backup clicando em `Percorrer`{.action}. Selecione a opção adequada e clique em `Terminar`{.action}.
>>
>> ![emails](images/outlook-import-win04.png){.thumbnail .w-640}
>>
>> - Se tiver definido uma palavra-passe no ficheiro de backup, introduza-a e clique em `OK`{.action}.
>>
>> - Selecione `Importar os elementos na pasta ativa`{.action} e clique em `Terminar`{.action}.
>>
>> A importação do seu backup inicia-se.

#### Mac OS

> [!tabs]
> **Exportar**
>>
>> No separador `Ferramentas`{.action} da janela Outlook, clique em `Exportar`{.action}.
>>
>> ![emails](images/outlook-export-mac01.png){.thumbnail .w-640}
>>
>> Na janela "Exportar para um ficheiro de arquivo (.olm)", selecione os elementos que deseja adicionar ao seu ficheiro de backup e clique em `Continuar`{.action}.
>>
>> ![emails](images/outlook-export-mac02.png){.thumbnail .w-640}
>>
>> De seguida, selecione a pasta de destino para o seu backup e clique em `Registar`{.action}.
>>
>> ![emails](images/outlook-export-mac03.png){.thumbnail .w-640}
>>
>> Aparecerá uma janela de progresso, clique em `Continuar`{.action} no final da operação. O seu ficheiro de backup será encontrado na pasta escolhida.
>>
> **Importar**
>>
>> No separador `Ferramentas`{.action} da janela Outlook, clique em `Importar`{.action}.
>>
>> ![emails](images/outlook-import-mac01.png){.thumbnail .w-640}
>>
>> Escolha o formato de backup que vai importar e depois clique em `Continuar`{.action}.
>>
>> ![emails](images/outlook-import-mac02.png){.thumbnail .w-640}
>>
>> Selecione o seu ficheiro de backup e clique em `Importar`{.action}.
>>
>> ![emails](images/outlook-import-mac03.png){.thumbnail .w-640}
>>
>> Aparecerá uma janela de progresso, clique em `Continuar`{.action} no final da operação. O seu backup é implementado no seu Outlook.

### Mail no Mac OS

> [!tabs]
> **Exportar**
>>
>> Na coluna da esquerda, selecione uma ou várias contas de e-mail. Clique em `Caixa de correio`{.action} no menu horizontal e, a seguir, em `Exportar a caixa de correio`{.action}.
>>
>> ![emails](images/mail-export-mac01.png){.thumbnail .w-640}
>>
>> Selecione a pasta à sua escolha ou crie uma nova pasta e clique em `Escolher`{.action}.
>>
>> ![emails](images/mail-export-mac02.png){.thumbnail .w-640}
>>
>> A sua exportação é apresentada sob a forma de um ficheiro ".mbox".
>>
> **Importar**
>>
>> Clique em `Ficheiro`{.action} no menu horizontal e, a seguir, em `Importar caixas de correio`{.action}.
>>
>> ![emails](images/mail-import-mac01.png){.thumbnail .w-640}
>>
>> Selecione o seu ficheiro de backup no formato ".mbox" e depois clique em `Continuar`{.action}.
>>
>> ![emails](images/mail-import-mac02.png){.thumbnail .w-640}
>>
>> Na coluna da esquerda, os e-mails importados encontram-se numa nova conta de e-mail denominada "Importação". Pode transferir as pastas e mensagens da conta "Importação" para as suas contas de e-mail já configuradas. Uma vez terminadas as transferências, poderá eliminar a conta "Importação".

### Thunderbird

Atualmente, não existe nenhuma funcionalidade nativa para exportar ou importar uma conta de e-mail a partir do Thunderbird. No entanto, é possível guardar um perfil Thunderbird. que contém todas as contas e-mails no seu computador. Vamos ver como guardar um perfil Thunderbird e reintegrá-lo numa nova instância de Thunderbird.

> [!tabs]
> **Exportar**
>>
>> Na janela principal, clique no menu no canto superior direito, depois em `Ajuda`{.action} e, por fim, em `Informações de pronto-socorro`{.action}.
>>
>> ![emails](images/thunderbird_menu.png){.thumbnail .w-640}
>>
>> Surge uma tabela. Identifique a linha `diretório do perfil`{.action} e clique no botão `Abrir a pasta correspondente`{.action}.
>>
>> ![emails](images/thunderbird_open_folder.png){.thumbnail .w-640}
>>
>> Será então direcionado para a pasta do perfil. Suba um nível na árvore de pastas.
>>
>> ![emails](images/thunderbird_profil_folder1.png){.thumbnail .w-640}
>>
>> Copie a pasta do perfil através de um clique direito e cole-a na pasta ou no suporte à sua escolha.
>>
>> ![emails](images/thunderbird_profil_folder2.png){.thumbnail .w-640}
>>
> **Importar**
>>
>> Em vez de uma importação, tratar-se-á aqui de um carregamento de perfil.
>> Se as contas de e-mail já tiverem sido configuradas na instância Thunderbird de destino, estarão presentes num perfil A.
>> Quando Thunderbird carregar um novo perfil (perfil B), apenas poderá carregar **os** elementos desse perfil B.
>> Assim, recomendamos que introduza primeiro o novo perfil (perfil B) e que configure as contas de e-mail do perfil A.
>>
>> Primeiro, deve iniciar o Thunderbird através do gestor de perfis.
>>
>> - No Windows, vá ao menu `Iniciar`{.action} e depois ao programa `Executar`{.action}. Neste último, introduza `thunderbird.exe -ProfileManager` e clique em `OK`{.action}.
>>
>> ![emails](images/thunderbird-run-profil.png){.thumbnail .w-640}
>>
>> - No Mac OS, lance a aplicação Terminal e deslize-deponha a sua aplicação Thunderbird na janela do Terminal, adicionando à linha `/Contents/MacOS/thunderbird-bin -ProfileManager`. Introduza a tecla `Entrada`{.action} (⏎) para validar.
>>
>> ![emails](images/thunderbird-terminal-profil.png){.thumbnail .w-640}
>>
>> A janela seguinte apresenta os perfis existentes. Clique em `Criar um perfil`{.action} e depois em `Seguinte`{.action} quando a mensagem de informação for apresentada.
>>
>> ![emails](images/thunderbird-profil-create01.png){.thumbnail .w-640}
>>
>> Na etapa seguinte, dê um nome ao seu perfil e identifique a pasta na qual será criado o perfil, abaixo da frase "Os seus parâmetros de utilizador, preferências e todos os seus dados pessoais serão registados em":
>>
>> ![emails](images/thunderbird-profil-create02.png){.thumbnail .w-640}
>>
>> > [!primary]
>> > Sugerimos que copie o backup do seu perfil Thunderbird para a pasta dos perfis do Thunderbird.
>>
>> Clique em `Escolher uma pasta...`{.action} para selecionar a pasta que contém o seu backup. Clique em `Terminar`{.action} para criar o perfil com o seu backup.
>>
>> Poderá encontrar a janela de escolha do seu perfil com o seu novo perfil selecionado. Clique em `Iniciar Thunderbird`{.action}, Thunderbird será lançado com todos os elementos que tinha no seu backup.

### Verificar a importação para o novo endereço de e-mail

Quando tiver feito o necessário seguindo as instruções de importação, verifique se os seus elementos estão presentes no servidor.

Ligue-se ao [webmail](/links/web/email).

Na caixa de entrada e na coluna da esquerda, irá encontrar as pastas e os e-mails do seu endereço de e-mail guardado.

> [!primary]
> Deve ter em conta o tempo de carregamento dos elementos presentes no seu computador para o servidor de e-mail. Esta operação pode demorar alguns minutos ou várias horas em função da sua ligação à Internet.

## Quer saber mais?

[Migrar contas de e-mail através do OVHcloud Mail Migrator](/pages/web_cloud/email_and_collaborative_solutions/migrating/migration_omm)

Fale com nossa [comunidade de utilizadores](/links/community).
