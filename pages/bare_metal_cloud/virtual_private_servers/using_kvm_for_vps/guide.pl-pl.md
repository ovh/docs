---
title: Jak korzystać z konsoli KVM, aby uzyskać dostęp do serwera VPS
excerpt: Dowiedz się, jak zalogować się do serwera VPS za pomocą przeglądarki internetowej dzięki funkcji KVM
updated: 2025-02-07
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

Konsola KVM dla VPS, dostępna w Panelu klienta OVHcloud, pozwala na otwarcie połączenia do serwera VPS w przeglądarce internetowej, niezależnie od dodatkowego oprogramowania. W tym kontekście KVM oznacza "*keyboard, video, and mouse*", odnosząc się do emulowanej metody wejścia/wyjścia połączenia zdalnego.

> [!primary]
>
> Pamiętaj, że konsola KVM nie jest rozwiązaniem do obejścia problemu, jeśli utraciłeś dostęp do systemu operacyjnego Twojego VPS. Następnie [użyj trybu ratunkowego serwera VPS, aby odzyskać dostęp do serwera](/pages/bare_metal_cloud/dedicated_servers/replacing-user-password).

**Niniejszy przewodnik wyjaśnia, jak używać konsoli KVM do uzyskiwania dostępu do serwera VPS.**

## Wymagania początkowe

- Jeden [VPS](/links/bare-metal/vps) na Twoim koncie OVHcloud

<!-- CP-NAV-START:baremetal-vps -->
---

### Dostęp do Panelu klienta OVHcloud

- **Link bezpośredni:** [VPS management](/links/control-panel/baremetal-vps)
- **Ścieżka nawigacji:** `Bare Metal Cloud`{.action} > `Prywatne serwery wirtualne`{.action} > Wybierz VPS

---
<!-- CP-NAV-END:baremetal-vps -->

## W praktyce

### Jak otworzyć konsolę KVM w Panelu klienta OVHcloud

W zakładce `Informacje ogólne`{.action} kliknij przycisk `...`{.action} obok nazwy serwera VPS w sekcji **Twój VPS**.

![Open KVM](/pages/assets/screens/control_panel/product-selection/bare-metal-cloud/vps/cp_kvm.png){.thumbnail}

### Jak otworzyć konsolę KVM za pośrednictwem API OVHcloud

/// details | Rozwiń tę sekcję

Jeśli nie wiesz, jak korzystać z API OVHcloud, zapoznaj się z naszym przewodnikiem "[Pierwsze kroki z API OVHcloud](/pages/manage_and_operate/api/first-steps)".

Aby pobrać adres URL dostępu KVM, otwórz ten punkt końcowy:

> [!api]
>
> @api {v1} /vps POST /vps/{serviceName}/getConsoleUrl
>

Wprowadź wewnętrzną nazwę Twojego serwera VPS (`vps-x11x11xyy.vps.ovh.net`) w polu `serviceName`.

Kliknij przycisk `EXECUTE`{.action}.

Adres URL dostępu zostanie wyświetlony w sekcji `RESPONSE`.

///

### Korzystanie z konsoli KVM

Jeśli logujesz się do KVM z poziomu Panelu klienta, wyświetli się okno podręczne. Aby użyć go w trybie pełnoekranowym, kliknij łącze `Otwórz w nowym oknie`{.action} w prawym dolnym rogu. Zwykle spowoduje to otwarcie nowej karty przeglądarki.

![Logowanie do KVM](images/kvm_screen.png){.thumbnail}

Wyświetlany ekran KVM zależy od systemu operacyjnego i indywidualnego stanu serwera VPS. Jeśli zostanie wyświetlony monit, zaloguj się przy użyciu poświadczeń aktywnego konta użytkownika.

Do zalogowania możesz również użyć oprogramowania klienta innej firmy.

### Jak zmienić układ klawiatury

> [!primary]
>
> Klawiatura konsoli KVM może mieć inny układ niż Twój. Zanim wprowadzisz hasło, wpisz kilka znaków, aby sprawdzić układ, na przykład [ta strona](https://en.wikipedia.org/wiki/Keyboard_layout#Conventional_Latin-script_keyboard_layouts).
>

Możesz włączyć żądaną konfigurację klawiatury, aby ułatwić korzystanie z konsoli. Wprowadź następujące polecenie:

```bash
sudo dpkg-reconfigure keyboard-configuration
```

W razie potrzeby zainstaluj pakiet najpierw w interfejsie zarządzania pakietami Twojej dystrybucji (`sudo dnf install keyboard-configuration` lub `sudo apt install keyboard-configuration`).

Otworzy się menu graficzne, w którym można wybrać szablon klawiatury.

![KVM](images/kvm_vps01.png){.thumbnail}

Skorzystaj z klawiszy strzałek, aby uzyskać dostęp do opcji, która jest najbliżej Twojego sprzętu, po czym naciśnij klawisz `Enter`{.action}.

W kolejnym menu wybierz swój kraj.

![KVM](images/kvm_vps02.png){.thumbnail}

W trzecim menu można określić rzeczywisty układ klawiatury.

![KVM](images/kvm_vps03.png){.thumbnail}

W zależności od wybranych opcji, inne opcje mogą pojawić się za trzecim menu.

Wróć do wiersza polecenia, wprowadź następującą komendę, aby zastosować modyfikacje:

```bash
sudo systemctl restart keyboard-setup
```

> [!primary]
>
> Ta modyfikacja nie będzie trwała, jeśli serwer zostanie zrestartowany.
>

## Sprawdź również

W przypadku wyspecjalizowanych usług (pozycjonowanie, rozwój, etc.) skontaktuj się z [partnerami OVHcloud](/links/partner).

Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i użytkowania Twoich rozwiązań OVHcloud, zapoznaj się z naszymi [ofertami pomocy](/links/support).

Dołącz do [grona naszych użytkowników](/links/community).