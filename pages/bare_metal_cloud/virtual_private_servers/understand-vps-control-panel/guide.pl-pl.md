---
title: "VPS - Zarządzanie z Panelu klienta OVHcloud"
excerpt: "Dowiedz się, jak korzystać z Panelu klienta OVHcloud do zarządzania swoim VPS: pulpit, reinstalacja, restart, kopie zapasowe i konfiguracja usługi"
updated: 2026-01-21
---

## Wprowadzenie

- Zrozumienie interfejsu zarządzania VPS.
- Zidentyfikowanie kluczowych informacji.
- Znajomość lokalizacji wykonywania głównych działań.

## Wymagania początkowe

- Aktywna oferta [VPS](/links/bare-metal/vps) w Twoim Panelu klienta OVHcloud.

> [!warning]
> Niektóre funkcje VPS opisane na tej stronie nie są dostępne w OVHcloud Local Zones.
>
> Aby uzyskać więcej informacji, odwiedź naszą [stronę Local Zones](/links/bare-metal/vps-lz).

<!-- CP-NAV-START:baremetal-vps -->
---

### Dostęp do Panelu klienta OVHcloud

- **Link bezpośredni:** [VPS management](/links/control-panel/baremetal-vps)
- **Ścieżka nawigacji:** `Bare Metal Cloud`{.action} > `Prywatne serwery wirtualne`{.action} > Wybierz VPS

---
<!-- CP-NAV-END:baremetal-vps -->

## W praktyce

To przewodnik pomaga Ci **zrozumieć interfejs zarządzania VPS w Panelu klienta OVHcloud**, zidentyfikować kluczowe informacje i wykorzystać główne dostępne działania (reinstalacja, restart, kopia zapasowa, konfiguracja).

**Spis treści:**

