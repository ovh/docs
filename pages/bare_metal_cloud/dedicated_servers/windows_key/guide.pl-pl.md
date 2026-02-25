---
title: 'Jak zmienić klucz aktywacyjny Windows Server'
excerpt: 'Dowiedz się, jak zmodyfikować klucz aktywacyjny Windows Server'
updated: 2026-01-06
---

## Wprowadzenie

Istnieje możliwość, że podczas instalacji systemu operacyjnego Windows Server klucz aktywacyjny nie zostanie poprawnie zarejestrowany. W takim przypadku system zostanie zainstalowany z wykorzystaniem wersji próbnej klucza ważnej przez okres 120 dni. Po tym czasie korzystanie z systemu nie będzie możliwe.

**Niniejszy przewodnik opisuje, jak zmodyfikować klucz aktywacyjny Twojego systemu Windows Server, aby móc z niego dalej korzystać.**

## Wymagania początkowe

- Posiadanie [Serwer dedykowany OVHcloud](/links/bare-metal/os) z systemem Windows Server lub wirtualna maszyna z systemem Windows Server na usłudze [Managed VMware](/links/hosted-private-cloud/vmware-images-licenses).
- Posiadanie licencja SPLA systemu Windows na koncie OVHcloud
- Dostęp administracyjny do serwera za pośrednictwem połączenia pulpitu zdalnego

## W praktyce

### Usunięcie poprzedniego klucza

Kiedy korzystasz z próbnej wersji systemu, zarejestrowany zostaje klucz domyślny. Aby go zmodyfikować, otwórz okno programu `Run`{.action} (klawisz Windows + `R`{.action}):

![Uruchomienie programu Run](images/executer.png){.thumbnail}

![Run](images/executer2.png){.thumbnail}

Wpisz w programie następującą komendę:

```bash
cscript.exe c:\windows\system32\slmgr.vbs -upk
```

### Dodanie nowego klucza

W tej chwili możesz dodać nowy klucz. W tym celu powróć do programu `Run`{.action} i wpisz następującą komendę:

```bash
cscript.exe c:\windows\system32\slmgr.vbs -ipk KLUCZ_LICENCYJNY KMS
```

Klucze produktów obsługiwanych wersji systemu Windows Server można znaleźć w tabeli dostępnej na [oficjalnej stronie firmy Microsoft](https://learn.microsoft.com/en-gb/windows-server/get-started/kms-client-activation-keys).

> [!primary]
>
> Wersje Core systemów używają tych samych kluczy KMS, co te niebędące wersjami Core.
> 

### Połączenie z kms.ovh.net

Aby Twój klucz został powiązany z naszym robotem aktywującym, wpisz w programie `Run`{.action} poniższą komendę:

```bash
cscript.exe c:\windows\system32\slmgr.vbs -skms kms.ovh.net
```

> [!primary]
>
> Jeśli używasz VPS lub instancji Public Cloud, skorzystaj z nazwy serwera `kms.cloud.ovh.net`.
> 

### Aktywacja systemu

Aby aktywować system Windows, wpisz poniższą komendę:

```bash
cscript.exe c:\windows\system32\slmgr.vbs -ato
```

## Sprawdź również

Dołącz do [grona naszych użytkowników](/links/community).