---
title: Configurar o seu MegaRAID em RAID 0
slug: using-the-maximum-amount-of-disk-space
excerpt: "Descubra como configurar os discos do seu servidor em RAID 0, de forma a explorar o máximo de espaço utilizável"
section: RAID e discos
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

**Última atualização: 08/07/2022**
 
## Objetivo

O RAID (Redundant Array of Independent Disks) é um conjunto de técnicas que atenuam a perda de dados num servidor, replicando as informações em vários discos.

O nível de RAID predefinido dos servidores OVHcloud é o RAID 1. que duplica o volume ocupado pelos seus dados, reduzindo assim o espaço disponível.

**Saiba como configurar os discos do seu servidor em RAID 0, de forma a explorar o máximo de espaço utilizável.**

> [!warning]
> 
> Atenção: o RAID 0 não oferece **tolerância a avarias** nem **redundância de dados**. Isto torna muito provável a perda de informações em caso de falha de disco.
> 

## Requisitos

- Dispor de um [servidor dedicado](https://www.ovhcloud.com/pt/bare-metal/){.external} com um RAID por hardware.
- Ter acesso ao servidor através de SSH enquanto administrador (root)

## Instruções

### Utilizar a Área de Cliente OVHcloud

Na sua [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt), selecione o seu servidor indo à secção `Bare Metal Cloud`{.action} e, a seguir, `Servidores dedicados`{.action}. 

Procure o "Último Sistema Operativo (OS) instalado pela OVHcloud" na zona `Informações gerais`{.action} e clique em `...`{.action} e depois em `Instalar`{.action} um novo sistema operativo com a sua configuração RAID 0 personalizada.

Selecione **Instalar a partir de um template OVHcloud** e clique em `Seguinte`{.action}.

![MegaRAID](images/server_installation_raid0_1.png){.thumbnail}

Selecione o sistema operativo que deseja instalar e clique em `Seguinte`{.action}.

Selecione as casas **Personalizar a configuração do RAID** por hardware e **Personalizar a configuração das partições** e clique em `Seguinte`{.action}.

![MegaRAID](images/server_installation_raid0_2.png){.thumbnail}

Selecione "raid0" na lista de RAID pendente e clique em `Seguinte`{.action}.

![MegaRAID](images/server_installation_raid0_3.png){.thumbnail}

Configure as partições conforme as suas necessidades e clique em `Seguinte`{.action}.

![MegaRAID](images/server_installation_raid0_4.png){.thumbnail}

Finalmente, clique em `Confirmar`{.action}.

![MegaRAID](images/server_installation_raid0_5.png){.thumbnail}

Depois de configurar o servidor, verifique o tamanho das partições ligando-se através de SSH e executando o seguinte comando:

```sh
df -h
```

### Utilizar o modo rescue

Na sua [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt), selecione o seu servidor indo à secção `Bare Metal Cloud`{.action} e, a seguir, `Servidores dedicados`{.action}.

Procure "Boot" na zona **Informações gerais** e clique em `...`{.action} e depois em `Alterar`{.action} para alterar o sistema de arranque.

![MegaRAID](images/rescue_mode_raid0_1.png){.thumbnail}

De seguida, selecione `Fazer boot em modo rescue`{.action} e escolha `rescue-customer`{.action} na lista pendente.

No campo "Receber as credenciais de acesso ao modo no endereço de e-mail:", indique outro endereço de e-mail se não deseja que as credenciais de acesso sejam enviadas para o endereço principal da sua conta OVHcloud.

![MegaRAID](images/rescue_mode_raid0_2.png){.thumbnail}

Clique em `Seguinte`{.action} e, a seguir, em `Confirmar`{.action} no ecrã que aparece.

![MegaRAID](images/rescue_mode_raid0_3.png){.thumbnail}

Concluída a alteração, clique em `...`{.action} à direita do "Estado" na zona **Estado dos serviços.** 

Clique no botão `Reiniciar`{.action} e o servidor reinicie em modo rescue. Esta operação pode demorar alguns minutos. 

![MegaRAID](images/server_installation_raid0_6.png){.thumbnail}

Quando o servidor reiniciar, ligue-se ao servidor através de SSH utilizando as suas informações de acesso ao modo rescue. Estes foram-lhe enviados para o endereço de e-mail principal da conta ou, caso exista, para o endereço de e-mail indicado anteriormente.

A partir da linha de comandos, introduza os seguintes comandos para eliminar os parâmetros RAID existentes. Todos os dados do RAID serão eliminados:

```sh
MegaCli -CfgLdDel -L0 -a0
MegaCli -CfgLdDel -Lall -aAll
```

Introduza o seguinte comando para recuperar os identificadores de localização dos seus discos:

```sh
MegaCli -PdList -aALL | egrep "Slot|Device ID"
```

Introduza os seguintes comandos para configurar o RAID 0:

```sh
MegaCli -CfgLDAdd -R0[252:0,252:1] -a0
```

Neste exemplo, 252 é o identificador da caixa do disco.

Depois de definir o novo nível de RAID, pode verificar os parâmetros através do seguinte comando:

```sh
MegaCli -LDInfo -Lall -a0 | grep -i size
```

## Quer saber mais?

[Substituir um disco a quente para um servidor em RAID por hardware](https://docs.ovh.com/gb/en/dedicated/hotswap-raid-hard/)

[Substituir um disco a quente para um servidor em RAID por software](https://docs.ovh.com/pt/dedicated/hotswap-raid-software/)

[Gestão do RAID por hardware](https://docs.ovh.com/gb/en/dedicated/raid-hard/)

Junte-se à nossa comunidade de utilizadores em <https://community.ovh.com/en/>.