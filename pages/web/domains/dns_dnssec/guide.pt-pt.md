---
title: Proteja o seu domínio com DNSSEC
excerpt: ''
slug: proteja_o_seu_dominio_com_dnssec
legacy_guide_number: g609
---


## Pré-requisitos

- O seu domínio deve estar registado na OVH. É uma restrição técnica derivada do facto de ser necessário ter atualizado os registos DS no registry.
- Deve ser uma das seguintes extensões: .fr, .com, .be, .net, .eu, .pl, .re, .pm, .yt, .wf, .tf, .info, .li, .ch, .biz, .de, .sx, .org, .se, .nl, .in, .us, .at, .nu, .la, .ac, .cz, .me, .sh, .io, .uk, .co.uk, .me.uk, .org.uk, ou qualquer nova extensão recentemente ativa como .paris, .club, .xyz, .wiki, .ink, e todas as extensões de Donuts. (outras extensões em breve)




## Os dois casos de utilização

- Se aloja o seu domínio noutros servidores DNS (no seu servidor dedicado, ou numa outra máquina), nesse caso deverá referir-se ao guia correspondente em [neste guia](http://guias.ovh.pt/dnssec), que vos explicará como gerar as suas chaves, "assinar" a sua zona e submeter na OVH a chave pública que lhe permite atualizar o registo DS do lado do registry.

- Caso utilize os DNS da OVH, é o caso explicado neste guia. Nesse caso a OVH faz a gestão das chaves, a rotação periódica, a atualização dos registos DS, assim como a assinatura da zona seja feita de forma transparente para si.


Em caso de dúvida poderá verificar ao ir ao seu [Espaço Cliente](https://www.ovh.com/manager/web), e uma vez o selecionado aceda à secção "Gestão DNS". Se os servidores DNS listados estiveram na forma nsXX.ovh.net, dnsXX.ovh.net, ou Xns200.anycast.me está a utilizar os servidores DNS da OVH.


## Ativação

- Deve ligar-se ao seu [Espaço Cliente](https://www.ovh.com/manager/web).

- Selecione de seguida o nome de domínio na secção "Domínios" do seu Espaço Cliente.



![](images/img_2896.jpg){.thumbnail}

- Poderá verificar se utiliza os servidores DNS na secção "Gestão DNS".



![](images/img_3966.jpg){.thumbnail}

- Depois da verificação dos servidores DNS efetuada clique no "botão de ativação" do DNSSEC.



![](images/img_3967.jpg){.thumbnail}

- Aparecerá de seguida uma pop-up a fim de validar a operação, lembrando que esta operação pode levar 24h.



![](images/img_2895.jpg){.thumbnail}

- Aparecerá uma mensagem de confirmação uma vez efetuada a validação.



![](images/img_3968.jpg){.thumbnail}

- Poderá de seguida verificar no separador "operações em curso" que a operação foi iniciada.



![](images/img_3969.jpg){.thumbnail}


## Desativação
Para desativcar o DNSSEC deve selecionar o seu domínio e clicar em "desativar". Uma pop-up aparecerá para que valide a operação. Note que se uma ativação está já em curso, deverá aguardar até que a operação termine (o botão estará bloqueado), de forma a que a configuração DNSSEC do seu domínio não fique num estado intermediário.

![Desativação](images/img_3970.jpg){.thumbnail}


## Método 1: ao utilizar Firefox ou Chrome
Pode instalar uma extensção Firefox que permite verificar se os sites que utiliza estão seguros por DNSSEC, e se sim, qual o resultado da validação. Esta extensão está [disponível aqui](http://www.dnssec-validator.cz/). Após estar instalado, deverá ter uma chave à esquerda da barra de endereço do navegador. Para os domínios cujo a chave está a verde, o IP do site está a ser verificado por DNSSEC.

![Módulo Firefox de validação DNSSEC: o site está protegido.](images/img_119.jpg){.thumbnail}
Se a chave está a laranja, é o servidor DNS recursivo do seu FAI que não é compatível com DNSSEC. Não é grave, poderá utilizar servidores DNS alternativos para efetuar essa validação. O módulo Firefox propõe-lhe uma lista sob a qual deverá aceder, ao clicar com o botão do rato do lado direito na chave, e depois seleciona "Preferências".

Está também disponível uma versão alpha desta extensão para Chrome [nesta página](https://chrome.google.com/webstore/detail/hpmbmjbcmglolhjdcbicfdhmgmcoeknm)


## Método 2: em modo consulta, com a declaração prévia da chave root
Para verificar que o DNSSEC está corretamente configurado para um domínio, poderá utilizar a ferramenta dig. Para poder efetuar a validação DNSSEC, existe a necessidade de conhecer a chave pública de root (com a qual assinou a chave que assina a zona root "."). Esta chave está disponível em vários sites na Internet. De forma a simplificarmos e para que possa reproduzir rapidamente, poderá copiar aquela que se encontra no ficheiro /etc/trusted-key.key (tudo deverá estar na mesma linha) :


```
. 172717 IN DNSKEY 257 3 8 AwEAAagAIKlVZrpC6Ia7gEzahOR+9W29euxhJhVVLOyQbSEW0O8gcCjF
FVQUTf6v58fLjwBd0YI0EzrAcQqBGCzh/RStIoO8g0NfnfL2MTJRkxoX
bfDaUeVPQuYEhg37NZWAJQ9VnMVDxP/VHL496M/QZxkjf5/Efucp2gaD
X6RS6CXpoY68LsvPVjR0ZSwzz1apAzvN9dlzEheX7ICJBBtuA6G3LQpz
W5hOA2hzCTMjJPJ8LbqF6dsV6DoBQzgul0sGIcGOYl7OyQdXfZ57relS
Qageu+ipAdTTJ25AsRTAoub8ONGcLmqrAmRLKBP1dfwhYB4N7knNnulq
QxA+Uk1ihz0=
```


Note que não a deverá copar sem verificar a sua autenticidade, uma vez que o DNSSEC, como todo o sistema criptográfico é baseado numa cadeia de confiança, a importância dos itens root nas quais a confiança por definição é capital. O seu ponto de distribuição oficial é [com a IANA](https://data.iana.org/root-anchors/) e o ficheiro é ele mesmo assinado por GPG.
O comando a ser executado é o seguinte e procuramos aqui validar o IP do site www.eurid.eu:

```
$ dig +sigchase www.eurid.eu
;; RRset to chase:
www.eurid.eu. 544 IN CNAME eurid.eu.
[...]
;; WE HAVE MATERIAL, WE NOW DO VALIDATION
;; VERIFYING DS RRset for eu. with DNSKEY:55231: success
;; OK We found DNSKEY (or more) to validate the RRset
;; Ok, find a Trusted Key in the DNSKEY RRset: 19036
;; VERIFYING DNSKEY RRset for . with DNSKEY:19036: success

;; Ok this DNSKEY is a Trusted Key, DNSSEC validation is ok: SUCCESS
```


A última linha indica que a validação foi efetuada com sucesso, pois a cadeia de confiança pode ser remontada com sucesso e corresponde corretamente com a chave pública conhecida na zona root.

Se obtém a seguinte mensagem, significa que o dig não encontrou a chave root em /etc/trusted-key.key:

```
$ dig +sigchase www.eurid.eu
No trusted keys present
```




## Método 3: em modo consulta, sem a declaração prévia da chave root
Se não pode declarar a chave pública como indicado aqui, poderá confiar num servidor DNS de terceiros para fazer a validação para si. Alguns servidores DNS recursivos validam DNSSEC e postos à disposição do público por várias entidades. Note aqui alguns exemplos da [DNS-OARC](https://www.dns-oarc.net/oarc/services/odvr), que é representado no exemplo abaixo, onde procuramos validar o IP do site www.eurid.eu:


```
$ dig +dnssec www.eurid.eu @149.20.64.21

; <<>> DiG 9.7.3 <<>> +dnssec www.eurid.eu @149.20.64.21
;; global options: +cmd
;; Got answer:
;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 26117
;; flags: qr rd ra ad; QUERY: 1, ANSWER: 6, AUTHORITY: 7, ADDITIONAL: 16
[...]
```


A presença da flag "ad" que indica que a resposta que recebeu foi validado por um DNS recursivo.

