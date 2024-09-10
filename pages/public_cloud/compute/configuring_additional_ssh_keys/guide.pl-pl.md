---
title: Jak skonfigurować dodatkowe klucze SSH dla instancji
excerpt: Dowiedz się, jak skonfigurować dodatkowe klucze SSH dla kont użytkowników i dodać je do instancji Public Cloud
updated: 2024-09-09
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk "Zgłóś propozycję modyfikacji" na tej stronie.
> 


## Wprowadzenie

Podczas tworzenia instancji w Panelu klienta możesz dodać tylko jeden klucz SSH dla wstępnie skonfigurowanego konta użytkownika. Aby zalogować się do instancji za pomocą innych kont użytkowników, możesz w kilku krokach utworzyć więcej kluczy i dodać je do instancji.

**Ten przewodnik wyjaśnia, jak skonfigurować dodatkowe klucze SSH do logowania do instancji.**

> [!warning]
> OVHcloud zapewnia usługi, ale to użytkownik ponosi odpowiedzialność za zarządzanie nimi oraz ich konfigurację. Do Twoich obowiązków należy zatem upewnienie się, że działają one prawidłowo.
>
> Ten przewodnik ułatwi Ci realizację bieżących zadań. Niemniej jednak w przypadku problemów zalecamy skontaktowanie się z [wyspecjalizowanym dostawcą](/links/partner) lub skontaktowanie się z [naszą społecznością](/links/community).
>

## Wymagania początkowe

