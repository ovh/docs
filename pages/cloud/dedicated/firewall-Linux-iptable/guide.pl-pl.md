---
title: Konfiguracja firewalla w systemie Linux z systemem iptables
excerpt: Dowiedz się, jak zabezpieczyć serwer korzystając z iptables
slug: firewall-iptables
section: Tutoriale
order: 01
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk “Zaproponuj zmianę” na tej stronie.
>

**Ostatnia aktualizacja z dnia 31-01-2022**

## Wprowadzenie

Twój serwer dedykowany jest wyposażony w zaporę sieciową. Firewall tworzą barierę między zaufaną siecią a niewiarygodną siecią.
Firewall działa poprzez określenie zasad regulujących dozwolony ruch i zablokowany ruch. Firewall użytkowy opracowany dla systemów Linux jest nie do przyjęcia.

**Dowiedz się, jak zabezpieczyć serwer dedykowany korzystając z iptables.**

> [!warning]
>
> OVHcloud oddaje do Twojej dyspozycji usługi, za które przejmujesz odpowiedzialność. Firma OVH nie ma dostępu do Twoich serwerów, nie pełni funkcji administratora i w związku z tym nie będzie mogła udzielić Ci wsparcia. Zarządzanie oprogramowaniem i wdrażanie środków bezpieczeństwa należy do klienta.
>
> Oddajemy w Twoje ręce niniejszy przewodnik, którego celem jest pomoc w wykonywaniu bieżących zadań. W przypadku trudności lub wątpliwości związanych z administrowaniem, użytkowaniem lub zabezpieczeniem serwera rekomendujemy skorzystanie z pomocy wyspecjalizowanego usługodawcy. Więcej informacji znajduje się w sekcji “Sprawdź również”.
>

## Wymagania początkowe

