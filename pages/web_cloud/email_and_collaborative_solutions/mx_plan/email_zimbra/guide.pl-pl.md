---
title: "MX Plan - Korzystaj z interfejsu Webmail Zimbra"
excerpt: "Poznaj interfejs Zimbra Webmail dla Twoich kont e-mail MX Plan OVHcloud"
updated: 2024-08-26
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk "Zgłoś propozycję modyfikacji” na tej stronie.
>

<style>
.w-400 {
  max-width:400px !important;
}
</style>

> [!primary]
>
> **Ważne**
>
> Webmail Zimbra dla MX Plan jest wdrażany.
>
> Aktualnie usługa jest dostępna wyłącznie w związku z migracjami związanymi ze zmianą oferty MX Plan. Migracja jest automatyczna. Gdy użytkownik zostanie objęty migracją, nasi pracownicy wyślą mu wiadomość e-mail.
>
> Aby uzyskać więcej informacji, sprawdź nasz [FAQ dotyczący rozwiązania Zimbra OVHcloud](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/faq-zimbra).

## Wprowadzenie

Korzystając z oferty MX Plan OVHcloud możesz wysyłać i odbierać wiadomości e-mail za pośrednictwem klienta poczty (Thunderbird, Outlook, Mail na komputery Mac) lub webmaila bezpośrednio w przeglądarce internetowej Twojego urządzenia.<br>
OVHcloud dostarcza usługę webmail o nazwie Zimbra umożliwiającą dostęp do konta e-mail typu MX Plan. Na tej stronie omówimy funkcje niezbędne do korzystania z tego webmaila.

**Dowiedz się, jak korzystać z poczty Zimbra Webmail dla Twoich kont e-mail MX Plan OVHcloud**

## Wymagania początkowe

