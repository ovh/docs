---
title: "Konfiguracja rewersu DNS instancji Public Cloud"
excerpt: Dowiedz się, jak wdrożyć rewers DNS
updated: 2025-12-22
---

## Wprowadzenie

**Rewers DNS** (*rDNS*) to uzupełnienie konfiguracji "klasycznej" serwerów DNS, która pozwala na konwersję domeny na adres IP (rekord typu **A**). Dzięki tego typu zapytaniu, adres IP może zostać usunięty w nazwie domeny (rejestracja typu **PTR**). Oznacza to, że zapytania DNS na danym adresie IP będą miały nazwę domeny.

Konfiguracja **rewersu DNS** instancji jest szczególnie przydatna przy wysyłaniu e-maili. Ryzyko odrzucenia wiadomości przez system ochrony przed spamem zostanie zmniejszone, jeśli adres IP Twojego serwera poczty wychodzącej zostanie poprawnie rozwiązany w Twojej domenie.

**Dowiedz się, jak skonfigurować rewers DNS dla adresu lub adresów IP instancji Public Cloud.**

## Wymagania początkowe

- Posiadanie [instancji Public Cloud](/links/public-cloud/public-cloud) na koncie OVHcloud
- Nazwa domeny z polem `A` wskazującym na instancję
- Dostęp do [Panelu client OVHcloud](/links/manager)

## W praktyce

Zaloguj się do [Panelu client OVHcloud](/links/manager), przejdź do sekcji `Sieć`{.action} i kliknij przycisk `Publiczne adresy IP`{.action}.

W rozwijanym menu **Moje publiczne adresy IP i usługi powiązane** możesz podzielić Twoje usługi na kategorie. Możesz również wyszukać konkretny adres IP w pasku wyszukiwania po lewej stronie menu rozwijanego.

![Reverse DNS](/pages/assets/screens/control_panel/product-selection/bare-metal-cloud/network/filterip_new.png){.thumbnail}

Kliknij przycisk `⁝`{.action} w wierszu odpowiedniego adresu IP i wybierz opcję `Skonfiguruj rewers DNS`{.action}.

![Reverse DNS](/pages/assets/screens/control_panel/product-selection/bare-metal-cloud/network/modifyreverse_new.png){.thumbnail}

W nowym oknie wprowadź swoją ścieżkę odwrotną i kliknij `Zatwierdź`{.action}.

![Reverse DNS](/pages/assets/screens/control_panel/product-selection/bare-metal-cloud/network/enterreverse_new.png){.thumbnail}

Możesz również edytować ścieżkę odwrotną bezpośrednio za pomocą ikony `ołówek`{.action} w kolumnie **Rewers DNS** tabeli.

> [!primary]
>
Jeśli modyfikacja nie działa zgodnie z oczekiwaniami, sprawdź, czy pole `A` jest poprawnie skonfigurowane w strefie DNS Twojej domeny. Uwaga, modyfikacja [strefy DNS](/pages/web_cloud/domains/dns_zone_edit) może trwać do 24 godzin, jeśli ostatnio zmieniłeś pole `A`.
>

## Sprawdź również <a name="gofurther"></a>

[Utwórz pierwszą instancję Public Cloud i połącz się z nią](/pages/public_cloud/compute/public-cloud-first-steps)

[Modyfikacja strefy DNS](/pages/web_cloud/domains/dns_zone_edit)

Dołącz do [grona naszych użytkowników](/links/community).