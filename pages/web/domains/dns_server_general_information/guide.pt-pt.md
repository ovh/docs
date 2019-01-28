---
title: 'Alterar os servidores DNS de um nome de domínio OVH'
slug: partilhado_generalidades_sobre_os_servidores_dns
excerpt: 'Saiba como alterar os servidores DNS do seu nome de domínio OVH'
legacy_guide_number: g2015
---

**Última atualização: 28/01/2019**

## Sumário

Os servidores DNS alojam as configurações DNS dos nomes de domínio (também conhecidas como zonas DNS) que contêm informações técnicas, tais como os registos. Numa utilização clássica, estas configurações permitem fazer a ligação entre o seu nome de domínio e os servidores que alojam o seu website e os seus endereços de e-mail.

Estes registos DNS, armazenados em servidores DNS, permitem que os domínios estejam disponíveis na Internet.

**Saiba como alterar os servidores DNS do seu nome de domínio OVH.**

## Requisitos

- Ter um nome de domínio registado na OVH.
- Ter acesso à secção de gestão do domínio na [Área de Cliente OVH](https://www.ovh.com/auth/?action=gotomanager){.external}.
- Ter acesso à [Área de Cliente OVH](https://www.ovh.com/auth/?action=gotomanager){.external}.

> [!warning]
>
> Se o domínio não foi registado na OVH, deverá alterar os servidores DNS a partir da interface do agente responsável pela gestão do seu domínio.
>

## Instruções

**A alteração dos servidores DNS de um domínio é uma operação delicada**: uma alteração inadequada poderia, por exemplo, impossibilitar o acesso ao seu website e a receção de novos e-mails. Iremos explicar os impactos de uma alteração da configuração de um alojamento web para que compreenda as consequências.

Quando altera os servidores DNS do seu domínio, está a modificar a configuração DNS que este último utiliza. A nova configuração é armazenada nos novos servidores DNS configurados, substituindo a configuração anterior. Tecnicamente, o domínio utiliza uma nova zona DNS.

No entanto, deve prestar atenção aos seguintes aspetos:

- Certifique-se de que o conteúdo da antiga configuração DNS não foi automaticamente replicado na nova. Assegure-se de que a nova configuração contém todos os elementos necessários para o bom funcionamento dos serviços associados ao domínio (como um website e endereços de e-mail, por exemplo).

- Se pretende alterar um único elemento da configuração DNS atual (um registo, por exemplo), recomendamos que edite a zona DNS utilizando a seguinte documentação: [“Como editar a minha zona DNS?”](https://docs.ovh.com/pt/domains/alojamento_partilhado_como_editar_a_minha_zona_dns/){.external}

> [!warning]
>
> Antes de realizar qualquer alteração, certifique-se de que a modificação não deixará o seu domínio inacessível. Se não tiver a certeza, pode contactar a pessoa que solicitou a modificação antes de realizar qualquer alteração.
>

### 1 - Aceder à gestão dos servidores DNS do domínio

Para iniciar esta operação, aceda à [Área de Cliente OVH](https://www.ovh.com/auth/?action=gotomanager){.external}, clique em `Domínios`{.action} na barra à esquerda e escolha o domínio em causa. Por fim, clique no separador `Servidores DNS`{.action}.

A tabela que aparecer apresenta os servidores DNS atualmente configurados na OVH para o domínio. Cada linha da tabela contém um servidor DNS.

![dnsserver](images/edit-dns-server-ovh-step1.png){.thumbnail}

### 2 - Editar os servidores DNS do domínio

Para editar os servidores DNS, clique no botão `Modificar os servidores DNS`{.action}.

Nos campos de texto que aparecem, substitua os servidores DNS atuais pelos novos servidores que pretende configurar. Para adicionar servidores adicionais à lista existente, clique no botão `+`{.action} que aparece à direita do último campo de texto.

Concluída esta etapa, clique no botão `Aplicar configuração`{.action}. O estado dos servidores DNS será atualizado na tabela e mostrará as alterações que acabou de realizar.

> [!primary]
>
> O botão `Reiniciar os servidores DNS`{.action} permite substituir os servidores DNS atuais do domínio pelos servidores da OVH de origem. Recomendamos que utilize apenas esta opção se pretender voltar a utilizar os servidores DNS da OVH. 
>

![dnsserver](images/edit-dns-server-ovh-step2.png){.thumbnail}

### 3 - Aguardar que as alterações sejam aplicadas

Depois de editar os servidores DNS, deverá esperar que as alterações se propaguem. Deve ter em conta dois prazos diferentes:

- Primeiramente, o organismo responsável pela administração da extensão do domínio deve registar as alterações realizados na OVH. Para seguir o progresso na [Área de Cliente OVH](https://www.ovh.com/auth/?action=gotomanager){.external}, na coluna à esquerda, clique em `Domínios`{.action} > `Operações em curso`{.action}.

- Depois de o organismo responsável pela administração da sua extensão registar as alterações, a modificação demorará 48 horas até ficar efetiva.

## Quer saber mais?

[Como editar a minha zona DNS?](https://docs.ovh.com/pt/domains/alojamento_partilhado_como_editar_a_minha_zona_dns/){.external}

Fale com a nossa comunidade de utilizadores em [https://community.ovh.com/en/](https://community.ovh.com/en/){.external}