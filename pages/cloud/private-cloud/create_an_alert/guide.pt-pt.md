---
title: Criar um Alerta
excerpt: ''
slug: criar_um_alerta
legacy_guide_number: g599
---


## 
Deverá utilizar o cliente vSphere, acendendo ao mesmo através do seu computador, ao utilizar a ligação RDP que enviamos aquando da ativação do seu PCC.


## 
É possível criar um alerta sobre todos os elementos do Private Cloud: sobre o próprio Private Cloud, sobre os clusters, as VMs, os datastores, a rede..
Para tal, basta efetuar um clique direito em Private Cloud ou noutro elemento a vigiar, seleciona «Alarm» e de seguida «Add Alarm»

![](images/img_91.jpg){.thumbnail}
No separador « Général », indica o nome do seu alerta e seleciona ot ipo de alarme:

![](images/img_92.jpg){.thumbnail}
No separador "Triggers", permite-lhe indicar os parâmetros que pretende vigiar, assim como as condições de alerta. O botão «Add» permite-lhe personalizar a regra.
Poderá, por exemplo, vigiar a RAM de um hos, e indicar qual o limiar na qual despolete um alerta e seja enviado um e-mail para o advertir.

![](images/img_93.jpg){.thumbnail}
O separador «Reporting» permite indicar uma margem a ter em conta antes de despoletar um alerta, mas também a frequência de repetição.
Se por exemplo o seu host ultrapassa os 95% de utilização por mais de 5 minutos, será notificado por e-mail.

No separador «Ações», poderá definir a acção a efetuar após ser despoletado o alerta: envio de e-mail, parar uma VM, ou a execução de um comando.

![](images/img_103.jpg){.thumbnail}

