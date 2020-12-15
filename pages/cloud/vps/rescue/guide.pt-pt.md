---
title: Ativar o Modo Rescue para um VPS
slug: rescue
excerpt: Saiba como iniciar o VPS em Modo Rescue
section: Diagnóstico e Modo Rescue
---

**Última atualização: 24 de novembro de 2020**

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

**Este guia explica como reiniciar o VPS em modo rescue.**

## Requisitos

- Ter acesso à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}.
- Ter o seu [VPS OVHcloud](https://www.ovhcloud.com/pt/vps/){.external} já configurado.

> [!warning]
>
> A utilização e a gestão dos serviços da OVHcloud são da responsabilidade do cliente. A OVH não tem permissões de acesso aos VPS e o cliente é o único responsável pela gestão e pela segurança do serviço. Este guia fornece as instruções necessárias para realizar as operações mais habituais. Se encontrar alguma dificuldade relacionada com o processo, deverá contactar um serviço especializado. Para mais informações, aceda à secção abaixo intitulada: «Quer saber mais?»
> 

## Instruções

### Ativação do modo rescue

Ligue-se à sua Área de [Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager), aceda à secção `Bare Metal Cloud`{.action} e selecione o seu servidor na lista de navegação à esquerda em `VPS`{.action}.

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
> Receberá um email automatizado com as informações de identificação SSH para aceder ao modo rescue. Aguarde a receção do e-mail antes de tomar qualquer outra medida. Este e-mail também está disponível na Área de [Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager). Para aceder, clique no seu ID de cliente OVHcloud no canto superior direito e selecione `E-mails de serviço`{.action}.
>

Pode desde já conectar-se ao VPS via SSH, utilizando as informações de identificação do modo rescue. Uma vez terminadas as ações em modo de rescue, reinicie o VPS em modo "normal" a partir da [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager).

## Quer saber mais?

[Alterar a palavra-passe root de um VPS](../root-password/)

[Consulte o manual Introdução ao SSH.](../../dedicated/ssh-introducao/)

Junte-se à nossa comunidade de utilizadores <https://community.ovh.com/en/>.
