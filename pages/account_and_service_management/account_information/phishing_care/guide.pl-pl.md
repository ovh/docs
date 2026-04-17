---
title: 'Phishing — jak rozpoznać fałszywe e-maile i oszustwa?'
excerpt: 'Jak rozpoznać wiadomość e-mail typu phishing i co zrobić, jeśli klikniesz w fałszywy link?'
updated: 2026-03-03
---

<style>
details>summary {
    color:rgb(33, 153, 232) !important;
    cursor: pointer;
}
details>summary::before {
    content:'\25B6';
    padding-right:1ch;
}
details[open]>summary::before {
    content:'\25BC';
}
</style>

## Wprowadzenie

Phishing to oszukańcza technika mająca na celu nakłonienie użytkowników Internetu do podania danych osobowych (konta dostępowe, hasła itp.) i/lub danych bankowych poprzez podszywanie się pod zaufaną osobę trzecią lub witrynę.<br>
W praktyce polega to najczęściej na wysłaniu wiadomości e-mail z prośbą o kliknięcie linku. Link ten przekierowuje na formularz, który w sposób oszukańczy wykorzystuje kolorystykę danej marki i prosi o wprowadzenie danych osobowych.

**Niniejszy przewodnik wyjaśnia, jak rozpoznać wiadomość e-mail typu phishing i co zrobić, jeśli klikniesz w fałszywy link.**

<iframe class="video" width="560" height="315" src="https://www.youtube-nocookie.com/embed/RED6EuCLFjk?si=9ppewOVm_bXymThM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## W praktyce

### Otrzymałem(-am) wiadomość e-mail lub SMS w imieniu OVHcloud — jak sprawdzić, czy jest autentyczna?

#### Rozpoznawanie phishingowej wiadomości e-mail

<!-- CP-STEPS-START:check-messages -->
Najpierw sprawdź, czy otrzymana wiadomość e-mail jest również widoczna na stronie [Moje wiadomości](/links/control-panel/account-messages). Znajdziesz tam kopie wszystkich oficjalnych wiadomości wysłanych przez OVHcloud.
<!-- CP-STEPS-END:check-messages -->

Oto kilka wskazówek, które pomogą Ci wizualnie odróżnić autentyczną wiadomość e-mail od OVHcloud od próby phishingu.

Kliknij na obrazek, aby go powiększyć. Szczegóły i wyjaśnienia znajdziesz w tabeli poniżej.

![Różnica między wiadomością e-mail od OVHcloud a phishingową](images/EN-legit-and-phishing-email.png){.thumbnail}

> [!primary]
>
> Numery w tabeli odpowiadają tym widocznym na powyższym obrazku.

|Numer - Opis|Autentyczna wiadomość e-mail od OVHcloud|Fałszywa wiadomość phishingowa|
|---|---|---|
|1 - Nadawca|Sprawdź, czy wiadomość została wysłana z adresu kończącego się nazwą domeny (lub subdomeny, np. `events.ovhcloud.com`) należącą do OVHcloud (zobacz listę poniżej)|Nadawca wiadomości najprawdopodobniej będzie adresem, który nie pochodzi od OVHcloud.|
|2 - Temat|Sprawdź, czy Twój identyfikator konta OVHcloud (NIC Handle) **(który zazwyczaj zaczyna się od inicjałów osoby, która utworzyła konto OVHcloud)** i/lub adres e-mail Twojego konta pojawiają się w temacie wiadomości.|Często wiadomość będzie oznaczona jako \[SPAM], a **Twój NIC Handle nie pojawi się lub będzie niepoprawny**.|
|3 - Link|**Nie klikając w niego, najedź kursorem myszy na link lub przycisk** — zobaczysz jego adres docelowy (tuż pod spodem lub na dole przeglądarki). W naszym przykładzie link poprawnie wskazuje na adres https://www.ovh.com/. Klikając link, zawsze sprawdzaj adres w przeglądarce. OVHcloud używa zestawu rozpoznawalnych nazw domen, zazwyczaj ovhcloud.com lub ovh.com (zobacz poniższe listy oficjalnych domen i wskazówki dotyczące weryfikacji podejrzanych linków).|W phishingowej wiadomości link nie będzie prowadził do oficjalnej strony OVHcloud. **Nie klikaj w niego.**|
|4 - Nagłówek i stopka wiadomości|OVHcloud wysyła wiadomości w formacie TXT i HTML. Nagłówek będzie zawierał logo OVHcloud, a stopka informacje prawne dotyczące OVHcloud.|Nagłówek lub stopka może zawierać linki niemające nic wspólnego z OVHcloud. **Nie klikaj w te linki.**|

