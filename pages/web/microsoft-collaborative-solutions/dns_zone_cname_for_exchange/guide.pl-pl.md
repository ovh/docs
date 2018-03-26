---
title: Tworzenie pola CNAME po dodaniu przypisanej domeny
slug: exchange_20132016_dodanie_pola_cname
excerpt: Dowiesz się, jak potwierdzić własność domeny dodanej do konta Exchange
section: Konfiguracja usługi Exchange
---

**Ostatnia aktualizacja dnia 2018-01-31**

## Wprowadzenie

Podczas dodawania domeny do Twojej usługi Exchange możesz zostać poproszony o konfigurację pola CNAME (DNS). Celem konfiguracji jest zyskanie pewności, że korzystanie domeny w usłudze Exchange jest przez Ciebie autoryzowane.

**Dowiesz się, dlaczego utworzenie pola CNAME może być wymagane i jak je dodać w Panelu klienta OVH.**

## Wymagania początkowe

- Dostęp do [Panelu klienta OVH](https://www.ovh.com/auth/?action=gotomanager){.external}.
- Możliwość zarządzania usługą Exchange w [Panelu klienta](https://www.ovh.com/auth/?action=gotomanager){.external}.
- Przypisana domena do usługi Exchange, wymagająca dodania pola CNAME.
- Możliwość modyfikacji konfiguracji Twojej domeny (strefy DNS).

## W praktyce

### Etap 1: diagnostyka CNAME

Przycisk diagnostyki pola **CNAME** (Canonical Name) pojawia się w niektórych przypadkach podczas deklarowania nazwy domeny w usłudze Exchange.

Ma to na celu weryfikację, czy jesteś administratorem nazwy domeny, którą chcesz zadeklarować. 

Diagnostyka może pojawić się w następujących przypadkach:

- zadeklarowana nazwa domeny nie jest zarejestrowana w OVH;
- zadeklarowana nazwa domeny nie jest przypisana do Twojego identyfikatora klienta;
- zadeklarowana nazwa domeny nie używa konfiguracji OVH (nie wskazuje na serwery DNS OVH).

![Exchange](images/cname_exchange_diagnostic.png){.thumbnail}

### Etap 2: sprawdzanie konfiguracji CNAME

Wejdź w zakładkę `Przypisane domeny`{.action} i kliknij na czerwony przycisk `CNAME`{.action}, aby wyświetlić niezbędne informacje.

Pojawi się pole CNAME.

![Exchange](images/cname_exchange_informations.png){.thumbnail}

Następnie, mogą pojawić się dwie opcje: 

- **Twoja domena używa konfiguracji OVH**: możesz przeprowadzić opisaną poniżej operację w Panelu klienta OVH:

- **Twoja domena nie używa konfiguracji OVH**: musisz wprowadzić stosowne modyfikacje w interfejsie służącym do zarządzania konfiguracją Twojej domeny.

> [!primary]
>
> Jeśli domena jest zarejestrowana w OVH, możesz sprawdzić w Panelu klienta, w zakładce `Serwery DNS`, czy używa ona konfiguracji OVH.
>

### Etap 3: tworzenie pola CNAME w OVH

Kliknij w`Domeny`{.action} na pasku usług po lewej stronie w Panelu klienta, następnie w nazwę wybranej domeny. Wybierz zakładkę `Strefa DNS`{.action}.

Pojawi się tabela. Zawiera ona dane dotyczące konfiguracji Twojej domeny w OVH. Na konfigurację składają się rekordy DNS, każdy zaznaczony w oddzielnym wierszu tabeli.

Aby dodać pole CNAME, kliknij w przycisk `Dodaj wpis`{.action}.

![Exchange](images/cname_exchange_add_entry_step1.png){.thumbnail}

W oknie, które się wyświetli, pojawi się kilka pól DNS. Kliknij w `CNAME`{.action} i wypełnij pola, używając informacji uzyskanych podczas diagnostyki Exchange.

![Exchange](images/cname_add_entry_dns_zone.png){.thumbnail}

Po uzupełnieniu tych informacji kliknij `Dalej`{.action}. Upewnij się, że wyświetlane informacje są poprawne, następnie kliknij w `Zatwierdź`{.action}.

> [!primary]
>
> Efekty modyfikacji staną się widoczne po upływie 1-24 godzin ze względu na niezbędny czas propagacji.
>

W celu sprawdzenia, czy konfiguracja pola CNAME jest poprawna, otwórz tabelę `Przypisane domeny`{.action} w Twojej usłudze Exchange. Jeśli przycisk jest zielony, nazwa domeny została prawidłowo dodana.  Jeśli nie jest zielony, może to oznaczać, że nie zakończyła się jeszcze propagacja.

![Exchange](images/cname_exchange_diagnostic_green.png){.thumbnail}

## Sprawdź również

Przyłącz się do społeczności naszych użytkowników na stronie [https://community.ovh.com](https://community.ovh.com){.external}