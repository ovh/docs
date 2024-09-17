---
title: Dodanie rekordu CNAME w celu potwierdzenia domeny w usłudze e-mail
excerpt: Dowiedz się, jak zatwierdzić domenę na platformie e-mail przez dodanie rekordu CNAME
updated: 2023-08-29
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk “Zgłóś propozycję modyfikacji” na tej stronie.
>

## Wprowadzenie

Podczas dodawania domeny do platformy e-mail możesz zostać poproszony o skonfigurowanie rekordu CNAME w strefie DNS. Celem konfiguracji jest zyskanie pewności, że wybrana domena zostanie zarejestrowana na platformie e-mail.

> [!primary]
>
> Jeśli dodana nazwa domeny jest zarządzana z poziomu tego samego konta klienta co platforma e-mail, w szczególności jej strefa DNS, nie ma potrzeby konfigurowania rekordu CNAME.

**Dowiedz się, jak zweryfikować domenę na platformie e-mail przez dodanie rekordu CNAME.**

## Wymagania początkowe

- Dostęp do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl), sekcja `Web Cloud`{.action}.
- Posiadanie usługi [Exchange](https://www.ovhcloud.com/pl/emails/) lub [Email Pro](/links/web/email-pro).
- Dodanie domeny do platformy e-mail. W razie potrzeby skorzystaj z przewodnika "[Dodawanie domeny do platformy e-mail](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/exchange_adding_domain)".
- Posiadanie możliwości [skonfigurowania strefy DNS](/pages/web_cloud/domains/dns_zone_edit) danej domeny w Panelu klienta OVHcloud lub z poziomu interfejsu zarządzania, w którym jest ona zarejestrowana.

## W praktyce

### Dlaczego warto utworzyć wpis CNAME?

Rekord CNAME jest tu używany jako alias, ale wskazuje na adres docelowy, który z kolei odsyła do adresu IP. Nie jest to zatem, z natury, rekord powiązany z usługą e-mail.

W ramach usług [**Hosted Exchange**](https://www.ovhcloud.com/pl/emails/hosted-exchange/) i [**Email Pro**](/links/web/email-pro), wpis CNAME jest używany jako kod potwierdzający (token), który będzie widoczny w strefie DNS domeny, którą chcesz zatwierdzić. Celem jest sprawdzenie, czy użytkownik platformy e-mail jest menedżerem nazwy domeny, którą dodaje.

Na poniższym schemacie platforma e-mail ([Exchange](https://www.ovhcloud.com/pl/emaile/) lub [Email Pro](https://www.ovhcloud.com/pl/emaile/email-pro/)) jest reprezentowana przez zieloną ramkę.<br>
Aby utworzyć adresy e-mail, dodajesz konta (w tym przypadku oznaczone jako "**kontakt**", "**john.smith**" i "**mary.johnson**").<br>
Domena **mydomena.ovh** została dodana do platformy e-mail (zapoznaj się z przewodnikiem "[Dodawanie domeny do platformy e-mail](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/exchange_adding_domain)").<br>
Kod potwierdzający jest generowany przez platformę (w naszym przykładzie w postaci "**abcd1-check**").<br>
Jeśli strefa DNS domeny **mydomain.ovh** nie jest zarządzana z poziomu tego samego konta klienta OVHcloud lub jest zarządzana z poziomu zewnętrznego interfejsu zarządzania, kod ten należy dodać w postaci rekordu CNAME. Rekord ten jest reprezentowany przez niebieską ramkę w przykładzie.<br>
Platforma e-mail może obserwować rekordy DNS domeny **mydomain.ovh** w celu sprawdzenia obecności kodu weryfikacyjnego.

![email](images/email-dns-conf-cname01.png){.thumbnail}

Kiedy platforma e-mail przeczyta kod weryfikacyjny w strefie DNS domeny **mydomain.ovh**, będzie można utworzyć adresy **contact@mydomain.ovh**, **john.smith@mydomain.ovh** i **mary.johnson@mydomain.ovh**.

### Etap 1 - diagnostyka CNAME w OVHcloud <a name="step1"></a>

Przycisk diagnostyki **CNAME** pojawi się w zakładce Przypisane `domeny`{.action} Twojej platformy e-mail po dodaniu Twojej domeny.

![cnamedomainemail](images/cname_exchange_diagnostic.png){.thumbnail}

W powyższym przykładzie przycisk jest czerwony. Możliwe przyczyny tej diagnozy:

- **zadeklarowana nazwa domeny nie jest zarządzana z poziomu tego samego konta klienta OVHcloud co Twoja platforma e-mail**: skorzystaj z [etapu 3](#step3) niniejszego przewodnika w Panelu klienta konta OVHcloud, które zarządza strefą DNS domeny.
- **zadeklarowana nazwa domeny używa zewnętrznych serwerów DNS OVHcloud**: domena jest zarejestrowana w OVHcloud, ale używasz "niestandardowych" serwerów DNS. Aby to sprawdzić, w sekcji `Domeny`{.action} w kolumnie z lewej strony wybierz odpowiednią domenę. W zakładce `Informacje ogólne`{.action} sprawdź opcję "Serwery DNS". Jeśli wskazuje `Serwery niestandardowe`{.action}, należy zalogować się do interfejsu zarządzania serwerami DNS zarejestrowanymi w karcie `Serwery DNS`{.action}

![email](images/email-dns-conf-cname02.png){.thumbnail}

- **zadeklarowana nazwa domeny nie jest zarejestrowana w OVHcloud i nie używa serwerów DNS OVHcloud**: domena jest zarejestrowana u innego operatora. Należy sprawdzić w interfejsie rejestratora domeny serwery DNS i wybrać serwery DNS używane do identyfikacji lokalizacji, w których należy skonfigurować strefę DNS.

### Etap 2 - pobranie kodu aktywacyjnego <a name="step2"></a>

Wejdź w zakładkę `Przypisane domeny`{.action} i kliknij na czerwony przycisk `CNAME` w kolumnie "diagnostyka", aby wyświetlić niezbędne informacje.

Rekord CNAME jest opisany w oknie dialogowym, które się pojawi.

![cnamedomainemail](images/cname_exchange_informations.png){.thumbnail}

Odkryj niepowtarzalny kod widoczny w środkowej linii (`a1bcd-check.mydomain.ovh to ovh.com.` w powyższym przykładzie).

### Etap 3 - tworzenie rekordu CNAME <a name="step3"></a>

Wybierz zakładkę odnoszącą się do Twojego przypadku:

> [!tabs]
> **W Panelu klienta OVHcloud**
>> W sekcji `Web Cloud`{.action} kliknij `Domeny`{.action}, a następnie domenę. Wybierz zakładkę `Strefa DNS`{.action}.<br>
>> Pojawi się konfiguracja strefy DNS. Aby dodać rekord CNAME, kliknij przycisk `Dodaj rekord`{.action} po prawej stronie.<br>
>> W nowym oknie pojawi się kilka rekordów DNS. Kliknij `CNAME`{.action} i wypełnij pola na podstawie informacji pobranych w [etapie 2](#step2) z tego przewodnika.<br>
>> Przykładowo, jeśli kodem weryfikacyjnym jest "**a1bcd-check**", należy go wprowadzić w polu "Subdomena". Następnie wpisz "**ovh.com.**" w części "cel", pamiętając o "**.**" final.
>>
>> ![cnamedomainemail](images/cname_add_entry_dns_zone.png){.thumbnail}
>>
>> Po uzupełnieniu tych informacji kliknij `Dalej`{.action}. Upewnij się, że wyświetlane informacje są poprawne, a następnie kliknij przycisk `Potwierdź`{.action}.<br>
>>
>> > [!warning]
>> >
>> > Modyfikacja wymaga czasu propagacji, który jest zwykle stosowany w ciągu kilku minut. Może to jednak trwać maksymalnie 24 godziny.
>>
> **Z poziomu interfejsu zewnętrznego wobec OVHcloud**
>>
>> Zaloguj się do interfejsu zarządzającego strefą DNS domeny i dodaj do niej rekord typu CNAME z następującymi ustawieniami:
>>
>> - **Subdomena**: wprowadź wartość w postaci "**xxxx-check**", zastępując "**x**" unikatowym kodem odczytanym w [kroku 2](#step2) niniejszego przewodnika.
>> - **Adres docelowy**: wprowadź wartość "**ovh.com.**" i pamiętaj o "**.**" final, jeśli interfejs wejściowy nie robi tego automatycznie.
>>
>> Potwierdź tę zmianę w strefie DNS.
>>
>> > [!warning]
>> >
>> > Ta zmiana wymaga czasu propagacji, który zwykle trwa kilka minut. Może to jednak trwać maksymalnie 24 godziny.
>> >
>>
>> Przykład odpowiedzi DNS po dodaniu rekordu CNAME:
>>
>> ```bash
>> ab1cd-check.mydomain.ovh. 3600 	W	CNAME	ovh.pl.
>> ```

Aby sprawdzić, czy konfiguracja wpisu CNAME została odczytana przez Twoją platformę e-mail, wróć do niej i przejdź do karty Przypisane `domeny`{.action}. Jeśli przycisk `CNAME` nie jest już widoczny w kolumnie "diagnostyka", nazwa domeny została poprawnie dodana. Jeśli nie jest zielony, może to oznaczać, że nie zakończyła się jeszcze propagacja.

![cnamedomainemail](images/cname_exchange_diagnostic_green.png){.thumbnail}

## Sprawdź również

Dołącz do społeczności naszych użytkowników na stronie<https://community.ovh.com>.