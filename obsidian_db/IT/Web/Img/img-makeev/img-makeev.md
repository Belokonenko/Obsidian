https://www.youtube.com/watch?v=VnjrIGvoO_Y&ab_channel=%D0%92%D0%B0%D0%B4%D0%B8%D0%BC%D0%9C%D0%B0%D0%BA%D0%B5%D0%B5%D0%B2

```html
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Новый image-set()</title>
    <style>
        body {
            margin: 0;
            display: grid;
            grid-template-columns: 1fr 1fr;
            font-family: sans-serif;
        }

        /* Picture */

        .picture {
            display: block;
            max-width: 100%;
            height: auto;
        }

        /* Feature */

        .feature {
            position: relative;
            display: grid;
            align-items: end;
            /* Для Chrome и Safari */
            background-image:
                linear-gradient(
                    to top,
                    black,
                    transparent 70%
                ),
                -webkit-image-set(
                    url('images/cat@2x.jpeg') 2x,
                    url('images/cat@1x.jpeg') 1x
                );
            /* Для Firefox */
            background-image:
                linear-gradient(
                    to top,
                    black,
                    transparent 70%
                ),
                image-set(
                    url('images/cat@2x.avif') type('image/avif') 2x,
                    url('images/cat@1x.avif') type('image/avif') 1x,
                    url('images/cat@2x.webp') type('image/webp') 2x,
                    url('images/cat@1x.webp') type('image/webp') 1x,
                    url('images/cat@2x.jpeg') 2x,
                    url('images/cat@1x.jpeg') 1x
                );
            background-size: cover;
            max-width: 500px;
            aspect-ratio: 1 / 1;
        }

        /* @media (min-resolution: 2dppx) {
            .feature {
                background-image: url('images/cat@2x.jpeg');
            }
        } */

        .feature__title {
            margin: 0;
            padding: 0.7em;
            color: white;
            line-height: 0.7;
            font-weight: normal;
            font-size: 50px;
        }

        .feature__link {
            color: white;
            text-decoration: none;
        }

        .feature__link:focus-visible {
            outline: none;
        }

        .feature__link:focus-visible::before {
            outline: 5px solid deepskyblue;
            outline-offset: -5px;
        }

        .feature__link::before {
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            content: '';
        }
    </style>
</head>
<body>
    <picture>
        <source type="image/avif" srcset="images/cat@1x.avif 1x, images/cat@2x.avif 2x">
        <source type="image/webp" srcset="images/cat@1x.webp 1x, images/cat@2x.webp 2x">
        <img class="picture" width="500" height="500"
            src="images/cat@1x.jpeg"
            srcset="images/cat@2x.jpeg 2x"
            alt="Рыжий кот нюхает штанину.">
    </picture>
    <article class="feature">
        <h2 class="feature__title">
            <a class="feature__link" href>
                Кот понюхал штанину
            </a>
        </h2>
    </article>
</body>
</html>
```