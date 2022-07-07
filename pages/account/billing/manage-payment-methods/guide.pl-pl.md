---
title: Zarządzanie sposobami płatności
slug: zarzadzanie-sposobami-platnosci
excerpt: Dowiedz się, jak dodawać sposoby płatności do Panelu klienta OVHcloud i zarządzać nimi
section: Płatności
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk „Zaproponuj zmianę” na tej stronie.
>

**Ostatnia aktualizacja z dnia 18-05-2022**

## Wprowadzenie

W Panelu klienta OVHcloud możesz dodać różne sposoby płatności i zarządzać nimi.

## Wymagania początkowe

- Dostęp do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl).
- Posiadanie ważnego sposobu płatności.

## W praktyce <a name="payment_methods"></a>

W [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl) kliknij Twoją nazwę w prawym górnym rogu i wybierz `Sposób płatności`{.action}.

![hubpayment](images/hubpayment.png){.thumbnail}

Wyświetli się strona z tabelą wyszczególniającą sposoby płatności zapisane na Twoim koncie klienta. W Panelu klienta można:

- Dodać sposób płatności
- Zmienić domyślny sposób płatności
- Zmień opis Twojego sposobu płatności
- Usunąć sposób płatności

### Dodanie sposobu płatności

Podczas pierwszego zamówienia zostaniesz poproszony o zarejestrowanie sposobu płatności, aby zapewnić automatyczne pobranie płatności za odnowienie usługi.

Ten sposób płatności jest używany domyślnie dla wszystkich odnowień i jest proponowany do uregulowania nowych zamówień.

Możesz również zarejestrować inne sposoby płatności, które będą proponowane podczas składania nowych zamówień lub będą używane domyślnie dla przyszłych poleceń zapłaty.

Można dodać 2 różne sposoby płatności:

- Karta bankowa
- Konto PayPal

W tym celu kliknij przycisk `Dodaj sposób płatności`{.action}.

![manage-payment-methods](images/managepaymentmethods2.png){.thumbnail}

Wybierz metodę płatności, której chcesz użyć:

![choose-payment-method-no-sepa](images/choose-payment-method-no-sepa.png){.thumbnail}

Postępuj zgodnie z poniższą procedurą, aby dodać sposób płatności. Na pierwszym etapie zostaniesz poproszony o zaznaczenie kratki `Chcę wybrać ten sposób płatności jako domyślny od chwili jego zatwierdzenia`{.action}, tak aby był on używany przy kolejnych zakupach lub automatycznych pobraniach.

#### Karta bankowa

![credit-card-no-sepa](images/credit-card-no-sepa.png){.thumbnail}

Aby zarejestrować nową kartę bankową, zostaniesz przekierowany do bezpiecznego interfejsu naszego dostawcy płatności. W celu potwierdzenia rejestracji i ważności Twojej karty, należy zalogować się do Twojego banku.<br>
Kwota nie zostanie pobrana, a Twoja karta bankowa zostanie aktywowana po kilku minutach.

#### Konto paypal

![paypal_no_sepa](images/paypal_no_sepa.png){.thumbnail}

Wybierz `Paypal`{.action} jako sposób płatności. Kliknij przycisk `Paypal`{.action}. Otworzy się wówczas okno, w którym zaloguj się do Twojego konta Paypal® i zapisz je jako sposób płatności zatwierdzony przez OVHcloud.

Twoje konto Paypal® zostanie włączone za kilka minut.

### Zmienić domyślny sposób płatności

Faktury za odnowienie usług są zawsze opłacane przy użyciu domyślnego sposobu płatności. Jeśli chcesz go zmienić, musisz najpierw dodać nowy sposób płatności w Panelu klienta.

Kliknij przycisk `...`{.action} znajdujący się po prawej stronie nowego sposobu płatności, a następnie wybierz opcję `Ustaw te metode płatności jako domyślna`{.action}.

![manage-payment-methods](images/managepaymentmethods3.png){.thumbnail}

> **Chcę zastąpić mój domyślny sposób płatności innym sposobem płatności?**
>
> - Etap 1: dodaj nowy sposób płatności
> - Etap 2: definiuj nowy sposób płatności jako domyślny sposób płatności
> - Etap 3: usuń stary sposób płatności
>

### Usunąć sposób płatności

