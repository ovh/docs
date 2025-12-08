---
title: Podłącz HA-NAS za pomocą udziału CIFS
excerpt: W tym przewodniku opisano sposób montowania HA-NAS przy użyciu protokołu CIFS.
updated: 2025-10-23
---

## Wprowadzenie

**Dowiedz się, jak skonfigurować i zamontować przestrzeń dyskową OVHcloud HA-NAS przy użyciu protokołu CIFS.**

## Wymagania początkowe

- Posiadanie [Serwer dedykowany](/links/bare-metal/bare-metal), **lub**  [VPS](/links/bare-metal/vps) **lub** [instancja Public Cloud](/links/public-cloud/public-cloud).
- Posiadanie usługi [NAS-HA](/links/storage/nas-ha)

## W praktyce

### Ustawienia dla systemu Microsoft Windows

- **Windows Server 2008**: Kliknij menu `Start`{.action} > `All the programs`{.action} > `Accessories`{.action} > `Command prompt`{.action}.
- **Windows Server 2012**: Kliknij ikonę `Windows PowerShell`{.action} u dołu ekranu na pasku zadań.
- **Windows Server 2016/2019/2022/2025**: Kliknij menu `Start`{.action}, a następnie na ikonę `Windows PowerShell`{.action}.

Teraz wprowadź następującą komendę:

```bash
net use z: \\CIFS_SERVER_IP\CIFS_PATH
```

#### Przykłady

- Montowanie CIFS dla NAS-HA:

```bash
net use z: \\10.16.101.8\zpool-000206_PARTITION_NAME_1
```

> [!alert]
>
> Użytkownikiem SMB/CIFS jest `nobody`. Zmiana uprawnień tego użytkownika może spowodować konflikty z istniejącymi uprawnieniami systemu plików NFS 
> 

Mogą pojawić się następujące komunikaty o błędach:

```console
System error 1272 has occurred.

You can't access this shared folder because your organization's security policies block unauthenticated guest access. These policies help protect your PC from unsafe or malicious devices on the network.
```

```console
System error 3227320323 has occurred.
```

> [!primary]
>
> Aby skorygować te błędy, zapoznaj się z oficjalną dokumentacją firmy Microsoft:<br>
> [Jak włączyć niezabezpieczone logowania gościa w protokołach SMB2 i SMB3](https://learn.microsoft.com/pl-pl/windows-server/storage/file-server/enable-insecure-guest-logons-smb2-and-smb3?tabs=powershell). <br>
> [Kontrolowanie zachowania podpisywania protokołu SMB](https://learn.microsoft.com/pl-pl/windows-server/storage/file-server/smb-signing?tabs=powershell).

### Ustawienia dla systemu Linux

Otwórz połączenie SSH z serwerem i wpisz następujące polecenie:

```sh
mount -t cifs -o uid=root,gid=100,dir_mode=0700,username=root,password= //IP_SERVEUR_CIFS/CHEMIN_CIFS /mnt/FolderMount
```

> [!warning]
>
> Aby zamontować udziały według nazwy hosta (w przeciwieństwie do adresów IP), wymagane jest narzędzie `mount.cifs`. Zazwyczaj jest ono częścią pakietu `cifs-utils`.
> 
> `mount.cifs` jest opakowaniem, które rozpoznaje nazwy hostów i dodaje parametr `ip=` do parametrów montowania przesyłanych do jądra.
>
> Bez `mount.cifs` próby zamontowania według nazwy hosta spowodują następujący błąd:
>
> ```text
> mount: /mnt/FolderMount: mount(2) system call failed: No route to host.
>        dmesg(1) may have more information after failed mount system call.
> ```
>

## Sprawdź również

[Najczęściej zadawane pytania dotyczące technologii NAS](/pages/storage_and_backup/file_storage/ha_nas/nas_faq)

Jeśli potrzebujesz szkolenia lub pomocy technicznej w celu wdrożenia naszych rozwiązań, skontaktuj się z przedstawicielem handlowym lub kliknij [ten link](/links/professional-services), aby uzyskać wycenę i poprosić o spersonalizowaną analizę projektu od naszych ekspertów z zespołu Professional Services.

Dołącz do [grona naszych użytkowników](/links/community).