---
title: 'Como gerir os contactos (gestores) dos serviços OVHcloud'
slug: gestao_dos_contactos
excerpt: 'Saiba como definir ou alterar os contactos (gestores) dos serviços OVHcloud'
section: Introdução
order: 6
---

**Última atualização no dia 13/12/2021**

## Objetivo

A maioria dos serviços OVHcloud são geridos por vários contactos. Cada um desses contactos encontra-se associado a um nome de utilizador. 

**Saiba como definir ou alterar os contactos (gestores) dos serviços OVHcloud.**

> [!warning]
>
> A responsabilidade sobre a configuração e a gestão dos serviços que a OVHcloud disponibiliza recai sobre o utilizador. Assim, deverá certificar-se de que estes funcionam corretamente.
>
> Este manual fornece as instruções necessárias para realizar as operações mais habituais. No entanto, se encontrar dificuldades, recomendamos que recorra a um prestador de serviços especializado e/ou que contacte o editor do serviço. Não poderemos proporcionar-lhe assistência técnica. Para mais informações, aceda à secção [Quer saber mais?](#gofurther).
>

## Definição

Há três tipos de contactos:

- **Administrador**: conta com permissões para gerir todos os aspetos do serviço (administrativos, técnicos e faturação). Permite definir os contactos (atribuir diferentes funções a diferentes utilizadores) e, no caso dos domínios, atualizar as informações associadas ao proprietário de um serviço (endereço postal, telefone, e-mail).
- **Técnico**: conta com permissões para gerir aspetos técnicos de um serviço.
- **Faturação**: conta com permissões para gerir aspetos relacionados com a faturação de um serviço. O responsável pela faturação recebe notificações relacionadas com a renovação do serviço, pagamentos, etc. 

O Identificador de Cliente (ID) é um código pessoal. Trata-se de um nome de utilizador enviado por e-mail logo após a criação da conta de cliente. Este deve ser usado para aceder à Área de Cliente ou no contacto com os serviços OVHcloud. Costuma ser composto por duas letras iniciais, seguidas de algarismos, e termina com «-ovh». Por exemplo: **xx11111-ovh**. Quando contrata serviços OVHcloud, este nome de utilizador é definido como contacto (gestor) dos serviços selecionados.

![Gestão de contactos](images/managing_contacts_scheme.png){.thumbnail}


## Requisitos

- Estar ligado à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}.
- Ter as permissões de acesso necessárias para este tipo de operação.
- Ter acesso ao Identificador de Cliente (ID de Cliente) do utilizador que irá ser definido como contacto.
- Todos os utilizadores envolvidos na alteração de um contacto devem ter acesso à conta de e-mail associada aos seus perfis.
- O antigo e o novo contacto faturação devem ter os pagamentos em dia.

## Instruções

### Aceder à área de gestão dos contactos <a name="gestion_des_contacts"></a>

Aceda à sua [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}, clique no nome do cliente no canto superior direito e, em seguida, clique em `Gestão dos contactos`{.action}.

![Gestão de contactos](images/hubcontacts.png){.thumbnail}

Irá visualizar uma tabela. A tabela inclui a lista de serviços associados ao seu ID de cliente, e a lista dos contactos responsáveis pela gestão dos vários aspetos do serviço.

![Gestão de contactos](images/managing_contacts_02.png){.thumbnail}


### Alterar contactos (gestores) de um serviço

Na página de gestão dos contactos, clique em `...`{.action} à direita do serviço a alterar e, a seguir, em `Modificar os contactos`{.action}. Faça as alterações desejadas e, a seguir, clique em `Validar`{.action}.

![Gestão de contactos](images/managing_contacts_03.png){.thumbnail}

![Gestão de contactos](images/managing_contacts_04.png){.thumbnail}

Os contactos implicados no processo de modificação vão receber um e-mail para confirmarem a alteração.

> [!warning]
>
> Não será permitida qualquer alteração de contacto se a antiga ou a nova conta de cliente em causa tiver uma ou mais faturas em dívida.
>

#### Sou administrador <a name="administrateur"></a>

Enquanto administrador, pode efetuar todo o tipo de ações relacionadas com a definição dos contactos.

- Definir contactos para a gestão da faturação ou para a gestão técnica do serviço. Esta ação requer a sua confirmação e a confirmação do utilizadores indicados como novos contactos. Todos os utilizadores abrangidos por esta alteração irão receber um e-mail para confirmarem o processo.
- Recuperar as permissões de gestão técnica e/ou de faturação. O administrador pode recuperar as funções de técnico e de faturação. Para tal, terá de efetuar e confirmar a alteração. O utilizador que está para ser eliminado da lista de contactos (gestores) irá receber um e-mail para confirmar ou não a alteração. 
- Definir um novo administrador. Esta ação requer a sua confirmação e a confirmação do utilizador definido como novo administrador. 

#### Sou o responsável (contacto) técnico <a name="technique"></a>

Este acesso só permite alterar o utilizador definido como contacto técnico A ação requer a sua confirmação e a confirmação do novo contacto.

#### Sou o responsável pela faturação

