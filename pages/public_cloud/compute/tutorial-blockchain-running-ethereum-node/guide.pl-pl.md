---
title: 'Uruchomienie węzła Ethereum na instancji Public Cloud'
excerpt: 'Wdrożenie pełnego węzła Ethereum z Nethermind (EL) i Lighthouse (CL) na instancji OVHcloud Public Cloud z wykorzystaniem block storage do przechowywania danych łańcucha bloków'
updated: 2026-03-12
---

## Wprowadzenie

Ethereum jest jedną z najszerzej wykorzystywanych sieci blockchain, obsługującą inteligentne kontrakty dla zdecentralizowanych finansów (DeFi) oraz ekosystemów NFT. Prowadzenie własnego węzła Ethereum pozwala na bezpośrednią interakcję z siecią bez polegania na usługach podmiotów trzecich.

W pełni funkcjonalny węzeł Ethereum wymaga dwóch kluczowych komponentów oprogramowania działających w koordynacji:

1. **Klient warstwy wykonawczej (EL)** — odpowiedzialny za przetwarzanie transakcji i utrzymanie stanu Ethereum.
2. **Klient warstwy konsensusu (CL)** — odpowiedzialny za osiąganie konsensusu z resztą sieci poprzez protokół proof-of-stake Ethereum.

Te dwa komponenty muszą działać równolegle i komunikować się w bezpieczny sposób, aby utrzymać synchronizację z siecią główną Ethereum (mainnet).

Ekosystem Ethereum obsługuje wiele implementacji klientów, z których każda jest rozwijana niezależnie, ale zgodnie ze specyfikacją Ethereum. Najczęściej używane opcje to:

**Klienty warstwy wykonawczej (EL):**

- Geth
- Nethermind
- Reth
- Besu
- Erigon

**Klienty warstwy konsensusu (CL):**

- Lighthouse
- Prysm
- Teku
- Nimbus
- Lodestar

W tym tutorialu użyjemy następującej kombinacji:

- **Klient warstwy wykonawczej**: Nethermind
- **Klient warstwy konsensusu**: Lighthouse

**Ten tutorial przeprowadzi Cię przez proces wdrażania w pełni funkcjonalnego węzła Ethereum na instancji OVHcloud Public Cloud.**

> [!warning]
>
> Zabezpieczanie systemu oraz najlepsze praktyki operacyjne wymagane do pełnej ochrony węzła Ethereum wykraczają poza zakres tego tutorialu. Zdecydowanie zaleca się wdrożenie dodatkowych środków bezpieczeństwa — takich jak konfiguracja zapory sieciowej, zarządzanie kluczami i monitoring — zgodnie z wymaganiami Twojej organizacji i najlepszymi praktykami branżowymi.
>

## Wymagania początkowe

- [Projekt Public Cloud](/pages/public_cloud/compute/create_a_public_cloud_project) na Twoim koncie OVHcloud
- [Instancja Public Cloud](/pages/public_cloud/compute/public-cloud-first-steps) z co najmniej 2 rdzeniami vCPU i 30 GB pamięci RAM (np. R2-30), z systemem **Ubuntu 24.04 LTS**
- [Wolumen Block Storage](/pages/public_cloud/compute/create_and_configure_an_additional_disk_on_an_instance) o pojemności co najmniej 2 TB, typu **High-Speed Gen2**, podłączony do Twojej instancji
- Dostęp administracyjny (sudo) do instancji przez SSH

> [!primary]
>
> Zgodnie z dokumentacją Ethereum Foundation węzeł Ethereum wymaga co najmniej:
>
> - **Klient warstwy wykonawczej**: 2 rdzenie CPU, 16 GB pamięci RAM i 1 TB szybkiej pamięci masowej SSD
> - **Klient warstwy konsensusu**: 2 rdzenie CPU, 8 GB pamięci RAM i dostęp do tej samej pamięci masowej
>
> W środowiskach produkcyjnych i w celu zapewnienia długoterminowej stabilności zdecydowanie zaleca się wyższe parametry.
>

## W praktyce

### Krok 1 — Zamontowanie wolumenu Block Storage

Po [utworzeniu i podłączeniu wolumenu Block Storage](/pages/public_cloud/compute/create_and_configure_an_additional_disk_on_an_instance) do instancji połącz się z instancją przez SSH:

```bash
ssh -i <ścieżka-do-klucza-prywatnego> ubuntu@<adres_IP>
```

Wyświetl listę wszystkich dostępnych urządzeń blokowych, aby zidentyfikować podłączony wolumen:

```bash
lsblk
```

![Wyjście polecenia lsblk pokazujące podłączony wolumen](images/lsblk_output.png){.thumbnail}

Polecenie wyświetla widok drzewa wszystkich urządzeń pamięci masowej. Zidentyfikuj urządzenie (np. `/dev/sdb`), które odpowiada Twojemu wolumenowi o pojemności 2 TB. Zostanie ono sformatowane i zamontowane w celu przechowywania danych łańcucha bloków Ethereum.

Utwórz partycję na nowo podłączonym wolumenie. Zastąp `/dev/sdb` nazwą urządzenia zidentyfikowanego w poprzednim kroku, jeśli jest inna:

```bash
sudo fdisk /dev/sdb
```

![Partycjonowanie za pomocą fdisk](images/fdisk_partition.png){.thumbnail}

Polecenie otwiera narzędzie do partycjonowania dla wybranego urządzenia blokowego. Utwórz nową partycję podstawową obejmującą cały dysk, a następnie zapisz zmiany. Po zakończeniu partycja będzie zwykle dostępna jako `/dev/sdb1`.

Sformatuj nową partycję za pomocą systemu plików ext4, który jest stabilnym i szeroko obsługiwanym wyborem do przechowywania danych łańcucha bloków Ethereum:

```bash
sudo mkfs.ext4 /dev/sdb1
```

![Formatowanie ext4](images/mkfs_ext4.png){.thumbnail}

Utwórz dedykowany katalog jako punkt montowania sformatowanego wolumenu, a następnie zamontuj go i sprawdź, czy został pomyślnie podłączony do systemu plików:

```bash
sudo mkdir -p /mnt/chaindata
sudo mount /dev/sdb1 /mnt/chaindata
df -h
```

- `mkdir -p /mnt/chaindata` tworzy katalog montowania (opcja `-p` zapobiega błędowi w przypadku braku katalogów pośrednich).
- `mount /dev/sdb1 /mnt/chaindata` montuje sformatowaną partycję w katalogu.
- `df -h` wyświetla wszystkie zamontowane systemy plików w czytelnym formacie, pozwalając potwierdzić, że `/dev/sdb1` jest prawidłowo zamontowany w `/mnt/chaindata` z oczekiwaną pojemnością (około 2 TB).

![Weryfikacja montowania](images/mount_verify.png){.thumbnail}

Dysk jest teraz zamontowany, ale konfiguracja **nie jest trwała**: po ponownym uruchomieniu serwera wolumen będzie wymagał ręcznego zamontowania. Aby zapewnić automatyczne montowanie przy starcie systemu, dodaj wpis do pliku `/etc/fstab`.

Pobierz **UUID (Universally Unique Identifier)** wolumenu:

```bash
sudo blkid
```

![Wyjście polecenia blkid](images/blkid_output.png){.thumbnail}

Polecenie wyświetla listę wszystkich urządzeń blokowych i ich atrybutów. Zidentyfikuj wpis odpowiadający Twojej nowej partycji (np. `/dev/sdb1`) i skopiuj wartość pola `UUID`.

Edytuj plik `/etc/fstab`, aby skonfigurować automatyczne montowanie:

```bash
sudo nano /etc/fstab
```

```text
UUID=<twój-uuid> /mnt/chaindata ext4 nofail 0 0
```

Opcja `nofail` pozwala systemowi kontynuować rozruch nawet w przypadku niedostępności urządzenia.

### Krok 2 — Utworzenie dedykowanego użytkownika

Utwórz **dedykowane konto użytkownika** do zarządzania wszystkimi operacjami węzła Ethereum. Ta praktyka poprawia bezpieczeństwo, oddzielając procesy węzła od domyślnego użytkownika systemowego.

```bash
sudo useradd -s /bin/bash -d /home/node_admin/ -m -G sudo node_admin
```

- `useradd` tworzy nowego użytkownika o nazwie `node_admin` z katalogiem domowym, powłoką bash i przynależnością do grupy `sudo`.

