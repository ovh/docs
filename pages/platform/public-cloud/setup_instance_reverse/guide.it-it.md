---
title: Configura il reverse DNS della tua istanza
excerpt: Configura il reverse DNS della tua istanza
slug: configura_il_reverse_dns_della_tua_istanza
legacy_guide_number: g1940
---


## 
Per eseguire alcune operazioni, potrebbe essere necessario configurare un reverse DNS per gli indirizzi IP della tua istanza. Ad esempio, nella configurazione di un server di posta, il reverse DNS ti permette di aumentare lo "score" relativo all'invio delle tue email.

Questa guida ti mostra come effettuare questa operazione.


## Requisiti necessari

- Un'istanza
- Un record di tipo A nella tua zona DNS che punta verso il tuo indirizzo IP




## 

- Verifica l'indirizzo IP della tua istanza nella sezione Cloud del tuo Spazio Cliente OVH:



![](images/img_3024.jpg){.thumbnail}

- Accedi alla sezione Dedicato del tuo Spazio Cliente OVH



![](images/img_3025.jpg){.thumbnail}

- Clicca su IP nel menu a sinistra e seleziona l'ID del tuo progetto in Servizio:



![](images/img_3026.jpg){.thumbnail}

- Seleziona Modifica il reverse cliccando sull'icona a destra dell'indirizzo IP in questione.

- Inserisci il tuo reverse DNS nel campo corrispondente e Conferma



![](images/img_3028.jpg){.thumbnail}
Se hai aggiunto recentemente il record A, è necessario attendere la propagazione della tua zona DNS per la corretta esecuzione di questa operazione.
A questo punto, il reverse DNS è visibile nella lista degli indirizzi IP del tuo progetto.

![](images/img_3029.jpg){.thumbnail}


## 
[Ritorna all'indice delle guide Cloud]({legacy}1785)

