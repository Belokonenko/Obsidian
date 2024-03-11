https://htmlacademy.ru/blog/html/free-html-template
# Шаблон простого сайта на HTML

- 8 июля 2022

[HTML](https://htmlacademy.ru/blog/html)

[Евгений Шкляр](https://htmlacademy.ru/profile/id1173761)

Если вам нужно быстро сделать сайт на учёбе или для личных дел, используйте этот шаблон. Вы можете наполнить его чем угодно — добавить тексты, картинки или подключить любые стили. Например, такие, через awsm.css.

![Как может выглядеть сайт по такому шаблону](https://cs1.htmlacademy.ru/blog/html/free-html-template/737026dc9778c648950cfaecd5b3ce67.jpeg)

Как может выглядеть сайт по такому шаблону

Сайт легко запустится у вас на компьютере [по инструкции](https://htmlacademy.ru/blog/html/how-to-run-html) или откроется сразу в браузере.

```
<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Заголовок страницы</title>
    <link rel="stylesheet" href="./styles/style.css">

    <meta property="og:title" content="Заголовок страницы в OG">
    <meta property="og:description" content="Описание страницы в OG">
    <meta property="og:image" content="https://example.com/image.jpg">
    <meta property="og:url" content="https://example.com/">
  </head>
  <body>
    <header>
      <h1>Личный сайт</h1>
      <p>Который сделан на основе готового шаблона</p>
      <nav>
        <ul>
          <li><a href="index.html">Эта страница</a></li>
          <li><a href="catalog.html">Другая страница</a></li>
        </ul>
      </nav>
    </header>
    <main>
      <article>
        <section>
          <h2>Первая секция</h2>
          <p>Она обо мне</p>
          <img src="images/image.png" alt="Человек и пароход">
          <p>Но может быть и о семантике, я пока не решил.</p>
        </section>
        <section>
          <h2>Вторая секция</h2>
          <p>Она тоже обо мне</p>
        </section>
        <section>
          <h2>И третья</h2>
          <p>Вы уже должны были начать догадываться.</p>
        </section>
      </article>
    </main>
    <footer>
      <p>Сюда бы я вписал информацию об авторе и ссылки на другие сайты</p>
    </footer>
    <!-- сюда можно подключить jquery <script src="scripts/app.js" defer></script> -->
  </body>
</html>
```

[Открыть шаблон в браузере](https://assets.htmlacademy.ru/content/blog/1331/index.html)

## Короткий разбор

Если у вас есть немного времени, давайте посмотрим на код и поймем, из чего состоит сайт, и зачем нужна каждая строчка.

[Доктайп](https://htmlacademy.ru/blog/html/doctype) помогает браузеру понять, как отображать страницу.

```
<!DOCTYPE html>
```

Внутри тега [`<html>`](https://htmlacademy.ru/blog/html-tags/html) мы указываем язык страницы, например:

```
<html lang="ru">
```

Называем кодировку страницы — для русского языка подходит `utf-8`.

```
<meta charset="utf-8">
```

Дальше идёт магия, которая помогает нашему сайту выглядеть чуть лучше. [Она просто нужна](https://htmlacademy.ru/blog/html-tags/meta), можете пока не задумываться.

```
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

Подключаем файл со стилями — замените `./styles/style.css` на имя вашего файла со стилями. Если ничего не работает или файл не видно, прочитайте про абсолютные и [относительные ссылки](https://htmlacademy.ru/blog/html/links).

```
<link rel="stylesheet" href="./styles/style.css">
```

В этом блоке напишите, какой заголовок, описание и ссылка будут видны на карточке в ленте, если ваш сайт кто-нибудь запостит в соцсетях.

```
<meta property="og:title" content="Заголовок страницы в OG">
<meta property="og:description" content="Описание страницы в OG">
<meta property="og:image" content="https://example.com/image.jpg">
<meta property="og:url" content="https://example.com/">
```

[`<header>`](https://htmlacademy.ru/blog/html-tags/header) — шапка сайта — блок, который может повторяться на любой странице.

```
<header>
</header>
```

Дальше идут `<h1>` и `<h2>` — [заголовки](https://htmlacademy.ru/blog/html/headers) первого и второго уровня.

```
<h1>Это мой сайт</h1>
<h2>Первая секция</h2>
```

Следом навигация. В шаблоне она сделана через верхнюю навигацию [`<nav>`](https://htmlacademy.ru/blog/html-tags/nav), в которой ссылки сделаны списком [`<ul>`](https://htmlacademy.ru/blog/html-tags/ul) и завёрнуты в тег [`<li>`](https://htmlacademy.ru/blog/html-tags/li).

```
<nav>
  <ul>
    <li><a href="index.html">Эта страница</a></li>
    <li><a href="catalog.html">Другая страница</a></li>
  </ul>
</nav>
```

Одна из самых важных частей страницы — [семантический тег](https://htmlacademy.ru/blog/html/semantics) `<main>`, в нём хранится основное содержимое, которое относится только к этой странице и не повторяется на других.

```
<main></main>
```

Изображение, картинка или фотография. [Обязательно](https://htmlacademy.ru/blog/html/good-alt) с атрибутом `alt` — он важен, не забывайте о нём.

```
<img src="images/myphoto.jpg" alt="Фото автора сайта в профиль крупным планом">
```

Абзац текста — здесь пишем просто какой-то текст, который хотим показать на странице. Подробнее — [в тренажёре](https://htmlacademy.ru/courses/intro-to-web-development).

```
<p>Но может быть и о семантике, я пока не решил.</p>
```

Если захотите подключить JavaScript и добавить интерактивные элементы, можете сделать это в этом блоке — достаточно его [раскомментировать](https://htmlacademy.ru/courses/297/run/1).

```
<!-- сюда можно подключить jQuery <script src="scripts/app.js" defer></script> -->
```

На этом всё, дорабатывайте шаблон по своему усмотр