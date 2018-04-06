---
title: 'Správa bezpečnostních skupin v rozhraní Horizon'
excerpt: 'Zjistěte, jak vytvářet a mazat bezpečnostní skupiny v rozhraní Horizon'
slug: sprava-bezpecnostnich-skupin-horizon
section: 'Rozhraní Horizon'
---

**Poslední aktualizace 06/04/2018**

## Cíl

Bezpečnostní skupiny představují skupiny pravidel pro filtrování IP adres a portů. Tato pravidla jsou aplikována na všechny instance daného projektu a definují síťový přístup k instanci. Pravidla skupiny jsou vlastní každému projektu. Členové projektu mohou výchozí pravidla skupiny modifikovat a přidávat nová pravidla.

Všechny projekty disponují výchozí bezpečnostní skupinou, aplikovanou pro každou instanci, která nemá nadefinovanou jinou bezpečnostní skupinu. Výchozí nastavení bezpečnostních skupin OVH autorizuje odchozí i příchozí traffic instancí.

**Zjistěte, jak vytvářet a mazat bezpečnostní skupiny pomocí rozhraní Horizon.**

## Prerekvizity

- Přístup do [rozhraní Horizon](https://docs.ovh.com/cz/cs/public-cloud/vytvoreni-pristupu-horizon/){.external}.

## Postup

Ze všeho nejdříve se připojte k rozhraní [Horizon](https://horizon.cloud.ovh.net/){.external}. Pomocí nabídky v horní liště (po pravé straně loga OVH) vyberte region, v němž si přejete bezpečnostní skupinu vytvořit.

![Výběr regionu](images/1_H_sec_groups_region_choosing.png){.thumbnail}

Nová bezpečnostní skupina bude vytvořena v rámci vybraného regionu. Pokud má být daná bezpečnostní skupina aplikována i v dalších regionech, je zapotřebí ji pro každý region vytvořit zvlášť.

Klikněte na tlačítko `Network`{.action} v levém postranním panelu a následně na `Security Groups`{.action}:

![Bezpečnostní skupiny](images/2_H_crete_sec_group.png){.thumbnail}

Pro vytvoření nové bezpečnostní skupiny klikněte na tlačítko `+ Create Security Group`{.action}. Skupinu pojmenujte a připojte k ní popis (nepovinné):

![Vytváření bezpečnostních skupin](images/3_H_new_sec_gr_name.png){.thumbnail}

Volbu potvrďte kliknutím na tlačítko `Create Security Group`{.action}.

Pro odstranění bezpečnostní skupiny stačí požadovanou skupinu označit a kliknout na tlačítko `Delete Security Groups`{.action}.

## Kam dál

Sdílejte své zkušenosti s uživatelskou komunitou na <https://community.ovh.com/en/>.