Jeśli nie chcesz już korzystać ze swoich sposobów płatności, możesz je usunąć, klikając przycisk `...`{.action} znajdujący się po prawej stronie. Następnie kliknij polecenie `Usuń te sposób płatności`{.action}.

![manage-payment-methods](images/managepaymentmethods4.png){.thumbnail}

Jeśli chcesz usunąć wszystkie Twoje sposoby płatności, wszystkie Twoje usługi muszą być [odnawiane ręcznie](https://docs.ovh.com/pl/billing/przewodnik_dotyczacy_opcji_automatycznego_odnawiania_uslug_w_ovh/#odnowienie-reczne).

#### Usuwanie sposobu płatności przez API OVHcloud

Sposób płatności można usunąć poprzez interfejs API, logując się do [https://eu.api.ovh.com/](https://eu.api.ovh.com/).

Zacznij od uzyskania identyfikatora sposobu płatności:

> [!api]
>
> @api {GET} /me/payment/method
>

Następnie usuń sposób płatności, używając identyfikatora uzyskanego na poprzednim etapie:

> [!api]
>
> @api {DELETE} /me/payment/method/{paymentMethodId}
>

> [!primary]
>
> Aby uzyskać więcej informacji, zapoznaj się z przewodnikiem Pierwsze kroki z [API OVHcloud](https://docs.ovh.com/pl/api/first-steps-with-ovh-api/).
>
> W przypadku trudności w identyfikacji sposobów płatności przy użyciu interfejsu API OVHcloud, skorzystaj z funkcji `Zmień opis`{.action} (przycisk `...`{.action} po prawej stronie ekranu) w części [Sposoby płatności](#payment_methods) w Twoim [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl).
>

### Konto prepaid

#### Czym jest konto przedpłacone?

*Konto prepaid* jest widoczne w Twoim [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl) od chwili jego utworzenia. Umożliwia zasilenie konta klienta z wyprzedzeniem i wykorzystanie tych środków do opłacania zamówień oraz faktur za odnowienie.

Tworząc regularnie konto, będziesz mógł sprawdzić, czy [automatyczne odnawianie](https://docs.ovh.com/pl/billing/przewodnik_dotyczacy_opcji_automatycznego_odnawiania_uslug_w_ovh/#odnowienie-automatyczne) usług nie zostanie przerwane z powodu braku płatności.

W tym celu przejdź do sekcji `Sposoby płatności` w Panelu klienta:

- kliknij Twoje imię w prawym górnym rogu, a następnie `Sposób płatności`{.action} w menu po prawej stronie;
- wybierz kartę `Moje konto prezdplacone`{.action}.

![prepaid-account](images/prepaid-account.png){.thumbnail}

#### Jak działa?

W każdym terminie płatności, jeśli posiadasz usługi z opcją *automatycznego odnawiania*, kwota Twojej faktury jest pobierana z konta prepaid.

W przypadku braku wystarczających środków saldo Twojego konta zostanie ujemne i będzie nadal czeka na płatność.

Jeśli dysponujesz ważnym sposobem płatności zarejestrowanym na Twoim koncie klienta, kwota ta zostanie automatycznie pobrana w ciągu 24 godzin, a saldo zostanie wyrównane. Nie ma to żadnego wpływu na stan Twoich usług.

Natomiast jeśli nie masz ustawionego sposobu płatności, ureguluj saldo w Panelu klienta w ciągu 7 dni, aby uniknąć przerwy w dostępie do usługi.

Jeśli nie masz zarejestrowanego sposobu płatności, zalecamy ustawienie **progu alertu**, aby upewnić się, że dysponujesz funduszami wystarczającymi na kolejne faktury:

![warning_prepaid_account](images/warning_prepaid_account.png){.thumbnail}

Jeśli zasilenie dostępne na koncie przedpłaconym spada poniżej określonego limitu, otrzymasz e-mail z powiadomieniem.

#### Jak zasilić konto Skarbonka?

W zakładce `Moje konto prezdplacone`{.action} kliknij przycisk `Zasil`{.action}.

![prepaid-account](images/credit-prepaid-account.png){.thumbnail}

W oknie, które się wyświetli wskaż kwotę do zasilenia, kliknij `Dalej`{.action}, a następnie `Zamów`{.action}.

![order-prepaid-account](images/order-prepaid-account.png){.thumbnail}

W formularzu zamówienia, który się wyświetla wybierz sposób płatności i ureguluj Twoje zamówienie.

## Sprawdź również

Dołącz do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.
