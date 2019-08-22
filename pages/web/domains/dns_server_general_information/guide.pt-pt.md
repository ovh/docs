---
title: 'Alterar os servidores DNS de um nome de domínio OVH'
slug: partilhado_generalidades_sobre_os_servidores_dns
excerpt: 'Saiba como alterar os servidores DNS do seu nome de domínio OVH'
legacy_guide_number: g2015
---

**Última atualização: 25/07/2019**

## Sumário

Os servidores DNS são concebidos para alojar as configurações DNS dos nomes de domínio. Estas zonas de configuração, também conhecidas como zonas DNS, contêm informações técnicas sob forma de registos. Estes registos DNS são geralmente utilizados para ligar o seu nome de domínio aos servidores que alojam o seu website e os seus endereços de e-mails.

Por outras palavras, estes registos alojados nos servidores DNS fazem com que os seus nomes de domínio fiquem acessíveis na Internet.

**Saiba como alterar os servidores DNS do seu nome de domínio OVH.**

## Requisitos

- Ter um nome de domínio registado na OVH.
- Dispor das autorizações [adequadas para gerir](https://docs.ovh.com/pt/customer/gestao_dos_contactos/){.external} o nome de domínio a partir da [Área de Cliente OVH](https://www.ovh.com/auth/?action=gotomanager){.external}.
- Ter acesso à [Área de Cliente OVH](https://www.ovh.com/auth/?action=gotomanager){.external}.

> [!warning]
>
> Se o domínio não foi registado na OVH, deverá alterar os servidores DNS a partir da interface do agente responsável pela gestão do seu domínio.
>

## Instruções

**Recomendamos vivamente que tenha atenção quando alterar os servidores DNS de um nome de domínio.** Se realizar alterações incorretas, poderá afetar a disponibilidade do seu website e deixar de receber e-mails. Iremos explicar os impactos de uma alteração da configuração de um alojamento web para que compreenda as consequências.

Quando altera os servidores DNS do seu domínio, está a modificar a sua configuração DNS. A nova configuração substitui a anterior e é alojada nos servidores DNS que definiu por último. Tecnicamente, o nome de domínio utiliza uma nova zona DNS.

No entanto, é importante ter em conta que:

- o conteúdo da antiga configuração DNS não foi automaticamente replicado na nova. Certifique-se de que a nova configuração inclui todas as informações necessárias para que os serviços associados ao seu nome de domínio funcionem corretamente (por exemplo, o seu website e os seus endereços de e-mail);

- se desejar alterar um único elemento da sua configuração DNS atual (por exemplo, um registo DNS), recomendamos a consulta do nosso manual sobre como alterar a zona DNS: “[Editar uma zona DNS da OVH](https://docs.ovh.com/pt/domains/alojamento_partilhado_como_editar_a_minha_zona_dns/){.external}”;

- determinadas organizações, os registos que gerem as extensões de domínios, têm exigências particulares relativamente aos servidores DNS (quantidade de servidores de nomes, valor dos registos, etc.). Em caso de dúvida, contacte o agente de registo responsável pelo domínio.

> [!warning]
>
> Antes de realizar qualquer alteração, certifique-se de que a modificação não deixará o seu domínio inacessível. Se não tiver a certeza, pode contactar a pessoa que solicitou a modificação antes de realizar qualquer alteração.
>

### 1 - Aceder à zona de gestão dos servidores DNS OVH do domínio

Para iniciar esta operação, aceda à [Área de Cliente OVH](https://www.ovh.com/auth/?action=gotomanager){.external}, clique em `Domínios`{.action} na barra à esquerda e escolha o domínio em causa. A seguir, aceda ao separador `Servidores DNS`{.action}.

A tabela que aparecer apresenta os servidores DNS atualmente configurados na OVH para o domínio. Vários servidores DNS podem estar listados, sendo que cada um deles possui a sua própria linha na tabela.

![dnsserver](images/edit-dns-server-ovh-step1.png){.thumbnail}

### 2 - Alterar os servidores DNS do domínio

Para começar a editar os servidores DNS, clique no botão `Modificar os servidores DNS`{.action}.

Nos campos de texto, substitua as informações atuais do servidor DNS pelos dados relativos aos novos servidores que deseja configurar. Para adicionar outros servidores à lista ativa, clique no ícone `+`{.action} no final da linha correspondente. Aparecerá então uma linha adicional onde poderá preencher os campos.

Uma vez completada esta informação, clique em `Aplicar configuração`{.action}. Os estados dos servidores DNS serão atualizados na tabela e as novas informações aparecerão.

> [!primary]
>
> O botão `Reiniciar os servidores DNS`{.action} permite modificar os servidores DNS atuais reiniciando-os automaticamente nos servidores DNS OVH de origem. Recomendamos que utilize apenas esta opção se pretender voltar a utilizar os servidores DNS da OVH. 
>

![dnsserver](images/edit-dns-server-ovh-step2.png){.thumbnail}

### 3 - Aguardar que as alterações sejam aplicadas

Depois de realizar as alterações necessárias, deverá esperar que as alterações se propaguem. Deve ter em conta dois prazos diferentes:

- O organismo responsável pela gestão da extensão do domínio deve ter em conta as alterações realizados na OVH. Para seguir o progresso na [Área de Cliente OVH](https://www.ovh.com/auth/?action=gotomanager){.external}, na coluna à esquerda, clique em `Domínios`{.action} e em `Operações em curso`{.action}.
- Depois de o organismo responsável pela gestão da sua extensão registar as alterações, a modificação poderá demorar até 48 horas para ficar efetiva.

## Quer saber mais?

[Editar uma zona DNS da OVH](https://docs.ovh.com/pt/domains/alojamento_partilhado_como_editar_a_minha_zona_dns/){.external}.


Fale com a nossa comunidade de utilizadores em <https://community.ovh.com/en/>.