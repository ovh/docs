---
title: Como gerir os contactos (gestores) dos serviços OVH
slug: gestao_dos_contactos
excerpt: Saiba como definir ou alterar os contactos (gestores) dos serviços OVH
section: Introdução
---

**Última atualização no dia 03/01/2019**

## Sumário

Normalmente, os serviços OVH têm associados vários contactos, ou seja, vários tipos de conta que permitem gerir aspetos diferentes do serviço. (Administrador, «Responsável» Técnico, «Responsável» pela Faturação).  

**Este guia explica como definir ou alterar contactos (gestores) dos serviços OVH.**

## Requisitos

- Aceder à [Área de Cliente OVH](https://www.ovh.com/auth/?action=gotomanager){.external}
- Ter as permissões de acesso necessárias para este tipo de operação.
- Ter acesso ao Identificador de Cliente (ID de Cliente) do utilizador que irá ser definido como contacto.
- Todos os utilizadores envolvidos na alteração de um contacto devem ter acesso à conta de e-mail associada aos seus perfis.
- Os utilizadores afetados pela alteração do contacto de faturação (anterior e novo responsável pela faturação) têm de ter os pagamentos em dia.

## Instruções

### Aceder à área de gestão dos contactos

Aceda à sua [Área de Cliente OVH](https://www.ovh.com/auth/?action=gotomanager){.external}, clique no seu ID de cliente no canto superior direito e, em seguida, clique em `Os meus contactos`{.action}.

![Gestão de contactos](images/contactmanagement0.png){.thumbnail}

Irá visualizar uma tabela. A tabela inclui a lista de serviços associados ao seu identificador de cliente, e a lista dos contactos responsáveis pela gestão dos vários aspetos do serviço.

![Gestão de contactos](images/contactmanagement1.png){.thumbnail}

Tipos de contactos e respetivas funções:

- **Administrador**: conta com permissões para gerir todos os aspetos do serviço (administrativos, técnicos e faturação). Este acesso permite definir os contactos (atribuir diferentes funções a diferentes utilizadores) e, no caso dos domínios, atualizar as informações associadas ao proprietário de um serviço (endereço postal, telefone, e-mail).
- **Técnico**: conta com permissões para gerir aspetos técnicos de um serviço;
- **Faturação**: conta com permissões para gerir aspetos relacionados com a faturação de um serviço. O responsável pela faturação recebe notificações relacionadas com a renovação do serviço, pagamentos, etc.

O Identificador (ID) de Cliente é um código pessoal. Trata-se de um <i>username</i> enviado por e-mail logo após a criação da conta de cliente. Este deve ser usado para aceder à Área de Cliente ou no contacto com os serviços OVH. O identificador é composto por duas letras, vários números e termina com -ovh (exemplo: aa123456-ovh). Quando contrata serviços OVH, este <i>username</i> é definido como contacto (gestor) dos serviços selecionados.

![Gestão de contactos](images/contactmanagement21.png){.thumbnail}

### Alterar contactos (gestores) de um serviço

Depois de aceder à página de gestão dos contactos, clique no ícone em forma de lápis. Defina os contactos do serviço, introduzindo os Identificadores de Cliente nos espaços associados a cada função (Administrador, Técnico, Faturação).

![Gestão de contactos](images/contactmanagement3.png){.thumbnail}

A seguir, irá visualizar uma mensagem numa caixa verde a confirmar o registo do seu pedido. A mensagem indica ainda que os utilizadores definidos como contactos irão receber um e-mail para confirmarem a alteração.

**Atenção**: Só pode fazer as alterações permitidas pelo seu tipo de conta.

#### Sou administrador

Enquanto administrador, pode efetuar todo o tipo de ações relacionadas com a definição dos contactos.

- Definir contactos para a gestão da faturação ou para a gestão técnica do serviço. Esta ação requer a sua confirmação e a confirmação do utilizadores indicados como novos contactos. Todos os utilizadores abrangidos por esta alteração irão receber um e-mail para confirmarem o processo.
- Recuperar as permissões de gestão técnica e/ou de faturação. O administrador pode recuperar as funções de técnico e de faturação. Para tal, terá de efetuar e confirmar a alteração. O utilizador que está para ser eliminado da lista de contactos (gestores) irá receber um e-mail para confirmar ou não a alteração.
- Definir um novo administrador. Esta ação requer a sua confirmação e a confirmação do utilizador definido como novo administrador.

**Atenção!** (1) Depois de efetuada esta ação, perde as permissões de Administrador. Só é possível associar um utilizador a cada função (contacto).
(2) O administrador pode atualizar as informações do proprietário de um serviço (endereço postal, telefone, e-mail), associado, por exemplo, a um serviço de domínios. Porém, não pode alterar o proprietário. Recomendamos toda a atenção quando efetuar estas alterações.

#### Sou o responsável (contacto) técnico

Este acesso só permite alterar o utilizador definido como contacto técnico A ação requer a sua confirmação e a confirmação do novo contacto.

#### Sou o responsável pela faturação

Este acesso só permite alterar o utilizador definido como contacto de faturação. A ação requer a sua confirmação e a confirmação do novo contacto.

**Atenção!** Esta operação só pode ser realizada se os utilizadores afetados pela alteração do contacto de faturação tiverem os pagamentos em dia.

### Gerir pedidos em curso: confirmar, recusar ou consultar uma alteração de contacto

Área de Cliente: para gerir os pedidos em curso, clique no separador `Os meus pedidos`{.action}. Aqui pode aceitar ou recusar um pedido.

![Gestão de contactos](images/contactmanagement4.png){.thumbnail}

Para tal, tem que usar o código de validação (i.e. *token*) enviado por e-mail.

**Atenção**: este código é pessoal, de utilização única e diferente para cada utilizador.

O e-mail recebido também inclui um link para a página onde poderá confirmar ou recusar o pedido de alteração. Se usar o link incluído no e-mail, o código de validação (*token*) estará automaticamente preenchido.

Se um dos contactos não tiver recebido o e-mail, é possível que o endereço associado ao perfil não esteja atualizado. Como tal, o utilizador deverá verificar o endereço de e-mail indicado perfil. Se necessário, pode modificá-lo e solicitar o reenvio do e-mail. Para isso, basta clicar em `Reenviar o pedido`{.action}.

![Gestão de contactos](images/contactmanagement5.png){.thumbnail}

Se apenas um dos contactos confirmar a alteração, será mostrada uma mensagem para informar que o pedido precisa de ser confirmado por outro utilizador. Atenção: a confirmação dos utilizadores pode demorar alguns minutos até ser atualizada na [Área de Cliente OVH](https://www.ovh.com/auth/?action=gotomanager){.external}.

![Gestão de contactos](images/contactmanagement6.png){.thumbnail}

A alteração terá efeito logo após a confirmação dos utilizadores. No final, os utilizadores envolvidos no processo irão receber um e-mail para informar que o pedido foi concretizado.

## Quer saber mais?

Fale com a nossa comunidade de utilizadores: [https://community.ovh.com/en/](https://community.ovh.com/en/).