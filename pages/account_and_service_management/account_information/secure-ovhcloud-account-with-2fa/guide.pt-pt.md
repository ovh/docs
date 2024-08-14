---
title: 'Proteger a sua conta OVHcloud com a dupla autenticação'
excerpt: 'Descubra como melhorar a segurança da sua conta OVHcloud ao ativar a dupla autenticação (2FA)'
updated: 2024-08-09
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

## Objetivo

A OVHcloud fornece-lhe ferramentas para reforçar a segurança da sua conta e dos seus serviços.
Pode ativar a autenticação com dois fatores (2FA). É adicionada ao seu par utilizador/palavra-passe e é criada a partir de um dos seus dispositivos: um telefone, um tablet ou uma chave de segurança. 

Descubra os diferentes métodos de autenticação dupla disponíveis e como ativá-los.**

Este manual permitir-lhe-á:

- [Compreender os diferentes métodos de autenticação dupla](#instructions)
- [Ativar o primeiro método de autenticação dupla](#enabling-2fa)
- [Saiba como se conectar com uma dupla autenticação](#login-2fa)
- [Para saber como proceder se o seu smartphone/tablet/chave estiver perdido/roubado/danificado](#lost-device)
- [Saiba como desativar completamente a dupla autenticação](#disable-2fa)

## Requisitos

- Ter acesso à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt).
- Dispor de um telemóvel (para o método por SMS), um smartphone ou um tablet (para o método via aplicação móvel) ou uma chave de segurança Universal Second Factor (U2F).
- Ter tomado conhecimento das [recomendações sobre a gestão da sua palavra-passe de acesso à sua conta](/pages/account_and_service_management/account_information/manage-ovh-password).

## Instruções <a name="instructions"></a>

Pode ativar um ou mais métodos de autenticação dupla para proteger e controlar o acesso à sua área de cliente.

Existem quatro métodos diferentes (clique nos separadores abaixo para ver a apresentação):

> [!tabs]
> SMS
>>![2FA sms](images/sms.svg)<br>
>> Para este método, deve introduzir o seu número de telemóvel.
>> Um código de utilização única é-lhe enviado por SMS cada vez que tenta aceder à sua conta OVHcloud.
>>
>> A principal vantagem deste método é usar um código enviado para um dispositivo diferente do seu computador. Em caso de intrusão, por exemplo, através de malware.
>> Deverá dispor de uma cobertura de rede suficiente para receber os SMS.
>>
> Aplicação móvel
>>![2FA OTP](images/app.svg)<br>
>> Para este método, deve instalar uma aplicação **OTP** no seu smartphone ou tablet Android ou iOS.
>> Existem muitas aplicações OTP (nenhuma aplicação OTP foi desenvolvida pela OVHcloud) que devem ser descarregadas da Google Play Store para Android ou da Apple Store para iOS. As duas aplicações seguintes são gratuitas:
>>
>> - FreeOTP para Android
>> - OTP Auth para iOS
>>
>> Depois de associar a aplicação à sua conta OVHcloud, a aplicação gera um código de utilização única válido por um curto período de tempo (alguns segundos) a cada tentativa de ligação.
>>
>> > [!success]
>> > **Vantagens deste método**:
>> > 
>> > - Uma vez efetuada a primeira associação da aplicação à sua conta, já não é necessário estar ligado à Internet no seu smartphone/tablet para que os códigos sejam gerados.
>> > - Pode utilizar uma única aplicação OTP para o conjunto dos seus serviços ou sites que requeiram uma dupla autenticação.
>>
> Chave de segurança
>>![2FA U2F](images/key.svg)<br>
>> Para este método, deve dispor de uma chave física **U2F** que liga a uma porta USB do seu computador a cada ligação à sua conta OVHcloud. A autenticação realiza-se então automaticamente.
>>
>> Este método oferece um nível de segurança mais elevado, pois depende de um equipamento de segurança independente que está totalmente separado do seu computador, smartphone ou tablet e que está menos exposto aos riscos de pirataria.
> Códigos de segurança
>>![2FA codes](images/code.svg)<br>
>> Quando configurar a autenticação dupla (por **SMS**, **Aplicação móvel** ou **Chave de segurança**) pela primeira vez, 10 códigos de segurança **utilização única** serão apresentados na Área de Cliente.
>>
>> Este método de autenticação dupla complementa um método já ativado (por **SMS**, **Aplicação móvel** ou **Chave de segurança**), pelo que não pode ser ativado apenas como complemento.
>>
>> A cada tentativa de ligação, poderá introduzir um dos 10 códigos de utilização única.
>> É essencial dispor de pelo menos 1 código de segurança restante. Lembre-se de os regenerar através da Área de Cliente se os tiver utilizado a todos ou se os tiver perdido.

### Etapa 1 - Ativar o seu primeiro método de autenticação dupla <a name="enabling-2fa"></a>

Aceda à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}. Clique no seu nome no canto superior direito (1) e nas iniciais (2). Em seguida, clique em `Segurança`{.action} (3) e, por fim, em `Ativar a dupla autenticação`{.action} (4).

![Enabling 2FA](images/2024-001-enabling-2fa.png){.thumbnail}

**Clique no separador correspondente ao método da sua escolha:**

> [!tabs]
> SMS
>> Escolha o método por SMS e clique em `Seguinte`{.action}.
>>
>>![2FA sms](images/2024-002-sms-choice.png){.thumbnail width="400"}<br>
>> Insira o seu número de telemóvel no formato internacional (por exemplo, +33612345678 para um telemóvel em França) e valide.
>> Um código de validação é então enviado por SMS para o número que indicou.
>>
>>![2FA sms](images/2fasms3edit.png){.thumbnail width="400"}<br>
>> Introduza este código no campo fornecido para o efeito.<br>
>> Também pode adicionar uma descrição para o número de telefone indicado.
>>
>>![2FA sms](images/2024-002-sms-code.png){.thumbnail width="400"}<br>
>> A dupla autenticação está agora ativada. Também pode adicionar outros números de telefone.
> Aplicação móvel
>> Escolha o método por aplicação móvel e clique em `Seguinte`{.action}.
>>
>>![2FA mobileapp](images/2024-003-otp-choice.png){.thumbnail width="400"}<br>
>> Um código QR é gerado, leia-o através da sua aplicação OTP. Se a sua aplicação OTP não oferecer esta opção, clique em `Mostrar o código segreto`{.action} para ver um código a introduzir na aplicação OTP.<br>
>> A sua aplicação gera um código de utilização única.
>> Introduza então este código no campo previsto para esse efeito (à direita do código QR). Também pode adicionar uma descrição para este método de autenticação.
>>
>>![2FA mobileapp](images/2024-003-otp-code.png){.thumbnail width="400"}<br>
>> A dupla autenticação está agora ativada.
> Chave de segurança
>> Escolha o método com chave de segurança e clique em `Seguinte`{.action}.
>>
>>![2FA securitykey](images/2024-004-u2f-choice.png){.thumbnail width="400"}<br>
>> Ligue a sua chave de segurança quando isso lhe for pedido. Se estiver equipada com um botão, prima o botão.
>>
>>![2FA securitykey](images/2024-004-u2f-insert.png){.thumbnail width="400"}
>>
>> > [!warning]
>> > Abre-se uma janela do tipo pop-up para lhe pedir a validação da chave. Se não visualizar esta janela, certifique-se de que o seu browser não está a bloquear pop-ups.
>>
>> Quando a chave for reconhecida, pode também adicionar uma descrição.
>> A dupla autenticação está agora ativada.

Uma vez adicionado o primeiro método, também pode **adicionar um ou dois outros métodos** para que possa aceder à sua conta de forma múltipla.

### Etapa 2 - Guardar os códigos de segurança <a name="codes"></a>

Quando adiciona uma autenticação dupla pela primeira vez, 10 códigos de segurança **de utilização única** são-lhe apresentados na Área de Cliente.

**Guarde-os preciosamente**. Aconselhamos que os guarde num gestor de palavras-passe, tal como [KeePass](https://keepass.info/){.external} ou [Bitwarden](https://bitwarden.com/) (as duas aplicações são gratuitas).

![2FA](images/2024-005-backup-codes.png){.thumbnail width="544"}

Pode regenerar ou eliminar os códigos de segurança a partir da Área de Cliente:

![2FA](images/emergency-codes.png){.thumbnail}

> [!warning]
>
> Recomenda-se vivamente que guarde estes códigos de segurança** e verifique se estes são válidos.
> Sem código de segurança na sua posse e em caso de roubo ou perda do seu telefone/smartphone/tablet ou da sua chave de segurança, o acesso à sua Área de Cliente e aos seus serviços poderá ser bloqueado.
>

### Etapa 3 - Aceder à Área de Cliente OVHcloud com a dupla autenticação <a name="login-2fa"></a>

Aceda à [página de autenticação da Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external} e introduza o seu identificador (ou o seu endereço de e-mail principal) e a palavra-passe.

O ecrã de acesso mostra o último método de autenticação dupla utilizado ou introduzido. Se desejar utilizar outro método, clique no botão `Experimentar outro método`{.action}.

![2FA](images/2024-007-log-in-01.png){.thumbnail width="400"}

Todos os métodos que ativou aparecerão então, incluindo o método dos códigos de segurança.

![2FA](images/2024-007-log-in-02.png){.thumbnail width="400"}

Ao escolher este último método, basta-lhe introduzir um dos seus códigos de segurança.

![2FA](images/2024-007-log-in-03.png){.thumbnail width="400"}

### O que devo fazer se um dos meus periféricos estiver perdido/roubado ou parar de funcionar? <a name="lost-device"></a>

Se o seu periférico (telemóvel/smartphone/chave de segurança) estiver perdido, roubado ou deixar de funcionar, pode:

- usar [os códigos de segurança](#codes) ativos que você salvou;
- utilizar outro periférico de dupla autenticação, se tiver ativado vários;
- [desativar a dupla autenticação](#disable-2fa).

> [!warning]
>
> Se um dos seus periféricos foi perdido ou roubado, isso pode comprometer a segurança da sua conta OVHcloud.
> Quando tiver novamente acesso à Área de Cliente, deve **eliminar este dispositivo da lista dos dispositivos utilizados para dupla autenticação**.
>
> Consulte o seguinte capítulo deste manual para obter mais informações sobre como remover um dispositivo.
>

#### Eliminar um periférico <a name="delete-device"></a>

> [!warning]
>
> Antes de apagar um periférico e para não bloquear o acesso à sua conta, certifique-se de que tem ao seu dispor pelo menos:
>
> - outro periférico funcional;
> - um outro método de autenticação dupla funcional;
> - códigos de segurança válidos.
>

Para eliminar um periférico, aceda à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}. Clique no seu nome no canto superior direito e depois nas iniciais.

A seguir, clique em `Segurança`{.action}, depois nos `...`{.action} à direita do seu periférico a eliminar e, por fim, em `Eliminar`{.action}.

![2FA](images/2024-006-delete-device.png){.thumbnail}

Um último código de validação ser-lhe-á enviado para o dispositivo que pretende eliminar. Introduza este código na janela que se abrir e clique em `Validar`{.action} para terminar a eliminação.

Se já não tiver acesso ao dispositivo que pretende eliminar, não poderá eliminá-lo da Área de Cliente OVHcloud.
Neste caso, **contacte diretamente** as nossas equipas de suporte [criando um ticket a partir do Centro de Ajuda](https://help.ovhcloud.com/csm?id=csm_get_help) ou seguindo o processo descrito [abaixo](#2FA-deletion).

> [!warning]
>
> A eliminação de um único periférico não desativa a dupla autenticação na sua conta OVHcloud.

### Desativar completamente a dupla autenticação <a name="disable-2fa"></a>

#### Se tem acesso à Área de Cliente OVHcloud

Para desativar completamente a dupla autenticação na sua conta OVHcloud, é necessário eliminar **todos** os periféricos indicados **e também desativar os códigos de segurança**.

Para eliminar cada periférico, consulte a [parte dedicada deste guia](#delete-device).

Depois de eliminar todos os periféricos, desative os códigos de segurança clicando no botão `Desativar os códigos 2FA`{.action}.

![2FA códigos](images/disabling-codes.png){.thumbnail}

#### Se já não tem acesso à Área de Cliente OVHcloud <a name="2FA-deletion"></a>

Se já não dispõe de dispositivos válidos nem de códigos de segurança válidos, deve pedir a desativação da dupla autenticação ao fornecer documentos de justificação de identidade correspondentes à sua conta OVHcloud.

Em primeiro lugar, aceda a [a página de autenticação na Área de Cliente OVHcloud](/links/manager).

Introduza o seu identificador OVHcloud e a sua palavra-passe para aceder à etapa da dupla autenticação. Clique no botão `Perdi acesso ao meu telemóvel, à chave de segurança U2F ou aos meus códigos de segurança{.action}.<br>
Se não vir este botão, clique no botão `Experimentar outro método`{.action} e, a seguir, em `Perdi acesso ao meu telemóvel, à chave de segurança U2F ou aos meus códigos de segurança`{.action}.

A interface seguinte permite-lhe descarregar e enviar às nossas equipas os documentos necessários para desativar a dupla autenticação na sua conta.

> [!warning]
>
> - Atenção, certifique-se de que todos os seus documentos estão corretos e legíveis antes do envio.
> - **Formatos aceites**: jpg, jpeg, pdf, png. O tamanho máximo do ficheiro para cada documento é de 10 MB.
> - No caso de documentos inválidos, este procedimento será anulado e deverá efetuar um novo.

Num prazo de 72 horas, receberá a confirmação da desativação da dupla autenticação por e-mail.

/// detalhes | Lista dos documentos comprovativos

|Tipo de conta OVHcloud|Documentos a apresentar|
|---|---|
|Particular|- Documento de identidade (cartão de cidadão, carta de condução, passaporte) do titular da conta OVHcloud<br><br>- Comprovativo de morada recente<br>**Se, após uma mudança de residência, não tiver atualizado o seu endereço na Área de Cliente OVHcloud, deverá fornecer:**<br>- Um comprovativo de morada no antigo endereço<br>- Um comprovativo de morada recente no novo endereço<br>Se vive agora num terceiro, deverá fornecer:<br>- Um comprovativo de morada recente em nome da pessoa que o aloja<br>- Certificado de alojamento assinado pela pessoa que o aloja|
|Empresa|- Documento de identidade (cartão de cidadão, carta de condução, passaporte) do gerente da empresa<br><br>- Documento comprovativo do registo da empresa ou o código da certidão permanente<br><br>- Comprovativo de morada em nome da empresa|

///

Quando os seus documentos estiverem reunidos, contacte o suporte da OVHcloud em +351 213 155 642.

> [!warning]
>
> Os documentos comprovativos devem ser-nos enviados a partir de um endereço de e-mail registado na sua conta OVHcloud.

> [!success]
>
> Após verificação dos seus documentos, um consultor poderá desativar manualmente a dupla autenticação na sua conta OVHcloud.

## Quer saber mais?

Para serviços especializados (referenciamento, desenvolvimento, etc), contacte os [parceiros OVHcloud](https://partner.ovhcloud.com/pt/directory/).

Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](https://www.ovhcloud.com/pt/support-levels/).

Fale com nossa comunidade de utilizadores: <https://community.ovh.com/en/>. 