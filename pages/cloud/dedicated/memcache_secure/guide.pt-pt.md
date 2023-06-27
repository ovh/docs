---
title: Como proteger um servidor com o serviço Memcached
excerpt: Saiba como garantir a segurança do sistema Memcached
updated: 2018-03-02
---

**Última atualização: 02/03/2018**


## Sumário

O Memcached é um sistema de base de dados de armazenamento «em memória cache» usado, por exemplo, para acelerar aplicações web. Este sistema guarda em cache o conteúdo estático e os resultados das consultas a bases de dados. Ou seja, é uma base base de dados de armazenamento chave-valor (armazenamento não persistente).

Na configuração original, o Memcached não está protegido com um sistema de autenticação. Isto significa que, se o servidor estiver acessível, «toda a gente» pode ler e alterar os dados aí armazenados. Como tal, é necessário alterar a configuração para garantir a segurança da base de dados.


**Este guia ajuda a realizar a configuração de forma correta.**


> [!warning]
>
> A utilização e a gestão dos serviços OVHcloud são da responsabilidade do cliente. A OVHcloud não tem permissões de acesso à parte lógica dos sistemas. O cliente é o único responsável pela gestão e pela segurança destes serviços.
>
> Este guia explica como implementar algumas medidas para tornar o seu sistema mais seguro. Se encontrar alguma dificuldade relacionada com o processo, deverá contactar um serviço especializado. Para mais informações, aceda à secção deste guia intitulada: «Quer saber mais?»
>


## Requisitos


- Ter acesso ao servidor com o serviço Memcached (acesso SSH para sistemas Linux, acesso via Desktop Remoto para Windows).
- Conseguir identificar os serviços que usam Memcached. Para tal, convém saber responder às seguintes questões:
    - Os serviços que usam Memcached estão todos no mesmo servidor? São usados numa rede privada?
    - Os serviços que usam Memcached precisam de estar disponíveis na Internet?


## Instruções

### Configurações de segurança do Memcached

A proteção do servidor memcached é garantida de duas formas:

- limitando o endereço de escuta (listener) do sistema;
- aceitando apenas ligações TCP.


Antes da versão /1.5.6/, a configuração original memcached permitia ligações TCP e UDP. Isto porque, quando o Memchached foi criado, o protocolo UDP era uma boa solução para aumentar a rapidez das ligações. Nessa altura, os recursos de rede eram mais limitados.
Contudo, o protocolo UDP pode ser usado para realizar ataques DDoS «por amplificação».
Este guia é destinado ao grupo dos 99% de utilizadores que não precisam de usar UDP.

Se o seu servidor memcached só for usado numa máquina local, pode limitar o endereço de escuta a `127.0.0.1`.
Se houver necessidade de ligar outras máquinas ao servidor através duma rede privada, deve forçar a escuta a um IP privado (e.g. `10.0.0.1`). Este deve ser adaptado às classe IP da sua rede.

**De qualquer maneira**, é necessário desativar a escuta em UDP, usando o comando `-U 0`.

Na próxima secção, iremos dar exemplos de configuração para os principais sistemas operativos.


#### Debian/Ubuntu

Normalmente, os sistemas Debian e Ubuntu usam `service memcached status/start/restart/force-reload` para gerir o serviço Memcached. Se for este o caso, altere o ficheiro `/etc/memcached.conf` usando o acesso root.

Primeiro, adicione a instrução indicada abaixo para desativar a escuta UDP:

```sh
# Disable UDP protocol
-U 0
```
Se o servidor memcached só for usado na máquina local, use a opção indicada abaixo para anular a vulnerabilidade do serviço na Internet:

```sh
-l 127.0.0.1
```

Agora, guarde o ficheiro e execute um destes dois comandos para implementar a nova configuração.


```sh
service memcached force-reload
/etc/init.d/memcached force-reload
```


#### CentOS - Fedora - Red Hat


Normalmente, os sistemas CenTOS, Fedora e Red Hat usam `service memcached status/start/restart/force-reload` para gerir o serviço Memcached. Se for este o caso, altere o ficheiro `/etc/sysconfig/memcached` usando o acesso root.


Se o servidor memcached só for usado na máquina local, sugerimos o uso do comando `OPTIONS` conforme indicado abaixo, para desativar o protocolo UDP e anular a vulnerabilidade do serviço na Internet:

```sh
OPTIONS="-l 127.0.0.1 -U 0"
```


Se o seu servidor memcached for usado por outros servidores, use o comando`OPTIONS` conforme indicado abaixo, para desativar o protocolo UDP:

```sh
OPTIONS="-U 0"
```

Agora, guarde o ficheiro e execute o comando indicado abaixo para implementar a nova configuração:

```sh
sudo service memcached force-reload
```


#### Arch Linux


Normalmente, o Arch Linux usa `systemctl start/restart/stop memcached` para gerir o serviço Memcached. Se for este o caso, altere o ficheiro `/usr/lib/systemd/system/memcached` usando o acesso root.

Se o seu servidor memcached só for usado na máquina local, sugerimos o uso do comando indicado abaixo, para desativar o protocolo UDP e anular a vulnerabilidade do sistema na Internet:

```sh
ExecStart=/usr/bin/memcached -l 127.0.0.1 -U 0 -o modern
```


Se o seu servidor memcached for usado por outros servidores, use o comando indicado abaixo para desativar o protocolo UDP:

```sh
ExecStart=/usr/bin/memcached -U 0 -o modern
```


Agora, guarde o ficheiro e execute um dos comandos indicados abaixo implementar as novas configurações:


```sh
sudo systemctl daemon-reload
sudo systemctl force-reload memcached
```

## Quer saber mais?

Fale com a nossa comunidade de utilizadores: <https://community.ovh.com/en/>.