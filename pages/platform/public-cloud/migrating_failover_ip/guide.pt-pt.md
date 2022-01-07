---
title: 'Migrar um IP Failover'
excerpt: 'Migrar um IP Failover'
slug: migrar_um_ip_failover
legacy_guide_number: g1890
section: Rede
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

**Última atualização: 06/01/2022**

##  Objetivo
Este guia explica como poderá migrar um IP Failover de uma instância para outra. Esta operação pode ter vários objetivos, permitindo geralmente limitar ou eliminar casos de indisponibilidade de serviço:

- migrar um website para a sua “nova versão”;
- passar a sua aplicação para um servidor de backup enquanto efetua uma manutenção ou atualização do servidor de produção.


## Requisitos

- Dispor de, no mínimo, duas instâncias [Public Cloud](https://www.ovhcloud.com/pt/public-cloud/){.external} iniciadas
- Um IP Failover
- Ter acesso à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt)

## Instruções

### Migração do IP Failover

Em primeiro lugar, aceda ao [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt), aceda à secção `Public Cloud`{.action} e selecione o serviço Public Cloud em causa. De seguida, selecione o Failover IP na secção **Network**.
No nosso exemplo, um IP failover é rodado para "Instância_A" e nós queremos redirecioná-lo para "Instância_B".

![ip-failover](images/failover2022.png){.thumbnail}

Clique nos três pontos à direita do IP Failover e depois em `Alterar a instância associada`{.action}. 

![ip-failover](images/modify1.2022.png){.thumbnail}

Clique na opção junto ao servidor de destino

![ip-failover](images/modify1.png){.thumbnail}

- Clique em `Associar`{.action}

- Após alguns segundos, a área de cliente será atualizada e surgirá a seguinte mensagem a confirmar que a migração foi bem-sucedida:

![ip-failover](images/modify2.2022.png){.thumbnail}


> [!primary]
>
> O IP poderá ser configurado no servidor de destino antes de efetuar a migração, ou após, como preferir. Se já estiver pré-configurado, passará a responder assim que a operação de migração terminar.
> 

## Quer saber mais?

[Configurar um IP Failover](https://docs.ovh.com/pt/public-cloud/configurer-une-ip-failover/)

[Importar um IP Failover](https://docs.ovh.com/pt/public-cloud/importar_um_ip_failover/)

Fale com a nossa comunidade de utilizadores: [https://community.ovh.com/en/](https://community.ovh.com/en/)