Este acesso só permite alterar o utilizador definido como contacto de faturação. A ação requer a sua confirmação e a confirmação do novo contacto.

### Gerir pedidos em curso: confirmar, recusar ou consultar uma alteração de contacto

Área de Cliente: para gerir os pedidos em curso, clique no separador `Os meus pedidos`{.action}. Aqui pode aceitar ou recusar um pedido.

![Gestão de contactos](images/managing_contacts_05.png){.thumbnail}

Para tal, tem que usar o código de validação (i.e. <i>token</i>) enviado por e-mail.

> [!primary]
> Este código é pessoal, de utilização única e diferente para cada utilizador.

O e-mail recebido também inclui um link para a página onde poderá confirmar ou recusar o pedido de alteração. Se usar o link incluído no e-mail, o código de validação (<i>token</i>) estará automaticamente preenchido.

Se um dos contactos não tiver recebido o e-mail, é possível que o endereço associado ao perfil não esteja atualizado. Como tal, o utilizador deverá verificar o endereço de e-mail indicado perfil. Se necessário, pode modificá-lo e solicitar o reenvio do e-mail. Para isso, basta clicar em `Reenviar o pedido`{.action}.

![Gestão de contactos](images/managing_contacts_06.png){.thumbnail}

Se apenas um dos contactos confirmar a alteração, será mostrada uma mensagem para informar que o pedido precisa de ser confirmado por outro utilizador. A confirmação dos utilizadores pode demorar alguns minutos até ser atualizada na [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}.

![Gestão de contactos](images/managing_contacts_007.png){.thumbnail}

A alteração de contacto será efetiva alguns minutos após a validação do pedido pelos dois contactos. De seguida, receberão um e-mail a informá-los de que o pedido foi tratado.

### Exemplo: dar ao webmaster a gestão técnica do seu website

Acaba de subscrever uma subscrição da OVHcloud que permite criar a sua própria [loja online](https://www.ovhcloud.com/pt/web-hosting/ecommerce-website/). Apelou a um dos nossos [parceiros](https://partner.ovhcloud.com/pt/directory/) e ele pede-lhe os direitos de acesso aos seus serviços OVHcloud para começar a criar o seu site.

> [!warning]
>
> Desaconselhamos que dê a qualquer terceiro as credenciais de acesso à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt).
>

Neste caso, dê ao seu fornecedor o direito de "[contacto técnico](#gestion_des_contacts)" no seu alojamento OVHcloud. Este acesso permitir-lhe-á efetuar as operações necessárias para que o seu site seja colocado online (adição de um domínio ou subdomínio no multi-site, instalação de um módulo 1 clique, modificação da palavra-passe FTP ou da base de dados, criação de um certificado SSL, etc).

Se o seu domínio não estiver associado ao seu alojamento e pretender confiar as operações necessárias ao webmaster, também deverá ter o direito de "[contacto técnico](#gestion_des_contacts)" na [zona DNS](https://docs.ovh.com/pt/domains/alojamento_partilhado_como_editar_a_minha_zona_dns/) do seu domínio.

O direito "[contacto técnico](#gestion_des_contacts)" não permite modificar os contactos de administrador ou faturação de um serviço. Ele não dará ao seu webmaster os acessos às suas faturas ou encomendas, à renovação dos seus serviços ou aos seus métodos de pagamento. Também não lhe permitirá efetuar a [transferência da gestão do seu nome de domínio](https://docs.ovh.com/pt/domains/transferencia_de_saida_de_um_nome_de_dominio_generico_ou_geografico/) para outro alojador ou [mudar o seu proprietário](https://docs.ovh.com/pt/domains/alteracao-titular-dominio/).

Enquanto [contacto administrador](#administrateur), poderá finalmente recuperar o "[contacto técnico](#technique)" do seu serviço a qualquer momento.

### Caso específico de um proprietário de domínio

Aquando da encomenda de um serviço OVHcloud, definiu um proprietário para este. Se não tiver acesso às contas OVHcloud associadas ao serviço que pretende recuperar, o proprietário poderá ceder a propriedade de um domínio a um terceiro, ou recuperar a administração do domínio, através dos seguintes procedimentos:

[Mudar o proprietário de um serviço](https://www.ovh.com/cgi-bin/pt/procedure/procedureChangeOwner.cgi)

[Modificar os contactos administrativo, facturação e técnico do seu domínio](https://www.ovh.com/fr/cgi-bin/pt/procedure/procedureChangeContacts.cgi)

O acompanhamento de cada procedimento é efetuado por e-mail e será necessária uma verificação de identidade. As instruções detalhadas ser-lhe-ão fornecidas durante todo o processo.

## Quer saber mais?

Para serviços especializados (referenciamento, desenvolvimento, etc), contacte os [parceiros OVHcloud](https://partner.ovhcloud.com/pt/directory/).

Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, convidamo-lo a consultar as nossas diferentes [ofertas de suporte](https://www.ovhcloud.com/pt/support-levels/).

Fale com a nossa comunidade de utilizadores: [https://community.ovh.com/en/](https://community.ovh.com/en/).
