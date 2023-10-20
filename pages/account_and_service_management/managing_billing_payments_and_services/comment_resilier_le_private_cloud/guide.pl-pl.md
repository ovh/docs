---
title: Jak zrezygnować z usługi Private Cloud
excerpt: Dowiedz się, jak zrezygnować z infrastruktury Private Cloud
updated: 2020-07-08
---

## Wprowadzenie

Jeśli usługa Private Cloud nie jest już dla Ciebie odpowiednia lub jeśli zamówiłeś nową infrastrukturę, możesz wydać dyspozycję usunięcia starej infrastruktury, gdy wszystkie Twoje dane zostaną zabezpieczone.

**Dowiedz się, jak zrezygnować z infrastruktury Private Cloud** 

## Wymagania początkowe

- Dostęp do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external} i sekcji `Hosted Private Cloud`{.action}, a następnie `Private Cloud`{.action}
- Posiadanie usługi [Private Cloud](https://www.ovhcloud.com/pl/enterprise/products/hosted-private-cloud/){.external}

## W praktyce

W przypadku korzystania z usługi Private Cloud nie musisz podpisywać umowy terminowej. Jednak, jak wskazano w Szczegółowych warunkach korzystania z usług, należna jest opłata z góry za każdy rozpoczęty miesiąc.

>[!warning]
>
> Zanim usługa zostanie zakończona, pamiętaj o pobraniu wszystkich danych, które chcesz zachować. Zakończenie usługi spowoduje całkowite usunięcie infrastruktury Private Cloud i wszystkich zawartych w niej danych.
>

### Etap 1: złóż dyspozycję zakończenia usługi w Panelu klienta 

Zaloguj się do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external}, przejdź do sekcji `Hosted Private Cloud`{.action} (1), kliknij `Private Cloud`{.action} (2) i wybierz serwer z listy (3).

W tabeli „Zarządzanie usługami” w zakładce „Informacje ogólne” kliknij przycisk `...`{.action} (4) po prawej stronie od daty odnowienia. Na koniec kliknij `Usuń usługę`{.action} (5).

![zakończenie usługi w Panelu klienta](images/resiliation1.png){.thumbnail}

Pamiętaj, że ta czynność spowoduje usunięcie wszelkich danych obecnych w infrastrukturze, gdy tylko zostanie potwierdzone zakończenie usługi. Jeśli usługa zostanie zakończona przed końcem miesiąca, nie będzie przysługiwało prawo do zwrotu środków za niewykorzystany do końca miesiąca okres.

Kliknij `Zatwierdź`{.action}, aby potwierdzić rezygnację.

![zatwierdzenie rezygnacji](images/resiliation2.png){.thumbnail}

Otrzymasz powiadomienie potwierdzające Twoją dyspozycję. Procedura potwierdzenia rezygnacji z usługi zostanie wysłana do Ciebie e-mailem na adres powiązany z kontem OVHcloud.

![zatwierdzenie rezygnacji](images/resiliation3.png){.thumbnail}

### Etap 2: zatwierdź rezygnację

Po złożeniu rezygnacji otrzymasz potwierdzenie wysłane na Twój adres e-mail powiązany z kontem OVHcloud. 

E-mail ten możesz również znaleźć w Panelu klienta OVHcloud. Kliknij Twoją nazwę w prawym górnym rogu, a następnie `E-maile dotyczące usługi`{.action}.

![zatwierdzenie rezygnacji](images/resiliation4.png){.thumbnail}

Temat e-maila:

> **Usunięcie usługi Private Cloud pcc-xxx-xxx-xxx-xxx**".

W wiadomości e-mail zamieścimy link, który pozwoli Ci potwierdzić rezygnację z usługi.

> [!primary]
>
> Należy pamiętać, że link ważny jest przez 72 godziny. Dlatego zalecamy złożyć dyspozycję zakończenia usługi począwszy od 25 dnia miesiąca.
>

Możesz również zatwierdzić dyspozycję zakończenia usługi za pośrednictwem następującego API OVHcloud:

> [!api]
>
> @api {v1} /dedicatedCloud POST /dedicatedCloud/{serviceName}/confirmTermination
>

Następnie wprowadź token zatwierdzający podany w przesłanym do Ciebie e-mailu.

## Sprawdź również

Dołącz do społeczności naszych użytkowników na stronie <https://community.ovh.com>.
