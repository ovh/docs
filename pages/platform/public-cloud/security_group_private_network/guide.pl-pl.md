---
title: Zarządzanie regułami firewalla i bezpieczeństwem portów w sieciach prywatnych
slug: firewall_security_pci
excerpt: Sprawdź działanie grup zabezpieczeń w usłudze Public Cloud
section: Zarządzanie w OpenStack CLI
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk “Zaproponuj zmianę” na tej stronie.
> 

**Ostatnia aktualizacja z dnia 30-11-2021**

## Wprowadzenie

Platforma OpenStack zarządza bezpieczeństwem zapory sieciowej, łącząc reguły połączenia w **grupy zabezpieczeń**. Reguły są następnie stosowane przez przypisanie grup bezpieczeństwa do portów sieciowych.

Port** w ramach **OpenStack Neutron[ ](https://docs.openstack.org/neutron/latest/index.html){.external} jest punktem połączenia między podsieciami i elementami sieci (takimi jak instancje, Load Balancer, routery, itp...).

**Dowiedz się, jak zarządzać grupami zabezpieczeń w sieciach prywatnych w ramach Public Cloud.**

> [!primary]
>
> Niniejszy przewodnik dotyczy tylko konfiguracji prywatnych sieci. W przypadku sieci publicznych reguły firewalla są kompleksowe.
>
> Zapraszamy do zapoznania się z poniższymi [szczegółami dotyczącymi migracji](#migration), dotyczącymi zmian w [regionach](#regions) Public Cloud OpenStack.
>

## Wymagania początkowe

- [Przygotowanie środowiska do korzystania z API OpenStack](https://docs.ovh.com/pl/public-cloud/przygotowanie_srodowiska_dla_api_openstack/)
- [Pobieranie zmiennych środowiskowych OpenStack](https://docs.ovh.com/pl/public-cloud/zmienne-srodowiskowe-openstack/)

## W praktyce

### Domyślne parametry

Każdy port sieciowy jest przypisany do grupy zabezpieczeń, która zawiera określone reguły.

Grupa zabezpieczeń "default" zawiera następujące zasady:

```bash
openstack security group rule list default

+--------------------------------------+-------------+-----------+-----------+------------+-----------------------+
| ID                                   | IP Protocol | Ethertype | IP Range  | Port Range | Remote Security Group |
+--------------------------------------+-------------+-----------+-----------+------------+-----------------------+
| 3a5564b7-5b68-4923-b796-26eb623c5b53 | None        | IPv6      | ::/0      |            | None                  |
| 43f2b673-9cbc-4bac-ad66-22ef4789d0fc | None        | IPv6      | ::/0      |            | None                  |
| a6a1ecfd-4713-4316-a020-74eccd49fd6c | None        | IPv4      | 0.0.0.0/0 |            | None                  |
| cd66a601-de94-4dbe-ae21-44792229d351 | None        | IPv4      | 0.0.0.0/0 |            | None                  |
+--------------------------------------+-------------+-----------+-----------+------------+-----------------------+
```

Otrzymany zwrot wskazuje, że wszystkie połączenia są dozwolone dla każdego protokołu i w obu kierunkach.

W zależności od regionu implementacja może być inna, ale wynik jest taki sam: wszystkie połączenia są dozwolone.

W związku z tym wszystkie porty sieciowe (publiczne i prywatne) umożliwiają każde połączenie z początkiem instancji.

### Zarządzanie regułami prywatnego firewalla

#### Dodaj reguły

Jeśli chcesz skonfigurować określone reguły, możesz zmienić grupę zabezpieczeń domyślnie. Możesz również utworzyć nową grupę zabezpieczeń i powiązać z nią port sieciowy.

Użyj tego polecenia, aby utworzyć grupę:

```bash
openstack security group create private

+-----------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Field           | Value                                                                                                                                                                      |
+-----------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| created_at      | 2021-11-05T15:14:37Z                                                                                                                                                       |
| description     | private                                                                                                                                                                    |
| id              | eeae05a8-c81e-40a4-a3aa-fdbebcbf72b4                                                                                                                                       |
| location        | cloud='', project.domain_id=, project.domain_name='Default', project.id='9ea425f44c284d488c6d8e28ccc8bff0', project.name='3614264792735868', region_name='GRA11', zone=    |
| name            | private                                                                                                                                                                    |
| project_id      | 9ea425f44c284d488c6d8e28ccc8bff0                                                                                                                                           |
| revision_number | 1                                                                                                                                                                          |
| rules           | created_at='2021-11-05T15:14:37Z', direction='egress', ethertype='IPv4', id='54fae025-3439-4e45-8745-2ffe5b261f72', revision_number='1', updated_at='2021-11-05T15:14:37Z' |
|                 | created_at='2021-11-05T15:14:37Z', direction='egress', ethertype='IPv6', id='ad1aa507-79bd-434f-b674-221ef41d9ba6', revision_number='1', updated_at='2021-11-05T15:14:37Z' |
| stateful        | None                                                                                                                                                                       |
| tags            | []                                                                                                                                                                         |
| updated_at      | 2021-11-05T15:14:37Z                                                                                                                                                       |
+-----------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
```

Ten przykład grupy zabezpieczeń posiada tylko reguły wyjścia, co oznacza, że nie będzie dozwolona komunikacja wejściowa.

Aby dodać regułę, na przykład dla połączeń SSH, możesz użyć następującej komendy:

```bash
openstack security group rule create --protocol tcp --dst-port 22 private

+-------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Field             | Value                                                                                                                                                                   |
+-------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| created_at        | 2021-11-05T15:19:37Z                                                                                                                                                    |
| description       |                                                                                                                                                                         |
| direction         | ingress                                                                                                                                                                 |
| ether_type        | IPv4                                                                                                                                                                    |
| id                | 8f026e18-1c8b-4042-8655-10c9a773d131                                                                                                                                    |
| location          | cloud='', project.domain_id=, project.domain_name='Default', project.id='9ea425f44c284d488c6d8e28ccc8bff0', project.name='3614264792735868', region_name='GRA11', zone= |
| name              | None                                                                                                                                                                    |
| port_range_max    | 22                                                                                                                                                                      |
| port_range_min    | 22                                                                                                                                                                      |
| project_id        | 9ea425f44c284d488c6d8e28ccc8bff0                                                                                                                                        |
| protocol          | tcp                                                                                                                                                                     |
| remote_group_id   | None                                                                                                                                                                    |
| remote_ip_prefix  | 0.0.0.0/0                                                                                                                                                               |
| revision_number   | 1                                                                                                                                                                       |
| security_group_id | eeae05a8-c81e-40a4-a3aa-fdbebcbf72b4                                                                                                                                    |
| tags              | []                                                                                                                                                                      |
| updated_at        | 2021-11-05T15:19:37Z                                                                                                                                                    |
+-------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
```


Wprowadź następujące polecenie, aby powiązać grupę zabezpieczeń z portem:

```bash
openstack port set --security-group private 5be009d9-fc2e-4bf5-a152-dab52614b02d
```

#### Różnice w zachowaniu w poszczególnych regionach <a name="regions"></a>

Domyślna konfiguracja sieci prywatnej może być różna w zależności od używanego regionu.

> [!primary]
> W niektórych regionach własność "port security" jest uznawana za *enabled*, nawet jeśli nie stosuje ona żadnych zasad dotyczących sieci prywatnej. W niektórych innych regionach (w zależności od wdrożonej wersji OpenStack) własność "port security" jest widoczna jako *enabled*, ale reguły są poprawnie stosowane w prywatnej sieci.
> 


Podsumowując, następujące regiony uruchamiają Newton OpenStack release i **żadna reguła firewall nie będzie działać** dla Twoich prywatnych sieci, nawet jeśli bezpieczeństwo portów jest włączone:

- Beauharnois: BHS1, BHS3, BHS5
- Frankfurt: DE1
- Gravelines: GRA1, GRA3, GRA5, GRA7, GRA11
- Strasburg: SBG5
- Singapur: SGP1
- Sydney: SYD1
- Londyn: UK1
- Warszawa: WAW1
- Hillsboro: US-WEST-OR-1
- Vint Hill: US-EAST-VA-1

W następujących regionach (uruchamiając wersję Stein OpenStack) reguły zapory ogniowej dla prywatnych sieci **będą działać** zgodnie z planem:

- Gravelines: GRA9
- Strasburg: SBG7

OVHcloud stopniowo uaktualni wszystkie regiony Newton do Stein, aby zapewnić dostępność funkcji "port security".

W celu uniknięcia przerw w działaniu usługi podczas aktualizacji wartość *False* zostanie przypisana do nieruchomości "port security" we wszystkich sieciach już utworzonych. Po aktualizacji regionu w wersji Stein OpenStack, jeśli chcesz używać reguł zapory sieciowej w prywatnych sieciach, musisz zdefiniować właściwość "port security" w *True*.

Wprowadź następujące polecenie, aby sprawdzić, czy właściwość "port security" jest aktywna w prywatnym porcie sieciowym:

```bash
openstack port show d7c237cd-8dee-4503-9073-693d986baff3 -f value -c port_security_enabled
False
```

### Proces migracji <a name="migration"></a>

Migracja będzie przebiegać zgodnie z poniższym procesem:

- GRA9 i SBG7 dołączają do innych regionów z domyślnym "portem security" w **niedostępności**.
- Reguły firewalla dla nowych portów nie będą stosowane, dopóki nie uruchomisz prawa własności "port security" na nowym porcie. Dla istniejących portów nic się nie zmieni.
- Regiony OpenStack przejdą do wersji Stein.
- Domyślny "port security" zostanie zmodyfikowany podczas **aktywacji** (globalna komunikacja zostanie wysłana w odpowiednim czasie).
- Reguły firewalla będą działać dla nowych portów. Dla istniejących portów nic się nie zmieni.
- Opcja aktywacji nieruchomości "port security" dla istniejących portów zostanie włączona.

## Sprawdź również

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.