- Posiadanie rozwiązania e-mail OVHcloud **MX Plan**, dostępnego w ramach naszej [oferty hostingu](https://www.ovhcloud.com/pl/web-hosting/), zawartego w bezpłatnym [hostingu 100M](https://www.ovhcloud.com/pl/domains/free-web-hosting/) lub zamówionego oddzielnie jako samodzielne rozwiązanie.
- Dane do logowania do konta e-mail MX Plan, które chcesz sprawdzić. Aby uzyskać więcej informacji, zapoznaj się z przewodnikiem "[Pierwsze kroki z ofertą MX Plan](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_generalities)".

## W praktyce

**Spis treści**

- [Logowanie do webmaila Zimbra](#login)
- [Ogólny interfejs webmaila Zimbra](#general-interface)
- [Zarządzanie folderami konta e-mail](#folders-management)
    - [Katalogi specjalne](#folders-specials)
    - [Tworzenie folderów](#folders-creation)
 - [Przetwarzanie wiadomości](#email-management)
    - [Operacja na wybranym e-mailu](#email-action)
    - [Wyszukaj e-mail](#email-search)
- [Napisz wiadomość e-mail](#email-writing)
- [Skonfiguruj preferencje interfejsu Zimbra](#settings)
- [Kontakty](#contacts)
    - [Zarządzanie folderami](#contacts-folders)
    - [Zarządzanie listami](#contacts-lists)
    - [Import / Eksport kontaktów](#import-export)
- [Kalendarz](#calendar)
    - [Zarządzanie kalendarzami](#calendar-management)
    - [Zadania](#tasks)
- [Filtry](#filters)
    - [Jak skonfigurować filtry](#filters-howto)
    - [Utwórz filtr](#filters-creation)
- [Delegacje](#delegations)
- [Podpis](#signatures)
- [Odpowiedzi automatyczne / Poczta głosowa](#auto-reply)

### Logowanie do webmaila Zimbra <a name="login"></a>

Przejdź do strony <https://www.ovh.com/pl/mail/>. Wpisz adres e-mail i hasło, a następnie kliknij `Wyślij`{.action}.

![Zimbra - logowanie](images/ovhcloud-login-webmail.png){.thumbnail}

Zostaniesz wówczas przekierowany do interfejsu Zimbra.

![Zimbra - interfejs](images/zimbra-01.png){.thumbnail}

### Ogólny interfejs webmaila Zimbra <a name="general-interface"></a>

Po zalogowaniu się do swojego konta e-mail masz dostęp do głównego okna Zimbra, które składa się z 3 stref:

> [!tabs]
> **Menu górne**
>>
>> - **(1)** Ta część interfejsu umożliwia wybranie jednej z funkcji dostępnych na koncie e-mail, `poczta` e-mail lub `kontakty`. Domyślnie znajdujesz się na karcie `poczta`.
>> - **(2)** Pasek wyszukiwania pozwala na odnalezienie wiadomości lub kontaktów.
>> - **(3)** Menu zarządzania profilem konta e-mail oraz przycisk dostępu do ustawień **(4)**.
>>
>> ![Zimbra - górne menu](images/zimbra-02.png){.thumbnail}
>>
> **Lewa kolumna**
>>
>> Domyślnie jest to drzewo konta e-mail składające się z folderów i podfolderów. Katalog główny jest `Skrzynka odbiocza`.
>>
>> ![Zimbra — drzewo](images/zimbra-03.png){.thumbnail}
>>
> **Okno środkowe**
>>
>> Domyślnie wiadomości e-mail są wyświetlane w tym obszarze, który zawiera dwie części:
>>
>> - **(1)** wykaz elementów
>> - **(2)** Zawartość wybranego elementu
>>
>> ![Zimbra - E-maile](images/zimbra-04.png){.thumbnail}
>>

### Zarządzanie folderami konta e-mail (lewa kolumna) <a name="folders-management"></a>

W tym obszarze wyświetlają się foldery znajdujące się na Twoim koncie e-mail. Znajdziesz tam **specjalne** katalogi, które już posiadasz (na pomarańczowo) oraz katalogi, które **utworzyłeś** (na zielono).

![Zimbra - dokumentacja](images/zimbra-05.png){.thumbnail}

#### Katalogi specjalne <a name="folders-specials"></a>

Foldery specjalne są automatycznie tworzone przez serwer e-mail. Stanowią podstawę konta e-mail.

- **Skrzynka odbiocza**: e-maile są dostarczane domyślnie w tym folderze (poza zastosowanymi filtrami).
- **Kopie robocze**: wiadomości napisane, ale nie wysłane, są zapisywane w tym folderze.
- **Wysłane**: wysłane e-maile są automatycznie przechowywane w tym folderze.
- **Archiwum**: folder domyślny do sortowania przetworzonych wiadomości e-mail.
- **Spam**: folder z niechcianymi wiadomościami e-mail.
- **Kosz**: Usunięte e-maile są przechowywane w tym folderze przed ich trwałym usunięciem.

> [!primary]
>
> Nie można usunąć folderów specjalnych.

#### Tworzenie folderów <a name="folders-creation"></a>

Aby sklasyfikować wiadomości e-mail według swoich potrzeb, możesz utworzyć własne katalogi.

Aby utworzyć nowy folder, kliknij przycisk `+ Dodaj folder`{.action} u dołu kolumny.

Możesz również utworzyć podfolder, klikając prawym przyciskiem myszy wybrany folder, a następnie klikając polecenie `Utwórz podfolder`{.action}.

> [!primary]
>
> Foldery "Kopie robocze", "Spam" i "Kosz" nie mogą zawierać podfolderów.

### Przetwarzanie wiadomości <a name="email-management"></a>

Po zaznaczeniu folderu lub podfolderu w lewej kolumnie lista zawartych w nim e-maili pojawia się w środkowej kolumnie. Następnie kliknij wybraną wiadomość e-mail, aby wyświetlić jej zawartość w prawym oknie.

> [!primary]
>
> **Typ wyświetlania**
>
> Twoje wiadomości e-mail wyświetlają się w formie, którą można zmienić. Kliknij przycisk `Widok`{.action} w prawym górnym rogu okna.

#### Operacja na wybranym e-mailu <a name="email-action"></a>

Po wybraniu wiadomości e-mail dostępnych jest wiele operacji:

- 1.**Odpowiedz**: odpowiedz bezpośrednio nadawcy.
- 2.**Odpowiedz wszystkim**: odpowiedz bezpośrednio do wszystkich adresatów wpisanych w pola "A" i "Kopia".
- 3.**Przekaż**: Prześlij wybraną wiadomość e-mail do jednego lub kilku odbiorców.
- 4.**Archiwum**: przeniesienie e-maila do folderu "Archiwum" na koncie e-mail.
- 5.**Przenieś**: przenieś e-mail do jednego z folderów konta e-mail.
- 6.**Usuń**: umieść wybraną wiadomość e-mail w "Koszu".
- 7.**SPAM**: umieść wybraną wiadomość bezpośrednio w folderze spamu (SPAM).
- 8.**Więcej**
    - **Oznacz jako przeczytane**.
    - **Oznacz jako nieprzeczytane**.
    - **Gwiazdka**: przypisz gwiazdkę do swojego e-maila, aby go wyróżnić i łatwiej go zidentyfikować.
    - **Usuń gwiazdkę**: usuń gwiazdkę przypisaną do tego e-maila.
    - **Pokaż oryginał**: Wyświetl całą wiadomość, jej treść i nagłówek.
    - **Nowy filtr**: Utwórz filtr na podstawie wybranego tematu wiadomości i nadawcy.
    - **Drukuj**: drukuj wybraną konwersację lub wiadomość e-mail.
- 9.**Widok**: wybierz jeden z 3 układów, aby wyświetlić foldery i e-maile.

![Zimbra - działania](images/zimbra-07.png){.thumbnail}

Możesz uzyskać dostęp do tych opcji, klikając prawym przyciskiem myszy każdą z e-maili w środkowej kolumnie.

> [!primary]
>
> Jeśli osoba, z którą korespondujesz zwróci się o potwierdzenie przeczytania e-maila, otrzymasz następujący szablon wiadomości: `John poprosił o potwierdzenie przeczytania tego e-maila. Wyślij potwierdzenie przeczytania`.
>

#### Wyszukaj e-mail <a name="email-search"></a>

Jeśli chcesz znaleźć e-mail, skorzystaj z paska wyszukiwania w górnej części Twojego interfejsu. Następnie możesz przeprowadzić **proste wyszukiwanie** lub **zaawansowane wyszukiwanie**, jak opisano w poniższych zakładkach:

> [!tabs]
> **Proste wyszukiwanie**
>>
>> Wpisz słowa kluczowe, które chcesz znaleźć na pasku wyszukiwania i naciśnij klawisz `Enter`, aby zatwierdzić wyszukiwanie. Słowa będą podświetlane w wynikach wyszukiwania.
>>
>> > Jeśli wiesz, gdzie szukać elementu, możesz wpisać słowa kluczowe ( **from**, **to**, **cc**, **subject**, itp.), po których następuje dwukropek (`:`), a następnie wyszukać element w polu tekstowym wyszukiwania. Na przykład, jeśli chcesz szybko wyszukać nadawcę, możesz wpisać "from:" przed adresem e-mail, którego szukasz. Na przykład "from: address@example.com".
>>
>> ![Zimbra - proste wyszukiwanie](images/zimbra-08.png){.thumbnail}
>>
> **Zaawansowane wyszukiwanie**
>>
>> Aby wyświetlić więcej informacji, kliknij krokwę w prawej części paska wyszukiwania. Dzięki temu możesz ograniczyć wyszukiwanie do katalogu, przedziału czasowego, tematu lub treści wiadomości, etc.
>>
>> ![Zimbra - zaawansowane wyszukiwanie](images/zimbra-09.png){.thumbnail}
>>

### Napisz wiadomość e-mail <a name="email-writing"></a>

Aby utworzyć nową wiadomość e-mail, kliknij przycisk `Nowa wiadomość`{.action} (1) w lewym górnym rogu okna Zimbra.

![Zimbra - napisz e-mail](images/zimbra-10.png){.thumbnail}

> [!tabs]
> **Nagłówek**
>>
>> Nagłówek umożliwia uzupełnienie następujących pól:
>>
>> - **Od** : adres email, z którego wysyłasz wiadomości. Domyślnie jest to Twój adres e-mail. Możesz zmienić adres nadawcy, klikając krokwę po prawej stronie Twojego adresu e-mail, tylko jeśli utworzono [delegację](#delegations).<br>
>> - **Do** : odbiorca(y) Twojej wiadomości e-mail. Kliknij na `Do`{.action}, aby przejść do [książki adresowej](#contacts) i wybrać odbiorców.<br>
>> - **DW**: Kliknij `DW/UDW`{.action} po prawej stronie pola `Do`{.action}, aby wyświetlić to pole. Cloud Copy to pole odbiorcy, które umożliwia wysłanie e-maila w kopii do osób, które chcesz zintegrować z pętlą, bez określania ich jako bezpośrednich odbiorców e-maila (w przeciwieństwie do odbiorców w polu "**Do**").<br>
>> - **UDW**: Kliknij `DW/UDW`{.action} po prawej stronie pola `Do`{.action}, aby wyświetlić to pole. Niewidoczna kopia węglowa to pole odbiorcy, które umożliwia przesłanie wiadomości e-mail bez widzenia przez innych adresatów osoby w "**Cci**".<br>
>> - **Temat**: Tytuł e-maila, pierwszy element widoczny w momencie odebrania przed otwarciem e-maila.<br>
>> - `...`{.action} : umieszczony po prawej stronie pola `Od`{.action}, daje dostęp do 3 opcji:<br>
>>    - Możesz zakwalifikować Twój e-mail jako priorytetowy, zaznaczając opcję `Wysoki priorytet`.<br>
>>    - Kliknij pozycję `Poproś o potwierdzenie odczytu`, aby poprosić odbiorcę o potwierdzenie przeczytania.<br>
>>    - Funkcja `Zwykły tekst` wyłączy funkcje układu strony HTML w wiadomości e-mail. <br>
>>
>> ![Zimbra — nagłówek](images/zimbra-11.png){.thumbnail}
>>
> **Treść e-maila**
>>
>> Treść wiadomości e-mail można zredagować, tworząc pasek narzędzi HTML w dolnej części okna. Pozwoli Ci to na tworzenie wiadomości e-mail z układem bezpośrednio w przeglądarce. Ponadto przycisk `< >`{.action} (po prawej stronie paska narzędzi) otwiera okno, w którym można wkleić gotowy e-mail z narzędzia zewnętrznego.
>>
>> ![Zimbra — ciało](images/zimbra-12.png){.thumbnail}
>>

Po zredagowaniu wiadomości e-mail, przed kliknięciem przycisku `Wyślij`{.action}, możesz dołączyć do niej załącznik, klikając ikonę spinki znajdującą się obok przycisku `Wyślij`{.action}.

![Zimbra - załącznik](images/zimbra-13.png){.thumbnail}

> [!success]
> **Anuluj wysyłkę**
>
> Jeśli zaznaczyłeś opcję `Cofnij wysyłanie` w sekcji "**Pisanie e-maila**" preferencji Zimbra, możesz kliknąć `COFNIJ`{.action} Anuluj wysyłkę.
> Przycisk ten pozostaje dostępny przez około 5 sekund.
>
> ![Zimbra - anulowanie wysyłki](images/zimbra-cancel-email.png){.thumbnail .w-400}

### Skonfiguruj preferencje interfejsu Zimbra <a name="settings"></a>

Interfejs Zimbra posiada 2 menu konfiguracyjne:

![Zimbra - preferencje](images/zimbra-14.png){.thumbnail}

- **(1) Profil** : kliknij nazwę konta e-mail w prawej górnej części interfejsu. Z poziomu tego menu będziesz mógł "**Zmień hasło**" swojego konta e-mail, "**Zmień zdjęcie profilowe**" lub wylogować się, klikając "**Wyloguj**".

- **(2) Ustawienia**: Kliknij na ikonkę koła zębatego w prawym górnym rogu interfejsu, aby uzyskać dostęp do zmian "**Język**" w interfejsie. W sekcji "**Wsparcie**" możesz zapoznać się z oficjalną dokumentacją Zimbra. W sekcji "**Ustawienia**" znajdziesz wszystkie elementy konfiguracji opisane w następujących zakładkach:

> [!tabs]
> **Ogólne**
>>
>> W tej karcie znajdziesz zajętą przestrzeń na koncie e-mail oraz możliwość ustawienia formatu, w którym będą wyświetlane daty i godziny e-maili.
>>
> **Wyświetlanie wiadomości e-mail**
>>
>> Tutaj znajdziesz elementy związane z wyświetlaniem elementów na Twoim koncie e-mail.
>>
>> - **Podczas przeglądania list wiadomości** : te opcje pozwalają porządkować listę e-maili według grup czatów i wyświetlać więcej szczegółów.
>> - **Panel podglądu** : wybierz jeden z 3 układów, aby wyświetlić foldery i e-maile. Ta opcja jest zgodna z opcjami, które są widoczne dla przycisku `Pokaż`{.action} podczas przeglądania wiadomości e-mail.
>> - **Gęstość listy wiadomości**
>> - **Oznacz jako przeczytaną** : możesz zapamiętać zmianę statusu e-maila na "przeczytaną", gdy klikniesz ten link, lub zdecydować, aby nic nie robić i zostawić go jako "nie przeczytaną", bez żadnego działania ze strony użytkownika.
>> - **Sprawdź nową pocztę** : ustaw częstotliwość synchronizacji e-maili otrzymywanych z poziomu interfejsu Zimbra.
>> - **Przeczytaj potwierdzenia** : określ zachowanie Zimbry podczas otwierania e-maila z potwierdzeniem przeczytania.
>> - **Powiadomienia o nowej poczcie** : włącz powiadomienia po odebraniu wiadomości.
>> - **Pokaż obrazy w e-mailach** : po otwarciu wiadomości e-mail wyświetlaj lub nie zdjęcia.
>> - **Wyświetlaj wiadomości e-mail jako zwykły tekst** : ta opcja wyświetla e-mail w formacie zwykłym, bez układu strony.
>> - **Pokaż domyślnie obrazy w wiadomościach z tych zaufanych adresów i domen** domen lub adresów e-mail: ustaw zaufane adresy e-mail, dla których podczas otwierania mogą być wyświetlane obrazy.
>>
> **Pisanie e-maila**
>>
>> - **Cofnij wysyłanie** : ta opcja pozwala na wyświetlenie banera, przez 5 sekund, pozwalając na anulowanie wysyłania wiadomości e-mail.
>> - **Poproś o potwierdzenie odczytu**: ta opcja spowoduje wysłanie do adresatów prośby o potwierdzenie przeczytania podczas wysyłania im wiadomości e-mail.
>> - **Zapisz kopię w folderze Wysłane**: zaznaczona domyślnie, ta opcja zapisuje wysłane e-maile w folderze "Wysłane" na Twoim koncie e-mail.
>> - **Delegaci**: zapoznaj się z sekcją [Delegacje](#delegations) w tym przewodniku, aby dowiedzieć się, jak go używać.
>> - **Deleguj ustawienia wysyłania**: zapoznaj się z sekcją [Delegacje](#delegations) w tym przewodniku, aby dowiedzieć się, jak jest używany.
>> - **Kompozytor**: możesz ustawić swój domyślny styl pisania podczas pisania wiadomości e-mail.
>>
> **Podpisy**
>>
>> Przestrzeń ta pozwala na tworzenie podpisów.<br>
>>
>> - **Standardowy podpis** : wprowadź podpis, który będzie się wyświetlał podczas tworzenia nowego e-maila.
>> - **Odpowiedz lub prześlij podpis** wiadomości : umożliwia dodanie innego podpisu podczas odpowiadania lub przesyłania wiadomości e-mail.
>>
> **Poza biurem**
>>
>> W tej zakładce jest używana funkcja "autorespondera". Aby skonfigurować automatyczne odpowiedzi, zapoznaj się z sekcją niniejszego przewodnika "[Odpowiedzi automatyczne / autoresponder](#auto-reply)".
>>
> **Filtry**
>>
>> Aby skonfigurować filtry, należy zapoznać się z sekcją "[Filtry](#filters)" niniejszego przewodnika.
>>
> **Kalendarz i przypomnienia**
>>
>> Tutaj znajdziesz ustawienia związane z Twoimi [kalendarzami](#calendar).
>>
>> **Ogólne ustawienia kalendarza**
>>
>> - **Domyślny kalendarz**: Ustaw kalendarz używany domyślnie podczas tworzenia wydarzenia w kalendarzach.
>> - **Początek tygodnia**: dzień, który jest wyświetlany jako pierwszy w siatce kalendarza.
>> - **Początek dnia roboczego**: godzina, która pojawia się u góry wyświetlanej amplitudy czasu.
>> - **Koniec dnia roboczego**: godzina, która pojawia się w dolnej części wyświetlanej amplitudy czasu.
>> - **Strefa czasowa dnia roboczego** używana dla Twoich kalendarzy.
>> - **Podczas tworzenia lub edycji wydarzeń** : wyświetl strefy czasowe dla godzin rozpoczęcia i zakończenia.
>> - **Udostępnianie** : `Włącz delegowanie dla klientów CALDav`. Ta opcja umożliwia zarządzanie kalendarzami przy użyciu oprogramowania obsługującego protokół CALdav.
>> - **Odrzucone wydarzenia**: Wyświetla zdarzenie w kalendarzu, nawet jeśli zostało odrzucone.
>>
>> **Przypomnienia o wydarzeniach**
>>
>> - **Wysyłaj przypomnienia e-mailem na adres**: wyślij przypomnienia o zdarzeniach na adres e-mail.
>> - **Pokaż powiadomienia przeglądarki** : Chcę otrzymywać powiadomienia o wydarzeniach z przeglądarki internetowej.
>> - **Domyślny czas przypomnienia**: Domyślny czas wywołania zwrotnego po włączeniu tego zdarzenia.
>> - **Pokaż przypomnienia o zdarzeniach przeterminowanych**: kontynuuj wysyłanie przypomnień po wydarzeniu.
>>
>> **Bezpłatne zezwolenie na zajęcie**
>>
>> - **Zezwolenie na** : to ustawienie dotyczy tylko stanu dostępności związanego z kalendarzami Twojego konta e-mail. Oznacza to, że możesz udostępnić swój status "Zajęty" lub "Dostępny" innym adresom e-mail.

### Kontakty <a name="contacts"></a>

Kliknij pozycję `Kontakty` na górnym pasku, aby przejść do książki adresowej. Jest on podzielony na **3 części**:

- **(1) Foldery** (po lewej): W książce adresowej można tworzyć foldery do klasyfikowania i grupowania kontaktów.
- **(2) Lista kontaktów** (na środku): wyświetl kontakty z wybranej książki adresowej lub folderu.
- **(3) Właściwości kontaktu** lub **Nowy kontakt** (po prawej): Okno jest wyświetlane, gdy wybrany lub tworzony jest kontakt. Możesz odczytać lub zmienić dane kontaktu.

![Zimbra - kontakty](images/zimbra-15.png){.thumbnail}

Aby utworzyć nowy kontakt, kliknij przycisk `Nowy kontakt`{.action} w górnej części lewej kolumny.

Uzupełnij pola zgodnie z informacjami, które posiadasz na temat kontaktu. Możesz dodać obraz, klikając ikonę profilu w prawym górnym rogu formularza.

Następnie kliknij przycisk `Zapisz`{.action}.

![Zimbra - nowy kontakt](images/zimbra-16.png){.thumbnail}

#### Zarządzanie folderami kontaktów <a name="contacts-folders"></a>

Podobnie jak w przypadku e-maili, specjalne foldery kontaktowe są automatycznie tworzone przez serwer e-mail.

- **Kontakty**: kontakty są domyślnie przechowywane w tym folderze.
- **Kosz**: usunięte kontakty są przechowywane w tym folderze przed trwałym usunięciem.
- **Kontakt e-mail**: wszystkie kontakty, które wymieniłeś, są zapisywane w tym folderze.

Możesz tworzyć foldery i podfoldery. Umożliwiają one podzielenie kontaktów na podzbiory. Dzięki temu łatwiej będzie znaleźć kontakt w utworzonym przez Ciebie folderze niż w całej książce adresowej.

Aby utworzyć nowy folder, kliknij przycisk `+ Dodaj folder`{.action} u dołu lewej kolumny.

Możesz również utworzyć podfolder, klikając prawym przyciskiem myszy wybrany folder, a następnie klikając polecenie `Utwórz podfolder`{.action}. Foldery "Kontakty przez e-mail" i "Kosz" nie pozwalają na tworzenie podfolderów.

Aby przenieść kontakt do jednego z folderów, zaznacz go w środkowej kolumnie, a następnie w oknie kontaktu, które pojawi się po prawej stronie, kliknij przycisk `Przenieś`{.action}. Zaznacz następnie folder, który chcesz przypisać do kontaktu.

![Zimbra - sprawy z kontaktami](images/zimbra-17.png){.thumbnail}

> [!primary]
>
> Po utworzeniu kontaktu z wybranego folderu kontakt zostanie automatycznie dodany do tego folderu.

#### Zarządzanie listami <a name="contacts-lists"></a>

Możesz powiązać kontakt z jedną lub kilkoma listami. Listy umożliwiają grupowanie kontaktów, dzięki czemu można wysyłać wiadomości e-mail do wszystkich kontaktów. Na przykład, aby wysłać e-mail do dużej liczby regularnych odbiorców, wystarczy dodać nazwę listy odbiorców, zamiast dodawać jeden do jednego z kontaktów z listy.

Aby utworzyć listę, kliknij w ramce `Nowa lista` na dole lewej kolumny i wpisz nazwę listy.

Aby przypisać kontakt do jednej z list, zaznacz ten kontakt w środkowej kolumnie listy, a następnie w oknie, które pojawi się po prawej stronie, kliknij `Przypisz do list`{.action}. Zaznacz listę lub listy, które chcesz przypisać do kontaktu. Możesz również wpisać nazwę nowej listy i kliknąć na `Dodaj`{.action}.

![Zimbra - listy](images/zimbra-list.png){.thumbnail}

#### Import / Eksport kontaktów <a name="import-export"></a>

Wybierz jedną z dwóch następujących zakładek:

> [!tabs]
> **Importuj kontakty**
>>
>> W oknie `Kontakty` kliknij prawym przyciskiem myszy wybrany folder kontaktów, z wyjątkiem folderów "Kontakty e-mail" i "Kosz", które nie pozwalają na import i eksport kontaktów.<br>
>>
>> Następnie kliknij przycisk `Importuj`{.action}, aby otworzyć okno importu. Przycisk `Browse...` umożliwia pobranie pliku zawierającego kontakty w formacie ".csv" lub ".vcf". <br><br>
>> ![Zimbra — import](images/zimbra-19.png){.thumbnail}
>>
> **Eksportuj kontakty**
>>
>> W oknie `Kontakty` kliknij prawym przyciskiem myszy wybrany folder kontaktów, z wyjątkiem folderów "Kontakty e-mail" i "Kosz", które nie pozwalają na import i eksport kontaktów.
>>
>> Następnie kliknij przycisk `Eksportuj`{.action}, aby otworzyć okno eksportu. Wybierz typ pliku, który chcesz wyeksportować i kliknij przycisk `Eksportuj teraz`{.action}.<br><br>
>> ![Zimbra - Eksport](images/zimbra-20.png){.thumbnail}
>>

### Kalendarz <a name="calendar"></a>

Kliknij ikonę `Kalendarz` na górnym pasku, aby przejść do książki adresowej. Jest on podzielony na **3 części** :

- **(1) Lista kalendarzy** (po lewej) : Zarządzaj różnymi kalendarzami i podkalendarzami.
- **(2) Zawartość kalendarzy** (na środku) : Wyświetl zawartość wybranych kalendarzy i podkalendarzy.
- **(3) Lista zadań** (po prawej) : Zarządzaj zadaniami i listami zadań.

![Zimbra - kalendarz](images/zimbra-calendar-view.png){.thumbnail}

### Zarządzanie kalendarzami <a name="calendar-management"></a>

Domyślnie na liście `Moje kalendarze` znajduje się `Kalendarz` utworzony domyślnie. Ten domyślny kalendarz nie może zostać usunięty, ale zobaczysz, że można utworzyć własne kalendarze w następnym akapicie.

##### 1- Utwórz kalendarz <a name="calendar-add-calendar"></a>

- **(1)** : Aby utworzyć kalendarz, w kolumnie po lewej stronie wskaż opcję `Moje kalendarze`, a następnie kliknij przycisk `+`. Wpisz nazwę i określ kolor, po czym kliknij na `Zapisz`{.action}

Możliwe jest również tworzenie podkalendarzy.

- **(2)** : Aby utworzyć podkalendarz, naciśnij kursor na kalendarzu, dla którego chcesz go utworzyć, a następnie kliknij prawym przyciskiem myszy, aby wyświetlić menu rozwijane. Kliknij przycisk `Dodaj podkalendarz`. Wpisz nazwę i określ kolor, po czym kliknij na `Zapisz`{.action}

![Zimbra - kalendarz](images/zimbra-calendar-add.png){.thumbnail .w-400}

##### 2- Dodaj wydarzenie <a name="calendar-add-event"></a>

- **(1)** : Kliknij `Nowe Termin`{.action} w lewym górnym rogu.
- **(2)** : Kliknij przedział godzinowy w kalendarzu, do którego chcesz dodać wydarzenie. Aby uprościć dodawanie, wystarczy zdefiniować tytuł wydarzenia i lokalizację, a następnie kliknąć na `Zapisz`{.action}. Aby dodać więcej szczegółów wydarzenia, kliknij przycisk `Dodaj więcej szczegółów`{.action}

![Zimbra - kalendarz](images/zimbra-calendar-event-add-01.png){.thumbnail .w-400}

- **Początek** : data i godzina rozpoczęcia wydarzenia. Jeśli zaznaczysz `Cały dzień`, nie będziesz miał godziny rozpoczęcia i zakończenia do wpisania, ponieważ cały dzień będzie brany pod uwagę.
- **Koniec** : data i godzina zakończenia wydarzenia.
- **Powtórz**: jeśli jest to powtarzające się wydarzenie, ustaw jego częstotliwość.
- **Lokalizacja**: lokalizacja, w której ma się odbyć wydarzenie, np. nazwa sali konferencyjnej.
- **Ekwipunek** : klikając `Pokaż wyposażenie`{.action}, wyświetlasz tę linię, aby zdefiniować współdzielony sprzęt, który będzie używany podczas wydarzenia.
- **Zaproszeni** : adresy e-mail uczestników wydarzenia.
- **Uwagi**: wiadomość, która zostanie przekazana gościom wydarzenia.
- **Przypomnij**: otrzymasz powiadomienie przed rozpoczęciem wydarzenia.
- **Pokaż jako**: określenie, czy wydarzenie udostępni swoich gości, czy też stanie się niedostępne w trakcie tego wydarzenia
- **Kalendarz**: określenie kalendarza, do którego będzie przypisane wydarzenie.

Po zdefiniowaniu wydarzenia kliknij przycisk `Zapisz`{.action}.

![Zimbra - kalendarz](images/zimbra-calendar-event-add-02.png){.thumbnail .w-400}

##### 3- Edytuj wydarzenie <a name="calendar-modify-event"></a>

### Zadania <a name="tasks"></a>

Zadania nie są elementami powiązanymi z Twoimi kalendarzami. Mają one na celu wyszczególnienie zadań do wykonania bez przypisania do nich daty wykonania lub daty tymczasowej. Te zadania są uzupełnieniem kalendarzy.

Lista "Zadania" istnieje domyślnie. Nie można jej usunąć, ale można utworzyć własne listy zadań.

- **(1)** : Aby utworzyć zadanie, kliknij przycisk `...`{.action} następnie `Nowe zadanie`{.action} lub po prostu przycisk `+`{.action} obok listy zadań.

- **(2)** : Aby utworzyć nową listę zadań, kliknij przycisk `...`{.action}, a następnie `Sporządzać listę...`{.action}.

![Zimbra - kalendarz](images/zimbra-calendar-task-01.png){.thumbnail .w-400}

Po utworzeniu zadania możesz zdefiniować datę ukończenia i priorytet, które pozwolą na sortowanie ich według ważności, a także wybrać odpowiednią listę zadań z menu rozwijanego.

Następnie kliknij przycisk `Zapisz`{.action}, aby dokończyć tworzenie zadania.

![Zimbra - kalendarz](images/zimbra-calendar-task-02.png){.thumbnail .w-400}

### Filtry <a name="filters"></a>

#### Jak skonfigurować filtry <a name="filters-howto"></a>

Wprowadzenie filtrów na koncie e-mail jest ważnym parametrem, który pozwala na uruchomienie systemu automatycznego sortowania po otrzymaniu wiadomości e-mail.

Reguła filtrowania w Zimbra składa się z 4 elementów:

1 - [Pole porównania](#filters-comp-field): w której części e-mail zostanie zastosowany filtr.<br>
2 - [Operator porównania](#filters-comp-operator): z jaką dokładnością filtr powinien zostać zastosowany.<br>
3 - [Wartość](#filters-value): jakie słowa/elementy wiadomości e-mail będą filtrowane.<br>
4 - [Operacje filtru](#filters-action): co filtr zrobi z e-mailem.<br>

![Zimbra - filtry](images/zimbra-filters.png){.thumbnail}

> Przykład: Jeśli pole **Temat (1)** wiadomości e-mail **zawiera (2)** słowo `invoice`**(3)**, **przenieś na (4)** adres `billing@example.com`.

W kolejnych podrozdziałach znajdziesz szczegółowe informacje na temat każdego elementu reguły filtrowania.

##### 1 - Pole porównania <a name="filters-comp-field"></a>

Porównanie pola odnosi się do obszaru e-maila, który ma zostać sprawdzony pod kątem operatora porównania. Pola porównania mogą zawierać następujące pola:

- **Od**: określ nadawcę w polu "Od" e-maila.
- **Do**: wyszukaj nazwy adresatów w polu "Do".
- **DW**: Wyszukaj w polu "DW" nazwy adresatów kopii.
- **Temat**: Określ elementy w temacie wiadomości e-mail.
- **Nagłówek o nazwie**: jeśli ta opcja jest zaznaczona, przed operatorem porównania pojawi się dodatkowe pole wprowadzania. W tym polu możesz wpisać dowolne elementy z nagłówka wiadomości e-mail. Możesz określić standardowe pola "Od", "Do", "Temat" lub inne pola, które mogą być obecne w nagłówku wiadomości e-mail. Na przykład niektóre serwery e-mail mogą dodawać w nagłówku określone pola, które można zintegrować z regułą filtrowania, korzystając z tego pola porównania.
- **Zawartość**: oznacza słowa zawarte lub niezawarte w treści wiadomości e-mail.

##### 2 - Operator porównania <a name="filters-comp-operator"></a>

W zależności od wcześniej określonego pola porównania operator porównania określi poziom zgodności, jaki ma zostać zastosowany do tej wartości.

> [!primary]
>
> Dostępne operatory porównania różnią się w zależności od wybranego pola porównania.

- **Pasuje dokładnie / nie pasuje dokładnie** : to, co wpiszesz, musi dokładnie pasować.<br>
    *Na przykład*, wskazując, że temat e-maila odpowiada dokładnie "house", korespondencja będzie dotyczyć tylko "house", a nie "houses" lub "a blue house".

- **Zawiera / nie zawiera** : to, co wpiszesz, musi być obecne w polu(ach).<br>
    *Na przykład*, wskazując, że temat e-maila powinien zawierać "house", korespondencja będzie zawierała "house", "houses", a także "a blue house".

- **Pasuje do znaku wieloznacznego / Nie pasuje do znaku wieloznacznego** : Określa, że temat musi pasować do określonego ciągu, który zawiera symbole wieloznaczne.

- **Istnieje / Nie istnieje** : Określa, że określone pole porównania musi istnieć lub nie może istnieć w komunikacie. Ten operator porównania jest używany z polami porównania "Nazwany nagłówek".

> **Użycie znaków joker w filtrach**
>
> Do porównania w polu wejściowym można użyć znaków joker, wieloznacznych lub zwanych "wildcard", które używają operatora porównania "**Dopasuje znaki joker / Nie pasuje do znaków joker**". Oba znaki wieloznaczne to `*` i `?`.
>
> - Gwiazdka `*` jest symbolem zastępczym dla zera lub wielu znaków dowolnego typu.<br><br> Na przykład dla kanału wyszukiwania "blue\*house" zwróciłoby dopasowania "blue house", "house" lub "blue wooden house". Nie zwróciłoby jednak "niebieskiego drewnianego superdomu". <br><br> Inny przykład ciągu wyszukiwania "w\*house", który zwróciłby dopasowania "white house, "watch TV in your house". Nie zwróciłby jednak "watch TV in your house with a friend".
>
> - Znak zapytania `?` jest symbolem zastępczym dokładnie jednego znaku.<br><br>Na przykład dla wyszukiwanego ciągu „blue?house” zwrócone zostaną dopasowania „blue house”, „blue-house” i "blue_house".
>

##### 3 - Wartość <a name="filters-value"></a>

Po wybraniu pola i operatora porównania należy wpisać w odpowiednie pole wartość, do której mają one pasować.

##### 4 - Operacje filtru <a name="filters-action"></a>

Pole `Wówczas` definiuje czynność, jaką należy wykonać w odniesieniu do e-maila, który spełnia warunki filtru. Akcje filtrowania mogą obejmować usuwanie, sortowanie, a nawet oznaczanie przychodzącej poczty e-mail.

- **Przechowuj w skrzynce odbiorczej**: zapisywanie wiadomości e-mail w skrzynce odbiorczej. Jeśli żadna z reguł filtrowania nie pasuje do e-maila, operacja ta jest wykonywana domyślnie.
- **Przenieś do folderu**: Przenosi wiadomość e-mail do określonego folderu.
- **Usuń trwale** : Usuwa wiadomość e-mail bez dostarczania jej. Wiadomości nie ma w żadnym z Twoich folderów, w tym w koszu.
- **przenślij do** : Przesyła wiadomość na wskazany adres.
- **Oznacz jako przeczytaną**
- **Gwiazdka** : umożliwia oznaczenie wiadomości e-mail gwiazdką.

#### Utwórz filtr <a name="filters-creation"></a>

Aby uzyskać dostęp do tworzenia filtrów, kliknij ikonę koła zębatego w prawym górnym rogu interfejsu Zimbra, następnie kliknij `Ustawienia`{.action}, a na koniec wybierz pozycję `Filtry`{.action} w lewej kolumnie.

![Zimbra - utwórz filtr](images/zimbra-21.png){.thumbnail}

Jeśli filtry istnieją, lista będzie wyświetlana zgodnie z ich kolejnością:

- **(1)** Podgląd każdego filtra można wyświetlić, klikając przycisk `...`{.action} po prawej stronie filtra, a następnie klikając `Szczegóły`{.action}. Przycisk `Uruchom`{.action} umożliwia uruchomienie akcji dla tego filtru.

- **(2)** Przycisk ten jest używany jako uchwyt, dzięki czemu można przesunąć filtr na listę i przypisać mu kolejność stosowania. Każdy filtr jest stosowany w kolejności zdefiniowanej na liście.

Kliknij przycisk `+ Dodaj filtr`{.action}, aby rozpocząć jego tworzenie. Okno trybu prostego jest wyświetlane domyślnie. Możesz przejść do trybu zaawansowanego, klikając pozycję `Przejdź do zaawansowany`{.action}, aby wyświetlić wszystkie operatory porównania. Pomożemy Ci w sekcji "[Zrozumieć, jak ustawić filtry](#filters-howto)".

> [!tabs]
> **Tryb prosty**
>>
>> ![Zimbra - filtry - tryb prosty](images/zimbra-22.png){.thumbnail}
>>
> **Tryb zaawansowany**
>>
>> ![Zimbra - filtry - tryb zaawansowany](images/zimbra-23.png){.thumbnail}
>>

### Delegacje <a name="delegations"></a>

Aby uzyskać dostęp do ustawienia delegowania, kliknij ikonkę koła zębatego w prawym górnym rogu interfejsu Zimbra, kliknij `Ustawienia`{.action}, a następnie `Napisz e-mail`{.action} w lewej kolumnie.

Konto e-mail można przypisać do innego konta e-mail. Musi on współużytkować tę samą platformę e-mail.

> [!primary]
>
> Konto e-mail o tej samej nazwie domeny, ale znajdujące się w innej ofercie e-mail nie może otrzymać uprawnienia.

![email](images/zimbra-delegation.png){.thumbnail}

**(1) Delegaci**. Aby delegować konto e-mail do innego konta, kliknij przycisk `Dodaj delegatów`{.action}.

- **Wyślij jako"** : osoba delegowana będzie mogła wysłać wiadomość e-mail z Twojego adresu e-mail, tak jakbyś go wysłał. Adresat nie będzie podawał adresu e-mail pełnomocnika.
- **Wyślij w imieniu**: osoba delegowana będzie mogła wysłać wiadomość e-mail ze swoim adresem e-mail z adnotacją "w imieniu" Twojego adresu e-mail. Odbiorca ma zatem do dyspozycji oba adresy e-mail związane z wymianą.

**(2) Parametry wysyłania delegata**. Przenosząc adres e-mail na inny adres, możesz:

- **Zapisz wysłane wiadomości w folderze "Wysłane"** : jeśli osoba delegowana na Twoim koncie wysyła e-mail z Twojego konta e-mail, ten e-mail pojawi się w Twoim folderze "Wysłane".
- **Zapisz wysłane wiadomości w folderze "Wysłane" przez delegata** : jeśli osoba delegowana na Twoje konto wyśle e-mail z Twojego konta e-mail, ten e-mail pojawi się w jego folderze "Wysłane".
- **Zapisz wysłane wiadomości w folderze "Wysłane" i w folderze Wysłane przez delegata** : jeśli osoba delegowana na Twoim koncie wyśle e-mail z Twojego konta e-mail, ten e-mail pojawi się w folderze "Wysłane" oraz w folderze "Wysłane".
- **Nie zapisuj wysłanych wiadomości** e-maili: jeśli osoba delegowana na Twoim koncie wysyła e-mail z Twojego adresu e-mail, nie będzie żadnej kopii faktu.

### Podpis <a name="signatures"></a>

Kliknij ikonę koła zębatego w prawym górnym rogu interfejsu Zimbra, kliknij `Ustawienia`{.action}, a następnie `Podpisy`{.action} w lewej kolumnie.

Szczegółowe informacje na temat konfiguracji można znaleźć w sekcji "[Konfigurowanie preferencji interfejsu Zimbra](#settings)" niniejszego przewodnika (kliknij zakładkę "**Podpisy**").

### Odpowiedzi automatyczne / Poczta głosowa <a name="auto-reply"></a>

Jeśli jesteś poza biurem i nie możesz sprawdzić swojego konta e-mail, możesz ustawić wiadomość o nieobecności, która zostanie automatycznie wysłana do nadawcy. W webmailu Zimbra funkcja ta nosi nazwę "Poza biurem".

Aby uzyskać dostęp do interfejsu poczty głosowej, kliknij ikonę koła zębatego w prawym górnym rogu interfejsu, następnie kliknij `Ustawienia`{.action}, a na koniec wybierz pozycję `Poza biurem`{.action}.

Domyślnie opcja `Włącz automatyczną odpowiedź w tych datach (włącznie)` datach jest wyłączona. Zaznacz to pole, aby włączyć automatyczną odpowiedź. Teraz możesz wprowadzić treść wiadomości o nieobecności w polu wprowadzania danych.

- Jeśli nie wiesz, kiedy zatrzymać automatyczną odpowiedź, zaznacz pole wyboru `Brak daty końcowej`.
- Przycisk `Wyślij mi przykładową kopię`{.action} wysyła podgląd tej automatycznej odpowiedzi do Twojej skrzynki odbiorczej.
- `Zewnętrzni nadawcy` : możesz zdefiniować inną wiadomość, jeśli nadawca jest spoza Twojej domeny i/lub książki adresowej. Domyślnie wszyscy nadawcy otrzymują tę samą wiadomość.

## Sprawdź również <a name="go-further"></a>

[Pierwsze kroki z usługą MX Plan](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_generalities)

[Zmiana hasła do konta e-mail MX Plan](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_change_password)

[Tworzenie filtrów dla kont e-mail](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/feature_filters)

[Korzystanie z przekierowań e-mail](/pages/web_cloud/email_and_collaborative_solutions/common_email_features/feature_redirections)

Dołącz do społeczności naszych użytkowników na stronie<https://community.ovh.com/en>.