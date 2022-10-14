---
title: Como migrar um site e e-mails para a OVHcloud?
slug: migrar-site-para-ovh
excerpt: Saiba como transferir um site e os e-mails para a OVHcloud sem interromper os serviços
section: Primeiros passos
order: 08
---

**Última atualização: 14/10/2022**

## Sumário

Este guia explica como migrar um site, bases de dados e endereços de e-mail para a OVHcloud. O processo de migração do serviço pode variar conforme o caso

** Aprenda a fazer a migração de um site ou de e-mails para a OVHcloud sem interrupção do serviço.**

## Requisitos

- Poder gerir o domínio associado ao site ou ao e-mail.
- Ter acesso aos ficheiros do site.
- Ter acesso às bases de dados do site (para sites com BD).
- Ter acesso aos dados associados aos endereços de e-mail (utilizador, palavra-passe, servidores).
- Ter acesso à [Área de cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}.

## Instruções

A migração do site e dos e-mails para a OVHcloud assenta num processo com etapas e vários procedimentos. 

|Etapas|Resumo| 
|---|---| 
|Contratar um serviço de alojamento|O alojamento OVHcloud permite alojar um site e ter endereços de e-mail associados ao seu domínio.| 
|Transferir site|Para migrar o site para a OVHcloud, deverá copiar os ficheiros deste e transferi-los para uma pasta específica existente no nosso alojamento.| 
|Transferir endereços de e-mail|Para transferir as mensagens de e-mail para a OVHcloud (e outros dados no caso do Exchange), tem que registar os seus endereços no sistema OVHcloud. Só depois poder efetuar a migração| 
|Alterar a configuração DNS do domínio|Para que o seu domínio possa funcionar com o serviço OVHcloud (e com o site e os endereços de e-mail alojados nos nossos serviços) tem de alterar as configurações DNS.| 
|Transferir domínio|Se o seu domínio for gerido por outro agente de registo (i.e. Registrar), terá de transferir o domínio para a OVHcloud.| 

As etapas descritas abaixo podem variar consoante os procedimentos adotados pelo agente de registo que recebe o pedido de transferência.

> [!warning]
>
> Alguns agentes de registo suspendem a resolução DNS do domínio após a receção do pedido de transferência.
> Neste caso, o domínio e todos os serviços associados (site e e-mail) poderão ficar indisponíveis. Antes de iniciar o processo, contacte o seu agente de registo para confirmar os procedimentos de transferência.
>

Para precaver a qualquer interrupção, a OVHcloud disponibiliza dois procedimentos de transferência:

- migração sem interrupção dos serviços;
- migração para situações de possível interrupção do serviço.

### Migração sem interrupção do serviço

#### 1 - Contratar um alojamento web da OVHcloud

