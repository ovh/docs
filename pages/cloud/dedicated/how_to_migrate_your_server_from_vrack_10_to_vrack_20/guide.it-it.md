---
title: Trasferisci il tuo server dalla vRack 1.0 alla vRack 2.0
excerpt: Trasferisci il tuo server dalla vRack 1.0 alla vRack 2.0
slug: trasferisci_il_tuo_server_dalla_vrack_10_alla_vrack_20
legacy_guide_number: g1994
---


## 
Questa guida ti spiega come effettuare il trasferimento del tuo server dalla vRack 1.0 alla vRack 2.0.


## 
Per effettuare questa operazione hai bisogno di:

- server attivi con due schede di rete nella vRack 1.0 (server della gamma professionale, esclusa gamma Superplan).
- una vRack 1.0




## 
Per trasferire nella vRack 2.0 i tuoi server attivi nella vRack 1.0:

- individua la seconda interfaccia di rete per ogni server
- crea una vRack 2.0
- assegna un indirizzo IP temporaneo all'interfaccia della vRack 2.0
- disattiva l'interfaccia vRack 1.0 e riconfigura l'interfaccia vRack 2.0




## Individua l'interfaccia di rete della vRack 2.0

## Per essere trasferito nella vRack 2.0, un server deve disporre di due interfacce di rete.
Per individuare l'interfaccia di rete associata alla vRack 2.0 del tuo server Linux o in modalità Rescue pro, visualizza la lista delle interfacce disponibili utilizzando questo comando:


```
ifconfig -a | grep eth | awk '{print $1}'
```


Esempio:


```
#ifconfig -a | grep eth | awk '{print $1}'
eth0
eth1
```


eth0 è già configurata come interfaccia di rete pubblica. Verifica la corretta configurazione della tua interfaccia di rete privata (vRack) con questi comandi:


```
# ifconfig eth1 up
# ethtool eth1 | grep "Link detected"
Link detected: yes
```


Se il risultato restituito in "Link detected" è negativo, la configurazione non è corretta. È necessario quindi disattivare la tua interfaccia:


```
#ifconfig eth1 down
```


e riconfigurala.

Nel nostro esempio, lasceremo eth1.


## Crea una vRack 2.0
Per creare una vRack 2.0, segui la guida corrispondente.


## Aggiungi la tua vRack 1.0 nella 2.0
Per trasferire la vRack 1.0 alla vRack 2.0, accedi alla sezione "Dedicato" del tuo Spazio Cliente OVH:

https://www.ovh.com/manager/

Clicca su "Rete" e seleziona la vRack 2.0

Visualizzerai:

![](images/img_3295.jpg){.thumbnail}
Seleziona una vRack 1.0 nella colonna dei tuoi servizi disponibili (colonna di sinistra)

Clicca su "Aggiungi"


## Aggiungi i tuoi server nella vRack 2.0
Per trasferire la vRack 1.0 alla vRack 1.5, accedi alla sezione "Dedicato" del tuo Spazio Cliente OVH:

https://www.ovh.com/manager/dedicated

Clicca su "Rete" e seleziona la vRack 2.0

Visualizzerai:

![](images/img_3297.jpg){.thumbnail}
Seleziona un server nella colonna dei tuoi servizi disponibili (colonna di sinistra)

Clicca su "Aggiungi"


## Assegna un indirizzo IP temporaneo all'interfaccia della vRack 2.0

## In un primo tempo, eseguiremo una configurazione temporanea per verificare il corretto funzionamento della vRack 2.0.
Per ciascuno dei tuoi server, aggiungi un IP privato nell'interfaccia della vRack:

Esempio:
(server Debian con eth1 come interfaccia della vRack 2.0 e blocco IP 10.0.0.0/24)

Nel file di configurazione: /etc/network/interfaces

aggiungi:

```
auto eth1
iface eth1 inet static
address 10.0.0.1
netmask 255.255.255.0
broadcast 10.0.0.255
```


