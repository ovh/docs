---
title: FAQ Public Cloud OVHcloud
excerpt: Znajdź najczęściej zadawane pytania dotyczące usług Public Cloud OVHcloud
updated: 2024-10-11
---

<style>
details>summary {
    color:rgb(33, 153, 232) !important;
    cursor: pointer;
}
details>summary::before {
    content:'\25B6';
    padding-right:1ch;
}
details[open]>summary::before {
    content:'\25BC';
}
</style>

## FAQ Public Cloud

### Opcje i płatności

/// details | Jakie są metody fakturowania za usługę Public Cloud?

Opłata za wykorzystane zasoby jest pobierana między pierwszym a piątym dniem każdego miesiąca i dotyczy zasobów wykorzystanych w poprzednim miesiącu. Jeśli wybrałeś opłatę miesięczną, abonament za przyszły miesiąc jest fakturowany w tym samym czasie co zużycie zasobów godzinowych za poprzedni miesiąc (instancje, Object Storage). W przypadku przejścia na abonament miesięczny, naliczana jest natychmiast proporcjonalna opłata za korzystanie z danego zasobu przez dni pozostałe do końca bieżącego miesiąca.
Każda instancja jest płatna, jeśli nie została usunięta z Panelu klienta OVHcloud.
Możesz monitorować zużycie zasobów dzięki prognozom uzyskiwanym na podstawie historii wcześniejszego zużycia. Możesz również wybrać opcję fakturowania każdego projektu Public Cloud oddzielnie, co pozwoli na ewentualne refakturowanie usługi w ramach Twojej firmy.

Aby zmienić model rozliczenia na inny, zapoznaj się z naszym przewodnikiem [Zmiana typu rozliczenia z godzinowego na miesięczne dla instancji Public Cloud](/pages/account_and_service_management/managing_billing_payments_and_services/changing_hourly_monthly_billing).

> [!success]
> Skorzystaj z niższych cen wybierając zasoby Public Cloud na okres od 1 do 36 miesięcy. Więcej informacji znajdziesz na naszej stronie [Savings Plans](/links/public-cloud/savings-plan).

///

/// details | Jak przypisać instancję Public Cloud do Savings Plan, który właśnie zamówiłem?

Nie musisz wykonywać żadnych czynności. Każda instancja, która została już utworzona (lub zostanie wkrótce utworzona) i odpowiada szablonowi wybranemu dla [Savings Plan](/links/public-cloud/savings-plan), zostanie automatycznie zintegrowana, pod warunkiem, że ilość zasobów Savings Plan nie zostanie wyczerpana.

///

/// details | Jak zmieniać parametry instancji w sytuacji, gdy potrzebuję więcej lub mniej zasobów?

Każda instancja może zostać zmieniona na wyższy model z tej samej gamy w Panelu klienta, klikając `edytuj`{.action} na stronie instancji. Możesz również zmienić jej rozmiar na niższy model, jeśli została ona uruchomiona z opcją "flex". Opcja ta wymaga rozmiaru dysku 50 GB w przypadku wszystkich modeli i umożliwia zmianę rozmiaru dysku na obie strony.
W każdym przypadku zmiana rozmiaru instancji wiąże się z jej ponownym uruchomieniem.

///

/// details | Czy instancje Public Cloud są kompatybilne z cloud-init?

Tak, obrazy cloud dostarczane przez OVHcloud zawierają skrypty cloud-init, które umożliwiają personalizację instancji w momencie ich uruchomienia. Infrastruktura dostarcza informacje o personalizacji instancji za pośrednictwem serwera metadanych, z którym bezpośrednio komunikuje się cloud-init.

///

/// details | Czy wirtualizacja instancji jest możliwa?

Tak i nie.

Tak, ponieważ opcja jest aktywna (flag CPU VMX* jest widoczny na Twojej instancji). Możesz więc korzystać z każdego rozwiązania wirtualizacji w swojej instancji (KVM, QEMU, VirtualBox, Xen, HyperV, itp.).

