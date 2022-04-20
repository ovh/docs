---
title: Zarządzanie kontaktami swoich usług
slug: zarzadzanie_kontaktami
excerpt: 'Dowiedz się, jak zarządzać kontaktami dla Twoich usług OVHcloud'
section: Pierwsze kroki
order: 6
---

**Ostatnia aktualizacja z dnia 13-12-2021** 

## Wprowadzenie

Większość usług tworzonych w OVHcloud jest zarządzana przez wiele kontaktów. Każdy z tych kontaktów jest przypisany do identyfikatora klienta. 

**Dowiedz się, jak zarządzać kontaktami Twoich usług OVHcloud.**

> [!warning]
>
> OVHcloud udostępnia różnorodne usługi, jednak to Ty odpowiadasz za ich konfigurację i zarządzanie nimi. Ponosisz więc odpowiedzialność za ich prawidłowe funkcjonowanie.
>
> Oddajemy w Twoje ręce niniejszy przewodnik, którego celem jest pomoc w wykonywaniu bieżących zadań. W przypadku trudności zalecamy skorzystanie z pomocy wyspecjalizowanego webmastera lub kontakt z producentem oprogramowania. Niestety firma OVH nie będzie mogła udzielić wsparcia w tym zakresie. Więcej informacji znajduje się w sekcji [Sprawdź również](#gofurther) ten przewodnik.
>

## Definicja

Istnieją trzy rodzaje kontaktów:

- **Kontakt administracyjny** zarządza kwestiami administracyjnymi i technicznymi usługi. Ma uprawnienia do modyfikowania wszystkich kontaktów i może wprowadzać zmiany w informacjach właściciela usługi, takich jak nazwy domeny.
- **Kontakt techniczny** zarządza wyłącznie kwestiami technicznymi usługi.
- **Kontakt księgowy** zarządza wyłącznie płatnościami usługi, w tym przelewami. Kontakt ten otrzymuje zwłaszcza powiadomienia o odnowieniu. 

Identyfikator klienta to osobisty login, który otrzymujesz e-mailem podczas tworzenia konta klienta w OVHcloud. Najczęściej składa się on z dwóch liter i następujących po nich cyfr. Na przykład: **xx11111-ovh**. Podczas zamawiania usług identyfikator ten jest do nich przypisany jako kontakt.

![Contact management](images/managing_contacts_scheme.png){.thumbnail}


## Wymagania początkowe

- Dostęp do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external}.
- Dostęp do adresu e-mail podanego w profilu.
- Wystarczające uprawnienia dotyczące danej usługi.
- Posiadanie identyfikatora klienta nowego kontaktu (dla którego wprowadzasz zmianę).
- Nowy kontakt musi mieć dostęp do adresu e-mail podanego w jego profilu.
- Stary i nowy kontakt księgowy muszą mieć uregulowane płatności.

## W praktyce

### Dostęp do zarządzania kontaktami <a name="gestion_des_contacts"></a>

Zaloguj się do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external}, kliknij nazwę powiązaną z Twoim identyfikatorem klienta na pasku menu w prawym górnym rogu, a następnie kliknij pozycję `Zarządzanie kontaktami`{.action}.

![Contact management](images/hubcontacts.png){.thumbnail}

Pojawi się tabela, która umożliwia wyświetlenie różnych usług, dla których Twój identyfikator klienta jest podany jako kontakt.

![Contact management](images/managing_contacts_02.png){.thumbnail}

### Zmiana kontaktów usługi

Na stronie zarządzania kontaktami kliknij przycisk `…`{.action} po prawej stronie usługi, którą chcesz zmienić, a następnie kliknij `Zmień kontakty`{.action}. Podaj nowy kontakt lub nowe kontakty, a następnie kliknij przycisk `Zatwierdź`{.action}.

![Contact management](images/managing_contacts_03.png){.thumbnail}

![Contact management](images/managing_contacts_04.png){.thumbnail}

Do kontaktów, których dotyczy ten proces modyfikacji, zostanie wysłany e-mail.

> [!warning]
>
> Zmiana kontaktu nie zostanie dozwolona, jeśli stare lub nowe konto klienta posiada jedną lub więcej niezapłaconych faktur.
>

#### Jestem kontaktem administracyjnym <a name="administrateur"></a>

Jako administrator możesz przeprowadzać różne działania wobec kontaktów dla usługi, na przykład:

- Wyznaczać nowy kontakt do zarządzania technicznego i/lub księgowego. Konieczne jest potwierdzenie z Twojej strony oraz ze strony nowego kontaktu. Stary kontakt otrzyma e-mail informujący o zmianie, gdy ta zostanie zakończona.
- Przywracać zarządzanie techniczne i/lub księgowe. Ten wniosek wymaga zatwierdzenia. Stary kontakt otrzyma e-mail informujący o zmianie. 
- Wyznaczać nowy kontakt administracyjny na swoje miejsce. Konieczne jest potwierdzenie z Twojej strony oraz ze strony nowego kontaktu. 

#### Jestem kontaktem technicznym

Możesz wyznaczyć wyłącznie inny kontakt techniczny na Twoje miejsce. Konieczne jest potwierdzenie z Twojej strony oraz ze strony nowego kontaktu technicznego.

#### Jestem kontaktem księgowym <a name="technique"></a>

Możesz wyznaczyć wyłącznie inny kontakt księgowy na swoje miejsce. Konieczne jest potwierdzenie z Twojej strony oraz ze strony nowego kontaktu księgowego.

### Zatwierdzenie, odrzucenie lub śledzenie zmiany kontaktu

