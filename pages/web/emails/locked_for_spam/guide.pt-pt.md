---
title: 'O que fazer no caso de uma conta bloqueada por spam?'
excerpt: 'Descubra como proceder se o seu endereço tiver sido bloqueado por spam'
updated: 2023-06-07
---

## Objetivo

Quando o seu endereço de e-mail é bloqueado por SPAM, isto significa que foi detetada uma atividade suspeita ao nível do envio dos e-mails a partir desse endereço. Neste caso, já não pode enviar e-mail a partir deste endereço de e-mail. Nesse caso, é necessário compreender por que razão foi detetada uma atividade suspeita e tomar medidas para evitar que esta situação se repita.

**Descubra como proceder se o seu endereço tiver sido bloqueado por spam.**

## Requisitos

- Ter uma [solução de e-mail na OVHcloud](https://www.ovhcloud.com/pt/emails/){.external}.
- Ter acesso à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt), secção `Web Cloud`{.action}.

## Instruções <a name="instructions"></a>

Antes de prosseguir, e se o bloqueio afetar um endereço de e-mail do tipo MXplan, identifique a versão que possui para seguir o bom processo de desbloqueio. Com a ajuda do quadro abaixo, verifique como distinguir as duas versões.

|Versão histórica da oferta MX Plan|Nova versão da oferta MX Plan|
|---|---|
|![email](images/mxplan-starter-legacy-step1.png){.thumbnail}<br> Consulte a oferta na secção "Subscrição"|![email](images/mxplan-starter-new-step1.png){.thumbnail}<br>Consulte a "Referência do servidor" na secção "Resumo"|

### Fase 1: porque é que o seu endereço de e-mail foi bloqueado para SPAM? <a name="step1"></a>

Quando uma atividade suspeita é detetada ao nível do envio dos e-mails, o endereço em causa é automaticamente bloqueado. Neste caso, já não pode enviar e-mails a partir deste endereço de e-mail.

Em primeiro lugar, certifique-se de que o(s) utilizador(es) do endereço de e-mail bloqueado(s) não está(ão) diretamente na origem do bloqueio, devido a uma utilização pouco habitual do endereço de e-mail (por exemplo, após a realização de envios massivos de e-mails). Se for o caso, deverá corrigir a situação antes de desbloquear o endereço.

Se a atividade suspeita detetada pelo sistema antisspam não tiver sido iniciada pelo(s) utilizador(es) legítimo(s) do endereço de e-mail, tome as medidas necessárias e detalhadas abaixo:

- Efetue uma análise antivírus de cada um dos postos que utilizam o endereço de e-mail bloqueado para SPAM e aplique uma correção se estes estiverem infetados.

- Verifique todos os softwares que utilizem as credenciais do endereço de e-mail bloqueado para SPAM (por exemplo: fax, software profissional, software de mensagens).

### Etapa 2: verificar o estado do endereço de e-mail e aceder ao ticket de assistência associado <a name="step2"></a>

