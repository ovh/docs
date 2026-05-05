---
title: 'Zwiększenie limitów Public Cloud'
excerpt: 'Dowiedz się, jak złożyć wniosek o zwiększenie limitu zasobów Public Cloud (RAM, CPU, miejsce na dysku, instancje) bezpośrednio w Panelu klienta OVHcloud.'
updated: 2026-05-05
---

## Wprowadzenie

Domyślnie projekty w chmurze publicznej, a także łączna ilość zasobów (pamięć RAM, procesor, miejsce na dysku, liczba instancji itp.), z których można korzystać, są ograniczone ze względów bezpieczeństwa.

Aby korzystać z dodatkowych zasobów i projektów, należy zwiększyć limity.

**Dowiedz się, jak złożyć wniosek o zwiększenie limitu Public Cloud w Panelu klienta OVHcloud.**

## Wymagania początkowe

- [Posiadanie ważnego](/pages/account_and_service_management/managing_billing_payments_and_services/manage-payment-methods) sposobu płatności w Panelu klienta OVHcloud.

## Wskazówki

<!-- CP-NAV-START:publiccloud-projects -->
---

### Dostęp do Panelu klienta OVHcloud

- **Link bezpośredni:** [Public Cloud Projects](/links/control-panel/publiccloud-projects)
- **Ścieżka nawigacji:** `Public Cloud`{.action} > Wybierz projekt

---
<!-- CP-NAV-END:publiccloud-projects -->

W menu po lewej stronie kliknij `Limity i regiony`{.action} pod sekcją **Ustawienia**.

![Strona "Limity i regiony" przedstawiająca aktualne limity projektu według regionów](images/raisepciquota1.png){.thumbnail}

Ta strona przedstawia podsumowanie obecnych limitów projektu według regionów. Pojawia się ostrzeżenie, gdy zasób osiągnie 80% swojego limitu.

### Zwiększenie limitu zasobów

Zgodnie z wewnętrznymi kryteriami (staż pracy, istnienie opłaconych faktur itp.) możesz wnioskować o zwiększenie limitu zasobów projektu Public Cloud bezpośrednio w Panelu klienta OVHcloud.

> [!primary]
>
> Nowi użytkownicy Public Cloud otrzymują [1 000 PLN bezpłatnego kredytu](/links/public-cloud/free-trial) automatycznie aktywowanego przy tworzeniu projektu, ważnego przez jeden miesiąc. Ponieważ kwalifikacja do zwiększenia limitu zależy od kryteriów takich jak staż konta i opłacone faktury, użytkownicy korzystający z bezpłatnego okresu próbnego mogą mieć ograniczone możliwości zwiększenia limitu do czasu uregulowania pierwszej faktury.
>

Możesz zwiększyć limit zasobów ręcznie lub automatycznie.

#### Zwiększanie limitu zasobów automatycznie dzięki funkcji „Limit autoscalingu"

Ta opcja umożliwia żądanie automatycznego i stopniowego zwiększenia limitu zasobów. Limit zostanie dostosowany na podstawie faktycznego użycia **jeśli przekroczyłeś 60% obecnego limitu przez 30 kolejnych dni**, a także na podstawie zestawu kryteriów wewnętrznych i finansowych.

> [!primary]
>
> Ten proces nie jest odpowiedni do szybkiego zwiększania limitu.
>

W prawym górnym rogu strony znajdziesz opcję **Limit autoscalingu**:

- Aby dowiedzieć się więcej o tej funkcji, kliknij znak `?`{.action} obok tej opcji.
- Włącz opcję, klikając przycisk po prawej stronie tej opcji. Stan zmieni się z *Wyłączony* na *Aktywny*.

![Przycisk przełączania limitu autoscalingu ustawiony w pozycji Aktywny](images/autoscaling.png){.thumbnail}

Po aktywacji funkcja auto-scaling stopniowo zwiększy limit zasobów projektu na podstawie faktycznych potrzeb.

#### Ręczne zwiększanie limitu zasobów

> [!primary]
>
> Jeśli potrzebujesz zwiększyć limit, a przycisk `Zwiększ limity`{.action} nie jest dostępny w Twoim Panelu klienta, kliknij przycisk `Skontaktuj się z pomocą techniczną`{.action}.
>

![Przycisk "Skontaktuj się z pomocą techniczną" widoczny na stronie limitów w Panelu klienta](images/contact_support_quota.png){.thumbnail}

