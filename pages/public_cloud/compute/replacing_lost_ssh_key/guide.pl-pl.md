---
title: "Jak zastąpić parę kluczy SSH na instancji Public Cloud"
excerpt: "Dowiedz się, jak przywrócić dostęp do serwera, zastępując parę kluczy SSH nową parą w przypadku utraty klucza prywatnego"
updated: 2024-06-13
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk "Zgłóś propozycję modyfikacji" na tej stronie.
>

## Wprowadzenie

Utrata prywatnego klucza SSH spowoduje utratę dostępu do instancji, jeśli nie skonfigurowałeś innych metod dostępu.

Nadal jednak możesz logować się do Twojej instancji w trybie Rescue OVHcloud, który pozwala na zalogowanie się przy użyciu tymczasowego hasła i na modyfikację plików.

**Ten przewodnik wyjaśnia, jak wymienić klucze SSH w przypadku utraty dostępu do instancji.**

> [!warning]
> OVHcloud zapewnia usługi, ale to użytkownik ponosi odpowiedzialność za zarządzanie nimi oraz ich konfigurację. Do Twoich obowiązków należy zatem upewnienie się, że działają one prawidłowo.
>
> Ten przewodnik ułatwi Ci realizację bieżących zadań. Niemniej jednak w przypadku problemów zalecamy skontaktowanie się z [wyspecjalizowanym dostawcą](/links/partner) lub [naszą społecznością użytkowników](/links/community).
>

## Wymagania początkowe

- [Instancja Public Cloud](/links/public-cloud/public-cloud) na koncie OVHcloud
- Dostęp do [Panelu klienta OVHcloud](/links/manager)

## W praktyce

### Etap 1: tworzenie nowej pary kluczy

Utwórz nową parę kluczy SSH na Twoim lokalnym urządzeniu, postępując zgodnie z instrukcjami z pierwszej części [przewodnika dotyczącego tworzenia klucza SSH](/pages/bare_metal_cloud/dedicated_servers/creating-ssh-keys-dedicated).

### Etap 2: dostęp do instancji w trybie Rescue

Postępuj zgodnie z instrukcjami zawartymi w [Przewodniku po trybie ratunkowym](/pages/public_cloud/compute/put_an_instance_in_rescue_mode), aby uruchomić instancję w trybie ratunkowym, połączyć się z nią i zamontować partycje.

Po wpisaniu komendy `mount` (zgodnie z opisem w przewodniku) i uzyskaniu dostępu do partycji systemowej, możesz użyć następującej komendy:

```bash
chroot path/to/partition/mountpoint
```

Ścieżka pliku zależy od użytego punktu instalacji. Jeśli zamontowałeś partycję w `/mnt`, wprowadź:

```bash
chroot /mnt/
```

W tym folderze powinieneś teraz mieć pełny dostęp z prawem zapisu do plików.

### Etap 3: wymiana klucza

Otwórz odpowiedni plik "authorized_keys" w edytorze tekstu. Ten plik przechowuje klucze SSH i znajduje się w folderze `home` użytkownika, z którym łączysz się do instancji.

Przykład:

```bash
nano /mnt/home/USER_NAME/.ssh/authorized_keys
```

Zastąp `USER_NAME` rzeczywistą nazwą użytkownika.

Skopiuj i wklej nowy klucz publiczny (utworzony w etapie 1) do pliku. Powinna wyglądać jak poniższy przykład:

```console
ssh-rsa 1111111111122222222222333333333333444444444555555555556666666666
777777777778888888888999999900000000000000000000000000== old@sshkey
ssh-rsa AAAAAAAAABBBBBBBBBBBCCCCCCCCCCCCCCCCDDDDDDDDDDDDDDDDDDDEEEEEEEEE
EEFFFFFFFFFFFFFGGGGGGGGGGGGGhhhhhhhhhhhhhhhhhhhhhhhhhh== new@sshkey
```

Ze względów bezpieczeństwa usuń z pliku przestarzały ciąg klucza "old". Zapisz zmiany i zamknij edytor.

Uruchom ponownie instancję w trybie "normalnym" z poziomu [panelu klienta OVHcloud](/links/manager). W razie potrzeby skorzystaj z instrukcji zawartych w [Przewodniku o trybie ratunkowym](/pages/public_cloud/compute/put_an_instance_in_rescue_mode).

Teraz masz dostęp do instancji za pomocą nowej pary kluczy SSH.

## Sprawdź również

Dołącz do [grona naszych użytkowników](/links/community).
