---
title: 'O que fazer no caso de uma conta bloqueada por spam?'
excerpt: 'Descubra como proceder se o seu endereço tiver sido bloqueado por spam'
updated: 2026-03-05
---

## Objetivo

Quando o seu endereço de e-mail é bloqueado por spam, isto significa que foi detetada uma atividade suspeita ao nível do envio de e-mails a partir desse endereço. Neste caso, já não pode enviar e-mails a partir deste endereço de e-mail. Nesse caso, é necessário compreender por que razão foi detetada uma atividade suspeita e tomar medidas para evitar que esta situação se repita.

**Descubra como proceder se o seu endereço tiver sido bloqueado por spam.**

## Requisitos

- Ter uma [solução de e-mail OVHcloud](/links/web/emails).

<!-- CP-NAV-START:web-mx-plan -->
<!-- CP-NAV-START:web-email-pro -->
<!-- CP-NAV-START:web-exchange -->
---

### Acesso à Área de Cliente OVHcloud

**MX Plan:**

- **Ligação direta:** [MX Plan](/links/control-panel/web-mx-plan)
- **Caminho de navegação:** `Web Cloud`{.action} > `MX Plan`{.action} > Selecione o seu serviço MX Plan

**E-mail Pro:**

- **Ligação direta:** [E-mail Pro](/links/control-panel/web-email-pro)
- **Caminho de navegação:** `Web Cloud`{.action} > `E-mail Pro`{.action} > Selecione a sua plataforma

**Exchange:**

- **Ligação direta:** [Exchange](/links/control-panel/web-exchange)
- **Caminho de navegação:** `Web Cloud`{.action} > `Exchange`{.action} > Selecione a sua plataforma

---
<!-- CP-NAV-END:web-exchange -->
<!-- CP-NAV-END:web-email-pro -->
<!-- CP-NAV-END:web-mx-plan -->

## Instruções <a name="instructions"></a>

Antes de prosseguir, e se o bloqueio afetar um endereço de e-mail do tipo MX Plan, identifique a tecnologia de e-mail utilizada pela sua oferta para seguir o processo de desbloqueio correto.

> [!primary]
>
> **Identificar a tecnologia de e-mail da sua oferta MX Plan.**
>
> Em função da data de ativação da sua oferta MX Plan ou de uma migração recente, a tecnologia de e-mail associada pode diferir. Esta versão é caracterizada pela interface do seu webmail. Para a identificar:
>
> - A partir do separador `Informações gerais`{.action}, consulte a tecnologia utilizada sob a menção **Webmail** presente na secção `Subscrição`{.action}.
>
> ![Identificar a tecnologia de e-mail na Área de Cliente MX Plan](images/technology-email.png){.thumbnail .w-500}
>
> - Se a tecnologia apresentada for **RoundCube**, siga as instruções do separador **MX Plan - RoundCube**.
> - Se a tecnologia apresentada for **OWA** ou **Zimbra**, siga as instruções do separador **MX Plan - OWA / Zimbra**.

### Etapa 1: por que razão o seu endereço de e-mail foi bloqueado por spam? <a name="step1"></a>

Quando uma atividade suspeita é detetada ao nível do envio dos e-mails, o endereço em causa é automaticamente bloqueado. Neste caso, já não pode enviar e-mails a partir deste endereço de e-mail.

