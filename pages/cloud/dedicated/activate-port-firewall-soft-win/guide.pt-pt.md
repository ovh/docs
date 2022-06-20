---
title: Configurar a firewall em Windows
excerpt: Saiba como configurar a firewall em Windows
slug: firewall-windows
section: Tutoriais
order: 02
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

**Última atualização: 31/01/2022**

## Objetivo

Para proteger ao máximo o seu sistema, o seu servidor Windows Server dispõe da sua própria firewall integrada. A sua configuração permite-lhe aumentar os níveis de segurança e garantir assim a disponibilidade e a integridade de todos os elementos alojados no servidor, tais como as funções, os serviços, as pastas partilhadas.

**Este guia explica-lhe como aplicar as regras da firewall em Windows.**

> [!warning]
>
> A OVHcloud oferece-lhe serviços que são da sua responsabilidade. Uma vez que não temos acesso a estas máquinas, não podemos administrá-las nem fornecer-lhe assistência. O cliente é o único responsável pela gestão e pela segurança do serviço.
>
> Este guia fornece as instruções necessárias para realizar as operações mais habituais. No entanto, se encontrar dificuldades ou tiver dúvidas quanto à administração, utilização ou segurança de um servidor, recomendamos que recorra a um [prestador de serviços especializado](https://partner.ovhcloud.com/pt/directory/). Para mais informações, aceda à secção “Quer saber mais?” deste manual.
>

## Requisitos

- Ter um [servidor dedicado](https://www.ovhcloud.com/pt/bare-metal/) Windows na sua conta OVHcloud
- Dispor de um acesso de administrador ao seu servidor através de um escritório distante em Windows. 

## Instruções

### Etapa 1: aceder à firewall Windows

Para aceder à firewall Windows, pode seguir esta ordem:

- Clique em `Iniciar`{.action}.
- Clique em `Pesquisar`{.action}.
- Procure a Firewall Windows através da barra de pesquisa.
- Clique em `Firewall Windows`{.action}.

A seguir, clique na linha `Configuração avançada`{.action}.

![Step1](images/step1.PNG){.thumbnail}

### Etapa 2: ativar uma regra de tráfego de entrada

Na janela exibida, encontrará parâmetros tais como:

- Regras de entrada e de saída
- Regras de segurança da ligação
- Opções de vigilância da firewall do servidor

Ao selecionar as `Regras de tráfego de entrada`{.action}, aparecem todas as regras pré-configuradas do Windows Server associadas às ligações de rede e aos pacotes de entrada. Algumas destas regras não estão ativadas de forma padrão. Se pretender ativá-los, clique com o botão direito do rato sobre a regra e selecione a opção `Ativar a regra`{.action}.

![Step1](images/step2.PNG){.thumbnail}

### Etapa 3: criar uma nova regra 

Para criar uma nova regra, aceda ao menu `Action`{.action} e selecione `Nova regra`{.action}.
Clique na opção `Nova regra`{.action} no painel da direita.

![Step3](images/step3.PNG){.thumbnail}

### Etapa 4: definir o tipo de regra a ativar

O assistente aparece para definir o tipo de regra a criar. Selecione a opção `Port`{.action}.

![Step4](images/step4.PNG){.thumbnail}

### Etapa 5: definir o tipo de porta a ativar

Na etapa seguinte, defina o tipo de porta a ativar:

![Step5](images/step5.PNG){.thumbnail}

> [!primary]
>
>- TCP (protocolo de controlo de transmissão)
>É um protocolo orientado para a ligação, ou seja, com TCP, será possível criar ligações entre elas a fim de enviar fluxos de dados. O protocolo garante que os dados são fornecidos ao destinatário sem erros e pela mesma ordem para a qual foram enviados.
>
>- UDP (User Datagram Protocol - Protocolo de datagrama Utilizador)
>É um protocolo não orientado para a ligação. O seu desenvolvimento baseia-se na troca de datagramas e facilita o envio de datagramas através da rede. É necessário estabelecer previamente uma ligação com o destino.
>
>Também pode selecionar a opção `Todas as portas locais`{.action} para ativar todas as portas TCP ou UDP num servidor não protegido. Pode também assinalar a casa `Portos locais específicos`{.action} para determinar qual a porta que deve ser autorizada. 
>

### Etapa 6: autorizar ou bloquear a ligação

Para definir a ação que esta regra vai desencadear, estão disponíveis as seguintes opções: Selecione a mais conveniente.

- **Autorizar a ligação**. Esta opção permite uma comunicação completa através desta porta.
- **Autorizar a ligação se esta estiver segura**. Esta opção permite que os dados sejam transmitidos apenas se a ligação for autenticada através de IPsec.
- **Bloquear a ligação**. Esta opção impede que os dados sejam transportados através deste porto.

Selecione a opção `Autorizar a ligação`{.action} e clique em `Seguinte`{.action}. 

![Step6](images/step6.PNG){.thumbnail}

### Etapa 7: definir o perfil e o nome da firewall a aplicar

Por fim, deve escolher em que perfis a regra deve aplicar-se, entre os perfis públicos, de domínio ou privados.
Pode ativá-los todos se desejar.

![Step7](images/step7.PNG){.thumbnail}

Atribua um nome e uma descrição à nova regra (opcional) para facilitar a sua utilização:

![Step7_01](images/step7-01.PNG){.thumbnail}

Clique no botão `Terminar`{.action} para terminar o processo e criar a nova regra.

![Step7_02](images/step7_02.PNG){.thumbnail}

De seguida, poderá efetuar alterações ao nível de segurança da nova regra criada.

## Saiba mais

Fale com a nossa comunidade de utilizadores em <https://community.ovh.com/en/>.
