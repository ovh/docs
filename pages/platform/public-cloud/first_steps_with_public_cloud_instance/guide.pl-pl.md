---
title: 'Pierwsze kroki z instancją Public Cloud'
excerpt: 'Dowiedz się, jak rozpocząć korzystanie z instancji Public Cloud'
slug: rozpoczecie_pracy_z_instancja_public_cloud
legacy_guide_number: g2018
section: 'Pierwsze kroki'
---

**Ostatnia aktualizacja: 04-12-2019**

## Wprowadzenie

Instancjami OVHcloud Public Cloud można łatwo zarządzać za pośrednictwem [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}. Znajdują się w nim informacje o całej infrastrukturze (instancjach, kopiach zapasowych, dyskach, kluczach SSH itd.) oraz projektach przestrzeni dyskowej (w tym lista kontenerów).

**Dowiedz się, jak rozpocząć pracę z instancją Public Cloud.**

### Wymagania początkowe

- [instancja OVHcloud Public Cloud](https://docs.ovh.com/pl/public-cloud/tworzenie_instancji_w_panelu_klienta_ovh/){.external}
- [klucz SSH](https://docs.ovh.com/pl/public-cloud/tworzenie-kluczy-ssh/){.external}

### W praktyce

### Dostęp do interfejsu zarządzania instancją

Najpierw zaloguj się do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}, przejdź do sekcji „Public Cloud” i wybierz odpowiednią usługę Public Cloud. Następnie kliknij kartę `Instancje`{.action} po lewej stronie.

Zostanie wyświetlona strona ze skrótem informacji o wszystkich instancjach. Widoczne będą następujące informacje:

- model instancji
- nazwa i region
- możliwe dyski twarde
- adresy IP instancji
- stany

![public-cloud](images/compute.png){.thumbnail}

### Edycja konfiguracji instancji

W interfejsie zarządzania instancją kliknij ikonę z trzema kropkami (po prawej stronie instancji) i wybierz pozycję `Edytuj`{.action}.

![public-cloud](images/edit.png){.thumbnail}

Zostanie wyświetlone okno, w którym można:

- zmienić nazwę instancji
- zmienić model instancji 
- zainstalować ponownie instancję w innym systemie operacyjnym (**uwaga: wykonanie takiej operacji spowoduje usunięcie bieżących danych przechowywanych w instancji**)
- zmienić rozliczanie godzinowe na stałą stawkę miesięczną (zostanie wystawiony rachunek na kwotę proporcjonalną do liczby dni w miesiącu — począwszy od dnia zmiany)

![public-cloud](images/edit1.png){.thumbnail}
![public-cloud](images/edit2.png){.thumbnail}
![public-cloud](images/edit3.png){.thumbnail}

### Tworzenie kopii zapasowej instancji

Z poziomu strony administracyjnej instancji można utworzyć jej kopię zapasową.  Aby to zrobić, kliknij ikonę z trzema kropkami (po prawej stronie instancji) i wybierz pozycję `Utwórz kopię zapasową`{.action}. Zostanie wyświetlona strona ze wszystkimi niezbędnymi informacjami: ![public-cloud](images/backup.png){.thumbnail}

Zostaną też wyświetlone następujące informacje: ![public-cloud](images/backup1.png){.thumbnail}

Po potwierdzeniu zostaną wyświetlone następujące informacje: ![public-cloud](images/backup2.png){.thumbnail}

Utworzona kopia zapasowa będzie widoczna w sekcji `Kopia zapasowa instancji`{.action}: ![public-cloud](images/backup3.png){.thumbnail}

Pomocne informacje dotyczące kopii zapasowej można znaleźć w przewodniku [Tworzenie kopii zapasowej instancji](https://docs.ovh.com/pl/public-cloud/kopia_zapasowa_instancji/){.external}. 

### Tworzenie automatycznej kopii zapasowej instancji

Z poziomu strony administracyjnej instancji można zaplanować automatyczne tworzenie jej kopii zapasowej. Aby to zrobić, kliknij ikonę z trzema kropkami (po prawej stronie instancji) i wybierz pozycję `Utwórz automatyczną kopię zapasową`{.action}: ![public-cloud](images/backupauto.png){.thumbnail}

Zostanie wyświetlona następująca strona: ![public-cloud](images/backupauto1.png){.thumbnail}

Po wybraniu niezbędnych informacji i kliknięciu przycisku Utwórz nastąpi przekierowanie do następującej strony: ![public-cloud](images/backupauto2.png){.thumbnail}

W dowolnym momencie można przejść do strony `Zarządzania przepływem pracy`{.action} i usunąć bieżący proces automatycznego tworzenia kopii zapasowej: ![public-cloud](images/backupautodelete.png){.thumbnail}

Pomocne informacje dotyczące kopii zapasowej można znaleźć w przewodniku [Tworzenie kopii zapasowej instancji](../back-up-instance/). 

### Pobieranie danych do logowania

W interfejsie zarządzania instancją kliknij pozycję `Szczegóły dotyczące instancji` i sprawdź informacje w sekcji `Informacje o logowaniu`{.action}. Można tam znaleźć polecenia SSH potrzebne do nawiązania połączenia z instancją.

![public-cloud](images/instancedetails1.png){.thumbnail}
![public-cloud](images/instancedetails.png){.thumbnail}

### Dostęp do konsoli VNC

Konsola VNC umożliwia bezpośredni dostęp do instancji. Do tego jest jednak potrzebne skonfigurowane hasło administratora (użytkownika root).

Aby uzyskać dostęp do konsoli, kliknij pozycję `Konsola VNC`{.action} na pulpicie nawigacyjnym instancji.

![public-cloud](images/vnc.png){.thumbnail}

Zostanie wyświetlona konsola:

![public-cloud](images/vnc1.png){.thumbnail}

### Restart instancji

Istnieją dwa sposoby zrestartowania instancji:

- Restart programowy
- Restart sprzętowy

W interfejsie zarządzania instancją kliknij ikonę z trzema kropkami (po prawej stronie instancji) i wybierz pozycję `Restart programowy`{.action} lub `Restart sprzętowy`{.action}.

Następnie potwierdź żądanie w wyświetlonym oknie.

![public-cloud](images/reboot.png){.thumbnail}

### Ponowna instalacja instancji

Instancję można zainstalować ponownie z zachowaniem tego samego systemu operacyjnego. **Uwaga: ponowna instalacja spowoduje usunięcie bieżących danych przechowywanych w instancji.**

W interfejsie zarządzania instancją kliknij ikonę z trzema kropkami (po prawej stronie instancji) i wybierz pozycję `Zainstaluj ponownie`{.action}. Następnie kliknij Potwierdź, aby rozpocząć proces.

![public-cloud](images/reinstall.png){.thumbnail}

### Usuwanie instancji

Instancję można również usunąć. **Ta operacja spowoduje trwałe usunięcie instancji oraz wszystkich przechowywanych w niej danych.**

W interfejsie zarządzania instancją kliknij ikonę strzałki w dół i wybierz pozycję `Usuń`{.action}. Następnie kliknij Potwierdź, aby rozpocząć proces. 

![public-cloud](images/delete.png){.thumbnail}

## Sprawdź również

Dołącz do naszej społeczności użytkowników: <https://community.ovh.com/en/>.