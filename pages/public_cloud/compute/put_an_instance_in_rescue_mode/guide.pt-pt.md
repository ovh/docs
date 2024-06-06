---
title: "Como ativar o modo rescue numa instância Public Cloud"
excerpt: "Descubra como ativar e utilizar o modo rescue OVHcloud para a sua instância Public Cloud"
updated: 2024-06-03
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

## Objetivo

Em caso de má configuração ou perda da chave SSH, é possível que deixe de poder aceder à sua instância.

Nestas circunstâncias, poderá utilizar o modo de resgate (rescue) para reconfigurar a sua instância ou recuperar os seus dados. 

**Este guia explica como reiniciar a instância Public Cloud da OVHcloud em modo rescue e aceder aos seus ficheiros.**

## Requisitos

- uma [Instância Public Cloud](https://www.ovhcloud.com/pt/public-cloud/){.external} na sua conta OVHcloud
- acesso à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}

## Instruções

> [!alert]
>
> Atualmente, o modo rescue para as instâncias Metal não está acessível através da Área de Cliente OVHcloud. Para mais informações, consulte o nosso guia dedicado ao [modo rescue para as instâncias Metal](/pages/public_cloud/compute/rescue_mode_metal_instance).

### Ativar o modo rescue

Primeiro, inicie sessão na [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external} e clique no menu `Public Cloud`{.action}.

Em seguida, selecione o seu projeto Public Cloud no menu lateral situado à esquerda do ecrã e vá até Instâncias.

Clique nos três pontos situados à direita da instância e selecione a opção `Reiniciar em modo rescue`{.action}.

![área de cliente](images/rescue2022.png){.thumbnail}

Surgirá então a janela que lhe permite executar esta ação. Clique na lista pendente para selecionar a distribuição Linux que deseja usar em modo rescue e clique no botão `Reiniciar`{.action}. 

![área de cliente](images/rescue2.png){.thumbnail}

Depois de reiniciar a instância em modo rescue, uma caixa de informação apresenta os métodos de acesso disponíveis.

![control panel](images/rescuedata.png){.thumbnail}

A sua **palavra-passe do modo rescue** temporário só será apresentada na consola VNC. Clique na sua instância na tabela e aceda ao separador `Console VNC`{.action} para a recuperar.

<table><tbody><tr><td><img alt="VNC console" class="thumbnail" src="/images/vncconsole.png" loading="lazy"></td><td><img alt="VNC rescue" class="thumbnail" src="/images/vncrescue.png" loading="lazy"></td></tr></tbody></table>

### Aceder à sua informação

Sempre que o modo rescue é ativado, a informação relativa à sua instância é anexada sob a forma de um disco adicional. Será então necessário montar este disco, procedendo aos seguintes passos.

Primeiro, estabeleça uma [conexão SSH](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction) com a sua instância. Assim que estiver conectado, verifique os discos disponíveis utilizando o seguinte comando:

```bash
lsblk
```

O resultado será semelhante ao seguinte exemplo de saída:

```console
NAME    MAJ:MIN RM  SIZE RO TYPE MOUNTPOINTS
sda       8:0    0  2.9G  0 disk
└─sda1    8:1    0  2.9G  0 part /
sdb       8:16   0   25G  0 disk
├─sdb1    8:17   0   24G  0 part
├─sdb14   8:30   0    4M  0 part
├─sdb15   8:31   0  106M  0 part
└─sdb16 259:0    0  913M  0 part
```

No modo rescue, `sda` é o disco em modo rescue e `sda1` é a partição de backup principal montada em `/`.

Neste exemplo, o disco principal é `sdb` e a partição do sistema é `sdb1` (indicada pelo tamanho).

Monte esta partição com o seguinte comando:

```bash
mount /dev/sdb1 /mnt/
```

A sua informação estará agora disponível a partir da pasta `/mnt`.

### Desativar o modo rescue

Após concluir as suas tarefas, pode desativar o modo rescue reiniciando normalmente a sua instância. Para o fazer, clique na seta voltada para baixo na sua instância e selecione `Sair do modo rescue`{.action}.

![área de cliente](images/rescueexit2022.png){.thumbnail}

> [!warning]
> Se o botão `Sair do modo rescue`{.action} não aparecer uma vez a instância em modo rescue, recomendamos que atualize o seu separador.
>

### Ativar o modo rescue usando a API OpenStack

Pode também ativar o modo rescue através da API OpenStack, utilizando o seguinte comando:

```bash
nova rescue INSTANCE_ID
```

Para sair do modo rescue, utilize o comando abaixo:

```bash
nova unrescue INSTANCE_ID
```

## Quer saber mais?

[Como substituir um par de chaves SSH numa instância](/pages/public_cloud/compute/replacing_lost_ssh_key)

Junte-se à nossa comunidade de utilizadores em <https://community.ovh.com/en/>.
