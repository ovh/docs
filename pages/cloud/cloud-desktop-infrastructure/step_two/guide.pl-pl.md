---
title: Etap 2 - tworzenie szablonu dla puli wirtualnych pulpitów
slug: tworzenie-szablonu-puli
excerpt: Dowiedz się, jak tworzyć szablon dla puli wirtualnych pulpitów przy użyciu VMware Horizon 7.1
section: Wdrożenie
order: 2
---

**Ostatnia aktualizacja dnia 2018-03-19**

## Wprowadzenie

Możesz teraz zacząć korzystać z rozwiązania [Cloud Desktop Infrastructure](https://www.ovh.pl/cloud/cloud-desktop/infrastructure/){.external}.

**Z niniejszego przewodnika dowiesz się, jak utworzyć zautomatyzowaną pulę maszyn typu linked-clone.**


## Wymagania początkowe

- Kompatybilny system operacyjny: [systemy operacyjne kompatybilne z Horizon Agent](https://pubs.vmware.com/horizon-7-view/index.jsp?topic=%2Fcom.vmware.horizon-view.installation.doc%2FGUID-B45E1464-92B1-4AA8-B4BB-AD59EDF98530.html){.external}
- Instalacja oprogramowania wykorzystywanego w puli
- Konfiguracja adresacji karty sieciowej w trybie DHCP
- Powiązanie szablonu wirtualnej maszyny (VM) z siecią docelową puli (portgroup lub VLAN)
- Instalacja agenta VMware Horizon 7.1
- Utworzenie snapshota (przy wyłączonej maszynie wirtualnej), który posłuży jako niezmienny wzorzec
- [Utworzenie szablonu personalizacji (SysPrep)](https://docs.ovh.com/fr/cloud-desktop-infrastructure/create-sysprep/){.external} 


## W praktyce

### Importowanie szablonu wirtualnej maszyny (VM)


Istnieje możliwość tworzenia lub importowania szablonów VM skonfigurowanych w pełni lub częściowo w usłudze Private Cloud powiązanej z Twoją infrastrukturą VMware Horizon 7.1.

W tym celu skorzystaj z przewodników:

- tworzenie VM z obrazu ISO: [uruchomienie maszyny wirtualnej z ISO](https://docs.ovh.com/fr/private-cloud/deploiement-d-une-machine-virtuelle-depuis-un-iso/){.external} 
- tworzenie VM z szablonu OVH: [uruchomienie z szablonu](https://docs.ovh.com/fr/private-cloud/deploiement-template-ovh/){.external}
- import za pomocą OVFtool: [OVFtool](https://docs.ovh.com/fr/private-cloud/ovf-tool/){.external}.


### Powiązanie szablonu z siecią puli

Aby poprawnie utworzyć wirtualne pulpity i udostępnić je użytkownikom, należy skonfigurować szablon VM z wykorzystaniem właściwej wirtualnej sieci. Parametry sieci otrzymasz w e-mailu (**sieć DHCP**). Sieć figuruje jako `dvportgroup` w interfejsie vSphere.

Aby powiązać szablon VM z siecią puli:

- kliknij prawym przyciskiem myszy na VM, następnie wybierz `Edit settings`{.action};
- wybierz urządzenie odpowiednie dla interfejsu sieciowego;
- w sekcji `Network Connexion`{.action} wybierz `Network label`{.action} wskazany w przesłanym do Ciebie e-mailu **sieć DHCP** (patrz obrazek poniżej).

![DHCP Network](images/1200.png){.thumbnail}

Jeśli potrzebujesz dodatkowej sieci, odizolowanej od istniejącej sieci, masz możliwość uruchomienia nowego punktu dostępowego do sieci dedykowanej: [Tworzenie nowego punktu dostępowego](https://docs.ovh.com/fr/cloud-desktop-infrastructure/create-access-point/).


### Instalacja agenta VMware Horizon 7.1

> [!primary]
>
> Użytkownikom usługi HaaS udostępniamy pliki instalacyjne agenta Horizon: <https://files.horizonaas.com/>.
> 

Kliknij dwukrotnie plik instalacyjny Horizon Agent, następnie postępuj zgodnie z poleceniami:

- zaakceptuj warunki licencji VMware;
- wybierz `Install VMware Horizon Agent`{.action} w trybie `My Computer Mode`{.action};
- wybierz protokół IPv4;
- wybierz opcje instalacji (na początek możesz skorzystać z opcji domyślnych);
- nie aktywuj RDP, gdy wyświetli się takie polecenie;
- zaakceptuj lub zmodyfikuj folder docelowy;
- zakończ instalację.

Aby uzyskać więcej szczegółów dotyczących instalacji agenta Horizon 7.1 w wirtualnej maszynie, odwiedź stronę: [Instalacja Horizon Agent w wirtualnej maszynie](http://pubs.vmware.com/horizon-7-view/index.jsp?topic=%2Fcom.vmware.horizon-view.desktops.doc%2FGUID-1F2D0C6E-6379-4B52-A7EA-C1EF09CE2F9B.html){.external}


### Tworzenie snapshotu-wzorca

VMware Horizon wykorzystuje snapshot jako niezmienny wzorzec maszyny wirtualnej służący do utworzenia puli. Dzięki temu operacje, które będą przeprowadzane w późniejszym czasie, nie naruszą bezpośrednio zawartości wirtualnych pulpitów.

- W interfejsie klienta vSphere (tutaj wersja WWW), wybierz szablon VM, następnie menu `Actions`{.action}. Następnie kliknij `Take snapshot`{.action} :

![Tworzenie snapshota](images/1201.png){.thumbnail}

- Wpisz nazwę snapshota (tutaj numer wersji) oraz opis:

![Nazwa snapshota](images/1202.png){.thumbnail}

Po utworzeniu szablonu przejdź do [tworzenia puli](https://docs.ovh.com/pl/cloud-desktop-infrastructure/jak-utworzyc-pule/){.external}.

## Sprawdź również

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.