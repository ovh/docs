---
title: Configure o seu NAS-HA no Windows Server através do CIFS
excerpt: Configurar e montar um NAS-HA através do protocolo CIFS
updated: 2025-10-23
---

## Objetivo

**Saiba como configurar e montar o seu espaço de armazenamento NAS-HA OVHcloud através do protocolo CIFS.**

## Requisitos

- Um [servidor dedicado](/links/bare-metal/bare-metal) **ou** um [VPS](/links/bare-metal/vps) **ou** uma [instância Public Cloud](/links/public-cloud/public-cloud).
- Uma oferta [NAS-HA](/links/storage/nas-ha).

## Instruções

### Configuração para Microsoft Windows

- **Windows Server 2008**: clique no menu `Start`{.action} > `All the programs`{.action} > `Accessories`{.action} > `Command prompt`{.action}.
- **Windows Server 2012**: clique no ícone `Windows PowerShell`{.action} na barra de tarefas.
- **Windows Server 2016/2019/2022/2025**: clique no menu `Start`{.action} e, a seguir, no ícone do `Windows PowerShell`{.action}.

De seguida, execute o seguinte comando:

```bash
net use z: \\CIFS_SERVER_IP\CIFS_PATH
```

#### Exemplo

- Montagem CIFS para um NAS-HA:

```bash
net use z: \\10.16.101.8\zpool-000206_PARTITION_NAME_1
```

> [!alert]
>
> O utilizador SMB/CIFS é `nobody`, qualquer modificação de direitos efetuada por este utilizador pode gerar conflitos com direitos NFS existentes.
>

As seguintes mensagens de erro podem ser exibidas:

```console
System error 1272 has occurred.

You can't access this shared folder because your organization's security policies block unauthenticated guest access. These policies help protect your PC from unsafe or malicious devices on the network.
```

```console
System error 3227320323 has occurred.
```

> [!primary]
>
> Para corrigir esses erros, consulte a documentação oficial da Microsoft:<br>
> [Como ativar logons convidados inseguros no SMB2 e SMB3](https://learn.microsoft.com/pt-pt/windows-server/storage/file-server/enable-insecure-guest-logons-smb2-and-smb3?tabs=powershell).<br>
> [Controlar o comportamento de assinatura do SMB](https://learn.microsoft.com/pt-pt/windows-server/storage/file-server/smb-signing?tabs=powershell).


### Configuração para Linux

Conecte-se via SSH ao seu servidor e digite o seguinte comando:

```sh
mount -t cifs -o uid=root,gid=100,dir_mode=0700,username=root,password= //IP_SERVEUR_CIFS/CHEMIN_CIFS /mnt/FolderMount
```

> [!warning]
>
> Para montar partilhas por nome de host (em oposição a endereços IP), é necessário o utilitário `mount.cifs`. Ele geralmente faz parte do pacote `cifs-utils`.
>
> O `mount.cifs` é um wrapper que resolve os nomes de host e adiciona o parâmetro `ip=` aos parâmetros de montagem transmitidos ao kernel.
>
> Sem o `mount.cifs`, as tentativas de montagem por nome de host resultarão no seguinte erro:
>
> ```text
> mount: /mnt/FolderMount: mount(2) system call failed: No route to host.
>        dmesg(1) may have more information after failed mount system call.
> ```
>

## Quer saber mais?

[NAS - Perguntas Frequentes](/pages/storage_and_backup/file_storage/ha_nas/nas_faq)

Se precisar de formação ou de assistência técnica para implementar as nossas soluções, contacte o seu representante comercial ou clique em [esta ligação](/links/professional-services) para obter um orçamento e solicitar uma análise personalizada do seu projecto aos nossos especialistas da equipa de Serviços Profissionais.

Fale com a nossa [comunidade de utilizadores](/links/community).