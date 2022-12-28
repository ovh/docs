---
title: 'Wybór grupy dysków przeznaczoną do instalacji systemu operacyjnego'
slug: instalacja-dyski-hybrid
excerpt: 'Dowiedz się, jak wybrać odpowiednią grupę dysków przeznaczoną do instalacji systemu operacyjnego'
section: 'RAID & dyski'
---

**Ostatnia aktualizacja z dnia 06-12-2018**

## Wprowadzenie

Możesz dzierżawić od OVH [serwery dedykowane](https://www.ovh.pl/serwery_dedykowane/){.external} posiadające dwa rodzaje dysków: SATA oraz SSD. Ten typ serwerów określamy mianem **serwery hybrydowe**.

**Niniejszy przewodnik wyjaśnia, jak wybrać grupę dysków, na której ma zostać zainstalowany system operacyjny.**

> [!warning]
> 
> OVH oddaje do Twojej dyspozycji usługi, za które przejmujesz odpowiedzialność. Firma OVH nie ma dostępu do Twoich serwerów, nie pełni funkcji administratora i w związku z tym nie będzie mogła udzielić Ci wsparcia. Zarządzanie oprogramowaniem i wdrażanie środków bezpieczeństwa należy do klienta.
> 
> Oddajemy w Twojej ręce niniejszy przewodnik, którego celem jest pomoc w jak najlepszym wykonywaniu bieżących zadań. W przypadku problemów z administrowaniem, użytkowaniem czy zabezpieczeniem serwera rekomendujemy skorzystanie z usług wyspecjalizowanej firmy. Więcej informacji znajduje się w sekcji “Sprawdź również”.
>

## Wymagania początkowe

* Posiadanie [serwera hybrydowego OVH](https://www.ovh.pl/serwery_dedykowane/){.external}
* Dostęp do [API OVH](https://api.ovh.com/){.external}
* Dostęp do [Panelu klienta](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external}

> [!warning]
>
> Procedura ta działa tylko w przypadku systemów Linux (z wyjątkiem systemów ESXi oraz XenServer) i wyłącznie w konfiguracji RAID Soft, NoRAID lub RAID Hard (w konfiguracji domyślnej).
> 

## W praktyce

### Połączenie z API OVH i uzyskanie nazwy serwera

Po zalogowaniu do API na stronie <https://api.ovh.com/console/> możesz uzyskać nazwę serwera za pośrednictwem następującej komendy:

> [!api]
>
> @api {GET} /dedicated/server
> 

Wyświetl nazwę serwera hybrydowego, klikając Execute`{.action}:

![Dostępne usługi](images/services-01.png){.thumbnail}

### Uzyskanie parametru DiskGroupId

`DiskGroupId` jest elementem umożliwiającym określenie grupy dysków, na którym zostanie zainstalowany system operacyjny. 

Poniżej wywołanie API, które należy zastosować:

> [!api]
>
> @api {GET} /dedicated/server/{serviceName}/specifications/hardware
> 

Wprowadź uzyskaną wcześniej nazwę serwera w polu **serviceName**, następnie kliknij przycisk `Execute`{.action}. Wyświetlą się wówczas informacje o sprzęcie, z jakiego składa się Twój serwer. Odszukaj odpowiedni `diskGroupId` w części `diskGroups`.

Domyślnie system operacyjny zainstalowany jest na `diskGroupId` 1.

![Hybrid](images/hybrid-01.png){.thumbnail}

### Uruchamianie instalacji systemu operacyjnego

Po pobraniu `diskGroupId` możesz przejść do ostatniego kroku - instalacji systemu operacyjnego.

W tym celu wywołaj API, jak pokazano poniżej, aby pobrać listę kompatybilnych systemów operacyjnych:

> [!api]
>
> @api {GET} /dedicated/server/{serviceName}/install/compatibleTemplates
> 

![Kompatybilne systemy](images/templates-01.png){.thumbnail}

Zapisz nazwę szablonu odpowiadającego wybranemu przez Ciebie systemowi operacyjnemu, następnie wywołaj API w następujący sposób:

> [!api]
>
> @api {POST} /dedicated/server/{serviceName}/install/start
> 

Wprowadź nazwę Twojego serwera w polu **serviceName**, wprowadź diskGroupId (2) w polu **diskGroupId**, następnie wprowadź nazwę szablonu w polu **templateName** (wszystkie pozostałe pola są opcjonalne).

Po uzupełnieniu wszystkich opcji, kliknij przycisk `Execute`{.action}:

![Instalacja](images/install-01.png){.thumbnail}

Twój system operacyjny zostanie teraz zainstalowany. Możesz sprawdzić postęp instalacji, aktualizując stronę Twojego serwera w [Panelu klienta](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external} lub realizując następujące wywołanie API poprzez wprowadzenie nazwy serwera w polu **serviceName** i kliknięcie przycisku `Execute`{.action}:

> [!api]
>
> @api {GET} /dedicated/server/{serviceName}/install/status
> 

## Sprawdź również

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.