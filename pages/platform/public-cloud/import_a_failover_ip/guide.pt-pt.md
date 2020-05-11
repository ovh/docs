---
title: 'Importar um IP Failover'
excerpt: 'Este guia explica como importar um IP Failover para o seu projeto Public Cloud OVH.'
slug: importar_um_ip_failover
legacy_guide_number: g1883
---

**Última atualização a 6 de dezembro de 2019**

## Sumário

Se precisa de configurar um endereço IP Failover numa das suas instâncias, quer seja para:

- utilizar vários websites, 
- alojar projetos internacionais,
- migrar a sua atividade de um servidor dedicado para uma instância Public Cloud,

... pode importar um endereço IP Failover associado a outro serviço OVH.

**Este guia explica como poderá importar esse IP Failover para o seu projeto Public Cloud OVH.**

## Requisitos

* acesso à [Área de Cliente OVH](https://www.ovh.com/auth/?action=gotomanager){.external}
* um [endereço IP Failover](https://www.ovh.pt/servidores_dedicados/ip_failover.xml){.external} associado a um [servidor dedicado OVH](https://www.ovh.pt/servidores_dedicados/){.external}.

## Instruções

Comece por fazer login na [Área de Cliente OVH](https://www.ovh.pt/auth/?action=gotomanager){.external}, depois clique no menu `Public Cloud`{.action} e no seu `Projeto`{.action}.

Por fim, selecione `IP Failover`{.action} na secção Rede.

![Secção IP](images/import.png){.thumbnail}

Serão então exibidos todos os endereços IP que podem ser importados para o seu projeto Public Cloud:

![Secção IP](images/import1.png){.thumbnail}

Clique nos três pontos à direita do IP que deseja importar e clique em `Importar este IP Failover`{.action}.

![Importar IP Failover](images/import2.png){.thumbnail}

Agora, clique em `Importar`{.action}:

![Importar IP Failover](images/importconfirm.png){.thumbnail}

Uma vez terminado, surgirá a seguinte informação a confirmar que a migração do IP foi bem-sucedida.

Deverá então clicar nos três pontos à direita e depois em `Modificar a instância associada`{.action}.

![Importar IP Failover](images/modifyinstance.png){.thumbnail}

Surgirá uma janela pop-up na qual poderá escolher a instância para onde deseja mover o seu IP:

![Importar IP Failover](images/modifyinstance1.png){.thumbnail}

Clique em `Associar`{.action} e aguarde pela confirmação de que o IP foi associado à instância:

![Importar IP Failover](images/modifycompleted.png){.thumbnail}

O seu IP Failover está agora associado à sua instância.

O passo seguinte será a configuração do IP no seu sistema operativo. Consulte o nosso guia aqui: [Configurar um IP Failover](https://docs.ovh.com/gb/en/public-cloud/configure_a_failover_ip/){.external}

## Vá mais longe

Junte-se à nossa comunidade de utilizadores em <https://community.ovh.com/en/>.