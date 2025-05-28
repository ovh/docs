---
title: "Jak przechowywać klucze SSH w Panelu klienta"
excerpt: "Dowiedz się, jak importować publiczne klucze SSH do Panelu klienta OVHcloud"
updated: 2024-12-04
---

## Wprowadzenie

Pary kluczy służą do uwierzytelniania połączeń SSH między hostami, na przykład między lokalnym klientem komputera a serwerem zdalnym. Podczas reinstalacji serwera dedykowanego lub VPS z poziomu panelu klienta możesz dodać klucz publiczny do systemu operacyjnego. Przechowywanie publicznych kluczy SSH w Panelu klienta ułatwia ten proces.

**Niniejszy przewodnik wyjaśnia, jak przechowywać publiczne klucze SSH w Panelu klienta.**

## Wymagania początkowe

- [Serwer dedykowany](/links/bare-metal/bare-metal) lub [VPS](/links/bare-metal/vps) na koncie OVHcloud
- Dostęp do [Panelu klienta OVHcloud](/links/manager)

> [!primary]
>
> Więcej informacji na temat używania kluczy SSH w ramach usług [Public Cloud](/links/public-cloud/public-cloud) znajdziesz w przewodniku:
>
> [Jak tworzyć klucze SSH za pomocą OpenSSH dla instancji Public Cloud](/pages/public_cloud/compute/creating-ssh-keys-pci)

## W praktyce

Jeśli jeszcze nie utworzyłeś pary kluczy SSH, zapoznaj się z naszymi przewodnikami:

- [Tworzenie i używanie kluczy SSH](/pages/bare_metal_cloud/dedicated_servers/creating-ssh-keys-dedicated)
- [Tutorial - Jak używać PuTTY do połączeń SSH i uwierzytelniania](/pages/web_cloud/web_hosting/ssh_using_putty_on_windows)

Zaloguj się do [Panelu klienta OVHcloud](/links/manager), kliknij nazwę konta w prawym górnym rogu i otwórz `Katalog produktów`{.action}.

![products and services](/pages/assets/screens/control_panel/product-selection/right-menu/my-solutions-and-services.png){.thumbnail}

W sekcji `Moje usługi` Twojego panelu klienta kliknij `Klucze SSH`{.action}.

![control panel ssh keys](images/importkey1.png){.thumbnail}

Kliknij przycisk `Dodaj klucz SSH`{.action} i wybierz z menu opcję `Dedykowany`{.action}.

![control panel ssh keys](images/importkey2.png){.thumbnail}

W oknie, które się wyświetla wprowadź "etykietę" dla klucza w pierwszym polu.  
Skopiuj cały ciąg klucza publicznego i wklej go w drugim polu.

![control panel ssh keys](images/importkey3.png){.thumbnail}

Kliknij przycisk `Zatwierdź`{.action}.

Klucz będzie już dostępny podczas reinstalacji serwera dedykowanego lub serwera VPS w Panelu klienta.

Więcej szczegółów znajdziesz w przewodnikach "Pierwsze kroki":

- [Serwer dedykowany](/pages/bare_metal_cloud/dedicated_servers/getting-started-with-dedicated-server)
- [Serwer dedykowany z gamy **Eco**](/pages/bare_metal_cloud/dedicated_servers/getting-started-with-dedicated-server-eco)
- [VPS](/pages/bare_metal_cloud/virtual_private_servers/starting_with_a_vps)

## Sprawdź również

W przypadku wyspecjalizowanych usług (pozycjonowanie, rozwój, etc.) skontaktuj się z [partnerami OVHcloud](/links/partner).

Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i użytkowania Twoich rozwiązań OVHcloud, zapoznaj się z naszymi [ofertami pomocy](/links/support).

Dołącz do [grona naszych użytkowników](/links/community).