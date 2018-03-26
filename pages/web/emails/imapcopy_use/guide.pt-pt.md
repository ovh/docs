---
title: 'IMAPcopy: Guia de utilização'
excerpt: ''
slug: imapcopy_guia_de_utilizacao
legacy_guide_number: g1310
---


## Para que serve?
O IMAPCopy é bastante útil caso deseje copiar as contas de e-mail de uma conta A (source) para uma conta B (destino).

Como tal, deverá efetuar o seguinte:
1. Introduz as informações pedidas relativas à conta de e-mail a transferir;
2- Introduz as informações pedidas relativas à sua nova conta de e-mail;
3- Após confirmada a sincronização, poderá fechar a paǵina e os seus e-mails serão copiados para o destino. esta operação pod elevar algumas horas.

Poderá aceder diretemente à ferramenta através do seguinte endereço:
[http://webmail.ovh.net/fr/imapcopy/](http://webmail.ovh.net/fr/imapcopy/)

![](images/img_1423.jpg){.thumbnail}


## Ou pode recuperá-lo no nosso website.
Quando está no website [OVH](http://www.ovh.pt) clique em Webmail no canto superior direito.
Chegará de seguida à interface do Webmail.

![](images/img_2846.jpg){.thumbnail}
No menu contextual no canto superior direito (Webmail a azul), encontrará "Aceder às ferramentas do e-mail".

Ao clicar chegará à interface de ferramentas de e-mails onde poderá constatar o IMAPCopy.
Pode então clicar em IMAPCopy.

![](images/img_2411.jpg){.thumbnail}


## Escolha dos serviços
IMAPCopy permite que transfira as contas de e-mail externas à OVH para uma conta de e-mail OVH.

Veja os principais fornecedores de serviços e-mails que propomos por defeito:

|AOL|Yahoo|Free|Hosted exchange2013|
|Gmail|SFR|La Poste|Private exchange 2013|
|Partilhado OVH|Orange|Outro|


Se o seu fornecedor de serviços de e-mail não está na lista, selecione "Outro".
No exemplo apresentado aqui, vamos fazer uma cópia da nossa conta OVH partilhado
para a nossa conta Exchange 2013.

Selecionamos então "Partilhado OVH" como Endereço de e-mail Source.

![](images/img_1426.jpg){.thumbnail}


## Parametrização
Para a parametrização completa do Endereço de e-mail source, veja os diferentes elementos a introduzir na zona do formulário:
1. Serviço: cf. ver em cima (Partilhado OVH no nosso caso) 
2. Login: o seu endereço de e-mail source na íntegra (support@ovh.net no nosso caso, um endereço partilhado) ou o seu login de ligação (o que está antes da "@");
3. Password: a password da conta source;
4. Servidor IMAP: o servidor de e-mail ao qual efetua a ligação para verificar a conta source (ssl0.ovh.net no nosso caso, o servidor utiliza uma ligação SSL);
5. SSL: a selecionar se o seu servidor utiliza uma ligação encriptada do tipo SSL (Secured Socket Layer) (selecionada no nosso caso);

Após ter introduzido todos os elementos clique em "Validar".

![](images/img_1427.jpg){.thumbnail}


## Ligação à conta source
Após ter validado as informações de ligação ao Endereço de e-mail Source, vão ocorrer 2 etapas:

1. Está em curso um teste à ligação da sua conta .
2. A ligação à sua conta foi estabelecida com sucesso.

![](images/img_1428.jpg){.thumbnail}


## Escolha dos serviços
O IMAPCopy foi concebido para transferir de contas e-mail OVH ou externas à OVH para uma conta OVH (Exchange ou Partilhado).
No entanto, com a nova oferta Exchange 2013, a cópia de destino abre-se aos servidores externos à OVH.

Veja os principais fornecedores de serviços de e-mail que vos propomos de forma padrão:

- Exchange 25 GB
- Exchange Corporate
- Exchange Revendedor
- Partilhado OVH
- Outro


Se o seu fornecedor de serviços de e-mail não está na lista, selecione "Outro".

No exemplo apresentado aqui, vamos fazer uma cópia da nossa conta OVH partilhado
para a nossa conta Exchange 2013.

Selecionamos então "Outro" como Endereço de e-mail de destino.

![](images/img_1429.jpg){.thumbnail}


## Parametrização
Para a parametrização completa do Endereço de e-mail de destino, veja os diferentes elementos a introduzir na zona do formulário :
1. Serviço: cf. ver em cima (Outro no nosso caso) 
2. Login: o seu endereço de e-mail source na íntegra (exchange@ovh.net no nosso caso, um endereço Exchange 2013) ou o seu login de ligação (o que está antes da "@");
3. Password: a password da conta source;
4. Servidor IMAP: o servidor de e-mail ao qual efetua a ligação para verificar a conta source (ex.mail.ovh.net no nosso caso, o servidor utiliza uma ligação SSL);
5. SSL: a selecionar se o seu servidor utiliza uma ligação encriptada do tipo SSL (Secured Socket Layer) (selecionada no nosso caso);

Após ter introduzido todos os elementos clique em "Validar".

![](images/img_1430.jpg){.thumbnail}


## Ligação à conta de destino
Tal como aconteceu para a conta de e-mail Source, após ter validado as informações de ligação ao Endereço de e-mail de Destino, vão ocorrer 2 etapas:

1. Está em curso um teste à ligação da sua conta .
2. A ligação à sua conta foi estabelecida com sucesso.

![](images/img_1431.jpg){.thumbnail}


## Sincronização
Uma vez efetuada e estabelecida a ligação ao Adresse mail de Destination, o botão Sincronizar irá ficar vísivel.

Clique nele para dar inicio à cópia da conta A (source) para a conta B (destino).

No nosso caso, vamos copiar todos os e-mails da conta support@ovh.net para a conta Exchange 2013 exchange@ovh.net.

Irá ser apresentada a seguinte mensagem:
A sincronização das suas contas está em curso de tratamento. Queria consultar o seu estado ao preencher o formulário em baixo.

![](images/img_1432.jpg){.thumbnail}
Como se trata de uma sincronização do tipo IMAP, as pastas existentes na Conta de e-mail Source que não existam na l'Conta de e-mail de Destino serão criada, quer estejam vazias ou não.


## Sincronização - Erros
Após ter dado início à sincronização, se aparecer uma mensagem de erro aparecer no seguinte formato (cf. imagem ao lado):

Ocorreu um erro aquando da sincronização. Todo for sync this account exists.

Trata-se de uma mensagem de erro em português seguida de um erro em Inglês.

No exemplo que demonstramos ao lado, clicámos uma segunda vez no botão Sincronizar. Ele indica-nos então que: Já existe um trabalho de sincronização para essa conta. Não é então possível que criemos um segundo trabalho.

![](images/img_1433.jpg){.thumbnail}


## Sincronização - Fim
Após o término da sincronização, receberá um e-mail com os detalhes na operação no Endereço de e-mail de Destino:

O e-mail recebido será apresentado como demonstrado na imagem ao lado.

![](images/img_1435.jpg){.thumbnail}


## Conhecer o estado da sincronização
Para conhecer o estado da sincronização das suas contas pode a qualquer momento introduzir o endereço de e-mail (source) no campo previsto para o efeito e clica em Enviar.

No nosso caso, no momento em que consultámos o estado, a sincronização já estaria terminado.

Obtivemos então a seguinte mensagem: A sincronização das suas contas está terminada.

Se a cópia for muito grande, num primeiro tempo receberá a seguinte mensagem: A sincronização ainda não teve início. Queira aguardar.

![](images/img_1434.jpg){.thumbnail}

