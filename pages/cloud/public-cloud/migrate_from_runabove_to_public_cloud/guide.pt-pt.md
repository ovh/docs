---
title: Migrar de RunAbove para Public Cloud
excerpt: Migrar de RunAbove para Public Cloud
slug: migrar_de_runabove_para_public_cloud
legacy_guide_number: g1942
---


## 
Como é possível verificar no [site](https://www.runabove.com/index.xml), RunAbove é agora a marca que apresentará todas as inovações da OVH sob a forma de diferentes "Labs".


## 
Estando em fase de encerramento em RunAbove, é necessário migrar as suas atividades ligadas às instâncias, volumes adicionais e Object Storage o mais rapidamente possível.
Para tal, vários guias foram já criados para a o acompanhar nesta migração.


## Pré-requisitos

- [Preparar o ambiente para utilizar a API OpenStack]({legacy}1851)




## Carregar as variáveis de ambiente OpenStack para RunAbove
Num primeiro tempo, é necessário obter o ficheiro RC que contém todas as informações necessárias á utilização das API OpenStack:


- Ligar-se à conta RunAbove.

- Clicar no seu nome no canto superior esquerdo, e selecionar OpenStack Horizon.



![](images/img_3038.jpg){.thumbnail}

- Selecionar a região, no menu da esquerda

- Aceder ao menu Access & Security e depois ao separador API Access



![](images/img_3039.jpg){.thumbnail}

- Clicar emDownload OpenStack RC File

- Carregar as variáveis de ambiente OpenStack para RunAbove com recurso ao ficheiro RC


```
root@serveur:~$ source RunAbove_OpenRC.sh
```





## Migração
Há  guias que explicam como transferir cópias de segurança de instâncias e volumes adicionais de um datacenter para outro.
Como são compatíveis com RunAbove, eles podem ser utilizados para o ajudar a migrar a sua atividade:


Migrar as suas instâncias:

- [Transferir uma cópia de segurança de uma instância de um datacenter para outro]({legacy}1853)


Migrar os seus volumes de armazenamento adicionais:

- [Transferir uma cópia de segurança de um espaço de armazenamento de um datacenter para outro]({legacy}1941)


Para a migração de Object Storage, é possível fazer download do conteúdo e depois enviar os dados para o seu novo projeto. É também possível sincronizar 2 containers:

- [Synchroniser des conteneurs d'objets]({legacy}1919)




## Faturação
Ao contrário de RunAbove, há 2 tipos de faturação no serviço Public Cloud:


- À hora: Semelhante à existente em RunAbove, a fatura será gerada em função dos seus consumos durante o mês que se segue.

- Mensal: Beneficia de um desconto de 50% quando escolhe este modo de faturação, A fatura será gerada imediatamente, sob a forma de pro-rata temporis.




## Funcionalidades
Atualmente, certas funcionalidades não estão ainda disponíveis no serviço Public Cloud :


- As redes privadas;
- Os endereços IP "Flutuantes";


As redes privadas serão, em breve, disponibilizadas e serão compatíveis com o vRack.

Em paralelo, outras funcionalidades que não estavam presentes em RunAbove estão já à disposição no serviço Public Cloud :


- Licenças Windows disponíveis para as instâncias EG e SP;
- A importação de endereços IP Failover;
- A utilização de IP Load Balancing;




## 
[Voltar à lista dos guias Cloud]({legacy}1785)

