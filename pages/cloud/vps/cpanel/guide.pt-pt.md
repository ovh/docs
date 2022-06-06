---
title: 'Implementar o cPanel num VPS'
slug: cpanel
excerpt: 'Saiba como instanciar um VPS com a aplicação cPanel pré-instalada.'
section: 'Utilização avançada'
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

**Última atualização: 14/10/2021**

## Objetivo

O cPanel é um painel de configuração concebido para alojamentos web. Graças à sua interface gráfica, que permite a automatização dos parâmetros, o alojamento web torna-se mais simples.

**Saiba como implementar o cPanel com as aplicações pré-instaladas num VPS.**

## Requisitos

- Um [VPS da gama atual](https://www.ovhcloud.com/pt/vps/) (ofertas Value, Essential, Comfort ou Elite).
- Estar ligado à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt).

## Instruções

Para instalar o seu servidor cPanel, primeiro tem de encomendar um VPS com a distribuição cPanel.

![cPanel](images/cpanel_order.png){.thumbnail}

Quando o VPS estiver pronto, receberá um e-mail a dar-lhe as informações de acesso ao servidor cPanel:

```
 |    As suas aplicações:
 |    Pode conectar-se ao cPanel a partir de https://<ip>:2087/<session_parameters>
```

Se já dispõe de um VPS e pretende instalar o cPanel, pode reinstalar o VPS a partir da [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt) com o modelo "CentOS 7 - cPanel" (disponível apenas com uma oferta VPS compatível).

> [!warning]
>
> Se reinstalar um VPS, todos os dados armazenados no VPS serão eliminados.
> 

### Primeira conexão

Depois de receber o e-mail com o link único, clique neste link para efetuar a configuração inicial.

> [!primary]
>
> Se a ligação já expirou, ligue-se ao seu VPS via SSH usando o utilizador CentOS e execute o comando « sudo whmlogin » para gerar uma nova ligação.
>

O URL acima mencionado permite-lhe ligar-se sem informações de identificação (utilizador e palavra-passe) à sua interface WHM.

#### 1 - ler as condições de utilização do cPanel

Leia e aceite as condições de utilização do cPanel

![cPanel](images/license_validation.png){.thumbnail}

#### Etapa 2: preencher os campos

Indique os servidores de e-mail e nomes (nameservers) que deseja definir no servidor VPS.

![cPanel](images/setup_config_cpanel.png){.thumbnail}

#### Etapa 3: definir a password root

![cPanel](images/change_root.png){.thumbnail}

Já deve poder ligar-se ao WHM e ao SSH através do utilizador root com a palavra-passe que acaba de ser definida.

### Segurança do seu serviço

Recomendamos que tome todas as medidas necessárias para proteger a sua WHM e o seu VPS. Para isso, recomendamos que leia as recomendações do cPanel [aqui](https://docs.cpanel.net/knowledge-base/security/tips-to-make-your-server-more-secure/){.external}.

Também recomendamos que consulte o nosso manual para [proteger um VPS](../como-proteger-vps/), que utilize as [nossas soluções de backup](../) e que configure a [Network Firewall](../../dedicated/firewall-network/).

## Quer saber mais?

Fale com a nossa comunidade de utilizadores em <https://community.ovh.com/en/>.
