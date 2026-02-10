---
title: Sprawdzanie wersji oprogramowania BMC na dedykowanym serwerze
excerpt: "Dowiedz się, jak sprawdzić wersję oprogramowania BMC na dedykowanym serwerze."
updated: 2026-02-11
---

## Wprowadzenie

Zwykłe aktualizacje oprogramowania są kluczowe dla utrzymania wydajności, stabilności i bezpieczeństwa napędów. Takie aktualizacje często obejmują istotne poprawki błędów, poprawioną kompatybilność oraz zaawansowane funkcje bezpieczeństwa, które są niezbędne do zachowania integralności danych i utrzymania optymalnej sprawności operacyjnej.

**W tym przewodniku opisano kroki, jak sprawdzić wersję oprogramowania BMC na dedykowanym serwerze.**

## Wymagania początkowe

- Dedykowany serwer w Twoim koncie OVHcloud.
- Prawa administratora (sudo).
- Połączenie z Internetem (tylko jeśli pakiet `ipmitool` nie jest jeszcze zainstalowany na serwerze).

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

![bmc](images/ipmi_tool.png){.thumbnail} 

Jeśli wersja oprogramowania jest niższa niż 1.14, skontaktuj się z naszym zespołem wsparcia, tworząc [żądanie wsparcia za pośrednictwem OVHcloud Help Center](/links/support-contact), aby zażądać aktualizacji oprogramowania. Jeśli wersja jest wyższa niż 1.14, nie jest wymagana żadna akcja.

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

![bmc](images/ipmi_tool_rescue.png){.thumbnail}

Jeśli wersja oprogramowania jest niższa niż 1.14, skontaktuj się z naszym zespołem wsparcia, tworząc [żądanie wsparcia za pośrednictwem OVHcloud Help Center](/links/support-contact), aby zażądać aktualizacji oprogramowania. Jeśli wersja jest wyższa niż 1.14, nie jest wymagana żadna akcja.

## Sprawdź również

Dla specjalistycznych usług (SEO, programowanie itp.) skontaktuj się z [partnerami OVHcloud](/links/partner).

Jeśli potrzebujesz pomocy w użyciu i konfiguracji rozwiązań OVHcloud, oferujemy różne [opcje wsparcia](/links/support).

Dołącz do [grona naszych użytkowników](/links/community).