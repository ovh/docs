---
title: "Ativar e utilizar o modo rescue"
excerpt: "Descubra como utilizar o modo rescue OVHcloud para solucionar problemas com o seu servidor dedicado"
updated: 2024-05-21
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

## Objetivo

O Modo Rescue é uma ferramenta fornecida pela OVHcloud que lhe permite iniciar num sistema operativo temporário com o objetivo de diagnosticar e resolver problemas no seu servidor.

O modo rescue é geralmente adaptado às seguintes tarefas:

- [Reinicialização da palavra-passe do utilizador](/pages/bare_metal_cloud/dedicated_servers/replacing-user-password)
- [Diagnóstico dos problemas de rede](/pages/bare_metal_cloud/dedicated_servers/hardware-diagnose)
- Reparação de um sistema operativo defeituoso
- Correção de uma configuração incorreta de uma firewall de software
- [Teste das performances dos discos](/pages/bare_metal_cloud/dedicated_servers/hardware-diagnose)
- [Teste do processador e da memória RAM](/pages/bare_metal_cloud/dedicated_servers/hardware-diagnose)

> [!warning]
>
> Certifique-se de que efetua um backup dos seus dados se ainda não dispõe de backups recentes.
>
> Se tiver serviços em produção no seu servidor, o modo rescue interrompe-os-á enquanto a máquina não for reiniciada em modo normal.
> 

**Este manual explica como reiniciar um servidor em modo rescue e montar partições.**

## Requisitos

- Ter um [servidor dedicado](/links/bare-metal/bare-metal).
- Ter acesso à [Área de Cliente OVHcloud](/links/manager).

## Instruções

O modo rescue só pode ser ativado a partir da [Área de Cliente OVHcloud](/links/manager){.external}. Selecione o seu servidor indo à secção `Bare Metal Cloud`{.action} e depois `Servidores dedicados`{.action}.

Procure "Boot" na zona **Informações gerais** e clique em `...`{.action} e depois em `Alterar`{.action}.

![Alterar o modo de arranque](images/rescue-mode-001.png){.thumbnail}

Na página seguinte, seleccionar **Fazer boot em modo rescue**.

### Rescue Linux

Se o seu servidor dispõe de um sistema operativo Linux, selecione `rescue-customer`{.action} no menu pendente.

Nesta situação, são-lhe propostos dois modos de autenticação:

- Autenticação com palavra-passe
- Autenticação com chave SSH

#### Autenticação com chave SSH

> [!primary]
>
> Se optar pela autenticação com chave SSH, certifique-se de que a sua chave SSH pública respeita um dos formatos entre `RSA`, `ECDSA` ou `ED25519`.
>

Selecione a opção "Autenticação com chave SSH" introduza a sua chave SSH **pública** na caixa de texto dedicada.

![Autenticação com chave SSH](images/rescue-mode-08.png){.thumbnail}

#### Autenticação com palavra-passe

Selecione "Autenticação com palavra-passe".<br>
Os identificadores de ligação serão enviados por predefinição para o endereço de e-mail principal da sua conta OVHcloud. Tem a possibilidade de introduzir um endereço diferente no campo "Receber os dados de acesso ao modo para o e-mail".

![Autenticação por palavra-passe Linux](images/rescue-mode-09.png){.thumbnail}

### Rescue Windows

Para os servidores com sistema operativo Windows, consulte o [guia dedicado](/pages/bare_metal_cloud/dedicated_servers/rescue-customer-windows).

