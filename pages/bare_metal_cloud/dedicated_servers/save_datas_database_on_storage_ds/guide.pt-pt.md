---
title: 'Fazer o backup das informações e das bases de dados para um servidor de armazenamento'
excerpt: 'Proteger dados em 5 passos'
updated: 2018-09-12
---

**Última atualização: 12/09/2018**

## Introdução 

Os seus dados informáticos são sensíveis: a sua perda ou alteração pode afetar a sua atividade. Uma vez que existem sempre riscos, aconselhamos que efetue cópias de segurança diariamente e, de preferência, para um servidor ou uma solução de armazenamento diferente das suas infraestruturas de produção.

A OVHcloud propõe uma gama de [servidores dedicados](https://www.ovhcloud.com/pt/bare-metal/storage/){.external} adaptados às suas operações de armazenamento e que incluem, no mínimo, quatro discos rígidos. É possível utilizar estes recursos para armazenar uma infraestrutura alojada na OVHcloud ou noutro fornecedor, através da rede pública (Internet).

Neste tutorial, ficará a saber como configurar um servidor de armazenamento da OVHcloud para responder às suas necessidades, como criar a arborescência de receção de backups e como automatizar o backup dos dados dos dois servidores distantes através do protocolo SCP.


## Requisitos

### O que precisa de saber

- Ter conhecimentos de administração em Linux.
- Aceder através de SSH. 
- Aceder a uma base de dados. 
- Fazer o backup de bases de dados.
- Instalar uma distribuição (neste caso, Debian 9.4).

### O que precisa de ter

- Um [servidor de armazenamento OVHcloud](https://www.ovhcloud.com/pt/bare-metal/storage/){.external}.
- Uma infraestrutura de produção ([VPS](https://www.ovhcloud.com/pt/vps/){.external}, [servidores dedicados](https://www.ovhcloud.com/pt/bare-metal/){.external}, [Public Cloud](https://www.ovhcloud.com/pt/public-cloud/){.external}, etc.).
- Um acesso SSH configurado entre o servidor de armazenamento e a infraestrutura de produção.
- Recomendação: uma rede privada entre os servidores ([vRack OVHcloud](https://www.ovh.pt/solucoes/vrack/){.external}).



## Instruções

### 1 - Escolher o modo RAID apropriado

A OVHcloud dispõe de uma gama de [servidores de armazenamento](https://www.ovhcloud.com/pt/bare-metal/storage/){.external}, cujas configurações materiais incluem vários discos rígidos. No exemplo que apresentamos, dispomos de um RAID por software (ou _soft RAID_) de quatro discos com capacidade de 6 TB cada.

A OVHcloud permite-lhe escolher a configuração de armazenamento dos dados com as opções de RAID 0, 1, 5, 6 e 10. Cada um destes modos apresenta vantagens e desvantagens no que diz respeito ao desempenho e à resiliência. Assim, com quatro discos, é possível armazenar informações de forma eficiente em RAID 5, 6 ou 10 (os RAID 0 e 1 não são adequados para esta situação).

Veja aqui algumas explicações sobre estes tipos de RAID.

#### RAID 5

Este modo distribui os seus dados por três discos rígidos, no mínimo, e utiliza um quarto para reconstituir os outros discos em caso de falha, armazenando informações de paridade. Assim, um dos seus discos tem tolerância a falhas. Os desempenhos de leitura são melhorados, mas não os de escrita (devido ao bit de paridade).

No nosso caso, a capacidade do volume é de 18 TB.

#### RAID 6

Esta é uma versão melhorada do RAID 5 com um mínimo de quatro discos rígidos. As informações de paridade são escritas em dois discos, o que garante uma maior redundância (tolerância a falhas em dois discos). Os desempenhos de leitura/escrita também são melhorados.

No nosso caso, a capacidade do volume é de 12 TB.

#### RAID 10

Este modo é a combinação de dois processos. Um deles consiste em “quebrar” os seus dados e em armazená-los em dois discos, o que proporciona um maior desempenho pois podem ser solicitados em simultâneo. O outro duplica os seus dados em modo “espelho” em dois discos. Assim, terá uma tolerância a falhas em dois discos do mesmo rack.

No nosso caso, a capacidade do volume é de 12 TB.

Não há um RAID melhor que o outro: todos eles respondem a necessidades diferentes. No nosso exemplo, pretendemos uma tolerância a falhas de disco otimizada, conservando bons desempenhos de leitura/escrita. Por essa razão, optámos por uma instalação em RAID 6.


### 2 - Instalar e configurar o servidor

Aceda à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external} e instale o seu servidor. Tal como indicado anteriormente, iremos utilizar o Debian 9.4. Para obter mais informações, consulte o nosso manual que explica os [Primeiros passos com um servidor dedicado](/pages/bare_metal_cloud/dedicated_servers/getting-started-with-dedicated-server){.external}.

Depois de selecionar o sistema para a instalação, selecione a opção `Personalizar a configuração das partições`{.action}.

![Personalizar a configuração das partições](images/custompartition.png){.thumbnail}

Neste passo, vai poder modificar o tipo de RAID do seu `/home` (1) e, caso o pretenda, expandir a partição (2).

![Modificação da /home](images/partition_customization_menu.png){.thumbnail}

> [!primary]
> 
> O nível de RAID da `/boot` não pode ser modificado.
> 

### 3 - Criar diretórios alvo

Para armazenar os backups de forma clara, vamos criar diretórios alvo. Estabeleça uma ligação com o seu servidor dedicado através do protocolo SSH e, em seguida, visualize o seu particionamento:

```sh
df -h

Filesystem      Size    Used Avail Use% Mounted on
udev            7,8G       0  7,8G   0% /dev
tmpfs           1,6G     51M  1,6G   4% /run
/dev/md3         20G    740M   18G   4% /
tmpfs           7,9G       0  7,9G   0% /dev/shm
tmpfs           5,0M       0  5,0M   0% /run/lock
tmpfs           7,9G       0  7,9G   0% /sys/fs/cgroup
/dev/md2        487M     32M  426M   7% /boot
/dev/sda1       510M    152K  510M   1% /boot/efi
/dev/md4         11T     31M   11T   1% /home
```

Crie a sua arborescência de ficheiros através do comando `mkdir`. No nosso exemplo, o servidor vai receber backups de dois servidores web em produção. Por isso, criamos dois diretórios: *servidor1* e *servidor2*. Cada um deles inclui uma subpasta *dump* para os backups SQL e uma subpasta *data* para os dados web.

O comando `tree` permite-lhe visualizar a arborescência de um diretório. Por exemplo, pode obter um resultado deste género:

```sh
tree
.
└── backups
    ├── servidor1
    │   ├── datas
    │   └── dump
    └── servidor2
        ├── datas
        └── dump

7 directories, 0 files
```

### 4 - Transferir dados dos servidores distantes para o servidor de armazenamento

O servidor de armazenamento já está pronto para receber os vários backups.

> [!primary]
> 
> Se as suas infraestruturas de produção estiverem alojadas na OVHcloud e incluírem a nossa solução de redes privadas vRack, não hesite em configurá-las neste sentido. Desta forma, os seus backups não circularão no rede pública (Internet).
>

Este passo consiste em aceder aos seus servidores de produção através do protocolo SSH que, por sua vez, vão aceder ao seu servidor de armazenamento através do protocolo SCP. Para isso, todos estes recursos devem poder comunicar entre eles através do protocolo SSH.

Primeiro, é preciso efetuar um backup da base de dados MySQL, geralmente chamada *dump*. Para uma utilização avançada, consulte a documentação oficial da sua base de dados.

```sh
mysql --host=localhost --user=myname --password=password mydb
mysqldump --all-databases > dump.sql
```

Depois de configurar o SSH, poderá aceder aos seus servidores de produção e utilizar o comando `scp`.

```sh
scp o_seu_ficheiro_dump user@IP_Stockage:/home/backups/servidor1/dump

The authenticity of host 'IP_Stockage (IP_Stockage)' can't be established.
ECDSA key fingerprint is SHA256:fmmeu5feHlnaUC56+2DB73sgNd4aMPVkS7oEtcyO2o8.
Are you sure you want to continue connecting (yes/no)? yes
Warning: Permanently added 'IP_Stockage' (ECDSA) to the list of known hosts.

user@IP_Stockage's password: 
```

> [!primary]
> 
> Se alterou a porta SSH do seu servidor de armazenamento, deverá adicionar o argumento `-P`.
>

Repita esta operação para os seus ficheiros. O comando `scp` também permite efetuar um backup de pastas completas.

```sh
scp -r diretorio_para_guardar user@IP_Stockage:/home/backups/servidor1/datas/2018_01_01
```

Estão disponíveis outros meios gratuitos mais eficientes como o *rsync* que dispõem de funcionalidades avançadas, tal como a recuperação de um envio falhado.


### 5 - Realizar um planeamento diário básico através do cron

Aceder diariamente a todos os servidores que precisam de backup pode tornar-se complicado. Existem formas básicas de automatizar uma tarefa, sendo que a mais conhecida é o programa Unix *cron*. Permite planear linhas de comando por hora, dia, mês ou ano. Cada utilizador Unix possui uma lista de tarefas planeadas conhecida como *crontab*.

Para uma maior segurança, recomenda-se a criação de uma conta de utilizador Unix adicional e a atribuição de tarefas planeadas.

Para editar esta lista, execute:

```sh
crontab -e
```

Adicione a seguinte linha de comandos para automatizar um envio do seu dump SQL todos os dias do ano, às 2h da manhã.

```sh
0 2 * * * scp o_seu_ficheiro_dump user@IP_Stockage:/home/backups/servidor1/dump >/dev/null 2>&1
```

A sintaxe de um *crontab* é particular: não será detalhada aqui, mas vários sites permitem a sua criação.



## Conclusão

Graças a este tutorial, configurou um servidor de armazenamento OVHcloud que corresponde às suas necessidades e automatizou o backup de ficheiros nesse mesmo servidor. Trata-se de uma etapa importante para evitar as perdas de dados e para proteger a sua atividade.

Tal como explicado aqui, existem outros métodos gratuitos ou pagos para otimizar os seus backups. Se possuir dados sensíveis, sugerimos que os encripte e que os utilize apenas em redes privadas, como a vRack da OVHcloud.