/// details | **Lista oficjalnych domen OVHcloud** (kliknij, aby wyświetlić)

- ovhcloud.com
- ovh.com
- ovh.fr
- services.ovhcloud.com
- news.ovhcloud.com
- clientmanager.fr
- kimsufi.com
- soyoustart.com
- ovh.ca
- ovh.com.au
- ovh.co.uk
- ovh.ie
- ovh.de
- ovh.es
- ovh.it
- ovh.lt
- ovh-hosting.fi
- ovh.net
- ovh.nl
- ovh.pl
- ovh.pt
- ovh.sn
- ovh.us
- robot.ovh.net

Wiadomości e-mail mogą również pochodzić z oficjalnych subdomen, takich jak:

- events.ovhcloud.com
- news.soyoustart.com
- services.kimsufi.com

///

/// details | **Wskazówki dotyczące weryfikacji podejrzanego linku** (kliknij, aby wyświetlić)

**Czytaj adres URL od prawej do lewej**

Prawdziwa nazwa domeny to część znajdująca się tuż przed pierwszym pojedynczym `/` w adresie. Phishingowe adresy URL często umieszczają dodatkowe słowa przed domeną, aby wyglądała na prawdziwą:

- `https://www.ovhcloud.com/account/login` — prawdziwa domena to **ovhcloud.com** ✓
- `https://ovhcloud.com.login-secure.xyz/account` — prawdziwa domena to **login-secure.xyz** ✗

Aby znaleźć prawdziwą domenę, spójrz na pasek adresu i czytaj **od pierwszego `/` wstecz** — ostatnie dwie części przed tym ukośnikiem to rzeczywista domena.

**Uważaj na łudząco podobne znaki**

Atakujący czasami zamieniają litery na wizualnie podobne znaki, aby stworzyć przekonujące fałszywe adresy:

- `ovhcIoud.com` (wielkie I zamiast małego l)
- `0vhcloud.com` (zero zamiast litery O)
- `ovhclould.com` (dodatkowa litera)

Jeśli coś wygląda podejrzanie, nie klikaj. Zamiast tego wpisz ręcznie `ovhcloud.com` w przeglądarce.

**Skracacze adresów URL to sygnał ostrzegawczy**

Krótkie linki takie jak `bit.ly/xxx`, `tinyurl.com/xxx` lub `t.co/xxx` ukrywają prawdziwy cel przekierowania. OVHcloud **nigdy** nie używa skracaczy adresów URL w oficjalnych wiadomościach e-mail.

**Na urządzeniu mobilnym: przytrzymaj palec zamiast najeżdżać kursorem**

Na telefonie lub tablecie nie można najechać kursorem na link. Zamiast tego **przytrzymaj** (naciśnij i przytrzymaj) link, nie odrywając palca. Pojawi się podgląd pełnego adresu URL. Jeśli domena jest nieznana, nie otwieraj linku.

**W razie wątpliwości przejdź bezpośrednio na stronę**

Najbezpieczniejszy odruch: **nigdy nie klikaj linku w wiadomości e-mail, aby uzyskać dostęp do swojego konta**. Zamiast tego otwórz przeglądarkę i samodzielnie wpisz `www.ovhcloud.com`, a następnie zaloguj się stamtąd. Jeśli OVHcloud rzeczywiście wymaga od Ciebie działania, zobaczysz powiadomienie w swoim Panelu klienta.

///

#### Rozpoznawanie phishingowego SMS-a

OVHcloud **nigdy** nie wyśle Ci linku przez SMS. Wiadomości SMS, które wysyłamy, są zazwyczaj związane z [uwierzytelnianiem dwuetapowym w Twoim Panelu klienta OVHcloud](/pages/account_and_service_management/account_information/secure-ovhcloud-account-with-2fa).

Poniżej znajdziesz 2 przykłady wiadomości SMS — pierwsza jest autentyczna i dotyczy uwierzytelniania dwuetapowego. Druga wiadomość SMS jest fałszywa.

