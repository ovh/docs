---
title: 'Como copiar dados de um servidor dedicado para outro utilizando rsync'
slug: "copiar-dados-servidor-rsync"
excerpt: 'Copie facilmente os dados de um servidor dedicado para outro graças ao rsync'
section: Tutoriais
---

## Introdução

No caso de uma migração ou de um backup, é possível que tenha de copiar ou transferir os dados de um servidor dedicado para outro. 

Distribuído com uma licença GNU GPL, rsync (“remote synchronization”) é um software open source de sincronização de ficheiros capaz de efetuar uma sincronização unidirecional, ou seja, copiar os ficheiros de um servidor de origem para um servidor de destino. 

**Este tutorial explica como copiar dados de um servidor dedicado OVHcloud para outro utilizando rsync.**

> [!warning]
>
Este tutorial explica a utilização de uma ou várias soluções da OVHcloud através de ferramentas externas e descreve as operações realizadas num contexto preciso. Deverá adaptá-las consoante a sua situação. Se necessitar de ajuda, recomendamos que entre em contacto com um fornecedor especializado ou que partilhe as suas dúvidas com o resto da comunidade: <https://community.ovh.com/en/> A OVH não lhe poderá fornecer assistência.
>

## Requisitos


### O que precisa de saber

*     Ter conhecimentos de gestão em Linux.
*     Saber instalar novos pacotes 
*     Saber ligar-se através de SSH


### O que precisa de ter

*     Dispor de pelo menos dois servidores dedicados OVHcloud que funcionam com uma distribuição GNU/Linux.
*     Dispor de um acesso *root* na máquina de origem.
*     Dispor de um acesso *SSH* na máquina de destino.

## Instruções


### 1 - Instalar o rsync

O servidor de origem utilizado no âmbito deste tutorial funciona com Debian 9.4. Uma vez que esta distribuição dispõe de forma nativa do rsync nos repositórios, não é necessário completá-los, e o rsync pode ser instalado diretamente. 

Para isso, ligue-se através de SSH enquanto super utilizador (ou root) na sua máquina de origem, e instale o rsync através do seguinte comando:

```sh
apt-get update && apt-get install rsync
```

### 2 - Inicie a transferência


#### Sem excluir nenhuma pasta da cópia

Rsync permite copiar todas as pastas, subpastas e ficheiros incluídos no caminho indicado para outra máquina.

Para isso, a estrutura geral do comando utilizado neste tutorial será deste tipo: `rsync -av source/ destination/`  

Embora o rsync utilize o protocolo SSH para se ligar à máquina de destino, é necessário adicionar as informações necessárias. A estrutura do comando deve ser completado da seguinte forma: `rsync -av *YourLocalFolder*/ login@server:/*DestinationFolder*/`

Por outro lado, se alterou a porta SSH para outra sem ser a porta 22, será necessário especificar o número da porta a utilizar para estabelecer a ligação SSH adicionando `-e 'ssh -p X'` ao seu comando, onde o “X” será a porta SSH que deve ser utilizada.

O comando que deve utilizar para copiar os seus dados de um servidor para outro através de rsync será o seguinte:

```sh
rsync -av -e 'ssh -p X' YourLocalFolder/ login@server:/DestinationFolder/
```

> [!primary]
>
> Por predefinição, nenhum indicador permitirá controlar precisamente o progresso da cópia.
> Para poder seguir facilmente (estatísticas detalhadas, expressão em MB, GB, etc...) e em tempo real o progresso da transferência, aconselhamos que adicione o argumento `-P --stats --human-readable` ao comando, que ficará então como segue:
>
> ```sh
> rsync -av -P --stats --human-readable -e 'ssh -p X' YourLocalFolder/ login@server:/DestinationFolder/
> ```


#### Excluir uma ou várias pastas da cópia

Se o rsync permitir transferir todas as pastas de uma máquina, poderá querer excluir determinadas pastas ou subpastas da cópia que está prestes a realizar. Nesse caso, deverá indicar o seu nome.

De forma geral, recomenda-se que exclua da transferência a cache e os ficheiros de sistema temporários do servidor de origem, de forma a evitar qualquer conflito no servidor de destino. 

Aqui tem uma lista não exaustiva de algumas das pastas que podem conter este tipo de ficheiros num servidor baseado numa distribuição GNU/Linux: 

* /dev/*
* /proc/* 
* /sys/*
* /tmp/*
* /run/*
* /media/*
* /lost+found
 
Depois de determinar a lista de pastas ou subpastas a serem excluídas, o argumento `--exclude` permite indicar ao rsync que deve ignorar estas pastas ao realizar a cópia. 
 
Este argumento deve ser colocado no final do comando, repetindo-o tantas vezes quanto o número de pastas ou subpastas. A estrutura geral deste comando será `rsync --exclude="Folder_Name" --exclude="Other_Folder_name" source/ destination/`

> [!primary]
>
Tenha em conta que é necessário indicar o local relativo à pasta, já que o rsync não admite caminhos absolutos. Assim, se uma das pastas que pretende excluir estiver localizada em “/home/user/test” e que está situado em “/test”, deverá indicar “-exclude="test"” (caminho relativo) e não “--exclude="/home/user/test"” (caminho absoluto).
>


Tendo em conta os elementos indicados previamente, o comando de transferência será o seguinte:
 	
```sh
rsync -av -P --stats --human-readable -e 'ssh -p X' --exclude="Folder_Name" --exclude="Other_Folder_name" YourLocalFolder/ login@server:/DestinationFolder/
```

## Conclusão

Neste tutorial, explicámos como copiar os dados de um servidor dedicado para outro graças ao rsync.

Para obter mais informações, não hesite em partilhar a sua experiência com a nossa comunidade de utilizadores em <https://community.ovh.com/en/>