Aby śledzić bieżące wnioski i zarządzać nimi, kliknij kartę `Moje wnioski`{.action}. Tutaj możesz zaakceptować lub odrzucić wniosek.

![Contact management](images/managing_contacts_05.png){.thumbnail}

W tym celu musisz mieć kod potwierdzający (zwany również tokenem) zawarty w e-mailu z prośbą o zatwierdzenie lub odrzucenia wniosku.

> [!primary]
> Ten jednorazowy kod jest przypisany do konkretnej osoby i różni się dla obu kontaktów.

Otrzymany e-mail zawiera również link prowadzący bezpośrednio do strony umożliwiającej zatwierdzenie lub odrzucenie wniosku. Gdy klikniesz ten link, kod potwierdzający (token) zostanie automatycznie wstępnie uzupełniony.

Jeśli jeden z kontaktów nie otrzymał e-maila, może to na przykład oznaczać, że adres kontaktowy podany w profilu jest nieaktualny. Można to sprawdzić w swoim profilu, w razie potrzeby zmienić adres, a następnie ponownie poprosić o przesłanie e-maila, klikając przycisk `Prześlij ponownie wniosek`{.action}.

![Contact management](images/managing_contacts_06.png){.thumbnail}

Jeśli tylko jeden kontakt zatwierdzi zmianę, pojawi się komunikat informujący, że wniosek wciąż oczekuje na zatwierdzenie przez drugi kontakt. Gdy jeden z kontaktów zatwierdzi wniosek, informacje wyświetlane w [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external} zaktualizują się w ciągu kilku minut.

![Contact management](images/managing_contacts_007.png){.thumbnail}

Zmiana kontaktu zostanie wykonana w ciągu kilku minut od zatwierdzenia przez oba kontakty wniosku. Następnie otrzymają e-mail informujący ich o pomyślnym rozpatrzeniu wniosku.

### Przykład: zarządzanie stroną www na webmasterze

Właśnie zamówiłeś abonament OVHcloud umożliwiający utworzenie własnego [sklepu internetowego](https://www.ovhcloud.com/pl/web-hosting/ecommerce-website/). Skontaktowałeś się z jednym z naszych [partnerów](https://partner.ovhcloud.com/pl/directory/) i poprosił Cię o prawa dostępu do Twoich usług OVHcloud, aby rozpocząć tworzenie Twojej strony WWW.

> [!warning]
>
> Odradzamy udzielenie jakiejkolwiek osobie trzeciej danych dostępowych do Twojego [Panelu klienta](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl).
>

W takiej sytuacji daj swojemu dostawcy prawo do [kontaktu technicznego](#gestion_des_contacts) na Twoim hostingu OVHcloud. Dostęp do strony pozwoli mu na wykonanie operacji niezbędnych do uruchomienia strony (dodanie domeny lub subdomeny do strony podpiętej w opcji MultiSite, zainstalowanie modułu za 1 kliknięciem, zmiana hasła FTP lub bazy danych, utworzenie certyfikatu SSL, itp.).

Jeśli Twoja domena nie jest powiązana z Twoim hostingiem i chcesz powierzyć niezbędne operacje webmasterowi, daj mu również prawo do "[kontaktu technicznego](#gestion_des_contacts)" w [strefie DNS](https://docs.ovh.com/pl/domains/hosting_www_jak_edytowac_strefe_dns/) domeny.

Prawo "[kontakt techniczny](#gestion_des_contacts)" nie pozwala na zmianę kontaktów administratora lub fakturowanie usługi. Dzięki niemu webmaster nie będzie miał dostępu do faktur lub zamówień, do odnowienia usług ani do sposobów płatności. Nie pozwoli mu również na [przeniesienie domeny](https://docs.ovh.com/pl/domains/transfer_wychodzacy_domeny_globalnej_lub_geograficznej/) z innego dostawcy lub na [zmianę właściciela](https://docs.ovh.com/pl/domains/zmiana_wlasciciela_domeny_globalnej_com_net_org_info_biz/).

Jako [kontakt administracyjny](#administrateur) będziesz mógł w każdym momencie pobrać "[kontakt techniczny](#technique)" Twojej usługi.

### Przypadek właściciela domeny

Podczas zamawiania usługi OVHcloud zdefiniowałeś dla niej właściciela. Właściciel może, jeśli nie ma dostępu do kont OVHcloud powiązanych z usługą, którą chce odzyskać, przekazać własność domeny innej osobie lub odzyskać administrację domeny, stosując następujące procedury:

[Zmiana właściciela usługi](https://www.ovh.com/cgi-bin/pl/procedure/procedureChangeOwner.cgi)

[Zmianę kontaktów: administracyjnego, technicznego oraz księgowego dla Państwa domeny](https://www.ovh.com/fr/cgi-bin/pl/procedure/procedureChangeContacts.cgi)

Każda procedura jest monitorowana za pomocą wiadomości e-mail i konieczna będzie weryfikacja tożsamości. Szczegółowe instrukcje będą udzielane przez cały czas trwania procedury.

## Sprawdź również

W przypadku wyspecjalizowanych usług (pozycjonowanie, rozwój, etc.) skontaktuj się z [partnerami OVHcloud](https://partner.ovhcloud.com/pl/directory/).

Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i użytkowania Twoich rozwiązań OVHcloud, sprawdź naszą [ofertę pomocy](https://www.ovhcloud.com/pl/support-levels/).

Przyłącz się do społeczności naszych użytkowników na stronie [https://community.ovh.com/en/](https://community.ovh.com/en/)
