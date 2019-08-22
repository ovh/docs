---
title: 'Zmiana serwerów DNS domeny w OVH'
slug: hosting_www_informacje_na_temat_serwerow_dns
excerpt: 'Dowiedz się, jak zmodyfikować serwery DNS Twojej domeny w OVH'
section: 'DNS i strefa DNS'
order: 1
---

**Ostatnia aktualizacja z dnia 01-07-2019**

## Wprowadzenie

Serwery DNS przechowują informacje o konfiguracji DNS domeny. Konfiguracja DNS, zwana także strefą DNS domeny zapisana jest na serwerach DNS. Zawiera ona informacje techniczne w postaci rekordów. Rekordy te umożliwiają powiązanie domeny z serwerem lub serwerami hostującymi stronę WWW i konta e-mail. 

Można więc powiedzieć, że dzięki rekordom DNS przechowywanym na serwerach DNS możliwe jest łączenie się z domeną przez Internet.

**Dowiedz się, jak modyfikować serwery DNS Twojej domeny OVH.**

## Wymagania początkowe

- Posiadanie domeny zarejestrowanej w OVH
- Posiadanie [odpowiednich uprawnień do zarządzania](https://docs.ovh.com/pl/customer/zarzadzanie_kontaktami/){.external} domeną w [Panelu klienta](https://www.ovh.com/auth/?action=gotomanager){.external}
- Dostęp do [Panelu klienta](https://www.ovh.com/auth/?action=gotomanager){.external}

> [!warning]
>
> Jeśli Twoja domena nie jest zarejestrowana w OVH, przeprowadź modyfikację serwerów DNS w interfejsie dostawcy zarządzającego Twoją domeną.
>

## W praktyce

**Zalecamy szczególną ostrożność podczas modyfikacji serwerów DNS domeny.** Wprowadzenie omyłkowej zmiany mogłoby uniemożliwić dostęp do Twojej strony WWW lub odbiór nowych wiadomości e-mail. Świadomość możliwych konsekwencji modyfikacji pozwoli Ci lepiej zrozumieć wprowadzane zmiany.

Kiedy modyfikujesz serwery DNS Twojej domeny, zmieniasz również konfigurację DNS. Nowa konfiguracja zastępuje zatem poprzednią i jest przechowywana na nowych serwerach DNS. Z technicznego punktu widzenia domena używa nowej strefy DNS.

Pamiętaj, że:

- zawartość poprzedniej konfiguracji DNS nie jest automatycznie kopiowana do nowej konfiguracji. Upewnij się zatem, czy nowa konfiguracja zawiera wszystkie elementy potrzebne do prawidłowego funkcjonowania usług powiązanych z Twoją domeną (jak np. strona WWW i konta e-mail);

- jeśli chcesz zmodyfikować tylko jeden element aktualnej konfiguracji DNS (tj. jeden rekord DNS), zalecamy edycję strefy DNS zgodnie z instrukcjami zawartymi w tej dokumentacji: [Modyfikacja strefy DNS](https://docs.ovh.com/pl/domains/hosting_www_jak_edytowac_strefe_dns/){.external};

- niektóre organizacje lub operatorzy zarządzający rozszerzeniami domen mają określone wymagania dotyczące serwerów DNS (liczba serwerów nazw, wartość rekordów, etc...). W razie wątpliwości sprawdź wymagania u operatora, u którego zarejestrowana jest domena.

> [!warning]
>
> Przed rozpoczęciem jakichkolwiek zmian, upewnij się, że operacja nie uniemożliwi dostępu do Twojej domeny. Jeśli nie jesteś tego pewien, skonsultuj się z osobą, która poprosiła Cię o przeprowadzenie tej modyfikacji.
>

### Etap 1: dostęp do interfejsu zarządzania serwerami DNS domeny

Przed rozpoczęciem operacji zaloguj się do [Panelu klienta](https://www.ovh.com/auth/?action=gotomanager){.external}, kliknij `Domeny`{.action} na pasku usług po lewej stronie, następnie wybierz odpowiednią domenę. Teraz przejdź do zakładki `Serwery DNS`{.action}.

Pojawi się tabela wyszczególniająca serwery DNS aktualnie skonfigurowane w OVH dla Twojej domeny. Może pojawić się kilka serwerów DNS, przy czym jeden serwer odpowiada jednej linii w tabeli. 

![dnsserver](images/edit-dns-server-ovh-step1.png){.thumbnail}

### Etap 2: edycja serwerów DNS domeny

Aby rozpocząć edycję serwerów DNS, kliknij przycisk `Zmień serwery DNS`{.action}.

Zastąp zawartość pól informacjami o nowych serwerach, które chcesz skonfigurować. Aby dodać nowe serwery do aktualnej listy, kliknij `+`{.action} po prawej stronie w ostatniej linii tabeli. Pojawi się wówczas dodatkowa linia w tabeli z polami do uzupełnienia.

Po uzupełnieniu informacji, kliknij przycisk `Zastosuj konfigurację`{.action}. Statusy serwerów DNS w tabeli są aktualizowane zgodnie z nowymi ustawieniami. 

> [!primary]
>
> Za pomocą przycisku `Resetuj serwery DNS`{.action} możesz przywrócić serwery skonfigurowane pierwotnie przez OVH. Użyj tej opcji tylko wtedy, gdy chcesz ponownie korzystać z serwerów DNS OVH. 
>

![dnsserver](images/edit-dns-server-ovh-step2.png){.thumbnail}

### Etap 3: oczekiwanie na efekty wprowadzonej zmiany

Po zakończeniu operacji należy odczekać określony czas, zanim zmiany staną się widoczne. Na czas oczekiwania składają się dwa czynniki:

- zmiana wprowadzona w OVH musi zostać uwzględniona przez organizację zarządzającą rozszerzeniem Twojej domeny. Możesz śledzić postęp procesu w [Panelu klienta](https://www.ovh.com/auth/?action=gotomanager){.external} (sekcja `Domeny`{.action} na pasku usług po lewej stronie > `Operacje w toku`{.action})
- po uwzględnieniu zmiany przez organizację zarządzającą rozszerzeniem domeny konieczny jest następnie czas propagacji wynoszący maksymalnie 48 godzin, aby modyfikacje stały się w pełni widoczne.

## Sprawdź również

[ Modyfikacja strefy DNS OVH](https://docs.ovh.com/pl/domains/hosting_www_jak_edytowac_strefe_dns/){.external}


Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.