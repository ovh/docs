---
title: 'Mail partilhado: Guia de configuração Windows Phone'
excerpt: Guia de configuração Windows Phone
slug: mail_partilhado_guia_de_configuracao_windows_phone
legacy_guide_number: g1346
hidden: true
---


## Parte 1: Parâmetros
Num primeiro tempo clique no ícone "Parâmetros".

No nosso exemplo já existe uma conta de e-mail partilhado é configurado em POP num Nokia Lumia 625 com Windows Phone 8.0.

Quando efetuar a adição da conta verifique que a sua ligação 3G ou Wi-Fi está ativa.

![](images/img_1501.jpg){.thumbnail}


## Parte 2: Sistema
Para continuar a adição da conta de e-mail partilhado selecione "e-mail + contas".

![](images/img_1502.jpg){.thumbnail}


## Parte 3: Adição de uma conta
Selecione agora "adicionar uma conta" para adicionar uma conta de e-mail OVH partilhado.

Tenha em atenção que poderá, a este nível, encontrar outro tipo de contas pré-configurados.

![](images/img_1503.jpg){.thumbnail}


## Parte 4: Tipo de conta
É proposto que escolha o tipo de escolha desejado.

Selecione "outra conta" para que possa adicionar uma conta do tipo POP ou IMAP.

![](images/img_1504.jpg){.thumbnail}


## Parte 5: Configuração da conta
No primeiro campo deverá introduzir o seu endereço de e-mail na íntegra.

Introduza de seguida a password definida no seu [Manager](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt) para a conta de e-mail partilhado OVH.

Após selecionar "estabelecer ligação" aparece uma mensagem de erro.

Para continuar a configuração da conta selecione "avançadas".

![](images/img_1505.jpg){.thumbnail}


## Parte 6: Configuração avançada
Para aceder aos parâmetros avançados da conta de e-mail e continuar a configuração da conta POP ou IMAP selecione "E-mail na Internet".

![](images/img_1506.jpg){.thumbnail}


## Parte 7: Parâmetros da conta de e-mail
Introduza as informações pedidas:

Nome da conta: corresponde à apresentação da conta no smartphone.

O seu nome: o nome apresentado utilizado para enviar e-mails.

Servidor de receção de correio: SSL0.OVH.NET

Tipo de conta: Selecione IMAP (pode selecionar POP e nesse caso deve introduzir as informações presentes no final deste guia).

Nome de utilizador: o seu endereço de e-mail na íntegra.

Password : a password definida no seu[Manager](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt)para a conta de e-mail partilhado OVH.

Servidor de e-mail de envio (SMTP): SSL0.OVH.NET

Deve selecionar as duas opções "o servidor de envio de corretio exige autenticação" e "Utilizar os mesmos nomes de utilizador e passwords para enviar e-mails"

Para continuar clique em "estabelecer ligação".

![](images/img_2401.jpg){.thumbnail}

- A autenticação para o email de saída é uma configuração indispensável para que a emissão de um email possa funcionar corretamente nos nossos servidores SMTP.

- Se a autenticação não estiver ativada, um ticket de incidente com o assunto Open SMTP poderá ser encetado pelos nossos serviços para o informar que a autenticação "POP before SMTP" não é suportada. Deverá, imperativamente, ativar a autenticação para o servidor de envio a fim de poder enviar emails.




## Parte 8: Finalização
A sua conta de e-mail está agora corretamente configurado e aparece na interface do seu telefone.

![](images/img_1508.jpg){.thumbnail}


## Acesso aos e-mails
Os seus e-mails estão agora acessíveis a partir da sua página inicial do seu smartphone

![](images/img_1509.jpg){.thumbnail}


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



