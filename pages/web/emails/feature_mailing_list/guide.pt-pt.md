---
title: 'Gerir e utilizar as mailing lists'
excerpt: 'Neste guia, fique a saber como usar as mailing lists'
slug: email_partilhado_guia_de_utilizacao_de_mailing-lists
legacy_guide_number: g1596
---

**Última atualização: 13/02/2020**

## Objetivo

Uma mailing list permite-lhe contactar de forma massiva subscritores, ou seja, difundir uma mensagem ou uma informação a vários destinatários ao mesmo tempo. Isto pode ser importante no âmbito de um mailing informativo, por exemplo, sobre o lançamento de um novo produto (para um site de comércio eletrónico) ou para informar sobre um próximo encontro (para um site comunitário). 

**Fique a saber como gerir as suas mailing lists**

### Princípio da moderação

Uma mailing list pode ter moderação para evitar que qualquer pessoa envie um e-mail à sua lista de subscritores. Uma mailing list com moderação pode servir para enviar <i>newsletters</i>, enquanto uma mailing list sem moderação permitirá facilmente um diálogo entre vários subscritores por e-mail.

**Mailing list sem moderação**

![emails](images/manage_mailing-lists_no-modarate.png){.thumbnail}

O remetente (sender) transmite o e-mail à mailing list, os subscritores (subscribers) recebem diretamente o e-mail.

**Mailing list com moderação**

![emails](images/manage_mailing-lists_modarate.png){.thumbnail}

O remetente (sender) transmite o e-mail à mailing list. O moderador (moderator) recebe um e-mail com um pedido de validação ou de rejeição. Se o moderador validar, os subscritores (subscribers) recebem o e-mail transmitido à mailing list. Se o moderador recusar, o e-mail do remetente é apagado e os subscritores não recebem nada.

> [!warning]
>
> - Uma mailing list não é uma solução prevista para o envio de spam (mensagens publicitárias) de forma massiva. Esta utilização é tolerada num certa medida enquanto não se revelar abusiva.
> - Um subscritor pode, a qualquer momento, decidir anular a subscrição de uma mailing list. Pode também comunicar qualquer abuso que considere justificado.
>

## Requisitos

