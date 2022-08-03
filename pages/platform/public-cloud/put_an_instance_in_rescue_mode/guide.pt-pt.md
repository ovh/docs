---
title: 'Passar uma instância em modo de rescue'
excerpt: 'Passar uma instância em modo de rescue'
slug: passar_uma_instancia_em_modo_de_rescue
legacy_guide_number: g2029
section: Gestão a partir da Área de Cliente OVHcloud
---

**Última atualização: 02/08/2022**

## Sumário

Em caso de má configuração ou perda da chave SSH, é possível que deixe de poder aceder à sua instância.

Nestas circunstâncias, poderá utilizar o modo de resgate (rescue) para reconfigurar a sua instância ou recuperar os seus dados. 

**Este guia mostra-lhe como passar uma instância para modo rescue**

## Requisitos

* uma [Instância Public Cloud](https://www.ovhcloud.com/pt/public-cloud/){.external} na sua conta OVHcloud
* acesso à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}
* acesso administrativo (root) à sua instância via SSH

## Instruções

### Ativar o modo rescue

Primeiro, inicie sessão na [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external} e clique no menu `Public Cloud`{.action}.

Em seguida, selecione o seu projeto Public Cloud no menu lateral situado à esquerda do ecrã e vá até Instâncias.

![área de cliente](images/compute2022.PNG){.thumbnail}

Clique nos três pontos situados à direita da instância e selecione a opção `Reiniciar em modo rescue`{.action}.

![área de cliente](images/rescue2022.png){.thumbnail}

Surgirá então a janela que lhe permite executar esta ação. Clique na lista pendente para selecionar a distribuição Linux que deseja usar em modo rescue e clique no botão `Reiniciar`{.action}. 

![área de cliente](images/rescue2.png){.thumbnail}

Depois de reiniciar a instância em modo rescue, uma caixa de informação apresenta os métodos de acesso disponíveis. A sua **palavra-passe do modo rescue** temporário só será apresentada na consola VNC. Clique na sua instância na tabela e aceda ao separador `Console VNC`{.action} para a recuperar.

![área de cliente](images/rescuedata.png){.thumbnail}


### Aceder à sua informação

Sempre que o modo rescue é ativado, a informação relativa à sua instância é anexada sob a forma de um disco adicional. Será então necessário montar este disco, procedendo aos seguintes passos.

Primeiro, estabeleça uma conexão SSH com a sua instância. Assim que estiver conectado, verifique os discos disponíveis utilizando o seguinte comando:

```
root@instance:/home/admin# lsblk

NAME MAJ:MIN RM SIZE RO TYPE MOUNTPOINT
vda 253:0 0 1G 0 disk
└─vda1 253:1 0 1023M 0 part /
vdb 253:16 0 10G 0 disk
└─vdb1 253:17 0 10G 0 part
```

Depois, monte a partição:

```
root@instance:/home/admin# mount /dev/vdb1 /mnt
```

A sua informação estará agora disponível a partir da pasta /mnt.

### Desativar o modo rescue

Após concluir as suas tarefas, pode desativar o modo rescue reiniciando normalmente a sua instância. Para o fazer, clique na seta voltada para baixo na sua instância e selecione `Sair do modo rescue`{.action}.

![área de cliente](images/rescueexit2022.png){.thumbnail}

> [!warning]
> Se o botão `Sair do modo rescue`{.action} não aparecer uma vez a instância em modo rescue, recomendamos que atualize o seu separador.
>

### Ativar o modo rescue usando a API OpenStack

Pode também ativar o modo rescue através da API OpenStack, utilizando o seguinte comando:

```
# root@server:~# nova rescue INSTANCE_ID
```

Para sair do modo rescue, utilize o comando abaixo:

```
# root@server:~# nova unrescue INSTANCE_ID
```

## Vá mais longe

Junte-se à nossa comunidade de utilizadores em <https://community.ovh.com/en/>.
