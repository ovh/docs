---
title: Wprowadzenie do protokołów SSH
slug: ssh-wprowadzenie
excerpt: Tutaj dowiesz się jak korzystać z usługi SSH, aby mieć dostęp do serwera.
section: SSH i klucz SSH
order: 1
---

**Ostatnia aktualizacja dnia 2018-01-12**

## Wprowadzenie

Protokół komunikacyjny SSH (Secure Shell) jest preinstalowany na wszystkich serwerach OVH (VPS, serwery dedykowane, instancje Public Cloud).

**Tutaj dowiesz się jak korzystać z usługi SSH, aby mieć dostęp do swojego serwera.**

## Wymagania początkowe

- SSH jest instalowany na wszystkich maszynach wirtualnych. Umożliwia bezpieczne i w pełni kontrolowane połączenia.

## W praktyce

### Kompatybilne oprogramowanie

Istnieje bardzo wiele programów umożliwiających połączenie za pomocą protokołu SSH. Oto kilka pomocnych przykładów.

#### Windows

- [PuTTY](http://www.putty.org/){.external} (darmowy)
- [MobaXterm](https://mobaxterm.mobatek.net/) (wersja darmowa i płatna)
- [SecureCRT](http://www.vandyke.com/products/securecrt/){.external} (płatny)

W ostatnich wersjach systemu Windows 10 i Windows Server, możliwy jest dostęp do konsoli bash w trybie programisty. Oto link do dokumentacji Windows: <https://docs.microsoft.com/pl-pl/windows/wsl/install-win10>.

#### Mac

- W Mac OS X zainstalowane jest narzędzie `Terminal`{.action}, systematycznie instalowane również w naszych maszynach.

#### Linux

- do logowania można korzystać z preinstalowanego narzędzia `Konsola`{.action} lub `Terminal`{.action}. 
- do zarządzania wieloma zakładkami można zainstalować pakiet `Terminator`. Prezentacja narzędzia znajduje się w dokumentacji Ubuntu: <https://doc.ubuntu-fr.org/terminator>.
- [OpenSSH](http://www.openssh.com){.external} (bezpłatny).

### Etapy łączenia przez SSH

#### Krok 1: pierwsze łączenie

Aby połączyć się z maszyną wirtualną przez protokół SSH, należy posiadać dwie informacje:

- IPv4 lub nazwę serwera/maszyny wirtualnej;
- hasło root do maszyny (otrzymane w mailu podczas instalacji).


Polecenie do połączenia jest następujące:

```sh
ssh root@IP_du_serveur
```

Lub:

```sh
ssh root@nom_du_serveur
```

Pojawi się następująca informacja:

```sh
The authenticity of host servername (IP_serwera) cant be established.
RSA key fingerprint is a9:bb:55:35:86:xx:xx:00:xx:00:2b:2c:79:10:96:3c.
Are you sure you want to continue connecting (yes/no)? YES
Warning: Permanently added servername, IP_serwera (RSA) to the list of known hosts.
Hasło:
root@vps12345:~#
```

Podczas pierwszego łączenia klient SSH otrzymuje cyfrowy odcisk klucza RSA odszyfrowywany przez serwer, z którym się łączy. Jest on weryfikowany podczas każdego połączenia. Jeśli klucz się zmieni zostaniesz o tym poinformowany, oznacza to, że coś się zmieniło, tj.:

- maszyna została przeinstalowana;
- serwer SSH został przeinstalowany;
- łączysz się z inną maszyną.

Podczas pierwszej instalacji musisz zaakceptować odcisk, który zostanie zapisany przez klienta SSH na twoim urządzeniu.

#### Krok 2: instrukcja

W poszczególnych dystrybucjach Linuxa masz dostęp do instrukcji, która zawiera wszystkie dostępne polecenia oraz argumenty.

```sh
man bash
```

#### Krok 3: aktualizacja

Twój klient SSH powinien być zawsze zaktualizowany zgodnie z dystrybucją. Można to sprawdzić wpisując następujące polecenie:

```sh
ssh -V
```

W razie wątpliwości sprawdź dokumentację klienta SSH, którego używasz.

## Sprawdź również

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com>.