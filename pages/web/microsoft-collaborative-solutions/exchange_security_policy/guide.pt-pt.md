---
title: 'Gerir a política de segurança de um serviço Exchange'
slug: gerir-politica-de-seguranca-palavra-passe
excerpt: 'Saiba como gerir a política de segurança do seu serviço Exchange'
section: 'Introdução ao Exchange'
order: 6
---

**Última atualização: 24/04/2019**

## Sumário

O serviço Exchange permite beneficiar de endereços de e-mail profissionais que facilitam o trabalho colaborativo, graças a diferentes funcionalidades. Para preservar este ambiente, tem a possibilidade de gerir parâmetros gerais relativamente à segurança das suas contas Exchange.

**Saiba como gerir a política de segurança do seu serviço Exchange.**

## Requisitos

- Dispor de um serviço [Exchange](https://www.ovh.pt/emails/){.external}.
- Ter acesso à [Área de Cliente OVH](https://www.ovh.com/auth/?action=gotomanager), na secção `Web`{.action}.

## Instruções

A gestão da política de segurança do seu serviço Exchange pode interagir com quatro aspetos:

- reforçar a segurança das contas Exchange quando os utilizadores tentam conectar-se;
- tornar a segurança das palavras-passe das contas do serviço Exchange mais complexas;
- reforçar a verificação das mensagens de entrada nos nossos servidores e com destino aos seus endereços Exchange;
- definir a forma como as mensagens “indesejadas” são apresentadas nos seus endereços Exchange.

Para aceder à política do seu serviço Exchange, aceda à [Área de Cliente OVH](https://www.ovh.com/auth/?action=gotomanager) e certifique-se de que está na secção “Web”. Na coluna à esquerda, clique em `Microsoft`{.action} e em `Exchange`{.action}. Por fim, selecione o serviço Exchange em questão.

Na página que aparece, clique no separador `Mais +`{.action} e selecione `Gerir as regras de segurança`{.action}.

![exchangesecurity](images/exchange-security-step1.png){.external}

Continue a ler este manual na secção correspondente à ação que pretende realizar:

|Ação|Descrição| 
|---|---| 
|[Reforçar a segurança do acesso](./#reforcar-a-seguranca-do-acesso){.external}|Indique se as contas devem ser bloqueadas após um certo número de tentativas de ligações sem efeito.|
|[Tornar a segurança das palavras-passe mais complexa](./#tornar-a-seguranca-das-palavras-passe-mais-complexa){.external}|Defina uma exigência de complexidade, assim como regras para a alteração da palavra-passe.|
|[Reforçar a verificação das mensagens de entrada](./#reforcar-a-verificacao-das-mensagens-de-entrada){.external}|Indique se os nossos servidores devem verificar se as mensagens recebidas provêm de uma fonte legítima de envio (verificações DKIM e/ou SPF).|
|[Definir a apresentação das mensagens indesejadas](./#definir-a-apresentacao-das-mensagens-indesejadas){.external}|Precise se as mensagens indesejadas devem incluir uma identificação que as permita identificar ou mover automaticamente para a reciclagem.|

### Reforçar a segurança do acesso

Isto permite-lhe indicar se as contas Exchange devem ser bloqueadas após um certo número de tentativas de ligações sem efeito.

Para isso, complete os campos seguindo as indicações da tabela:

|Informação|Descrição| 
|---|---| 
|Limite de bloqueio|Indique o número de tentativas de ligações sem efeito que deve ser atingido para que a conta seja bloqueada. Indique “0” para não aplicar nenhum limite de bloqueio.|
|Atraso de reinicialização|Este campo aparece apenas se um limite de bloqueio tiver sido definido. Precise o prazo necessário para que o contador de tentativas de ligações sem efeito seja reposto a zero.|
|Duração do bloqueio|Este campo aparece apenas se um limite de bloqueio tiver sido definido. Especifique o tempo durante o qual a conta Exchange ficará bloqueada se o limite de bloqueio for atingido.|

Depois de preencher estas informações, poderá validar estas alterações clicando em `Seguinte`{.action} e, a seguir, em `Validar`{.action}. Também pode continuar para a parte seguinte.

### Tornar a segurança das palavras-passe mais complexa

Isto permite-lhe definir uma exigência de complexidade, assim como regras para a alteração da palavra-passe.

Para isso, complete os campos seguindo as indicações da tabela:

|Informação|Descrição| 
|---|---| 
|Exigência de complexidade|Permite aplicar regras relativamente à complexidade das palavras-passe:<br> \- não incluir toda ou parte do nome da conta de utilizador;<br> \- ter pelo menos 6 caracteres;<br> \- incluir caracteres em maiúsculas, minúsculas, especiais (! ou $, por exemplo), bem como números.|
|Impedir a alteração da palavra-passe|Permite aplicar um período de validade mínimo às palavras-passe das contas Exchange. Ou seja, os utilizadores deverão aguardar um determinado número de dias antes de poder alterar a sua palavra-passe.|
|Período de validade da palavra-passe|Permite aplicar um período de validade máximo às palavras-passe das contas Exchange. Ou seja, os utilizadores serão obrigados a alterar a palavra-passe depois de atingir esse limite.|
|Manter o histórico da palavra-passe|Este campo aparece apenas se um período de validade máximo tiver sido definido. Especifique se as palavras-passe anteriores podem ser reutilizadas. Caso afirmativo, por quanto tempo.|
|Dimensão mínima da palavra-passe|Permite aplicar um tamanho mínimo para as palavras-passe que um utilizador pretende alterar.|

Depois de preencher estas informações, poderá validar estas alterações clicando em `Seguinte`{.action} e, a seguir, em `Validar`{.action}. Também pode continuar para a parte seguinte.

### Reforçar a verificação das mensagens de entrada

Isto permite-lhe indicar se os nossos servidores devem verificar se as mensagens recebidas nas contas Exchange provêm de uma fonte legítima de envio (verificações DKIM e/ou SPF).

Para isso, complete os campos seguindo as indicações da tabela:

|Informação|Descrição| 
|---|---| 
|Ativar a verificação da assinatura DKIM|Especifique se os nossos servidores devem verificar a assinatura DKIM das mensagens que recebe nas contas Exchange. Esta ação garante a autenticidade do domínio remetente e a integridade da mensagem, permitindo identificar envios não legítimos, que serão identificados como spam.|
|Ativar a verificação da proteção SPF|Especifique se os nossos servidores devem verificar que a fonte de envio das mensagens que recebe está bem presente no registo SPF do domínio remetente. Esta verificação pode permitir identificar envios não legítimos, que serão identificados como spam.|

Depois de preencher estas informações, poderá validar estas alterações clicando em `Seguinte`{.action} e, a seguir, em `Validar`{.action}. Também pode continuar para a parte seguinte.

### Definir a apresentação das mensagens indesejadas

Isto permite-lhe especificar se as mensagens indesejadas que recebe nas contas Exchange devem incluir uma identificação que as permita identificar ou mover automaticamente para a reciclagem.

Para isso, complete os campos seguindo as indicações da tabela:

|Informação|Descrição| 
|---|---| 
|Identificar as mensagens indesejadas|Indique se os nossos servidores devem adicionar uma etiqueta para identificar mensagens recebidas consideradas “indesejadas” como spam.|
|Mover as mensagens indesejadas para a reciclagem|Indique se os nossos servidores devem mover automaticamente as mensagens recebidas consideradas “indesejadas” para a reciclagem.|

Depois de preencher estas informações, valide estas alterações clicando em `Seguinte`{.action} e, a seguir, em `Validar`{.action}.

## Quer saber mais?

Fale com a nossa comunidade de utilizadores em <https://community.ovh.com/en/>