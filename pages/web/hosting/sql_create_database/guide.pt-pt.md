---
title: 'Criar uma base de dados num alojamento web'
slug: criar-base-de-dados
excerpt: 'Saiba como criar uma base de dados num alojamento web da OVH'
section: 'Bases de dados'
order: 1
---

**Última atualização: 04/02/2019**

## Sumário

Uma base de dados (*database*, “DB” ou “BDD”) permite armazenar elementos considerados dinâmicos, tal como comentários ou artigos, por exemplo. Atualmente, estas bases são utilizadas pela maior parte dos sistemas de gestão de conteúdos (*Content Management System* ou CMS) como o WordPress ou o Joomla!.

**Saiba como criar uma base de dados num alojamento web da OVH.**

## Requisitos

- Ter um serviço de [alojamento web OVH](https://www.ovh.pt/alojamento-partilhado/){.external}.
- Ter a possibilidade de criar bases de dados no âmbito do seu plano.
- Ter acesso à secção de gestão do alojamento web [Área de Cliente OVH](https://www.ovh.com/auth/?action=gotomanager){.external}.

## Instruções

### 1 - Aceder à gestão das bases de dados do alojamento

Para iniciar a operação, aceda à [Área de Cliente OVH](https://www.ovh.com/auth/?action=gotomanager){.external}, clique em `Alojamentos`{.action} na barra à esquerda e escolha o nome do alojamento em causa. Por fim, clique no separador `Base de dados`{.action}.

Aparecerá uma tabela com todas as bases de dados criadas com o plano de alojamento web.

![databasecreation](images/database-creation-step1.png){.thumbnail}

### 2 - Escolher a base de dados

Para iniciar a criação de uma nova base de dados, existem duas possibilidades:

- **se ainda não tiver criado uma base de dados**: clique no botão `Criar uma base de dados`{.action}.

- **se já tiver criado uma base de dados**: clique no botão `Ações`{.action} e, a seguir, `Criar uma base de dados`{.action}.

Na janela que aparecer, selecione as informações necessárias e clique em `Seguinte`{.action}.

|Informação|Descrição|  
|---|---|  
|Motor da base de dados|Selecione o motor da base de dados que será utilizado por esta última. As bases de dados incluídas numa oferta de [alojamento web da OVH](https://www.ovh.pt/alojamento-partilhado/){.external} só propõe o motor MySQL.|  
|Versão da base de dados|Selecione a versão utilizada pelo motor da base de dados. Verifique a compatibilidade do seu website com a versão selecionada. |  
|Tipo de base de dados|Selecione a capacidade da base de dados. Trata-se do espaço que a sua base terá para armazenar dados.|   

A seguir, introduza a informação solicitada e clique em `Seguinte`{.action}.

|Informação|Descrição|   
|---|---|   
|Utilizador|Personalize o nome de utilizador que ficará associado à sua base de dados.|   
|Palavra-passe|Defina uma palavra-passe para este utilizador e valide-a.|   

De seguida, verifique as informações apresentadas no resumo. Se estiverem corretas, clique em `Validar`{.action} para iniciar a criação da base de dados. Volte a efetuar esta operação as vezes que forem necessárias para criar várias bases de dados.

> [!primary]
>
> Por razões de segurança, escolha a sua palavra-passe de acordo com as indicações apresentadas. Além disso, recomendamos que:
>
> - não utilize duas vezes a mesma palavra-passe;
>
> - selecione uma palavra-passe sem qualquer relação com as suas informações pessoais (apelido, nome ou data de nascimento, por exemplo);
>
> - renove as suas palavras-passe de forma regular;
>
> - não anote nem envie as suas palavras-passe para o seu endereço de e-mail;
>
> - não guarde as suas palavras-passe no seu browser, mesmo que lhe seja sugerido.
>

![databasecreation](images/database-creation-step2.png){.thumbnail}

### 3 - Utilizar a base de dados

Só falta utilizar a sua base de dados. Para o fazer, tenha consigo as informações necessárias para aceder: o nome de utilizador e a respetiva palavra-passe que acabou de definir, o nome da base de dados que acabou de personalizar e o endereço do servidor.

Estas informações são indispensáveis para associar o seu website à base de dados. Em função do website utilizado, esta associação deve ser realizada manualmente ou através de uma interface de gestão própria do website. Uma vez que esta configuração é inerente à configuração do seu website e não à OVH, recomendamos que contacte o editor do seu website ou um profissional, tal como um fornecedor especializado, caso necessite de ajuda para realizar estas operações.

A OVH tem à sua disposição uma aplicação online: phpMyAdmin. Para ficar a conhecer a ligação de acesso para esta aplicação, aceda sempre ao separador `Base de dados`{.action}, clique nos três pontos à direita da linha correspondente à base de dados que pretende e clique em `Aceder ao phpMyAdmin`{.action}. Deverá introduzir as suas credenciais de acesso à base de dados criada na OVH.

## Quer saber mais?

Fale com a nossa comunidade de utilizadores em [https://community.ovh.com/en/](https://community.ovh.com/en/){.external}