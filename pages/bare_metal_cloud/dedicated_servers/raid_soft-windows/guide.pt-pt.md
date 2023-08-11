---
title: Configurar um espelho de software (RAID) em Windows
excerpt: "Descubra como reconstruir a configuração dos discos do seu servidor após uma substituição de disco"
updated: 2023-03-28
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

**Última atualização: 28/03/2023**

## Objetivo

Num sistema Windows, a redundância dos dados é assegurada pela implementação do disco principal num segundo disco. Esta configuração é semelhante a uma configuração em RAID 1 mas apenas diz respeito a dois discos.

**Saiba como reconfigurar o espelho de disco do seu sistema Windows se este tiver de ser reconstruído devido a corrupção ou avaria de disco.**

## Requisitos

- Um [servidor dedicado Windows](https://www.ovhcloud.com/pt/bare-metal/) com um espelho software
- Um acesso administrativo ao servidor via RDP

## Instruções

Crie uma ligação RDP (Remote Desktop) com o seu servidor.

Depois de se conectar, clique com o botão direito do menu `Iniciar`{.action} e abra a `Executar`{.action}.

![Software mirror Windows](images/raid-soft-windows-01.png){.thumbnail}

Introduza `cmd` e clique em `OK`{.action}.

![Software mirror Windows](images/raid-soft-windows-02.png){.thumbnail}

O método a utilizar depende do tipo de partição dos seus discos. Siga as instruções [desta secção](#mbr) para **MBR** ou passe à [secção seguinte](#gpt) para **GPT**. Se não tiver a certeza, execute o comando `diskpart` na encomenda e insira a `list disk`. Verifique a coluna "Gpt" no resultado fornecido.

### Reconstrução do espelho (esquema de partição MBR) <a name="mbr"></a>

Na linha de comandos, abra o DiskPart:

```
C:\Windows\system32> diskpart
```

> [!alert]
>
> O DiskPart executa as encomendas sem emitir avisos ou pedir confirmação. Qualquer modificação efetuada no DiskPart é irreversível. Assim, a introdução de comandos enquanto o disco errado ou o volume é selecionado pode provocar uma perda imediata de dados e/ou impedir o arranque do seu sistema. Recomendamos que use de precaução e verifique cada comando.
>

#### Lista de todos os discos e volumes

```console
DISKPART> list disk
 
  Disk ###  Status         Size     Free     Dyn  Gpt
  --------  -------------  -------  -------  ---  ---
  Disk 0    Online          447 GB      0 B   *
  Disk 1    Online          447 GB   447 GB
  Disk M0   Missing            0 B      0 B   *
 
DISKPART> list volume
 
  Volume ###  Ltr  Label        Fs     Type        Size     Status     Info
  ----------  ---  -----------  -----  ----------  -------  ---------  --------
  Volume 0     C   Windows      NTFS   Mirror       447 GB  Failed Rd  System

```

Neste exemplo, o `Disk 1` é um disco de substituição que foi instalado para substituir o `Disk M0` defeituoso que tinha sido [fisicamente removido](/pages/bare_metal_cloud/dedicated_servers/disk_replacement) anteriormente.


> [!primary]
>
> As secções de código seguintes são fornecidas apenas a título ilustrativo, em função do exemplo de saída acima. Deverá ajustar as instruções em função da sua configuração real, substituindo os valores nos comandos pelos seus ID de disco e de volume.
>

#### Retirada do disco substituído da configuração

```console
DISKPART> select volume c
 
Volume 0 is the selected volume.
 
DISKPART> break disk M0 nokeep
 
DiskPart successfully broke the mirror volume.
 
DISKPART> list volume
 
  Volume ###  Ltr  Label        Fs     Type        Size     Status     Info
  ----------  ---  -----------  -----  ----------  -------  ---------  --------
  Volume 0     C   Windows      NTFS   Simple       447 GB  Healthy    System
 
DISKPART> select disk m0
 
Disk M0 is now the selected disk.
 
DISKPART> delete disk
 
DiskPart successfully deleted the missing disk.
 
DISKPART> list disk
 
  Disk ###  Status         Size     Free     Dyn  Gpt
  --------  -------------  -------  -------  ---  ---s
  Disk 0    Online          447 GB      0 B   *
  Disk 1    Online          447 GB   447 GB
 
```

#### Inicialização do disco de substituição

```console
DISKPART> select disk 1
 
Disk 1 is now the selected disk.
 
DISKPART> convert mbr
 
DiskPart successfully converted the selected disk to MBR format.
 
DISKPART> convert dynamic
 
DiskPart successfully converted the selected disk to dynamic format.

```

#### Recriação do espelho entre o primeiro e o segundo disco


```console
DISKPART> select volume s
 
Volume 2 is the selected volume.
 
DISKPART> remove
 
DiskPart successfully removed the drive letter or mount point.
 
DISKPART> select volume t
 
Volume 1 is the selected volume.
 
DISKPART> remove
 
DiskPart successfully removed the drive letter or mount point.

```

Repita esta etapa para cada volume existente a partir do `Disk 0` que deseja colocar em espelho no `Disk 1`, utilizando a letra de leitor associada (por exemplo, *d*, *e*, *f*, etc.).

O estado do volume será `Rebuild` durante o processo, o que pode levar várias horas em função dos dados armazenados no disco. Pode verificar o estado em DiskPart:
 
```console
DISKPART> list volume
 
  Volume ###  Ltr  Label        Fs     Type        Size     Status     Info
  ----------  ---  -----------  -----  ----------  -------  ---------  --------
* Volume 0     C   Windows      NTFS   Mirror       447 GB  Rebuild    System

```

É preferível não reiniciar o servidor enquanto o processo de reconstrução não estiver terminado.

### Reconstrução do espelho (esquema de partição GPT) <a name="gpt"></a>

Na linha de comandos, abra o DiskPart:

```
C:\Windows\system32> diskpart
```

> [!alert]
>
> O DiskPart executa as encomendas sem emitir avisos ou pedir confirmação. Qualquer modificação efetuada no DiskPart é irreversível. Assim, a introdução de comandos enquanto o disco errado ou o volume é selecionado pode provocar uma perda imediata de dados e/ou impedir o arranque do seu sistema. Recomendamos que use de precaução e verifique cada comando.
>

#### Lista de todos os discos e volumes

```console
DISKPART> list disk
 
  Disk ###  Status         Size     Free     Dyn  Gpt
  --------  -------------  -------  -------  ---  ---
  Disk 0    Online         1863 GB      0 B   *    *
  Disk 1    Online         1863 GB  1863 GB
  Disk M0   Missing           0  B      0 B   *   
 
 
DISKPART> list volume
 
  Volume ###  Ltr  Label        Fs     Type        Size     Status     Info
  ----------  ---  -----------  -----  ----------  -------  ---------  --------
  Volume 0     C   Windows      NTFS   Mirror      1862 GB  Failed Rd  Boot
  Volume 1         EFI          FAT32  Partition    350 MB  Healthy    System
 
```


Neste exemplo, o `Disk 1` é um disco de substituição que foi instalado para substituir o `Disk M0` defeituoso que tinha sido [fisicamente removido](/pages/bare_metal_cloud/dedicated_servers/disk_replacement) anteriormente.

> [!primary]
>
> As secções de código seguintes são fornecidas apenas a título ilustrativo, em função do exemplo de saída acima. Deverá ajustar as instruções em função da sua configuração real substituindo os valores nos comandos pelos seus ID de disco e de volume.
>

#### Retirada do disco substituído da configuração

```console
DISKPART> select volume c
  
Volume 0 is the selected volume.
  
DISKPART> break disk M0 nokeep
  
DiskPart successfully broke the mirror volume.
 
DISKPART> list volume
 
  Volume ###  Ltr  Label        Fs     Type        Size     Status     Info
  ----------  ---  -----------  -----  ----------  -------  ---------  --------
  Volume 0     C   Windows      NTFS   Simple      1862 GB  Healthy    Boot
  Volume 1         EFI          FAT32  Partition    350 MB  Healthy    System
 
DISKPART> select disk M0
 
Disk M0 is now the selected disk.
 
DISKPART> delete disk
 
DiskPart successfully deleted the missing disk.
 
DISKPART> list disk
 
  Disk ###  Status         Size     Free     Dyn  Gpt
  --------  -------------  -------  -------  ---  ---
  Disk 0    Online         1863 GB      0 B   *    *
  Disk 1    Online         1863 GB  1863 GB
 
DISKPART> list volume
 
  Volume ###  Ltr  Label        Fs     Type        Size     Status     Info
  ----------  ---  -----------  -----  ----------  -------  ---------  --------
  Volume 0     C   Windows      NTFS   Simple      1862 GB  Healthy    Boot
  Volume 1         EFI          FAT32  Partition    350 MB  Healthy    System
 
```

#### Inicialização do disco de substituição

No novo disco, crie as partições padrão e obrigatórias, refletindo o particionamento existente do primeiro disco:

```console
DISKPART> select disk 1
 
Disk 1 is now the selected disk.
 
DISKPART> clean
 
DiskPart succeeded in cleaning the disk.
 
DISKPART> convert gpt
 
DiskPart successfully converted the selected disk to GPT format.
 
DISKPART> select partition 1
 
Partition 1 is now the selected partition.
 
DISKPART> delete partition override
 
DiskPart successfully deleted the selected partition.
 
DISKPART> create partition efi size=350
 
DiskPart succeeded in creating the specified partition.
 
DISKPART> format quick fs=fat32 label=EFI
 
  100 percent completed
 
DiskPart successfully formatted the volume.
 
DiskPart successfully formatted the volume.
 
DISKPART> assign letter=t
 
DiskPart successfully assigned the drive letter or mount point.
 
DISKPART> create partition msr size=128
 
DiskPart succeeded in creating the specified partition.
 
DISKPART> list partition
 
  Partition ###  Type              Size     Offset
  -------------  ----------------  -------  -------
  Partition 1    System             350 MB  1024 KB
* Partition 2    Reserved           128 MB   351 MB

```

#### Recriação do espelho entre o primeiro e o segundo disco 

```console
DISKPART> select volume c
 
Volume 0 is the selected volume.
 
DISKPART> add disk 1
 
DiskPart succeeded in adding a mirror to the volume.
 
DISKPART> list disk
 
  Disk ###  Status         Size     Free     Dyn  Gpt
  --------  -------------  -------  -------  ---  ---
* Disk 0    Online         1863 GB      0 B   *    *
  Disk 1    Online         1863 GB      0 B   *    *

```


Repita esta etapa para cada volume existente a partir do `Disk 0` que deseja colocar em espelho no `Disk 1`, utilizando a letra de leitor associada (por exemplo, *d*, *e*, *f*, etc.).

#### Recriação do ambiente de inicialização e definição das opções de inicialização do segundo disco

```console
DISKPART> select disk 0
 
Disk 0 is now the selected disk.
 
DISKPART> list partition
 
  Partition ###  Type              Size     Offset
  -------------  ----------------  -------  -------
  Partition 1    System             350 MB  1024 KB
  Partition 2    Dynamic Reserved  1024 KB   351 MB
  Partition 3    Reserved           127 MB   352 MB
  Partition 4    Dynamic Data      1862 GB   479 MB
  Partition 5    Dynamic Data        71 KB  1863 GB
 
DISKPART> select partition 1
 
Partition 1 is now the selected partition.
 
DISKPART> assign letter=s
 
DiskPart successfully assigned the drive letter or mount point.
 
DISKPART> list volume
 
  Volume ###  Ltr  Label        Fs     Type        Size     Status     Info
  ----------  ---  -----------  -----  ----------  -------  ---------  --------
  Volume 0     C   Windows      NTFS   Mirror      1862 GB  Rebuild    Boot
* Volume 1     S   EFI          FAT32  Partition    350 MB  Healthy    System
  Volume 2     T   EFI          FAT32  Partition    350 MB  Healthy    Hidden
 
DISKPART> exit
 
Leaving DiskPart...
```

De volta à linha de comandos, copie os ficheiros de arranque da partição de arranque (EFI) para o primeiro disco (`Disk 0`) para a partição de arranque no segundo disco (`Disk 1`).

Introduza os 3 comandos seguintes e execute cada um com a tecla `Entrer`:

```
robocopy s:\ t:\ * /e /copyall /xf BCD.* /xd "System Volume Information"
bcdedit /export t:\EFI\Microsoft\Boot\BCD
bcdedit /store t:\EFI\Microsoft\Boot\BCD /set {bootmgr} device partition=t:
``` 

Agora, volte ao DiskPart e execute os seguintes comandos:

```console
DISKPARTE> select volume s
 
Volume 2 is the selected volume.
 
DISKPart> remove
 
DiskPart successfully removed the drive letter or mount.
 
DISKPARTE> select volume t
 
Volume 1 is the selected volume.
 
DISKPart> remove
 
DiskPart successfully removed the drive letter or mount.

```

O estado do volume será `Rebuild` durante o processo, o que pode levar várias horas em função dos dados armazenados no disco. Pode verificar o estado em DiskPart:

```console
DISKPART> list volume
 
  Volume ###  Ltr  Label        Fs     Type        Size     Status     Info
  ----------  ---  -----------  -----  ----------  -------  ---------  --------
  Volume 0     C   Windows      NTFS   Mirror      1862 GB  Rebuild    Boot
  Volume 1         EFI          FAT32  Partition    350 MB  Healthy    Hidden
  Volume 2         EFI          FAT32  Partition    350 MB  Healthy    System

```

É preferível não reiniciar o servidor enquanto o processo de reconstrução não estiver terminado.

## Quer saber mais?

Junte-se à nossa comunidade de utilizadores em <https://community.ovh.com/en/>.