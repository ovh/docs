---
title: 'Comment installer un agent IA sur un VPS OVHcloud'
excerpt: 'Découvrez comment déployer un agent IA comme Open Interpreter ou GPT4All sur un VPS OVHcloud'
updated: 2025-08-18
---

## Objectif

Ce guide explique comment déployer un agent IA local sur un VPS OVHcloud, sans dépendre du cloud de fournisseurs externes. Vous utiliserez pour cela un conteneur Docker prêt à l'emploi contenant un agent IA open source comme [Open Interpreter](https://github.com/openinterpreter/open-interpreter), [GPT4All](https://github.com/nomic-ai/gpt4all) ou [Auto-GPT](https://github.com/Significant-Gravitas/AutoGPT).

**Découvrez comment déployer un agent IA comme Open Interpreter ou GPT4All sur un VPS OVHcloud.**

## Prérequis

- Disposer d'un [VPS](/links/bare-metal/vps) fonctionnel (Debian 11 ou supérieur recommandé)
- Disposer d'un accès administrateur (sudo) via SSH à votre serveur
- Python ≥ 3.10 installé sur le VPS

## En pratique

### Mettre à jour votre VPS et installer Python <a name="step1"></a>

Ouvrez un terminal et connectez-vous à votre VPS avec la commande suivante (en remplaçant `IP_VPS` par la véritable IP) :

```bash
ssh <user>@IP_VPS
```

Mettez à jour les paquets :

```bash
sudo apt update && sudo apt upgrade -y
```

Vérifiez que Python ≥ 3.10 est installé :

```bash
python3 --version
```

Si nécessaire, installez Python 3.10+ et pip :

```bash
sudo apt install -y python3 python3-pip python3-venv
```

### Créer un environnement virtuel et installer Open Interpreter <a name="step2"></a>

Les environnements récents limitent l’usage de `pip` globalement. Il est recommandé de créer et d'utiliser un environnement virtuel :

```bash
python3 -m venv ~/venv-openinterpreter
source ~/venv-openinterpreter/bin/activate
```

Installez Open Interpreter :

```bash
pip install --upgrade pip
pip install open-interpreter
```

### Configurer un modèle IA pour l’agent (local ou distant) <a name="step3"></a>

#### Option 1 – Utiliser OpenAI (GPT-4o, GPT-3.5, etc.)

Vous devez disposer d’une clé API OpenAI. Ajoutez-la lors du premier lancement ou en la définissant au préalable :

```bash
export OPENAI_API_KEY="API_KEY"
interpreter
```

Suivez ensuite les instructions.

#### Option 2 – Utiliser un modèle local (via Ollama)

Si vous ne souhaitez pas utiliser OpenAI, exécutez un modèle local grâce à Ollama :

```bash
interpreter --local
```

Cela vous proposera plusieurs options (Ollama, LM Studio, etc.). Nous vous recommandons d'utiliser Ollama, car il est facile à installer et compatible avec plusieurs modèles modernes comme `llama3` ou `mistral`.

Installez Ollama :

```bash
sudo apt install curl -y
curl -fsSL https://ollama.com/install.sh | sh
exec $SHELL
```

Chargez le modèle : 

```bash
ollama pull mistral
```

Puis relancez :

```bash
interpreter --local
```

#### Erreurs fréquentes

**Model requires more system memory (6 GiB) than is available (1 GiB)**

Cette erreur indique que votre VPS n’a pas assez de mémoire vive (RAM). Voici vos options :

- Opter pour un VPS disposant d'au moins 8 Go de RAM.
- Utiliser l'API OpenAI (voir `Option 1` ci-dessus).
- Utiliser un modèle plus léger, comme Mistral.

### Tester votre agent IA <a name="step4"></a>

Testez les exemples d'utilisation suivants :

```console
Quel est le contenu du dossier /tmp ?
```

Exemple de réponse :

![IA agent](images/question-version-python.png){.thumbnail}

```console
Écris un script Python qui liste les fichiers dans le dossier courant.
```

L’agent interprète votre demande, génère du code et l’exécute localement.

Exemple de réponse :

![IA agent](images/question-python-script.png){.thumbnail}

### Conclusion <a name="step5"></a>

Grâce à ce guide, vous avez installé un agent IA sur votre VPS OVHcloud, capable d’exécuter des commandes à partir de simples instructions en langage naturel. Que vous ayez opté pour un modèle distant comme GPT-4 via OpenAI ou un modèle local comme Mistral via Ollama, vous disposez désormais d’un assistant intelligent directement dans votre terminal, sans dépendance à une interface web ou à un service tiers.

## Aller plus loin

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](/links/partner)

Échangez avec notre [communauté d'utilisateurs](/links/community).