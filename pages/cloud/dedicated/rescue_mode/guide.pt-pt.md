---
title: 'Ativar e utilizar o modo rescue'
excerpt: 'Como ativar e utilizar o modo rescue num servidor dedicado'
slug: rescue_mode
legacy_guide_number: g920
section: 'Diagnóstico e Modo Rescue'
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

**Última atualização: 20/09/2022**

## Objetivo

O modo rescue é uma ferramenta do seu servidor dedicado. Permite-lhe iniciar num sistema operativo temporário, com o objetivo de diagnosticar e resolver problemas.

O modo de segurança é geralmente adaptado às seguintes tarefas:

- Renovação da password root
- Diagnóstico dos problemas de rede
- Reparação de um sistema operativo defeituoso
- Correção de uma configuração incorreta de uma firewall de software
- Teste das performances dos discos
- Teste do processador e da memória RAM

O backup dos seus dados deve ser a primeira etapa do modo de recuperação se ainda não dispõe de backups recentes.

**Saiba como ativar e utilizar o modo rescue do seu servidor.**

## Requisitos

- Ter um [servidor dedicado](https://www.ovhcloud.com/pt/bare-metal/).
- Ter acesso à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt).

## Instruções

> [!warning]
> Tenha em conta que se definiu uma chave SSH predefinida no seu espaço para os produtos dedicados, não receberá nenhuma palavra-passe root durante o reboot de um servidor em modo rescue. Neste caso, deve desativar primeiro a chave SSH predefinida antes de reiniciar o servidor em modo rescue. Para isso, consulte a [secção](../criar-chaves-ssh-dedicadas/#disablesshkey) do guia correspondente.
>

O modo rescue só pode ser ativado a partir da [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}. Selecione o seu servidor indo à secção `Bare Metal Cloud`{.action} e depois `Servidores dedicados`{.action}. 

Procure "Boot" na zona **Informações gerais** e clique em `...`{.action} e depois em `Alterar`{.action}.

![Alterar o modo de arranque](images/rescue-mode-001.png){.thumbnail}

Na página seguinte, seleccionar **Fazer boot em modo rescue**. Se o seu servidor possuir um sistema operativo Linux, selecione a opção `rescue-customer`{.action} no menu pendente. Se o seu servidor está em Windows, escolha `WinRescue`{.action} (ver [secção do guia abaixo](#windowsrescue)). Especifique outro endereço de e-mail se **não** pretender que os dados de acesso sejam enviados para o endereço principal da sua conta OVHcloud.

> [!warning]
>
> Algumas contas de clientes da OVHcloud podem ser afetadas por um erro no que diz respeito ao idioma dos e-mails de recurso: eles são enviados em francês ao invés da língua escolhida para a conta. Embora a causa do erro tenha sido corrigida desde 20 de setembro de 2022, o endereço de e-mail precisa ser atualizado uma vez para resolver o problema. Para o fazer, introduza o endereço de correio eletrónico da conta de cliente neste passo, antes de ativar o modo rescue.
>

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

Após o reboot do seu servidor, receberá um e-mail com os dados de acesso em modo rescue. Este e-mail também está disponível na Área de [Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt). Clique no nome associado ao seu ID de cliente no canto superior direito da sua Área de Cliente e, a seguir, em `E-mails de serviço`{.action}.

De seguida, deverá aceder ao servidor através de uma linha de comandos ou através de uma ferramenta SSH, utilizando a palavra-passe root gerada para o modo rescue.

Por exemplo:

```bash
ssh root@your_server_IP
root@your_server_password:
```

> [!warning]
> 
> É provável que o seu cliente SSH bloqueie a ligação em primeiro lugar, devido a uma incompatibilidade da marca ECDSA. Isto é normal, pois o modo rescue utiliza o seu próprio servidor SSH temporário.
>
> Para contornar este problema, pode comentar a pegada do seu sistema habitual adicionando um `#` à frente da sua linha no ficheiro *known_hosts*. Tenha o cuidado de retirar este caráter antes que o servidor volte ao estado normal.
>

##### Montagem das suas partições

A maior parte das modificações efetuadas no seu servidor através de SSH em modo rescue requerem a montagem de uma partição. De facto, este modo possui o seu próprio sistema de ficheiros temporários. Por isso, as modificações realizadas no sistema de ficheiros em modo rescue serão perdidas ao reiniciar o servido em modo normal.

Para montar as partições, utilize o comando `mount` em SSH. Deverá listar as suas partições com antecedência para poder recuperar o nome da partição que pretende montar. Aqui tem alguns exemplos de códigos:

```bash
rescue-customer:~# fdisk -l

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
rescue-customer:~# mount /dev/hda1 /mnt/
```

> [!primary]
>
> A sua partição vai ser montada. Poderá então efetuar operações no sistema de ficheiros.
> 
> Se o seu servidor dispõe de uma configuração RAID de software, deve montar o seu volume RAID (geralmente `/dev/mdX`).
>

Para sair do modo rescue, redefina o modo de arranque em `Fazer boot no disco rígido`{.action} na [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt) e reinicie o servidor em linha de comandos.

##### Montagem de um datastore

Pode montar um datastore VMware da forma descrita no segmento anterior. Em primeiro lugar, instale o package necessário:

```bash
rescue-customer:~# apt-get update && apt-get install vmfs-tools
```

De seguida, retorize as suas partições para recuperar o nome da partição do datastore:

```bash
rescue-customer:~# fdisk -l
```

Agora, execute o seguinte comando para montar a partição, substituindo `sdbX` pelo valor indicado na etapa anterior:

```bash
rescue-customer:~# vmfs-fuse /dev/sdbX /mnt
```

Para sair do modo rescue, redefina o modo de arranque em `Fazer boot no disco rígido`{.action} na [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt) e reinicie o servidor em linha de comandos.

### Windows <a name="windowsrescue"></a>

#### Utilização das ferramentas WinRescue

Após o reboot do seu servidor, receberá um e-mail com os dados de acesso em modo rescue. Este e-mail também está disponível na [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt). Clique no nome associado ao seu ID de cliente no canto superior direito da sua Área de Cliente e, a seguir, em `E-mails de serviço`{.action}.

Para utilizar o modo rescue proposto pelo Windows, deve descarregar e instalar uma consola VNC ou utilizar o módulo `IPMI` na sua [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}.

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

[Alterar a palavra-passe administrador num servidor dedicado Windows](../alterar-palavra-passe-admin-windows//)

Fale com a nossa comunidade de utilizadores em <https://community.ovh.com/en/>.