e poi riavvia la tua interfaccia di rete:


```
service networking restart
```


Per le altre distribuzioni, accedi alla sezione "IP privato" e consulta la guida VrackInfrastructureServer corrispondente.

## Importante:
Verifica che sia possibile effettuare un ping da ciascuno dei tuoi server utilizzando gli indirizzi IP privati che hai configurato.
Se tutti i server rispondono a un semplice ping, passa alla fase successiva.

Altrimenti, esegui il comando:


```
arping -I INTERFACE_VRACK_2.0 1.1.1.1
```


Sostituisci INTERFACE_VRACK_2.0 con la tua interfaccia vRack 2.0 (nel nostro esempio, eth1).


## Disattiva la vRack 1.0 e riconfigura la vRack 2.0

## Attenzione:
Questa fase comporta l'interruzione del servizio per tutta la durata del trasferimento dell'IP che utilizzi dalla tua interfaccia 1.0 all'interfaccia 2.0
Elimina la configurazione temporanea della tua interfaccia vRack 2.0 e vRack 1.0 e poi riavvia le interfacce.

In seguito, aggiungi l'IP della tua vRack 1.0 nella tua interfaccia 2.0.

Ad esempio, con Debian:

Esempio di configurazione prima della modifica:


```
auto eth0.XXXX
iface eth0.XXXX inet static
address 172.16.0.1
netmask 255.240.0.0
post-up ip r a 172.16.0.0/12 via 172.31.255.254 dev eth0.XXXX ;

auto eth1
iface eth1 inet static
address 10.0.0.1
netmask 255.255.255.0
broadcast 10.0.0.255
```


Esempio di configurazione dopo la modifica:

```
auto eth1
iface eth1 inet static
address 172.16.0.1
netmask 255.240.0.0
broadcast 255.240.0.0
```


e riavvia le interfacce di rete.

Per ogni distribuzione, consulta la guida "VrackInfrastructureServer" corrispondente.

I tuoi server dovrebbero comunicare immediatamente.


## Caso di un blocco IP pubblico

## Attenzione:
Non consultare questa sezione se il blocco IP pubblico è relativo a un ACE o Firewall ASA.

## In caso di blocco IP pubblico e se tutti i tuoi server sono compatibili con la vRack 1.5, aggiungi il blocco IP pubblico nella vRack 1.5, in modo da non utilizzare più la tua vRack 1.0 tramite lo Spazio Cliente OVH.
Per farlo, accedi al tuo Spazio Cliente OVH:

https://www.ovh.com/manager/dedicated

e seleziona il blocco IP pubblico nel menu a sinistra.

Visualizzerai:

![](images/img_3297.jpg){.thumbnail}

## Seleziona un server nella colonna dei tuoi servizi disponibili (colonna di sinistra)
Clicca su "Aggiungi"

## Attenzione:
Questa operazione comporta un'interruzione del servizio di circa 1 minuto.


## Disattiva la vRack 1.0

## Attenzione:
Leggi questa sezione solo se il tuo hardware funziona esclusivamente nella vRack 1.0, come nel caso di:


- server Superplan compatibile con la vRack 1.0
- ACE
- firewall ASA per la vRack


Se possiedi questi dispositivi, al momento non puoi effettuare nessun trasferimento dalla vRack 1.0.
Una volta che i tuoi server comunicano sulla vRack 1.5, puoi eliminarli dalla vRack 1.0.

Per farlo:


- accedi al tuo Spazio Cliente OVH: https://www.ovh.com/manager
- seleziona una delle tue vRack 1.0
- nella sezione "Aggiungi o rimuovi i tuoi servizi dalla vRack", elimina i tuoi server dalla vRack selezionandoli in "La tua vRack" e cliccando su "Rimuovi"


Quando tutti i tuoi server sono stati rimossi dalla vRack 1.0 e risultano funzionanti nella vRack 2.0, contatta il nostro supporto per eliminare definitivamente la tua vRack 1.0.

