---
title: "Monitorowanie i zarządzanie automatycznymi wiadomościami e-mail na Twoim hostingu"
excerpt: "Dowiedz się, jak monitorować i zarządzać automatycznymi wiadomościami e-mail wysyłanymi z hostingu OVHcloud"
updated: 2026-04-01
---

## Wprowadzenie

Zautomatyzowane e-maile to wiadomości wysyłane za pomocą skryptów. Zazwyczaj za pomocą funkcji "mail()" w PHP. Są one wykorzystywane na przykład do formularza kontaktowego na Twojej stronie WWW i umożliwiają Twoim użytkownikom wysyłanie wiadomości.

> [!primary]
>
> Niniejszy przewodnik dotyczy głównie wiadomości e-mail wysyłanych ze skryptów zlokalizowanych na Twoim [hostingu OVHcloud](/links/web/hosting) przy użyciu funkcji "mail()" PHP.
>
> Jeśli chcesz zarządzać kontami e-mail zawartymi w Twojej ofercie MX Plan lub w ofercie [hostingu OVHcloud](/links/web/hosting), zapoznaj się z naszą dokumentacją dotyczącą [E-maili współdzielonych - MX Plan](/products/web-cloud-email-collaborative-solutions-mx-plan).
>

> [!success]
>
> Chociaż zdecydowanie zalecamy korzystanie z funkcji "mail()" PHP, możesz również wysyłać e-maile z hostingu współdzielonego za pomocą skryptu korzystającego z [protokołu SMTP (Simple Mail Transfer Protocol)](#SMTP).
>

**Dowiedz się, jak monitorować i zarządzać automatycznymi wiadomościami e-mail wysyłanymi z hostingu OVHcloud.**

## Wymagania

- Posiadanie oferty [hostingu OVHcloud](/links/web/hosting).

<!-- CP-NAV-START:web-hosting -->
---

### Dostęp do Panelu klienta OVHcloud

- **Bezpośredni link:** [Hosting](/links/control-panel/web-hosting)
- **Ścieżka nawigacji:** `Web Cloud`{.action} > `Hosting`{.action} > Wybierz Twój hosting WWW

---
<!-- CP-NAV-END:web-hosting -->

## W praktyce

### Prezentacja sekcji «Skrypty e-mail»

<!-- CP-STEPS-START:email-scripts-overview -->
Aby uzyskać dostęp do sekcji «Skrypty e-mail», kliknij poniższe zakładki, aby wyświetlić kolejne **3** kroki.

> [!tabs]
> **Krok 1**
>>
>> Przejdź do strony [Hosting](/links/control-panel/web-hosting) i wybierz odpowiedni hosting WWW.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Krok 2**
>>
>> Na stronie, która się wyświetla, kliknij zakładkę `Więcej`{.action}, a następnie kliknij `Skrypty e-mail`{.action}.
>>
>> ![More tab](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/more.png){.thumbnail}
>>
>> ![More tab 2](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/more-2.png){.thumbnail}
>>
> **Krok 3**
>>
>> Na tej stronie możesz monitorować i zarządzać automatycznymi wiadomościami e-mail wysyłanymi z Twojego [hostingu OVHcloud](/links/web/hosting).
>>
>> ![Strona Skrypty e-mail hostingu](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/email-scripts/tab.png){.thumbnail}
>>
>> Na stronie wyświetlanych jest kilka informacji umożliwiających śledzenie aktywności wysyłek automatycznych wiadomości e-mail generowanych przez Twoje skrypty:
>>
>> - **Stan usługi**: aktualny stan usługi realizującej wysyłki automatycznych wiadomości e-mail z Twojego hostingu:
>>     - Jeśli jest zielony (*«Aktywny»* lub *«Force»*), oznacza to, że wysyłki są aktywne.
>>     - Jeśli jest czerwony (*«Dezaktywowany»*, *«Bounce»* lub *«spam»*), wysyłki nie są już realizowane.
>>
>>     W zależności od tego stanu, zarządzanie wysyłkami będzie inne.
>>
>> - **Raport błędów do**: otrzymuj go codziennie na wybrany adres e-mail. Ustaw go za pomocą przycisku `Zmień odbiorcę`{.action}. Raport zawiera wiadomości e-mail wysłane z Twojego hostingu, które wróciły z błędem do OVHcloud. Przycisk `E-maile w błędzie`{.action} umożliwia również przeglądanie tych raportów w dowolnym momencie po prawej stronie strony `Skrypty e-mail`{.action}.
>> - **Łączna liczba wysłanych e-maili**: łączna liczba automatycznych wiadomości e-mail wysłanych od czasu utworzenia Twojego hostingu OVHcloud.
>> - **E-maile wysłane dzisiaj**: łączna liczba automatycznych wiadomości e-mail wysłanych tylko dzisiaj.
>> - **Łączna liczba e-maili w błędzie**: łączna liczba automatycznych wiadomości e-mail wysłanych od czasu utworzenia Twojego hostingu, które wróciły z błędem do OVHcloud.
>> - **Historia wysłanych e-maili**: wykres przedstawiający historię wiadomości e-mail wysłanych z Twojego hostingu w poprzednich dniach.
>>
>> Po prawej stronie kilka przycisków umożliwia zarządzanie wysyłkami automatycznych wiadomości e-mail z Twojego hostingu. W zależności od stanu usługi, niektóre przyciski mogą być niedostępne.
>>
>> - **Usuń e-maile**: usuwa e-maile z kolejki i odblokowuje wysyłkę. Ze względu na poufność, e-maile w kolejce są niedostępne po stronie OVHcloud. Możesz wyświetlić te e-maile tylko jeśli zostały wcześniej zapisane w bazie danych Twojej strony WWW przed wysłaniem.
>> - **E-maile w błędzie**: umożliwia dostęp do logów ostatnich wiadomości e-mail, które nie zostały wysłane z powodu błędu. Znajdziesz tam zainteresowane adresy e-mail z powiązanym błędem. Uwaga, historia ta nie zostanie zresetowana, nawet jeśli zdecydujesz się `Usuń e-maile`{.action} lub `Odblokuj wysyłkę`{.action}.
>> - **Zablokuj wysyłkę**: blokuje dystrybucję automatycznych wysyłek wiadomości e-mail z Twojego hostingu. Wiadomości e-mail generowane przez Twoje skrypty po zablokowaniu nie będą wysyłane, lecz przechowywane w kolejce przez maksymalnie 72 godziny.
>> - **Odblokuj wysyłkę**: odblokowuje wysyłkę automatycznych wiadomości e-mail z Twojego hostingu. Wiadomości e-mail w kolejce zostaną również wznowione.
>>
>> Aby wykonać pożądaną akcję, kliknij odpowiedni przycisk, a następnie `Zatwierdź`{.action}. W niektórych przypadkach pożądana akcja może wymagać kilku minut, aby być w pełni skuteczna.
<!-- CP-STEPS-END:email-scripts-overview -->

> [!primary]
>
> Aby uniknąć niepożądanego wykorzystania automatycznych wiadomości e-mail Twojego hostingu, zdecydowanie zalecamy wdrożenie systemu bezpieczeństwa, np. «captcha» w formularzach na Twojej stronie WWW realizujących wysyłki wiadomości e-mail (np. formularz kontaktowy).
>

Jeśli zauważysz, że wiadomości e-mail generowane przez Twoje skrypty nie są już wysyłane, mimo że stan usługi nadal umożliwia wysyłkę (*«Aktywny»* lub *«Force»*), zalecamy:

- **weryfikację skryptów realizujących wysyłki**: skrypty mogą nie być w stanie wysłać wiadomości z powodu błędu składni. Sprawdź zawartość swoich skryptów, popraw je jeśli to konieczne, a następnie ponów próbę.

- **testowanie wysyłki wiadomości e-mail za pomocą skryptu testowego**: utwórz skrypt testowy wysyłający wiadomość e-mail na swój adres osobisty przy użyciu poniższego kodu:

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

W polu `$headers` podaj dwukrotnie ten sam adres e-mail nadawcy.

Jeśli poprawnie otrzymasz wiadomość *The email has been sent successfully!* na adres e-mail zdefiniowany w wierszu `$to`, oznacza to, że skrypty realizujące Twoje wysyłki zawierają błędy.

- **Upewnij się, że Twoje wysyłki nie używają serwera SMTP**: nie podawaj serwera SMTP w parametrach swoich skryptów, gdy używasz funkcji "mail()" PHP. Jeśli posiadasz interfejs do administrowania wysyłkami wiadomości e-mail ze swojej strony WWW, zmień ten parametr w konfiguracji interfejsu.

- **Sprawdź całkowity rozmiar swojej wiadomości e-mail**: wysłana wiadomość e-mail nie może przekraczać całkowitego rozmiaru **10 MB** (wraz z enkapsulacją i nagłówkiem). Sama treść wiadomości nie może przekraczać **7/8 MB**.

### Zarządzanie stanami «Dezaktywowany», «Bounce» i «spam» <a name="block-state"></a>

W tej sekcji znajdziesz szczegółowe informacje o każdym stanie, który zablokował Twoją funkcję e-mail.

> [!warning]
>
> Przed opisaniem każdego z tych stanów należy zrozumieć punkty, które mogą wpłynąć na reputację Twojej domeny lub uniemożliwić odbiór Twoich wiadomości e-mail.
>
> Wcześniej sprawdź następujące punkty:
>
> - Konfiguracja [rekordu SPF](/pages/web_cloud/domains/dns_zone_spf) w strefie DNS domeny.
> - Konfiguracja [rekordu DMARC](/pages/web_cloud/domains/dns_zone_dmarc) w strefie DNS domeny, **tylko jeśli serwer docelowy tego wymaga**.
> - Sprawdź reputację adresu IP, z którego pochodzi wysyłka ([adres IP Twojego hostingu](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_ip)), za pomocą narzędzia takiego jak [MXtoolbox](https://mxtoolbox.com/) lub [Spamhaus](https://check.spamhaus.org/).
> - Wiadomość e-mail nie zawiera elementów, które mogłyby być interpretowane jako spam. Nieistniejącą listę takich elementów znajdziesz w sekcji «[Przypadek nr 3: Wysyłka legalnych wiadomości e-mail uznanych za spam](#elements-list-spam)» niniejszego przewodnika.
> - W przypadku braku blokady po stronie OVHcloud i jeśli wiadomość e-mail nie została odebrana lub odrzucona przez odbiorcę, skontaktuj się z odbiorcą, aby sprawdzić, czy wiadomość nie została zablokowana na poziomie serwera odbiorczego.

#### Stan «Dezaktywowany»

Ten stan pojawia się gdy:

- wysłano zbyt wiele wiadomości e-mail w bardzo krótkim czasie;
- zbyt wiele wiadomości e-mail wróciło z błędem;
- samodzielnie dezaktywowałeś tę funkcję w Panelu klienta OVHcloud.

<!-- CP-STEPS-START:resolve-disabled-status -->
Aby odblokować sytuację, kliknij poniższe zakładki, aby wyświetlić kolejne **3** kroki.

> [!tabs]
> **Krok 1**
>>
>> Przejdź do strony [Hosting](/links/control-panel/web-hosting) i wybierz odpowiedni hosting WWW.
>>
> **Krok 2**
>>
>> Na stronie, która się wyświetla, kliknij zakładkę `Więcej`{.action}, a następnie kliknij `Skrypty e-mail`{.action}.
>>
> **Krok 3**
>>
>> Kliknij `Odblokuj wysyłkę`{.action} i poczekaj kilka minut, aż usługa wysyłki będzie ponownie aktywna.
<!-- CP-STEPS-END:resolve-disabled-status -->

#### Stan «Bounce»

Ten stan pojawia się, gdy określony procent Twoich automatycznie wysłanych wiadomości e-mail wrócił z błędem.

<!-- CP-STEPS-START:resolve-bounce-status -->
Aby odblokować sytuację, kliknij poniższe zakładki, aby wyświetlić kolejne **3** kroki.

> [!tabs]
> **Krok 1**
>>
>> Przejdź do strony [Hosting](/links/control-panel/web-hosting) i wybierz odpowiedni hosting WWW.
>>
> **Krok 2**
>>
>> Na stronie, która się wyświetla, kliknij zakładkę `Więcej`{.action}, a następnie kliknij `Skrypty e-mail`{.action}.
>>
> **Krok 3**
>>
>> Możliwe są dwie opcje:
>>
>> - Jeśli klikniesz `Odblokuj wysyłkę`{.action}, stan usługi zmieni się na *«Force»*. Dozwolony stosunek **wiadomości e-mail zwróconych z błędem / łączna liczba wysłanych wiadomości e-mail** przed zablokowaniem zostanie podwojony. Wysyłka będzie ponownie aktywna kilka minut po odblokowaniu.
>> - Jeśli klikniesz `Usuń e-maile`{.action}, wszystkie wiadomości e-mail z kolejki zostaną usunięte, a stan usługi wróci do *«Aktywny»* bez podwajania stosunku.
<!-- CP-STEPS-END:resolve-bounce-status -->

#### Stan «spam»

Ten stan pojawia się, gdy z Twojego hostingu wysyłane są wiadomości uważane za spam.

Zazwyczaj temu zablokowaniu towarzyszy wysłanie wiadomości e-mail zatytułowanej **«Nadużycie z Twoim hostingiem domain.tld»** generowanej automatycznie przez nasze roboty bezpieczeństwa:

![hosting](/pages/assets/screens/email-sending-to-customer/webhosting/email-script-disabled.png){.thumbnail}

W związku z tą sytuacją możliwe są trzy przypadki:

- **Przypadek nr 1: wykorzystanie formularza kontaktowego przez robota**:

Aby naprawić tę sytuację, należy zabezpieczyć wszystkie skrypty mogące wysyłać wiadomości e-mail z Twojego hostingu za pomocą systemu «Captcha».

<!-- CP-STEPS-START:resolve-spam-case-1 -->
Następnie przejdź do sekcji «Skrypty e-mail» Twojego hostingu. W tym celu kliknij poniższe zakładki, aby wyświetlić kolejne **3** kroki.

> [!tabs]
> **Krok 1**
>>
>> Przejdź do strony [Hosting](/links/control-panel/web-hosting) i wybierz odpowiedni hosting WWW.
>>
> **Krok 2**
>>
>> Na stronie, która się wyświetla, kliknij zakładkę `Więcej`{.action}, a następnie kliknij `Skrypty e-mail`{.action}.
>>
> **Krok 3**
>>
>> Kliknij `Usuń e-maile`{.action}: wszystkie wiadomości e-mail z kolejki zostaną usunięte, a stan usługi wróci do *«Aktywny»*. W tym przypadku usunięcie jest obowiązkowe, aby usunąć spam oczekujący na wysyłkę.
<!-- CP-STEPS-END:resolve-spam-case-1 -->

- **Przypadek nr 2: wstrzyknięcie złośliwych plików do Twojego hostingu**:

Aby naprawić tę sytuację, musisz wykonać co najmniej następujące działania:

- Przeanalizuj [logi swojego hostingu](/pages/web_cloud/web_hosting/logs_and_statistics), aby zidentyfikować luki w bezpieczeństwie i zainfekowane pliki.
- Usuń lub popraw złośliwe pliki/moduły.
- W przypadku CMS (WordPress, Joomla!, PrestaShop, Drupal, ...), zaktualizuj CMS, wtyczki i powiązany motyw.
- Zabezpiecz formularze kontaktowe za pomocą «captcha».

Jeśli używasz CMS, preferuj używanie «oficjalnych» wtyczek/motywów.
Aktualizuj CMS, wtyczki i powiązany motyw jak najczęściej, aby uniknąć powtórzenia się sytuacji.

<!-- CP-STEPS-START:resolve-spam-case-2 -->
Po zabezpieczeniu hostingu kliknij poniższe zakładki, aby wyświetlić kolejne **3** kroki.

> [!tabs]
> **Krok 1**
>>
>> Przejdź do strony [Hosting](/links/control-panel/web-hosting) i wybierz odpowiedni hosting WWW.
>>
> **Krok 2**
>>
>> Na stronie, która się wyświetla, kliknij zakładkę `Więcej`{.action}, a następnie kliknij `Skrypty e-mail`{.action}.
>>
> **Krok 3**
>>
>> Kliknij `Usuń e-maile`{.action}: wszystkie wiadomości e-mail z kolejki zostaną usunięte, a stan usługi wróci do *«Aktywny»*.
<!-- CP-STEPS-END:resolve-spam-case-2 -->

W tym przypadku usunięcie jest obowiązkowe, aby usunąć spam oczekujący na wysyłkę.

- **Przypadek nr 3: Wysyłka legalnych wiadomości e-mail uznanych za spam** <a name="elements-list-spam"></a>

Jeśli to Ty jesteś nadawcą wiadomości e-mail, które spowodowały zablokowanie, poniżej znajdziesz kilka przykładów **praktyk do unikania** podczas wysyłania wiadomości e-mail (aby nie były zbyt łatwo uznawane za spam):

- 3 lub więcej słów pisanych wielkimi literami w temacie/obiekcie wiadomości e-mail.
- Brak tematu/tekstu w wiadomości e-mail.
- Wiadomość e-mail zawiera jedynie obraz o rozmiarze przekraczającym 1 MB i kilka słów.
- Temat wiadomości e-mail zaczyna się od: Hi, FREE, BUY, BUYING,....
- Wiadomość e-mail zawiera więcej niż 70% białych znaków (nadużywanie klawisza «SPACJA» lub «ENTER» na klawiaturze).
- Czcionka użyta do pisania wiadomości e-mail jest wyjątkowo duża.
- Kolor tekstu i kolor tła są identyczne w pisanej wiadomości e-mail.
- Publiczny adres IP (np. IP Twojego punktu dostępu do internetu) jest wymieniony w bazach reputacji.
- Nagłówek wysłanej wiadomości e-mail nie spełnia standardów RFC «e-mail».
- Linki w wiadomości e-mail są nieprawidłowe.
- Adres URL w wiadomości e-mail nie jest bezpieczny (np. podany jako `https://`, podczas gdy URL istnieje tylko jako `http://`).
- Wiadomość e-mail zawiera treści o charakterze pornograficznym lub podobne.
- Wiadomość e-mail zawiera plik wykonywalny (EXE, BAT, PIF, XML, XLSX lub dokumenty z «makrami»), nawet jeśli jest «spakowany».

Jeśli mimo to stan usługi powróci do stanu *«spam»*, odpowiedz na automatyczną wiadomość e-mail, którą otrzymałeś, podając, że podjąłeś niezbędne kroki.

Nasza usługa antyspamowa przeanalizuje sytuację, a nasz dział wsparcia skontaktuje się z Tobą, aby wyjaśnić procedurę odblokowania.

### Wysyłka wiadomości e-mail za pomocą skryptu «SMTP» <a name="SMTP"></a>

> [!warning]
>
> OVHcloud udostępnia Ci usługi, za których konfigurację i zarządzanie odpowiadasz. To Ty odpowiadasz za ich prawidłowe funkcjonowanie.
>
> Jednak zachęcamy do kontaktu z [wyspecjalizowanym dostawcą](/links/partner) w przypadku napotkania trudności. Niestety nie będziemy w stanie udzielić Ci wsparcia. Więcej informacji znajdziesz w sekcji [«Sprawdź również»](#go-further) niniejszego przewodnika.
>

Chociaż zdecydowanie zalecamy korzystanie z funkcji "mail()" PHP, hosting współdzielony umożliwia wysyłanie wiadomości e-mail za pomocą skryptu korzystającego z protokołu SMTP (Simple Mail Transfer Protocol). Całkowity rozmiar Twojej wiadomości e-mail nie może przekraczać **10 MB** (tj. **7/8 MB bez enkapsulacji**).

> [!warning]
> 
> Wiadomości e-mail wysyłane za pomocą skryptu korzystającego z konfiguracji SMTP nie będą mogły być zarządzane i śledzone z Twojego [Panelu klienta OVHcloud](/links/manager).
> 

> [!primary]
>
> Jeśli używasz adresu e-mail OVHcloud i tylko w tym przypadku, możesz również używać `SMTPSecure` *«starttls»* lub *«tls»* z `Port` **587**. Jednak `SMTPSecure` *«ssl»* z `Port` **465** pozostaje konfigurację preferowaną na naszej infrastrukturze.
> 

## Sprawdź również <a name="go-further"></a>

[Sprawdź logi swojego hostingu](/pages/web_cloud/web_hosting/logs_and_statistics)

[Popraw błąd «403 Forbidden» wyświetlany na Twojej stronie](/pages/web_cloud/web_hosting/diagnostic_403_forbidden)

[Przywróć przestrzeń dyskową FTP Twojego hostingu](/pages/web_cloud/web_hosting/ftp_save_and_backup)

W przypadku wyspecjalizowanych usług (pozycjonowanie, entwicklung itp.) skontaktuj się z [partnerami OVHcloud](/links/partner).

Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i użytkowania Twoich rozwiązań OVHcloud, sprawdź nasze [oferty pomocy](/links/support).

Dołącz do [grona naszych użytkowników](/links/community).
