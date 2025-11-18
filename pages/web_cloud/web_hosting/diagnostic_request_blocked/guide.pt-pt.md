---
title: "O que acontece se a página «Your request has been blocked» aparecer?"
excerpt: "Saiba como agir se o seu website apresenta uma página «Your request has been blocked»"
updated: 2025-07-16
---

<style>
details>summary {
    color:rgb(33, 153, 232) !important;
    cursor: pointer;
}
details>summary::before {
    content:'\25B6';
    padding-right:1ch;
}
details[open]>summary::before {
    content:'\25BC';
}
</style>

## Objetivo

A infraestrutura partilhada onde se encontram os alojamentos web da OVHcloud dispõe de vários sistemas de segurança.
Se o seu website apresentar uma página «Your request has been blocked», isso significa que um dos pedidos que está a tentar executar no seu website foi bloqueado pelos nossos sistemas de segurança.

![your-request-has-been-blocked](/pages/assets/screens/other/browsers/errors/your-request-has-been-blocked.png){.thumbnail}

**Saiba como agir se o seu website apresenta uma página «Your request has been blocked».**

## Requisitos

- Ter um [serviço de alojamento web](/links/web/hosting) OVHcloud.
- Dispor dos [dados de acesso](/pages/web_cloud/web_hosting/ftp_connection) ao espaço FTP de armazenamento do seu alojamento.
- Ter acesso à [Área de Cliente OVHcloud](/links/manager).

## Instruções

A página «Your request has been blocked» pode ser apresentada por vários motivos (lista não exaustiva):

- O pedido é efetuado a partir de um browser Internet (Firefox, Chrome, Safari, Edge, etc.) não atualizado.
- Um grande número de pedidos, semelhantes ou não, são efetuados num prazo extremamente curto.
- O pedido tenta executar ações não autorizadas na infraestrutura partilhada onde se encontra o seu alojamento web.

### 1 - Verifique se o seu browser está atualizado

Aceda às definições do browser e verifique se existe uma atualização.

/// details | Clique aqui para obter mais informações sobre a atualização do browser da Internet

A seguir, poderá encontrar os procedimentos de atualização para os principais browsers da Internet (documentação fornecida pelos seus editores):

- [Firefox](https://support.mozilla.org/pt-BR/kb/atualize-o-firefox).
- [Chrome](https://support.google.com/chrome/answer/95414?hl=pt&co=GENIE.Platform%3DDesktop&oco=0).
- [Safari](https://support.apple.com/pt-pt/102665).
- [Edge](https://support.microsoft.com/pt-pt/topic/defini%C3%A7%C3%B5es-de-atualiza%C3%A7%C3%A3o-do-microsoft-edge-af8aaca2-1b69-4870-94fe-18822dbb7ef1).

Se o seu browser da Internet não estiver presente na lista acima, consulte a sua documentação online ou contacte o suporte do seu editor.

///

Assim que o browser estiver atualizado, tente aceder novamente ao seu Web site. Se a situação persistir, continue a ler este guia.

### 2 - Obtenha as informações presentes na página «Your request has been blocked» e contacte o suporte

O sistema de segurança que bloqueia os seus pedidos encontra-se a montante do seu alojamento web. Por conseguinte, não terá acesso aos logs deste sistema de segurança a partir da sua Área de Cliente OVHcloud.

#### 2.1 - Obtenha as informações presentes na página «Your request has been blocked»

Em primeiro lugar, recupere as três informações abaixo que são apresentadas na página «Your request has been blocked»:

- `IP address` (por exemplo: 203.0.113.0).
- `Date` (por exemplo: 2025-07-01T16:30:45:150Z).
- `Request ID` (por exemplo: AbCdEf-your-request-ID-GhIjKlM).

#### 2.2 - Contacte o suporte

Após a recolha destes dados, crie um [ticket de assistência](https://help.ovhcloud.com/csm?id=csm_get_help) a partir do Centro de Ajuda da OVHcloud, especificando:

- A mensagem encontrada na página («Your request has been blocked»).
- Os três elementos recuperados anteriormente (`IP address`, `Date` e `Request ID`).
- O URL a partir do qual a página é apresentada (por exemplo: `https://www.domain.tld/index.php`).
- O browser da Internet utilizado.

O suporte irá contactá-lo o mais rapidamente possível para lhe indicar a origem deste bloqueio.

## Quer saber mais?

[Casos de uso - Conselhos após a pirataria do seu website](/pages/web_cloud/web_hosting/cms_what_to_do_if_your_site_is_hacked)

Para serviços especializados (referenciamento, desenvolvimento, etc.), contacte os [parceiros OVHcloud](/links/partner).

Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](/links/support).

Fale com a nossa [comunidade de utilizadores](/links/community).