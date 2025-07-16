---
title: "O que acontece se a página «Your IP has been banned» aparecer?"
excerpt: "Descubra como desbloquear o seu endereço IP se o seu website apresentar uma página «Your IP has been banned»"
updated: 2025-07-11
---

## Objetivo

A infraestrutura partilhada onde se encontram os alojamentos web da OVHcloud dispõe de vários sistemas de segurança.
Se o seu website apresentar uma página «Your IP has been banned», isso significa que o endereço IP a partir do qual está a tentar aceder ao seu website foi bloqueado temporariamente pelos nossos sistemas de segurança.

![your-ip-has-been-banned](/pages/assets/screens/other/browsers/errors/your-ip-has-been-banned.png){.thumbnail}

**Saiba como desbloquear o seu endereço IP se o seu website apresentar uma página «Your IP has been banned».**

## Requisitos

- Ter um [serviço de alojamento web](/links/web/hosting) OVHcloud.
- Dispor dos [dados de acesso](/pages/web_cloud/web_hosting/ftp_connection) ao espaço FTP de armazenamento do seu alojamento.
- Ter acesso à [Área de Cliente OVHcloud](/links/manager).

## Instruções

A página «Your IP has been banned» pode ser apresentada por vários motivos (lista não exaustiva):

- Um grande número de pedidos, semelhantes ou não, são efetuados num prazo extremamente curto a partir do mesmo endereço IP.
- As consultas efetuadas a partir do endereço IP em questão são suspeitas.

### 1 - Obtenha as informações presentes na página «Your IP has been banned»

Em primeiro lugar, recupere as três informações abaixo que são apresentadas na página «Your IP has been banned»:

- `IP address` (por exemplo: 203.0.113.0).
- `Date` (por exemplo: 2025-07-01T16:30:45:150Z).
- `Request ID` (por exemplo: AbCdEf-your-request-ID-GhIjKlM).

### 2 - Contacte o suporte

Após a recolha destes dados, crie um [ticket de assistência](https://help.ovhcloud.com/csm?id=csm_get_help) a partir do Centro de Ajuda da OVHcloud, especificando:

- A mensagem encontrada na página («Your IP has been banned»).
- Os três elementos recuperados anteriormente (`IP address`, `Date` e `Request ID`).
- O URL a partir do qual a página é apresentada (por exemplo: `https://www.domain.tld/index.php`).
- O browser da Internet utilizado.

O suporte irá contactá-lo o mais rapidamente possível para lhe indicar a origem deste bloqueio.

## Quer saber mais?

[Casos de uso - Conselhos após a pirataria do seu website](/pages/web_cloud/web_hosting/cms_what_to_do_if_your_site_is_hacked)
 
Para serviços especializados (referenciamento, desenvolvimento, etc.), contacte os [parceiros OVHcloud](/links/partner).
 
Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](/links/support).
 
Fale com a nossa [comunidade de utilizadores](/links/community).