---
title: 'Envio ou receção de e-mails impossível'
excerpt: "Saiba como reagir em caso de problemas de envio ou receção de e-mails na OVHcloud"
updated: 2024-04-11
---

## Objetivo

Não é possível receber ou enviar e-mails a partir do seu software de correio eletrónico ou a partir do webmail?

**Saiba como diagnosticar um erro de envio ou de receção na sua oferta de e-mail OVHcloud.**

> [!primary]
>
> Se tiver outras questões que não sejam tratadas neste manual, não hesite em consultar a nossa [FAQ de E-mail](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/faq-emails).

## Requisitos

- Dispor de uma oferta **MX Plan** ou de uma oferta **E-mail Pro** ou de uma oferta **Exchange**.
- Ter acesso à [Área de Cliente OVHcloud](/links/manager).

## Instruções

> [!success]
>
> Identifique rapidamente, graças aos averbamentos **envio** e **receção**, a problemática que se aplica a cada caso prático abaixo.

### A minha oferta de e-mail e/ou as minhas contas estão ativas? (**envio** e **receção**)

Para que os seus e-mails sejam funcionais, deve possuir uma oferta de e-mail ativa. Se a sua oferta de e-mail estiver associada a uma oferta de alojamento, verifique se esta não expirou. Pode verificar esta informação diretamente na Área de Cliente. Da mesma forma, o seu domínio também deve estar ativo.

