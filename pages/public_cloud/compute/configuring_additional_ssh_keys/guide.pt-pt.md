---
title: Como configurar chaves SSH suplementares numa instância
excerpt: Saiba como configurar chaves SSH adicionais para contas de utilizadores e adicioná-las à sua instância Public Cloud
updated: 2024-09-09
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

## Objetivo

Quando criar uma instância na Área de Cliente, só pode adicionar uma chave SSH para a conta de utilizador pré-configurada. Para se ligar à instância com outras contas de utilizadores, pode criar mais chaves e adicioná-las à instância em algumas etapas.

**Este manual explica como configurar chaves SSH adicionais para as ligações à sua instância.**

> [!warning]
> A OVHcloud fornece serviços cuja configuração e gestão são da sua responsabilidade. É da sua responsabilidade assegurar o seu bom funcionamento.
>
> Este guia fornece as instruções necessárias para realizar as operações mais habituais. Entretanto, recomendamos que você entre em contacto com um [provedor de serviços especializado](/links/partner) ou entre em contacto com a [nossa comunidade](/links/community) se houver algum problema.
>

## Requisitos

- Uma [instância Public Cloud](/links/public-cloud/public-cloud) na sua conta OVHcloud
- [Acesso administrativo à sua instância via SSH](/pages/public_cloud/compute/creating-ssh-keys-pci#login-linux)

## Instruções

> [!primary]
>
> Atualmente, suportamos os seguintes formatos de chave SSH: **RSA**, **ECDSA** e **ED25519**.
>
> Tenha em conta que as instruções abaixo são destinadas a uma utilização geral e se baseiam num sistema operativo de servidor Ubuntu. Alguns comandos podem necessitar de uma personalização em função da distribuição ou do sistema operativo que utiliza.
>

### Etapa 1: Criar um novo par de chaves SSH

Se necessário, utilize o nosso [guia sobre as chaves SSH](/pages/public_cloud/compute/creating-ssh-keys-pci) para criar um novo par de chaves SSH.  
Encontrará também informações sobre [a gestão de várias chaves](/pages/public_cloud/compute/creating-ssh-keys-pci#create-ssh-key) na sua estação de trabalho local, se a sua instalação o exigir.

### Etapa 2: configurar uma nova conta de utilizador

[Ligue-se à sua instância](/pages/public_cloud/compute/public-cloud-first-steps#connect-instance) e utilize os comandos abaixo para criar uma nova conta de utilizador e uma pasta `.ssh`:

```bash
sudo adduser user2
```

```console
info: Adding user `user2' ...
info: Selecting UID/GID from range 1000 to 59999 ...
info: Adding new group `user2' (1003) ...
info: Adding new user `user2' (1003) with group `user2 (1003)' ...
info: Creating home directory `/home/user2' ...
info: Copying files from `/etc/skel' ...
New password: 
Retype new password:
passwd: password updated successfully
Changing the user information for user2
Enter the new value, or press ENTER for the default
        Full Name []:
        Room Number []:
        Work Phone []: 
        Home Phone []: 
        Other []: 
Is the information correct? [Y/n] y
info: Adding new user `user2' to supplemental / extra groups `users' ...
info: Adding user `user2' to group `users' ...
```

```bash
sudo mkdir /home/user2/.ssh/
```

Sem outras etapas, a conta de utilizador `user2` deste exemplo não tem permissões elevadas. Se tiver de conceder a esta conta privilégios root na sua instância, adicione-a ao `sudo group`:

```bash
sudo usermod -aG sudo user2
```

Pode obter mais informações sobre as permissões dos utilizadores e tópicos relacionados no [guia da conta de utilizador](/pages/bare_metal_cloud/dedicated_servers/changing_root_password_linux_ds).

### Etapa 3: adicionar a chave pública SSH à sua instância

#### Transferência de chaves públicas criadas em sistemas baseados em GNU/Linux, macOS ou BSD

Se criou os seus pares de chaves SSH num sistema baseado em GNU/Linux, macOS ou BSD, pode utilizar o comando `ssh-copy-id` para adicionar as chaves públicas ao seu servidor.

O utilitário `ssh-copy-id` copia as chaves públicas no arquivo `~/.ssh/authorized_keys` no servidor remoto especificado e cria automaticamente o arquivo neste diretório, se necessário.

```bash
ssh-copy-id username@IP_ADDRESS
```

Por predefinição, o `ssh-copy-id` tentará transferir **todas** as chaves públicas no diretório `~/.ssh` do seu utilizador local. Para adicionar uma única chave pública, pode especificar este ficheiro com a opção `-i` seguida pelo caminho do ficheiro:

```bash
ssh-copy-id -i ~/.ssh/KeyFileName username@IP_ADDRESS
```

Exemplo:

```bash
ssh-copy-id -i ~/.ssh/myInstance_rsa.pub user2@203.0.113.102
```

A palavra-passe do utilizador ser-lhe-á solicitada. Em caso de sucesso, receberá uma mensagem semelhante à seguinte:

```console
Number of key(s) added: 1

Now try logging into the machine, with:   "ssh 'user@server-ip'"
and check to make sure that only the key(s) you wanted were added.
```

Se você receber uma mensagem de erro em vez disso, você ainda pode adicionar suas chaves públicas manualmente seguindo os passos descritos abaixo.

> [!primary]
>
> Por razões de segurança e de boas práticas, um par de chaves não deve ser utilizado por vários utilizadores. Uma vez que cada utilizador nos sistemas GNU/Linux tem o seu próprio ficheiro `authorized_keys` em `~/.ssh/`, pode utilizar o comando `ssh-copy-id` como indicado acima e adaptar `KeyFileName` e `user` depois de ter [criado o par de chaves](/pages/public_cloud/compute/creating-ssh-keys-pci#create-ssh-key).
>

#### Adição manual de chaves públicas à instância

[Ligue-se à sua instância](/pages/public_cloud/compute/public-cloud-first-steps#connect-instance) e abra, com o seu editor de texto preferido (`nano` é utilizado neste exemplo), o ficheiro `authorized_keys` na pasta pessoal do novo utilizador:

```bash
sudo nano /home/user2/.ssh/authorized_keys
```

Cole a **cadeia de chaves públicas** neste ficheiro. Salve o arquivo e saia do editor.

Reinicie a sua instância (`sudo reboot`) ou reinicie apenas o serviço OpenSSH com um dos seguintes comandos (o comando apropriado pode variar em função do seu sistema operativo):

```bash
sudo systemctl restart ssh
```

```bash
sudo systemctl restart sshd
```

O novo utilizador pode agora ligar-se à instância a partir do dispositivo que armazena a chave SSH privada correspondente:

```bash
ssh username@IP_ADDRESS
```

Exemplo:

```bash
ssh user2@203.0.113.102
```

Consulte [manual sobre as chaves SSH](/pages/public_cloud/compute/creating-ssh-keys-pci)i para saber mais sobre a utilização das chaves SSH com as instâncias Public Cloud.

## Quer saber mais?

[Como criar instâncias Public Cloud](/pages/public_cloud/compute/public-cloud-first-steps)

[Como substituir um par de chaves SSH numa instância Public Cloud pelo modo rescue](/pages/public_cloud/compute/replacing_lost_ssh_key)

Fale com nossa [comunidade de utilizadores](/links/community).