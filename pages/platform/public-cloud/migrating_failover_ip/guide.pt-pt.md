---
title: Migrar um IP Failover
excerpt: Migrar um IP Failover
slug: migrar_um_ip_failover
legacy_guide_number: g1890
---


## 
Este guia como poderá migrar um IP Failover de uma instância para outra. Esta operação pode ter vários objetivos, permitindo geralmente limitar ou eliminar casos de indisponibilidade de serviço:

- migrar um website para a sua "nova versão";
- passar a sua aplicação para um servidor de backup enquanto efetua uma manutenção no servidor de produção.




## Pré-requisitos

- Dispor de, no mínimo, duas instâncias Public Cloud iniciadas
- Um IP Failover




## 

- No inicio, o IP está roteado para o Servidor 1 e desejo migrá-lo para o Servidor 2.



![](images/img_3815.jpg){.thumbnail}

- Clique no botão e clique depois em "Modificar" o servidor associado.



![](images/img_3816.jpg){.thumbnail}

- Selecione a opção de selecção do servidor de destino.



![](images/img_3817.jpg){.thumbnail}

- Clique em migrar


O IP poderá ser configurado no servidor de destino antes de efetuar a migração, ou após, como preferir. Se ele já estiver pré-configurado, ele passará a responder assim que a operação de migração terminar.


## 
[Voltar à página inicial dos guias Cloud]({legacy}1785)

