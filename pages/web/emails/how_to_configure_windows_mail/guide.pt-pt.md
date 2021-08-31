---
title: 'E-mails Partilhados: Guia de configuração para o Windows Mail'
excerpt: ''
slug: e-mails_partilhados_guia_de_configuracao_para_o_windows_mail
legacy_guide_number: g1300
hidden: true
---


## Parte 1: Adicionar a conta de e-mail
Aceda ao software Windows Mail e depois clique em criar uma nova conta.

Introduza as informações pedidas e depois clique em "Seguinte".

![](images/img_1268.jpg){.thumbnail}


## Parte 2: Parâmetros da conta de e-mail
Na janela que aparecer, deve introduzir as seguintes informações:

O meu servidor de e-mails de receção é um servidor: POP3

Servidor de receção: ns0.ovh.net
Porta: 110

Identificação da ligação: o seu endereço de e-mail na íntegra.

Informações sobre o servidor de saída: ns0.ovh.net
Porta : 587

Selecione a opção "O meu servidor requer autenticação"

É imperativo que utilize a porta 587 em SMTP e selecione esta autenticação para se ligar ao servidor de envio. Trata-se da porta autenticada para todos os ISPs. 

Pode de seguida clicar em "Seguinte" para terminar.

A sua conta está agora corretamente configurada.

![](images/img_1269.jpg){.thumbnail}

- A autenticação para o email de saída é uma configuração indispensável para que a emissão de um email possa funcionar corretamente nos nossos servidores SMTP.

- Se a autenticação não estiver ativada, um ticket de incidente com o assunto Open SMTP poderá ser encetado pelos nossos serviços para o informar que a autenticação "POP before SMTP" não é suportada. Deverá, imperativamente, ativar a autenticação para o servidor de envio a fim de poder enviar emails.




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

![](images/img_2508.jpg){.thumbnail}