Comece por verificar que está atualizado nos [pagamentos](/pages/account_and_service_management/managing_billing_payments_and_services/invoice_management#pay-bills) e nas [renovações](/pages/account_and_service_management/managing_billing_payments_and_services/how_to_use_automatic_renewal#renewal-management) dos seus serviços.

Eis como verificar que os seus serviços estão corretamente operacionais:

- Para o seu **domínio**, aceda à secção `Web Cloud`{.action}, clique em `Nomes de domínio`{.action} e selecione o seu domínio. Se o domínio expirar, isto ser-lhe-á indicado no topo da página.
- Para o seu **Alojamento Web**, dirija-se à secção `Web Cloud`{.action}, clique em `Alojamentos`{.action} e selecione o seu alojamento. A data de expiração ou de renovação automática do seu alojamento será indicada no topo da página.
- Para uma oferta **MXplan**, aceda à secção `Web Cloud`{.action}, clique em `E-mails`{.action} e selecione o domínio em causa. Clique no separador `Contas de e-mail`{.action}. Verifique o estado da conta de e-mail na coluna `Estado`.
- Para uma oferta **E-mail Pro**, aceda à secção `Web Cloud`{.action}, clique em `E-mail Pro`{.action} e selecione a sua plataforma. Clique no separador `Contas de e-mail`{.action}. Verifique o estado da conta de e-mail na coluna `Estado`.
- Para uma oferta **Exchange**, dirija-se à secção `Web Cloud`{.action}, clique em `Microsoft`{.action}, e depois clique em `Exchange`{.action} e selecione a sua plataforma. Clique no separador `Contas de e-mail`{.action}. Verifique o estado da conta de e-mail na coluna `Estado`.

### Não consigo enviar e-mails a partir do meu software de e-mail (**envio** e/ou **receção**)

Se utiliza um software de mensagens no seu computador (Outlook, Mail do Mac, Thunderbird, etc.) ou no seu smartphone (iOS, Android, etc.) e encontra uma falha no envio ou na receção, verifique os parâmetros de configuração de acordo com a sua oferta de e-mail e o software de mensagens ou de aplicação utilizado.

- Para uma oferta **MXplan**, na secção [Hosted email - MX Plan](/products/web-cloud-email-collaborative-solutions-mx-plan) dos nossos guias **Web Cloud**.

- Para uma oferta **E-mail Pro**, na secção [E-mail Pro](/products/web-cloud-email-collaborative-solutions-email-pro), dos nossos guias **Web Cloud**.

- Para uma oferta **Exchange**, na secção [Soluções colaborativas Microsoft](/products/web-cloud-email-collaborative-solutions-microsoft-exchange) dos nossos guias **Web Cloud**.

### Não consigo receber e-mails porque o meu endereço de e-mail está cheio, não tenho espaço. O que posso fazer?

Se subscreveu [um dos nossos serviços de e-mail OVHcloud](/links/web/emails) e uma das suas contas de e-mail está saturada, consulte o nosso guia "[Gerir o espaço de armazenamento de uma conta de e-mail](/pages/web_cloud/email_and_collaborative_solutions/troubleshooting/email_manage_quota)". Este guia ajuda-o a determinar se pode otimizar o espaço existente ou se é necessário mudar de oferta de e-mail para aumentar a capacidade de armazenamento.

### Os e-mails estão a funcionar a partir do webmail? (**envio** e/ou **receção**)

Para garantir que a avaria não está associada a um erro de configuração, realize um teste de envio e de receção diretamente através do webmail da OVHcloud. Se tudo estiver a funcionar corretamente, verifique a configuração do seu software através dos guias postos à sua disposição.

A partir do browser do seu computador ou a partir de um smartphone, vá ao endereço [Webmail](/links/web/email).

![webmail](images/webmail.png){.thumbnail}

### Não consigo aceder ao webmail

Certifique-se de que tem a palavra-passe correta. Se necessário, pode alterá-lo. Verifique igualmente se a dupla autenticação está ativada ([apenas Exchange](/links/web/emails-hosted-exchange)).

Como alterar a palavra-passe de um endereço de e-mail:

- Para uma oferta **MXplan**, consulte o nosso guia [Alterar a palavra-passe de um endereço de e-mail MX Plan](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_change_password)

- Para uma oferta **E-mail Pro**, aceda à secção `Web Cloud`{.action}, clique em `E-mail Pro`{.action} e selecione a sua plataforma. No separador `Contas de e-mail`{.action}, clique no botão `...`{.action} e em `Alterar`{.action} para alterar a palavra-passe.

- Para uma oferta **Exchange**, dirija-se à secção `Web Cloud`{.action}, clique em `Microsoft`{.action}, e depois clique em `Exchange`{.action} e selecione a sua plataforma. No separador `Contas de e-mail`{.action}, clique no botão `...`{.action} e em `Alterar`{.action} para alterar a palavra-passe. <br> Verifique se a dupla autenticação está ativada ao consultar o nosso guia [Configurar a dupla autenticação numa conta Exchange](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/manage_2fa_exchange).

### Há algum incidente ou manutenção em curso no meu serviço? (**envio** e/ou **receção**)

Pode verificar as diferentes tarefas em curso no <https://web-cloud.status-ovhcloud.com/>.

- Para **MXplan**, verifique na secção `E-mails`
- Para o **E-mail Pro**, dirija-se à secção `Microsoft`
- Para **Exchange**, dirija-se à secção `Microsoft`

### O apontamento do domínio para o meu serviço de e-mail está correto? (**receção**)

Verifique que o seu domínio está a apontar corretamente para os servidores de e-mail OVHcloud. Para isso, devem ser configurados registos do tipo MX na sua zona DNS. <br>Consulte o nosso manual [Adicionar um campo MX à configuração do domínio](/pages/web_cloud/domains/dns_zone_mx).

![DNSzone](images/DNS.png){.thumbnail}

### Após o envio de um e-mail, recebo uma mensagem indicando que o meu e-mail não pôde ser enviado, incluindo um código de 3 dígitos (**envio**)

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

Encontrará abaixo a maioria dos códigos de respostas negativas SMTP utilizados pelos servidores:

|Códigos de resposta|Detalhes|Ações|
|---|---|---|
|420|Prazo ultrapassado, problema de ligação|Esta mensagem de erro é devolvida unicamente pelos servidores mail GroupWise. Contacte o administrador do servidor de e-mail de destino|
|421|Serviço não disponível, canal de transmissão em curso de encerramento|Proveniência do erro indeterminado, certifique-se de que o envio para outro domínio funciona. Em caso afirmativo, queira tentar novamente o envio inicial mais tarde|
|432|Receção do e-mail no servidor Exchange parado|Esta mensagem de erro é devolvida unicamente pelos servidores de e-mail Microsoft Exchange. Contacte o administrador do servidor de e-mail de destino|
|449|Erro de roteamento|Esta mensagem de erro é retornada unicamente pelos servidores de e-mail Microsoft Exchange. Microsoft recomenda que efetue um diagnóstico com a sua ferramenta WinRoute|
|450|Ação de mensagens pedida não efetuada: caixa de email indisponível (por exemplo, caixa de email ocupada ou temporariamente bloqueada por razões de segurança ou de blacklistagem)|Verifique se o endereço IP do servidor de e-mail não está "blacklistado" ([SpamHaus](https://check.spamhaus.org/)) e verifique se o seu e-mail não contém palavras relacionadas com SPAM.|
|451|Ação requerida abandonada: Erro de tratamento local|Isto pode dever-se a uma sobrecarga momentânea ou à verificação do registo SPF do domínio emissor incorreto. Refira-se à mensagem adicional fornecida pelo servidor, ou contacte o administrador do servidor se persistir|
|452|Ação solicitada não efetuada: sistema de armazenamento insuficiente|O seu servidor de e-mail está "sobrecarregado". Isto também pode ser causado por demasiadas mensagens que tentam ser enviadas ao mesmo tempo. Verifique a sua caixa de envio e tente novamente|
|455|Servidor incapaz de receber os parâmetros|Aguarde algum tempo e tente novamente. Em caso de falha, contacte o administrador do servidor de e-mail do destinatário|
|500|Erro de sintaxe, encomenda não reconhecida (isto pode incluir erros como uma linha de encomenda demasiado longa)|Isto é frequentemente causado pelo antivírus ou pela firewall do remetente. Verifique isso e tente novamente|
|501|Erro de sintaxe nos parâmetros ou nos argumentos|Isto é frequentemente causado por um endereço de e-mail de destinatário errado ou por um problema de antivírus ou de firewall relativamente ao remetente. Queira verificar o endereço de destino bem como o seu antivírus ou firewall|
|502|Encomenda não implementada|Os parâmetros ou as opções utilizadas aquando do envio do e-mail com o seu servidor SMTP são reconhecidos mas desativados na sua configuração. Contacte o seu fornecedor de serviço|
|503|O servidor encontrou uma má sequência de encomendas|Isto deve-se geralmente a um problema de autenticação. Certifique-se de que está autenticado no servidor SMTP ao nível da configuração do seu software de mensagens.|
|504|Parâmetro de comando não implementado|Os parâmetros ou as opções utilizadas aquando do envio do e-mail com o seu servidor SMTP são reconhecidos mas desativados na sua configuração. Contacte o seu fornecedor de serviço|
|535|Falha durante a autenticação|As informações de utilizador/password foram descarregadas ou o envio está potencialmente bloqueado no seu endereço de e-mail. Verifique o estado do seu endereço de e-mail a partir da Área de Cliente OVHcloud. Uma alteração da password pode desbloquear o envio se a conta tiver sido bloqueada por spam, consulte o nosso guia [O que fazer no caso de uma conta bloqueada por spam?](/pages/web_cloud/email_and_collaborative_solutions/troubleshooting/locked_for_spam) para mais informações|
|550|Ação solicitada não efetuada: caixa de correio indisponível|O servidor de e-mail de destino não pôde verificar o endereço de e-mail utilizado. Isto é causado, na maioria dos casos, por um endereço de e-mail de destino inválido, mas pode também significar que o servidor de e-mail de destino tem problemas com firewall ou com a conectividade. Verificar o endereço de e-mail do destinatário e/ou tente novamente|
|550 5.7.1|Email rejected per policy reason|O servidor de correio de destino rejeitou o endereço de e-mail de envio por razões de política de segurança. Essas razões podem ser múltiplas, geralmente são detalhadas com o código de erro. Em certos casos, pode tratar-se de um endereço IP na cadeia de transmissão que está presente numa lista de rejeição. Para verificar a reputação de um endereço IP, pode testá-lo, por exemplo, em [MXtoolbox](https://mxtoolbox.com/blacklists.aspx) ou verificar a cadeia de transmissão de um e-mail a partir do endereço em causa com [Mailtester](https://www.mail-tester.com/)|
|550 5.7.26|This message does not have authentication information or fails to pass authentication checks| O e-mail foi rejeitado porque o serviço de e-mail do remetente não possui SPF ou DKIM configurado em seu nome de domínio.<br><br>É aconselhável configurar um registro SPF prioritário, compatível com todos os e-mails ofertas. Use nosso guia “[Melhorar a segurança dos e-mails através do registo SPF](/pages/web_cloud/domains/dns_zone_spf)”.<br><br>Se sua oferta de e-mail tiver a opção DKIM, você pode colocá-la usando nosso guia “[Melhorar a segurança dos e-mails através do registo DKIM](/pages/web_cloud/domains/dns_zone_dkim)”.|
|551|Utilizador não local|Esta é geralmente utilizada como uma estratégia de prevenção contra o spam. Indica-se que o envio de correio não é autorizado, por qualquer razão, a transmitir a sua mensagem para outro servidor que não o seu. Contacte o seu fornecedor de serviço|
|552|Serviço de mensagens pedido interrompido: espaço de armazenamento ultrapassado|O utilizador que tentou contactar já não tem espaço disponível para receber mensagens. Infelizmente, a única solução é contactar o destinatário através de outro método|
|553|Ação solicitada não efetuada: endereço de e-mail não autorizado|Esta situação é geralmente causada por um endereço de e-mail de destino incorreto. Verifique que o endereço de e-mail está correto|
|554|Transação falhada, "Nenhum serviço SMTP aqui"|Trata-se geralmente de um problema de blacklist. Verifique se o endereço IP do servidor de e-mail não está "blacklistado" ([SpamHaus](https://check.spamhaus.org/))|
|555|MAIL FROM / RCPT TO, parâmetros não reconhecidos ou não utilizados|O servidor SMTP de saída não regista corretamente o endereço de e-mail utilizado nos seus parâmetros "De" ou "A". Verifique que os endereços de e-mail indicados estão corretos e verifique que não ultrapassou o limite definido pela OVHcloud: 200 emails /hora /conta e 300 emails /hora /ip|

## Saiba mais

[FAQ E-mail](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/faq-emails)

Fale com a nossa comunidade de utilizadores em <https://community.ovh.com/en/>.
