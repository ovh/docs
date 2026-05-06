---
title: 'Envio ou receção de e-mails impossível'
excerpt: "Saiba como reagir em caso de problemas de envio ou receção de e-mails na OVHcloud"
updated: 2026-02-20
---

<style>
details>summary {
    color:rgb(33, 153, 232) !important;
    cursor: pointer;
}
details>summary::before {
    content:'\25B6';
    padding-right:1ch;
}
details[open]>summary::before {
    content:'\25BC';
}
.w-500 {
  max-width:500px !important;
}
</style>

## Objetivo

Não é possível receber ou enviar e-mails a partir do seu software de correio eletrónico ou a partir do webmail?

**Saiba como diagnosticar um erro de envio ou de receção na sua oferta de e-mail OVHcloud.**

> [!primary]
>
> Se tiver outras questões que não sejam tratadas neste manual, não hesite em consultar a nossa [FAQ de E-mail](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/faq-emails).

## Requisitos

- Dispor de uma oferta **MX Plan**, **E-mail Pro**, **Exchange** ou **Zimbra**.

<!-- CP-NAV-START:web-mx-plan -->
<!-- CP-NAV-START:web-email-pro -->
<!-- CP-NAV-START:web-exchange -->
---

### Acesso à Área de Cliente OVHcloud

**MX Plan:**

- **Link direto:** [MX Plan](/links/control-panel/web-mx-plan)
- **Caminho de navegação:** `Web Cloud`{.action} > `MX Plan`{.action} > Selecione o seu serviço MX Plan

**E-mail Pro:**

- **Link direto:** [E-mail Pro](/links/control-panel/web-email-pro)
- **Caminho de navegação:** `Web Cloud`{.action} > `E-mail Pro`{.action} > Selecione a sua plataforma

**Exchange:**

- **Link direto:** [Exchange](/links/control-panel/web-exchange)
- **Caminho de navegação:** `Web Cloud`{.action} > `Exchange`{.action} > Selecione a sua plataforma

---
<!-- CP-NAV-END:web-exchange -->
<!-- CP-NAV-END:web-email-pro -->
<!-- CP-NAV-END:web-mx-plan -->

## Instruções

> [!success]
>
> Identifique rapidamente, graças aos averbamentos **envio** e **receção**, a problemática que se aplica a cada caso prático abaixo.

/// details | A minha oferta de e-mail e/ou as minhas contas estão ativas? (**envio** e **receção**)

Para que os seus e-mails sejam funcionais, deve possuir uma oferta de e-mail ativa. Se a sua oferta de e-mail estiver associada a uma oferta de alojamento, verifique se esta não expirou. Pode verificar esta informação diretamente na Área de Cliente. Da mesma forma, o seu nome de domínio também deve estar ativo.

