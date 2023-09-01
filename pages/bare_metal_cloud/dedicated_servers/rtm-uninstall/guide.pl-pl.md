---
title: "Odinstaluj system monitoringu RTM v2"
excerpt: "Dowiedz się, jak odinstalować system monitorowania RTM w odniesieniu do Twoich usług"
updated: 2023-06-20
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk “Zgłóś propozycję modyfikacji” na tej stronie.
>

## Wprowadzenie

System monitoringu OVHcloud RTM v2 uległ deprecjacji i został usunięty. Zalecamy zatem odinstalowanie tego systemu z Twojej usługi lub usług i usunięcie wszystkich powiązanych pakietów.

**Niniejszy przewodnik zawiera wskazówki dotyczące czyszczenia pakietów używanych przez ten system.**

## Wymagania początkowe

- Jeden [serwer dedykowany](https://www.ovhcloud.com/pl/bare-metal/), na którym zainstalowano RTM v2
- Dostęp administratora (*root*) do serwera przez SSH

## W praktyce

Zaloguj się do serwera przez SSH i usuń poniższe pakiety:

### Dystrybucji opartych na Debianie

```bash
# apt remove ovh-rtm-binaries
# apt remove ovh-rtm-metrics-toolkit
# apt remove noderig
# apt remove beamium
```

### CentOS 7 / AlmaLinux / Rocky Linux

```bash
# yum remove ovh-rtm-binaries
# yum remove ovh-rtm-metrics-toolkit
# yum remove noderig
# yum remove beamium
```

### Fedora

```bash
# dnf remove ovh-rtm-binaries
# dnf remove ovh-rtm-metrics-toolkit
# dnf remove noderig
# dnf remove beamium
```

Następnie usuń depozyty.

### Debian / Ubuntu

#### Sprawdź, czy pakiety są zainstalowane:**

```bash
dpkg --list | grep -E "noderig|beamium|ovh-rtm-binaries|ovh-rtm-metrics-toolkit"
```

Jeśli zamówienie nie zwraca żadnej wartości, oznacza to, że pakiety nie są zainstalowane, możesz przejść do etapu weryfikacji depozytów. Jeśli tak się nie stanie, możesz je usunąć za pomocą polecenia:

```bash
sudo apt-get remove ovh-rtm-binaries ovh-rtm-metrics-toolkit noderig beamium
```

#### Sprawdź, czy depozyty istnieją

```bash
ls /etc/apt/sources.list.d/
``` 

Jeśli pliki `ovh-metrics.list` i `ovh-rtm.list` nie są wymienione, nie musisz nic robić. Jeśli tak się nie stanie, możesz je usunąć za pomocą polecenia:

```bash
rm -f /etc/apt/sources.list.d/ovh-metrics.list /etc/apt/sources.list.d/ovh-rtm.list
```

### CentOS

#### Sprawdź, czy zainstalowane są pakiety

```bash
yum list installed | grep -E "noderig|beamium|ovh-rtm-binaries|ovh-rtm-metrics-toolkit"
```

Jeśli zamówienie nie zwraca żadnej wartości, oznacza to, że pakiety nie są zainstalowane, możesz przejść do etapu weryfikacji depozytów. Jeśli tak się nie stanie, możesz je usunąć za pomocą polecenia:

```bash
sudo yum remove ovh-rtm-binaries ovh-rtm-metrics-toolkit noderig beamium
```

#### Sprawdź, czy depozyty istnieją

```bash
ls /etc/yum.repos.d/
```

Jeśli pliki `OVH-metrics.repo` i `OVH-rtm.repo` nie są wymienione, nie musisz nic robić. Jeśli tak się nie stanie, możesz je usunąć za pomocą polecenia: 

```bash
rm -f /etc/yum.repos.d/OVH-metrics.repo /etc/yum.repos.d/OVH-rtm.repo
```

## Sprawdź również

Jeśli potrzebujesz wsparcia technicznego lub szkolenia w zakresie wdrażania naszych rozwiązań, skontaktuj się z handlowcem lub kliknij na [link](https://www.ovhcloud.com/pl/professional-services/), aby otrzymać wycenę i poprosić o spersonalizowaną analizę projektu naszych ekspertów z zespołu Professional Services.

Przyłącz się do społeczności naszych użytkowników na <https://community.ovh.com/en/>.
