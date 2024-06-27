---
title: "Como redefinir a palavra-passe de administrador com o Rescue-Customer-Windows"
excerpt: "Como redefinir a palavra-passe de administrador com o Rescue-Customer-Windows"
updated: 2024-06-26
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

## Objetivo

Este manual explica como reinicializar a palavra-passe "Administrator" graças ao **Windows customer rescue system**.

## Requisitos

- O Microsoft Windows deve estar instalado no seu [servidor dedicado](/links/bare-metal/bare-metal)
- Ter pelo menos 16GB de RAM no seu servidor
- Ter acesso a [Área de Cliente OVHcloud](/links/manager)

> [!warning]
>
> Este manual não é compatível com o modo "WinPE Rescue".
> Consulte [este manual](/pages/bare_metal_cloud/dedicated_servers/changing-admin-password-on-windows) se utilizar o modo `WinPe Rescue`.
>

## Instruções

### Etapa 1 - Reiniciar o servidor em modo rescue <a name="step1"></a>

O sistema deve ser iniciado no modo **Windows customer rescue system** antes que a palavra-passe possa ser alterada.

Para mais informações, consulte [manual sobre o modo rescue](/pages/bare_metal_cloud/dedicated_servers/rescue-customer-windows).

### Etapa 2 - Apagar a palavra-passe atual <a name="step2"></a>

Ligue-se ao servidor com a « Ligação ao Ambiente de Trabalho Remoto » (RDP) e as informações de identificação enviadas por correio eletrónico.

Repare que o nome de utilizador é "Administrator".

