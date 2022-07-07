---
title: "Proteger um domínio com DNSSEC"
excerpt: "Proteja o seu domínio contra o “cache poisoning” com o serviço DNSSEC"
slug: proteja_o_seu_dominio_com_dnssec
legacy_guide_number: g609
section: Segurança
---

**Última atualização: 02/05/2019**

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

- **se o nome de domínio não utilizar os servidores DNS da OVHcloud**: deverá contactar o prestador responsável pela respetiva configuração DNS. Se gerir a configuração DNS, deverá instalar manualmente o DNSSEC utilizando a documentação disponível online.

> [!primary]
>
> Para verificar se o domínio utiliza a configuração DNS da OVHcloud, aceda à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}, selecione o domínio e clique em `Servidores DNS`{.action}.

### 1 - Aceder à gestão do nome de domínio

Aceda à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}, na secção “Web”. A seguir, clique em Alojamentos e, em seguida, selecione o domínio correspondente.

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
