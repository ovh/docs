---
title: Uruchamianie i korzystanie z trybu Rescue na serwerze VPS
excerpt: Dowiedz się, jak używać trybu Rescue OVHcloud do rozwiązywania problemów z serwerem VPS i przeprowadzania weryfikacji systemu
updated: 2025-01-12
---

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
- Posiadanie już skonfigurowanego [VPS OVHcloud](/links/bare-metal/vps)

> [!warning]
> OVHcloud zapewnia usługi, ale to użytkownik ponosi odpowiedzialność za zarządzanie nimi oraz ich konfigurację. Do Twoich obowiązków należy zatem upewnienie się, że działają one prawidłowo.
>
> Ten przewodnik ułatwi Ci realizację bieżących zadań. Niemniej jednak, w przypadku trudności lub wątpliwości związanych z administrowaniem usługami, korzystaniem z nich lub ich wdrażaniem na serwerze, zalecamy kontakt z [wyspecjalizowanym dostawcą](/links/partner) lub [naszą społecznością](https://community.ovh.com/en/).
>

## W praktyce

### Aktywacja trybu Rescue

Zaloguj się do [Panelu klienta OVHcloud](/links/manager), przejdź do sekcji `Bare Metal Cloud`{.action} i wybierz Twój serwer w sekcji `Prywatne serwery wirtualne`{.action}.

W zakładce `Strona główna`{.action} kliknij `...`{.action} obok "Boot" w strefie **Twój VPS**.

![Rescue](/pages/assets/screens/control_panel/product-selection/bare-metal-cloud/vps/cp_rescue.png){.thumbnail}

Wybierz `Zrestartuj w trybie Rescue`{.action} w menu.

### Korzystanie z trybu Rescue

Po rozpoczęciu restartu pasek postępu wskazuje czas trwania zadania. Może to potrwać kilka minut.

> [!primary]
>
> Otrzymasz automatyczny e-mail z danymi do logowania SSH, w celu uzyskania dostępu do trybu Rescue. Prosimy o oczekiwanie na wiadomość e-mail przed kontynuowaniem jakichkolwiek działań. E-mail ten jest również dostępny w Twoim [Panelu klienta OVHcloud](/links/manager). Aby ją znaleźć, kliknij na nazwę powiązaną z Twoim identyfikatorem OVHcloud na pasku menu w prawym górnym rogu, następnie wybierz `E-maile dotyczące usługi`{.action}.
>

> [!warning]
> Pamiętaj, że jeśli nie jesteś już osobą kontaktową ds. technicznych serwera, nie otrzymasz wiadomości e-mail. Więcej informacji znajdziesz w naszym przewodniku: [Zarządzanie kontaktami swoich usług](/pages/account_and_service_management/account_information/managing_contacts).
>

Następnie [uzyskaj dostęp do Twojego serwera przez SSH](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction), używając tymczasowego hasła wygenerowanego dla trybu Rescue.

Przykład:

```bash
ssh root@vps-x11x11xyy.vps.ovh.net
```

```console
root@vps-x11x11xyy.vps.ovh.net's password:
```

> [!primary]
>
> Klient SSH normalnie zablokuje logowanie na początku z powodu niezgodności odcisku palca ECDSA. Jest to normalne, ponieważ tryb ratunkowy korzysta z własnego tymczasowego serwera SSH. Aby rozwiązać ten problem, edytuj plik `known_hosts` w Twoim lokalnym katalogu `.ssh`.  
> Masz dwie możliwości:
>
> - **Usuń odcisk palca z pliku.** Klient SSH doda nowy wpis odcisku palca dla serwera, gdy nie będziesz już korzystać z trybu Rescue. Więcej informacji na ten temat znajduje się w części "Login i fingerprint" naszego [przewodnika wprowadzającego do SSH](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction).
>
> - **Tymczasowo wyłącz odcisk palca.** Otwórz plik `known_hosts` w edytorze tekstu i zidentyfikuj ciąg odcisku palca Twojego serwera za pomocą adresu IP. Dodaj znak `#` na początku wiersza. Dlatego ten wiersz jest teraz "komentarzem" i zostanie zignorowany przez aplikacje czytające plik. Pamiętaj, aby anulować tę zmianę przed zrestartowaniem serwera VPS.
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

![rescue mode control panel](/pages/assets/screens/control_panel/product-selection/bare-metal-cloud/vps/cp_reboot.png){.thumbnail}

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
