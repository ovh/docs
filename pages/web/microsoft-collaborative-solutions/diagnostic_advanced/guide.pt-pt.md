---
title: 'Diagnóstico Exchange: O que fazer em caso de erro?'
excerpt: 'Diagnóstico Exchange: O que fazer em caso de erro?'
slug: diagnostico_exchange_o_que_fazer_em_caso_de_erro
legacy_guide_number: g2277
---


## Efetuar um diagnóstico
Aceda ao seu Espaço Cliente a partir deste link: [Espaço cliente OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt).

Após estar ligado selecione na coluna da esquerda o menu Microsoft e depois clique no seu serviço Exchange.

![](images/img_4450.jpg){.thumbnail}
Clique de seguida no separador "Diagnóstico", devendo depois introduzir a conta de e-mail Exchange e a respetiva password para dar inicio ao diagnóstico.

O diagnóstico Exchange poderá levar entre 3 e 10 minutos.

![](images/img_4451.jpg){.thumbnail}
Deixamos um exemplo do resultado do diagnóstico de uma conta Exchange:


- Novo diagnóstico: Efetuar um novo diagnóstico

- Criar um pedido de assistência: Permite a criação de um ticket para o nosso suporte com o resultado do seu diagnóstico



![](images/img_4471.jpg){.thumbnail}


## Ocorreram erros no seu diagnóstico?
Vamos detalhar cada erro de forma a que tenha uma ajuda quanto à sua resolução:


- ATENÇÃO: A conta está bloqueada por envio de spam:


Este erro indica que o envio de e-mail a partir da sua conta está temporariamente desativado. Não haverá problemas quanto à receção de e-mails.

Quando uma conta é bloqueada por SPAM é possível verificar, no serviço Exchange e na secção de e-mail, uma tag SPAM. Ao clicar nela será reencaminhado para o e-mail recebido no seguimento do bloqueio.

É necessário responder a este e-mail para que solicite o desbloqueio da conta.

![](images/img_4453.jpg){.thumbnail}

- ATENÇÃO: A subscrição da conta expirou:


Neste caso a sua subscrição já não se encontra ativa. A receção e o envio estão desativados. É então necessário que contacte o nosso suporte para que o serviço seja reativado.

- ATENÇÃO: A conta está bloqueada devido à política de segurança:


É possível que defina no seu serviço Exchange uma política de segurança. Ela pode levar ao bloqueio da conta durante um determinado prazo aquando da configuração desta política.

Pode definir que a conta seja bloqueada após um determinado número de tentativas de ligação durante um prazo que também pode definir.

Se encontrar um bloqueio a este nível deverá aguardar até que o prazo indicado seja ultrapassado de forma a que a sua conta seja desbloqueada ou contacte o nosso suporte ao criar um pedido de assistência.

- ATENÇÃO: A autenticação ao webmail falhou:


Este erro pode ocorrer caso a password introduzida aquando do pedido de realização do diagnóstico não é a correta, e neste caso deve efetuar um novo diagnóstico.

Pode igualmente atualizar a password a partir do seu serviço Exchange, separador conta de e-mail e depois relance o diagnóstico. Se o problema persistir crie um pedido de assistência.

- ATENÇÃO: O rgisto MX do domínio não é válido:


Este erro indica uma impossibilidade de receção d e-mails e será igualmente associado a este erro: ATENÇÃO: O e-mail de teste não foi recebido.

Veja os servidores MX que validam a sua oferta Exchange:


- Apenas Exchange: mx1.mail.ovh.net
- Exchange + E-mail pop/imap alojado pela OVH: mx1.mail.ovh.net
- Exchange + E-mail pop/imap não alojado pela OVH: ex.mail.ovh.net ou ex2.mail.ovh.net



- ATENÇÃO: O registo SRV do domínio não é válido:


O registo SRV é necessário para a configuração automática da sua conta Exchange num software de e-mails compatível como o Outlook 2010, 2013 e 2016.

Pode verificar os seus campos SRV na zona DNS do seu domínio.

Veja o campo SRV necessário para uma oferta Exchange:

|A prioridade|0|
|O peso|0|
|A porta|443|
|O alvo oferta Hosted| ex.mail.ovh.net ou ex2.mail.ovh.net |
|O alvo oferta Private| O-nome-do-seu-host|



- ATENÇÃO: O e-mail de teste não pôde ser enviado a partir da conta


Este erro indica uma impossibilidade de enviar um e-mail a partir da sua conta.

Poderão haver então várias causas. A saber:


- A sua conta está suspensa
- A password indicada não está correta
- A sua conta está bloqueada por envio de SPAM
- Um incidente na infraestrutura Exchange


Neste caso consulte as indicações dadas em cima para corrigir este erro ou declarar um pedido de assistência no seguimento do seu diagnóstico.

