---
title: "Montagem de NAS-HA através de NFS"
excerpt: "Saiba como conectar-se ao NAS-HA através de NFS"
updated: 2024-09-04
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

## Objetivo 

O serviço NAS-HA da OVHcloud permite-lhe gerir um armazenamento de ficheiros acessível a partir de uma rede.

**Saiba como aceder ao NAS-HA através do NFS nos sistemas operativos mais comuns.**

> [!warning]
> A OVHcloud oferece-lhe um certo número de serviços cuja configuração e gestão lhe incumbem. Por isso, é da sua responsabilidade garantir que eles funcionem corretamente.
>
> Este manual fornece as instruções necessárias para realizar as operações mais habituais. No entanto, se encontrar dificuldades ou dúvidas relativamente à administração, utilização ou implementação de serviços num servidor, recomendamos que recorra a um [prestador de serviços especializado](https://partner.ovhcloud.com/pt/directory/) ou que contacte a [nossa comunidade](https://community.ovh.com/en/).
>

## Requisitos

- Dispor de um serviço [NAS-HA OVHcloud](https://www.ovhcloud.com/pt/storage-solutions/nas-ha/)
- Dispor de um serviço OVHcloud associado a um endereço IP público (Hosted Private Cloud, servidor dedicado, VPS, instância Public Cloud, etc.).
- Ter um sistema operativo compatível com NFS instalado no seu servidor
- [Ter criado uma partição no seu serviço com o protocolo NFS ativado](/pages/storage_and_backup/file_storage/ha_nas/nas_get_started#partition)
- [Ter uma entrada ACL para o endereço IP do servidor](/pages/storage_and_backup/file_storage/ha_nas/nas_get_started#addaccess)
- Dispor de um acesso administrativo (sudo) ao seu servidor através de SSH ou GUI

## Instruções

As secções seguintes contêm exemplos de configuração para as distribuições/sistemas operativos mais utilizados. A primeira etapa consiste sempre em ligar-se ao seu servidor através de SSH ou ligando-se à interface gráfica do seu sistema operativo instalado. Os exemplos abaixo pressupõem que está ligado enquanto utilizador com autorizações elevadas.

Também precisará do **nome interno** e **do endereço IP** do serviço NAS-HA que poderá encontrar no e-mail recebido após a instalação ou na [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt).

As seguintes notações são utilizadas como argumentos nas secções da linha de comandos abaixo. Substitua-os pelos valores apropriados aquando da introdução dos comandos.

|Argumento|Descrição|
|---|---|
|IP_HA-NAS|O endereço IP do NAS-HA (Exemplo: `10.1.1.1`)|
|NFS_PATH|o caminho de acesso à partição NAS-HA a montar, composto pelo nome do serviço e pelo nome das suas partições (Exemplo: `zpool-123456/partition01`)|
|MOUNTING_FOLDER|A pasta local para a sua partição montada|

> [!warning]
>
> O utilizador NFS é `root`, as modificações de permissões com este utilizador podem gerar conflitos com os direitos CIFS/SMB existentes.
>

### Distribuições baseadas em Debian

Instale o package `nfs-common`:

```bash
ubuntu@server:~$ sudo apt install nfs-common
```

De seguida, utilize o seguinte comando de montagem:

```bash
ubuntu@server:~$ sudo mount -t nfs_HA-NAS:/NFS_PATH /MOUNTING_FOLDER
```

**Exemplo:**

```bash
ubuntu@server:~$ sudo mount -t nfs 10.1.1.1:/zpool-123456/partition01 /mount/ha_nas
```

Já pode aceder à sua partição montada na pasta especificada.

> [!primary]
>
> A fim de automatizar o processo de montagem em cada arranque do servidor, adicione a seguinte linha ao ficheiro `/etc/fstab`:
>
> `IP_HA-NAS:/NFS_PATH /MOUNTING_FOLDER nfs rw 0 0`
>

### CentOS 7 / AlmaLinux / Rocky Linux

Verifique que as últimas versões dos pacotes `nfs-utils` e `rpcbind` estão instaladas:

```bash
centos@server:~$ sudo yum install nfs-utils rpcbind
```

Se necessário, reinicie o serviço `rpcbind` com o seguinte comando:

```bash
centos@server:~$ sudo systemctl restart rpcbind
```

Para montar a sua partição, utilize o seguinte comando:

```bash
centos@server:~$ sudo mount -t nfs_HA-NAS:/NFS_PATH /MOUNTING_FOLDER
```

**Exemplo:**

```bash
centos@server:~$ sudo mount -t nfs 10.1.1.1:/zpool-123456/partition01 /mount/ha_nas
```

Já pode aceder à sua partição montada na pasta especificada.

> [!primary]
>
> A fim de automatizar o processo de montagem em cada arranque do servidor, adicione a seguinte linha ao ficheiro `/etc/fstab`:
>
> `IP_HA-NAS:/NFS_PATH /MOUNTING_FOLDER nfs rw 0 0`
>

### Fedora

Instale o package `nfs-utils`:

```bash
fedora@server:~$ sudo dnf -y instal nfs-utils
```

De seguida, utilize o seguinte comando de montagem:

```bash
fedora@server:~$ sudo mount -t nfs_HA-NAS:/NFS_PATH /MOUNTING_FOLDER
```

**Exemplo:**

```bash
fedora@server:~$ sudo mount -t nfs 10.1.1.1:/zpool-123456/partition01 /mount/ha_nas
```

Já pode aceder à sua partição montada na pasta especificada.

### Proxmox

Na interface de administração Proxmox, clique em `Storage`{.action} no menu vertical.

![proxmox](images/proxmox1.png){.thumbnail}

Clique no botão `Add`{.action} e selecione `NFS`{.action}.

Na janela que aparecer, indique as seguintes informações:

|Ação|Descrição|
|---|---|
|ID|Identificador da partilha|
|Server|Endereço IP do NAS-HA (Exemplo: `10.1.1.1`)|
|Export|Caminho para a partição NAS-HA (Deve ser detetado através da análise automática: selecione-o na lista.)|
|Content|Tipos de conteúdos para este NFS (Disk image, ISO image, Container template, VZDump backup file, Container, Snippets)|

![proxmox](images/proxmox2.png){.thumbnail}

Clique em `Add`{.action} para montar a sua partição.

### VMware ESXI

Na interface de administração VMware ESXI, clique em `Storage`{.action} no menu à esquerda.

A seguir, clique no botão `New datastore`{.action} para abrir o assistente.

![ESXI](images/esxi1.png){.thumbnail}

Na nova janela, selecione `Mount NFS datastore`{.action} e clique em `Next`{.action}.

![ESXI](images/esxi2.png){.thumbnail}

Preencha o formulário com os detalhes seguintes.

|Ação|Descrição|
|---|---|
|Name|Identificador da partilha|
|NFS server|Endereço IP do NAS-HA (Exemplo: `10.1.1.1`)|
|NFS share|Caminho para a partição NAS-HA a montar (Exemplo: `zpool-123456/partition01`)|

![ESXI](images/esxi3.png){.thumbnail}

Depois, clique em `Next`{.action}. Clique em `Finish`{.action} na última etapa.

A sua partição NAS-HA foi montada num datastore.

![ESXI](images/esxi4.png){.thumbnail}

### NFSv3/NFSv4

A oferta NAS-HA suporta os protocolos NFSv3 e NFSv4. Vamos detalhar a sua utilização.

**O que acontece se não especificarmos a versão durante o comando NFS?**

Neste caso, o seu cliente NFS vai tentar ligar-se diretamente à versão mais alta suportada por este último.
Mas também pode escolher se prefere utilizar NFSv3 ou NFSv4:

Para forçar a utilização de NFSv3, deve utilizar o seguinte comando:

```bash
ubuntu@server:~$ sudo mount -t nfs -o vers=3 IP_HA-NAS:/NFS_PATH /MOUNTING_FOLDER
```

- Exemplo:

```bash
ubuntu@server:~$ sudo mount -t nfs -o vers=3 10.1.1.1:/zpool-123456/partition01 /mount/ha_nas
```

Para forçar a utilização de NFSv4, deve utilizar o seguinte comando:

```bash
ubuntu@server:~$ sudo mount -t nfs -o vers=4 IP_HA-NAS:/NFS_PATH /MOUNTING_FOLDER
```

- Exemplo:

```bash
ubuntu@server:~$ sudo mount -t nfs -o vers=4 10.1.1.1:/zpool-123456/partition01 /mount/ha_nas
```

Também pode utilizar o seguinte comando para determinar a versão utilizada pela montagem atual:

```bash
ubuntu@server:~$ nfsstat -m
```

No retorno, o parâmetro `vers=3` ou `vers=4` indica-lhe o protocolo utilizado.

A utilização dos comandos será semelhante para CentOS e Fedora.

**É possível introduzir uma versão específica para a utilização de NFSv4?**

Da mesma forma que anteriormente, o seu cliente NFS vai tentar ligar-se diretamente à versão mais alta suportada pelo mesmo.
Se desejar, pode escolher entre NFSv4.1 e NFSv4.2

Para forçar a utilização de NFSv4.1, deve utilizar o seguinte comando:

```bash
ubuntu@server:~$ sudo mount -t nfs -o vers=4.1 IP_HA-NAS:/NFS_PATH /MOUNTING_FOLDER
```

- Exemplo:

```bash
ubuntu@server:~$ sudo mount -t nfs -o vers=4.1 10.1.1.1:/zpool-123456/partition01 /mount/ha_nas
```

Para forçar a utilização de NFSv4.2, deve utilizar o seguinte comando:

```bash
ubuntu@server:~$ sudo mount -t nfs -o vers=4.2 IP_HA-NAS:/NFS_PATH /MOUNTING_FOLDER
```

- Exemplo:

```bash
ubuntu@server:~$ sudo mount -t nfs -o vers=4.2 10.1.1.1:/zpool-123456/partition01 /mount/ha_nas
```

Pode utilizar este comando para verificar a versão da sua montagem atual:

```bash
ubuntu@server:~$ nfsstat -m
```

## Dicas para otimizar o desempenho e/ou a estabilidade da sua ligação NFS

Na maioria dos casos, as opções de montagem predefinidas configuradas nos clientes Linux são suficientes para obter desempenhos aceitáveis. No entanto, em algumas situações, talvez seja útil ativar ou desativar algumas opções para obter um melhor desempenho geral.

Além disso, para obter ótimas performances e evitar vários bugs identificados no cliente NFS, recomendamos que utilize um kernel Linux o mais recente possível.

Encontre aqui alguns elementos que o poderão ajudar a afinar a configuração do seu cliente NFS.

### Algumas opções de montagem a considerar

Pode conhecer as opções de montagem aplicadas pelo seu cliente Linux com o comando `mount -l`.

Exemplo de resposta a esta encomenda:

```bash
XX.XX.XX.XX:/zpool-XXXXXX/DIR on /mnt type nfs4 (rw,relatime,vers=4.2,rsize=131072,wsize=131072,namlen=255,hard,proto=tcp,timeo=600,retrans=2,...)
```

- `rsize=1048576`: define o número máximo de bytes de dados que o cliente NFS pode receber para cada pedido de LEITURA de rede. Este valor aplica-se ao ler dados de um ficheiro num sistema de ficheiros NFS. O maior tamanho possível (até 1048576) garante um melhor desempenho.
- `wsize=1048576`: define o número máximo de bytes de dados que o cliente NFS pode enviar para cada pedido de escrita na rede. Este valor aplica-se aquando da escrita de dados num ficheiro num sistema de ficheiros NFS. O maior tamanho possível (até 1048576) garante um melhor desempenho.
- `hard` : define o comportamento de recuperação do cliente NFS após a expiração de um pedido, de modo que os pedidos são reiniciados indefinidamente até que o servidor NAS-HA responda. Esta opção garante-lhe a integridade dos dados.
- `timeo=150`: define o valor do tempo limite que o cliente NFS utiliza para aguardar uma resposta antes de relançar uma query NFS. Utilize um valor mínimo de 150 (equivalente a 15 segundos) para evitar falhas de desempenho.
- `retrans=2`: define para 2 o número de vezes que o cliente NFS lança um pedido antes de tentar uma ação de recuperação.
- `tcp`: para acelerar a montagem do sistema de ficheiros em NFS v3 (não é necessário para NFSv4.x que utiliza apenas TCP).
- `_netdev` : quando esta opção está presente no ficheiro /etc/fstab, impede que o SO do cliente tente montar o sistema de ficheiros NFS enquanto a rede não estiver ativa.
- `nofail`: se o SO do seu cliente deve poder iniciar qualquer que seja o estado do seu sistema de ficheiros NFS, adicione a opção `nofail`.
- `actimeo=30`: a especificação `actimeo` define todos os parâmetros `acregmin`, `acregmax`, `acdirmin` e `acdirmax` para o mesmo valor. Um valor inferior a 30 segundos pode degradar o nível de desempenho, pois a cache de atributos do ficheiro e do diretório expira demasiado rapidamente.
- `nfsvers`: evite se possível utilizar a versão 4.0 de NFS. Utilize as versões 3, 4.1 ou 4.2 (se possível, utilize a mesma versão de NFS para todos os clientes ligados a uma mesma partilha NFS).
- `nordirplus`: em certos ambientes com numerosos diretórios, onde apenas as informações de um pequeno subconjunto de entradas de diretório são utilizadas por um cliente NFSv3, o READDIRPLUS pode provocar uma diminuição do desempenho. A opção nordirplus permite desativar esta funcionalidade

### Forçar a utilização de NFSv3 em certos casos

- Uma vez que o NFSv3 não tem qualquer estado, os desempenhos com NFSv3 podem ser claramente melhores para certas cargas de trabalho, em especial para as cargas de trabalho que fazem inúmeras chamadas de tipo OPEN, CLOSE, SETATTR e GETATTR.
- Se aloja na sua partilha NFS uma base de dados, tenha em conta que, em caso de desconexões de rede, o mecanismo de bloqueios específico do protocolo NFS v4.x pode provocar a interrupção da sua aplicação (consulte este rfc para mais pormenores: <https://datatracker.ietf.org/doc/rfc3530/>).

### Melhorar o desempenho de leitura alterando o atributo read_ahead_kb

Alguns kernels Linux utilizam um valor predefinido de 128 KB `read_ahead_kb`. Recomendamos que aumente este valor até 15 MB se tiver problemas de desempenho de leitura. Para mais informações, consulte [esta página](https://docs.kernel.org/admin-guide/abi-stable.html?highlight=read_ahead_kb#abi-sys-block-disk-queue-read-ahead-kb).

## Quer saber mais?

Se precisar de formação ou de assistência técnica para implementar as nossas soluções, contacte o seu representante comercial ou clique em [esta ligação](https://www.ovhcloud.com/pt/professional-services/) para obter um orçamento e solicitar uma análise personalizada do seu projecto aos nossos especialistas da equipa de Serviços Profissionais.

Fale com a nossa comunidade de utilizadores em <https://community.ovh.com/en/>.
