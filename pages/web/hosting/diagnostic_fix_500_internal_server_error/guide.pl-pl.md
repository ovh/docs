---
title: Co zrobić w przypadku błędu 500 Internal Server Error?
slug: 500-internal-server-error
excerpt: Zdiagnozuj najczęstsze przypadki błędów 500
section: Diagnostyka
order: 05
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk „Zaproponuj zmianę” na tej stronie.
>

**Ostatnia aktualizacja z dnia 21-07-2022**


## Wprowadzenie

Błędy 500 "Internal Server Error" mogą dotyczyć całości lub części Twojej strony, być losowe lub stałe. Mogą również pojawić się w postaci białej strony.

![error500](images/error-500-2.png){.thumbnail}

Zdarza się to również w wyniku aktualizacji przeprowadzonej **automatycznie** przez komponent Twojej strony WWW.

**Dowiedz się, jak zdiagnozować najczęstsze przypadki błędów 500.**

> [!warning]
>
> OVHcloud udostępnia różnorodne usługi, jednak to Ty odpowiadasz za ich konfigurację i zarządzanie nimi. Ponosisz więc odpowiedzialność za ich prawidłowe funkcjonowanie.
>
> Oddajemy w Twoje ręce niniejszy przewodnik, którego celem jest pomoc w wykonywaniu bieżących zadań. W przypadku trudności zalecamy skorzystanie z pomocy wyspecjalizowanego webmastera lub kontakt z producentem oprogramowania. Niestety firma OVH nie będzie mogła udzielić wsparcia w tym zakresie. Więcej informacji znajduje się w sekcji [Sprawdź](#gofurther) ten przewodnik.
>


## Wymagania początkowe

- Posiadanie [hostingu](https://www.ovhcloud.com/pl/web-hosting/)
- Dostęp do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl)
- Aktualizacja w [płatności](https://docs.ovh.com/pl/billing/zarzadzanie-fakturami-ovhcloud/#pay-bills) i [odnowienie](https://docs.ovh.com/pl/billing/przewodnik_dotyczacy_opcji_automatycznego_odnawiania_uslug_w_ovh/#renewal-management) powiązanych usług (domena i hosting)

## W praktyce

Zanim przejdziesz dalej, sprawdź swoją stronę na kilku urządzeniach i przeglądarkach. Jeśli błąd 500 nie pojawia się w niektórych przypadkach (na przykład w przeglądarce innej niż Twoja), nie jest on powiązany z Twoimi usługami OVHcloud. Zrestartuj swoje urządzenia i skontaktuj się z technikiem informatycznym znajdującym się w pobliżu Twojego domu.

Strona składa się z **kodu źródłowego** (na przykład pliki .php, widoczne podczas logowania do hostingu w [FTP](../logowanie-przestrzen-dyskowa-ftp-hosting-web/), do której często dodaje się **baza danych**.
<br>Pomimo błędu 500, zaleca się wykonanie lokalnej kopii zapasowej wszystkich danych przed kolejną operacją :

- Zapoznaj się z tym [przewodnikiem](../hosting_www_przewodnik_dotyczacy_korzystania_z_programu_filezilla/), aby pobrać kopię Twojego kodu źródłowego.
- Jeśli Twoja strona używa bazy danych, zapoznaj się również z tym [dokumentem](../eksport-bazy-danych/), aby pobrać jej kopię.

W przypadku błędu 500 przywrócenie [strony](#restore) jest możliwe. Jednak bardziej pożądane jest przeprowadzenie szczegółowej diagnozy w celu określenia dokładnego źródła błędu.

### Sprawdź logi Twojego hostingu

Zapoznaj się najpierw z tym [przewodnikiem](../hosting_statystyki_i_logi_strony/), aby sprawdzić przyczynę błędu 500 w logach Twojego hostingu.

### Przejdź na tryb programowania

Aby wyświetlić ewentualne błędy PHP, przejdź do trybu `programowania`, korzystając z tych [wskazówek](../zmiana_srodowiska_uruchomieniowego_dla_hostingu_www/#etap-2-zmiana-konfiguracji-hostingu).

### Przetestuj plik .htaccess

Błąd 500 może być związany z nieprawidłowością w pliku `.htaccess`. Plik ten jest zwykle umieszczony na pierwszym poziomie w folderze zawierającym Twoją stronę WWW na FTP.

Aby to sprawdzić, [zaloguj się przez FTP](../logowanie-przestrzen-dyskowa-ftp-hosting-web/) do Twojego hostingu.

Zmień nazwę pliku na `.htaccess.old` i przetestuj swoją stronę.

Jeśli domena jest ponownie dostępna, `.htaccess` jest kwestionowana. W związku z tym konieczne jest wprowadzenie zmian. Jeśli sobie tego życzysz, skontaktuj się z jednym z naszych [partnerów](https://partner.ovhcloud.com/pl/directory/).

### Sprawdź uprawnienia na folderach i plikach

Pliki i foldery tworzące Twoją stronę WWW posiadają określony poziom "uprawnień" w trybie odczytu, zapisu i wykonywania. W celu ochrony przed manipulacją złośliwymi lub błędnymi.

Błąd 500 może być związany z nieprawidłowym poziomem praw dostępu do niektórych katalogów lub plików na Twojej stronie.

Aby uzyskać dostęp do tych plików, zaloguj się przez FTP do Twojego hostingu zgodnie z naszą [dokumentacją](../logowanie-przestrzen-dyskowa-ftp-hosting-web/).

Przewodnik "[Przewodnik dotyczący korzystania z programu FileZilla](../hosting_www_przewodnik_dotyczacy_korzystania_z_programu_filezilla/#uprawnienia-do-plikow-i-katalogow)" pomoże Ci w weryfikacji następujących elementów : 

- **Korzeń** hostingu (katalog jest zapisany `/` lub `.` w programie FTP) musi mieć uprawnienia 705 (są to uprawnienia domyślne). Zalecamy, aby nie zmieniać tego poziomu uprawnień.
- Dokumentacja musi być w 705 r.
- Pliki muszą mieć uprawnienia 604.

### Dostęp do informacji o błędach w skryptach

Ze względów bezpieczeństwa Twoja strona WWW ukrywa ewentualne szczegóły dotyczące źródła błędu 500 dla każdego, kto ją łączy za pomocą przeglądarki internetowej.

Jeśli chcesz uzyskać dostęp do tych danych, możesz, korzystając z formuły hostingu [pro2014](https://www.ovhcloud.com/pl/web-hosting/professional-offer/), połączyć się ze stroną za pomocą [połączenia ssh](../hosting_www_ssh_na_hostingu/).

### Przywróć zawartość strony <a name="restore"></a>

> [!warning]
>
> Przywrócenie kodu źródłowego Twojej strony będzie dotyczyło wszystkich stron WWW hostingu OVHcloud.
>
> Podczas przywracania zawartość Twojej przestrzeni FTP lub bazy danych zostaje zastąpiona kopią zapasową. Następnie nie będziesz mógł pobrać danych z serwera tuż przed przywróceniem danych.

Aby przywrócić kod źródłowy Twojej strony, zapoznaj się z naszym przewodnikiem "[Przywracanie plików z kopii zapasowej OVHcloud](../hosting_przywrocenie_kopii_zawartosci_ftp_w_aplikacji_filezilla/)".

Jeśli Twoja strona WWW zawiera bazę danych, zapoznaj się z naszym przewodnikiem "[Import kopii zapasowej do bazy danych hostingu](../hosting_www_importowanie_bazy_danych_mysql/#przywracanie-kopii-zapasowej-w-panelu-klienta)", aby przywrócić ją do poprzedniego stanu.

Jeśli po aktualizacji wersji PHP na Twoim hostingu wystąpił błąd 500, zapoznaj się z naszym przewodnikiem "[Zmiana wersji PHP na hostingu](../konfiguracja_php_na_hostingu_www_ovh_2014/)" i wróć do poprzedniej konfiguracji.


## Sprawdź również <a name="gofurther"></a>

[Plik .htaccess na hostingu](../hosting_www_plik_htaccess/)

[Przyczyny wyświetlania się “białej strony”](../hosting_www_jak_sprawdzic_przyczyne_wyswietlania_sie_bialej_strony/)

Dołącz do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.
