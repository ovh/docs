---
title: "Migracja kont e-mail z jednej platformy e-mail OVHcloud do innej"
excerpt: "Dowiedz się, jak migrować adresy e-mail z jednej platformy Exchange lub E-mail Pro do innej platformy Exchange, E-mail Pro, MX Plan lub Zimbra"
updated: 2026-01-16
---

## Wprowadzenie

Chcesz przenieść Twoje konta e-mail obecne na platformę Exchange lub E-mail Pro na inną platformę Exchange, E-mail Pro, MX Plan lub Zimbra. W tym przewodniku znajdziesz dwuetapowy proces migracji:

1. **Konfiguracja platformy docelowej**.
2. **Przeniesienie kont e-mail** z aktualnej platformy na nową.

![e-mail-migracja](images/migration_platform01.gif){.thumbnail}

> [!primary]
>
> Aby przenieść rozwiązanie MX Plan na platformę Exchange lub E-mail Pro, zapoznaj się z naszym przewodnikiem [Migracja konta e-mail MX Plan na konto E-mail Pro lub Exchange](/pages/web_cloud/email_and_collaborative_solutions/migrating/migration_control_panel).
>

**Dowiedz się, jak przenieść konta e-mail z platformy Exchange lub E-mail Pro na inną platformę Exchange lub E-mail Pro.**

## Wymagania początkowe

- Posiadaj platformę **źródłową** z skonfigurowanymi kontami [Exchange](/links/web/emails-hosted-exchange) lub [E-mail Pro](/links/web/email-pro) lub [Zimbra](/links/web/zimbra).
- Posiadanie platformy **"docelowej"** z kontami [Exchange](/links/web/emails-hosted-exchange), [E-mail Pro](/links/web/email-pro) lub MX Plan (w ramach usługi MX Plan lub pakietu [hostingowego OVHcloud](/links/web/hosting)) Na platformie muszą znajdować się nieskonfigurowane lub dostępne konta e-mail, które mają być migrowane.
- Dostęp do [Panelu klienta OVHcloud](/links/manager).

## W praktyce

### Konfiguracja platformy docelowej

