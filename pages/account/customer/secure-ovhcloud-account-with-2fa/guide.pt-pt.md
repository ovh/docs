---
title: 'Proteger a sua conta OVHcloud com a dupla autenticação'
slug: proteger-a-sua-conta-com-uma-2FA
excerpt: 'Descubra como melhorar a segurança da sua conta OVHcloud ao ativar a dupla autenticação'
section: Segurança
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

**Última atualização: 21/07/2022**

## Objetivo

A OVHcloud fornece-lhe ferramentas para reforçar a segurança da sua conta e dos seus serviços.
Pode ativar a autenticação com dois fatores (2FA). É adicionada ao seu par utilizador/palavra-passe e é criada a partir de um dos seus dispositivos: um telefone, um tablet ou uma chave de segurança. 

**Descubra os diferentes métodos disponíveis e como ativá-los.**

## Requisitos

- Ter acesso à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt).
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

### Eliminar um periférico ligado à dupla autenticação <a name="delete-device"></a>

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

Para eliminar um periférico, aceda à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}, Clique no seu nome no canto superior direito (etapa 1 na imagem abaixo), depois em suas iniciais (etapa 2). 

![2FA](images/hub2FAb.png){.thumbnail}

Clique então em `Segurança`{.action} (etapa 1 na imagem abaixo), depois em `...`{.action} (etapa 2) à direita do periférico que pretende eliminar e, por fim, em `Eliminar`{.action} (etapa 3).

![2FA](images/hub2FAc.png){.thumbnail}

### Desativar completamente a dupla autenticação <a name="disable-2fa"></a>

#### Se tem acesso à Área de Cliente OVHcloud

Para desativar completamente a dupla autenticação na sua conta OVHcloud, é necessário eliminar **todos** os periféricos indicados **e também desativar os códigos de segurança**.

Para eliminar cada periférico, consulte a [parte dedicada deste guia](#delete-device).

Depois de eliminar todos os periféricos, desative os códigos de segurança clicando no botão `Desativar os códigos 2FA`{.action}.

![2FA códigos](images/disabling-codes.png){.thumbnail}

#### Se já não tem acesso à Área de Cliente OVHcloud

Se já não dispõe de periféricos válidos e se já não dispõe de códigos de segurança válidos, pode solicitar a desativação da dupla autenticação contactando as nossas equipas de suporte.

Antes de nos contactar, deverá apresentar os seguintes elementos comprovativos:

|Tipo de conta OVHcloud|Documentos a apresentar|
|---|---|
|Particular|- Documento de identidade (cartão de cidadão, carta de condução, passaporte) do titular da conta OVHcloud<br><br>- Comprovativo de morada recente<br>**Se, após uma mudança de residência, não tiver atualizado o seu endereço na Área de Cliente OVHcloud, deverá fornecer:**<br>- Um comprovativo de morada no antigo endereço<br>- Um comprovativo de morada recente no novo endereço<br>Se vive agora num terceiro, deverá fornecer:<br>- Um comprovativo de morada recente em nome da pessoa que o aloja<br>- Certificado de alojamento assinado pela pessoa que o aloja|
|Empresa|- Documento de identidade (cartão de cidadão, carta de condução, passaporte) do gerente da empresa<br><br>- Documento comprovativo do registo da empresa ou o código da certidão permanente<br><br>- Comprovativo de morada em nome da empresa|

Quando os seus documentos estiverem reunidos, contacte o suporte da OVHcloud em +351 213 155 642. 

> [!warning]
> Os documentos comprovativos devem ser-nos enviados a partir de um endereço de e-mail registado na sua conta OVHcloud.

Após verificação dos seus documentos, um consultor poderá desativar manualmente a dupla autenticação na sua conta OVHcloud.

## Quer saber mais?

Fale com a nossa comunidade de utilizadores: [https://community.ovh.com/en/](https://community.ovh.com/en/)