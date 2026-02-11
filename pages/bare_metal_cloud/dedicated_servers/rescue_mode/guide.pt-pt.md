---
title: "Ativar e utilizar o modo rescue"
excerpt: "Descubra como utilizar o modo customer rescue OVHcloud para solucionar problemas com o seu servidor dedicado"
updated: 2026-01-09
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

**Este guia explica como reiniciar um servidor em modo rescue e como utilizá-lo.**

## Requisitos

- Ter um [servidor dedicado](/links/bare-metal/bare-metal).
- Ter acesso à [Área de Cliente OVHcloud](/links/manager).

## Instruções

Para utilizar o modo rescue, deve modificar o parâmetro `Netboot` do servidor. Em seguida, o servidor deverá ser reiniciado.

Aceda à [Área de Cliente OVHcloud](/links/manager), abra a secção `Bare Metal Cloud`{.action} e depois `Servidores dedicados`{.action}.

Clique no nome do seu servidor para abrir o separador `Informações gerais`{.action}.

### Ativação do modo rescue

Na casa **Informações gerais**, clique no botão `...`{.action} ao lado de `Boot`. Clique em `Alterar`{.action} no menu contextual.

![Alterar o modo de arranque](images/rescue-mode-001.png){.thumbnail}

<a name="netboot"></a>

#### 1: Opções do modo rescue

Na página **Alterar o netboot**, selecione `Fazer boot em modo rescue`{.action}.

![Alterar o modo de arranque](images/rescue-mode-002.png){.thumbnail}

As opções disponíveis para o modo rescue dependem do tipo de servidor e do **sistema operativo* instalado.