A opção `WinRescue`{.action} também pode ser proposta em função do servidor. Para mais informações sobre este modo, consulte [secção do manual](#windowsrescue). Tenha em conta que apenas a autenticação por palavra-passe está disponível com este tipo de modo rescue.

Especifique outro endereço de e-mail se não pretender **não** que os identificadores de ligação sejam enviados para o endereço principal da sua conta OVHcloud.

![Autenticação da palavra-passe do Windows](images/rescue-mode-10.png){.thumbnail}

### Passos finais

Clique em `Seguinte`{.action} e `Validar`{.action}.

![Modo rescue-customer](images/rescue-mode-08.png){.thumbnail}

Concluída a alteração, clique em `...`{.action} à direita do "Estado" na zona **Estado dos serviços**.
<br>Clique em `Reiniciar`{.action} e o servidor será reiniciado em modo rescue. Esta operação pode demorar alguns minutos.
<br>Pode verificar o progresso sob o separador `Tarefas`{.action}. Receberá um e-mail com os dados de acesso (incluindo a palavra-passe) do utilizador "root" do modo rescue.

![Reiniciar o servidor](images/rescue-mode-02.png){.thumbnail}

Quando tiver terminado as suas tarefas em modo rescue, não se esqueça de redefinir o netboot no `Fazer boot do disco rígido`{.action} e reinicie o seu servidor.

### Linux

#### Utilização do modo rescue (SSH)

> [!primary]
> 
> Se utilizar uma chave SSH (também ativa na sua Área de Cliente OVHcloud), não receberá nenhuma palavra-passe. Uma vez o servidor em modo rescue, poderá ligar-se diretamente com a sua chave SSH.
>

Após o reboot do seu servidor, receberá um e-mail com os dados de acesso em modo rescue. Este e-mail também está disponível na [Área de Cliente OVHcloud](/links/manager). Clique no nome associado ao seu ID de cliente no canto superior direito da sua Área de Cliente e, a seguir, em `E-mails de serviço`{.action}.

De seguida, deverá aceder ao servidor através de uma linha de comandos ou através de uma ferramenta [SSH](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction), utilizando a palavra-passe root gerada para o modo rescue.

Por exemplo:

```bash
ssh root@ns3956771.ip-169-254-10.eu
root@ns3956771.ip-169-254-10.eu's password:
```

> [!warning]
>
> O seu cliente SSH poderá bloquear a ligação inicialmente devido a uma incompatibilidade da impressão digital ECDSA. Isto é normal porque o modo rescue utiliza o seu próprio servidor SSH temporário.
>
> Uma forma de contornar este problema é "comentar" impressão digital do seu servidor adicionando um `#` na frente da linha no ficheiro `known_hosts`. Não se esqueça de cancelar esta alteração antes de passar o netboot de volta ao modo "normal".<br>Pode também eliminar a linha do ficheiro. O cliente SSH adicionará uma nova entrada digital ao servidor quando a ligação for estabelecida. Se precisar de mais instruções, consulte o guia [Introdução ao SSH](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction#login).
>

#### Montagem das suas partições

A menos que configure os discos do servidor de uma forma que exija que sejam desligados (*unmounted*), deve montar primeiro a partição do sistema.

Para montar as partições, utilize o comando `mount` em SSH. Deverá listar as suas partições com antecedência para poder recuperar o nome da partição que pretende montar. Aqui tem alguns exemplos de códigos:

```bash
fdisk -l
```

```console
Disk /dev/hda 40.0 GB, 40020664320 bytes
255 heads, 63 sectors/track, 4865 cylinders
Units = cylinders of 16065 * 512 = 8225280 bytes

Device Boot Start End Blocks Id System
/dev/hda1 * 1 1305 10482381 83 Linux
/dev/hda2 1306 4800 28073587+ 83 Linux
/dev/hda3 4801 4865 522112+ 82 Linux swap / Solaris

Disk /dev/sda 8254 MB, 8254390272 bytes
16 heads, 32 sectors/track, 31488 cylinders
Units = cylinders of 512 * 512 = 262144 bytes

Device Boot Start End Blocks Id System
/dev/sda1 1 31488 8060912 c W95 FAT32 (LBA)
```

Depois de identificar o nome da partição que pretende montar, utilize o seguinte comando:

```bash
mount /dev/hda1 /mnt/
```

> [!primary]
>
> A sua partição vai ser montada. Poderá então efetuar operações no sistema de ficheiros.
> 
> Se o seu servidor dispõe de uma configuração RAID de software, deve montar o seu volume RAID (geralmente `/dev/mdX`).
>

Para sair do modo rescue, redefina o modo de arranque em `Fazer boot no disco rígido`{.action} na [Área de Cliente OVHcloud](/links/manager) e reinicie o servidor em linha de comandos.

#### VMware - Montagem de um datastore

Pode montar um datastore VMware da mesma forma que descrito no passo anterior.

Liste as suas partições para recuperar o nome da partição do datastore:

```bash
fdisk -l
```

Monte a partição com o seguinte comando, substituindo `sdbX` pelo valor identificado no passo anterior:

```bash
vmfs-fuse /dev/sdbX /mnt
```

Se possui datastores `VMFS 6`, aceda à pasta `sbin` e crie a pasta de montagem:

```bash
cd /usr/local/sbin/
mkdir /mnt/datastore
```

Liste as suas partições para recuperar o nome da partição do datastore:

```bash
fdisk -l
```

Monte a partição com o seguinte comando, substituindo `sdbX` pelo valor identificado no passo anterior:

```bash
vmfs6-fuse /dev/sdbX /mnt/datastore/
```

Para sair do modo rescue, redefina o modo de arranque em `Fazer boot no disco rígido`{.action} na [Área de Cliente OVHcloud](/links/manager) e reinicie o servidor em linha de comandos.

### Windows <a name="windowsrescue"></a>

Para os servidores com sistema operativo Windows, consulte o [guia dedicado](/pages/bare_metal_cloud/dedicated_servers/rescue-customer-windows).

#### Utilização das ferramentas WinRescue (obsoleta)

Após o reboot do seu servidor, receberá um e-mail com os dados de acesso em modo rescue. Este e-mail também está disponível na [Área de Cliente OVHcloud](/links/manager). Clique no nome associado ao seu ID de cliente no canto superior direito da sua Área de Cliente e, a seguir, em `E-mails de serviço`{.action}.

Para utilizar o modo rescue proposto pelo Windows, deve descarregar e instalar uma consola VNC ou utilizar o módulo `IPMI` na sua [Área de Cliente OVHcloud](/links/manager){.external}.

![Windows WinRescue](images/rescue-mode-07.png){.thumbnail}

Já estão instaladas neste modo as seguintes ferramentas:

|Ferramenta|Descrição|
|---|---|
|Mozilla ULight|Um browser.|
|Memory Diagnostics Tool|Uma ferramenta Windows que permite testar a memória RAM.|
|Explorer_Q-Dir|Um explorador de ficheiros.|
|GSmartControl|Uma ferramenta de verificação dos discos rígidos e dos discos rígidos SSD.|
|PhotoRec|Uma ferramenta de recuperação de ficheiros potencialmente perdidos num disco.|
|SilverSHielD|Um servidor SSH2 e SFTP.|
|System Recovery|Uma ferramenta Windows de restauro e reparação do sistema.|
|TestDisk|Uma aplicação eficaz de recuperação de dados. Permite-lhe recuperar e modificar partições danificadas, encontrar partições perdidas, corrigir um setor de arranque ou até reconstruir um MBR com defeito.|
|FileZilla|Um cliente FTP open source. Trata dos protocolos SSH e SSL, e dispõe de uma interface arrastar-soltar clara e intuitiva. Pode ser utilizado para transferir os seus dados para um servidor FTP, como o backup FTP incluído na maior parte dos modelos de servidores da OVHcloud.|
|7-ZIP|Utilitário de compressão e de arquivamento de ficheiros compatível com os seguintes formatos: ARJ, CAB, CHM, CPIO, CramFS, DEB, DMG, FAT, HFS, ISO, LZH, LZMA, MBR, MSI, NSIS, NTFS, RAR, RPM, SquashFS, UDF, VHD, WIM, XAR e Z. Poderá também criar os seus próprios arquivos nos seguintes formatos: BZIP2, GZIP, TAR, WIM, XZ, Z e ZIP.|

## Quer saber mais?

[Alterar a palavra-passe administrador num servidor dedicado Windows](/pages/bare_metal_cloud/dedicated_servers/changing-admin-password-on-windows)

Fale com a nossa comunidade de utilizadores em <https://community.ovh.com/en/>.
