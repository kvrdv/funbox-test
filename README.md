[![Build status](https://ci.appveyor.com/api/projects/status/oao1lmgk23h04aqy/branch/main?svg=true)](https://ci.appveyor.com/project/kvrdv/funbox-test/branch/main)

# FunBox
## Квалификационные задания для разработчиков HTML/CSS/JS

[Скачать задание](https://dl.funbox.ru/qt-html-css-js.zip)

## Установка:
```shell
npm init
npm install --save-dev jest babel-jest @babel/core @babel/cli @babel/preset-env
npm install core-js@3
```

## Требования:
* Браузеры: Chrome, Firefox, Safari, IE11;
* Стандарты: на ваше усмотрение;
* Структура проекта: на ваше усмотрение;
* Инструменты: любой сборщик на платформе Node.js;
* Библиотеки: приветствуется React, но можно и без него;
* Результат: ссылка на страницу, которая корректно отображается на любых современных десктопных компьютерах, смартфонах и планшетах, а также git-репозиторий с исходниками верстки.

## Описание:
1. Фон занимает всю площадь экрана, блок находится по центру вертикально и горизонтально.
2. На планшетах упаковки располагаются треугольником, на смартфонах друг под другом.
3. Информация о продукте может меняться.
4. Каждая из упаковок может быть выбрана или недоступна для выбора. Выбор осуществляется нажатием на упаковку или на текст «купи» в описании.
5. Можно выбрать одновременно несколько упаковок, а также отменить свой выбор повторным нажатием на упаковку.
6. Состояние наведения применяется к выбранной упаковке не сразу, а после того, как курсор ушел с нее после первоначального выбора.