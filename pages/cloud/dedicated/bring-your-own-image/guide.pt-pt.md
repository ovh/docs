---
title: Utilizar a funcionalidade Bring Your Own Image
excerpt: Aprenda a implementar as suas imagens graças ao Bring Your Own Image
slug: bringyourownimage
section: Uso avançado
---

**Última atualização: 21/07/2020**

## Objetivo

Graças à tecnologia Bring Your Own Image, é-lhe agora possível implementar imagens *cloudready* diretamente nos seus servidores dedicados. Assim, pode utilizar o produto bare metal como recurso para as suas implementações.

**Saiba como configurar BringYourOwnImage a partir da APIv6 OVHcloud**

## Requisitos

- Dispor de um [servidor dedicado OVHcloud](https://www.ovhcloud.com/pt/bare-metal/).
- Ter gerado [credenciais para utilizar a APIv6](https://docs.ovh.com/gb/en/api/first-steps-with-ovh-api/).

> [!warning]
>
> Uma nova instalação por BringYourOwnImage apagará a integralidade dos dados presentes no servidor.
>

## Instruções

### Limitações técnicas

Atualmente, ainda existem algumas limitações técnicas relacionadas com a utilização de produtos físicos, como os servidores dedicados.
Queira ter em conta os imperativos listados abaixo aquando da sua preparação de implementação. Esta lista não é exaustiva.

- O tipo de boot: **uefi** ou **legacy**
- O tipo de partição: **MBR** ou **GPT**
- O formato de imagem: **qcow2** ou **raw**

Se o seu servidor dispõe de um boot **uefi**, será imperativamente necessário prever na sua imagem uma partição **EFI** se deseja que o seu servidor possa dar boot.

### Implementar a sua imagem

Aceda a [https://api.ovh.com/](https://api.ovh.com/){.external} e aceda à secção `/dedicated/server`{.action}. O campo `Filter` permite-lhe pesquisar "BringYourOwnImage".

Dispõe de três chamadas API associadas à funcionalidade BringYourOwnImage.

![clalls API](images/apicalls.png){.thumbnail}

Para criar e implementar a sua imagem, utilize a seguinte chamada e complete os campos necessários:

> [!api]
>
> @api {POST} /dedicated/server/{serviceName}/bringYourOwnImage
>


| Champ | Descrição |
|-|-|
| serviceName | O nome do seu servidor. |
| URL | O URL onde recuperar a sua imagem. |
| checkSum | O checksum da sua imagem. |
| checkSumType | O checksum da imagem a implementar (md5, sha1, sha256, sha512). |
| enable (ConfigDrive)* | Ativar a criação da partição ConfigDrive (cloud-init) |
| hostname (ConfigDrive)* | O hostname do seu servidor. |
| sshKey (ConfigDrive)* | A sua chave SSH pública. |
| userData (ConfigDrive)* | O seu script de pós-instalação. |
| userMetadados (ConfigDrive)* | Meta dados utilizados por CloudInit no momento do boot. |
| descrição | O nome da sua imagem. |
| diskGroupId | O ID do disco que deve ser utilizado. |
| httpHeader | Apenas se necessário para descarregar a imagem. |
| tipo | O tipo/formato da sua imagem (qcow2, raw, ova). |

* O ConfigDrive é uma partição utilizada por cloud-init no primeiro boot do seu servidor a fim de estabelecer a configuração desejada. Pode optar por ativar ou não esta opção.

![POST API call](images/postapicall.png){.thumbnail}

Depois de preencher os campos, execute-o clicando em `Execute`{.action}.

### Verificar a implementação

Pode seguir a implementação da sua imagem através da chamada API abaixo ou através do KVM / [IPMI](../usar-ipmi-servidores-dedicados/).

> [!api]
>
> @api {GET} /dedicated/server/{serviceName}/bringYourOwnImage
>

Neste exemplo, a implementação está em curso de arranque.

![GET API call](images/getapicall.png){.thumbnail}

A implementação pode durar cerca de dez minutos. Terminada a operação, o estado da sua implementação passará para "dados" e o seu servidor será reiniciado no disco.

#### Exemplos de retorno

Veja alguns exemplos:

| Mensagem | Significado |
|-|-|
| Can't write qcow2 on disk. | Não é possível escrever a imagem qcow2 no disco. |
| Could not download, qcow2 image is too big to download in memory. | Não há espaço de RAM suficiente para descarregar a imagem. |
| Could not download image located: http://path/of/your/image | Não é possível descarregar a imagem localizada: http://chemin/de/votre/image |
| Bad formato imagem, expeted: qcow2, raw. | O formato da imagem está incorreto. |
| Bad checkSumType, expeted: sha1, sha256, md5. | O tipo de checksum está incorreto. |
| Bad $checkSumType for downloaded file, got: 1234 while expting 5678. | O checksum está incorreto. |
| Can not move backup GPT data structures to the end of disk. | O formato disco está incorreto. |
| Could not create configdrive on disk. | Não é possível criar a partição configurável no disco. |


### Eliminar a implementação

Pode optar por eliminar a sua implementação graças ao seguinte telefonema:

> [!api]
>
> @api {DELETE} /dedicated/server/{serviceName}/bringYourOwnImage
>

Isto eliminará o estado da implementação e colocará o seu servidor em modo rescue.

## Quer saber mais?

Fale com a nossa comunidade de utilizadores em <https://community.ovh.com/en/>.
