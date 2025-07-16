---
title: "Jak aktywować i używać trybu Rescue Windows"
excerpt: "Dowiedz się, jak używać systemu rescue OVHcloud dla Windows do rozwiązywania problemów z serwerem dedykowanym"
updated: 2025-01-28
---

<style>
details>summary {
    color:rgb(33, 153, 232) !important;
    cursor: pointer;
}
details>summary::before {
    content:'\25B6';
    padding-right:1ch;
}
details[open]>summary::before {
    content:'\25BC';
}
</style>

## Wprowadzenie

Tryb Rescue jest dostarczanym przez OVHcloud narzędziem pozwalającym na uruchomienie się na tymczasowym systemie operacyjnym. Jego zadaniem jest diagnozowanie i rozwiązywanie problemów z serwerem.

Ogólne działanie trybu ratunkowego zostało opisane w naszym przewodniku "[Jak aktywować i używać trybu ratunkowego](/pages/bare_metal_cloud/dedicated_servers/rescue_mode)".

Opcja **Windows customer rescue system** jest dostępna tylko dla serwerów dedykowanych, na których został zainstalowany system operacyjny **Windows Server**. Obowiązują następujące warunki:

- System rescue dla Windows (`rescue-customer-windows`) działa na maszynie wirtualnej (VM) uruchomionej z systemu rescue client (`rescue-customer`, opartego na Debianie GNU/Linux).
- Dyski serwera są przypisane do maszyny wirtualnej za pomocą *passthrough*, dzięki czemu jest możliwy dostęp do niej.
- Inne komponenty serwera będą niedostępne (procesor, pamięć RAM, karta sieciowa, karta RAID).
- Sieć jest zamontowana z *passthrough*, ale bez bezpośredniego dostępu do karty sieciowej. VM posiada adres IP i adres MAC serwera *bare metal*.

> [!warning]
>
> Pamiętaj o sporządzeniu kopii zapasowej swoich danych, jeśli jeszcze nie posiadasz kopii zapasowej.
>
> Jeśli posiadasz usługi produkcyjne na swoim serwerze, tryb Rescue przerywa je, dopóki maszyna nie zostanie zrestartowana w trybie normalnym.
>

**Dowiedz się, jak uruchomić serwer w systemie kopii zapasowej klienta Windows.**

## Wymagania początkowe

- Microsoft Windows zainstalowany na Twoim [serwerze dedykowanym](/links/bare-metal/bare-metal)
- Co najmniej 16 GB RAM zainstalowanych na serwerze
- Dostęp do [panelu klienta OVHcloud](/links/manager)

## W praktyce

### Aktywacja trybu Rescue dla Windows

Zaloguj się do [Panelu klienta OVHcloud](/links/manager), otwórz sekcję `Bare Metal Cloud`{.action}, następnie `Serwery dedykowane`{.action}.

Kliknij nazwę serwera, aby otworzyć zakładkę `Informacje ogólne`{.action}.

<a name="netboot"></a>

W polu **Informacje ogólne** kliknij przycisk `...`{.action} obok `Boot`. Kliknij na `Zmień`{.action} w menu kontekstowym.

![Zmień tryb uruchamiania](images/rescue-mode-001.png){.thumbnail}

Na stronie **Zmień netboot** wybierz `Uruchom w trybie diagnostycznym (Rescue)`{.action}.

Z rozwijanego menu wybierz opcję `Windows customer rescue system`{.action}.

![Zmień tryb uruchamiania](images/manager-rescue-windows-menu.png){.thumbnail width="800"}

Powiadomienie e-mail dotyczące trybu Rescue oraz dane identyfikacyjne zostaną wysłane na adres e-mail do kontaktu przypisany do Twojego konta OVHcloud. Aby użyć innego adresu e-mail, wpisz go w polu `Wyślij dane do logowania do trybu Rescue na adres e-mail:`.

Kliknij przycisk `Dalej`{.action}.

W kroku **Podsumowanie** kliknij `Zatwierdź`{.action}.

![Summary](images/winresc_summ.png){.thumbnail}

Powinieneś mieć teraz powiadomienie dotyczące parametru `Netboot` w zakładce `Informacje ogólne`{.action}.

![Netboot](images/rescue-mode-006.png){.thumbnail}

Ostatni etap polega na zrestartowaniu serwera. Kliknij przycisk`...`{.action} obok "Status" w obszarze **Status usług**, a następnie kliknij `Restartuj`{.action}. W wyskakującym okienku kliknij przycisk `Zatwierdź`{.action}.

