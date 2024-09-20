---
title: Uruchamianie i korzystanie z trybu Rescue na serwerze VPS
excerpt: Dowiedz się, jak używać trybu Rescue OVHcloud do rozwiązywania problemów z serwerem VPS i przeprowadzania weryfikacji systemu
updated: 2024-02-19
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk "Zgłóś propozycję modyfikacji" na tej stronie.
> 

## Wprowadzenie

Tryb awaryjny (*rescue*) to dostarczone przez OVHcloud narzędzie do uruchamiania Twojego serwera VPS w tymczasowym systemie operacyjnym. Po wykonaniu tych czynności można zalogować się do systemu w celu wykonania zadań diagnostycznych i rozwiązania problemów, na przykład:

- [Reset hasła użytkownika w celu odzyskania dostępu](/pages/bare_metal_cloud/dedicated_servers/replacing-user-password)
- Diagnostyka problemów z siecią
- Naprawa uszkodzonego systemu operacyjnego
- Napraw nieprawidłowo skonfigurowany firewall programowy
- Test wydajności dysku

W przypadku problemów z systemem można przeprowadzić weryfikację w trybie Rescue, aby określić, czy problem jest związany z oprogramowaniem zainstalowanym na serwerze VPS, czy też jest to głębsza przyczyna. Przed skontaktowaniem się z naszymi zespołami pomocy zalecamy użycie trybu Rescue w celu zebrania wyników testów i wykluczenia błędów w oprogramowaniu.

> [!warning]
>
> Jeśli niektóre z Twoich usług są nadal online, tryb Rescue przerywa ich działanie podczas restartu serwera do środowiska zapasowego.
>

**Niniejszy przewodnik wyjaśnia, jak aktywować tryb ratunkowy w Panelu klienta OVHcloud i jak uzyskać dostęp do systemu plików VPS.**

## Wymagania początkowe

