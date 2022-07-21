---
title: 'Envio ou receção de e-mails impossível'
slug: utilizacao_avancada_dos_e-mails_ovh
legacy_guide_number: 2117
excerpt: "Saiba como reagir em caso de problemas de envio ou receção de e-mails na OVHcloud"
section: 'Diagnóstico'
order: 02
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

**Última atualização: 21/07/2022**

## Objetivo

Não é possível receber ou enviar e-mails a partir do seu software de correio eletrónico ou a partir do webmail?

**Saiba como diagnosticar um erro de envio ou de receção na sua oferta de e-mail OVHcloud.**

> [!primary]
>
> Se tiver outras questões que não sejam tratadas neste manual, não hesite em consultar a nossa [FAQ de E-mail](https://docs.ovh.com/pt/emails/faq-emails/).

## Requisitos

- Dispor de uma oferta **MX Plan** ou de uma oferta **E-mail Pro** ou de uma oferta **Exchange**.
- Ter acesso à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt).

## Instruções

### A minha oferta de e-mail e/ou as minhas contas estão ativas?

Para que os seus e-mails sejam funcionais, deve possuir uma oferta de e-mail ativa. Se a sua oferta de e-mail estiver associada a uma oferta de alojamento, verifique se esta não expirou. Pode verificar esta informação diretamente na Área de Cliente. Da mesma forma, o seu domínio também deve estar ativo.

