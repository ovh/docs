---
title: "Zimbra - Skonfigurowanie folderu WebDAV na komputerze"
excerpt: "Skonfiguruj dostęp WebDAV do swojej przestrzeni Briefcase na komputerze, aby zarządzać i udostępniać pliki bezpośrednio z systemu"
updated: 2026-02-10
---

<style>
.w-600 {
  max-width:600px !important;
}
.h-600 {
  max-height:600px !important;
}
</style>

## Wprowadzenie

Konta e-mail Zimbra Pro mają przestrzeń dyskową, nazywaną **Briefcase**, która może być używana do wymiany plików za pomocą funkcji WebDAV. Ta funkcja jest dostępna za pośrednictwem Webmaila Zimbra i może być również skonfigurowana na komputerze, aby wyświetlić Briefcase jako wolumin dyskowy.

**Dowiedz się, jak zamontować folder WebDAV Zimbra na swoim komputerze.**

## Wymagania początkowe

- Adres e-mail [Zimbra Pro](/links/web/emails) firmy OVHcloud.
- Komputer z systemem Windows lub macOS.
- Dane logowania powiązane z adresem e-mail przypisanym do konta Zimbra Pro.

## W praktyce

WebDAV (Web-based Distributed Authoring and Versioning) to rozszerzenie protokołu HTTP, które umożliwia zarządzanie plikami na serwerze zdalnym i modyfikowanie ich, jakby były lokalne.

Przestrzeń dyskowa przypisana do konta e-mail Zimbra dzieli się między wiadomości e-mail a pliki w Briefcase. Każdy plik przesłany do Briefcase Zimbra nie może przekraczać 100 MB.

W tej dokumentacji użyjemy przykładu adresu e-mail `john.smith@mydomain.ovh` i zamontujemy folder `Briefcase`, który jest domyślnie obecny.

### Zamontowanie folderu z Windows

Przed połączeniem się z folderem WebDAV z Eksploratora Windows należy włączyć i skonfigurować usługi związane z połączeniem z woluminem WebDAV.

#### 1. Włączenie usługi WebClient

> [!tabs]
> **Krok 1**
>>
>> - Otwórz `Usługi`{.action} z menu Start systemu Windows.
>>
>> ![MX plan](images/windows-services-01.png){.thumbnail .w-600}
>>
> **Krok 2**
>>
>> 1. Znajdź usługę **WebClient** na liście.
>> 2. Kliknij prawym przyciskiem myszy na **WebClient**, a następnie kliknij `Właściwości`{.action}.
>> 3. Zmień *Typ uruchamiania* na **Automatyczny**.
>> 4. Kliknij `Uruchom`{.action}, aby uruchomić usługę, a następnie kliknij `OK`{.action}, aby potwierdzić zmiany.
>>
>> ![MX plan](images/windows-services-02.png){.thumbnail .w-600}

#### 2. Modyfikacja klucza rejestru WebClient

> [!tabs]
> **Krok 1**
>>
>> - Otwórz `Edytor rejestru`{.action} z menu Start systemu Windows.
>>
>> ![MX plan](images/windows-regedit-01.png){.thumbnail .w-600}
>>
> **Krok 2**
>>
>> 1. Znajdź usługę **WebClient** w drzewie `HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\WebClient\Parameters\BasicAuthLevel`.
>> 2. Kliknij dwukrotnie na klucz rejestru `BasicAuthLevel`.
>> 3. Zmień *Dane wartości*: domyślnie ustawione na `1`, zastąp je wartością `2`, a następnie kliknij `OK`{.action}, aby potwierdzić zmiany.
>>
>> ![MX plan](images/windows-regedit-02.png){.thumbnail .w-600}

#### 3. Zaimportowanie certyfikatu SSL serwera Zimbra

