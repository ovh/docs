---
title: "Zarządzanie przestrzenią dyskową konta e-mail"
slug: manage-email-quota
excerpt: "Dowiedz się, jak zarządzać przestrzenią dyskową konta e-mail i jej optymalizować"
section: 'Diagnostyka'
order: 02
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk „Zaproponuj zmianę” na tej stronie.
>

**Ostatnia aktualizacja z dnia 17-11-2022**

## Wprowadzenie

Każde konto e-mail OVHcloud dysponuje dedykowaną przestrzenią dyskową. Zarządzanie przestrzenią dyskową pozwala uniknąć przeciążenia przestrzeni dyskowej, nazywanej również "overquota". Domyślnie wiadomości, które odbierasz i wysyłasz są przechowywane na serwerze Twojego konta e-mail. Dzięki programowi pocztowemu (Outlook, Mail macOS, Thunderbird, itp.) możesz również lokalnie przechowywać wiadomości e-mail na komputerze.

**Dowiedz się, jak zarządzać przestrzenią dyskową konta e-mail i jak ją optymalizować.**

## Wymagania początkowe

- Posiadanie wcześniej skonfigurowanego rozwiązania poczty elektronicznej OVHcloud (**MX Plan**, zaproponowanego w naszej [ofercie hostingu](https://www.ovhcloud.com/pl/web-hosting/), zawartego w [hostingu Start10M bezpłatnie](https://www.ovhcloud.com/pl/domains/free-web-hosting/) lub zamówionym oddzielnie jako rozwiązanie autonomiczne, takie jak [**Hosted Exchange**](https://www.ovhcloud.com/pl/emails/hosted-exchange/) lub [**Email Pro**](https://www.ovhcloud.com/pl/emails/email-pro/)).
- Dostęp do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external}, sekcja `Web Cloud`{.action}.
- Dostęp do danych adresów e-mail.

> [!primary]
>
> **Szczególne przypadki**
>
> - Jeśli chodzi o bezpłatny hosting Start 10M, konieczne jest wcześniejsze aktywowanie go przed utworzeniem konta e-mail. Operację tę możesz przeprowadzić w [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external}, przechodząc do odpowiedniej domeny.
> - Zanim przejdziesz do niniejszego przewodnika, należy aktywować Twój pakiet MX Plan zawarty w [ofercie hostingu](https://www.ovhcloud.com/pl/web-hosting/){.external}. W tym celu zapoznaj się z naszym przewodnikiem "[Aktywuj konta e-mail zawarte w Twoim hostingu](https://docs.ovh.com/pl/hosting/aktywacja-kont-email-zawartych-w-hostingu/)".

## W praktyce <a name="instructions"></a>

Zarządzanie przestrzenią dyskową Twojego konta e-mail zostanie podzielone na 3 etapy w tym przewodniku. Mogą być wykonywane w kolejności lub niezależnie, w zależności od potrzeb.

- [**Sprawdź**](#check-quota) aktualny limit Twojego konta e-mail. Na tym etapie możesz oszacować bieżące zużycie zasobów i przejść do 2 kolejnych etapów.
- [**Optymalizacja**](#optimise) konta e-mail. W tym etapie otrzymasz wskazówki, które pomogą Ci utrzymać przestrzeń dyskową bez zbędnych elementów.
- [**Archiwizuj** lub **Zmień ofertę e-mail**](#archiveorswitch). Jeśli ostatni etap nie wystarczy, znajdziesz informacje niezbędne do skonfigurowania lokalnej przestrzeni archiwizacji (na komputerze) dla e-maili przy użyciu programu pocztowego. Znajdziesz również informacje niezbędne do zmiany oferty e-mail Twojego konta na ofertę dysponującą większą przestrzenią dyskową.

![email](images/email-quota-intro.gif){.thumbnail}

### 1- **Sprawdź** aktualny limit konta e-mail <a name="check-quota"></a>

Możesz przeprowadzić tę operację w Panelu klienta, jeśli posiadasz uprawnienia do zarządzania usługą e-mail lub w interfejsie Webmail, jeśli jesteś tylko użytkownikiem konta e-mail.

#### W Panelu klienta <a name="quotacontrolpanel"></a>

W [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external} przejdź do sekcji `Web Cloud`{.action} i postępuj zgodnie z instrukcjami zawartymi w Twojej ofercie:

> [!tabs]
> **E-maile (MXplan)**
>>
>> Kliknij `E-maile`{.action}, po czym wybierz odpowiednią usługę MX Plan. Przejdź do zakładki `Konta e-mail`{.action}. Pojawi się okno, w którym widoczne są istniejące konta e-mail. W kolumnie `Rozmiar` możesz sprawdzić zużycie przestrzeni dyskowej Twojego konta e-mail.<br><br>
>>![email](images/email-quota-quotacontrolpanel01.png){.thumbnail}<br>
>>
> **Email Pro**
>>
>> Kliknij `E-mail Pro`{.action}, po czym wybierz odpowiednią platformę. Przejdź do zakładki `Konta e-mail`{.action}. Pojawi się okno, w którym widoczne są istniejące konta e-mail. W kolumnie `Rozmiar` możesz sprawdzić zużycie przestrzeni dyskowej Twojego konta e-mail.<br><br>
>>![email](images/email-quota-quotacontrolpanel02.png){.thumbnail}<br>
>>
> **Exchange**
>>
>> Kliknij `Microsoft`{.action} / `Exchange`{.action}, następnie wybierz odpowiednią platformę. Przejdź do zakładki `Konta e-mail`{.action}. Pojawi się okno, w którym widoczne są istniejące konta e-mail. W kolumnie `Rozmiar` możesz sprawdzić zużycie przestrzeni dyskowej Twojego konta e-mail.<br><br>
>>![email](images/email-quota-quotacontrolpanel03.png){.thumbnail}<br>
>>

#### Z poziomu interfejsu Webmail <a name="quotawebmail"></a>

Aby zalogować się do interfejsu Webmail, przejdź do strony <https://www.ovhcloud.com/pl/mail/>i wprowadź dane do logowania do konta e-mail. Wybierz poniżej interfejs webmail dla swojej usługi:

> [!tabs]
> **OWA**: **E-maile (MXplan)** / **E-mail Pro** / **Exchange**
>>
>> Kliknij przycisk <i class=".icons-gear-concept icons-masterbrand-blue"></i>w prawym górnym rogu ekranu, kliknij `Opcje`{.action}. Kliknij `Moje konto`{.action} w sekcji `Ogólne`{.action} w kolumnie po lewej stronie. Możesz wyświetlić aktualny limit Twojego konta w dolnej prawej części formularza.<br><br>
>>![email](images/email-quota-webmail01.png){.thumbnail}<br>
>>
> **Roundcube**: **E-maile (MXplan)**
>>
>> Po zalogowaniu się do interfejsu Webmail Roundcube limit jest widoczny w dolnej części lewej strony, potwierdzony wykresem oraz wykorzystany procent.<br><br>
>>![email](images/email-quota-webmail02.png){.thumbnail}<br>
>>

### 2- **Optymalizacja** konta e-mail <a name="optimise"></a>

Jeśli Twoje konto e-mail jest przeciążone, oznacza to, że nie jesteś już w stanie otrzymywać e-maili.<br>
Po wysłaniu e-maila osoba otrzymuje e-mail informujący o błędzie typu *"552, "5.2.2". Konto poczty elektronicznej, do którego wysłana została wiadomość, wyczerpało jej limit. "*.<br>
Jeśli Twoje konto e-mail jest przeciążone, możesz zawsze wysyłać e-maile po swojej stronie. Tymczasem te e-maile nie będą mogły być przechowywane w Twojej "skrzynce pocztowej".

#### Zoptymalizuj dostępną przestrzeń dla konta e-mail

Przed wykonaniem jakiejkolwiek innej operacji na Twoim koncie e-mail zapoznaj się z treścią Twojego konta e-mail, aby usunąć wszystkie zbędne elementy. Sprawdź niektóre z nich:

- `1`{.action} **La Corbee (trash)**: zawiera ona elementy, które usunąłeś. Aby uniknąć gromadzenia e-maili w tym folderze, zalecamy regularne usuwanie kosza.
- `2`{.action} **Elementy wysłane (sent messages)**: po wysłaniu wiadomości e-mail zostanie ona wysłana do odbiorcy. Jest on również przechowywany na koncie e-mail w "przesłanych elementach". Zalecamy regularne czyszczenie tego katalogu lub archiwizację jego zawartości lokalnie na komputerze lub na zdalnej przestrzeni dyskowej typu "cloud".
- `3`{.action} **Przechowywane e-maile zawierające duże** załączniki: e-maile zawierające załączniki zajmują więcej miejsca na koncie e-mail. Zalecamy przechowywanie dużych obiektów na lokalnej lub zdalnej przestrzeni dyskowej (w chmurze).
- `4`{.action}**Sortuj akta**: gdy masz dużo katalogów na koncie e-mail, mniej łatwo jest zmierzyć zajętą przestrzeń na koncie e-mail. Regularnie przeglądaj swoje katalogi i ich zawartość.

![email](images/email-quota-optimise01.png){.thumbnail}

#### Zwiększ rozmiar konta e-mail

Zwiększ rozmiar przestrzeni dyskowej Twojego konta e-mail, jeśli konto nie osiągnie maksymalnej pojemności. Poniżej przedstawiamy procedurę, którą należy zastosować w zależności od Twojej oferty:

> [!tabs]
> **E-maile (MXplan)**
>>
>> Rozmiar konta MXplan może wynosić od 2,5 MB do 5 GB. Jeśli pojemność jest wysycona i mniejsza niż 5 GB, możesz zmienić jej pojemność poprzez [Panel klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl).<br>
>> Z karty `Konta e-mail`{.action}, kliknij przycisk <i class="icons-elipsis icons-border-rounded icons-masterbrand-blue"></i> po prawej stronie konta, które chcesz zmienić, po czym kliknij `Zmień`{.action}.
>> W kratce `Quota`{.action} wybierz odpowiedni rozmiar, kliknij `Dalej`{.action}, a następnie `Zatwierdź`{.action}.<br><br>
>> ![e-mail](images/email-quota-more01.png){.thumbnail}<br>
>>
> **Email Pro**
>> 
>> Oferta Email Pro posiada unikalną pojemność 10 GB. Jeśli potrzebujesz większej przestrzeni dyskowej, zmień ofertę proponującą więcej przestrzeni dyskowej. W tym celu przeczytaj sekcję [zmiana oferty, aby zwiększyć jej wydajność](#switchingoffer) tego przewodnika.<br>
>>
> **Exchange**
>>
>> Jeśli Twoje konto Exchange przekroczy rozmiar 50 GB, możesz zamówić opcję rozszerzenia dla **Hosted** i **Provider**, aby zwiększyć pojemność konta do 300 GB.<br>
>> Z karty `Konta e-mail`{.action} Twojej platformy kliknij przycisk <i class="icons-elipsis icons-border-rounded icons-masterbrand-blue"></i> z prawej strony konta do zmiany, a następnie kliknij `Zwiększ pojemność do 300 GB`{.action}. Wybierz odpowiedni dla Ciebie tryb płatności i kliknij na `Zatwierdź`{.action}.<br>>
>>![email](images/email-quota-more02.png){.thumbnail}<br>
>>
>> Jeśli Twoje konto Exchange wypełniło już 300 GB przestrzeni dyskowej w ofercie **Hosted** lub **Provider**, musisz zwolnić miejsce na koncie Exchange usuwając zbędne elementy lub [archiwizując wiadomości e-mail](#archiveorswitch) lokalnie. Dotyczy to również kont Exchange o pojemności 50 GB zainstalowanych w ofercie **Private**.
>>

### 3- **Archiwum** lub **zmiana oferty e-mail** <a name="archiveorswitch"></a>

#### Archiwizuj wiadomości e-mail lokalnie na Twoim komputerze

> [!warning]
> 
> Poniższe informacje są oparte na konfiguracji IMAP Twojego konta e-mail, ponieważ konfiguracja ta jest najbardziej popularna. Konfiguracja POP opiera się na zasadzie lokalnego przechowywania wiadomości e-mail. W tym kontekście nie ma sensu archiwizować e-maili, które są już przechowywane lokalnie na komputerze.

Kiedy skonfigurowałeś Twoje konto e-mail w programie pocztowym IMAP, **domyślnie** widoczne treści odpowiadają tym, co jest **zsynchronizowane z serwerem e-mail**. Oznacza to, że e-maile są ładowane na Twój komputer, ale znikają, jeśli zostaną usunięte z serwera. Aby je **zarchiwizować na komputerze**, skonfiguruj program pocztowy.

![email](images/email-quota-step03-archive.png){.thumbnail}

Jeśli chcesz, możesz zwolnić przestrzeń dyskową Twojego konta e-mail, zapisując e-maile bezpośrednio na Twoim komputerze. W tym celu konieczne będzie skorzystanie z programu pocztowego zainstalowanego na Twoim komputerze.
Do zadań programu pocztowego należy konwersja e-maili na pliki, które będą mogły być przechowywane na Twoim komputerze. Konieczne jest jednak skonfigurowanie funkcji "archiwum" Twojego programu pocztowego. E-maile będą wówczas przechowywane w folderze "lokalnym", a nie bezpośrednio na serwerze Twojego konta e-mail.

Poniżej znajduje się przykładowa lista przewodników konfiguracyjnych dla klientów poczty elektronicznej, w zależności od posiadanej oferty:

Poniżej znajduje się niewyczerpująca lista przewodników konfiguracyjnych dla klientów poczty elektronicznej używających:

- protokół IMAP w ofercie **MXplan** i **E-mail Pro**;
- protokół MAPI w sprawie oferty **Exchange** dla Outlook Windows;
- protokół EWS w sprawie oferty **Exchange** dla Outlook macOS.

> [!tabs]
> **E-maile (MXplan)**
>>
>> Konfiguracja konta MXplan na **Windows* :<br><br>
>> - [Poczta na urządzeniu z systemem Windows 10](https://docs.ovh.com/pl/emails/konfiguracja-poczta-windows-10/) (zawarte w systemie Windows)<br>
>> - [Outlook for Mxplan](https://docs.ovh.com/pl/emails/konfiguracja-outlook-2016/)
>> - [Thunderbird](https://docs.ovh.com/pl/emails/konfiguracja_konta_e-mail_w_programie_thunderbird/) (za darmo)<br><br>>
>> Konfiguracja konta MXplan na **macOS** :<br>
>> - [Mail](https://docs.ovh.com/pl/emails/konfiguracja-mail-macos/) (zawarte w macOS)<br>
>> - [Outlook](https://docs.ovh.com/pl/emails/konfiguracja-outlook-2016-mac/)<br>
>> - [Thunderbird](https://docs.ovh.com/pl/emails/hosting_www_konfiguracja_konta_e-mail_w_programie_thunderbird_mac/) (za darmo)
>>
> **E-mail Pro**
>>
>> Konfiguracja konta E-mail Pro na **Windows* :<br><br>
>> - [Poczta na urządzeniu z systemem Windows 10](https://docs.ovh.com/pl/emails-pro/konfiguracja-poczta-windows-10/) (zawarte w systemie Windows)<br>
>> - [Outlook](https://docs.ovh.com/pl/emails-pro/konfiguracja-outlook-2016/)<br>
>> - [Thunderbird](https://docs.ovh.com/pl/emails-pro/konfiguracja-thunderbird-emailpro-windows/) (za darmo)<br><br>>
>> Konfiguracja konta E-mail Pro na **macOS** :<br>>
>> - [Mail](https://docs.ovh.com/pl/emails-pro/konfiguracja-email-pro-mail-macos/) (zawarte w macOS)<br>
>> - [Outlook](https://docs.ovh.com/pl/emails-pro/konfiguracja-email-pro-mail-macos/)<br>
>> - [Thunderbird](https://docs.ovh.com/pl/emails-pro/konfiguracja-thunderbird-emailpro-mac/) (za darmo)<br>
>>
> **Exchange**
>>
>> Konfiguracja konta Exchange na **Windows* :<br><br>
>> - [Poczta na urządzeniu z systemem Windows 10](https://docs.ovh.com/pl/microsoft-collaborative-solutions/konfiguracja-poczta-windows-10/) (zawarte w systemie Windows)<br>
>> - [Outlook](https://docs.ovh.com/pl/microsoft-collaborative-solutions/konfiguracja-outlook-2016/)<br>
>> - [Thunderbird](https://docs.ovh.com/pl/microsoft-collaborative-solutions/exchange_20132016_konfiguracja_w_programie_thunderbird/) (za darmo)<br><br>>
>> Konfiguracja konta Exchange na **macOS** :<br><br>
>> - [Mail](https://docs.ovh.com/pl/microsoft-collaborative-solutions/konfiguracja-mail-macos/) (zawarte w macOS)<br>
>> - [Outlook](https://docs.ovh.com/pl/microsoft-collaborative-solutions/konfiguracja-outlook-2016-mac/)<br>
>> - [Thunderbird](https://docs.ovh.com/pl/microsoft-collaborative-solutions/konfiguracja-exchange-thunderbird-mac/) (za darmo)<br>
>>

Po zainstalowaniu programu pocztowego postępuj zgodnie z instrukcjami podanymi poniżej, aby przygotować folder archiwum w programie pocztowym.

> [!tabs]
> **Outlook**
>>
>> W programie Outlook upewnij się, że w lewej kolumnie znajduje się folder "archiwum" lub "na moim komputerze", aby móc umieścić w nim elementy, które chcesz przechowywać lokalnie na komputerze. Zapoznaj się z dokumentacją Microsoft, aby przygotować Twój archiwum:<br><br>
>> - [Archiwizacja w programie Outlook dla Windows](https://support.microsoft.com/pl-pl/office/archiwizowanie-w-programie-outlook-dla-systemu-windows-25f75777-3cdc-4c77-9783-5929c7b47028){.external}<br>
>> - [O folderach na moim komputerze w programie Outlook for Mac](https://support.microsoft.com/pl-pl/office/informacje-o-folderach-na-moim-komputerze-w-outlook-dla-komputer%C3%B3w-mac-c91b8729-924d-4c25-a5f6-38883d0f763d){.external}<br>
>>
> **Mail macOS**
>>
>> Z poziomu aplikacji Mail na macOS utwórz folder, który pojawi się w sekcji "Na moim Mac" w kolumnie z lewej strony. W tym celu postępuj zgodnie z dokumentacją Apple:<br><br>
>> - [Tworzenie lub usuwanie skrzynek na listy w aplikacji Mail na urządzeniu Mac](https://support.apple.com/pl-pl/guide/mail/mlhlp1021/15.0/mac/12.0){.external}<br>
>>
> **Thunderbird**
>>
>> Poprzez thunderbird z systemem Windows, macOS lub Linux, możesz przenosić wiadomości e-mail do folderu po lewej stronie. Skorzystaj z dokumentacji Mozilli:<br><br>
>> - [Archiwizacja wiadomości](https://support.mozilla.org/pl/kb/archiwizowanie-wiadomosci){.external}<br>
>>

#### Zmiana oferty w celu zwiększenia przepustowości <a name="switchingoffer"></a>

Z poniższego menu wybierz aktualną ofertę Twojego konta e-mail:

> [!tabs]
> **E-maile (MXplan)**
>>
>> Jeśli rozmiar konta e-mail wynosi maksymalnie 5 GB, możesz przejść na ofertę [**Email Pro** o rozmiarze 10 GB](https://www.ovhcloud.com/pl/emails/email-pro/) lub [**Hosted Exchange** 50 GB](https://www.ovhcloud.com/pl/emails/hosted-exchange/). W tym celu zachęcamy do zamówienia wybranej oferty i zapoznania się z naszą dokumentacją "[Migracja konta e-mail MX Plan na konto E-mail Pro lub Exchange](https://docs.ovh.com/pl/microsoft-collaborative-solutions/migracja-adres-e-mail-na-hostingu-na-exchange/)". 
>>
> **Email Pro**
>>
>> Oferta Email Pro posiada unikalną pojemność 10GB. Możesz wybrać opcję migracji na ofertę [**Hosted Exchange** 50 GB](https://www.ovhcloud.com/pl/emails/hosted-exchange/). W tym celu zachęcamy do zamówienia wybranej oferty i zapoznania się z naszą dokumentacją "[Migracja kont e-mail z jednej platformy e-mail OVHcloud do innej](https://docs.ovh.com/pl/microsoft-collaborative-solutions/migration-email-platform/)".
>>
> **Exchange**
>>
>> Jeśli Twoje konto Exchange przekroczy limit 50 GB przestrzeni, możesz zamówić opcję rozszerzenia, aby zwiększyć pojemność konta do 300 GB. Dotyczy to tylko sytuacji, gdy konto Exchange znajduje się w ofercie **Hosted** lub **Provider**.<br>
>> Z karty `Konta e-mail`{.action} Twojej platformy Exchange kliknij przycisk <i class="icons-elipsis icons-border-rounded icons-masterbrand-blue"></i> po prawej stronie konta, które chcesz zmienić, a następnie kliknij `Zwiększ pojemność do 300 GB`{.action}.<br>>
>> ![email](images/email-quota-more02.png){.thumbnail}<br>
>>

## Sprawdź również

[Przeniesienie konta e-mail MX Plan na konto E-mail Pro lub Exchange](https://docs.ovh.com/pl/microsoft-collaborative-solutions/migracja-adres-e-mail-na-hostingu-na-exchange/)

[Ręczna migracja Twojego konta e-mail](https://docs.ovh.com/pl/emails/przenoszenie-kont-e-mail/)

[Przeniesienie kont e-mail z jednej platformy e-mail OVHcloud na inną](https://docs.ovh.com/pl/microsoft-collaborative-solutions/migration-email-platform/)

Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i korzystania z rozwiązań OVHcloud, sprawdź naszą [ofertę wsparcia](https://www.ovhcloud.com/pl/support-levels/).

Dołącz do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.
