---
title: Configurar um IP Failover em Windows
excerpt: Configurar um IP Failover em Windows
slug: configurar_um_ip_failover_em_windows
legacy_guide_number: g2046
---


## 
Se necessita de configurar um endereço IP Failover nas suas instâncias, quer seja porque:

- dispõe de vários websites na sua instância,
- aloja vários projetos internacionais,

É possível adquirir ou importar um endereço IP Failover para as suas instâncias Public Cloud.

No entanto, estes endereços IP Failover não são configurados automaticamente nas suas instâncias, e este guia ajuda-o a configurar a interface de rede da sua instância para que consiga adicionar o seu endereço IP Failover.


## Pré-requisitos

- [Criar uma instância no Espaço Cliente OVH]({legacy}1775)
- Um endereço IP Failover




## Configuração da interface
O Windows não aceita a configuração de um endereço IP Failover como complemento da configuração do endereço principal em DHCP.
É então necessário reconfigurar a sua placa de rede com um IP fornecido de forma manual.


- Recupere as informações rede com a ajuda do "ipconfig":



![](images/img_3609.jpg){.thumbnail}

- Aceda ao Painel de controlo e depois aceda a Centro de rede e partilha :



![](images/img_3602.jpg){.thumbnail}

- Modificar os parâmetros da placa :



![](images/img_3603.jpg){.thumbnail}

- Aceder às propriedades da sua interface:



![](images/img_3604.jpg){.thumbnail}

- Aceder à configuração do protocolo TCP/IPv5



![](images/img_3605.jpg){.thumbnail}

- Passar a sua configuração em manual, e utilize uma configuração similar à que é apresentada em baixo ao adaptar os endereços IP conforme as informações que obteve com a ajuda do seu "ipconfig" e depois clique em "Avançado:



![](images/img_3606.jpg){.thumbnail}

- Adicionar o seu endereço IP Failover como se segue:



![](images/img_3607.jpg){.thumbnail}


## 

- [Migrar um endereço IP Failover]({legacy}1890)




## 
[Voltar à página inicial dos guias Cloud]({legacy}1785)

