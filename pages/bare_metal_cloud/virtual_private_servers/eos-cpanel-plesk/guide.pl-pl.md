---
title: "Zakończenie wsparcia Plesk i cPanel dla serwerów VPS - Jak zapewnić ciągłość działania usług"
excerpt: "Dowiesz się, kiedy dobiega końca okres wsparcia dla systemów operacyjnych na VPS OVHcloud, które mają wpływ na licencje Plesk i cPanel"
updated: 2025-09-29
---

## Cel

Niniejszy przewodnik wyjaśnia, jak zapewnić ciągłość Twoich usług, migrując VPS OVHcloud do systemu operacyjnego kompatybilnego z najnowszymi wersjami **Plesk** i **cPanel** po zakończeniu wsparcia dla kilku systemów operacyjnych.

**Dowiesz się, kiedy dobiega końca okres wsparcia dla systemów operacyjnych na VPS OVHcloud, które mają wpływ na licencje Plesk i cPanel.**

## Wymagania początkowe

- Oferta [VPS](/links/bare-metal/vps) z [kompatybilną dystrybucją](/links/bare-metal/vps-os).

## W praktyce

Producenci **Plesk** i **cPanel** ogłaszają zakończenie wsparcia dla następujących systemów operacyjnych:

| System operacyjny | Produkt        | Fin del Soporte     |
| ----------------- | -------------- | ------------------- |
| Ubuntu 18.04      | Plesk          | **stycznia 2027 r** |
| Debian 10         | Plesk          | **stycznia 2027 r** |
| CentOS 7          | Plesk / cPanel | **stycznia 2027 r** |
| CloudLinux 7      | Plesk / cPanel | **stycznia 2027 r** |

Więcej informacji na temat pomocy znajdziesz w oficjalnej dokumentacji:

