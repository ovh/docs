---
title: 'E-Mail Partilhado: Guia de configuração de um smarpthone com Android 5.1'
excerpt: Guia de configuração de um smartphone com Android 5.1
slug: e-mail_partilhado_guia_de_configuracao_de_um_smarpthone_com_android_51
legacy_guide_number: g1912
hidden: true
---


## Parte 1: Parâmetros do smartphone
Aceda às definições do seu smartphone.

![](images/img_3554.jpg){.thumbnail}


## Parte 2: Gestão de contas
Deve, de seguida, aceder ao separador "Contas"

![](images/img_3555.jpg){.thumbnail}


## Parte 3: Adição de conta
É necessário, de seguida, clicar em "Adicionar uma conta".

![](images/img_3556.jpg){.thumbnail}


## Parte 4: Protocolo de e-mail
Selecione o protocolo "IMAP" para continuar.

Note que é possível selecionar "POP". Para esse caso, utilize as informações de configuração que serão indicadas no final deste guia.

![](images/img_3557.jpg){.thumbnail}


## Parte 6: Introdução do endereço de email
Basta introduzir o endereço de email e clicar em "Seguine".

![](images/img_3558.jpg){.thumbnail}


## Parte 6: Palavra-passe
Preencha os parâmetros solicitados:

Deverá, de seguida, introduzir a sua palavra-passe e clicar em "Seguinte".

![](images/img_3559.jpg){.thumbnail}


## Parte 7: Configuração da conta (1)
Preencha os parâmetros solicitados:
Nome de utilizador: o seu endereço de e-mail completo
Palavra-passe: a palavra-passe que definiu no seu Espaço Cliente.
Servidor: SSL0.OVH.NET
Porta : 993
Tipo de segurança: SSL/TLS (aceitar todos os certificados)

Para utilizar outra configuração, aceda ao final deste guia para encontrar as diferentes parametrizações possíveis.

Clique em "Seguinte" para continuar a configuração.

![](images/img_3560.jpg){.thumbnail}


## Parte 8: Configuração da conta (2)
Preencha os parâmetros solicitados:
Servidor SMTP: SSL0.OVH.NET
Porta: 993
Tipo de segurança: SSL/TLS (aceitar todos os certificados)
A opção "Exigir uma ligação segura" deve estar selecionada.
Nome de utilizador: o seu endereço de e-mail na íntegra.
Password: a password definida no seu [Espaço Cliente](https://www.ovh.com/manager/)

Para utilizar uma outra configuração consulte as informações no final deste guia onde encontrará as diferentes parametrizações possíveis.

Clique em "Seguinte" para continuar a configuração.

A autenticação para o servidor de envio é um parâmetro indispensável para que o envio de emails possa ser realizado através dos nossos servidores SMTP.
Se a autenticação não estiver ativa, um ticket de incidente com a menção a "Open SMTP" poderá ser criado pelos nossos serviços a informá-lo que "POP before SMTP" não é suportado. Deverá imperiosamente ativar a autenticação do servidor de envio a fim de poder enviar emails.

![](images/img_3561.jpg){.thumbnail}


## Parte 9: Opões da conta
Irá pode escolher a frequência de sincronização e ativar as notificações aquando da receção de email

![](images/img_3562.jpg){.thumbnail}


## Parte 10: Finalização
Para finalizar a adição da conta de e-mail é-lhe pedido que defina um nome que será apresentado na conta de email no smartphone, bem com o nome que será apresentado nos e-mails enviados.

![](images/img_3563.jpg){.thumbnail}


## Configuração POP
Eis as informações a ter em conta para a configuração de uma conta de email POP.

Configuração POP com encriptação SSL ativada ou SSL desativada : 

Endereço de Email : O seu endereço de email completo.
Palavra-passe : A palavra-passe que definiu no seu espaço [Espaço Cliente](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt).
Nome de utilizador : O seu endereço de email completo.
Servidor de receção : Servidor de receção de emails : SSL0.OVH.NET
Porta do servidor de receção : A porta : 995 ou 110
Servidor de envio : O servidor deve ser : SSL0.OVH.NET
Porta do servidor de envio: Use a porta: 465 ou 587

As portas 110 e 587 correspondem à encriptação SSL desativada.
As portas 995 e 465 correspondem à encriptação SSL ativada.


- Deve obrigatoriamente ativar a [autenticação](#parametros_do_servidor_smtp) para o servidor SMTP.


|Portas|SSLativado|SSLdesativado|
|Receção|995|110|
|Envio|465|587|




## Configuração IMAP
Eis as informações a ter em conta para a configuração de uma conta de email IMAP.

Configuração IMAP com encriptação SSL ativada ou SSL desativada : 

Endereço de Email : O seu endereço de email completo.
Palavra-passe : A palavra-passe que definiu no seu espaço [Espaço Cliente](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt).
Nome de utilizador : O seu endereço de email completo.
Servidor de receção : Servidor de receção de emails : SSL0.OVH.NET
Porta do servidor de receção : A porta : 993 ou 143
Servidor de envio : O servidor deve ser : SSL0.OVH.NET
Porta do servidor de envio: Use a porta: 465 ou 587

As portas 143 e 587 correspondem à encriptação SSL desativada.
As portas 993 e 465 correspondem à encriptação SSL ativada.


- Deve obrigatoriamente ativar a [autenticação](#parametros_do_servidor_smtp) para o servidor SMTP.


|Portas|SSLativado|SSLdesativado|
|Receção|993|143|
|Envio|465|587|



