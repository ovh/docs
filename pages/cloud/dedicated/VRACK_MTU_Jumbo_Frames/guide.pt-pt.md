---
title: 'Configurar quadros Jumbo no vRack'
slug: 'network-jumbo'
excerpt: 'Saiba como configurar quadros Jumbo no vRack'
section: 'vRack'
---

**Última atualização: 26/08/2020**

## Objetivo

Os quadros Jumbo, ou *Jumbo Frames*, são quadros Ethernet cuja carga útil é superior a 1500 bytes e que pode ir até 9000 bytes. A sua utilização permite minimizar o tempo de tratamento do roteamento. No caso do vRack, isto irá otimizar o tráfego do mesmo.

**Saiba como configurar a sua distribuição Linux para que utilize os quadros Jumbo no vRack.**

## Requisitos

- Ter um [vRack](https://www.ovh.pt/solucoes/vrack/){.external}.
- Abrir um shell com direitos root

> [!warning]
> Esta funcionalidade pode estar indisponível ou limitada nos [servidores dedicados **Eco**](https://eco.ovhcloud.com/pt/about/).
>
> Para mais informações, consulte o nosso [comparativo](https://eco.ovhcloud.com/pt/compare/).

> [!primary]
>
> O tamanho MTU deve ser idêntico em todos os hosts da mesma rede. 
>

## Instruções

### Verificar a MTU

```sh
ip link show | grep mtu
```

### Definir um novo tamanho e testar o comando

```sh
ip link set <nome da interface> mtu 9000
```

### Tornar a modificação permanente 

Edite o ficheiro `/etc/network/interface` e adicione as seguintes linhas:

#### Para uma interface gerida por DHCP

```sh
Auto <nome da interface>

Iface <nome da interface> inet dhcp

  Pre-up /sbin/ip link set dev <nome da interface> up mtu 9000
```

#### Para uma interface em IP fixo

```sh
Auto <nome da interface>

Iface <nome da interface> inet static
  mtu 9000
```

## Quer saber mais?

Fale com a nossa comunidade de utilizadores em <https://community.ovh.com/>.
