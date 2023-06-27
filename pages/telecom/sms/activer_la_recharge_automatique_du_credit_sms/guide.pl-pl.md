---
title: Zarządzanie zasileniami SMS i aktywowanie automatycznego doładowania
excerpt: Dowiedz się, jak zarządzać zasileniami SMS OVHcloud
updated: 2023-02-09
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk "Zgłóś propozycję modyfikacji" na tej stronie.
>

**Ostatnia aktualizacja z dnia 09-02-2023**

## Wprowadzenie

Z tego przewodnika dowiesz się, czym są zasilenia SMS, jak je automatycznie doładować i jak je przenosić między Twoimi kontami SMS.

## Wymagania początkowe

- Posiadanie aktywnego konta SMS OVHcloud
- Zalogowanie do [API OVHcloud](https://api.ovh.com/) (tylko na potrzeby przenoszenia zasileń)
- Zalogowanie do[Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external}, część `Telefonia`{.action}, następnie `SMS`{.action}.

![Panel klienta Telecom SMS](https://raw.githubusercontent.com/ovh/docs/master/templates/control-panel/product-selection/telecom/tpl-telecom-03-en-sms.png){.thumbnail}

## W praktyce

### Zasilenia SMS

0,35 zasilenie SMS odpowiada kosztowi wysłania 1 wiadomości SMS na numer we Polska, a opłata maleje w zależności od liczby zasileń SMS, które zamierzasz kupić za jednym razem. 

Listę pakietów zasileń SMS znajdziesz, klikając następujący link: [https://www.ovh.pl/sms/](https://www.ovh.pl/sms/).

**Przykładowy zakup pakietu 100 zasileń SMS, po 0,0945 PLN netto każde:**

Wysłanie 1 wiadomości SMS do Polska kosztuje 0,35 zasilenie. Dzięki temu pakietowi możesz wysłać 285 wiadomości SMS do Polska.
Wysłanie 1 wiadomości SMS do Indii kosztuje 0,4 zasilenia. Dzięki temu pakietowi możesz wysłać 250 wiadomości SMS do Indii.

Koszt wysyłki wiadomości SMS (w zasileniach) w zależności od ich miejsca przeznaczenia znajdziesz, klikając następujący link: [https://www.ovh.pl/sms/cennik/](https://www.ovh.pl/sms/cennik/).

> [!primary]
>
> Wiadomość SMS może zawierać ograniczoną liczbę znaków, zależną od rodzaju kodowania. Szczegóły dotyczące kodowania i dopuszczalnych znaków są dostępne w tym przewodniku:
> 
> [Wysyłanie wiadomości SMS z Panelu klienta OVHcloud](/pages/telecom/sms/envoyer_des_sms_depuis_mon_espace_client#etap-2-tworzenie-wiadomosci-sms)
>

### Automatyczne doładowanie

Aby nigdy nie zabrakło Ci zasileń na koncie, możesz aktywować automatyczne doładowanie. Po osiągnięciu minimalnego progu zasileń nowa ilość zasileń zostanie automatycznie dodana do Twojego konta SMS.

> [!warning]
>
> Opcja automatycznego doładowania może być aktywowana tylko wtedy, gdy spełnione są następujące warunki:
>
> - na Twoim koncie OVHcloud dostępny jest sposób płatności SEPA.
> - Twoja usługa SMS musi mieć przynajmniej 2 miesięcy stażu pracy.

Aby aktywować automatyczne doładowanie, zaloguj się do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external}, przejdź do karty `Telefonia`{.action}, a następnie na pasku usług po lewej stronie kliknij sekcję `SMS`{.action}. Wybierz konto SMS, dla którego chcesz aktywować automatyczne doładowanie.

Przejdź do menu `Opcje`{.action} (1), a następnie `Automatyczne ładowanie`{.action} (2).

![zasilenie sms](images/smscredit01.png){.thumbnail}

W rubryce „Zarządzaj opcjami” kliknij polecenie `Zmień`{.action}.

![zasilenie sms](images/smscredit02.png){.thumbnail}

Wypełnij wymagane pola:

- Minimalny próg (1): po osiągnięciu tego progu uruchomi się automatyczne doładowanie.
- Ilość kredytów do doładowania (2): określa liczbę zasileń, które mają zostać dodane do konta SMS. Można wybrać 100, 200, 250, 500, 1000, 5000 lub 10000.
- Kliknij przycisk `Zatwierdź`{.action}, aby zastosować konfigurację.

![zasilenie sms](images/smscredit03.png){.thumbnail}

### Przenoszenie zasileń

> [!primary]
>
> Zasilenia można przenosić wyłącznie między kontami SMS należącymi do jednego identyfikatora OVHcloud. Przenoszenie zasileń między dwoma identyfikatorami OVHcloud jest niemożliwe.
>

W Panelu klienta OVHcloud wybierz jedno z Twoich kont SMS i kliknij polecenie `Przeniesienie zasileń`{.action} z zakładki `Strona główna`{.action}.

![transfer zasileń SMS](images/credit-transfer01.png){.thumbnail}

Wybierz:

- konto SMS, które ma przenieść zasilenia
- konto SMS, które ma otrzymać zasilenia
- liczbę zasileń, które mają zostać przeniesione

Kliknij polecenie `Wyślij`{.action}, aby zatwierdzić przeniesienie. Jest on natychmiastowy.

![transfer zasileń SMS](images/credit-transfer02.png){.thumbnail}


## Sprawdź również

Dołącz do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.

