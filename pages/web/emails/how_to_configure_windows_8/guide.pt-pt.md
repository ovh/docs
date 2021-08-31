---
title: 'E-mails Partilhados: Guia de configuração em Windows 8'
excerpt: ''
slug: e-mails_partilhados_guia_de_configuracao_em_windows_8
legacy_guide_number: g1281
hidden: true
---


## Parte 1: Início
Num primeiro tempo vá à aplicação  "Email" no Windows 8 no ecrã inicial do seu computador.

No primeiro inicio deverá indicar um endereço de e-mail e a password associada, numa interface que será apresentada aqui.

Se já possui uma outra conta, veja a interface que aparecerá.

Introduza o seu cursor à direita, e selecione "Parâmetros".

![](images/img_1142.jpg){.thumbnail}


## Parte 2: Contas
Clique de seguida no ícone "Contas" para que possa adicionar a sua nova conta de e-mail partilhada OVH

![](images/img_1143.jpg){.thumbnail}


## Parte 3: Adicionar uma conta
Verificamos que já estão presentes endereços de e-mail.

Após a adição da conta de e-mail será possível, através de um clique na conta de e-mail, aceder aos parâmetros da sconta.

Clique no ícone "Adicionar uma conta" para continuar.

![](images/img_1144.jpg){.thumbnail}


## Parte 4: Tipo de conta
Deve selecionar o tipo de conta de e-mail adicionar.
Clique no ícone "Outra conta" para continuar.

![](images/img_1145.jpg){.thumbnail}


## Parte 5: Parâmetros
Nesta nova interface, introduza no respetivo campo:

"Endereço de e-mail": O endereço de e-mail partilhado OVH por inteiro.

"Password": A password definida no [manager](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt) para essa conta de e-mail.

Clique no ícone "Ligar" para continuar.

![](images/img_1146.jpg){.thumbnail}


## Parte 6: Parâmetros avançados
Nesta interface, introduza no respetivo campo:

"Endereço de e-mail": O endereço de e-mail partilhado OVH por inteiro.

"Nome do utilizador": O endereço de e-mail por inteiro.

"Password": A password definida no [manager](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt) para essa conta de e-mail.

"Servidor de entrada(IMAP)":
O endereço do servidor é então ssl0.ovh.net.
A "Porta" é a 993.

"O servidor de entrada requer SSL": deve estar selecionada.

"Servidor de saída (SMTP)":
O endereço do servidor é então ssl0.ovh.net.
A "Porta" é a 465.

"O servidor de saída requer SSL": deve estar selecionada.

"O servidor de saída requer autenticação": deve estar selecionada.

"Utilizar o mesmo nome de utilizadsor e password para enviar e receber e-mails": deve estar selecionada.

Clique no ícone "Ligar" para continuar.

![](images/img_1147.jpg){.thumbnail}

- A autenticação para o email de saída é uma configuração indispensável para que a emissão de um email possa funcionar corretamente nos nossos servidores SMTP.

- Se a autenticação não estiver ativada, um ticket de incidente com o assunto Open SMTP poderá ser encetado pelos nossos serviços para o informar que a autenticação "POP before SMTP" não é suportada. Deverá, imperativamente, ativar a autenticação para o servidor de envio a fim de poder enviar emails.




## Parte 7: Finalização
A sua conta de e-mail está corretamente configurada em IMAP.

Eis a interface de utilização dos e-mails.

Vemos à direita os parâmetros da conta de e-mail partilhada, (cf. a secção "Parte 3" deste guia).

![](images/img_1148.jpg){.thumbnail}


## Configuração POP
Eis as informações a ter em conta para a configuração de uma conta de email POP.

Configuração POP com encriptação SSL activada ou SSL desativada : 

Endereço de Email : O seu endereço de email completo.
Palavra-passe : A palavra-passe que definiu no seu espaço [Espaço Cliente](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt).
Nome de utilizador : O seu endereço de email completo.
Servidor de receção : Servidor de receção de emails : SSL0.OVH.NET
Porta do servidor de receção : A porta : 995 ou 110
Servidor de envio : O servidor deve ser : SSL0.OVH.NET
Porta do servidor de envio: Use a porta: 465 ou 587

As portas 110 e 587 correspondem à encriptação SSL desativada.
As portas 995 e 465 correspondem à encriptação SSL ativada.


- Deve obrigatoriamente ativar a  autenticação[/url] para o servidor SMTP.


|Portas|SSLactivado|SSLdesativado|
|Receção|995|110|
|Envio|465|587|




## Configuração IMAP
Eis as informações a ter em conta para a configuração de uma conta de email IMAP.

Configuração IMAP com encriptação SSL activada ou SSL desativada : 

Endereço de Email : O seu endereço de email completo.
Palavra-passe : A palavra-passe que definiu no seu espaço [Espaço Cliente](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt).
Nome de utilizador : O seu endereço de email completo.
Servidor de receção : Servidor de receção de emails : SSL0.OVH.NET
Porta do servidor de receção : A porta : 993 ou 143
Servidor de envio : O servidor deve ser : SSL0.OVH.NET
Porta do servidor de envio: Use a porta: 465 ou 587

As portas 143 e 587 correspondem à encriptação SSL desativada.
As portas 993 e 465 correspondem à encriptação SSL ativada.


- Deve obrigatoriamente ativar a  autenticação[/url] para o servidor SMTP.


|Portas|SSLactivado|SSLdesativado|
|Receção|993|143|
|Envio|465|587|




## Generalidades
Se desejar, podemos encarregar-nos da configuração da sua conta de email no seu software de email através de uma intervenção paga. A OVH pode igualmente realizar outras intervenções relacionadas com a sua conta de email.

Pode consultar este guias relativo às diferentes intervenções pagas que podem ser realizadas pela OVH:


- []({legacy}1683)


Para efetuar um pedido de intervenção paga, consulte no guia acima indicado o procedimento a ser efetuado.

![](images/img_2500.jpg){.thumbnail}

