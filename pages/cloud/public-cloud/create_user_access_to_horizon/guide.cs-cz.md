---
title: 'Přístup do rozhraní Horizon'
slug: vytvoreni-pristupu-horizon
excerpt: 'Zjistěte, jak se připojit k rozhraní Horizon'
section: 'Rozhraní Horizon'
order: 1
---

**Poslední aktualizace 06/04/2018**

## Cíl

Horizon je grafické administrační rozhraní platformy OpenStack. Určité funkce pro správu platformy jsou dostupné pouze prostřednictvím tohoto rozhraní.

**Zjistěte, jak se připojit k rozhraní Horizon.**

## Prerekvizity

- Public Cloud projekt.

## Postup

### Vytvoření uživatele OpenStack.

Pro přístup do rozhraní Horizon je zapotřebí disponovat uživatelským účtem OpenStack. Za účelem vytvoření uživatelského účtu přejděte do Zákaznického prostoru OVH. V sekci `Cloud`{.action} rozklikněte položku `Servery`{.action} a vyberte požadovaný projekt. Následně klikněte na tlačítko `OpenStack`{.action} v levém postranním panelu.

![Přidání uživatele](images/1_H_add_user.png){.thumbnail}

Klikněte na tlačítko `Přidat uživatele`{.action} a zadejte jeho popis. Uživatelské jméno a heslo budou vygenerovány automaticky. Po dokončení operace se zobrazí lišta s potvrzením o úspěšném vytvoření nového uživatele.

Přístupové heslo je v Zákaznickém prostoru OVH viditelné až do okamžiku aktualizace stránky. Heslo si poznamenejte. Nové heslo lze vygenerovat kliknutím na ikonku „obnovení“, umístěnou po pravé straně aktuálně platného hesla.

![Rozhraní projektu](images/2_H_user_manage.png){.thumbnail}

### Připojení k rozhraní OpenStack Horizon

Klikněte na ikonku „tří teček“ v pravé části tabulky (`...`{.action}). Vyberte možnost `Spustit Openstack Horizon`{.action}. Následně budete přesměrováni na úvodní stránku rozhraní [Horizon](https://horizon.cloud.ovh.net/auth/login/){.external}. Zadejte `uživatelské jméno`{.action} a heslo.

![Rozhraní projektu](images/3_H_open_menu.png){.thumbnail}

![Obrazovka připojení](images/4_H_login_window.png){.thumbnail}

Po úspěšném přihlášení budete připojeni k rozhraní Horizon:

![Rozhraní Horizon](images/5_H_view.png){.thumbnail}

## Kam dál

Sdílejte své zkušenosti s uživatelskou komunitou na <https://community.ovh.com/en/>.