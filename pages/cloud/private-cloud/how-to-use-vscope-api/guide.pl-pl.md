---
title: 'Jak korzystać z API vScope'
slug: vscopeapi
excerpt: 'API vScope pozwala wykorzystywać dane z monitorowania zasobów w aplikacjach'
section: 'Usługi i opcje OVH'
---

**Ostatnia aktualizacja z dnia 25-11-2019**

## Wprowadzenie

OVHcloud udostępnia narzędzie **vScope** do nadzoru i monitorowania wirtualnych maszyn i infrastruktury.

Jest to strona internetowa, na której zebrane są wszelkie użyteczne informacje dotyczące wykorzystania Twoich zasobów.

Informacje te są dostępne także poprzez APIv6 i API Metrics.

**Niniejszy przewodnik opisuje sposób korzystania z tych API**.

## W praktyce

vScope udostępnia dwa rodzaje informacji:

- informacje**w czasie rzeczywistym**, które odpowiadają danym z różnych elementów w danej chwili.
- wykresy przedstawiające dane historyczne dotyczące wydajności poszczególnych elementów, np. procesora lub pamięci RAM maszyny wirtualnej.


### Zbieranie danych**w czasie rzeczywistym**

Dane **w czasie rzeczywistym** są dostępne z poziomu strony głównej interfejsu vScope.

![vScope-API](images/vScope1.png){.thumbnail}

Możesz przeglądać dane**w czasie rzeczywistym** dotyczące następujących elementów:

- serwery plików,
- hosty,
- maszyny wirtualne.

Z API można korzystać dzięki następujących trzem wywołaniom APIv6:

#### Serwery plików

> [!api]
>
> @api {GET} /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/filer/{filerId}
>

#### Hosty

> [!api]
>
> @api {GET} /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/host/{hostId}
> 

#### Maszyny wirtualne

> [!api]
> 
> @api {GET} /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}
> 

### Zbieranie danych historycznych (wykresy)

Do zbierania i wykorzystywania danych historycznych (wykresy) wykorzystujemy produkt **Metrics Data Platforms**.

Możesz zbierać dane w formie kropek za pośrednictwem protokołu Opentsdb lub WARP10. Kropki można wykorzystywać w aplikacji lub też wyświetlać je bezpośrednio w zależności od oczekiwanego rezultatu.


Niniejszy artykuł przedstawia wykorzystanie protokołu Opentsdb do nieuporządkowanego wyświetlania danych (bez formy graficznej).

Aby móc korzystać z narzędzia **Metrics Data Platforms**, musisz najpierw uzyskać token odczytu. W nowej wersji vScope każdy użytkownik infrastruktury otrzymuje taki token. 

Aby uzyskać token odczytu dla danego użytkownika, należy użyć następującego wywołania przez APIv6:

> [!api]
> 
> @api {POST} /dedicatedCloud/{serviceName}/user/{userId}/getVscopeMetricsToken
> 

Twój token znajduje się w polu wyników**token**.

```json
{
    "warpEndpoint": "https://warp10.gra1-ovh.metrics.ovh.net",
    "token": "XXXXXXXXXXXX_XXXXXXXXXXXZZZZZZZZZZZ_YYYYYYYYYYYYYY-XXXXXXXXX",
    "opentsdbEndpoint": "https://opentsdb.gra1-ovh.metrics.ovh.net"
}
```

Dla każdego rodzaju elementu dostępna jest lista statusów (zwanych również etykietami) wymagająca bardzo precyzyjnych parametrów.

#### Serwery plików (Filers)

| Statusy (Metrics) | Opis (Description) | Etykiety (Labels) |
| ----------- | ----------- | ----------- |
| vscope.filer.datastore.diskspace.used | Wykorzystanie serwera plików w kB | datacenter : pcc-37-187-228-180_datacenter869, <br>datastore : pcc-000443 |

#### Hosty