- [Pulpit](#controlpanel)
- [Twój VPS](#myvps)
- [Twoja konfiguracja](#myconf)
- [IP](#ip)
- [Kopia zapasowa](#save)
- [Moja oferta](#myoffer)
- [Uruchom ponownie swój VPS](#rebootvps)
- [Zainstaluj ponownie swój VPS](#reinstallvps)

### Pulpit <a name="controlpanel"></a>

Karta `Strona główna`{.action} jest **głównym panelem** Twojego VPS.

Centralizuje **kluczowe informacje o usłudze** i dostarcza dostęp do **ważnych działań zarządzania**.

![VPS Strona główna](images/vpshome.png){.thumbnail}

#### Twój VPS <a name="myvps"></a>

Poniżej znajdziesz podstawowe informacje o Twoim VPS i stanie usługi. Kliknij na karty poniżej, aby wyświetlić szczegóły.

> [!tabs]
> Nazwa
>>
>> Aby zmienić nazwę swojego VPS, kliknij przycisk `...`{.action} i wybierz `Zmień nazwę`{.action}. Ta funkcja jest przydatna do łatwiejszej nawigacji w Panelu zarządzania, gdy zarządzasz wieloma usługami VPS. Jednak wewnętrzna nazwa usługi pozostaje w formacie *VPS-XXXXXXX.VPS.ovh.net*.
>>
> Uruchomienie
>>
>> Tryb uruchomienia może być:
>>
>> - w **trybie normalnym** (*LOCAL*), gdzie serwer ładuje zainstalowany system operacyjny.
>> - w **trybie Rescue**, dostarczonym przez OVHcloud do rozwiązywania problemów.
>>
>> Użyj przycisku `...`{.action}, aby [uruchomić ponownie VPS](#rebootvps) lub uruchomić go w trybie Rescue, jeśli to konieczne.
>>
>> Jeśli potrzebujesz więcej informacji, odwiedź nasz przewodnik dotyczący [trybu awaryjnego](/pages/bare_metal_cloud/virtual_private_servers/rescue).
>>
> OS / Dystrybucja
>>
>> To jest obecnie zainstalowany system operacyjny. Użyj przycisku `...`{.action}, aby [zainstalować ponownie ten sam system operacyjny lub wybrać inny z dostępnych opcji](#reinstallvps).
>>
>> > [!warning]
>> >
>> > Reinstalacja usunie wszystkie dane obecnie hostowane na VPS (z wyjątkiem dodatkowych dysków).
>>
>> > [!primary]
>> >
>> > Jeśli zamówiłeś **Windows** VPS, możesz wybrać tylko system Windows do reinstalacji. Podobnie, jeśli Windows nie został wybrany podczas zamawiania, nie można go zainstalować po dostarczeniu VPS.
>>
>> Po zainstalowaniu systemu, jesteś odpowiedzialny za stosowanie aktualizacji bezpieczeństwa systemu operacyjnego. Więcej informacji znajdziesz w sekcji "[Zainstaluj ponownie swój VPS](#reinstallvps)" oraz w naszym przewodniku "[Zabezpieczanie VPS](/pages/bare_metal_cloud/virtual_private_servers/secure_your_vps)".
>> 
> Strefa/Lokalizacja
>>
>> Te sekcje dostarczają informacji o lokalizacji Twojego VPS. Może to być przydatne do identyfikacji i oceny potencjalnych wpływów na Twoją usługę, takich jak te wymienione w [raportach o incydentach lub konserwacji](https://bare-metal-servers.status-ovhcloud.com/).
>>

#### Twoja konfiguracja <a name="myconf"></a>

<iframe class="video" width="560" height="315" src="https://www.youtube-nocookie.com/embed/BbyE52W7aBo?si=mmgSmaqIxx0zzGz2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Kliknij karty poniżej, aby wyświetlić szczegóły tej sekcji.

> [!tabs]
> Model
>>
>> Ten element wskazuje komercyjny numer identyfikujący model VPS, odpowiadający [ofertom VPS na naszej stronie internetowej](/links/bare-metal/vps).
>>
> vCores/Pamięć/Przestrzeń dyskowa
>> 
>> Obecne zasoby Twojego VPS są wyświetlane tutaj i mogą być aktualizowane osobno, klikając odpowiedni link. Zauważ, że aktualizacje są ograniczone przez wybrany model VPS i mogą być dostępne tylko poprzez przechodzenie do [wyższego zakresu](/links/bare-metal/vps).
>>
> Dodatkowe dyski
>> 
>> Dodaj dodatkowe dyski do swojego VPS, aby zwiększyć pojemność pamięci masowej serwera poza tą, która jest zawarta w konfiguracji początkowej. Na przykład możesz przechowywać dane kopii zapasowych na nich.

#### IP <a name="ip"></a>

Kliknij karty poniżej, aby wyświetlić szczegóły tej sekcji.

> [!tabs]
> IPv4
>>
>> Główne publiczne adresy IPv4 VPS są automatycznie skonfigurowane podczas instalacji. Więcej informacji na temat zarządzania adresami IP znajdziesz w naszym przewodniku "[Konfigurowanie aliasu adresu IP](/pages/bare_metal_cloud/virtual_private_servers/configuring-ip-aliasing)".
>>
> IPv6/Gateway
>> 
>> Znajdziesz tutaj publiczny adres IPv6 i adres bramy do niego przypisany. Są one automatycznie dołączone do VPS podczas instalacji. Więcej informacji znajdziesz w naszym przewodniku "[Konfigurowanie IPv6 na serwerze VPS](/pages/bare_metal_cloud/virtual_private_servers/configure-ipv6)".
>> 
> DNS secondary
>>
>> Ta funkcja jest przydatna do hostowania usług DNS. Konsultuj nasz przewodnik "[Konfigurowanie sekundarnego DNS OVHcloud na VPS](/pages/bare_metal_cloud/virtual_private_servers/adding-secondary-dns-on-vps)" dla więcej informacji na ten temat.

#### Kopia zapasowa <a name="save"></a>

Te opcje odnoszą się do dodatkowych usług VPS do tworzenia kopii zapasowych i przywracania systemu.

> [!tabs]
> Snapshot
>>
>> Zrzut ekranu na VPS to chwilowa kopia zapasowa stanu serwera, umożliwiająca szybką przywracanie systemu w przypadku problemu. Opcja `Snapshot` umożliwia tworzenie ręcznego zrzutu jako pojedynczego punktu przywracania.
>>
> Zautomatyzowany backup
>>
>> Codzienna kopia zapasowa systemu (z wyjątkiem dodatkowych dysków) jest automatycznie wykonywana i przechowywana przez 24 godziny (dotyczy tylko usług zamówionych od 7 sierpnia 2025 r.). Przełączając się na opcję "**Premium Automatyczna kopia zapasowa**", będziesz miał ostatnie 7 codziennych kopii zapasowych swojego VPS, które możesz użyć do montażu i przywracania.  
>> W porównaniu do ręcznych zrzutów, ta funkcja zwiększa bezpieczeństwo danych, tworząc wiele punktów przywracania w regularnych odstępach czasu.
>>

Znajdź wszystkie informacje na temat dostępnych rozwiązań kopii zapasowych dla Twojej usługi na [stronie produktu VPS](/links/bare-metal/vps-options) i w [naszych odpowiednich przewodnikach](/products/bare-metal-cloud-virtual-private-servers-configuration).

#### Moja oferta <a name="myoffer"></a>

Ta sekcja przedstawia najważniejsze informacje dotyczące rozliczania Twojej usługi. Znajdź wszystkie informacje na ten temat w [naszych odpowiednich przewodnikach](/products/account-and-service-management-managing-billing-payments-and-services).

<a name="hometab"></a>

### Funkcje VPS dostępne w karcie "Strona główna"

> [!warning]
>
> OVHcloud dostarcza usług, których konfiguracja i zarządzanie są Twoją odpowiedzialnością. Dlatego Ty jesteś odpowiedzialny za ich prawidłowe działanie.
>
> Ten przewodnik ma na celu pomoc w wykonywaniu typowych zadań. Jednak zalecamy, aby w przypadku trudności lub wątpliwości dotyczących zarządzania, użytkowania lub wdrażania usług na serwerze skontaktować się z [specjalistycznym dostawcą usług](/links/partner) lub naszą [społecznością](/links/community).
>

#### Uruchom ponownie swój VPS <a name="rebootvps"></a>

Uruchomienie ponowne może być konieczne, aby zastosować aktualizacje konfiguracji lub rozwiązać problem. W miarę możliwości wykonaj "soft reboot" z interfejsu graficznego serwera (Windows, Plesk itp.) lub za pomocą poniższego polecenia w wierszu poleceń:

```bash
sudo reboot
```

Jednak możesz wykonać zmuszony restart w dowolnym momencie w swoim [Panelu klienta OVHcloud](/links/manager). Z karty `Strona główna`{.action}, kliknij przycisk `...`{.action} obok `Boot` w sekcji **Twój VPS**. Wybierz `Restart serwera VPS`{.action} i kliknij `Zatwierdź`{.action} w oknie, które się pojawi.

![Uruchom ponownie](/pages/assets/screens/control_panel/product-selection/bare-metal-cloud/vps/cp_reboot.png){.thumbnail}

#### Zainstaluj ponownie swój VPS <a name="reinstallvps"></a>

Zainstalowanie ponowne swojego VPS można wykonać z Twojego Panelu zarządzania. Ta operacja jest zazwyczaj używana w przypadku problemów z systemem, zmiany środowiska lub uruchomienia z czystej instalacji.

Kliknij przycisk `...`{.action} po prawej stronie `OS / Dystrybucja`{.action}, a następnie `Reinstalacja serwera VPS`{.action}.

![Zainstaluj ponownie](/pages/assets/screens/control_panel/product-selection/bare-metal-cloud/vps/cp_reinst.png){.thumbnail}

W oknie, które się pojawi, wybierz system operacyjny z listy rozwijanej. Opcje oferowane to [obrazy kompatybilne z VPS OVHcloud](/pages/public_cloud/compute/image-life-cycle) i są natychmiast funkcjonalne po instalacji.

Jeśli wybrałeś kompatybilny system operacyjny, możesz podać **klucz publiczny**, który zostanie automatycznie zainstalowany. Dwie opcje są dostępne:

- Ręcznie skopiuj ciąg klucza i wklej go do pola `Publiczny klucz SSH`.
- Jeśli wcześniej [przechowywałeś klucz publiczny](/pages/bare_metal_cloud/dedicated_servers/import-keys-control-panel) w swoim [Panelu klienta OVHcloud](/links/manager), wybierz żądany klucz z menu rozwijanego `Klucz SSH do preinstalacji`.

![VPSnowa instalacja](images/reinstall.png){.thumbnail}

Aby uzyskać więcej informacji na ten temat, skonsultuj nasze przewodniki:

- [Jak tworzyć i używać kluczy uwierzytelniania do połączeń SSH z serwerami OVHcloud](/pages/bare_metal_cloud/dedicated_servers/creating-ssh-keys-dedicated)
- [Przewodnik - Jak używać PuTTY do połączeń SSH i uwierzytelniania](/pages/web_cloud/web_hosting/ssh_using_putty_on_windows)

Jeśli wybrałeś klucz SSH i nie potrzebujesz hasła do połączenia, włącz opcję `Nie chcę otrzymać wiadomości e-mail z danymi do logowania dla mojego serwera VPS`.

> [!warning]
>
> Reinstalacja sformatuje wszystkie dyski serwera. Silnie zaleca się utworzenie zrzutu swojego VPS przed kontynuowaniem, aby móc wrócić do poprzedniego stanu w przypadku problemu.
>

> [!primary]
>
> **Licencje**
>
> Niektóre systemy operacyjne lub platformy własnościowe, takie jak Plesk lub cPanel, wymagają licencji, które generują dodatkowe koszty. Licencje można zarządzać z Twojego Panelu zarządzania: przejdź do sekcji `Bare Metal Cloud`{.action}, a następnie kliknij `Licencje`{.action} w lewym pasku nawigacyjnym.
>
> Aby uruchomić system **Windows** na VPS, musisz wcześniej go wybrać **w procesie zamawiania**. VPS z innym systemem operacyjnym nie można zainstalować ponownie z Windowsa za pomocą powyższego metody.
>

Proces reinstalacji może zająć kilka minut.

## Sprawdź również

[VPS FAQ](/pages/bare_metal_cloud/virtual_private_servers/vps-faq)

[Wprowadzenie do SSH](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction)

[Zabezpieczanie VPS](/pages/bare_metal_cloud/virtual_private_servers/secure_your_vps)

[Jak odzyskać dostęp do serwera w przypadku utraty hasła użytkownika](/pages/bare_metal_cloud/dedicated_servers/replacing-user-password)

Dołącz do [grona naszych użytkowników](/links/community).