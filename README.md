# Пушистый контур — Astro-ready prototype

Это прототип лендинга `Пушистый контур`, собранный в Astro-структуре:

- `src/pages/index.astro`
- `src/components/Header.astro`
- `src/layouts/BaseLayout.astro`
- `src/styles/global.css`
- `public/assets/*`

## Важно

В этой среде установка пакета `astro` из npm заблокирована политикой доступа, поэтому:

- я подготовил полноценную Astro-структуру вручную;
- добавил `public/index.html` как быстрый preview-слой;
- но не смог локально выполнить `astro build` и `astro dev`.

Локально у тебя это можно поднять так:

```bash
npm install
npm run dev
```
