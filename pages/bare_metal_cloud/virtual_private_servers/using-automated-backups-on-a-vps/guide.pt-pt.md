---
title: 'Utilizar backups automáticos num alojamento VPS'
excerpt: 'Saiba como ativar e utilizar a opção Backup Automático na Área de Cliente OVHcloud'
updated: 2023-08-07
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

## Sumário

Esta opção oferece-lhe uma forma prática de ter backups VPS completos e disponíveis na sua Área de Cliente OVHcloud sem ter de se conectar ao servidor para os criar e restaurar manualmente. Outra vantagem é que também pode optar por montar um backup e depois aceder ao mesmo via SSH.

**Este guia explica-lhe como utilizar backups automáticos no seu alojamento VPS OVHcloud.**

> [!primary]
>
Antes de aplicar as opções de backup, recomendamos que consulte as [páginas e perguntas frequentes do produto](https://www.ovhcloud.com/pt/vps/options/) para obter uma comparação de preços e outras informações.
>

## Requisitos

- acesso à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt)
- um [serviço VPS](https://www.ovhcloud.com/pt/vps/) OVHcloud já instalado
- acesso administrativo (sudo) via SSH ao seu alojamento VPS (opcional)

## Instruções

Ligue-se à sua [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt), vá à secção `Bare Metal Cloud`{.action} e selecione o seu servidor na secção `Servidor privado virtual`{.action}.

### Passo 1: Ativar a opção Backups automáticos

Após selecionar o seu alojamento VPS, clique no separador `Backup automático`{.action} no menu horizontal.

Na etapa seguinte, tome nota da informação relativa ao preço e depois clique em `Encomendar`{.action}. Será então guiado através do processo de encomenda que será confirmado com o envio de um e-mail. Os backups diários serão criados até que a opção volte a ser cancelada.

#### Configurar a hora do backup

Pode modificar a hora a que o backup terá lugar. 

Clique em `...`{.action} acima da tabela e, a seguir, em `Editar`{.action}.

![autobackupvps](images/backup_vps_time01.png){.thumbnail}

Na nova janela, altere a hora do dia (norma UTC 24 horas). Clique em `Confirmar`{.action}.

![autobackupvps](images/backup_vps_time02.png){.thumbnail}

> [!primary]
>
> Uma vez validada na Área de Cliente, a alteração será efetiva num prazo de 24 a 48 horas.
>

### Passo 2: Restaurar um backup a partir da Área de Cliente OVHcloud

Após selecionar o seu alojamento VPS, clique no separador `Backup automático`{.action} no menu horizontal. Serão disponibilizados no máximo 7 backups diários (15 backups diários para os VPS das antigas gamas). Clique em `...`{.action} junto ao backup pretendido e selecione `Restauro`{.action}.

![autobackupvps](images/backup_vps_step1.png){.thumbnail}

Caso tenha modificado recentemente a palavra-passe da raiz (*root*), assegure-se de que assinala na janela pop-up a opção “Modificar a palavra-passe da raiz ao restaurar”, com vista a manter a sua palavra-passe atual, e depois clique em `Confirmar`{.action}. Irá receber um e-mail assim que o processo estiver concluído. Este poderá demorar algum tempo, dependendo do espaço do disco utilizado.

> [!alert]
>
Tenha em atenção que os backups automáticos não incluem os seus discos adicionais.
>

### Como montar e aceder a um backup

Não é necessário restaurar completamente o seu atual serviço. A opção “Montar” permite-lhe aceder aos dados do seu backup para obter os seus ficheiros.

> [!warning]
>A OVHcloud presta-lhe serviços cuja configuração e gestão são da sua inteira responsabilidade, cabendo-lhe a si assegurar o seu correto funcionamento.
>
>Este guia foi concebido para o ajudar, tanto quanto possível, nas tarefas mais comuns. No entanto, caso tenha alguma dificuldade, recomendamos que contacte um fornecedor especializado e/ou o editor do software do serviço, uma vez que não poderemos assisti-lo pessoalmente. Para mais informações, consulte a secção “Vá mais longe” neste guia.
>

Clique em `...`{.action} junto ao backup pretendido e selecione `Montar`{.action}.

![autobackupvps](images/backup_vps_step2.png){.thumbnail}

Quando utiliza esta opção, é criada e montada uma cópia de leitura/escrita do backup. O backup original está disponível tal como está para restauros futuros.

Após concluir o processo, irá receber um e-mail de confirmação. Poderá então ligar-se ao seu alojamento VPS e adicionar a partição onde o seu backup está localizado.

#### Em Secure Shell

Primeiro, conecte-se ao seu alojamento VPS via SSH.

Pode utilizar o seguinte comando para verificar o nome do novo dispositivo adicionado:

```bash
lsblk
```

Aqui está um exemplo deste comando:

```console
NAME    MAJ:MIN RM  SIZE RO TYPE MOUNTPOINT
sda       8:0    0   25G  0 disk 
├─sda1    8:1    0 24.9G  0 part /
├─sda14   8:14   0    4M  0 part 
└─sda15   8:15   0  106M  0 part 
sdb       8:16   0   25G  0 disk 
├─sdb1    8:17   0 24.9G  0 part 
├─sdb14   8:30   0    4M  0 part 
└─sdb15   8:31   0  106M  0 part /boot/efi
```

Neste exemplo, a partição que contém o backup do seu “filesystem” designa-se "sdb1".
Em seguida, crie um diretório para esta partição e defina-o como “mountpoint”:

```bash
sudo mkdir -p /mnt/restore
sudo mount /dev/sdb1 /mnt/restore
```

Pode agora passar para esta pasta e aceder aos dados do seu backup.

Não se esqueça de desmontar a cópia de segurança automática depois de utilizar a cópia de segurança. Clique no botão `Remover o backup`{.action} no separador `Backup automatizado`{.action} e valide na janela que é apresentada.

![unmount](images/backup_vps_unmount.png){.thumbnail}

#### Em Windows

Crie uma ligação RDP (Remote Desktop) com o seu VPS.

Depois de estabelecer a ligação, clique com o botão `Iniciar`{.action} e abra a `Gestão de Discos`{.action}.

![disk management](images/windowsbackup1.png){.thumbnail}

O seu backup montado aparecerá como um disco básico com o mesmo espaço de armazenamento que o seu disco principal.

![mounted backup](images/windowsbackup2.png){.thumbnail}

O disco aparecerá como `Offline`, faça um clique direito no disco e selecione `Online`{.action}.

![online backup](images/windowsbackup3.png){.thumbnail}

A seguir, o seu backup será acessível ao `Explorador de ficheiros`.

![fila exploradora](images/windowsbackup4.png){.thumbnail}

Não se esqueça de desmontar a cópia de segurança automática depois de utilizar a cópia de segurança. Clique no botão `Remover o backup`{.action} no separador `Backup automatizado`{.action} e valide na janela que é apresentada.

![unmount](images/backup_vps_unmount.png){.thumbnail}

> [!warning]
> Tenha em conta que o servidor será reiniciado durante a desmontagem do backup.
>

### Boas práticas para a utilização do backup automático

A funcionalidade de backup automático é baseada nas snapshots VPS. Recomendamos que siga os passos indicados abaixo para evitar qualquer anomalia antes de utilizar esta opção.

#### Configuração do agente QEMU num VPS

As snapshots são imagens instantâneas do seu sistema em execução (“live snapshots”). Para garantir a disponibilidade do seu sistema aquando da criação da snapshot, o agente QEMU é utilizado para preparar o sistema de ficheiros ao processo.

Na maioria das distribuições, o *comutador* necessário não está instalado de forma padrão. Além disso, as restrições de licença podem impedir a OVHcloud de o incluir nas imagens de SO disponíveis. Por consequente, recomenda-se que verifique e instale o agente caso não esteja ativo no seu VPS. Ligue-se ao seu VPS em SSH e siga as instruções abaixo, em função do seu sistema operativo.

##### **Distribuições Debian (Debian, Ubuntu)**

Utilize o seguinte comando para verificar se o sistema está corretamente configurado para as snapshots:

```bash
file /dev/virtio-ports/org.qemu.guest_agent.0
/dev/virtio-ports/org.qemu.guest_agent.0: symbolic link to ../vport2p1
```

Se o resultado for diferente (“No such file or directory”), instale a última versão do pacote:

```bash
sudo apt-get update
sudo apt-get install qemu-guest-agent
```

Reinicie a VPS:

```bash
sudo reboot
```

Inicie o serviço para garantir que está a ser executado:

```bash
sudo service qemu-guest-agent start
```

##### **Distributions Redhat (CentOS, Fedora)**

Utilize o seguinte comando para verificar se o sistema está corretamente configurado para as snapshots:

```bash
file /dev/virtio-ports/org.qemu.guest_agent.0
/dev/virtio-ports/org.qemu.guest_agent.0: symbolic link to ../vport2p1
```

Se o resultado for diferente (“No such file or directory”), instale e ative o agente:

```bash
sudo yum install qemu-guest-agent
sudo chkconfig qemu-guest-agent on
```

Reinicie a VPS:

```bash
sudo reboot
```

Inicie o agente e verifique que está a ser executado:

```bash
sudo service qemu-guest-agent start
sudo service qemu-guest-agent status
```

##### **Windows**

Pode instalar o agente através de um ficheiro MSI, disponível no site do projeto Fedora: <https://fedorapeople.org/groups/virt/virtio-win/direct-downloads/latest-qemu-ga/>

Verifique que o serviço está a ser executado graças ao seguinte comando powershell:

```powershell
PS C:\Users\Administrator> Get-Service QEMU-GA
Status   Name               DisplayName
------   ----               -----------
Running  QEMU-GA            QEMU Guest Agent
```

## Saiba mais

[Utilizar snapshots num alojamento VPS](/pages/bare_metal_cloud/virtual_private_servers/using-snapshots-on-a-vps)

Junte-se à nossa comunidade de utilizadores em <https://community.ovh.com/en/>.
