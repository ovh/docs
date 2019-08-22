---
title: 'Zarządzanie certyfikatem SSL na hostingu'
slug: certyfikaty-ssl-na-hostingu
excerpt: 'Dowiedz się, jak zarządzać certyfikatem SSL na Twoim hostingu OVH'
section: SSL
order: 1
---

**Ostatnia aktualizacja z dnia 12-07-2019**

## Wprowadzenie

Hosting umożliwia zarządzanie certyfikatem SSL. Certyfikat możesz uzyskać za pośrednictwem OVH lub we własnym zakresie poprzez import certyfikatu na Twój hosting. Kiedy certyfikat zostanie zainstalowany na hostingu, strona lub strony WWW uzyskają bezpieczne połączenie SSL i zaczną używać protokołu HTTPS. 

**Dowiedz się, jak zarządzać certyfikatem SSL na hostingu OVH.**


## Wymagania początkowe

- Posiadanie [hostingu OVH](https://www.ovh.pl/hosting/){.external}
- Zarejestrowanie co najmniej jednej [domeny](https://www.ovh.pl/domeny/){.external}
- Dostęp do [Panelu klienta](https://www.ovh.com/auth/?action=gotomanager){.external}, sekcja `Web`{.action}

## W praktyce

W ramach zarządzania certyfikatem SSL na Twoim hostingu możesz wykonać kilka operacji. Przejdź do opisu operacji, którą chcesz przeprowadzić.

- [Aktywacja certyfikatu SSL na hostingu](https://docs.ovh.com/pl/hosting/certyfikaty-ssl-na-hostingu/#aktywacja-certyfikatu-ssl-na-hostingu){.external}: po skorzystaniu z bezpłatnej lub płatnej oferty od OVH lub imporcie certyfikatu SSL możesz aktywować certyfikat na Twoim hostingu.

- [Aktywacja SSL w opcji MultiSite](https://docs.ovh.com/pl/hosting/certyfikaty-ssl-na-hostingu/#aktywacja-ssl-w-opcji-multisite){.external}: jeśli wykupiona przez Ciebie usługa lub Twój certyfikat SSL dają taką możliwość, Twoje strony podpięte w opcji MultiSite mogą korzystać z bezpiecznego połączenia SSL.

- [Ponowne wygenerowanie certyfikatu SSL na hostingu](https://docs.ovh.com/pl/hosting/certyfikaty-ssl-na-hostingu/#ponowne-wygenerowanie-certyfikatu-ssl-na-hostingu){.external}: umożliwia odnowienie certyfikatu SSL Twojego hostingu, o ile aktywowałeś wcześniej certyfikat na kilku stronach podpiętych w opcji MultiSite. 

- [Usunięcie certyfikatu SSL z hostingu](https://docs.ovh.com/pl/hosting/certyfikaty-ssl-na-hostingu/#usuniecie-certyfikatu-ssl-z-hostingu){.external}: umożliwia usunięcie certyfikatu SSL z Twojego hostingu. Operacja ta może być jednak ryzykowna, jeśli posiadasz strony WWW używające tego certyfikatu. 

### Aktywacja certyfikatu SSL na hostingu 

Twój hosting umożliwia uruchomienie [certyfikatu SSL w zależności od potrzeb](https://www.ovh.pl/ssl/){.external}:

- bezpłatny certyfikat SSL Let's Encrypt [zawarty w ofercie kompatybilnego hostingu](https://www.ovh.pl/ssl/){.external};
- płatny certyfikat SSL [w opcji z kompatybilnym hostingiem](https://www.ovh.pl/ssl/){.external};
- import certyfikatu SSL uzyskanego we własnym zakresie.

Przed rozpoczęciem operacji zaloguj się do [Panelu klienta](https://www.ovh.com/auth/?action=gotomanager){.external}, kliknij `Hosting`{.action} na pasku usług po lewej stronie, po czym wybierz nazwę odpowiedniego hostingu. Następnie przejdź do sekcji `Informacje ogólne`{.action}. W zakładce „Certyfikat SSL” powinna pojawić się informacja „Nie” wskazująca, że na Twoim hostingu nie został zainstalowany żaden certyfikat SSL. Kliknij trzy kropki obok napisu „Certyfikat SSL”, a następnie kliknij `Zamów certyfikat SSL`{.action}.

Jeśli pojawi się informacja „Tak”, oznacza to, że certyfikat SSL jest już zainstalowany i skonfigurowany na hostingu. Nie będziesz mógł więc zamówić nowego, dopóki na hostingu będzie zainstalowany poprzedni.

![managessl](images/manage-ssl-step1.png){.thumbnail}

W oknie, które się pojawi wybierz certyfikat SSL, który chcesz zamówić. Nie wszystkie rozwiązania wymienione powyżej mogą być dostępne. Zależy to od wykupionego przez Ciebie [pakietu hostingowego](https://www.ovh.pl/hosting/){.external} lub konfiguracji. Po wybraniu opcji kliknij `Dalej`{.action}.

![managessl](images/manage-ssl-step2.png){.thumbnail}

W zależności od wybranego rozwiązania mogą pojawić się dodatkowe etapy:

- **jeśli wybrałeś bezpłatny certyfikat SSL**: niepotrzebne będzie żadne dodatkowe działanie, z wyjątkiem sytuacji, w której jakiś element techniczny uniemożliwia aktywację certyfikatu SSL (w Panelu klienta wyświetli się wówczas stosowna informacja zawierająca listę elementów, które powinieneś zweryfikować) lub potwierdzenie, że Twoja domena może uzyskać certyfikat SSL. W takim przypadku otrzymasz ostrzeżenie wraz z instrukcją postępowania;

- **jeśli wybrałeś płatny certyfikat SSL**: wykonaj kolejne kroki zamówienia, które się wyświetlają. W przypadku niektórych typów certyfikatów SSL może być wymagana specjalna weryfikacja. Możesz otrzymać jedną lub kilka wiadomości e-mail w związku z tym etapem. Postępuj zgodnie z instrukcjami zawartymi w przesłanych wiadomościach, aż do zakończenia instalacji;

- **jeśli wybrałeś import certyfikatu SSL**: wprowadź informacje w odpowiednich polach, które się wyświetlają. Wykorzystaj w tym celu informacje podane przez dostawcę, który wystawił Ci certyfikat. 

Wdrożenie certyfikatu może zająć od kilku minut do kilku dni, w zależności od typu wybranego certyfikatu. Aby sprawdzić, czy certyfikat SSL jest zainstalowany na Twoim hostingu, przejdź do zakładki `Informacje ogólne`{.action} w Twoim Panelu klienta. Informacja „Tak” powinna pojawić się poniżej sekcji „Certyfikat SSL”. 

![managessl](images/manage-ssl-step4.png){.thumbnail}

Po zainstalowaniu certyfikatu kontynuuj operację [Aktywacja SSL na stronie podpiętej w opcji MultiSite](https://docs.ovh.com/pl/hosting/certyfikaty-ssl-na-hostingu/#aktywacja-ssl-w-opcji-multisite){.external}, co pozwoli Ci upewnić się, czy strona lub strony korzystają z aktywnego bezpiecznego połączenia SSL.

### Aktywacja SSL w opcji MultiSite

W zależności od [certyfikatu SSL](https://www.ovh.pl/ssl/){.external}, który zamówiłeś, możesz aktywować bezpieczne połączenie SSL na jednej lub wielu stronach podpiętych w opcji MultiSite. Zaloguj się do [Panelu klienta](https://www.ovh.com/auth/?action=gotomanager){.external}, kliknij `Hosting`{.action} na pasku usług po lewej stronie, następnie wybierz odpowiedni hosting. Przejdź następnie do zakładki `MultiSite`{.action}.

Tabela, która się wyświetla zawiera wszystkie nazwy domen dodanych do Twojego hostingu. W kolumnie „SSL” możesz sprawdzić stan aktywacji bezpiecznego połączenia SSL dla Twoich stron podpiętych w opcji MultiSite. 

![managessl](images/manage-ssl-step5.png){.thumbnail}

Mogą pojawić się wówczas trzy statusy:

|Statusy|Opis |
|---|---|
|Aktywny|Wskazuje, że certyfikat SSL jest już aktywny dla tej strony podpiętej w opcji MultiSite. Jeśli Twoja strona WWW nie używa protokołu HTTPS, skorzystaj z instrukcji zawartych w dokumentacji OVH [Aktywacja protokołu HTTPS na stronie WWW za pomocą certyfikatu SSL](https://docs.ovh.com/pl/hosting/aktywacja-https-ssl-na-stronie-WWW/){.external}.|
|Do wygenerowania|Wskazuje, że certyfikat SSL został aktywowany dla danej strony podpiętej w opcji MutiSite, ale nie jest jeszcze aktywny. Odnów certyfikat SSL dla Twojego hostingu, aby uwzględniał nowe domeny.|
|Wyłączony|Wskazuje, że certyfikat SSL nie jest aktywny dla danej strony podpiętej w opcji MultiSite. Aby go aktywować, postępuj zgodnie z instrukcjami podanymi poniżej.|

Aby aktywować certyfikat SSL na stronie podpiętej w opcji MultiSite, kliknij na ikonkę koła zębatego po prawej stronie, po czym kliknij `Modyfikuj`{.action}. W oknie, które się pojawi, zaznacz kratkę `SSL`{.action}, następnie wykonaj kolejne kroki, aż do zatwierdzenia modyfikacji.

Po zatwierdzeniu, status bezpiecznego połączenia SSL dla strony podpiętej w opcji MultiSite zaktualizuje się w ciągu kilku sekund, po czym zostaje wyświetlony komunikat „Do wygenerowania”. Powtórz operację, jeśli chcesz aktywować SSL na innych stronach podpiętych w opcji MultiSite. Możesz kontynuować czynności aż do operacji [Ponowne wygenerowanie certyfikatu SSL na hostingu](https://docs.ovh.com/pl/hosting/certyfikaty-ssl-na-hostingu/#ponowne-wygenerowanie-certyfikatu-ssl-na-hostingu){.external}.

![managessl](images/manage-ssl-step6.png){.thumbnail}

### Ponowne wygenerowanie certyfikatu SSL na hostingu

> [!primary]
>
> Operacja ta dotyczy jedynie certyfikatów umożliwiających aktywację bezpiecznego połączenia SSL na kilku stronach podpiętych w opcji MultiSite.
>

Po aktywowaniu bezpiecznego połączenia SSL na jednej lub kilku stronach podpiętych w opcji MultiSite status wskazuje: „Do wygenerowania”. Operacja ta konieczna jest, aby dodać do certyfikatu SSL na Twoim hostingu wybraną domenę lub domeny. 

Zaloguj się do [Panelu klienta](https://www.ovh.com/auth/?action=gotomanager){.external}, kliknij `Hosting`{.action} na pasku usług po lewej stronie, po czym wybierz odpowiedni hosting. Następnie przejdź do sekcji `Informacje ogólne`{.action}. Kliknij trzy kropki obok napisu „Certyfikat SSL”, a następnie kliknij `Wygeneruj ponownie certyfikat SSL`{.action}.

![managessl](images/manage-ssl-step7.png){.thumbnail}

Zapoznaj się z informacjami w oknie, które się wyświetli, po czym kliknij `Zatwierdź`{.action}. Zaczekaj następnie, aż certyfikat SSL zostanie odnowiony. Może to potrwać kilka godzin.

Pamiętaj jednak, że Let's Encrypt, organizacja dostarczająca certyfikat SSL zawarty w Twoim hostingu, [ogranicza liczbę dopuszczalnych odnowień certyfikatu do pięciu tygodniowo](https://letsencrypt.org/docs/rate-limits/){.external}. Zalecamy ostrożność, gdyż zbyt duża liczba odnowień w krótkim czasie może spowodować czasową blokadę możliwości odnowienia certyfikatów.

![managessl](images/manage-ssl-step8.png){.thumbnail}

### Usunięcie certyfikatu SSL na hostingu

Możesz usunąć certyfikat SSL aktualnie zainstalowany na Twoim hostingu. Jednak przed wykonaniem tej operacji **radzimy upewnić się, czy usunięcie certyfikatu nie zakłóci dostępności Twoich stron WWW**. Pamiętaj, że użytkownikom odwiedzającym Twoją stronę będzie wyświetlał się błąd bezpieczeństwa, jeśli będą mieli dostęp do strony WWW poprzez HTTPS, ale nie korzystającej z bezpiecznego połączenia SSL. 

Ponieważ weryfikacja ta jest ściśle związana z ustawieniami Twojej strony WWW, w przypadku trudności zalecamy skorzystanie z pomocy webmastera. Niestety firma OVH nie będzie mogła udzielić wsparcia w tym zakresie. 

Gdy będziesz gotowy do usunięcia certyfikatu SSL zaloguj się do [Panelu klienta](https://www.ovh.com/auth/?action=gotomanager){.external}, kliknij `Hosting`{.action} na pasku usług po lewej stronie, po czym wybierz nazwę odpowiedniego hostingu. Następnie przejdź do sekcji`Informacje ogólne`{.action}. Kliknij trzy kropki obok napisu „Certyfikat SSL”, a następnie kliknij `Usuń certyfikat SSL`{.action}.

Na stronie, która się wyświetli, zatwierdź usunięcie certyfikatu. Certyfikat zostanie usunięty maksymalnie w ciągu kilku godzin. 

![managessl](images/manage-ssl-step9.png){.thumbnail}

## Sprawdź również

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.