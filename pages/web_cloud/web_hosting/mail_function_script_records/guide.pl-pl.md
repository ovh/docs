---
title: "Monitoring i zarządzanie automatycznymi wiadomościami e-mail na Twoim hostingu"
excerpt: "Dowiedz się, jak monitorować i zarządzać automatycznymi wiadomościami e-mail wysyłanymi z hostingu OVHcloud"
updated: 2024-09-05
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk "Zgłoś propozycję modyfikacji" na tej stronie.
>

## Wprowadzenie 

Zautomatyzowane e-maile to wiadomości wysyłane za pomocą skryptów. Zazwyczaj za pomocą funkcji "mail()" w PHP. Są one wykorzystywane na przykład do formularza kontaktowego na Twojej stronie WWW i umożliwiają Twoim użytkownikom wysyłanie wiadomości.

> [!primary]
>
> Niniejszy przewodnik dotyczy przede wszystkim wiadomości e-mail wysyłanych ze skryptów znajdujących się na [hostingu OVHcloud](/links/web/hosting) za pomocą funkcji "mail()" PHP.
>
> Jeśli chcesz zarządzać adresami e-mail zawartymi w Twojej usłudze MX Plan lub usłudze[hostingu OVHcloud](/links/web/hosting){.external}, zapoznaj się z naszą dokumentacją dotyczącą [E-maili na hostingu - MX Plan](/products/web-cloud-email-collaborative-solutions-mx-plan).
>

