---
title: "Tworzenie i pobieranie kopii zapasowej przestrzeni FTP na hostingu Cloud Web"
excerpt: "Dowiedz się, jak pobrać kopię zapasową przestrzeni FTP Twojego hostingu Cloud Web"
updated: 2026-03-31
---

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

- Hosting [Cloud Web](/links/web/hosting-cloud-web-offer)
- Dostęp do konta e-mail do kontaktu przypisanego do Twojego identyfikatora klienta

<!-- CP-NAV-START:web-hosting -->
---

### Dostęp do Panelu klienta OVHcloud

- **Link bezpośredni:** [Hosting](/links/control-panel/web-hosting)
- **Ścieżka nawigacji:** `Web Cloud`{.action} > `Hosting`{.action} > Wybierz hosting WWW

---
<!-- CP-NAV-END:web-hosting -->

## W praktyce

Hosting Cloud Web dysponuje automatycznymi kopiami zapasowymi uruchomionymi z następującymi częstotliwościami:

- tego samego dnia, po 0.00.
- wczoraj, po 0:00.
- przedwczoraj, po godz. 0.00.
- poprzednia niedziela, po 01.00.

OVHcloud może zaproponować wyłącznie kopie zapasowe, o których mowa powyżej, pod warunkiem, że Twój hosting Cloud Web istnieje już w wskazanych terminach i pod warunkiem, że infrastruktura będzie dostępna w momencie tworzenia kopii zapasowej.

### Odzyskaj kopię zapasową

W przeciwieństwie do hostingu współdzielonego OVHcloud, przywracanie przestrzeni FTP nie jest możliwe za pomocą jednego kliknięcia w Panelu klienta OVHcloud.

Link do pobrania kopii zapasowej jest generowany, a następnie wysyłany e-mailem na adres e-mail powiązany z identyfikatorem klienta administratora hostingu Cloud Web.

<!-- CP-STEPS-START:access-ftp-backup -->
Kliknij poniższe karty, aby wyświetlić kolejne **5** kroki.

> [!tabs]
> **Krok 1**
>>
>> Przejdź na stronę [Hosting](/links/control-panel/web-hosting) i wybierz odpowiedni Cloud Web.
>>
>> ![Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Krok 2**
>>
>> Wybierz kartę `FTP - SSH`{.action} i kliknij przycisk `Utwórz kopię zapasową`{.action} po prawej stronie.
>>
>> ![Przycisk Utwórz kopię zapasową](/pages/assets/screens/control_panel/product-selection/web-cloud/cloud-web/ftp-ssh/generate-a-backup.png){.thumbnail}
>>
> **Krok 3**
>>
>> W oknie, które się otworzy, wybierz jedną z dostępnych kopii zapasowych, po czym kliknij `Dalej`{.action}.
>>
>> ![Wybór kopii zapasowej](/pages/assets/screens/control_panel/product-selection/web-cloud/cloud-web/ftp-ssh/generate-a-backup-step-1.png){.thumbnail}
>>
> **Krok 4**
>>
>> Pojawi się drugie okno z informacją, że link do pobrania pliku kopii zapasowej zostanie przesłany e-mailem i że OVHcloud nie przywróci automatycznie danych z Twojego hostingu Cloud Web.
>>
>> ![Potwierdzenie generowania kopii zapasowej](/pages/assets/screens/control_panel/product-selection/web-cloud/cloud-web/ftp-ssh/generate-a-backup-step-2.png){.thumbnail}
>>
>> Kliknij na `Zatwierdź`{.action}, aby potwierdzić zlecenie.
>>
> **Krok 5**
>>
>> Jeśli generowanie kopii zapasowej zostało uruchomione, w Panelu klienta OVHcloud pojawi się następujący komunikat:
>>
>> ![Komunikat o postępie kopii zapasowej](/pages/assets/screens/control_panel/product-selection/web-cloud/cloud-web/ftp-ssh/message-backup-progress.png){.thumbnail}
>>
>> Tworzenie kopii zapasowej zajmuje od 10 do 15 minut.
<!-- CP-STEPS-END:access-ftp-backup -->

### Pobierz kopię zapasową

Po sfinalizowaniu tworzenia kopii zapasowej otrzymasz e-mail na adres e-mail powiązany z identyfikatorem administratora Twojego hostingu Cloud Web.

E-mail ten zawiera link do pobrania **ważny przez 9 dni** od otrzymania wiadomości e-mail:

![E-mail z linkiem do pobrania kopii zapasowej](/pages/assets/screens/email-sending-to-customer/cloud-web/backup-information.png){.thumbnail}

Pobrany plik jest w formacie *.tar.gz*.

### Przywróć kopię zapasową

Po pobraniu plików możesz [połączyć się z przestrzenią FTP](/pages/web_cloud/web_hosting/ftp_connection) przy użyciu programu FTP, takiego jak [Filezilla](/pages/web_cloud/web_hosting/ftp_filezilla_user_guide), a następnie wymienić wybrane pliki na pobrane pliki.

> [!primary]
>
> Korzystaj z portów podanych w [Panelu klienta OVHcloud](/links/manager) do połączenia SFTP i SSH, ponieważ port 22 nie będzie działał dla Twojego hostingu Cloud Web.
>

## Sprawdź również 

[Logowanie do przestrzeni dyskowej hostingu WWW](/pages/web_cloud/web_hosting/ftp_connection)

[Logowanie za pomocą programu Filezilla](/pages/web_cloud/web_hosting/ftp_filezilla_user_guide)

Skontaktuj się z [partnerami OVHcloud](/links/partner), jeśli szukasz zaawansowanych rozwiązań (indeksowanie, rozwój, etc).

Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i korzystania z rozwiązań OVHcloud, sprawdź naszą [ofertę wsparcia](/links/support).

Dołącz do [grona naszych użytkowników](/links/community)