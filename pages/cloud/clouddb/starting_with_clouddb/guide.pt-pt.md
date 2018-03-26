---
title: Comecar com CloudDB
slug: comecar-com-clouddb
links: 
   - docs/cloud/clouddb/utilisation-mysql-mariadb/
   - docs/cloud/clouddb/utilisation-pgsql/
legacy_guide_number: 2216
excerpt: As bases de dados, sem os seus inconvenientes!
---

Dispõe de um website ou de uma aplicação que requer uma base de dados, mas não a deseja gerir? Descubra a oferta CloudDB'! A OVH ocupa-se de tudo.


## Generalidades

### Porque devo utilizar bases de dados administradas?
Esta oferta faz parte de uma **constatação simples**: mesmo que **saiba** fazê-lo, administrar uma base de dados não é a sua **prioridade**. Segurança, atualização, monitorização, gestão de permissões, performances, ... estas operações vão-se tornar rapidamente fastidiosas!

**Então, porque não deixar esse trabalho para a OVH para que se concentre apenas no seu negócio?**

É esse o nosso objetivo. Quer seja um particular ou um profissional, com baixas necessidades ou com uma necessidade de um grande cluster, o nosso objetivo é o de abrangermos todo o mercado.


### As vantagens da oferta CloudDB
**Simples e rápido:**

- Criação de bases de dados SQL através do Espaço Cliente
- Número de bases ilimitadas (ou no limite do espaço em disco atribuído)
- Até 200 ligações simultâneas
- Gestão dos utilizadores e direitos associados através do Espaço Cliente
- Acesso às métricas a partir do Espaço Cliente
- Acesso aos logs

**Com excelente performance:**

- Recursos de RAM garantidos
- Infraestrutura comprovada

**Segurança:**

- Monitorização 24/24h, 7/7d pelas nossas equipas
- Backups diários automáticos
- Autorização de endereço(s) IP obrigatório

**Evolutivo:**

- Compatível com todos os produtos OVH (exceto alojamentos partilhados), e mais globalmente com todos os produtos ligados a uma rede pública
- Escolha da versão SQL e possibilidade de mudança para uma versão superior a qualquer momento


### Motores propostos
Aquando da sua subscrição à oferta CloudDB, tem a possibilidade de escolher entre vários sistemas de bases de dados:

**SQL**

- MySQL
- PostgreSQL
- MariaDB

Cada instância dispõe dos seus próprios recursos dedicados. As bases de dados que ela contém, uma ou várias, **partilham** os recursos entre elas.


## Encomendar a sua oferta CloudDB

### Estabeleca ligacao ao seu Espaco Cliente
Para poder criar a sua instância e depois as suas bases de dados, é necessário que aceda ao seu [Espaço Cliente Web](https://www.ovh.com/manager/web/){.external}.


### Encomenda
Após estar no seu [Espaço Cliente Web](https://www.ovh.com/manager/web/){.external}, clique em **"Bases de dados"**, e depois em `Encomendar bases de dados`{.action}.


![commande manager](images/bouton-commande_EN.PNG){.thumbnail}

Efetue a sua encomenda ao escolher os seguintes elementos:

- **"CloudDB"**
- **"O seu sistema de base de dados"**
- **"A sua RAM"**
- **"O seu datacenter"**
- **"A duração desejada"**


![commande choix](images/choix-commande_EN.PNG){.thumbnail}

Valide de seguida os contratos e clique em `Gerar a nota de encomenda`{.action}.


![commande generation](images/generer-commande_EN.PNG){.thumbnail}


## Informacoes gerais
Após estar no seu Espaço Cliente será possível consultar as informações gerais da sua instância.


![commande generation](images/infos-generales_EN.png){.thumbnail}


## Criar as minhas bases e os meus utilizadores

### Criar uma base de dados
Nesta atura, a sua instância está criada mas encontra-se vazia.

Clique no separador **"Bases de dados"**, e depois no botão `+ Adicionar uma base de dados`{.action}.


![creation bdd](images/creation-bdd_EN.png){.thumbnail}

Indique um nome para a sua base de dados e clique em `Validar`{.action}.


![creation bdd](images/validation-bdd_EN.png){.thumbnail}


### Criar um utilizador
Para utilizar uma oferta CloudDB, é necessário que crie um utilizador com direitos específicos para se ligar à base de dados.

Deverá, para tal, aceder ao separador **"Utilizadores e direitos"** e deverá clicar de seguida em `+ Adicionar um utilizador`{.action}.


![hosting](images/creation-user_EN.png){.thumbnail}

Será de seguida solicitado que introduza um **nome de utilizador** e e uma **password** e no final, deverá clicar em `Validar`{.action}.


![hosting](images/validation-user_EN.png){.thumbnail}


### Gerir os direitos dos utilizadores
Clique no separador **"Bases de dados"**, e depois, na **"roda dentada"** à direita da base de dados desejada clique no botão `Gerir os utilizadores`{.action}.


![hosting](images/gestion-user_EN.png){.thumbnail}

Escolha de seguida os direitos para o utilizador da sua escolha


![hosting](images/validation-droit_EN.png){.thumbnail}

Consulte a descrição dos 3 direitos propostos:

- **Administrador:** Autorização dos pedidos do tipo **Select / Insert / Update / Delete / Create / Alter / Drop**
- **Leitura/Escrita:** Autorização dos pedidos do tipo **Select / Insert / Update / Delete**
- **Leitura:** Autorização dos pedidos do tipo **Select**
- **Nenhum:** Nenhum direito sobre a base de dados


## Autorize os enderecos IP

### Adicao do seu servidor
De forma a que o acesso à sua instância CloudDB funcione, é obrigatório especificar o ou os endereços IP autorizados neste menu. Clique no botão **"IPs autorizados"**, e depois em `+ Adicionar um endereço IP/máscara`{.action}.


![hosting](images/ip-autorisee_EN.png){.thumbnail}

Indique o endereço IP do seu servidor ou de uma rede bem como uma descrição que deseje, e clique em `Validar`{.action}.


![hosting](images/validation-ip_EN.png){.thumbnail}


## Utilizar a sua base de dados
A sua configuração está terminada? Perfeito!

Mediante o seu caso prático e o motor escolhido, as formas de utilizar a sua base de dados são variadas.

Deixamos um caso de utilização típico.


### Instalar WordPress com o lab DBaaS e o motor MySQL
- Crie uma instância CloudDB MySQL
- Crie uma base de dados e um utilizador associado a essa base e associe-lhe os direitos ADMIN
- Autorize o endereço IP do seu servidor que se ligará ao seu serviço CloudDB

Recupere no seu Espaço Cliente as seguintes informações:

- Nome do servidor
- Porta SQL

![Instance MySQL](images/infos-sql_EN.png){.thumbnail}

- Base de dados

![Instance MySQL](images/view-bdd_EN.PNG){.thumbnail}

- Utilizador

![Instance MySQL](images/view-uer_EN.PNG){.thumbnail}


Note que o URL e a porta associada. O WordPress irá solicitar essas informações aquando da sua instalação.


![wordpress install](images/wordpress-config.png){.thumbnail}

Vamos preencher os campos da seguinte forma:

- **Database Name**: *base-test*
- **User Name**: *user-1*
- **Password**: a password que escolheu para o utilizador *user-1*
- **Database Host**: *xxx.dbaas.ovh.net:35102* (note corretamente: **host:port**)
- **Table prefix**: neste caso não mudamos nada

Para outros casos práticos, a OVH respeita todos os métodos de ligações oficiais dos motores implementados. Não hesite em consultar as documentações oficiais.