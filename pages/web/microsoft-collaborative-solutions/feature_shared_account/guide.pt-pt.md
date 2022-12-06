---
title: Criar e utilizar uma conta partilhada
slug: exchange-utilizacao-das-contas-partilhas
excerpt: Adicionar e utilizar uma conta partilhada na sua oferta E-mail Exchange
section: Funcionalidades das contas Exchange
order: 06
---

**Última atualização: 15/06/2021**

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

## Objetivo

Uma **conta partilhada** é uma caixa de e-mail partilhada entre várias contas Exchange e unicamente acessível através destas últimas. Uma conta partilhada não possui uma palavra-passe, é necessário delegar o seu acesso a uma ou várias contas da plataforma Exchange.
<br>As contas partilhadas estão acessíveis, graças a uma delegação, a partir do OWA (webmail Exchange) ou através do software de mensagens Outlook.

**Saiba como criar e gerir uma conta partilhada na plataforma Exchange.**

## Requisitos

- Ter acesso à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt).
- Ter contratado uma oferta [Exchange OVHcloud](https://www.ovhcloud.com/pt/emails/hosted-exchange/).

## Instruções

### Adicionar uma conta partilhada

Aceda à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt). Aceda à secção `Web Cloud`{.action} e selecione o seu serviço em `Microsoft`{.action} e depois `Exchange`{.action}.

Selecione o separador `Contas partilhadas`{.action} no menu horizontal e clique em `Adicionar uma conta partilhada`{.action}.

![emails](images/exchange-shared_accounts01.png){.thumbnail}

Introduza os campos solicitados:

|Função|Descrição|
|---|---|
|Conta de e-mail|Escolha o nome da sua conta partilhada. **Não deve ser um endereço de e-mail existente.**|
|Limite|Indique o limite de armazenamento desejado para a sua conta partilhada. O limite máximo é de **10GB para o conjunto das suas contas partilhadas**.|
|Nome a mostrar|O nome de visualização que pretende apresentar durante um envio a partir da sua conta partilhada.|
|Ocultar o endereço na lista|Ocultar o endereço na lista de endereços permite que o endereço da conta partilhada não seja visível na lista de endereços da sua plataforma Exchange.|

Clique em `Seguinte`{.action} para aceder ao resumo. Finalize a operação ao clicar em `Validar`{.action}.

![emails](images/exchange-shared_accounts02.png){.thumbnail}

### Gerir a delegação de uma conta partilhada

Depois de criar a sua conta partilhada, é necessário delegar o seu acesso a uma ou várias contas da sua plataforma.

Uma conta partilhada não está diretamente acessível, pois esta não possui uma palavra-passe. Por isso, não pode ser configurado diretamente num cliente do tipo Outlook ou acessível a partir do webmail.

É necessário criar uma delegação entre uma conta Exchange e a conta partilhada.

No separador `Contas partilhadas`{.action} da sua plataforma Exchange, clique no botão `...`{.action} diante da conta partilhada e depois clique em `Configurar as delegações`{.action}. Poderá então escolher, na sua lista de contas, aqueles que terão a possibilidade de aceder à conta partilhada.

![emails](images/exchange-shared_accounts03.png){.thumbnail}

Escolha as ações possíveis na conta selecionada:

|Função|Descrição|
|---|---|
|Direito de envio|Permite que a conta de e-mail selecionada realize um envio "como" o endereço de e-mail partilhado.|
|Permissão para "enviar como"|Permite que a conta de e-mail selecionada realize um envio "por" do endereço de e-mail partilhado.|
|Direito de acesso|Autorizar a conta de e-mail selecionada a apresentar e gerir a conta partilhada a partir do OWA (webmail) ou do Outlook.|

A seguir, clique em `Seguinte`{.action} e `Validar`{.action} para registar as alterações.

![emails](images/exchange-shared_accounts04.png){.thumbnail}

No nosso exemplo, permitimos que as contas **guia-exchange@** e **test@** acedam à conta partilhada **shared_test@**.
<br>A conta de e-mail **guia-exchange@** também pode enviar e-mails "como" **shared_test@**.
<br>A conta de e-mail **test@** também pode enviar e-mails "da" **shared_test@**.

### Utilização da conta partilhada a partir do OWA (webmail)

Ligue-se ao webmail Exchange (OWA) no endereço <https://www.ovh.com/fr/mail/> com uma conta de e-mail com direito de acesso à conta partilhada.. 
<br>No nosso exemplo, ligamo-nos à conta **guia-exchange@**.

Depois de aceder, na coluna da esquerda, clique com o botão direito na arborescência principal do seu endereço de e-mail e depois em `Adicionar uma pasta partilhada`{.action}. 

![emails](images/exchange-shared_accounts05.png){.thumbnail}

De seguida, introduza o nome da sua conta partilhada e clique em `Adicionar`{.action} quando esta tiver sido encontrada na lista Exchange.

![emails](images/exchange-shared_accounts06.png){.thumbnail}

No nosso exemplo, a conta partilhada está agora acessível a partir da conta **guia-exchange@**.

![emails](images/exchange-shared_accounts07.png){.thumbnail}

### Utilização da conta partilhada a partir do Outlook

A partir do Outlook, a sua conta será partilhada na coluna da esquerda, da mesma forma que no webmail.

![emails](images/exchange-shared_accounts10.png){.thumbnail}

## Saiba mais

[Consultar a sua conta Exchange a partir da interface OWA](https://docs.ovh.com/pt/microsoft-collaborative-solutions/exchange_2016_guia_de_utilizacao_do_outlook_web_app/)

[Delegar permissões numa conta Exchange](https://docs.ovh.com/pt/microsoft-collaborative-solutions/exchange_3013_atribuir_permissoes_full_access_a_uma_conta/)

[Partilhar um calendário através do webmail OWA](https://docs.ovh.com/pt/microsoft-collaborative-solutions/exchange_2016_partilhar_um_calendario_atraves_do_webmail_owa/)

[Adicionar um rodapé para as suas contas Exchange](https://docs.ovh.com/pt/microsoft-collaborative-solutions/exchange_20132016_assinatura_automatica_-_disclaimer/)

Fale com a nossa comunidade de utilizadores em <https://community.ovh.com/en/>.
