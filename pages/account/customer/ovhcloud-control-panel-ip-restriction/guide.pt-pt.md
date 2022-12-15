---
title: "Limitar o acesso por IP à Área de Cliente OVHcloud"
slug: ovhcloud-control-panel-ip-restriction
excerpt: "Saiba como proteger a sua conta OVHcloud limitando os endereços IP autorizados a aceder à mesma"
section: Segurança
order: 03
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

**Última atualização: 13/12/2022**
  
## Objetivo
  
A OVHcloud oferece-lhe opções para reforçar a segurança da sua Área de Cliente OVHcloud e dos seus serviços.

Em particular, pode restringir o acesso ao seu [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt) a determinados endereços IP.
A implementação desta opção, associada à proteção da sua conta com uma [dupla autenticação](https://docs.ovh.com/pt/customer/proteger-a-sua-conta-com-uma-2FA/), permite proteger de forma ótima a sua Área de Cliente OVHcloud contra eventuais tentativas de intrusão.

**Descubra como proteger a sua conta OVHcloud limitando os endereços IP autorizados a aceder à mesma**

> [!warning]
>
> A restrição de acesso por IP e/ou a dupla autenticação só protegem o acesso à Área de Cliente OVHcloud a partir da qual pode encomendar, gerir, renovar ou eliminar os seus serviços OVHcloud. Estas opções não protegem os seus serviços, para os quais deve implementar medidas de segurança específicas.
>
  
## Requisitos

- Ter acesso à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt).
- Ter tomado conhecimento das [recomendações sobre a gestão da palavra-passe de acesso à sua conta](https://docs.ovh.com/pt/customer/gerir-a-palavra-passe/).
  
## Instruções

### Etapa 1 - recuperar os endereços IP públicos autorizados a aceder à sua Área de Cliente OVHcloud

Existem dois tipos de endereços IP:

- **Os endereços IP públicos**: são visíveis em toda a rede Internet. Estas são utilizadas, por exemplo, pelo seu ponto de acesso/box Internet, para que tenha um endereço na Internet para aceder ao conjunto da rede.
- **Os endereços IP privados**: invisíveis e inutilizáveis na rede Internet, são atribuídos numa rede local. Para citar o nosso exemplo, a sua página web vai atribuir um endereço IP privado a cada um dos dispositivos (computadores, smartphones, tablets,..) ligados a esta. Assim, o seu ponto de acesso/box Internet permite que estes dispositivos utilizem o seu IP público para aceder à Internet. Estes endereços IP são fáceis de reconhecer pois começam geralmente por 10.0.X.X, 172.16.X.X ou 192.168.X.X (em que os X são valores compreendidos entre 0 e 255).

Para utilizar a opção de restrição por IP da Área de Cliente OVHcloud, deverá introduzir **unicamente** o(s) seu(s) endereço(s) IP público(ais).

Para obter o endereço IP público de um dispositivo que será autorizado a aceder à sua Área de Cliente OVHcloud, aceda ao site [mon-ip.com](https://mon-ip.com){.external} (não gerido pela OVHcloud).

Tome nota do endereço IP que aparece e repita a operação para cada um dos dispositivos que será autorizado a aceder à sua Área de Cliente OVHcloud.

Se utilizar uma rede 4G/5G em complemento, não se esqueça de recuperar também o endereço IP dessa(s) rede(s).

> [!warning]
>
> A maioria dos fornecedores de acesso à Internet (FAI) disponibiliza um endereço IP **dinâmico** ao seu ponto de acesso Internet/box. Estes endereços IP dinâmicos mudam ao reiniciar o seu box ou a cada 24/48 horas. No entanto, alguns FAI podem atribuir-lhe endereços IP **fixos** a pedido.
>
> Para uma ligação em 3G/4G/5G, os endereços IP são sistematicamente **dinâmicos**.
>
> **Antes** de implementar uma restrição por IP na Área de Cliente OVHcloud, verifique junto do seu ISP que os endereços IP recuperados anteriormente são de facto endereços IP **fixos**. Caso contrário, correrá o risco de perder rapidamente o acesso à Área de Cliente OVHcloud ao declarar um IP dinâmico.
>

### Etapa 2 - implementar uma restrição de acesso por IP

Aceda à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt). Clique no seu `nome e apelido` no canto superior direito **e** nos seus `iniciais` na coluna azul que aparece à direita.

![Access from Manager](images/ip1.png){.thumbnail}

A seguir, clique no separador `Segurança`{.action} para chegar à seguinte página:

![Access from Manager](images/ip2.png){.thumbnail}

Clique em `Ativar`{.action} à direita da `restrição de acesso por IP`.

#### Apresentação da interface

![Access from Manager](images/ip3.png){.thumbnail}

Estão presentes duas secções para a implementação das restrições por IP:

- **Regra predefinida**. Este campo permite:
    - recusar o acesso ao conjunto dos endereços IP, exceto os previamente declarados como **autorizados* na segunda secção *IP configurados*. 
    - permitir o acesso a todos os endereços de IP, exceto os previamente declarados como **recusados* na segunda secção *IP configurados*.
    > Escolha a casa `Alerta`{.action} se deseja ser notificado por e-mail no seu endereço de e-mail de contacto, quando foi efetuada uma tentativa de ligação não autorizada para aceder à sua Área de Cliente.

- **IP configurados**. Este campo permite declarar os endereços IP que serão objeto de uma restrição ou de uma autorização de acesso. Também permite visualizar as regras previamente implementadas.

> [!alert]
>
> Atenção antes de prosseguir com as suas ações.
>
> Na secção `Regra predefinida`{.action}, não valide **nunca** a regra por defeito no estado `Recusado`{.action} **sem ter autorizado** corretamente e no passado pelo menos um dos endereços IP públicos na secção `IP configurados`. 
>
> Caso contrário, bloqueará **absolutamente todos os IP públicos (incluindo os seus)** sem qualquer exceção. Já ninguém terá acesso ao seu [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt) e deverá realizar um procedimento administrativo para desbloquear a sua situação.
>
> Esteja portanto extremamente vigilante quanto a este ponto.
>

#### Recusar todos os endereços IP com exceção dos endereços legítimos

Para autorizar o acesso à Área de Cliente OVHcloud apenas a um ou vários endereços IP legítimos, clique no botão `Adicionar uma restrição`{.action}.

> Nas capturas de ecrã que se seguirão, o IP **192.0.2.0** deverá ser substituído por um IP que lhe diz respeito.
> 

![Add allow rule](images/ip4.png){.thumbnail}

Na janela que se abrir, indique o endereço IP público que deseja autorizar no formulário `IP`{.action}. Escolha a casa `Alerta`{.action} se deseja ser notificado por e-mail das tentativas de ligação através desse endereço IP, e deixe a `Regra`{.action} no estado `Autorizado`{.action}.

Clique em `Seguinte`{.action} e verifique o seu endereço IP e a regra antes de clicar em `Validar`{.action}.

![Add allow rule](images/ip5.png){.thumbnail}

A regra deverá aparecer na secção `IP configurados`.

![Add allow rule](images/ip6.png){.thumbnail}

> [!primary]
>
> **Antes** de prosseguir com as ações descritas nesta etapa, repita a operação acima para todos os outros endereços IP que deseja autorizar a aceder à sua Área de Cliente OVHcloud.
>

Depois de **ter inserido o conjunto** dos seus endereços IP públicos na secção `IP configurados`, passe, na secção `Regra predefinida`, para, para a regra no estado `Recusado`{.action}. Selecione a casa `Alerta`{.action} se deseja ser notificado por e-mail das tentativas de ligação, e clique em `Validar`{.action}.

![Add allow rule](images/ip7.png){.thumbnail}

> A partir de agora, **apenas** os endereços IP públicos previamente autorizados na secção `IP configurados` podem aceder à sua Área de Cliente OVHcloud. 

#### Autorizar todos os endereços IP com exceção de certos endereços

A opção de restrição de acesso por IP permite também autorizar todos os endereços de IP a aceder à sua Área de Cliente OVHcloud, à exceção de alguns que terá previamente identificado como ilegítimos.

Para bloquear o acesso à sua Área de Cliente OVHcloud a um ou vários endereços IP, clique na secção `IP configurados`, no botão `Adicionar uma restrição`{.action}.

![Add deny rule](images/ip9.png){.thumbnail}

Na nova janela, indique o endereço de IP público que deseja bloquear no campo `IP`{.action}. Escolha a casa `Alerta`{.action} se deseja ser notificado por e-mail das tentativas de ligação através desse endereço IP, e depois passe a `Regra`{.action} no estado `Recusado`{.action}.

Clique em `Seguinte`{.action}, verifique o endereço IP e a regra antes de clicar em `Validar`{.action}.

![Add deny rule](images/ip10.png){.thumbnail}

A regra deverá aparecer na secção `IP configurados`.

![Add deny rule](images/ip11.png){.thumbnail}

> [!primary]
>
> **Antes** de prosseguir com as ações descritas nesta etapa, repita a operação para todos os outros endereços IP que deseja bloquear para a sua Área de Cliente OVHcloud.
>

Depois de inserir todos os endereços IP públicos na secção `IP configurados`, deixe a regra no secção `Regra predefinida`, para estado `Autorizado`{.action}. Selecione a casa `Alerta`{.action} se deseja ser notificado por e-mail das tentativas de ligação, e clique em `Validar`{.action}.

![Add deny rule](images/ip12.png){.thumbnail}

> A partir de agora, **todos** os endereços IP públicos podem aceder à sua Área de Cliente OVHcloud, **à exceção dos** que são declarados na secção `IP configurados`.

## Quer saber mais?

[Implementar uma dupla autenticação na sua Área de Cliente OVHcloud](https://docs.ovh.com/pt/customer/proteger-a-sua-conta-com-uma-2FA/)

Para serviços especializados (referenciamento, desenvolvimento, etc), contacte os [parceiros OVHcloud](https://partner.ovhcloud.com/pt/).

Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](https://www.ovhcloud.com/pt/support-levels/).

Fale com nossa comunidade de utilizadores: <https://community.ovh.com/en/>. 
