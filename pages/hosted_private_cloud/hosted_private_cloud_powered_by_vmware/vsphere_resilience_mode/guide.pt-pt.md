---
title: Testar a perda temporária de um host através da ativação do modo Resiliência
excerpt: Saiba como testar a perda temporária de um host com o modo Resiliência na sua infraestrutura Hosted Private Cloud da OVHcloud
---

## Objetivo

Se deseja realizar um teste de resiliência na sua infraestrutura Hosted Private Cloud da OVHcloud, o modo Resiliência permite simular a perda temporária de um host, a fim de validar a continuidade da atividade da sua produção em caso de incidente.

**Saiba como testar a perda temporária de um host com o modo Resiliência na sua infraestrutura Hosted Private Cloud da OVHcloud**

## Requisitos

- Dispor de uma oferta [Hosted Private Cloud](https://www.ovhcloud.com/pt/enterprise/products/hosted-private-cloud/).
- Ter acesso à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt).

## Instruções

Esta operação efetua-se a partir das API OVHcloud e terá por efeito o corte da acessibilidade à rede para o host selecionado e a sua desativação por um período definido previamente (min:10min, max:24h, default:1h).

Este teste é independente do sistema de vigilância, evitando assim a substituição automática do host.

Desta forma, as VMs serão desligadas e a migração para o(s) host(s) restante(s) será(ão) operada(s) pelo vSphere HA se a funcionalidade estiver corretamente configurada no seu cluster.

Para mais informações sobre o vSphere HA pode consultar a documentação VMware «[Funcionamento do vSphere HA](https://docs.vmware.com/en/VMware-vSphere/7.0/com.vmware.vsphere.avail.doc/GUID-33A65FF7-DA22-4DC5-8B18-5A7F97CCA536.html)».

Assim, poderá estimar o tempo de retoma de atividade a partir do lançamento do teste e da simulação do incidente (RTO) até que as VMs sejam reiniciadas.

Aqui estão as chamadas a executar a fim de listar e obter os identificadores da sua infraestrutura, do seu datacenter e do host sobre os quais deseja realizar este teste:

Para obter o nome da sua infraestrutura: (pcc-xx-xx-xx):

> [!api]
>
> @api {v1} /dedicatedCloud GET /dedicatedCloud

Para recuperar o identificador do seu datacenter:

> [!api]
>
> @api {v1} /dedicatedCloud GET /dedicatedCloud/{serviceName}/datacenter

E finalmente para recuperar o identificador do seu host:

> [!api]
>
> @api {v1} /dedicatedCloud GET /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/host

Depois de obter estas informações, para validar que pode lançar a ação, pode utilizar a seguinte chamada que vai validar as condições de realização do teste e assim evitar qualquer perda de atividade:

> [!api]
>
> @api {v1} /dedicatedCloud GET /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/host/{hostId}/resiliência/canBeEnabled

Se o teste for possível, o resultado será verdadeiro.

Poderá utilizar a seguinte chamada para realizar o teste:

> [!api]
>
> @api {v1} /dedicatedCloud POST /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/host/{hostId}/resiliência/enable

O host será então desligado e passará para o modo "Sem resposta" até ao fim do teste:

![vsphere](images/resilience_mode.png){.thumbnail}

Pode verificar o estado da ação utilizando a seguinte chamada:

> [!api]
>
> @api {v1} /dedicatedCloud GET /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/host/{hostId}/resiliência

Se o teste foi corretamente iniciado no host, o resultado será: enabled.

Se for necessário, também pode interromper o teste antes da duração escolhida por meio desta chamada:

> [!api]
>
> @api {v1} /dedicatedCloud POST /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/host/{hostId}/resiliência/disable

Entre as informações devolvidas encontrará a planificação da tarefa "updateHostResilienceOff".

A conectividade do host será restabelecida no final do teste e a sua infraestrutura HPC será restabelecida nas condições normais de utilização.

## Saiba mais

Fale com a nossa comunidade de utilizadores em <https://community.ovh.com/en/>.