> [!warning]
>
> Przed rozpoczęciem migracji, jeśli właśnie zamówiłeś nową ofertę e-mail, najpierw dodaj nazwę domeny do swojej platformy e-mail. Jeśli migrujesz do platformy MX Plan, ponieważ nazwa domeny jest "stała", możesz przejść bezpośrednio do [następnej etapu](#accountsmigration).
>
> Wybierz kartę `Domeny przypisane`{.action} lub `Domeny`{.action} na swojej platformie, a następnie kliknij `Dodaj domenę`{.action}. Po dodaniu nazwy domeny upewnij się, że w kolumnie `Status` widoczna jest marka `OK` lub `Aktywny`{.action}.
>
> ![exchange](images/account_migration_adddomain.png){.thumbnail}
>
> Aby uzyskać więcej informacji na temat dodania domeny, zapoznaj się [z przewodnikiem E-mail Pro](/pages/web_cloud/email_and_collaborative_solutions/email_pro/first_config) lub [przewodnikiem Exchange](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/exchange_adding_domain).

### Przenieś konta e-mail <a name="accountsmigration"></a>

Migracja Twoich kont e-mail zostanie przeprowadzona w 3 krokach. **Zmień nazwę** oryginalnego konta e-mail, **założyć** nowe konto e-mail i **przejść** z pierwotnej platformy do nowej.

![e-mail-migracja](images/migration_platform03.gif){.thumbnail}

> [!warning]
>
> Przypadek szczególny:
>
> - Jeśli musisz przenieść **konto Exchange lub Zimbra PRO** do konta **E-mail Pro** lub **Zimbra STARTER**, musisz upewnić się, że Twoje konta e-mail nie przekraczają 10 Go (E-mail Pro) lub 15 Go (Zimbra STARTER). Funkcje współpracy, synchronizacja kalendarzy i kontaktów nie są dostępne w E-mail Pro ani Zimbra STARTER i nie mogą być przeniesione.
> - Jeśli musisz przenieść **konto Exchange, E-mail Pro lub Zimbra** do konta **MX Plan**, musisz upewnić się, że Twoje konto e-mail nie przekracza 5 Go. Funkcje współpracy, synchronizacja kalendarzy i kontaktów nie są dostępne w MX Plan i nie mogą być przeniesione.

#### Zmień nazwę

Zmień nazwę konta e-mail, które chcesz przenieść, używając tymczasowej nazwy (na przykład: aby przenieść konto e-mail *john.smith@mydomain.ovh*, zmień nazwę konta na *john.smith01@mydomain.ovh*).

W karcie `Konta e-mail`{.action} Twojej platformy e-mail kliknij przycisk `...`{.action}, a następnie `Zmień`{.action}.

![e-mail-migracja](images/migration_platform04.png){.thumbnail}

#### Stwórz

Utwórz konto e-mail na nowym koncie w Twojej platformie E-mail Pro, Exchange lub MX Plan (w powyższym przykładzie utworzysz zatem *john.smith@mydomain.ovh* na nowej platformie)

W karcie `Konta e-mail`{.action} Twojej platformy kliknij przycisk `...`{.action} znajdujący się po prawej stronie docelowego konta e-mail, a następnie wybierz `Zmień`{.action}.

![e-mail-migracja](images/migration_platform05.png){.thumbnail}

#### Migracja

> [!warning]
> 
> Migracja zostanie przeprowadzona wyłącznie w przypadku danych przypisanych do konta e-mail (e-maile, kontakty, kalendarze, reguły skrzynki odbiorczej, etc.). Funkcje powiązane z Twoją platformą będą musiały zostać odtworzone na nowej platformie:
>
> - [Alias](/pages/web_cloud/email_and_collaborative_solutions/common_email_features/feature_redirections) 
> - [Uprawnienia](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/feature_delegation) 
> - [Grupy](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/feature_groups)
> - Kontakty zewnętrzne
> - [Stopka strony](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/feature_footers)

Przenieś konto e-mail "source" na konto Twojej nowej platformy, korzystając z naszego narzędzia [OMM](/links/web/omm) (OVHcloud Mail Migrator).

Aby uzyskać więcej informacji na temat narzędzia OMM, zapoznaj się z naszym przewodnikiem [Migracja kont e-mail przez OVHcloud Mail Migrator](/pages/web_cloud/email_and_collaborative_solutions/migrating/migration_omm).

![e-mail-migracja](images/migration_platform06.png){.thumbnail}

Czas migracji zależy od ilości danych, które chcesz przenieść na nowe konto. Może się on różnić od kilku minut do kilku godzin.

Po przeprowadzeniu migracji sprawdź, czy wszystkie Twoje dane znajdują się na stronie WWW pod linkiem [Webmail](/links/web/email).

Po przeprowadzeniu migracji możesz zachować lub usunąć konto źródłowe używając tymczasowej nazwy.

Jeśli chcesz go usunąć, przejdź do karty `Konta e-mail`{.action} Twojej pierwotnej platformy e-mail, kliknij przycisk `...`{.action}, a następnie `Zresetuj to konto `{.action}.

### Sprawdź lub zmodyfikuj konfigurację domeny

Na tym etapie Twoje konta e-mail muszą być migrowane i działać. Ze względów bezpieczeństwa sprawdź, czy konfiguracja Twojej domeny jest poprawna, sprawdzając w Panelu klienta.

Aby to zrobić, wybierz odpowiedni serwis E-mail Pro, Exchange lub Zimbra, a następnie przejdź do karty `Powiązane domeny`{.action} lub `Domeny`{.action} na swojej platformie. Sprawdź sekcję lub kolumnę `Diagnostic`{.action}.

![exchange](images/check_the_dns_records_associated_domains.png){.thumbnail}

> [!primary]
>
> Jeśli właśnie przeprowadziłeś migrację lub zmodyfikowałeś rekord DNS Twojej domeny, aktualizacja może potrwać kilka godzin, jeśli wyświetlenie się w [Panelu klienta OVHcloud](/links/manager).
>

Aby zmienić konfigurację, kliknij czerwony przycisk i wykonaj żądaną operację. Efekty modyfikacji domeny staną się widoczne po upływie 4-24 godzin ze względu na niezbędny czas propagacji.

### Korzystanie z migrowanych kont e-mail

Teraz możesz korzystać z migrowanych kont e-mail. W tym celu OVHcloud udostępnia aplikację online (_web app_) dostępną pod adresem [Webmail](/links/web/email). Wpisz dane dostępowe do Twojego konta e-mail.

Jeśli skonfigurowałeś jedno z kont przeniesionych na klienta poczty elektronicznej (na przykład: Outlook, Thunderbird), należy ponownie skonfigurować ustawienia. Dane do logowania do serwera OVHcloud zmieniły się po migracji.

> [!primary]
>
> Możesz również ręcznie przenieść konta e-mail do OVHcloud przy użyciu narzędzia [OVHcloud Mail Migrator (OMM)](/links/web/omm). W tym celu powinieneś posiadać informacje (użytkownik, hasło, serwery) dotyczące źródłowego e-maila i docelowego e-maila.
>

## Sprawdź również

[Zarządzanie kontaktami swoich usług](/pages/account_and_service_management/account_information/managing_contacts)

[Pierwsze kroki z ofertą E-mail Pro](/pages/web_cloud/email_and_collaborative_solutions/email_pro/first_config)

[Pierwsze kroki z ofertą Exchange](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/exchange_starting_hosted)

[Pierwsze kroki z ofertą Zimbra](/pages/web_cloud/email_and_collaborative_solutions/zimbra/getting_started_zimbra)

Dołącz do [grona naszych użytkowników](/links/community).