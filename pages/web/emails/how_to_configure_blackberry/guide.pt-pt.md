---
title: 'E-mail Partilhado: Guia de configuração Blacklberry'
excerpt: 'E-mail Partilhado: Guia de configuração Blacklberry'
slug: e-mail_partilhado_guia_de_configuracao_blacklberry
legacy_guide_number: g1381
section: Configuração no smartphone
order: 03
---


## Parte 1: Parâmetros
Num primeiro tempo clique no ícone "Parâmetros".

No nosso exemplo, uma conta de e-mail partilhado está configurado em IMAP num BlackBerry Z10 com o OS na versão 10.20.429.

Aquando da adição da conta verifique que a sua ligação 3G ou Wifi está ativa.

![](images/img_1747.jpg){.thumbnail}


## Parte 2: Parâmetros sistema
Para que possa continuar a adição da conta de e-mail partilhado selecione "Contas".

![](images/img_1748.jpg){.thumbnail}


## Parte 3: Adicionar uma conta
Selecione de seguida "Adicionar uma conta" para que possa adicionar uma conta de e-mail partilhado OVH.

Tenha em conta que poderá já ter outras contas pré-configuradas préconfigurés.

![](images/img_1749.jpg){.thumbnail}


## Parte 4: Introduza a conta de e-mail e a respetiva password
Introduza o seu endereço de e-mail na íntegra sem erros

Para continuar a parametrização clique em "Seguinte".

![](images/img_1750.jpg){.thumbnail}
Introduza a password definida no seu [Manager](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt) para a conta partilhada OVH.

Clique em "Seguinte" para validar a password.

![](images/img_1751.jpg){.thumbnail}
A aplicação vai procurar as informações de ligação. Basta aguardar para que possa aceder à etapa a seguir.

![](images/img_1752.jpg){.thumbnail}


## Parte 5: Parâmetros da conta de e-mail
Introduza as informações pedidas:

Descrição: corresponde ao nome de apresentação da conta no telefone.

Nome de apresentação: o nome apresentado que será utilizado para enviar mensagens.

Nome do utilizador: o seu endereço de e-mail na íntegra.

Endereço eletrónico: o seu endereço de e-mail na íntegra.

Password: a password definida no seu[Manager](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt)para a conta de e-mail partilhado OVH.

Endereço do servidor: SSL0.OVH.NET

Porta: 993

Encriptação: SSL

Prefixo do caminho IMAP: deixe o campo vazio

Nome do utilizador SMTP: o seu endereço de e-mail na íntegra.

Password SMTP: a password definida no seu  [url="https://www.ovh.com/manager/web/login/"]Manager/url]  para a conta de e-mail partilhado OVH.

Endereço do servidor SMTP: SSL0.OVH.NET

Porta SMTP: 465

Encriptação SMTP: SSL

Utilizar a função Push se tomada a cargo: a desativar, uma vez que o Push não está disponível nas ofertas de e-mail partilhadas.

Intervalo de sincronização: permite-lhe definir os tempos entre duas sincronizações dos e-mails pelo smartphone.

Montante de recuperação inicial: trata-se do número de mensagens que serão sincronizados inicialmente pelo seu smartphone.

Para validar as informações clique em "Terminar".

![](images/img_1753.jpg){.thumbnail}
A aplicação vai registar e verificar os seus parâmetros. Basta aguardar para aceder à etapa seguinte.

![](images/img_1754.jpg){.thumbnail}

- A autenticação para o email de saída é uma configuração indispensável para que a emissão de um email possa funcionar corretamente nos nossos servidores SMTP.

- Se a autenticação não estiver ativada, um ticket de incidente com o assunto Open SMTP poderá ser encetado pelos nossos serviços para o informar que a autenticação "POP before SMTP" não é suportada. Deverá, imperativamente, ativar a autenticação para o servidor de envio a fim de poder enviar emails.




## Finalização
A sua conta está agora configurada corretamente no seu smartphone!

Para a editar, basta selecionar este menu (cf ecrã ao lado).

![](images/img_1755.jpg){.thumbnail}

## Apresentação dos e-mails
Deve aceder a "Hub" para visualizar os seus e-mails.

![](images/img_1756.jpg){.thumbnail}


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



