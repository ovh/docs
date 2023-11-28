---
title: "Configurar um script iPXE personalizado para iniciar o seu servidor através da API OVHcloud"
excerpt: "Descubra como a API OVHcloud lhe permite configurar um script de arranque personalizado PXE para dar bootagem ao seu servidor"
updated: 2023-08-24
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

## Objetivo

> [!warning]
>
> Este artigo destina-se aos utilizadores experientes que tenham no mínimo conhecimentos de base sobre o [lançamento PXE](https://en.wikipedia.org/wiki/Preboot_Execution_Environment) bem como sobre a implementação utilizada na OVHcloud: [PXE](https://ipxe.org/).
>

Na [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt), é possível especificar um modo de boot entre uma lista predefinida: disco principal ou rescue.
Através da [API OVHcloud](https://api.ovh.com/), pode também definir scripts personalizados.

Utilizar um script personalizado pode ser interessante nos seguintes casos:

- Utiliza um SO volátil que não deseja instalar no disco e que permanece unicamente em RAM.
- Faz multicloud e um dos outros fornecedores que utiliza não propõe o SO que deseja instalar no seu catálogo, nem soluções alternativas tais como [BringYourOwnImage](/pages/bare_metal_cloud/dedicated_servers/bring-your-own-image). Desejando um método único e normalizado de instalação, seja qual for o fornecedor, construiu a sua própria imagem de rescue de instalação para gerir a instalação completa do seu servidor dedicado.

## Requisitos

- Um [servidor dedicado](https://www.ovhcloud.com/pt/bare-metal/) **pronto a ser lançado/reboot** na sua conta OVHcloud.
- Ter acesso à [API OVHcloud](https://api.ovh.com/).

> [!warning]
>
> A reinicialização de um servidor dedicado pode gerar a interrupção de serviços não redundados que dependem unicamente do servidor reiniciado.
>

> [!warning]
>
> Esta funcionalidade só está disponível nos servidores `UEFI`. Estamos atualmente a trabalhar para adicionar esta funcionalidade nos servidores em boot `LEGACY`.
>

## Instruções

### Gerir um script iPXE para um servidor dedicado <a name="manageIpxeScript"></a>

#### Modificar o script iPXE de um servidor <a name="changeIpxeScript"></a>

> [!api]
>
> @api {v1} /dedicated/server PUT /dedicated/server/{serviceName}
>

Especifique o seu script no atributo `bootScript` diretamente.

#### Obter o script iPXE de um servidor <a name="getIpxeScript"></a>

> [!api]
>
> @api {v1} /dedicated/server GET /dedicated/server/{serviceName}
>

O seu script situa-se no atributo `bootScript`.

Por exemplo:

```json
{
    "noIntervention": false,
    "name": "nsXXXXXXX.ip-XXX-XXX-XXX.eu",
    "rack": "SXXXBXX",
    "commercialRange": "fs",
    "os": "debian11_64",
    "rootDevice": null,
    "rescueMail": null,
    "linkSpeed": 1000,
    "bootScript": "#!ipxe\necho Boot first local hdd in LEGACY mode\nsanboot --no-describe --drive 0x80\nexit 1\n",
    "reverse": "nsXXXXXXX.ip-XXX-XXX-XXX.eu",
    "state": "ok",
    "ip": "XXX.XXX.XXX.XXX",
    "bootId": null,
    "newUpgradeSystem": false,
    "datacenter": "sbg3",
    "professionalUse": false,
    "supportLevel": "pro",
    "serverId": 123456,
    "powerState": "poweron",
    "monitoring": false
}
```

Agora pode reiniciar o seu servidor e este irá utilizar o seu script [iPXE](https://ipxe.org/) para o arranque.

### Outros modos de boot <a name="leaveIpxeScript"></a>

Pode alternar de novo entre o disco ou o modo rescue a partir da [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt) (consulte o nosso guia "[Ativar e utilizar o modo rescue](/pages/bare_metal_cloud/dedicated_servers/rescue_mode)") ou através da [API OVHcloud](https://api.ovh.com/).

#### Migrar para disco <a name="switchToDisk"></a>

> [!api]
>
> @api {v1} /dedicated/server PUT /dedicated/server/{serviceName}
>

Especifique `1` no atributo `bootId`.

> [!api]
>
> @api {v1} /dedicated/server GET /dedicated/server/{serviceName}
>

Verificará que o valor do atributo `bootScript` é agora zero.

## Quer saber mais? <a name="gofurther"></a>

[Reinicialização do seu servidor dedicado](/pages/bare_metal_cloud/dedicated_servers/getting-started-with-dedicated-server#reboot)

[Ativar e utilizar o modo rescue](/pages/bare_metal_cloud/dedicated_servers/rescue_mode)

[iPXE - open source boot firmware](https://ipxe.org/)

Junte-se à nossa comunidade de utilizadores em <https://community.ovh.com/en/>.
