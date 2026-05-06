---
title: 'Instalacja agenta Prometheus na instancji Public Cloud'
excerpt: 'Dowiedz się, jak zainstalować Prometheus Node Exporter lub Windows Exporter na instancji OVHcloud Public Cloud, aby zbierać metryki'
updated: 2026-01-28
---

## Wprowadzenie

Prometheus to system monitorowania i baza danych szeregów czasowych. Możesz zainstalować i używać jego agenta na instancjach OVHcloud Public Cloud, aby zbierać metryki z Twoich serwerów i aplikacji.

**Dowiedz się, jak zainstalować Prometheus Node Exporter lub Windows Exporter na instancji OVHcloud Public Cloud.**

> [!warning]
> 
> OVHcloud oferuje usługi, za które odpowiadasz samodzielnie. Faktycznie, ponieważ nie mamy dostępu administracyjnego do tych maszyn, nie jesteśmy administratorami i nie możemy udzielić wsparcia. Oznacza to, że Ty odpowiadasz za zarządzanie oprogramowaniem i bezpieczeństwem na co dzień.
>
> Udostępniliśmy Ci ten przewodnik, aby pomóc Ci w wykonywaniu typowych zadań. Jednak zalecamy kontakt z [specjalistycznym dostawcą](/links/partner), jeśli doświadczysz jakichkolwiek trudności lub wątpliwości dotyczących administracji, użycia lub bezpieczeństwa serwera. Zapraszamy również do odwiedzenia naszego [forum społecznościowego](/links/community), aby porozmawiać z innymi użytkownikami.
>

## Wymagania początkowe

- [Instancja utworzona za pomocą Panelu klienta OVHcloud](/pages/public_cloud/public_cloud_cross_functional/create_a_public_cloud_project).
- [Dostęp administracyjny do instancji](/pages/public_cloud/compute/public-cloud-first-steps).
- Uruchomiony serwer Prometheus, który jest dostępny z instancji.

## W praktyce

Postępuj zgodnie z poniższymi krokami, aby zainstalować agenta Prometheus Node Exporter lub Windows Exporter na Twojej instancji OVHcloud Public Cloud i zbierać metryki.

### Krok 1: Połączenie z instancją

Połącz się z instancją za pomocą SSH:

```bash
ssh root@<INSTANCE_IP>
```

Zastąp `<INSTANCE_IP>` publicznym adresem IP Twojej instancji.

> [!primary]
>
> Na Windowsie użyj PowerShell z SSH lub klienta SSH, takiego jak [PuTTY](/pages/web_cloud/web_hosting/ssh_using_putty_on_windows), jeśli preferujesz interfejs wiersza poleceń.
>
> Dla Windows Server z GUI możesz również użyć RDP (Remote Desktop).
>

### Krok 2: Aktualizacja systemu

Upewnij się, że pakiety systemowe są aktualne:

> [!tabs]
> Dla Debian/Ubuntu
>>
>> ```bash
>> sudo apt update && sudo apt upgrade -y
>> ```
>>
> Dla CentOS/RHEL
>>
>> ```bash
>> sudo yum update -y
>> ```
>>
> Dla Windows
>>
>> Nie jest wymagana specjalna aktualizacja systemu dla Windows Exporter. Opcjonalnie upewnij się, że system jest aktualny za pomocą Windows Update.
>>

### Krok 3: Tworzenie użytkownika Prometheus (opcjonalnie)

Tworzenie dedykowanego użytkownika dla Node Exporter poprawia bezpieczeństwo na systemach Linux, ale jest opcjonalne dla Windows Exporter na Windows.

> [!tabs]
> Dla Linux
>>
>> ```bash
>> sudo useradd --no-create-home --shell /bin/false prometheus
>> ```
>>
>> - Tworzy użytkownika z ograniczonymi uprawnieniami do uruchamiania Node Exporter.
>> - Zalecane w środowisku produkcyjnym, aby zminimalizować ryzyko bezpieczeństwa.
>> - Możesz następnie uruchomić Node Exporter pod tym użytkownikiem za pomocą systemd.
>>
> Dla Windows
>>
>> > [!primary]
>> >
>> > **Uwaga**: Uruchom te polecenia PowerShell wewnątrz maszyny wirtualnej za pomocą SSH.
>> >
>>
>> ```powershell
>> New-LocalUser "prometheus" -NoPassword -Description "User for Node Exporter"
>>
>> Add-LocalGroupMember -Group "Users" -Member "prometheus"
>> ```
>>
>> **Uwaga**: Windows Exporter może działać pod bieżącym użytkownikiem. Tworzenie dedykowanego użytkownika jest opcjonalne, aby uzyskać ścisłą kontrolę dostępu.
>>

### Krok 4: Pobieranie Node Exporter / Windows Exporter