![Fałszywa wiadomość SMS](images/sms-phishing.png){.thumbnail}

#### Jak zgłosić phishingową wiadomość e-mail?

Po przeprowadzeniu powyższych kontroli, jeśli masz pewność, że otrzymałeś(-aś) phishingową wiadomość e-mail podszywającą się pod OVHcloud, możesz ją zgłosić, zapisując wiadomość jako plik (`.eml` lub `.msg`) i wysyłając go jako **załącznik** w nowej wiadomości na adres **<fraude@ovh.com>**.

Te formaty plików zachowują ukryte informacje techniczne (tzw. "nagłówki"), których nasz zespół potrzebuje do namierzenia źródła oszustwa i podjęcia odpowiednich działań.

> [!warning]
>
> **Nie przekazuj phishingowej wiadomości e-mail bezpośrednio.** Przekazanie jej oznacza, że Twoja skrzynka pocztowa wysyła oszukańczą treść, co może spowodować oznaczenie Twojego adresu e-mail jako spam. Zamiast tego zapisz wiadomość jako plik i załącz go do **nowej** wiadomości.

**Jak zapisać wiadomość e-mail jako plik:**

Kliknij nagłówek odpowiadający używanej przez Ciebie aplikacji pocztowej.

**Programy pocztowe (komputer)**

/// details | **Outlook dla Windows**

Istnieją dwie wersje programu Outlook dla Windows: **klasyczny Outlook** i **nowy Outlook**. Aby je rozróżnić, wpisz "Outlook" w pasku wyszukiwania systemu Windows. Klasyczna wersja wyświetla adnotację *"(classic)"*, natomiast nowy Outlook nie ma specjalnego oznaczenia.

![Outlook Windows - identyfikacja wersji](images/outlook-windows-identify01.png){.thumbnail .h-500}

**Klasyczny Outlook:**

1. Zaznacz phishingową wiadomość e-mail w skrzynce odbiorczej (nie otwieraj jej).
2. Kliknij `File`{.action} na pasku menu, a następnie `Save As`{.action}.
3. Na liście rozwijanej "Save as type" wybierz **Outlook Message Format - Unicode (.msg)**.
4. Wybierz lokalizację na komputerze (np. Pulpit) i kliknij `Save`{.action}.

Możesz również **przeciągnąć i upuścić** wiadomość e-mail ze skrzynki odbiorczej bezpośrednio na Pulpit. Spowoduje to utworzenie pliku `.msg`, który możesz załączyć do zgłoszenia.

**Nowy Outlook:**

1. Na liście wiadomości **kliknij prawym przyciskiem myszy** phishingową wiadomość e-mail.
2. Wybierz `Save as`{.action}, a następnie `Save as EML`{.action}.
3. Wybierz lokalizację na komputerze i kliknij `Save`{.action}.

///

/// details | **Thunderbird**

1. Kliknij prawym przyciskiem myszy phishingową wiadomość e-mail w skrzynce odbiorczej.
2. Wybierz `Save As`{.action}.
3. Wiadomość zostanie zapisana jako plik `.eml`. Wybierz lokalizację na komputerze i kliknij `Save`{.action}.

///

/// details | **Apple Mail (macOS)**

1. Zaznacz phishingową wiadomość e-mail w skrzynce odbiorczej.
2. Na pasku menu kliknij `File`{.action} > `Save As`{.action}.
3. Wybierz format **Raw Message Source**, wybierz lokalizację na komputerze i kliknij `Save`{.action}.

///

**Webmail (przeglądarka)**

/// details | **OWA - Outlook Web Application**

1. Otwórz phishingową wiadomość e-mail.
2. Kliknij **trzy poziome kropki** (...) w prawym górnym rogu wiadomości.
3. Wybierz `View`{.action} > `View message source`{.action}.
4. Zaznacz cały tekst (`Ctrl+A` lub `Cmd+A`), skopiuj go (`Ctrl+C` lub `Cmd+C`), wklej do edytora tekstu (np. Notatnik lub TextEdit) i zapisz plik z rozszerzeniem `.eml`.

///

/// details | **Roundcube (OVHcloud Webmail)**

