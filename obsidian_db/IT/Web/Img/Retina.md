1. Используйте тексты и градиенты — их не нужно дополнительно оптимизировать.
2. Используйте изображения минимум в двух форматах: для обычных экранов и для ретины.
3. По возможности отдавайте приоритет SVG.
4. При добавлении контентных изображений используйте атрибут `srcset.`
5. Для фоновых картинок применяйте медиавыражение `@media(min-resolution: 2dppx) {...}`или используйте CSS-функцию `image-set.`
6. Не забывайте проверять, как выглядит вёрстка на экранах с различной плотностью пикселей.


```html
<div class="retina-image-container"> 
	<picture> 
	<!-- Для обычных экранов --> 
		<source 
			srcset="image.jpg" 
			media="(max-width: 767px)"> 
		
	<!-- Для экранов с плотностью пикселей 2x --> 
		<source 
			srcset="image@2x.jpg" 
			media="(min-width: 768px) and (max-width: 1199px)"> 
	<!-- Для экранов с плотностью пикселей 4x --> 
		<source srcset="image@4x.jpg" media="(min-width: 1200px)"> 
	<!-- Фallback для старых браузеров или тех, которые не поддерживают тег picture --> 
		<img src="image.jpg" alt="Retina Image"> 
	</picture> 
</div>
```

```css
/* Обычное разрешение (1x) */ 
body { 
	background-image: url('background.jpg'); 
	background-size: cover; 
	} 

/* Экраны с плотностью 2x (Retina) */ 
@media only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (min-resolution: 192dpi) { 
	body { background-image: url('background@2x.jpg'); 
	} 
} 

/* Экраны с плотностью 4x */ 
@media only screen and (-webkit-min-device-pixel-ratio: 4), only screen and (min-resolution: 384dpi) { 
	body { 
		background-image: url('background@4x.jpg'); 
	} 
}
```