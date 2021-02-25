---
title: Usunięcie błędu "Strona nie została zainstalowana"
excerpt: Dowiedz się, jak usunąć błąd "Strona nie została zainstalowana"
slug: hosting_www_blad_dotyczacy_nie_zainstalowanej_strony
section: Konfiguracja hostingu
order: 2
---
**Ostatnia aktualizacja dnia 2018-03-26**

## Wprowadzenie

Strona z komunikatem *Strona nie została zainstalowana* informuje, że konfiguracja DNS Twojej domeny nie jest prawidłowa lub, że domena używana przez Twoją stronę WWW nie została poprawnie dodana do hostingu OVH w opcji MultiSite.

**Dowiedz się, jak usunąć błąd *Strona nie została zainstalowana*.**

## Wymagania początkowe

- Posiadanie [hostingu OVH](https://www.ovh.pl/hosting/){.external}
- Możliwość zarządzania [hostingiem](https://www.ovh.pl/hosting/){.external} (na którym zainstalowana jest strona WWW)
- Możliwość modyfikacji konfiguracji domeny (jej strefy DNS) 
- Dostęp do [Panelu klienta OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external}

## W praktyce

Strona z komunikatem *Strona nie została zainstalowana* wyświetla się tylko w dwóch konkretnych przypadkach:

- domena używana przez Twoją stronę WWW nie została poprawnie dodana jako **MultiSite** na etapie konfiguracji hostingu;
- domena używana przez Twoją stronę WWW nie została prawidłowo powiązana z hostingiem, ponieważ w konfiguracji DNS nie występuje właściwy adres IP.

Przedstawione poniżej etapy opisują, w jaki sposób sprawdzić obydwie konfiguracje i usunąć błąd *Strona nie została zainstalowana*.

![sitenotinstalled](images/site-not-installed-webpage.png){.thumbnail}

### Etap 1: weryfikacja konfiguracji MultiSite

Aby sprawdzić, czy domena została poprawnie dodana do hostingu jako MultiSite, zaloguj się do [Panelu klienta](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external}, następnie kliknij `Hosting`{.action} na pasku usług po lewej stronie. Z listy wybierz hosting, z którego ma korzystać domena, pod którą wyświetla się komunikat *Strona nie została zainstalowana*. Przejdź następnie do zakładki `MultiSite`{.action}.

Tabela, która się wyświetla zawiera wszystkie domeny dodane do Twojego hostingu. W celu odnalezienia właściwej domeny możesz skorzystać z paska wyszukiwania. 

Wyszukaj odpowiednią domenę w tabeli. Istnieje kilka możliwych przyczyn.

|Scenariusz|Co należy zrobić?|
|---|---|
|Nazwa domeny wyświetla się w tabeli|Oznacza to, że domena została dodana do Twojego hostingu jako MultiSite. Jeśli nie upłynęło jeszcze 15 minut od jej dodania, odczekaj chwilę, zanim strona z komunikatem *Strona nie została zainstalowana* zniknie. Jeśli strona z komunikatem nadal się wyświetla, przejdź do [etapu 2: weryfikacja konfiguracji DNS domeny](https://docs.ovh.com/pl/hosting/hosting_www_blad_dotyczacy_nie_zainstalowanej_strony/#etap-2-weryfikacja-konfiguracji-dns-domeny){.external}.|
|Domena nie wyświetla się jeszcze w tabeli|Jeśli dodałeś domenę, a jej nazwa nie wyświetla się w tabeli, możliwe jest, że nie wykonałeś czynności z wszystkich etapów koniecznych do zakończenia dodania domeny do hostingu lub że usunąłeś domenę przez przypadek. W tej sytuacji postępuj zgodnie z instrukcjami podanymi w przewodniku [Instalacja kilku stron WWW na jednym hostingu](https://docs.ovh.com/pl/hosting/konfiguracja-multisite-na-hostingu){.external}, aby przeprowadzić proces dodania domeny od nowa.|
|Nazwa domeny nie jest widoczna w tabeli|Nie dodałeś jeszcze tej domeny jako MultiSite do Twojego hostingu. Aby dodać domenę, wykonaj kolejne kroki opisane w przewodniku [Instalacja kilku stron WWW na jednym hostingu](https://docs.ovh.com/pl/hosting/konfiguracja-multisite-na-hostingu){.external}.|

Jeśli mimo podjętych działań, zamiast Twojej strony WWW wciąż pojawia się strona z komunikatem *Strona nie została zainstalowana*, wykonaj kroki z etapu 2: weryfikacja konfiguracji DNS domen. 

### Etap 2: weryfikacja konfiguracji DNS domeny

Na wstępie sprawdź, jaką konfigurację powinieneś zastosować. W tym celu przejdź do zakładki `Informacje ogólne`{.action}, następnie zapisz adresy, które pojawiają się przy **IPv4** i **IPv6**.

![sitenotinstalled](images/site-not-installed-know-a-records.png){.thumbnail}

Teraz możesz sprawdzić konfigurację DNS Twojej domeny. Weryfikację należy przeprowadzić w interfejsie dostawcy zarządzającego tą konfiguracją.

> [!primary]
>
> Jeśli domena jest zarejestrowana w OVH, możesz sprawdzić, czy korzysta z konfiguracji OVH. Kliknij w [Domeny](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external} na pasku usług po lewej stronie w [Panelu klienta](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external}, następnie w nazwę wybranej domeny. Teraz przejdź do zakładki `Serwery DNS`{.action}.
>

W zależności od konfiguracji domeny, należy sprawdzić ustawienia w jednym z dwóch miejsc:

- **Twoja domena nie używa konfiguracji OVH**: sprawdź (opisaną poniżej) w interfejsie dostawcy zarządzającego ustawieniami Twojej domeny; 

- **Twoja domena używa konfiguracji OVH**: sprawdź w [Panelu klienta OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external}. Wybierz domenę i przejdź do zakładki `Strefa DNS`{.action}. Konfiguracja DNS wyświetla się w tabeli, każdy wiersz odpowiada jednemu rekordowi DNS. Możesz sortować zawartość tabeli według typu rekordu lub nazwy domeny.

![sitenotinstalled](images/site-not-installed-edit-ovh-dns-zone.png){.thumbnail}

Upewnij się, czy poniższe rekordy DNS są poprawnie skonfigurowane. W tym celu użyj interfejsu dostawcy zarządzającego ustawieniami Twojej domeny, w odniesieniu do której wyświetla się komunikat: *Strona nie została zainstalowana*.

|Rekord|Adres docelowy|
|---|---|
|A|Adres docelowy musi odpowiadać adresowi **IPv4**, który wcześniej zapisałeś.|
|AAAA|Adres docelowy musi odpowiadać adresowi **IPv6**, który wcześniej zapisałeś.|

Możliwe są dwa scenariusze:

|Scenariusz|Co należy zrobić?|
|---|---|
|Adresy docelowe są prawidłowe.|Oznacza to, że konfiguracja Twojej domeny jest poprawna. Od momentu modyfikacji konfiguracji DNS muszą upłynąć 24 godziny, aby modyfikacja ta stała się efektywna.|
|Adresy docelowe są nieprawidłowe.|Konfiguracja Twojej domeny musi zostać zmieniona. Jeśli domena używa konfiguracji OVH, przejdź do instrukcji opisanych w przewodniku [Modyfikacja strefy DNS](https://docs.ovh.com/pl/domains/hosting_www_jak_edytowac_strefe_dns/){.external}. Jeśli domena używa konfiguracji dostawcy zewnętrznego, postępuj zgodnie z instrukcjami podanymi w dostarczonym przez niego interfejsie. Od momentu zmiany konfiguracji DNS muszą upłynąć 24 godziny, aby modyfikacja ta stała się efektywna.|

Po wdrożeniu kroków z etapu 1 i 2, oraz po upływie 24 godzin niezbędnych dla propagacji zmian, strona z komunikatem *Strona nie została zainstalowana* nie powinna się już pojawiać.

## Sprawdź również 

[Instalacja kilku stron WWW na jednym hostingu](https://docs.ovh.com/pl/hosting/konfiguracja-multisite-na-hostingu){.external}

[Modyfikacja strefy DNS OVH](https://docs.ovh.com/pl/domains/hosting_www_jak_edytowac_strefe_dns/){.external}

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>