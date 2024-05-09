---
title: "Co zrobić w przypadku błędu 500 Internal Server Error?"
excerpt: "Zdiagnozuj najczęstsze przypadki błędów 500"
updated: 2023-11-22
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk "Zgłoś propozycję modyfikacji" na tej stronie.
>

## Wprowadzenie 

Błędy 500 "Internal Server Error" mogą dotyczyć całości lub części Twojej strony, być losowe lub stałe. Mogą również pojawić się w postaci białej strony.

![error500](http-500.png){.thumbnail}

Zdarza się to również w wyniku aktualizacji przeprowadzonej **automatycznie** przez komponent Twojej strony WWW.

**Dowiedz się, jak zdiagnozować najczęstsze przypadki błędów 500.**

> [!warning]
>
> OVHcloud udostępnia różnorodne usługi, jednak to Ty odpowiadasz za ich konfigurację i zarządzanie nimi. Ponosisz więc odpowiedzialność za ich prawidłowe funkcjonowanie.
>
> Oddajemy w Twoje ręce niniejszy przewodnik, którego celem jest pomoc w wykonywaniu bieżących zadań. W przypadku trudności zalecamy skorzystanie z pomocy wyspecjalizowanego webmastera lub kontakt z producentem oprogramowania. Niestety firma OVHcloud nie będzie mogła udzielić wsparcia w tym zakresie. Więcej informacji znajduje się w sekcji [Sprawdź](diagnostic_fix_500_internal_server_error_#go-further.) ten przewodnik.
>

## Wymagania początkowe

- Posiadanie [hostingu](hosting.)
- Dostęp do [Panelu klienta OVHcloud](manager.)
- Aktualizacja w [płatności](invoice_management#pay-bills.) i [odnowienie](how_to_use_automatic_renewal#renewal-management.) powiązanych usług (domena i hosting)

## W praktyce

Zanim przejdziesz dalej, sprawdź swoją stronę na kilku urządzeniach i przeglądarkach. Jeśli błąd 500 nie pojawia się w niektórych przypadkach (na przykład w przeglądarce innej niż Twoja), nie jest on powiązany z Twoimi usługami OVHcloud. Zrestartuj swoje urządzenia i skontaktuj się z technikiem informatycznym znajdującym się w pobliżu Twojego domu.

Strona składa się z **kodu źródłowego** (na przykład pliki .php, widoczne podczas logowania do hostingu w [FTP](ftp_connection1.), do której często dodaje się **baza danych**.
<br>Pomimo błędu 500, zaleca się wykonanie lokalnej kopii zapasowej wszystkich danych przed kolejną operacją :

- Zapoznaj się z tym [przewodnikiem](ftp_filezilla_user_guide1.), aby pobrać kopię Twojego kodu źródłowego.
- Jeśli Twoja strona używa bazy danych, zapoznaj się również z tym [dokumentem](sql_database_export1.), aby pobrać jej kopię.

W przypadku błędu 500 przywrócenie [strony](diagnostic_fix_500_internal_server_error_#restore.) jest możliwe. Jednak bardziej pożądane jest przeprowadzenie szczegółowej diagnozy w celu określenia dokładnego źródła błędu.

### Sprawdź logi Twojego hostingu

Zapoznaj się najpierw z tym [przewodnikiem](logs_and_statistics1.), aby sprawdzić przyczynę błędu 500 w logach Twojego hostingu.

### Przejdź na tryb programowania

Aby wyświetlić ewentualne błędy PHP, przejdź do trybu `programowania`, korzystając z tych [wskazówek](configure_your_web_hosting#etap-2-zmiana-konfiguracji-hostingu.).

### Przetestuj plik .htaccess

Błąd 500 może być związany z nieprawidłowością w pliku `.htaccess`. Plik ten jest zwykle umieszczony na pierwszym poziomie w folderze zawierającym Twoją stronę WWW na FTP.

Aby to sprawdzić, [zaloguj się przez FTP](ftp_connection1.) do Twojego hostingu.

Zmień nazwę pliku na `.htaccess.old` i przetestuj swoją stronę.

Jeśli domena jest ponownie dostępna, `.htaccess` jest kwestionowana. W związku z tym konieczne jest wprowadzenie zmian. Jeśli sobie tego życzysz, skontaktuj się z jednym z naszych [partnerów](partner.).

### Sprawdź uprawnienia na folderach i plikach

Pliki i foldery tworzące Twoją stronę WWW posiadają określony poziom "uprawnień" w trybie odczytu, zapisu i wykonywania. W celu ochrony przed manipulacją złośliwymi lub błędnymi.

Błąd 500 może być związany z nieprawidłowym poziomem praw dostępu do niektórych katalogów lub plików na Twojej stronie.

Aby uzyskać dostęp do tych plików, zaloguj się przez FTP do Twojego hostingu zgodnie z naszą [dokumentacją](ftp_connection1.).

Przewodnik "[Przewodnik dotyczący korzystania z programu FileZilla](ftp_filezilla_user_guide#uprawnienia-do-plikow-i-katalogow.)" pomoże Ci w weryfikacji następujących elementów : 

- **Korzeń** hostingu (katalog jest zapisany `/` lub `.` w programie FTP) musi mieć uprawnienia 705 (są to uprawnienia domyślne). Zalecamy, aby nie zmieniać tego poziomu uprawnień.
- Dokumentacja musi być w 705 r.
- Pliki muszą mieć uprawnienia 604.

### Dostęp do informacji o błędach w skryptach

Ze względów bezpieczeństwa Twoja strona WWW ukrywa ewentualne szczegóły dotyczące źródła błędu 500 dla każdego, kto ją łączy za pomocą przeglądarki internetowej.

Jeśli chcesz uzyskać dostęp do tych danych, możesz, korzystając z formuły hostingu [Pro](hosting-professional-offer.) lub wyższej, połączyć się ze stroną za pomocą [połączenia ssh](ssh_on_webhosting1.).

### Sprawdź stan bazy danych

W przypadku błędu 500 związanego z bazą danych na Twojej stronie WWW, skorzystaj z naszej dokumentacji ["Rozwiąż najczęstsze błędy związane z bazami danych"](diagnosis_database_errors1.).

### Przywróć zawartość strony <a name="restore"></a>

> [!warning]
>
> Przywrócenie kodu źródłowego Twojej strony będzie dotyczyło wszystkich stron WWW hostingu OVHcloud.
>
> Podczas przywracania zawartość Twojej przestrzeni FTP lub bazy danych zostaje zastąpiona kopią zapasową. Następnie nie będziesz mógł pobrać danych z serwera tuż przed przywróceniem danych.

Aby przywrócić kod źródłowy Twojej strony, zapoznaj się z naszym przewodnikiem "[Przywracanie plików z kopii zapasowej OVHcloud](ftp_save_and_backup1.)".

Jeśli Twoja strona WWW zawiera bazę danych, zapoznaj się z naszym przewodnikiem "[Import kopii zapasowej do bazy danych hostingu](sql_importing_mysql_database#przywracanie-kopii-zapasowej-w-panelu-klienta.)", aby przywrócić ją do poprzedniego stanu.

Jeśli po aktualizacji wersji PHP na Twoim hostingu wystąpił błąd 500, zapoznaj się z naszym przewodnikiem "[Zmiana wersji PHP na hostingu](configure_your_web_hosting1.)" i wróć do poprzedniej konfiguracji.

## Sprawdź również <a name="go-further"></a>

[Co zrobić, jeśli moja strona jest niedostępna?](diagnostic-website-not-accessible1.)

[Co zrobić w przypadku błędu « Połączenie nie jest prywatne »?](diagnostic-not-secured1.)

[Co zrobić w przypadku strony « Index of »?](diagnostic-index-of1.)

[Co zrobić w przypadku strony "403 forbidden"?](diagnostic_403_forbidden1.)

[Rozwiąż najczęstsze błędy związane z bazami danych](diagnosis_database_errors1.)

[Moja strona jest powolny. Co robić? ](diagnostic_slownesses1.)

[Usunięcie błędu "Strona nie została zainstalowana"](multisites_website_not_installed1.)

W przypadku wyspecjalizowanych usług (pozycjonowanie, rozwój, etc.) skontaktuj się z [partnerami OVHcloud](partner.).

Dołącz do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.