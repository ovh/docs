---
title: FAQ Hosted Private Cloud
excerpt: ''
slug: faq_dedicated_cloud
legacy_guide_number: g598
---


## Aquando da configuração do HA obtenho o seuginte erro: « Erro HA: Impossível efetuar a configuração HA »
Se este erro persiste, deverá desconfigurar e depois reconfigurar manualmente o cluster com HA. Para tal, deverá ir às propriedades do seu cluster, retirar a opção HA e depois valida essa modificação. Após terminado a operação, volta ao mesmo sitio e reativa a opção HA. Após tudo ativado, a opção HA ficará ativa no seu cluster.


## De que se trata a opção « Rescan Datastore » no cluster:
Esta opção é utilizada para os armazenamentos iSCSI de forma a atualizar as rotas de acesso.
Esta manipulação não será necessária na OVH, uma vez que não propomos filerz iSCSI.


## Devido a um alarme, resta indicado no host (triângulo vermelho)
É necessário que valide o alarme e o passe a verde, no separador alarmes do seu host. Proceda a um clique direito no rato no alarme que resta.


## Possuo uma VM que se encontra no estado Inválido
Nesse caso elimine a VM do inventário, ao efetuar um clique direito na VM em questão.
ATENÇÃO: escolha «eliminar do inventário» e não «eliminar do disco». Neste último caso, perderá os dados da sua VM.
De seguida, basta apenas re-adicionar a VM ao inventário.


## Quando acedo à consola da minha VM, obtenho um ecrã preto
Significa que o Sistema Operativo está em "hibernação". Resta apenas que clique numa tecla de forma a reativar o sistema.

