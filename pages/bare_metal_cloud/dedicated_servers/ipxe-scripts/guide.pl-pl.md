---
title: "Skonfiguruj spersonalizowany skrypt iPXE, aby uruchomić serwer przez API OVHcloud"
excerpt: "Dowiedz się, jak API OVHcloud pozwala na skonfigurowanie spersonalizowanego skryptu PXE do uruchamiania serwera"
updated: 2023-08-24
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk “Zgłóś propozycję modyfikacji” na tej stronie.
>

## Wprowadzenie

> [!warning]
>
> Ten artykuł jest przeznaczony dla doświadczonych użytkowników, którzy posiadają co najmniej podstawową wiedzę na temat [rozruchu PXE](https://en.wikipedia.org/wiki/Preboot_Execution_Environment) oraz na temat wdrażania w OVHcloud: [PXE](https://ipxe.org/).
>

W Panelu klienta OVHcloud] można wybrać tryb bootowania spośród wstępnie zdefiniowanych trybów: dysk główny lub rescue.
Za pośrednictwem [API OVHcloud](https://api.ovh.com/) możesz również zdefiniować własne skrypty.

Spersonalizowany skrypt może być interesujący w następujących przypadkach:

- Używasz systemu operacyjnego, który nie chcesz instalować na dysku i który pozostaje tylko w pamięci RAM.
- Robisz multicloud i jeden z innych dostawców, których używasz, nie oferuje systemu operacyjnego, który chcesz zainstalować w swoim katalogu ani innego rozwiązania, takiego jak [BringYourOwnImage](/pages/bare_metal_cloud/dedicated_servers/bring-your-own-image). Szukasz unikalnej i znormalizowanej metody instalacji u każdego dostawcy? Zbudowałeś swój własny obraz trybu rescue instalacyjnego umożliwiającego zarządzanie pełną instalacją serwera dedykowanego.

## Wymagania początkowe

- Serwer [dedykowany](https://www.ovhcloud.com/pl/bare-metal/) **gotowy do uruchomienia/rebootu** na Twoim koncie OVHcloud.
- Dostęp do [API OVHcloud](https://api.ovh.com/).

> [!warning]
>
> Restart serwera dedykowanego może spowodować przerwanie świadczenia nieredundantnych usług, które zależą wyłącznie od zrestartowanego serwera.
>

> [!warning]
>
> Ta funkcja jest dostępna tylko na serwerach `UEFI`. Aktualnie pracujemy nad dodaniem tej funkcji na serwerach w trybie boot `LEGACY`.
>

## W praktyce

### Zarządzanie skryptem iPXE dla serwera dedykowanego <a name="manageIpxeScript"></a>

#### Zmień skrypt iPXE serwera <a name="changeIpxeScript"></a>

> [!api]
>
> @api {v1} /dedicated/server PUT /dedicated/server/{serviceName}
>

Określ skrypt w atrybucie `bootScript` bezpośrednio.

#### Skrypt iPXE serwera <a name="getIpxeScript"></a>

> [!api]
>
> @api {v1} /dedicated/server GET /dedicated/server/{serviceName}
>

Twój skrypt znajduje się w atrybucie `bootScript`.

Przykład:

```json
{
    "noIntervention": false,
    "name": "nsXXXXXXX.ip-XXX-XXX-XXX.eu",
    "rack": "SXXXBXX",
    "commercialRange": "fs",
    "os": "debian11_64",
    "rootDevice": null,
    "rescueMail": null,
    "linkSpeed": 1000,
    "bootScript": "#!ipxe\necho Boot first local hdd in LEGACY mode\nsanboot --no-describe --drive 0x80\nexit 1\n",
    "reverse": "nsXXXXXXX.ip-XXX-XXX-XXX.eu",
    "state": "ok",
    "ip": "XXX.XXX.XXX.XXX",
    "bootId": null,
    "newUpgradeSystem": false,
    "datacenter": "sbg3",
    "professionalUse": false,
    "supportLevel": "pro",
    "serverId": 123456,
    "powerState": "poweron",
    "monitoring": false
}
```

Możesz teraz zrestartować serwer. Skrypt [iPXE](https://ipxe.org/) zostanie wykorzystany do uruchomienia serwera.

### Inne tryby uruchamiania <a name="leaveIpxeScript"></a>

W każdej chwili możesz ponownie przełączyć się na dysk lub na tryb Rescue w [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl) (zapoznaj się z naszym przewodnikiem "[Włącz i użyj trybu Rescue](/pages/bare_metal_cloud/dedicated_servers/rescue_mode)") lub przez [API OVHcloud](https://api.ovh.com/).

#### Przełącz na dysk <a name="switchToDisk"></a>

> [!api]
>
> @api {v1} /dedicated/server PUT /dedicated/server/{serviceName}
>

Określ `1` w atrybucie `bootId`.

> [!api]
>
> @api {v1} /dedicated/server GET /dedicated/server/{serviceName}
>

Zauważcie, że wartość atrybutu `bootScript` jest teraz zerowa.

## Więcej informacji <a name="gofurther"></a>

[Restart serwera dedykowanego](/pages/bare_metal_cloud/dedicated_servers/getting-started-with-dedicated-server#reboot)

[Uruchamianie i korzystanie z trybu Rescue](/pages/bare_metal_cloud/dedicated_servers/rescue_mode)

[iPXE - open source boot firmware](https://ipxe.org/)

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.
