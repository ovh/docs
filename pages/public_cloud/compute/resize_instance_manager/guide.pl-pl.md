---
title: Zmiana rozmiaru instancji w Panelu klienta OVHcloud
excerpt: "Dowiedz się, jak zmienić rozmiar instancji Public Cloud z poziomu Panelu klienta OVHcloud"
updated: 2026-03-04
---

## Wprowadzenie

Jeśli Twoja instancja nie dysponuje wystarczającymi zasobami z powodu zwiększonej aktywności lub nowych potrzeb, możesz zwiększyć jej zasoby za pomocą kilku kliknięć dzięki Public Cloud.

**Z tego przewodnika dowiesz się, jak zmienić rozmiar instancji w Panelu klienta OVHcloud.**

> [!warning]
>
> W przypadku modeli klasycznych możliwe jest tylko skalowanie w górę.
> Ponadto operacja ta powoduje wyłączenie instancji na czas jej trwania.
>

> [!success]
>
> Instancje typu *flex* umożliwiają zmianę rozmiaru na wyższe lub niższe modele dzięki stałemu rozmiarowi dysku.
>

## Wymagania początkowe

- Posiadanie [instancji Public Cloud](/links/public-cloud/public-cloud) na koncie OVHcloud

<!-- CP-NAV-START:publiccloud-projects -->
---

### Dostęp do Panelu klienta OVHcloud

- **Link bezpośredni:** [Public Cloud Projects](/links/control-panel/publiccloud-projects)
- **Ścieżka nawigacji:** `Public Cloud`{.action} > Wybierz projekt

---
<!-- CP-NAV-END:publiccloud-projects -->

## W praktyce

Kliknij `Instancje`{.action} w menu po lewej stronie.

Kliknij `...`{.action} po prawej stronie instancji i wybierz `Edytuj`{.action}. Możesz również uzyskać dostęp do tej akcji z poziomu szczegółów instancji, klikając jej nazwę, a następnie `Zmień szablon`{.action}.

W nowej zakładce przewiń stronę do sekcji **Model**, aby wybrać odpowiedni model.

> [!primary]
>
> W przypadku modeli klasycznych możesz przełączyć na dowolny model o podobnym lub większym dysku. Nie możesz przejść na model z mniejszym dyskiem.<br/>
>
> Tylko **elastyczne instancje** mogą być skalowane w górę lub w dół, zachowując stały rozmiar dysku 50 GB.
>

Jeśli Twój dysk ma 50 GB lub mniej, możesz przełączyć się na `Elastyczna instancja`{.action}, jeśli chcesz.

> [!warning]
> Jeśli edytujesz instancję typu *flex*, nie jest możliwe przejście na instancję klasyczną za pośrednictwem Panelu klienta. Aby uzyskać więcej informacji, zapoznaj się z naszym przewodnikiem [Zmiana instancji flex na instancję klasyczną](/pages/public_cloud/compute/revert_a_flex_instance).
>

Po dokonaniu wyboru kliknij `Zmień szablon`{.action}, aby potwierdzić wybór.

### Zmiana rozmiaru dysku w systemie Windows

Podczas zmiany rozmiaru instancji Windows rozmiar partycji nie jest automatycznie aktualizowany. Należy go rozszerzyć, korzystając z **menedżera dysków**:

- Kliknij prawym przyciskiem myszy menu `Start`{.action} i uruchom menedżer dysków, klikając `Disk Management`{.action}:

![Menu kontekstowe menu Start z opcją Zarządzanie dyskami](images/2980.png){.thumbnail}

- Kliknij prawym przyciskiem myszy na partycję główną, a następnie kliknij `Extend Volume`{.action}.

![Kliknięcie prawym przyciskiem na partycji głównej w celu rozszerzenia woluminu](images/2981a.png){.thumbnail}

- W menu `Extend Volume Wizard` kliknij `Next`{.action}. Wybierz zasoby dysku do rozszerzenia i kliknij `Next`{.action}.

![Kreator rozszerzenia woluminu z wyborem zasobów dysku](images/2978a.png){.thumbnail}

Kliknij `Finish`{.action}, aby potwierdzić wybór.

![Krok finalizacji kreatora rozszerzenia woluminu](images/wizard2021.png){.thumbnail}

- Nowy rozmiar dysku zostanie wyświetlony w menedżerze dysków.

![Menedżer dysków wyświetlający nowy rozmiar](images/2979.png){.thumbnail}

## Sprawdź również

Dołącz do [grona naszych użytkowników](/links/community).