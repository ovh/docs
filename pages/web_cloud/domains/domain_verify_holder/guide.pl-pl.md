---
title: "Zarządzanie kontaktem właściciela nazwy domeny"
excerpt: "Dowiedz się, jak zweryfikować, poprawić lub uzupełnić dane kontaktowe właściciela nazwy domeny po otrzymaniu wiadomości e-mail z alertem od OVHcloud"
updated: 2026-01-16
---

## Wprowadzenie

Czy otrzymałeś wiadomość e-mail od OVHcloud informującą, że wymagana jest akcja dotycząca Twojej nazwy domeny? Czy ta sama wiadomość wskazuje, że dane kontaktowe (informacje kontaktowe) dotyczące właściciela Twojej nazwy domeny muszą zostać poprawione lub uzupełnione?

**Dowiedz się, jak poprawić lub uzupełnić dane kontaktowe właściciela nazwy domeny po otrzymaniu wiadomości e-mail z alertem od OVHcloud.**

### Dlaczego otrzymałem wiadomość e-mail z weryfikacją kontaktu od OVHcloud?

ICANN, organizacja odpowiedzialna za zarządzanie Domenami na całym świecie, lub rejestry, organizacje odpowiedzialne za zarządzanie rozszerzeniami, wymagają weryfikacji informacji właściciela, gdy nazwa domeny zostaje utworzona, przeniesiona lub kiedy tylko zostaną zaktualizowane powiązane kontakty.

Weryfikacja danych kontaktowych właściciela może mieć miejsce w dowolnym momencie w cyklu życia nazwy domeny, w tym dla Domen zakupionych kilka lat temu. W związku z tym każda nazwa domeny wymaga weryfikacji danych kontaktowych właściciela w ciągu 15 dni od otrzymania wiadomości weryfikacyjnej, niezależnie od tego, czy dotyczy zakupu, przeniesienia, modyfikacji danych kontaktowych, czy okresowej weryfikacji żądanej przez ICANN lub rejestr.

### Co się stanie, jeśli dane e-maila lub kontaktu właściciela nie zostaną zweryfikowane w terminie?

Jeśli weryfikacja nie zostanie ukończona w wyznaczonym terminie, nazwa domeny zostaje automatycznie zawieszona i tymczasowo niedostępna, dopóki weryfikacja nie zostanie ukończona, co może prowadzić do usunięcia nazwy domeny.
W takim przypadku OVHcloud nie będzie mógł zaoferować żadnego zwrotu pieniędzy.

## Wymagania początkowe

- Masz zarejestrowaną [nazwę domeny](/links/web/domains) w OVHcloud.
- Dostęp do [Panelu klienta OVHcloud](/links/manager).
- Otrzymałeś wiadomość e-mail od OVHcloud informującą, że wymagana jest akcja dotycząca danych kontaktowych właściciela Twojej nazwy domeny.
- Sprawdź poniższe punkty, aby upewnić się, że nie jest to wiadomość oszukańcza:
    - Temat wiadomości zawiera Twój NIC handle (np.: `aa00000-ovh`) i Twoją nazwę domeny (np.: `domain.tld`).
    - Adres URL w wiadomości zaczyna się od: `https://www.ovh.com/manager/#/web/domain/operation/`.

## W praktyce

### 1 - Weryfikacja e-maila właściciela po zakupie lub modyfikacji e-maila właściciela dla nazwy domeny

Po dokonaniu zamówienia, właściciel nazwy domeny otrzyma wiadomość e-mail od OVHcloud, aby zweryfikować swój adres e-mail i potwierdzić, że jest on osiągalny.

![Weryfikacja adresu e-mail](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/general-information/email-address-verification-for-one-of-your-domain-names.png){.thumbnail}

Kliknięcie w `Potwierdź swój adres e-mail`{.action} spowoduje otwarcie nowej strony z linkiem bezpośrednio weryfikującym adres e-mail właściciela.

Jeśli ten sposób nie zadziała, właściciel może ręcznie zweryfikować swój adres e-mail, korzystając z jednorazowego kodu dostępowego podanego w wiadomości i klikając w `Formularz weryfikacji e-maila`{.action}.