Comece por verificar que está atualizado nos [pagamentos](https://docs.ovh.com/pt/billing/gerir-faturas-ovhcloud/#pay-bills) e nas [renovações](https://docs.ovh.com/pt/billing/guia_de_utilizacao_da_renovacao_automatica_da_ovh/#renewal-management) dos seus serviços.

Eis como verificar que os seus serviços estão corretamente operacionais:

- Para o seu **domínio**, aceda à secção `Web Cloud`{.action}, clique em `Nomes de domínio`{.action} e selecione o seu domínio. Se o domínio expirar, isto ser-lhe-á indicado no topo da página.
- Para o seu **Alojamento Web**, dirija-se à secção `Web Cloud`{.action}, clique em `Alojamentos`{.action} e selecione o seu alojamento. A data de expiração ou de renovação automática do seu alojamento será indicada no topo da página.
- Para uma oferta **MXplan**, aceda à secção `Web Cloud`{.action}, clique em `E-mails`{.action} e selecione o domínio em causa. Clique no separador `Contas de e-mail`{.action}. Verifique o estado da conta de e-mail na coluna `Estado`.
- Para uma oferta **E-mail Pro**, aceda à secção `Web Cloud`{.action}, clique em `E-mail Pro`{.action} e selecione a sua plataforma. Clique no separador `Contas de e-mail`{.action}. Verifique o estado da conta de e-mail na coluna `Estado`.
- Para uma oferta **Exchange**, dirija-se à secção `Web Cloud`{.action}, clique em `Microsoft`{.action}, e depois clique em `Exchange`{.action} e selecione a sua plataforma. Clique no separador `Contas de e-mail`{.action}. Verifique o estado da conta de e-mail na coluna `Estado`.

### Não consigo enviar e-mails a partir do meu software de e-mail

Se utiliza um software de mensagens no seu computador (Outlook, Mail do Mac, Thunderbird, etc.) ou no seu smartphone (iOS, Android, etc.) e encontra uma falha no envio ou na receção, verifique os parâmetros de configuração de acordo com a sua oferta de e-mail e o software de mensagens ou de aplicação utilizado.

- Para uma oferta **MXplan**, na secção [Hosted email - MX Plan](https://docs.ovh.com/pt/emails/) dos nossos guias **Web Cloud**.

- Para uma oferta **E-mail Pro**, na secção [E-mail Pro](https://docs.ovh.com/pt/emails-pro/), dos nossos guias **Web Cloud**.

- Para uma oferta **Exchange**, na secção [Soluções colaborativas Microsoft](https://docs.ovh.com/pt/microsoft-collaborative-solutions/) dos nossos guias **Web Cloud**.

### Os e-mails estão a funcionar a partir do webmail?

Para garantir que a avaria não está associada a um erro de configuração, realize um teste de envio e de receção diretamente através do webmail da OVHcloud. Se tudo estiver a funcionar corretamente, verifique a configuração do seu software através dos guias postos à sua disposição.

A partir do browser do seu computador ou a partir de um smartphone, vá ao endereço <https://www.ovh.pt/mail/>.

![webmail](images/webmail.png){.thumbnail}

### Não consigo aceder ao webmail

Certifique-se de que tem a palavra-passe correta. Se necessário, pode alterá-lo. Verifique igualmente se a dupla autenticação está ativada ([apenas Exchange](https://www.ovhcloud.com/pt/emails/hosted-exchange/)).

Como alterar a palavra-passe de um endereço de e-mail:

- Para uma oferta **MXplan**, consulte o nosso guia [Alterar a palavra-passe de um endereço de e-mail MX Plan](https://docs.ovh.com/pt/emails/alterar-palavra-passe-endereco-email/)

- Para uma oferta **E-mail Pro**, aceda à secção `Web Cloud`{.action}, clique em `E-mail Pro`{.action} e selecione a sua plataforma. No separador `Contas de e-mail`{.action}, clique no botão `...`{.action} e em `Alterar`{.action} para alterar a palavra-passe.

- Para uma oferta **Exchange**, dirija-se à secção `Web Cloud`{.action}, clique em `Microsoft`{.action}, e depois clique em `Exchange`{.action} e selecione a sua plataforma. No separador `Contas de e-mail`{.action}, clique no botão `...`{.action} e em `Alterar`{.action} para alterar a palavra-passe. <br> Verifique se a dupla autenticação está ativada ao consultar o nosso guia [Configurar a dupla autenticação numa conta Exchange](https://docs.ovh.com/pt/microsoft-collaborative-solutions/configurar-2fa-exchange/).

### Há algum incidente ou manutenção em curso no meu serviço?

Pode verificar as diferentes tarefas em curso no <https://web-cloud.status-ovhcloud.com/>.

- Para **MXplan**, verifique na secção `E-mails`
- Para o **E-mail Pro**, dirija-se à secção `Microsoft`
- Para **Exchange**, dirija-se à secção `Microsoft`

### O apontamento do domínio para o meu serviço de e-mail está correto?

Verifique que o seu domínio está a apontar corretamente para os servidores de e-mail OVHcloud. Para isso, devem ser configurados registos do tipo MX na sua zona DNS. <br>Consulte o nosso manual [Adicionar um campo MX à configuração do domínio](https://docs.ovh.com/pt/domains/e-mail-partilhado-manual-de-configuracao-mx-com-zona-dns-ovh/).

![DNSzone](images/DNS.png){.thumbnail}

### Após o envio de um e-mail, recebo uma mensagem indicando que o meu e-mail não pôde ser enviado, incluindo um código de 3 dígitos

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
|450|Ação de mensagens pedida não efetuada: caixa de email indisponível (por exemplo, caixa de email ocupada ou temporariamente bloqueada por razões de segurança ou de blacklistagem)|Verifique se o endereço IP do servidor de e-mail não está "blacklistado" ([SpamHaus](https://check.spamhaus.org/){.external}) e verifique se o seu e-mail não contém palavras relacionadas com SPAM.|
|451|Ação requerida abandonada: Erro de tratamento local|Isto pode dever-se a uma sobrecarga momentânea ou à verificação do registo SPF do domínio emissor incorreto. Refira-se à mensagem adicional fornecida pelo servidor, ou contacte o administrador do servidor se persistir|
|452|Ação solicitada não efetuada: sistema de armazenamento insuficiente|O seu servidor de e-mail está "sobrecarregado". Isto também pode ser causado por demasiadas mensagens que tentam ser enviadas ao mesmo tempo. Verifique a sua caixa de envio e tente novamente|
|455|Servidor incapaz de receber os parâmetros|Aguarde algum tempo e tente novamente. Em caso de falha, contacte o administrador do servidor de e-mail do destinatário|
|500|Erro de sintaxe, encomenda não reconhecida (isto pode incluir erros como uma linha de encomenda demasiado longa)|Isto é frequentemente causado pelo antivírus ou pela firewall do remetente. Verifique isso e tente novamente|
|501|Erro de sintaxe nos parâmetros ou nos argumentos|Isto é frequentemente causado por um endereço de e-mail de destinatário errado ou por um problema de antivírus ou de firewall relativamente ao remetente. Queira verificar o endereço de destino bem como o seu antivírus ou firewall|
|502|Encomenda não implementada|Os parâmetros ou as opções utilizadas aquando do envio do e-mail com o seu servidor SMTP são reconhecidos mas desativados na sua configuração. Contacte o seu fornecedor de serviço|
|503|O servidor encontrou uma má sequência de encomendas|Isto deve-se geralmente a um problema de autenticação. Certifique-se de que está autenticado no servidor SMTP ao nível da configuração do seu software de mensagens.|
|504|Parâmetro de comando não implementado|Os parâmetros ou as opções utilizadas aquando do envio do e-mail com o seu servidor SMTP são reconhecidos mas desativados na sua configuração. Contacte o seu fornecedor de serviço|
|535|Falha durante a autenticação|As informações de utilizador/password foram descarregadas ou o envio está potencialmente bloqueado no seu endereço de e-mail. Verifique o estado do seu endereço de e-mail a partir da Área de Cliente OVHcloud. Uma alteração da password pode desbloquear o envio se a conta tiver sido bloqueada por spam, consulte o nosso guia [O que fazer no caso de uma conta bloqueada por spam?](https://docs.ovh.com/pt/microsoft-collaborative-solutions/bloqueado-por-spam/) para mais informações|
|550|Ação solicitada não efetuada: caixa de correio indisponível|O servidor de e-mail de destino não pôde verificar o endereço de e-mail utilizado. Isto é causado, na maioria dos casos, por um endereço de e-mail de destino inválido, mas pode também significar que o servidor de e-mail de destino tem problemas com firewall ou com a conectividade. Verificar o endereço de e-mail do destinatário e/ou tente novamente|
|551|Utilizador não local|Esta é geralmente utilizada como uma estratégia de prevenção contra o spam. Indica-se que o envio de correio não é autorizado, por qualquer razão, a transmitir a sua mensagem para outro servidor que não o seu. Contacte o seu fornecedor de serviço|
|552|Serviço de mensagens pedido interrompido: espaço de armazenamento ultrapassado|O utilizador que tentou contactar já não tem espaço disponível para receber mensagens. Infelizmente, a única solução é contactar o destinatário através de outro método|
|553|Ação solicitada não efetuada: endereço de e-mail não autorizado|Esta situação é geralmente causada por um endereço de e-mail de destino incorreto. Verifique que o endereço de e-mail está correto|
|554|Transação falhada, "Nenhum serviço SMTP aqui")|Trata-se geralmente de um problema de blacklist. Verifique se o endereço IP do servidor de e-mail não está "blacklistado" ([SpamHaus](https://check.spamhaus.org/){.external})|
|555|MAIL FROM / RCPT TO, parâmetros não reconhecidos ou não utilizados|O servidor SMTP de saída não regista corretamente o endereço de e-mail utilizado nos seus parâmetros "De" ou "A". Verifique que os endereços de e-mail indicados estão corretos e verifique que não ultrapassou o limite definido pela OVHcloud: 200 emails /hora /conta e 300 emails /hora /ip|

## Saiba mais

[FAQ E-mail](https://docs.ovh.com/pt/emails/faq-emails/)

Fale com a nossa comunidade de utilizadores em <https://community.ovh.com/en/>.
