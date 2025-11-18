---
title: Jak rozpocząć korzystanie z połączeń SSH
excerpt: "Dowiedz się, jak korzystać z SSH, aby uzyskać dostęp do serwera OVHcloud z większości stacji roboczych"
updated: 2024-12-03
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

Protokół SSH (Secure Shell) jest preferowanym sposobem nawiązywania szyfrowanych połączeń z hostami za pośrednictwem sieci publicznych. Narzędzie OpenSSH jest dostępne na wszystkich serwerach OVHcloud (VPS, serwery dedykowane, instancje Public Cloud) i umożliwia bezpieczne zdalne połączenia z serwerami oraz realizację innych operacji.

**Niniejszy przewodnik wyjaśnia, jak łączyć się bezpiecznie z Twoim serwerem za pomocą protokołu SSH.**

> [!warning]
> OVHcloud zapewnia usługi, ale to użytkownik ponosi odpowiedzialność za zarządzanie nimi oraz ich konfigurację. Do Twoich obowiązków należy zatem upewnienie się, że działają one prawidłowo.
>
> Ten przewodnik ma na celu pomóc w wykonywaniu typowych zadań. Niemniej jednak w przypadku trudności zalecamy skontaktowanie się z [wyspecjalizowanym dostawcą](/links/partner) lub skontaktowanie się ze społecznością [OVHcloud](/links/community). Więcej informacji znajduje się w sekcji [Sprawdź również](#gofurther) niniejszego przewodnika.
>

## Wymagania początkowe

- [Serwer dedykowany](/links/bare-metal/bare-metal) lub [VPS](/links/bare-metal/vps) na koncie OVHcloud

> [!primary]
> Ten przewodnik nie dotyczy standardowych instalacji serwerów Windows, ponieważ są one oparte na protokole Remote Desktop Protocol (RDP) dla połączeń. Połączenia SSH są jednak istotne w przypadku korzystania z trybu Rescue OVHcloud. Więcej informacji znajdziesz w sekcji [Sprawdź również](#gofurther) niniejszego przewodnika.
>

## W praktyce

Istnieje kilka sposobów uwierzytelnienia połączenia ze zdalnym hostem przez SSH. Poniższe instrukcje dotyczą metody uwierzytelniania za pomocą **nazwa użytkownika i hasło**.  
Można również skonfigurować uwierzytelnianie za pomocą klucza w celu włączenia bezpiecznych połączeń bez wymiany hasła. Szczegółowe informacje znajdziesz w naszych przewodnikach:

- [Jak tworzyć i używać kluczy do uwierzytelniania SSH](/pages/bare_metal_cloud/dedicated_servers/creating-ssh-keys-dedicated)
- [Jak tworzyć i używać kluczy do uwierzytelniania SSH za pomocą PuTTY](/pages/web_cloud/web_hosting/ssh_using_putty_on_windows)

Dane do logowania (login i hasło) otrzymasz e-mailem po zainstalowaniu lub reinstalacji serwera z poziomu [Panelu klienta OVHcloud](/links/manager).

Nazwa użytkownika odnosi się do systemu operacyjnego, na przykład `ubuntu` lub `debian`. Aby się zalogować, należy również określić adres IP lub `hostname` serwera. Szczegóły znajdziesz w e-mailu dotyczącym instalacji oraz w Panelu klienta.

Zapoznaj się z naszymi przewodnikami "Pierwsze kroki", jeśli chcesz otrzymać więcej informacji:

- Dla [serwera dedykowanego](/pages/bare_metal_cloud/dedicated_servers/getting-started-with-dedicated-server)
- Dla [serwera dedykowanego z gamy **Eco**](/pages/bare_metal_cloud/dedicated_servers/getting-started-with-dedicated-server-eco)
- Dla serwera [VPS](/pages/bare_metal_cloud/virtual_private_servers/starting_with_a_vps)

### Jak połączyć się ze zdalnym serwerem z poziomu dystrybucji GNU/Linux lub macOS

/// details | Rozwiń tę sekcję

### Nawiązanie połączenia

Klient wiersza poleceń SSH (protokół OpenSSH) jest zazwyczaj dostępny jako domyślny. Otwórz aplikację wiersza polecenia (Terminal) i zaloguj się do serwera za pomocą następującego polecenia:

```bash
ssh username@server_IP
```

Jeśli zmieniłeś port SSH serwera, zastosuj następujące polecenie:

```bash
ssh username@server_IP -p port_number
```

### Połączenie i fingerprint

Po wyświetleniu monitu wpisz hasło użytkownika, który się zaloguje (lub kliknij je środkowym przyciskiem myszy, aby je wkleić) i naciśnij klawisz `Enter`{.action}.

Jeśli jest to nowe połączenie, klient SSH otrzyma **odcisk klucza** z serwera. Wpisz `yes`, aby potwierdzić, a następnie hasło użytkownika, który loguje się, aby się zalogować.

Przykład wyjścia:

```bash
ssh ubuntu@203.0.113.100
```

```console
The authenticity of host '203.0.113.100 (203.0.113.100)' can't be established.
ECDSA key fingerprint is SHA256:rRwrdsmJfzvJF5k0a4JmMSdaWbTlCgRKBukbmQ3gmso.
Are you sure you want to continue connecting (yes/no/[fingerprint])?
Warning: Permanently added '203.0.113.100' (ECDSA) to the list of known hosts.
ubuntu@203.0.113.100's password:
```

Przy każdym ponownym połączeniu wszystkie linie papilarne będą zapisywane na urządzeniu i weryfikowane. Jeśli klucz zostanie zmieniony na hoście zdalnym, przy próbie nawiązania połączenia zostanie wyświetlony komunikat ostrzegawczy.

Przykład wyjścia:

```console
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@    WARNING: REMOTE HOST IDENTIFICATION HAS CHANGED!     @
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
Host key verification failed.
Offending ECDSA key in /home/user/.ssh/known_hosts:3
```

Oznacza to, że wystąpiło jedno z następujących zdarzeń:

- Serwer został przeinstalowany.
- Usługa SSH na serwerze została pomyślnie przeinstalowana.
- Łączysz się z innym hostem z tym samym adresem IP.

> [!primary]
> Komunikat ostrzegawczy nie musi wskazywać na problem z zabezpieczeniami. Jeśli jednak to nie Ty spowodowałeś tę awarię, dostęp do serwera zdalnego może być zagrożony.
>

Aby rozwiązać ten problem, użyj następującego polecenia z adresem IP Twojego serwera:

```bash
ssh-keygen -f ~/.ssh/known_hosts -R 203.0.113.100
```

Plik `known_hosts` znajdujący się w folderze `home` Twojego lokalnego konta użytkownika można również edytować za pomocą edytora tekstu.

Przykład:

```bash
nano ~/.ssh/known_hosts
```

Zlokalizuj wiersz `offending` określony w komunikacie ostrzegawczym (w tym przykładzie byłby to trzeci wiersz). Podświetl cały wiersz i usuń go.

Zapisz zmiany i zamknij edytor. Przy następnym połączeniu z serwerem musisz potwierdzić nowy odcisk palca.

///

### Jak łączyć się ze zdalnym serwerem z urządzenia z systemem Windows

/// details | Rozwiń tę sekcję

### Nawiązanie połączenia

Najnowsze wersje systemu operacyjnego Windows to OpenSSH, który umożliwia korzystanie z niego bezpośrednio z natywnych aplikacji wiersza polecenia (PowerShell lub wiersz poleceń w wierszu poleceń).

Kliknij prawym przyciskiem myszy przycisk `Start`{.action} systemu Windows i wybierz `Windows PowerShell`{.action}. Pole wyszukiwania może być również używane do uruchamiania jednej z aplikacji wiersza polecenia.

![PowerShell](images/windowsps.png){.thumbnail}

Połącz się z serwerem za pomocą następującego polecenia:

```bash
ssh username@server_IP
```

Jeśli zmieniłeś port SSH serwera, zastosuj następujące polecenie:

```bash
ssh username@server_IP -p port_number
```

### Połączenie i fingerprint

Gdy zostanie wyświetlony monit, wpisz hasło zalogowanego użytkownika (lub kliknij prawym przyciskiem myszy) i naciśnij klawisz `Enter`{.action}.

Jeśli jest to nowe połączenie, klient SSH otrzyma **odcisk klucza** z serwera. Wpisz `yes`, aby potwierdzić, a następnie hasło użytkownika, który loguje się, aby się zalogować.

Przykład wyjścia:

```bash
ssh ubuntu@203.0.113.100
```

```console
The authenticity of host '203.0.113.100 (203.0.113.100)' can't be established.
ECDSA key fingerprint is SHA256:rRwrdsmJfzvJF5k0a4JmMSdaWbTlCgRKBukbmQ3gmso.
Are you sure you want to continue connecting (yes/no/[fingerprint])?
Warning: Permanently added '203.0.113.100' (ECDSA) to the list of known hosts.
ubuntu@203.0.113.100's password:
```

Przy każdym ponownym połączeniu wszystkie linie papilarne będą zapisywane na urządzeniu i weryfikowane. Jeśli klucz zostanie zmieniony na hoście zdalnym, przy próbie nawiązania połączenia zostanie wyświetlony komunikat ostrzegawczy.

Przykład wyjścia:

```console
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@    WARNING: REMOTE HOST IDENTIFICATION HAS CHANGED!     @
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
Host key verification failed.
Offending ECDSA key in C:\\Users\\Name_Windows_User/.ssh/known_hosts:3
```

Oznacza to, że wystąpiło jedno z następujących zdarzeń:

- Serwer został przeinstalowany.
- Usługa SSH na serwerze została pomyślnie przeinstalowana.
- Łączysz się z innym hostem z tym samym adresem IP.

> [!primary]
> Komunikat ostrzegawczy nie musi wskazywać na problem z zabezpieczeniami. Jeśli jednak to nie Ty spowodowałeś tę awarię, dostęp do serwera zdalnego może być zagrożony.
>

Aby rozwiązać ten problem, wprowadź następującą komendę z nazwą Twojego lokalnego konta użytkownika systemu Windows i adresem IP serwera:

```bash
ssh-keygen -f "C:\Users\Name_Windows_User\.ssh\known_hosts" -R 203.0.113.100
```

Możesz również uzyskać dostęp do tego folderu, kliknąć prawym przyciskiem myszy plik i otworzyć go w edytorze tekstu (Notepad, Notepad++, itp.)

![known_hosts](images/windowskh.png){.thumbnail}

Zlokalizuj wiersz `offending` określony w komunikacie ostrzegawczym (w tym przykładzie byłby to trzeci wiersz). Podświetl cały wiersz i usuń go.

Zapisz zmiany i zamknij edytor. Przy następnym połączeniu z serwerem musisz potwierdzić nowy odcisk palca.

///


### Korzystanie z klientów GUI lub oprogramowania kompatybilnego z SSH

Jeśli preferujesz graficzny interfejs użytkownika, możesz znaleźć wiele aplikacji dla każdego typu systemu operacyjnego, które umożliwiają łączenie się ze zdalnymi hostami za pomocą protokołu SSH.

Na przykład [PuTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html) to oprogramowanie open source z wieloma przydatnymi funkcjami. Dowiedz się, jak z niego korzystać podczas łączenia się z serwerami OVHcloud, korzystając z naszego szczegółowego tutoriala:

[Jak używać PuTTY](/pages/web_cloud/web_hosting/ssh_using_putty_on_windows)

<a name="gofurther"></a>

## Sprawdź również

[Konfiguracja kont użytkowników i dostępu root na serwerze](/pages/bare_metal_cloud/dedicated_servers/changing_root_password_linux_ds)

[Jak tworzyć i używać kluczy do uwierzytelniania SSH](/pages/bare_metal_cloud/dedicated_servers/creating-ssh-keys-dedicated)

[Jak tworzyć i używać kluczy do uwierzytelniania SSH za pomocą PuTTY](/pages/web_cloud/web_hosting/ssh_using_putty_on_windows)

[Tryb ratunkowy na serwerze dedykowanym](/pages/bare_metal_cloud/dedicated_servers/rescue_mode)

[Tryb ratunkowy na serwerze VPS](/pages/bare_metal_cloud/virtual_private_servers/rescue)

W przypadku wyspecjalizowanych usług (pozycjonowanie, rozwój, etc.) skontaktuj się z [partnerami OVHcloud](/links/partner).

Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i użytkowania Twoich rozwiązań OVHcloud, zapoznaj się z naszymi [ofertami pomocy](/links/support).

Dołącz do [grona naszych użytkowników](/links/community).