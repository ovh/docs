---
title: Migração de dados de um NAS-HA para outro via NFS
slug: nas/migration
excerpt: Saiba como migrar os seus dados de uma NAS-HA para outra através de NFS.
section: NAS
order: 05
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

**Última atualização: 09/02/2021**

## Objetivo

Este guia explica em pormenor como transferir os dados de um NAS-HA para outro. 

## Requisitos

Para efetuar a transferência dos seus dados, é necessário:

- Un NAS-HA OVHcloud
- Uma distribuição compatível NFS
- Ter montado previamente o NAS-HA seguindo as instruções para [montar o NAS-HA através de NFS](https://docs.ovh.com/pt/storage/nas-nfs/){.external}.

## Instruções

Compatibilidade: Debian 6/7/8 & Ubuntu 12/13/14

Para transferir os seus dados, utilizaremos o comando `rsync`. Existem várias soluções para transferir os seus dados. Tem a liberdade de utilizar uma em vez de outra.

O exemplo abaixo permite transferir os seus dados de um ponto de montagem Fonte para um ponto de montagem de Destino.

```sh
rsync -Pva /mnt/SrcNas /mnt/DstNas
```

|Argumento|Descrição|
|---|---|
|SrcNas|Ponto de montagem de origem|
|DstNas|Ponto de montagem de destino|

> [!alert]
>
> Atenção: se adicionar outras opções ao rsync, estas poderão não ser compatíveis com o sistema de permissões e direitos NAS-HA.
>

## Saiba mais

Fale com a nossa comunidade de utilizadores: [https://community.ovh.com/en/](https://community.ovh.com/en/){.external}.