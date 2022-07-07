---
title: Iniciar o seu servidor num kernel OVHcloud
slug: kernel-netboot
excerpt: Encontre aqui as etapas a seguir para iniciar o seu servidor num kernel OVHcloud a partir da rede.
section: Utilização avançada
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

**Última atualização: 25/02/2022**

## Objetivo

O Netboot é um serviço proposto gratuitamente pela OVHcloud e que permite iniciar o servidor dedicado OVHcloud num kernel já compilado. Uma vez configurado desta forma, o servidor carrega automaticamente o kernel a partir da rede. Não precisa de configurar mais nada. Este método permite-lhe igualmente atualizar muito simplesmente o seu kernel, pois a OVHcloud compila a última versão do kernel assim que ele estiver disponível e coloca-a à disposição no Netboot.

## Requisitos

- Ter um [servidor dedicado](https://www.ovhcloud.com/pt/bare-metal/).
- Ter acesso à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt).

## Instruções

### Inicie o seu servidor a partir do modo Network

> [!primary]
>
> Esta parte destina-se aos servidores que funcionam sob Linux. Para Windows, FreeBSD e as distribuições de virtualização, apenas os modos de boot no disco rígido ou em modo rescue são possíveis.
>

Aceda à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt). e aceda à secção `Bare Metal Cloud`{.action} e selecione o seu servidor em `Servidores dedicados`{.action}.

Procure "Boot" na zona **Informações gerais** e clique em `...`{.action} e depois em `Alterar`{.action}. 

![Netboot](images/netboot_2022.png){.thumbnail}

Selecione `Efetuar boot em modo network`{.action}.

![Netboot](images/netboot_005.png){.thumbnail}

Selecione o kernel (kernel) disponível e introduza o Root Device (partição onde se encontra a partição raiz do seu servidor).

Para determinar o Root Device do seu servidor, consulte o ficheiro /etc/fstab do seu servidor.

Em SSH:

```sh
cat /etc/fstab

/dev/sda1 / ext3 errors=remount-ro 0 1
/dev/sda2 /home ext3 defaults,grpquota,usrquota 1 2
/dev/sda3 swap swap defaults 0 0
  proc /proc proc defaults 0 0
sysfs /sys sysfs defaults 0 0
shm /dev/shm tmpfs nodev,nosuid,noexec 0 0
```

No nosso exemplo, o Root Device será /dev/sda1.

Clique em `Seguinte`{.action} e `Validar`{.action}.

Concluída a alteração, clique em `...`{.action} à direita do "Estado" na zona **Estado dos serviços.** Clique em `Reiniciar`{.action} para que o netboot seja tomado em conta.

![Netboot](images/netboot_004.png){.thumbnail}

## Quer saber mais?
 
Fale com a nossa comunidade de utilizadores: <https://community.ovh.com/en/>