- [Instancja Public Cloud](/links/public-cloud/public-cloud) na koncie OVHcloud
- [Dostęp administracyjny do instancji za pośrednictwem SSH](/pages/public_cloud/compute/creating-ssh-keys-pci#login-linux)

## W praktyce

> [!primary]
>
> Obecnie obsługujemy następujące formaty kluczy SSH: **RSA**, **ECDSA** i **ED25519**.
>
> Pamiętaj, że poniższe instrukcje są przeznaczone do użytku ogólnego i są oparte na systemie operacyjnym serwera Ubuntu. Niektóre polecenia mogą wymagać dostosowania w zależności od używanej dystrybucji lub systemu operacyjnego.
>

### Etap 1: tworzenie nowej pary kluczy SSH

Jeśli to konieczne, skorzystaj z naszego [przewodnika dotyczącego kluczy SSH](/pages/public_cloud/compute/creating-ssh-keys-pci), aby utworzyć nową parę kluczy SSH.  
Znajdziesz tam również informacje dotyczące [zarządzania wieloma kluczami](/pages/public_cloud/compute/creating-ssh-keys-pci#create-ssh-key) na Twojej lokalnej stacji roboczej, jeśli wymaga tego instalacja.

### Etap 2: konfiguracja nowego konta użytkownika

[Zaloguj się do instancji](/pages/public_cloud/compute/public-cloud-first-steps#connect-instance) i zastosuj poniższe polecenia, aby utworzyć nowe konto użytkownika oraz katalog `.ssh`:


```bash
sudo adduser user2
```

```console
info: Adding user `user2' ...
info: Selecting UID/GID from range 1000 to 59999 ...
info: Adding new group `user2' (1003) ...
info: Adding new user `user2' (1003) with group `user2 (1003)' ...
info: Creating home directory `/home/user2' ...
info: Copying files from `/etc/skel' ...
New password: 
Retype new password:
passwd: password updated successfully
Changing the user information for user2
Enter the new value, or press ENTER for the default
        Full Name []:
        Room Number []:
        Work Phone []: 
        Home Phone []: 
        Other []: 
Is the information correct? [Y/n] y
info: Adding new user `user2' to supplemental / extra groups `users' ...
info: Adding user `user2' to group `users' ...
```

```bash
sudo mkdir /home/user2/.ssh/
```

Bez dalszych kroków konto użytkownika `user2` w tym przykładzie nie ma wysokich uprawnień. Jeśli chcesz przyznać temu kontu uprawnienia root do Twojej instancji, dodaj je do `sudo group`:

```bash
sudo usermod -aG sudo user2
```

Więcej informacji na temat uprawnień użytkowników i powiązanych z nimi tematów można znaleźć w [Przewodniku o koncie użytkownika](/pages/bare_metal_cloud/dedicated_servers/changing_root_password_linux_ds).

### Etap 3: dodanie publicznego klucza SSH do instancji

### Transferowanie kluczy publicznych utworzonych w systemach opartych na GNU/Linux, macOS lub BSD

Jeśli stworzyłeś pary kluczy SSH w systemie opartym na GNU/Linux, macOS lub BSD, możesz użyć komendy `ssh-copy-id`, aby dodać publiczne klucze do Twojego serwera.

Narzędzie `ssh-copy-id` kopiuje klucze publiczne do pliku`~/.ssh/authorized_keys` na określonym serwerze zdalnym i w razie potrzeby automatycznie tworzy plik w tym katalogu.

```bash
ssh-copy-id username@IP_ADDRESS
```

Domyślnie `ssh-copy-id` spróbuje przetransferować **wszystkie** klucze publiczne do katalogu `~/.ssh` użytkownika lokalnego. Aby dodać tylko jeden klucz publiczny, możesz określić ten plik klucza za pomocą opcji `-i`, po której następuje ścieżka pliku:

```bash
ssh-copy-id -i ~/.ssh/KeyFileName username@IP_ADDRESS
```

Przykład:

```bash
ssh-copy-id -i ~/.ssh/myInstance_rsa.pub user2@203.0.113.102
```

Zostanie wyświetlony monit o podanie hasła użytkownika. W przypadku powodzenia operacji otrzymasz wiadomość podobną do tej:

```console
Number of key(s) added: 1

Now try logging into the machine, with:   "ssh 'user@server-ip'"
and check to make sure that only the key(s) you wanted were added.
```

Jeśli zamiast tego otrzymasz komunikat o błędzie, nadal możesz dodawać klucze publiczne ręcznie, wykonując kroki opisane poniżej.

> [!primary]
>
> Ze względów bezpieczeństwa i dobrych praktyk para kluczy nie powinna być używana przez kilku użytkowników. Ponieważ każdy użytkownik w systemach GNU/Linux ma swój własny plik `authorized_keys` w `~/.ssh/`, możesz użyć komendy `ssh-copy-id` jak pokazano powyżej i dostosować `KeyFileName` i `user` po [utworzeniu pary kluczy](/pages/public_cloud/compute/creating-ssh-keys-pci#create-ssh-key).
>

#### Dodawanie kluczy publicznych do instancji ręcznie

[Zaloguj się do Twojej instancji](/pages/public_cloud/compute/public-cloud-first-steps#connect-instance) i otwórz plik `authorized_keys` w folderze osobistym nowego użytkownika za pomocą wybranego edytora tekstu (w tym przykładzie użyto `nano`):

```bash
sudo nano /home/user2/.ssh/authorized_keys
```

Wklej **ciąg klucza publicznego** do tego pliku. Zapisz plik i zamknij edytor.

Uruchom ponownie instancję (`sudo reboot`) lub uruchom ponownie usługę OpenSSH tylko za pomocą jednego z następujących poleceń (odpowiednie polecenie może się różnić w zależności od Twojego systemu operacyjnego):

```bash
sudo systemctl restart ssh
```

```bash
sudo systemctl restart sshd
```

Nowy użytkownik może teraz zalogować się do instancji z urządzenia, na którym jest przechowywany odpowiedni prywatny klucz SSH:

```bash
ssh username@IP_ADDRESS
```

Przykład:

```bash
ssh user2@203.0.113.102
```

Więcej informacji na temat używania kluczy SSH z instancjami Public Cloud znajdziesz w [przewodniku dotyczącym kluczy SSH](/pages/public_cloud/compute/creating-ssh-keys-pci).

## Sprawdź również

[Jak tworzyć instancje Public Cloud](/pages/public_cloud/compute/public-cloud-first-steps)

[Jak zastąpić parę kluczy SSH w instancji Public Cloud trybem rescue](/pages/public_cloud/compute/replacing_lost_ssh_key)

Dołącz do [grona naszych użytkowników](/links/community).