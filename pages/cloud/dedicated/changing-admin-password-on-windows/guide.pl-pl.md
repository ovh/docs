---
title: 'Zmiana hasła administratora na serwerze Windows'
slug: zmiana-hasla-admin-windows
excerpt: 'Dowiedz się, jak zmienić hasło administratora na serwerze dedykowanym z systemem Windows'
section: 'Diagnostyka i tryb Rescue'
---

**Ostatnia aktualizacja z dnia 16-09-2019**

## Wprowadzenie

Podczas instalacji lub reinstalacji systemu operacyjnego Windows otrzymujesz hasło administratora. Rekomendujemy jego zmianę zgodnie z instrukcją zawartą w [przewodniku o bezpieczeństwie](https://docs.ovh.com/pl/dedicated/porady-zabezpieczanie-serwera-dedykowanego/){.external}. Możesz również zmienić hasło w sytuacji, gdy utraciłeś wcześniejsze .

**Niniejszy przewodnik opisuje procedurę modyfikacji hasła administratora na serwerze.**


## Wymagania początkowe

* Posiadanie [serwera dedykowanego](https://www.ovh.pl/serwery_dedykowane/){.external} z zainstalowanym systemem Windows
* Dostęp do [Panelu klienta](https://www.ovh.com/auth/?action=gotomanager){.external}


## W praktyce

Uruchom serwer w trybie awaryjnym, korzystając ze środowiska rozruchowego WinRescue. W przypadku takiej potrzeby polecamy zapoznanie się z przewodnikiem o [trybie Rescue](https://docs.ovh.com/pl/dedicated/ovh-rescue/){.external}. 

Po ponownym uruchomieniu serwera przejdź do [Panelu klienta](https://www.ovh.com/auth/?action=gotomanager){.external} i wybierz zakładkę `IPMI`{.action} na stronie Twojego serwera.

> [!primary]
>
> Więcej informacji o IPMI znajdziesz w przewodniku [Korzystanie z IPMI](https://docs.ovh.com/pl/dedicated/uzywanie-ipmi-serwery-dedykowane/){.external}.
>

Aktywuj następnie funkcję IPMI za pomocą apletu Java lub przeglądarki. Po uruchomieniu sesji IPMI, kliknij dwa razy narzędzie NTPWdi serwera na pulpicie WinRescue.

![NTPWdi](images/ntpwdi-tool-01.png){.thumbnail}

Następnie kliknij przycisk `Otwórz ponownie`{.action}, aby wyświetlić listę dostępnych kont użytkowników.

![NTPWdi](images/ntpwdi-tool-02.png){.thumbnail}

Teraz wybierz na liście konto użytkownika root i kliknij przycisk `Zmień hasło`{.action}.

![NTPWdi](images/ntpwdi-tool-03.png){.thumbnail}

Aby zakończyć operację, wprowadź nowe hasło dwa razy, a następnie kliknij `OK`{.action}.

![NTPWdi](images/ntpwdi-tool-04.png){.thumbnail}

Twoje hasło zostało teraz zmienione. Wyjdź z narzędzia, zamknij sesję IPMI i uruchom ponownie serwer z dysku.


## Sprawdź również

[Tryb Rescue](https://docs.ovh.com/pl/dedicated/ovh-rescue/){.external}

[Korzystanie z IPMI dla serwerów dedykowanych](https://docs.ovh.com/pl/dedicated/uzywanie-ipmi-serwery-dedykowane/){.external}

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.