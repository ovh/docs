---
title: 'Aplikace OVF šablony'
slug: pouziti-sablony-ovh
excerpt: 'Naučte se pracovat s OVF šablonou v tlustém klientovi vSphere'
section: 'Služby a volitelná rozšíření OVH'
---

**Poslední aktualizace 28/05/2018**

## Cíl

OVH poskytuje šablony operačních systémů Windows (ve formátu OVF), které lze na Vašem virtuálním stroji aplikovat přímo pomocí tlustého klienta vSphere.

**V této příručce se dozvíte, kde jsou umístěny zdrojové soubory a jak s nimi pracovat.**

## Prerekvizity

- Přístup k webovému klientovi
- Aktivní licence Windows (aktivaci lze provést prostřednictvím [Zákaznického prostoru OVH](https://www.ovh.com/auth/?action=gotomanager){.external}, záložka `Licence Windows`{.action} u příslušného datacentra). 


## Postup

### Získání URL adresy OVF šablony

Prostřednictvím webového prohlížeče přejděte na hlavní stránku svého Private Cloud řešení a klikněte na tlačítko `OVH Templates`{.action}.

![Název obrázku](images/gatewayssl.png){.thumbnail}

Na stránce `Templates Library` klikněte na `Windows`{.action}. Následně se zobrazí nabídka dostupných šablon pro jednotlivé operační systémy Windows.

Klikněte pravým tlačítkem myši na požadovanou šablonu a zkopírujte si její URL adresu (Copy Link Andress):

![Název obrázku](images/copylink.png){.thumbnail}


### Aplikace OVF šablony

Po připojení k webovému klientovi vSphere přejděte na stránku `Host and Clusters`{.action}. Pravým tlačítkem myši klikněte na své datacentrum a vyberte možnost `Deploy OVF Template...`{.action}:

![Název obrázku](images/selectdeploy.png){.thumbnail}

Zobrazí se kontextová nabídka, v jejímž rámci budete požádáni o upřesnění konfigurace aplikované šablony: Ze všeho nejdříve zadejte URL adresu šablony, kterou jste si v předcházející fázi zkopírovali do schránky:

![Název obrázku](images/puturl.png){.thumbnail}

V dalším kroku vyberte datacentrum, v němž má být virtuální stroj spuštěn:

![Název obrázku](images/selectdatacenter.png){.thumbnail}

Vyberte cluster, v němž má být virtuální stroj spuštěn:

![Název obrázku](images/selectcluster.png){.thumbnail}

Následně se zobrazí přehled informací o šabloně, včetně výchozího přístupového hesla.
 Z bezpečnostních důvodů je důležité heslo při prvním připojení změnit:

![Název obrázku](images/detailstemplate.png){.thumbnail}

Vyberte datové úložiště pro ukládání dat příslušného virtuální stroje a zvolte formát disku:

![Název obrázku](images/selectdatastore.png){.thumbnail}

Vyberte síť, která má být použita.

![Název obrázku](images/selectnetwork.png){.thumbnail}

V poslední fázi Vám bude nabídnut detailní přehled zvolené konfigurace:

![Název obrázku](images/resume.png){.thumbnail}

Po kliknutí na tlačítko `Finish`{.action} se vytvoří úkol, díky němuž budete moci sledovat průběh aplikačního procesu.

![Název obrázku](images/startdeploy.png){.thumbnail}

Po úspěšném dokončení můžete okno zavřít.

Nově spuštěný virtuální stroj nyní naleznete ve svém inventáři.

![Název obrázku](images/inventory.png){.thumbnail}


## Kam dál

Sdílejte své zkušenosti s uživatelskou komunitou na <https://community.ovh.com/en/>.