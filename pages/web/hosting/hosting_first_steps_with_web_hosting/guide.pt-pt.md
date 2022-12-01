---
title: "Alojamento web: primeira utilização"
slug: os_primeiros_passos_com_um_alojamento_web
excerpt: Saiba como usar e gerir um alojamento web (primeira utilização)
section: Primeiros passos
order: 02
---

**Última atualização: 14/11/2022**

## Sumário

O alojamento web da OVHcloud oferece várias possibilidades de utilização e configuração. Esta guia introdutório contém informação para começar a tirar partido dessas possibilidades. 

**Siga as instruções para saber como usar e gerir um alojamento web.**

## Requisitos

- Ter um serviço de [alojamento web OVHcloud](https://www.ovhcloud.com/pt/web-hosting/){.external}.
- Ter recebido o e-mail com a confirmação da instalação do alojamento web.
- Ter um [domínio](https://www.ovhcloud.com/pt/domains/){.external} (endereço que permite identificar e aceder ao seu site).
- Ter acesso à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}.

## Instruções

### 1 - Tipo de Projeto: Criar ou Transferir um Site.

O alojamento web OVHcloud permite criar um site novo com toda a facilidade, ou alojar um já existente. Pretende partilhar um hobby ou promover uma atividade profissional? Criar um blogue ou uma loja online? Migrar um site para a OVH? Neste guia existem opções para vários tipos de projeto.

- **Criação de um site**

 Os sites podem ser criados de forma «manual», usando código web e programação, ou através de um CMS (Content Management System), a solução mais rápida e fácil. A primeira opção é mais complexa e morosa, mas permite criar um projeto original, concebido de raiz para necessidades específicas. A segunda assenta na utilização de um CMS, que disponibiliza modelos de site personalizáveis prontos a usar. Esta opção dispensa qualquer competência técnica.

Na Área de Cliente existe uma ferramenta que permite instalar um CMS com 1 clique. O cliente pode optar entre vários CMS: WordPress, PrestaShop, Drupal e Joomla!. Se tiver dúvidas relativamente à escolha do CMS, veja esta [análise comparativa](https://www.ovhcloud.com/pt/web-hosting/uc-cms-comparison/){.external} e selecione a opção mais adequada para um blogue, um site normal, uma loja online... Se o CMS pretendido não estiver disponível para instalação automática (através dos Módulos 1 clique), pode instalá-lo de forma manual.

- **Transferir um site para a OVH**

A transferência de um site é um procedimento um pouco mais complicado, sobretudo para um projeto que já está *online*, cujo acesso não pode ser interrompido. Este guia contém algumas instruções para ajudar a transferir um site para a OVHcloud. Para mais informação sobre a transferência de um site, consulte o guia (em francês) [Transferir o meu site para a OVHcloud](https://docs.ovh.com/pt/hosting/migrar-site-para-ovh/){.external} (versão PT disponível em breve).

### 2 - Instalar CMS ou Transferir um site

Nesta secção vai aprender a colocar o site no alojamento. A secção 4 (Domínios) mostra como colocar um site online. Para colocar o site no alojamento, existem três opções adequadas a diferentes necessidades e competências técnicas.

#### Módulos 1 clique: instalar CMS de forma automática

Os módulos 1 clique da OVHcloud permitem instalar um CMS de forma simples e rápida. O sistema OVHcloud instala o CMS de forma automática e envia um e-mail com o link e os dados de acesso à interface de criação e gestão do site.

Antes continuar, certifique-se que a pasta de instalação está vazia e que o sistema pode criar uma nova base de dados. Na primeira utilização do alojamento, esta verificação não é necessária. Aceda à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external} para instalar o módulo CMS. Clique em `Alojamentos`{.action} e, de seguida, no nome do alojamento web que contratou. Depois, nos `Módulos 1 clique`{.action}, clique no botão `Adicionar um módulo`{.action}.

![Acesso aos módulos 1 clique](images/access_to_the_1_click_modules_section.png){/thumbnail}

Para iniciar a instalação, selecione o CMS pretendido. Certifique-se que a `Instalação em modo avançado`{.action} não está selecionada. Agora clique no botão `Instalar`{.action}.

Após alguns minutos, irá receber um e-mail de confirmação da instalação, com os dados de acesso ao CMS. Já pode criar e gerir o seu site. Depois, poderá prosseguir com os passos indicados nas secções abaixo: Criar endereços de e-mail; Domínios.

Para mais informações sobre os módulos 1 clique, consulte o guia: [Como instalar um CMS para criar um site](https://docs.ovh.com/pt/hosting/partilhado_guias_dos_modulos_dos_alojamentos_partilhados/){.external}.

#### Módulos 1 clique: criar e selecionar uma base de dados de forma manual

No modo de instalação simples, o Módulo 1 clique instala automaticamente o CMS e a respetiva base de dados. Se preferir criar e selecionar manualmente uma base de dados, escolha a instalação avançada. Atenção! (1) A instalação avançada requer a configuração de alguns aspetos importantes para o funcionamento do CMS e da base de dados. (2) As ofertas de Alojamento OVHcloud permitem criar um número limitado de bases de dados. É possível adicionar bases de dados extra, mas estas serão pagas à parte.

Para instalar o módulo no modo avançado, certifique-se que:

- a pasta de instalação do CMS está vazia; 
- já tem uma base de dados criada no sistema.

Para verificar ou criar uma bases de dados, aceda à [Área de Cliente](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}. Clique em `Alojamentos`{.action} e selecione o alojamento web que contratou. Selecione `Bases de dados`{.action}. Se não tiver nenhuma base de dados criada, clique no botão `Criar uma base de dados`{.action}. Siga as instruções, e aguarde a conclusão da instalação.

![Acesso aos módulos 1 clique](images/create_a_database.png){/thumbnail}

Depois de criar a base de dados, selecione `Módulos 1 clique`{.action}, e clique no botão `Adicionar um módulo`{.action}. Selecione o CMS, certifique-se que a ` instalação em modo avançado`{.action} está selecionada. Clique no botão `Seguinte`{.action}:

![Acesso aos módulos 1 clique](images/access_to_the_1_click_modules_section.png){/thumbnail}

Siga as instruções e aguarde a conclusão da instalação. No final, irá receber o e-mail de confirmação da instalação, com os dados de acesso ao CMS.

Se desejar mais informação sobre o processo, consulte o guia: [Como instalar um CMS para criar um site](https://docs.ovh.com/pt/hosting/partilhado_guias_dos_modulos_dos_alojamentos_partilhados/){.external}.

#### Transferência de um site já criado.

Nesta situação, precisa de ter acesso aos ficheiros do site que irá transferir para o alojamento OVHcloud. De seguida, terá de aceder ao espaço de alojamento, e efetuar a transferência dos ficheiros para a pasta correta. Se necessário, terá de associar o site a uma base de dados previamente criada.

Atenção! Este processo pode variar de acordo com o tipo de site. Se precisar de mais informação, consulte os guias: [Colocar um site online](https://docs.ovh.com/pt/hosting/partilhado_colocar_o_meu_website_online/){.external} e [Transferir um site para a OVHcloud](https://docs.ovh.com/pt/hosting/migrar-site-para-ovh/){.external} (versão PT disponível em breve). O site está no alojamento OVHcloud. Se quiser usar a solução de e-mail incluída no serviço, siga as instruções abaixo. Senão, passe à secção: **Domínios: Consultar, Verificar e Alterar dados DNS**.

### 3 - Criar endereços de e-mail

A utilização dos serviços de e-mail incluídos no [alojamento web](https://www.ovhcloud.com/pt/web-hosting/){.external} é opcional. Para criar e usar um ou vários endereços de e-mail associados ao seu domínio, aceda à [Área de Cliente](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}. Selecione `E-mails`{.action} e clique no alojamento contratado. No separador`E-mails`{.action}, clique no botão `Criar um endereço de e-mail`{.action}.

![Criar um endereço de e-mail](images/create_an_email_address.png){/thumbnail}

Siga as instruções e insira a informação necessária. Repita este passo para criar mais endereços. Pretende transferir as suas mensagens de e-mail para a OVH? Use o [OVH Mail Migrator](https://omm.ovh.net/){.external}, e siga as instruções apresentadas. 

Para mais informações, consulte o guia: [Como criar um endereço de e-mail](https://docs.ovh.com/pt/emails/e-mail_partilhado_guia_de_criacao_de_um_endereco_de_e-mail/){.external} e [Transferir o meu site para a OVHcloud](https://docs.ovh.com/pt/hosting/migrar-site-para-ovh/){.external} (Versão PT disponível em breve).

### 4 - Domínios: Consultar, Verificar e Alterar dados DNS

Por esta altura, o seu site está alojado nos serviços OVHcloud e os endereços de e-mail estão criados. Contudo, para que o site fique *online* e o serviço de e-mail possa funcionar, precisa de configurar o domínio (ou subdomínio). Essa configuração passa, por exemplo, por associar um domínio a um endereço IP na Zona DNS.

Quando um internauta usa um browser para aceder ao site, o seu domínio (e.g. www.meudominio.pt) é «convertido» para o endereço IP do servidor onde o site está localizado. Este processo, designado de resolução DNS, permite que o navegador consiga «encontrar» os ficheiros do *site* no serviço de alojamento, e apresentar o site no ecrã do dispositivo (e.g. computador, smartphone).  

Se adquiriu um domínio juntamente com o serviço de alojamento OVHcloud, e não alterou a configuração da zona DNS, passe à secção **Personalizar o seu Site com um CMS**. Caso contrário, ou se não tiver a certeza, siga as instruções abaixo.

#### Consultar registos DNS do alojamento OVHcloud 

Existem dois registos DNS (campos A e MX) que permitem aceder ao seu site e receber mensagens destinadas ao seu endereço de e-mail. 

- **Campo A (acesso ao site)**

Para consultar o campo A, e os dados que deve usar na zona DNS, aceda à [Área de Cliente](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}. Selecione `Alojamentos`{.action}, e clique no alojamento contratado. De seguida, em `Informações gerais`{.action}, tome nota do endereço IP indicado para «IPv4».

![Alterar o campo A](images/know_the_OVH_A_records.png){/thumbnail}

- **Campos MX (receção de e-mail)**

Para consultar os campos MX, e os dados que deve usar na zona DNS, aceda à [Área de Cliente](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}. Selecione `E-mails`{.action} e clique no alojamento web contratado. De seguida, clique em `Informações gerais`{.action}, e tome nota das informações indicadas para os «Campos MX». Estes campos podem diferir entre serviços, em função da filtragem DNS selecionada na área de gestão do alojamento.

![Alterar os campos MX](images/know_the_OVH_MX_records.png){/thumbnail}

#### Verificar e/ou alterar os registos DNS

Agora que sabe os registos DNS associados ao seu alojamento web OVHcloud, pode verificar e alterar os campos A e MX. Atenção! As configurações podem variar em função do tipo de site.

- **Subscrição conjunta de um domínio e de um alojamento web OVH**

Neste caso, a configuração do seu domínio foi efetuada de forma automática. Passe à secção 5 para **Criar e Personalizar o site com um CMS**. Se tiver alterado por engano a informação na zona DNS do seu domínio, deverá introduzir os dados corretos.
    
Para aceder à zona DNS do seu domínio, aceda à [Área de cliente ](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}. Selecione `Domínios`{.action}, e clique no domínio que pretende configurar. Selecione `Zona DNS`{.action}, verifique e altere as informações necessárias.

- **Domínio que não usa a zona DNS da OVH**
    
Se o seu domínio estiver associado a uma zona DNS alojada noutro prestador de serviços, deverá verificar a zona DNS no sistema disponibilizado por esse agente. Se necessário, efetue a devidas alterações.

- **Transferir serviços (sites e e-mail) para a OVH**

Após a transferência do site para o alojamento OVHcloud, terá que alterar os campos DNS. Neste tipo de situação, se as configurações DNS não forem executados de forma correta, os serviços (site ou e-mail) podem ficar indisponíveis. Como tal, deverá seguir as instruções indicadas no guia: [Transferir o meu site para a OVHcloud](https://docs.ovh.com/pt/hosting/migrar-site-para-ovh/){.external} (versão PT disponível em breve).

> [!primary]
>
> A propagação das alterações efetuadas na zona DNS pode demorar até 24 horas.
>

### 5 - Personalizar o Site com um CMS

Instalou um CMS com um dos Módulos 1 Clique e recebeu um e-mail com os dados do utilizador. A partir de agora, pode aceder à interface de gestão do CMS e começar a personalizar o site. Escolha o tema (o design), altere as cores, o tipo de letra, adicione conteúdos...  Se tiver dúvidas sobre as funcionalidades, aceda ao site oficial do CMS. Aí poderá encontrar toda a informação necessária.

### 6 - Usar o Serviço de E-mail

Os seus endereços de e-mail podem ser usados com o Roundcube, um serviço de webmail incluído na oferta de alojamento OVHcloud. Aceda a <https://www.ovhcloud.com/pt/mail/>, e preencha os dados associados ao endereço de e-mail criado através do sistema OVHcloud.

Para saber mais sobre o RoundCube, consulte o guia: [Utilização do RoundCube](https://docs.ovh.com/pt/emails/webmail_guia_de_utilizacao_do_roundcube/){.external}. Se desejar associar o seu endereço de e-mail a um software (cliente) de correio eletrónico no computador, smartphone ou um tablet, consulte a página:<https://docs.ovh.com/pt/emails/>.

## Quer saber mais? Veja os guias abaixo

[Transferir o meu site para a OVHcloud](https://docs.ovh.com/pt/hosting/migrar-site-para-ovh/){.external} (Versão PT disponível em breve)

[Colocar o meu *site* online](https://docs.ovh.com/pt/hosting/partilhado_colocar_o_meu_website_online/){.external}

[Instalar um CMS com os Módulos 1 clique](https://docs.ovh.com/pt/hosting/partilhado_guias_dos_modulos_dos_alojamentos_partilhados/){.external}

[Como criar um endereço de e-mail](https://docs.ovh.com/pt/emails/e-mail_partilhado_guia_de_criacao_de_um_endereco_de_e-mail/){.external}

[Utilização do RoundCube](https://docs.ovh.com/pt/emails/webmail_guia_de_utilizacao_do_roundcube/){.external}

Ou fale com a nossa comunidade de utilizadores: <https://community.ovh.com/en/>.