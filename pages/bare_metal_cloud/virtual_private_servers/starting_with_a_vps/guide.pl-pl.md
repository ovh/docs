---
title: Wprowadzenie do VPS
excerpt: "Dowiedz się, jak zarządzać VPS w Panelu klienta OVHcloud i odkryj pierwsze kroki w jego użyciu, w tym połączenia zdalne i środki bezpieczeństwa"
updated: 2026-01-21
---

## Wprowadzenie

Serwer wirtualny prywatny (VPS) to serwer, którego pełnią Państwo administrację.

W przeciwieństwie do usługi hostingu zarządzanego, odpowiedzialność za poniższe czynności należy do Państwa:

- Konfiguracja: zarządzanie i konfiguracja serwera.
- Bezpieczeństwo: ochrona VPS przed atakami.
- Konserwacja: utrzymanie serwera w aktualnym i sprawnym stanie.
- Kopie zapasowe: regularne testowanie kopii zapasowych w celu zapewnienia odtwarzania danych.

## Wymagania początkowe

- Aktywna oferta [VPS](/links/bare-metal/vps) w Twoim Panelu klienta OVHcloud.

<!-- CP-NAV-START:baremetal-vps -->
---

### Dostęp do Panelu klienta OVHcloud

- **Link bezpośredni:** [VPS management](/links/control-panel/baremetal-vps)
- **Ścieżka nawigacji:** `Bare Metal Cloud`{.action} > `Prywatne serwery wirtualne`{.action} > Wybierz VPS

---
<!-- CP-NAV-END:baremetal-vps -->

## W praktyce

Aby zrozumieć interfejs zarządzania swoim VPS i dostępne działania w Panelu klienta OVHcloud, zapoznaj się z naszym [przewodnikiem po pierwszych krokach w Panelu klienta OVHcloud dla VPS](/pages/bare_metal_cloud/virtual_private_servers/understand-vps-control-panel).

**Spis treści:**

