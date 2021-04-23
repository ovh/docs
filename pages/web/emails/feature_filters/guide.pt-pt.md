---
title: Criar filtros para os seus endereços de e-mail
slug: email-hosting-configuring-filters
legacy_guide_number: 1973
excerpt: Saiba como criar e configurar um filtro no seu endereço de e-mail
section: Funcionalidades dos endereços e-mail
order: 5
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

**Última atualização: 12/08/2020**

## Objetivo

Um filtro permite configurar as condições dos e-mails que recebe, bem como as ações que daí decorrem.

Por exemplo: deseja que todo o e-mail que contenha "[SPAM]" no assumpto seja eliminado.

- Condição = o assumpto do e-mail contém *SPAM*
- Ação = eliminar o e-mail

**Saiba como criar e configurar um filtro no seu endereço de e-mail**

## Requisitos

- Ter uma oferta de e-mail MX Plan ou um [Pack Alojamento Web](https://www.ovh.pt/alojamento-partilhado/){.external}.
- Ter acesso à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}.

## Instruções

Primeiro, aceda à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}.

Selecione o domínio na secção `Emails`{.action}.

Na tabela que lista os seus diferentes endereços de e-mail, clique no ícone `Filtro`{.action} do endereço em causa.

![emails](images/img_3239.jpg){.thumbnail}

Poderá aceder à lista dos filtros atualmente configurados para este endereço de e-mail. Para adicionar um, clique no botão à direita `Adicionar um Filtro`{.action}.

![emails](images/img_3240.jpg){.thumbnail}

### Compreender a configuração dos filtros de e-mails

![emails](images/img_3241.jpg){.thumbnail}

#### Informações

- **Nome do filtro:** Isto serve para diferenciar os seus filtros na Área de Cliente.
- **Prioridade:** Isto define a ordem de execução dos seus filtros numa mesma caixa de e-mail. Um filtro de prioridade 1 será executado antes de um filtro de prioridade 5.
- **Ativar o filtro:** Isto determina se o filtro será efetivo ou não (pode criar um filtro desselecionando a opção se deseja ativá-la mais tarde, por exemplo).

#### Regras

É aqui que vão configurar as condições, as regras do filtro.

Primeira escolha (Cabeçalho):

- **De:** Corresponde ao expedidor, por exemplo: "Se o expedidor ..."
- **A:** Corresponde ao destinatário, por exemplo: "Se o destinatário ..."
- **Assumpto da mensagem:** Corresponde ao assumpto da mensagem, exemplo: "Se o assumpto da mensagem ..."
- **Outra:** Outro parâmetro

Segunda escolha (Regra):

- **spf :** Parâmetro que depende do campo SPF, exemplo: ".. não tem registo SPF ..."
- **contém:** exemplo: "... contém ..."
- **não contém:** exemplo: "... não contém ..."

Terceira escolha (valor):

- Exemplo: [SPAM]

Quarta escolha (+):

- Isto permite-lhe adicionar uma ou várias condições para a mesma ação.

**Resultado destas condições** - Exemplo: "Se o assumpto da mensagem contiver [SPAM]"

#### Ações
É aqui que vai escolher o que será feito pelo filtro se as condições acima estiverem reunidas.

Pode escolher entre:

- **Aceitar:** Os e-mails que preencham as condições serão recebidos normalmente.
- **Reencaminhar para um endereço local:** Reencaminhe os e-mails que preencham as condições para um dos endereços de e-mail do seu domínio.
- **Eliminação:** Os e-mails que preencham as condições serão eliminados.
- **Reencaminhar para um endereço distante:** Reencaminhe os e-mails que preencham as condições para o endereço de e-mail à sua escolha.

### Exemplos

#### Eliminar spams

||Cabeçalho|Regra|Valor|Cenários|
|---|---|---|---|---|
|Parâmetros do filtro|Assumpto da mensagem|contém|[SPAM]|eliminação|
|O que o filtro vai fazer|Se o assumpto da mensagem|contém|a suite "[SPAM]"|então, eliminar a mensagem.|

#### Reencaminhar os e-mails de um destinatário

||Cabeçalho|Regra|Valor|Cenários|
|---|---|---|---|---|
|Parâmetros do filtro|De|contém|contact@domaintest.ovh|reencaminhar para um endereço remoto: john@otherdomain.ovh|
|O que o filtro vai fazer|Se o expedidor|é|contact@domaintest.ovh|enviar o e-mail para john@otherdomain.ovh|

#### Reencaminhar os e-mails enviados a uma Mailing-List

||Cabeçalho|Regra|Valor|Cenários|
|---|---|---|---|---|
|Parâmetros do filtro|A|contém|ML@mailing.com|Reencaminhar para um endereço local: recipient@mypersonaldomain.ovh|
|O que o filtro vai fazer|Se a mensagem foi enviada à Mailing-List|chamada|ML@mailing.com|então, enviar a mensagem para o meu outro endereço: recipient@mypersonaldomain.ovh|

#### Eliminar os e-mails que contenham uma menção indesejável com exceção de um remetente

Adicionam-se dois filtros:

||Cabeçalho|Regra|Valor|Cenários|
|---|---|---|---|---|
|Parâmetros do filtro 1|Assumpto da mensagem|contém|"money"|eliminação|
|Parâmetros do filtro 2|De|não contém|john@mybank.ovh|eliminação|

Se o assumpto da mensagem contiver a palavra `money` **e o** remetente da mensagem não for `john@mybank.ovh`, a mensagem será eliminada.

Neste caso, a configuração será a seguinte:

![emails](images/img_3242.jpg){.thumbnail}

## Quer saber mais?

Fale com a nossa comunidade de utilizadores em <https://community.ovh.com/en/>.
