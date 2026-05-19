---
title: Informações Anti-Hack - Servidor dedicado e VPS
excerpt: Descubra as informações visíveis e fornecidas quando a proteção Anti-Hack interna da OVHcloud é ativada.
updated: 2026-05-04
---

**Descubra o que acontece quando a proteção Anti-Hack da OVHcloud é ativada no seu Servidor dedicado ou no seu VPS.**

## Requisitos

- um Servidor dedicado ou um VPS que tenha sido comprometido
- acesso à [área de cliente OVHcloud](/links/manager)

## Informações Anti-Hack

### Servidor dedicado

Quando a proteção Anti-Hack é ativada no seu Servidor dedicado, é apresentada uma mensagem na sua [área de cliente OVHcloud](/links/manager): "*O seu servidor foi comprometido. Contacte a nossa equipa de assistência técnica para obter instruções sobre os próximos passos.*"

Dependendo do nível de criticidade da proteção Anti-Hack ativada pela OVHcloud, as seguintes ações serão autorizadas/necessárias para restaurar o serviço completo no servidor.

| Estado | Ações esperadas |
| ------ | ----------------- |
| Comprometido | Reiniciar o servidor ou solicitar à OVHcloud que reinstale o servidor |
| ComprometidoBloqueado | Recolher os dados via FTP no servidor iniciado no sistema rescue FTP |

![informações antihack SD](images/hacked-service.png){.thumbnail}

No caso de o seu servidor ser colocado em modo rescue FTP, a OVHcloud abrirá também um ticket de suporte em seu nome com o seguinte conteúdo:

>
> Caro cliente,
>
> Dado que o seu servidor nsXXXXXXX.ip-XXX-XXX-XXX.eu representa uma ameaça demasiado grande para a nossa rede,
fomos obrigados a colocá-lo em modo "rescue FTP". Foi-lhe enviado um e-mail
com um nome de utilizador e uma palavra-passe para que possa
recuperar facilmente os dados ainda presentes no espaço de armazenamento.
>
> Não hesite em contactar o nosso suporte técnico para que esta
situação não se torne crítica.
>
> Encontrará abaixo os registos gerados pelo nosso sistema que desencadearam este alerta.
>
> - INÍCIO DAS INFORMAÇÕES ADICIONAIS -
>
>  <Detalhes do ataque>
>
> - FIM DAS INFORMAÇÕES ADICIONAIS -
>
> Com os melhores cumprimentos,
>
> Suporte ao cliente OVHcloud
> A equipa OVHcloud

### VPS

Quando a proteção Anti-Hack é ativada no seu VPS, este pode ser colocado em modo rescue consoante a gravidade da ameaça detetada.

![informações antihack VPS](images/hacked-vps.png){.thumbnail}

No caso de o seu VPS ser colocado em modo rescue, a OVHcloud abrirá também um ticket de suporte em seu nome com o seguinte conteúdo:

>
> Caro cliente,
>
> Foi detetada atividade anómala no seu VPS vps-XXXXXXXX.vps.ovh.net.
>
> O seu VPS foi colocado em modo rescue. Isto permitir-lhe-á intervir
no seu VPS para resolver os problemas detetados. Foi-lhe enviado um e-mail com informações sobre o modo rescue.
>
> Já não é possível realizar nenhuma ação no seu VPS através do seu Manager/API. Apenas são possíveis as seguintes ações:
>
> - Reinstalação do seu VPS.
> - Utilização do modo rescue para resolver os problemas detetados.
>
> Depois de resolvidos os problemas, contacte o nosso suporte técnico para o restaurar ao modo normal.
>
> Não hesite em contactar a nossa equipa de suporte técnico para evitar que esta situação se torne crítica.
>
> Encontrará abaixo os registos gerados pelo nosso sistema que desencadearam este alerta.
>

> [!primary]
> **Tome nota da parte final da mensagem que indica:** "*Depois de resolvidos os problemas, contacte o nosso suporte técnico para o restaurar ao modo normal. Não hesite em contactar a nossa equipa de suporte técnico para evitar que esta situação se torne crítica.*"
>

## Quer saber mais?

Fale com a nossa [comunidade de utilizadores](/links/community).
