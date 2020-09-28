---
title: 'Tworzenie przekierowania e-mail'
excerpt: 'Hosting www: Przekierowania e-mail'
slug: hosting_www_przekierowania_e-mail
legacy_guide_number: g2001
section: 'Funkcjonalności kont e-mail'
---

**Ostatnia aktualizacja z dnia 22-01-2019**

## Wprowadzenie

W tym przewodniku znajdziesz różne informacje i pomoce dotyczące konfiguracji przekierowania wiadomości e-mail, na przykład aby e-maile otrzymane na adres A przekierowywać na adres B.

## Informacje ogólne

### Co to jest przekierowanie wiadomości e-mail?

Przekierowanie polega na przeadresowaniu e-maila otrzymanego na pierwszy adres na jeden lub kilka innych adresów.

Na przykład możesz ustawić, aby wiadomości wysyłane na adres **publiczny@mojadomena.com** były przekierowywane na adres **prywatny@mojadomena.com**. Opcja ta pozwala na podanie nadawcy pierwszego adresu (**publiczny@mojadomena.com**) bez ujawniania prawdziwego adresu (**prywatny@mojadomena.com**).

Istnieją dwa rodzaje przekierowań: 

- Przekierowanie proste (schemat 1): e-mail jest bezpośrednio przesyłany na adres przekierowania, a adresat nie dostaje wiadomości. 

- Przekierowanie z kopią lokalną (schemat 2): e-mail jest wysyłany do adresata oraz na adres przekierowania.

![emails](images/schema-redirect.png){.thumbnail}

> [!primary]
>
> Możliwe jest ustawienie przekierowania na kilka adresów e-mail.

## Wymagania początkowe

- Dostęp do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager).
- Wykupienie usługi MX Plan. Usługa jest dostępna w ramach oferty [Hosting]({ovh_www}/hosting/){.external}, [bezpłatny Hosting Start 10M]({ovh_www}/domeny/oferta_serwer_start10m.xml){.external} lub oferty MX Plan zamówionej oddzielnie.

## W praktyce

W zależności od daty aktywacji oferty MX Plan lub jeśli [oferta została niedawno przeniesiona]({ovh_www}/mxplan-migration/){.external}, możliwe, że dysponujesz jej starszą lub nową wersją. Zanim przejdziesz dalej, ustal, jaką wersję posiadasz. 

W tym celu zaloguj się do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external} i przejdź do sekcji „Web”. Kliknij `E-maile`{.action} na pasku usług po lewej stronie, po czym wybierz odpowiednią usługę. Następnie postępuj zgodnie z instrukcjami odnoszącymi się do wersji, którą posiadasz.

