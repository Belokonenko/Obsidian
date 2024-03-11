![[Pasted image 20240206013231.png]]
img 1000 / 1000 px  оригинал если 
поставить 500 \500 @2

```html
        <picture>
            <!-- <source -->
            <!--     type="image/avif" -->
            <!--     srcset=" -->
            <!--         img/banner.avif   1x, -->
            <!--         img/banner@2.avif 2x, -->
            <!--         img/banner@3.avif 3x -->
            <!--     " -->
            <!-- /> -->
            <source
                type="image/webp"
                srcset="
                    img/banner.webp   1x,
                    img/banner@2.webp 2x,
                    img/banner@3.webp 3x
                "
            />
            <img
                width="680"
                height="550"
                alt=""
                loading="lazy"
                src="./img/banner.jpg"
                srcset="./img/banner@2.jpg 2x"
                srcset="./img/banner@3.jpg 3x"
            />
        </picture>

```

```css
.bg-img {
    width: 680px;
    height: 550px;
    background-color: lightgray;
    background-image: 
        image-set(
                // url('../../img/banner.avif') type('image/avif') 1x,
                // url('../../img/banner@2.avif') type('image/avif') 2x,
                // url('../../img/banner@3.avif') type('image/avif') 3x,
                url('../../img/banner.webp') type('image/webp') 1x,
                url('../../img/banner@2.webp') type('image/webp') 2x,

                url('../../img/banner@3.webp') type('image/webp') 3x,
                url('../../img/banner.jpg') 1x,
                url('../../img/banner@2.jpg') 2x,
                url('../../img/banner@3.jpg') 3x,
            );
    background-size: cover;
    background-position: center;
}

```

```scss
@mixin responsive-background-image($image-path) {
    background-image: image-set(
        url("#{$image-path}.webp") type("image/webp") 1x,
        url("#{$image-path}@2x.webp") type("image/webp") 2x,
        url("#{$image-path}@3x.webp") type("image/webp") 3x,
        url("#{$image-path}@4x.webp") type("image/webp") 4x,
        url("#{$image-path}.jpeg") 1x,
        url("#{$image-path}@2x.jpeg") 2x,
        url("#{$image-path}@3x.jpeg") 3x,
        url("#{$image-path}@4x.jpeg") 4x,
    );
}
//вызов
//    @include responsive-background-image("../img/banner-img-1/b_1");

```