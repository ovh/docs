---
title: "Backup Agent - Faturação"
excerpt: "Faturação do produto Backup Agent"
updated: 2026-01-09
---

## Objetivo

Esta página detalha as modalidades de faturação do produto Backup Agent.

## A faturação

O produto baseia-se em dois elementos para oferecer o seu serviço:

- O Backup Agent instalado nos seus servidores Bare Metal.
- O [OVHcloud Object Storage](/links/public-cloud/object-storage).

Não faturamos o Backup Agent nos seus servidores, ou seja, pode implementá-lo num ou em vários servidores Bare Metal, sem custos.

No entanto, a utilização do OVHcloud Object Storage é faturada, à escala do GB por mês. Será, portanto, faturado no início de cada mês pela utilização do mês anterior.

Encontrará o preço do GB por mês no nosso [site web](/links/storage/backup-agent).

Tem à sua disposição um painel de `Faturação` no seu [Área de Cliente OVHcloud](/links/manager) para visualizar a sua utilização atual e assim prever o valor da fatura final no final do mês.

- Exemplo 1: Implementou o Backup Agent em 3 servidores Bare Metal e estes enviam os seus dados para os respetivos Vaults. A totalidade das capacidades utilizadas pelos seus dados de cópia de segurança nos Vaults é de 600 GB. Será, portanto, faturado no final do mês por 600 GB.

- Exemplo 2: Implementou o Backup Agent em 10 servidores Bare Metal e estes enviam os seus dados para os respetivos Vaults. A totalidade das capacidades utilizadas pelos seus dados de cópia de segurança nos Vaults é de 600 GB. Após algumas cópias de segurança, remove o Backup Agent de 4 servidores, eliminando os dados após 14 dias. A utilização total dos Vaults desce para 400 GB. Será faturado no final do mês por 600 GB.

## Quer saber mais?

Fale com a nossa [comunidade de utilizadores](/links/community).