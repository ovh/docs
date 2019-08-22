---
title: Criar / Restaurar um servidor virtual a partir de um backup
excerpt: Criar / Restaurar um servidor virtual a partir de um backup
slug: criar_restaurar_um_servidor_virtual_a_partir_de_um_backup
legacy_guide_number: g1882
---


## 
Em certas situações, como por exemplo uma má manipulação que efetuou, poderá necessitar de restaurar a sua instância para um momento anterior graças a um backup que efetuou. Outra das situações possíveis poderá ser a necessidade de criar uma nova instância graças a esse backup, seja para efeitos de repartição de carga seja para criar um ambiente de alta disponibilidade.

Tudo isto é possível e este guia foi desenvolvido para explicar como poderá utilizar os seus backups para recriar, duplicar ou restaurar as suas instâncias.


## Pré-requisitos

- Dispor de um backup de uma instância Public Cloud
- Dispor de um servidor virtual já criado




## 

- Ligue-se ao seu Espaço Cliente Public Cloud OVH
- Clique em Backups



![](images/img_2808.jpg){.thumbnail}

- Clique no ícone "Criar um servidor a partir deste backup" à direita da linha do backup a restaurar
- Obterá a seguinte janela:



![](images/img_2809.jpg){.thumbnail}

- Personalizar o nome da VPS (se necessário)
- Escolher o modelo

Attention

Atualmente, e a partir do Espaço Cliente, a restauração somente é possível unicamente no datacenter de onde o backup é proveniente. Para transferir o backup para outro datacenter será necessário utilizar a API OpenStack


- Escolher a chave SSH
- Escolher o modelo de faturação
- Clique em Lançar agora
- O servidor virtual estará, minutos mais tarde, disponível.




## 

- Ligue-se ao seu Espaço Cliente Public Cloud OVH
- No menu seguinte clique em Editar:



![](images/img_2810.jpg){.thumbnail}

- Obteremos a seguinte janela:



![](images/img_2812.jpg){.thumbnail}

- Personalize o nome do servidor (se necessário)
- Escolha o modelo (características iguais ou superiores à máquina virtual inicial)
- Clique nas distribuições
- Ao aceder a Snapshots terá aí os seus backups



![](images/img_2815.jpg){.thumbnail}

- Clicar em Os meus backups:



![](images/img_2816.jpg){.thumbnail}

- Selecione o backup a restaurar
- Escolha o modo de pagamento
- Clique em Aplicar as modificações
- O servidor virtual estará, segundos mais tarde, disponível.


A sua instância não conservará os dados que foram criados após a criação deste backup.


## 
[Voltar à página principal dos guias Cloud]({legacy}1785)

