---
title: 'Exchange 2013 : Send As (enviar como)'
excerpt: ''
slug: exchange_2013_send_as_enviar_como
legacy_guide_number: g1250
---


## Implementação das permissões Send As Parte 1:
Deve realizar as operações a partir da interface [Manager](https://www.ovh.com/manager/web/login.html)

Uma vez ligado, selecione o seu serviço Exchange.

Na secção Conta de email, clique no ícone formado por 3 pontos.

Selecione "Gerir as delegações".

![](images/img_1208.jpg){.thumbnail}


## Implementação das permissões Send As Parte 2:
Uma nova interface será visível.

Poderá aqui escolher a conta selecionada que terá as permissões "Full Acces", bem como "direito de envio" (Send As).

Clique de seguida em "Seguinte"

![](images/img_1209.jpg){.thumbnail}


## Implementação das permissões Send As Parte 3:
Eis o aspeto da interface que aparecerá e na qual deverá validar as suas ações.

Aguarde alguns minutos para que as alterações sejam efetivas.

Valide através de um clique em "Aplicar"

![](images/img_1063.jpg){.thumbnail}


## Implementação através de OWA Parte 1:
Poderá verificar a partir da interface [OWA](https://ex.mail.ovh.net/owa) que tem agora a possibilidade de enviar um email com remetente "test@design-tk.fr" quando usa a conta "config@design-tk.fr".

Para fazer aparecer o campo "De:" deverá clicar em "..." do lado direito de "inserir".

deverá introduzir manualmente o segundo endereço no campo "De:"

O endereço será então automaticamente memorizado.

![](images/img_1325.jpg){.thumbnail}


## Implementação através de OWA Parte 2:
O email foi corretamente recebido com o remetente "config".

![](images/img_1032.jpg){.thumbnail}


## Possível erro:
Eis a mensagem de erro que aparecerá se as permissões "Send As" não foram previamente configuradas:

![](images/img_1033.jpg){.thumbnail}

