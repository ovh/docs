---
title: Jak odnawiać usługi OVHcloud
excerpt: Dowiedz się, jak zarządzać usługami i odnawianiem usług w Panelu klienta
updated: 2024-01-26
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk "Zgłóś propozycję modyfikacji" na tej stronie.
>

## Wprowadzenie

Menu **Moje usługi** w Panelu klienta OVHcloud umożliwia sprawdzenie statusu usług, ich odnowienie, zmianę typu odnowienia, regulowanie faktur lub antycypowanie płatności.

Z tego przewodnika dowiesz się:

- [Zrozumieć różnice między automatycznym a ręcznym odnowieniem](#auto-vs-manual)
- [Określ, jaki typ odnowienia jest stosowany w Twoich usługach](#renewal-type)
- [Poznaj dostępne operacje dla każdej usługi](#actions)
- [Sprawdź, które operacje mogą być pogrupowane w kilka usług](#group-actions)

**Dowiedz się, jak zarządzać usługami i ich odnawianiem w Panelu klienta OVHcloud.**

> [!primary]
>
> Niektóre elementy tego przewodnika mogą się różnić lub mogą nie mieć zastosowania w Twojej sytuacji, w zależności od miejsca pobytu, lokalnych przepisów i wykorzystywanych rozwiązań. Aby uzyskać szczegółowe informacje, sprawdź zapisy w umowach [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl): kliknij nazwę w prawym górnym rogu ekranu, kliknij `Produkty i usługi`{.action}, a następnie zakładkę `Regulaminy`{.action}.
>

<iframe class="video" width="560" height="315" src="https://www.youtube-nocookie.com/embed/dfpPCa0mUyo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Wymagania początkowe

- Dostęp do Panelu [klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl);
- Posiadanie aktywnych usług OVHcloud;
- Posiadanie [kontaktu księgowego](/pages/account_and_service_management/account_information/managing_contacts#definicja) za usługi OVHcloud.
- Posiadanie ważnego sposobu płatności na koncie OVHcloud. Zapoznaj się z przewodnikiem "[Zarządzanie sposobami płatności](/pages/account_and_service_management/managing_billing_payments_and_services/manage-payment-methods)".

<a name="auto-vs-manual"></a>

## Rodzaje odnowienia

**Kliknij jedną z poniższych kart.**

> [!tabs]
> **Automatyczne odnawianie**
>>
>> Podczas rejestracji usługi są domyślnie ustawione na **automatyczne odnawianie**. Dzięki tej opcji masz pewność, że Twoje usługi będą automatycznie odnawiane z dniem wygaśnięcia abonamentu.
>> Przykład: zamówiłeś hosting www 15 stycznia 2024. Zostanie on automatycznie odnowiony 15 stycznia 2025 r., a kwota odpowiadająca jego rocznemu abonamentowi zostanie pobrana z Twojego domyślnego sposobu płatności.
>>
>> Jeśli masz ustawiony sposób płatności w Panelu klienta, należności za faktury będą pobierane automatycznie.
>> Jeśli nie masz zarejestrowanego żadnego [sposobu płatności](/pages/account_and_service_management/managing_billing_payments_and_services/manage-payment-methods), wyślemy do Ciebie e-mailem fakturę. Wówczas wystarczy ją opłacić online.
>>
>> W przypadku usług z częstotliwością automatycznego odnawiania większą niż 1 miesiąc (3 miesiące, 6 miesięcy, 12 miesięcy), otrzymasz przypomnienie e-mailem miesiąc przed datą automatycznego odnowienia. Podsumowanie będzie wkrótce widoczne.
>>Jeśli nie chcesz przedłużać którejś z usług, wystarczy, że [zrezygnujesz z niej w Panelu klienta](/pages/account_and_service_management/managing_billing_payments_and_services/how_to_cancel_services).
>>
>> **Uwaga**, brak sposobu płatności na Twoim koncie nie powoduje automatycznego zakończenia usługi. Aby zrezygnować z usług, zapoznaj się z naszym przewodnikiem "[Jak zrezygnować z usług OVHcloud](/pages/account_and_service_management/managing_billing_payments_and_services/how_to_cancel_services)".
>>
> **Odnowienie ręczne**
>>
>> Jeśli nie chcesz automatycznego odnawiania i tym samym automatycznego pobrania środków, możesz zmienić typ odnowienia dla niektórych produktów (Domeny, Hosting, VPS, Serwery dedykowane) i włączyć dla nich odnowienie **manuel**.
>>
>> Tryb odnowienia może być przydatny:
>>
>> - jeśli nie masz pewności, czy chcesz zachować usługę po terminie wygaśnięcia;
>> - jeśli nie chcesz, aby należności za faktury były pobierane automatycznie za pomocą ustawionego sposobu płatności.
>>
>> Jeśli wybierzesz odnowienie ręczne, przed terminem wygaśnięcia otrzymasz kilka wiadomości e-mail z przypomnieniem. W każdej znajdziesz link pozwalający na odnowienie wygasających usług online.
>> Płatności będzie można również dokonać w prosty sposób z Panelu klienta.
>>
>> **Uwaga**, jeśli nie opłacisz usługi odnawianej ręcznie, zostanie ona **zawieszona** w dniu jej wygaśnięcia, a następnie **usunięta** po kilku dniach.
>> Natomiast jeśli nie chcesz przedłużać tej usługi, nie musisz zlecać rezygnacji z niej.

## W praktyce

Zaloguj się do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl).<br>
Kliknij swoją nazwę w prawym górnym rogu i wybierz `Produkty i usługi`{.action}.

![produkty i usługi](images/products-services-en.png){.thumbnail}

### Wyświetl typ odnowienia <a name="renewal-type"></a>

Na stronie **Moje usługi** znajduje się tabela wyszczególniająca Twoje usługi OVHcloud. Znajdziesz tam nazwy swoich usług, ich rodzaj, dostępność (Domyślny składnik `aktywów`), status (rodzaj odnowienia, działanie do przeprowadzenia itd.), kolejną datę odnowienia lub rozwiązania umowy oraz przycisk `...`{.action} przeznaczony do działań możliwych do przeprowadzenia dla każdej usługi.

![Moje usługi](images/my-services-en.png){.thumbnail}

> [!success]
> Narzędzia do sortowania, filtrowania i wyszukiwania są dostępne nad tabelą.
> Możesz sortować kolumny w kolejności rosnącej lub malejącej, wyszukiwać nazwy usług lub zastosować filtr, aby wyświetlić tylko niektóre usługi zgodnie z wybranymi kryteriami.
>
> Kryteria filtrowania zostaną wyświetlone nad tabelą. Oto przykład filtra umożliwiającego wyświetlenie nazw domen, których odnowienie jest wykonywane ręcznie i których data zakończenia abonamentu wygasa przed miesiącem.
>
> ![manageautomaticrenewal](images/filters-en.png){.thumbnail}

<a name="actions"></a>

### Operacje dla każdej usługi

> [!primary]
>
> Niektóre działania mogą nie być dostępne w zależności od tego, czy dana usługa kwalifikuje się do odnowienia ręcznego.
>

Po prawej stronie usługi kliknij przycisk`...`{.action} w kolumnie `Filtruj`, a następnie wybierz odpowiednią akcję.

![menu actions](images/actions-en.png){.thumbnail}

**Każda operacja została wyszczególniona w jednej z poniższych kart.**

> [!tabs]
> **Skonfiguruj odnowienie**
>>
>> ![Skonfiguruj odnowienie](images/configure-renewal-en.png){.thumbnail}
>>
>> Kliknij na akcję `Skonfiguruj odnowienie`{.action}. W zależności od wybranej usługi, możesz ustawić odnawianie ręczne lub wybrać częstotliwość odnawiania automatycznego. W razie potrzeby będziesz mógł wybrać rodzaj i częstotliwość odnowienia.
>>
>> ![Skonfiguruj odnowienie](images/configure-renew-en.png){.thumbnail}
>>
>> W zależności od dokonanego wyboru, zostaną określone przyszłe daty pobrania środków, sposób płatności, który zostanie wykorzystany oraz data wygaśnięcia usługi.
>>
> **Prognoza płatności**
>>
>>![antycypowanie płatności](images/forward-payment-en.png){.thumbnail}
>>
>> To działanie jest dostępne w przypadku usług z opcją **automatycznego odnowienia**.
>>
>> Zostaniesz przekierowany do interfejsu płatności online.
>>
>> Możesz odnowić te usługi w dowolnym momencie przed ich wygaśnięciem, a także wybrać czas ich odnowienia.
>> W tym przypadku zamówiony czas ważności zostanie dodany do bieżącego czasu ważności. Nie tracisz pozostałego czasu ważności usługi.
>>
> **Rezygnacja z umowy terminowej**
>>
>> ![Zrezygnuj](images/cancel-en.png){.thumbnail}
>>
>> To działanie jest dostępne w przypadku usług z opcją **automatycznego odnowienia**.
>>
>> Po wybraniu tej operacji automatyczne odnawianie i pobieranie środków zostanie wyłączone dla wybranej usługi.
>>
>> Aby uzyskać więcej informacji na temat rezygnacji z usług OVHcloud, postępuj zgodnie z instrukcjami zawartymi w przewodniku "**[Jak zrezygnować z usług OVHcloud ](/pages/account_and_service_management/managing_billing_payments_and_services/how_to_cancel_services)**".
>>
> **Odnów usługę**
>>
>> ![Odnów usługę](images/renew-service-en.png){.thumbnail}
>>
>> To działanie jest dostępne tylko w przypadku usług wymagających odnowienia **odnowienie ręczne**.
>>
>> Zostaniesz wówczas przekierowany do interfejsu płatności online.
>> Możesz odnowić te usługi w dowolnym momencie przed ich wygaśnięciem, a także wybrać czas ich odnowienia.
>>
> **Ureguluj należności**
>>
>> ![Zapłać fakturę](images/pay-bill-en.png){.thumbnail}
>>
>> Pojawi się informacja `Faktura do zapłaty`, gdy faktura oczekuje na płatność i gdy:
>>
>> - posiadasz usługi z opcją automatycznego odnawiania;
>> - nie masz ustawionego sposobu płatności umożliwiającego pobranie środków w celu uregulowania faktur.
>>
>> Wystarczy, że wybierzesz działanie `Opłać fakturę`{.action}, które przekieruje Cię do platformy płatności online.
>>

<a name="group-actions"></a>

### Działania zbiorcze

Działania zbiorcze na usługach możesz wykonać, zaznaczając kilka usług w tabeli i klikając przycisk `Operacje`{.action}.

![operacje zbiorcze](images/batch-actions-en.png){.thumbnail}

W poniższej tabeli przedstawiono możliwe działania zbiorcze.

|Możliwe działania|Opis|
|---|---|
|Odnów|Umożliwia odnowienie kilku usług na raz. Zostaniesz przekierowany na stronę, na której możesz wybrać żądany czas trwania odnowienia i będziesz mógł dokonać płatności online.|
|Wyłącz płatność automatyczną|Powoduje wyłączenie automatycznego odnawiania kilku usług na raz. Jeśli co najmniej jedna usługa nie kwalifikuje się do odnawiania ręcznego, zostanie to wskazane podczas zatwierdzania.|
|Włącz płatność automatyczną|Powoduje włączenie automatycznego odnawiania kilku usług na raz. Zaktualizowane zostaną tylko te usługi, które się do tego kwalifikują.|
|Eksportuj w formacie CSV|Wyeksportuj do pliku csv wszystkie usługi i daty ich wygaśnięcia.|
|Ustaw daty odnowienia|Opcja pozwala na ustawienie dat wygaśnięcia usług na ten sam dzień kalendarzowy. Zaktualizowane zostaną tylko te usługi, które się do tego kwalifikują.|

## FAQ

> [!faq]
>
> Gdzie znajdę mój identyfikator klienta (NIC) OVHcloud?
>> Wyświetli się on w Panelu klienta, klikając Twoją nazwę w prawym górnym rogu. Jest również widoczny w prawym górnym rogu wszystkich faktur. Jest on również podany w e-mailu z potwierdzeniem utworzenia konta, w wiadomościach z potwierdzeniem zamówienia lub odnowienia usług, a także w powiadomieniach dotyczących logowania do konta.
> Nie mogę zalogować się na moje konto OVHcloud, aby odnowić usługi, co zrobić?
>> Zapoznaj się z częścią "[Co zrobić, jeśli nie mogę się zalogować?](/pages/account_and_service_management/account_information/ovhcloud-account-login#login-failure), jeśli nie udało się-nie udało-mi-się-zalogować)" naszego przewodnika "[Logowanie do Panelu klienta OVHcloud](/pages/account_and_service_management/account_information/ovhcloud-account-login)".
> Chcę włączyć automatyczne odnawianie, ale otrzymuję komunikat o błędzie. Co powinienem zrobić?
>> Aby włączyć automatyczne odnawianie usług, musisz mieć dodany ważny sposób płatności na koncie OVHcloud. Jeśli tak się nie stało lub jeśli sposób płatności wygasł, w Panelu klienta pojawi się komunikat o błędzie podczas prób włączenia opcji automatycznego odnowienia. Zapoznaj się z przewodnikiem "[Zarządzanie sposobami płatności](/pages/account_and_service_management/managing_billing_payments_and_services/manage-payment-methods)", aby sprawdzić lub dodać sposób płatności.
> Mój sposób płatności utracił ważność. W jaki sposób dodać nowy sposób płatności?
>> Sprawdź przewodnik "[Zarządzanie sposobami płatności](/pages/account_and_service_management/managing_billing_payments_and_services/manage-payment-methods)". Zanim usuniesz stary sposób płatności, dodaj nowy, ważny sposób płatności do Twojego konta OVHcloud.
> Zapomniałem odnowić swoją domenę na czas. Co mam zrobić?
>> Sprawdź status domeny za pomocą narzędzia [Whois dla domeny](https://www.ovhcloud.com/pl/domains/whois/).
>> Jeśli jest to domena globalna (.com, .org. net, itp.), pozostaje ona "zarezerwowana" przez okres "*grace*" (około 7 dni), a następnie przez okres "*redemption*" (około 35 do 40 dni dodatkowych). Terminy te są zmienne i zależą od rozszerzenia oraz reguł, którym podlega rejestr rozszerzający. Tylko Ty, w tych dwóch okresach, będziesz mógł odnowić domenę.
>> W okresie karencji będziesz mógł go odnowić w Panelu klienta, postępując zgodnie z instrukcjami zawartymi w tym przewodniku.
>> W okresie kwarantanny domena nie jest już zarządzana przez OVHcloud. Odnowienie w Panelu klienta wiąże się z dodatkowymi kosztami (które różnią się w zależności od rozszerzenia).
>> Po zakończeniu okresu kwarantanny domena wchodzi w fazę usuwania, która może trwać kilka dni. Po tym czasie domena zostaje ponownie przypisana do puli domen publicznych. Jeśli chcesz pobrać informacje o używaniu domeny, zalecamy użycie narzędzia [Whois](https://www.ovhcloud.com/pl/domains/whois/) do regularnego sprawdzania jej dostępności.
> Nie chcę odnawiać mojej domeny, chcę ją przenieść do innego operatora niż OVHcloud. Jak to zrobić?
>> Zapoznaj się z instrukcjami zawartymi w przewodniku "[Transfer_domeny do innego operatora](/pages/web_cloud/domains/transfer_outgoing_domain)".
> Nie chcę już automatycznego przelewu, ale nie chcę rezygnować z usługi. Co powinienem zrobić?
>> Jeśli Twoja usługa na to pozwala, możesz skorzystać z działania [Skonfiguruj odnowienie](#actions) i wybrać odnowienie ręczne.
> Odnowiłem usługę na 12 miesięcy. Czy mogę cofnąć wybór?
>> Po odnowieniu usługi nie można jej anulować. Możesz jednak wybrać inny rodzaj odnowienia lub zrezygnować z usługi, ale te dwie opcje mogą być brane pod uwagę dopiero po zakończeniu aktualnego abonamentu, czyli po 12 miesiącach.
> Moja witryna sieci Web została zawieszona, ponieważ nie odnowiłam usług na czas. Właśnie odnowiłem usługi. Jak długo muszę czekać na ponowne udostępnienie strony WWW?
>> Czas przywrócenia usługi różni się w zależności od wybranych usług.
>> Jeśli tylko Twój hosting został zawieszony i odnowiony, uzyskanie ponownej dostępności strony zajmuje średnio 2 godziny.
>> Jeśli Twoja domena również została zawieszona i odnowiona, może to oznaczać, że czas propagacji DNS wyniesie do 48 godzin.
>> Aby zapobiec niedostępności wszystkich Twoich krytycznych usług, zalecamy automatyczne odnawianie usług i regularne sprawdzanie [czy Twoje sposoby płatności są aktualne](/pages/account_and_service_management/managing_billing_payments_and_services/manage-payment-methods).
> Abonament za usługę wygasa w lipcu 2024. Jest styczeń 2024 roku i chcę go odnowić na rok. Czy w związku z tym abonament wygaśnie w lipcu 2025 r., czy w styczniu 2025 r.?
>> Po przedłużeniu okresu odnowienia usługi (na 1 rok lub na krótszy okres) okres ten zostanie dodany do kolejnej daty wejścia w życie, która będzie widoczna w tabeli "Moje usługi". W Twoim przypadku usługa będzie odnawiana do lipca 2025 roku.
> Subskrypcja mojej usługi wygasła 1 stycznia 2024 r. i zapomniałem ją odnowić. Właśnie odnowiłem go 16 stycznia 2024 na 6 miesięcy, ale widzę, że wygaśnie on 1 lipca 2024 roku, a nie 16 lipca 2024. Czy to normalne?
>> Tak, to normalne, odnawianie rozpoczyna się w dniu wygaśnięcia subskrypcji.

## Sprawdź również

Ten przewodnik nie odpowiedział na Twoje pytanie? Sprawdź nasze [FAQ dotyczący fakturowania i płatności](/pages/account_and_service_management/managing_billing_payments_and_services/faq-billing)

[Zarządzanie sposobami płatności](/pages/account_and_service_management/managing_billing_payments_and_services/manage-payment-methods)

[Jak zrezygnować z usług OVHcloud](/pages/account_and_service_management/managing_billing_payments_and_services/how_to_cancel_services)

[Rozliczanie należności za usługę Public Cloud](/pages/public_cloud/compute/analyze_billing)

[Zarządzanie fakturowaniem kont Exchange](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/manage_billing_exchange)

Dołącz do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.
