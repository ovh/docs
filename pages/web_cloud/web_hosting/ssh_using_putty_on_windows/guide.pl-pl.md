---
title: "Tutorial - Jak używać PuTTY do połączeń SSH i uwierzytelniania"
excerpt: "Dowiedz się, jak uzyskać dostęp do serwera cloud lub hostingu i zarządzać kluczami SSH za pomocą klienta SSH PuTTY"
updated: 2024-11-11
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

[PuTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html) to open source’owy program kliencki SSH z graficznym interfejsem użytkownika. Został on opracowany dla systemu Windows, ale jest również dostępny dla innych systemów operacyjnych i zawiera przydatne funkcje, takie jak zarządzanie kluczami SSH.

**Ten tutorial wyjaśnia, jak używać programu PuTTY do zabezpieczania połączeń z usługą OVHcloud za pomocą protokołu SSH.**

## Wymagania początkowe

- [PuTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html) zainstalowany na lokalnym sprzęcie
- Podstawowa znajomość [protokołu SSH i jego zastosowania](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction)
- Dostęp do [Panelu klienta OVHcloud](/links/manager)

> [!warning]
> OVHcloud zapewnia usługi, ale to użytkownik ponosi odpowiedzialność za zarządzanie nimi oraz ich konfigurację. Tutorial ten wyjaśnia, jak korzystać z rozwiązań OVHcloud przy użyciu narzędzi zewnętrznych. Może być konieczne dostosowanie niektórych instrukcji specyficznych dla systemu operacyjnego lokalnego komputera lub serwera.
>
> W przypadku trudności zalecamy skontaktowanie się z [wyspecjalizowanym dostawcą](/links/partner) lub [naszą społecznością](/links/community).
>

## W praktyce

### Prezentacja zawartości

