---
title: 'Configurar a dupla autenticação numa conta Exchange'
slug: configurar-2fa-exchange
excerpt: 'Descubra como configurar a dupla autenticação numa conta Exchange'
section: 'Funcionalidades das contas Exchange'
order: 3
---

**Última atualização: 11/03/2020**

## Objetivo

Se deseja aumentar a segurança da sua conta Exchange, pode ativar a dupla autenticação (2FA). Isto permite-lhe gerar um código que poderá introduzir em cada ligação, como complemento da sua palavra-passe. Este código é gerado por uma aplicação *one-time password* (OTP) que deverá instalar no seu smartphone ou tablet.

**Descubra como ativar a autenticação com dois fatores na sua conta Exchange.**

## Requisitos

- Ter o serviço [Exchange OVHcloud](https://www.ovh.pt/mail/){.external}.
- Ter acesso à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager).
- Ter instalado uma aplicação OTP num smartphone ou tablet Android ou iOS.

> [!primary]
>**As aplicações móveis OTP**
>
> Existem inúmeras aplicações OTP. As duas que se seguem são gratuitas:
> 
> - Para Android: Free OTP;
> - Para iOS: OTP Auth.
> 

## Instruções

### Primeira configuração

#### Etapa 1: ativar a dupla autenticação na plataforma 

Ao efetuar a primeira configuração, é necessário ativar a dupla autenticação na plataforma antes de a ativar numa conta.

Aceda à sua [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager) e dirija-se à secção "Web". Clique em `Microsoft`{.action} na barra de serviços à esquerda, e depois em `Exchange`{.action}. Por fim, selecione o serviço Exchange em questão.

Clique no separador `Segurança`{.action} da sua plataforma. Sob a menção "Dupla autenticação", clique em `Ativar`{.action}. Para terminar, clique em `Guardar as modificações`{.action} na parte inferior da página.

![2fa-exchange](images/2fa-exchange.gif){.thumbnail}

#### Etapa 2: ativar a dupla autenticação numa conta

Após ativar a dupla autenticação na sua plataforma, poderá fazê-lo numa das suas contas.

A partir da sua plataforma Exchange, dirija-se ao separador `Contas de e-mail`{.action}. Clique em `...`{.action} à direita da conta na qual deseja ativar a dupla autenticação e depois em `Ativar a dupla autenticação`{.action}.

![2fa-exchange](images/2fa-exchange-01.png){.thumbnail}

Para associar a sua conta à sua aplicação OTP, ligue-se ao [webmail](https://mail.ovh.net).

Ao estabelecer a primeira ligação aparecerá um código QR. Para se conectar, utilize a sua aplicação OTP para fazer a leitura e, de seguida, introduza o código gerado pela mesma.

![2fa-exchange](images/2fa-exchange-02.png){.thumbnail}

Nas ligações seguintes apenas lhe será solicitado o código gerado pela sua aplicação.

### Desativar a dupla autenticação

A dupla autenticação da sua conta pode ser desativada de três formas.

Aceda à sua [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager) e dirija-se à secção "Web". Clique em `Microsoft`{.action} na barra de serviços à esquerda, e depois em `Exchange`{.action}. Por fim, selecione o serviço Exchange em questão.

No separador `Contas de e-mail`{.action} da sua plataforma Exchange, clique em `...`{.action} à direita da conta na qual a dupla autenticação se encontra já ativa.

![2fa-exchange](images/2fa-exchange-04.png){.thumbnail}

Selecione a opção correspondente às suas necessidades na seguinte tabela:

| N.°                 	| Função    | Descrição                                                                                                        	
|----------------------------------	|------------------|------------------|
| 1. | "Desativar a dupla autenticação" | Permite a suspensão da dupla autenticação durante um período definido em horas. Uma vez ultrapassado este período, a dupla autenticação será reativada. <br> *Por exemplo: um utilizador esqueceu-se do seu smartphone e não consegue autenticar-se com a aplicação OTP.*   |
| 2. | "Reinicializar a dupla autenticação" | Permite reinicializar o código QR solicitado no momento da sua primeira ligação ao webmail.<br> *Por exemplo: um utilizador trocou de smartphone e precisa de reconfigurar a sua aplicação OTP.* |
| 3. | "Eliminar a dupla autenticação" | Elimina totalmente a dupla autenticação na conta. | 

## Quer saber mais?

Fale com a nossa comunidade de utilizadores: <https://community.ovh.com/en/>.