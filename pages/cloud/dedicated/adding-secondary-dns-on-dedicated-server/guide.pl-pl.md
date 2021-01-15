---
title: 'Dodawanie domeny do Secondary DNS'
slug: dodawanie-domeny-secondary-dns
excerpt: 'Dowiedz się, jak dodać domene do Secondary DNS dla Twojego serwera dedykowanego'
section: 'Poziom zaawansowany'
---

**Ostatnia aktualizacja z dnia 09-10-2018**

## Wprowadzenie

Jeśli chcesz używać Twojego [serwera dedykowanego](https://www.ovh.pl/serwery_dedykowane/){.external} jako głównego serwera DNS dla Twojej domeny, możesz dodać tę domenę także do Secondary DNS dostarczanego przez OVHcloud.

**Niniejszy przewodnik wyjaśnia, jak uruchomić Secondary DNS i dodać do niego Twoją domenę.**


## Wymagania początkowe

* Posiadanie [serwera dedykowanego](https://www.ovh.pl/serwery_dedykowane/){.external} z zainstalowanym serwerem DNS
* Posiadanie [domeny](https://www.ovh.pl/domeny/){.external} i możliwość zarządzania nią w [Panelu klienta](https://www.ovh.com/auth/?action=gotomanager){.external}
* Dostęp do [Panelu klienta](https://www.ovh.com/auth/?action=gotomanager){.external}


## W praktyce

### Uzyskanie kodu weryfikacyjnego dla domeny

Kliknij menu `Dedykowane`{.action}, następnie `Serwery dedykowane`{.action} na pasku menu po lewej stronie ekranu, aby wyświetlić rozwijaną listę serwerów przypisanych do Twojego konta:

Secondary DNS

Następnie wybierz zakładkę `Secondary DNS`{.action} i kliknij `Dodaj domenę`{.action}:

![Secondary DNS](images/dns2-02.png){.thumbnail}

Wprowadź nazwę Twojej domeny w polu `Domeny`, następnie kliknij `Dalej`{.action}:

![Secondary DNS](images/dns2-03.png){.thumbnail}

Pojawi się komunikat dotyczący stworzenia rekordu TXT dla Twojej domeny. Wynotuj z instrukcji subdomenę i serwer docelowy, a następnie kliknij `Anuluj`{.action}:

![Secondary DNS](images/dns2-04a.png){.thumbnail}


### Przystąp do weryfikacji domeny

Po zalogowaniu do [Panelu klienta](https://www.ovh.com/auth/?action=gotomanager){.external} kliknij menu `Web Cloud`{.action}, następnie sekcję `Domeny`{.action} w kolumnie po lewej stronie, aby wyświetlić wszystkie domeny, którymi zarządzasz:

![Weryfikacja domeny](images/domain-verification-01.png){.thumbnail}

Po zaznaczeniu wybranej domeny kliknij przycisk `Dodaj rekord`{.action}:

![Weryfikacja domeny](images/domain-verification-02.png){.thumbnail}

Następnie wybierz typ rekordu `TXT`{.action}, po czym kliknij `Dalej`{.action}:

![Weryfikacja domeny](images/domain-verification-03.png){.thumbnail}

Teraz uzupełnij pola `Subdomena` i `Wartość`, używając zanotowanych wcześniej informacji. Następnie kliknij `Dalej`{.action}:

![Weryfikacja domeny](images/domain-verification-04.png){.thumbnail}

Potwierdź rekord, klikając przycisk `Potwierdź`{.action}:

![Weryfikacja domeny](images/domain-verification-05.png){.thumbnail}

> [!primary]
>
> Odczekaj od 4 do 24 godzin (tyle wynosi czas propagacji DNS), aż pole będzie aktywne dla wszystkich serwerów na świecie.
>

### Dodanie domeny do Secondary DNS 

Przejdź do menu `Dedykowane`{.action}, następnie`Serwery dedykowane`{.action} i `Secondary DNS`{.action}, jak w pierwszym etapie. Kliknij `Dodaj domenę`{.action}:

![Secondary DNS](images/dns2-02.png){.thumbnail}

Wprowadź nazwę Twojej domeny w polu `Domeny`, następnie kliknij `Dalej`{.action}:

![Secondary DNS](images/dns2-03.png){.thumbnail}

Ponieważ rekord TXT został już dla Twojej domeny utworzony, kliknij `Dalej`{.action}:

![Secondary DNS](images/dns2-04b.png){.thumbnail}

Na koniec kliknij `Dodaj`{.action}, aby potwierdzić dodanie rekordu:

![Secondary DNS](images/dns2-05.png){.thumbnail}


## Sprawdź również

[Modyfikacja strefy DNS OVHcloud](https://docs.ovh.com/pl/domains/hosting_www_jak_edytowac_strefe_dns/){.external}

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.