- [Plesk](https://docs.plesk.com/release-notes/obsidian/system-requirements/).
- [cPanel](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-deprecation-plan/).

### Co mogę zrobić?

> [!primary]
>
> Z punktu widzenia **bezpieczeństwa** dalsze korzystanie z nieobsługiwanego systemu operacyjnego naraża Cię na ataki.
> Zalecamy zapoznanie się z dokumentacją:
>
> - [zalecenia cPanel](https://docs.cpanel.net/knowledge-base/security/tips-to-make-your-server-more-secure/).
> - [zalecenia Pleska](https://docs.plesk.com/en-US/obsidian/administrator-guide/plesk-administration/securing-plesk.59464/).

#### 1. Sprawdź aktualny system

Zaloguj się do [Panelu klienta OVHcloud](/links/manager), przejdź do sekcji `Bare Metal Cloud`{.action} i wybierz serwer w sekcji `Prywatne serwery wirtualne`{.action}.

![EOS Plesk cPanel](images/vpshome.png){.thumbnail}

W zakładce `Strona główna`{.action} znajdź szczegółowe informacje na temat Twojego systemu operacyjnego w sekcji `OS / Dystrybucja` w ramce `Twój VPS`.

#### 2. Sprawdź kompatybilne systemy operacyjne

Jeśli Twój system operacyjny jest częścią systemu operacyjnego, który nie będzie już wspierany, przeprowadź migrację do kompatybilnego systemu zalecanego przez producenta.

Sprawdź oficjalną dokumentację obsługiwanych systemów operacyjnych:

- [Lista systemów operacyjnych obsługiwanych przez Plesk](https://docs.plesk.com/release-notes/obsidian/system-requirements/).
- [Lista systemów operacyjnych kompatybilnych z cPanel](https://docs.cpanel.net/installation-guide/system-requirements/).

#### 3. Migracja usługi

**Opcja A — Ręczna reinstalacja**

1. [Kopia zapasowa danych](/pages/bare_metal_cloud/virtual_private_servers/using-automated-backups-on-a-vps) (treści www, baza danych, e-maile, itp.).
2. Zainstaluj ponownie kompatybilny system operacyjny w Panelu klienta, postępując zgodnie z sekcją `Reinstalacja serwera VPS` naszego przewodnika [Pierwsze kroki z serwerem VPS](/pages/bare_metal_cloud/virtual_private_servers/starting_with_a_vps).
3. [Reinstaluj cPanel](/pages/bare_metal_cloud/virtual_private_servers/cpanel) lub Plesk na nowym systemie.
4. Przywracaj dane z kopii zapasowych.

**Opcja B - Migracja za pomocą panelu Plesk lub cPanel**

Ta metoda jest zalecana, jeśli możesz wdrożyć nowy VPS ze zaktualizowanym systemem obok starego.

Jeśli jeszcze tego nie zrobiłeś, zamów nowy VPS z kompatybilnym systemem operacyjnym. [Instaluj cPanel](/pages/bare_metal_cloud/virtual_private_servers/cpanel) lub Plesk.

Użyj wybranego narzędzia do migracji. Narzędzia te pozwalają na automatyczne przenoszenie stron www, baz danych, kont e-mail i konfiguracji z jednego VPS na drugi:

- Plesk Migrator - [Oficjalna dokumentacja](https://docs.plesk.com/en-US/obsidian/migration-guide/introduction.75496/).
- Narzędzie do transferu cPanel - [Oficjalna dokumentacja](https://docs.cpanel.net/whm/transfers/transfer-tool/).

**Opcja C — Bezpośrednia aktualizacja systemu operacyjnego bez reinstalacji lub migracji (zaawansowani użytkownicy)**

Jeśli nie możesz uruchomić nowego VPS, skorzystaj z narzędzi, dzięki którym **zaktualizujesz bezpośrednio system operacyjny**, zachowując jednocześnie zainstalowany Plesk lub cPanel. Metoda ta jest przeznaczona dla zaawansowanych użytkowników, ponieważ niesie ze sobą ryzyko, jeśli zostanie przeprowadzona nieprawidłowo.

- W przypadku **Plesk** (przejście z CentOS 7 na AlmaLinux 8) użyj skryptu "centos2alma" dostarczonego przez [oficjalna dokumentacja Pleska](https://github.com/plesk/centos2alma). [Plesk support](https://support.plesk.com/hc/en-us/articles/12377714344983).

- W przypadku **cPanel** (przejście z CentOS 7 na AlmaLinux 8) użyj narzędzia **Elevate** dostarczonego przez [oficjalną dokumentację cPanel](https://cpanel.github.io/elevate/).

> [!primary]
>
> Narzędzia te nie są w 100% gwarantowane i wymagają pełnej kopii zapasowej przed kontynuowaniem. upewnij się również, że Twój VPS ma wystarczającą ilość zasobów (RAM, CPU, dysk).

### Dobre praktyki bezpieczeństwa

Niezależnie od Plesk/cPanel, ważne jest **utrzymanie systemu operacyjnego VPS na aktualnym poziomie**, aby skorzystać z poprawek bezpieczeństwa, kompatybilności oprogramowania i wsparcia producenta. Jeśli Twoja dystrybucja jest w **fazie końca wsparcia (EOL)**, zaplanuj **aktualizację** lub **migrację** na wersję nadal obsługiwana.

Aby poznać daty końca życia i końca wsparcia dla obrazów i systemów operacyjnych (VPS & Public Cloud), skorzystaj z naszego przewodnika "[Public Cloud & VPS - Cykl życia i ogłoszenia o końcu wsparcia oraz życia dla obrazów i dystrybucji](/pages/public_cloud/compute/image-life-cycle)".

## Sprawdź również <a name="go-further"></a>

W przypadku wyspecjalizowanych usług (pozycjonowanie, rozwój, itp.) skontaktuj się z [partnerami OVHcloud](/links/partner).

Dołącz do [grona naszych użytkowników](/links/community).