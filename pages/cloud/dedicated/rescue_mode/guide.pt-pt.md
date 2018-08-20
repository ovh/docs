---
title: 'Ativar e utilizar o modo rescue'
excerpt: 'Como ativar e utilizar o modo rescue num servidor dedicado'
slug: ovh-rescue
legacy_guide_number: g920
section: 'Diagnóstico e Modo Rescue'
---

**Última atualização a 20/08/2018**

## Objetivo

O modo rescue é uma ferramenta do seu servidor dedicado. Permite-lhe iniciar num sistema operativo temporário, com o objetivo de diagnosticar e resolver problemas.

**Este manual explica-lhe como ativar e utilizar o modo rescue do seu servidor.**

<iframe width="560" height="315" src="https://www.youtube.com/embed/UdMZSgXATFU" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

## Requisitos

- Ter um acesso em SSH (root) para o seu [servidor dedicado](https://www.ovh.pt/servidores_dedicados/){.external}.


## Instruções

Pode ativar o modo rescue ligando-se à sua [Área de Cliente OVH](https://www.ovh.com/auth/?action=gotomanager/){.external}. Selecione o seu servidor na secção `Serviços Dedicados`{.action} e, em seguida, em `Servidores Dedicados`{.action}. De seguida, em `Estado do servidor`{.action} > `Informações gerais`{.action} > `...`{.action} e clique no botão `Modificar`{.action} para alterar o modo de arranque.

![Modificar o modo de arranque](images/rescue-mode-01.png){.thumbnail}

No ecrã seguinte, selecione `Fazer boot em modo rescue`{.action}. Se o seu servidor possuir um sistema operativo Linux, selecione a opção `rescue64-pro`{.action} no menu pendente. Caso tenha um servidor Windows, selecione `WinRescue`{.action}. Finalmente, insira o seu endereço de e-mail no campo de texto e, em seguida, clique em `Seguinte`{.action}.

![Modo rescue-pro](images/rescue-mode-03.png){.thumbnail}

Confirme as suas opções no ecrã seguinte e, em seguida, reinicie o seu servidor para aplicar as modificações. 

![Reiniciar o servidor](images/rescue-mode-02.png){.thumbnail}

O seu servidor irá ser reiniciado em modo rescue e receberá as informações de identificação para se poder ligar com o endereço de e-mail que indicou. Para sair do modo rescue, basta alterar o modo de arranque em `Fazer boot no disco rígido`{.action} e reiniciar o seu servidor.

### Linux

#### Utilizar a interface web

Depois de reiniciar o seu servidor, receberá um e-mail com as informações de acesso em modo rescue. Ser-lhe-á indicada uma ligação para a interface web do modo rescue, que lhe permitirá efetuar os seguintes testes:

- discos rígidos: verificação da sua integridade com testes SMART;
- processadores: verificação do seu funcionamento normal;
- partições (estado): verificação do estado dos leitores;
- partições (sistema de ficheiros): verificação do sistema de ficheiros do servidor;
- partições (explore): lançamento de um navegador para explorar os ficheiros. Não é possível editá-los com esta ferramenta, mas pode efetuar uma cópia de segurança.
- memória: verificação da RAM instalada.

![Interface web do modo rescue](images/rescue-mode-04.png){.thumbnail}

#### Utilizar o SSH (linha de comandos)


> [!primary]
> 
> Em caso de utilização de uma chave SSH (igualmente ativa na sua Área de Cliente OVH), não receberá nenhuma palavra-passe. Assim que o servidor estiver em modo Rescue, poderá ligar-se diretamente através da sua chave SSH.
>

Depois de reiniciar o seu servidor, receberá um e-mail com as informações de acesso em modo rescue. Deverá aceder ao seu servidor através da linha de comandos habitual, utilizando a palavra-passe root do modo rescue em vez da sua.

Por exemplo:

```sh
ssh root@IP_o_seu_servidor
root@IP_da_palavra_passe_do_seu_servidor:
```

A maioria das modificações realizadas no servidor através de SSH em modo rescue requerem a montagem de uma partição. De facto, este modo possui o seu próprio sistema de ficheiros temporário. Por isso, as modificações realizadas no sistema de ficheiros em modo rescue serão perdidas ao reiniciar o servido em modo normal.

A montagem das partições é efetuada através do comando `mount` em SSH. Deverá listar as suas partições com antecedência para poder recuperar o nome da partição que pretende montar. Aqui tem alguns exemplos de códigos:

```sh
rescue:~# fdisk -l

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

```sh
rescue:~# mount /dev/hda1 /mnt/
```

> [!primary]
>
> A sua partição vai ser montada. Poderá então realizar as operações no sistema de ficheiros.
> 
> Caso o seu servidor possua uma configuração RAID software, deverá montar o seu volume RAID (geralmente, `/dev/mdX`).
>


### Windows

#### Aceder ao WinRescue

Depois de reiniciar o seu servidor, receberá um e-mail com as informações de acesso em modo rescue. Para as utilizar, deverá descarregar e instalar uma consola VNC ou utilizar o módulo `IPMI` na sua [Área de Cliente OVH](https://www.ovh.com/auth/?action=gotomanager/){.external}.

![Winrescue Windows](images/rescue-mode-06.png){.thumbnail}

#### Ferramenta WinRescue

|Ferramentas|Descrição|
|---|---|
|Freecommander|Um gestor de ficheiros com todas as funcionalidades standard de que precisa.|
|NTPWdi|Um gestor de palavras-passe fácil de utilizar. Permite-lhe reativar ou modificar as palavras-passe das contas de utilizadores no seu servidor. Esta ferramenta é prática em caso de perda de informações de identificação ou para reativar uma conta de segurança.|
|FileZilla|Um cliente FTP open source. Trata dos protocolos SSH e SSL, e dispõe de uma interface arrastar-soltar clara e intuitiva. Pode ser utilizado para transferir dados para um servidor FTP, tal como o backup FTP incluído na maior parte dos modelos de servidores da OVH.|
|7-ZIP|Utilitário de compressão e de arquivamento de ficheiros compatível com os seguintes formatos: ARJ, CAB, CHM, CPIO, CramFS, DEB, DMG, FAT, HFS, ISO, LZH, LZMA, MBR, MSI, NSIS, NTFS, RAR, RPM, SquashFS, UDF, VHD, WIM, XAR e Z. Poderá também criar os seus próprios arquivos nos seguintes formatos: BZIP2, GZIP, TAR, WIM, XZ, Z e ZIP.|
|Avast Virus Cleaner|Uma aplicação antivírus com capacidades de verificação e de limpeza dos ficheiros.|
|ActivNIC|Uma ferramenta que lhe permite reativar uma placa de interface de rede desativada.|
|SRVFirewall|Um script que ativa ou desativa a firewall do seu servidor.|
|SysInternal|Uma suite de aplicações da Microsoft que inclui várias ferramentas para a manutenção da rede ou a gestão dos processos.|
|Virtual Clone Drive|Uma ferramenta com a qual poderá montar ficheiros BIN, CCD e ISO num leitor CD virtual.|
|Firefox|Um navegador web.|
|Testdisk|Uma aplicação eficaz de recuperação de dados. Permite-lhe recuperar e modificar partições danificadas, encontrar partições perdidas, corrigir um setor de arranque ou até reconstruir um MBR com defeito.|

## Quer saber mais?

Fale com a nossa comunidade de utilizadores: <https://community.ovh.com/en/>.