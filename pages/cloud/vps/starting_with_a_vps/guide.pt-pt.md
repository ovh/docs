---
title: 'VPS - primeira utilização'
excerpt: 'Saiba como instalar e começar a gerir um VPS'
slug: instalar-gerir-vps
section: 'Primeiros passos'
order: 1
---

**Última atualização: 18/04/2018**
 
## Sumário

Um VPS (Virtual Private Server) é um servidor dedicado virtual. Ao contrário de um alojamento web (com recursos partilhados), cuja gestão cabe à OVHcloud, a gestão e a utilização de um VPS é da total responsabilidade do cliente.

**Este manual fornece instruções sobre a instalação e a gestão básica do VPS OVHcloud que acabou de contratar.**


> [!warning]
>
> A utilização e gestão das soluções VPS da OVHcloud são da responsabilidade do cliente. A OVHcloud não tem permissões de acesso aos VPS. O cliente é o único responsável pela gestão e pela segurança do serviço. Este guia fornece as instruções necessárias para usar as funcionalidades básicas de um VPS. Se encontrar alguma dificuldade relacionada com o processo, deverá contactar um serviço especializado. Para mais informações, aceda à secção abaixo intitulada: «Quer saber mais?»
> 


## Requisitos

- Ter contratado um [VPS OVHcloud](https://www.ovhcloud.com/pt/vps/){.external}.
- Ter recebido um e-mail depois da instalação com os dados de utilizador.


## Instruções

Para consultar a informação relativa ao VPS, aceda à [Área de Cliente](https://www.ovh.com/auth/?action=gotomanager){.external}, clique na secção `Cloud`{.action} e em `Servidores`{.action} no menu da esquerda. Esta secção agrega a informação e as ações necessárias para configurar e usar o seu VPS.

### Aceder ao VPS

Após a instalação (ou reinstalação) do VPS, é enviado um e-mail com a palavra-passe de acesso root via SSH. O SSH é um protocolo de comunicação segura. O acesso ao VPS é feito através do terminal de comandos (Linux ou MAC) ou, no caso dos sistemas Windows, por intermédio de um software de terceiros (e.g. Putty).

Abra o terminal e execute um dos comandos abaixo para aceder ao VPS.

```sh
ssh root@IPv4_do_seu_VPS
```

Ou:

```sh
ssh root@Referência_do_seu_VPS
```

A referência do VPS começa sempre por vpsXXXX.ovh.net, sendo que XXXX corresponde a uma série de números.


### Instalar ou reinstalar o VPS

A instalação é realizada através da Área de Cliente. Para tal, clique no botão `Reinstalar o meu VPS`{.action}:

Depois, surge uma janela onde poderá escolher:

- o sistema operativo;
- o idioma;
- uma chave SSH, caso já tenha criado chaves na Área de Cliente.

> [!primary]
>
> Os sistemas como o Plesk ou o Windows só podem ser usados com uma licença válida. Esta pode ser adquirida através da OVHcloud ou de um revendedor de software. Se já tiver uma licença, deverá integrá-la no serviço de forma manual ou através da Área de Cliente. Para gerir as licenças na Área de Cliente, clique em `Servidores Dedicados`{.action}, e em `Licenças`{.action}.
Nesta secção, pode adquirir licenças (clicando no botão à direita «Ações» e em `Encomendar`{.action}), ou adicionar a sua licença SPLA Windows ou SPLA SQL Server (clicando no botão à direita «Ações» e em `Adicionar uma licença SPLA`{.action}).
> 

Durante a instalação, irá surgir uma barra de progresso. Esta indica o andamento do processo. A reinstalação pode demorar até 30 minutos.

### Como proteger o VPS

O cliente é responsável pela pela gestão do VPS, incluindo segurança do servidor e dos dados aí armazenados. 

Para saber mais sobre a segurança do VPS, consulte o guia [Como proteger um VPS](https://docs.ovh.com/pt/vps/como-proteger-vps/){.external}.


### Como proteger um domínio com um certificado SSL

Depois de instalar e proteger o VPS, é necessário garantir a segurança do seu domínio e do respetivo site. A instalação de um certificado SSL permite aceder ao seu site de forma segura, através do protocolo *https* (em vez do protocolo *http*).

O certificado SSL pode ser instalado manualmente pelo utilizador no VPS. Para tal, consulte os manuais do sistema operativo ou do software de gestão do VPS.

Se preferir uma instalação automática, recomendamos o [SSL Gateway](https://www.ovh.pt/ssl-gateway/){.external}. Para mais informação, consulte a [página do produto](https://www.ovh.pt/ssl-gateway/){.external} ou o [manual](https://docs.ovh.com/pt/ssl-gateway/){.external} relativo a esta oferta.


## Quer saber mais?

Consulte o manual[Introdução ao SSH](https://docs.ovh.com/pt/dedicated/ssh-introducao/){.external}.

Ou fale com a nossa comunidade de utilizadores: <https://community.ovh.com/en/>.