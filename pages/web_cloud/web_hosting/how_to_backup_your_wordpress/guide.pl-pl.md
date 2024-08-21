---
title: "Tutorial - Zapisz stronę WWW z modułem WordPress"
excerpt: "Dowiedz się, jak zapisać zawartość strony WordPress i bazę danych"
updated: 2023-02-22
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk "Zgłoś propozycję modyfikacji" na tej stronie.
>

## Wprowadzenie

Twoja strona WWW jest narażona na nieprawidłowe działanie (np. błąd w trakcie operacji, przypadkowe usunięcie plików, nieprawidłowa konfiguracja, luka w zabezpieczeniach lub włamanie), co może spowodować częściową lub całkowitą utratę danych.<br>
Regularne tworzenie kopii zapasowych danych umieszczonych na Twojej stronie WWW jest dobrym rozwiązaniem. W przypadku wystąpienia usterki, przywrócisz poprzednią wersję Twojej strony WWW.

Na hostingu możesz zarządzać kopiami zapasowymi Twojej strony WWW. Nawet jeśli OVHcloud oferuje kopie zapasowe (nieobjęte umową), zalecamy wykonywanie również regularnych kopii zapasowych oraz zarządzanie własnymi nośnikami kopii zapasowych (dysk twardy, klucz USB, itp.), aby zachować szczególną ostrożność.

