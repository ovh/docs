---
title: "Reencaminhar um domínio gerido pela OVHcloud"
slug: reencaminhamento-dominio
excerpt: "Descubra os diferentes tipos de reencaminhamento e como criar um reencaminhamento para um domínio gerido pela OVHcloud"
section: Geral
order: 01
---

**Última atualização: 27/09/2022**

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

## Objetivo

O reencaminhamento de um domínio consiste em reencaminhá-lo para um novo destino. Existem diferentes tipos de reencaminhamentos, cada um deles respondendo a uma necessidade específica.

**Descubra diferentes formas de reencaminhar o seu domínio**

## Requisitos

- Dispor de um [nome de domínio](https://www.ovhcloud.com/pt/domains/)
- Ter acesso ao seu [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}.
- Estar conectado ao seu alojamento web (para um reencaminhamento através de um ficheiro [.htaccess](#htaccess_rewrite).

## Instruções

#### Compreender o reencaminhamento de um domínio

Esta funcionalidade permite reencaminhar um domínio/subdomínio para:

- outro domínio/subdomínio já existente:
    - **Exemplo**: `domain.tld`
- um URL (Uniform Resource Locator) de site Internet:
    - **Exemplos**: `http://www.domain.tld/welcome/` ou `https://www.domain.tld/welcome/` (se o domínio-alvo dispuser de um certificado SSL compatível).

Estas ações podem ser realizadas de várias formas:

- **A partir da [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt)**. em que um assistente de configuração permite configurar o seu reencaminhamento.
- **Através de um método que requer programação**. Deverá criar você mesmo o reencaminhamento num ficheiro (geralmente um [.htaccess](#htaccess_rewrite)).

> [!warning]
>
> O reencaminhamento pode afetar o referenciamento do seu website. 
> Esteja atento às operações que vai efetuar ou contactar um [fornecedor especializado](https://partner.ovhcloud.com/pt/) no referenciamento, se necessário.
>
> Atenção: um reencaminhamento criado a partir da[Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt) não permite reencaminhar um URL em `https://` para outro domínio ou URL. 
> Para criar este tipo de reencaminhamento, deverá obrigatoriamente passar por [uma re-escritura de URL](https://docs.ovh.com/pt/hosting/partilhado_htaccess_rescrita_de_urls_gracas_ao_mod_write/) através de um ficheiro ".htaccess", por exemplo.

## Quer saber mais?

Fale com a nossa comunidade de utilizadores: <https://community.ovh.com/en/>.