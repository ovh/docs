---
title: "Jak odzyskać dostęp do serwera w przypadku utraty hasła użytkownika"
excerpt: "Dowiedz się, jak skonfigurować nowe hasło dla konta użytkownika w systemie operacyjnym GNU/Linux w trybie rescue OVHcloud"
updated: 2024-02-19
---


> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk "Zgłoś propozycję modyfikacji” na tej stronie.
>

## Wprowadzenie

Bez alternatywnego uwierzytelniania lub innego konta użytkownika utrata hasła oznacza, że nie można się normalnie połączyć z serwerem.

W takim przypadku możesz zalogować się do Twojego serwera za pomocą trybu Rescue OVHcloud, który umożliwia zalogowanie się przy użyciu hasła tymczasowego i zmianę plików.

**Ten przewodnik wyjaśnia, jak zresetować hasło do konta użytkownika w przypadku braku dostępu do serwera.**

> [!primary]
>
> Aby uzyskać dostęp do serwera, z którym łączysz się za pomocą klucza SSH, zapoznaj się z naszym przewodnikiem "[Jak zamienić parę kluczy SSH](/pages/bare_metal_cloud/dedicated_servers/replacing-lost-ssh-key)".
>

## Wymagania początkowe

- Posiadanie [serwera dedykowanego](https://www.ovhcloud.com/pl/bare-metal/) lub [VPS](https://www.ovhcloud.com/pl/vps/) na koncie OVHcloud
- Dostęp do [Panelu klienta OVHcloud](/links/manager)

> [!primary]
> Ten przewodnik nie dotyczy instalacji **Windows* Server. Zapoznaj się z naszymi przewodnikami "[Jak zmienić hasło administratora na serwerze dedykowanym Windows](/pages/bare_metal_cloud/dedicated_servers/rcw-changing-admin-password-on-windows)" i "[Jak zmienić hasło administratora na serwerze VPS Windows](/pages/bare_metal_cloud/virtual_private_servers/resetting_a_windows_password)".
>

## W praktyce

Sprawdź również nasze przewodniki:

- Dla [serwera dedykowanego](/pages/bare_metal_cloud/dedicated_servers/getting-started-with-dedicated-server)
- Dla [serwera dedykowanego z gamy **Eco**](/pages/bare_metal_cloud/dedicated_servers/getting-started-with-dedicated-server-eco)
- Dla serwera [VPS](/pages/bare_metal_cloud/virtual_private_servers/starting_with_a_vps)

> [!warning]
>
> OVHcloud udostępnia różnorodne usługi, jednak to Ty odpowiadasz za ich konfigurację i zarządzanie nimi. Ponosisz więc odpowiedzialność za ich prawidłowe funkcjonowanie.
>
> Niniejszy przewodnik ułatwi Ci realizację bieżących zadań. Niemniej jednak, w przypadku trudności lub wątpliwości związanych z administrowaniem usługami, korzystaniem z nich lub ich wdrażaniem na serwerze, zalecamy skontaktowanie się z [wyspecjalizowanym dostawcą](https://partner.ovhcloud.com/pl/directory/) lub [naszą społecznością](https://community.ovh.com/en/).
>

<a name="step1"></a>

### Etap 1: restart serwera w trybie rescue

Postępuj zgodnie z instrukcjami zawartymi w przewodnikach dotyczących trybu Rescue, aby połączyć się z serwerem i zamontować partycje:

- [Tryb ratunkowy na serwerze dedykowanym](/pages/bare_metal_cloud/dedicated_servers/rescue_mode)
- [Użyj trybu ratunkowego na serwerze VPS](/pages/bare_metal_cloud/virtual_private_servers/rescue)

Aby kontynuować, Twoja partycja systemowa musi być zamontowana i musisz mieć dostęp do zapisu w systemie plików.

Oznacza to, że wprowadziłeś wersję następującego polecenia do powłoki trybu Rescue:

```bash
chroot path/to/partition/mountpoint/
```

Dokładne sterowanie zależy od użytego punktu montowania. Na przykład, jeśli zamontowałeś partycję w `/mnt`, komenda wygląda następująco:

```bash
chroot /mnt/
```

### Etap 2: resetowanie hasła użytkownika

Uwaga: w dystrybucji GNU/Linux **wiersz hasła nie wyświetla wpisów klawiaturowych**.

Zmień hasło użytkownika za pomocą następującego polecenia (zastąp `username` rzeczywistą nazwą konta użytkownika):

```bash
passwd username
```

```text
New password: 
Retype new password:
passwd: password updated successfully
```

Pamiętaj, aby podczas restartu serwera z poziomu [Panelu klienta OVHcloud](/links/manager) użyć trybu uruchamiania **normalnego** Twojego serwera.

W razie potrzeby sprawdź przewodnik [Tryb ratunkowy](#step1).

Teraz masz dostęp do serwera za pomocą nowego hasła.


## Sprawdź również

[Tworzenie i używanie kluczy SSH](/pages/bare_metal_cloud/dedicated_servers/creating-ssh-keys-dedicated)

[Tryb ratunkowy dla serwera dedykowanego](/pages/bare_metal_cloud/dedicated_servers/rescue_mode)

[Tryb ratunkowy dla serwera VPS](/pages/bare_metal_cloud/virtual_private_servers/rescue)

[Konfigurowanie kont użytkowników i dostępu root na serwerze](/pages/bare_metal_cloud/dedicated_servers/changing_root_password_linux_ds)

Dołącz do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.