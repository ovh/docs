---
title: Interface segura
slug: interface-segura
excerpt: Utilização da interface segura em infraestruturas HDS ou PCI-DSS
section: Serviços e opções OVHcloud
order: 04
---

**Última atualização: 10/06/2022**

## Objetivo

A OVHcloud disponibiliza-lhe uma interface segura para validar as operações sensíveis (alteração de palavra-passe, adição de utilizador, etc.) realizadas por utilizadores ou terceiros no seu Private Cloud HDS ou PCI-DSS.

**Este manual explica o funcionamento da interface para validar essas operações.**

## Requisitos

- Dispor de uma infraestrutura com a opção **advanced security** (incluída nas ofertas [PCI-DSS](https://www.ovhcloud.com/pt/enterprise/products/hosted-private-cloud/safety-compliance/sddc/) e [HDS](https://www.ovhcloud.com/pt/enterprise/certification-conformity/hds/)). Este direito permite a validação.
- Ter acesso à interface segura do PCC, exemplo: https://pcc-xxx-xxx-xxx-xxx.ovh.com/secure/ (atenção para não esquecer a “/” final do endereço).

## Instruções

A validação das operações “sensíveis” a partir da interface segura só é possível para os utilizadores que disponham da autorização **token validator**. O administrador já dispõe desse privilégio, pois é necessário ativar a opção **advanced security**. 

Tenha em conta que também é possível atribuir esta autorização a outros utilizadores através da Área de Cliente OVHcloud. Se necessário, consulte a nossa [Apresentação da Área de Cliente Private Cloud OVHcloud](../manager-ovh-private-cloud/)

A partir da interface segura, pode efetuar três operações. Aceda à secção adequada deste manual, consoante a operação que pretende efetuar:

- [Validar uma operação com um token](./#validar-uma-operacao-com-um-token)
- [Alterar a palavra-passe de utilizador](./#alterar-a-palavra-passe-de-utilizador)
- [Reinicializar uma palavra-passe](./#reinicializar-uma-palavra-passe)

### Validar uma operação com um token

Quando recebe um token por SMS, este deve ser introduzido na interface segura para validar a tarefa em espera.

> [!warning]
>
> O token gerado só é válido durante 15 minutos. Sem a sua aprovação, a tarefa será anulada depois desse tempo.
>
> O token será novamente gerado (em caso de manutenção) ou deverá gerá-lo novamente (se precisar dele para realizar uma operação concreta).
>

Aqui está um exemplo de SMS enviada:

![Primeira SMS](images/SMS1.png){.thumbnail}

Esta mensagem inclui:

- o utilizador que dispõe da autorização **token validator** que recebeu a SMS. Isto pode ajudá-lo a gerar tokens por validar se introduziu o seu número de telefone em várias contas de utilizadores.
- o nome da operação que requer uma validação
- o ID da operação
- o token de validação
- uma ligação que permite validar a operação (atenção: se o seu telefone não estiver ligado a uma rede cujo [o endereço IP](../manager-ovh-private-cloud/#seguranca) não foi autorizado, a página não aparecerá).

Para validar a operação, ligue-se através da ligação apresentada na mensagem. A seguir, consulte a secção `Operation Validation`{.action}.

![Validação da operação](images/operationValidation.png){.thumbnail}

Uma janela de ligação irá abrir-se, na qual apenas um utilizador com a autorização **token validator** pode executar uma validação.

Carregue a operação introduzindo o seu ID no campo “Operation id” e clicando no botão `Load operation`{.action}. A seguir, introduza o token que acabou de receber por SMS e clique em `Confirm operation`{.action}.

![Token da operação](images/operationIdAndToken.png){.thumbnail}

Será enviada uma SMS de confirmação da operação aos utilizadores com a autorização **token validator**. Exemplo:

![Segundo SMS](images/SMS2.png){.thumbnail}

Como poderá ver, esta mensagem contém:

- o utilizador que dispõe da autorização **token validator** que recebeu a SMS
- o nome da operação e o seu ID
- o utilizador que dispõe da autorização **token validator** que confirmou a validação

### Alterar a palavra-passe de utilizador

Qualquer utilizador pode alterar a sua palavra-passe, mesmo sem a autorização **token validator**. No entanto, essa pessoa deve possuir a sua palavra-passe atual para efetuar a ação.

> [!primary]
>
> Se o utilizador já não tiver a sua palavra-passe, deve pedir a outro utilizador que disponha da autorização **token validator** para efetuar a alteração, através do procedimento de [reinicialização da palavra-passe](./#reinicializar-uma-palavra-passe).
> 

Para alterar a palavra-passe de utilizador, aceda à interface segura (`https://pcc-xxx-xxx-xxx-xxx.ovh.com/secure/`) e clique no botão `Change Password`{.action}.

![Alterar palavra-passe](images/changePassword.png){.thumbnail}

Na página que aparece, selecione o utilizador em questão e defina uma nova palavra-passe.

De seguida, será enviado um token aos utilizadores com a autorização [token validator](./#validar-uma-operacao-com-um-token) para que possam **confirmar a operação**.

![Definir a palavra-passe](images/defineNewPassword.png){.thumbnail}

### Reinicializar uma palavra-passe

Este procedimento só está disponível para os utilizadores com a autorização **token validator**.

> [!primary]
>
> Se um utilizador que não tenha a autorização **token validator** já não se lembrar da sua palavra-passe, deverá pedir a outro utilizador com esse privilégio que reinicialize a sua palavra-passe por ele.
> 

Para repor a palavra-passe de utilizador, aceda à interface segura (`https://pcc-xxx-xxx-xxx-xxx.ovh.com/secure/`) e clique no botão `Password lost`{.action}.

![Palavra-passe perdida](images/passwordLost.png){.thumbnail}

Uma mensagem indicará que, para continuar, deve poder receber SMS. Se tal for o caso, indique as informações solicitadas (incluindo o utilizador que requer uma reinicialização) e clique em `Next step`{.action}.

![Informações utilizador](images/infoUser.png){.thumbnail}

Introduza os dois tokens recebidos por SMS e e-mail, e defina a nova palavra-passe.

> [!primary]
>
> Se a reinicialização for efetuada por outro utilizador, a pessoa que executou a ação deve fornecer a nova palavra-passe. Recomendamos que [altere essa palavra-passe](./#alterar-a-palavra-passe-de-utilizador) assim que possível.
> 

![Token e palavra-passe](images/tokenAndPassword.png){.thumbnail}

## Quer saber mais?

Fale com a nossa comunidade de utilizadores em <https://community.ovh.com>.
