https://htmlacademy.ru/blog/html/form-template

Не бывает единого шаблона формы — под каждую задачу нужно составлять что-то своё. Например, форма для отправки сообщений будет отличаться от формы для ввода данных банковской карточки.

А ещё важен макет — где-то дизайнер задумал добавить одно текстовое поле с кнопкой, а где-то десяток переключателей. Поэтому мы сначала покажем общий шаблон формы, а затем разберём, из каких тегов он состоит — так вы сможете изменить наш пример под свои цели.

```html
<form action="#" method="post" target="_blank">
  <h2>Шаблон формы</h2>
  <fieldset>
    <legend>Персональные данные</legend>
    <ul>
      <li>
        <label for="name">Имя:*</label>
        <input type="text" name="name" placeholder="Иван Иванов" id="name" required>
      </li>
      <li>
        <label for="age">Возраст:</label>
        <input type="number" name="age" placeholder="27" id="age" min="0" max="125">
      </li>
    </ul>
  </fieldset>
  <fieldset>
    <legend>Контакты</legend>
    <ul>
      <li>
        <label for="email">E-mail:*</label>
        <input type="email" name="mail" placeholder="ivanov@gmail.com" id="email" required>
      </li>
      <li>
        <label for="number">Телефон:*</label>
        <input type="tel" name="phone" placeholder="+7 000 000-00-00" id="number" maxlength="21" required>
      </li>
    </ul>
  </fieldset>
  <div>
    <label for="message">Увлечения</label>
    <textarea name="comment" placeholder="Расскажите обо всём, что для вас важно" id="message"></textarea>
  </div>
  <fieldset>
    <legend>Учёба</legend>
    <ul>
      <li>
        <input type="checkbox" name="intensive-courses" id="courses" checked>
        <label for="courses">Прохожу курсы</label>
      </li>
      <li>
        <input type="checkbox" name="books" id="books">
        <label for="books">Читаю книги</label>
      </li>
      <li>
        <input type="checkbox" name="video" id="video">
        <label for="video">Смотрю видео</label>
      </li>
    </ul>
  </fieldset>
  <fieldset>
    <legend>Предпочтения</legend>
    <ul>
      <li>
        <input type="radio" name="preference" id="front" value="frontend" checked>
        <label for="front">Фронтенд-разработка</label>
      </li>
      <li>
        <input type="radio" name="preference" id="back" value="backend">
        <label for="back">Бэкенд-разработка</label>
      </li>
    </ul>
  </fieldset>
  <div>
    <button type="submit">Отправить</button>
    <p>* — Обязательные поля</p>
  </div>
</form>
```

## Из чего состоит форма

### `<form>` и `<fieldset>`

**`<form>`** — контейнер формы, в нём содержатся все поля и кнопка для отправки данных. Тегу добавляется два атрибута: `action` и `post`. В первом указывается URL-адрес, на который будет отправлена форма, а второй задаёт метод отправки:

- `post` — посылает данные [в теле HTTP-запроса](https://htmlacademy.ru/blog/php/get-vs-post). Его используют, когда нужно отправить много данных и ссылка на результат их обработки не нужна. Например, при редактировании личного профиля.
- `get` — метод по умолчанию. Он посылает данные формы в строке запроса, то есть они видны в адресной строке браузера. Метод применяется, например, в поисковых формах.

Тег `<fieldset>` группирует поля формы. Он часто используется с `<legend>` — тегом, который задаёт подписи для каждой группы. Мы использовали этот тег, чтобы разделить поля формы на три части: «Персональная информация», «Контакты» и «Обратная связь».

### `<label>`

Заголовок или подпись для полей ввода. Он связывается с элементами двумя способами.

При помощи атрибута `for` со значением, аналогичным `id` элемента:

```html
<label for="name">Имя:*</label>
<input type="text" name="name" placeholder="Иван Иванов" id="name" required>
```

Элемент заключается между открывающим и закрывающим тегами `<label>`**:**

```html
<label>
  <input type="checkbox" checked>Соглашаюсь на обработку персональных данных
</label>
```

### `<select>`

Создаёт раскрывающийся список:

```html
<label for="education">Уровень образования</label>
<select id="education">
  <option value="secondary">Среднее общее</option>
  <option value="secondary vocational">Среднее профессиональное</option>
  <option value="higher" selected>Высшее</option>
  <option value="incomplete higher" selected>Неоконченное высшее</option>
</select>
```

Для добавления элементов списка используется тег `<option>`.

**Атрибуты тега** `<select>`**:**
```
```
- `autocomplete` — включено ли автозаполнение поля;
- `disabled` — в списке нельзя ничего выбрать;
- `form` — связывает `<select>` с формой, если он не вложен в тег `<form>`;
- `multiple` — создаёт «мультиселект», то есть список, в котором можно выбрать несколько значений;
- `name` — имя элемента, используется для отправки формы;
- `required` — один из пунктов обязательно должен быть выбран;
- `size` — размер элемента.

### `<textarea>`

Добавляет поле для ввода сообщения — пользователь может оставить в нём вопрос, комментарий для техподдержки или что-то ещё.

```
<label for="message">Увлечения</label>
<textarea name="comment" placeholder="Расскажите обо всём, что для вас важно" id="message"></textarea>
```

У [`<textarea>`](https://htmlacademy.ru/blog/html-tags/textarea) есть особенность: пользователи могут прямо в браузере растягивать текстовое поле по ширине и высоте, ломая вёрстку и нарушая замыслы дизайнера. Чтобы заблокировать такое поведение, используйте CSS-свойство `resize: none`.

**Основные атрибуты textarea:**

- `name` — имя поля;
- `id` — связывает поле с `<label>`;
- `maxlength` и `minlength` — задают максимальную или минимальную длину текста;
- `required` — указывает, что поле обязательно для заполнения;
- `placeholder` — выводит короткую подсказку для пользователей — что нужно вводить;
- `disabled` — блокирует поле ввода;
- `readonly` — делает поле доступным только для чтения, ввод запрещён.

### `<input>`

Создаёт интерактивные элементы для получения данных от пользователя. С его помощью можно добавить поля для ввода имени, номера телефона, почты, логина и пароля. Даже чекбоксы и радиокнопки реализуются с помощью этого тега.

```
<label for="email">E-mail:*</label>
<input type="email" name="mail" placeholder="ivanov@gmail.com" id="email" required>
```

Чтобы пользователи вводили данные в правильном формате, тегу [`<input>`](https://htmlacademy.ru/blog/html-tags/input) нужно задавать атрибут `type`[с подходящим значением](https://html.spec.whatwg.org/#concept-element-attributes):

- `text` — можно вводить только текст;
- `number` — ввод только цифр;
- `tel` — для телефонных номеров;
- `email` — ввод электронной почты;
- `submit` — инпут превращается в кнопку для отправки данных на сервер;
- `password` — поле для ввода паролей;
- `date` — для ввода даты;
- `checkbox` — инпут превращается в чекбокс;
- `radio` — создаёт радиокнопки.

У атрибута более 20 значений, полный список — на [сайте MDN](https://htmlacademy.ru/50bb5cace1284020be8375e9a1dbc889).

**Основные атрибуты тега** `<input>`**:**

- `id` — связывает `input` с `<label>`;
- `name` — имя поля;
- `maxlength` или `minlength` — максимальная или минимальная длина текста;
- `max` или `min` — максимальное или минимальное значение числа и даты;
- `required` — поле обязательно для заполнения;
- `placeholder` — в поле ввода отображается подсказка — что нужно вводить;
- `disabled` — блокирует `input`;
- `autocomplete` — автозаполнение;
- `checked` — для чекбоксов и радиокнопок, делает поле выбранным;
- `pattern` — задаёт паттерн для ввода данных, часто используется в типах `tel` и `email`;
- `value` — значение элемента;
- `enctype` — указывает, в каком виде пересылать данные на сервер.

### `<button>`

Создаёт кнопку для отправки формы:

```
<button type="submit">Отправить</button>
```

В старых проектах всё ещё встречаются кнопки, сделанные с помощью `<input type="button">`. Но у такого способа есть ограничения — например, в `<button>` можно добавить изображение или псевдоэлемент, а в `<input>` нет.

## Что выбрать:

[`<textarea>`](https://htmlacademy.ru/blog/html-tags/textarea) — если нужно поле для ввода сообщения.

[`<select>`](https://htmlacademy.ru/blog/html-tags/select) — для раскрывающихся списков.

[`<input>`](https://htmlacademy.ru/blog/html-tags/input) — когда нужны чекбоксы, радиокнопки, поля для загрузки файлов и ввода данных.

[`<button>`](https://htmlacademy.ru/blog/html-tags/button) — для кнопки отправки формы.