> [!tabs]
> **Exchange**
>>
>> Aceda à sua [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt) e dirija-se à secção `Webcloud`{.action}. Clique em `Microsoft`{.action} e em `Exchange`{.action}. Por fim, selecione a plataforma Exchange em questão.
>>
>> Dirija-se ao separador `Contas de e-mail`{.action} da sua plataforma. Se a coluna "Estado" do endereço de e-mail em questão mencionar "bloqueado", clique em `...`{.action} à direita da conta e depois em `Desbloquear`{.action}. O desbloqueio do endereço de e-mail não se faz automaticamente. É necessário contactar o Apoio ao Cliente, através do ticket de assistência, respondendo às 3 questões colocadas.<br>
>> Passe para [etapa 3](#step3) do guia.
>>
>> ![spam](images/blocked-for-SPAM-01-01.png){.thumbnail}
>>
> **Email Pro**
>>
>> Aceda à sua [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt) e dirija-se à secção `Webcloud`{.action}. Clique em `E-mail Pro`{.action} e, depois, selecione a plataforma E-mail Pro correspondente.
>>
>> Dirija-se ao separador `Contas de e-mail`{.action} da sua plataforma. Se a coluna "Estado" à direita do endereço de e-mail em questão mencionar "Spam", clique sobre esta indicação e depois em `Responder ao ticket`{.action}. O desbloqueio do endereço de e-mail não se faz automaticamente. É necessário contactar o Apoio ao Cliente, através do ticket de assistência, respondendo às 3 questões colocadas.<br>
>> Passe para [etapa 3](#step3) do guia.
>>
>> ![spam](images/blocked-for-SPAM-01-02.png){.thumbnail}
>>
> **MX plan - Nova versão**
>>
>> Aceda à sua [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt) e dirija-se à secção `Webcloud`{.action}. Clique em `E-mails`{.action} e selecione o nome do domínio correspondente.
>>
>> Dirija-se ao separador `Contas de e-mail`{.action} da sua plataforma. Se a coluna "Estado" à direita do endereço de e-mail em questão mencionar "Spam", clique sobre esta indicação e depois em `Responder ao ticket`{.action}. O desbloqueio do endereço de e-mail não se faz automaticamente. É necessário contactar o Apoio ao Cliente, através do ticket de assistência, respondendo às 3 questões colocadas.<br>
>> Passe para [etapa 3](#step3) do guia.
>>
>> ![spam](images/blocked-for-SPAM-01-03.png){.thumbnail}
>>
> **MX plan - Histórico**
>>
>> Se o bloqueio disser respeito a um endereço de e-mail [MXplan version historial](#instructions), não há ticket de assistência. Consulte este manual [passo 1](#step1) antes de seguir as instruções abaixo.
>>
>> Ligue-se ao seu [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt) e dirija-se à secção `Web Cloud`{.action}. Clique em `Emails`{.action} e selecione o domínio em questão.
>>
>> Dirija-se ao separador `Emails`{.action} da sua plataforma. Se a coluna "Bloqueado por SPAM" mencionar "Sim", clique nesta menção e depois em `Alterar a palavra-passe`{.action}. O seu endereço de e-mail foi desbloqueado. Não precisa de seguir o [passo 3](#step3).
>>
>> ![spam](images/blocked-for-SPAM-01-04.png){.thumbnail}
>>
>> > [!warning]
>> >
>> > Em casos raros, a coluna "Bloqueado para SPAM" pode indicar "Não", apesar do endereço de e-mail ter sido bloqueado. Se tiver tomado as medidas necessárias para proteger o endereço de e-mail, a solução permanece a mesma que acima.


### Etapa 3: aceder ao ticket de assistência <a name="step3"></a>

Após a etapa 1, será redirecionado para a janela "Os meus pedidos de assistência" Clique em `...`{.action} à direita do ticket mencionando o assunto "Account locked for spam.", e depois clique em `Ver em detalhe`{.action}. 

![spam](images/blocked-for-SPAM-02.png){.thumbnail}

Encontrará igualmente o e-mail que lhe foi enviado e que gerou um ticket de assistência junto do nosso serviço de Apoio ao Cliente.

O ticket de assistência criado tem o seguinte conteúdo:

> 
> Estimado/a Cliente,
>
> O nosso sistema detetou que o endereço **youraddress@domain.com** alojado nos nossos sistemas no serviço **servicename** é fonte de envio de mensagens indesejadas (spams).
> O envio de e-mails deste endereço foi, por isso, temporariamente desativado.
>
> Detetámos **X** mensagem(ns) suspeita(s).
>
> Para nos ajudar a reativar o envio de e-mails para o endereço: **address@domain.com**,
> devolva-nos este e-mail respondendo às seguintes perguntas:
>
> - É o emissor do e-mail em questão (ver cabeçalho acima)?
>
> - Tem alguma regra de reencaminhamento para outro endereço de e-mail?
>
> - Respondeu a uma mensagem de spam?
> 
> Estas respostas irão ajudar-nos a reativar a sua conta o mais rapidamente possível.
> <br>
> <br>
> 

Anexámos a esta mensagem uma amostra de cabeçalhos dos e-mails enviados para seu conhecimento.

Estes cabeçalhos permitem rastrear e determinar a origem dos e-mails enviados.


## Quer saber mais? <a name="go-further"></a>
 
Para serviços especializados (referenciamento, desenvolvimento, etc), contacte os [parceiros OVHcloud](https://partner.ovhcloud.com/pt/directory/).
 
Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](https://www.ovhcloud.com/pt/support-levels/).
 
Fale com nossa comunidade de utilizadores: <https://community.ovh.com/en/>.