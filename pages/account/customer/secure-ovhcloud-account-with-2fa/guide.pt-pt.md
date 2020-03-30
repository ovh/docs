---
title: 'Proteger a sua conta OVHcloud com a dupla autenticação'
slug: proteger-a-sua-conta-com-uma-2FA
excerpt: 'Descubra como melhorar a segurança da sua conta OVHcloud ao ativar a dupla autenticação'
section: Segurança
---

**Última atualização: 15/11/2019**

## Objetivo

A OVHcloud fornece-lhe ferramentas para reforçar a segurança da sua conta e dos seus serviços.
Pode ativar a autenticação com dois fatores (2FA). É adicionada ao seu par utilizador/palavra-passe e é criada a partir de um dos seus dispositivos: um telefone, um tablet ou uma chave de segurança. 

**Descubra os diferentes métodos disponíveis e como ativá-los.**

## Requisitos

- Ter acesso à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager).
- Dispor de um telemóvel (para o método por SMS), um smartphone ou um tablet (para o método via aplicação móvel) ou uma chave de segurança Universal Second Factor (U2F).
- Ter tomado conhecimento das [recomendações sobre a gestão da sua palavra-passe de acesso à sua conta](https://docs.ovh.com/pt/customer/gerir-a-palavra-passe/).

## Instruções

Pode ativar um ou mais métodos de autenticação dupla para proteger e controlar o acesso à sua área de cliente.
Sugerimos-lhe três métodos diferentes:

- **via SMS**. Indique o seu número de telemóvel. Um código de utilização única ser-lhe-á enviado por SMS cada vez que tentar aceder à sua conta OVHcloud. A principal vantagem deste método é usar um código enviado para um dispositivo que não seja o seu computador. Em caso de intrusão, por exemplo, através de <i>malware</i>, a sua conta permanecerá segura. No entanto, deve ter cobertura de rede suficiente para receber os SMS;

- **via uma aplicação móvel OTP**. Instale uma aplicação móvel OTP num smartphone ou num tablet Android ou iOS. Em seguida, associe a aplicação à sua conta OVHcloud. Em cada tentativa de acesso, a aplicação irá gerar um código de utilização única válido por um curto espaço de tempo.
Depois de associar a aplicação à sua conta pela primeira vez, já não é necessário estar ligado à Internet no seu dispositivo para que os códigos sejam gerados;

- **via uma chave de segurança U2F**. Este método requer que ligue uma chave USB de segurança U2F no seu computador cada vez que aceder à sua conta OVHcloud. A autenticação realiza-se então automaticamente. Este método oferece um nível de segurança mais elevado, pois depende de um equipamento de segurança independente que está completamente separado do seu computador, smartphone ou tablet e que está menos exposto aos riscos de pirataria.

### Etapa 1: ativar o seu primeiro método de autenticação dupla

- [Ativar a dupla autenticação por SMS](https://docs.ovh.com/pt/customer/ativar-a-dupla-autenticacao-por-sms/).
- [Ativar dupla autenticação com aplicação móvel](https://docs.ovh.com/pt/customer/ativar-a-dupla-autenticacao-com-aplicacao-movel/).
- [Ativar a dupla autenticação com chave de segurança](https://docs.ovh.com/pt/customer/ativar-a-dupla-autenticacao-com-chave-de-seguranca/).

Uma vez adicionado o primeiro método, também pode adicionar mais um ou dois métodos para fornecer múltiplas formas de aceder à sua conta.

### Etapa 2: guardar os códigos de segurança

Quando adiciona uma autenticação dupla pela primeira vez, os códigos de segurança ser-lhe-ão comunicados. Guarde-os preciosamente. Aconselhamo-lo a guardá-los num gestor de palavras-passe.

![2FA](images/2facodes.png){.thumbnail}

Poderá eliminá-los ou gerá-los novamente na sua área de cliente:

![2FA](images/2facodesaction.png){.thumbnail}

> [!warning]
>
> Lembramos que é essencial guardar esses códigos de segurança e garantir que eles sejam válidos. Se o(s) método(s) de segurança selecionado(s) não estiver(em) disponível(eis) (furto ou perda do seu telefone ou da chave de segurança), o acesso à sua área de cliente pode ser bloqueado.
> 

### Etapa 3: aceder à área de cliente com a dupla autenticação

Quando a dupla autenticação está ativada, o ecrã de acesso mostra o método de segurança selecionado. Se deseja utilizar outro método, clique em `Experimentar outro método`{.action}.

![2FA](images/2fasmsloginedit.png){.thumbnail}

Todos os métodos que ativou aparecerão então:

![2FA](images/2faloginchoice.png){.thumbnail}

### O que devo fazer se um dos meus periféricos estiver perdido ou parar de funcionar?

Se o seu periférico (telemóvel/smartphone/chave de segurança) estiver perdido ou deixar de funcionar, recomendamos que utilize os outros métodos de autenticação dupla ativos na sua conta.

Também pode utilizar um dos códigos de segurança disponíveis. 


### Eliminar um periférico ligado à dupla autenticação

> [!warning]
>
> A eliminação de um periférico não desativa a dupla autenticação. 
> 
> Antes de apagar um periférico e para não bloquear o acesso à sua conta, certifique-se de que tem ao seu dispor pelo menos:
> 
> - um periférico funcional;
> 
> - um outro método de dupla autenticação funcional; 
> 
> - códigos de segurança válidos.
> 

Para eliminar um periférico, aceda à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}, Clique no seu nome no canto superior direito (etapa 1 na imagem abaixo), depois em `A minha Conta`{.action} (etapa 2). 

![2FA](images/2fadevicedeletion1.png){.thumbnail}

Clique então em `Segurança`{.action} (etapa 1 na imagem abaixo), depois em `...`{.action} (etapa 2) à direita do periférico que pretende eliminar e, por fim, em `Eliminar`{.action} (etapa 3).

![2FA](images/2fadevicedeletion2.png){.thumbnail}


## Quer saber mais?

Fale com a nossa comunidade de utilizadores: [https://community.ovh.com/en/](https://community.ovh.com/en/)