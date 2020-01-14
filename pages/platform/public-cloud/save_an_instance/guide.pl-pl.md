---
title: 'Tworzenie kopii zapasowej instancji'
slug: kopia_zapasowa_instancji
excerpt: 'Dowiedz się, jak w prosty sposób utworzyć kopię zapasową instancji Public Cloud'
section: 'Zarządzanie w Panelu klienta OVH'
---

**Ostatnia aktualizacja z dnia 22-11-2019**

## Wprowadzenie

Możesz w dowolnym momencie utworzyć w [Panelu klienta](https://www.ovh.com/auth/?action=gotomanager){.external} kopię zapasową instancji. Dzięki kopii zapasowej możesz przywrócić Twoją instancję z pierwotną konfiguracją lub też ją odtworzyć.

**Utwórz w prosty sposób kopię zapasową instancji Public Cloud.**

## Wymagania początkowe

- [Utworzona na Twoim koncie instancja Public Cloud](https://docs.ovh.com/pl/public-cloud/tworzenie_instancji_w_panelu_klienta_ovh/)
- Dostęp do [Panelu klienta OVH](https://www.ovh.com/auth/?action=gotomanager){.external}

## W praktyce

### Tworzenie kopii zapasowej instancji

Zaloguj się do [panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}, wybierz kartę Public Cloud,  a następnie rubrykę`Instances`{.action} (Instancje).

Kliknij wówczas wielokropek `...`{.action} z prawej strony wybranej instancji, a następnie `Create snapshot`{.action} (Utwórz kopię zapasową).

![public-cloud-instance-backup](images/createbackup1.png){.thumbnail}

Nazwij tę kopię zapasową na następnej stronie.

![public-cloud-instance-backup](images/createbackup2.png){.thumbnail}

Utworzona kopia zapasowa będzie dostępna w rubryce`Instance Backup`{.action} (Kopia zapasowa instancji).

![public-cloud-instance-backup](images/createbackup3.png){.thumbnail}

### Automatyczne tworzenie kopii zapasowej instancji

W rubryce `Instances`{.action} (Instancje) wybierz opcję `Create an automatic backup`{.action} (Ustaw automatyczne tworzenie kopii zapasowej) w działaniach dostępnych dla danej instancji.

![public-cloud-instance-backup](images/createbackup4.png){.thumbnail}

Na następnej stronie musisz podać wiele informacji:

#### **Workflow (Przepływ pracy)** 

Obecnie istnieje tylko jeden przepływ pracy, który odpowiada za tworzenie kopii zapasowej instancji i jej głównego woluminu.

![public-cloud-instance-backup](images/createbackup5.png){.thumbnail}

#### **Ressource (Zasób)**. 

Wystarczy wybrać instancję, dla której ma być tworzona kopia zapasowa.

![public-cloud-instance-backup](images/createbackup6.png){.thumbnail}

#### **Schedule (Harmonogram)** 

Tutaj określisz częstotliwość tworzenia kopii zapasowych. Domyślnie proponowane są dwie opcje:

* Kopia zapasowa tworzona codziennie, z maksymalnie 7-dniową historią.
* Kopia zapasowa tworzona codziennie, z maksymalnie 14-dniową historią.

![public-cloud-instance-backup](images/createbackup7.png){.thumbnail}

    
#### **Name (Nazwa)** 

Tutaj nadasz nazwę zadaniu tworzenia kopii zapasowej.
 
![public-cloud-instance-backup](images/createbackup8.png){.thumbnail}

Po utworzeniu kopii zapasowej stanie się ona dostępna w rubryce `Workflow Management`{.action} (Zarządzanie przepływami pracy):

![public-cloud-instance-backup](images/createbackup9.png){.thumbnail}

Kopie zapasowe będą dostępne w rubryce `Instance Backup`{.action} (Kopia zapasowa instancji) pod nadanymi im nazwami.


## Sprawdź również

Dołącz do społeczności naszych użytkowników na stronie<https://community.ovh.com/en>.