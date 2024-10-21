---
title: "Diagnostyka usterek sprzętowych serwera dedykowanego"
excerpt: "Dowiedz się, jak korzystać z narzędzi diagnostycznych do identyfikacji usterek sprzętowych na Twoim serwerze"
updated: 2024-05-06
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk "Zgłóś propozycję modyfikacji" na tej stronie.
>

## Wprowadzenie

W pewnym momencie życia Twojego serwera może wystąpić awaria z powodu problemu sprzętowego. Po uruchomieniu serwera w trybie Rescue OVHcloud masz do dyspozycji kilka narzędzi diagnostycznych umożliwiających identyfikację uszkodzonych komponentów.

**Dowiedz się, jak przeprowadzić diagnostykę sprzętową serwera dedykowanego.**

## Wymagania początkowe

- Posiadanie [serwera dedykowanego](/links/bare-metal/bare-metal)
- Uruchomienie serwera w [trybie Rescue](/pages/bare_metal_cloud/dedicated_servers/rescue_mode)

## W praktyce

Niniejszy przewodnik zawiera szczegółowe informacje o testach, które należy przeprowadzić, aby zdiagnozować:

- procesora lub procesorów;
- połączenia sieciowego;
- pamięci RAM;
- dyski i partycje.

### Procesory

Test procesora polega na sprawdzeniu, czy procesor w Twoim serwerze działa poprawnie. Na prawidłowe przeprowadzenie testu potrzeba około 30 minut.  Jeśli test procesora nie zostanie zakończony pomyślnie lub serwer przestanie odpowiadać podczas testu, oznacza to, że procesor jest uszkodzony.

```bash
WRKR=$(grep -c "^processor" /proc/cpuinfo)
stress-ng --metrics-brief --timeout 60s --cpu $WRKR --io $WRKR --aggressive --ignite-cpu --maximize --pathological
stress-ng --metrics-brief --timeout 60s --brk 0 --stack 0 --bigheap 0 
```

### Połączenie z siecią

Test połączenia z siecią pozwala sprawdzić przepustowość wewnętrzną i zewnętrzną. Dane te podane są jedynie w celach informacyjnych.

```bash
ping -c 10 proof.ovh.net
for file in 1Mb 10Mb 100Mb 1Gb ; do time curl -4f https://proof.ovh.net/files/${file}.dat -o /dev/null; done
```

### Pamięć RAM

Test pamięci pozwala sprawdzić integralność modułów RAM w Twoim serwerze. Jeśli podczas testu serwer przestanie odpowiadać lub test nie zakończy się pomyślnie, oznacza to, że jeden lub kilka modułów RAM jest uszkodzonych.

> [!warning]
> Uwaga, ten test może być bardzo długi.

```bash
RAM="$(awk -vOFMT=%.0f '$1 == "MemAvailable:" {print $2/1024 - 1024}' /proc/meminfo)"
memtester ${RAM}M 1
```

### Disk Health

Możesz użyć *Smartmontools*, aby sprawdzić stan dysków odczytując ich dane `SMART`. Na przykład, aby wyświetlić wszystkie szczegóły dysku o nazwie `nvme1n1`, wprowadź:

```bash
smartctl -a /dev/nvme1n1
```

Aby uzyskać więcej informacji na temat sposobu wprowadzenia polecenia i jego interpretacji, zapoznaj się z [oficjalną dokumentacją *Smartmontools*](https://www.smartmontools.org/wiki/TocDoc).

### Partycje dysku

Test partycji składa się z testu dostępu do dysku oraz weryfikacji systemu plików. Test dostępu do dysku pozwala sprawdzić, czy system może komunikować się z dyskami twardymi w Twoim serwerze. Do weryfikacji systemu plików służy komenda `fsck -fy`.

```bash
stress-ng --metrics-brief --timeout 60s --hdd 0 --aggressive
```

## Sprawdź również

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.
