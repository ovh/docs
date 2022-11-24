---
title: Como migrar um site e e-mails para a OVHcloud?
slug: migrar-site-para-ovh
excerpt: "Saiba como migrar o seu website, e-mails e o seu domínio para a OVHcloud sem interromper os serviços"
section: Primeiros passos
order: 08
---

**Última atualização: 24/11/2022**

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

## Objetivo

Este guia apresenta-lhe as diferentes ações a realizar para migrar o conjunto do seu website, do seu nome de domínio e dos seus endereços de e-mail para a OVHcloud, sem interrupção de serviços.

> [!warning]
>
> A OVHcloud disponibiliza serviços cuja configuração, gestão e responsabilidade lhe incumbem. Assim, deverá certificar-se de que estes funcionam corretamente.
> 
> Este manual fornece as instruções necessárias para realizar as operações mais habituais. No entanto, se encontrar dificuldades, recomendamos que recorra a um [fornecedor especializado](https://partner.ovhcloud.com/pt/). Não poderemos proporcionar-lhe assistência técnica. Para mais informações, aceda à secção ["Quer saber mais?"](#go-further) deste manual.
>

## Requisitos

- Ter acesso à gestão do nome de domínio do seu website (este deve existir há mais de 60 dias).
- Ter acesso à zona DNS (Domain Name System) ativa do seu domínio.
- Ter acesso aos ficheiros e à base de dados do seu website no seu alojamento atual.
- Dispor de dados de acesso (utilizador, palavra-passe, servidor) aos seus endereços de e-mail atuais.
- Ter acesso à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt).

## Instruções

> [!success]
>
> As instruções deste guia referem-se a vários produtos do universo Web Cloud, recomendamos que leia todos os passos em baixo **antes** de começar a migração dos seus serviços.
>

Migrar o seu website e os seus e-mails para a OVHcloud **sem interrupção de serviço** requer um procedimento preciso em 10 etapas:

