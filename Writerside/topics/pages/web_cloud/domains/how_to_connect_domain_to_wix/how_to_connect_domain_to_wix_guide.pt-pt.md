---
title: Como ligar um domínio OVHcloud a um alojamento Wix
excerpt: Prepare e configure a zona DNS do seu domínio OVHcloud para a ligar a um alojamento Wix
updated: 2024-04-17
---

## Objetivo

Se possui um nome de domínio na OVHcloud, deseja ligá-lo a um alojamento Wix. Neste guia, encontrará as etapas de preparação e de configuração da sua zona DNS da OVHcloud para permitir a configuração do seu alojamento Wix.

**Saiba como ligar o seu domínio OVHcloud a um alojamento Wix**

> [!warning]
>
> - O suporte Wix não tem acesso aos parâmetros do seu nome de domínio OVHcloud e não pode, por isso, aconselhá-lo sobre as informações que deverá fornecer.
>
> - A responsabilidade sobre a configuração e a gestão dos serviços que a OVHcloud disponibiliza recai sobre o utilizador. Assim, deverá certificar-se de que estes funcionam corretamente.<br><br> Este guia fornece as instruções necessárias para realizar as operações mais habituais. No entanto, se encontrar dificuldades, recomendamos que recorra a um [prestador de serviços especializado](partner.) e/ou que contacte o editor do serviço. Não poderemos proporcionar-lhe assistência técnica. Para mais informações, consulte a secção [Quer saber mais](how_to_connect_domain_to_wix_#gofurther.)? deste guia.
>

## Requisitos

- Ter acesso à [Área de Cliente OVHcloud](manager.){.external}.
- Ter um [nome de domínio](domains.){.external} registado na OVHcloud.
- Dispor das [autorizações adequadas para gerir](managing_contacts1.) o nome de domínio a partir da sua [Área de Cliente OVHcloud](manager.){.external}.
- Ter um alojamento na Wix.
- Ter acesso à gestão deste alojamento na Wix.

## Instruções

Antes de seguir as duas etapas deste manual, deve familiarizar-se com a configuração de uma zona DNS através do nosso manual « [Editar uma zona DNS da OVHcloud](dns_zone_edit1.) ».

> [!warning]
>
> A sua zona DNS já se encontra potencialmente pré-configurada ou associada a um alojamento. Vamos ver como identificar cada registo DNS necessário para estabelecer a ligação com o seu alojamento Wix. Alguns terão de ser eliminados para evitar entrar em conflito com os registos DNS requeridos nesta configuração. Outros serão simplesmente modificados ou criados. Para uma melhor compreensão, utilizaremos o domínio « **mydomain.ovh** » como exemplo. Substitua-o pelo seu domínio durante a configuração.

### 1. Configurar o seu alojamento Wix

Quando utiliza um alojamento Wix com um nome de domínio OVHcloud, deve, em primeiro lugar, preparar o seu alojamento seguindo as instruções **do passo 1** a partir [**desta página da documentação Wix**](https://support.wix.com/fr/article/connecter-un-domaine-%C3%A0-wix-par-pointage-5727882).

### 2. Configurar os registos DNS na sua conta OVHcloud

> [!warning]
>
> Antes de avançar: <br>
> - Abra um separador em paralelo no seu browser.
> - Abrir [**esta página de documentação Wix**](https://support.wix.com/pt/article/connection-un-domaine-%C3%A0-wix-par-apontage-5727882){.external}.
> - Posicione-se na parte « **Etapa 2 | Atualizar os registos DNS na conta do seu fornecedor de alojamento de domínio** » da documentação Wix.<br>
> As instruções seguintes ajudá-lo-ão a configurar com maior facilidade a sua zona DNS da OVHcloud.

Aceda à [Área de Cliente OVHcloud](manager.){.external}, secção `Web Cloud`{.action}. Clique em `Nomes de domínio`{.action} e escolha o domínio em causa. De seguida, clique no separador `Zona DNS`{.action}.

Aparecerá uma tabela com a lista de todos os registos DNS do nome de domínio selecionado.

![dnszone](how_to_connect_domain_to_wix_images_tab.png){.thumbnail}

Cada registo DNS pode ser alterado clicando no botão `...`{.action} à direita da linha da tabela em causa e, a seguir, clicando em `Modificar entrada`{.action}.

Siga as etapas em ordem nas seguintes guias:

> [!tabs]
> **Etapa 1**
>> **Registo A**<br><br>
>> Para identificar os registos « A » existentes, clique no menu Filtros na parte superior da tabela de registos DNS e selecione `A`.<br>
>> ![dnszone](how_to_connect_domain_to_wix_images_filter-a.png){.thumbnail}<br>
>> - Clique no botão `...`{.action} à direita da linha da tabela que corresponde ao seu nome de domínio apenas, sem um subdomínio (exemplo: `mydomain.ovh.`), e depois clique em `Modificar entrada`{.action}.<br>
>> - Se existir um registo para o subdomínio « www.» (exemplo: `www.mydomain.ovh.`), deverá eliminá-lo para que não entre em conflito com o registo CNAME que vai introduzir no passo 3. Clique no botão `...`{.action} à direita da linha correspondente ao seu domínio e ao subdomínio « www.» e clique em `Eliminar entrada`{.action}.<br>
>> - Se não possui um registo « A » existente, clique no botão `Adicionar uma entrada`{.action} no canto superior direito do ecrã e selecione o « Campo de apontamento » `A`{.action}<br><br>
>> Deixe o campo **Subdomínio** vazio e introduza o endereço IPv4 *registado na sua interface Wix* no campo **Destino**.
>> Clique em `Seguinte`{.action}, valide o seu registo « A » e passe à etapa 2.
> **Etapa 2**
>> **Registo AAAA**<br><br>
>>  Para identificar os registos « AAAA », clique no menu Filtros na parte superior da tabela de registos DNS e selecione `AAAA`.<br>
>> ![dnszone](how_to_connect_domain_to_wix_images_filter-aaaa.png){.thumbnail}<br>
>> - Se estiverem presentes registos « AAAA » para o nome de domínio específico (exemplo: `mydomain.ovh.`) e para o seu subdomínio em « www.» (exemplo: `www.mydomain.ovh.`), deve eliminá-los para que não entrem em conflito com os registos « A » e « » CNAME que irá indicar no passo 4. Clique no botão `...`{.action} à direita da linha correspondente ao seu domínio e ao subdomínio « www.» e clique em `Eliminar entrada`{.action}.<br>
> **Etapa 3**
>> **Registo TXT**<br><br>
>>  Para identificar os registos « TXT » existentes, clique no menu Filtros na parte superior da tabela de registos DNS e selecione `TXT`.<br>
>> ![dnszone](how_to_connect_domain_to_wix_images_filter-txt.png){.thumbnail}<br>
>> - Se existirem registos « TXT » apenas para o nome de domínio (exemplo: `mydomain.ovh.`) e para o seu subdomínio em « www.» (exemplo: `www.mydomain.ovh.`), deve eliminá-los para que não entrem em conflito com o registo CNAME que vai introduzir no passo 3. Clique no botão `...`{.action} à direita da linha correspondente ao seu nome de domínio apenas com o subdomínio « www.» e clique em `Eliminar entrada`{.action}.<br>
> **Etapa 4**
>> **Registo CNAME**<br><br>
>>  Para identificar os registos « CNAME » existentes, clique no menu Filtros na parte superior da tabela de registos DNS e selecione `CNAME`.<br>
>> ![dnszone](how_to_connect_domain_to_wix_images_filter-cname.png){.thumbnail}<br>
>> - Clique no botão `...`{.action} à direita da linha da tabela correspondente ao seu subdomínio em « www.» (exemplo: `mydomain.ovh.`) e depois clique em `Modificar entrada`{.action}.<br>
>> - Se não possui um registo « CNAME » existente, clique no botão `Adicionar uma entrada`{.action} no canto superior direito do seu ecrã e selecione o « Campo de apontamento » `CNAME`{.action}.
>> Preencha o campo **Subdomínio** com o valor `www` e introduza o valor medido a partir da sua interface Wix no campo **Alvo**.<br>
>> Clique em `Seguinte`{.action} e valide o seu registo « CNAME ».

A zona DNS está configurada para fazer a ligação a um alojamento Wix.

> [!primary]
>
> A verificação do seu domínio pode levar até 48 horas.

Se utiliza uma oferta de e-mail da OVHcloud ou pretende subscrever uma das [nossas ofertas de e-mail](emails.), deverá também preparar a sua zona DNS em conformidade. Consulte o nosso manual sobre a [configuração de um registo MX](dns_zone_mx1.).

## Quer saber mais? <a name="go-further"></a>

[Modificar os servidores DNS de um domínio OVHcloud](dns_server_general_information1.)

[Criar uma zona DNS da OVHcloud para um domínio](dns_zone_create1.)

[Editar uma zona DNS da OVHcloud](dns_zone_edit1.)

Para alterar a gestão do seu domínio para outra conta de cliente OVHcloud, siga o guia "[Gerir os contactos dos seus serviços](managing_contacts1.)".
 
Para serviços especializados (referenciamento, desenvolvimento, etc), contacte os [parceiros OVHcloud](partner.).
 
Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](support.).
 
Fale com nossa comunidade de utilizadores: <https://community.ovh.com/en/>.