| Statusy (Metrics) | Opis (Description) | Etykiety (Labels) |
| ----------- | ----------- | ----------- |
| vscope.host.cpu.usage.perc | Wykorzystanie procentowe procesora hosta | \- datacenter : pcc-37-187-228-180_datacenter869, <br>\- host : 172.17.86.51 |
| vscope.host.mem.usage.perc | Wyrażone procentowo wykorzystanie pamięci hosta | \- datacenter : pcc-37-187-228-180_datacenter869, <br>\- host : 172.17.86.51 |
| vscope.host.net.tx | Wykorzystanie sieci hosta podczas przesyłania | \- datacenter : pcc-37-187-228-180_datacenter869, <br>\- host : 172.17.86.51<br>\- nicname : vmnic0/vmnic1/vmnic2/vmnic3 |
| vscope.host.net.rx | Wykorzystanie sieci hosta podczas odbioru | \- datacenter : pcc-37-187-228-180_datacenter869, <br>\- host : 172.17.86.51<br>\- nicname : vmnic0/vmnic1/vmnic2/vmnic3 |
| vscope.host.net.packetstx | Liczba pakietów sieciowych przesłanych przez hosta | \- datacenter : pcc-37-187-228-180_datacenter869, <br>\- host : 172.17.86.51<br>\- nicname : vmnic0/vmnic1/vmnic2/vmnic3 |
| vscope.host.net.packetsrx | Liczba pakietów sieciowych odebranych przez hosta | \- datacenter : pcc-37-187-228-180_datacenter869, <br>\- host : 172.17.86.51<br>\- nicname : vmnic0/vmnic1/vmnic2/vmnic3 |

#### Maszyny wirtualne

| Statusy (Metrics) | Opis (Description) | Etykiety (Labels) |
| ----------- | ----------- | ----------- |
| vscope.vm.cpu.usage.perc | Wykorzystanie procentowe procesora maszyny wirtualnej | \- datacenter : pcc-37-187-228-180_datacenter869, <br>\- vm : vm-01254 |
| vscope.vm.mem.usage.perc | Wykorzystanie procentowe pamięci maszyny wirtualnej | \- datacenter : pcc-37-187-228-180_datacenter869, <br>\- vm : vm-01254 |
| vscope.vm.cpu.ready |Status CPU Ready serwera wirtualnego w milisekundach | \- datacenter : pcc-37-187-228-180_datacenter869, <br>\- vm : vm-01254 |
| vscope.vm.net.rx | Wykorzystanie sieci serwera wirtualnego podczas odbioru | \- datacenter : pcc-37-187-228-180_datacenter869, <br>\- vm : vm-01254 |
| vscope.vm.net.tx | Wykorzystanie sieci serwera wirtualnego podczas przesyłania | \- datacenter : pcc-37-187-228-180_datacenter869, <br>\- vm : vm-01254 |
| vscope.vm.net.packetsrx | Liczba pakietów sieciowych odebranych przez maszynę wirtualną | \- datacenter : pcc-37-187-228-180_datacenter869, <br>\- vm : vm-01254 |
| vscope.vm.net.packetstx | Liczba pakietów sieciowych przesłanych przez maszynę wirtualną | \- datacenter : pcc-37-187-228-180_datacenter869, <br>\- vm : vm-01254 |
| vscope.vm.disk.io.read | Liczba operacji wejścia/wyjścia na sekundę przy odczycie dla maszyny wirtualnej | \- datacenter : pcc-37-187-228-180_datacenter869, <br>\- vm : vm-01254 |
| vscope.vm.disk.io.write | Liczba operacji wejścia/wyjścia na sekundę przy zapisie dla maszyny wirtualnej | \- datacenter : pcc-37-187-228-180_datacenter869, <br>\- vm : vm-01254 |
| vscope.vm.disk.bandwidth.read |  Przepustowość dysku maszyny wirtualnej w trybie odczytu | \- datacenter : pcc-37-187-228-180_datacenter869, <br>\- vm : vm-01254 |
| vscope.vm.disk.bandwidth.write | Przepustowość dysku maszyny wirtualnej w trybie zapisu | \- datacenter : pcc-37-187-228-180_datacenter869, <br>\- vm : vm-01254 |
| vscope.vm.disk.latency.read | Opóźnienie dysku maszyny wirtualnej podczas odczytu | \- datacenter : pcc-37-187-228-180_datacenter869, <br>\- vm : vm-01254 |
| vscope.vm.disk.latency.write | Opóźnienie dysku maszyny wirtualnej podczas zapisu | \- datacenter : pcc-37-187-228-180_datacenter869, <br>\- vm : vm-01254 |

#### Przykład zbierania danych z wykorzystaniem protokołu OpenTSDB

Teraz, kiedy już uzyskałeś swój token (endpoint) i dysponujesz listą statusów, możesz pozyskać dane dotyczące wykorzystania pamięci hosta w okresie 1 dnia.

Poniżej znajdziesz przykładowe zapytanie.

```
curl -XPOST https://read:XXXXXXXXXXXX_XXXXXXXXXXXZZZZZZZZZZZ_YYYYYYYYYYYYYY-XXXXXXXXX@opentsdb.gra1-ovh.metrics.ovh.net/api/query
-d '{ 
    "start":1564407950, 
    "queries":[ 
        { 
            "metric":"vscope.host.mem.usage.perc", 
            "aggregator":"sum",
            "downsample":"20m-max-zero",
            "tags": {
                "datacenter":"pcc-37-187-228-180_datacenter869",
                "host":"172.17.86.51" 
            } 
        } 
    ] 
}'
```