![Reboot](/pages/assets/screens/control_panel/product-selection/bare-metal-cloud/dedicated-servers/general-information/rebooting-your-server.png){.thumbnail}

Reboot sprzętowy zajmie kilka minut. Możesz sprawdzić aktualny status w zakładce `Zadania`{.action}.

> [!primary]
>
> Po zakończeniu operacji w trybie Rescue pamiętaj, aby przed zrestartowaniem serwera ponownie ustawić parametr `Netboot` na `Booter na dysku twardym`{.action}.

### Dostęp do serwera w trybie Rescue

Po otrzymaniu wiadomości e-mail z informacją, że tryb Rescue jest włączony, możesz zalogować się do systemu poprzez tryb Rescue Windows i uzyskać dostęp do serwera.  
E-mail ten będzie również dostępny w Twoim [Panelu klienta OVHcloud](/links/manager) od chwili wysłania. Kliknij nazwę powiązaną z Twoim identyfikatorem klienta na pasku menu w prawym górnym rogu, następnie wybierz `E-maile dotyczące usługi`{.action}.

Aby nawiązać sesję zdalną z systemem Windows w trybie Rescue, potrzebne będą następujące poświadczenia:

- Adres IP serwera
- Nazwa użytkownika tymczasowego konta administratora (`Administrator`)
- Hasło tymczasowego administratora

Aby uzyskać dostęp do serwera za pośrednictwem systemu Windows w trybie Rescue, można użyć następujących metod połączenia:

- Remote Desktop Protocol (RDP)
- KVM over IP (jeśli Twój serwer na to pozwala)
- OpenSSH (oficjalny składnik Windows Server)

#### RDP

/// details | Rozwiń tę sekcję

Aby się zalogować, użyj klienta Windows `Remote Desktop Connection` lub dowolnej zgodnej aplikacji.

![rdp connection](/pages/assets/screens/other/windows/windows_rdp.png){.thumbnail}

///

#### KVM

/// details | Rozwiń tę sekcję

Na ekranie logowania KVM można wybrać inny język klawiatury.

![KVM Login Screen](images/rescue-kvm-login-screen.png){.thumbnail width="800"}

![KVM Language Screen](images/rescue-kvm-login-language.png){.thumbnail width="800"}

Możesz zmienić opcje dostępności i włączyć klawiaturę wirtualną:

![KVM accessibility Screen](images/rescue-kvm-login-accessibility.png){.thumbnail width="800"}

![KVM keyboard screen](images/rescue-kvm-login-keyboard.png){.thumbnail width="800"}

Więcej informacji znajdziesz w naszym przewodniku: [Jak używać konsoli IPMI z serwerem dedykowanym](/pages/bare_metal_cloud/dedicated_servers/using_ipmi_on_dedicated_servers)

///

#### SSH

/// details | Rozwiń tę sekcję

Otwórz aplikację wiersza polecenia na urządzeniu lokalnym i wprowadź następującą komendę:

```bash
ssh Administrator@SERVER_IP
```

Przykład:

```bash
ssh Administrator@203.0.113.100
```

Po wyświetleniu monitu wprowadź hasło do tymczasowego trybu ratunkowego. Przykład:

```console
Administrator@ns9356771.ip-203-0-113.eu's password:
administrator@WINRESCUEOVH C:\Users\Administrator>
```

Więcej informacji na temat połączeń SSH znajdziesz w naszym [przewodniku wprowadzającym do SSH](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction).  
Możesz również użyć dowolnego narzędzia do logowania SSH, takiego jak [PuTTY](/pages/web_cloud/web_hosting/ssh_using_putty_on_windows).

///

### Importowanie dysków w celu uzyskania dostępu do plików

Po połączeniu się z klienckim systemem zapasowym Windows należy zaimportować (*mount*) dyski serwera Windows przed uzyskaniem dostępu do systemu plików.

/// details | Rozwiń tę sekcję

