---
title: Recuperar as métricas de um SQL Privado com Grafana
excerpt: Recuperar as métricas de um SQL Privado com Grafana
id: '2057'
slug: recuperar_as_metricas_de_um_sql_privado_com_grafana
legacy_guide_number: g2057
---


## 

## O que é o Docker?
Docker é um software livre que automatiza a implementação de aplicações nos containers softwares.

![](images/img_3657.jpg){.thumbnail}

## O que é o Grafana ?
Grafana é uma solução open-source que permite colocar dados em forma de gráficos, por exemplo.

![](images/img_3658.jpg){.thumbnail}


## Uma instância
Para instalar Grafana, é necessário utilizar Docker. Poderá utilizá-la em diferentes produtos propostos pela OVH:


- [VPS](https://www.ovh.pt/vps/)
- [Serveur dédié](https://www.ovh.pt/servidores_dedicados/)
- [Instance Cloud](https://www.ovh.pt/cloud/instances/)




## Docker?

## Como instalar?
Em função da sua máquina poderá seguir a documentação acessível neste [link](https://docs.docker.com/engine/installation/) para o instalar.

## Numa VPS
Se dispõe de uma VPS na OVH poderá escolher a instalação da distribuição "Docker on Ubuntu" que lhe permite dispor de um servidor já de Docker.

![](images/img_3659.jpg){.thumbnail}


## Grafana

## Instalar Grafana em Docker
Se deseja utilizar Grafana na porta 80 do seu servidor, é necessário utilizar o seguinte comando:


```
docker run -i -p 80:3000 grafana/grafana
```


Poderá encontrar mais informações neste [link](http://docs.grafana.org/installation/docker/).
Poderá instalar Grafana sem Docker, e para tal basta que consulte a seguinte [documentação](http://docs.grafana.org/installation/).


## Um servidor SQL Privado

## Tipo de SQL Privado
O seu servidor SQL Privado deverá ser do tipo "Docker" para recuperar as métricas.

## Ativação gratuita nos alojamentos Performances
Se dispõe de um alojamento performance poderá ativar um servidor SQL Privado de forma gratuita com a ajuda do [seguinte guia](https://www.ovh.pt/g2023.partilhado_tudo_sobre_sql_privado#gerir_o_meu_servico_sql_privado).

## Encomendar um servidor SQL Privado
Pode encomendar um servidor SQL Privado diretamente no seu Espaço Cliente.


- Todos os novos servidores SQL Privado implementado são do tipo "Docker".



![](images/img_3660.jpg){.thumbnail}

## O meu servidor SQL Privado é do tipo "Legacy" ou "Docker"?
OS antigos servidores SQL Privado são do tipo "Legacy" (exemplo: sqlprive-kx11111-009), os novos são do tipo "Docker" (exemplo: sx11111-012).
Tratam-se de duas infraestruturas diferentes.

![](images/img_3661.jpg){.thumbnail}


## Obter o token via a API OVH

## Ligar-se à API OVH
Para se ligar à API OVH queira aceder ao seguinte link e clicar em "Login" para se ligar.

[https://api.ovh.com/console/](https://api.ovh.com/console/)

![](images/img_3662.jpg){.thumbnail}

## Recuperar o token
Deverá utilizar a seguinte funçãop para recuperar a lista dos servidores SQL Privado presentes na sua conta e depois clique em "Execute" :


```
/hosting/privateDatabase
```



![](images/img_3663.jpg){.thumbnail}
Introduza através da seguinte função o nome do seu seu servidor SQL Privado do tipo "Docker":


```
/hosting/privateDatabase/{serviceName}
```


Encontrará no "graphEndpoint" duas informações necessárias:


- readToken
- host



![](images/img_3664.jpg){.thumbnail}


## Utilizar Grafana

## Ligação ao seu Grafana
Aceda à sua Grafana através do seu navegador, os identificadores padrão são:


- admin / admin



![](images/img_3665.jpg){.thumbnail}

## Adicionar a sua source de dados
É necessário para tal clicar em "Data Sources" na coluna à esquerda e depois em cima clique em "Add new".

Introduza as seguintes informações:


- Name: o nome da sua source de dados, no nome caso será "private SQL".
- Default: Sim
- Type: "OpenTSDB"
- URL: introduza aqui o conteúdo do campo "host" obtido anteriormente na API OVH
- Access: "proxy"
- Http Auth: Selecione "Basic Auth", desselecione "With Credentials"
- User: introduza aqui o conteúdo do campo "readToken" obtido anteriormente na API OVH
- Password: introduza igualmente o conteúdo do campo readToken" obtido anteriormente na API OVH


Efetue um teste de ligação, e se o mesmo for conclusivo, adicione a source de dados.

![](images/img_3666.jpg){.thumbnail}

## Configurar o seu "Dashboard"
Clique na coluna à esquerda em "Dahboards", clique no topo em "Home" e depois em "New".


- Obterá desta forma um painel que poderá renomear ao clicar no ícone "Manage Dashboard" e depois em "Settings".
- Poderá a qualquer momento efetuar o backup do seu painel de controlo ao clicar no ícone de "Disquete" no topo.


Um painel de controlo é composto pela linha ("Row"), e para adicionar o primeiro gráfico deverá clicar no botão verde, e depois em "Add Panel" e "Graph".

![](images/img_3667.jpg){.thumbnail}
No separador "General", introduza o título do seu gráfico, por exemplo, "RAM".

![](images/img_3668.jpg){.thumbnail}

- No separador "Metrics", verifique num primeiro tempo que a sua source de dados está selecionada em baixo à direita.


A primeira métrica a introduzir é "memory.hierarchical_memory_limit", e corresponde à RAM máxima alocada ao seu servidor SQL Privado.

Clique de seguida em "+ Query" para adicionar a segunda métrica "memory.rss", esta corresponde à RAM utilizada pelo seu servidor.

![](images/img_3669.jpg){.thumbnail}
No separador "Axes & Grid", selecione em "Left Y" a unidade ""data" e depois "Bytes"

![](images/img_3670.jpg){.thumbnail}

- Escolha no topo direito o intervalo de tempo a observar, e veja o que foi obtido nos últimos 60 dias.



![](images/img_3671.jpg){.thumbnail}


## As métricas
Vejamos 3 exemplos de métricas pertinentes para monitorizar as performances do seu SQL Privado:

|RAM Máximo utilizada|memory.hierarchical_memory_limit|
|RAM Utilizada|memory.rss|
|Número de ligações MySQL ativas|mysql.active_connections|


Encontrará no seguinte link a documentação oficial sobre as métricas Docker:


- [https://docs.docker.com/engine/articles/runmetrics/](https://docs.docker.com/engine/articles/runmetrics/)



