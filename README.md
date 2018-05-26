# Catch Me On TaoBao

<img src="ReadMeImgs/taobao1.png" width="200" />


Catch Me on TaoBao is a Chrome extension that helps you find luxury good for less. When you go on a site like https://kanyeweststores.com or https://www.kyliecosmetics.com (or any Shopify based e-commerce store), with Catch Me on TaoBao, the next time you try to "Add to Cart", we'll take you to a similar product on TaoBao (A premier knock off site) instead.

Catch Me on TaoBao is JavaScript the whole stack down. It is a Chrome extension that is able to detect if you are on a product site, and is able to make a back end call to our NodeJS API developed with StdLib to help find a corresponding TaoBao product.


<img src="ReadMeImgs/Kanye.png" width="300"  style="display: inline;"/>
<img src="ReadMeImgs/taobaoified.png" width="300" style="display: inline"/>


### Getting Started

To get started on the backend:

Make sure you have NodeJS installed, and install StdLib, and well as the required JS packages in the `package.json`.

To run locally, run with `lib http`

To deploy, run `lib up dev` and `lib release`

To use the Chrome extension:

Go to `chrome://extensions/`, and press `Load unpacked extensions...` and select the `/Chrome` folder in the project.