- Posiadanie [serwera dedykowanego](https://www.ovhcloud.com/pl/bare-metal/) na koncie OVHcloud
- Dostęp administratora (root/sudo) do serwera przez SSH

## W praktyce

> [!primary]
>
> Niniejszy przewodnik zawiera informacje o zamówieniach na dystrybucję Ubuntu Server.
>
> Niniejsza instrukcja ma charakter poglądowy. Być może będziesz musiał dostosować niektóre komendy do konkretnej dystrybucji i/lub systemu operacyjnego, którego używasz. W niektórych sytuacjach rekomendujemy użycie narzędzi zewnętrznych. W przypadku pytań dotyczących korzystania z tych narzędzi zapoznaj się z oficjalną dokumentacją producenta.  
>

### Etap 1: aktualizacja systemu

Producenci dystrybucji i systemów operacyjnych sugerują częste aktualizacje pakietów oprogramowania ze względów bezpieczeństwa. **Aktualizacja dystrybucji lub systemu operacyjnego jest kluczowa dla bezpieczeństwa Twojego serwera.**

Więcej informacji znajdziesz w przewodniku dotyczącym [bezpieczeństwa serwera dedykowanego](https://docs.ovh.com/pl/dedicated/porady-zabezpieczanie-serwera-dedykowanego/).

### Etap 2: zainstalować firewall iptables pod Ubuntu

> [!primary]
>
> Istnieją dwie różne wersje iptables dla IPv4 i IPv6. Zasady, które opisujemy w tym tutorialu Linux iptables dotyczą IPv4.
> Aby skonfigurować IPv6, użyj narzędzia iptables6. Te dwa różne protokoły nie działają razem i muszą być skonfigurowane niezależnie.
>

iptables jest domyślnie zainstalowany na większości systemów Linux. Aby potwierdzić, że usługa iptables jest zainstalowana, wpisz następujące polecenie:

```bash
sudo apt-get install iptables
```

Przykład wydania w Ubuntu potwierdza, że najnowsza wersja iptables jest już dostępna:

![wersja-iptables](images/step2-version-iptables.PNG){.thumbnail}

Zwykle polecenie iptables jest następujące:

```bash
sudo iptables [option] CHAIN_rule [-j target]
```

Poniżej znajduje się lista kilku opcji Do wyboru:

- -A -—append: Dodaj regułę do łańcucha (na końcu).
- -C —-check: Wyszukiwanie reguły, która odpowiada wymaganiom łańcucha.
- -D —-delete: Usuwa określone reguły łańcucha.
- -F —-flush: Usuń wszystkie reguły.
- -I —-insert: Dodaje regułę do danego łańcucha.
- -L —-list: Wyświetl wszystkie reguły łańcucha.
- -N -new-chain: Stwórz nowy kanał.
- -v —-verbose: Wyświetla więcej informacji podczas korzystania z opcji listy.
- -X —-delete-chain: Usuń ciąg.

### Etap 3: sprawdź obecny stan iptables

Aby wyświetlić wszystkie aktualne reguły na Twoim serwerze, wprowadź następujące polecenie w oknie terminala:

```bash
sudo iptables -L
```

System wyświetla status twoich kanałów.<br>
Wyjście będzie zawierać trzy kanały:

![Check-Current-iptables](images/Check-Current-iptables.PNG){.thumbnail}

### Etap 4: zezwalaj na ruch na localhost

Aby zezwolić na ruch z własnego systemu (localhost), dodaj ciąg wejściowy, wprowadzając następujące elementy:

```bash
sudo iptables -A INPUT -i lo -j ACCEPT
```

Komenda ta konfiguruje firewall, aby zaakceptować ruch dla interfejsu localhost (lo) (-i). Wszystko, co pochodzi z twojego systemu, będzie przechodzić przez twoją zaporę sieciową.
Aby umożliwić komunikację z interfejsem localhost, należy zdefiniować tę regułę.

### Etap 5: zezwalaj na ruch w określonych portach <a name="step5"></a>

Reguły te zezwalają na ruch w różnych portach, które określiłeś za pomocą poleceń wymienionych poniżej.
Port jest określonym punktem zakończenia komunikacji dla określonego typu danych.

Aby zezwolić na ruch sieciowy HTTP, wprowadź następujące polecenie:

```bash
sudo iptables -A INPUT -p tcp --dport 80 -j ACCEPT
```

Aby zezwolić tylko na ruch przychodzący przez SSH (Secure Shell), wprowadź:

```bash
sudo iptables -A INPUT -p tcp --dport 22 -j ACCEPT
```

Aby zezwolić na ruch internetowy HTTPS, wprowadź następujące polecenie:

```bash
sudo iptables -A INPUT -p tcp --dport 443 -j ACCEPT
```

Opcje działają następująco:

- -p : Sprawdź określony protokół (tcp).
- —-dport: Określa port docelowy.
- -j jump: Wykonaj czynność 

> [!warning]
> W przypadku utraty dostępu do serwera, możesz nadal używać narzędzia KVM/IPMI, aby uzyskać do niego dostęp, zmienić konfigurację lub usunąć reguły.
>
> Więcej informacji na temat dostępu do tego narzędzia znajdziesz w [tym przewodniku](https://docs.ovh.com/pl/dedicated/uzywanie-ipmi-serwery-dedykowane/).  
> 

### Etap 6: kontrola ruchu na adres IP

Aby zaakceptować ruch z określonego adresu IP, użyj następującego polecenia.

```bash
sudo iptables -A INPUT -s adres_IP_do_autoryzacji -j ACCEPT
```

Zastąp adres IP w zamówieniu adresem IP, który chcesz autoryzować.

Możesz również zablokować ruch z adresu IP 

```bash
sudo iptables -A INPUT -s adres_IP_do_blokowania -j DROP
```

Zastąp adres IP w zamówieniu adresem IP, który chcesz zablokować.

Możesz odrzucić ruch z zakresu adresów IP, używając następującego polecenia:

```bash
sudo iptables -A INPUT -m iprange --src-range adres_IP_początku_adresu_IP_fin -j REJECT
```

Opcje iptables, których używaliśmy w przykładach działają następująco:

- -m : Odpowiada określonej opcji.
- -iprange: Wskazuje, że system będzie czekać na określony zakres adresów IP zamiast na jeden.
- —-src-range: Określa zakres adresów IP.

### Etap 7: usuń niepożądany ruch

Jeśli określisz reguły firewalla iptables, musisz zapobiec nieautoryzowanemu dostępowi poprzez usunięcie wszelkiego ruchu z innych portów:

```bash
sudo iptables -A INPUT -j DROP
```

Opcja -A dodaje nową regułę do łańcucha. Jeśli połączenie przechodzi przez porty inne niż te, które zdefiniowałeś, zostanie ono przerwane.

> [!warning]
> 
>Uwaga, jeśli wpiszesz to polecenie przed wykonaniem [etapu piątego](#step5), zablokujesz dostęp do wszystkich usług, w tym do bieżącego dostępu, do SSH. Jest to szczególnie problematyczne w maszynie do zdalnego dostępu. 
>

### Etap 8: usuń regułę

Bardziej precyzyjna metoda polega na usunięciu numeru linii z reguły.

```bash
sudo iptables -P INPUT DROP 
```

Po pierwsze, wprowadź wszystkie reguły:

```bash
sudo iptables -L --line-numbers
```

![line-numbers](images/Step7-all-rules.PNG){.thumbnail}

Wyszukaj wiersz reguły firewalla, którą chcesz usunąć i wprowadź następującą komendę:

```bash
sudo iptables -D INPUT <Number>
```

Zastąp `Number` numerem linii reguły, którą chcesz usunąć.

### Etap 9: zapisz zmiany

Podczas restartu systemu, iptables nie zachowuje reguł, które utworzyłeś.
Za każdym razem, gdy skonfigurujesz iptables w Linuxie, wszystkie wprowadzone przez Ciebie zmiany dotyczą tylko do kolejnego restartu.

Aby zarejestrować reguły w systemach opartych na Ubuntu, wprowadź:

```bash
sudo -s iptables-save -c
```

Po kolejnym uruchomieniu systemu iptables automatycznie przeładuje reguły firewalla.

Możesz teraz skonfigurować podstawowe reguły firewalla iptables dla Twojego serwera Linux.
Nie wahaj się doświadczyć, ponieważ zawsze możesz usunąć reguły, których nie potrzebujesz, lub usunąć wszystkie reguły i zacząć od nowa.

## Sprawdź również

Dołącz do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.