Ustaw hasło dla nowego użytkownika (zastąp silnym hasłem lub skonfiguruj logowanie za pomocą klucza):

```bash
echo 'node_admin:<silne_hasło>' | sudo chpasswd
```

Skonfiguruj **uwierzytelnianie za pomocą kluczy SSH** dla nowego użytkownika, dodając swój publiczny klucz SSH do pliku `authorized_keys`. Zastąp symbol zastępczy swoim rzeczywistym kluczem publicznym:

```bash
sudo mkdir -p /home/node_admin/.ssh
sudo sh -c "echo '<twój-publiczny-klucz-ssh>' > /home/node_admin/.ssh/authorized_keys"
```

Polecenie tworzy plik `authorized_keys` w katalogu `/home/node_admin/.ssh/` i zapisuje w nim Twój klucz publiczny, umożliwiając bezpieczne logowanie bez hasła jako użytkownik `node_admin`.

### Krok 3 — Instalacja Nethermind (klient warstwy wykonawczej)

Nethermind to klient warstwy wykonawczej Ethereum odpowiedzialny za przetwarzanie transakcji i utrzymanie stanu Ethereum.

Dodaj oficjalne repozytorium APT Nethermind:

```bash
sudo apt-get install software-properties-common -y
sudo add-apt-repository ppa:nethermindeth/nethermind
```

![Dodawanie repozytorium Nethermind](images/nethermind_add_repo.png){.thumbnail}

Zaktualizuj indeks pakietów:

```bash
sudo apt-get update
```

![Aktualizacja pakietów](images/nethermind_apt_update.png){.thumbnail}

Zainstaluj Nethermind:

```bash
sudo apt-get install nethermind -y
```

![Instalacja Nethermind](images/nethermind_install.png){.thumbnail}

### Krok 4 — Instalacja Lighthouse (klient warstwy konsensusu)

Lighthouse to klient warstwy konsensusu Ethereum odpowiedzialny za osiąganie konsensusu poprzez protokół proof-of-stake.

