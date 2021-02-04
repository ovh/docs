---
title: Utilização avançada dos e-mails OVH
excerpt: Utilização avançada dos e-mails OVH
slug: utilizacao_avancada_dos_e-mails_ovh
legacy_guide_number: g2117
---

## O que devo verificar em caso de problemas com os meus e-mails?

Em caso de problemas nos envios ou na receção dos seus e-mails, vejamos alguns pontos a verificar:

- A minha oferta de e-mail está ativa? Para que os seus e-mails estejam funcionais, deverá dispor de uma oferta de e-mail ativa. Se possui e-mails associados a uma oferta de alojamento, queira certificar-se de que ela não expirou. É possível verificar essa informação diretamente no seu Espaço Cliente. Deve ainda verificar que o seu nome de domínio está igualmente ativo.

- Os e-mails funcionam a partir do webmail? De forma a verificar que o problema não está associado a um erro de configuração, efetue um teste de envio e receção a partir do webmail OVH. Se tudo funcionar corretamente, queira verificar a configuração do seu software através dos guias que temos à sua disposição.

- Não se consegue ligar ao webmail? Confirme que a password é a correta, e se necessário altere-a no seu Espaço Cliente. Para tal, consulte as questões anteriores neste guia.

- Existe um incidente em curso para o meu serviço? É possível verificar os diferentes trabalhos que estão atualmente em curso [nesta página](http://estado.ovh.pt/).

- O apontamento do meu domínio está correto?Verifique se o seu nome de domínio utiliza corretamente os servidores de e-mail (registos do tipo MX) da oferta de e-mail da OVH.

## Os códigos de resposta de um servidor SMTP

### Comandos SMTP

Os comandos SMTP são utilizados para a transferência de correio eletrónico.
Para interrogar um servidor SMTP é necessário dialogar com ele ao enviar-lhe "Comandos".
Após o servidor ter recebido um comando, ele retornará uma resposta SMTP.

### Respostas SMTP

As respostas aos comandos SMTP servem para assegurar a sincronização dos pedidos e as ações nos processos de transferência de correio, de forma a garantir que o cliente SMTP conhece o estado do servidor SMTP.
Cada comando deverá gerar uma resposta.

Uma resposta SMTP é constituída por três números seguindo de um texto.
O texto é útil apenas e só para um humano.

Os três números da resposta tem, cada um deles, um significado particular: :

- o primeiro número indica se a resposta é boa, má ou incompleta. Um servidor SMTP será então capaz de determinar a sua próxima ação ao examinar este primemiro número.

- O segundo e o terceiro número fornecem informações complementares.

## Rápida análise das respostas SMTP
Existem quatro valores possíveis para o primeiro número do código de resposta:

- 2xx  Resposta positiva:

A ação pedida foi efetuada com sucesso. Poderá ser iniciado um novo pedido.

- 3xx  Resposta positiva temporária:

O comando foi aceite, mas a ação pedida esta aguardar a receção de mais informações.
O cliente SMTP deverá enviar um outro comando especificando essa informação.

- 4xx  Resposta negativa de conclusão transitória:

O comando não foi aceite e a ação pedida não pode ser efetuada.
Porém, a condição de erro é temporária e a ação pode ser solicitada novamente.

- 5xx  Resposta negativa :

O comando não foi aceite e a ação pedida não pode ser efetuada.
O cliente SMTP não deverá repetir o mesmo pedido.

### Interpretação

Encontrará aqui a maioria dos códigos de resposta SMTP utilizados pelos servidores:

|Códigos de resposta|Detalhes|Ações|
|---|---|---|
|211|Mensagens de estado do sistema ou resposta de ajuda|A mensagem é seguida de mais informações|
|214|Mensagem de ajuda|Contém informações sobre o seu servidor e reencaminha-o normalmente para uma página de FAQ|
|220|O servidor está pronto﻿|Trata-se de uma mensagem que indica que o servidor está pronto|
|221|Canal de transmissão fechada|Significa que o servidor fecha a ligação após a comunicação ser recebida|
|250|Transmissão da mensagem terminada|O seu e-mail foi transmitido corretamente|
|251|Utilizador final não presente no servidor, mas ela vai ser transmitida|Significa que a mensagem será transmitida a um outro servidor (reencaminhamento, outro servidor MX, ...)|
|252|O servidor não pode verificar o utilizador final mas vai tentar transmitir a mensagem|O utilizador final não pode ser verificado de momento mas é provável que será transmitida mais tarde|
|354|O servidor recebeu os endereços do remetente e de receção|Significa que está à espera de receber o conteúdo do e-mail para o poder transmitir|
|420|Problema de ligação|Esta nebsagen de erro foi devolvida unicamente para os servidores de e-mail GroupWise. Contacte o administrador do servidor de e-mail de destino|
|421|Serviço não disponível, canal de transmissão em curso de encerramento|Proveniência do erro indeterminado, assegure-se de que o outro domínio funciona. Se sim, tente enviar o e-mail mais tarde|
|432|Receção do e-mail no servidor Exchange parada|Esta mensagem de erro é devolvida unicamente para os servidores de e-mail Exchange. Contacte o administrador do servidor de e-mail de destino|
|449|Erro de roteamento|Esta mensagem de erro é devolvida unicamente para os servidores de e-mail Exchange. A Microsoft recomenda que efetue um diagnóstico com a sua ferramenta WinRoute|
|450|Ação do e-mail pedida não efetuada: caixa de e-mail indisponível (por exemplo, caixa de e-mail ocupada ou temporariamente bloqueada por razões de segurança ou de backlist)|Verifique se o seu endereço IP do servidor de e-mail não está blacklistado ([SpamHaus](https://www.spamhaus.org/lookup/)), e verifique igualmente se o seu e-mail não contém palavras que podem ser categorizadas como  SPAM.|
|451|Ação pedida abandonada: Erro de tratamento local|Esta situação pode ocorrer devido a uma sobrecarga momentânea ou devido a uma verificação do SPF do domínio emissor incorreta. Consulte a mensagem complementar fornecida pelo servidor ou contacte o administrador do servidor caso o problema persista|
|452|Ação pedida não efetuada:sistema de armazenamento insuficiente|O seu servidor de e-mail está « sobrecarregado ». Poderá ocorrer igualmente devido a um elevado número de mensagens que tentam ser enviados de uma só vez. Queira verificar a sua caixa de envio e tente mais tarde|
|455|Servidor incapaz de receber os parâmetros|Aguarde mais alguns minutos antes de efetuar uma nova tentativa. Caso volte a dar erro contacte o administrador do servidor de destino|
|500|Erro de sintaxe, comando não recebido (Pode incluir erros como uma linha de comandos demasiado longa)|Pode ocorrer devido a um anti-vírus ou a firewall do remetente. Queira verificar e tente novamente|
|501|Erro de sintaxe nos parâmetros ou nos argumentos|Tal ocorre devido a um endereço de e-mail de destino errado ou um problema com o anti-vírus ou a firewall do remetente. Queira verificar o endereço de destino bem como o sue anti-vírus ou firewall|
|502|Comando não implementado|Os parâmetros ou as opções utilizadas aquando do envio d e-mail com o seu servidor SMTP são reconhecidos mas estão desativados na sua configuração. Queira contactar o seu fornecedor de serviço|
|503|O servidor encontrou uma má sequência de comandos|Esta situação ocorre normalmente devido a um problema de autenticação. Assegure-se que se autenticou corretamente no servidor SMTP ao verificar a configuração do seu software de e-mail.e|
|504|Parâmetro de comando não implementado|Os parâmetros ou as opções utilizadas aquando do envio d e-mail com o seu servidor SMTP são reconhecidos mas estão desativados na sua configuração. Queira contactar o seu fornecedor de serviço|
|550|Ação pedida não efetuada: caixa de correio indisponível|O servidor de e-mail de dstino não pôde verificar o endereço de e-mail utilizador. É frequente ser causado por um endereço de destino inválido mas pode igualmente significar que o servidor de e-mail de destino tem problemas de firewall ou de ligação. Verifique o endereço de e-mail de destino e tente novamente|
|551|Utilizador não local|É normalmente utilizado como uma estratégia de prevenção contra o spam. Indica que o relais de correio não é autorizado por qualquer razão para um outro servidor. Queira contactar o seu fornecedor de serviço|
|552|Ação de mensagem pedida interrompida. O espaço de armazenamento foi ultrapassado|O utilizador que tente contactar não tem espaço disponível para receber as suas mensagens. A única solução, infelizmente, é de contactar o destinatário através de um outro método|
|553|Ação de mensagem pedida não efetuada: o endereço de e-mail não é autorizado|É geralmente causado por um endereço de e-mail de destino incorreto. Queira verificar que o endereço de e-mail está correto|
|554|Transação falhou, "Nenhum serviço SMTP aqui")|Trata-se geralmente de um problema de backlist. Verifique se o seu endereço IP do seu servidor de e-mail não está blacklistado ([SpamHaus](https://www.spamhaus.org/lookup/))|
|555|MAIL FROM / RCPT TO, parâmetros não reconhecidos ou não implementados|O servidor SMTP de saída não registou corretamente o endereço de e-mail utilizado nos seus parâmetros "De" ou "A". Queira verificar que os endereços de e-mail indicados estão corretos, e verifique igualmente se não ultrapassou o limite definido pela OVH: 200 e-mails/hora /conta e 300 e-mails/hora /ip|