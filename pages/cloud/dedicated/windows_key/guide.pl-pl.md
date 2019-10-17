---
title: 'Modyfikacja klucza aktywacyjnego Windows Server'
excerpt: 'Dowiedz się, jak zmodyfikować klucz aktywacyjny Windows Server'
slug: windows-klucz
section: Inne
---

**Ostatnia aktualizacja dnia 2018-03-08**

## Wprowadzenie

Istnieje możliwość, że podczas instalacji systemu operacyjnego Windows Server klucz aktywacyjny nie zostanie poprawnie zarejestrowany. W takim przypadku system zostanie zainstalowany z wykorzystaniem wersji próbnej klucza ważnej przez okres 120 dni. Po tym czasie korzystanie z systemu nie będzie możliwe.

**Niniejszy przewodnik opisuje, jak zmodyfikować klucz aktywacyjny Twojego systemu Windows Server, aby móc z niego dalej korzystać.**


## Wymagania początkowe

- [Serwer dedykowany](https://www.ovh.pl/serwery_dedykowane/){.external} z systemem Windows.
- Dostępna licencja Windows SPLA. [Sprawdź ofertę licencji Windows](https://www.ovh.pl/serwery_dedykowane/cennik-licencje-windows-2014.xml){.external} i zamów ją w [Panelu klienta OVH](https://www.ovh.com/auth/?action=gotomanager){.external}.
- Dostęp do zdalnego pulpitu.


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

Oto lista kluczy KMS dostępnych dla każdego systemu operacyjnego:

|System operacyjny|Klucz KMS|
|---|---|
|Windows Server 2008 Standard|TM24T-X9RMF-VWXK6-X8JC9-BFGM2|
|Windows Server 2008 Entreprise|YQGMW-MPWTJ-34KDK-48M3W-X4Q6V|
|Windows Server 2008 Datacenter|7M67G-PC374-GR742-YH8V4-TCBY3|
|Windows Server 2008 R2 Standard|YC6KT-GKW9T-YTKYR-T4X34-R7VHC|
|Windows Server 2008 R2 Entreprise|489J6-VHDMP-X63PK-3K798-CPX3Y|
|Windows Server 2008 R2 Datacenter|74YFP-3QFB3-KQT8W-PMXWJ-7M648|
|Windows Server 2012 Standard|XC9B7-NBPP2-83J2H-RHMBY-92BT4|
|Windows Server 2012 Datacenter|48HP8-DN98B-MYWDG-T2DCC-8W83P|
|Windows Server 2012 R2 Standard|D2N9P-3P6X9-2R39C-7RTCD-MDVJX|
|Windows Server 2012 R2 Datacenter|W3GGN-FT8W3-Y4M27-J84CP-Q3VJ9|
|Windows 8.1 Pro|GCRJD-8NW9H-F2CDX-CCM8D-9D6T9|
|Windows Server 2016 Datacenter|CB7KF-BWN84-R7R2Y-793K2-8XDDG|
|Windows Server 2016 Standard|WC2BQ-8NRM3-FDDYY-2BFGV-KHKQY|
|Windows Server 2016 Essentials|JCKRF-N37P4-C2D82-9YXRT-4M63B|
|Windows Server 2019 Standard|N69G4-B89J2-4G8F4-WWYCC-J464C|
|Windows Server 2019 Datacenter|WMDGN-G9PQG-XVVXX-R3X43-63DFG|

Źródło: [Microsoft MSDN](http://ovh.to/bLx1aBo){.external}.


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

[Licencje Windows dostępne w OVH](https://www.ovh.pl/serwery_dedykowane/cennik-licencje-windows-2014.xml){.external}

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.