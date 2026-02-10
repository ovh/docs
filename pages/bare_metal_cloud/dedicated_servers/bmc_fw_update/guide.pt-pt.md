---
title: 'Verificação da versão do firmware BMC num servidor dedicado'
excerpt: "Descubra como verificar a versão do firmware BMC num servidor dedicado."
updated: 2026-02-11
---

## Objetivo

As atualizações regulares do firmware desempenham um papel essencial na manutenção do desempenho, estabilidade e segurança dos seus discos. Estas atualizações incluem frequentemente correções de bugs críticos, melhorias de compatibilidade e funcionalidades avançadas de segurança indispensáveis para preservar a integridade dos seus dados e manter uma eficiência operacional otimizada.

**Este guia indica-lhe os passos a seguir para verificar a versão do firmware BMC num servidor dedicado.**

## Requisitos

- Um [servidor dedicado](/links/bare-metal/bare-metal) no seu conta OVHcloud.
- Direitos de administrador (sudo).
- Ligação à Internet (apenas se a ferramenta `ipmitool` ainda não estiver instalada).

### Num Servidor Linux

Em primeiro lugar, tem de instalar a ferramenta `ipmitool`. Esta ferramenta permite interrogar o BMC através da interface IPMI. Eis a documentação oficial: <https://linux.die.net/man/1/ipmitool>

Consoante a distribuição Linux, o comando pode variar:

> [!tabs]
> **Debian/Ubuntu**
>>
>> ```sh
>> sudo apt update
>> sudo apt install ipmitool -y
>> ```
>>
> **RHEL/CentOS/AlmaLinux/Rocky Linux**
>>
>> ```sh
>> sudo dnf install epel-release -y
>> sudo dnf install ipmitool -y
>> ```
>> 

Verifique a versão do firmware BMC com o seguinte comando:

```sh
sudo ipmitool mc info
```

![bmc](images/ipmi_tool.png){.thumbnail} 

Se a versão do firmware for inferior a 1.14, contacte o nosso apoio técnico criando um [ticket de assistência a partir do centro de ajuda OVHcloud](/links/support-contact) para solicitar uma atualização do firmware. No entanto, se a versão for superior a 1.14, nenhuma ação é necessária.

### Num Servidor Windows

Atualmente, não podemos fornecer a procedimento para servidores a funcionar com o sistema operativo Windows. Recomendamos que reinicie o seu servidor Windows no nosso ambiente [modo rescue](/pages/bare_metal_cloud/dedicated_servers/rescue_mode) para verificar a versão. O comando também funciona em modo rescue.

### Num Servidor em modo rescue

Depois de reiniciar o seu servidor no [modo rescue](/pages/bare_metal_cloud/dedicated_servers/rescue_mode), instale a ferramenta `ipmitool`.

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # apt install ipmitool -y
```

Em seguida, verifique a versão do firmware:

```sh
ipmitool mc info
```

![bmc](images/ipmi_tool_rescue.png){.thumbnail}

Se a versão do firmware for inferior a 1.14, contacte o nosso apoio técnico criando um [ticket de assistência a partir do centro de ajuda OVHcloud](/links/support-contact) para solicitar uma atualização do firmware. No entanto, se a versão for superior a 1.14, nenhuma ação é necessária.

## Quer saber mais?

Para serviços especializados (indexação, desenvolvimento, etc.), contacte os [parceiros OVHcloud](/links/partner).

Se desejar beneficiar de um apoio no uso e configuração das suas soluções OVHcloud, sugerimos que consulte as nossas várias [ofertas de suporte](/links/support).

Fale com a nossa [comunidade de utilizadores](/links/community).