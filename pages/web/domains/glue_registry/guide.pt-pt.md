---
title: Glue Registry
excerpt: Para que serve um Glue Registry?
slug: glue_registry
legacy_guide_number: g1568
---


## 
Graças ao Glue Registry poderá personalizar os seus servidores DNS com o seu nome de domínio. O seu nome é apresentado nas bases Whois, ao invés dos servidores DNS do seu alojador. Poderá criar os seus próprios servidores DNS em IPv4, IPv6 e em múltiplos IPs.

A personalização dos servidores DNS é possível para todos os domínios GTLD: .com, .net, .org..
Para utilizar este serviço aceda ao seu [Espaço Cliente](https://www.ovh.com/manager/web/login.html). Queira selecionar o nome de domínio em questão na secção "Domínios" do seu Espaço Cliente.

![](images/img_2903.jpg){.thumbnail}
Selecione o separador "glue" e de seguida clique em "Adicionar"

![](images/img_2900.jpg){.thumbnail}
Aparecerá de seguida uma pop-up para que possa configurar o glue registry.

![](images/img_2901.jpg){.thumbnail}
É necessário indicar um subdomínio e o endereço IP de um servidor DNS válido.

![](images/img_2902.jpg){.thumbnail}


## 
Se utiliza servidores DNS externos da OVH é necessário criar o subdomínio na zona DNS em questão e não na zona OVH
Após o glue estar criado, é necessário declarar um campo do tipo "A" na sua zona DNS.

Selecione o separadoir "zona dns"

![](images/img_2953.jpg){.thumbnail}
Selecione de seguida "Adicionar uma entrada"

![](images/img_2952.jpg){.thumbnail}
Clique no tipo "A"

![](images/img_2956.jpg){.thumbnail}
No nosso exemplo veja o campo tipo "A" a criar e a validar.

![](images/img_2954.jpg){.thumbnail}
É necessário aguardar o tempo de propagação, normalmente 24/48h.

