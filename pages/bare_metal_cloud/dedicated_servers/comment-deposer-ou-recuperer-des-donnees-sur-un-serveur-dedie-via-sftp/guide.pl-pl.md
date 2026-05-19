---
title: "Transfer plików przez SFTP na serwerze dedykowanym"
excerpt: "Przesyłaj pliki z i na serwer dedykowany za pomocą SFTP z FileZilla w celu bezpiecznego przesyłania danych."
updated: 2024-02-23
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

Istnieją różne opcje transferu plików między urządzeniem lokalnym a hostem zdalnym. Aby zapewnić bezpieczeństwo transferu, zaleca się korzystanie w większości przypadków z oprogramowania klienckiego kompatybilnego z protokołem SFTP (Secure File Transfer Protocol).

**Ten tutorial wyjaśnia, jak używać programu FileZilla do przesyłania plików przez SFTP.**

> [!warning]
> OVHcloud zapewnia usługi, ale to użytkownik ponosi odpowiedzialność za zarządzanie nimi oraz ich konfigurację. Tutorial ten wyjaśnia, jak korzystać z rozwiązań OVHcloud przy użyciu narzędzi zewnętrznych. Może być konieczne dostosowanie niektórych instrukcji specyficznych dla systemu operacyjnego Twojego lokalnego urządzenia lub serwera.
>
> W przypadku trudności zalecamy skontaktowanie się z [wyspecjalizowanym dostawcą](/links/partner) lub [naszą społecznością](/links/community).
>

## Wymagania początkowe

- [Serwer dedykowany](/links/bare-metal/bare-metal) lub [VPS](/links/bare-metal/vps) na Twoim koncie OVHcloud, z zainstalowaną dystrybucją GNU/Linux
- Klient FTP obsługujący połączenia SFTP (na przykład [FileZilla](https://filezilla-project.org/)) zainstalowany na Twojej lokalnej stacji roboczej
- Dostęp administratora przez SSH do serwera

<!-- CP-NAV-START:baremetal-dedicated-servers -->
---

### Dostęp do Panelu klienta OVHcloud

- **Bezpośredni link:** [Serwery dedykowane](/links/control-panel/baremetal-dedicated-servers)
- **Ścieżka nawigacji:** `Bare Metal Cloud`{.action} > `Serwery dedykowane`{.action} > Wybierz swój serwer

---
<!-- CP-NAV-END:baremetal-dedicated-servers -->

## W praktyce

Będziesz potrzebował adresu IP Twojego serwera, który odnajdziesz w [Panelu klienta OVHcloud](/links/manager), oraz nazwy konta użytkownika, którego będziesz używał do logowania SSH. Zapoznaj się z naszymi przewodnikami "Pierwsze kroki", jeśli chcesz otrzymać więcej informacji:

- [Serwer dedykowany](/pages/bare_metal_cloud/dedicated_servers/getting-started-with-dedicated-server)
- [Serwer dedykowany z gamy **Eco**](/pages/bare_metal_cloud/dedicated_servers/getting-started-with-dedicated-server-eco)
- [VPS](/pages/bare_metal_cloud/virtual_private_servers/starting_with_a_vps)

Poniższe przykłady są oparte na [FileZilla](https://filezilla-project.org/). Jeśli używasz innego klienta FTP, zapoznaj się z przewodnikiem dotyczącym korzystania z aplikacji.

Proces ten może wymagać dodatkowych kroków, jeśli serwer jest uruchomiony w trybie **rescue**. Otwórz odpowiednią sekcję poniżej w zależności od statusu serwera.

### Jak połączyć się z serwerem za pomocą klienta SFTP

/// details | Rozwiń tę sekcję

W interfejsie klienta FileZilla wprowadź adres IP Twojego serwera w polu `Host` oraz nazwę użytkownika i hasło w odpowiednich polach. Wpisz "22" w polu `Port`, chyba że zmieniłeś port połączenia, na którym nasłuchuje usługa SSH Twojego serwera.

Kliknij przycisk `Quickconnect`{.action}.

> [!warning]
> Aby uzyskać dostęp do folderów należących do konta użytkownika `root` systemu operacyjnego, należy użyć loginu użytkownika `root` w celu nawiązania połączenia SFTP. To konto nie ma domyślnego hasła.  
> Jeśli masz pewność, że musisz uzyskać dostęp do plików użytkownika `root` za pośrednictwem SFTP, sprawdź, jak aktywować to połączenie w naszym [przewodniku po koncie użytkownika](/pages/bare_metal_cloud/dedicated_servers/changing_root_password_linux_ds).
>

///

### Jak połączyć się z serwerem w trybie Rescue za pomocą klienta SFTP

/// details | Rozwiń tę sekcję

Jeśli jeszcze nie przeprowadziłeś czynności niezbędnych do uzyskania dostępu do plików w trybie Rescue, zaloguj się do serwera i zamontuj partycje przy użyciu przewodnika:

- [Tryb rescue dla serwera dedykowanego](/pages/bare_metal_cloud/dedicated_servers/rescue_mode)
- [Tryb ratunkowy dla serwera VPS](/pages/bare_metal_cloud/virtual_private_servers/rescue)

W interfejsie klienta FileZilla wprowadź adres IP Twojego serwera w polu `Host` i "22" w polu `Port`. Wpisz "root" w polu `Username` i hasło, które otrzymałeś e-mailem informującym o dostępie do trybu ratunkowego w polu `Password`.

Kliknij przycisk `Quickconnect`{.action}.

System plików serwera będzie znajdować się w katalogu, który zdefiniowałeś jako punkt instalacji w trybie ratunkowym ("/mnt" w tym przykładzie).

![tryb ratunkowy SFTP zdalnej lokalizacji](images/sftp_sd_03.png){.thumbnail}

///

### Korzystanie z interfejsu FileZilla do pobierania plików

Po ustanowieniu połączenia zdalnego w sekcji `Remote Site` zostanie wyświetlone drzewo plików serwera.

![zdalna strona sftp](images/sftp_sd_01.png){.thumbnail}

Środkowa część interfejsu FileZilla działa jak eksplorator plików. Możesz wybrać kilka plików lub folderów, usunąć je, przeciągnąć i upuścić na boki itp. Szczegóły użycia mogą się różnić w zależności od wersji oprogramowania i lokalnego systemu operacyjnego. Więcej informacji znajdziesz w przewodniku użytkownika [FileZilla](https://filezilla-project.org/).

Na przykład, aby odzyskać pliki znajdujące się w folderze "/home/data" na serwerze, otwórz ten folder w prawym okienku (`Remote Site`). Wybierz pliki lub foldery do pobrania i przeciągnij je do okienka po lewej stronie (`Local Site`) w folderze urządzenia lokalnego.

Postęp transferu danych będzie widoczny w kolejce na dole.

![Postęp transferu SFTP](images/sftp_sd_02.png){.thumbnail}

## Sprawdź również

[Wprowadzenie do SSH](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction)

[Konfiguracja kont użytkowników i dostępu root na serwerze](/pages/bare_metal_cloud/dedicated_servers/changing_root_password_linux_ds)

W przypadku wyspecjalizowanych usług (pozycjonowanie, rozwój, etc.) skontaktuj się z [partnerami OVHcloud](/links/partner).

Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i użytkowania Twoich rozwiązań OVHcloud, zapoznaj się z naszymi [ofertami pomocy](/links/support).

Dołącz do [grona naszych użytkowników](/links/community).