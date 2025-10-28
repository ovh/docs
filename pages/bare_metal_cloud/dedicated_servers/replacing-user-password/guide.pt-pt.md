---
title: "Como recuperar o acesso ao servidor em caso de perda da palavra-passe do utilizador"
excerpt: "Saiba como configurar uma nova palavra-passe para uma conta de utilizador num sistema operativo GNU/Linux com o modo rescue OVHcloud"
updated: 2025-10-02
---

## Objetivo

Sem um outro modo de autenticação ou uma conta de utilizador, a perda da palavra-passe significa que não é possível iniciar sessão no servidor normalmente.

Neste caso, pode ligar-se ao seu servidor através do modo rescue da OVHcloud, que lhe permite ligar-se com uma palavra-passe provisória e alterar os seus ficheiros.

**Este guia explica como reinicializar a palavra-passe da sua conta de utilizador se já não tiver acesso ao seu servidor.**

> [!primary]
>
> Para recuperar o acesso a um servidor ao qual se liga com uma chave SSH, consulte o nosso guia "[Como substituir um par de chaves SSH](/pages/bare_metal_cloud/dedicated_servers/replacing-lost-ssh-key)".
>

## Requisitos

- Ter um [servidor dedicado](/links/bare-metal/bare-metal) ou um [VPS](/links/bare-metal/vps) na sua conta OVHcloud
- Ter acesso à [Área de Cliente OVHcloud](/links/manager)

> [!primary]
>
> Este manual não se aplica a instalações do **Windows** Server. Consulte os nossos manuais "[Como alterar a palavra-passe de administrador num servidor dedicado Windows](/pages/bare_metal_cloud/dedicated_servers/rcw-changing-admin-password-on-windows)" e "[Como alterar a palavra-passe de administrador num VPS Windows](/pages/bare_metal_cloud/virtual_private_servers/resetting_a_windows_password)".
>

## Instruções

Não se esqueça de consultar também os nossos guias de primeiros passos:

- Para um [servidor dedicado](/pages/bare_metal_cloud/dedicated_servers/getting-started-with-dedicated-server)
- Para um [servidor dedicado da gama **Eco**](/pages/bare_metal_cloud/dedicated_servers/getting-started-with-dedicated-server-eco)
- Para um [VPS](/pages/bare_metal_cloud/virtual_private_servers/starting_with_a_vps)

> [!warning]
>
> A OVHcloud oferece-lhe serviços cuja configuração, gestão e responsabilidade é da sua responsabilidade. Assim, deverá assegurar o seu bom funcionamento.
>
> Este guia fornece as instruções necessárias para realizar as operações mais habituais. No entanto, se encontrar dificuldades ou dúvidas relativamente à administração, utilização ou implementação de serviços num servidor, recomendamos que recorra a um [fornecedor especializado](/links/partner) ou que contacte a [nossa comunidade](https://community.ovh.com/en/).
>

<a name="step1"></a>

### Etapa 1 - Reiniciar o servidor em modo rescue

Siga as etapas dos nossos manuais sobre o modo rescue para se ligar ao seu servidor e montar as suas partições:

- [Utilizar o modo rescue num servidor dedicado](/pages/bare_metal_cloud/dedicated_servers/rescue_mode)
- [Utilizar o modo rescue num VPS](/pages/bare_metal_cloud/virtual_private_servers/rescue)

Para continuar, a partição do sistema tem de estar montada e tem de ter acesso de escrita ao sistema de ficheiros.

Isto significa que introduziu uma versão do seguinte comando na shell do modo rescue:

```bash
chroot path/to/partition/mountpoint/
```

O comando exato depende do ponto de montagem utilizado. Por exemplo, se tiver montado a sua partição em `/mnt`, o comando seria o seguinte:

```bash
chroot /mnt/
```

### Etapa 2 - Identificar a(s) conta(s) de usuário e redefinir a senha

Depois de montar a partição e executar `chroot /mnt` (ou equivalente), dispõe dos privilégios **root** no sistema montado.

Se necessário, antes de alterar uma senha, **identifique as contas existentes** com o seguinte comando:

```bash
cat /etc/passwd
```

Exemplo de resultado (atalho):

```console
daemon:x:1:1:daemon:/usr/sbin:/usr/sbin/nologin
bin:x:2:2:bin:/bin:/usr/sbin/nologin
sys:x:3:3:sys:/dev:/usr/sbin/nologin
.
nobody:x:65534:65534:nobody:/nonexistent:/usr/sbin/nologin
systemd-network:x:998:998:systemd Network Management:/:/usr/sbin/nologin
syslog:x:102:102::/nonexistent:/usr/sbin/nologin
sshd:x:105:65534::/run/sshd:/usr/sbin/nologin
.
user1:x:1000:1000:Ubuntu:/home/ubuntu:/bin/bash
```

Encontre o nome do utilizador na lista das contas.

Para alterar a palavra-passe de uma conta específica (por exemplo: **user1**), utilize este comando:

```bash
passwd user1
```

Introduza a nova palavra-passe duas vezes:

```console
# New password:
# Retype new password:
# passwd: password updated successfully
```

Numa distribuição GNU/Linux, **uma indicação de palavra-passe não apresenta as suas entradas de teclado**.

> [!primary]
>
> Evite executar o comando `passwd` sem argumentos: este comando modifica a senha da conta atual (que é frequentemente **root** após a execução de `chroot`).
> Sempre especifique `passwd <usuário>`.

Lembre-se de utilizar o modo de arranque **normal** do seu servidor quando o reiniciar a partir da sua [Área de Cliente OVHcloud](/links/manager).

Consulte [manual do modo rescue](#step1) se necessário.

A conta de utilizador modificada terá acesso ao servidor com a nova palavra-passe.

## Quer saber mais?

[Criar e utilizar chaves SSH](/pages/bare_metal_cloud/dedicated_servers/creating-ssh-keys-dedicated)

[Modo rescue para um servidor dedicado](/pages/bare_metal_cloud/dedicated_servers/rescue_mode)

[Modo rescue para um VPS](/pages/bare_metal_cloud/virtual_private_servers/rescue)

[Configuração das contas utilizadores e do acesso root num servidor](/pages/bare_metal_cloud/dedicated_servers/changing_root_password_linux_ds)

Fale com a nossa comunidade de utilizadores em <https://community.ovh.com/en/>.