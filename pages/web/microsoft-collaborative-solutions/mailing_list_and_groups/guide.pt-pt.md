---
title: 'Exchange 2013/2016: utilização de grupos de difusão (mailing list)'
excerpt: ''
slug: exchange_20132016_utilizacao_de_grupos_de_difusao_mailing_list
legacy_guide_number: g1258
---


## Implementação a partir da interface Manager : Parte 1
Num primeiro tempo deve ligar-se ao seu [espaço cliente](https://www.ovh.com/manager/web/login.html).

Selecione de seguida, na secção "Web", o seu serviço Exchange.

Na secção "Grupos", selecione "Criar um grupo de contacto"

![](images/img_1064.jpg){.thumbnail}


## Implementação a partir da interface Manager : Parte 2
Uma nova interface será apresentada. Eis a correspondência dos elementos:

"Nome do grupo" : o nome que será presentado no seu [espaço cliente](https://www.ovh.com/manager/web/login.html) bem como o que será apresentado na interface [Webmail](https://ex.mail.ovh.net/owa/).

"Endereço de email" : o endereço de email da lista de difusão. Atenção : não pode introduzir um nome que corresponda a um endereço de email já existente.

"Tamanho máximo entrada/saída" : pode definir o tamanho máximo dos anexos dos e-mails recebidos e enviados dentro da lista de difusão.

"Gestão de inscrições/desinscrições" : define o nível de segurança de acesso ao grupo de difusão.
Aberto : qualquer pessoa se pode inscrever no grupo.
Moderado : um administrador valida as inscrições.
Fechado : é o administrador que inscreve os utilizadores no grupo.

"Esconder o endereço no livro de endereços" : esconder o endereço permite que o mesmo não seja apresentado na lista de endereços do Serviço Exchange.

"Autenticação necessária" : caso seja marcada esta "casa", apenas os membros do grupo podem enviar uma mensagem para o endereço da lista de difusão.

![](images/img_1065.jpg){.thumbnail}


## Implementação a partir da interface Manager : Parte 3
Basta agora finalizar as seguintes etapas :

Em primeiro lugar :
Definir para os subscritores, quais são os"Administradores" e "Contactos".
Atenção : unicamente os emails definidos como "Contactos" recebem os emails enviados para a lista de difusão.
Prossiga, ao clicar em "Seguinte".

Depois :

Conclua as suas escolhas com um clique em "Adicionar".

![](images/img_1067.jpg){.thumbnail}


## Implementação a partir da interface Manager : Parte 4
O seu novo grupo aparecerá no seu [Espace Cliente](https://www.ovh.com/manager/web/login.html) após alguns minutos.

Alguns ícones são "clicáveis" a fim de permitir configuração dos seus grupos.

![](images/img_1068.jpg){.thumbnail}


## Exemplo de utilização a partir de OWA : Parte 1
A partir do [webmail](https://ex.mail.ovh.net/owa/) poderá realizar o teste de funcionamento da sua lista de difusão.

Envie em email para o endereço do seu grupo.

![](images/img_1069.jpg){.thumbnail}


## Exemplo de utilização a partir de OWA : Parte 2
O seu email deverá ter sido entregue e poderá ser consultado na sua caixa de email.

![](images/img_1070.jpg){.thumbnail}

