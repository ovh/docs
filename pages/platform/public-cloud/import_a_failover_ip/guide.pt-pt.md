---
title: 'Importar um Additional IP'
excerpt: 'Este guia explica como importar um Additional IP para o seu projeto Public Cloud OVHcloud.'
slug: importar_um_ip_failover
section: Rede
---

**Última atualização: 10/03/2022**

> [!primary]
>
> A partir de 6 de outubro de 2022, a nossa solução "Failover IP" passou a designar-se [Additional IP](https://www.ovhcloud.com/pt/network/additional-ip/). Isto não tem qualquer impacto nas suas funcionalidades ou no funcionamento dos seus serviços.
>

## Objetivo

Se precisa de configurar um endereço Additional IP numa das suas instâncias, quer seja para:

- Tem vários sítios na sua instância. 
- Acolhe projectos internacionais.
- Deseja migrar a sua atividade de um servidor dedicado para uma instância Public Cloud.

Pode importar um endereço Additional IP associado a outro serviço OVHcloud.

**Este guia explica como poderá importar esse Additional IP para o seu projeto Public Cloud OVHcloud.**

## Requisitos

- Um [projeto Public Cloud](https://www.ovhcloud.com/pt/public-cloud/) criado na sua conta OVHcloud
- Acesso à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}
- Um [endereço Additional IP](https://www.ovhcloud.com/pt/bare-metal/ip/){.external}

## Instruções

Comece por fazer login na [Área de Cliente OVHcloud](https://www.ovh.pt/auth/?action=gotomanager){.external}, selecione o seu projeto na secção `Public Cloud`{.action}. Por fim, selecione `Additional IP`{.action} na secção "Network".

Clique em `Ações`{.action} e selecione `Importar um IP`{.action} para visualizar todos os endereços IP que podem ser importados para o seu projeto Public Cloud.

![Secção IP](images/import1.png){.thumbnail}

Se ainda não dispõe de endereços Additional IP no seu projeto Public Cloud, a opção de importar um IP aparecerá na página inicial.

Clique nos três pontos à direita do IP que deseja importar e clique em `Importar este Additional IP`{.action}.

![Importar Additional IP](images/import2.png){.thumbnail}

Agora, clique em `Importar`{.action}.

![Importar Additional IP](images/importconfirm.png){.thumbnail}

Uma vez terminado, surgirá a seguinte informação a confirmar que a migração do IP foi bem-sucedida.

Deverá então clicar nos três pontos à direita e depois em `Modificar a instância associada`{.action}.

![Importar Additional IP](images/modifyinstance.png){.thumbnail}

Surgirá uma janela pop-up na qual poderá escolher a instância para onde deseja mover o seu IP:

![Importar Additional IP](images/modifyinstance1.png){.thumbnail}

Clique em `Associar`{.action} e aguarde pela confirmação de que o IP foi associado à instância:

![Importar Additional IP](images/modifycompleted.png){.thumbnail}

O seu Additional IP está agora associado à sua instância.

O passo seguinte será a configuração do IP no seu sistema operativo. Consulte o nosso guia aqui: [Configurar um Additional IP](https://docs.ovh.com/pt/public-cloud/configurer-une-ip-failover/){.external}.

## Vá mais longe

Junte-se à nossa comunidade de utilizadores em <https://community.ovh.com/en/>.