> [!success]
>
> Nawet jeśli polecamy użycie funkcji "mail()" PHP, możesz również wysyłać e-maile z hostingu współdzielonego przy użyciu skryptu wykorzystującego [protokół SMTP (Simple Mail Transfer Protocol)](#SMTP).
>

**Dowiedz się, jak monitorować i zarządzać automatycznymi wiadomościami e-mail wysyłanymi z hostingu OVHcloud.**

## Wymagania początkowe

- Posiadanie oferty [hostingu OVHcloud](/links/web/hosting){.external}.
- Dostęp do [Panelu klienta OVHcloud](/links/manager){.external}.

## W praktyce

Monitorowanie i zarządzanie automatycznymi wiadomościami e-mail na Twoim hostingu odbywa się z poziomu [Panelu klienta OVHcloud](/links/manager){.external}. Po zalogowaniu się przejdź do sekcji `Web Cloud`{.action}, kliknij `Hosting`{.action}, następnie wybierz odpowiedni hosting z listy. Następnie kliknij zakładkę `Plus`{.action}, następnie `Scripts e-mail`{.action}.

![hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/email-scripts/go-to-email-scripts-tab.png){.thumbnail}

Wyświetli się strona, na której możesz monitorować i zarządzać automatycznymi wiadomościami e-mail wysyłanymi z [hostingu OVHcloud](/links/web/hosting).

### Prezentacja części "Skrypty e-mail"

![hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/email-scripts/tab.png){.thumbnail}

Na stronie wyświetla się kilka informacji umożliwiających wyświetlenie aktywności wysyłanych z skryptów automatycznych wiadomości e-mail:

- **Status usługi**: aktualny stan usługi realizującej wysyłkę automatycznych wiadomości e-mail z Twojego hostingu:
    - Jeśli jest zielony (*"Aktywny"* lub *"Force"*), oznacza to, że wysyłka jest operacyjna. 
    - Jeśli jest czerwony (*"Nieaktywny"*, *"Bounce"* lub *"SPAM"*), przesyłki nie są wysyłane. <br>

    W zależności od statusu, zarządzanie wysyłką będzie inne.

- **Raporty o błędach**: możesz otrzymywać ją codziennie na wybrany adres e-mail. Zdefiniuj ją za pomocą przycisku `Zmień odbiorcę`{.action}. Raport ten zawiera listę wiadomości e-mail wysłanych z Twojego hostingu, które zostały zwrócone do OVHcloud. Przycisk `Email z błędem`{.action} umożliwia również sprawdzanie w każdej chwili sprawozdań po prawej stronie strony `Scripts email`{.action}.
- **Łączna liczba wysłanych e-maili**: całkowita liczba automatycznych wiadomości e-mail wysłanych od momentu utworzenia hostingu OVHcloud.
- **E-maile wysłane dzisiaj** : całkowita liczba automatycznych wiadomości wysłanych tylko dzisiaj.
- **Łączna liczba e-maili z błędem**: łączna liczba automatycznych wiadomości e-mail wysłanych od momentu utworzenia hostingu, które zostały zwrócone w błędzie w OVHcloud.
- **Historia wysłanych e-maili**: wykres przedstawiający historię wiadomości e-mail wysłanych z Twojego hostingu w poprzednich dniach.

Po prawej stronie możesz zarządzać wysyłką automatycznych wiadomości e-mail z Twojego hostingu. Niektóre z nich mogą nie być dostępne w zależności od statusu usługi.

- **Usuń wiadomości e-mail** : usuwa wiadomości e-mail oczekujące w kolejce i odblokowuje wysyłkę e-maili.
- **E-maile z błędami** : umożliwia dostęp do logów ostatnich e-maili z błędami podczas wysyłki. Na tej stronie znajdziesz adresy e-mail, których dotyczy powiązany z nimi błąd. Uwaga, ta historia nie zostanie zresetowana, nawet jeśli zdecydujesz się na `Usuń wiadomości e-mail`{.action} lub `Odblokuj wysyłkę`{.action}.
- **Blokuj wysyłkę** : blokuje dystrybucję automatycznych wiadomości e-mail wysyłanych z Twojego hostingu. Wiadomości e-mail generowane przez Twoje skrypty po zablokowaniu będą czekały w kolejce przez 72 godziny.
- **Odblokuj wysyłkę** : odblokuj wysyłkę automatycznych wiadomości e-mail z Twojego hostingu. Wiadomości oczekujące w kolejce zostaną ponownie przydzielone do dystrybucji.

Aby wykonać wybraną operację, kliknij odpowiedni przycisk, po czym kliknij `Zatwierdź`{.action}. W niektórych przypadkach pożądana operacja może potrwać kilkadziesiąt minut.

> [!primary]
>
> Aby uniknąć niepożądanego użycia automatycznych wiadomości e-mail z Twojego hostingu, zalecamy wdrożenie systemu bezpieczeństwa, takiego jak "captcha" w formularzach na Twojej stronie WWW, które przesyłają wiadomości (np. formularz kontaktowy).
>

Jeśli Twoje e-maile nie są wysyłane za pomocą skryptów, podczas gdy status usługi pozwala na wysyłkę (*"Aktywny"* lub *"Force"*), zalecamy, aby:

- **sprawdź skrypty do wysyłki**: skrypty mogą nie wysyłać e-maili z powodu błędu składni. Sprawdź zawartość skryptów, w razie potrzeby ich poprawiaj, a następnie spróbuj ponownie.

- **przetestować wysyłkę e-maila za pomocą skryptu testowego**: stwórz skrypt testowy wykonujący emisję e-maila na Twój adres osobowy, używając następującego kodu:

```bash
<?php
$to = "RecipientEmail@address.tld"; 
$subject = "Test mail PHP"; 
$content = "The body/content of the Email";
$headers = "From: Website <SendingEmail@address.tld>\r\nReply-To: SendingEmail@address.tld";

if (mail($to, $subject, $content, $headers))
echo "The email has been sent successfully!";
else
echo "Email did not leave correctly!";
?>
```

Dla `$headers`, wpisz dwa razy ten sam email.

Jeśli otrzymasz wiadomość *The e-mail has been sent successfully!* na adres e-mail, który ustawiłeś w linii `$to`, oznacza to, że skrypty, które wykonujesz zawierają błędy.

- **Upewnij się, czy Twoje e-maile nie używają serwera SMTP**: nie wskazuj serwera SMTP w ustawieniach skryptów podczas korzystania z funkcji "mail()" PHP. Jeśli dysponujesz interfejsem do zarządzania wysyłką e-maili z Twojej strony WWW, zmień ten parametr w konfiguracji Twojej strony.

- **Sprawdź całkowity rozmiar wiadomości e-mail**: Wysłany e-mail nie może przekraczać całkowitego rozmiaru **10 MB** (w tym kapsułka i nagłówek). Treść Twojej wiadomości e-mail nie powinna zatem przekraczać **7/8 MB**.

### Zarządzaj statusami "Nieaktywny", "Bounce" i "SPAM"

### Stan "Nieaktywny"

Stan ten występuje, gdy:

- zbyt dużo e-maili zostało wysłanych bardzo szybko;
- zbyt dużo e-maili zwróconych w błąd;
- samodzielnie wyłączyłeś funkcję z [Panelu klienta OVHcloud](/links/manager).

Aby odblokować sytuację, przejdź do sekcji `Web Cloud`{.action}, kliknij przycisk `Hosting`{.action}, następnie wybierz odpowiedni hosting z listy. Następnie kliknij zakładkę `Plus`{.action}, następnie `Scripts e-mail`{.action}.

Następnie kliknij polecenie `Odblokuj wysyłkę`{.action} i odczekaj kilka minut, aż usługa wysyłania e-maili stanie się aktywna.

#### Stan "Bounce"

Status ten pojawia się, gdy pewna część Twoich e-maili wysłanych automatycznie powróci w błąd.

Aby odblokować sytuację, przejdź do sekcji `Web Cloud`{.action}, kliknij przycisk `Hosting`{.action}, następnie wybierz odpowiedni hosting z listy. Następnie kliknij zakładkę `Plus`{.action}, następnie `Scripts e-mail`{.action}.

Istnieją dwie możliwości:

- Jeśli klikniesz `Odblokuj wysyłkę`{.action}, stan usługi zmieni się na *"Force"*. Stosunek **e-maili zwróconych z błędem / całkowita liczba wysyłanych e-maili** dozwolona przed blokadą zostanie podwojony. Wysyłka rozpocznie się kilka minut po odblokowaniu.
- Po kliknięciu przycisku `Purger des e-mail`{.action}, wszystkie e-maile oczekujące w kolejce zostaną usunięte, a status usługi przejdzie do *"Aktywny"* bez podwojenia współczynnika.

#### Status "SPAM"

Status ten występuje, gdy e-maile uznawane za SPAM zostały wysłane z Twojego hostingu.

Na ogół blokadą tą towarzyszy wysłanie e-maila o nazwie **"Nadużycie na hostingu domain.tld"** wygenerowanego automatycznie przez nasze roboty związane z bezpieczeństwem:

![hosting](/pages/assets/screens/email-sending-to-customer/webhosting/email-script-disabled.png){.thumbnail}

W porównaniu z tą sytuacją możliwe są trzy przypadki:

- **Przypadek nr 1: obsługa formularza kontaktowego przez robota**:

Aby to naprawić, musisz zabezpieczyć wszystkie skrypty mogące wysyłać e-maile z Twojego hostingu za pomocą systemu typu "Captcha".

Następnie przejdź do sekcji `Web Cloud`{.action}, kliknij przycisk `Hosting`{.action}, następnie wybierz odpowiedni hosting z listy. Następnie kliknij zakładkę `Plus`{.action}, a następnie `Scripts e-mail`{.action}.

Następnie kliknij polecenie `Czyszczenie e-maili`{.action}, usunie wszystkie e-maile z kolejki i stan usługi przejdzie do *"Włączony"*.

W tym przypadku obowiązkowe jest czyszczenie SPAM oczekujących na wysyłkę.

- **Przypadek nr 2: wprowadzanie złośliwych plików do Twojego hostingu** :

W celu poprawienia tej sytuacji należy wykonać co najmniej następujące czynności:

- Przeanalizuj [logi Twojego hostingu](/pages/web_cloud/web_hosting/logs_and_statistics), aby zidentyfikować luki bezpieczeństwa i zainfekowane pliki.
- Usuń lub poprawij złośliwy plik/moduły.
- W przypadku systemów CMS (Wordpress, Joomla, Prestashop, Drupal, ...) aktualizuj CMS, wtyczki (wtyczki) i powiązane tematy.
- Zabezpiecz swoje formularze kontaktowe "captcha".

Jeśli korzystasz z CMS-a, skorzystaj z "oficjalnej" wtyczki/szablonów.
Zaktualizuj CMS, wtyczki i powiązane z nimi tematy tak często, jak to tylko możliwe, aby nie powtórzyło się.

Po zabezpieczeniu Twojego hostingu przejdź do sekcji `Web Cloud`{.action}, kliknij przycisk `Hosting`{.action}, następnie wybierz odpowiedni hosting z listy. Następnie kliknij zakładkę `Plus`{.action}, a następnie `Scripts e-mail`{.action}.

Następnie kliknij polecenie `Czyszczenie e-maili`{.action}, usunie wszystkie e-maile z kolejki i stan usługi przejdzie do *"Włączony"*.

W tym przypadku obowiązkowe jest czyszczenie SPAM oczekujących na wysyłkę.

- **Przypadek nr 3: Wysyłka prawidłowych wiadomości e-mail uznanych za SPAM**:

Poniżej znajdziesz kilka przykładów użycia **sposobów, których należy unikać** podczas wysyłania wiadomości e-mail (aby nie był on uważany za zbyt "łatwy" jako SPAM):

- 3 lub więcej wielkich liter w temacie/obiekcie wiadomości.
- Brak tematu/tekstu wpisanego w e-mailu.
- E-mail zawiera tylko obraz wielkości powyżej 1 MB i kilka słów.
- Temat wiadomości rozpoczyna się od: Hi, FREE, BUY, BUYING,....
- E-mail zawiera więcej niż 70% białych wiadomości (nadużycie na klawiaturze "ESPACE" lub "WEJŚCIE").
- czcionka używana do pisania e-maila jest bardzo duża.
- Kolor zapisu i tła są identyczne, jeśli chodzi o pisanie e-maila.
- Publiczny adres IP (na przykład adres IP Twojego punktu dostępu do internetu) jest wyświetlany u renomowanych organizacji.
- Nagłówek wysłanej wiadomości nie jest zgodny z RFC "e-maile" (standardy lub standardy e-mail).
- Link lub linki w e-mailu są nieprawidłowe.
- Adres URL w e-mailu jest niezabezpieczony (na przykład: zgłoszona jako `https://`, gdy adres URL istnieje tylko na `http://`)
- E-mail zawiera słowa o charakterze pornograficznym lub zbliża się do nich.
- E-mail zawiera plik wykonalny (EXE, BAT, PIF, XML, XLSX lub dokumenty z makrami), nawet jeśli jest "zaznaczony".

Jeśli mimo to status usługi powróci do stanu *"SPAM"*, odpowiedz na automatyczny e-mail, który otrzymałeś, wskazując, że zrobiłeś to, co konieczne.

Nasza usługa anty-spamowa będzie analizować sytuację, a nasz dział wsparcia powróci do Ciebie, aby wyjaśnić procedurę odblokowania.

### Wysyłka e-maili za pomocą skryptu "SMTP" <a name="SMTP"></a>

> [!warning]
>
> OVHcloud oddaje do Twojej dyspozycji usługi, których konfiguracja, zarządzanie i odpowiedzialność spoczywa na Ciebie. W związku z tym należy zapewnić ich prawidłowe funkcjonowanie.
> 
> Oddajemy do Twojej dyspozycji następną część, która pomoże Ci w jak najlepszym wykonywaniu bieżących zadań. W przypadku trudności zalecamy skorzystanie z pomocy [wyspecjalizowanego usługodawcy](/links/partner). Niestety firma OVHcloud nie będzie mogła udzielić wsparcia w tym zakresie. Więcej informacji znajduje się w sekcji ["Idź dalej"](#go-further) niniejszego przewodnika.
>

Mimo że rekomendujemy korzystanie z funkcji "mail()" PHP, hosting współdzielony umożliwia wysyłanie e-maili przy użyciu skryptu SMTP (Simple Mail Transfer Protocol). Całkowity rozmiar wiadomości e-mail nie może przekroczyć **10 MB** (tj. **7/8 MB bez kapsułek**).

> [!warning]
> 
> E-maile wysyłane za pomocą skryptu wykorzystującego konfigurację SMTP nie mogą być zarządzane i monitorowane za pomocą [Panelu klienta OVHcloud](/links/manager).
> 

> [!primary]
>
> Jeśli używasz adresu e-mail OVHcloud i tylko w tym przypadku możesz również używać `SMTPSecure` *"starttls"* lub *"tls"* z `Port` **587**. Natomiast `SMTPSecure` *"ssl"* z `Port` **465** pozostaje konfiguracją uprzywilejowaną dla naszej infrastruktury.
>

## Sprawdź również <a name="go-further"></a>

[Sprawdź logi Twojego hostingu](/pages/web_cloud/web_hosting/logs_and_statistics)

[Sprostowanie strony "403 Forbidden", która wyświetla się na Twojej stronie](/pages/web_cloud/web_hosting/diagnostic_403_forbidden)

[Przywracanie przestrzeni dyskowej FTP Twojego hostingu](/pages/web_cloud/web_hosting/ftp_save_and_backup)

W przypadku wyspecjalizowanych usług (pozycjonowanie, rozwój, etc.) skontaktuj się z [partnerami OVHcloud](/links/partner).

Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i użytkowania Twoich rozwiązań OVHcloud, zapoznaj się z [naszymi ofertami pomocy](/links/support).

Dołącz do [grona naszych użytkowników](/links/community)