Pobierz najnowszą stabilną wersję ze [strony wydań Lighthouse na GitHubie](https://github.com/sigp/lighthouse/releases):

```bash
curl -LO https://github.com/sigp/lighthouse/releases/download/v8.1.3/lighthouse-v8.1.3-x86_64-unknown-linux-gnu.tar.gz
```

![Pobieranie Lighthouse](images/lighthouse_download.png){.thumbnail}

Rozpakuj archiwum:

```bash
tar -xvf lighthouse-v8.1.3-x86_64-unknown-linux-gnu.tar.gz
```

![Rozpakowywanie Lighthouse](images/lighthouse_extract.png){.thumbnail}

Zweryfikuj plik binarny i przenieś go do lokalizacji systemowej:

```bash
./lighthouse --version
sudo cp lighthouse /usr/bin
```

![Wersja Lighthouse](images/lighthouse_version.png){.thumbnail}

### Krok 5 — Utworzenie pliku sekretu JWT

Współdzielony sekret JWT jest wymagany do bezpiecznej komunikacji między klientem warstwy wykonawczej a klientem warstwy konsensusu.

```bash
sudo mkdir -p /secrets
openssl rand -hex 32 | tr -d "\n" | sudo tee /secrets/jwt.hex > /dev/null
```

![Utworzono sekret JWT](images/jwt_secret.png){.thumbnail}

### Krok 6 — Instalacja screen w celu utrzymania sesji

Na serwerze zdalnym rozłączenie sesji SSH powoduje zakończenie uruchomionych procesów. Narzędzie `screen` utrzymuje je w tle niezależnie od Twojej sesji.

```bash
screen --version
```

![Wersja screen](images/screen_version.png){.thumbnail}

Jeśli narzędzie nie jest jeszcze zainstalowane:

```bash
sudo apt-get install screen -y
```

### Krok 7 — Ustawienie własności katalogów

Klienty Ethereum potrzebują uprawnień do zapisu w katalogu danych. Przypisz własność punktu montowania do bieżącego użytkownika:

```bash
sudo chown $USER:$USER /mnt/chaindata
```

Polecenie nadaje Twojemu użytkownikowi pełną własność katalogu `/mnt/chaindata`, dzięki czemu klienty Ethereum mogą odczytywać i zapisywać w nim dane.

### Krok 8 — Uruchomienie Nethermind

Utwórz sesję screen i uruchom Nethermind:

```bash
screen -S nethermind
```

```bash
nethermind -c mainnet \
  --data-dir /mnt/chaindata/nethermind \
  --JsonRpc.Enabled true \
  --HealthChecks.Enabled true \
  --HealthChecks.UIEnabled true \
  --JsonRpc.EngineHost 127.0.0.1 \
  --JsonRpc.EnginePort 8551 \
  --JsonRpc.JwtSecretFile /secrets/jwt.hex
```

W logach powinny pojawić się informacje o działaniu klienta. Ostatecznie wyświetli się następujący komunikat:

```text
Waiting for Forkchoice message from Consensus Layer
```

Oznacza to, że klient warstwy wykonawczej oczekuje na połączenie z klientem warstwy konsensusu.

![Uruchomiony Nethermind](images/nethermind_running.png){.thumbnail}

Odłącz sesję, naciskając `Ctrl+A`, a następnie `D`, aby wrócić do głównej powłoki.

Możesz wyświetlić listę aktywnych sesji za pomocą `screen -ls` i podłączyć się ponownie za pomocą `screen -r nethermind`.

![Sesje screen](images/screen_list.png){.thumbnail}

### Krok 9 — Uruchomienie Lighthouse

Utwórz nową sesję screen i uruchom Lighthouse:

```bash
screen -S lighthouse
```

```bash
lighthouse bn \
  --network mainnet \
  --execution-endpoint http://127.0.0.1:8551 \
  --execution-jwt /secrets/jwt.hex \
  --checkpoint-sync-url https://mainnet.checkpoint.sigp.io \
  --http \
  --datadir /mnt/chaindata/lighthouse
```

![Uruchamianie Lighthouse](images/lighthouse_start.png){.thumbnail}

Po wstępnej konfiguracji Lighthouse powinien rozpocząć synchronizację z siecią.

![Synchronizacja Lighthouse](images/lighthouse_syncing.png){.thumbnail}

Odłącz sesję, naciskając `Ctrl+A`, a następnie `D`.

### Krok 10 — Weryfikacja synchronizacji

Na tym etapie zarówno **klient warstwy wykonawczej** (Nethermind), jak i **klient warstwy konsensusu** (Lighthouse) powinny działać w oddzielnych sesjach screen. Aby potwierdzić, że są prawidłowo połączone i synchronizacja jest w toku, podłącz się ponownie do sesji Nethermind i sprawdź logi:

```bash
screen -r nethermind
```

Jeśli Lighthouse jest prawidłowo połączony, komunikat "Waiting for Forkchoice" powinien zniknąć. Zamiast niego powinny pojawić się logi komunikacji **Engine API** oraz przetwarzania bloków:

```text
Received ForkChoice: ...
Syncing...
```

![Synchronizacja EL i CL](images/el_cl_sync.png){.thumbnail}

Logi te potwierdzają, że Nethermind otrzymuje propozycje bloków i aktualizacje fork choice od Lighthouse oraz że węzeł synchronizuje się z siecią główną Ethereum.

Chociaż ten tutorial skupił się na technicznym wdrożeniu, ważne jest uzupełnienie konfiguracji o odpowiednie zabezpieczenia systemu, monitoring i praktyki konserwacyjne w celu zapewnienia długoterminowej stabilności. Mając teraz podstawy, możesz rozszerzyć funkcjonalność swojego węzła, zintegrować go z większymi infrastrukturami lub wykorzystać jako bazę do badań, rozwoju i operacji stakingowych.

## Sprawdź również

- [Ethereum Foundation - Run a node](https://ethereum.org/en/run-a-node/)
- [Dokumentacja Nethermind](https://docs.nethermind.io/)
- [Dokumentacja Lighthouse](https://lighthouse-book.sigmaprime.io/)

[Tworzenie instancji Public Cloud](/pages/public_cloud/compute/public-cloud-first-steps)

[Tworzenie i konfiguracja dodatkowego dysku na instancji](/pages/public_cloud/compute/create_and_configure_an_additional_disk_on_an_instance)

Dołącz do [grona naszych użytkowników](/links/community).
