---
title: 'Konfiguracja karty sieciowej (NIC) dla OVHcloud Link Aggregation w Debianie 9'
slug: ola-debian9
excerpt: 'Dowiedz się, jak włączyć OVHcloud Link Aggregation na serwerze Debian 9'
section: 'Poziom zaawansowany'
---

**Ostatnia aktualizacja z dnia 02-12-2019**

## Wprowadzenie

Technologia OVHcloud Link Aggregation (OLA) została przez nas zaprojektowana w celu zwiększenia dostępności serwera oraz podniesienia wydajności połączeń sieciowych. Możesz w prosty sposób przeprowadzić agregację kart sieciowych, dzięki czemu Twoje połączenia sieciowe staną się redundantne. Jeśli jedno połączenie zostanie zerwane, ruch zostanie automatycznie przekierowany do innego dostępnego łącza. 

**Ten przewodnik wyjaśnia, jak powiązać interfejsy sieciowe i wykorzystać je do OLA w Debianie 9.**

## Wymagania początkowe

- [Konfiguracja karty sieciowej dla OVHcloud Link Aggregation w Panelu klienta](https://docs.ovh.com/pl/dedicated/ola-manager){.external}

> [!warning]
>
> Zanim włączysz OLA w Panelu klienta lub za pośrednictwem API, pobierz na serwer pakiet ifenslave. W tym celu zastosuj następujące polecenie:
>
> ```
> apt install ifenslave
> ```
>

## W praktyce

Ponieważ konfiguracja kart sieciowych w OLA jest prywatna, nie będziesz mógł połączyć się z serwerem za pomocą SSH. W związku z tym do uzyskania dostępu do serwera użyj narzędzia IPMI. Zaloguj się do [Panelu klienta](https://www.ovh.com/manager/){.external}. Następnie na pasku bocznym po lewej stronie wybierz serwer, który chcesz skonfigurować i kliknij zakładkę **IPMI**.

![zdalny kvm](images/remote_kvm.png){.thumbnail}

Teraz kliknij przycisk **Z apletu Java (KVM)**. Zostanie pobrany program JNLP. Otwórz program, aby skorzystać z połączenia IPMI. Zaloguj się, używając aktualnych danych do logowania do serwera.

Po zastosowaniu szablonu systemu operacyjnego dostarczanego przez OVHcloud interfejsy sieciowe będą miały domyślnie nazwy *ethX* lub *enoX*. Jeśli nie używasz szablonu OVHcloud, odszukaj nazwy Twoich interfejsów, używając następującego polecenia:

```bash
ip a
```

> [!primary]
>
> Wprowadzenie tego polecenie spowoduje wywołanie wielu „interfejsów”. Jeśli masz problem z ustaleniem, które z nich są Twoimi fizycznymi interfejsami sieciowymi, do pierwszego interfejsu nadal będzie domyślnie przypisany publiczny adres IP serwera.
>

Kiedy ustalisz nazwy dwóch interfejsów, powiąż je w systemie operacyjnym. Utwórz plik interfejsu w dowolnym edytorze tekstowym za pomocą następującego polecenia:

```bash
vi /etc/network/interfaces
```

Spowoduje to otwarcie pustego pliku tekstowego. Aby skonfigurować powiązanie, w dolnej części pliku tekstowego umieść poniższe elementy:

```bash
auto bond0
  iface bond0 inet static
  address 10.0.0.1/24
  bond-mode 802.3ad
  bond-slaves eno1 eno2
  bond-miimon 100
  bond-downdelay 200
  bond-lacp-rate 1
  bond-xmit_hash_policy layer3+4

  up ip -6 addr add fc10:0000:0000:0001::/64 dev bond0
```

> [!primary]
>
> Dodaj ostatnią linię do tego pliku, jeśli zamierzasz skonfigurować sieć prywatną za pośrednictwem IPv6. 
>

Na koniec zrestartuj demona sieciowego za pomocą następującego polecenia:

```bash
restart sieci systemctl 
```

Restart może trwać kilka minut, w tym czasie budowany jest interfejs powiązania.Aby sprawdzić, czy powiązanie działa, podłącz inny serwer do tego samego vRacka. Jeśli wszystko działa poprawnie, ustawienie jest prawidłowe. W przeciwnym razie sprawdź dokładnie Twoje konfiguracje lub spróbuj zrestartować serwer.

## Podsumowanie

OVHcloud zapewnia klientom swobodę i elastyczność wykorzystania sprzętu w sposób najlepiej odpowiadający ich potrzebom. Po przeczytaniu tego przewodnika będziesz potrafił skonfigurować OVHcloud Link Aggregation (OLA) w Debianie 9 w celu wykorzystania obu interfejsów sieciowych jako powiązanych interfejsów prywatnych. 

## Sprawdź również

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.