---
title: "Proteger um domínio com DNSSEC"
excerpt: "Proteja o seu domínio contra o “cache poisoning” com o serviço DNSSEC"
slug: proteja_o_seu_dominio_com_dnssec
legacy_guide_number: g609
section: Segurança
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

**Última atualização: 19/10/2022**

## Sumário

Os servidores DNS alojam a configuração DNS de um nome de domínio. Numa utilização clássica, esta configuração permite fazer a ligação entre o seu nome de domínio e os servidores que alojam o seu website e os seus endereços de e-mail. Nos últimos anos, os piratas informáticos aperfeiçoaram os métodos de “envenenamento” dos servidores DNS, o que lhe permite desviar o tráfego para outros servidores. O serviço DNSSEC permite proteger o domínio contra este tipo de ações.

**Saiba como ativar o DNSSEC no seu domínio para o proteger do “cache poisoning”.**  
Para compreender como funciona esta proteção, aconselhamos que consulte a seguinte página: “[Serviço DNSSEC](https://www.ovhcloud.com/pt/domains/dnssec/){.external}”.

## Requisitos

- Ter um nome de domínio registado na OVHcloud.
- O nome de domínio afetado deve dispor de uma extensão compatível com o DNSSEC.
- Ter acesso à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}, na secção `Web Cloud`{.action}.

## Instruções

É possível ativar o DNSSEC de duas formas diferentes:

- **se o nome de domínio utilizar os servidores DNS da OVHcloud**: a ativação é realizada diretamente na Área de Cliente;

- **se o seu domínio não utilizar os servidores DNS da OVHcloud**, será necessário entrar em contacto com o fornecedor responsável pela gestão da configuração dos DNS e pedir-lhe todos os parâmetros. De seguida, aceda à secção `Cloud Web`{.action}. Clique em `Domínios`{.action} e escolha o domínio em questão na lista.
Clique no separador `DS records`{.action} e, de seguida, no botão Editar à direita, clique no botão `+`{.action}.
Pode agora preencher os 4 campos, "Key tag", "Flag", "Algorithm", "Public key (encoded in base64)", com os dados fornecidos pelo seu fornecedor atual.

> [!primary]
>
> Para verificar se o domínio utiliza a configuração DNS da OVHcloud, aceda à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}, selecione o domínio e clique em `Servidores DNS`{.action}.

### 1 - Aceder à gestão do nome de domínio

Aceda à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}, na secção `Web Cloud`{.action}. A seguir, clique em `Alojamentos`{.action} e, em seguida, selecione o domínio correspondente.

Poderá consultar as informações gerais do domínio na nova janela que irá aparecer.

### 2 - Gerir o DNSSEC de um nome de domínio

No mesmo separador `Informações gerais`{.action}, poderá verificar o estado da ativação do DNSSEC no seu domínio.

Para isso, na secção “Segurança”, verifique o estado junto de “Delegação Segura (DNSSEC)”.

![dnssec](images/activate-dnssec-step2.png){.thumbnail}

Poderá ativar ou desativar o serviço DNSEEC no domínio movendo o botão de ativação. Aparecerá uma nova janela onde deverá validar a alteração.

![dnssec](images/activate-dnssec-step3.png){.thumbnail}

### 3 - Aguardar durante a ativação ou a desativação

Depois de decidir se irá ativar ou desativar o serviço DNSSEC no domínio, deverá esperar um máximo de 24 horas até que as alterações sejam aplicadas.

## Quer saber mais?

Fale com a nossa comunidade de utilizadores em <https://community.ovh.com/en/>.
