# Element query

Существует несколько реализаций механизма схожего с media queries для работы в рамках элемента а не страницы. Этот модуль отталкивается от механизма [описанного тут](http://marcj.github.io/css-element-queries/).

Для библиотеки также нужен JS механизм для автоматического добавления классов-идентификаторов текущего размера.

::: warning В стандартную сборку модуль не включен!
В `@dermis/dermis` этого модуля нет. Так как используется далеко не всегда, и для его работы нужна дополнительная JS библиотека.

Поэтому в случае потребности использования его нужно устанавливать отдельно. И подключать перед `dermis` пакетом:

```sass
@import '@dermis/eq'
@import '@dermis/dermis'
```
:::

**`eq`** - Модуль отвечающий за генерацию классов, которые описывают изменения отображения элемента в зависимости от размера его контейнера.

Контрольные точки изменения размеров стандартизированы до: `xs`, `sm`, `md`, `lg`, `xl`. Это базовый вариант, с размерами опредененности еще пока нет - скорее всего нужно будет дорабатывать, но пока так.

Изменить значения стандартных контрольных точек можно в переменных `$eq-size-{size}`.

Значения контрольных точек доступны в виде css custom properties: `--eq-size-{size}`.

## Миксины

API крайне схоже с `mq` пакетом. Но есть основное отличие. Это переменная `$base`, которую нужно передавать миксинам для описания контейнера относительно размера которого будет происходить адаптация.

Для использования контейнерных выражений разработанные именованные миксины: `+eq-{size}` и `+eq-till-{size}`.

### Базовые

#### `+eq($size, $sign, $base: null)`

Это самый базовый миксин, который используется всеми остальными. Нужно указать размер контейнера, знак-идентификатор обрыва(больше `>`, меньше `<`, итп.), и нзвание контейнера относительно которого нужно применять размер.

#### `+eq-{size}($base: null)`

Используется для задания кодовым блокам ограничение на использование только при размере контейнера большего чем `size`.

Пример:
```sass
.block
  some: default-value

  +eq-sm // Изменение корневого элемента не требует указания base
    some: small-value

  &__
    &element
      +eq-sm('.block ')
        other: small-value

      +eq-md($base: '.block ') // Или передавать именованную переменную(безопаснее)
        other: medium-value
```

Результат:

```css
.block { some: default-value; }
.u-eq--gte390.block { some: small-value; }
.u-eq--gte390.block .block__element { other: small-value; }
.u-eq--gte520.block .block__element { other: medium-value; }
```

#### `+eq-till-{size}($base: null)`

Используется для задания блокам ограничение на использование только при размере контейнера меньшего чем `size`. И вообще приставка `-till-` означает "до" и механизмы с ее использованием не рекомендуется, так как это не mobile-first вариант разработки.

### Адаптеры

API также идентичен с `mq` пакетом.

Для настройки работы адаптеров существует две константы:

- `$EQ_INCLUDE_XS: false !default` - Устанавливает адаптерам потребность в адаптации к малым контейнерам.
- `$EQ_INCLUDE_XL: false !default` - Устанавливает адаптерам потребность в адаптации к крупным контейнерам.

Адаптеры применяют переданный код ко всем вариантам размеров экранов: `xs`, `sm`, `md`, `lg`, `xl`.

#### `+eq-adaptive($base: null, $separator: '-', $with-initial: true)`

Применяется для адаптации блока в mobile-first виде. `$with-initial` параметр определяет есть-ли у элемента стандартное поведение без применения контейнерных выражений или нет.

Пример:

```sass
.block
  &--modifier
    +eq-adaptive
      color: green
```

В данном случае для модификатора блока создадутся отдельные классы под применение его для каждого отдельного контейнерного запроса.

Что-то типа:

```css
.block--modifier { color: green }
.u-eq--gte390.block--modifier-esm { color: green }
.u-eq--gte520.block--modifier-emd { color: green }
.u-eq--gte780.block--modifier-elg { color: green }
```

#### `+eq-adaptive-till($base: null, $separator: '-till-', $with-initial: true)`

Механизм аналогичен действию `+eq-adaptive`, только применяет **не** mobile-first `max-width` правила.

Пример:

```sass
.block
  &__element
    &--changed
      +eq-adaptive-till('.block ')
        color: green
```

Результат:

```css
.block__element--changed { color: green }
.u-eq--lt390.block .block__element--changed-till-esm { color: green }
.u-eq--lt520.block .block__element--changed-till-emd { color: green }
.u-eq--lt780.block .block__element--changed-till-elg { color: green }
```

#### `+eq-both-adaptive($with-initial: true)`

Этот миксин применяет сразу оба вышеизложеных адаптеров.