- [Etapa 1: encomendar o alojamento e os endereços de e-mail na OVHcloud](#step1)
- [Etapa 2: criar e pré-configurar uma zona DNS para o seu domínio na OVHcloud](#step2)
- [Etapa 3: recuperar um backup completo do seu website](#step3)
- [Etapa 4: importar o backup do seu website para a sua oferta de alojamento OVHcloud](#step4)
- [Etapa 5: recriar os seus endereços de e-mail para a OVHcloud](#step5)
- [Etapa 6: declarar os servidores de e-mail OVHcloud na zona DNS ativa do seu domínio](#step6)
- [Etapa 7: transferir o conteúdo dos endereços de e-mail antigos para os novos endereços na OVHcloud](#step7)
- [Etapa 8: reconfigurar o software de e-mail](#step8)
- [Etapa 9: substituir os servidores DNS ativos do seu domínio pelos da OVHcloud](#step9)
- [Etapa 10: transferir o domínio para a OVHcloud](#step10)

Ao seguir estes 10 Etapas **por ordem**, não terá nenhuma interrupção do serviço para aceder ao seu website e receber os seus novos e-mails.

No entanto, dependendo do seu agente de registo, do seu fornecedor de alojamento ou do seu prestador de serviços de e-mail, é possível que estes últimos cortem o acesso aos seus antigos serviços se verificarem que o seu nome de domínio já não está configurado através das suas infraestruturas.<br>
Neste caso, pode ocorrer uma interrupção do serviço.

Se tal interrupção ocorrer, este guia será construído de forma a minimizar a sua duração.

### Etapa 1: encomendar o alojamento e os endereços de e-mail na OVHcloud <a name="step1"></a>

Várias ofertas de alojamento partilhado OVHcloud incluem uma oferta de e-mail "MX Plan". Esta oferta de e-mail permite criar endereços de e-mail com um espaço de armazenamento de 5 GB no máximo para cada endereço. Escolha a seguir as ofertas de alojamento em função da versão PHP, da versão SQL, do número de endereços de e-mail que precisa e do tamanho do seu site a migrar:

- O alojamento [Perso](https://www.ovhcloud.com/pt/web-hosting/personal-offer/) com **10 endereços de e-mail** "MX Plan"
- O alojamento [Pro](https://www.ovhcloud.com/pt/web-hosting/professional-offer/) com **100 endereços de e-mail** "MX Plan"
- O alojamento [Performance](https://www.ovhcloud.com/pt/web-hosting/performance-offer/) com **1000 endereços de e-mail** "MX Plan". Esta oferta é indicada em 4 "subofertas".
- O alojamento [Cloud Web](https://www.ovhcloud.com/pt/web-hosting/cloud-web-offer/) com **200 endereços de e-mail** "MX Plan". Esta oferta é utilizada pelos programadores de aplicações.

Depois de escolher a oferta de alojamento, se ainda não é cliente da OVHcloud, clique no botão `Encomendar`{.action} presente nas páginas comerciais acima. Siga os passos da encomenda **sem solicitar a transferência do seu nome de domínio**.

Também pode efetuar a encomenda a partir do seu [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt). Depois de estabelecer a ligação, clique na parte `Web Cloud`{.action} e, na parte superior esquerda, clique no botão `Encomendar`{.action}, e depois nos `Alojamento`{.action}. Siga as etapas da encomenda **sem solicitar a transferência do seu nome de domínio**.

Depois de validar o pagamento, a instalação do alojamento vai iniciar. Um e-mail será enviado para o seu endereço de e-mail de contacto. Este último conterá as credenciais de acesso ao espaço de armazenamento FTP (File Transfer Protocol) do seu alojamento Web.

> [!primary]
>
> A OVHcloud oferece outras ofertas de e-mail para além da oferta "MX Plan". Por exemplo, pode combinar endereços de e-mail "MX Plan" de endereços ["Email-Pro"](https://www.ovhcloud.com/pt/emails/email-pro/) e/ou contas ["Exchange"](https://www.ovhcloud.com/pt/emails/hosted-exchange/).
>

### Etapa 2 : criar e pré-configurar uma zona DNS para o seu domínio na OVHcloud <a name="step2"></a>

Quando o alojamento estiver criado, aceda à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt) e crie uma zona DNS para o seu domínio **sem "www"**. Para mais informações, consulte o nosso manual sobre a [criação de uma zona DNS na OVHcloud](https://docs.ovh.com/pt/domains/criar_uma_zona_dns_para_um_dominio_externo/).

Depois de criar a zona DNS, aceda à secção de gestão usando o nosso manual "[Editar uma zona DNS da OVHcloud](https://docs.ovh.com/pt/domains/alojamento_partilhado_como_editar_a_minha_zona_dns/)". Se não estiverem presentes, introduza as seguintes entradas:

- O seu domínio sem os "www", para o destino do tipo "MX": mx1.mail.ovh.net ".
- O seu domínio sem os "www", para o destino do tipo "MX": mx2.mail.ovh.net ".
- O seu domínio sem os "www", para o destino do tipo "MX": mx3.mail.ovh.net ".
- O seu nome de domínio sem "www", para o endereço IP de destino do tipo "A" do seu alojamento OVHcloud. Para obter o endereço IP correto, consulte o nosso guia que lista os [endereços IP dos diferentes clusters de alojamento partilhado](https://docs.ovh.com/pt/hosting/lista-dos-enderecos-ip-dos-clusters-e-alojamentos-web/).
- O seu domínio **com** os "www", para o seu domínio sem os "www", com um registo do tipo "CNAME".

**Exemplo**: Para o nome de domínio "domain.tld", o resultado deve ser o seguinte:

![hosting](images/DNSzone.png){.thumbnail}

> [!success
>
> Note os dois valores-alvo das duas primeiras entradas do tipo "NS". Elas servirão para a [etapa 9](#step9) deste manual.
>
> Estes valores correspondem aos servidores DNS associados a esta zona DNS para o seu domínio.
>

### Etapa 3 : recuperar um backup completo do seu website <a name="step3"></a>

Obtenha o conteúdo do espaço de armazenamento FTP do seu alojamento atual, assim como um backup da sua base de dados caso o seu site utilize um.

Estas operações são realizadas exclusivamente junto do seu alojador atual. Contacte-o se tiver dificuldades em recuperar um backup completo do seu website.

#### Etapa 4 : importar o backup do seu website para a sua oferta de alojamento OVHcloud <a name="step4"></a>

Para importar o backup do espaço de armazenamento FTP do antigo fornecedor, [aceda ao espaço de armazenamento FTP do seu alojamento OVHcloud](https://docs.ovh.com/pt/hosting/aceder-espaco-de-armazenamento-ftp-alojamento-web/) e elimine o backup da pasta raiz "www" (ou de outra pasta raiz que tenha criado).

Recomendamos que utilize o software [FileZilla](https://docs.ovh.com/pt/hosting/partilhado_guia_de_utilizacao_do_filezilla/) para transferir o seu backup FTP para o seu alojamento.

Se o seu ficheiro de backup estiver comprimido (zipado), descomprima-o numa pasta vazia no seu computador antes de transferir os seus ficheiros para o alojamento OVHcloud.

Para o backup da sua base de dados, [crie uma nova base de dados](https://docs.ovh.com/pt/hosting/criar-base-de-dados/) e depois [importe o seu backup para a sua nova base de dados](https://docs.ovh.com/pt/hosting/partilhado_guia_de_importacao_de_uma_base_de_dados_mysql/).

> [!primary]
>
> A OVHcloud oferece servidores de base de dados CloudDB. Se pretender utilizar esta oferta com o seu website, consulte toda a nossa documentação sobre este produto na nossa página dedicada <https://docs.ovh.com/pt/clouddb/>.
>

De seguida, associe a sua base de dados OVHcloud ao ficheiro de configuração do seu site presente no espaço de armazenamento FTP do seu alojamento OVHcloud.
Para isso, substitua as informações de ligação da sua antiga base de dados pelas da sua nova base de dados OVHcloud. Estas informações estão disponíveis no ficheiro de configuração/ligação à base de dados do seu website.

> [!success]
>
> Para ligar a sua nova base de dados se utiliza um Content Management System (CMS) como WordPress, Joomla!, Drupal ou PrestaShop, encontre as informações sobre os seus ficheiros de configuração a partir do **etapa 2** do guia "[modificação da palavra-passe de uma base de dados](https://docs.ovh.com/pt/hosting/alterar-palavra-passe-base-de-dados/)".
>

Declare/autorize o seu domínio externo no seu alojamento web da OVHcloud através do nosso guia "[gestão dos multi-sites de um alojamento web da OVHcloud](https://docs.ovh.com/pt/hosting/multisites-configurar-um-multisite-no-meu-alojamento-web/)". Declare o "nome" da pasta raiz que escolheu no início da [etapa 4](#step4). Relembramos que esta é a pasta na qual colocou os seus ficheiros no seu espaço de armazenamento FTP.

> [!warning]
>
> **A realização desta operação é crucial**, o seu website não será apresentado enquanto não tiver indicado os elementos corretos. Respeite em especial a sintaxe da entrada DNS "TXT".
>
> Uma vez que o seu domínio ainda não está na OVHcloud, deverá adicionar uma entrada DNS do tipo "TXT" ao "token OVHcontrol" e alterar o apontamento do tipo "A" do seu domínio. Isto diretamente na zona DNS ativa o seu nome de domínio no seu fornecedor atual.
>
> Faça o mesmo para o seu subdomínio em "www".
>
> Se necessário, entre em contacto com o atual gestor da zona DNS para efetuar esta operação.
>

**Exemplo**: para o domínio "domain.tld":

![hosting](images/DNSmultisite.png){.thumbnail}

**A alteração das entradas DNS "A", "CNAME" e "TXT" deve ser efetuada junto do atual fornecedor DNS do seu domínio e requer um tempo de propagação de 4 a 24 horas, no máximo, antes de ficar totalmente efetivo.**

Após a propagação DNS, o site que irá aparecer com o seu domínio será o alojado na OVHcloud.

### Etapa 5 : recriar os seus endereços de e-mail para os mesmos na OVHcloud <a name="step5"></a>

Recrie de forma idêntica os endereços de e-mail presentes no seu fornecedor de e-mail através do nosso guia sobre a [criação de endereços de e-mail "MX Plan"](https://docs.ovh.com/pt/emails/e-mail_partilhado_guia_de_criacao_de_um_endereco_de_e-mail/).

Se optou por uma solução "Email Pro" ou "Exchange", consulte o nosso manual para criar os seus endereços de e-mail:

- Para "Email-Pro": <https://docs.ovh.com/pt/emails-pro/configuracao-inicial/>
- Para "Exchange": <https://docs.ovh.com/pt/microsoft-collaborative-solutions/exchange_20132016_a_primeira_configuracao_do_servico/>

### Etapa 6 : declarar os servidores de e-mail OVHcloud na zona DNS ativa do seu nome de domínio <a name="step6"></a>

Esta etapa consiste em efetuar a alteração dos servidores de e-mail "MX" na zona DNS ativa do seu domínio.
Isto irá permitir que receba novos e-mails nos novos endereços de e-mail da OVHcloud.

Substitua (sem deixar as antigas entradas) as suas antigas entradas "MX" pelo seguinte:

- O seu domínio (sem "www") para o destino do tipo "MX": mx1.mail.ovh.net ".
- O seu domínio (sem "www") para o destino do tipo "MX": mx2.mail.ovh.net ".
- O seu domínio (sem "www") para o destino do tipo "MX": mx3.mail.ovh.net ".

A alteração dos servidores "MX" efetua-se junto do fornecedor DNS atual do seu nome de domínio e requer um tempo de **propagação de 4 a 24 horas**, no máximo, antes de ser totalmente efetivo.<br>
Isto significa que, durante a propagação DNS da modificação, os seus e-mails serão recebidos cada vez menos nos seus antigos endereços de e-mail e cada vez mais nos seus novos endereços de e-mail OVHcloud.<br>
Depois de finalizar a propagação, todos os novos e-mails recebidos serão recebidos nos seus endereços de e-mail OVHcloud.

Sugerimos que altere as entradas "MX" **antes** de efetuar a migração do conteúdo dos endereços de e-mail.
Este método permite evitar uma migração adicional para os poucos e-mails recebidos nos endereços de e-mail antigos durante a propagação do DNS.

### Etapa 7 : transferir o conteúdo dos endereços de e-mail antigos para os novos endereços OVHcloud <a name="step7"></a>

Após a propagação DNS, os seus novos e-mails foram todos recebidos nos seus novos endereços de e-mail. No entanto, os seus antigos e-mails continuam registados no seu antigo servidor de e-mail.

Para migrar o conteúdo dos endereços antigos, existem duas opções.

**Opção 1**: utilize a nossa ferramenta [OVHcloud Mail Migrator (OMM)](https://omm.ovh.net/) {.external} que permite copiar o conteúdo dos endereços de e-mail registados no seu antigo fornecedor para os criados na OVHcloud. Para mais informações, consulte o nosso manual "[Migrar contas de e-mail via OVH Mail Migrator](https://docs.ovh.com/pt/microsoft-collaborative-solutions/exchange-migracao-de-contas-email-ovh-mail-migrator/)".

Sugerimos que não utilize o `Tipo de servidor`{.action} **POP** na parte `Conta source`{.action}. Este protocolo apaga os e-mails do seu antigo servidor para os enviar para o servidor OVHcloud de destino. Neste caso, já não poderá comparar o conteúdo do antigo e do novo endereço de e-mail.

Para a parte `Conta de destino`{.action}, introduza apenas o endereço de e-mail OVHcloud em questão e a respetiva palavra-passe. Isto permitindo o `Type de servidor`{.action} em `Hosted by OVH (Autodetect)`{.action}.

Terminada a migração, aceda ao endereço de e-mail da OVHcloud usando o [webmail OVHcloud](https://www.ovhcloud.com/pt/mail/) para verificar que todos os seus e-mails estão presentes na nova conta.

Repita a operação para o conjunto das suas contas de e-mail.

> [!primary]
>
> Deve possuir os dados de acesso de todas as contas de e-mail antigas bem como o nome do servidor de e-mail do seu antigo prestador de serviços para realizar esta ação.
>
> Se os seus endereços de e-mail foram configurados em POP sem conservar cópias dos e-mails no seu antigo servidor de e-mail, ou se dispõe dos e-mails registados "localmente" nos seus dispositivos, só poderá realizar a **opção 2**.
>

**Opção 2**: faça um backup do conteúdo dos seus endereços de e-mail com a ajuda de um software de mensagens (Outlook, Mail de Mac,...), reconfigure o seu software de e-mail e depois importe o backup para o seu novo endereço de e-mail OVHcloud.

### Etapa 8 : reconfigurar os seus softwares de e-mail <a name="step8"></a>

Depois de migrar os seus antigos endereços de e-mail para a OVHcloud, reconfigure os seus softwares de e-mail com a ajuda de todos os nossos guias sobre o assumpto.

#### Para as contas de e-mail "MX Plan": 

- Encontre os parâmetros de configuração no nosso guia "[Generalidades sobre os e-mails MX Plan](https://docs.ovh.com/pt/emails/partilhado_generalidades_e-mail_partilhado_ovh/#2-utilizar-o-software-a-sua-escolha)". Além disso, poderá encontrar links para os guias de configuração personalizados para os principais softwares de e-mail.

#### Para as contas "Email-Pro" :

- Encontre os nossos guias de ajuda à configuração nas secções `Configuration on computador` e 'Configuration no smartphone` de [o nosso manual na oferta Email-Pro](https://docs.ovh.com/pt/emails-pro/).

#### Para as contas de e-mail "Exchange" :

- Encontre os nossos guias de ajuda à configuração nas secções `Configuration Exchange no computador` e `Configuration Exchange no smartphone` de [a nossa documentação sobre a oferta Exchange](https://docs.ovh.com/pt/microsoft-collaborative-solutions/).

### Etapa 9: substituir os servidores DNS ativos do seu domínio pelos da OVHcloud <a name="step9"></a>

A zona DNS pré-configurada na[etapa 2](#step2) ainda não é aplicada ao seu domínio.

Substitua os servidores DNS atuais do seu domínio pelos dois servidores DNS declarados na zona DNS da OVHcloud.

> [!warning]
>
> A alteração dos servidores DNS deve ser efetuada a partir do agente de registo atual do seu nome de domínio e requer um tempo de **propagação de 24 a 48 horas**, no máximo, antes de ficar totalmente efetivo.
>

### Etapa 10 : transferir o domínio para a OVHcloud <a name="step10"></a>

Depois de finalizar a propagação DNS, teste o seu site e verifique o envio e a receção dos e-mails a partir dos seus endereços de e-mail.
Se tudo estiver em ordem, desbloqueie o seu nome de domínio e recupere o seu "código de transferência", "EPP" ou "AuthCode" a partir do seu agente de registo atual.

De seguida, transfira o domínio para a OVHcloud através do nosso manual sobre a [transferência de um domínio](https://docs.ovh.com/pt/domains/transferir-o-dominio-generico/).

Uma vez concluída a transferência dos seus dados e serviços, só precisa de rescindir os seus antigos serviços no(s) seu(s) antigo(s) fornecedor(es).

## Quer saber mais? <a name="go-further"></a>

[Generalidades sobre os e-mails partilhados](https://docs.ovh.com/pt/emails/partilhado_generalidades_e-mail_partilhado_ovh/).

[Generalidades sobre os servidores DNS](https://docs.ovh.com/pt/domains/partilhado_generalidades_sobre_os_servidores_dns/).

[Criar um endereço de e-mail partilhado](https://docs.ovh.com/pt/emails/e-mail_partilhado_guia_de_criacao_de_um_endereco_de_e-mail/).

[Importação de uma base de dados MySQL](https://docs.ovh.com/pt/hosting/partilhado_guia_de_importacao_de_uma_base_de_dados_mysql/).

[Gestão de uma base de dados a partir de um alojamento partilhado](https://docs.ovh.com/pt/hosting/criar-base-de-dados/).

Para serviços especializados (referenciamento, desenvolvimento, etc), contacte os [parceiros OVHcloud](https://partner.ovhcloud.com/pt/).

Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](https://www.ovhcloud.com/pt/support-levels/).

Fale com nossa comunidade de utilizadores: <https://community.ovh.com/en/>.