Nie, ponieważ po przeprowadzeniu migracji instancji na żywo (może to nastąpić w każdej chwili, w oparciu o cykl życia hypervisora), Twoje jądro Linux może nie działać (kernel panic).

Więcej informacji można znaleźć [na stronie internetowej](https://www.linux-kvm.org/page/Nested_Guests#Limitations).

///

### Logowanie do instancji

/// details | Jak połączyć się z instancją Public Cloud?

Połączenie realizowane jest za pomocą kilku kluczy SSH, które chcesz skonfigurować podczas tworzenia instancji Public Cloud.

Zapraszamy do zapoznania się z przewodnikiem [Tworzenie pierwszej instancji Public Cloud i łączenie się z nią](/pages/public_cloud/compute/public-cloud-first-steps).

///

/// details | Zgubiłem lub chcę zmienić klucz SSH, jak to zrobić?

Jeśli nie możesz się zalogować po utracie klucza prywatnego, zmień klucz publiczny Twojej instancji zmieniając go w tryb "Rescue".

Zapoznaj się z przewodnikiem [Zmiana klucza SSH w przypadku utraty](/pages/public_cloud/compute/replacing_lost_ssh_key).

///

/// details | Jak tworzyć użytkowników OpenStack i zarządzać nimi?

Aby móc korzystać z interfejsów API Horizon lub OpenStack, należy utworzyć użytkownika OpenStack. Możesz utworzyć nieograniczoną liczbę.

Zapoznaj się z przewodnikiem [Tworzenie i usuwanie użytkownika OpenStack](/pages/public_cloud/compute/create_and_delete_a_user).

///

### Kopii zapasowych

/// details | Czy można wykonać kopię zapasową serwerów Public Cloud?

Możesz w dowolnym momencie utworzyć w Panelu klienta OVHcloud kopię zapasową instancji. Dzięki kopii zapasowej możesz przywrócić Twoją instancję z pierwotną konfiguracją lub odtworzyć instancję. Kopie te są przechowywane i fakturowane tak samo, jak obrazy w "Private Image". Dzięki API OpenStack będziesz mógł je pobrać i umieścić poza infrastrukturą OVHcloud lub w innych projektach.

Zapoznaj się z przewodnikiem dotyczącym [Tworzenia kopii zapasowej instancji](/pages/public_cloud/compute/save_an_instance).

///

/// details | Czy można dynamicznie zwiększać rozmiar wolumenu jednocześnie zapisując dane na dysku?

Nie, przed zwiększeniem rozmiaru wolumenu, należy odłączyć dysk.

///

/// details | Ile dodatkowych wolumenów mogę przypisać do każdej instancji?

Możesz przypisać do 25 dodatkowych wolumenów do każdej instancji.

///

### Sieć

/// details | Ile adresów IPv6 jest dostarczanych z moją instancją?

Każda instancja jest dostarczana z jednym adresem IPv6.

///

/// details | Czy mogę zmienić publiczny adres IP mojej instancji?

Publiczne adresy IP są automatycznie przypisane do instancji i dlatego nie można ich zmienić. Zalecamy użycie adresu Additional IP, aby zarządzać publicznym adresem IP instancji. W ten sposób, bez względu na publiczny adres przypisany automatycznie do instancji, możesz dodać jeden lub kilka adresów Additional IP do Twojej instancji.

Zapraszamy do zapoznania się z przewodnikiem [Wykupienie adresu Additional IP](/pages/public_cloud/public_cloud_network_services/additional-ip-buy).

///

/// details | Ile dodatkowych Additional IP mogę dołączyć do każdej instancji?

Do każdej instancji można dołączyć maksymalnie 256 dodatkowych Additional IP.

///

/// details | Jak mogę utworzyć prywatną sieć łączącą moje serwery?

Public Cloud jest zintegrowany z rozwiązaniem SDN (software-defined network). Umożliwia ona dynamiczne tworzenie prywatnych sieci, a następnie podłączenie ich do instancji za pośrednictwem Panelu klienta lub API.
Prywatne sieci opierają się na technologii vRack używanej również przez inne usługi firmy, takie jak Private Cloud lub serwery dedykowane. Dzięki temu możesz w sposób odizolowany i bezpieczny połączyć wszystkie elementy infrastruktury z OVHcloud.

Zapraszamy do zapoznania się z przewodnikiem [Konfiguracja usługi vRack Public Cloud](/pages/public_cloud/public_cloud_network_services/getting-started-07-creating-vrack).

Prywatna sieć domyślnie dysponuje natywnymi zabezpieczeniami sieciowymi Openstack. Zawierają one różne mechanizmy, takie jak ochrona przed spoofingiem IP.<br>
Po stronie instancji może to prowadzić do blokowania pakietów sieciowych w zależności od ich zastosowania (pfSense, router, protokół CARP, itp...).

W zależności od Twoich potrzeb będziesz musiał wyłączyć funkcję `Port Security` w porcie lub sieci prywatnej.
Zapraszamy do zapoznania się z przewodnikiem [zarządzanie regułami firewalla i portu security w sieciach wykorzystujących OpenStack CLI](/pages/public_cloud/compute/security_group_private_network).

Szczegóły znajdziesz również na stronie [dokumentacja OpenStack](https://docs.openstack.org/developer/dragonflow/specs/mac_spoofing.html) lub na stronie [superuser.openstack.org](https://superuser.openstack.org/articles/managing-port-level-security-openstack/).

///

### Bezpieczeństwo

/// details | W jaki sposób moje serwery są zabezpieczone?

OVHcloud chroni całą swoją infrastrukturę dzięki swojemu unikalnemu rozwiązaniu anty-DDoS. Ponadto możesz stworzyć grupy bezpieczeństwa OpenStack. Jest to odpowiednik zapory zarządzany bezpośrednio na poziomie infrastruktury OpenStack, przed Twoimi instancjami.

Zapraszamy do zapoznania się z przewodnikiem [Konfiguracja grupy zabezpieczeń](/pages/public_cloud/compute/setup_security_group).

Zabezpieczenia te, w połączeniu z zabezpieczeniami, które możesz zainstalować na Twoich serwerach, zwiększą niezawodność wdrożenia.

///

/// details | Jak sprawdzić, czy moja instancja jest podatna na atak MDS?

Wrażliwość na [lukę MDS](https://www.kernel.org/doc/html/latest/admin-guide/hw-vuln/mds.html) można sprawdzić za pomocą polecenia:

```bash
cat /sys/devices/system/cpu/vulnerabilities/mds
```

Jeśli wynik jest `Vulnerable`, nie bój się, bazowy hypervisor chroni Ciebie.

Możesz jednak filtrować lukę bezpośrednio do Twojej instancji, wykonując reboot hard Twojej instancji albo [w Panelu klienta OVHcloud](/pages/public_cloud/compute/first_steps_with_public_cloud_instance) albo za pomocą polecenia takiego jak to:

```bash
openstack server reboot --hard $serverID
```

///

/// details | Czy moja instancja jest nadal podatna na uszkodzenia w trybie SSBD?

Wrażliwość na [lukę SSBD](https://www.kernel.org/doc/html/latest/userspace-api/spec_ctrl.html) można sprawdzić za pomocą polecenia:

```bash
cat /sys/devices/system/cpu/vulnerabilities/ssbd
```

Nawet jeśli wynik jest `Vulnerable`, Twoja instancja jest jednocześnie chroniona przed tym problemem.

*flag CPU SSBD* nie jest dostępny dla Twojej instancji, ponieważ może spowodować niestabilność niektórych systemów operacyjnych.

///

## Sprawdź również

Dołącz do [grona naszych użytkowników](/links/community).
