---
title: "Choose a VPS plan for your game server"
excerpt: "Compare OVHcloud Gaming VPS plans game by game and choose the right configuration for your server, player count, and installed mods."
updated: 2026-04-29
---

## Objective

Choosing the right VPS to host a game server goes beyond price. The game engine, player count, installed mods, and the geographic location of your players all directly impact the resources you need.

**This guide explains how to choose the OVHcloud Gaming VPS plan that best matches your game server requirements.**

## Requirements

- An [OVHcloud account](/links/manager)

## Instructions

### Why server resources matter

An underpowered game server causes lag, disconnections, and a poor experience for your players. Conversely, an oversized server is a waste of money. The right balance depends on three key factors:

- **Game engine** — an Unreal Engine 5 title consumes far more resources than a Source Engine game.
- **Concurrent player count** — each connected player adds CPU and network load.
- **Mods and plugins** — they can multiply RAM consumption by 2x or 3x.

> [!primary]
> **OVHcloud Golden Rule**
>
> Always target a configuration slightly above the game's official minimum requirements. A 20–30% RAM headroom ensures stability during peak activity (combat, explosions, terrain generation).

### OVHcloud Gaming VPS plans

OVHcloud offers six VPS plans with unlimited bandwidth. Plans VPS-1 through VPS-4 cover the vast majority of games for up to 10 players. Plans VPS-5 and VPS-6 are designed for more advanced use cases: running multiple game servers simultaneously, large communities, or multi-title platforms.

| Plan | vCores | RAM | Storage | Bandwidth | Price / mo |
|------|--------|-----|---------|-----------|------------|
| VPS-1 | 4 | 8 GB | 75 GB SSD | 400 Mbit/s | $5.99 excl. tax |
| VPS-2 *(Recommended)* | 6 | 12 GB | 100 GB SSD NVMe | 1 Gbit/s | $9.19 excl. tax |
| VPS-3 | 8 | 24 GB | 200 GB SSD NVMe | 1.5 Gbit/s | $18.39 excl. tax |
| VPS-4 | 12 | 48 GB | 300 GB SSD NVMe | 2 Gbit/s | $34.09 excl. tax |
| VPS-5 | 16 | 64 GB | 350 GB SSD NVMe | 2.5 Gbit/s | $50.69 excl. tax |
| VPS-6 | 24 | 96 GB | 400 GB SSD NVMe | 3 Gbit/s | $67.29 excl. tax |

All plans include Anti-DDoS protection.

### Choosing a plan by game

The table below lists each game with its official minimum server requirements and the recommended OVHcloud VPS plan for a stable session with up to 10 concurrent players. Games are ranked from lightest to most demanding.

> [!primary]
> **Mods & Plugins**
>
> The recommendations below apply to a vanilla installation (no mods). Adding plugins or resource-heavy mods may require upgrading to the next VPS tier.

| Game | Genre | Min. requirements | Load | Recommended VPS | Price / mo |
|------|-------|-------------------|------|-----------------|------------|
| **VPS-1 — Very light** | | | | | |
| Teamspeak 3 | VoIP | 1c · 1 GB · 5 GB | 10% | VPS-1 | $5.99 |
| Terraria | 2D Sandbox | 1c · 2 GB · 5 GB | 15% | VPS-1 | $5.99 |
| Counter-Strike 2 | Competitive FPS | 2c · 4 GB · 30 GB | 25% | VPS-1 | $5.99 |
| Team Fortress 2 | Multiplayer FPS | 2c · 4 GB · 15 GB | 22% | VPS-1 | $5.99 |
| Garry's Mod | Sandbox | 2c · 4 GB · 20 GB | 28% | VPS-1 | $5.99 |
| Valheim | Viking Survival | 2c · 4 GB · 10 GB | 30% | VPS-1 | $5.99 |
| **VPS-2 — Light to moderate** | | | | | |
| Minecraft | Sandbox / Survival | 2c · 4 GB · 20 GB | 42% | VPS-2 | $9.19 |
| Satisfactory | Factory Builder | 4c · 8 GB · 20 GB | 48% | VPS-2 | $9.19 |
| 7 Days to Die | Zombie Survival | 4c · 8 GB · 15 GB | 52% | VPS-2 | $9.19 |
| Arma Reforger | Military FPS | 4c · 8 GB · 30 GB | 50% | VPS-2 | $9.19 |
| DayZ | Open World Survival | 4c · 8 GB · 15 GB | 55% | VPS-2 | $9.19 |
| Humanitz | Open World Survival | 4c · 8 GB · 30 GB | 50% | VPS-2 | $9.19 |
| Project Zomboid | Zombie Survival | 4c · 8 GB · 16 GB | 53% | VPS-2 | $9.19 |
| **VPS-3 — Moderate to heavy** | | | | | |
| Rust | PvP Survival | 4c · 8 GB · 20 GB | 70% | VPS-3 | $18.39 |
| Palworld | Survival / Adventure | 4c · 16 GB · 40 GB | 72% | VPS-3 | $18.39 |
| **VPS-4 — Heavy · Intensive solo use** | | | | | |
| ARK: Survival Evolved | Survival / Action | 6c · 16 GB · 60 GB | 88% | VPS-4 | $34.09 |

### Advanced use cases — VPS-5 and VPS-6

VPS-5 and VPS-6 are not required for a single game with 10 players. Their value lies in the ability to run multiple game servers simultaneously on a single machine, or to host large communities (50 to 100+ players). They are designed for community managers, independent studios, and hosting resellers.

| Use case | Description | Min. requirements | Load | Recommended VPS | Price / mo |
|----------|-------------|-------------------|------|-----------------|------------|
| **VPS-5 — Simultaneous multi-server** | | | | | |
| ARK + Minecraft | 2 parallel instances | 10c · 24 GB · 80 GB | 65% | VPS-5 | $50.69 |
| Rust + DayZ | 2 survival servers | 8c · 20 GB · 40 GB | 72% | VPS-5 | $50.69 |
| Palworld + Valheim + CS2 | 3 light instances | 12c · 32 GB · 70 GB | 78% | VPS-5 | $50.69 |
| 50+ slot server | e.g. BungeeCord Minecraft | 8c · 16 GB · 40 GB | 60% | VPS-5 | $50.69 |
| **VPS-6 — Multi-game platform · Hosting reseller** | | | | | |
| ARK + Rust + Minecraft | 3 heavy servers running | 18c · 64 GB · 120 GB | 70% | VPS-6 | $67.29 |
| 5+ game hub | CS2 + TF2 + Valheim + DayZ + 7DTD | 16c · 40 GB · 150 GB | 65% | VPS-6 | $67.29 |
| Palworld 100+ players | High-capacity single instance | 20c · 48 GB · 100 GB | 75% | VPS-6 | $67.29 |
| Game server reseller | Reselling slots to players | 20c · 48 GB · 200 GB | 80% | VPS-6 | $67.29 |

## Go further

- [Getting started with the Game Panel](/pages/bare_metal_cloud/virtual_private_servers/game-panel-getting-started)
- [Logging in to the Game Panel](/pages/bare_metal_cloud/virtual_private_servers/game-panel-log-in)

Join our [community of users](/links/community).