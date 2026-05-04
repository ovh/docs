---
title: 'Korzystanie z konta e-mail za pośrednictwem interfejsu webmail Roundcube'
updated: 2026-05-04
---

## Wprowadzenie

Dzięki rozwiązaniu OVHcloud MX Plan możesz wysyłać i odbierać e-maile za pośrednictwem programu pocztowego lub webmaila. OVHcloud udostępnia usługę poczty elektronicznej online o nazwie Roundcube, która pozwala na dostęp do konta e-mail za pośrednictwem przeglądarki internetowej.

**Dowiedz się, jak korzystać z interfejsu webmail Roundcube dla Twoich adresów e-mail OVHcloud.**

## Wymagania początkowe

- Posiadanie rozwiązania pocztowego OVHcloud **MX Plan**, zawartego w naszych [ofertach hostingu www](/links/web/hosting), zawartego w [darmowej ofercie hostingu 100M](/links/web/domains-free-hosting) lub zamówionego oddzielnie jako rozwiązanie autonomiczne.
- Posiadanie danych logowania do adresu e-mail MX Plan, który chcesz sprawdzić. Więcej informacji znajdziesz w naszym przewodniku [Pierwsze kroki z rozwiązaniem MX Plan](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_generalities).
- Twoje rozwiązanie pocztowe OVHcloud **MX Plan** musi korzystać z technologii webmail **Roundcube**. Aby to sprawdzić, postępuj zgodnie z poniższymi wskazówkami.

> [!primary]
> 
> **Jak rozpoznać technologię używaną w mojej usłudze MX Plan?**
>
> Technologia poczty używana dla Twojego rozwiązania MX Plan jest rozpoznawana po jej interfejsie webmail. Aby ją zidentyfikować z poziomu Panelu klienta, postępuj zgodnie z poniższą ścieżką:
>
> 1. Zaloguj się do [Panelu klienta OVHcloud](/links/manager).
> 1. Przejdź do sekcji `Web Cloud`{.action}.
> 1. Kliknij `MX Plan`{.action}.
> 1. Wybierz odpowiednią domenę.
> 1. Z poziomu zakładki `Informacje ogólne`{.action} (wybranej domyślnie) sprawdź technologię używaną w pozycji **Webmail**.
>
> ![MX plan](images/technology-email.png){.thumbnail .w-500}

<!-- CP-NAV-START:web-mx-plan -->
---

### Dostęp do Panelu klienta OVHcloud

- **Link bezpośredni:** [MX Plan](/links/control-panel/web-mx-plan)
- **Ścieżka nawigacji:** `Web Cloud`{.action} > `MX Plan`{.action} > Wybierz Twoją usługę MX Plan

---
<!-- CP-NAV-END:web-mx-plan -->

## W praktyce

**Podsumowanie**