> [!warning]
>
> OVHcloud oddaje do Twojej dyspozycji usługi, których konfiguracja, zarządzanie i odpowiedzialność spoczywa na Ciebie. W związku z tym należy zapewnić ich prawidłowe funkcjonowanie.
> 
> Oddajemy do Twojej dyspozycji niniejszy tutorial, którego celem jest pomoc w jak najlepszym wykonywaniu bieżących zadań. W przypadku trudności zalecamy skorzystanie z pomocy [wyspecjalizowanego usługodawcy](/links/partner) lub [edytora CMS WordPress](https://wordpress.com/support/){.external}. Niestety firma OVHcloud nie będzie mogła udzielić wsparcia w tym zakresie. Więcej informacji znajduje się w sekcji ["Sprawdź również"](#go-further) niniejszego tutoriala.
>

**Dowiedz się, jak zapisać zawartość strony WordPress i jej bazy danych.**

## Wymagania początkowe

- Posiadanie [hostingu](/links/web/hosting) i zainstalowanie WordPressa

## W praktyce

Możesz wykonać kopię zapasową na dwa sposoby: **ręcznie** lub przez **poprzez rozszerzenie**.

OVHcloud dostarcza [usługę (nieokreśloną w umowie) umożliwiającą automatyczne tworzenie kopii zapasowych danych](/pages/web_cloud/web_hosting/ftp_save_and_backup) oraz udostępnia te kopie zapasowe. Twoja odpowiedzialność spoczywa jednak na wdrożeniu własnej polityki przywracania i określaniu punktów przywracania usług w momentach, które uważasz za stosowne.

### Metoda 1 - ręczna kopia zapasowa

Ręczna kopia zapasowa musi być wykonana w dwóch etapach. Najpierw należy wykonać kopię zapasową plików PHP na Twojej stronie WWW, a następnie wyeksportować bazę danych.

#### 1.1 - Zapisz pliki strony www

Odzyskanie informacji odbywa się za pośrednictwem klienta FTP, takiego jak FileZilla. Aby uzyskać więcej informacji, zapoznaj się z naszym przewodnikiem "[Użyj FileZilla na Twoim hostingu OVHcloud](/pages/web_cloud/web_hosting/ftp_filezilla_user_guide)".

Po zalogowaniu się do serwera przez FTP, pobierz (przeciągnij/upuść) zawartość katalogu `www` na prawym boku. Katalog ten zawiera wszystkie pliki i katalogi Twojej strony WordPress (konfiguracja, szablony, media, itp.).

![Widok plików i katalogów WordPress z katalogiem głównym](/pages/assets/screens/other/web-tools/filezilla/wordpress-into-www.png){.thumbnail}

Kliknij na katalog `www` i przeciągnij go do wybranego katalogu w oknie po lewej stronie. Transfer plików rozpocznie się automatycznie.

W przypadku awarii na Twojej stronie WWW wykonaj operację odwrotną, usuwając pliki docelowe.

#### 1.2 - Eksport bazy danych

Aby wyeksportować Twoją bazę danych, przejdź do interfejsu _PHPMyAdmin_ poprzez adres URL, który otrzymałeś w momencie składania zamówienia na hosting.

> [!success]
>
> Zapoznaj się z naszym przewodnikiem dotyczącym [eksportu bazy danych](/pages/web_cloud/web_hosting/sql_database_export).

![Dostęp PHPMyAdmin - Strona główna](/pages/assets/screens/other/web-tools/phpmyadmin/pma-main-page-2.png){.thumbnail}

Kliknij `Eksport`{.action} na górze strony:

![Dostęp PHPMyAdmin - Eksport](/pages/assets/screens/other/web-tools/phpmyadmin/pma-export.png){.thumbnail}

Pozostaw wybór domyślny: metoda szybkiego eksportu i format SQL.

Kliknij polecenie `Uruchom`{.action}, pobierz Twoją bazę danych w formacie SQL (Structured Query Language).

![Dostęp PHPMyAdmin - Eksport - Pobieranie](/pages/assets/screens/other/browsers/web-pages/dowload-successfull.png){.thumbnail}

### Metoda 2 - wykonanie kopii zapasowej z rozszerzeniem

Dzięki licznym rozszerzeniom WordPress możesz zarządzać kopiami zapasowymi. Najbardziej popularną opcją jest [UdraftPlus](https://wordpress.org/plugins/updraftplus/){.external}, który zawiera kilka milionów aktywnych instalacji. Darmowa wersja wystarczy, aby zapisać Twoją stronę WWW. Wersja premium oferuje więcej opcji, takich jak przyrostowe kopie zapasowe, narzędzie do migracji, kopie zapasowe dla wielu stron, większy wybór w chmurze do przechowywania danych, etc.

Pobierz rozszerzenie w formacie `.zip` na komputerze. W celu zachowania jasności plik przesłany do rozszerzenia otrzymuje nazwę **updraftplus.zip** w dalszej części tego tutoriala.

#### 2.1 - Zaloguj się do interfejsu administracyjnego, aby zainstalować rozszerzenie

Domyślnie jest to nazwa domeny, po której następuje `/wp-admin`:

![Dostęp administratora do wp-admin](/pages/assets/screens/other/cms/wordpress/login-interface.png){.thumbnail}

Na stronie głównej przejdź do sekcji `Wtyczki`{.action}, następnie kliknij `Dodaj nową`{.action}:

![Dodaj rozszerzenie](/pages/assets/screens/other/cms/wordpress/plugins-add-new.png){.thumbnail}

Pobierz rozszerzenie klikając na przycisk `Przeglądaj`{.action}:

![Prześlij rozszerzenie](/pages/assets/screens/other/cms/wordpress/updraftplus/plugins-add-new-updraftplus.png){.thumbnail}

Kliknij polecenie `Zainstaluj`{.action}:

![Zainstaluj rozszerzenie](/pages/assets/screens/other/cms/wordpress/updraftplus/plugins-browse-updraftplus.png){.thumbnail}

Po instalacji zostaniesz poproszony o włączenie rozszerzenia:

![Potwierdzenie instalacji](/pages/assets/screens/other/cms/wordpress/updraftplus/plugins-activate-updraftplus.png){.thumbnail}

Po włączeniu domeny pojawi się ona na liście rozszerzeń:

![Lista zainstalowanych rozszerzeń](/pages/assets/screens/other/cms/wordpress/updraftplus/plugins-list-updraftplus.png){.thumbnail}

#### 2.2 - Skonfiguruj kopie zapasowe

Na stronie, o której mowa powyżej, kliknij `Ustawienia`{.action}, a następnie na stronie `UpdraftPlus Backup/Restore`, kliknij zakładkę `Ustawienia`{.action}:

![Strona UpdraftPlus Backup/Restore](/pages/assets/screens/other/cms/wordpress/updraftplus/updraftplus-settings.png){.thumbnail}

Zdefiniuj codzienną kopię zapasową swoich plików i bazy danych:

![Strona UpdraftPlus Ustawienia](/pages/assets/screens/other/cms/wordpress/updraftplus/updraftplus-settings-2.png){.thumbnail}

Wybierz kopię zapasową e-mailem.

Kopie zapasowe zostaną wysłane na adres e-mail konta administratora (konto, którego używasz):

![Kopia zapasowa na adres e-mail](/pages/assets/screens/other/cms/wordpress/email-setting.png){.thumbnail}

Na dole strony kliknij `Zapisz zmiany`{.action}, aby zatwierdzić.

#### 2.3 - Wykonaj pierwszą kopię zapasową

Przejdź do zakładki `Kopia zapasowa/Przywracanie`{.action} i kliknij na przycisk `Utwórz kopię`{.action}:

![Strona UpdraftPlus Kopia zapasowa/Przywracanie](/pages/assets/screens/other/cms/wordpress/updraftplus/updraftplus-backup-now.png){.thumbnail}

W oknie, które się wyświetli kliknij ponownie `Utwórz kopię`{.action}:

![Strona UpdraftPlus modalny Kopia zapasowa/Przywracanie](/pages/assets/screens/other/cms/wordpress/updraftplus/updraftplus-perform-backup.png){.thumbnail}

Po utworzeniu kopii zapasowych otrzymasz dwa e-maile: jeden z nich ma zawartość modułu Wordpress, drugi z bazą danych na swojej stronie internetowej.
Jeśli nie otrzymasz e-maili, sprawdź adres e-mail używanego konta (w sekcji `Użytkownicy`{.action}). Sprawdź również swoje foldery "SPAM / Niechciany Poczta".

### Jak często wykonywać kopie zapasowe?

Częstotliwość wykonywania kopii zapasowych zależy od częstotliwości, z jaką zmienia się Twoja zawartość. Przydatna jest codzienna kopia zapasowa, jeśli codziennie publikujesz treści na Twojej stronie WWW. Dostosuj częstotliwość wykonywania Twoich publikacji. Masz możliwość ręcznej aktualizacji (jest to opcja, która jest proponowana domyślnie). Zalecamy również wykonanie kopii zapasowej po zainstalowaniu lub zmianie tematu lub rozszerzenia.

### Pamiętaj o tym

- Zintegrowanie rutynowej kopii zapasowych jest dobrym sposobem, aby zabezpieczyć zawartość swojej strony internetowej.
- Upewnij się, że Twoje kopie zapasowe są bezpieczne.
- Wykonaj kopię zapasową przed wykonaniem aktualizacji i sprawdź, czy wszystko działa poprawnie na Twojej stronie WWW. 

Stosując te dobre praktyki będziesz miał możliwość powrotu do zdrowej wersji poprzedniej.

## Sprawdź również <a name="go-further"></a>

- [Oficjalna strona WordPress](https://wordpress.org){.external}
- [Więcej informacji na temat kopii zapasowych Twojego hostingu](/pages/web_cloud/web_hosting/hosting_technical_specificities#informacje-o-automatycznych-kopiach-zapasowych)

W przypadku wyspecjalizowanych usług (pozycjonowanie, rozwój, etc.) skontaktuj się z [partnerami OVHcloud](/links/partner).

Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i użytkowania Twoich rozwiązań OVHcloud, zapoznaj się z naszymi [ofertami pomocy](/links/support).

Dołącz do [grona naszych użytkowników](/links/community).