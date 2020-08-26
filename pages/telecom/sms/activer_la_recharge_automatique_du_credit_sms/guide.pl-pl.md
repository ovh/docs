---
title: Zarządzanie zasileniami SMS i aktywowanie automatycznego doładowania
slug: aktywowanie-automatycznego-ladowania-zasilen-sms
excerpt: Dowiedz się, jak zarządzać zasileniami SMS OVHcloud
section: Zarządzanie ofertą
---

**Ostatnia aktualizacja z dnia 19-05-2020**

## Wprowadzenie

Z tego przewodnika dowiesz się, czym są zasilenia SMS, jak je automatycznie doładować i jak je przenosić między Twoimi kontami SMS.

## Wymagania początkowe

* Posiadanie aktywnego konta SMS OVHcloud
* Zalogowanie do [API OVHcloud](https://api.ovh.com/console/) (tylko na potrzeby przenoszenia zasileń).

## W praktyce

### **Zasilenia SMS**

1 zasilenie SMS odpowiada kosztowi wysłania 1 wiadomości SMS na numer we Francji metropolitarnej, a opłata maleje w zależności od liczby zasileń SMS, które zamierzasz kupić za jednym razem. 

Listę pakietów zasileń SMS znajdziesz, klikając następujący link: [https://www.ovhtelecom.fr/sms/](https://www.ovhtelecom.fr/sms/).

**Przykładowy zakup pakietu 100 zasileń SMS, po 0,06 EUR netto każde:**

Wysłanie 1 wiadomości SMS do Francji metropolitarnej kosztuje 1 zasilenie. Dzięki temu pakietowi możesz wysłać 100 wiadomości SMS do Francji metropolitarnej.
Wysłanie 1 wiadomości SMS do Indii kosztuje 0,1 zasilenia. Dzięki temu pakietowi możesz wysłać 1000 wiadomości SMS do Indii.

Koszt wysyłki wiadomości SMS (w zasileniach) w zależności od ich miejsca przeznaczenia znajdziesz, klikając następujący link: [https://www.ovhtelecom.fr/sms/tarifs.xml](https://www.ovhtelecom.fr/sms/tarifs.xml).

> [!primary]
>
> Wiadomość SMS może zawierać ograniczoną liczbę znaków, zależną od rodzaju kodowania. Szczegóły dotyczące kodowania i dopuszczalnych znaków są dostępne w tym przewodniku:
> 
> [Wysyłanie wiadomości SMS z Panelu klienta OVHcloud](../wysylanie-wiadomosci-sms-z-panelu-klienta/#etap-2-tworzenie-wiadomosci-sms)
>

### **Automatyczne doładowanie**

Aby nigdy nie zabrakło Ci zasileń na koncie, możesz aktywować automatyczne doładowanie. Po osiągnięciu minimalnego progu zasileń nowa ilość zasileń zostanie automatycznie dodana do Twojego konta SMS.

Aby aktywować automatyczne doładowanie, zaloguj się do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}, przejdź do karty `Telecom`{.action}, a następnie na pasku usług po lewej stronie kliknij sekcję `SMS`{.action}. Wybierz konto SMS, dla którego chcesz aktywować automatyczne doładowanie.

Przejdź do menu `Opcje`{.action} (1), a następnie `Automatyczne doładowanie`{.action} (2).

![zasilenie sms](images/smscredit1.png){.thumbnail}

W rubryce „Zarządzaj opcjami” kliknij polecenie `Modyfikuj`{.action}.

![zasilenie sms](images/smscredit2.png){.thumbnail}

Wypełnij wymagane pola:

* Próg minimalny (1): po osiągnięciu tego progu uruchomi się automatyczne doładowanie.
* Ilość do doładowania (2): określa liczbę zasileń, które mają zostać dodane do konta SMS. Można wybrać 100, 200, 250, 500 lub 1000.
* Kliknij przycisk `Zatwierdź`{.action} (3), aby zastosować konfigurację.

![zasilenie sms](images/smscredit3.png){.thumbnail}

### **Przenoszenie zasileń**

> [!primary]
>
> Zasilenia można przenosić wyłącznie między kontami SMS należącymi do jednego identyfikatora OVHcloud. Przenoszenie zasileń między dwoma identyfikatorami OVHcloud jest niemożliwe.
>

Przenoszenie zasileń SMS może się odbywać wyłącznie przez API.

Zaloguj się w konsoli [https://api.ovh.com/](https://api.ovh.com/console/), a następnie użyj następującego API:

> [!api]
>
> @api {post} /sms/{serviceName}/transferCredits
>

Uzupełnij trzy wymagane pola:

* serviceName: podaj nazwę konta SMS, z którego mają zostać przekazane zasilenia
* credits: podaj liczbę zasileń przeznaczonych do przeniesienia
* smsAccountTarget: podaj nazwę konta SMS, które ma otrzymać zasilenia

Kliknij polecenie `Wykonaj`{.action}, aby zatwierdzić przeniesienie. To działanie ma efekt natychmiastowy.

## Sprawdź również

Dołącz do społeczności naszych użytkowników na stronie [https://community.ovh.com/en/](https://community.ovh.com/en/)
