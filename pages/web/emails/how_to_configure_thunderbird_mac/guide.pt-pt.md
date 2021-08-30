---
title: 'Email Partilhado: guia de configuração para Thunderbird'
excerpt: ''
slug: email_partilhado_guia_de_configuracao_para_thunderbird
legacy_guide_number: Configuração num computador
order: 05
---


## Parte 1: Início
Num primeiro tempo aceda à aplicação "Thunderbird" instalada no seu computador.

Eis a interface que irá aparecer por defeito caso ainda não possua nenhuma conta de e-mail configurada. Caso contrário, no menu poderá adicionar uma nova conta.

Selecione "Ignorar esta etapa e utilizar a minha conta existente" para continuar a instalação da conta.

![](images/img_2856.jpg){.thumbnail}


## Parte 2: Criação da conta
"O seu nome e apelido": introduza o nome desejado.

"Endereço de e-mail": o seu endereço de e-mail completo.

Password: A password que definiu no [manager](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt) para a conta de e-mail partilhada.

"Guardar a password": deve selecionar esta opção.

Clique em "Continuar" para finalizar as etapas da instalação.

![](images/img_2857.jpg){.thumbnail}


## Parte 3: Criação da conta (continuação)
O Thunderbird recupera os parâmetros da conta de e-mail e propõe-lhe duas possíveis configurações: IMAP ou POP3.

No nosso exemplo vamos configurar a conta como IMAP. É porém possível que a configure como POP, encontrando no final deste guias as informações necessárias para que configure a conta como POP3.

Deve ter em conta que o Thunderbird propõe uma configuração manual.

Clique em "Configuração Manual" para finalizar as etapas da instalação.

![](images/img_2858.jpg){.thumbnail}


## Parte 4: Configuração dos parâmetros do servidor
Verifique que estes parâmetros são corretamente introduzidos:
Na linha de servidor de receção:
Servidor de receção: IMAP
Nome do servidor: SSL0.OVH.NET
Porta: 993
SSL: SSL/TLS
Autenticação: Palavra-passe normal

![](images/img_2859.jpg){.thumbnail}
Na linha do servidor de envio:
Servidor de envio: IMAP
Nome do servidor: SSL0.OVH.NET
Porta: 465
SSL: SSL/TLS
Autenticação: Palavra-passe normal
Identificador para envio & receção:  O seu endereço de email completo
Clique em "Concluído" para finalizar a instalação


## Parte 5: Parâmetros do servidor de envio & receção (SMTP)
A conta foi agora adicionada e deverá verificar as os parâmetros do servidor.

Clique em "Servidor de envio (SMTP)" para verificar as informações introduzidas para o servidor de envio.

![](images/img_2860.jpg){.thumbnail}


## Parte 5: Parâmetros do servidor de envio & receção (SMTP) .. continuação
Eis os dados a inserir:
Nome do servidor: SSL0.OVH.NET
Porta: 465
Segurança da ligação: SSL/TLS
Autenticação: Palavra-passe normal
Identificador para envio & receção:  O seu endereço de email completo

Clique em "OK" para validar as definições SMTP.

![](images/img_2861.jpg){.thumbnail}


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



