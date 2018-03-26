---
title: Preparar o ambiente para utilizar a API OpenStack
excerpt: Preparar o ambiente para utilizar a API OpenStack
slug: preparar_o_ambiente_para_utilizar_a_api_openstack
legacy_guide_number: g1851
---


## 
Para poder gerir os seus serviços Public Cloud com a ajuda de um terminar poderá instalar os clientes OpenStack para Python.
Deste modo poderá efetuar a gestão do Object Storage, mas também a automatização de diferentes ações que poderá efetuar com a ajuda destes clientes.
Este guia explica-lhe como instalar clientes OpenStack


## Em Debian

- Abrir um terminal ou ligação SSH ao ambiente a configurar:

- [Passer root](https://www.ovh.com/fr/publiccloud/guides/g1786.passer_root_et_definir_un_mot_de_passe)

- Atualizar a lista de pacotes

```
root@vps187763:~# apt-get update
```


- Instalar os clientes Nova (compute) e glance (image service)

[code]root@vps187763:~# apt-get install python-glanceclient python-novaclient -y[/code
Uma vez efetuada esta etapa, é aconselhável a criação de um utilizador específico para não trabalhar com o utilizador 'root'.

- Para consultar a ajuda das interfaces CLI Nova e Glance, proceda da seguinte forma:

```
admin@vps187763:~$ nova help
```



```
admin@vps187763:~$ glance help
```


- A documentação completa da API OpenStack está disponível [aqui](http://docs.openstack.org/cli-reference/content/)




## Em CentOS

- Abrir um terminal ou ligação SSH ao ambiente a configurar:

[Autenticar-se como utilizador 'root' e definir uma palavra-passe]({legacy}1786)

- Atualizar a lista de pacotes:

```
[root@vps187769 ~]# yum update -y
```


- Instalar o rpm rdo-release :

```
[root@vps187769 ~]# yum install -y https://rdoproject.org/repos/rdo-release.rpm
```


- Instalar Nova

```
[root@vps187769 ~]# yum install -y python-novaclient
```


- Instalar Glance

```
[root@vps187769 ~]# yum install -y python-glanceclient
```



Fonte : [https://www.rdoproject.org/Quickstart](https://www.rdoproject.org/Quickstart)
Uma vez efetuada esta etapa, é aconselhável a criação de um utilizador específico para não trabalhar com o utilizador 'root'.

- Para consultar a ajuda das interfaces CLI Nova e Glance, proceda da seguinte forma:

```
admin@vps187763:~$ nova help
```



```
admin@vps187763:~$ glance help
```


- A documentação completa da API OpenStack está disponível [aqui](http://docs.openstack.org/cli-reference/content/)




## 

- fazer download e instalar a versão [2.7.10 de Python](https://www.python.org/downloads/release/python-2710/)

- Abrir a "linha de comandos"

- Instalar PIP com recurso a easy_install :



![](images/img_3060.jpg){.thumbnail}

- Instalar Swift



![](images/img_3061.jpg){.thumbnail}

- Será possível ver a ajuda da interface CLI graças ao seguinte comando:


```
C:\Windows\system32>swift --help
```





## 
[Voltar à lista dos guias Cloud]({legacy}1785)

