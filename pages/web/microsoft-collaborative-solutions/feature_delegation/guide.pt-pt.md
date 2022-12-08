---
title: 'Delegar permissões numa conta de e-mail'
slug: exchange_3013_atribuir_permissoes_full_access_a_uma_conta
excerpt: 'Saiba como delegar os direitos da sua conta de e-mail noutro'
section: Funcionalidades das contas Exchange
order: 03
---

**Última atualização: 24/10/2020**

## Objetivo

Os serviços Exchange e Email Pro permitem beneficiar de endereços de e-mail profissionais, que facilitam o trabalho colaborativo graças a diferentes funcionalidades. Uma delas permite delegar direitos específicos (como o de envio ou de acesso) entre diferentes contas de e-mail.

**Saiba como delegar os direitos da sua conta  noutro agente.**

## Requisitos

- Dispor de um serviço [OVHcloud Exchange](https://www.ovhcloud.com/pt/emails/hosted-exchange/) ou [E-mail Pro](https://www.ovhcloud.com/pt/emails/email-pro/) já configurado.

- Ter acesso à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt).
- Dispor dos identificadores relativos à conta  que beneficiará dos novos direitos delegados.

## Instruções

Antes de começar, defina o(s) direito(s) que vai delegar. Relembramos que, ao criar uma delegação, atribui a uma ou várias contas  direitos adicionais na conta  em causa.

|Permissões|Descrição|
|---|---|
|Direito de envio|Permite realizar um envio "como". Não será a conta que efetua a remessa que aparecerá como expedidor, mas sim a conta para a qual dispõe do direito de envio. Não há qualquer indicação de que a mensagem tenha sido enviada através de outra pessoa.|
|Direito de enviar|Permite realizar um envio "por parte de". Não será a conta que efetua a remessa que irá aparecer como expedidor, mas sim a conta para a qual tem o direito de enviar da parte de envios. No entanto, deve ser assinalado que a mensagem foi enviada da conta que efetuou o envio.|
|Direito de acesso|Dá acesso apenas de leitura à conta a que a delegação se refere. Este acesso não permite efetuar envios, mas sim consultar o conteúdo.|

> [!warning]
>
> Não tem a possibilidade de acumular o "direito de envio" com o "direito de enviar da parte de". As outras combinações são possíveis.
> 

Quando identificar a conta que a delegação lhe diz respeito, determinar os direitos que irá delegar, bem como a(s) conta(s) que irá(ão) beneficiar destes direitos adicionais, siga para a primeira etapa.

### 1 - criar a delegação

Para efetuar esta operação, aceda à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}:

- **Exchange**: Clique em `Microsoft`{.action} na barra à esquerda e, a seguir, em `Exchange`{.action}.. 
- **Email Pro**: Clique em `Email Pro`{.action}.

A seguir, clique no nome do serviço de e-mail no qual se encontra a conta em que se encontra a criação da delegação. Por fim, clique no separador `Contas de e-mail`{.action}.

A tabela que aparecer apresenta as contas associadas ao seu serviço de e-mail. Clique nos três pontos à direita da conta para a qual deseja criar uma delegação e, a seguir, em `Gerir as delegações`{.action}.

![delegação](images/delegation-step1.png){.thumbnail}

Na nova página, selecione as permissões que deseja delegar. Deve fazê-los corresponder a uma ou várias contas beneficiárias. A seguir, clique em `Seguinte`{.action}.

![delegação](images/delegation-step2.png){.thumbnail}

Levem alguns instantes para verificar atentamente o resumo das alterações. Se tudo estiver correto, clique em `Validar`{.action}. Dentro de alguns minutos, a delegação será criada nos nossos servidores.

Uma vez configurada a delegação, *test@mypersonaldomain.ovh* poderá efetuar as ações selecionadas na conta *test2@mypersonaldomain.ovh*.

### Etapa 2: utilizar os direitos delegados

Agora que a delegação está em funções, só falta utilizá-la. Certifique-se de que possui os dados de acesso relativos à conta de e-mail que beneficia dos novos direitos delegados.

A forma de o fazer é diferente consoante os direitos que delegou e o software ou interface web que utiliza para aceder à sua conta de e-mail. Consulte este manual em função dos direitos que delegou.