![Weryfikacja e-maila kontaktu właściciela](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/general-information/holder-contact-email-validation_cgi.png){.thumbnail}

![Weryfikacja e-maila CGI](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/general-information/validation-email-CGI.png){.thumbnail}

### 2 - Popraw lub uzupełnij dane kontaktowe właściciela nazwy domeny jako administrator

Kliknij w karty poniżej, aby wyświetlić każdy z **5** kroków.

> [!tabs]
> **Etap 1**
>>
>> Zaloguj się do [Panelu klienta OVHcloud](/links/manager), a następnie przejdź do sekcji `Web Cloud`{.action}.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Etap 2**
>>
>> Kliknij menu `Domeny`{.action}, a następnie wybierz nazwę domeny, która jest dotyczy.
>>
>> ![Domeny](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-names.png){.thumbnail}
>>
> **Etap 3**
>>
>> Na stronie, która się otworzy, sprawdź, czy Twoja nazwa domeny jest objęta procedurą, ponieważ istnieje baner (żółty lub czerwony) wskazujący na operację do wykonania.
>>
>> Następnie znajdź komentarz **Kontakty** w polu **Abonament**. Kliknij przycisk `...`{.action} po prawej stronie, a następnie `Zarządzanie kontaktami`{.action}.
>>
>> ![Zmiana właściciela](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/general-information/manage-contacts-verify-contact-informations-holder.png){.thumbnail}
>>
> **Etap 4**
>>
>> Na nowej stronie przejdź do pola **Właściciel**, następnie kliknij przycisk `Zmodyfikuj`{.action}.
>>
>> ![Zarządzanie kontaktami i właścicielami](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/general-information/manage-contacts-and-owners.png){.thumbnail}
>>
> **Etap 5**
>>
>> > [!warning]
>> >
>> > Każda zmiana imienia, nazwiska, organizacji, statusu prawnego lub adresu e-mail właściciela jest uważana za **zmianę właściciela**.
>> >
>> > Jeśli zmodyfikujesz **tylko** dane kontaktowe właściciela, oprócz tych wymienionych powyżej, edytuj odpowiednie pola, a następnie kliknij `Zatwierdź`{.action}. W tym przypadku nie będzie konieczne zainicjowanie żądania zmiany właściciela. Dla tej operacji nie będzie konieczne potwierdzenie zmian przez e-mail.
>> >
>> > Jeśli wymagana jest zmiana właściciela, kliknij link `Kliknij tutaj, aby kontynuować`{.action} na dole strony.
>>
>> ![Dane właściciela](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/general-information/owner.png){.thumbnail}
>>
>> Aby uzyskać więcej szczegółów dotyczących zmiany właściciela, zapoznaj się z naszym przewodnikiem: "[Nazwa domeny - Jak zmienić właściciela](/pages/web_cloud/domains/trade_domain)".

### 3 - Co zrobić, jeśli adres e-mail kontaktu właściciela nie jest już dostępny?

#### Przypadek ogólny

Jeśli adres e-mail skojarzony z Twoją nazwą domeny jest niepoprawny lub niedostępny (np. z powodu błędnego wpisania), powinieneś [skontaktować się z obsługą OVHcloud](/links/support).

Zwróć uwagę, że właściciel domeny będzie musiał ponownie potwierdzić swoją tożsamość, dostarczając wymagane dokumenty zgodnie z ich typem (osoba prywatna, firma, stowarzyszenie itp.).

> [!primary]
>
> Poniższa lista dokumentów nie jest wyczerpująca. W zależności od Twojej sytuacji lub wymagań odpowiedniego rejestru mogą zostać żądane inne dokumenty.

**Dokumenty do dostarczenia zgodnie z typem właściciela:**

- **Osoba prywatna**:
    - Współprawidłowy dokument tożsamości (strona przednia i tylnia): dowód osobisty, paszport (strony zawierające zdjęcie i dane osobowe oraz stronę z sygnałem), zezwolenie na pobyt lub prawo jazdy
- **Firma**
    - Dowód istnienia jednostki: wyrys z rejestru działalności gospodarczej (młodszy niż 3 miesiące), wyrys z Krajowego Rejestru Sądowego, licencja handlowa lub dowolny równoważny dokument.
    - Współprawidłowy dokument tożsamości (strona przednia i tylnia) przedstawiciela prawnego (właściciel firmy, prezes lub dyrektor zarządzający): dowód osobisty, paszport, zezwolenie na pobyt lub prawo jazdy.
