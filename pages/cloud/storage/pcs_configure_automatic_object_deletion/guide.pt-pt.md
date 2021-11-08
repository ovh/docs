---
title: Configurar a eliminação automática de objectos
excerpt: Configurar a eliminação automática de objectos
slug: configurar_a_eliminacao_automatica_de_objectos
section: Object Storage Standard (Swift)
legacy_guide_number: g1950
---


##
Para facilitar a gestão do seu Object Storage é possível que tenha necessidade de decidir a duração de vida dos seus ficheiros.
Poderá, por ecemplo, guardá-los durante um certo período de tempo.
Este guia explica-lhe como poderá eliminar os seus ficheiros de forma automática passado algum tempo ou numa data em concreto.


## Pré-requisitos

- [Préparer l'environnement pour utiliser l'API OpenStack]({legacy}1851)
- [Charger les variables d'environnement OpenStack]({legacy}1852)




##
Existem duas formas para eliminar os seus ficheiros:

- Após alguns segundos (a definir)
- Numa data em concreto




## Após alguns segundos (a definir)
Para tal basta configurar o header X-Delete-After dos seus objetos


```
root@server:~$ swift post --header "X-Delete-After: 3600" container test.txt
```


O ficheiro test.txt será então eliminado dentro de 1 hora


## Numa data em concreto
Num primeiro tempo deverá conhecer a data de eliminação em formato epoch.
É possível que utilize um [conversor](http://www.epochconverter.com/) para que consiga recuperar facilmente o valor a introduzir.

Depois do valor recuperado, basta que o introduza no header X-Delete-At :


```
root@server:~$ swift post --header "X-Delete-At: 1448928000000" container test.txt
```


O ficheiro test.txt será eliminado a 01 de Dezembro de 2015.


##
[Voltar ao índice dos guias Cloud]({legacy}1785)
