---
title: "Sprawdzenie wersji firmware BMC na serwerze dedykowanym Linux"
excerpt: "Sprawdź wersję firmware BMC na serwerze dedykowanym OVHcloud, aby zapewnić kompatybilność zarządzania sprzętowego."
updated: 2026-02-25
---

## Wprowadzenie

BMC (Baseboard Management Controller) odpowiada za zdalne zarządzanie i niskopoziomową kontrolę nad sprzętem serwera. Przestarzała wersja może mieć bezpośredni wpływ na bezpieczeństwo, stabilność i zarządzanie serwerem. Aktualizacja oprogramowania układowego BMC jest niezbędna, aby usunąć luki bezpieczeństwa, utrzymać stabilność systemu i spełnić wymagania dotyczące zgodności.

**W tym przewodniku opisano kroki, jak sprawdzić wersję oprogramowania BMC na dedykowanym serwerze.**

## Wymagania początkowe

- Dedykowany serwer w Twoim koncie OVHcloud.
- Prawa administratora (sudo).
- Połączenie z Internetem (tylko jeśli pakiet `ipmitool` nie jest jeszcze zainstalowany na serwerze).

> [!primary]
> Z powodu naszej dedykowanej konfiguracji uaktualnienie BMC jest wykonywane tylko przez automatyzację OVHcloud pod nadzorem naszych techników, nie oferujemy żadnego pakietu ani mechanizmu automatycznego w tym celu.
>

### Na serwerze z systemem Linux

Najpierw musisz zainstalować pakiet `ipmitool`. To narzędzie umożliwia zapytanie BMC za pomocą interfejsu IPMI. Oto oficjalna dokumentacja: <https://linux.die.net/man/1/ipmitool>

W zależności od dystrybucji systemu Linux komenda może się różnić:

> [!tabs]
> **Debian/Ubuntu**
>>
>> ```sh
>> sudo apt update
>> sudo apt install ipmitool -y
>> ```
>>
> **RHEL/CentOS/AlmaLinux/Rocky Linux**
>>
>> ```sh
>> sudo dnf install epel-release -y
>> sudo dnf install ipmitool -y
>> ```
>>

Sprawdź wersję oprogramowania BMC za pomocą poniższego polecenia:

```sh
sudo ipmitool mc info
```

![Wersja firmware BMC z narzędzia ipmitool w systemie Linux](images/ipmi_tool.png){.thumbnail} 

Jeśli wersja oprogramowania sprzętowego jest równa lub mniejsza niż 1.14, skontaktuj się z naszym zespołem wsparcia, tworząc [żądanie wsparcia za pośrednictwem OVHcloud Help Center](/links/support-contact), aby zażądać aktualizacji oprogramowania. Jeśli wersja jest wyższa niż 1.14, nie jest wymagana żadna akcja.

### Na serwerze z systemem Windows

Obecnie jesteśmy w stanie dostarczyć procedurę tylko dla serwerów z systemami operacyjnymi Linux. Zalecamy, aby uruchomić swój serwer Windows w naszym [trybie ratunkowym](/pages/bare_metal_cloud/dedicated_servers/rescue_mode), aby sprawdzić wersję. Komenda działa również w trybie ratunkowym.

### Na serwerze w trybie ratunkowym

Po uruchomieniu serwera w [trybie ratunkowym](/pages/bare_metal_cloud/dedicated_servers/rescue_mode), zainstaluj pakiet `ipmitool`.

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # apt install ipmitool -y
```

Następnie sprawdź wersję oprogramowania:

```sh
ipmitool mc info
```

![Wersja firmware BMC z narzędzia ipmitool w trybie rescue](images/ipmi_tool_rescue.png){.thumbnail}

Jeśli wersja oprogramowania sprzętowego jest równa lub mniejsza niż 1.14, skontaktuj się z naszym zespołem wsparcia, tworząc [żądanie wsparcia za pośrednictwem OVHcloud Help Center](/links/support-contact), aby zażądać aktualizacji oprogramowania. Jeśli wersja jest wyższa niż 1.14, nie jest wymagana żadna akcja.

## Sprawdź również

Dla specjalistycznych usług (SEO, programowanie itp.) skontaktuj się z [partnerami OVHcloud](/links/partner).

Jeśli potrzebujesz pomocy w użyciu i konfiguracji rozwiązań OVHcloud, oferujemy różne [opcje wsparcia](/links/support).

- [Advance Dedicated Servers - Upgrading your Samsung NVMe PM9A1 firmware (EN)](/pages/bare_metal_cloud/dedicated_servers/samsung-nvme-fw-upgrade)
- [Dedicated Servers - Upgrading your Micron 7500 PRO firmware](/pages/bare_metal_cloud/dedicated_servers/micron-7500-fw-upgrade)
Dołącz do [grona naszych użytkowników](/links/community).