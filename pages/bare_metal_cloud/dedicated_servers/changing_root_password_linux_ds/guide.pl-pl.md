---
title: "Konfigurowanie kont użytkowników i dostępu root na serwerze"
excerpt: "Dowiedz się, jak rozpocząć zarządzanie kontami użytkowników w systemie operacyjnym GNU/Linux"
updated: 2024-02-19
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk "Zgłoś propozycję modyfikacji” na tej stronie.
>

## Wprowadzenie

Serwer dedykowany lub serwer VPS od OVHcloud zaprasza do korzystania z "**dostęp root**". Mówiąc najprościej, oznacza to, że jesteś administratorem systemu i masz najwyższy poziom uprawnień.

Nawet jeśli serwer nie jest używany do celów, które wymagają administrowania prawdziwymi użytkownikami, zarządzanie kontami **użytkownicy** jest tematem związanym z bezpieczeństwem, którego nie należy lekceważyć. Niniejszy przewodnik zawiera podstawowe wskazówki dotyczące następujących tematów:

- Jak skonfigurować konta użytkowników systemu z różnymi poziomami uprawnień
- Dobre praktyki zarządzania dostępem do serwera i wykonywania poleceń z podwyższonym uprawnieniem


## Wymagania początkowe

- [Serwer dedykowany](https://www.ovhcloud.com/pl/bare-metal/) lub [VPS](https://www.ovhcloud.com/pl/vps/) z systemem operacyjnym Linux na koncie OVHcloud
- Posiadanie danych do logowania otrzymanych w e-mailu po zakończonej instalacji.

## W praktyce

Poniższe przykłady sugerują, że połączenie z serwerem nastąpiło przez SSH.<br>
Szczegółowe instrukcje na ten temat można znaleźć w przewodniku "[Pierwsze kroki z SSH](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction)".

Sprawdź również nasze przewodniki:

- Dla [serwera dedykowanego](/pages/bare_metal_cloud/dedicated_servers/getting-started-with-dedicated-server)
- Dla [serwera dedykowanego z gamy **Eco**](/pages/bare_metal_cloud/dedicated_servers/getting-started-with-dedicated-server-eco)
- Dla serwera [VPS](/pages/bare_metal_cloud/virtual_private_servers/starting_with_a_vps)

> [!warning]
> OVHcloud udostępnia różnorodne usługi, jednak to Ty odpowiadasz za ich konfigurację i zarządzanie nimi. Ponosisz więc odpowiedzialność za ich prawidłowe funkcjonowanie.
>
> Niniejszy przewodnik ułatwi Ci realizację bieżących zadań. Niemniej jednak, w przypadku trudności lub wątpliwości związanych z administrowaniem usługami, korzystaniem z nich lub ich wdrażaniem na serwerze, zalecamy skontaktowanie się z [wyspecjalizowanym dostawcą](https://partner.ovhcloud.com/pl/directory/) lub [naszą społecznością](https://community.ovh.com/en/).
>

> [!primary]
>
> Instrukcje zawarte w tym przewodniku opierają się na systemie operacyjnym Debian/Ubuntu i nie są wyczerpujące. Poniższe przykłady mają stanowić punkt wyjścia i pomóc uniknąć luk w zabezpieczeniach, które można łatwo wykorzystać. Dzięki podstawowej wiedzy na temat zarządzania kontami użytkowników i powiązanych dobrych praktyk możesz pójść o krok dalej z sekcjami, które są najbardziej odpowiednie do Twojego przypadku.
>
> W przypadku każdego używanego polecenia zalecamy zapoznanie się ze **stronami podręcznika systemowego**. Możesz to zrobić w wierszu poleceń, wprowadzając `man`, a następnie nazwę polecenia, funkcji lub pliku systemowego.
>

### Podsumowanie

- [Zarządzanie kontami użytkowników](#accounts)
    - [Tworzenie nieuprzywilejowanego konta użytkownika](#unprivileged)
    - [Tworzenie konta użytkownika z uprawnieniami root](#privileged)
    - [Wykonywanie poleceń jako administrator ("sudo")](#sudo)
    - [Wyłączenie konta użytkownika](#disable)
    - [Aktywacja konta użytkownika](#enable)
    - [Usuń konto użytkownika](#delete)
    - [Zmiana konta użytkownika](#switch)
    - [Przełącz na konto "root" ("root shell")](#rootshell)
- [Aktywacja logowania użytkownika "root"](#enableroot)
    - [Aktywuj konto "root"](#rootstep1)
    - [Edytuj plik "sshd_config"](#rootstep2)
    - [Restarting the SSH service](#rootstep3)


<a name="accounts"></a>

### Zarządzanie kontami użytkowników

Należy pamiętać, że polityki bezpieczeństwa serwerów mogą być dostosowywane do różnych zastosowań i środowisk użytkowników. Opisane poniżej etapy oferują podstawowe wyjaśnienia dotyczące zarządzania kontami użytkowników z naciskiem na wygodę i bezpieczeństwo, nie są one uniwersalne.

Po ponownej instalacji serwera (z szablonem OVHcloud) rozpoczniesz instalację w następujących warunkach:

- Konto użytkownika z wysokimi uprawnieniami jest tworzone i nazwane według systemu operacyjnego, na przykład "ubuntu", "rocky", itp.
- Otrzymałeś hasło początkowe do tego konta e-mailem.
- Możesz użyć klienta SSH do zalogowania się na serwerze za pomocą tych danych.

Wiersz zamówienia po zalogowaniu różni się w zależności od typu usługi oraz zainstalowanej dystrybucji. Na przykład: 

```text
ubuntu@ns9356771:~$
```

Należy pamiętać, że poniższe przykłady wierszy poleceń będą nadal używać "ubuntu" w celu odniesienia się do wstępnie skonfigurowanego parametru `user account`.

Możesz sprawdzić, czy to konto zostało już dodane do `sudo group` w danych wyjściowych tego polecenia:

```bash
id
```

```text
27(sudo)
```

Możesz również wpisać `groups`, aby zobaczyć tylko grupy, których członkiem jest bieżące konto użytkownika.

Oznacza to, że użytkownik, z którym jesteś aktualnie zalogowany, może wykonać wszystkie polecenia, poprzedzając je poleceniem `sudo` (`root privileges`). Więcej szczegółów znajdziesz w [odpowiedniej podczęści przewodnika, poniżej](#sudo).

> [!primary]
> 
> **Definicja terminów**
> 
> Do celów tego przewodnika mają zastosowanie następujące definicje:
> 
> - `administrator`: osoba upoważniona do wykonywania wszystkich poleceń na serwerze (administrator serwera).
> - `sudo user`: konto użytkownika używane przez administratora. To konto jest członkiem `sudo group`. Inne zasoby wiedzy i tutoriale mogą nadać takiemu użytkownikowi inną etykietę, na przykład `sudoer`, `superuser`, `root user`, `admin`, itp.
> - `sudo group`: `user group` z uprawnieniami niezbędnymi do wykonywania wszystkich poleceń na serwerze (`root privileges`, którego szczegóły są zdefiniowane przez politykę bezpieczeństwa systemu operacyjnego`).
> - `user group` / `group`: jednostka techniczna oddzielająca `user account` dla zarządzania bezpieczeństwem.
> - `root` / `root user` / `root account`: Konto użytkownika z `root prileges` istniejącym domyślnie w systemach GNU/Linux i używanym do określonych celów.
>
> Aby poznać szczegóły i ustawienia, które dotyczą Twojego systemu, możesz zacząć od stron `man` dla `sudo` i `sudoers`.
>

<a name="unprivileged"></a>

### Utworzenie nieuprzywilejowanego konta użytkownika

Nawet jeśli nie musisz dawać innym osobom dostępu do Twojego serwera, utworzenie konta użytkownika bez specjalnych uprawnień (nazywanego również `normal user` lub `regular user`) może być przydatne ze względów bezpieczeństwa. Na przykład, nie ma ryzyka przypadkowego uszkodzenia systemu przez usunięcie lub modyfikację plików konfiguracyjnych serwera podczas wykonywania poleceń lub procesów z konta użytkownika bez wysokich uprawnień.

Innym przykładem dobrej praktyki jest utworzenie konta użytkownika dedykowanego dla aplikacji hostowanej na Twoim serwerze. Nawet jeśli to konto użytkownika zostanie naruszone przez tę aplikację, brak wysokich uprawnień uniemożliwi wystąpienie większych szkód.

Utwórz nowe konto użytkownika (zastąp `username` rzeczywistą nazwą konta użytkownika, na przykład nazwą aplikacji):

```bash
sudo adduser username
```

Musisz podać hasło dla nowego konta. Następnie zostaniesz poproszony o wprowadzenie szczegółów nowego użytkownika, co jest opcjonalne.

```text
New password: 
Retype new password:
passwd: password updated successfully
```

Uwaga: W dystrybucji GNU/Linux **wiersz hasła nie wyświetla wpisów klawiaturowych**.

- Odpowiednie strony `man`: `adduser`, `useradd`

<a name="privileged"></a>

### Tworzenie konta użytkownika z uprawnieniami root

W tej sekcji zostaje utworzone nowe konto użytkownika dla `administrator`, a Serwer uzyskuje wysokie uprawnienia (`root privileges`).

Utwórz nowe konto użytkownika (zastąp `username` rzeczywistą nazwą konta użytkownika):

```bash
sudo adduser username
```

Dodaj nowe konto użytkownika do `sudo group`:

```bash
sudo usermod -aG sudo username
```

Możesz sprawdzić przynależność do `group` za pomocą następującego polecenia: 

```bash
groups username
```

Przykład:

```bash
groups ubuntu
```

```text
ubuntu sudo users
```

Nowe konto użytkownika jest teraz `sudo user` i może wykonywać wszystkie polecenia.

Jest on domyślnie skonfigurowany dla `sudo group`:

```text
# Allow members of group sudo to execute any command
%sudo   ALL=(ALL:ALL) ALL
```

Konfiguracje te można znaleźć odpowiednio w `/etc/sudoers` i katalogu `/etc/sudoers.d`.


> [!primary]
>
> Dobre administrowanie użytkownikami, w tym metody uwierzytelniania użytkowników, zależy od środowiska pracy i innych czynników. Jeśli chcesz zarządzać kontami użytkowników i grupami na serwerze, skorzystaj z oficjalnej dokumentacji systemu operacyjnego oraz z odpowiednich baz wiedzy.
>

<a name="sudo"></a>

### Wykonywanie poleceń jako administrator ("sudo")

Każda akcja wymagająca wysokich uprawnień zostanie odrzucona, chyba że zostanie użyte polecenie `sudo`.

Na przykład, aby zmienić hasło dla **dowolnego konta użytkownika**, wpisz `sudo passwd`, a następnie `username`:

```bash
sudo passwd ubuntu
```

```text
New password: 
Retype new password:
passwd: password updated successfully
```

System często pyta Cię o hasło do `sudo user`, do którego jesteś zalogowany podczas wykonywania `sudo`.

- Odpowiednie strony `man`: `sudo_root`, `sudo`, `sudoers`

<a name="disable"></a>

#### Wyłączenie konta użytkownika

Aby wyłączyć `user account`, wprowadź:

```bash
sudo passwd -dl username
```

Spowoduje to zablokowanie konta (uniemożliwiając zalogowanie się przy użyciu hasła) i ustawienie go jako "*passwordless*", co spowoduje dezaktywację konta.

<a name="enable"></a>

### Aktywacja konta użytkownika

Aby ponownie włączyć `user account` zablokowany bez hasła, użyj następujących poleceń (zastąp `initialpassword` hasłem tymczasowym):

```bash
sudo usermod username -p initialpassword
```

```bash
sudo passwd -u username
```

Ze względów bezpieczeństwa zmień ponownie hasło początkowe tego użytkownika:

```bash
sudo passwd username
```

- Odpowiednie strony `man`: `passwd`, `usermod`

<a name="delete"></a>

### Usunięcie konta użytkownika

Prosta metoda usunięcia konta i jego plików to komenda:

```bash
sudo userdel -r -f username
```

- Odpowiednie strony `man`: `userdel`, `deluser`

<a name="switch"></a>

### Zmiana konta użytkownika

Jako `sudo user` możesz przełączyć się na dowolne inne konto użytkownika (bez konieczności znania hasła):

```bash
sudo su username
```

W wierszu zamówienia pojawi się następująca zmiana:

```text
ubuntu@ns9356771:~$ sudo su username
username@ns9356771:/home/ubuntu$
```

Aby powrócić do poprzedniego konta użytkownika, przełącz ponownie lub użyj `exit`.

<a name="rootshell"></a>

#### Przełącz na konto "root" ("root shell")

Po ponownej instalacji Twojego serwera (z szablonem OVHcloud), możesz użyć `root account` (konto użytkownika o nazwie `root`), ale nie masz hasła.

Ze względów bezpieczeństwa `root account` należy używać tylko wtedy, gdy jest to konieczne, a **jest dostępne tylko z poziomu samego systemu**.

Możesz przejść do `root account` za pomocą polecenia:

```bash
sudo -s
```

W wierszu zamówienia pojawi się następująca zmiana:

```text
ubuntu@ns9356771:~$ sudo -s
root@ns9356771:/home/ubuntu#
```

Znak `#` na końcu wiersza polecenia wskazuje `root shell`, w przeciwieństwie do wiersza kończącego się znakiem `$`.

Aby powrócić do poprzedniego konta użytkownika, użyj następującego polecenia:

```bash
exit
```

**Wykonywanie poleceń jako `root user` nie jest zazwyczaj konieczne, a nawet może przynieść odwrotny skutek.**

Fałszywie rozpowszechnionym przekonaniem jest założenie, że musisz użyć prawdziwego `root account`, aby wykonać polecenia wymagające wysokich uprawnień (`root privileges`) w systemie.

Jednak w konfiguracji domyślnej w polityce `/etc/sudoers` poziom uprawnień dla `root` jest taki sam, jak dla `sudo group`:

```text
# Allow members of group sudo to execute any command
%sudo   ALL=(ALL:ALL) ALL
```

```text
# User privilege specification
root    ALL=(ALL:ALL) ALL
```

> [!primary]
>
> Należy pamiętać, że samouczki i dokumentacja użytkownika nie zawsze są zgodne ze spójną terminologią. Jeśli nie sprawdzisz, czy do wykonania danej czynności konieczne jest użycie rzeczywistego `root account`, sprawdź, czy zamiast niego można wykonać polecenia `sudo`. Posługiwanie się plikami i ustawieniami jako `root` może mieć nieoczekiwane konsekwencje dla systemu.
>

<a name="enableroot"></a>

### Aktywacja logowania użytkownika "root"

> [!warning]
>
> Zezwolenie `root account` na połączenie przez SSH jest traktowane jako luka w zabezpieczeniach i nie jest zalecane.
>
> Wykonaj najpierw kroki niezbędne do zabezpieczenia systemu za pomocą naszych przewodników: 
>
> - [Zabezpieczanie serwera dedykowanego](/pages/bare_metal_cloud/dedicated_servers/securing-a-dedicated-server)
> - [Zabezpiecz serwer VPS](/pages/bare_metal_cloud/virtual_private_servers/secure_your_vps)
> 

<a name="rootstep1"></a>

### Etap 1: aktywacja konta "root"

Wprowadź następujące polecenie, a następnie podaj hasło w wierszu poleceń:

```bash
sudo passwd root
```

Możesz anulować tę operację, wprowadzając:

```bash
sudo passwd -d root
```

<a name="rootstep2"></a>

### Etap 2: edycja pliku "sshd_config"

Użyj edytora tekstu takiego jak `vim` lub `nano`, aby edytować ten plik konfiguracyjny:

```bash
sudo nano /etc/ssh/sshd_config
```

Możesz odnaleźć następujący wiersz:

```text
#PermitRootLogin prohibit-password
```

Znak początkowy `#` przekształca cały wiersz w ciąg "komentarza", a zatem jest ignorowany przez dowolną aplikację odczytującą plik.

Oznacza to, że jeśli nie ma innej instrukcji, logowanie za pomocą konta użytkownika `root` jest aktywowane **nieaktywne**.

Dodaj następujący wiersz:

```text
PermitRootLogin yes
```

Umożliwi to zalogowanie się do serwera za pomocą `root` i odpowiadającego mu hasła.

Zapisz plik i zamknij edytor. Aby odwołać ten typ dostępu, powtórz kroki i usuń wiersz.

<a name="rootstep3"></a>

#### Etap 3: uruchomienie usługi SSH

Uruchom ponownie usługę SSH za pomocą jednego z następujących poleceń:

```bash
sudo systemctl restart ssh
```

```bash
sudo systemctl restart sshd
```

Powinno to wystarczyć do zastosowania zmian. W przeciwnym razie uruchom ponownie serwer z wiersza poleceń (`sudo reboot`).

## Sprawdź również

[Zabezpieczanie serwera dedykowanego](/pages/bare_metal_cloud/dedicated_servers/securing-a-dedicated-server)

[Zabezpiecz serwer VPS](/pages/bare_metal_cloud/virtual_private_servers/secure_your_vps)

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.