> [!tabs]
> Dla Linux
>>
>> ```bash
>> # Zastąp VERSION najnowszą wersją, np. 1.10.2
>> VERSION="1.10.2"
>> wget https://github.com/prometheus/node_exporter/releases/download/v$VERSION/node_exporter-$VERSION.linux-amd64.tar.gz
>> tar xvf node_exporter-$VERSION.linux-amd64.tar.gz
>> cd node_exporter-$VERSION.linux-amd64
>> ```
>>
> Dla Windows (za pomocą SSH/PowerShell na maszynie wirtualnej)
>>
>> > [!primary]
>> >
>> > `Invoke-WebRequest` wymaga PowerShell 3.0 lub nowszego.
>> >
>>
>> ```powershell
>> mkdir C:\windows_exporter
>> cd C:\windows_exporter
>>
>> Invoke-WebRequest -Uri "https://github.com/prometheus-community/windows_exporter/releases/download/v0.31.3/windows_exporter-0.31.3-amd64.msi" -OutFile "windows_exporter.msi"
>> ```
>>
>> Wszystko jest wykonywane bezpośrednio wewnątrz maszyny wirtualnej, nie ma potrzeby przenoszenia plików z Twojego komputera.
>>

### Krok 5: Uruchamianie Node Exporter / Windows Exporter

> [!tabs]
> Dla Linux
>>
>> ```bash
>> ./node_exporter
>> ```
>>
>> - **Opcjonalnie**: skonfiguruj usługę systemd, aby Node Exporter działał automatycznie.
>> - Jeśli używasz dedykowanego użytkownika prometheus, upewnij się, że usługa działa pod tym kontem.
>>
> Dla Windows (za pomocą SSH/PowerShell)
>>
>> ```powershell
>> msiexec /i windows_exporter.msi ENABLED_COLLECTORS=cpu,cs,logical_disk,net,os,service,system,textfile /qn
>> ```
>>
>> - Na Desktop lub Core możesz uruchomić go bezpośrednio w PowerShell lub skonfigurować go jako usługę Windows.
>>
>> Możesz dostosować kolekcjonery; zobacz [oficjalną dokumentację](https://github.com/prometheus-community/windows_exporter#collectors) dla pełnej listy.
>>

### Krok 6: Weryfikacja Node Exporter / Windows Exporter

> [!primary]
>
> Node Exporter domyślnie nasłuchuje na porcie 9100.
>
> Windows Exporter domyślnie nasłuchuje na porcie 9182.
>
> Zastąp <PORT> numerem 9100 dla systemu Linux lub 9182 dla Windows.
>

Poniższe polecenie pozwala monitorować metryki takie jak CPU, pamięć, dysk i użycie sieci:

```bash
curl http://<INSTANCE_IP>:<PORT>/metrics
```

> [!primary]
>
> Na Windows Desktop możesz również otworzyć przeglądarkę, aby sprawdzić. Jednak za pomocą SSH/PowerShell użyj `curl` lub `Invoke-WebRequest`.
>

### Krok 7: Reguły zapory / bezpieczeństwa (OVHcloud)

Upewnij się, że port używany przez eksportera jest otwarty zarówno w zaporze maszyny wirtualnej, jak i w Twojej grupie bezpieczeństwa OVHcloud.

Ogranicz dostęp tylko do swojego serwera Prometheus, aby zapewnić bezpieczeństwo.

> [!tabs]
> Dla Linux (Debian/Ubuntu z UFW)
>>
>> ```bash
>> sudo ufw allow 9100/tcp
>> sudo ufw status
>> ```
>>
>> **Uwaga**: Jeśli UFW pokazuje **Status: inactive**, oznacza to, że zapora nie jest włączona na maszynie wirtualnej. Reguła portu jest dodana, ale nie jest stosowana.
>>
>> Bezpieczeństwo głównie jest obsługiwane przez Twoją grupę bezpieczeństwa OVHcloud.
>>
>> Jeśli chcesz, aby UFW był aktywny, najpierw zezwól na SSH, aby uniknąć zablokowania dostępu:
>>
>> ```bash
>> sudo ufw allow ssh
>> sudo ufw enable
>> sudo ufw status
>> ```
>>
> Dla Windows
>>
>> Otwórz port 9182 w Windows Firewall:
>>
>> ```powershell
>> netsh advfirewall firewall add rule name="Windows Exporter" dir=in action=allow protocol=TCP localport=9182
>> ```
>>
>> Możesz również sprawdzić reguły za pomocą:
>>
>> ```powershell
>> netsh advfirewall firewall show rule name=all | findstr "9182"
>> ```
>>

### Krok 8: Połączenie Node Exporter / Windows Exporter z Prometheus

1\. Edytuj konfigurację Prometheus na swoim serwerze Prometheus (prometheus.yml):

```yaml
scrape_configs:
  - job_name: 'node_exporter' # lub 'windows_exporter'
    static_configs:
      - targets: ['<INSTANCE_IP>:9100'] # lub 9182 dla Windows Exporter
```

2\. Załaduj ponownie Prometheus:

> [!tabs]
> Dla Linux
>>
>> ```bash
>> sudo systemctl reload prometheus
>> ```
>>
> Dla Windows
>>
>> ```powershell
>> sc stop prometheus
>> sc start prometheus
>> ```
>>

3\. Metryki Node Exporter / Windows Exporter z Twojej instancji OVHcloud powinny teraz być widoczne w Prometheus.

## Sprawdź również

[Dokumentacja oficjalna Node Exporter](https://github.com/prometheus/node_exporter)

[Tworzenie i konfigurowanie grupy bezpieczeństwa w Horizon](/pages/public_cloud/compute/setup_security_group)

Dołącz do [grona naszych użytkowników](/links/community).