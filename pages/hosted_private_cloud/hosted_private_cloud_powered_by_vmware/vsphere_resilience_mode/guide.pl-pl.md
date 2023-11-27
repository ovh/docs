---
title: Test tymczasowej utraty hosta poprzez aktywację trybu Resilience
excerpt: Dowiedz się, jak przetestować tymczasową utratę hosta w trybie Resilience w infrastrukturze Hosted Private Cloud OVHcloud
---

## Wprowadzenie

Jeśli chcesz przeprowadzić test wytrzymałości Twojej infrastruktury Hosted Private Cloud OVHcloud, możesz skorzystać z trybu Resilience, aby zasymulować tymczasową utratę hosta, co pozwoli zatwierdzić ciągłość działania produkcji w przypadku incydentu.

**Dowiedz się, jak przetestować tymczasową utratę hosta w trybie Resilience w infrastrukturze Hosted Private Cloud OVHcloud**

## Wymagania początkowe

- Wykupienie usługi [Hosted Private Cloud](https://www.ovhcloud.com/pl/enterprise/products/hosted-private-cloud/).
- Dostęp do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl).

## W praktyce

Operacja ta przeprowadzana jest z poziomu API OVHcloud i skutkuje odłączeniem dostępu do sieci dla wybranego hosta oraz jego dezaktywacją na wcześniej określony czas (min:10min, max:24h, default:1h).

Test ten jest niezależny od systemu monitoringu i nie powoduje automatycznej wymiany hosta.

Dzięki temu wirtualne maszyny zostaną wyłączone a migracja, a następnie restart do pozostałych hostów (hostów) będzie wykonywany przez vSphere HA, jeśli funkcja jest poprawnie skonfigurowana w klastrze.

Więcej informacji na temat vSphere HA znajdziesz w dokumentacji VMware "[Działanie vSphere HA](https://docs.vmware.com/en/VMware-vSphere/7.0/com.vmware.vsphere.avail.doc/GUID-33A65FF7-DA22-4DC5-8B18-5A7F97CCA536.html)".

Pozwoli to oszacować czas przywrócenia działalności od uruchomienia testu i symulacji awarii (RTO) aż do restartu maszyn wirtualnych.

Oto połączenia, które należy wykonać, aby wyświetlić i uzyskać dane do logowania do infrastruktury, centrum danych i hosta, na którym chcemy przeprowadzić ten test:

Aby uzyskać nazwę infrastruktury: (pcc-xx-xx-xx-xx):

> [!api]
>
> @api {v1} /dedicatedCloud GET /dedicatedCloud

Aby uzyskać identyfikator centrum danych:

> [!api]
>
> @api {v1} /dedicatedCloud GET /dedicatedCloud/{serviceName}/datacenter

Aby pobrać identyfikator hosta:

> [!api]
>
> @api {v1} /dedicatedCloud GET /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/host

Po uzyskaniu tych informacji, w celu potwierdzenia, że możesz uruchomić akcję, możesz użyć następującego wywołania, które zatwierdzi warunki przeprowadzenia testu i w ten sposób zapobiegnie utracie aktywności:

> [!api]
>
> @api {v1} /dedicatedCloud GET /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/host/{hostId}/resilience/canBeEnabled

Jeśli test jest wykonalny, wynik jest: true.

Aby rozpocząć test, możesz skorzystać z następującego wywołania:

> [!api]
>
> @api {v1} /dedicatedCloud POST /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/host/{hostId}/resilience/enable

Host zostanie wówczas rozłączony i do końca testu będzie przełączał się do trybu "bez odpowiedzi":

![vSphere](images/resilience_mode.png){.thumbnail}

Możesz sprawdzić status operacji za pomocą następującego wywołania:

> [!api]
>
> @api {v1} /dedicatedCloud GET /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/host/{hostId}/resilience

Jeśli test został uruchomiony na hoście, wynik będzie następujący: enabled.

Jeśli to konieczne, możesz również zatrzymać test przed upływem wybranego czasu za pomocą tego wywołania:

> [!api]
>
> @api {v1} /dedicatedCloud POST /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/host/{hostId}/resilience/disable

Wśród zwróconych informacji znajduje się harmonogram zadania "updateHostResilienceOff".

Łączność hosta zostanie przywrócona po zakończeniu testu, a Twoja infrastruktura HPC powróci do normalnych warunków użytkowania.

## Sprawdź również

Dołącz do społeczności naszych użytkowników na stronie<https://community.ovh.com/en/>.
