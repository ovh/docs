---
title: 'Email Partilhado: guia de utilização de Mailing-Lists'
excerpt: guia de utilização de Mailing-List
slug: email_partilhado_guia_de_utilizacao_de_mailing-lists
legacy_guide_number: g1596
---


## Generalidades
Uma Mailing-ist permite-lhe contactar de forma massiva subscritores, ou seja, enviar uma mensagem ou uma newsletter a vários destinatários de uma só vez.
Isso pode ter interesse no contexto de uma comunicação de informação sobre o lançamento de um novo produto (para um site de e-commerce, por exemplo) ou para informar sobre um novo encontro, por exemplo, no contexto de uma comunidade/grupo específico. Há várias possibilidades de utilização que podem responder às suas necessidades.

Ezmlm é um gestor de listas de difusão muito utilizado e é nessa ferramenta que assenta o serviço que pode usar na OVH. Vamos abordar neste guia como criar, gerir e configurar uma mailing-list.

- É preciso ter em consideração que uma Mailing-List não é uma solução para o envio de spam (mensagens de publicidade) em massa. Este tipo de utilização não será tolerado, caso o envio de publicidade seja abusivo.

- Saiba que a qualquer altura um utilizador pode decidir remover a sua subscrição de uma lista de difusão mas, também pode reportar o uso abusivo, caso o deseje e o constate.




