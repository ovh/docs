---
title: 'Instalacja Veeam Backup & Replication'
excerpt: 'Dowiedz się, jak zainstalować serwer Veeam Backup & Replication z Veeam Enterprise'
updated: 2023-06-23
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk “Zgłóś propozycję modyfikacji” na tej stronie.
>

## Wprowadzenie

Veeam Backup & Replication jest oprogramowaniem do ochrony danych. Oferuje wiele możliwości tworzenia kopii zapasowych, replikacji i przywracania danych.

**Dowiedz się, jak zainstalować serwer Veeam Backup & Replication, a następnie jak zarejestrować go na serwerze licencji Veeam Enterprise OVHcloud.**

## Wymagania początkowe

* Posiadanie usługi [Veeam Enterprise](https://www.ovhcloud.com/pl/storage-solutions/veeam-enterprise/){.external}.
* Posiadanie wirtualnej maszyny z Windows Server 2012 lub nowszej wersji.

## W praktyce

### Instalacja Veeam Backup & Replication

Pobierz rozwiązanie **Veeam Backup & Replication** ze [strony Veeam](https://www.veeam.com/downloads.html?ad=top-sub-menu){.external}. Jeśli nie masz konta, utwórz je (bezpłatnie).

Plik ma postać obrazu dysku w formacie ISO. Po przesłaniu pliku na Twój serwer wybierz czytnik CD maszyny, po czym wybierz obraz.

Możesz teraz uruchomić na maszynie kreator instalacji. Następnie wybierz `Veeam Backup & Replication Install`{.action}.

![Veeam Backup & Replication](images/veeamBandR_inst_01.png){.thumbnail}

Przeczytaj umowę licencyjną i zaakceptuj ją, klikając `Next`{.action}.

![Veeam Backup & Replication](images/veeamBandR_inst_02.png){.thumbnail}

Aby pominąć etap wprowadzania pliku licencji, kliknij `Next`{.action}.

![Veeam Backup & Replication](images/veeamBandR_inst_03.png){.thumbnail}

Na etapie wyboru usług, które zostaną zainstalowane nie wprowadzaj żadnych zmian. W zależności od Twoich potrzeb możesz zmienić docelową ścieżkę instalacji. Zatwierdź, klikając `Next`{.action}.

![Veeam Backup & Replication](images/veeamBandR_inst_04.png){.thumbnail}

Kreator instalacji przeprowadzi teraz kontrolę dotyczącą wymagań oprogramowania. Jeśli rozpoczynasz od czystej instalacji systemu Windows, niektóre komponenty będą niedostępne, ale kreator instalacji pobierze i zainstaluje je automatycznie. Zatwierdź, klikając `Next`{.action}.

![Veeam Backup & Replication](images/veeamBandR_inst_05.png){.thumbnail}

Następnie zaczekaj, aż zakończy się instalacja wymaganych komponentów.

![Veeam Backup & Replication](images/veeamBandR_inst_06.png){.thumbnail}

Po realizacji tego etapu zatwierdź instalację **Veeam Backup & Replication**, klikając `Next`{.action}.

![Veeam Backup & Replication](images/veeamBandR_inst_07.png){.thumbnail}

Na etapie wyboru ustawień instalacji zatwierdź tę operację, klikając `Install`{.action}.

![Veeam Backup & Replication](images/veeamBandR_inst_08.png){.thumbnail}

Zaczekaj, aż instalacja się zakończy.

![Veeam Backup & Replication](images/veeamBandR_inst_09.png){.thumbnail}

Po jej zakończeniu zamknij kreator instalacji, klikając `Finish`{.action}.

![Veeam Backup & Replication](images/veeamBandR_inst_10.png){.thumbnail}

Zostaniesz przekierowany do asystenta instalacji. Wystarczy zamknąć okno.

### Tworzenie konta usługi Veeam Enterprise

#### Krok 1 - Utwórz konto usługi

Najpierw wygeneruj **silne** hasło.

Aby rozpocząć, uruchom Windows Powershell jako administrator.

Następnie utwórz konto usługi, wprowadzając poniższe wiersze poleceń po zalogowaniu się jako administrator:

```powershell
New-LocalUser "OVHVeeamEnterprise" -Password (ConvertTo-SecureString -AsPlainText "P@ssword01" -Force) -Description "OVH Service Account for Veeam Enterprise" -PasswordNeverExpires:$true -UserMayNotChangePassword:$true -AccountNeverExpires:$true
```

Pamiętaj, że nazwa konta i hasło są przykładowe i należy je zmienić:

- Nazwa konta: OVHVeeamEnterprise
- Hasło: P@ssword01

####  Krok 2 - Określ dostępy dla usługi

Uruchom konsolę Veeam.

![Veeam Backup & Replication](images/veeamBandR_use_12.png){.thumbnail}

Sprawdź, czy pracujesz w trybie **Community Edition** w prawym dolnym rogu.

![Veeam Backup & Replication](images/Veeamcommunity.png){.thumbnail}

Przejdź do menu, następnie kliknij `Users and Roles`{.action}.

![Veeam Backup & Replication](images/veeamBandR_conf_2.png){.thumbnail}

W oknie `Security`{.action} wybierz `Add...`{.action}.

![Veeam Backup & Replication](images/veeamBandR_conf_3.png){.thumbnail}

Następnie w oknie `Add User`{.action} wybierz utworzone konto usługi. Wybierz rolę **Veeam Backup Administrator** i zatwierdź przyciskiem `OK`{.action}.

![Veeam Backup & Replication](images/veeamBandR_conf_4.png){.thumbnail}

W oknie **Security** możesz sprawdzić, czy konto zostało utworzone.

![Veeam Backup & Replication](images/veeamBandR_conf_5.png){.thumbnail}

#### Krok 3 - Zezwolenia na wykonywanie i aktywację

Użytkownik OVHVeeamEnterprise jest dostępny tylko lokalnie, dlatego aby włączyć zdalne połączenie, należy dodać uprawnienia do graficznego interfejsu użytkownika Windows.

Za pomocą interfejsu graficznego użytkownika:

1. W pasku wyszukiwania Windows wpisz `Component Services`{.action} i uruchom usługę.
2. W menu po lewej stronie i po drzewie kliknij `Component Services`{.action}, następnie `Computers`{.action}, a następnie `My Computer`{.action}.
3. Po prawej stronie w zakładce `Actions`{.action} kliknij `More Actions`{.action}, a następnie `Properties`{.action}.
4. Przejdź do `COM Security`{.action} i do drugiej opcji `Launch and Activation Permissions`{.action}, kliknij `Edit Limits`{.action}. Następnie kliknij polecenie `Add...`{.action}.

![Launch and Activation Permissions](images/veeamuseradd.png){.thumbnail}

<ol start="5">
<li>Kliknij na <code class="action">Advanced...</code> aby zlokalizować konto usługi wcześniej dodane. Następnie kliknij polecenie <code class="action">Find Now</code> i wybierz użytkownika <code class="action">OVHVeeamEnterprise</code> z listy użytkowników.</li>
</ol>

![Launch and Activation Permissions](images/veeamuseradd1.png){.thumbnail}

<ol start="6">
<li>Kliknij na <code class="action">OK</code>, aby potwierdzić wybór i na <code class="action">OK</code>, aby zatwierdzić. Następnie aktywuj wszystkie uprawnienia dla użytkownika <code class="action">OVHVeeamEnterprise</code>.</li>
</ol>

![Launch and Activation Permissions](images/veeamuseradd3.png){.thumbnail}

<ol start="7">
<li>Kliknij <code class="action">OK</code>, aby potwierdzić i <code class="action">Apply</code>, aby zatwierdzić zmiany.</li>
</ol>

Twój użytkownik OVHVeeamEnterprise jest teraz dostępny lokalnie i zdalnie.

#### Krok 4 - Zarejestruj licencję dla serwera Veeam Backup & Replication

##### W panelu klienta OVHcloud

Zaloguj się do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external}, przejdź do sekcji `Hosted Private Cloud`{.action} i wybierz `Platformy i usługi`{.action}. Następnie wybierz Twoją usługę **backup serverenterprise**, a następnie kliknij przycisk `Aktywuj licencję`{.action} w sekcji `Skróty`.

Upewnij się, że otworzyłeś porty OVHcloud do Twoich serwerów Veeam Backup i Replication:

- `Port 9392/TCP`
- `Port 9405/TCP`

![installation Veeam](images/architecture.png){.thumbnail}

![control panel register](images/veeam001.png){.thumbnail}

W nowym oknie wpisz następujące informacje:

- Publiczny adres IP, przez który jest osiągalny serwer **Veeam Backup & Replication**.
- Utworzone wcześniej poświadczenia logowania (nazwa użytkownika i hasło).

Zatwierdź, klikając przycisk `OK`{.action}.

![activation licence](images/veeam03.png){.thumbnail}

Po aktywacji informacje będą dostępne na stronie usługi.

![licence activated](images/veeam02.png){.thumbnail}

##### Za pomocą interfejsu API OVHcloud

Najpierw pobierz serviceName:

> [!api]
>
> @api {v1} /veeam/veeamEnterprise GET /veeam/veeamEnterprise
>

Następnie przeprowadź rejestrację:

> [!api]
>
> @api {v1} /veeam/veeamEnterprise POST /veeam/veeamEnterprise/{serviceName}/register
>

Przygotuj następujące informacje:

 * publiczny adres IP, za pomocą którego możesz połączyć się z serwerem **Veeam Backup & Replication**;
 * port serwera **Veeam Backup & Replication** (domyślnie **9392/TCP**);
 * login do utworzonego konta;
 * hasło do konta.

Pobierz publiczny adres IP używany przez Veeam Enterprise do łączenia się z serwerem Veeam Backup & Replication:

> [!api]
>
> @api {v1} /veeam/veeamEnterprise GET /veeam/veeamEnterprise/{serviceName}
>

> [!primary]
> Aktywacja serwera Veeam Backup & Replication może trwać kilka godzin.

#### Krok 5 - Sprawdź poprawność rejestracji

Uruchom konsolę Veeam.

![Veeam Backup & Replication](images/veeamBandR_use_12.png){.thumbnail}

Przejdź do menu, następnie kliknij `License`{.action}.

![Veeam Backup & Replication](images/veeamBandR_lic_1.png){.thumbnail}

Upewnij się, czy wyświetlane informacje dotyczą Twojej licencji OVHcloud.

Jeśli wszystko pójdzie dobrze, powinieneś zobaczyć "Edition: Enterprise Plus".

> [!primary]
> Możesz wyłączyć użytkownika, którego utworzyłeś do tworzenia rejestracji.

![licence OVHcloud](images/veeamBandR_lic_2.png){.thumbnail}

## Sprawdź również

Przyłącz się do społeczności naszych użytkowników na Discord: <https://discord.gg/ovhcloud>

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.