|Poprzednia wersja usługi MX Plan|Nowa wersja usługi MX Plan|
|---|---|
|![email](images/mxplan-starter-legacy.png){.thumbnail}<br> Znajdź nazwę oferty w polu „Abonament”|![email](images/mxplan-starter-new.png){.thumbnail}<br>Znajdź `Oznaczenie serwera` w polu „Podsumowanie”|
|Przejdź do [Starszej wersji usługi MX Plan](./#poprzednia-wersja-uslugi-mx-plan)|Przejdź do [Nowej wersji usługi MX Plan](./#nowa-wersja-uslugi-mx-plan_1)|

### Poprzednia wersja usługi MX Plan

#### Etap 1: Dostęp do zarządzania przekierowaniami
Domyślnie znajdujesz się w karcie `Informacje ogólne`{.action} oferty MX Plan. Kliknij kartę `E-maile`{.action}, a następnie przycisk `Zarządzaj przekierowaniami`{.action} po prawej.

![emails](images/mxplan-legacy-1.png){.thumbnail}


#### Etap 2: Dodawanie przekierowania

Pojawia się tabela już aktywnych przekierowań. Kliknij przycisk `Dodaj przekierowanie`{.action} znajdujący się po prawej.

![emails](images/mxplan-legacy-2.png){.thumbnail}

Uzupełnij zgodnie z trzema poniższymi parametrami:

|Informacja|Opis| 
|---|---|  
|Z adresu |Tutaj wpisz adres e-mail, z którego chcesz przekierowywać wiadomości.|  
|Na adres|Tutaj wpisz docelowy adres e-mail przekierowania. Może to być jeden z Twoich adresów e-mail OVHcloud lub adres zewnętrzny.|
|Wybierz tryb kopii|Wybierz jedną z opcji: <br> - **Zachowaj kopię e-maila w OVH** (otrzymasz e-mail na swój adres główny oraz na adres przekierowania) <br> - **Nie zachowuj kopii e-maila** (e-mail zostanie przesłany bezpośrednio na adres przekierowania, z pominięciem adresu głównego) <br> *por. [schemat](./#informacje-ogolne){.external} na początku tego przewodnika.*|

Następnie kliknij przycisk `Zatwierdź`{.action}, aby potwierdzić dodanie tego adresu przekierowania.

![emails](images/mxplan-legacy-3.png){.thumbnail}

> [!primary]
> Jeśli wybrano opcję **Zachowaj kopię e-maila w OVH**, na liście przekierowań automatycznie tworzone jest przekierowanie z adresu e-mail na ten sam adres
> — w ten sposób tworzona jest kopia lokalna.
> 

### Nowa wersja usługi MX Plan

W przypadku nowej wersji oferty MX Plan zarządzanie przekierowaniami nie odbywa się w Panelu klienta, lecz bezpośrednio w interfejsie webmail danego adresu e-mail.

Przejdź do interfejsu webmail pod adresem [webmail](https://www.ovh.pl/mail/){.external}. Podaj **adres e-mail** i **hasło**, aby się zalogować.
![emails](images/webmail.png){.thumbnail}

#### Etap 1: Dostęp do zarządzania przekierowaniami

Po zalogowaniu się do swojego adresu e-mail przez interfejs [webmail](https://www.ovh.pl/mail/){.external}, w prawym górnym rogu kliknij symbol koła zębatego, a następnie pozycję `Opcje`{.action}.

![emails](images/mxplan-new-1.png){.thumbnail}
W lewej kolumnie okna **Opcje** przejdź do kategorii **Automatyczne przetwarzanie** w sekcji **Poczta**, a następnie kliknij pozycję `Reguły skrzynki odbiorczej i porządkowania wiadomości`{.action}. 

![emails](images/mxplan-new-2.png){.thumbnail}

W tym oknie możesz zarządzać przekierowaniami, a także filtrować wszystkie przychodzące wiadomości e-mail.

#### Etap 2: Dodawanie przekierowania

W oknie zarządzania **Reguły skrzynki odbiorczej** w lewym górnym rogu kliknij ikonę `+`{.action}.

![emails](images/mxplan-new-3.png){.thumbnail}

W tym oknie określisz reguły konieczne do utworzenia przekierowania:

|Informacja|Opis| 
|---|---|  
|Nazwa |Określ nazwę przekierowania (pole 1).|  
|Gdy wiadomość przychodzi i spełnia wszystkie warunki| Przekierowanie ma zastosowanie do wszystkich wiadomości, dlatego wybierz pozycję **[Zastosuj do wszystkich wiadomości]** (pole 2).|
|Wykonaj wszystkie następujące czynności|To tutaj odbywa się przekierowanie. Wybierz pozycję **Przekaż, przekieruj lub wyślij**, a następnie **Przekieruj wiadomość do…** (pole 3). Następnie w polu **Przekieruj wiadomość do…** wpisz adres, na który chcesz przekierowywać e-maile, i kliknij przycisk `Zapisz`{.action} (pole 4).|


![emails](images/mxplan-new-4.png){.thumbnail}

W przykładzie mamy do czynienia z **przekierowaniem z zachowaniem kopii lokalnej** (por. [schemat 2](./#informacje-ogolne){.external} na początku tego przewodnika). Jeśli to spełnia Twoje potrzeby, w lewym górnym rogu kliknij `OK`{.action} (ikona dyskietki), a reguła zostanie zastosowana. W przeciwnym razie przejdź do poniższego etapu.



Aby zastosować **przekierowanie proste** ([schemat 1](./#informacje-ogolne){.external} na początku tego przewodnika), dodaj w oknie kolejną regułę do **przekierowania z kopią lokalną**. Kliknij pozycję `Dodaj akcję`{.action} (pole 1), następnie **Przenieś, skopiuj lub usuń**, a na końcu **Usuń wiadomość**. Ta reguła spowoduje umieszczenie wiadomości bezpośrednio w koszu po przekierowaniu jej na adres przekierowania.

![emails](images/mxplan-new-5.png){.thumbnail}

Po uzupełnieniu informacji w oknie w lewym górnym rogu kliknij przycisk `OK`{.action} (ikona dyskietki).

## Sprawdź również

Dołącz do społeczności naszych użytkowników na stronie <https://community.ovh.com/en>.