Comece por verificar que está atualizado nos [pagamentos](/pages/account_and_service_management/managing_billing_payments_and_services/invoice_management#pay-bills) e nas [renovações](/pages/account_and_service_management/managing_billing_payments_and_services/how_to_use_automatic_renewal#renewal-management) dos seus serviços.

Eis como verificar que os seus serviços estão corretamente operacionais:

> [!tabs]
> **Nome de domínio**
>>
>> Aceda à secção `Web Cloud`{.action}, clique em `Nomes de domínio`{.action} e selecione o seu nome de domínio. Se o nome de domínio expirar, isto ser-lhe-á indicado no topo da página.
>>
> **Alojamento Web**
>>
>> Dirija-se à secção `Web Cloud`{.action}, clique em `Alojamentos`{.action} e selecione o seu alojamento. A data de expiração ou de renovação automática do seu alojamento será indicada no topo da página.
>>
> **Conta de e-mail MX Plan**
>>
>> Aceda à secção `Web Cloud`{.action}, clique em `E-mails`{.action} (ou `MX Plan`{.action} conforme a sua oferta) e selecione o nome de domínio em causa. Clique no separador `E-mails`{.action}. Verifique o estado da conta de e-mail na coluna `Bloqueado para SPAM`.
>>
> **E-mail Pro**
>>
>> Aceda à secção `Web Cloud`{.action}, clique em `E-mail Pro`{.action} e selecione a sua plataforma. Clique no separador `Contas de e-mail`{.action}. Verifique o estado da conta de e-mail na coluna `Estado`.
>>
> **Exchange**
>>
>> Dirija-se à secção `Web Cloud`{.action}, clique em `Exchange`{.action} na secção **Microsoft** e selecione a sua plataforma. Clique no separador `Contas de e-mail`{.action}. Verifique o estado da conta de e-mail na coluna `Estado`.
>>
> **Zimbra**
>>
>> Aceda à secção `Web Cloud`{.action} e clique em `Zimbra Mail`{.action}. Clique no separador `Conta de e-mail`{.action}. Verifique o estado da conta de e-mail na coluna `Estado`.

///

/// details | Não consigo enviar e/ou receber e-mails a partir do meu software de e-mail (**envio** e/ou **receção**)

Se utiliza um software de mensagens no seu computador (Outlook, Mail do Mac, Thunderbird, etc.) ou no seu smartphone (iOS, Android, etc.) e encontra uma falha no envio ou na receção:

1. A partir de um navegador de Internet, ligue-se ao [webmail](/links/web/email) com o endereço de e-mail em causa.
2. Verifique os parâmetros de configuração de acordo com a sua oferta de e-mail e o software de mensagens ou de aplicação utilizado:

> [!tabs]
> **Conta de e-mail MX Plan**
>>
>> Para uma oferta **MX Plan**, aceda à [página dos nossos guias MX Plan](/products/web-cloud-email-collaborative-solutions-mx-plan) e verifique a configuração do seu software de e-mail através dos guias disponíveis na secção `Configurar uma aplicação de e-mail no seu computador` ou `Configurar uma aplicação de e-mail no seu smartphone`, em função do dispositivo utilizado.
>>
> **E-mail Pro**
>>
>> Para uma oferta **E-mail Pro**, aceda à [página dos nossos guias E-mail Pro](/products/web-cloud-email-collaborative-solutions-email-pro) e verifique a configuração do seu software de e-mail através dos guias disponíveis na secção `Configurar uma aplicação de e-mail no seu computador` ou `Configurar uma aplicação de e-mail no seu smartphone`, em função do dispositivo utilizado.
>>
> **Exchange**
>>
>> Para uma oferta **Exchange**, aceda à [página dos nossos guias Microsoft Exchange](/products/web-cloud-email-collaborative-solutions-microsoft-exchange) e verifique a configuração do seu software de e-mail através dos guias disponíveis na secção `Configurar uma aplicação de e-mail no seu computador` ou `Configurar uma aplicação de e-mail no seu smartphone`, em função do dispositivo utilizado.
>>
> **Zimbra**
>>
>> Para uma oferta **Zimbra**, aceda à [página dos nossos guias Zimbra](/products/web-cloud-email-collaborative-solutions-zimbra) e verifique a configuração do seu software de e-mail através dos guias disponíveis na secção `Configurar uma aplicação de e-mail no seu computador` ou `Configurar uma aplicação de e-mail no seu smartphone`, em função do dispositivo utilizado.

///

/// details | Não consigo receber e-mails porque o meu endereço de e-mail está cheio, não tenho espaço. O que posso fazer?

Se subscreveu [um dos nossos serviços de e-mail OVHcloud](/links/web/emails) e uma das suas contas de e-mail está saturada, consulte o nosso guia "[Gerir o espaço de armazenamento de uma conta de e-mail](/pages/web_cloud/email_and_collaborative_solutions/troubleshooting/email_manage_quota)". Este guia ajuda-o a determinar se pode otimizar o espaço existente ou se é necessário mudar de oferta de e-mail para aumentar a capacidade de armazenamento.

///

/// details | Os e-mails estão a funcionar a partir do webmail? (**envio** e/ou **receção**)

Para garantir que a avaria não está associada a um erro de configuração, realize um teste de envio e de receção diretamente através do webmail da OVHcloud. Se tudo estiver a funcionar corretamente, verifique a configuração do seu software através dos guias postos à sua disposição.

A partir do browser do seu computador ou a partir de um smartphone, vá ao endereço [Webmail](/links/web/email).

![webmail](images/webmail.png){.thumbnail}

///

/// details | Não consigo aceder ao webmail

Certifique-se de que tem a palavra-passe correta. Se necessário, pode alterá-lo. Verifique igualmente se a dupla autenticação está ativada ([apenas Exchange](/links/web/emails-hosted-exchange)).

Como alterar a palavra-passe de um endereço de e-mail:

> [!tabs]
> **Conta de e-mail MX Plan**
>>
>> Para uma oferta **MX Plan**, consulte o nosso guia "[Alterar a palavra-passe de um endereço de e-mail MX Plan](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_change_password)".
>>
> **E-mail Pro**
>>
>> Para uma oferta **E-mail Pro**, aceda à secção `Web Cloud`{.action}, clique em `E-mail Pro`{.action} e selecione a sua plataforma. No separador `Contas de e-mail`{.action}, clique no botão `...`{.action} e em `Alterar`{.action} para alterar a palavra-passe.
>>
> **Exchange**
>>
>> Para uma oferta **Exchange**, dirija-se à secção `Web Cloud`{.action}, clique em `Exchange`{.action} na secção **Microsoft** e selecione a sua plataforma. No separador `Contas de e-mail`{.action}, clique no botão `...`{.action} e em `Alterar`{.action} para alterar a palavra-passe. <br> Verifique se a dupla autenticação está ativada ao consultar o nosso guia "[Configurar a dupla autenticação numa conta Exchange](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/manage_2fa_exchange)".
>>
> **Zimbra**
>>
>> Para uma oferta **Zimbra**, aceda à secção `Web Cloud`{.action} e clique em `Zimbra Mail`{.action}. No separador `Conta de e-mail`{.action}, clique no botão `⋮`{.action} e em `Alterar`{.action} para alterar a palavra-passe.

///

/// details | Há algum incidente ou manutenção em curso no meu serviço? (**envio** e/ou **receção**)

Pode verificar as diferentes tarefas em curso no <https://web-cloud.status-ovhcloud.com/>.

- Para **MX Plan**, verifique na secção `E-mails`
- Para o **E-mail Pro**, dirija-se à secção `Microsoft`
- Para **Exchange**, dirija-se às secções `Hosted Microsoft`, `Private Microsoft` e `Trusted Microsoft` em função da sua oferta.
- Para **Zimbra**, dirija-se à secção `Zimbra`

///

/// details | O apontamento do nome de domínio para o meu serviço de e-mail está correto? (**receção**)

Verifique que o seu nome de domínio está a apontar corretamente para os servidores de e-mail OVHcloud. Para isso, devem ser configurados registos do tipo MX na sua zona DNS. <br>Consulte o nosso manual "[Adicionar um campo MX à configuração do nome de domínio](/pages/web_cloud/domains/dns_zone_mx)".

![DNSzone](images/DNS.png){.thumbnail}

> [!primary]
>
> Para verificar a configuração DNS do seu nome de domínio, independentemente do seu agente de registo, pode utilizar a ferramenta [Zone Master](https://zonemaster.net/), utilizando a nossa documentação "[Tutorial - Utilização do Zonemaster](/pages/web_cloud/domains/dns_zonemaster)".

///

/// details | Após o envio de um e-mail, recebo uma mensagem indicando que o meu e-mail não pôde ser enviado, incluindo um código de 3 dígitos (**envio**)

Trata-se de uma resposta de erro SMTP. Isto indica que a troca entre o servidor de envio e o servidor de e-mail de receção não pôde ser realizada corretamente. O código serve para determinar o tipo de erro que o servidor encontrou. É geralmente acompanhado de uma mensagem que detalha este erro.

Uma resposta SMTP é constituída por um número de três dígitos. Os três algarismos da resposta têm um significado especial:

- o primeiro algarismo indica se a resposta é boa, má ou incompleta. Um cliente SMTP será capaz de determinar a sua próxima ação através da análise deste primeiro número;
- O segundo e o terceiro algarismos fornecem informações complementares.

Há quatro valores possíveis para o primeiro número do código de resposta:

|Código|Descrição|
|---|---|
|2 xx|Resposta positiva: a ação solicitada foi efetuada com sucesso. Pode ser iniciado um novo pedido.|
|3 xx|Resposta positiva temporária: a encomenda foi aceite, mas a ação solicitada está aguardar a receção de mais informações. O cliente SMTP deverá enviar uma outra encomenda especificando esta informação.|
|4 xx|Resposta negativa de conclusão transitória: a encomenda não foi aceite e a ação solicitada não pôde ser realizada. No entanto, a condição do erro é temporária e a ação pode ser novamente solicitada.|
|5 xx|Resposta negativa: a encomenda não foi aceite e a ação solicitada não pôde ser realizada. O cliente SMTP não deve repetir o mesmo pedido.|

> [!primary]
>
> Utilize **Ctrl+F** / **Cmd+F** e introduza o seu código de erro para o encontrar rapidamente na seguinte tabela.

Encontrará abaixo a maioria dos códigos de respostas negativas SMTP utilizados pelos servidores:

> [!tabs]
> Erros 4xx — Temporários
>>
>> Um código **4xx** indica que o erro é temporário. A mensagem pode ser enviada novamente mais tarde. Identifique a causa e tente novamente após resolvê-la.
>>
>> |Códigos de resposta|Detalhes|Ações|
>> |---|---|---|
>> |420|Prazo ultrapassado, problema de ligação|Esta mensagem de erro é devolvida unicamente pelos servidores mail GroupWise. Contacte o administrador do servidor de e-mail de destino|
>> |421|Serviço não disponível, canal de transmissão em curso de encerramento|Proveniência do erro indeterminado, certifique-se de que o envio para outro nome de domínio funciona. Em caso afirmativo, queira tentar novamente o envio inicial mais tarde|
>> |432|Receção do e-mail no servidor Exchange parado|Esta mensagem de erro é devolvida unicamente pelos servidores de e-mail Microsoft Exchange. Contacte o administrador do servidor de e-mail de destino|
>> |449|Erro de roteamento|Esta mensagem de erro é retornada unicamente pelos servidores de e-mail Microsoft Exchange. Microsoft recomenda que efetue um diagnóstico com a sua ferramenta WinRoute|
>> |450|Ação de mensagens pedida não efetuada: caixa de email indisponível (por exemplo, caixa de email ocupada ou temporariamente bloqueada por razões de segurança ou de blacklistagem)|Verifique se o endereço IP do servidor de e-mail não está "blacklistado" ([Spamhaus](https://check.spamhaus.org/)) e verifique se o seu e-mail não contém palavras relacionadas com SPAM.|
>> |451|Ação requerida abandonada: Erro de tratamento local|Isto pode dever-se a uma sobrecarga momentânea ou à verificação do registo SPF do nome de domínio emissor incorreto. Refira-se à mensagem adicional fornecida pelo servidor, ou contacte o administrador do servidor se persistir|
>> |452|Ação solicitada não efetuada: sistema de armazenamento insuficiente|O seu servidor de e-mail está "sobrecarregado". Isto também pode ser causado por demasiadas mensagens que tentam ser enviadas ao mesmo tempo. Verifique a sua caixa de envio e tente novamente|
>> |455|Servidor incapaz de receber os parâmetros|Aguarde algum tempo e tente novamente. Em caso de falha, contacte o administrador do servidor de e-mail do destinatário|
>>
> Erros 5xx — Permanentes
>>
>> Um código **5xx** indica que o erro é permanente. A mensagem não será enviada novamente de forma automática. Deve tomar medidas corretivas antes de tentar um novo envio.
>>
>> |Códigos de resposta|Detalhes|Ações|
>> |---|---|---|
>> |500|Erro de sintaxe, encomenda não reconhecida (isto pode incluir erros como uma linha de encomenda demasiado longa)|Isto é frequentemente causado pelo antivírus ou pela firewall do remetente. Verifique isso e tente novamente|
>> |501|Erro de sintaxe nos parâmetros ou nos argumentos|Isto é frequentemente causado por um endereço de e-mail de destinatário errado ou por um problema de antivírus ou de firewall relativamente ao remetente. Queira verificar o endereço de destino bem como o seu antivírus ou firewall|
>> |502|Encomenda não implementada|Os parâmetros ou as opções utilizadas aquando do envio do e-mail com o seu servidor SMTP são reconhecidos mas desativados na sua configuração. Contacte o seu fornecedor de serviço|
>> |503|O servidor encontrou uma má sequência de encomendas|Isto deve-se geralmente a um problema de autenticação. Certifique-se de que está autenticado no servidor SMTP ao nível da configuração do seu software de mensagens.|
>> |504|Parâmetro de comando não implementado|Os parâmetros ou as opções utilizadas aquando do envio do e-mail com o seu servidor SMTP são reconhecidos mas desativados na sua configuração. Contacte o seu fornecedor de serviço|
>> |535|Falha durante a autenticação|As informações de utilizador/password foram descarregadas ou o envio está potencialmente bloqueado no seu endereço de e-mail. Verifique o estado do seu endereço de e-mail a partir da Área de Cliente OVHcloud. Uma alteração da password pode desbloquear o envio se a conta tiver sido bloqueada por spam, consulte o nosso guia "[O que fazer no caso de uma conta bloqueada por spam?](/pages/web_cloud/email_and_collaborative_solutions/troubleshooting/locked_for_spam)" para mais informações|
>> |550|Ação solicitada não efetuada: caixa de correio indisponível|O servidor de e-mail de destino não pôde verificar o endereço de e-mail utilizado. Isto é causado, na maioria dos casos, por um endereço de e-mail de destino inválido, mas pode também significar que o servidor de e-mail de destino tem problemas com firewall ou com a conectividade. Verificar o endereço de e-mail do destinatário e/ou tente novamente|
>> |550 5.7.1|Email rejected per policy reason|O servidor de correio de destino rejeitou o endereço de e-mail de envio por razões de política de segurança. Essas razões podem ser múltiplas, geralmente são detalhadas com o código de erro. Em certos casos, pode tratar-se de um endereço IP na cadeia de transmissão que está presente numa lista de rejeição. Para verificar a reputação de um endereço IP, pode testá-lo, por exemplo, em [MXtoolbox](https://mxtoolbox.com/blacklists.aspx) ou verificar a cadeia de transmissão de um e-mail a partir do endereço em causa com [Mailtester](https://www.mail-tester.com/)|
>> |550 5.7.26|*This message does not have authentication information or fails to pass authentication checks*|O e-mail foi rejeitado porque o serviço de e-mail do remetente não possui SPF ou DKIM configurado em seu nome de domínio.<br><br>É aconselhável configurar um registro SPF prioritário, compatível com todos os e-mails ofertas. Use nosso guia "[Melhorar a segurança dos e-mails através do registo SPF](/pages/web_cloud/domains/dns_zone_spf)".<br><br>Se sua oferta de e-mail tiver a opção DKIM, você pode colocá-la usando nosso guia "[Melhorar a segurança dos e-mails através do registo DKIM](/pages/web_cloud/domains/dns_zone_dkim)".|
>> |551|Utilizador não local|Esta é geralmente utilizada como uma estratégia de prevenção contra o spam. Indica-se que o envio de correio não é autorizado, por qualquer razão, a transmitir a sua mensagem para outro servidor que não o seu. Contacte o seu fornecedor de serviço|
>> |552|Serviço de mensagens pedido interrompido: espaço de armazenamento ultrapassado|O utilizador que tentou contactar já não tem espaço disponível para receber mensagens. Infelizmente, a única solução é contactar o destinatário através de outro método|
>> |553|Ação solicitada não efetuada: endereço de e-mail não autorizado|Esta situação é geralmente causada por um endereço de e-mail de destino incorreto. Verifique que o endereço de e-mail está correto|
>> |554|Transação falhada, "Nenhum serviço SMTP aqui"|Trata-se geralmente de um problema de blacklist. Verifique se o endereço IP do servidor de e-mail não está "blacklistado" ([Spamhaus](https://check.spamhaus.org/))|
>> |555|MAIL FROM / RCPT TO, parâmetros não reconhecidos ou não utilizados|O servidor SMTP de saída não regista corretamente o endereço de e-mail utilizado nos seus parâmetros "De" ou "A". Verifique que os endereços de e-mail indicados estão corretos e verifique que não ultrapassou o limite definido pela OVHcloud: 200 emails /hora /conta e 300 emails /hora /ip|

///

## Saiba mais

[FAQ E-mail](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/faq-emails)

[Melhorar a segurança dos e-mails através do registo SPF](/pages/web_cloud/domains/dns_zone_spf)

[Melhorar a segurança dos e-mails através do registo DKIM](/pages/web_cloud/domains/dns_zone_dkim)

[Gerir o espaço de armazenamento de uma conta de e-mail](/pages/web_cloud/email_and_collaborative_solutions/troubleshooting/email_manage_quota)

[O que fazer no caso de uma conta bloqueada por spam?](/pages/web_cloud/email_and_collaborative_solutions/troubleshooting/locked_for_spam)

Fale com nossa [comunidade de utilizadores](/links/community).