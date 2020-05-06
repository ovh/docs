---
title: 'Guia dos reencaminhamentos email'
excerpt: 'Saiba como gerir os reencaminhamentos e-mail'
slug: mail_partilhado_guia_dos_reencaminhamentos_email
section: 'Funcionalidades dos endereços e-mail'
legacy_guide_number: g2001
---

**Última atualização: 16/04/2020**

## Objetivo

Este guia apresenta diferentes informações e dicas quanto à configuração dos reencaminhamentos de e-mails, nomeadamente para reencaminhar e-mails recebidos num endereço A para um endereço B.

## Informação Geral

### O que é um reencaminhamento de e-mail?

O reencaminhamento permite reencaminhar um e-mail recebido num primeiro endereço para um ou vários outros endereços.

Por exemplo, quando deseja que um e-mail enviado para **omeuendereco@dominio.pt** seja reencaminhado para **omeuoutroendereco@omeuoutrodominio.pt**. Esta alteração possibilita comunicar apenas o primeiro endereço público (**omeuendereco@dominio.pt**), sem que as outras pessoas conheçam o verdadeiro endereço (**omeuoutroendereco@omeuoutrodominio.pt**).

Há dois tipos de reencaminhamento: 

- O reencaminhamento simples (esquema 1), no qual o e-mail é enviado diretamente para o endereço de reencaminhamento e o destinatário não recebe a mensagem. 

- O reencaminhamento com cópia local (esquema 2), no qual o e-mail é recebido tanto pelo destinatário quanto pelo endereço de reencaminhamento.

![emails](images/schema-redirect.png){.thumbnail}

> [!primary]
>
> Atenção: é possível efetuar um reencaminhamento para vários endereços de e-mail.

## Requisitos