> [!warning]
>
> Uma "atividade suspeita" significa que:
>
> - O servidor antispam, que analisa os e-mails no envio, constatou que um ou vários elementos do e-mail são considerados suspeitos e podem constituir um e-mail spam.
> - A frequência de envio e o número de destinatários são demasiado elevados e contribuem para que o envio seja considerado como spamming. Com efeito, para realizar envios massivos, é necessário utilizar um serviço de mailing list e não um endereço de e-mail standard.
>
> Os motivos específicos de um bloqueio não podem ser divulgados para evitar qualquer tentativa de contornar o sistema de deteção de spam. Para testar o conteúdo de um e-mail, pode utilizar uma ferramenta externa à OVHcloud como a [Mailtester](https://www.mail-tester.com/).
>

Em primeiro lugar, certifique-se, junto do(s) utilizador(es) do endereço de e-mail bloqueado, de que este(s) não está(ão) diretamente na origem do bloqueio, devido a uma utilização invulgar do endereço de e-mail (por exemplo, após envios massivos de e-mails). Se for o caso, deverá corrigir a situação antes de desbloquear o endereço.

Se a atividade suspeita detetada pelo antispam não tiver sido iniciada pelo(s) utilizador(es) legítimo(s) do endereço de e-mail, tome as seguintes medidas:

- Efetue uma análise antivírus de cada um dos postos que utilizam o endereço de e-mail bloqueado por spam e aplique uma correção caso estes estejam infetados.

- Verifique todos os softwares que utilizem as credenciais do endereço de e-mail bloqueado por spam (por exemplo: fax, software profissional, software de mensagens).

- Verifique os reencaminhamentos aplicados ao endereço de e-mail bloqueado por spam.

- Verifique os filtros aplicados ao endereço de e-mail bloqueado por spam, através de um software de mensagens ou do webmail.

- Verifique as respostas automáticas configuradas no endereço de e-mail bloqueado por spam, através de um software de mensagens ou do webmail.

### Etapa 2: verificar o estado do endereço de e-mail e aceder ao ticket de assistência associado

Selecione a oferta de e-mail correspondente nos seguintes separadores:

> [!tabs]
> **Exchange**
>>
>> Dirija-se ao separador `Contas de e-mail`{.action} da sua plataforma. Se a coluna "Estado" do endereço de e-mail em questão mencionar "bloqueado", clique em `...`{.action} à direita da conta e depois em `Desbloquear`{.action}. O desbloqueio do endereço de e-mail não se faz automaticamente. Contacte o suporte através do ticket de assistência, respondendo às 3 questões colocadas.<br>
>> Passe à [etapa 3](#step3) do guia.
>>
>> ![Coluna Estado bloqueado no separador Contas de e-mail Exchange](images/blocked-for-SPAM-01-01.png){.thumbnail}
>>
> **E-mail Pro**
>>
>> Dirija-se ao separador `Contas de e-mail`{.action} da sua plataforma. Se a coluna "Estado" à direita do endereço de e-mail em questão mencionar "Spam", clique sobre esta indicação e depois em `Responder ao ticket`{.action}. O desbloqueio do endereço de e-mail não se faz automaticamente. Contacte o suporte através do ticket de assistência, respondendo às 3 questões colocadas. <br>
>> Passe à [etapa 3](#step3) do guia.
>>
>> ![Coluna Estado Spam no separador Contas de e-mail E-mail Pro](images/blocked-for-SPAM-01-02.png){.thumbnail}
>>
> **MX Plan - OWA / Zimbra**
>>
>> Dirija-se ao separador `Contas de e-mail`{.action} da sua plataforma. Se a coluna "Estado" à direita do endereço de e-mail em questão mencionar "Spam", clique sobre esta indicação e depois em `Responder ao ticket`{.action}. O desbloqueio do endereço de e-mail não se faz automaticamente. Contacte o suporte através do ticket de assistência, respondendo às 3 questões colocadas.<br>
>> Passe à [etapa 3](#step3) do guia.
>>
>> ![Coluna Estado Spam no separador Contas de e-mail MX Plan](images/blocked-for-SPAM-01-03.png){.thumbnail}
>>
> **MX Plan - RoundCube**
>>
>> Se o bloqueio disser respeito a um endereço de e-mail MX Plan com o webmail **RoundCube**, não existe ticket de assistência. Certifique-se de que consultou a [etapa 1](#step1) deste guia antes de seguir as instruções abaixo.
>>
>> Dirija-se ao separador `Emails`{.action} da sua plataforma. Se a coluna "Bloqueado por SPAM" mencionar "Sim", clique nesta menção e depois em `Alterar a palavra-passe`{.action}. O seu endereço de e-mail está agora desbloqueado. Não precisa de seguir a [etapa 3](#step3).
>>
>> ![Coluna Bloqueado por SPAM no separador Emails MX Plan Roundcube](images/blocked-for-SPAM-01-04.png){.thumbnail}
>>
>> > [!warning]
>> >
>> > Em casos raros, a coluna "Bloqueado por SPAM" pode indicar "Não", apesar de o endereço de e-mail estar bloqueado. Se tiver tomado as medidas necessárias para proteger o endereço de e-mail, a solução permanece a mesma que acima.

### Etapa 3: aceder ao ticket de assistência <a name="step3"></a>

Após a etapa 2, será redirecionado para a janela "Os meus pedidos de assistência". Clique no botão `...`{.action} à direita do ticket que menciona o assunto "Account locked for spam." e depois clique em `Ver em detalhe`{.action}.

![Janela Os meus pedidos de assistência com o ticket de bloqueio spam](images/blocked-for-SPAM-02.png){.thumbnail}

Encontrará o e-mail que lhe foi enviado, o qual gerou um ticket de assistência junto do suporte.

O ticket de assistência apresenta-se da seguinte forma:

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

Na continuidade desta mensagem, foi-lhe transmitida uma amostra de cabeçalhos dos e-mails enviados.

Estes cabeçalhos permitem determinar o percurso e a origem dos e-mails enviados.

> [!primary]
>
> Quando o seu ticket tiver sido tratado pelo suporte ao cliente e o seu endereço de e-mail tiver sido desbloqueado, altere a palavra-passe do endereço de e-mail, certificando-se de que é suficientemente forte. Pode utilizar a [ferramenta de criação de palavra-passe segura](https://www.cnil.fr/fr/generer-un-mot-de-passe-solide) da CNIL. Pode igualmente consultar os [conselhos da CNIL para uma boa palavra-passe](https://www.cnil.fr/fr/les-conseils-de-la-cnil-pour-un-bon-mot-de-passe).

## Quer saber mais?

Para serviços especializados (referenciamento, desenvolvimento, etc.), contacte os [parceiros OVHcloud](/links/partner).

Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](/links/support).

Fale com a nossa [comunidade de utilizadores](/links/community).
