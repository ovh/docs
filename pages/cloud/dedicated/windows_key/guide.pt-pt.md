---
title: 'Como alterar a chave de produto do Windows Server'
excerpt: 'Saiba como alterar o código de ativação do Windows Server'
slug: windows-key
section: Diversos
---

**Última atualização: 08/03/2018**

## Sumário

Por vezes, durante a instalação de um sistema operativo Windows Server, a chave de produto não é inserida de forma correta. Neste caso, o sistema é ativado em modo de avaliação (período de 120 dias) com uma chave predefinida. Terminado este prazo, o sistema fica indisponível.

**Este guia explica como inserir a chave de produto correta do Windows Server.**


## Requisitos

- Ter um [servidor dedicado](https://www.ovh.pt/servidores_dedicados/){.external} com o Windows instalado.
- Ter uma licença Windows SPLA [ ou adquirir uma licença nova](https://www.ovh.pt/servidores_dedicados/precos-licencas-windows-2014.xml){.external}.
- Ter acesso ao servidor via desktop remoto.


## Instruções

### Eliminar chave predefinida

No período de avaliação, o sistema Windows funciona com uma chave predefinida. Para alterar esta chave, abra a janela `Executar`{.action} (prima o logo Windows + tecla `R`{.action}):

![Ativação da janela Executar](images/executer.png){.thumbnail}


![Executar](images/executer2.png){.thumbnail}

Agora insira a seguinte comando:

```bash
cscript.exe c:\windows\system32\slmgr.vbs -upk
```

### Adicionar a nova chave

Para adicionar a nova chave, volte à janela `Executar`{.action} e insira o comando:

```bash
cscript.exe c:\windows\system32\slmgr.vbs -ipk CHAVE KMS
```

Abaixo pode ver a lista das Chaves de Configuração de Cliente KMS (Key Management Service) disponíveis para cada sistema operativo:

|Sistema Operativo|Chave KMS|
|---|---|
|Windows Server 2008 Standard|TM24T-X9RMF-VWXK6-X8JC9-BFGM2|
|Windows Server 2008 Entreprise|YQGMW-MPWTJ-34KDK-48M3W-X4Q6V|
|Windows Server 2008 Datacenter|7M67G-PC374-GR742-YH8V4-TCBY3|
|Windows Server 2008 R2 Standard 9600|YC6KT-GKW9T-YTKYR-T4X34-R7VHC|
|Windows Server 2008 R2 Enterprise 7600|489J6-VHDMP-X63PK-3K798-CPX3Y|
|Windows Server 2008 R2 Datacenter 7600|74YFP-3QFB3-KQT8W-PMXWJ-7M648|
|Windows Server 2012 Standard|XC9B7-NBPP2-83J2H-RHMBY-92BT4|
|Windows Server 2012 Datacenter|48HP8-DN98B-MYWDG-T2DCC-8W83P|
|Windows Server 2012 R2 Standard 9600|D2N9P-3P6X9-2R39C-7RTCD-MDVJX|
|Windows Server 2012 R2 Datacenter 7600|W3GGN-FT8W3-Y4M27-J84CP-Q3VJ9|
|Windows 8.1 Pro 9600|GCRJD-8NW9H-F2CDX-CCM8D-9D6T9|
|Windows Server 2016 Datacenter|CB7KF-BWN84-R7R2Y-793K2-8XDDG|
|Windows Server 2016 Standard|WC2BQ-8NRM3-FDDYY-2BFGV-KHKQY|
|Windows Server 2016 Essentials|JCKRF-N37P4-C2D82-9YXRT-4M63B|
|Windows Server 2019 Standard|N69G4-B89J2-4G8F4-WWYCC-J464C|
|Windows Server 2019 Datacenter|WMDGN-G9PQG-XVVXX-R3X43-63DFG|

Fonte: [Microsoft MSDN](https://docs.microsoft.com/pt-pt/windows-server/get-started/kmsclientkeys){.external}


> [!primary]
>
> As versões Server Core e não Core usam as mesmas chaves.
> 


### Usar kms.ovh.net

Para que a chave seja associada ao nosso robot de ativação, abra a janela `Executar`{.action} e execute o comando indicado abaixo.

```bash
cscript.exe c:\windows\system32\slmgr.vbs -skms kms.ovh.net
```

> [!primary]
>
> Se estiver a usar um VPS, ou uma instância Public Cloud, é necessário usar `kms.cloud.ovh.net`.
> 

### Ativar o sistema

Finalmente, para ativar o sistema Windows, basta executar este comando:

```bash
cscript.exe c:\windows\system32\slmgr.vbs -ato
```

## Quer saber mais?

Fale com a nossa comunidade de utilizadores: <https://community.ovh.com/en/>.