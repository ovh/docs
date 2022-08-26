---
title: Zarządzanie regułami firewalla i portu security w sieciach korzystających OpenStack CLI
slug: firewall_security_pci
excerpt: Sprawdź działanie grup zabezpieczeń w usłudze Public Cloud
section: Zarządzanie w OpenStack CLI
---

<style>
 pre {
     font-size: 14px;
 }
 pre.console {
   background-color: #300A24; 
   color: #ccc;
   font-family: monospace;
   padding: 5px;
   margin-bottom: 5px;
 }
 pre.console code {
   border: solid 0px transparent;
   font-family: monospace !important;
   font-size: 0.75em;
   color: #ccc;
 }
 .small {
     font-size: 0.75em;
 }
</style>

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk “Zaproponuj zmianę” na tej stronie.
> 

**Ostatnia aktualizacja z dnia 25-08-2022**

## Wprowadzenie

Platforma OpenStack zarządza bezpieczeństwem zapory sieciowej, łącząc reguły połączenia w **grupy zabezpieczeń**. Reguły są następnie stosowane przez przypisanie grup bezpieczeństwa do portów sieciowych.

**Port** w ramach [OpenStack Neutron](https://docs.openstack.org/neutron/latest/index.html){.external} jest punktem połączenia między podsieciami i elementami sieci (takimi jak instancje, Load Balancer, routery, itp...).

**Dowiedz się, jak zarządzać grupami zabezpieczeń w sieciach publicznych i prywatnych w systemie Public Cloud.**

## Wymagania początkowe

- [Przygotowanie środowiska do korzystania z API OpenStack](https://docs.ovh.com/pl/public-cloud/przygotowanie_srodowiska_dla_api_openstack/)
- [Pobieranie zmiennych środowiskowych OpenStack](https://docs.ovh.com/pl/public-cloud/zmienne-srodowiskowe-openstack/)

## W praktyce

### Procedura aktywacji <a name="activation"></a>

> [!primary]
>
> Ta sekcja przewodnika dotyczy tylko konfiguracji prywatnych sieci.

#### Dla już utworzonej prywatnej sieci

Aby uniknąć przerw w konfiguracji podczas migracji wersji OpenStack Stein i Open vSwitch, na "False" w istniejących sieciach zdefiniowano parametr "port security".

CLI `openstack` jest niezbędny do aktywowania portu security w Twoich portach i w istniejącej sieci.

Po pierwsze, jeśli chcesz używać reguł zapory sieciowej w prywatnych sieciach, musisz zdefiniować właściwość "port security" na "True":

```bash
openstack network set --enable-port-security <network_ID>
```

Następnie należy aktywować port security na porcie usługi w tej sieci. 

> [!primary]
> Przypominamy, że aby odzyskać port, możesz skorzystać z CLI OpenStack. Wprowadź komendę `openstack port list --server <server_ID>`, aby pobrać porty na danym serwerze.
>

W przypadku wszystkich usług posiadających aktywny port w tej sieci, włącz "port security":

```bash
openstack port set --enable-port-security <port_ID>
```

Następnie możesz sprawdzić, czy "port security" jest aktywowany w konkretnym porcie:

```bash
openstack port show <port-ID> -f value -c port_security_enabled
```

Wynik powinien być podobny do tego:

<pre class="console"><code>$ openstack port show d7c237cd-8dee-4503-9073-693d986baff3 -f value -c port_security_enabled
False
</code></pre>

#### W przypadku nowej sieci prywatnej:

Ponieważ aktualizacja do wersji Stein w regionach OpenStack i nowa wersja Open vSwitch zostały przeprowadzone ([Private network port default configuration change](https://public-cloud.status-ovhcloud.com/incidents/z6qq4bcvsn11)), parametr "port security" zostanie ustawiony domyślnie na "True" w każdej nowo utworzonej sieci prywatnej.

Zapewni to nam spójność z domyślną polityką "True", jak również z wdrażaniami vanilla OpenStack.

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

Jeśli chcesz skonfigurować określone reguły, możesz utworzyć nową grupę zabezpieczeń i przypisać do niej port sieciowy.

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

## Sprawdź również

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.