Wyjaśnienie różnych wykorzystanych pól:

- read: użytkownik służący do przeprowadzenia zapytania (będzie mieć zawsze status read);
- XXXXXXXXXXXX_XXXXXXXXXXXZZZZZZZZZZZ_YYYYYYYYYYYYYY-XXXXXXXXX : token pozyskany uprzednio przez APIv6;
- opentsdb.gra1-ovh.metrics.ovh.net: endpoint OpenTSDB, również uzyskiwany przez APIv6. Ten endpoint może różnić się w zależności od Twojej lokalizacji;
- start: znacznik czasowy odpowiadający dacie rozpoczęcia zapytania;
- queries: tabela zawierająca statusy do pozyskania. Za pomocą pojedynczego zapytania można uzyskać wiele statusów;
- metric: nazwa statusu do uzyskania;
- aggregator: nazwa funkcji agregacji (zapoznaj się z dokumentacją OpenTSDB, aby uzyskać więcej szczegółów);
- downsample: nazwa funkcji próbkowania (pozwala zmniejszyć ilość danych do pozyskania. Parametr opcjonalny);
- tags: lista etykiet w formie klucza / wartości;

Można uzyskać też inne parametry. Zapoznaj się z dokumentacją API OpenTSDB, by uzyskać więcej szczegółów.

Otrzymasz wówczas plik json z podsumowaniem zapytania, a także znaczniki czasowe powiązane z wartościami w polu **dps**.
Przykład:

```json
[
    {
        "metric":"vscope.host.mem.usage.perc",
        "tags":{
            "datacenter":"pcc-37-187-228-180_datacenter869",
            "env":"prod",
            "host":"172.17.86.51",
            "servicename":"pcc-37-187-228-180",
            "servicetype":"vscope"
        },
        "query":{
            "index":0
        },
        "aggregateTags":[],
        "dps":{
            "1564409391":4.38,
            "1564410591":4.35,
            "1564411791":4.37,
            "1564412991":4.38,
            "1564414191":4.35,
            "1564415391":4.38,
            "1564416591":4.35,
            "1564417791":4.36,
            "1564418991":4.36,
            "1564420191":4.37,
            "1564421391":4.37,
            "1564422591":4.37,
            "1564423791":4.37,
            "1564424991":4.38,
            "1564426191":4.36,
            "1564427391":4.35,
            "1564428591":4.37,
            "1564429791":4.36,
            "1564430991":4.38,
            "1564432191":4.35,
            "1564433391":4.37,
            "1564434591":4.36,
            "1564435791":4.37,
            "1564436991":4.37,
            "1564438191":4.37,
            "1564439391":4.38,
            "1564440591":4.36,
            "1564441791":4.36,
            "1564442991":4.37,
            "1564444191":4.37,
            "1564445391":4.35,
            "1564446591":4.36,
            "1564447791":4.36,
            "1564448991":4.36,
            "1564450191":4.35,
            "1564451391":4.37,
            "1564452591":4.37,
            "1564453791":4.35,
            "1564454991":4.36,
            "1564456191":4.37,
            "1564457391":4.37,
            "1564458591":4.36,
            "1564459791":4.37,
            "1564460991":4.34,
            "1564462191":4.36,
            "1564463391":4.34,
            "1564464591":4.37,
            "1564465791":4.34,
            "1564466991":4.37,
            "1564468191":4.34,
            "1564469391":4.36,
            "1564470591":4.36,
            "1564471791":4.36,
            "1564472991":4.37,
            "1564474191":4.37,
            "1564475391":4.36,
            "1564476591":4.35,
            "1564477791":4.36,
            "1564478991":4.35,
            "1564480191":4.35,
            "1564481391":4.37,
            "1564482591":4.36,
            "1564483791":4.34,
            "1564484991":4.37,
            "1564486191":4.38,
            "1564487391":4.35,
            "1564488591":4.34,
            "1564489791":4.36,
            "1564490991":4.35,
            "1564492191":4.36,
            "1564493391":4.36,
            "1564494591":4.36
        }
    }
]
```

Więcej informacji na temat zapytań OpenTSDB znajdziesz w dokumentacji: [OpenTSDB api query](http://opentsdb.net/docs/build/html/api_http/query/index.html)

## Sprawdź również

Dołącz do społeczności naszych użytkowników na stronie<https://community.ovh.com/en/>.