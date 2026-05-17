# Пушистый контур — Astro landing

Лендинг груминг-салона «Пушистый контур», собранный на Astro.

## Структура

- `src/pages/index.astro` — главная страница и контент лендинга
- `src/components/Header.astro` — шапка и навигация
- `src/layouts/BaseLayout.astro` — HTML-обертка, SEO/meta и подключение глобальных ресурсов
- `src/styles/global.css` — основные стили, адаптив и состояния фокуса
- `public/assets/*` — изображения и статические ассеты
- `public/app.js` — поведение мобильного меню

## Запуск

```bash
npm install
npm run dev
```

## Сборка

```bash
npm run build
npm run preview
```

## Что уже исправлено

- Убран дублирующий `public/index.html`, чтобы главная страница не расходилась с Astro-версией.
- Убрана дублирующая копия CSS из `public/styles.css`; стили подключаются из `src/styles/global.css` через Astro.
- Добавлены SEO-мета, canonical, OpenGraph и Twitter Card.
- Улучшена доступность: skip-link, `aria-label`, `aria-labelledby`, видимые focus-состояния.
- Усилено мобильное меню: корректные `aria-expanded`, закрытие по Escape, клику вне меню и переходу по ссылке.
- Добавлены `loading`-атрибуты для изображений и более аккуратная семантика секций.
- Добавлен `.gitignore` для Node/Astro-проекта.

## Важно

В текущей среде прямой `npm install` и локальный `astro build` могут быть недоступны из-за сетевых ограничений. Перед публикацией проверь локально:

```bash
npm install
npm run build
```
