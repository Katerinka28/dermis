# Ссылки

Модуль **`link`** добавляет стилизацию ссылок в типографике(флаг **`$LINK_USE_IN_TYPE_CONTENT`** по умолчанию включает эту возможность), и отдельный элемент ссылки.

## Примеры

::: demo
```html
<template>
  <div>
    <a class="ds-link" href="javascript:void(0)">Link</a>
    <button class="ds-link" href="javascript:void(0)">Button</button>
    <button class="ds-link ds-link--styling_default" href="javascript:void(0)">Стандартная стилизация</button>
  </div>
</template>
<script> export default {}; </script>
```
:::

### В типографике

::: demo
```html
<template>
  <div class="t-content">
    <p>
      Для типографики используется стандартная стилизация ссылок.
    </p>
    <p>
      Old unsatiable our now but considered <a href="javascript:void(0)">travelling impression</a>. In excuse hardly summer in <a href="javascript:void(0)">basket misery</a>. By rent an part need. At wrong of of <a href="javascript:void(0)">water</a> those linen. Needed oppose seemed how all. Very mrs shed shew gave you. Oh shutters do removing reserved wandered an.
    </p>
  </div>
</template>
<script> export default {}; </script>
```
:::

### Состояния

::: demo
```html
<template>
  <div>
    <a class="ds-link ds-link--styling_default" href="javascript:void(0)">Default</a>
    <a class="ds-link ds-link--styling_default is-focus" href="javascript:void(0)">Focused</a>
    <a class="ds-link ds-link--styling_default is-hover" href="javascript:void(0)">Hover</a>
    <a class="ds-link ds-link--styling_default is-active" href="javascript:void(0)">Active</a>
  </div>
</template>
<script> export default {}; </script>
```
:::
