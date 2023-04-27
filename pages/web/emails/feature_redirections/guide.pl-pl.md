---
title: 'Korzystanie z aliasów i przekierowań e-mail'
excerpt: 'Dowiedz się, jak zarządzać aliasami i przekierowaniami e-mail'
slug: hosting_www_przekierowania_e-mail
section: 'Funkcjonalności kont e-mail'
order: 01
updated: 2020-05-20
---

<style>
.w-640 {
  max-width:640px !important;
}
</style>

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk "Zgłóś propozycję modyfikacji" na tej stronie.
>

**Ostatnia aktualizacja z dnia 01-02-2023**

## Wprowadzenie

W tym przewodniku znajdziesz różne informacje i pomoce dotyczące konfiguracji przekierowań i aliasów e-mail, na przykład w celu przesłania wiadomości otrzymanych na adres A na adres B.

**Dowiedz się, jak zarządzać aliasami i przekierowaniami e-mail.**

### Co to jest przekierowanie wiadomości e-mail?

Przekierowanie pozwala na zmianę pierwotnej podróży z jednego e-maila na jeden lub kilka innych adresów e-mail.

Na przykład chcesz, aby przy wysyłce wiadomości e-mail na adres **contact@mydomain.ovh** została ona również przekierowana na adres **john.smith@otherdomain.ovh**. Pozwala to na automatyczne przesłanie e-maila na adres **contact@mydomain.ovh** na adres **john.smith@otherdomain.ovh**.

### Co to jest alias e-mail?

W przeciwieństwie do przekierowania, adres e-mail powiązany z aliasem nie jest adresem, który się z nim konsultuje, jest to "maska".

Utworzenie aliasu dla Twojego konta e-mail umożliwia komunikację z użytkownikami konta "maska" bez ujawniania nadawcy adresu e-mail. Jeden adres e-mail może mieć kilka aliasów.

Na przykład adres e-mail to **john.smith@mydomain.ovh** oraz alias **information@mydomain.ovh**. Możesz wówczas podać do wiadomości swoich kontaktów adres **information@mydomain.ovh** i otrzymywać e-maile na **john.smith@mydomain.ovh**, bez znajomości **john.smith@mydomain.ovh**.

### Przekierowanie i alias <a name="diagram"></a>

- **Przekierowanie proste (schemat 1 poniżej)**: e-mail jest bezpośrednio wysyłany na adres przekierowania, pierwotnego adresata nie otrzymuje wiadomości e-mail.

- **Przekierowanie z kopią lokalną (schemat 2 poniżej)**: e-mail jest wysyłany do pierwotnego adresata oraz na adres przekierowania.

- **Alias e-mail (schemat 3 poniżej)**: e-mail jest wysyłany do aliasu, który zwraca go do adresata, na który został skonfigurowany alias.

![emails](images/schema-redirect.png){.thumbnail}

> [!primary]
>
> Możesz skonfigurować przekierowanie na kilka adresów e-mail.

## Wymagania początkowe

