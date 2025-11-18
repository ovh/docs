---
title: "Jak odzyskać dostęp do serwera w przypadku utraty hasła użytkownika"
excerpt: "Dowiedz się, jak skonfigurować nowe hasło dla konta użytkownika w systemie operacyjnym GNU/Linux w trybie rescue OVHcloud"
updated: 2025-10-02
---

## Wprowadzenie

Bez alternatywnego uwierzytelniania lub innego konta użytkownika utrata hasła oznacza, że nie można się normalnie połączyć z serwerem.

W takim przypadku możesz zalogować się do Twojego serwera za pomocą trybu Rescue OVHcloud, który umożliwia zalogowanie się przy użyciu hasła tymczasowego i zmianę plików.

**Ten przewodnik wyjaśnia, jak zresetować hasło do konta użytkownika w przypadku braku dostępu do serwera.**

> [!primary]
>
> Aby uzyskać dostęp do serwera, z którym łączysz się za pomocą klucza SSH, zapoznaj się z naszym przewodnikiem "[Jak zamienić parę kluczy SSH](/pages/bare_metal_cloud/dedicated_servers/replacing-lost-ssh-key)".
>

## Wymagania początkowe

- Posiadanie [serwera dedykowanego](/links/bare-metal/bare-metal) lub [VPS](/links/bare-metal/vps) na koncie OVHcloud
- Dostęp do [Panelu klienta OVHcloud](/links/manager)

> [!primary]
>
> Ten przewodnik nie dotyczy instalacji **Windows* Server. Zapoznaj się z naszymi przewodnikami "[Jak zmienić hasło administratora na serwerze dedykowanym Windows](/pages/bare_metal_cloud/dedicated_servers/rcw-changing-admin-password-on-windows)" i "[Jak zmienić hasło administratora na serwerze VPS Windows](/pages/bare_metal_cloud/virtual_private_servers/resetting_a_windows_password)".
>

## W praktyce

Sprawdź również nasze przewodniki:

- Dla [serwera dedykowanego](/pages/bare_metal_cloud/dedicated_servers/getting-started-with-dedicated-server)
- Dla [serwera dedykowanego z gamy **Eco**](/pages/bare_metal_cloud/dedicated_servers/getting-started-with-dedicated-server-eco)
- Dla serwera [VPS](/pages/bare_metal_cloud/virtual_private_servers/starting_with_a_vps)

> [!warning]
>
> OVHcloud udostępnia różnorodne usługi, jednak to Ty odpowiadasz za ich konfigurację i zarządzanie nimi. Ponosisz więc odpowiedzialność za ich prawidłowe funkcjonowanie.
>
> Niniejszy przewodnik ułatwi Ci realizację bieżących zadań. Niemniej jednak, w przypadku trudności lub wątpliwości związanych z administrowaniem usługami, korzystaniem z nich lub ich wdrażaniem na serwerze, zalecamy skontaktowanie się z [wyspecjalizowanym dostawcą](/links/partner) lub [naszą społecznością](https://community.ovh.com/en/).
>

<a name="step1"></a>

### Etap 1 - Restart serwera w trybie rescue

Postępuj zgodnie z instrukcjami zawartymi w przewodnikach dotyczących trybu Rescue, aby połączyć się z serwerem i zamontować partycje:

- [Tryb ratunkowy na serwerze dedykowanym](/pages/bare_metal_cloud/dedicated_servers/rescue_mode)
- [Użyj trybu ratunkowego na serwerze VPS](/pages/bare_metal_cloud/virtual_private_servers/rescue)

Aby kontynuować, Twoja partycja systemowa musi być zamontowana i musisz mieć dostęp do zapisu w systemie plików.

Oznacza to, że wprowadziłeś wersję następującego polecenia do powłoki trybu Rescue:

```bash
chroot path/to/partition/mountpoint/
```

Dokładne sterowanie zależy od użytego punktu montowania. Na przykład, jeśli zamontowałeś partycję w `/mnt`, komenda wygląda następująco:

```bash
chroot /mnt/
```

### Etap 2 - Identyfikacja konta użytkownika (kont użytkowników) i resetowanie hasła

Po zamontowaniu partycji i uruchomieniu `chroot /mnt` (lub odpowiednika), masz uprawnienia **root** w zainstalowanym systemie.

Jeśli to konieczne, przed zmianą hasła **zidentyfikuj istniejące konta** za pomocą następującego polecenia:

```bash
cat /etc/passwd
```

Przykład wyniku (skrócony):

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

Znajdź Twoją nazwę użytkownika (lub nazwy użytkowników) na liście kont.

Aby zmienić hasło dla wybranego konta (na przykład: **user1**), wpisz poniższe polecenie:

```bash
passwd user1
```

Dwukrotnie wpisz nowe hasło i potwierdź:

```console
# New password:
# Retype new password:
# passwd: password updated successfully
```

W dystrybucji GNU/Linux **monit o hasło nie wyświetla danych wejściowych z klawiatury**.

> [!primary]
>
> Unikaj uruchamiania polecenia `passwd` bez argumentów: to polecenie zmienia hasło dla konta bieżącego (które często jest **root** po uruchomieniu `chroot`).
> Zawsze podawaj `passwd <użytkownik>`.

Pamiętaj, aby podczas restartu serwera z poziomu [Panelu klienta OVHcloud](/links/manager) użyć trybu uruchamiania **normalnego** Twojego serwera.

W razie potrzeby sprawdź przewodnik [Tryb ratunkowy](#step1).

Zmodyfikowane konto użytkownika ma teraz dostęp do serwera z nowym hasłem.

## Sprawdź również

[Tworzenie i używanie kluczy SSH](/pages/bare_metal_cloud/dedicated_servers/creating-ssh-keys-dedicated)

[Tryb ratunkowy dla serwera dedykowanego](/pages/bare_metal_cloud/dedicated_servers/rescue_mode)

[Tryb ratunkowy dla serwera VPS](/pages/bare_metal_cloud/virtual_private_servers/rescue)

[Konfigurowanie kont użytkowników i dostępu root na serwerze](/pages/bare_metal_cloud/dedicated_servers/changing_root_password_linux_ds)

Dołącz do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.