- Dostęp do [Panelu klienta OVHcloud](/links/manager)
- Posiadanie już skonfigurowanego [VPS OVHcloud](https://www.ovhcloud.com/pl/vps/)

> [!warning]
> OVHcloud zapewnia usługi, ale to użytkownik ponosi odpowiedzialność za zarządzanie nimi oraz ich konfigurację. Do Twoich obowiązków należy zatem upewnienie się, że działają one prawidłowo.
>
> Ten przewodnik ułatwi Ci realizację bieżących zadań. Niemniej jednak, w przypadku trudności lub wątpliwości związanych z administrowaniem usługami, korzystaniem z nich lub ich wdrażaniem na serwerze, zalecamy kontakt z [wyspecjalizowanym dostawcą](https://partner.ovhcloud.com/pl/directory/) lub [naszą społecznością](https://community.ovh.com/en/).
>

## W praktyce

### Aktywacja trybu Rescue

Zaloguj się do [Panelu klienta OVHcloud](/links/manager), przejdź do sekcji `Bare Metal Cloud`{.action} i wybierz Twój serwer w sekcji `Prywatne serwery wirtualne`{.action}.

W zakładce `Strona główna`{.action} kliknij `...`{.action} obok "Boot" w strefie **Twój VPS**.

![Konfiguracja trybu ratunkowego](images/rescue_new.png){.thumbnail}

Wybierz `Zrestartuj w trybie Rescue`{.action} w menu.

Jeśli Panel klienta jest inny, zapoznaj się z naszym przewodnikiem "[Zarządzanie serwerem VPS legacy](/pages/bare_metal_cloud/virtual_private_servers/vps_legacy_control_panel)".

### Korzystanie z trybu Rescue

Po rozpoczęciu restartu pasek postępu wskazuje czas trwania zadania. Może to potrwać kilka minut.

> [!primary]
>
> Otrzymasz automatyczny e-mail z danymi do logowania SSH, w celu uzyskania dostępu do trybu Rescue. Prosimy o oczekiwanie na wiadomość e-mail przed kontynuowaniem jakichkolwiek działań. E-mail ten jest również dostępny w Twoim [Panelu klienta OVHcloud](/links/manager). Aby ją znaleźć, kliknij na nazwę powiązaną z Twoim identyfikatorem OVHcloud na pasku menu w prawym górnym rogu, następnie wybierz `E-maile dotyczące usługi`{.action}.
>

Następnie [uzyskaj dostęp do Twojego serwera przez SSH](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction), używając tymczasowego hasła wygenerowanego dla trybu Rescue.

Przykład:

```bash
ssh root@vps-x11x11xyy.vps.ovh.net
```

```console
root@vps-x11x11xyy.vps.ovh.net's password:
```

> [!warning]
>
> Klient SSH prawdopodobnie zablokuje połączenie w pierwszej kolejności z powodu niezgodności odcisku palca ECDSA. Jest to normalne, ponieważ tryb ratunkowy korzysta z własnego tymczasowego serwera SSH.
>
> Jednym ze sposobów na ominięcie tego problemu jest "komentowanie" znaku firmowego Twojego serwera VPS poprzez dodanie znaku `#` przed jego linią w pliku `known_hosts`. Nie zapomnij anulować tej zmiany przed przywróceniem netbootu do trybu "normalnego".<br>Możesz również usunąć wiersz z pliku. Po ponownym zalogowaniu się klient SSH doda nowy wpis linii papilarnych do serwera VPS. Jeśli potrzebujesz bardziej szczegółowych instrukcji, zapoznaj się z naszym przewodnikiem "[Wprowadzenie do SSH](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction#login)".
>

Aby wykonać większość modyfikacji na Twoim serwerze za pomocą SSH w trybie Rescue, zamontuj partycję systemu.

Po nawiązaniu połączenia sprawdź podłączone dyski przy użyciu tego polecenia:

```bash
lsblk
```

Wynik będzie podobny do poniższego przykładu wyjściowego:

```console
NAME    MAJ:MIN RM   SIZE RO TYPE MOUNTPOINTS
sda       8:0    0   2.9G  0 disk
└─sda1    8:1    0   2.9G  0 part /
sdb       8:16   0   160G  0 disk
├─sdb1    8:17   0 159.9G  0 part
├─sdb14   8:30   0     4M  0 part
└─sdb15   8:31   0   106M  0 part
```

W trybie rescue `sda` to dysk w trybie rescue i `sda1` to główna partycja zapasowa zamontowana na `/`.

W tym przykładzie głównym dyskiem VPS jest `sdb`, a partycja systemowa to `sdb1` (określana przez rozmiar).

Zamontuj tę partycję za pomocą polecenia:

```bash
mount /dev/sdb1 /mnt/
```

Twoje pliki są teraz dostępne z punktu montowania `/mnt`:


```bash
cd /mnt
```

```bash
ls
```

Wyświetli się wówczas Twój system plików:

```console
bin  boot  dev  etc  home  lib  lib32  lib64  libx32  lost+found  media  mnt  opt  proc  root  run  sbin  snap  srv  sys  tmp  usr  var
```

Zanim jednak będziesz mógł obsłużyć tę partycję, musisz ją otworzyć, aby uzyskać dostęp do zapisu. Możesz to zrobić za pomocą polecenia:

```bash
chroot /mnt
```

Możesz teraz zastosować zmiany w systemie, na przykład [zresetować hasła użytkownika i klucze SSH](#gofurther).

Po zakończeniu operacji w trybie Rescue zrestartuj VPS do trybu normalnego w Panelu klienta.

![rescue mode control panel](images/rescue_exit.png){.thumbnail}

### Rozwiązywanie problemów podczas uruchamiania

Jeśli podczas restartu serwera VPS wystąpi błąd, wykonaj następujące kroki:

- Sprawdź KVM w Panelu klienta, aby otrzymać informacje dotyczące powodów, dla których nie można uruchomić serwera VPS. Zapoznaj się z [przewodnikiem KVM](/pages/bare_metal_cloud/virtual_private_servers/using_kvm_for_vps), aby uzyskać więcej informacji na temat tej funkcji.
- Jeśli KVM wskazuje, że serwer VPS jest zablokowany podczas uruchamiania lub nie może odnaleźć dysku, upewnij się, że [logi początkowe są włączone](/pages/bare_metal_cloud/virtual_private_servers/bootlog_display_kvm). Prześlij logi do naszych zespołów pomocy technicznej, aby uzyskać więcej informacji [dodaj zgłoszenie](https://help.ovhcloud.com/csm?id=csm_get_help).

<a name="gofurther"></a>

## Sprawdź również

[Wprowadzenie do SSH](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction)

[Jak odzyskać dostęp do serwera w przypadku utraty hasła użytkownika](/pages/bare_metal_cloud/dedicated_servers/replacing-user-password)

[Zastąp parę kluczy SSH](/pages/bare_metal_cloud/dedicated_servers/replacing-lost-ssh-key)

[Sprawdź system plików na serwerze VPS](/pages/bare_metal_cloud/virtual_private_servers/check-filesystem)

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.