Aceda ao site [OVHcloud](https://ovh.pt/){.external} e subscreva um serviço de alojamento web. Atenção! Siga os passos aqui indicados antes de solicitar a transferência de domínio. A instalação do serviço inicia automaticamente após a realização do pagamento. No final da instalação, irá receber um e-mail a confirmar a conclusão do processo.

#### 2 - Transferir o site

|Passos|Descrição|Detalhes|
|---|---|---|
|1|Efetuar um backup (cópia) do site|Faça o backup de todos os ficheiros do site e, se necessário, da base de dados. O backup completo é essencial para garantir o sucesso da transferência do site para a OVHcloud.|
|2|Colocar o seu site online com o serviços OVHcloud|Aceda ao espaço de alojamento (FTP), para importar os ficheiros do site. Para ficarem online, os ficheiros devem ser colocados na pasta **"www"**. Os dados de acesso FTP são transmitidos por e-mail.|
|3|Criação de uma base de dados OVHcloud|Se o seu site funcionar com uma base de dados, terá de [criar uma nova base de dados](https://docs.ovh.com/pt/hosting/gestao-de-uma-base-de-dados-a-partir-de-um-alojamento-partilhado-ovh/){.external} na [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}.|
|4|Importar dados existentes na base de dados inicial|Importe o backup da base de dados usando [a ferramenta disponível na Área de Cliente](https://docs.ovh.com/pt/hosting/partilhado_guia_de_importacao_de_uma_base_de_dados_mysql/){.external}.|
|5|Associar o site à nova base de dados|As informações da base de dados inicial estão guardadas no ficheiro de configuração do seu site. No espaço de armazenamento OVHcloud, altere o ficheiro, introduzindo as informações relativas à base de dados OVHcloud.|

A configuração do domínio continua inalterada. O seu site ainda está a usar o alojamento do operador inicial.

#### 3 - Criar endereços de e-mail na OVHcloud

Após a transferência do site, [registe os endereços de e-mail na OVHcloud](https://docs.ovh.com/pt/emails/e-mail_partilhado_guia_de_criacao_de_um_endereco_de_e-mail/){.external}. Os endereços devem ser iguais aos usados com o outro operador. Na [Área de Cliente](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}, selecione `E-mails`{.action}, e clique no alojamento web que contratou (com a designação do seu domínio). Clique no botão `Criar um endereço de e-mail`{.action} e siga as instruções apresentadas.

A configuração do domínio continua inalterada. O e-mail continua a funcionar no alojamento do outro operador. Como tal, deverá continuar a usar este serviço para enviar e receber e-mail.

#### 4 - Alterar a configuração do domínio.

O seu site foi transferido para a OVHcloud e os endereços de e-mail foram criados no sistema da OVHcloud. Agora é necessário alterar a configuração DNS do seu domínio. Esta ação implica substituir os servidores DNS do outro operador pelos servidores DNS da OVHcloud (enviados por e-mail e visíveis na [Área de Cliente](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}). A nova configuração permite:

- **associar o seu domínio aos serviços OVHcloud**: o alojamento OVHcloud será usado para colocar o seu site online e enviar e receber e-mail;
- **evitar a interrupção do serviço**: se o agente de registo suspender a resolução DNS quando solicitar a transferência de domínio, não haverá problema. O sistema OVHcloud está pronto para garantir o funcionamento do site e dos seus e-mails.

> [!warning]
>
> A alteração dos servidores DNS é realizada através do agente de registo responsável pelo seu domínio, e requer um tempo de propagação que pode demorar entre 24h e 48h.
>

#### 5 - Transferir o conteúdo dos endereços de e-mail

|Passos|Descrição|Detalhes|
|---|---|---|
|1|Migrar o conteúdo dos endereços de e-mail para a OVHcloud|O [OVHcloud Mail Migrator (OMM)](https://omm.ovh.net/){.external} permite transferir para a OVHcloud o conteúdo (e.g. mensagens) dos endereços de e-mail associados ao antigo operador.|
|2|Usar os endereços de e-mail|Os endereços podem ser acedidos online, através da aplicação ([webmail](https://mail.ovh.net/){.external}). Se estiver a usar os endereços num cliente de e-mail (e.g. Outlook), terá de atualizar a configuração, substituindo os servidores do anterior operador pelos [servidores OVHcloud](https://docs.ovh.com/pt/emails/partilhado_generalidades_e-mail_partilhado_ovh/).|

#### 6 - Transferir domínio para a OVHcloud

Agora só falta transferir o domínio para a OVHcloud 

|Passos|Descrição|Detalhes|
|---|---|---|
|1|Desbloquear o domínio|O bloqueio de um domínio impede a transferência para outro agente de registo (i.e. Registrar), como a OVHcloud. Por isso, é necessário desbloquear o domínio no sistema do agente registo.|
|2|Obter o código de transferência |O código de transferência é fornecido pelo agente de registo após o desbloqueio do domínio.|
|3|Realizar o pedido de transferência para a OVHcloud|O pedido de transferência é efetuado a partir do site [OVHcloud](https://ovh.pt){.external}. O processo requer a introdução do código de transferência fornecido pelo agente de registo.|
|4|Efetuar pagamento|O processo de transferência irá iniciar após o pagamento.|
|5|Validar a transferência| Este processo varia conforme a extensão do domínio. Por vezes, é necessário validar a transferência. Normalmente, o pedido de validação é enviado por e-mail. Siga os passos indicados para validar a transferência. | 

A transferência foi efetuada. O site, os e-mails e o domínio foram migrados para a OVHcloud sem qualquer interrupção do serviço.

### Migração para situações de possível interrupção do serviço.

#### 1 - Solicitar transferência de dominio e contratar alojamento OVHcloud para os seus serviços

|Passos|Descrição|Detalhes|
|---|---|---|
|1|Desbloquear o domínio|O bloqueio de um domínio impede a transferência para outro agente de registo (i.e. Registrar), como a OVHcloud. Por isso, é necessário desbloquear o domínio no sistema do agente registo.|
|2|Obter o código de transferência |O código de transferência é fornecido pelo agente de registo após o desbloqueio do domínio.|
|3|Solicitar transferência e contratar alojamento|O pedido de transferência e a contratação de alojamento são efetuados a partir do site [OVHcloud](https://ovh.pt){.external}. O processo requer a introdução do código de transferência fornecido pelo agente de registo. No momento da seleção dos servidores DNS, indique os servidores do atual prestador de serviços.|
|4|Efetuar pagamento|A transferência do domínio e a instalação do alojamento irão iniciar após o pagamento. **Alguns agentes de registo suspendem a resolução DNS do domínio após a receção do pedido de transferência. Neste caso, o seu domínio e todos os serviços associados (site e e-mail) poderão ficar indisponíveis.**|
|5|Validar a transferência|Este processo varia conforme a extensão do domínio. Por vezes, é necessário validar a transferência. Normalmente, o pedido de validação é enviado por e-mail. Siga os passos indicados para validar a transferência. |

#### 2 - Transferir o site

|Passos|Descrição|Detalhes|
|---|---|---|
|1|Efetuar um backup (cópia) do site|Faça o backup de todos os ficheiros do site e, se necessário, da base de dados. O backup completo é essencial para garantir o sucesso da transferência do site para a OVHcloud.|
|2|Colocar o seu site online com o serviços OVHcloud|Aceda ao espaço de alojamento (FTP), para importar os ficheiros do site. Para ficarem online, os ficheiros devem ser colocados na pasta **"www"**. Os dados de acesso FTP são transmitidos por e-mail.|
|3|Criação de uma base de dados OVHcloud|Se o seu site funcionar com uma base de dados, terá de [criar uma nova base de dados](https://docs.ovh.com/pt/hosting/gestao-de-uma-base-de-dados-a-partir-de-um-alojamento-partilhado-ovh/){.external} na [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}.|
|4|Importar dados existentes na base de dados inicial|Importe o backup da base de dados usando [a ferramenta disponível na Área de Cliente](https://docs.ovh.com/pt/hosting/partilhado_guia_de_importacao_de_uma_base_de_dados_mysql/){.external}.|
|5|Associar o site à nova base de dados|As informações da base de dados inicial estão guardadas no ficheiro de configuração do seu site. No espaço de armazenamento OVHcloud, altere o ficheiro, introduzindo as informações relativas à base de dados OVHcloud.|

A configuração do domínio continua inalterada. Se a resolução DNS ainda estiver ativa, o seu site continua a ser apresentado através do alojamento do operador anterior.

#### 3 - Criar endereços de e-mail na OVHcloud

**Após a transferência do domínio**, irá receber um e-mail para informar que o serviço de e-mail associado ao seu alojamento acabou de ser instalado. Agora tem de [registar os endereços de e-mail no sistema da OVHcloud](https://docs.ovh.com/pt/emails/e-mail_partilhado_guia_de_criacao_de_um_endereco_de_e-mail/){.external}. Os endereços devem ser iguais aos usados com o serviço do operador anterior. Na [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}, selecione `E-mails`{.action}, e clique no alojamento web que contratou (com a designação do seu domínio). Clique no botão `Criar um endereço de e-mail`{.action} e siga as instruções apresentadas.

A configuração do domínio continua inalterada. Se a resolução DNS continuar ativa, o e-mail continua a funcionar no alojamento do outro operador. Como tal, deverá continuar a usar este serviço para enviar e receber e-mail.

#### 4 - Alterar a configuração do domínio.

O seu site e o seu domínio foram transferidos para a OVHcloud, e os endereços de e-mail foram criados no sistema da OVHcloud. Agora é necessário alterar a configuração DNS do seu domínio. Esta ação implica substituir os servidores DNS do outro operador pelos servidores DNS da OVHcloud.

A alteração é efetuada através da [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}. Se tiver dúvidas, consulte o guia sobre *[Gestão dos servidores DNS](https://docs.ovh.com/pt/domains/partilhado_generalidades_sobre_os_servidores_dns/){.external}*.

A nova configuração permite:

- **associar o seu domínio aos serviços OVHcloud**: o alojamento OVHcloud será usado para colocar o seu site online e enviar e receber e-mail;
- se o outro agente registo suspender a resolução DNS quando solicitar a transferência de domínio, não haverá problema. O sistema OVHcloud está pronto para garantir o funcionamento do site e dos seus e-mails.

> [!warning]
>
> A alteração dos servidores DNS requer um período de propagação que pode demorar até 48 horas.
>

#### 5 - Transferir o conteúdo dos endereços e-mail

|Passos|Descrição|Detalhes|
|---|---|---|
|1|Migrar o conteúdo dos endereços de e-mail para a OVHcloud|O [OVHcloud Mail Migrator (OMM)](https://omm.ovh.net/){.external} permite copiar o conteúdo (e.g. mensagens) dos endereços de e-mail associados ao antigo prestador de serviços.|
|2|Usar os endereços de e-mail|Os endereços podem ser acedidos online, através da aplicação [Webmail](https://mail.ovh.net/){.external}. Se estiver a usar os endereços num cliente de e-mail (e.g. Outlook), terá de atualizar a configuração, substituindo os servidores do anterior operador pelos [servidores OVHcloud](https://docs.ovh.com/pt/emails/partilhado_generalidades_e-mail_partilhado_ovh/).|

Parabéns! A migração do site, do domínio e do e-mail está concluída.

## Quer saber mais? Clique nos links abaixo

[Configuração de e-mail para alojamento Web](https://docs.ovh.com/pt/emails/partilhado_generalidades_e-mail_partilhado_ovh/){.external}.

[Gestão dos servidores DNS](https://docs.ovh.com/pt/domains/partilhado_generalidades_sobre_os_servidores_dns/){.external}.

[Como criar um endereço de e-mail](https://docs.ovh.com/pt/emails/e-mail_partilhado_guia_de_criacao_de_um_endereco_de_e-mail/){.external}.

[Importar uma base de dados MySQL](https://docs.ovh.com/pt/hosting/partilhado_guia_de_importacao_de_uma_base_de_dados_mysql/){.external}.

[Gerir uma base de dados num alojamento partilhado](https://docs.ovh.com/pt/hosting/gestao-de-uma-base-de-dados-a-partir-de-um-alojamento-partilhado-ovh/){.external}.

Para serviços especializados (referenciamento, desenvolvimento, etc), contacte os [parceiros OVHcloud](https://partner.ovhcloud.com/pt/).

Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](https://www.ovhcloud.com/pt/support-levels/).

Fale com nossa comunidade de utilizadores: <https://community.ovh.com/en/>. 