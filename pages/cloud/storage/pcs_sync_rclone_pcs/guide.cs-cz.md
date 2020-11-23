---
deprecated: true
title: Synchronizace služby Object Storage s nástrojem rClone
slug: sync-rclone-object-storage
section: Object Storage
---

**Poslední aktualizace 18/01/2018**

## Cíl

Službu OVH Object Storage lze synchronizovat pomocí nástroje rClone.

**Cílem této příručky je provést uživatele jednotlivými fázemi synchronizace v Zákaznickém prostoru OVH.**

rClone je externí synchronizační software. Detailní informace týkající se jeho použití naleznete v [oficiální dokumentaci](https://Rclone.org/){.external}.

## Prerekvizity

- *Object Storage* kontejner (lze vytvořit přímo ze Zákaznického prostoru OVH nebo pomocí nástroje [Horizon](https://docs.ovh.com/fr/public-cloud/creer-un-conteneur-dobjets/){.external}).
- [Uživatel OpenStack](https://docs.ovh.com/fr/public-cloud/creation-et-suppression-dun-utilisateur-openstack/){.external}.

## Postup

Po úspěšném vytvoření kontejneru Object Storage a uživatele OpenStack je zapotřebí provést následující kroky:

- Obnovení konfiguračního souboru rClone:

Po vytvoření [uživatele OpenStack](https://docs.ovh.com/fr/public-cloud/creation-et-suppression-dun-utilisateur-openstack/){.external} můžete v Zákaznickém prostoru OVH vybrat možnost obnovení konfiguračního souboru, nezbytného pro použití nástroje rClone.

Za tímto účelem přejděte do rozhraní pro správu uživatelů OpenStack (v Zákaznickém prostoru OVH), klikněte na ikonu klíče na pravém konci řádku daného uživatele a následně vyberte možnost `Stáhnout konfigurační soubor rClone`{.action}.

![Stáhnout konfigurační soubor rClone](images/download_file.png){.thumbnail}


- Konfigurace nástroje rClone:

Jakmile se soubor stáhne, budete moci spustit následující příkaz, jehož prostřednictvím dojde k přidání Vašeho nové úložiště:

```sh
Rclone config
```

Následně budete vyzvání k zadání konfiguračních údajů, obsažených v právě staženém souboru.

> [!primary]
>
> Obsah souboru lze rovněž zkopírovat a vložit do vyhrazeného prostoru v konfiguraci rClone (*.config/Rclone/Rclone.conf*).
> 

Jakmile bude konfigurace dokončena, můžete její správnost otestovat například zadáním příkazu pro vypsání seznamu Vašich kontejnerů:

```sh
Rclone lsd BackupStorage
```

Parametr *BackupStorage* odpovídá názvu Vašeho úložiště.

Na oficiálních stránkách rClone naleznete detailní dokumentaci popisující postup synchronizace služby Object Storage s nástrojem rClone: [Oficiální dokumentace rClone](https://Rclone.org/swift/){.external}.


## Kam dál

Přidejte se k naší uživatelské komunitě na <https://community.ovh.com>.