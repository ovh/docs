---
title: Ativar e utilizar o modo rescue no seu VPS
slug: rescue
excerpt: Saiba como ativar e utilizar o modo rescue no seu VPS
section: Diagnóstico e Modo Rescue
---

**Última atualização: 02/05/2022**

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

## Objetivo

O modo rescue é uma ferramenta do seu VPS. que lhe permite iniciar o seu servidor num sistema operativo temporário. Assim, poderá diagnosticar e resolver problemas no seu sistema operativo principal. 

Através do modo rescue, pode:

  - alterar a palavra-passe root;
  - diagnosticar problemas de rede;
  - reparar um sistema operativo defeituoso;
  - corrigir uma má configuração da firewall por software;
  - testar as performances do disco.

Verificar o modo rescue também ajuda a determinar se existe um problema relacionado com o software ou o hardware. Recomendamos que o faça antes de contactar as nossas equipas de suporte.

> [!warning]
>
> Se tem serviços em produção no seu VPS, o modo rescue interrompe-os enquanto a máquina não for reiniciada no modo normal.
> 

**Este guia explica como ativar e utilizar o modo rescue no seu VPS.**

## Requisitos

- Ter acesso à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}.
- Ter o seu [VPS OVHcloud](https://www.ovhcloud.com/pt/vps/){.external} já configurado.

> [!warning]
>
> A utilização e a gestão dos serviços da OVHcloud são da responsabilidade do cliente. A OVH não tem permissões de acesso aos VPS e o cliente é o único responsável pela gestão e pela segurança do serviço. Este guia fornece as instruções necessárias para realizar as operações mais habituais. Se encontrar alguma dificuldade relacionada com o processo, deverá contactar um serviço especializado. Para mais informações, aceda à secção abaixo intitulada: «Quer saber mais?»
> 

## Instruções

### Ativação do modo rescue

Ligue-se à sua [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt), vá à secção `Bare Metal Cloud`{.action} e selecione o seu servidor na secção `Servidor privado virtual`{.action}.

#### Com uma oferta VPS atual

No separador `Acolhimento`{.action}, clique em `...`{.action} junto de "Boot" na zona **O seu VPS**.

![configuração do modo rescue](images/rescue_new.png){.thumbnail}

Selecione `Reiniciar em modo de rescue`{.action} no menu.

#### Com uma oferta VPS antiga

No separador `Acolhimento`{.action}, clique no link de atalho intitulado `Reiniciar em modo rescue`{.action}.

![configuração do modo rescue](images/rescue_legacy.png){.thumbnail}

Aparecerá uma janela, clique em `Confirmar`{.action} para lançar o reboot em modo rescue.

### Utilização do modo rescue

Depois de iniciar a reinicialização, uma barra de progresso indica o avanço da tarefa. Tenha em atenção que esta operação pode demorar alguns minutos.

> [!primary]
>
> Receberá um email automatizado com as informações de identificação SSH para aceder ao modo rescue. Aguarde a receção do e-mail antes de tomar qualquer outra medida. Este e-mail também está disponível na [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt). Para aceder, clique no seu ID de cliente OVHcloud no canto superior direito e selecione `E-mails de serviço`{.action}.
>

De seguida, deverá aceder ao servidor através de uma linha de comandos ou através de uma ferramenta SSH, utilizando a palavra-passe root gerada para o modo rescue.

Por exemplo:

```bash
ssh root@your_server_IP
root@your_server_password:
```

> [!warning]
> 
> É provável que o seu cliente SSH bloqueie a ligação em primeiro lugar, devido a uma incompatibilidade da marca ECDSA. Isto é normal, pois o modo rescue utiliza o seu próprio servidor SSH temporário.
>
> Para contornar este problema, pode comentar a pegada do seu sistema habitual adicionando um `#` à frente da sua linha no ficheiro *known_hosts*. Tenha o cuidado de retirar este caráter antes que o servidor volte ao estado normal.
>
A maior parte das modificações efetuadas no seu servidor através de SSH em modo rescue requerem a montagem de uma partição. De facto, este modo possui o seu próprio sistema de ficheiros temporários. Por isso, as modificações efetuadas no sistema de ficheiros em modo rescue serão perdidas durante o reboot do servidor em modo normal.

Uma vez ligado, verifique os discos disponíveis com este comando:

```bash
[RESCUE] root@vps-111111d:~ $ lsblk
NAME MAJ:MIN RM SIZE RO TYPE MOUNTPOINT
sda 8:0 0 2.5G 0 disk
└─sda1 8:1 0 2.5G 0 part /
sdb 8:16 0 80G 0 disk
└─sdb1 8:17 0 80G 0 part
```

A seguir, suba a partição:

```bash
[RESCUE] root@vps-111111d:~ $ mount /dev/sdb1 /mnt
```

Os seus dados estarão agora acessíveis a partir da pasta `/mnt`.

Uma vez terminadas as ações em modo de rescue, reinicie o VPS em modo "normal" a partir da [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt).

![rescue mode control panel](images/rescue_exit.png){.thumbnail}

## Quer saber mais?

[Alterar a palavra-passe root de um VPS](../root-password/)

[Consulte o manual Introdução ao SSH](../../dedicated/ssh-introducao/)

Junte-se à nossa comunidade de utilizadores <https://community.ovh.com/en/>.
