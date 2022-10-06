---
title: Migracja danych z jednego serwera dedykowanego na drugi
slug: migracja-danych-z-jednego-serwera-dedykowanego-na-drugi
excerpt: Dowiedz się, jak migrować dane z serwera dedykowanego na inny serwer
section: Pierwsze kroki
order: 5
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk “Zaproponuj zmianę” na tej stronie.
>

**Ostatnia aktualizacja z dnia 16-09-2021**

## Wprowadzenie

W miarę jak zmieniają się Twoje potrzeby i gama produktów OVHcloud, czasami konieczna jest zmiana serwerów i migracja danych.

**Niniejszy przewodnik opisuje etapy migracji danych z jednego serwera na drugi.**

> [!warning]
>
> OVHcloud oddaje do Twojej dyspozycji usługi, za które przejmujesz odpowiedzialność. Firma OVHcloud nie ma dostępu do Twoich serwerów, nie pełni funkcji administratora i w związku z tym nie będzie mogła udzielić Ci wsparcia. Zarządzanie oprogramowaniem i wdrażanie środków bezpieczeństwa należy do klienta.
>
> Oddajemy w Twojej ręce niniejszy przewodnik, którego celem jest pomoc w jak najlepszym wykonywaniu bieżących zadań. W przypadku problemów z administrowaniem, użytkowaniem czy zabezpieczeniem serwera rekomendujemy skorzystanie z usług wyspecjalizowanej firmy. Więcej informacji znajduje się w sekcji “Sprawdź również”.
>

## Wymagania początkowe

- Dwa serwery dedykowane (stary i nowy) z zainstalowanym systemem operacyjnym
- Dostęp administracyjny do serwerów
- Umiejętności administrowania systemem

## W praktyce

> [!warning]
>
> Niektóre z opcji opisanych w tym przewodniku mogą być niedostępne w Twojej ofercie serwerów lub znajdować się w innej sekcji w Panelu klienta (Kimsufi, So you Start).
>

### Przygotowanie środowiska

Po dostarczeniu nowego serwera na Twoje konto, pierwszym krokiem będzie utworzenie środowiska (OS, oprogramowanie, bezpieczeństwo...) identycznego z poprzednim lub przynajmniej na tyle, na ile to możliwe.

Jeśli wymagana jest zmiana wersji systemu operacyjnego lub oprogramowania, upewnij się, że lokalizacje plików są takie same, a dane są zgodne między wersjami.

### Migracja danych

Migracja danych zazwyczaj wiąże się z skopiowaniem plików z jednego serwera na inny. Istnieje kilka rozwiązań:

- Najprostszym sposobem jest użycie odpowiedniego oprogramowania, takiego jak [SFTP](https://docs.ovh.com/pl/dedicated/przesylanie-i-pobieranie-danych-sftp/).
- Inną możliwością jest [synchronizacja obu serwerów ze sobą](https://docs.ovh.com/pl/dedicated/kopiowanie-danych-serwer-rsync/).

### Korzystanie z backup storage (dostępne tylko w OVHcloud i So you Start)

Opcja [Backup Storage](https://www.ovhcloud.com/pl/bare-metal/backup-storage/) umożliwia przechowywanie danych w usłudze zewnętrznej. Jest przypisana wyłącznie do usługi, którą zamówiłeś.

> [!warning]
>
> Dostęp do usługi backup storage jest możliwy tylko z serwerów OVHcloud i adresów IP znajdujących się w tej samej strefie.
>
> Przykładowo, jeśli serwer zlokalizowany w centrum danych SBG ma włączoną opcję Backup Storage, serwery zlokalizowane w centrum danych GRA lub RBX będą mogły uzyskać do niej dostęp. Serwery zlokalizowane w centrum danych BHS i WAW nie będą miały dostępu do tej przestrzeni.
>

Możesz zezwolić na dostęp do usługi backup storage z Twojego nowego serwera. W ten sposób zyskujesz dostęp do bramki umożliwiającej transfer danych.

Aby uzyskać więcej informacji, zapoznaj się z przewodnikiem dotyczącym [Korzystanie z Backup Storage na serwerze dedykowanym](https://docs.ovh.com/pl/dedicated/usluga-backup-storage/#korzystanie-z-backup-storage){.external}.

### Przeniesienie adresu Additional IP (dostępnego tylko w OVHcloud i So you Start)

> [!warning]
>
> - Główny adres IP serwera nie może zostać przeniesiony na inny serwer.
>
> - Migracja adresu Additional IP z konta So you Start na konto OVHcloud. Operacja ta jest fakturowana podobnie jak utworzenie nowego adresu IP.
>
> - Migracja adresu IP z konta OVHcloud do konta So you Start nie jest możliwa.
>

Jeśli reputacja Twoich adresów IP jest ważna, zalecamy korzystanie z adresów [Additional IP](https://www.ovhcloud.com/pl/bare-metal/ip/), które możesz zachować w przypadku migracji.

Po otrzymaniu tych adresów IP wystarczy je przenieść na nowy serwer.
W tym celu zapoznaj się z naszym przewodnikiem: [Przenieś Additional IP](https://docs.ovh.com/pl/dedicated/ip-fo-move/).

> [!alert]
>
> Usunięcie oryginalnego serwera, na którym zamówiono jedną lub więcej opcji (Backup Storage, Additional IP), spowoduje definitywne usunięcie tych opcji.
>
> Przed usunięciem usługi należy wykonać wszystkie operacje.
>

Po udostępnieniu danych na nowym serwerze może być konieczna zmiana konfiguracji DNS, na przykład w przypadku użycia głównego adresu IP.

Więcej informacji znajdziesz w naszej dokumentacji dotyczącej [domeny i DNS](https://docs.ovh.com/pl/domains/).

## Sprawdź również

Jeśli chcesz uzyskać pomoc w migracji serwera, skontaktuj się z [nasza sieć partnerów](https://partner.ovhcloud.com/pl/).

Dołącz do społeczności naszych użytkowników na stronie: <https://community.ovh.com/en/>.
