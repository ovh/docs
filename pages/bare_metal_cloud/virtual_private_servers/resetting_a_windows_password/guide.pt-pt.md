---
title: Alterar a palavra-passe de administrador num servidor Windows
excerpt: "Descubra como redefinir a palavra-passe da sua conta de Administrador Windows num VPS ou numa instância Public Cloud graças ao modo Rescue da OVHcloud"
updated: 2023-10-12
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir"nesta página.
>

## Objetivo

Quando instalar ou reiniciar um sistema operativo Windows Server, irá receber uma palavra-passe de administrador (conta do *Administrator*).

Se perder a sua palavra-passe de administrador, pode repô-la através do modo rescue da OVHcloud.

**Saiba como repor a palavra-passe da conta de administrador de um sistema operativo Windows Server através do modo rescue OVHcloud.**

## Requisitos

- Dispor de uma [VPS](https://www.ovhcloud.com/pt/vps/) ou de uma [instância Public Cloud](https://www.ovhcloud.com/pt/public-cloud/) na sua conta OVHcloud
- Estar ligado à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt).

## Instruções

### Etapa 1: Reiniciar o servidor em modo Rescue

O modo rescue deve ser ativado para que a palavra-passe do administrador possa ser alterada.

Consulte o guia correspondente ao seu serviço para o reiniciar em modo rescue:

- [VPS](/pages/bare_metal_cloud/virtual_private_servers/rescue)
- [Instância Public Cloud](/pages/public_cloud/compute/put_an_instance_in_rescue_mode)

### Etapa 2: Montar a partição do sistema

Ligue-se ao servidor através de SSH. (Se necessário, consulte o nosso [guia de introdução SSH](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction).)

Pode igualmente abrir uma ligação ao servidor utilizando o [KVM (VPS)](/pages/bare_metal_cloud/virtual_private_servers/using_kvm_for_vps) ou a [consola VNC (instância Public Cloud)](/pages/public_cloud/compute/first_steps_with_public_cloud_instance#accessvnc).

Digite os seguintes comandos para montar o sistema de arquivos do Windows:

```bash
ntfsfix /dev/sdb2
```

```bash
mount -t ntfs-3g /dev/sdb2 /mnt
```

### Etapa 3: Eliminar a palavra-passe atual

Neste passo, o ficheiro *SAM* é modificado com uma ferramenta em modo Rescue. Listar utilizadores do Windows com este comando:

```bash
chntpw -l /mnt/Windows/System32/config/SAM
```

```text
| RID -|---------- Username ------------| Admin? |- Lock? --|
| 01f4 | Administrator                  | ADMIN  | dis/lock |
| 01f7 | DefaultAccount                 |        | dis/lock |
| 01f5 | Guest                          |        | dis/lock |
| 01f8 | WDAGUtilityAccount             |        | dis/lock |
```

Neste exemplo de saída, `Administrator` é a conta de administrador local. Inicie o processo de reinicialização com o seguinte comando. (Utilize `admin` se não existir o `Administrator`.)

```bash
chntpw -u Administrator /mnt/Windows/System32/config/SAM
```

```text
RID     : 0500 [01f4]
Username: Administrator
fullname:
comment : Built-in account for administering the computer/domain
homedir :

00000220 = Administrators (which has 1 members)

Account bits: 0x0010 =
[ ] Disabled        | [ ] Homedir req.    | [ ] Passwd not req. |
[ ] Temp. duplicate | [X] Normal account  | [ ] NMS account     |
[ ] Domain trust ac | [ ] Wks trust act.  | [ ] Srv trust act   |
[ ] Pwd don't expir | [ ] Auto lockout    | [ ] (unknown 0x08)  |
[ ] (unknown 0x10)  | [ ] (unknown 0x20)  | [ ] (unknown 0x40)  |

Failed login count: 47034, while max tries is: 0
Total  login count: 5

- - - - User Edit Menu:
 1 - Clear (blank) user password
 2 - Unlock and enable user account [probably locked now]
 3 - Promote user (make user an administrator)
 4 - Add user to a group
 5 - Remove user from a group
 q - Quit editing user, back to user select
Select: [q] >
```

Digite "1" e pressione "Enter". (Utilize primeiro a opção 2 se houver um "X" junto de "Desativado".)

```text
Select: [q] > 1
Password cleared!
```

Digite "q" e pressione "Enter "para sair da ferramenta. Digite "y" quando solicitado e pressione "Enter ".

```text
Select: [q] > q
 
Hives that have changed:
 #  Name
 0  </mnt/Windows/System32/config/SAM>
Write hive files? (y/n) [n] : y
 0  </mnt/Windows/System32/config/SAM> - OK
```

### Etapa 4: Reiniciar o servidor

Em seguida, pode sair do modo rescue e reiniciar o servidor. Se necessário, consulte o guia correspondente ao seu serviço:

- [VPS](/pages/bare_metal_cloud/virtual_private_servers/rescue)
- [Instância Public Cloud](/pages/public_cloud/compute/put_an_instance_in_rescue_mode)

### Etapa 5: Definir uma nova palavra-passe (KVM / VNC)

> [!warning]
>
> Não ignore este passo. Uma conta de administrador desprotegida representa um elevado risco de segurança.
>

Aceda ao seu servidor e introduza `cmd` na barra de procura para abrir a linha de comandos.

Defina a palavra-passe do utilizador atual ("Administrator"):

```powershell
net user Administrator *
```

![administratorpe](images/adminpw_win.png){.thumbnail}

Já se pode iniciar sessão como "Administrator"com esta nova palavra-passe.


## Saiba mais

Junte-se à nossa comunidade de utilizadores em <https://community.ovh.com/en/>.
