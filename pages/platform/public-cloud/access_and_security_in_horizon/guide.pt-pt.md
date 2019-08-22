---
title: Acesso e Segurança na interface Horizon
description: O guia de Acesso e Segurança descreve como aceder e tornar seguras as instâncias
excerpt: O guia de Acesso e Segurança descreve como aceder e tornar seguras as instâncias
slug: acesso_e_seguranca_na_interface_horizon
legacy_guide_number: g1774
---


## 
O OpenStack propõe-lhe um menu que permite a configuração de diferentes elementos que dizem respeito ao acesso às suas instâncias e a outros serviços.
Pode, por exemplo, configurar grupos de segurança que permitem filtrar as ligações de saída e entrada das suas instâncias, ou ainda efetuar o download do ficheiro OpenRC que contém os seus identificadores de forma a que os utilize na API OpenStack.

Este guia dá-lhe as dicas para que os encontre nesse menu.


## Pré-requisitos

- [Criar um acesso ao Horizon]({legacy}1773)




## 

- Estabelecer ligação à [interface Horizon](https://horizon.cloud.ovh.net/auth/login/)
- Clicar na secção Acesso e Segurança


Aí encontraremos 3 separadores:

- Grupos e segurança permitirá gerir as regras de segurança e os acessos às instâncias, limitar o acesso a apenas algumas portas.



![](images/img_2630.jpg){.thumbnail}

- Pares de chaves Permite a gestão das chaves SSH de duas formas distintas:

|Criar um par de chaves|Atribuir um nome à chave, o browser irá propor o download da mesma|
|Importar um par de chaves|Importar uma chave pública existente|



- Acesso API permite visualizar as informações relacionadas com a API e também fazer download do ficheiro openrc.sh qye permite utilizar a API penStack



![](images/img_2632.jpg){.thumbnail}


## 
[Voltar ao índice dos guias Cloud]({legacy}1785)

