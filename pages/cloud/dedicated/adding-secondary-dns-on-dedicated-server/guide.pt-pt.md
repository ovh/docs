---
title: 'Criar um DNS secundário num servidor dedicado'
slug: criar-dns-secundario-servidor-dedicado
excerpt: 'Saiba como criar um DNS secundário para o seu servidor dedicado OVHcloud'
section: 'Uso avançado'
---

**Última atualização: 26/10/2018**

## Sumário

Se pretender utilizar o seu [servidor dedicado](https://www.ovh.pt/servidores_dedicados/){.external} enquanto DNS principal para o seu nome de domínio, pode adicioná-lo enquanto DNS secundário ao seu servidor.

**Este manual explica como criar um DNS secundário e adicioná-lo ao seu servidor dedicado da OVHcloud.**


## Requisitos

* Dispor de um [servidor dedicado](https://www.ovh.pt/servidores_dedicados/){.external}.
* Dispor de um [nome de domínio](https://www.ovh.pt/dominios/){.external} e poder geri-lo através da [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}
* Aceder à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}.


## Instruções

### Obter um código de verificação para o nome de domínio

Clique no menu `Serviços Dedicados`{.action} e, em seguida, em `Servidores Dedicados`{.action} na barra à esquerda do ecrã para apresentar o menu pendente dos servidores da sua conta:

![DNS Secundário](images/dns2-01.png){.thumbnail}

De seguida, selecione a janela `DNS secundário`{.action} e clique em `Adicionar domínio`{.action}:

![DNS Secundário](images/dns2-02.png){.thumbnail}

Insira o seu nome de domínio no campo `Domínio` e clique em `Seguinte`{.action}:

![DNS Secundário](images/dns2-03.png){.thumbnail}

Uma mensagem irá aparecer para confirmar o registo de tipo TXT para o seu domínio. Tome nota do subdomínio e do valor que aparecem nas instruções e, em seguida, clique em `Anular`{.action}:

![DNS Secundário](images/dns2-04a.png){.thumbnail}


### Verificar o nome de domínio

Depois de aceder à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}, clique no menu `Web Cloud`{.action} e selecione a secção `Domínios`{.action} na barra à esquerda para ver todos os domínios geridos por si:

![Verificação do domínio](images/domain-verification-01.png){.thumbnail}

Após selecionar o nome de domínio pretendido, selecione a janela `Zona DNS`{.action} e clique no botão `Adicionar uma entrada`{.action}:

![Verificação do domínio](images/domain-verification-02.png){.thumbnail}

De seguida, selecione o tipo de registo `TXT`{.action} e clique em `Seguinte`{.action} para continuar:

![Verificação do domínio](images/domain-verification-03.png){.thumbnail}

Preencha os campos `Subdomínio` e `Valor` através das informações que anotou anteriormente. Após preencher esta informação, clique em `Seguinte`{.action}:

![Verificação do domínio](images/domain-verification-04.png){.thumbnail}

Clique em `Validar`{.action} para adicionar a entrada:

![Verificação do domínio](images/domain-verification-05.png){.thumbnail}

> [!primary]
>
> Será necessário um tempo de propagação DNS de 4 a 24 horas para que a entrada fique ativa em todos os servidores mundiais.
>

### Adicionar o DNS secundário ao servidor

No menu `Serviços Dedicados`{.action}, aceda à secção `Servidores Dedicados`{.action} e abra a janela `DNS secundário`{.action}. Clique em `Adicionar domínio`{.action}:

![DNS Secundário](images/dns2-02.png){.thumbnail}

Insira o seu nome de domínio no campo `Domínio` e clique em `Seguinte`{.action}:

![DNS Secundário](images/dns2-03.png){.thumbnail}

Uma vez que o registo TXT do seu domínio já foi criado, só precisa de clicar em `Seguinte`{.action} para continuar:

![DNS Secundário](images/dns2-04b.png){.thumbnail}

Por fim, clique em `Adicionar`{.action} para confirmar a sua entrada:

![DNS Secundário](images/dns2-05.png){.thumbnail}


## Quer saber mais?

[Editar uma zona DNS OVHcloud](https://docs.ovh.com/gb/en/domains/web_hosting_how_to_edit_my_dns_zone/){.external} (versão em inglês- Editing an OVHcloud DNS zone).

Fale com a nossa comunidade de utilizadores em [https://community.ovh.com/en/](https://community.ovh.com/en/){.external}.
