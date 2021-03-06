# Медиа

**`mq`** - Модуль отвечающий за работу с медиавыражениями на проекте.

Контрольные точки изменения размеров стандартизированы до: `xs`, `sm`, `md`, `lg`, `xl`. Этого достаточно для покрытия базовых нужд при разработке.

Изменить значения стандартных контрольных точек можно в переменных `$mq-size-{size}`.

Значения контрольных точек доступны в виде css custom properties: `--mq-size-{size}`.

## Миксины

Для использования медиа выражений разработанные именованные миксины: `+mq-{size}` и `+mq-till-{size}`.

### Базовые

#### `+mq-{size}`

Используется для задания кодовым блокам ограничение на использование только при размере экрана большего чем `size`.

Пример:
```sass
.block
  some: default-value

  +mq-sm
    some: small-value

  +mq-md
    some: medium-value
```

#### `+mq-till-{size}`

Используется для задания кодовым блокам ограничение на использование только при размере экрана меньшего чем `size`. И вообще приставка `-till-` означает "до" и механизмы с ее использованием не рекомендуется, так как это не mobile-first вариант разработки.

### Адаптеры

Часто есть потребность в использовании того или иного модификатора в рамках конкретного размера экрана. Для этого каждый раз приходиться писать(часто кописаста) отдельный код.

Именно для уменьшения количества кода требуемого для этих целей существуют эти миксины.

Для настройки работы адаптеров существует две константы:

- `$MQ_INCLUDE_XS: false !default` - Устанавливает адаптерам потребность в адаптации к крайне малым экранам.
- `$MQ_INCLUDE_XL: false !default` - Устанавливает адаптерам потребность в адаптации к крупным экранам.

Адаптеры применяют переданный код ко всем вариантам размеров экранов: `xs`, `sm`, `md`, `lg`, `xl`.

#### `+mq-adaptive($separator: '-', $with-initial: true)`

Применяется для адаптации блока в mobile-first виде. `$with-initial` параметр определяет есть-ли у элемента стандартное поведение без применения медиа выражений или нет.

Пример:

```sass
.block
  &--modifier
    +mq-adaptive
      color: green
```

В данном случае для модификатора блока создадутся отдельные классы под применение его для каждого отдельного медиа запроса.

Что-то типа:

```css
.block--modifier { color: green }
@media (min-width: 564px) { .block--modifier-sm { color: green } }
@media (min-width: 768px) { .block--modifier-md { color: green } }
@media (min-width: 992px) { .block--modifier-lg { color: green } }
```

#### `+mq-adaptive-till($separator: '-till-', $with-initial: true)`

Механизм аналогичен действию `+mq-adaptive`, только применяет **не** mobile-first `max-width` правила.

Пример:

```sass
.block
  &--modifier
    +mq-adaptive-till
      color: green
```

Результат:

```css
.block--modifier { color: green }
@media (max-width: 563px) { .block--modifier-till-sm { color: green } }
@media (max-width: 767px) { .block--modifier-till-md { color: green } }
@media (max-width: 991px) { .block--modifier-till-lg { color: green } }
```

#### `+mq-both-adaptive($with-initial: true)`

Этот миксин применяет сразу оба вышеизложеных адаптеров.