> [!primary]
>
> Aby wyeksportować certyfikat SSL, użyliśmy przeglądarki [Mozilla Firefox](https://www.firefox.com/).

> [!tabs]
> **Krok 1**
>>
>> 1. Otwórz przeglądarkę, załaduj stronę https://zimbra1.mail.ovh.net/, a następnie kliknij na ikonę kłódki w pasku adresu.
>> 2. Kliknij `Połączenie jest bezpieczne`{.action}.
>> 3. Kliknij `Więcej informacji`{.action}.
>>
>> ![MX plan](images/windows-ssl-01.png){.thumbnail .w-600}
>>
> **Krok 2**
>>
>> 1. Kliknij `Wyświetl certyfikat`{.action}.
>> 2. Z pojawionego się okna przejdź na kartę `zimbra1.mail.ovh.net` i kliknij `PEM (cert)`{.action}, aby pobrać certyfikat SSL.
>>
>> ![MX plan](images/windows-ssl-02.png){.thumbnail .w-600}
>>
> **Krok 3**
>>
>> - Zmień rozszerzenie pliku z `.pem` na `.cer`.
>>
>> ![MX plan](images/windows-ssl-03.png){.thumbnail .w-600}
>>
> **Krok 4**
>>
>> 1. Otwórz plik `zimbra1-mail-ovh-net.cer`, a następnie kliknij `Zainstaluj certyfikat…`{.action}.
>> 2. Kliknij `Komputer lokalny`{.action}, a następnie kliknij `Dalej`{.action}.
>> 3. Zaznacz `Umieść wszystkie certyfikaty w następującym magazynie`, a następnie kliknij `Przeglądaj…`{.action}.
>> 4. Wybierz folder `Zaufane główne urzędy certyfikacji`, a następnie kliknij `OK`{.action}.
>>
>> ![MX plan](images/windows-ssl-04.png){.thumbnail .w-600}

#### 4. Zamontowanie woluminu

W naszym przykładzie używamy adresu e-mail konta Zimbra `john.smith@mydomain.ovh` i folderu `Briefcase`, który jest domyślnie tworzony w przestrzeni dyskowej Zimbra.

1. Otwórz Eksplorator plików Windows i kliknij `Ten komputer`{.action}.
2. W górnym pasku kliknij przycisk `…`{.action}, a następnie `Mapuj dysk sieciowy`{.action}.
3. W oknie, które się pojawi, wprowadź ścieżkę folderu. Zgodnie z naszym przykładem, ścieżka to `\\zimbra1.mail.ovh.net@SSL\dav\john.smith@mydomain.ovh\Briefcase`. Kliknij `Zakończ`{.action}.
4. Otwiera się okno uwierzytelniania, wprowadź `Nazwę użytkownika` odpowiadającą pełnemu adresowi e-mail i `Hasło` z nim powiązane. Kliknij `OK`{.action}.

![MX plan](images/windows-mount-01.png){.thumbnail .w-600}

Twój wolumin sieciowy jest teraz wyświetlany. Możesz w niego umieszczać swoje pliki, z limitem 100 MB na plik.

![MX plan](images/windows-mount-02.png){.thumbnail .w-600}

### Zamontowanie folderu z macOS

Na macOS nie jest konieczne włączenie usługi ani rejestracja certyfikatu SSL, wystarczy zamontować wolumin bezpośrednio z **Finder**.

> [!tabs]
> **Krok 1**
>>
>> - Otwórz **Finder**.
>> - W górnym pasku kliknij menu `Idź do`{.action}.
>> - Kliknij `Połącz z serwerem`{.action} (`⌘ + K`).
>>
>> ![MX plan](images/macos-mount-01.png){.thumbnail .w-600}
>>
> **Krok 2**
>>
>> > [!warning]
>> >
>> > Ważne jest, aby zastąpić `@` w swoim adresie e-mail symbolem `%40` w wpisie ścieżki.
>>
>> - Z okna, które się pojawi, wprowadź odpowiednią ścieżkę połączenia dla swojego adresu e-mail i folderu, który chcesz połączyć. Zgodnie z naszym przykładem, ścieżka to `https://zimbra1.mail.ovh.net/dav/john.smith%40mydomain.ovh/Briefcase`.
>> - Kliknij `Połącz`{.action}.
>>
>> ![MX plan](images/macos-mount-02.png){.thumbnail .w-600}
>> 
> **Krok 3**
>>
>> 1. Pojawia się okno weryfikacji serwera dla `zimbra1.mail.ovh.net`, kliknij `Połącz`{.action}.
>> 2. Nowe okno poprosi o wprowadzenie `Nazwy` odpowiadającej pełnemu adresowi e-mail i `Hasła` z nim powiązanego. Zaznacz `Zapamiętaj to hasło w pęku kluczy`, jeśli chcesz zachować je na przyszłe połączenie z innym folderem. Kliknij `Połącz`{.action}, aby zamontować wolumin.
>>
>> ![MX plan](images/macos-mount-03.png){.thumbnail .w-600}

Masz teraz dostęp do swojej przestrzeni dyskowej Briefcase Zimbra. Możesz w niej umieszczać dowolnego typu pliki, które nie przekraczają 100 MB.

![MX plan](images/macos-mount-04.png){.thumbnail .w-600}

## Sprawdź również <a name="go-further"></a>

[Getting started with the Zimbra offer](/pages/web_cloud/email_and_collaborative_solutions/zimbra/getting_started_zimbra)

[Set up your Zimbra email address on an email client](/pages/web_cloud/email_and_collaborative_solutions/zimbra/zimbra_mail_apps)

[Using the Zimbra webmail](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_zimbra)

[Zimbra OVHcloud solution FAQ](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/faq-zimbra)

For specialized services (SEO, development, etc.), contact the [OVHcloud partners](/links/partner).

If you need assistance with the use and configuration of your OVHcloud solutions, we offer you to consult our various [support offers](/links/support).

Dołącz do [grona naszych użytkowników](/links/community).