- [Krok 1: Pierwsze połączenie](#initial-connection)
    - [Dystrybucja GNU/Linux](#linuxconnect)
    - [Dystrybucja Windows](#winconnect)
- [Krok 2: Używanie konta root](#rootaccount)
- [Krok 3: Zabezpieczenie swojego VPS](#secure)
- [Krok 4: Przypisanie nazwy domeny](#domain)

### Krok 1: Pierwsze połączenie <a name="initial-connection"></a>

#### Linux: <a name="linuxconnect"></a>

Podczas pierwszego połączenia z VPS zauważ, że **konto, z którego się łączysz, nie jest root**.

W OVHcloud, ze względów bezpieczeństwa i ochrony usług klientów, automatycznie tworzymy **nazwę użytkownika powiązaną z systemem operacyjnym, który wybrałeś** podczas składania zamówienia.

Dokładna nazwa użytkownika do użycia przy połączeniu wyraźnie wskazana jest w e-mailu z dostarczeniem VPS.

Na przykład:

- Dla **Debian**, nazwa użytkownika będzie **debian**.
- Dla **Ubuntu**, nazwa użytkownika będzie **ubuntu**.
- Dla **Rocky Linux**, nazwa użytkownika będzie **rocky**.

Tymczasowy hasło powiązane z tym kontem jest wysyłane do Ciebie przez bezpieczny link w e-mailu z dostarczeniem.

> [!primary]
> **Ważna uwaga**: podczas swojego **pierwszego połączenia**, zostaniesz poproszony o **zmianę tymczasowego hasła**.
>
> Po zmianie hasła, **sesja zostanie automatycznie zamknięta**. Jest to normalne zachowanie. Następnie musisz **ponownie się połączyć, używając nowego hasła**.

```bash
ssh username@IPv4_VPS
```

- Zamień "username" na użytkownika odpowiadającego Twojemu systemowi operacyjnemu.
- Zamień "IPv4_de_votre_VPS" na adres IP wskazany w e-mailu z dostarczeniem.

#### Windows: <a name="winconnect"></a>

##### Zakończenie instalacji Windows

Po zainstalowaniu systemu Windows otrzymujesz e-mail z domyślną nazwą użytkownika `Windows user`.

Następnie musisz ukończyć proces instalacji Windows, ustawiając język ekranu, układ klawiatury i hasło administratora.

To się odbywa w konsoli KVM VPS: Na karcie `Strona główna`{.action} kliknij przycisk `...`{.action} obok nazwy swojego VPS w sekcji **Twój VPS** i wybierz `KVM`{.action}.

Znajdź więcej informacji na temat tego narzędzia w naszym "[KVM guide](/pages/bare_metal_cloud/virtual_private_servers/using_kvm_for_vps)".

Aby ukończyć początkową konfigurację swojego VPS z Windows, wykonaj poniższe kroki przeglądając karty:

> [!tabs]
> 1. **Ustawienia regionalne**
>>
>> Po nawiązaniu sesji KVM ukończ początkową konfigurację Windows, ustawiając swoje **kraj/region**, preferowany **język Windows** i **układ klawiatury**. Następnie kliknij przycisk `Next`{.action} w prawym dolnym rogu.
>>
>> ![KVM](/pages/assets/screens/other/windows/windows_locale.png){.thumbnail}
>>
> 2. **Hasło administratora**
>>
>> Ustaw hasło dla swojego konta Windows `Administrator`/`admin`, potwierdź je, a następnie kliknij `Finish`{.action}.
>>
>> ![KVM](/pages/assets/screens/other/windows/windows_admin.png){.thumbnail}
>>
> 3. **Ekran logowania**
>>
>> Windows zastosuje Twoje ustawienia, a następnie wyświetli ekran logowania. Kliknij przycisk `Send CtrlAltDel`{.action} w górnym rogu, aby się zalogować.
>>
>> ![KVM](/pages/assets/screens/other/windows/windows_vnc.png){.thumbnail}
>>
> 4. **Logowanie administratora**
>>
>> Wprowadź hasło `Administrator`, które utworzyłeś w poprzednim kroku i kliknij strzałkę.
>>
>> ![KVM](/pages/assets/screens/other/windows/windows_login.png){.thumbnail}
>>

##### Połączenie z serwerem za pomocą RDP

Na swoim lokalnym urządzeniu z Windows możesz użyć aplikacji klienckiej "Remote Desktop Connection", aby połączyć się z VPS.

![Windows remote](/pages/assets/screens/other/windows/windows_rdp.png){.thumbnail}

Wprowadź adres IPv4 swojego VPS, a następnie swoje nazwę użytkownika i hasło. Zazwyczaj pojawia się komunikat ostrzegawczy, który poprosi Cię o potwierdzenie połączenia z powodu nieznanego certyfikatu. Kliknij `Yes`{.action}, aby połączyć się.

Możesz również użyć innej aplikacji trzeciej strony kompatybilnej z RDP. Jest to wymagane, jeśli na Twoim lokalnym urządzeniu nie jest zainstalowany Windows.

> [!primary]
>
Jeśli napotkasz trudności z tym procedurą, sprawdź, czy połączenia zdalne (RDP) są dozwolone na Twoim urządzeniu, sprawdzając ustawienia systemowe, reguły zapory i możliwe ograniczenia sieciowe.
>

Aby ułatwić rozwiązywanie problemów w przypadku wystąpienia problemów, zalecamy **włączenie logów uruchamiania Windows**, postępując zgodnie z naszym [przewodnikiem](/pages/bare_metal_cloud/virtual_private_servers/windows-boot-logs).

### Krok 2: Używanie konta root (opcjonalne, ale zalecane) <a name="rootaccount"></a>

Użytkownik root jest domyślnie wyłączony ze względów bezpieczeństwa Twojego produktu.

Do zadań administracyjnych użyj sudo ze swojego głównego użytkownika:

```bash
sudo command
```

Jeśli chcesz włączyć root:

```bash
sudo passwd root
```

### Krok 3: Zabezpieczenie swojego VPS <a name="secure"></a>

Jeśli chcesz zabezpieczyć swój VPS, zalecamy wykonanie naszego przewodnika "[Zabezpieczenie VPS](/pages/bare_metal_cloud/virtual_private_servers/secure_your_vps)". Ten przewodnik prowadzi Cię przez proces i opisuje poniższe działania:

- Aktualizacja systemu.
- Zmiana domyślnej liczby portu nasłuchiwania SSH.
- Konfiguracja wewnętrznej zapory.
- Instalacja fail2ban w celu zablokowania powtarzających się prób logowania.
- Tworzenie kopii zapasowych systemu i danych.

### Krok 4: Przypisanie nazwy domeny (opcjonalne, ale zalecane) <a name="domain"></a>

Umieszczenie swojego VPS online zazwyczaj wymaga użycia i skonfigurowania nazwy domeny.

Do tego zalecamy wykonanie poniższych działań:

- [Edytuj strefę DNS](/pages/web_cloud/domains/dns_zone_edit), dodając odpowiednie wpisy, aby wskazać domenę na adres IPv4 swojego VPS.
- [Włącz bezpłatny certyfikat SSL (Let's Encrypt)](/pages/bare_metal_cloud/virtual_private_servers/install-ssl-certificate), aby zabezpieczyć dostęp do swoich stron internetowych za pośrednictwem HTTPS.

## Sprawdź również

[VPS FAQ](/pages/bare_metal_cloud/virtual_private_servers/vps-faq)

[Wprowadzenie do SSH](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction)

[Zabezpieczenie VPS](/pages/bare_metal_cloud/virtual_private_servers/secure_your_vps)

[Jak odzyskać dostęp do serwera w przypadku utraty hasła użytkownika](/pages/bare_metal_cloud/dedicated_servers/replacing-user-password)

Dołącz do [grona naszych użytkowników](/links/community).