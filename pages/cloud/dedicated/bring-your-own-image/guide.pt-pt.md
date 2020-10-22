---
title: Como usar a funcionalidade Bring Your Own Image
excerpt: Saiba como implementar imagens graças à funcionalidade Bring Your Own Image
slug: bringyourownimage
section: Uso avançado
---

**Última atualização: 20/10/2020**

## Objetivo

Graças à tecnologia Bring Your Own Image, é-lhe agora possível implementar imagens *cloudready* diretamente nos seus servidores dedicados. Assim, pode utilizar o produto bare metal como recurso para as suas implementações.

**Saiba como configurar BringYourOwnImage a partir da APIv6 OVHcloud**

## Requisitos

- Dispor de um [servidor dedicado da OVHcloud](https://www.ovhcloud.com/pt/bare-metal/).
- Ter gerado [credenciais para utilizar a APIv6](https://docs.ovh.com/gb/en/api/first-steps-with-ovh-api/).

> [!warning]
>
> Uma nova instalação por BringYourOwnImage apagará a integralidade dos dados presentes no servidor.
>

## Instruções

### Limitações técnicas

Atualmente, ainda existem algumas limitações técnicas relacionadas com a utilização de produtos físicos, como os servidores dedicados.
Tenha em conta os imperativos listados abaixo aquando da sua preparação de implementação. Esta lista não é exaustiva.

- O tipo de boot: **uefi** ou **legacy**
- O tipo de partição: **MBR** ou **GPT**
- O formato de imagem: **qcow2** ou **raw**

Se o seu servidor dispõe de um boot **uefi**, certifique-se de que adiciona uma partição **EFI** ao template da sua imagem.

### Implementar a sua imagem

Aceda a [https://api.ovh.com/](https://api.ovh.com/){.external} e aceda à secção `/dedicated/server`{.action}. O campo `Filter` permite-lhe pesquisar "BringYourOwnImage".

Dispõe de três chamadas API associadas à funcionalidade BringYourOwnImage.

![clalls API](images/apicalls.png){.thumbnail}

Para criar e implementar a sua imagem, utilize a seguinte chamada e complete os campos necessários:

> [!api]
>
> @api {POST} /dedicated/server/{serviceName}/bringYourOwnImage
>


| Campo | Descrição |
|-|-|
| serviceName | O nome do seu servidor. |
| URL | O URL onde pode recuperar a sua imagem. |
| checkSum | O checksum da sua imagem. |
| checkSumType | O checksum da imagem a implementar (md5, sha1, sha256, sha512). |
| description | O nome da sua imagem. |
| diskGroupId | O ID do disco que deve ser utilizado. |
| hostname | O hostname do seu servidor. |
| httpHeader | Apenas se necessário para descarregar a imagem. |
| sshKey | A sua chave SSH pública. |
| type | O tipo/formato da sua imagem (qcow2, raw, ova). |
| userData | O seu script de pós-instalação. |
| userMetadados | Metadados utilizados por Nova no momento do boot. |


![POST API call](images/postapicall.png){.thumbnail}

Depois de preencher os campos, lance a implementação clicando em `Execute`{.action}.

### Verificar a implementação

Pode seguir a implementação da sua imagem através da chamada API abaixo ou através do KVM / [IPMI](../utilisation-ipmi-serveurs-dedies/).

> [!api]
>
> @api {GET} /dedicated/server/{serviceName}/bringYourOwnImage
>

Neste exemplo, a implementação está em curso de arranque.

![GET API call](images/getapicall.png){.thumbnail}

A implementação pode durar cerca de dez minutos. Terminada a operação, o estado da sua implementação passará para "done" e o seu servidor será reiniciado no disco.

### Eliminar a implementação

Pode optar por eliminar a sua implementação graças à seguinte chamada:

> [!api]
>
> @api {DELETE} /dedicated/server/{serviceName}/bringYourOwnImage
>

Isto eliminará o estado da implementação e colocará o seu servidor em modo rescue.

## Quer saber mais?

Fale com a nossa comunidade de utilizadores em <https://community.ovh.com/en/>.
