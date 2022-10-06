---
title: Migração dos dados de um servidor dedicado para outro
slug: migracao-dos-dados-de-um-servidor-dedicado-para-outro
excerpt: Saiba como migrar dados de um servidor dedicado para outro
section: Introdução
order: 4
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em “Contribuir” nesta página.
>

**Última atualização: 16/09/2021**

## Sumário

Como as suas necessidades e as gamas OVHcloud evoluem constantemente, é por vezes necessário modificar os servidores e migrar os dados em conformidade.

**Este guia tem como objetivo centralizar as etapas de migração dos dados de um servidor para outro.**

> [!warning]
>
> A utilização e a gestão dos serviços OVHcloud são da responsabilidade do cliente. A OVHcloud não tem permissões de acesso à parte lógica dos sistemas. O cliente é o único responsável pela gestão e pela segurança destes serviços.
>
> Este guia explica como implementar algumas medidas para tornar o seu sistema mais seguro. Se encontrar alguma dificuldade relacionada com o processo, deverá contactar um serviço especializado. Para mais informações, aceda à secção deste guia intitulada: «Quer saber mais?»
>

## Requisitos

- Dois servidores dedicados (o antigo e o novo) com o sistema operativo instalado
- Acesso administrativo aos seus servidores
- Competências administrativas de sistema

## Instruções

> [!warning]
>
> Algumas das opções mencionadas neste guia podem não estar disponíveis na sua gama de servidores ou encontrar-se noutra secção do seu Painel de configuração (Kimsufi, So you Start).
>

### Preparação do seu ambiente

Uma vez que o novo servidor foi entregue à sua conta, a primeira etapa consiste em criar um ambiente (sistema operativo, software, segurança..) idêntico ao ambiente anterior, ou pelo menos o mais possível.

Se for necessária uma alteração da versão do sistema operativo ou do software, certifique-se de que a localização dos ficheiros permanece idêntica, assim como a compatibilidade dos dados entre as versões.

### Migração de dados

A migração dos dados implica normalmente a cópia de ficheiros de um servidor para outro. Há várias soluções para isso:

- A forma mais simples é utilizar um software adequado como [SFTP](https://docs.ovh.com/pt/dedicated/carregar-e-descarregar-dados-através-de-sftp/).
- A outra opção consiste em [sincronizar os dois servidores um com o outro](https://docs.ovh.com/pt/dedicated/copiar-dados-servidor-rsync/).

### Utilização do Backup Storage (disponível apenas na OVHcloud e So you Start)

Com a opção [Backup Storage](https://www.ovhcloud.com/pt/bare-metal/backup-storage/), pode armazenar dados num serviço externo ao seu servidor. Está unicamente ligado ao serviço a partir do qual o encomendou.

> [!warning]
>
> O Backup Storage só pode ser acedido a partir dos servidores OVHcloud e dos endereços IP situados na mesma zona.
>
> Por exemplo, se o armazenamento de backup estiver ativo num servidor localizado no datacenter SBG, os servidores situados nos datacenters GRA ou RBX podem aceder ao mesmo. No entanto, os servidores situados nos datacenters BHS ou WAW não terão acesso a este armazenamento.
>

Pode autorizar o acesso ao armazenamento de backup a partir do seu novo servidor. Assim, disporá de uma gateway para transferir os seus dados.

Para mais informações, consulte o nosso guia sobre [utilizar o Backup Storage num servidor dedicado](https://docs.ovh.com/pt/dedicated/servicos-backup-storage/){.external}.

### Migração de um Additional IP (disponível apenas na OVHcloud e So you Start)

> [!warning]
>
> - O endereço IP principal de um servidor não pode ser migrado para outro servidor.
>
> - A migração de um Additional IP é possível a partir de uma conta So you Start para uma conta OVHcloud. Esta operação é faturada da mesma forma que a criação de um novo IP.
>
> - Não é possível efetuar a migração de um IP a partir de uma conta OVHcloud para uma conta So you Start.
>

Se a reputação dos seus endereços IP é importante, recomendamos vivamente que utilize endereços [Additional IP](https://www.ovhcloud.com/pt/bare-metal/ip/)migração, pois estes podem ser conservados se efetuar uma migração.

Quando tiver estes endereços IP, basta migrá-los para o novo servidor.
Para isso, consulte o nosso guia sobre: [Migrar um Additional IP](https://docs.ovh.com/pt/dedicated/ip-fo-move/).

> [!alert]
>
> A eliminação do servidor de origem, no qual foram encomendadas uma ou várias opções (Backup storage, Additional IP), eliminará definitivamente estas opções.
>
> Por isso, é necessário efetuar todas as modificações antes de eliminar o serviço.
>

Uma vez os dados disponíveis no novo servidor, poderá ter de alterar a sua configuração DNS, por exemplo, se o endereço IP principal tiver sido utilizado.

Para mais informações queira ler a nossa documentação sobre [domínios e DNS](https://docs.ovh.com/pt/domains/).

## Saiba mais

Se deseja obter ajuda na migração do seu servidor, contacte os [a nossa rede de parceiros](https://partner.ovhcloud.com/pt/).

Fale com a nossa comunidade de utilizadores em <https://community.ovh.com/en/>.
