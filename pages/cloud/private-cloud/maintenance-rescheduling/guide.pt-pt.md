---
title: "Desativar uma manutenção programada no seu Hosted Private Cloud"
excerpt: "Saiba como transferir uma manutenção programada para o seu serviço Hosted Private Cloud powered by VMware"
slug: maintenance-rescheduling
section: Funcionalidades da OVHcloud
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

**Última atualização: 30/11/2022**

## Objetivo

Quando uma manutenção é programada no seu Hosted Private Cloud, ser-lhe-á enviado um e-mail de notificação para o avisar da data dessa manutenção. Se esta data não lhe convém, por exemplo por razões de produção, pode adiar esta manutenção para uma data à sua escolha, através da Área de Cliente OVHcloud ou da API OVHcloud.

> [!primary]
> Estamos a tentar adaptar-nos ao máximo à sua utilização da infraestrutura e às suas limitações. No entanto, por vezes temos de planear manutenções para as quais não será possível modificar a data e/ou a hora (manutenção de infraestruturas que envolvam vários clientes, intervenções urgentes para evitar um incidente, etc.).
>
> Para informação, quando uma data de manutenção pode ser alterada por si, as novas datas propostas estão incluídas num intervalo de tempo reduzido.

**Saiba como adiar a data de uma manutenção programada para o seu Hosted Private Cloud powered by VMware a partir da Área de Cliente OVHcloud ou da API OVHcloud.**

## Requisitos

- Ter recebido um e-mail de notificação de manutenção indicando especificamente que pode "**alterar a data de execução da manutenção**". Caso contrário, a data da manutenção não pode ser alterada.
- Ser o contacto administrador ou técnico da infraestrutura [Hosted Private Cloud powered by VMware](https://www.ovhcloud.com/pt/enterprise/products/hosted-private-cloud/).
- Ter acesso à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt) ou à [interface de administração dos seus serviços através da API](https://eu.api.ovh.com/).

## Instruções

> [!success]
> Os e-mails enviados pela OVHcloud também estão acessíveis a partir do seu [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt).<br>
> Clique no seu nome no canto superior direito do ecrã e, a seguir, em `E-mails de serviço`{.action} no menu à direita.

### A partir da Área de Cliente OVHcloud

Aceda à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt) com uma conta de administrador.

No menu `Hosted Private Cloud`{.action}, clique no separador `Operations`{.action}. Selecione `A fazer`{.action} no menu pendente que permite filtrar as operações.

A seguir, clique no botão `...`{.action} e em `Alterar a data de tratamento`{.action}.

![alteração horária](images/maintenance-date-edition01.png){.thumbnail}

> [!primary]
> Se o botão `Modificar a data de tratamento` {.ação} estiver cinzento, isto significa que esta manutenção não pode ser adiada.

Selecione uma data no calendário que lhe é apresentado. Apenas as datas não cinzentas podem ser selecionadas.<br>
Introduza manualmente uma nova hora para esta manutenção ou deixe inalterado o horário inicialmente previsto. Se ultrapassar a última hora autorizada, a última hora de programação possível será automaticamente proposta.<br>
**Atenção!** Para que seja tido em conta, o novo horário não deve continuar a ser sublinhado a azul. Depois de inserir o novo horário, clique ao lado do novo horário na janela, para que o horário não seja mais destacado em azul.

Finalmente, clique no botão `Alterar`{.action} para validar as suas modificações.

![alteração horária](images/maintenance-date-edition02.png){.thumbnail}

### A partir da API OVHcloud

Ligue-se à [interface de administração dos seus serviços através da API](https://eu.api.ovh.com/). Pode consultar o nosso manual "[Primeiros passos com as API OVHcloud](https://docs.ovh.com/pt/api/first-steps-with-ovh-api/)".

Execute a seguinte chamada API:

> [!api]
>
> @api {POST} /dedicatedCloud/{serviceName}/task/{task id}/changeMaintenanceExecutionDate
>

Introduza as variáveis:

- serviceName: a referência do seu PCC sob a forma `pcc-XX-XX-XX-XX-XX`.
- TaskId: trata-se da "referência da operação" de manutenção introduzida no e-mail de notificação que lhe foi enviado.
- ExecuçãoData: indicar a nova data de manutenção em formato `YYYY-MM-DTHH:MM+01:SS` (por exemplo, 2023-01-02T08:00:00+01:00 para manutenção programada a 02/01/2023 às 08h0 0 (UTC+1).

## Quer saber mais?

Junte-se à nossa comunidade de utilizadores em <https://community.ovh.com/en/>.