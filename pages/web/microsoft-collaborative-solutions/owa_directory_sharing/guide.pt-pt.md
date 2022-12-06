---
title: 'Partilhar uma pasta através do webmail OWA'
excerpt: 'Saiba como partilhar pastas entre contas Exchange'
slug: exchange_2016_partilhar_uma_pasta_atraves_do_webmail_owa
section: 'Utilização do Outlook Web Application (OWA)'
order: 04
---


**Última atualização: 01/09/2020**

## Sumário

Nem sempre convém delegar o uso ilimitado de uma conta de e-mail. A funcionalidade de partilha de pastas do Exchange permite-lhe conceder acesso a outros utilizadores a determinadas pastas da sua conta, por meio de autorizações muito específicas.

**Este guia explica como partilhar pastas e definir autorizações de acesso através do Outlook Web App (OWA).**

> [!primary]
>
> Embora este guia se refira aos nossos serviços Exchange, as instruções aplicam-se igualmente às contas [E-mail Pro](https://www.ovhcloud.com/pt/emails/email-pro/).
>


## Requisitos

- Dispor de um serviço [Exchange OVHcloud](https://www.ovhcloud.com/pt/emails/hosted-exchange/).
- Ter acesso à conta Exchange (com endereço de e-mail e palavra-passe).


## Instruções

### 1.º passo: Definir as autorizações de acesso a uma pasta

Aceda à sua conta Exchange através do [webmail OVHcloud](https://www.ovh.pt/mail/). Com o botão direito do rato, clique na pasta que pretende partilhar. De seguida, selecione `Permissões de partilha`{.action}.

![sharefolder](images/exchange-folder-step1.png){.thumbnail}

No ecrã seguinte, adicione um utilizador clicando no ícone `+`{.action}. Comece a digitar para visualizar sugestões de contactos, introduza um endereço de e-mail completo ou use a opção de pesquisa através do `Diretório de pesquisa`{.action}.

Pode escolher um dos conjuntos de autorizações predefinidas («Nível de autorização»). Será mais fácil escolher primeiro um destes papéis (por exemplo, «Autor») para que veja as autorizações concedidas. Depois, por meio da seleção das caixas, pode personalizá-los em função das suas necessidades.

![sharefolder](images/exchange-folder-step2aag.gif){.thumbnail}

#### Pormenores de autorização

- **Leitura**

|Autorização|Descrição|
|---|---|
|Nenhuma|O utilizador não pode ver o conteúdo da pasta.|
|Todas as informações|O utilizador pode ver o conteúdo da pasta.|


- **Supressão**

|Autorização|Descrição|
|---|---|
|Nenhuma|O utilizador não pode suprimir ficheiros.|
|Próprios|O utilizador pode suprimir ficheiros que tenha criado.|
|Todos|O utilizador pode suprimir todos os ficheiros da pasta.|


- **Escrita**

|Autorização|Descrição|
|---|---|
|Criar ficheiros|O utilizador pode criar novos ficheiros na pasta.|
|Criar subpastas|O utilizador pode criar novas subpastas dentro da pasta partilhada.|
|Editar próprios|O utilizador pode editar ficheiros que tenha criado.|
|Editar todos|O utilizador pode editar todos os ficheiros da pasta.|


- **Outros**

|Autorização|Descrição|
|---|---|
|Proprietário da pasta|O utilizador tem as mesmas autorizações que o proprietário da pasta (todas as autorizações).|
|Contactos relativos à pasta|O utilizador receberá notificações e pedidos relacionados com a pasta (alterações de estado, pedidos de autorização, mensagens de erro).|
|Pasta visível|A pasta surgirá na conta do utilizador.|

> [!primary]
>**Subpastas**
> 
> - As subpastas criadas na pasta partilhada vão herdar automaticamente todas as autorizações da pasta-mãe. Se desejar conceder novas autorizações a uma pasta e às respetivas subpastas, as autorizações terão de ser aplicadas **individualmente a cada subpasta**.
> 
> - Se partilhar uma **subpasta** de uma pasta que não tenha autorizações configuradas, certifique-se de selecionar pelo menos «Pasta visível» na **pasta-mãe**. Caso contrário, a subpasta não surgirá na conta do outro utilizador. (O utilizador não conseguirá ver o conteúdo da pasta-mãe, a não ser que lhe conceda igualmente uma autorização de «Leitura».)
> 
> - Os outros utilizadores não poderão apagar subpastas que não tenham sido eles a criar.
> 
> - Os utilizadores com a autorização «Proprietário da pasta» podem renomear uma subpasta e conceder autorizações relativas a ela.
>


### 2.º passo: Obter um calendário partilhado

![sharefolder](images/exchange-folder-step3.png){.thumbnail}

Aceda à sua conta Exchange através do [webmail OVHcloud](https://www.ovh.pt/mail/). Faça clique com o botão direito sobre o nome da conta à esquerda e selecione `Adicionar pasta partilhada...`{.action} no menu de contexto. Na nova janela que se abrir, indique o nome da conta a partir da qual a pasta foi partilhada. Comece a digitar para visualizar sugestões de contactos, introduza um endereço de e-mail completo ou use a opção de pesquisa através do `Diretório de pesquisa`{.action}. Para confirmar, clique em `Adicionar`{.action}. A nova pasta partilhada vai surgir de imediato sob as outras pastas.


## Saiba mais

[Guia de utilização do Outlook Web App](../exchange_2016_guia_de_utilizacao_do_outlook_web_app/)

[Atribuir permissões a uma conta Exchange](../exchange_3013_atribuir_permissoes_full_access_a_uma_conta/)

[Partilhar calendários em OWA](../exchange_2016_partilhar_um_calendario_atraves_do_webmail_owa/)

Junte-se à nossa comunidade de utilizadores em <https://community.ovh.com/en/>.

