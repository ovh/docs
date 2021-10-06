---
title: 'Instalacja Veeam Backup & Replication'
slug: veeam-backup-replication
excerpt: 'Dowiedz się, jak zainstalować serwer Veeam Backup & Replication z Veeam Enterprise'
section: Veeam
---

**Ostatnia aktualizacja z dnia 05-10-2021**

## Wprowadzenie

Veeam Backup & Replication jest oprogramowaniem do ochrony danych. Oferuje wiele możliwości tworzenia kopii zapasowych, replikacji i przywracania danych.

**Dowiedz się, jak zainstalować serwer Veeam Backup & Replication, a następnie jak zarejestrować go na serwerze licencji Veeam Enterprise OVH.**


## Wymagania początkowe

* Posiadanie usługi [Veeam Enterprise](https://www.ovh.pl/storage-solutions/veeam-enterprise.xml){.external}
* Posiadanie wirtualnej maszyny z Windows Server 2012 lub 201

> [!primary]
>
> Nasze pakiety Veeam są kompatybilne wyłącznie z najnowszą wersją (10) proponowaną przez Veeam. Prosimy o uwzględnienie tego punktu podczas konfiguracji usługi Veeam.
>

## W praktyce

### Instalacja Veeam Backup & Replication

Pobierz rozwiązanie **Veeam Backup & Replication** ze strony Veeam. Jeśli nie masz konta, utwórz je (bezpłatnie).

Plik ma postać obrazu dysku w formacie ISO. Po przesłaniu pliku na Twój serwer wybierz czytnik CD maszyny, po czym wybierz obraz.

Możesz teraz uruchomić na maszynie kreator instalacji. Następnie wybierz `Veeam Backup & Replication Install`{.action}.

![](images/veeamBandR_inst_01.png){.thumbnail}

Przeczytaj umowę licencyjną i zaakceptuj ją, klikając `Next`{.action}.

![](images/veeamBandR_inst_02.png){.thumbnail}

Aby pominąć etap wprowadzania pliku licencji, kliknij `Next`{.action}.

![](images/veeamBandR_inst_03.png){.thumbnail}

Na etapie wyboru usług, które zostaną zainstalowane nie wprowadzaj żadnych zmian. W zależności od Twoich potrzeb możesz zmienić docelową ścieżkę instalacji. Zatwierdź, klikając `Next`{.action}.

![](images/veeamBandR_inst_04.png){.thumbnail}

Kreator instalacji przeprowadzi teraz kontrolę dotyczącą wymagań oprogramowania. Jeśli rozpoczynasz od czystej instalacji systemu Windows, niektóre komponenty będą niedostępne, ale kreator instalacji pobierze i zainstaluje je automatycznie. Zatwierdź, klikając `Next`{.action}.

![](images/veeamBandR_inst_05.png){.thumbnail}

Następnie zaczekaj, aż zakończy się instalacja wymaganych komponentów.

![](images/veeamBandR_inst_06.png){.thumbnail}

Po realizacji tego etapu zatwierdź instalację **Veeam Backup & Replication**, klikając `Re-run`{.action}.

![](images/veeamBandR_inst_07.png){.thumbnail}

Na etapie wyboru ustawień instalacji zatwierdź tę operację, klikając `Install`{.action}.

![](images/veeamBandR_inst_08.png){.thumbnail}

Zaczekaj, aż instalacja się zakończy.

![](images/veeamBandR_inst_09.png){.thumbnail}

Po jej zakończeniu zamknij kreator instalacji, klikając `Finish`{.action}.

![](images/veeamBandR_inst_10.png){.thumbnail}

Kreator instalacji poprosi o zrestartowanie systemu Windows w celu zakończenia operacji. Wybierz `Yes`{.action}.

![](images/veeamBandR_inst_11.png){.thumbnail}

### Tworzenie konta usługi Veeam Enterprise

#### Utwórz konto usługi

Najpierw wygeneruj **silne** hasło.

Następnie utwórz konto usługi, wprowadzając poniższe wiersze poleceń po zalogowaniu się jako administrator:

```powershell
New-LocalUser "OVHVeeamEnterprise" -Password (ConvertTo-SecureString -AsPlainText "P@ssword01" -Force) -Description "OVH Service Account for Veeam Enterprise" -PasswordNeverExpires:$true -UserMayNotChangePassword:$true -AccountNeverExpires:$true
```

Pamiętaj, że nazwa konta i hasło są przykładowe i należy je zmienić:
 * Nazwa konta: OVHVeeamEnterprise
 * Hasło: P@ssword01

#### Określ dostępy dla usługi

Uruchom konsolę Veeam.

![](images/veeamBandR_use_12.png){.thumbnail}

Sprawdź, czy pracujesz w trybie **Free Edition** w prawym dolnym rogu.

![](images/veeamBandR_conf_13.PNG){.thumbnail}

Przejdź do menu, następnie kliknij `Users and Roles`{.action}.

![](images/veeamBandR_conf_14.PNG){.thumbnail}

W oknie `Security`{.action} wybierz `Add...`{.action}.

![](images/veeamBandR_conf_15.PNG){.thumbnail}

Następnie w oknie `Add User`{.action} wybierz utworzone konto usługi. Wybierz rolę **Veeam Backup Administrator** i zatwierdź przyciskiem `OK`{.action}.

![](images/veeamBandR_conf_15.PNG){.thumbnail}

W oknie **Security** możesz sprawdzić, czy konto zostało utworzone.

![](images/veeamBandR_conf_16.PNG){.thumbnail}

#### Zezwolenia na wykonywanie i aktywację

Użytkownik OVHVeeamEnterprise jest dostępny tylko lokalnie, dlatego aby włączyć zdalne połączenie, należy dodać uprawnienia do graficznego interfejsu użytkownika Windows.

Za pomocą interfejsu graficznego użytkownika:

1. W pasku wyszukiwania Windows wpisz `Component Services`{.action} i uruchom usługę.
2. W menu po lewej stronie i po drzewie kliknij `Component Services`{.action}, następnie `Computers`{.action}, a następnie `My Computer`{.action}.
3. Po prawej stronie w zakładce `Actions`{.action} kliknij `More Actions`{.action}, a następnie `Properties`{.action}.
4. Przejdź do `COM Security`{.action} i do drugiej opcji `Launch and Activation Permissions`{.action}, kliknij `Edit Limits`{.action}.
5. Kliknij na użytkownika `OVHVeeamEnterprise`{.action} i aktywuj wszystkie uprawnienia.

![Launch and Activation Permissions](images/permissionsuserveam.png){.thumbnail}

6. Kliknij `OK`{.action}, aby potwierdzić i `Apply`{.action}, aby zatwierdzić zmiany.

Twój użytkownik OVHVeeamEnterprise jest teraz dostępny lokalnie i zdalnie.

#### Zarejestruj licencję dla serwera Veeam Backup & Replication

Operację tę należy przeprowadzić za pośrednictwem API OVH.

Najpierw pobierz serviceName:

> [!api]
>
> @api {GET} /veeam/veeamEnterprise
>

Następnie przeprowadź rejestrację:

> [!api]
>
> @api {POST} /veeam/veeamEnterprise/{serviceName}/register
>

Przygotuj następujące informacje:

 * publiczny adres IP, za pomocą którego możesz połączyć się z serwerem **Veeam Backup & Replication**;
 * port serwera **Veeam Backup & Replication** (domyślnie **9392/TCP**);
 * login do utworzonego konta;
 * hasło do konta.

Pobierz publiczny adres IP używany przez Veeam Enterprise do łączenia się z serwerem Veeam Backup & Replication:

> [!api]
>
> @api {GET} /veeam/veeamEnterprise/{serviceName}
>

#### Sprawdź poprawność rejestracji

Uruchom konsolę Veeam.

![](images/veeamBandR_use_12.png){.thumbnail}

Przejdź do menu, następnie kliknij `Licence`{.action}.

![](images/veeamBandR_lic_1.png){.thumbnail}

Upewnij się, czy wyświetlane informacje dotyczą Twojej licencji OVH.

![](images/veeamBandR_lic_2.png){.thumbnail}

## Sprawdź również

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.