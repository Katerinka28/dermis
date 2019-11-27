(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{228:function(t,s,a){"use strict";a.r(s);var e=a(1),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"медиа"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#медиа"}},[t._v("#")]),t._v(" Медиа")]),t._v(" "),a("p",[a("strong",[a("code",[t._v("mq")])]),t._v(" - Модуль отвечающий за работу с медиавыражениями на проекте.")]),t._v(" "),a("p",[t._v("Контрольные точки изменения размеров стандартизированы до: "),a("code",[t._v("xs")]),t._v(", "),a("code",[t._v("sm")]),t._v(", "),a("code",[t._v("md")]),t._v(", "),a("code",[t._v("lg")]),t._v(", "),a("code",[t._v("xl")]),t._v(". Этого достаточно для покрытия базовых нужд при разработке.")]),t._v(" "),a("p",[t._v("Изменить значения стандартных контрольных точек можно в переменных "),a("code",[t._v("$mq-size-{size}")]),t._v(".")]),t._v(" "),a("p",[t._v("Значения контрольных точек доступны в виде css custom properties: "),a("code",[t._v("--mq-size-{size}")]),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"миксины"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#миксины"}},[t._v("#")]),t._v(" Миксины")]),t._v(" "),a("p",[t._v("Для использования медиа выражений разработанные именованные миксины: "),a("code",[t._v("+mq-{size}")]),t._v(" и "),a("code",[t._v("+mq-till-{size}")]),t._v(".")]),t._v(" "),a("h3",{attrs:{id:"базовые"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#базовые"}},[t._v("#")]),t._v(" Базовые")]),t._v(" "),a("h4",{attrs:{id:"mq-size"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mq-size"}},[t._v("#")]),t._v(" "),a("code",[t._v("+mq-{size}")])]),t._v(" "),a("p",[t._v("Используется для задания кодовым блокам ограничение на использование только при размере экрана большего чем "),a("code",[t._v("size")]),t._v(".")]),t._v(" "),a("p",[t._v("Пример:")]),t._v(" "),a("div",{staticClass:"language-sass extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sass"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".block")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property-line"}},[t._v("  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("some")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" default-value")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token atrule-line"}},[t._v("  "),a("span",{pre:!0,attrs:{class:"token atrule"}},[t._v("+")]),t._v("mq-sm")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property-line"}},[t._v("    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("some")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" small-value")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token atrule-line"}},[t._v("  "),a("span",{pre:!0,attrs:{class:"token atrule"}},[t._v("+")]),t._v("mq-md")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property-line"}},[t._v("    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("some")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" medium-value")]),t._v("\n")])])]),a("h4",{attrs:{id:"mq-till-size"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mq-till-size"}},[t._v("#")]),t._v(" "),a("code",[t._v("+mq-till-{size}")])]),t._v(" "),a("p",[t._v("Используется для задания кодовым блокам ограничение на использование только при размере экрана меньшего чем "),a("code",[t._v("size")]),t._v(". И вообще приставка "),a("code",[t._v("-till-")]),t._v(' означает "до" и механизмы с ее использованием не рекомендуется, так как это не mobile-first вариант разработки.')]),t._v(" "),a("h3",{attrs:{id:"адаптеры"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#адаптеры"}},[t._v("#")]),t._v(" Адаптеры")]),t._v(" "),a("p",[t._v("Часто есть потребность в использовании того или иного модификатора в рамках конкретного размера экрана. Для этого каждый раз приходиться писать(часто кописаста) отдельный код.")]),t._v(" "),a("p",[t._v("Именно для уменьшения количества кода требуемого для этих целей существуют эти миксины.")]),t._v(" "),a("p",[t._v("Для настройки работы адаптеров существует две константы:")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("$MQ_INCLUDE_XS: false !default")]),t._v(" - Устанавливает адаптерам потребность в адаптации к крайне малым экранам.")]),t._v(" "),a("li",[a("code",[t._v("$MQ_INCLUDE_XL: false !default")]),t._v(" - Устанавливает адаптерам потребность в адаптации к крупным экранам.")])]),t._v(" "),a("p",[t._v("Адаптеры применяют переданный код ко всем вариантам размеров экранов: "),a("code",[t._v("xs")]),t._v(", "),a("code",[t._v("sm")]),t._v(", "),a("code",[t._v("md")]),t._v(", "),a("code",[t._v("lg")]),t._v(", "),a("code",[t._v("xl")]),t._v(".")]),t._v(" "),a("h4",{attrs:{id:"mq-adaptive-separator-with-initial-true"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mq-adaptive-separator-with-initial-true"}},[t._v("#")]),t._v(" "),a("code",[t._v("+mq-adaptive($separator: '-', $with-initial: true)")])]),t._v(" "),a("p",[t._v("Применяется для адаптации блока в mobile-first виде. "),a("code",[t._v("$with-initial")]),t._v(" параметр определяет есть-ли у элемента стандартное поведение без применения медиа выражений или нет.")]),t._v(" "),a("p",[t._v("Пример:")]),t._v(" "),a("div",{staticClass:"language-sass extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sass"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".block")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("&--modifier")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token atrule-line"}},[t._v("    "),a("span",{pre:!0,attrs:{class:"token atrule"}},[t._v("+")]),t._v("mq-adaptive")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property-line"}},[t._v("      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" green")]),t._v("\n")])])]),a("p",[t._v("В данном случае для модификатора блока создадутся отдельные классы под применение его для каждого отдельного медиа запроса.")]),t._v(" "),a("p",[t._v("Что-то типа:")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".block--modifier")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" green "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token atrule"}},[a("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@media")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("min-width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 564px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".block--modifier-sm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" green "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token atrule"}},[a("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@media")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("min-width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 768px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".block--modifier-md")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" green "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token atrule"}},[a("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@media")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("min-width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 992px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".block--modifier-lg")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" green "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h4",{attrs:{id:"mq-adaptive-till-separator-till-with-initial-true"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mq-adaptive-till-separator-till-with-initial-true"}},[t._v("#")]),t._v(" "),a("code",[t._v("+mq-adaptive-till($separator: '-till-', $with-initial: true)")])]),t._v(" "),a("p",[t._v("Механизм аналогичен действию "),a("code",[t._v("+mq-adaptive")]),t._v(", только применяет "),a("strong",[t._v("не")]),t._v(" mobile-first "),a("code",[t._v("max-width")]),t._v(" правила.")]),t._v(" "),a("p",[t._v("Пример:")]),t._v(" "),a("div",{staticClass:"language-sass extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sass"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".block")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("&--modifier")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token atrule-line"}},[t._v("    "),a("span",{pre:!0,attrs:{class:"token atrule"}},[t._v("+")]),t._v("mq-adaptive-till")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property-line"}},[t._v("      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" green")]),t._v("\n")])])]),a("p",[t._v("Результат:")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".block--modifier")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" green "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token atrule"}},[a("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@media")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("max-width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 563px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".block--modifier-till-sm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" green "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token atrule"}},[a("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@media")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("max-width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 767px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".block--modifier-till-md")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" green "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token atrule"}},[a("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@media")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("max-width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 991px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".block--modifier-till-lg")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" green "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h4",{attrs:{id:"mq-both-adaptive-with-initial-true"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mq-both-adaptive-with-initial-true"}},[t._v("#")]),t._v(" "),a("code",[t._v("mq-both-adaptive($with-initial: true)")])]),t._v(" "),a("p",[t._v("Этот миксин применяет сразу оба вышеизложеных адаптеров.")])])}),[],!1,null,null,null);s.default=r.exports}}]);