- **Organizacja non-profit**
    - Współprawidłowy dokument tożsamości (strona przednia i tylnia) przedstawiciela prawnego (prezes, menedżer lub dyrektor stowarzyszenia): dowód osobisty, paszport, zezwolenie na pobyt lub prawo jazdy
    - Prawny dowód istnienia organizacji.
    - Protokół z ostatniego zebrania ogólne.
- **Administracja publiczna**
    - Certyfikat administracyjny (lub równoważny oficjalny dokument).
    - Współprawidłowy dokument tożsamości (strona przednia i tylnia) przedstawiciela administracji publicznej: dowód osobisty, paszport, zezwolenie na pobyt lub prawo jazdy.

Nasze zespoły pomożą Ci w kolejnych krokach weryfikacji Twojej domeny.

#### Przypadek specjalny - Modyfikacja kontaktu właściciela przez administratora bez pomocy (przykład .fr)

Dla niektórych rozszerzeń (np.: .fr, .it, .es), administrator domeny może bezpośrednio wejść do swojego [Panelu klienta OVHcloud](/links/manager) i zmienić adres e-mail kontaktu właściciela, postępując zgodnie z krokami opisanymi w kroku 2 tej strony.

### 4 - Uruchom ponownie operację weryfikacji danych kontaktowych właściciela nazwy domeny

> [!warning]
>
> Jeśli poprawki w pierwszej części tego przewodnika wymagały zainicjowania zmiany właściciela dla nazwy domeny, ukończ zmianę właściciela **przed** kontynuowaniem działań opisanych w tym przewodniku.
>

Kliknij w karty poniżej, aby wyświetlić każdy z **4** kroków.

> [!tabs]
> **Etap 1**
>>
>> Zaloguj się do [Panelu klienta OVHcloud](/links/manager), a następnie przejdź do sekcji `Web Cloud`{.action}.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Etap 2**
>>
>> Kliknij menu `Operacje w Toku`{.action}, a następnie znajdź nazwę domeny w liście, która się pojawi.
>>
>> ![Trwające operacje](/pages/assets/screens/control_panel/product-selection/web-cloud/ongoing-operations.png){.thumbnail}
>>
> **Etap 3**
>>
>> Kliknij przycisk `⁝`{.action} po prawej stronie, a następnie `Zmień operację`{.action}.
>>
>> ![Operacja nazwy domeny](/pages/assets/screens/control_panel/product-selection/web-cloud/ongoing-operations/contact-correction.png){.thumbnail}
>>
> **Etap 4**
>>
>> W wyświetlonym oknie zaznacz opcję `Wznów operację`{.action}, następnie kliknij `Zatwierdź`{.action}.
>>
>> ![Dane operacji na domenie](/pages/assets/screens/control_panel/product-selection/web-cloud/ongoing-operations/contact-correction-relaunch-operation.png){.thumbnail}

Operacja zajmie kilka minut, aby zostać ukończona. Odśwież stronę `Operacje na nazwach domen`, gdzie znajdowała się operacja korekty kontaktu dla Twojej nazwy domeny.

Jeśli operacja została ukończona pomyślnie, wiersz dla przetworzonej operacji nie pojawia się już.

Jeśli nie jest to prawdą, wymagana jest korekta danych kontaktowych właściciela nazwy domeny. W takim przypadku, proszę postępować zgodnie z tym przewodnikiem od początku, aby rozwiązać problem.

## Sprawdź również

[Domena - Jak zmienić właściciela?](/pages/web_cloud/domains/trade_domain)

[Zarządzanie kontaktami swoich usług](/pages/account_and_service_management/account_information/managing_contacts).

W przypadku wyspecjalizowanych usług (pozycjonowanie, rozwój, etc.) skontaktuj się z [partnerami OVHcloud](/links/partner).

Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i użytkowania Twoich rozwiązań OVHcloud, zapoznaj się z naszymi [ofertami pomocy](/links/support).

Dołącz do [grona naszych użytkowników](/links/community).