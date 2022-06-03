---
title: 'Udostępnianie plików za pomocą narzędzia Plik'
excerpt: 'Dowiedz się, jak używać narzędzia Plik do wysyłania plików innym osobom'
slug: plik
section: Narzędzia
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk “Zaproponuj zmianę” na tej stronie.
>

**Ostatnia aktualizacja z dnia 14-02-2022**

## Wprowadzenie

Internetowe narzędzie [Plik](https://plik.ovhcloud.com) umożliwia współdzielenie plików między różnymi osobami, oferując opcje zabezpieczania dostępu do tych plików.

**Dowiedz się, jak korzystać z narzędzia online Plik do udostępniania plików.**

## Wymagania początkowe

- Posiadanie [konta OVHcloud](https://docs.ovh.com/pl/customer/tworzenie-konta-ovhcloud/)

## W praktyce

### Połączenie API

Najpierw przejdź do strony <https://plik.ovhcloud.com>.

Aby pobrać pliki, musisz zostać uwierzytelniony. Kliknij `Login with OVH`{.action}.

![login](images/plik-login-EU.png)

Zaloguj się do konta OVHcloud, dzięki czemu API OVHcloud będzie miał dostęp do narzędzia Plik.<br>
Wpisz dane do logowania i kliknij przycisk `Log in`{.action}, aby kontynuować.

![API](images/api-login-EU.png)

> [!primary]
>
> Jeśli aktywowałeś [weryfikację dwuetapową](https://docs.ovh.com/pl/customer/zabezpieczenie-konta-za-pomoca-2FA/) na Twoim koncie, wpisz kod dostarczony w metodzie uwierzytelniania, którą określiłeś na Twoim koncie. 

### Pobierz pliki

Po zalogowaniu kliknij słowo `Plik`{.action} w lewym górnym rogu, aby uzyskać dostęp do menu dodawania plików.

Kliknij `Add files`{.action} i wybierz plik, który chcesz dodać lub wybierz "przeciągnij i upuść" swoich plików.

> [!primary]
>
> Rozmiar plików jest ograniczony do 10 GB.
>

![Add files - opcje](images/plik-add-files-options.png)

Możesz skonfigurować kilka opcji:

- `Destruct after the first download` - Ta opcja usunie pobrany plik po pierwszym pobraniu.
- `Streaming` - Plik nie będzie przechowywany na serwerze. Zamiast tego, przesyłanie pliku rozpoczyna się, gdy zdalny użytkownik rozpoczyna pobieranie.
- `Removable` - Umożliwia użytkownikom końcowym usunięcie pliku przekazanego do sieci.
- `Password` - Zabezpiecz swoją transmisję wprowadzając identyfikator klienta i hasło, które zdalny użytkownik będzie musiał wpisać.
- `Comments` - Dodaj komentarze do pobrania. Obsługiwany jest język *markdown*.
- `Files will be automatically removed in` - Wybierz liczbę dni (maksymalnie 30), godzin lub minut, po których chcesz, aby pliki zostały automatycznie usunięte.

> [!primary]
>
> Kiedy chronisz przesłanie za pomocą hasła, domyślną nazwą użytkownika jest "plik".
>

Po dodaniu plików i wybraniu żądanych opcji kliknij zielony przycisk `Upload`{.action} po lewej stronie. Otworzy to nową stronę z załączonymi plikami.

![upload file](images/plik-upload-EU.png)

Opcje pobierania są dostępne.

### Pobierz pliki

Na stronie pobierania dostępne są nowe opcje:

- `Zip archive` - Umieść wszystkie pliki, które zostały przesłane do skompresowanego folderu.
- `Add files` - Umożliwia dodawanie innych plików.
- `Delete` - Usuwa wszystkie wcześniej przesłane pliki.

Możesz również usunąć pojedynczo pliki, klikając przycisk `X`{.action} po prawej stronie każdego pliku.

![download file](images/plik-download-EU.png)

Aby umożliwić innym osobom pobranie plików, daj im link do indywidualnego pliku znajdującego się pod nazwą pliku.<br>
Możesz również przekazać im link do wszystkich plików sesji, dzieląc się adresem URL na pasku adresowym przeglądarki.<br>
Możesz również udostępnić kod QR po lewej stronie. Jeśli przesłałeś kilka plików, QR kod pozwoli pobrać każdy z plików.

### Opcje konta

Kliknij Twój identyfikator w prawym górnym rogu, aby uzyskać dostęp do opcji konta.

![download file](images/account-options.png)

Za pomocą tego menu możesz się wylogować, wygenerować tokeny, aby używać narzędzia Plik w wierszu poleceń, usunąć każdą transmisję (za pomocą przycisku `Remove`{.action} z prawej strony każdej wpłaty) lub usunąć wszystkie (za pomocą przycisku `DELETE UPLOADS`{.action}).

## Sprawdź również

Dołącz do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.