- [Logowanie do interfejsu webmail Roundcube](#roundcube-connexion)
- [Główna strona webmail Roundcube](#general-interface)
    - [Zarządzanie folderami (lewa kolumna)](#leftcolumn)
    - [Lista odebranych/wysłanych e-maili (górne okno)](#topwindow)
        - [Typ wyświetlania](#topwindow-display)
        - [Operacje na wybranym e-mailu](#topwindow-action)
        - [Wyszukiwanie e-maila](#topwindow-search)
    - [Treść e-maila (dolne okno)](#lowerwindow)
- [Konfiguracja preferencji interfejsu Roundcube](#roundcube-settings)
    - [Interfejs użytkownika](#user-interface-settings)
    - [Widok skrzynki pocztowej](#mail-view-settings)
    - [Wyświetlanie wiadomości](#mail-display-settings)
    - [Tworzenie wiadomości](#mail-writing-settings)
    - [Kontakty](#contacts-settings)
    - [Foldery specjalne](#special-folder-settings)
    - [Ustawienia serwera](#server-settings)
    - [Szyfrowanie](#encryption)
- [Zarządzanie tożsamościami i ich podpisami](#identity-signature)
    - [Tożsamość](#identity)
    - [Podpis](#signature)
- [Książka adresowa](#contact-book)
    - [Grupy](#group)
    - [Kontakty](#contacts)
    - [Importowanie kontaktów](#import-contacts)
    - [Eksportowanie kontaktów](#export-contacts)
- [Odpowiedzi (szablony)](#responses)
- [Dodanie autorespondera](#automatic-respond)
- [Zmiana hasła do konta e-mail](#password)
- [Pisanie e-maila](#email-writing)
- [Przykład zastosowania](#usecase)

### Logowanie do interfejsu webmail Roundcube <a name="roundcube-connexion"></a>

Przejdź na stronę [Webmail](/links/web/email). Wpisz adres e-mail i hasło, a następnie kliknij `Zaloguj`{.action}. 

![hosting](images/webmail_login.png){.thumbnail}

Zostaniesz wówczas przekierowany do interfejsu Roundcube.

![hosting](images/roundcube01.png){.thumbnail}

> [!primary]
> 
> Podczas pierwszego logowania do interfejsu Roundcube wygląd może się różnić od tego, który zobaczysz w niniejszej dokumentacji. Oznacza to, że na Twoim interfejsie został ustawiony wygląd "klasyczny". Aby go zmienić, postępuj zgodnie z sekcją "[Interfejs użytkownika](#user-interface-settings)" i wybierz widok "Larry".
> Wygląd interfejsu nie wpłynie na dalsze wyjaśnienia w niniejszej dokumentacji.

> [!warning]
> 
> Jeśli zostaniesz przekierowany do interfejsu **O**utlook **W**eb **A**pp (OWA), oznacza to, że posiadasz najnowszą wersję rozwiązania MX Plan. Aby uzyskać więcej informacji na temat Twojego rozwiązania MX Plan, zapoznaj się z naszą stroną [Pierwsze kroki z rozwiązaniem MX Plan](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_generalities).
>
> Aby zapoznać się z interfejsem **OWA**, sprawdź nasz przewodnik [Korzystanie z konta e-mail za pośrednictwem interfejsu OWA](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/email_owa).

### Główna strona webmail Roundcube <a name="general-interface"></a>

Po zalogowaniu się do konta e-mail masz dostęp do głównego okna Roundcube, które składa się z 3 stref:

- [**Lewa kolumna**](#leftcolumn): widok drzewa Twojego konta e-mail, składający się z folderów i podfolderów. Głównym folderem jest `Odebrane`.

- [**Górne okno**](#topwindow): lista e-maili znajdujących się w folderze wybranym w lewej kolumnie.

- [**Dolne okno**](#lowerwindow): treść e-maila wybranego w górnym oknie.

#### Zarządzanie folderami (lewa kolumna) <a name="leftcolumn"></a>

W tej strefie wyświetlane są foldery Twojego konta e-mail.

Aby dokładniej zarządzać folderami, kliknij ikonę koła zębatego w dolnej części kolumny, a następnie kliknij `Zarządzaj folderami`{.action}.

![hosting](images/roundcube02.png){.thumbnail}

Aby utworzyć folder, kliknij przycisk `+`{.action} w dolnej części kolumny `Foldery`.

Aby usunąć folder, wybierz odpowiedni folder, kliknij ikonę koła zębatego w dolnej części kolumny `Foldery`, a następnie kliknij `Usuń`{.action}. Aby opróżnić zawartość, ale zachować folder, kliknij `Opróżnij`{.action}.

Pola wyboru obok folderów odpowiadają "subskrypcjom". Subskrypcja określa, czy folder jest wyświetlany w interfejsie webmail lub w programie pocztowym, zachowując jednocześnie zawartość folderu. Celem jest tylko ukrycie lub wyświetlenie folderu na koncie e-mail.

> [!primary]
>
> Foldery z szarym polem wyboru to foldery specjalne. Nie możesz ich usunąć ani z nich zrezygnować.

#### Lista odebranych/wysłanych e-maili (górne okno) <a name="topwindow"></a>

W tym oknie wyświetlana jest zawartość folderu wybranego w lewej kolumnie. 

##### Typ wyświetlania <a name="topwindow-display"></a>

To okno jest prezentowane w formie, którą można dostosować. W tym celu kliknij ikonę koła zębatego w lewym górnym rogu okna.

![hosting](images/roundcube03.png){.thumbnail}

Można skonfigurować cztery parametry:

- **Układ**: określa sposób rozmieszczenia okien zarządzania kontem e-mail. Trzy opcje:
    - `Szeroki ekran`{.action}: trzy panele obok siebie — foldery, lista e-maili i panel czytania ułożone poziomo;
    - `Pulpit`{.action}: lista e-maili u góry, panel czytania poniżej (układ klasyczny);
    - `Lista`{.action}: brak panelu czytania — e-maile otwierają się w pełnym oknie po kliknięciu.

- **Kolumny listy**: pola wyboru określające kolumny wyświetlane na liście e-maili. Kolumny **Temat** i **Wątki** są zawsze widoczne. Dostępne kolumny opcjonalne: `Od`{.action}, `Do`{.action}, `Od/Do`{.action}, `Odpowiedz do`{.action}, `Cc`{.action}, `Data`{.action}, `Rozmiar`{.action}, `Status`{.action}, `Załącznik`{.action}, `Flaga`{.action}, `Priorytet`{.action}.

- **Kolumna sortowania**: pozwala wybrać domyślną kolumnę sortowania. Dostępne opcje: `Brak`{.action}, `Data otrzymania`{.action}, `Data wysłania`{.action}, `Temat`{.action}, `Od`{.action}, `Do`{.action}, `Od/Do`{.action}, `Cc`{.action} lub `Rozmiar`{.action}.

- **Kierunek sortowania**: rosnąco lub malejąco.

Kliknij `Zapisz`{.action}, aby zastosować wybrane ustawienia.

> [!primary]
>
> Możesz również **dynamicznie sortować listę**, klikając bezpośrednio nagłówek wyświetlanej kolumny (na przykład **Data**, **Temat** lub **Rozmiar**). Drugie kliknięcie tej samej kolumny odwraca kolejność.

##### Operacje na wybranym e-mailu <a name="topwindow-action"></a>

Po wybraniu e-maila możesz wykonać na nim operacje. Możliwe są następujące działania:

- `Odpowiedz`{.action}: odpowiedz bezpośrednio nadawcy.
- `Odpowiedz wszystkim`{.action}: odpowiedz bezpośrednio wszystkim odbiorcom wymienionym w polach "Do" i "Cc".
- `Przekaż`{.action}: prześlij wybrany e-mail dalej do jednego lub kilku odbiorców.
- `Usuń`{.action}: przenieś wybrany e-mail do folderu "Kosz".
- `Oznacz jako spam`{.action}: umieść wybrany e-mail bezpośrednio w folderze niechcianej poczty (Junk), oznaczając go jako **spam**.
- `Oznacz`{.action}: ręcznie ustaw status e-maila.
- `Więcej`{.action} 
    - `Drukuj wiadomość`{.action}.
    - `Pobierz (.eml)`{.action}: pobierz nagłówek e-maila i jego treść.
    - `Edytuj jako nową`{.action}: utwórz nowy e-mail na podstawie wybranego e-maila.
    - `Pokaż źródło`{.action}: wyświetl e-mail w formie surowej, łącznie z nagłówkiem.
    - `Przenieś do`{.action}: przenieś e-mail do folderu.
    - `Kopiuj do`{.action}: skopiuj e-mail do folderu.
    - `Otwórz w nowym oknie`{.action}.

![hosting](images/roundcube04.png){.thumbnail}

> [!primary]
>
> Jeśli jeden z Twoich kontaktów żąda potwierdzenia odbioru przy odczycie jego e-maila, otrzymasz następujący komunikat: `Nadawca tej wiadomości poprosił o powiadomienie, gdy ją przeczytasz. Czy chcesz powiadomić nadawcę?`.
>

##### Wyszukiwanie e-maila <a name="topwindow-search"></a>

W prawej górnej części interfejsu dostępne jest narzędzie wyszukiwania.

Wpisz termin w polu wyszukiwania, a następnie zatwierdź klawiszem `Enter`{.action}: domyślnie Roundcube przeszukuje cały bieżący folder.

Kliknij strzałkę po prawej stronie lupy, aby wyświetlić filtry wyszukiwania: możesz ograniczyć wyszukiwanie do określonych pól (temat, treść wiadomości, nadawca, odbiorcy itp.) lub rozszerzyć jego zakres na wszystkie foldery.

#### Treść e-maila (dolne okno) <a name="lowerwindow"></a>

Po wybraniu e-maila z listy jest on wyświetlany w dolnym oknie.

Po prawej stronie znajdziesz skróty do następujących funkcji:

- `Wyświetl w formacie HTML`{.action} (domyślnie)
- `Wyświetl w formacie tekstowym`{.action}
- `Odpowiedz`{.action}
- `Odpowiedz wszystkim`{.action}
- `Przekaż`{.action}
- `Otwórz w nowym oknie`{.action}

![hosting](images/roundcube05.png){.thumbnail}

### Konfiguracja preferencji interfejsu Roundcube <a name="roundcube-settings"></a>

Kolejne sekcje tego przewodnika odpowiadają zakładkom składającym się na część `Preferencje`{.action} `Ustawień`{.action} Roundcube. Ich opis nie jest wyczerpujący.

![hosting](images/roundcube06.png){.thumbnail}

#### Interfejs użytkownika <a name="user-interface-settings"></a>

Tutaj ustaw `Język` interfejsu Roundcube, `Strefę czasową`, `Format godziny` i `Format daty`.

Opcja `Ładne daty` pozwala wyświetlać datę otrzymania/wysłania w formie względnych terminów, takich jak "Dzisiaj", "Wczoraj" itp.<br>
**Na przykład**: dzisiejsza data to **19/05/2022**, e-mail wysłany/otrzymany w dniu **17/05/2022** o godzinie **17:38** zostanie wyświetlony jako **Wt 17:38**, ponieważ e-mail odpowiada poprzedniemu wtorkowi.

Pole wyboru `Wyświetl następną wiadomość po oznaczeniu jako przeczytaną lub przeniesieniu` oznacza, że po wykonaniu operacji usunięcia lub przeniesienia e-maila zawsze zostanie zaznaczony element w wierszu poniżej, niezależnie od kolejności sortowania.

Możesz wybrać wygląd wyświetlania interfejsu. Masz do wyboru wygląd **Classic** lub **Larry**.

#### Widok skrzynki pocztowej <a name="mail-view-settings"></a>

Tutaj ustaw układ używany do przeglądania e-maili i wykonywania na nich operacji. Opcja `Układ` pozwala rozmieścić 3 okna opisane w sekcji [Lista odebranych/wysłanych e-maili](#topwindow).

#### Wyświetlanie wiadomości <a name="mail-display-settings"></a>

Ustaw sposób wyświetlania e-maili.<br>
Zalecamy zachowanie zaznaczonego pola `Wyświetlaj HTML`, aby zapewnić poprawne wyświetlanie e-maili sformatowanych przez nadawcę.<br>
Zalecamy również pozostawienie opcji `Zezwalaj na zdalne zasoby (obrazy, style)` ustawionej na `nigdy`. Pozwala to uniknąć ładowania elementów e-maila, które mogą wydawać się złośliwe.

#### Tworzenie wiadomości <a name="mail-writing-settings"></a>

Ustaw domyślną formę podczas pisania e-maila lub odpowiedzi.<br>
Zalecamy ustawienie opcji `Twórz wiadomości HTML` na `zawsze`, aby domyślnie korzystać z narzędzi edycji HTML i uniknąć zmiany podpisu HTML.

#### Kontakty <a name="contacts-settings"></a>

Tutaj dostosuj układ informacji w Twojej książce adresowej.

#### Foldery specjalne <a name="special-folder-settings"></a>

Roundcube posiada 4 foldery specjalne: `Wersje robocze`, `Wysłane`, `Spam`, `Kosz`.

Nie zalecamy ich modyfikowania, ale możesz przypisać zachowanie folderu specjalnego do innego utworzonego później folderu, korzystając z menu rozwijanych.<br>

**Na przykład** możesz przypisać zachowanie "Wersje robocze" do innego utworzonego folderu, klikając listę rozwijaną i wybierając ten folder. Jeśli nie zostanie do niego przypisany żaden folder, zostanie on automatycznie ustawiony na opcję "Wersje robocze". E-maile w nim zapisane będą uznawane za wersje robocze do momentu ich faktycznego wysłania.

> W praktyce tworzysz podfolder o nazwie "Wersje robocze e-maili klienta". Przejdź do `Moje preferencje`{.action} / `Foldery specjalne`{.action} i wybierz opcję "Wersje robocze". W menu rozwijanym wybierz folder "Wersje robocze e-maili klienta", aby zastąpić "Wersje robocze". E-maile zapisane w tym folderze będą uznawane za wersje robocze.

#### Ustawienia serwera <a name="server-settings"></a>

W tej zakładce możesz zoptymalizować przestrzeń wykorzystywaną przez konto e-mail. Opcja `Opróżnij Kosz przy wylogowaniu` pomaga zapobiegać gromadzeniu się usuniętych elementów. Opcja `Bezpośrednio usuwaj spam` automatycznie usunie wszystkie e-maile uznane za spam.

> [!warning]
> 
> Nie zalecamy włączania opcji `Bezpośrednio usuwaj spam` w przypadku, gdy fałszywie pozytywny e-mail (e-mail błędnie zaklasyfikowany jako "spam") zostanie oznaczony jako spam przez serwer odbiorczy. Gdy e-mail trafia do folderu "Spam", możesz nadal sprawdzić, czy jest on prawidłowy.

#### Szyfrowanie <a name="encryption"></a>

Jeśli Twoja przeglądarka na to pozwala, możesz zainstalować i włączyć rozszerzenie "Mailvelope". Jest to rozszerzenie przeglądarki, które integruje protokół PGP (**P**retty **G**ood **P**rivacy) z Twoim webmailem. System szyfrowania PGP, a co za tym idzie rozszerzenie "Mailvelope", umożliwia:

- Szyfrowanie i deszyfrowanie e-maili w przeglądarce.
- Zachowanie prywatności treści e-maili wobec dostawcy poczty.

Dzięki temu tylko Ty możesz czytać Twoje e-maile. To rozszerzenie jest sposobem na zabezpieczenie webmaila, jeśli otrzymujesz e-maile o charakterze poufnym.

Aby uzyskać więcej informacji, zapoznaj się z FAQ "Mailvelope" pod adresem <https://mailvelope.com/faq>.

### Zarządzanie tożsamościami i ich podpisami <a name="identity-signature"></a>

W Roundcube kliknij `Ustawienia`{.action} na górnym pasku, a następnie `Tożsamości`{.action} w lewej kolumnie. "Tożsamość" pozwala dostosować informacje wysyłane do odbiorców, takie jak nazwa wyświetlana lub podpis.

![hosting](images/roundcube07.png){.thumbnail}

#### Ustawianie atrybutów tożsamości <a name="identity"></a>

- **Nazwa wyświetlana**: ta nazwa pojawi się w sekcji "nadawca" u odbiorcy.
- **E-mail**: adres, z którego wysyłany jest e-mail.
- **Organizacja**: pole na nazwę firmy, stowarzyszenia lub innego podmiotu.
- **Odpowiedz do**: przypisz inny adres e-mail odpowiedzi niż adres nadawcy.
- **Bcc**: wyślij ukrytą kopię na adres e-mail przy wysyłaniu.
- **Ustaw jako domyślną**: gdy istnieje kilka tożsamości (podpisów), ustaw tę jako domyślną.
- **Podpis**: dostosuj stopkę e-maila podczas jego pisania (nazwisko, imię, stanowisko, zdania, obrazy itp.).
- **Podpis HTML**: włącza format HTML podpisu.

> [!alert]
>
> Wypełnienie pola **E-mail** adresem e-mail innym niż ten, na którym jesteś zalogowany, jest uznawane za kradzież tożsamości elektronicznej (*spoofing*). Adres IP używany do wysyłki może zostać "zablokowany" i/lub uznany za "spam" przez Twoich odbiorców.

#### Dodanie podpisu <a name="signature"></a>

Domyślnie pole `Podpis` jest w "tekście niesformatowanym". Format ten nie pozwala na zaawansowaną edycję ani wstawianie obrazu do podpisu. Aby skorzystać z zaawansowanych opcji edycji podpisu, zalecamy włączenie trybu HTML, klikając **Podpis HTML** pod ramką wprowadzania.

> [!warning]
>
> W rezultacie, jeśli podpis jest w formacie HTML, podczas pisania e-maila konieczne będzie przejście do trybu HTML. Możesz włączyć tę opcję domyślnie dla każdego pisanego e-maila w sekcji `Ustawienia`{.action} interfejsu Roundcube.
> Kliknij `Preferencje`{.action} w lewej kolumnie, a następnie `Tworzenie wiadomości`{.action}. Dla pozycji **Twórz wiadomości HTML** wybierz `Zawsze`.
>

Aby wstawić obraz do podpisu, obraz musi być przechowywany na serwerze (hosting OVHcloud lub inny).<br>
**Wgrywanie obrazu z komputera nie pozwoli na jego wyświetlenie**.

Kliknij przycisk `< >`{.action} na pasku narzędzi HTML, a następnie wstaw poniższy kod, zastępując `your-image-url` adresem URL obrazu, a `text-if-image-is-not-displayed` tekstem zastępującym obraz, jeśli nie może zostać wyświetlony.

```html
<img src="your-image-url" border="0" alt="text-if-image-is-not-displayed" />
```

![hosting](images/roundcube08.png){.thumbnail}

### Książka adresowa <a name="contact-book"></a>

Kliknij `Kontakty`{.action} na górnym pasku, aby uzyskać dostęp do książki adresowej. Jest ona podzielona na **3 kolumny**:

- **Grupy**: w książce adresowej możesz tworzyć grupy w celu organizowania kontaktów.
- **Kontakty**: wyświetl kontakty z książki adresowej lub z wybranej grupy.
- **Właściwości kontaktu** lub **Dodaj kontakt**: to okno pojawia się po wybraniu kontaktu lub podczas jego tworzenia. Możesz odczytać lub edytować dane kontaktu.

![hosting](images/roundcube09.png){.thumbnail}

#### Grupy <a name="group"></a>

Grupy są podkategoriami książki adresowej. Pozwalają one organizować kontakty w podzbiory. Na przykład łatwiej znaleźć kontakt w utworzonej grupie niż w całej książce adresowej. Pozwalają również wysłać e-mail, dodając grupę jako odbiorcę, zamiast dodawać kontakty z grupy pojedynczo.

Aby utworzyć grupę, kliknij przycisk `+`{.action} w dolnej części kolumny `Grupy`. Ustaw nazwę grupy, a następnie kliknij `Zapisz`{.action}, aby zatwierdzić.

![hosting](images/roundcube10.png){.thumbnail}

Aby przypisać kontakt do jednej z grup, wybierz kontakt w kolumnie `Kontakty`, a następnie w wyświetlonym oknie kliknij zakładkę `Grupy`{.action}. Zaznacz grupę, którą chcesz przypisać do kontaktu.

#### Kontakty <a name="contacts"></a>

W kolumnie `Grupy` wybierz książkę adresową lub jedną z grup.

> [!primary]
>
> Gdy tworzysz kontakt z poziomu wybranej grupy, kontakt zostanie automatycznie dodany do grupy.

Kliknij przycisk `+`{.action} w dolnej części kolumny `Kontakty`, aby utworzyć kontakt.

![hosting](images/roundcube11.png){.thumbnail}

Następnie wypełnij dane kontaktu.

> [!primary]
> Możesz dodać dodatkowe pola za pomocą rozwijanego menu `Dodaj pole...`{.action}, znajdującego się pod polami `Imię` i `Adres`.

#### Importowanie kontaktów <a name="import-contacts"></a>

W oknie `Kontakty`{.action} na górnym pasku kliknij `Importuj`{.action}, aby otworzyć okno importu.

- `Importuj z pliku`: wybierz plik CSV lub vCard z Twojego komputera. Kontakty w pliku CSV muszą być oddzielone przecinkami. Plik nie może być większy niż 20 MB.
- `Importuj przypisania do grup`: jeśli kontakty w Twoim pliku są posortowane według grup, możesz włączyć tę opcję, aby zachować tę organizację, lub pozostawić tę opcję ustawioną na `brak`, aby do kontaktów nie była przypisywana żadna grupa.
- `Zastąp całą książkę adresową`: jeśli książka adresowa jest już skonfigurowana, zalecamy wyeksportowanie jej przed zaznaczeniem tej opcji lub upewnienie się, że chcesz ją trwale zastąpić.

![hosting](images/roundcube-import-contact.png){.thumbnail}

#### Eksportowanie kontaktów <a name="export-contacts"></a>

W oknie `Kontakty`{.action} na górnym pasku kliknij strzałkę w dół po prawej stronie przycisku `Eksportuj`{.action}.

Masz do wyboru:

- `Eksportuj wszystko`{.action}: wszystkie kontakty zostaną wyeksportowane do pliku **.vcf**.
- `Eksportuj zaznaczone`{.action}: wyeksportuj tylko elementy, które zaznaczyłeś w kolumnie `Kontakty`{.action}.

![hosting](images/roundcube-export-contact.png){.thumbnail}

### Odpowiedzi (szablony) <a name="responses"></a>

Funkcja ta pozwala tworzyć szablony odpowiedzi podczas pisania e-maila.

W Roundcube kliknij `Ustawienia`{.action} na górnym pasku, a następnie `Odpowiedzi`{.action} w lewej kolumnie.

Aby dodać odpowiedź, kliknij przycisk `+`{.action} w dolnej części kolumny `Odpowiedzi`.

![hosting](images/roundcube12.png){.thumbnail}

> [!primary]
>
> "Odpowiedzi" są zapisywane w formacie "tekstu niesformatowanego".

### Dodanie autorespondera <a name="automatic-respond"></a>

Chcesz dodać automatyczną odpowiedź do Twojego adresu e-mail, gdy jesteś nieobecny lub niedostępny. Funkcji tej nie można włączyć z poziomu interfejsu webmail, lecz z [Panelu klienta OVHcloud](/links/manager), w interfejsie zarządzania Twoimi adresami e-mail. Sprawdź nasz przewodnik "[Tworzenie autorespondera dla Twojego adresu e-mail](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/feature_auto_responses/)".

### Zmiana hasła do konta e-mail <a name="password"></a>

Aby zmienić hasło do konta e-mail, zaloguj się do [Panelu klienta OVHcloud](/links/manager), w interfejsie zarządzania Twoimi adresami e-mail. Sprawdź nasz przewodnik "[Zmiana hasła adresu e-mail](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_change_password/)".

### Pisanie e-maila <a name="email-writing"></a>

W zakładce `Poczta`{.action} na górnym pasku kliknij `Utwórz`{.action}.

W oknie tworzenia e-maila znajdziesz następujące pola:

- **Od**: wybierz [tożsamość](#identity), aby ustawić nadawcę.
- **Do**: dodaj odbiorców i/lub [grupę odbiorców](#group). Przycisk `+`{.action} po prawej stronie pola pozwala wpisać kilka adresów.

> [!primary]
>
> Pole **"Do"** nie może zawierać więcej niż 100 odbiorców, w tym kontaktów z [grupy](#group).

- **Cc**: za pomocą przycisku `Dodaj Cc`{.action} dodaj odbiorców w kopii zwykłej.
- **Bcc**: za pomocą przycisku `Dodaj Bcc`{.action} dodaj odbiorców w kopii ukrytej. Pozostali odbiorcy e-maila nie zobaczą tych wymienionych w Bcc.
- **Followup-To**: za pomocą przycisku `Dodaj Followup-To`{.action} przekaż e-mail do odbiorców.
- **Typ edytora**:
    - `Tekst niesformatowany`: tylko tekst, bez formatowania.
    - `HTML`: tekst z formatowaniem. Pasek narzędzi HTML pojawia się nad oknem wprowadzania.
- **Priorytet** e-maila.
- **Potwierdzenie odbioru**: od odbiorcy żądane jest potwierdzenie odbioru.
- **Powiadomienie o statusie dostarczenia**, gdy e-mail został pomyślnie dostarczony do odbiorcy.
- **Zapisz wysłaną wiadomość w**: wybierz folder, w którym zostanie zapisana kopia e-maila.

Na górnym pasku dostępne są następujące operacje:

- `Anuluj`{.action} pisanie e-maila, z prośbą o potwierdzenie.
- `Wyślij`{.action} e-mail.
- `Zapisz`{.action} e-mail w folderze specjalnym "Wersje robocze".
- `Pisownia`{.action} sprawdź tekst, z menu umożliwiającym wybór języka.
- `Załącz`{.action} plik do e-maila.
- `Podpis`{.action}: dodaje podpis przypisany do wybranej [tożsamości](#identity).
- `Odpowiedzi`{.action}: dodaje wcześniej zapisany szablon z sekcji [Odpowiedzi](#responses).

![hosting](images/roundcube13.png){.thumbnail}

### Przykład zastosowania <a name="usecase"></a>

#### Weryfikacja żądania nie powiodła się

Podczas próby uzyskania dostępu do interfejsu webmail Roundcube otrzymujesz następujący komunikat:

```console
WERYFIKACJA ŻĄDANIA NIEUDANA
Dla Twojego bezpieczeństwa dostęp do tego zasobu jest chroniony przed atakami CSRF.
Jeśli widzisz tę wiadomość, prawdopodobnie nie wylogowałeś się przed opuszczeniem aplikacji internetowej.
Aby kontynuować, wymagana jest teraz interakcja użytkownika.
Skontaktuj się z administratorem serwera.
```

Jak wskazuje komunikat, Twoje konto e-mail jest uważane za już zalogowane. Mówi się o "sesji". Oznacza to, że dla serwera poczty Twoje konto e-mail jest już używane i poprzednia sesja musi zostać zamknięta. Sprawdź, czy Twoje konto e-mail nie jest już otwarte w Roundcube. Wyczyść również dane z pamięci podręcznej Twojej przeglądarki.

## Sprawdź również

[Pierwsze kroki z rozwiązaniem MX Plan](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_generalities)

[Zmiana hasła do adresu e-mail MX Plan](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_change_password)

[Tworzenie autorespondera dla Twojego adresu e-mail](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/feature_auto_responses/)

[Tworzenie filtrów dla Twoich adresów e-mail](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/feature_filters)

[Korzystanie z przekierowań e-mail](/pages/web_cloud/email_and_collaborative_solutions/common_email_features/feature_redirections)

Dołącz do [grona naszych użytkowników](/links/community).