- [Utilizar o seu "direito de acesso"](#access)

- [Utilizar o seu "direito de envio"](#send-as)

- [Utilizar o seu "direito de enviar da parte de"](#send-on-behalf)

> [!warning]
>
> Esta solução requer conhecimentos sobre o programa ou a interface que vai utilizar. Apresentamos a seguir algumas informações sobre como a realizar. No entanto, se encontrar dificuldades, recomendamos que recorra a um [prestador de serviços especializado](https://partner.ovhcloud.com/pt/directory/) e/ou que contacte o editor do programa ou da interface. Não poderemos proporcionar-lhe assistência técnica.
>

#### 2.1 Utilizar o seu "direito de acesso" <a name="access"></a>

- **A partir do webmail Outlook Web Application (OWA)**

Aceda ao endereço <https://www.ovh.com/pt/mail/> e introduza os identificadores da conta de e-mail que disponham do direito delegado. Depois de aceder, clique com o botão direito do rato no nome da conta no menu à esquerda e selecione `Adicionar uma pasta partilhada`{.action}.

Na janela que aparecer, indique o nome da conta para a qual beneficia do direito delegado e clique em `Adicionar`{.action}. A conta aparece no menu à esquerda, permitindo-lhe explorar o seu conteúdo.

![delegação](images/delegation-step3.png){.thumbnail}

- **A partir do software Outlook para Windows**

No Outlook 2016, clique em `Ficheiro`{.action} na barra de menu no topo do ecrã e, a seguir, em `Parâmetros da conta`{.action}. No menu pendente, clique novamente em `Parâmetros da conta`{.action}. Na nova janela, selecione a conta com direito delegado e clique em `Alterar`{.action}. 

![delegação](images/delegation-step4.png){.thumbnail}

Clique agora em `Parâmetros adicionais`{.action}. Na nova janela, aceda ao separador `Avançado`{.action} e clique em `Adicionar`{.action}. Introduza o nome da conta para a qual beneficia do direito delegado e valide a adição até ao seu termo. A conta aparece no menu à esquerda do seu software, permitindo-lhe explorar o seu conteúdo.

![delegação](images/delegation-step5.png){.thumbnail}

#### 2.2 Utilizar o seu "direito de envio" <a name="send-as"></a>

- **A partir do webmail Outlook Web Application (OWA)**

Aceda ao endereço <https://www.ovh.com/pt/mail/> e introduza os identificadores da conta de e-mail que disponham do direito delegado. Uma vez ligado, inicie a redação de uma nova mensagem pressionando o botão `+ Novo`.action}.

Na zona que aparecer, clique no botão que representa três pontos e, a seguir, em `Apresentar o campo De`{.action}. A seguir, clique no botão `De`{.action} e selecione o endereço que aparecerá como remetente (para o qual dispõe do direito delegado). Se esta não aparecer, elimine a já introduzida e inscreva-a. 

Só precisa de redigir a sua mensagem e enviá-la. 

![delegação](images/delegation-step6.png){.thumbnail}

- **A partir do software Outlook para Windows**

No Outlook 2016, inicie a redação de uma nova mensagem. Certifique-se de que o botão `De`{.action} aparece na janela de redação. Se não for o caso, aceda ao separador `Opções`{.action} e clique em `Apresentar De`{.action}.

A seguir, clique no botão `De`{.action} e selecione o endereço que aparecerá como remetente (para o qual dispõe do direito delegado). Se esta não aparecer, clique em `Outros`{.action}, introduza o endereço pretendido e valide. 

Só precisa de redigir a sua mensagem e enviá-la. 

![delegação](images/delegation-step7.png){.thumbnail}

#### 2.3 Utilizar o seu "direito de enviar da parte de" <a name="send-on-behalf"></a>

- **A partir do webmail Outlook Web Application (OWA)**

Aceda ao endereço <https://www.ovh.com/pt/mail/> e introduza os identificadores da conta de e-mail que disponham do direito delegado. Uma vez ligado, inicie a redação de uma nova mensagem pressionando o botão `+ Novo`.action}.

Na zona que aparece, clique no botão que representa três pontos e, a seguir, em `Mostrar o campo De`{.action}. A seguir, clique no botão `De`{.action} e selecione o endereço que aparecerá como remetente (para o qual dispõe do direito delegado). Se esta não aparecer, elimine a já introduzida e inscreva-a. 

Só precisa de redigir a sua mensagem e enviá-la. 

![delegação](images/delegation-step6.png){.thumbnail}

- **A partir do software Outlook para Windows**

No Outlook 2016, inicie a redação de uma nova mensagem. Certifique-se de que o botão `De`{.action} aparece na janela de redação. Se não for o caso, aceda ao separador `Opções`{.action} e clique em `Apresentar De`{.action}.

A seguir, clique no botão `De`{.action} e selecione o endereço que aparecerá como remetente (para o qual dispõe do direito delegado). Se esta não aparecer, clique em `Outros`{.action}, introduza o endereço pretendido e valide. 

Só precisa de redigir a sua mensagem e enviá-la. 

![delegação](images/delegation-step7.png){.thumbnail}

## Saiba mais

Fale com a nossa comunidade de utilizadores em <https://community.ovh.com/en/>.