- Se o seu servidor utiliza um RAID por software no disco do sistema, terá de o importar primeiro antes de poder reinicializar a palavra-passe: siga as instruções da [secção A](#sectionA) deste manual.
- Se o seu servidor não utiliza RAID por software no disco do sistema, pode repor diretamente a palavra-passe seguindo as instruções da [secção B](#sectionB) deste manual.

#### A - Importar o seu disco local Windows <a name="sectionA"></a>

##### 1. Aceder à gestão dos discos

Clique com o botão direito do rato no menu `Iniciar`{.action} e selecione `Disk Management`{.action}.

![disk_manager_menu](images/disk_manager_menu.png){.thumbnail}

Já pode visualizar os discos e volumes do servidor.

![disk_manager_window](images/disk_manager_window1.png){.thumbnail}

O disco que contém Windows no seu servidor é provavelmente o *disk 1*, pelo que deve importá-lo para poder aceder.

Tenha em conta que se o seu servidor tiver vários grupos de discos, o número do disco que contém o Windows pode ser diferente e poderá ser necessário importar vários discos antes de encontrar o disco.

Você também deve importar o segundo disco para importar corretamente o volume de RAID de software.

#### 2. Importar os discos

Clique com o botão direito do rato em *Disk 1* e selecione `Online`{.action}.

![disk_import_disk1](images/disk_manager_disk1on.png){.thumbnail}

Faça o mesmo com o segundo disco (Disk 2) para importar corretamente o volume de RAID de software.

Clique com o botão direito do rato em *Disk 2* e selecione `Online`{.action}.

![disk_import_disk2](images/disk_manager_disk2on.png){.thumbnail}

Os discos são agora considerados como *Dynamic* e *Foreign*.

Clique com o botão direito do rato em *Disk 1* e selecione `Import Foreign Disks`{.action}.

![disk_import_menu](images/disk_manager_diskimport.png){.thumbnail}

Clique duas vezes em `OK`{.action}.

![disk_import1](images/disk_import1.png){.thumbnail}

![disk_import2](images/disk_import2.png){.thumbnail}

O disco local está agora acessível e o disco Windows corresponde ao volume "(E:)" (que se estende por dois discos configurados em RAID por software do tipo Mirrored volume).

![disk_import_sync](images/disk_import_sync.png){.thumbnail}

__Note__: Neste exemplo, o estado do volume é "Resynching", pois o servidor foi reiniciado em modo rescue. É um estado normal que não é causado pelo próprio rescue.
Isto não afetará os dados do volume e a ressincronização continuará quando o servidor for reiniciado no sistema instalado.

> [!warning]
>
> Você deve usar o caminho para sua pasta local do Windows (aqui é E:\Windows) quando você navega para encontrar o arquivo de configuração _SAM_ na próxima secção.

Para repor a sua palavra-passe, siga as instruções apresentadas na secção seguinte.

#### B - Reinicializar a palavra-passe <a name="sectionB"></a>

Para repor uma palavra-passe, é necessário o utilitário NTPWEdit.

Uma vez ligado através do Ambiente de Trabalho Remoto (RDP), abra o navegador Internet (MS Edge) e transfira o utilitário a partir do [site oficial](http://www.cdslow.org.ru/files/ntpwedit/ntpwed07.zip).

Navegue até a pasta onde está o arquivo ZIP baixado e extraia o conteúdo.

De seguida, abra o executável `ntpwedit64.exe` para iniciar a aplicação.

Nesta interface, pode manipular o ficheiro *SAM* para eliminar a palavra-passe do utilizador admin.

A localização do ficheiro *SAM* no sistema requer que navegue até à pasta local do Windows.

Clique no botão `...`{.action} para navegar na unidade na qual está localizada a pasta local do Windows.

Geralmente, é o leitor `Windows (E:\)`

![ntpwedit1](images/ntpwedit_1.png){.thumbnail}

Navegue até `E:\WINDOWS\SYSTEM32\CONFIG\`.

Selecione e abra o ficheiro *SAM* para ver as contas de utilizadores selecionando `Open`{.action}.

![ntpwedit_sam](images/SAM.png)

Selecione a conta de utilizador « admin » e depois clique em `Change password`{.action}.

![ntpwedit2](images/ntpwedit_2.png){.thumbnail}

Na janela que aparece, deixe os campos em branco e clique em `OK`{.action}. Termine clicando em `Registar as modificações`{.action} e, a seguir, em `Sair`{.action}.

Nesse caso, o servidor deverá ser reiniciado no sistema operativo normal.

### Etapa 3 - Reiniciar o servidor <a name="step3"></a>

Comece por substituir o netboot por "Fazer boot" no disco rígido`{.action} na Área de Cliente OVHcloud (ver [Etapa 1](#step1)).

A seguir, reinicie o servidor a partir da Área de Cliente. Clique no botão `...`{.action} junto da secção « Estado dos serviços » e selecione `Reiniciar`{.action}.

![reboot](/pages/assets/screens/control_panel/bare-metal-dedicated/cp_dedicated_restart.png){.thumbnail}

### Etapa 4 - Definir uma nova palavra-passe (IPMI) <a name="step4"></a>

Na [Área de Cliente OVHcloud](/links/manager), aceda ao separador `IPMI`{.action} para iniciar uma sessão KVM.

![adminpw3](images/adminpw3.png){.thumbnail}

#### Para uma versão recente do Windows

Uma vez ligado ao seu servidor, clique no ícone do menu `Iniciar`{.action}, no canto inferior esquerdo.

Comece a digitar `opções de ligação` e clique em `Opções de ligação`{.action} quando isso aparecer no menu.

![adminpw7](images/adminpw7.png){.thumbnail}

De seguida, na secção "Palavra-passe", clique no botão `Adicionar`{.action} para definir a nova palavra-passe.

![adminpw8](images/adminpw8.png){.thumbnail}

#### Para uma versão anterior do Windows

Uma janela de linha de comandos (cmd) deve abrir-se quando a sessão KVM é estabelecida.

Defina a palavra-passe do utilizador atual (Administrator):

```bash
net user Administrator *
```

![adminpw9](images/adminpw9.png){.thumbnail}

Recomendamos que utilize o teclado virtual quando introduzir palavras-passe nesta interface.

## Quer saber mais?

Fale com nossa [comunidade de utilizadores](/links/community).
