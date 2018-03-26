---
title: Criar um container de objetos
excerpt: Criar um container de objetos
slug: criar_um_container_de_objetos
section: Object Storage
legacy_guide_number: g1921
---


## 
A primeira etapa para que possa utilizar a solução de armazenamento propostas pelo Public Cloud é proceder à criação de um container que reagrupará os seus ficheiros.
Este guia explica como o poderá criar no manager horizon da OpenStack


## Pré-requisitos

- [Criar um acesso ao Horizon]({legacy}1773)




## 

- Ligue-se ao Horizon
- Selecione "Object Store" à esquerda



![](images/img_2935.jpg){.thumbnail}

- Clique em "Create Container"


Uma nova janela aparecerá:

![](images/img_2937.jpg){.thumbnail}
Poderá:

- Nomear o seu container
- Selecionar o tipo de container

|Public|Acessível a todos|
|---|
|Public|Acessível a todos|
|Privado|Disponível apenas a quem se autenticar|


Após validar, o seu container aparecerá e terá à sua disposição novas operações:

![](images/img_2938.jpg){.thumbnail}
Poderá:

- Consultar os detalhes do seu container
- Torná-lo público ou privado
- Eliminá-lo


Ao clicar no nome do container pode igualmente:

- Criar um "pseudo" container


Ao efetuar esta operação, os dados que colocar no Object Storage não serão armazenamentos numa árvore clássica (Pasta > Sub-pasta).
Eles ficarão ao mesmo nível, o que reduzirá os tempos de acesso aos ficheiros.
Estes pseudo-pastas serão apresentadas na formad e prefixo e dá-lhe a possibilidade de organizar os seus dados de forma diferente.

- Enviar os seus ficheiros
- Eliminar os seus ficheiros e pseudo-pastas
- Efetuar download dos ficheiros
- Copiar os seus ficheiros
- Consultar os detalhes dos seus ficheiros




## 
[Voltar ao índice dos guias Cloud]({legacy}1785)

