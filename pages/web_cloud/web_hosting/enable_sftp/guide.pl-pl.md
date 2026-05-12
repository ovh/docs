---
title: "Web Hosting - Jak włączyć dostęp SFTP"
excerpt: "Dowiedz się, jak włączyć dostęp SFTP na swoim OVHcloud Web Hosting"
updated: 2026-02-04
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

Oferty OVHcloud Web Hosting dają dostęp do przestrzeni dyskowej, w której można udostępnić pliki swoich stron internetowych lub aplikacji. Dostęp do tej przestrzeni możliwy jest za pomocą użytkownika FTP lub SSH oraz hasła do niego przypisanego.

Podobnie jak **F**ile **T**ransfer **P**rotocol (**FTP**), **S**ecure **F**ile **T**ransfer **P**rotocol (**SFTP**) umożliwia przesyłanie danych z Twojego urządzenia do przestrzeni dyskowej Twojego Web Hostinga.

Jedyną różnicą jest to, że SFTP korzysta z bezpiecznego kanału komunikacji. Dane przesyłane za pomocą tego protokołu są automatycznie szyfrowane.

**Dowiedz się, jak włączyć dostęp SFTP na swoim OVHcloud Web Hosting.**

## Wymagania początkowe

- Posiadanie jednej z ofert [OVHcloud Web Hosting](/links/web/hosting).
- Zalogowanie się do [Panelu klienta OVHcloud](/links/manager), sekcja `Web Cloud`{.action}.

<!-- CP-NAV-START:web-hosting -->
---

### Dostęp do Panelu klienta OVHcloud

- **Link bezpośredni:** [Hosting plans](/links/control-panel/web-hosting)
- **Ścieżka nawigacji:** `Web Cloud`{.action} > `Hosting`{.action} > Wybierz hosting WWW

---
<!-- CP-NAV-END:web-hosting -->

## W praktyce

### Włączenie dostępu SFTP dla użytkownika FTP na Twoim Web Hostingu

**Kliknij jedną z dwóch poniższych linii, w zależności od oferty Web Hostinga, aby wyświetlić instrukcję.**

/// details | Włączenie SFTP na ofercie Web Hostinga **Darmowy 100M**, **Starter** lub **Perso**

Kliknij poniższe zakładki, aby wyświetlić kolejne **3** kroki.

> [!tabs]
> **Krok 1**
>>
>> Przejdź na stronę [Hosting plans](/links/control-panel/web-hosting), następnie wybierz odpowiedni hosting.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Krok 2**
>>
>> Na stronie, która się wyświetli kliknij zakładkę `FTP - SSH`{.action}.
>>
>> ![FTP - SSH](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh.png){.thumbnail}
>>
> **Krok 3**
>>
>> W tabeli u dołu strony zaznacz pole w kolumnie **SFTP** dla danego użytkownika FTP. Strona odświeży się automatycznie.
>>
>> ![FTP - SSH Perso](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh/tab-perso.png){.thumbnail}
>>
>> Po włączeniu opcji **SFTP**, możesz używać protokołu SFTP na swoim Web Hostingu za pomocą wybranego użytkownika FTP.
>>

///

/// details | Włączenie SFTP na ofercie Web Hostinga **Pro** lub **Performance**

Kliknij poniższe zakładki, aby wyświetlić kolejne **4** kroki.

> [!tabs]
> **Krok 1**
>>
>> Przejdź na stronę [Hosting plans](/links/control-panel/web-hosting), następnie wybierz odpowiedni hosting.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Krok 2**
>>
>> Na stronie, która się wyświetli kliknij zakładkę `FTP - SSH`{.action}.
>>
>> ![FTP - SSH](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh.png){.thumbnail}
>>
> **Krok 3**
>>
>> W tabeli u dołu strony sprawdź status w kolumnie **SFTP** dla danego użytkownika FTP :
>>
>> - **Włączona** : protokół SFTP jest już włączony dla tego użytkownika.
>> - **Wyłączona** : kliknij przycisk `...`{.action} po prawej stronie odpowiedniego wiersza, a następnie `Zmodyfikuj`{.action}.
>>
>> ![FTP - SSH Pro](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh/sftp-enabled-pro.png){.thumbnail}
>>
> **Krok 4**
>>
>> W oknie, które się otworzy, w sekcji **Protokoły logowania**, wybierz `FTP i SFTP`{.action} lub `FTP, SFTP i SSH`{.action}, jeśli chcesz również włączyć protokół SSH.
>>
>> ![FTP - SSH Pro](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh/modify-user-step-1-connexion-protocols.png){.thumbnail}
>>
>> Następnie kliknij `Dalej`{.action}, a następnie `Zatwierdź`{.action}, aby zakończyć włączanie SFTP dla danego użytkownika.

///

### Połączenie się z Web Hostingiem za pomocą SFTP

Aby to zrobić, zapoznaj się z naszym przewodnikiem « [Logowanie do przestrzeni dyskowej FTP hostingu](/pages/web_cloud/web_hosting/ftp_connection) ».

## Sprawdź również

[Zmień hasło użytkownika FTP](/pages/web_cloud/web_hosting/ftp_change_password).

[Korzystanie z połączenia SSH na hostingu](/pages/web_cloud/web_hosting/ssh_on_webhosting).

[Użyj PuTTY do logowania przez SSH](/pages/web_cloud/web_hosting/ssh_using_putty_on_windows)

[Korzystaj z programu FileZilla na Twoim hostingu](/pages/web_cloud/web_hosting/ftp_filezilla_user_guide)

[Korzystaj z Cyberduck na Twoim hostingu](/pages/web_cloud/web_hosting/ftp_cyberduck_user_guide_on_mac)

W przypadku wyspecjalizowanych usług (pozycjonowanie, rozwój, etc.) skontaktuj się z [partnerami OVHcloud](/links/partner).

Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i użytkowania Twoich rozwiązań OVHcloud, zapoznaj się z naszymi [ofertami pomocy](/links/support).

Dołącz do [grona naszych użytkowników](/links/community). 