1. Zaznacz phishingową wiadomość e-mail w skrzynce odbiorczej.
2. Kliknij `More`{.action} (lub ikonę **⋮**) na pasku narzędzi.
3. Wybierz `Download (.eml)`{.action}.
4. Plik zostanie zapisany w folderze Pobrane.

///

/// details | **Zimbra (OVHcloud Webmail)**

1. Zaznacz phishingową wiadomość e-mail w skrzynce odbiorczej.
2. Kliknij `More`{.action} na pasku narzędzi.
3. Wybierz `Show Original`{.action}. Surowa zawartość wiadomości e-mail otworzy się w nowej karcie przeglądarki.
4. W tej nowej karcie użyj `Ctrl+S` (lub `Cmd+S` w macOS), aby zapisać stronę. Zapisz plik z rozszerzeniem `.eml` (jeśli przeglądarka zaproponuje `.txt`, zmień nazwę pliku po zapisaniu).

///

/// details | **Gmail**

1. Otwórz phishingową wiadomość e-mail.
2. Kliknij **trzy pionowe kropki** (⋮) w prawym górnym rogu wiadomości.
3. Wybierz `Download message`{.action}.
4. Plik `.eml` zostanie zapisany w folderze Pobrane.

///

Po zapisaniu pliku utwórz **nową wiadomość e-mail** do **<fraude@ovh.com>** i załącz go.

> [!primary]
>
> Informacje, które przekażesz, mogą zostać udostępnione stronom trzecim w celu pomocy w zwalczaniu tych zagrożeń.
>

### Podałem(-am) swoje dane osobowe — co powinienem/powinnam zrobić?

Kliknij nagłówki poniżej, aby zobaczyć instrukcje.

/// details | **Jeśli podałeś(-aś) numer swojej karty kredytowej na fałszywej stronie internetowej**

Jedyną rzeczą, którą możesz zrobić, jest jak najszybszy kontakt z bankiem w celu zablokowania karty. Podaj datę i (jeśli to możliwe) godzinę, o której podałeś(-aś) numer swojej karty kredytowej.

**Tylko Twój bank może anulować fałszywe transakcje, które mogły zostać wykonane bez Twojej wiedzy.**

///

/// details | **Jeśli podałeś(-aś) swoje hasło OVHcloud na fałszywej stronie internetowej**

<!-- CP-STEPS-START:change-password-security -->
Przejdź na stronę [Bezpieczeństwo](/links/control-panel/account-security) i zmień hasło.
<!-- CP-STEPS-END:change-password-security -->

W naszym przewodniku [Zmiana hasła do konta](/pages/account_and_service_management/account_information/manage-ovh-password) znajdziesz instrukcje zmiany hasła za pomocą Panelu klienta OVHcloud, a także nasze zalecenia dotyczące generowania silnego hasła i zapisywania go w menedżerze haseł.

Zdecydowanie zalecamy włączenie [uwierzytelniania dwuetapowego](/pages/account_and_service_management/account_information/secure-ovhcloud-account-with-2fa) w celu trwałego zabezpieczenia konta.

> [!primary]
>
> Aby zapewnić bezpieczeństwo Twoich danych, hasło musi spełniać następujące kryteria:
>
> - Musi zawierać co najmniej 12 znaków.
> - Musi zawierać co najmniej 1 wielką literę, 1 małą literę i 1 cyfrę.
> - Musi zawierać znaki specjalne (np. `%`, `#`, `:`, `$`, `*`).
> - Nie może zawierać słowa ze słownika.
> - Nie może zawierać danych osobowych (np. imienia, nazwiska lub daty urodzenia).
> - Nie może być używane jako hasło do innych kont użytkowników.
> - Musi być zapisane w menedżerze haseł.
> - Musi być zmieniane co trzy miesiące.
> - Nie może być identyczne z żadnym z wcześniej używanych haseł.
>
///

## Sprawdź również

[Ustawianie i zarządzanie hasłem do konta](/pages/account_and_service_management/account_information/manage-ovh-password)

[Zabezpiecz swoje konto OVHcloud za pomocą uwierzytelniania dwuetapowego](/pages/account_and_service_management/account_information/secure-ovhcloud-account-with-2fa)

[Zabezpiecz swoje konto OVHcloud i zarządzaj swoimi danymi osobowymi](/pages/account_and_service_management/account_information/all_about_username)

Dołącz do [grona naszych użytkowników](/links/community).