## Criação da sua Mailing-List
No nosso exemplo, trata-se do serviço de Mailing-List associado a um alojamento partilhado Pro.
A fim de criar a sua mailing-list deve, num primeiro tempo, aceder ao seu [Espaço Cliente](http://www.ovh.com/manager/web) OVH.

Quando tiver estabelecido a ligação, deve selecionar o seu alojamento na secção "Emails" e depois clicar no separador "Mailing-lists".

![](images/img_3626.jpg){.thumbnail}
Se já tem Mailing-lists criadas, elas aparecerão no quadro de resumo. No nosso exemplo, nenhuma Mailing-list foi previamente criada.

Para criar uma nova Mailing-List. clique em Adicionar uma mailing-list.

![](images/img_3017.jpg){.thumbnail}
Eis o formulário para criar a sua mailing-list. Várias informações serão necessárias a fim de poder validar a criação:


- Nome: o nome da sua mailing-list;
- Proprietário: introduza o endereço de email do proprietário da mailing-list (ele será também moderador);
- Resposta enviada para: definir o endereço de email para o qual são enviadas as respostas;
- Idioma: selecione o idioma da sua mailing-list (tradução dos emails automáticos de inscrição / desinscrição);
- Moderação das mensagens: o proprietário (moderador) deve aprovar as respostas;
- Moderação dos subscritores: o proprietário (moderador) deve aprovar as inscrições;
- Apenas os subscritores podem enviar: não é possível enviar um email para a mailing-lisr se o remetente não está inscrito na mesma;



![](images/img_3019.jpg){.thumbnail}
Uma vez validada a informação do formulário, uma mensagem de confirmação será apresentada:

![](images/img_3020.jpg){.thumbnail}

## Cada mailing-list permite o máximo de:

- 250 subscritores para as Mailing-lists do tipo Newletter, Restrita, Aberta, Privada e Fechada;
- 5000 subscritores para o tipo de Mailing-List Moderada;




## Princípio da moderação
Uma mailing-List pode ser moderada para evitar que qualquer pessoa possa enviar um email para a sua lista de subscritores. Uma Mailing-List moderada serve principalmente para realizar o envio de newsletters, por exemplo, ao passo que uma não moderada poderá servir para que vários subscritores possam dialogar.

![](images/img_3565.jpg){.thumbnail}
.

![](images/img_3564.jpg){.thumbnail}


## Modificar as opções da Mailing-List ou eliminá-la
Se deseja modificar as opões anteriormente validadas aquando da criação da Mailing-List ou eliminar essa Mailing-List, clique na roda dentada à direita de cada Mailing-List.

![](images/img_3021.jpg){.thumbnail}


## Importar subscritores
No nosso exemplo, não registamos ainda nenhum subscritor. Para o faer, será necessário clicar no símbolo a negro na secção "Subscritores".

![](images/img_3022.jpg){.thumbnail}

- Clique em "Adicionar subscritores" a fim de poder iniciar a adição.



![](images/img_3023.jpg){.thumbnail}
Há 2 métodos para adicionar subscritores a uma mailing-list:


- A introdução manual dos endereços;
- A importação de um ficheiro de texto que contém um endereço de email por linha;



![](images/img_3030.jpg){.thumbnail}
Uma vez realizada a validação, uma mensagem de confirmação será apresentada:

![](images/img_3033.jpg){.thumbnail}
Conforme o número de subscritores a adicionar, a operação poderá demorar algum tempo a realizar-se.


## Exportar a sua lista de subscritores num ficheiro CSV
Clique em "exportar a lista de subscritores no formato CSV" a fim de gerar um ficheiro CSV que contém o conjunto de todos os subscritores. Esta opção não está disponível no nosso exemplo, pois ainda não foi adicionado nenhum subscritor.


## Inscrever-se numa mailing-list
Se alguém deseja inscrever-se numa mailing-list, basta que envie um email para:

```
nome_da_sua_MailingList-subscribe@seu_dominio.pt
```




## Desinscrever-se de uma mailing-list
Se um subscritor deseja desinscrever-se de uma mailing-list, basta que envie um email para:


```
nome_da_sua_MailingList-unsubscribe@seu_dominio.pt
```




## Eliminação automática dos endereços de email errados
É importante saber que o sistema de Mailing-list não elimina um subscritor da lista de difusão devido a um 1 único retorno de erro (mensagem não entregue, endereço inexistente...).
Pelo contrário, o sistema agiarde cerca de 12 dias desde o primeiro erro de mensagem não entregue e depois envia um alerta.

A mensagem de alerta indica quais os emails que não puderam ser entregues. Se esta mensagem de alerta também não for entregue, o sistema aguarda 12 dias e envia uma nova mnsagem de teste. Se esta mensagem de teste também não for entregue, o subscritor é eliminado da lista.


## Envio sem indicação do assunto do email
Um envio para uma mailing list deve conter obrigatoriamente um assunto. Sem isso, irá gerar um erro automaticamente e será enviado um e-mail para o remetente do e-mail.

O remetente do e-mail sem assunto receberá então um erro como visível aqui:

```
Hi. This is the qmail-send program at mx1.mail.ovh.net.
I'm afraid I wasn't able to deliver your message to the following addresses.
This is a permanent error; I've given up. Sorry it didn't work out.

<newsletter@testinterne.ovh>:

ezmlm-reject: fatal: Sorry, I don't accept message with empty Subject (#5.7.0)
```




## Envio com o endereço da mailing-list em Bcc
Para enviar uma mensagem para uma mailing list, o endereço deve ser colocado obrigatoriamente no campo « Para », ou no campo « Copiar a » (Cc).

Se colocar no campo « Cópia oculta », ocorrerá um erro.

O remetente do e-mail sem assunto receberá então um erro como visível aqui:

```
Hi. This is the qmail-send program at mx1.mail.ovh.net.
I'm afraid I wasn't able to deliver your message to the following addresses.
This is a permanent error; I've given up. Sorry it didn't work out.

<newsletter@testinterne.ovh>:

ezmlm-reject: fatal: List address must be in To: or Cc: (#5.7.0)
```




## Como personalizar o conteúdo da mailing-list?
Pode personalizar a maior parte dos textos da sua mailing-list. Como moderador, poderá enviar um email vazio para 
```
nome_da_sua_MailingList-edit@seu_dominio.pt
```

.


- Exemplo: A sua mailing-list é 
```
newsletter@testinterne.ovh
```

. A partir do seu endereço de email de moderador, deverá enviar uma mensagem para 
```
newsletter-edit@config-support.com
```

.


Receberá então um email que o guiará nas suas modificações.

Aqui em baixo encontra uma lista dos "ficheiros" que contêm as respostas e uma breve descrição da utilização do seu conteúdo. Para editar um ficheiro, envie simplesmente uma mensagem para MailingList-edit.ficheiro, substituindo "ficheiro" pelo nome do que quer editar. As instruções de edição serão enviadas com o ficheiro de texto atual.

|Ficheiro|Utilização|
|bottom|rodapé de todas as mensagens; informação geral|
|digest|secção 'administrativa' das newsletters.|
|faq|respostas às questões frequentes relativas a esta lista.|
|get_bad|no caso de falta de mensagens nos arquivos.|
|help|ajuda geral (entre 'top' e 'bottom').|
|info|informações sobre a lista. A primeira linha é um resumo.|
|mod_help|ajuda específica aos moderadores da mailing-list.|
|mod_reject|ao remetente de envios recusados.|
|mod_request|aos moderadores com o envio.|
|mod_sub|ao subscritor com a subscrição .|
|mod_sub_confirm|aos moeradores para validar uma subscrição.|
|mod_timeout|ao expeditor de uma mensagem há muito tempo a aguardar validação.|
|mod_unsub_confirm|a um administrador para pedir uma desinscrição.|
|sub_bad|ao subscritor se a confirmação não foi correta.|
|sub_confirm|ao subscritor para confirmar o seu pedido|
|sub_nop|ao subscritor, após uma nova subscrição.|
|sub_ok|ao subscritor, quando uma subscrição é aprovada.|
|top|cabeçalho de cada mensagem.|
|trailer|adicionado no fim de cada contribuição na lista de difusão.|
|unsub_bad|ao subscritor se o link de desinscrição não é o correto.|
|unsub_confirm|ao subscritor para solicitar subscrição de desinscrição.|
|unsub_nop|a um não subscritor após um pedido de desinscrição.|
|unsub_ok|a um ex-subscritor após uma descinscrição bem sucedida.|


Exemplo: Se deseja modificar o rodapé padrão dos emails enviados na sua mailing-list, terá de enviar uma mensagem para « newsletter-edit.bottom@seu_dominio.pt ».

Receberá um email que lhe dará ajuda na edição do rodapé.

