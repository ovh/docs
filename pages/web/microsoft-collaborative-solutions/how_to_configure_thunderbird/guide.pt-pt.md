---
title: 'Configurar uma conta Exchange no Thunderbird para Windows'
slug: exchange_20132016_configuracao_de_thunderbird
legacy_guide_number: 1278
excerpt: 'Encontre aqui o procedimento para adicionar uma conta Exchange para Thunderbird'
section: 'Configuração do software cliente de e-mail Exchange'
order: 6
---

**Última atualização: 17/01/2020**

## Sumário

As contas Exchange podem ser configuradas em vários softwares de e-mail compatíveis. O Thunderbird não é compatível com o protocolo Exchange MAPI, mas a configuração pode ser feita em POP ou IMAP. No nosso exemplo, uma conta Hosted Exchange é configurada em IMAP.

**Saiba como configurar uma conta Exchange no software de e-mail Thunderbird no Windows.** 

> [!warning]
>
> A responsabilidade sobre a configuração e a gestão dos serviços que a OVHcloud disponibiliza recai sobre o utilizador. Assim, deverá certificar-se de que estes funcionam corretamente.
> 
> Este manual fornece as instruções necessárias para realizar as operações mais habituais. Contudo, se precisar de ajuda, recomendamos que recorra a um prestador de serviços especializado e/ou
> que entre em contato com o editor de serviço se tiver dificuldades. Não poderemos proporcionar-lhe assistência técnica. Para mais informações, aceda à secção **Quer saber mais?** deste manual.
> 

## Requisitos

- Ter um [plano Exchange](https://www.ovh.pt/emails/){.external}.
- Ter a aplicação Thunderbird instalada no seu dispositivo.
- Ter acesso às credenciais do endereço de e-mail que pretende configurar.

## Instruções

### Etapa 1: inicio
Aceda à aplicação "Thunderbird" instalada no seu computador.

Será necessário adicionar uma nova conta através do menu abaixo. Selecione `E-mail`{.action} para continuar.

![emails](images/configuration-thunderbird-exchange-step1.png){.thumbnail}


### Etapa 2: criação da conta
Preencha os campos apresentados:

- O seu nome e apelido *Introduza aqui o nome a ser apresentado.*
- Endereço de e-mail: *O seu endereço de e-mail completo.*
- Palavra-passe: *A palavra-passe definida na sua [Área de Cliente](https://www.ovh.com/manager/web/login.html){.external} para a conta Exchange.*
- Memorizar a palavra-passe: *Deve selecionar esta opção.*

Clique em `Configuração manual`{.action}para continuar as etapas de instalação.


![emails](images/configuration-thunderbird-exchange-step2.png){.thumbnail}


### Etapa 3: configuração manual

> [!primary]
>
> No nosso exemplo, utilizamos a referência servidor: ex**X**.mail.ovh.net.
> 
> Encontre as informações do seu servidor na sua [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}, na secção `Web`{.action} e depois `Microsoft`{.action}
>  na coluna da esquerda. Selecione `Exchange`{.action} e a sua plataforma. O servidor é visível na secção **Ligação** do separador `Informações gerais`{.action}
> 

Após clicar em `Configuração manual`{.action}, verifique se estes elementos estão preenchidos corretamente:

- Servidor de entrada: **IMAP** 
- O nome do host do servidor: *Indique o servidor em que está alojado o serviço Exchange.*
- A porta:  **993**
- O método de encriptação:   **SSL**
- A autenticação:  **Palavra-passe normal**
- Servidor de saída: **SMTP**
- O nome do host do servidor: *Indique o servidor em que está alojado o serviço Exchange.* 
- A porta:  **587** 
- O método de encriptação:  **STARTTLS** 
- A autenticação:  **Palavra-passe normal** 
- ID de utilizador: *O seu endereço de e-mail completo.*

> [!primary]
>
> Para as contas do tipo [Private Exchange](../exchange_primeiros_passos_com_um_servidor_private/){.external}, o servidor a inserir será o escolhido durante a encomenda.
>

Se a autenticação **Palavra-passe normal** não é funcional, também pode inserir **NTLM**.

Clique em `Terminado`{.action} para finalizar a instalação.


![emails](images/configuration-thunderbird-exchange-step3.png){.thumbnail}


### Etapa 4: finalização

A sua conta Exchange está agora corretamente configurada em IMAP, pode agora enviar e receber as suas mensagens.

A OVHcloud também disponibiliza uma aplicação web que tem > Para aceder, só precisa dos dados de acesso do seu endereço de e-mail.


## Quer saber mais?

Fale com a nossa comunidade de utilizadores: <https://community.ovh.com/en/>.