- Ter uma oferta de e-mail MX Plan 100 no mínimo ou um [Alojamento web](https://www.ovh.pt/alojamento-partilhado/){.external} elegível para as listas de difusão.
- Estar ligado à [Área de Cliente OVHcloud](https://www.ovh.com/manager/web/login/){.external}.

## Instruções

### Criação da sua mailing list

Para criar a sua mailing list, vá à sua [Área de Cliente OVHcloud](http://www.ovh.com/manager/web){.external} e selecione o separador `Web`{.action} no topo.

Após a conexão, clique na coluna da esquerda, em `E-mails`{.action}, e depois no respetivo nome de domínio. Vá ao separador `mailing lists`{.action} do seu serviço de e-mail.

![emails](images/manage_mailing-lists_01.png){.thumbnail}

Se já tiver criado mailing lists, estas aparecerão no quadro de resumo. No seguinte exemplo, já foi criada uma mailing list.

Para criar uma nova mailing list, clique em `Adicionar uma mailing list`{.action}.

![emails](images/manage_mailing-lists_02.png){.thumbnail}

Preencha o formulário em função das informações descritas no seguinte quadro:

| Informação                      	| Descrição                                                                                                            	|
|----------------------------------	|------------------------------------------------------------------------------------------------------------------------	|
| Nome                              	| O nome da sua mailing list.                                                                                          	|
| Titular                     	| Introduza o endereço de e-mail do proprietário da mailing list (será também moderador).                              	|
| Responder a                        	| Determine o(s) destinatário(s) quando um subscritor responde à mailing list.                                        	|
| Idioma                           	| Selecione o idioma das notas automáticas de subscrição ou anulação de subscrição da sua mailing list.				|
| Moderar todas as mensagens         | O titular ou um moderador deve aprovar o e-mail enviado para a mailing list.                                     	|
| Apenas os subscritores podem publicar 	| Restringe o envio de e-mails para a mailing list aos únicos subscritores desta mailing list.              								|
| Toda a gente pode publicar (sem moderação) | O envio de um e-mail para a mailing list é diretamente enviado para os subscritores sem validação.             		|
| Moderação dos subscritores         	| O titular ou um moderador deve aprovar as subscrições na mailing list.                                    	|


![emails](images/manage_mailing-lists_03.png){.thumbnail}


> [!primary]
>
> Número máximo de subscritores da mailing list:
>
> - 5000 com moderação das mensagens
> - 250 sem moderação das mensagens
>


### Gerir as opções da mailing list

Para alterar as opções da mailing list, clique em `...`{.action} do lado direito. Pode então atualizar as opções, eliminar a mailing list ou partilhar a lista dos subscritores por e-mail. 

![emails](images/manage_mailing-lists_04.png){.thumbnail}


### Gerir os subscritores

Para gerir os subscritores da sua mailing list, clique na silhueta na coluna "Subscritores".

![emails](images/manage_mailing-lists_05.png){.thumbnail}

Surge a seguinte janela:

![emails](images/manage_mailing-lists_06.png){.thumbnail}

#### Adicionar/eliminar subscritores

|Adicionar subscritores|Eliminar subscritores|
|---|---|
|Clique em `Adicionar subscritores`{.action} do lado direito.|Clique em `Eliminar através de um ficheiro`{.action} do lado direito.|
|![emails](images/manage_mailing-lists_07.png){.thumbnail}|![emails](images/manage_mailing-lists_07b.png){.thumbnail}|

Há 2 métodos para adicionar/eliminar subscritores:

- a introdução manual de endereços, clicando em `Adicionar um endereço de e-mail`{.action};
- a importação de um ficheiro de texto com um endereço de e-mail por linha, clicando no ícone de transferência situado por cima do quadro de introdução.

#### Exportar a sua lista de subscritores para um ficheiro CSV

Clique em `Exportar os subscritores para CSV`{.action} para criar um ficheiro CSV com todos os seus subscritores. Esta opção não está disponível no nosso caso porque nenhum subscritor foi adicionado.
 
### Gerir os moderadores

Para gerir os moderadores da sua mailing list, clique na silhueta na coluna "Moderadores".

![emails](images/manage_mailing-lists_08.png){.thumbnail}

Surge a seguinte janela:

![emails](images/manage_mailing-lists_09.png){.thumbnail}

#### Adicionar/eliminar moderadores

|Adicionar moderadores|Eliminar moderadores|
|---|---|
|Clique em `Adicionar moderadores`{.action} do lado direito.|Clique em `Eliminar através de um ficheiro`{.action} do lado direito.|
|![emails](images/manage_mailing-lists_10.png){.thumbnail}|![emails](images/manage_mailing-lists_10b.png){.thumbnail}|

Há 2 métodos para adicionar/eliminar moderadores:

- a introdução manual de endereços, clicando em `Adicionar um endereço de e-mail`{.action};
- a importação de um ficheiro de texto com um endereço de e-mail por linha, clicando no ícone de transferência situado por cima do quadro de introdução.

> [!primary]
> \- Quando vários moderadores são definidos numa mailing list, basta a validação de um único moderador para que o e-mail seja difundido pelos subscritores.
> \- Quando um moderador envia um e-mail para a mailing list, só ele é que recebe o e-mail de moderação.
> 

Em função do número de subscritores a adicionar, a realização da operação pode demorar algum tempo.


### Subscrever uma mailing list

Se alguém pretender subscrever a sua mailing list, basta que envie um e-mail para:


```bash
nome_da_sua_ML-subscribe@votredomaine.com
```


### Anular a subscrição de uma mailing list

Se um subscritor pretender anular a subscrição da sua mailing list, basta que envie um e-mail para:


```bash
nome_da_sua_ML-unsubscribe@votredomaine.com
```


### Eliminação automática dos endereços errados

O sistema de mailing list não elimina um subscritor da lista após uma única resposta de erro (mensagem não entregue, endereço inexistente...). Espera cerca de 12 dias após o primeiro erro de envio, e envia uma mensagem de aviso ao subscritor.

A mensagem de aviso indica as referências das mensagens que falharam. Se esta mensagem de aviso também falhar, o nosso sistema mailing list espera mais 12 dias e envia uma mensagem de "teste". Se esta mensagem de teste também falhar, o subscritor é apagado da lista dos subscritores.


### Erros recorrentes

#### Envio sem indicação de assunto no e-mail

Um envio para uma mailing list deve obrigatoriamente incluir um assunto. Caso contrário, será automaticamente criado um erro e um e-mail de resposta de erro será enviado ao remetente relativamente ao envio.

O remetente do e-mail sem assunto receberá então um e-mail de resposta de erro conforme abaixo indicado:


```bash
Hi. This is the qmail-send program at mx1.ovh.net.
I'm afraid I wasn't able to deliver your message to the following addresses.
This is a permanent error; I've given up. Sorry it didn't work out.

<newsletter@testinterne.ovh>:

ezmlm-reject: fatal: Sorry, I don't accept message with empty Subject (#5.7.0)
```


#### Envio com indicação do endereço da mailing list em cópia oculta

Para enviar uma mensagem a uma mailing list, o endereço da mailing list deve obrigatoriamente encontrar-se no campo "To", ou no campo "Cópia para" (Cc).

Se o cliente indicar o endereço no campo "Cópia oculta", receberá uma resposta de erro.

O remetente do e-mail receberá uma resposta de erro:


```bash
Hi. This is the qmail-send program at mx1.ovh.net.
I'm afraid I wasn't able to deliver your message to the following addresses.
This is a permanent error; I've given up. Sorry it didn't work out.

<newsletter@testinterne.ovh>:

ezmlm-reject: fatal: List address must be in To: or Cc: (#5.7.0)
```


### Personalização avançada

Pode personalizar a maioria dos textos da sua mailing list. Enquanto moderador, deve enviar um e-mail vazio para nome_da_sua_ML- [edit@votredomaine.com](mailto:edit@votredomaine.com){.external}.

- Por exemplo: A sua mailing list é [newsletter@testinterne.ovh](mailto:newsletter@testinterne.ovh){.external} . A partir do seu endereço de e-mail de moderador, terá de enviar uma mensagem para [newsletter-edit@testinterne.ovh](mailto:newsletter-edit@testinterne.ovh){.external} .

Receberá então um e-mail que o(a) guiará para realizar as suas alterações.

Pode encontrar, em seguida, uma lista dos ficheiros com os textos de resposta e uma breve descrição da utilização do respetivo conteúdo. Para editar um ficheiro, basta enviar uma mensagem para envoi-edit.fichier, substituindo o nome do ficheiro por 'ficheiro'. As instruções de edição serão enviadas com o ficheiro de texto.


|Ficheiro|Utilização|
|---|---|
|bottom|rodapé de todas as respostas: informações gerais.|
|digest|secção 'administrativa' dos boletins periódicos.|
|faq|Respostas às perguntas frequentes sobre esta lista.|
|get_bad|no caso de mensagens em falta nos arquivos.|
|help|ajuda geral (entre 'top' e 'bottom').|
|info|informações sobre a lista. A primeira linha é um resumo.|
|mod_help|ajuda específica aos moderadores de lista.|
|mod_reject|ao remetente de envios rejeitados.|
|mod_request|aos moderadores com um envio.|
|mod_sub|ao subscritor após confirmação de subscrição do moderador.|
|mod_sub_confirm|aos moderadores para validar uma subscrição.|
|mod_timeout|ao remetente de uma mensagem não válida há muito tempo.|
|mod_unsub_confirm|a um administrador para pedir uma anulação de subscrição.|
|sub_bad|ao subscritor se a confirmação tiver sido má.|
|sub_confirm|ao subscritor para confirmar o pedido.|
|sub_nop|ao subscritor após uma nova subscrição.|
|sub_ok|ao subscritor após uma subscrição bem sucedida.|
|top|cabeçalho de cada resposta.|
|trailer|adicionado no fim de cada contributo à lista.|
|unsub_bad|ao subscritor se a confirmação de anulação da subscrição estiver errada.|
|unsub_confirm|ao subscritor para pedir a confirmação de anulação da subscrição.|
|unsub_nop|a um não subscritor após um pedido de anulação da subscrição.|
|unsub_ok|a um ex-subscritor após uma anulação da subscrição bem sucedida.|

> [!primary]
>
> Por exemplo: Se pretender alterar o rodapé predefinido dos e-mails enviados para a sua mailing list, terá de enviar uma mensagem para o endereço "newsletter-edit.bottom@testinterne.ovh". Receberá então um novo e-mail a explicar como personalizar o rodapé.
> 

## Quer saber mais?

Fale com a nossa comunidade de utilizadores: https://community.ovh.com/en/