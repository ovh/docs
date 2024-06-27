---
title: "Aktywacja i korzystanie z trybu Rescue Windows"
excerpt: "Dowiedz się, jak używać trybu rescue-customer-windows OVHcloud do rozwiązywania problemów z serwerem dedykowanym"
updated: 2024-05-21
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk “Zgłóś propozycję modyfikacji” na tej stronie.
>

## Wprowadzenie

Tryb *rescue-customer-windows* jest dostarczanym przez OVHcloud narzędziem, które pozwala na uruchomienie tymczasowego systemu operacyjnego w celu zdiagnozowania i rozwiązania problemów z serwerem.

Tryb Rescue jest zazwyczaj dostosowany do następujących zadań:

- [Reset hasła administratora](/pages/bare_metal_cloud/dedicated_servers/rcw-changing-admin-password-on-windows)
- Naprawa wadliwego systemu operacyjnego
- Naprawa nieprawidłowej konfiguracji zapory sieciowej

> [!warning]
>
> Pamiętaj o sporządzeniu kopii zapasowej swoich danych, jeśli nie posiadasz jeszcze ostatnich kopii zapasowych.
>
> Jeśli posiadasz usługi produkcyjne na swoim serwerze, tryb Rescue przerywa je, dopóki maszyna nie zostanie zrestartowana w trybie normalnym.
>

**Niniejszy przewodnik wyjaśnia, jak zrestartować serwer w trybie *rescue-customer-windows*.**

## Wymagania początkowe

- Posiadanie [serwera dedykowanego](/links/bare-metal/bare-metal) zainstalowanego z wersją systemu Microsoft Windows.
- Serwer musi mieć więcej niż 16 GB pamięci RAM.
- Dostęp do [panelu klienta OVHcloud](/links/manager).

## Informacje funkcjonalne

*Rescue-customer-windows* działa na maszynie wirtualnej (VM) uruchomionej z systemu *rescue* (oparty na Debianie GNU/Linux).<br>
Dyski serwera są przypisane do maszyny wirtualnej w trybie *passthrough*, więc można uzyskać do nich dostęp.<br>
Inne składniki serwera będą niedostępne (procesor, pamięć RAM, karta sieciowa, karta RAID).<br>
Sieć jest montowana w *passthrough*, ale bez bezpośredniego dostępu do karty sieciowej oznacza to, że wirtualna maszyna ma adres IP i adres MAC serwera bare metal.

> [!warning]
>
> Restart/wyłączenie maszyny wirtualnej w *rescue-customer-windows* nie spowoduje restartu serwera z oryginalnym systemem operacyjnym.
> Aby ponownie uruchomić system operacyjny, zapoznaj się z dokumentacją poniżej.

## W praktyce

Tryb ratunkowy można aktywować tylko z poziomu [panelu klienta OVHcloud](/links/manager). Wybierz serwer, przejdź do sekcji `Bare Metal Cloud`{.action}, a następnie `Serwery dedykowane`{.action}.

Wyszukaj "Boot" w polu **Informacje ogólne**, kliknij przycisk `...`{.action} i `Zmień`{.action}.

![Zmień tryb uruchamiania](images/rescue-mode-001.png){.thumbnail}

Na następnej stronie wybierz **Uruchom w trybie diagnostycznym (Rescue)**.

Wybierz `rescue-customer-windows`{.action}. Jeśli nie chcesz, aby dane logowania **nie** były wysyłane na główny adres konta OVHcloud, podaj inny adres e-mail.

Kliknij przycisk `Dalej`{.action} i `Zatwierdź`{.action}.

![Tryb rescue-customer](images/manager-rescue-windows-menu.png){.thumbnail}

Po wprowadzeniu modyfikacji kliknij przycisk `...`{.action} po prawej stronie "Status" w polu **Status usług**.

Kliknij `Restart`{.action}, a serwer zostanie zrestartowany w trybie rescue. Może to potrwać kilka minut.

Możesz sprawdzić postęp w zakładce `Zadania`{.action}. Po udostępnieniu systemu ratunkowego otrzymasz wiadomość e-mail zawierającą dane logowania (w tym hasło) użytkownika "Administrator" trybu ratunkowego.

![Zrestartuj serwer](images/rescue-mode-02.png){.thumbnail}

Po zakończeniu zadań w trybie Rescue pamiętaj, aby zresetować tryb boot (netboot) do `Uruchom z dysku twardego`{.action}, a następnie zrestartować serwer.

## Połączenie z *rescue-customer-windows*

Po pobraniu hasła będziesz miał trzy możliwości zalogowania się do serwera:

- Protokół RDP (Remote Desktop Protocol)
- SSH (oficjalny składnik Windows OpenSSH Server)
- KVM IP (jeśli pozwala na to Twój serwer)

> [!warning]
>
> W każdym przypadku zostaniesz poproszony o podanie hasła.
>
> Użytkownik pozwalający na zalogowanie się to `Administrator`.
>
> Hasło jest przekazywane poprzez link `secret-as-a-service`.

### Korzystanie z KVM IP

Na ekranie loginu KVM można wybrać inny język klawiatury.

![KVM Login Screen](images/rescue-kvm-login-screen.png){.thumbnail}

![KVM Language Screen](images/rescue-kvm-login-language.png){.thumbnail}

Możesz zmienić opcje dostępności i aktywować wirtualną klawiaturę:

![KVM accessibility Screen](images/rescue-kvm-login-accessibility.png){.thumbnail}

![KVM keyboard Screen](images/rescue-kvm-login-keyboard.png){.thumbnail}

### Montowanie dysków

Możliwe, że podłączone dyski są postrzegane jako `Wolumeny dynamiczne`. Aby ich użyć, zapoznaj się z [oficjalną dokumentacją Microsoft](https://learn.microsoft.com/en-us/troubleshoot/windows-server/backup-and-storage/troubleshoot-disk-management#a-dynamic-disks-status-is-foreign).

### Zalecane narzędzia

> [!warning]
>
> Poniżej znajduje się lista zalecanych programów do niektórych zastosowań.
> Programy te nie są domyślnie instalowane na obrazie *rescue* i są łatwo dostępne w Internecie.

| Oprogramowanie | Opis |
| --- | --- |
| CrystalDiskInfo | Narzędzie diagnostyczne |
| 7Zip | Narzędzie do zarządzania archiwami |
| FileZilla | Open source’owy klient FTP |

## Sprawdź również

- [Włącz i użyj trybu ratunkowego](/pages/bare_metal_cloud/dedicated_servers/rescue_mode)

Dołącz do społeczności naszych użytkowników na stronie<https://community.ovh.com/en/>.