Ten proces umożliwia szybkie i znaczne zwiększenie limitów (np. szybkie skalowanie, instancje GPU itp.). Ta metoda opiera się na natychmiastowym zakupie kredytu, z którego wszystkie koszty chmury zostaną automatycznie odliczone.

Można zakupić różne kwoty kredytu.

Kliknij przycisk `Zwiększ limity`{.action}.

![Przycisk "Zwiększ limity" w sekcji limitów Public Cloud](images/raisepciquota2.png){.thumbnail}

Następnie kliknij strzałkę rozwijaną obok `Wybierz wolumen`{.action}, aby wyświetlić listę limitów zasobów, na które można aktualnie uaktualnić zasoby. W tej sekcji pokazano również kwotę do zapłaty w celu skorzystania z tych zasobów.

![Lista rozwijana z dostępnymi poziomami limitów i powiązanymi kosztami](images/selectquotas.png){.thumbnail}

Poniższa tabela wyszczególnia zasoby, które możesz uzyskać dla każdego limitu:

|Quota|Instancje|CPU/Cores|RAM (GB)|Rozmiar woluminu (TB)|Woluminy (maksymalna liczba)|Kopie zapasowe|Rozmiar kopii zapasowej (TB)|Floating IPs|Octavia Load Balancer|Gateway (Routers)|
|---|---|---|---|---|---|---|---|---|---|---|
|20 VMs|20|40|430|20|200|1200|120|30|10|4|
|50 VMs|50|64|507|20|500|3000|300|75|25|10|
|100 VMs|100|128|1015|40|1000|6000|600|300|50|10|
|200 VMs|200|512|4063|80|2000|12000|1200|600|50|50|

Po wybraniu wolumenu kliknij przycisk `Zatwierdź`{.action}. Twoja płatność zostanie przetworzona tak szybko, jak to możliwe.

> [!warning]
>
> **Każde ręczne zwiększenie limitu zostanie naliczone natychmiast.**
>
> Po kliknięciu przycisku `Zatwierdź`{.action} zamówienie zostaje automatycznie utworzone, a kwota zostanie odliczona z domyślnej metody płatności.
>

Bardziej szczegółowy przegląd zasobów można uzyskać w [interfejsie Horizon](https://horizon.cloud.ovh.net/auth/login/). Po zalogowaniu się kliknij opcję `Project`{.action}, a następnie `Overview`{.action}.

### Zwiększanie limitu projektów Public Cloud

Istnieją dwie główne sytuacje, w których możesz potrzebować dostosowania limitu:

1. **Maksymalna liczba projektów osiągnięta**: Jeśli osiągnąłeś maksymalną liczbę projektów Public Cloud dozwolonych w Twoim koncie klienta i chcesz utworzyć nowe, musisz złożyć wniosek do naszego zespołu wsparcia.

2. **Inne typy żądań limitu**: Dla każdego innego limitu (CPU, RAM, Storage itp.) lub specyficznych potrzeb związanych z Twoimi projektami Public Cloud, możesz również skontaktować się z wsparciem, aby zażądać zwiększenia.

> [!primary]
>
> Żądania limitu są przetwarzane ręcznie przez nasz zespół. Czas przetwarzania może się różnić w zależności od złożoności żądania. Zalecamy składanie swoich żądań jak najwcześniej, aby uniknąć opóźnień w projektach.

Aby przyspieszyć przetwarzanie, prosimy określić w swoim żądaniu:

- Typ limitu, który ma zostać zwiększony (liczba projektów, zasoby itp.);
- Przeznaczenie i uzasadnienie zwiększenia;
- Żądany okres lub czas trwania zwiększenia.

### Specjalne limity i specjalne zasoby

Dla niektórych zasobów lub usług mogą obowiązywać specjalne limity. Aby uzyskać więcej informacji:

**Limit S3**<sup>1</sup>: zobacz oficjalne dokumenty "[Object Storage - Ograniczenia techniczne (EN)](/pages/storage_and_backup/object_storage/s3_limitations)".

**Limit zarządzanego Kubernetes (MKS)**: zobacz oficjalne dokumenty "[ETCD Quotas, usage, troubleshooting and error (EN)](/pages/public_cloud/containers_orchestration/managed_kubernetes/etcd-quota-error)".

## Sprawdź również

Dołącz do [grona naszych użytkowników](/links/community).

<sup>1</sup>: S3 is a trademark of Amazon Technologies, Inc. OVHcloud's service is not sponsored by, endorsed by, or otherwise affiliated with Amazon Technologies, Inc.