- Dostęp do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl).
- Posiadanie wcześniej skonfigurowanego rozwiązania poczty elektronicznej OVHcloud (**MX Plan**, zaproponowanego w naszej [ofercie hostingu](https://www.ovhcloud.com/pl/web-hosting/), zawartego w [hostingu Start10M bezpłatnie](https://www.ovhcloud.com/pl/domains/free-web-hosting/) lub zamówionym oddzielnie jako rozwiązanie autonomiczne, takie jak [Hosted Exchange](https://www.ovhcloud.com/pl/emails/hosted-exchange/) lub [Email Pro](https://www.ovhcloud.com/pl/emails/email-pro/))

## W praktyce

Rozdziały "[Utwórz przekierowanie](#redirect)" i "[Utwórz alias](#alias)" dotyczą wszystkich naszych ofert e-mail OVHcloud, **chyba że**:

- posiadasz starszą wersję usługi MXplan (aby to sprawdzić, sprawdź ramkę poniżej).
- posiadasz domenę zarejestrowaną w OVHcloud bez dołączonej oferty e-mail.

W przypadku tych dwóch wyjątków, zapoznaj się bezpośrednio z rozdziałem "[Tworzenie przekierowania lub aliasu na historycznej usłudze MX Plan lub nazwie domeny bez oferty e-mail](#mxplanlegacy)".

>
> W zależności od daty aktywacji oferty MX Plan lub jeśli [oferta została niedawno przeniesiona](https://www.ovhcloud.com/pl/web-hosting/mxplan-migration/), możliwe jest, że dysponujesz jej starszą lub nową wersją. Zanim przejdziesz dalej, musisz ją zidentyfikować.<br> 
>
> W tym celu zaloguj się do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl), części `Web Cloud`{.action}. Kliknij `E-maile`{.action}, po czym wybierz odpowiednią usługę MX Plan. Kontynuuj w zależności od wersji, którą posiadasz:<br>
>
> |Poprzednia wersja usługi MX Plan|Nowa wersja usługi MX Plan|
> |---|---|
> |![email](images/mxplan-starter-legacy.png){.thumbnail}<br> Znajdź nazwę oferty w polu „Abonament”|![email](images/mxplan-starter-new.png){.thumbnail}<br>Znajdź `Oznaczenie serwera` w polu „Podsumowanie”|
> |Przejdź do sekcji "[Poprzednia wersja usługi MX Plan](#mxplanlegacy)"|Przejdź do [sekcji Utwórz przekierowanie](#redirect) lub [Utwórz alias](#alias)|

### Utwórz przekierowanie <a name="redirect"></a>

Zarządzanie przekierowaniami nie odbywa się w Panelu klienta lecz bezpośrednio w interfejsie webmail danego adresu e-mail.

Do zobaczenia na stronie <https://www.ovhcloud.com/pl/mail/>. Podaj **adres e-mail** i **hasło**, aby się zalogować.

![emails](images/webmail.png){.thumbnail}

W przykładzie mamy do czynienia z **przekierowaniem z zachowaniem kopii lokalnej** (por. [schemat 2](#diagram) na początku tego przewodnika). Jeśli to spełnia Twoje potrzeby, w lewym górnym rogu kliknij `OK`{.action} (ikona dyskietki), a reguła zostanie zastosowana. W przeciwnym razie przejdź do poniższego etapu.

Postępuj zgodnie z instrukcjami podanymi w opisanych krokach, klikając kolejno na każdą z poniższych zakładek:

> [!tabs]
> **Etap 1**
>>
>> Po zalogowaniu się do Twojego konta e-mail przez [webmail](https://www.ovhcloud.com/pl/mail/) kliknij ikonkę koła zębatego w prawym górnym rogu, a następnie kliknij `Options`{.action}.<br><br>
>> ![emaile](images/emails-all-01.png){.thumbnail}<br>
>>
> **Etap 2**
>> W lewej kolumnie okna **Opcje** przejdź do kategorii **Automatyczne przetwarzanie** w sekcji **Poczta**, a następnie kliknij `Reguły skrzynki odbiorczej i porządkowej`{.action}. <br><br>
>> ![emails](images/emails-all-02.png){.thumbnail}<br><br>
>> W tym oknie możesz zarządzać przekierowaniami, a także filtrować wszystkie przychodzące wiadomości e-mail.<br>
>>
> **Etap 3**
>>
>> W oknie zarządzania **Reguły skrzynki odbiorczej** w lewym górnym rogu kliknij ikonę `+`{.action}.<br><br>
>> ![emails](images/emails-all-03.png){.thumbnail}<br><br>
>>
> **Etap 4**
>>
>> **Nazwa**: zdefiniuj nazwę przekierowania. <br>
>> **Kiedy wiadomość przychodzi i spełnia wszystkie te warunki**: jeśli przekierowanie dotyczy wszystkich wiadomości, wybierz `[Zastosuj do wszystkich wiadomości]`{.action}.<br><br>
>>![emails](images/emails-all-04.png){.thumbnail .w-640}<br><br>
>>
> **Etap 5**
>>
>> **Wykonać wszystkie następujące** czynności: w tym przypadku stosujesz przekierowanie, wybierz pozycję `Przekaż, przekieruj lub wyślij`{.action}, a następnie `Przekieruj wiadomość do...`{.action}.<br><br>
>>![emails](images/emails-all-05.png){.thumbnail .w-640}<br><br>
>>
> **Etap 6**
>>
>> Następnie wprowadź adres, na który chcesz przekierować e-mail przed "**Przekierowaniem wiadomości do...**" a następnie kliknij `Zapisz`{.action}. Następnie kliknij `OK`{.action} (ikona dyskietki), aby dokończyć przekierowanie.<br><br>
>>![emails](images/emails-all-06.png){.thumbnail .w-640}<br><br>
>>

> [!primary]
> Aby zastosować **przekierowanie proste** (patrz [schemat 1](#diagram) na początku tego przewodnika), dodaj w tym oknie dodatkową regułę do **przekierowania z kopią lokalną**. Kliknij `Dodaj akcję`{.action} (pole 1), a następnie `Przenieś, skopiuj lub usuń`{.action}, a następnie kliknij `Usuń wiadomość`{.action}. Ta reguła spowoduje umieszczenie wiadomości bezpośrednio w koszu po przekierowaniu jej na adres przekierowania.<br><br>
> ![emaile](images/emails-all-07.png){.thumbnail .w-640}

### Utwórz alias <a name="alias"></a>

Zaloguj się do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl) i przejdź do sekcji `Web Cloud`. Następnie wybierz menu w zależności od oferty e-mail:

- **Exchange**: w `Microsoft`{.action}, następnie w `Exchange`{.action} i wybierz odpowiednią platformę. Kliknij kartę `Konta e-mail`{.action}.

- **E-mail Pro**: w `E-mail Pro`{.action} wybierz odpowiednią platformę i kliknij zakładkę `Konta e-mail`{.action}.

- **E-maile** (MXplan): w `e-mailach`{.action} wybierz odpowiednią platformę, a następnie kliknij zakładkę `Konta e-mail`{.action}.

Aby dodać alias do konta e-mail, postępuj zgodnie z instrukcjami podanymi poniżej, klikając kolejno na każdą zakładkę:

> [!tabs]
> **Etap 1**
>>
>> W tabeli, która się wyświetli znajdziesz kolumnę `Alias`.<br><br>
>> ![emails](images/email-alias012.png){.thumbnail}<br>
>>
> **Etap 2**
>>
>> Kliknij przycisk `...`{.action} a następnie `Skonfiguruj aliasy`{.action} (lub `Zarządzaj aliasami`{.action}).<br><br>
>> ![emails](images/email-alias02.png){.thumbnail}<br>
>>
> **Etap 3**
>>
>> Kliknij `Dodaj alias`{.action}, a następnie wprowadź wybrany przez Ciebie adres dla Twojego aliasu i zatwierdź wybór.<br><br>
>> ![emails](images/email-alias03.png){.thumbnail}<br>

#### Usuń alias

W zakładce `Konta e-mail`{.action} kliknij przycisk `...`{.action} znajdujący się po prawej stronie wybranego konta e-mail. Następnie kliknij `Konfiguracja aliasów`{.action} (lub `Zarządzanie aliasami`{.action}).

Kliknij przycisk `...`{.action} po prawej stronie odpowiedniego aliasu w menu zarządzania aliasami. Na koniec kliknij `Usuń alias`{.action}.

![emails](images/email-alias04.png){.thumbnail}

#### Utwórz przekierowanie lub alias dla usługi MX Plan lub domeny bez oferty e-mail <a name="mxplanlegacy"></a>

Zaloguj się do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl) i przejdź do sekcji `Web Cloud`. Przejdź do sekcji `E-mail`{.action}:

Metoda tworzenia aliasu lub przekierowania jest ściśle taka sama. Postępuj zgodnie z instrukcjami podanymi w opisanych krokach, klikając kolejno na każdą z poniższych zakładek:

> [!tabs]
> **Etap 1**
>> Domyślnie znajdujesz się w karcie `Informacje ogólne`{.action} oferty MX Plan. Kliknij kartę `E-maile`{.action}, a następnie przycisk `Zarządzaj przekierowaniami`{.action} po prawej.<br><br>
>> ![emails](images/mxplan-legacy-1.png){.thumbnail}<br>
>>
> **Etap 2**
>>
>> Pojawia się tabela już aktywnych przekierowań. Kliknij przycisk `Dodaj przekierowanie`{.action} znajdujący się po prawej.<br><br>
>> ![emails](images/mxplan-legacy-2.png){.thumbnail}<br>
>>
> **Etap 3**
>>
>> **Z adresu**: wprowadź tutaj adres e-mail, który chcesz przekierować.<br><br>
>> **Na adres**: wprowadź tutaj docelowy adres przekierowania. Może to być jeden z Twoich adresów e-mail OVHcloud lub adres zewnętrzny.<br><br>
>> **Wybierz tryb kopii**: wybierz, czy chcesz: <br> - **Zachowaj kopię e-maila w OVHcloud** (otrzymaj e-mail na Twoim głównym adresie oraz adres przekierowania)<br> *cf. [schemat 2](#diagram) na początku tego przewodnika.*<br><br> - **Nie zachowuj kopii e-maila** (odesłanie bezpośrednio do adresu przekierowania bez otrzymania głównego adresu) <br> *cf. [schemat 1](#diagram) na początku tego przewodnika.*<br><br>
>> Następnie kliknij przycisk `Zatwierdź`{.action}, aby potwierdzić dodanie tego adresu przekierowania.<br>
>>
>> ![emails](images/mxplan-legacy-3.png){.thumbnail}


> [!primary]
>
> Jeśli wybierzesz tryb kopii "**Zachowaj kopię e-maila w OVHcloud**", na liście przekierowań automatycznie tworzone jest przekierowanie z adresu e-mail na ten sam adres, tworząc jego kopię lokalną.
> 

## Sprawdź również

Dołącz do społeczności naszych użytkowników na stronie<https://community.ovh.com/en/>.