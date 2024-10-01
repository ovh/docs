---
title: Pierwsze kroki z serwerem VPS
excerpt: Dowiedz się, jak zarządzać serwerem VPS w Panelu klienta i poznaj pierwsze kroki korzystania z niego, w tym zdalne połączenia i środki bezpieczeństwa
updated: 2024-10-01
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk "Zgłóś propozycję modyfikacji" na tej stronie.
>
 
## Wprowadzenie

Prywatny serwer wirtualny (VPS) to zwirtualizowany serwer dedykowany, który zapewnia większą elastyczność i kontrolę w porównaniu do tradycyjnych rozwiązań hostingowych. W przeciwieństwie do rozwiązań hostingowych zarządzanych przez OVHcloud, w których zadania związane z zarządzaniem są wykonywane, administrowanie serwerem VPS należy wyłącznie do Ciebie. Jako administrator systemu jesteś odpowiedzialny za konfigurację, konserwację i zabezpieczenie serwera, w celu zagwarantowania jego prawidłowego działania i niezawodności.

**Poznaj informacje niezbędne do rozpoczęcia pracy z serwerem VPS.**

## Wymagania początkowe

- Posiadanie serwera [VPS](/links/bare-metal/vps) w Panelu klienta OVHcloud
- Dostęp do [Panelu klienta OVHcloud](/links/manager)

## W praktyce

### Podsumowanie

