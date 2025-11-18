---
title: "Como reagir a uma atividade anormal detectada no seu alojamento web"
excerpt: "Descubra os passos a seguir quando uma atividade anormal é detectada no seu alojamento web OVHcloud"
updated: 2025-10-02
---

## Objetivo

Este guia explica por que uma **atividade anormal** pode ser detectada no seu alojamento web, quais são as **consequências temporárias** (bloqueios de segurança) e **como restaurar** as funcionalidades uma vez resolvido o problema.

**Descubra como reagir a uma atividade inusual no seu alojamento OVHcloud.**

## Requisitos

- Dispor de uma oferta de [alojamento web OVHcloud](/links/web/hosting).
- Estar conectado ao seu [espaço cliente OVHcloud](/links/manager).

## Instruções

> [!primary]
> Para proteger o seu site e os seus visitantes, ativamos automaticamente medidas de segurança sempre que uma atividade inusual é detectada no seu alojamento web. Não se trata sempre de um ataque: a causa pode ser, por exemplo, uma má configuração do seu site, um script de terceiros ou uma extensão defeituosa.

### Por que este mensagem aparece?

Detectámos uma atividade inusual que pode prejudicar o seu serviço:

- Caso 1 – **Malware detectados**: presença provável de **ficheiros maliciosos**.
- Caso 2 – **Volume inusual de envios de e-mails via PHP** (scripts/aplicações).
- Caso 3 – **Volume inusual de pedidos de saída** (ligações para o exterior).

Por motivos de segurança e consoante a situação, algumas funcionalidades podem ser temporariamente bloqueadas:

- **Acesso ao site** (caso 1)
- **Envio de e-mails via PHP** (caso 1 e caso 2).
- **Pedidos de saída (TCP OUT)** (caso 1 e caso 3).

### Quais são as consequências para o meu site?

- Consoante a atividade inusual detectada, o seu **site pode deixar de estar online** e não estar acessível aos visitantes.
- Os **envios de e-mails via PHP** (formulários, notificações, etc.) e/ou as **ligações de saída** (APIs externas, webhooks, atualizações via HTTP, etc.) podem estar **temporariamente desativados**, consoante o caso.

### Passos a seguir para resolver a situação

#### Caso 1 — Malware detectados

O seu alojamento contém provavelmente ficheiros maliciosos. Para compreender e tratar estas anomalias, siga o nosso guia [Caso de uso - Conselhos após um ataque ao seu site](/pages/web_cloud/web_hosting/cms_what_to_do_if_your_site_is_hacked).

**Uma vez concluída a limpeza**, consulte a secção [Levantar as medidas de segurança](#lift-security-measures) em baixo.

#### Caso 2 — Volume inusual de envios de e-mails via PHP

O seu site emitiu um número de e-mails via PHP superior ao normal. Isto pode ser **legítimo** (campanha, módulo newsletter) ou **não desejado** (utilização abusiva de um formulário, script mal configurado, extensão comprometida). Para compreender e resolver estas anomalias, consulte o nosso guia [Seguir e gerir os e-mails automatizados do seu alojamento web](/pages/web_cloud/web_hosting/mail_function_script_records).

**Uma vez normalizada a situação**, dirija-se à secção [Levantar as medidas de segurança](#lift-security-measures).

> [!primary]
>
> Esta medida não se aplica **aos envios de mensagens a partir do seu endereço de e-mail** (via webmail ou cliente de correio). Aplica-se exclusivamente aos **e-mails enviados a partir dos seus scripts** (função `mail()` PHP ou envio SMTP desencadeado por uma aplicação a partir do seu alojamento web).

#### Caso 3 — Volume inusual de pedidos de saída (TCP OUT)

O seu site efetua muitas ligações externas (APIs, atualizações, chamadas HTTP, etc.). Isto pode revelar um mau funcionamento. Para compreender e resolver estas anomalias, consulte o nosso guia [Caso de uso - Conselhos após um ataque ao seu site](/pages/web_cloud/web_hosting/cms_what_to_do_if_your_site_is_hacked).

**Uma vez concluída a limpeza**, consulte a secção [Levantar as medidas de segurança](#lift-security-measures) em baixo.

### Levantar as medidas de segurança <a name="lift-security-measures"></a>

> [!warning]
>
> Execute este passo **apenas após aplicar as recomendações acima** (diagnóstico, correcções/atualizações, segurança). Se uma atividade anormal for novamente detectada num próximo scan, as **medidas de segurança serão automaticamente reativadas**. Receberá uma nova notificação e os bloqueios permanecerão em vigor até à **resolução definitiva** da situação.

1. Conecte-se ao seu [espaço cliente OVHcloud](/links/manager), vá a `Web Cloud`{.action} e clique no seu alojamento web.
2. Uma **janela de alerta** aparece: `Atividade anormal no seu alojamento`. Se clicar no botão `Mais tarde`{.action}, uma **bandeira de alerta** `Atividade anormal detectada` aparece no topo da página. Clique em `Saiba mais`{.action} para reabrir a janela de alerta.
3. **Marque** a caixa: `Confirmo ter realizado todas as ações necessárias para resolver o problema`.
4. Clique em `Levantar as medidas de segurança`{.action}.
5. Uma **bandeira de confirmação** aparece no topo da página: `O seu alojamento está a ser analisado para levantar as medidas de segurança.` Siga o progresso clicando no link `Ver tarefas em curso`{.action} ou diretamente a partir do separador `Tarefas em curso`{.action}.

> [!warning]
>
> Certifique-se de que o seu serviço é **compatível com o desbloqueio automático** (certos estados não permitem levantar imediatamente as medidas).

## Quer saber mais? <a name="go-further"></a>

[Como proteger um site Web?](/pages/web_cloud/web_hosting/secure_your_website)

Para serviços especializados (referenciamento, desenvolvimento, etc.), contacte os [parceiros OVHcloud](/links/partner).

Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](/links/support).

Fale com a nossa [comunidade de utilizadores](/links/community).