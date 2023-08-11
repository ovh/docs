---
title: 'Korzystanie z migawek na prywatnym serwerze wirtualnym'
excerpt: 'Dowiedz się, jak włączyć opcję migawki w Panelu klienta OVHcloud i korzystać z niej'
updated: 2023-04-28
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk "Zgłóś propozycję modyfikacji" na tej stronie.
>


## Wprowadzenie

Utworzenie migawki jest szybkim i prostym sposobem na zabezpieczenie działania systemu przed wprowadzeniem zmian, które mogą mieć niepożądane lub nieprzewidziane konsekwencje, na przykład podczas testowania nowej konfiguracji albo oprogramowania. Nie stanowi to jednak pełnej strategii tworzenia kopii zapasowych systemu.

**Dowiedz się, jak korzystać z migawek na prywatnym serwerze wirtualnym (VPS) OVHcloud.**

> [!primary]
>
Przed zastosowaniem opcji tworzenia kopii zapasowych zalecamy przejrzenie [stron produktów oraz często zadawanych pytań (FAQ)](https://www.ovhcloud.com/pl/vps/options/) w celu porównania cen i uzyskania szczegółowych informacji.
>

## Wymagania początkowe

- dostęp do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl)
- skonfigurowana [usługa VPS](https://www.ovhcloud.com/pl/vps/) OVHcloud


## W praktyce

Zaloguj się do [Panelu client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl), przejdź do sekcji `Bare Metal Cloud`{.action} i wybierz Twój serwer w części `Prywatny serwer wirtualny`{.action}.

### Krok 1: subskrybowanie opcji kopii zapasowej

Na karcie `Strona główna`{.action} przewiń do obszaru z nagłówkiem “Podsumowanie opcji”. Kliknij ikonę `...`{.action} obok opcji “Migawka” i wybierz z menu kontekstowego pozycję `Zamówienie`{.action}.

![snapshotvps](images/snapshot_vps_step1b.png){.thumbnail}

W następnym kroku przeczytaj informację o cenie i kliknij pozycję `Zamów`{.action}. Po przejściu kolejnych kroków procesu zamówienia otrzymasz e-mail z potwierdzeniem.

### Krok 2: tworzenie migawki

Po włączeniu opcji kliknij ikonę `...`{.action} obok opcji “Migawka” i wybierz z menu kontekstowego pozycję `Utwórz migawkę`{.action}. Czas tworzenia snapshota zależy od użytej przestrzeni dyskowej. Po utworzeniu migawki w obszarze “Podsumowanie opcji” pojawi się jej znacznik czasu.

### Krok 3: usuwanie / przywracanie migawki

Ponieważ jednocześnie może być aktywna tylko jedna migawka, przed utworzeniem nowej migawki trzeba usunąć istniejącą. W tym celu po prostu wybierz z menu kontekstowego pozycję `Usuń migawkę`{.action}.

![snapshotvps](images/snapshot_vps_step2.png){.thumbnail}

Jeśli na pewno chcesz zresetować status prywatnego serwera wirtualnego do stanu z migawki, kliknij pozycję `Przywróć migawkę`{.action} i potwierdź zadanie przywracania w wyświetlonym oknie.

> [!alert]
>
> Pamiętaj, że przywrócenie systemu ze snapshota spowoduje usunięcie samego shapshota. Jeśli chcesz zachować tę samą migawkę, musisz wykonać nową przed wprowadzeniem zmian w przywróconym systemie.
>

### Pobierz snapshot

Trwa zapisywanie snapshota można pobrać za pomocą linka do pobrania. Kliknij przycisk `...`{.action} obok opcji `Snapshot` i wybierz opcję `Pobierz Snapshot`{.action} z menu kontekstowego.

![snapshotvps](images/snapshot_vps03.png){.thumbnail}

> [!primary]
>
> Jeśli Twój VPS pochodzi ze starej gamy, możliwe, że otrzymasz komunikat o błędzie, ponieważ opcja nie jest dostępna na starych serwerach VPS. Twój VPS pochodzi z poprzedniej gamy serwerów, jeśli jego model nazewnictwa jest podobny do: *vpsXXXX.ovh.net* (gdzie *X* oznacza liczbę). Możesz sprawdzić ten adres IP serwera w zakładce `Strona główna`{.action} w [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl).
>

W oknie, które się wyświetli kliknij `Wygeneruj link do pobrania`{.action}.

![snapshotvps](images/snapshot_vps04.png){.thumbnail}

Po kilku sekundach pojawi się komunikat o sukcesie. Poniżej możesz skopiować pełne polecenie pobrania za pomocą jednego kliknięcia.

![snapshotvps](images/snapshot_vps05.png){.thumbnail}

Zostanie również wyświetlony rozmiar snapshota oraz data wygaśnięcia linku.

Link do pobrania wygaśnie po **24 godzinach**.

W poleceniu do pobrania stosuje się `curl` w następującym formacie:

```bash
curl "https://storage.sbg.cloud.ovh.net/v1/AUTH_f5fgh4674dd706f15f6ffgf4z667d3f4g5f05/glance/5ceg3f93-8b49-436b-aefe-4185f9fc3f78?
temp_url_sig=f508cacda60256d5f211ddddf3f81130e935f0e4&temp_url_expires=1678247579" --output vps-x11x11xyy.vps.ovh.net --fail
```

Polecenie to musi działać z dowolnego terminala wiersza poleceń. Jednakże, podczas korzystania z systemu Windows *PowerShell*, należy dostosować komendę w następujący sposób:

```powershell
curl -Uri "https://storage.sbg.cloud.ovh.net/v1/AUTH_f5fgh4674dd706f15f6ffgf4z667d3f4g5f05/glance/5ceg3f93-8b49-436b-aefe-4185f9fc3f78?
temp_url_sig=f508cacda60256d5f211ddddf3f81130e935f0e4&temp_url_expires=1678247579" -OutFile vps-x11x11xyy.vps.ovh.net
```

![snapshotvps](images/snapshot_vps06.png){.thumbnail}

> [!primary]
>
> Aby uniknąć utraty zbyt dużej ilości przestrzeni dyskowej, zalecamy usunięcie kopii zapasowych snapshot bezpośrednio z serwera VPS.
>


### Dobre praktyki dotyczące tworzenia migawek

#### Konfiguracja agenta QEMU na serwerze VPS

Migawki to kopie systemu tworzone w ściśle określonym momencie (“live snapshots”). Aby zapewnić dostępność systemu podczas tworzenia migawki, wykorzystywany jest agent QEMU, który pozwala przygotować system plików do tego procesu.

W większości dystrybucji wymagany *qemu-guest-agent* nie jest zainstalowany domyślnie. Ponadto, wymogi licencyjne mogą uniemożliwić OVHcloud włączenie go do dostępnych obrazów systemu operacyjnego. Dlatego zalecamy zainstalowanie agenta, jeśli nie jest on aktywowany na Twoim prywatnym serwerze wirtualnym. W tym celu połącz się z VPS przez SSH i postępuj zgodnie z poleceniami dotyczącymi Twojego systemu operacyjnego.

##### **Distributions Debian (Debian, Ubuntu)**

Wprowadź poniższą komendę, aby sprawdzić, czy system został poprawnie skonfigurowany pod kątem tworzenie migawek:

```bash
$ file /dev/virtio-ports/org.qemu.guest_agent.0
/dev/virtio-ports/org.qemu.guest_agent.0: symbolic link to ../vport2p1
```

Jeśli wynik jest inny (“No such file or directory”), zainstaluj najnowszy pakiet:

```bash
$ sudo apt-get update
$ sudo apt-get install qemu-guest-agent
```

Uruchom usługę, aby upewnić się, że działa:

```bash
$ sudo service qemu-guest-agent start
```

##### **Distributions Redhat (CentOS, Fedora)**

Wprowadź poniższą komendę, aby sprawdzić, czy system został poprawnie skonfigurowany pod kątem tworzenie migawek:

```bash
$ file /dev/virtio-ports/org.qemu.guest_agent.0
/dev/virtio-ports/org.qemu.guest_agent.0: symbolic link to ../vport2p1
```

Jeśli wynik jest inny (“No such file or directory”), zainstaluj i aktywuj agenta:

```bash
$ sudo yum install qemu-guest-agent
$ sudo chkconfig qemu-guest-agent on
```

Uruchom agenta i sprawdź, czy działa:

```bash
$ sudo service qemu-guest-agent start
$ sudo service qemu-guest-agent status
```

##### **Windows**

Możesz zainstalować agenta, korzystając z pliku MSI, dostępnego na stronie projektu Fedora <https://fedorapeople.org/groups/virt/virtio-win/direct-downloads/latest-qemu-ga/>.

Sprawdź, czy usługa działa za pomocą poniższej komendy *PowerShell*:

```powershell
PS C:\Users\Administrator> Get-Service QEMU-GA

Status   Name               DisplayName
------   ----               -----------
Running  QEMU-GA            QEMU Guest Agent
```


## Sprawdź również

[Korzystanie z automatycznych kopii zapasowych na prywatnym serwerze wirtualnym](/pages/bare_metal_cloud/virtual_private_servers/using-automated-backups-on-a-vps)


Dołącz do naszej społeczności użytkowników: <https://community.ovh.com/en/>.