> [!warning]
> Poniższe przykłady instrukcji i zrzutów ekranu ilustrują proces montażu na serwerze z dwoma dużymi dyskami (RAID1). Szczegóły wyświetlane przez narzędzie Zarządzanie dyskami zależą od konfiguracji dysku serwera.  
> Aby uzyskać więcej informacji, zobacz [Oficjalna dokumentacja Microsoft](https://learn.microsoft.com/en-us/windows-server/storage/disk-management/overview-of-disk-management).
>
> Jeśli potrzebujesz profesjonalnego wsparcia w administrowaniu serwerem, zapoznaj się z sekcją [Sprawdź również](#gofurther) w tym przewodniku.

| ![Zarządzanie dyskami w systemie Windows](images/rescue-disk-mgmt1.png){.thumbnail} |
|---|
| Kliknij prawym przyciskiem myszy przycisk `Start Menu`{.action} i otwórz `Disk Management`{.action}. |

| ![Zarządzanie dyskami w systemie Windows](images/rescue-disk-mgmt2.png){.thumbnail width="700"} |
|---|
| `Disk 0` zawiera system rescue (volume `C:`). Dyski serwera Windows będą wyświetlane jako `Offline`. |

| ![Zarządzanie dyskami w systemie Windows](images/rescue-disk-mgmt3.png){.thumbnail} |
|---|
| Kliknij prawym przyciskiem myszy na każdy dysk i wybierz `Online`{.action} z menu kontekstowego. |

| ![Zarządzanie dyskami w systemie Windows](images/rescue-disk-mgmt4.png){.thumbnail} |
|---|
| Dyski serwera są teraz [rozpoznawane przez system rescue jako `Foreign`](https://learn.microsoft.com/en-us/troubleshoot/windows-server/backup-and-storage/troubleshoot-disk-management#a-dynamic-disks-status-is-foreign), co wskazuje, że podłączone dyski należą do innego systemu operacyjnego. |

| ![Zarządzanie dyskami w systemie Windows](images/rescue-disk-mgmt5.png){.thumbnail} |
|---|
| Kliknij prawym przyciskiem myszy dysk i wybierz z menu kontekstowego pozycję `Import Foreign Disks...`{.action}. |

| ![Zarządzanie dyskami w systemie Windows](images/rescue-disk-mgmt6.png){.thumbnail} |
|---|
| Jeśli są dostępne, wybierz dyski do zaimportowania. Kliknij przycisk `OK`{.action}. |

| ![Zarządzanie dyskami w systemie Windows](images/rescue-disk-mgmt7.png){.thumbnail} |
|---|
| Kliknij na `OK`{.action}. |

| ![Zarządzanie dyskami w systemie Windows](images/rescue-disk-mgmt8.png){.thumbnail} |
|---|
| W tym przykładzie oba dyski serwera są dublowane, więc zostanie wyświetlony stan `Resynching`. Jest to normalny proces; ponowna synchronizacja będzie kontynuowana po ponownym uruchomieniu serwera w zainstalowanym systemie operacyjnym. |

| ![Zarządzanie dyskami w systemie Windows](images/rescue-disk-mgmt9.png){.thumbnail} |
|---|
| Aby uzyskać dostęp do plików, kliknij prawym przyciskiem myszy partycję Windows Twojego `Disk 1` i wybierz `Open`{.action} z menu kontekstowego. |

///

### Zalecane narzędzia

> [!primary]
>
> W systemie nie ma wstępnie zainstalowanego żadnego dodatkowego oprogramowania w trybie rescue. Poniżej znajduje się lista zalecanych narzędzi dostępnych na stronie deweloperów danego narzędzia.

| Oprogramowanie | Opis |
| --- | --- |
| CrystalDiskInfo | Narzędzie diagnostyczne dla dysków |
| 7-Zip | Narzędzie do zarządzania archiwami |
| FileZilla | Klient FTP |

### Wyjście z trybu rescue

W Twoim [Panelu klienta OVHcloud](/links/manager) [zmień tryb uruchamiania](#netboot) ponownie na `Uruchom z dysku twardego`{.action} i zatwierdź.

![Netboot Disk](images/rescue-mode-007.png){.thumbnail width="800"}

Następnie użyj funkcji `Uruchom ponownie`{.action} w Panelu klienta OVHcloud.

<a name="gofurther"></a>

## Sprawdź również

[Jak aktywować i korzystać z trybu ratunkowego](/pages/bare_metal_cloud/dedicated_servers/rescue_mode)

[Jak zmienić hasło administratora na serwerze dedykowanym z systemem Windows](/pages/bare_metal_cloud/dedicated_servers/rcw-changing-admin-password-on-windows)

W przypadku wyspecjalizowanych usług (pozycjonowanie, rozwój, etc.) skontaktuj się z [partnerami OVHcloud](/links/partner).

Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i użytkowania Twoich rozwiązań OVHcloud, zapoznaj się z naszymi [ofertami pomocy](/links/support).

Dołącz do [grona naszych użytkowników](/links/community).