- [Instalacja PuTTY](#installation)
- [Połączenia SSH z nazwą użytkownika i hasłem](#sshconnect1)
    - [Hosting](#webhosting)
    - [Serwer dedykowany lub VPS](#cloudserver)
- [Połączenia SSH z nazwą użytkownika i uwierzytelnianiem za pomocą klucza SSH](#sshconnect2)
    - [Tworzenie kluczy SSH za pomocą funkcji PuTTY](#puttygen)
    - [Transfer publicznych kluczy SSH do Twojego serwera](#transferkeys)
    - [Logowanie do serwera](#puttykeys)
    - [Zarządzanie prywatnymi kluczami SSH na urządzeniu lokalnym (PuTTY authentication agent)](#pageant)
- [Użycie sesji połączenia PuTTY](#sessions)
- [Przykład zastosowania: Jak używać narzędzi PuTTY do konfiguracji bezpiecznych połączeń z serwerami OVHcloud (VPS, serwer dedykowany, instancja Public Cloud)](#example)

<a name="installation"></a>

### Instalacja PuTTY

Pobierz najnowszą wersję klienta PuTTY z [oficjalnej strony](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html) i zainstaluj ją na swoim systemie (lub rozpakuj pliki wykonywalne). Przeniesione wersje PuTTY mogą być również dostępne za pośrednictwem managera pakietów lub [Homebrew](https://brew.sh/).

Zalecany standardowy pakiet instalacyjny zawiera kilka aplikacji, które zwiększają funkcjonalność PuTTY, na przykład w przypadku transferu plików (`psftp`, `pscp`, które nie są uwzględnione w tym tutorialu) oraz zarządzania kluczami SSH (`PuTTYgen`, `Pageant`, wymagane dla pasujących części poniżej).

> [!primary]
> Poniższe instrukcje są oparte na systemie operacyjnym Windows. Funkcje oprogramowania PuTTY muszą być podobne we wszystkich systemach operacyjnych. Jeśli jednak nie używasz PuTTY na komputerze z systemem Windows, może być konieczne zapoznanie się z dokumentacją systemu operacyjnego lub [oficjalnym FAQ](https://www.chiark.greenend.org.uk/~sgtatham/putty/faq.html) i [dokumentacją](https://www.chiark.greenend.org.uk/~sgtatham/putty/docs.html) firmy PuTTY.
>

> [!success]
> Możesz mieć kilka instancji PuTTY i jego narzędzi pomocniczych otwartych jednocześnie. Możesz na przykład otworzyć okno, aby śledzić kroki samouczka, i drugie, aby przetestować połączenia.
>

<a name="sshconnect1"></a>

## Połączenia SSH z PuTTY - Nazwa użytkownika i hasło

W tej sekcji wyjaśniamy, jak ustanowić pierwsze połączenie SSH z następującymi usługami OVHcloud:

- [Przestrzeń dyskowa FTP hostingu kompatybilnego z SSH](/links/web/hosting-compare)
- [Serwer dedykowany](/links/bare-metal/bare-metal)
- [VPS](/links/bare-metal/vps)

<a name="webhosting"></a>

### Hosting WWW

Będzie Ci potrzebna nazwa klastra Twojego hostingu WWW znajdująca się w [Panelu klienta OVHcloud](/links/manager) oraz nazwa użytkownika FTP i hasło. Więcej informacji na temat tej metody dostępu można znaleźć w [przewodniku](/pages/web_cloud/web_hosting/ftp_connection).

/// details | Logowanie do hostingu www

Otwórz PuTTY i wpisz dane logowania FTP Twojego hostingu w przewidzianych do tego polach.

- `Host Name (or IP address)`: **ftp_username@hosting_cluster_name** (przykład: **yourlogin@ssh.cluster042.hosting.ovh.net**)
- `Port`: 22

![putty](/pages/assets/screens/other/web-tools/putty/putty1.png){.thumbnail}

Kliknij na `Open`{.action}.

Przy pierwszym logowaniu pojawi się komunikat "PuTTY Security Alert" ostrzegający o możliwych zagrożeniach. Kiedy logujesz się do zaufanego hosta (np. przestrzeni dyskowej FTP hostingu), zazwyczaj nie jest to żenujące.  
Kliknij przycisk `Accept`{.action}, aby kontynuować. Jeśli wybierzesz opcję `Connect Once`{.action}, ślad hostingu nie zostanie zapisany w pamięci podręcznej, a przy następnym logowaniu pojawi się okno alertu. Więcej szczegółów znajdziesz w naszym [przewodniku wprowadzającym do SSH](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction).

Otworzy się okno wiersza polecenia (terminal PuTTY), w którym pojawi się monit o wprowadzenie hasła logowania.

Wprowadź hasło [przypisane do tego użytkownika](/pages/web_cloud/web_hosting/ftp_connection). Możesz wkleić ciąg hasła w tym oknie prawym przyciskiem myszy.

Uwaga: **monit o hasło nie będzie wyświetlał wpisów klawiaturowych** w terminalu PuTTY. Przykład wyjścia:

```console
Using username "yourlogin".
yourlogin@ssh.cluster042.hosting.ovh.net's password:
```

```console
Welcome to OVH
yourlogin@ssh.cluster042.hosting.ovh.net (php/7.3/production/stable) ~ $ 
```

Zapoznaj się z naszym przewodnikiem "[Dostęp SSH do hostingu WWW OVHcloud](/pages/web_cloud/web_hosting/ssh_on_webhosting)", aby poznać możliwe działania dotyczące przestrzeni dyskowej FTP Twojego hostingu.

Program PuTTY może zapisać poświadczenia i ustawienia połączenia SSH jako "sesję". Pozwala to na łączenie się ze znanymi hostami lub urządzeniami sieci lokalnej bez wprowadzania za każdym razem ich odpowiednich informacji. Dowiedz się, jak korzystać z sesji PuTTY w [poniższej sekcji](#sessions).

///

<a name="cloudserver"></a>

### Serwer dedykowany lub VPS

Będzie Ci potrzebny adres IP Twojego serwera, który znajdziesz w [Panelu klienta OVHcloud](/links/manager) oraz nazwa konta użytkownika, którego chcesz użyć podczas tej sesji logowania. Zapoznaj się z naszymi przewodnikami "Pierwsze kroki", jeśli chcesz otrzymać więcej informacji:

- [Serwer dedykowany](/pages/bare_metal_cloud/dedicated_servers/getting-started-with-dedicated-server)
- [Serwer dedykowany z gamy **Eco**](/pages/bare_metal_cloud/dedicated_servers/getting-started-with-dedicated-server-eco)
- [VPS](/pages/bare_metal_cloud/virtual_private_servers/starting_with_a_vps)

/// details | Jak się zalogować na zdalnym hoście

Otwórz PuTTY i wpisz dane logowania w odpowiednich polach.

- `Host Name (or IP address)`: **username@IPv4_server** (przykład: **ubuntu@203.0.113.101**)
- `Port`: 22 (chyba że zmieniłeś numer portu SSH Twojego serwera)

![putty](/pages/assets/screens/other/web-tools/putty/putty2.png){.thumbnail}

Kliknij przycisk `Open`{.action}.

Przy pierwszym logowaniu pojawi się okno "PuTTY Security Alert" informujące o możliwych zagrożeniach. Kiedy logujesz się do zaufanego hosta (np. Twojego własnego bezpiecznego serwera), zazwyczaj nie stanowi to problemu.  
Kliknij przycisk `Accept`{.action}, aby kontynuować. Jeśli wybierzesz opcję `Connect Once`{.action}, ślad serwera nie zostanie zapisany w pamięci cache i alert pojawi się ponownie przy następnym połączeniu. Więcej szczegółów znajdziesz w naszym [przewodniku wprowadzającym do SSH](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction).

Otworzy się okno wiersza polecenia (terminal PuTTY), w którym pojawi się monit o wprowadzenie hasła do konta użytkownika. Możesz wkleić ciąg hasła w tym oknie prawym przyciskiem myszy.

Uwaga: **monit o hasło nie będzie wyświetlał wpisów klawiaturowych** w terminalu PuTTY. Przykład wyjścia:

```console
Using username "ubuntu".
ubuntu@203.0.113.101's password:
```

```console
Welcome to Ubuntu 24.04.1 LTS (GNU/Linux 6.8.0-47-generic x86_64)
```

Aby dowiedzieć się więcej o połączeniach SSH, zapoznaj się z naszym przewodnikiem [Wprowadzenie do SSH](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction).

Program PuTTY może zapisać ustawienia połączenia SSH jako "sesję". Dzięki temu możesz łączyć się ze znanymi hostami zdalnymi lub urządzeniami sieciowymi bez konieczności każdorazowego wprowadzania odpowiednich informacji. Dowiedz się, jak korzystać ze **PuTTY sessions** w [odpowiedniej sekcji tego tutoriala](#sessions).

///

<a name="sshconnect2"></a>

### Połączenia SSH z PuTTY - Nazwa użytkownika i klucz uwierzytelniania (pliki kluczy SSH)

Ta część tutoriala wyjaśnia, jak korzystać z protokołu SSH ze **uwierzytelnianiem parą kluczy** za pomocą PuTTY, aby połączyć się z następującymi usługami OVHcloud:

- [Instancja Public Cloud](/links/public-cloud/public-cloud)
- [Serwer dedykowany](/links/bare-metal/bare-metal)
- [VPS](/links/bare-metal/vps)

Będzie Ci potrzebny adres IP Twojego serwera, który znajdziesz w [Panelu klienta OVHcloud](/links/manager) oraz nazwa konta użytkownika, którego chcesz użyć podczas tej sesji logowania. Zapoznaj się z naszymi przewodnikami "Pierwsze kroki", jeśli chcesz otrzymać więcej informacji:

- [Instancja Public Cloud](/pages/public_cloud/compute/public-cloud-first-steps)
- [Serwer dedykowany](/pages/bare_metal_cloud/dedicated_servers/getting-started-with-dedicated-server)
- [Serwer dedykowany z gamy **Eco**](/pages/bare_metal_cloud/dedicated_servers/getting-started-with-dedicated-server-eco)
- [VPS](/pages/bare_metal_cloud/virtual_private_servers/starting_with_a_vps)


> [!primary]
>
> PuTTY przechowuje pliki kluczy w określonym formacie, który sprawia, że są one niezgodne z plikami kluczy SSH utworzonymi w ramach klienta **OpenSSH**. Jeśli chcesz użyć klucza **private key** wcześniej utworzonego z klientem SSH za pomocą wiersza poleceń (na przykład dla [serwera dedykowanego](/pages/bare_metal_cloud/dedicated_servers/creating-ssh-keys-dedicated) lub [instancji Public Cloud](/pages/public_cloud/compute/creating-ssh-keys-pci)), najpierw musisz [przekonwertować na format PuTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/faq.html#faq-ssh2-keyfmt).
>

<a name="puttygen"></a>

### Twórz klucze SSH (PuTTY key generator)

Ten krok wymaga dodatkowego narzędzia **PuTTY key generator** (PuTTYgen).

/// details | Jak tworzyć klucze SSH za pomocą PuTTYgen

#### Krok 1: Utwórz parę kluczy

Otwórz aplikację PuTTYgen i wybierz algorytm szyfrowania. W tym przykładzie wykorzystano **RSA**. Wprowadź "4096" w polu `Number of bits in a generated key:` na dole.

![putty key](/pages/assets/screens/other/web-tools/putty/puttygen1.png){.thumbnail}

Kliknij przycisk `Generate`{.action}.

![putty key](/pages/assets/screens/other/web-tools/putty/puttygen2.png){.thumbnail}

Pojawi się pasek postępu. Przeciągnij kursor myszy na obszar pod paskiem postępu, aż system PuTTYgen będzie dysponował wystarczającą ilością losowych danych, aby rozpocząć generowanie klucza.

![putty key](/pages/assets/screens/other/web-tools/putty/puttygen.gif){.thumbnail}

Dysponujesz teraz **parą kluczy** składającą się z dwóch elementów:

- **Public key**: ciąg klucza, który będzie przechowywany na hostach zdalnych, z którymi chcesz się połączyć.
- **Private key**: ciąg klucza pozostający na urządzeniu lokalnym, z którego łączysz się ze zdalnym(ymi) hostem(ami).

![putty key](/pages/assets/screens/other/web-tools/putty/puttygen3.png){.thumbnail}

Opcjonalnie można zmienić pole `Comment` z własnym opisem. Podczas używania klucza zostanie on wyświetlony przez narzędzia PuTTY.

#### Etap 2: Zapisz klucz prywatny

Wprowadź hasło, aby chronić plik klucza prywatnego w polach `Key passphrase` i `Confirm`. Najlepszym rozwiązaniem jest użycie menedżera haseł do tworzenia i przechowywania hasła składającego się z kilku słów (hasło).

![putty key](/pages/assets/screens/other/web-tools/putty/puttygen4.png){.thumbnail}

Kliknij przycisk `Save private key`{.action}. Wybierz folder dla plików kluczy lub utwórz nowy folder, np. o nazwie `putty_key_files`.  
Wprowadź nazwę dla pliku i zapisz go. Powinieneś teraz mieć w swoim katalogu nowy plik **private key** z rozszerzeniem `ppk` (*PuTTY private key*).

![putty key](/pages/assets/screens/other/web-tools/putty/puttygen5.png){.thumbnail}

> [!warning]
>
> Dostęp do zdalnych serwerów jest równie bezpieczny jak urządzenie klienckie przechowujące klucz prywatny. W związku z tym niezwykle ważna jest ochrona urządzenia i zawartych na nim kluczowych plików przed nieuprawnionym dostępem.
>
> Dla większej wygody przechowuj tajne hasła w menedżerze haseł na swoim urządzeniu, takim jak rozwiązanie open source **KeePass**, i użyj narzędzia [Pageant](#pageant) do obsługi połączeń opartych na kluczach.
>

Przycisk `Save public key`{.action} w interfejsie PuTTYgen przekonwertuje ciąg **public key** na format "SSH-2 standard format", a następnie utworzy plik zawierający ten ciąg. Jednak ciągi kluczy w tym formacie nie są odpowiednie dla tego tutoriala.

##### Krok 3: Przygotowanie klucza publicznego

Następny krok to przechowywanie **klucza publicznego** na zdalnym hoście, z którym chcesz się połączyć. Format ciągu klucza wyświetlany w oknie PuTTYgen w sekcji `Public key for pasting into OpenSSH authorized_keys file` jest zgodny z OpenSSH. Będziesz potrzebować dokładnego ciągu klucza w jednym wierszu.

> [!primary]
> Klucz publiczny nie musi być przechowywany jako plik, ponieważ nadal można go odzyskać z pliku **private key**. W tym celu otwórz PuTTYgen i kliknij przycisk `Load`{.action}. Wybierz plik klucza `ppk` i wprowadź hasło, aby go otworzyć.
>
> Możesz również skopiować ciąg klucza publicznego i wkleić go do zwykłego pliku tekstowego (bez przerywania łańcucha przez podziały wierszy).
>

Aby kontynuować pracę z [następnym krokiem](#transferkeys), podświetl **cały ciąg klucza** i skopiuj go.

![putty key](/pages/assets/screens/other/web-tools/putty/puttygen6.png){.thumbnail}

///

<a name="transferkeys"></a>

### Przenoszenie publicznych kluczy SSH do Twojego serwera

Działania na tym etapie zależą od typu używanej usługi oraz od tego, czy zostanie zainstalowany nowy system operacyjny, czy klucz zostanie dodany do używanego systemu.

/// details | Jak dodać publiczny klucz SSH podczas instalacji lub reinstalacji systemu operacyjnego (Panelu klienta OVHcloud)

Kliknij w zakładkę Twojej usługi:

> [!tabs]
> **Instancja Public Cloud**
>>
>> Podświetl i skopiuj **cały ciąg klucza publicznego** [utworzony w poprzednim kroku](#puttygen) z okna PuTTYgen (jeśli to konieczne, otwórz odpowiedni **plik klucza prywatnego**). Następnie skorzystaj z niej w sposób opisany w odpowiedniej sekcji naszego [przewodnika dotyczącego tworzenia instancji Public Cloud w Panelu klienta OVHcloud](/pages/public_cloud/compute/public-cloud-first-steps).
>>
>>![putty key](/pages/assets/screens/other/web-tools/putty/puttygen6.png){.thumbnail}
>>
> **Serwer dedykowany**
>>
>> Podświetl i skopiuj **cały ciąg klucza publicznego** [utworzony w poprzednim kroku](#puttygen) z okna PuTTYgen (jeśli to konieczne, otwórz odpowiedni **plik klucza prywatnego**). Następnie wprowadź kod w odpowiednim polu podczas instalacji. Więcej informacji na ten temat znajdziesz w [Przewodniku uruchomienia serwera dedykowanego](/pages/bare_metal_cloud/dedicated_servers/getting-started-with-dedicated-server).
>>
>>![putty key](/pages/assets/screens/other/web-tools/putty/puttygen6.png){.thumbnail}
>>
> **VPS**
>>
>> Podświetl i skopiuj **cały ciąg klucza publicznego** [utworzony w poprzednim kroku](#puttygen) z okna PuTTYgen (jeśli to konieczne, otwórz odpowiedni **plik klucza prywatnego**). Następnie wprowadź kod w odpowiednim polu podczas instalacji. Więcej informacji na ten temat znajdziesz w [Przewodniku uruchomienia serwera VPS](/pages/bare_metal_cloud/virtual_private_servers/starting_with_a_vps).
>>
>>![putty key](/pages/assets/screens/other/web-tools/putty/puttygen6.png){.thumbnail}
>>


///

**Jak dodać publiczny klucz SSH do działającego systemu operacyjnego**

Wybierz rodzaj usługi:

/// details | Instancja Public Cloud

Podświetl i skopiuj **cały ciąg klucza publicznego** [utworzony w poprzednim kroku](#puttygen) z okna PuTTYgen (jeśli to konieczne, otwórz odpowiedni **plik klucza prywatnego**). Następnie postępuj zgodnie z instrukcjami z odpowiedniego przewodnika:

- [Jak skonfigurować dodatkowe klucze SSH dla instancji](/pages/public_cloud/compute/configuring_additional_ssh_keys)
- [Jak zastąpić parę kluczy SSH w instancji Public Cloud](/pages/public_cloud/compute/replacing_lost_ssh_key)

![putty key](/pages/assets/screens/other/web-tools/putty/puttygen6.png){.thumbnail}

///


/// details | Serwer dedykowany lub VPS

[Zaloguj się do Twojego serwera](#cloudserver) przy użyciu odpowiedniego konta użytkownika. Utwórz folder `.ssh` (jeśli nie istnieje):

```bash
mkdir ~/.ssh
```

Aby zapisać klucz dla bieżącego użytkownika, otwórz (lub utwórz) plik `authorized_keys` w preferowanym edytorze tekstu (w tym przykładzie użyto `nano`):

```bash
nano ~/.ssh/authorized_keys
```

Podświetl i skopiuj **cały ciąg klucza publicznego** [utworzony w poprzednim kroku](#puttygen) z okna PuTTYgen (jeśli to konieczne, otwórz odpowiedni **plik klucza prywatnego**).

![putty key](/pages/assets/screens/other/web-tools/putty/puttygen6.png){.thumbnail}

Wklej **pełny ciąg klucza publicznego** do tego pliku. Upewnij się, że ciąg klucza jest ciągle nieprzerwany, bez podziałów wiersza.

![putty key](/pages/assets/screens/other/web-tools/putty/puttygen7.png){.thumbnail}

Zapisz plik i zamknij edytor. Zrestartuj serwer (`sudo reboot`) lub uruchom ponownie usługę OpenSSH tylko za pomocą jednego z następujących poleceń (odpowiednie polecenie może się różnić w zależności od Twojego systemu operacyjnego):

```bash
sudo systemctl restart ssh
```

```bash
sudo systemctl restart sshd
```

Wyjdź z bieżącej sesji PuTTY:


```bash
logout
```

Aby sprawdzić, czy klucz jest prawidłowo skonfigurowany, zaloguj się do serwera, wykonując [kroki opisane poniżej](#puttykeys).

///

<a name="puttykeys"></a>

### Logowanie do serwera

Aby połączyć się ze zdalnym hostem (instancja Public Cloud, serwer dedykowany lub VPS), musisz mieć [utworzyć parę kluczy](#puttygen) i [dodać ciąg klucza publicznego do Twojego serwera](#transferkeys).

| ![putty](/pages/assets/screens/other/web-tools/putty/putty3.png){.thumbnail} |
|---| 
| 1\. Otwórz PuTTY.<br> 2\. Rozwiń węzeł `SSH` pod `Connection` w drzewie `Category`.<br> 3\. Rozwiń węzeł `Auth`.<br> 4\. Kliknij `Credentials`, aby wyświetlić pasujące ustawienia.<br> 5\. Kliknij przycisk `Browse`{.action}.<br> 6\. Wybierz plik klucza prywatnego (`keyfile.ppk`) w folderze, w którym został zapisany. |

Wróć do `Session` w menu po lewej stronie. Wpisz dane logowania w odpowiednich polach.

![putty](/pages/assets/screens/other/web-tools/putty/putty2.png){.thumbnail}

- `Host Name (or IP address)`: **username@IPv4_server** (przykład: **ubuntu@203.0.113.101**)
- `Port`: 22 (chyba że zmieniłeś numer portu SSH Twojego serwera)

Kliknij przycisk `Open`{.action}. Terminal PuTTY wyświetli monit o podanie hasła do pliku klucza. Możesz wkleić ciąg hasła w tym oknie prawym przyciskiem myszy.

Uwaga: **monit o hasło nie będzie wyświetlał wpisów klawiaturowych** w terminalu PuTTY. Przykład wyjścia:

```console
Using username "ubuntu".
Authenticating with public key "rsa-key-example"
Passphrase for key "rsa-key-example":
```

```console
Welcome to Ubuntu 24.04.1 LTS (GNU/Linux 6.8.0-47-generic x86_64)
```

Aby zastosować bardziej praktyczne podejście, sprawdź, jak powiązać plik klucza (za pomocą Pageant) i [zapisać to połączenie](#sessions) w sekcjach poniżej.

<a name="pageant"></a>

### Zarządzanie kluczami SSH na urządzeniu lokalnym za pomocą agenta autoryzacji PuTTY (Pageant)

Jeśli postępujesz zgodnie z powyższymi instrukcjami, możesz uzyskać dostęp do zdalnego hosta za pomocą uwierzytelniania przy użyciu klucza. Mimo że samo logowanie nie wymaga hasła, program PuTTY zawsze zażąda hasła do odpowiedniego pliku klucza prywatnego.

![pageant](/pages/assets/screens/other/web-tools/putty/pterminal.png){.thumbnail}

Korzystanie z Pageant umożliwia szybsze połączenia na dwa sposoby:

- Nie musisz wybierać pliku klucza prywatnego dla każdego połączenia w programie PuTTY.
- Jeśli plik klucza prywatnego jest otwierany przez Pageant, hasło do pliku klucza prywatnego należy wprowadzić tylko raz.

Otwórz aplikację Pageant [na Twoim komputerze](#installation). Jeśli okno klucza Pager nie zostanie otwarte automatycznie, należy (dwukrotnie) kliknąć jego ikonę na pasku zadań (pasek stanu systemu lub *system tray* w systemie Windows).

![pageant](/pages/assets/screens/other/web-tools/putty/systray.png){.thumbnail}

Spowoduje to otwarcie **Pageant Key List**. Kliknij przycisk `Add Key`{.action} i wybierz plik klucza prywatnego (`keyfile.ppk`) w folderze, w którym go zapisałeś.

![pageant](/pages/assets/screens/other/web-tools/putty/pageant1.png){.thumbnail}

Wprowadź hasło dla tego pliku klucza. Ten klucz znajduje się teraz na liście i będzie używany przez program PuTTY, gdy Pageant jest uruchomiony.

![pageant](/pages/assets/screens/other/web-tools/putty/pageant2.png){.thumbnail}

Nawet jeśli zamkniesz to okno, program Pageant będzie nadal działał w tle. Działa on tak długo, jak ikona jest widoczna na pasku zadań.

Jeśli zapiszesz również połączenie jako sesję w programie PuTTY w sposób opisany w następnej sekcji, będziesz mógł za pomocą kilku kliknięć otworzyć zdalne połączenia.

<a name="sessionskeys"></a>

### Korzystanie z sesji połączenia PuTTY

PuTTY ma możliwość zapisywania ustawień dla różnych połączeń jako sesji, co pozwala na nawiązanie połączenia ze zdalnym hostem (hosting, serwer, instancja, urządzenie lokalne) szybciej.

Wybierz odpowiednią metodę połączenia:

/// details | Logowanie za pomocą nazwy użytkownika i hasła

Aby zapisać [sesja logowania opartego na haśle](#sshconnect1), wykonaj następujące czynności:

| ![sessions](/pages/assets/screens/other/web-tools/putty/sessions1.png){.thumbnail} |
|---| 
| 1\. Otwórz PuTTY.<br> 2\. Wprowadź dane logowania w polu `Host Name (or IP address)`: **username@IPv4_server** (przykład: **ubuntu@203.0.113.101**)<br> 3\. W razie potrzeby zmień numer portu SSH w polu `Port`.<br> 4\. Wprowadź nazwę tego połączenia w polu `Saved Sessions`.<br> 5\. Kliknij przycisk `Save`{.action}. |

Aby otworzyć poprzednio zapisane połączenie, wykonaj następujące czynności:

| ![sessions](/pages/assets/screens/other/web-tools/putty/sessions2.png){.thumbnail} |
|---| 
| 1\. Otwórz PuTTY.<br> 2\. Kliknij dwukrotnie wybraną sesję na liście poniżej `Saved Sessions` lub wybierz ją i kliknij przycisk `Open`{.action}. |

| ![sessions](/pages/assets/screens/other/web-tools/putty/sessions3.png){.thumbnail} |
|---|
| W oknie terminala PuTTY wpisz hasło użytkownika hosta zdalnego. |

///

<a name="sessionskeys"></a>

/// details | Logowanie za pomocą nazwy użytkownika i kluczy uwierzytelniania

Aby zapisać [sesja połączenia opartego na kluczach](#puttykeys), wykonaj następujące czynności:

| ![putty](/pages/assets/screens/other/web-tools/putty/sessions4.png){.thumbnail} |
|---| 
| 1\. Otwórz PuTTY.<br> 2\. Wprowadź dane logowania w polu `Host Name (or IP address)`: **username@IPv4_server** (przykład: **ubuntu@203.0.113.101**)<br> 3\. Jeśli tak, edytuj numer portu SSH w polu `Port`. |

| ![putty](/pages/assets/screens/other/web-tools/putty/putty3.png){.thumbnail} |
|---|
| 4\. Rozwiń węzeł `SSH` pod `Connection` w drzewie `Category`.<br> 5\. Rozwiń węzeł `Auth` w drzewie `Category`.<br> 6\. Kliknij `Credentials`, aby wyświetlić pasujące ustawienia.<br> 7\. Kliknij przycisk `Browse`{.action}.<br> 8\. Przejdź do folderu, w którym są przechowywane pliki kluczy prywatnych.<br> 9\. Otwórz odpowiedni plik klucza. |

| ![sessions](/pages/assets/screens/other/web-tools/putty/sessions5.png){.thumbnail} |
|---|
| 10\. Wróć do kategorii konfiguracji `Session` w menu po lewej stronie.<br> 11\. Wprowadź nazwę tego połączenia w polu `Saved Sessions`.<br> 12\. Kliknij przycisk `Save`{.action}. |

<a name="qconnect"></a>

Teraz możesz szybko otworzyć każde połączenie oparte na wcześniej zapisanym kluczu w oknie PuTTY lub Pageant:

| **PuTTY** | **Pageant** |
|---|---| 
| ![sessions](/pages/assets/screens/other/web-tools/putty/sessions2.png){.thumbnail}<br> 1\. Otwórz PuTTY.<br> 2\. Kliknij dwukrotnie wybraną sesję na liście poniżej `Saved Sessions`. | ![pageant](/pages/assets/screens/other/web-tools/putty/pageant3.png){.thumbnail}<br> 1\. Kliknij prawym przyciskiem myszy ikonę strony WWW na pasku zadań.<br> 2\. Kliknij wybraną sesję w podmenu `Saved Sessions`. |

///

Aby zmienić parametry sesji, wybierz ją z listy, a następnie kliknij przycisk `Load`{.action}.

<a name="example"></a>

## Przykład zastosowania: Jak korzystać z narzędzi PuTTY do konfiguracji bezpiecznych połączeń z serwerami OVHcloud

Tutorial ten może być zastosowany do różnych scenariuszy i różnych typów połączeń.

Postępując zgodnie z poniższymi instrukcjami, możesz skonfigurować połączenia w taki sposób, aby otwierały się za pomocą kilku kliknięć:

- Etap 1: [Zainstaluj pakiet PuTTY](#installation)
- Etap 2: [Utwórz parę kluczy w funkcji PuTTYgen](#puttygen)
- Etap 3: [Dodaj klucz publiczny do zdalnego hosta](#transferkeys)
- Etap 4: [Dodaj klucz prywatny w przeglądarce Pageant](#pageant)
- Etap 5: [Zapisz połączenie jako sesję w pliku PuTTY](#sessions)
- Etap 6: [Logowanie do hosta zdalnego za pomocą odpowiedniej zarejestrowanej sesji](#qconnect)

## Sprawdź również

[Wprowadzenie do SSH](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction)

[Jak tworzyć klucze SSH przy użyciu OpenSSH](/pages/bare_metal_cloud/dedicated_servers/creating-ssh-keys-dedicated)

[Jak tworzyć klucze SSH za pomocą OpenSSH dla instancji Public Cloud](/pages/public_cloud/compute/creating-ssh-keys-pci)

W przypadku wyspecjalizowanych usług (pozycjonowanie, rozwój, etc.) skontaktuj się z [partnerami OVHcloud](/links/partner).

Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i użytkowania Twoich rozwiązań OVHcloud, zapoznaj się z naszymi [ofertami pomocy](/links/support).

Dołącz do [grona naszych użytkowników](/links/community).