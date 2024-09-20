---
title: "Tworzenie i pobieranie kopii zapasowej przestrzeni FTP na hostingu Cloud Web"
excerpt: "Dowiedz się, jak pobrać kopię zapasową przestrzeni FTP Twojego hostingu Cloud Web"
updated: 2023-11-16
---

> [!primary]
>
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk "Zgłoś propozycję modyfikacji" na tej stronie.
>

## Wprowadzenie

Twój hosting Cloud Web dysponuje przestrzenią dyskową, na której możesz hostować Twoje strony WWW lub aplikacje.

**Dowiedz się, jak pobrać kopię zapasową przestrzeni FTP Twojego hostingu Cloud Web**.

> [!primary]
> 
> Kopie zapasowe proponowane przez OVHcloud dla hostingu Cloud Web są niezamówione. Są one dostępne do uzupełnienia Twoich własnych środków tworzenia kopii zapasowych w sytuacjach nadzwyczajnych. Zalecamy zatem regularne wykonywanie Twoich własnych kopii zapasowych, aby zapobiec ewentualnej utracie danych.
> 
> Wykonując kopię zapasową bezpieczeństwa Twojej strony WWW i korzystając z bazy danych, wykonaj również jej kopię zapasową. Aby [pobrać kopię zapasową bazy danych](/pages/web_cloud/web_hosting/sql_database_export), zapoznaj się z naszym przewodnikiem.
> 

**Dowiedz się, jak pobrać i przywrócić kopię zapasową FTP Twojego hostingu Cloud Web.**

## Wymagania początkowe

- Hosting [Cloud Web](/links/web/hosting-cloud-web-offer){.external}
- Dostęp do [Panelu klienta OVHcloud](/links/manager){.external}.
- Dostęp do konta e-mail do kontaktu przypisanego do Twojego identyfikatora klienta

## W praktyce

Hosting Cloud Web dysponuje automatycznymi kopiami zapasowymi uruchomionymi z następującymi częstotliwościami:

- tego samego dnia, po 0.00.
- wczoraj, po 0:00.
- przedwczoraj, po godz. 0.00.
- poprzednia niedziela, po 01.00.

OVHcloud może zaproponować wyłącznie kopie zapasowe, o których mowa powyżej, pod warunkiem, że Twój hosting Cloud Web istnieje już w wskazanych terminach i pod warunkiem, że infrastruktura będzie dostępna w momencie tworzenia kopii zapasowej.

### Pobierz kopię zapasową

W przeciwieństwie do hostingu współdzielonego OVHcloud, przywracanie przestrzeni FTP nie jest możliwe za pomocą jednego kliknięcia w [Panelu klienta OVHcloud](/links/manager){.external}.

Link do pobrania kopii zapasowej jest generowany, a następnie wysyłany e-mailem na adres e-mail powiązany z identyfikatorem klienta administratora hostingu Cloud Web.

#### Etap 1 - Wygeneruj link do pobrania wysłany e-mailem

Aby wygenerować link do pobrania, zaloguj się do [Panelu klienta OVHcloud](/links/manager){.external}, przejdź do sekcji `Web Cloud`{.action}, kliknij `Hosting`{.action}, a następnie odpowiednią usługę Cloud Web. 

Wybierz kartę `FTP - SSH`{.action} i kliknij przycisk `Wygeneruj kopię zapasową`{.action} po prawej stronie.

![kopia zapasowa](/pages/assets/screens/control_panel/product-selection/web-cloud/cloud-web/ftp-ssh/generate-a-backup.png){.thumbnail}

W oknie, które się otworzy wybierz jedną z dostępnych kopii zapasowych, po czym kliknij `Dalej`{.action}.

![kopia zapasowa](/pages/assets/screens/control_panel/product-selection/web-cloud/cloud-web/ftp-ssh/generate-a-backup-step-1.png){.thumbnail}

Pojawi się drugie okno z informacją, że link do pobrania pliku kopii zapasowej zostanie przesłany e-mailem i że OVHcloud nie przywróci automatycznie danych z Twojego hostingu Cloud Web.

![kopia zapasowa](/pages/assets/screens/control_panel/product-selection/web-cloud/cloud-web/ftp-ssh/generate-a-backup-step-2.png){.thumbnail}

Kliknij na `Zatwierdź`{.action}, aby potwierdzić zlecenie.

Jeśli wygenerowana zostanie kopia zapasowa, w [Panelu klienta OVHcloud](/links/manager){.external} pojawi się następujący komunikat:

![kopia zapasowa](/pages/assets/screens/control_panel/product-selection/web-cloud/cloud-web/ftp-ssh/message-backup-progress.png){.thumbnail}

Tworzenie kopii zapasowej zajmuje od 10 do 15 minut.

#### Etap 2 - Pobranie kopii zapasowej

Po sfinalizowaniu tworzenia kopii zapasowej otrzymasz e-mail na adres e-mail powiązany z identyfikatorem administratora Twojego hostingu Cloud Web.<br>
E-mail ten zawiera link do pobrania **ważny przez 9 dni** od otrzymania wiadomości e-mail:

![kopia zapasowa](/pages/assets/screens/email-sending-to-customer/cloud-web/backup-information.png){.thumbnail}

Pobrany plik jest w formacie *.tar.gz*.

### Przywróć kopię zapasową

Po pobraniu plików możesz [połączyć się z przestrzenią FTP](/pages/web_cloud/web_hosting/ftp_connection) przy użyciu programu FTP, takiego jak [Filezilla](/pages/web_cloud/web_hosting/ftp_filezilla_user_guide), a następnie wymienić wybrane pliki na pobrane pliki.

> [!primary]
>
> Korzystaj z portów podanych w [Panelu klienta OVHcloud](/links/manager){.external} do połączenia SFTP i SSH, ponieważ port 22 nie będzie działał dla Twojego hostingu Cloud Web.
>

## Sprawdź również 

[Logowanie do przestrzeni dyskowej hostingu WWW](/pages/web_cloud/web_hosting/ftp_connection)

[Logowanie za pomocą programu Filezilla](/pages/web_cloud/web_hosting/ftp_filezilla_user_guide)

Skontaktuj się z [partnerami OVHcloud](/links/partner), jeśli szukasz zaawansowanych rozwiązań (indeksowanie, rozwój, etc).

Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i korzystania z rozwiązań OVHcloud, sprawdź naszą [ofertę wsparcia](/links/support).

Dołącz do [grona naszych użytkowników](/links/community)