- [Panel klienta](#controlpanel)
- [Funkcje VPS dostępne w zakładce "Strona główna"](#hometab)
- [Logowanie do serwera VPS](#connect)
    - [Dystrybucja GNU/Linux](#linuxconnect)
    - [Dystrybucja Windows](#winconnect)
- [Zabezpiecz Twój serwer VPS](#secure)
- [Przypisz domenę](#domain)

Zaloguj się do [Panelu klienta OVHcloud](/links/manager), przejdź do sekcji `Bare Metal Cloud`{.action} i wybierz Twój serwer w sekcji `Prywatne serwery wirtualne`{.action}.

<a name="controlpanel"></a>

### Panel klienta

Karta `Strona`{.action} główna zawiera ważne informacje o Twojej usłudze i umożliwia przeprowadzenie najważniejszych operacji.

![VPS Home](images/vpshome.png){.thumbnail}

#### Twój VPS <a name="yourvps"></a>

Poniżej znajdziesz podstawowe informacje o Twoim serwerze VPS oraz o stanie usługi. Kliknij poniższe zakładki, aby wyświetlić szczegółowe informacje.

> [!tabs]
> Nazwa
>>
>> Aby spersonalizować nazwę serwera VPS, kliknij przycisk `...`{.action}, następnie wybierz `Zmień nazwę`{.action}. Funkcja ta jest przydatna w przypadku zarządzania kilkoma usługami VPS. Wewnętrzna nazwa usługi jest nadal w formacie *vps-XXXXX.vps.ovh.net*.
>>
> Boot
>>
>> Wskazany tryb uruchamiania to **tryb normalny**, w którym serwer ładuje zainstalowany system operacyjny (*LOCAL*), lub **tryb rescue**, dostarczony przez OVHcloud w przypadku rozwiązywania problemów. Użyj przycisku `...`{.action} aby [zrestartować VPS](#reboot-current-range) lub uruchom go w trybie rescue, jeśli jest to wymagane.
>>
>> Więcej informacji na ten temat znajdziesz w przewodniku dotyczącym [trybu Rescue](/pages/bare_metal_cloud/virtual_private_servers/rescue).
>>
> OS / Dystrybucja
>>
>> est to aktualnie zainstalowany system operacyjny. Użyj przycisku `...`{.action} aby [ponownie zainstalować ten sam system operacyjny lub wybrać inny spośród dostępnych opcji](#reinstalvps).
>>
>> > [!warning]
>> >
>> > Reinstalacja usunie wszystkie dane aktualnie hostowane na serwerze VPS (z wyjątkiem dodatkowych dysków).
>>
>> > [!primary]
>> >
>> > Jeśli zamówiłeś VPS **Windows**, możesz wybrać tylko system Windows do reinstalacji. Podobnie, jeśli system Windows nie został wybrany podczas zamówienia, nie może zostać zainstalowany po zainstalowaniu serwera VPS.
>>
>>
>> Po zainstalowaniu systemu wykonaj aktualizacje zabezpieczeń. Więcej informacji [poniżej](#reinstalvps) znajdziesz w naszym przewodniku "[Zabezpiecz serwer VPS](/pages/bare_metal_cloud/virtual_private_servers/secure_your_vps)".
>> 
> Strefa / Lokalizacja
>>
>> W tych sekcjach znajdziesz informacje o lokalizacji serwera VPS. Może to być przydatne do zidentyfikowania i oceny ewentualnych skutków dla Twojej usługi, takich jak te wymienione w [raportach o awariach lub konserwacjach](https://bare-metal-servers.status-ovhcloud.com/).
>>

### Twoja konfiguracja

Kliknij poniższe karty, aby wyświetlić szczegóły tej sekcji.

> [!tabs]
> Szablon
>>
>> Ten element służy do identyfikacji modelu serwera VPS odpowiadającego [ofertom VPS na naszej stronie](/links/bare-metal/vps).
>>
> vCores / Pamięć / Przestrzeń dyskowa
>> 
>> Aktualne zasoby serwera VPS wyświetlają się tutaj. Możesz je zaktualizować osobno, klikając odpowiedni przycisk. Aktualizacje są ograniczone wybranym modelem VPS i mogą być dostępne tylko po przejściu na [wyższą gamę](/links/bare-metal/vps).
>>
> Dodatkowe dyski
>>
>> Dodaj do serwera VPS dodatkowe dyski, aby zwiększyć przestrzeń dyskową serwera poza wstępną konfiguracją. Możesz na przykład przechowywać na nim dane kopii zapasowych.

### IP

Kliknij poniższe karty, aby wyświetlić szczegóły tej sekcji.

> [!tabs]
> IPv4
>>
>> Główny publiczny adres IPv4 serwera VPS jest konfigurowany automatycznie podczas instalacji. Więcej informacji na temat zarządzania adresami IP znajdziesz w przewodniku [Konfiguracja IP aliasing](/pages/bare_metal_cloud/virtual_private_servers/configuring-ip-aliasing).
>>
> IPv6 / Gateway
>> 
>> W tej części można zobaczyć publiczny adres IPv6 i adres przypisanej bramy. Są one automatycznie dołączane do serwera VPS podczas instalacji. Więcej informacji zawiera [ten przewodnik](/pages/bare_metal_cloud/virtual_private_servers/configure-ipv6).
>> 
> DNS secondary
>>
>> Funkcja ta jest przydatna przy instalowaniu usług DNS. Szczegółowo opisany jest [w przewodniku dotyczącym konfigurowania DNS secondary OVHcloud na serwerze VPS](/pages/bare_metal_cloud/virtual_private_servers/adding-secondary-dns-on-vps).

### Kopia zapasowa

Opcje te dotyczą dodatkowych usług VPS, które można zamówić w Panelu klienta.

> [!tabs]
> Snapshot
>>
>> Snapshot serwera VPS to natychmiastowa kopia stanu serwera, która umożliwia szybkie przywrócenie systemu w przypadku problemu. Opcja `Snapshot` pozwala na utworzenie ręcznego snapshota jako pojedynczego punktu przywracania.
>>
> Automatyczny backup
>>
>> Opcja `Automatyczny backup` pozwala na zaplanowanie regularnych kopii zapasowych serwera VPS. W przeciwieństwie do snapshotów wykonywanych ręcznie, funkcja ta zachowuje kilka punktów przywracania w czasie, zapewniając w ten sposób ciągłą i automatyczną ochronę danych (z wyłączeniem dodatkowych dysków).

Wszystkie informacje dotyczące dostępnych dla Twojej usługi rozwiązań do tworzenia kopii zapasowych znajdują się na stronie [produkt VPS] (/links/bare-metal/vps-options) oraz w naszych [przewodnikach] (/products/bare-metal-cloud-virtual-private-servers-backups).

### Subskrypcja

W tych sekcjach znajdują się najważniejsze informacje dotyczące fakturowania usługi. Wszystkie informacje na ten temat znajdziesz w odpowiedniej [dokumentacji](/products/account-and-service-management-managing-billing-payments-and-services).

<a name="hometab"></a>

## Funkcje VPS dostępne w zakładce "Strona główna"

> [!warning]
>
> OVHcloud udostępnia Ci usługi, ale to użytkownik ponosi odpowiedzialność za zarządzanie nimi oraz ich konfigurację. Do Twoich obowiązków należy zatem upewnienie się, że działają one prawidłowo.
>
> Celem niniejszego przewodnika jest pomoc w jak najbardziej optymalnym wykonywaniu bieżących zadań. Niemniej jednak, w przypadku trudności lub wątpliwości związanych z administrowaniem, użytkowaniem lub wdrażaniem usług na serwerze, zalecamy skontaktowanie się z [wyspecjalizowanym](https://partner.ovhcloud.com/pl/directory/) dostawcą usług lub [naszą społecznością](https://community.ovh.com/en/).
>

### Reinstalacja serwera VPS <a name="reinstalacja vps"></a>

Reinstalacja serwera VPS może zostać przeprowadzona z poziomu panelu klienta. Kliknij przycisk`...`{.action} po prawej stronie `OS / Distribution`{.action}, a następnie `Reinstaluj mój VPS`{.action}.

![VPSnewreinstalacja](images/2023panel_01.png){.thumbnail}

W oknie, które się pojawi, wybierz system operacyjny z rozwijanej listy. Proponowane opcje to [obrazy kompatybilne z serwerem VPS OVHcloud] (/pages/public_cloud/compute/image-life-cycle), które zaczną działać natychmiast po instalacji.

Możesz również wybrać **klucz SSH** do zainstalowania w systemie, jeśli wcześniej przechowywałeś go w swoim [Panelu klienta OVHcloud](/links/manager). Więcej informacji na ten temat znajdziesz w przewodniku "[Tworzenie i używanie kluczy SSH](/pages/bare_metal_cloud/dedicated_servers/creating-ssh-keys-dedicated)".
Jeśli wybrałeś klucz SSH i nie potrzebujesz identyfikatora i hasła, aby się zalogować, zaznacz kratkę `Nie chcę otrzymywać na e-mail danych do logowania dla mojego serwera VPS.`.

> [!warning]
>
> Reinstalacja sformatuje wszystkie dyski serwera. Zalecamy utworzenie kopii zapasowej snapshot serwera VPS przed kontynuowaniem, aby w przypadku problemów móc wrócić do poprzedniego stanu.
>

> [!primary]
>
> **Licencje**
>
> Niektóre zastrzeżone systemy operacyjne lub platformy, takie jak Plesk lub cPanel, wymagają licencji, które generują dodatkowe koszty. Licencjami można zarządzać w Panelu klienta: przejdź do sekcji `Bare Metal Cloud`{.action} , a następnie na pasku nawigacji po lewej stronie kliknij `Licencje`{.action}.
>
> Aby posiadać system operacyjny **Windows** działający na serwerze VPS, należy **wybrać w procesie zamówienia**. Na serwerze VPS z innym zainstalowanym systemem operacyjnym nie można zainstalować systemu Windows w sposób opisany powyżej.
>

Reinstalacja może zająć kilka minut.

### Restart serwera VPS <a name="reboot-current-range"></a>

Ponowne uruchomienie może być konieczne w celu zastosowania zaktualizowanych konfiguracji lub rozwiązania problemu. Jeśli to możliwe, wykonaj "restart oprogramowania" w graficznym interfejsie serwera (Windows, Plesk, ...) lub za pomocą wiersza poleceń:

```bash
sudo reboot
```

Jednak w każdej chwili możesz wykonać "reboot sprzętowy" w Panelu [klienta OVHcloud](/links/manager). W zakładce `Strona`{.action} główna kliknij `...`{.action} obok `Boot` w sekcji **Twój VPS**. Wybierz `Restart serwera VPS`{.action} i w oknie, które się wyświetli kliknij `Zatwierdź`{.action}.

![Reboot](images/reboot-vps01.png){.thumbnail}

<a name="connect"></a>

### Logowanie do serwera VPS

> [!warning]
>
> Ze względów bezpieczeństwa podczas pierwszego logowania do serwera VPS należy zmienić hasło otrzymane na e-mail, aby zastąpić je nowym, silnym hasłem. Po wprowadzeniu modyfikacji interfejs, którego używasz (np. Putty) może zostać automatycznie zamknięty w celu wylogowania. Następnie zaloguj się ponownie przy użyciu nowego hasła.
>

Przy pierwszej instalacji lub podczas reinstalacji z Panelu sterowania automatycznie tworzony jest użytkownik z podwyższonym poziomem uprawnień. Ten użytkownik będzie nazwany w zależności od systemu operacyjnego, na przykład "ubuntu" lub "rocky".

Otrzymasz wówczas e-mail z nazwą użytkownika i hasłem niezbędnymi do zalogowania się do Twojego serwera VPS przez SSH. SSH to bezpieczny protokół komunikacyjny używany do ustanawiania szyfrowanych połączeń ze zdalnym hostem.

Większość obecnych stacjonarnych systemów operacyjnych będzie miała natywnie zainstalowanego klienta **Open SSH**. Oznacza to, że dane dostępowe umożliwiają szybkie nawiązanie połączenia z Twoim serwerem VPS w odpowiedniej aplikacji wiersza polecenia (`Terminal`, `Command prompt`, `Powershell`, etc.). Wprowadź następujące polecenie:

```bash
ssh username@IPv4_VPS
```

Przykład:

```bash
ssh ubuntu@203.0.113.101
```

Możesz również korzystać z dowolnej aplikacji innej firmy, która jest kompatybilna z **Open SSH**.

<a name="linuxconnect"></a>

#### Dystrybucja GNU/Linux

Po zalogowaniu się możesz zmienić predefiniowane hasło bieżącego użytkownika na silne hasło, używając tego polecenia:

```bash
passwd
```

W dystrybucji GNU/Linux **wiersz poleceń nie będzie wyświetlał wpisów klawiaturowych**.

Wpisz aktualne hasło i naciśnij przycisk `Enter`{.action}. Wprowadź nowe hasło i wpisz je ponownie w następnym monicie, aby je potwierdzić.

```console
Changing password for ubuntu.
Current password:
New password: 
Retype new password: 
passwd: password updated successfully
```

> [!warning]
> 
> **Aktywacja konta użytkownika root**
>
> Nie musisz używać konta użytkownika "root", aby rozpocząć administrowanie serwerem. Aby można było używać tego konta, należy je najpierw włączyć w systemie operacyjnym serwera. Ponadto, ze względów bezpieczeństwa, połączenia SSH z użytkownikiem "root" są domyślnie **wyłączone**.
> 
O ile nie określono inaczej, wszystkie operacje administracyjne opisane w dokumentacji mogą być przeprowadzane przy użyciu domyślnego konta użytkownika, tzn. poprzez wpisanie `sudo` po odpowiednim poleceniu. Więcej informacji na ten temat znajdziesz w przewodniku [Konfiguracja kont użytkowników i dostępu root na serwerze](/pages/bare_metal_cloud/dedicated_servers/changing_root_password_linux_ds).
>

**Wykonaj następujące czynności**:

- Zapoznanie się z połączeniami SSH w przewodniku [Wprowadzenie do SSH](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction).
- Rozważ użycie kluczy SSH jako zaawansowanej i wygodnej metody zdalnego połączenia za pomocą naszego przewodnika [Tworzenie i używanie kluczy SSH](/pages/bare_metal_cloud/dedicated_servers/creating-ssh-keys-dedicated).
- Zapoznaj się z przewodnikiem [Zabezpiecz serwer VPS](/pages/bare_metal_cloud/virtual_private_servers/secure_your_vps), aby chronić Twój system przed automatycznymi atakami typu *brute force* i innymi typowymi zagrożeniami.

> [!primary]
>
Należy pamiętać, że w przypadku wyboru **dystrybucji z aplikacją** (Plesk, cPanel, Docker) ogólne środki bezpieczeństwa mogą nie mieć zastosowania do Twojego systemu. Zapoznaj się z przewodnikami Pierwsze [kroki z wstępnie zainstalowanymi](/pages/bare_metal_cloud/virtual_private_servers/apps_first_steps) aplikacjami i [wdrażaj cPanel na serwerze VPS](/pages/bare_metal_cloud/virtual_private_servers/cpanel), a także z oficjalną dokumentacją producenta.
>

<a name="winconnect"></a>

#### VPS Windows

#### Krok 1: zakończenie instalacji systemu Windows

Po zainstalowaniu systemu operacyjnego Windows otrzymasz wiadomość e-mail z nazwą domyślnego konta użytkownika `Windows user`.

Następnie zakończ proces instalacji systemu Windows, ustawiając język wyświetlania, układ klawiatury i hasło administratora.

Odbywa się to w konsoli VPS KVM: kliknij przycisk `...`{.action} obok nazwy serwera VPS w sekcji [Twój VPS](#yourvps) i wybierz `KVM`{.action}. Więcej informacji na temat tego narzędzia znajdziesz w naszym [przewodniku KVM](/pages/bare_metal_cloud/virtual_private_servers/using_kvm_for_vps).

Aby dokończyć wstępną konfigurację serwera VPS Windows, wykonaj poniższe kroki w zakładkach:

> [!tabs]
> 1. **Ustawienia regionalne**
>>
>> Po ustanowieniu sesji KVM możesz zakończyć wstępną konfigurację systemu Windows, konfigurując **kraj/region**, **preferowany język Windows** i **układ klawiatury**. Następnie kliknij przycisk `Dalej`{.action} na dole po prawej stronie.<br><br>
>>![KVM](/pages/assets/screens/other/windows/windows_locale.png){.thumbnail}<br>
>>
> 2. **Hasło administratora**
>>
>> Ustaw hasło dla konta Windows `Administrator` / `admin` i potwierdź je, następnie kliknij `Zakończ`{.action}.<br><br>
>>![KVM](/pages/assets/screens/other/windows/windows_admin.png){.thumbnail}<br>
>>
> 3. **Ekran logowania**
>>
>> System Windows zastosuje ustawienia i wyświetli ekran logowania. Kliknij przycisk `Send CtrlAltDel`{.action} w prawym górnym rogu, aby się zalogować.<br><br>
>>![KVM](/pages/assets/screens/other/windows/windows_vnc.png){.thumbnail}<br>
>>
> 4. **Login administratora**
>>
>> Wprowadź hasło `Administrator`, które utworzyłeś na poprzednim etapie i kliknij przycisk `strzałka`.<br><br>
>>![KVM](/pages/assets/screens/other/windows/windows_login.png){.thumbnail}<br>
>>

#### Etap 2: łączenie się z serwerem za pomocą protokołu RDP

Na lokalnym sprzęcie z systemem Windows możesz połączyć się z serwerem VPS za pomocą aplikacji klienckiej `Remote Desktop Connection`.

![Windows remote](/pages/assets/screens/other/windows/windows_rdp.png){.thumbnail}

Wprowadź adres IPv4 Twojego serwera VPS, następnie identyfikator i hasło. Zazwyczaj pojawia się komunikat ostrzegawczy z prośbą o potwierdzenie logowania z powodu nieznanego certyfikatu. Kliknij na `Tak`{.action}, aby się zalogować.

Możesz również użyć innej aplikacji innej firmy kompatybilnej z RDP. Jest to wymagane, jeśli system Windows nie jest zainstalowany na urządzeniu lokalnym.

> [!primary]
>
W przypadku wystąpienia problemów z tą procedurą sprawdź, czy na urządzeniu są dozwolone połączenia zdalne (RDP), sprawdzając ustawienia systemu, reguły zapory i możliwe ograniczenia sieciowe.
>

#### Aktywacja dzienników rozruchu systemu Windows (opcjonalnie)

Dzienniki rozruchowe systemu Windows mogą być przydatne w diagnostyce błędów serwera.

Aby je włączyć, na kartach wykonaj następujące kroki:

> [!tabs]
> 1. **Logowanie do serwera**
>>
>> Połącz się z serwerem za pomocą zdalnego pulpitu lub sesji [KVM](/pages/bare_metal_cloud/virtual_private_servers/using_kvm_for_vps).<br>
>>
> 2. **Otwórz narzędzie "Uruchom"**
>>
>> Otwórz menu Start systemu Windows i kliknij polecenie `Uruchom`{.action}.<br><br>
>>![KVM](/pages/assets/screens/other/windows/windows_start_run.png){.thumbnail}<br>
>>
> 3. **Otwórz "msconfig"**
>>
>> Wpisz "msconfig" i kliknij na `OK`{.action}.<br><br>
>>![KVM](/pages/assets/screens/other/windows/windows_msconfig.png){.thumbnail}<br>
>>
> 4. **Włącz logi**
>>
>> W nowym oknie włącz opcję logi obok `Boot log`. Kliknij przycisk `OK`{.action}.<br><br>
>>![KVM](/pages/assets/screens/other/windows/windows_log.png){.thumbnail}<br>
>>

Po kolejnym uruchomieniu Twojego serwera logi będą zapisywane w pliku .txt. Droga do pliku to `C:\Windows\ntbtlog.txt`.

Aby uzyskać dostęp do pliku dziennika w trybie ratunkowym, należy postępować zgodnie z instrukcjami zawartymi w przewodniku [tryb ratunkowy serwera VPS](/pages/bare_metal_cloud/virtual_private_servers/rescue).

<a name="secure"></a>

### Zabezpiecz Twój serwer VPS

Jako administrator serwera VPS jesteś odpowiedzialny za bezpieczeństwo przechowywanych na nim aplikacji i danych.

Zapoznaj się z naszym przewodnikiem [Zabezpieczanie VPS](/pages/bare_metal_cloud/virtual_private_servers/secure_your_vps), aby uzyskać ważne wskazówki dotyczące ochrony systemu.

> [!primary]
>
Należy pamiętać, że w przypadku wyboru **dystrybucji z aplikacją** (Plesk, cPanel, Docker) ogólne środki bezpieczeństwa mogą nie mieć zastosowania do Twojego systemu. Zapoznaj się z przewodnikami Pierwsze [kroki z wstępnie zainstalowanymi](/pages/bare_metal_cloud/virtual_private_servers/apps_first_steps) aplikacjami i [wdrażaj cPanel na serwerze VPS](/pages/bare_metal_cloud/virtual_private_servers/cpanel), a także z oficjalną dokumentacją producenta.
>

<a name="domain"></a>

### Przypisz domenę

Aktywacja Twojego serwera VPS w Internecie zwykle polega na przypisaniu domeny i skonfigurowaniu DNS. Jeśli zarządzasz domeną w OVHcloud, zapoznaj się z naszym przewodnikiem [Edycja strefy DNS](/pages/web_cloud/domains/dns_zone_edit) OVHcloud, aby uzyskać instrukcje.

#### Zabezpieczenie domeny za pomocą certyfikatu SSL

Po skonfigurowaniu Twojego serwera VPS, masz możliwość zabezpieczenia nazwy Twojej domeny oraz Twojej strony WWW. W tym celu potrzebujesz certyfikatu SSL, który umożliwi dostęp do Internetu Twojego serwera VPS za pośrednictwem protokołu *HTTPS* zamiast *niezabezpieczonego HTTP*.

Certyfikat SSL można zainstalować ręcznie, bezpośrednio na serwerze VPS. Zapoznaj się z oficjalną dokumentacją dotyczącą Twojej dystrybucji VPS.

W przypadku bardziej zautomatyzowanego procesu OVHcloud oferuje również rozwiązanie SSL Gateway. Więcej informacji znajdziesz na [stronie produktu](https://www.ovh.pl/ssl-gateway/) lub w [przewodniku](/links/web/ssl-gateway) OVHcloud.

## Sprawdź również

[VPS FAQ](/pages/bare_metal_cloud/virtual_private_servers/vps-faq)

[Wprowadzenie do protokołów SSH](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction)

[Zabezpieczenie serwera VPS](/pages/bare_metal_cloud/virtual_private_servers/secure_your_vps)

Dołącz do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.