- Ter acesso à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager).
- Dispor do serviço MX Plan (incluído num plano de [alojamento web](https://www.ovh.pt/alojamento-partilhado/){.external}, num [alojamento gratuito Start 10M](https://www.ovh.pt/dominios/oferta_alojamento_start10m.xml){.external} ou disponível em subscrição autónoma).

## Instruções

A versão da sua oferta MX Plan (antiga ou nova) irá depender da data de ativação ou do facto de o serviço [ter sido migrado recentemente](https://www.ovh.pt/mxplan-migration/){.external}. Antes de continuar, deve verificar a versão de que dispõe. 

Aceda à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external} e, a seguir, à secção «Web». Clique em E-mails na barra à esquerda e selecione o serviço correspondente. Continue a ler em função da sua versão:

|Versão antiga da oferta MX Plan|Nova versão da oferta MX Plan|
|---|---|
|![email](images/mxplan-starter-legacy.png){.thumbnail}<br> Consulte o tipo de oferta na secção «Subscrição».|![email](images/mxplan-starter-new.png){.thumbnail}<br>Consulte a `Referência do servidor` na secção «Resumo».|
|Continuar a ler na secção «[Versão antiga da oferta MX Plan](../partilhado_generalidades_e-mail_partilhado_ovh/#versao-antiga-da-oferta-mx-plan_2)».|Continuar a ler na secção «[Nova versão da oferta MX Plan](../partilhado_generalidades_e-mail_partilhado_ovh/#nova-versao-da-oferta-mx-plan)».|

### Versão antiga da oferta MX Plan

#### 1.ª etapa: Aceder à gestão dos reencaminhamentos
Por defeito, aparecerá o separador `Informações gerais`{.action} do seu MX Plan. Clique no separador `E-mails`{.action} e, a seguir, no botão `Gestão dos reencaminhamentos`{.action}, à direita.

![emails](images/mxplan-legacy-1.png){.thumbnail}


#### 2.ª etapa: Adicionar um reencaminhamento

Aparecerá o quadro dos reencaminhamentos ativos. À direita, clique no botão `Adicionar um reencaminhamento`{.action}.

![emails](images/mxplan-legacy-2.png){.thumbnail}

Complete em função dos 3 parâmetros seguintes:

|Informação|Descrição| 
|---|---|  
|Do endereço |Introduza o endereço de e-mail que será a fonte do reencaminhamento.|  
|Para o endereço|Introduza o endereço de e-mail que será o destino do reencaminhamento. Pode ser um dos seus endereços de e-mail OVHcloud ou um endereço de e-mail externo.|
|Escolha um modo de cópia|Escolha se pretende: <br> - **Conservar uma cópia do e-mail na OVHcloud** (receber os e-mails no seu endereço principal e no endereço de reencaminhamento) <br> - **Não conservar uma cópia do e-mail** (enviá-lo diretamente para o endereço de reencaminhamento sem manter uma cópia no endereço principal) <br> *cf. o [esquema](./#informacao-geral){.external} no início deste guia*|

De seguida, clique em `Validar`{.action} para confirmar o novo reencaminhamento.

![emails](images/mxplan-legacy-3.png){.thumbnail}

> [!primary]
> Quando escolhe o modo de cópia «**Conservar uma cópia do e-mail na OVHcloud**», cria automaticamente um reencaminhamento do endereço de e-mail para si próprio,
> materializando a cópia local.
> 

### Nova versão da oferta MX Plan

Na nova versão da oferta MX Plan, a gestão dos reencaminhamentos não é feita através da Área de Cliente, mas diretamente a partir do webmail do endereço em causa.

Aceda ao webmail [aqui](https://www.ovh.com/pt/mail/){.external}. Introduza o **endereço de e-mail** e a **palavra-passe**.
![emails](images/webmail.png){.thumbnail}

#### 1.ª etapa: Aceder à gestão dos reencaminhamentos

Depois de aceder ao webmail, clique na roda dentada no canto superior direito e, a seguir, em `Opções`{.action}.

![emails](images/mxplan-new-1.png){.thumbnail}
Na janela **Opções**, na coluna da esquerda, selecione a categoria **Tratamento automático** da secção **Correio**. A seguir, clique em `Regras da caixa de receção e de organização`{.action}. 

![emails](images/mxplan-new-2.png){.thumbnail}

Nesta janela, pode gerir os reencaminhamentos e aplicar filtros ao conjunto dos e-mails recebidos.

#### 2.ª etapa: Adicionar um reencaminhamento

Na janela de gestão das **Regras da caixa de receção**, clique no ícone `+`{.action}, em cima, à esquerda.
![emails](images/mxplan-new-3.png){.thumbnail}

Defina as regras necessárias a fim de criar um reencaminhamento:

|Informação|Descrição| 
|---|---|  
|Nome |Defina o nome do reencaminhamento (quadro 1).|  
|Quando a mensagem é recebida e cumpre todas estas condições| Se pretende que o reencaminhamento abranja todos os e-mails, selecione **\[Aplicar a todos os e-mails]** (quadro 2).|
|Efetuar todas as operações seguintes|É aqui que implementa o reencaminhamento.  Selecione **Transferir, reencaminhar ou enviar** e, a seguir, **Reencaminhar o e-mail para...** (quadro 3). Depois, introduza o endereço para o qual deseja reencaminhar o e-mail no campo **Reencaminhar o e-mail para...** e clique em `Gravar`{.action} (quadro 4). |


![emails](images/mxplan-new-4.png){.thumbnail}

Neste exemplo, trata-se de um **reencaminhamento com cópia local** (ver o [esquema 2](./#informacao-geral){.external} no início deste guia). Se é o que deseja, clique em `OK`{.action} (ícone de disquete em cima, à esquerda) para a regra ser aplicada. Caso contrário, siga as instruções seguintes.



Para aplicar um **reencaminhamento simples** ([esquema 1](./#informacao-geral){.external}, no início deste guia), crie uma regra suplementar ao seu **reencaminhamento com cópia local** a partir desta janela. Clique em `Adicionar uma ação`{.action} (quadro 1), depois em **Transferir, copiar ou suprimir** e, por fim, em **Suprimir o e-mail**. Esta regra envia os e-mails diretamente para o lixo depois de ter reencaminhado as mensagens para o endereço final.

![emails](images/mxplan-new-5.png){.thumbnail}

Concluída a operação, clique em `OK`{.action} (ícone de disquete em cima, à esquerda).

## Quer saber mais?

Fale com a nossa comunidade de utilizadores em <https://community.ovh.com/en/>.