- Customer rescue system (sempre disponível)
- Windows customer rescue system (disponível para servidores Windows)
- [iPXE](https://ipxe.org) / ipxe-shell (ferramenta open source externa, sempre disponível)
- [Legacy Windows rescue system](#windows_legacy) (sistema WinPE desaconselhado, apenas relevante se o seu servidor não responde às exigências do modo rescue atual para Windows)

> [!primary]
>
> As instruções seguintes aplicam-se apenas ao **customer rescue system** que é a opção mais frequentemente utilizada.
>
> Consulte o nosso [guia dedicado para uma explicação detalhada sobre a utilização do **modo rescue para Windows**](/pages/bare_metal_cloud/dedicated_servers/rescue-customer-windows).

Selecione `Customer rescue system`{.action} no menu pendente.

#### 2: Opções de autenticação

A escolha seguinte determina o método de autenticação para a ligação SSH ao sistema em modo rescue. Trata-se, principalmente, de uma questão de conveniência, uma vez que cada sessão em modo rescue é suposta ser transitória e será eliminada assim que reiniciar o servidor a partir do seu disco.

- **Autenticação com palavra-passe**: os dados de acesso serão enviados por e-mail.
- **Autenticação com chave**: pode utilizar uma chave pública de autenticação da sua escolha (formatos compatíveis: `RSA`, `ECDSA`, `ED25519`).

Clique no separador do método de ligação:

> [!tabs]
> Autenticação por palavra-passe
>>
>> Clique em `Autenticação por palavra-passe`{.action}.
>>
>>![Auth method](images/rescue-mode-003.png){.thumbnail width="700"}
>>
>> O e-mail de notificação do modo rescue, bem como os seus dados de acesso, serão enviados para o endereço de e-mail de contacto da sua conta OVHcloud. Para utilizar outro endereço de e-mail, introduza-o no campo `Receber os dados de acesso ao modo para o e-mail:`.
>>
>> Clique em `Seguinte`{.action}.
>>
> Autenticação com chave
>>
>> Clique em `Autenticação com chave SSH`{.action}.
>>
>>![Auth method](images/rescue-mode-004.png){.thumbnail width="700"}
>>
>> Tem duas possibilidades:
>>
>> - Selecione uma chave no menu suspenso. É necessário que já tenha pelo menos uma [chave pública armazenada na sua Área de Cliente OVHcloud](/pages/bare_metal_cloud/dedicated_servers/import-keys-control-panel).
>> - Copie manualmente a cadeia de chave pública e cole-a no campo `A sua chave SSH pública`.
>>
>> To find out more about this topic, consult our guides:
>>
>> - [Como criar e utilizar chaves para a autenticação SSH](/pages/bare_metal_cloud/dedicated_servers/creating-ssh-keys-dedicated)
>> - [Como criar e utilizar chaves para a autenticação SSH com PuTTY](/pages/web_cloud/web_hosting/ssh_using_putty_on_windows)
>>
>> > [!success]
>> > Pode adicionar uma chave pública por predefinição para o modo rescue de um servidor através da API OVHcloud. Para mais informações, consulte [o guia abaixo](#rescuessh).
>>
>> Clique em `Seguinte`{.action}.
>>

#### 3: Últimos passos para ativar o modo rescue

Na etapa **Resumo**, clique em `Validar`{.action}.

![Summary](images/rescue-mode-005.png){.thumbnail}

Já deverá ter uma notificação relativa ao parâmetro `Netboot` no separador `Informações gerais`{.action}.

![Netboot](images/rescue-mode-006.png){.thumbnail}

O último passo consiste em reiniciar o servidor. Clique no botão `...`{.action} ao lado de "Estado" na zona **Estado dos serviços** e, a seguir, clique em `Reiniciar`{.action}. Clique em `Validar`{.action} na janela pop-up.

![Reboot](/pages/assets/screens/control_panel/product-selection/bare-metal-cloud/dedicated-servers/general-information/rebooting-your-server.png){.thumbnail}

Este *hard reboot* demorará alguns minutos a terminar. Pode verificar o estado atual no separador `Tarefas`{.action}.

> [!primary]
>
> Depois de concluir as suas ações em modo rescue, não se esqueça de redefinir o parâmetro `Netboot` em `Fazer boot no disco rígido`{.action} antes de reiniciar o servidor.

### Aceder ao servidor em modo rescue através de SSH

Depois de receber um e-mail a informá-lo da ativação do modo rescue, poderá aceder ao sistema do modo rescue e ao seu servidor.  
Este e-mail também estará disponível no seu [Área de Cliente OVHcloud](/links/manager) assim que for enviado. Clique no seu ID de cliente no canto superior direito e, em seguida, selecione `E-mails de serviço`{.action}.

> [!primary]
>
> O seu cliente SSH bloqueará normalmente a ligação no início devido a uma incompatibilidade da impressão digital ECDSA. Isto é normal porque o modo rescue utiliza o seu próprio servidor SSH temporário. Para resolver esta situação, deverá editar o ficheiro `known_hosts` da sua pasta local `.ssh`.  
> Existem duas possibilidades ao seu dispor:
>
> - **Eliminar impressão digital do ficheiro.** O cliente SSH adicionará uma nova entrada digital ao servidor quando deixar de utilizar o modo rescue. Para obter uma explicação detalhada, consulte "Login e fingerprint" no nosso [guia de introdução ao SSH](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction).
>
> - **Desativar temporariamente a impressão digital.** Abra o ficheiro `known_hosts` com um editor de texto e identifique a cadeia de impressão digital do seu servidor pelo seu endereço IP. Adicione o caractere `#` no início da linha. Portanto, esta linha é agora um "comentário" e será ignorada pelos aplicativos que estão lendo o arquivo. Não se esqueça de anular esta alteração antes de passar o `Netboot` no modo "normal".
>

Clique no separador do método de ligação selecionado:

> [!tabs]
> Autenticação por palavra-passe
>>
>> Abra a aplicação de linha de comandos no seu dispositivo local e introduza este comando:
>>
>> ```bash
>> ssh root@SERVER_IP
>> ```
>>
>> Exemplo:
>>
>> ```bash
>> ssh root@203.0.113.100
>> ```
>>
>> Introduza a palavra-passe do modo rescue temporário quando tal lhe for solicitado.
>>
>> ```console
>> root@ns9356771.ip-203-0-113.eu's password:
>> root@rescue-customer-eu (ns9356771.ip-203-0-113.eu) ~ #
>> ```
>>
>> Encontre mais informações sobre as ligações SSH no nosso [guia de introdução ao SSH](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction).  
>> Também pode utilizar qualquer ferramenta de ligação SSH, como [PuTTY](/pages/web_cloud/web_hosting/ssh_using_putty_on_windows).
>>
> Autenticação com chave
>>
>> Abra a aplicação de linha de comandos no seu dispositivo local e introduza este comando:
>>
>> ```bash
>> ssh -i USER_FOLDER/.ssh/KEY_FILE_NAME root@SERVER_IP
>> ```
>>
>> Exemplo:
>>
>> ```bash
>> ssh -i ~/.ssh/MyAuthKey root@203.0.113.100
>> ```
>>
>> Se solicitado, insira sua palavra-passe para descriptografar o arquivo de chave privada.
>>
>> Para saber mais sobre este assumpto, consulte os nossos manuais:
>>
>> - [Como criar e utilizar chaves para a autenticação SSH](/pages/bare_metal_cloud/dedicated_servers/creating-ssh-keys-dedicated)
>> - [Como criar e utilizar chaves para a autenticação SSH com PuTTY](/pages/web_cloud/web_hosting/ssh_using_putty_on_windows)
>>

### A montagem das partições para aceder aos seus ficheiros

A menos que pretenda configurar os discos do servidor de uma forma que exija que sejam desligados (*unmounted*), deve primeiro **montar a partição do sistema** para aceder aos seus dados a partir do modo rescue.

Em primeiro lugar, liste todas as partições para recuperar o nome da partição que você precisa montar:

```bash
lsblk
```

Exemplos de saídas:

```console
NAME      MAJ:MIN RM  SIZE RO TYPE  MOUNTPOINT
sda         8:0    0  1.8T  0 disk
├─sda1      8:1    0  511M  0 part
├─sda2      8:2    0  1.8T  0 part
│ └─md127   9:127  0  1.8T  0 raid1
├─sda3      8:3    0  512M  0 part
└─sda4      8:4    0    2M  0 part
sdb         8:16   0  1.8T  0 disk
├─sdb1      8:17   0  511M  0 part
├─sdb2      8:18   0  1.8T  0 part
│ └─md127   9:127  0  1.8T  0 raid1
└─sdb3      8:19   0  512M  0 part
```

```console
NAME        MAJ:MIN RM   SIZE RO TYPE  MOUNTPOINT
nvme1n1     259:0    0 894.3G  0 disk
├─nvme1n1p1 259:2    0   511M  0 part
├─nvme1n1p2 259:3    0     1G  0 part
│ └─md2       9:2    0  1022M  0 raid1
├─nvme1n1p3 259:4    0 892.3G  0 part
│ └─md3       9:3    0 892.1G  0 raid1
└─nvme1n1p4 259:5    0   512M  0 part
nvme0n1     259:1    0 894.3G  0 disk
├─nvme0n1p1 259:6    0   511M  0 part
├─nvme0n1p2 259:7    0     1G  0 part
│ └─md2       9:2    0  1022M  0 raid1
├─nvme0n1p3 259:8    0 892.3G  0 part
│ └─md3       9:3    0 892.1G  0 raid1
├─nvme0n1p4 259:9    0   512M  0 part
└─nvme0n1p5 259:10   0     2M  0 part
```

De seguida, monte a partição apropriada de acordo com:

```bash
mount /dev/PARTITION_NAME /MOUNT_POINT/
```

A partição a montar deve ser facilmente identificável por **SIZE** indicada no quadro (`sda2` no primeiro exemplo, `nvme1n1p3` no segundo). No entanto, numa [configuração RAID software](/pages/bare_metal_cloud/dedicated_servers/raid_soft) (um `raid1` por predefinição nos exemplos), deverá utilizar o identificador do volume RAID (`mdX`).  
Utilizando o nome da pasta `mnt` como ponto de montagem, para o primeiro exemplo, o comando `mount` seria o seguinte:

```bash
mount /dev/md127 /mnt/
```

Encomenda a introduzir para o segundo exemplo:

```bash
mount /dev/md3 /mnt/
```

> [!warning]
> Os exemplos acima ilustram simplesmente os passos necessários baseados numa configuração de servidor típica. As informações do painel de saída dependem do hardware do servidor e do seu esquema de partição. Em caso de dúvida, consulte a documentação do sistema operativo.
>
> Se necessitar de assistência profissional para a administração do seu servidor, consulte a secção [Quer saber mais](#gofurther) deste guia.

Para obter informações mais técnicas sobre os discos e as partições do servidor, utilize o comando:

```bash
fdisk -l
```

Algumas tarefas podem requerer a desassociação de discos ou de partições. Para isso, utilize o comando *unmount* :

```bash
umount /mnt
```

#### VMware - Montar um datastore

/// details | Expanda esta secção

Pode montar um datastore VMware da mesma forma que descrito no passo anterior.

Liste as suas partições para recuperar o nome da partição do datastore:

```bash
lsblk
```

```bash
fdisk -l
```

Monte a partição com o seguinte comando, substituindo `sdbX` pelo valor identificado no passo anterior:

```bash
vmfs-fuse /dev/sdbX /mnt
```

Se tiver datastores `VMFS 6`, aceda à pasta `sbin` e crie a pasta de montagem:

```bash
cd /usr/local/sbin/
mkdir /mnt/datastore
```

Liste as suas partições para recuperar o nome da partição do datastore:


```bash
lsblk
```

```bash
fdisk -l
```

Monte a partição com o seguinte comando, substituindo `sdbX` pelo valor identificado no passo anterior:

```bash
vmfs6-fuse /dev/sdbX /mnt/datastore/
```

///

Uma vez concluída a montagem, poderá aceder aos seus ficheiros e efetuar tarefas de resolução de problemas no interior da pasta que definiu como ponto de montagem. Exemplo:

```bash
cd /mnt
```

Algumas operações no sistema de ficheiros (como a configuração das contas de utilizadores) necessitarão de uma etapa suplementar. Crie um ambiente temporário `chroot` no ponto de montagem com este comando:

```bash
chroot /mnt/
```

Agora já poderá aplicar todas as modificações necessárias no seu sistema, por exemplo, para [recuperar o acesso ao servidor](#gofurther).

### Configuração da agregação de ligações no modo rescue

A agregação de ligações (LACP) é muito vantajosa, pois permite aumentar a largura de banda total do seu servidor, ao mesmo tempo que oferece redundância de rede em caso de falha de uma interface de rede.

Embora o modo rescue seja baseado no sistema operativo Debian 12, a sua configuração de rede baseia-se no utilitário `ifupdown`, em vez do `Netplan`.

Se tiver um servidor que suporta agregação de links e deseja configurá-la no modo rescue, consulte [este guia](/pages/bare_metal_cloud/dedicated_servers/ola-enable-debian9).

### Saída do modo rescue

Se aplicável, volte à shell de ligação do modo rescue introduzindo:


```bash
exit
```

Em [Área de Cliente OVHcloud](/links/manager), [altere o modo de arranque](#netboot) novamente em `Fazer boot no disco rígido`{.action} e valide.

![Netboot Disk](images/rescue-mode-007.png){.thumbnail}

Agora pode reiniciar o servidor a partir da shell do modo rescue:

```bash
reboot
```

Pode igualmente utilizar a função `Reiniciar`{.action} na sua Área de Cliente.

<a name="rescuessh"></a>

### Como adicionar uma chave de autenticação predefinida para o modo rescue

/// details | Expanda esta secção

Para acelerar o processo, pode adicionar uma chave pública predefinida para o acesso SSH em modo rescue ao seu servidor. Isto só é possível através da [API OVHcloud](/pages/manage_and_operate/api/first-steps).

Para isso, na consola Web API, abra o seguinte ponto de terminação API:

> [!api]
>
> @api {v1} /dedicated/server PUT /dedicated/server/{serviceName}
>

Introduza o nome interno do seu servidor (`ns11111.ip-203-0-113.eu`) no campo apropriado.

De seguida, modifique o campo de texto abaixo da seguinte forma:

```bash
{
  "rescueSshKey": "string"
}
```

Substitua `string` pela sua cadeia de chave pública completa.

O resultado deve ser semelhante ao seguinte exemplo:

![rescue key exemplo](images/rescue-mode-008.png){.thumbnail}

Depois de inserir os valores corretamente, clique no botão `EXECUTE`{.action}.

O campo `A sua chave SSH pública:` será agora preenchido automaticamente com esta cadeia de chave aquando da [alteração do modo `Netboot`](#netboot).

///

<a name="windows_legacy"></a>

### Legacy Windows rescue system (modo rescue WinPE)

/// details | Expanda esta secção

Depois de receber um e-mail a informá-lo da ativação do modo rescue, poderá aceder ao sistema do modo rescue e ao seu servidor.  
Este e-mail também estará disponível no seu [Área de Cliente OVHcloud](/links/manager) assim que for enviado. Clique no seu ID de cliente no canto superior direito e, em seguida, selecione `E-mails de serviço`{.action}.

Para utilizar a interface gráfica do modo rescue do Windows PE, deve descarregar e instalar uma consola VNC ou utilizar o [módulo IPMI](/pages/bare_metal_cloud/dedicated_servers/using_ipmi_on_dedicated_servers) (não disponível em todos os modelos de servidores).

![Winrescue Windows](images/rescue-mode-009.png){.thumbnail}

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

///

<a name="gofurther"></a>

## Quer saber mais?

[Como utilizar o modo rescue para Windows](/pages/bare_metal_cloud/dedicated_servers/rescue-customer-windows)

[Como recuperar o acesso ao servidor se a sua palavra-passe de utilizador foi perdida](/pages/bare_metal_cloud/dedicated_servers/replacing-user-password)

[Como substituir as suas chaves de autenticação para o acesso SSH em caso de perda de chave](/pages/bare_metal_cloud/dedicated_servers/replacing-lost-ssh-key)

[Configuração e reconstrução do RAID por software](/pages/bare_metal_cloud/dedicated_servers/raid_soft)

[Como diagnosticar problemas de hardware nos servidores](/pages/bare_metal_cloud/dedicated_servers/hardware-diagnose)

[Como utilizar a consola IPMI com um servidor dedicado](/pages/bare_metal_cloud/dedicated_servers/using_ipmi_on_dedicated_servers)

Para serviços especializados (referenciamento, desenvolvimento, etc), contacte os [parceiros OVHcloud](/links/partner).

Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](/links/support).

Fale com nossa [comunidade de utilizadores](/links/community).