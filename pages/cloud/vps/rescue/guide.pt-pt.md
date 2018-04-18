---
title: Ativar o Modo Rescue para um VPS
slug: rescue
excerpt: Saiba como iniciar o VPS em Modo Rescue
section: Diagnóstico e Modo Rescue
---

**Última atualização 18/04/2018**

## Sumário

O Modo Rescue permite iniciar o seu servidor com uma configuração OVH independente. Desta forma, o seu disco poderá ser montado como uma partição autónoma.

Com esta solução pode realizar todo o tido de testes e alterações, evitando um número elevado de operações no servidor. Este tipo de acesso também é útil para corrigir um erro que levou à interrupção do acesso ao disco do servidor.

> [!warning]
>
> O Modo Rescue irá interromper as operações em curso. Estas só serão retomadas quando o servidor for reiniciado no modo normal.
> 

**Saiba como iniciar o VPS em Modo Rescue**


## Requisitos

- Aceder à [Área de Cliente](https://www.ovh.com/auth/?action=gotomanager){.external}.


## Instruções

Depois de efetuado o acesso à Área de Cliente, é necessário aceder à secção `Cloud`{.action} e escolher o VPS na coluna da esquerda.

![Secção VPS na Área de Cliente](images/vps_rescue1.png){.thumbnail}

No ecrã principal do seu VPS, clique no botão `Reiniciar em Modo de Rescue`{.action} e confirme o reinício do vps nesta modalidade.

![Confirmação do Modo Rescue](images/vps_rescue2.png){.thumbnail}

Irá visualizar uma barra que indica o progresso do processo de reinício do sistema (pode demorar vários minutos):

![Progresso do Mode Rescue](images/rescue_task.png){.thumbnail}

> [!primary]
>
> Depois de concluída esta etapa, irá receber um e-mail com os dados de acesso SSH (acesso em Modo Rescue). Este e-mail também estará disponível na Área de Cliente, secção OVH PT, `A Minha Conta`{.action}, `E-mails recebidos`{.action}.
> 

Já pode aceder ao VPS em Modo Rescue através do acesso SSH. Depois de efetuadas as ações necessárias, pode reiniciar o VPS a partir do disco principal, usando o botão `Reiniciar o meu VPS`{.action}.


## Quer saber mais?

[Introdução ao SSH](https://docs.ovh.com/pt/dedicated/ssh-introducao/){.external}

Ou fale com a nossa comunidade de utilizadores: <https://community.ovh.com/en/>.