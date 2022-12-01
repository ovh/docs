---
title: SVN
slug: hosting_www_korzystanie_z_svn
excerpt: Dowiedz się, jak korzystać z SVN przez SSH na Twoim hostingu
section: FTP i SSH
order: 09
---

**Ostatnia aktualizacja z dnia 28-10-2020**

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk „Zaproponuj zmianę” na tej stronie.
> 

## Wprowadzenie 

SVN, który jest skrótem od "subwersji", jest systemem zarządzania wersjami. 

**Dowiedz się, jak korzystać z SVN przez SSH na Twoim hostingu**

> [!warning]
>
> OVHcloud udostępnia różnorodne usługi, jednak to Ty odpowiadasz za ich konfigurację i zarządzanie nimi. Ponosisz więc odpowiedzialność za ich prawidłowe funkcjonowanie.
> 
> Oddajemy w Twoje ręce niniejszy przewodnik, którego celem jest pomoc w wykonywaniu bieżących zadań. W przypadku trudności zalecamy skorzystanie z pomocy wyspecjalizowanego webmastera lub kontakt z producentem oprogramowania. Niestety firma OVHcloud nie będzie mogła udzielić wsparcia w tym zakresie. Więcej informacji znajduje się w sekcji „Sprawdź również”.
> 

## Wymagania

- Posiadanie [hostingu](https://www.ovhcloud.com/pl/web-hosting/) pozwalającego na połączenie SSH (**od oferty Pro**)
- Logowanie przez SSH do hostingu (zapoznaj się z naszym przewodnikiem [Korzystanie z dostępu SSH do hostingu](../hosting_www_ssh_na_hostingu/)

## W praktyce

### Tworzenie zgłoszenia

Po zalogowaniu się przez [SSH na Twoim hostingu](../hosting_www_ssh_na_hostingu/){.external} utwórz katalog główny depozytów SVN, a następnie wpłata.

W tym celu wystarczy wpisać polecenie:

```bash
mkdir svn
```

i

```bash
svnadmin create svn/depot_test
```

Następnie możesz sprawdzić, czy katalogi zostały utworzone za pomocą polecenia:

```bash
ls -la
```

Aby uzyskać katalogi, należy je uzyskać zgodnie z poniższym obrazkiem:

![hosting](images/3078.png){.thumbnail}

### Tworzenie kluczy publicznych / prywatnych

Przed kontynuowaniem operacji utwórz parę kluczy SSH z poziomu komputera, którego będziesz używał do łączenia się z repozytorium SVN.

Zapoznaj się z przewodnikiem [Tworzenie kluczy SSH](https://docs.ovh.com/pl/public-cloud/tworzenie-kluczy-ssh/). Nie musisz postępować zgodnie z instrukcjami etapu [Zaimportuj klucz SSH do Panelu klienta OVHcloud](https://docs.ovh.com/pl/public-cloud/tworzenie-kluczy-ssh/#importowanie-klucza-ssh-do-panelu-klienta-ovhcloud_1) w tym przewodniku.

### Dodanie klucza publicznego do hostingu

Po uzyskaniu klucza dodaj go do Twojego hostingu w pliku .ssh/authorized_keys2. W tym celu wprowadź poniższy wiersz poleceń:

```bash
mkdir .ssh
chmod 700 .ssh
vi .ssh/authorized_keys2
```

Po otworzeniu pliku wprowadź następujący wiersz:

```bash
command="/usr/bin/svnserve --root=/homez.XXX/loginFTP/svn --tunnel --tunnel-user=john",no-port-forwarding,no-agent-forwarding,no-X11-forwarding,no-pty
```

Postępuj zgodnie z poprzednio utworzonym kluczem, wszystko w tej samej linii.

> [!primary]
>
> Zastąp "/home.XXX/loginFTP" i "john" Twoimi identyfikatorami SSH.
> Aby dowiedzieć się, jakie liczby należy użyć do zastąpienia "/home.XXX/loginFTP", wpisz komendę "pwd" przez SSH.
>
> Informacje te znajdziesz również w przewodniku [Korzystanie z dostępu SSH do hostingu](../hosting_www_ssh_na_hostingu/){.external}.
> 

![hosting](images/3080.png){.thumbnail}

Możesz pobrać zawartość repozytorium bez konieczności logowania się bezpośrednio przez SSH do maszyny.

> [!warning]
>
> Uwaga, ten sam klucz nie może być używany dla SVN i SSH w
> wiersz poleceń
> 

### Przykłady

#### Linux

Możesz wykonać test z poziomu komputera łączącego się z depot SVN za pomocą poniższego wiersza:

```bash
svn checkout svn+ssh://loginFTP@clusterXXX/depot_test
```

#### Windows z TortoiseSVN

- Pobierz i zainstaluj [TortoiseSVN](https://tortoisesvn.net/downloads.html){.external}.
- Kliknij prawym przyciskiem myszy na klucz prywatny. W prawym dolnym rogu znajduje się ikona, a klucz ładuje się do agenta uwierzytelniającego.
- Utwórz katalog, kliknij prawym przyciskiem myszy i wybierz "SVN Checkout". 
- Wpisz `svn+ssh://loginFTP@xxplan.ovh.net/depot_test` w polu "URL of repository" i kliknij `OK`:

![hosting](images/3081.png){.thumbnail}

Dostępna jest bardzo dobra dokumentacja w języku angielskim dla Subversion: [http://svnbook.red-bean.com/en/1.5/index.html](http://svnbook.red-bean.com/en/1.5/index.html){.external}

### Szczególne przypadki

#### Załóż kilka kont

Najpierw należy utworzyć kilka kluczy SSH. Następnie podczas dodawania klucza publicznego do hostingu:

```bash
command="/usr/bin/svnserve --root=/home.XXX/loginFTP/svn --tunnel --tunnel-user=marc",no-port-forwarding,no-agent-forwarding,no-X11-forwarding,no-pty
```

Zmodyfikuj poniższy parametr dodając do niego różnych użytkowników:

```bash
--tunnel-user
```

należy pamiętać, że można również nadawać dostęp w trybie tylko do odczytu poprzez dodanie parametru:

```bash
--read-only.
```

#### Sprawdź lokalnie na serwerze

Jeśli chcesz przeprowadzić lokalną weryfikację, dostarczone przykłady nie będą działać. Należy użyć:

```bash
svn+ssh://login@ftp.nom-du-site.tld/home.XXX/login/svn/depot_test
```

## Sprawdź również

[Korzystanie z dostępu SSH do hostingu](../hosting_www_ssh_na_hostingu/){.external}

Dołącz do społeczności naszych użytkowników na stronie<https://community.ovh.com/en/>.
