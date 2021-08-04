import placeholderPainting from "../images/placeholder-drawing.png";
import imageOne from "../images/art/image-2.png";
import imageTwo from "../images/art/image-3.png";
import imageThree from "../images/art/image-4.png";

import galleryOne from "../images/gallery/gallery-1.png";
import galleryTwo from "../images/gallery/gallery-2.jpg";
import galleryThree from "../images/gallery/gallery-3.jpg";

import newsImage from "../images/news-image.png"

export const slides = [
    {
      image: placeholderPainting,
      alt: "An alternate text",
      title: "Illusion, 2020",
      description: `Mix Media on Canvas<br />23 3/5 × 19 7/10 in<br />60 × 50 cm`,
      url: "https://google.com",
      price: 5050.56,
      availability: 0,
      highlighted: true
    },
    {
      image: imageTwo,
      alt: "An alternate text",
      title: "An Incredible One",
      description: "Tempera su tela<br />50 3/5 × 19 7/10 in<br />60 × 50 cm",
      url: "https://google.com",
      price: 4650.9,
      availability: 1,
      highlighted: true
    },
    {
      image: imageOne,
      alt: "An alternate text",
      title: "An Incredible One",
      description: "Tempera su tela<br />50 3/5 × 19 7/10 in<br />60 × 50 cm",
      url: "https://google.com",
      price: 5050.5,
      availability: 1,
      highlighted: true
    },
    {
      image: imageThree,
      alt: "An alternate text",
      title: "An Incredible One",
      description: "Tempera su tela<br />50 3/5 × 19 7/10 in<br />60 × 50 cm",
      url: "https://google.com",
      price: 5050.5,
      availability: 1,
      highlighted: true
    },
    {
      image: placeholderPainting,
      alt: "An alternate text",
      title: "An Incredible One",
      description: "Tempera su tela<br />50 3/5 × 19 7/10 in<br />60 × 50 cm",
      url: "https://google.com",
      price: 5050.5,
      availability: 1,
      highlighted: true
    },
    {
      image: imageThree,
      alt: "An alternate text",
      title: "An Incredible One",
      description: "Tempera su tela<br />50 3/5 × 19 7/10 in<br />60 × 50 cm",
      url: "https://google.com",
      price: 5050.5,
      availability: 1,
      highlighted: true
    },
  ];

export const news = [
    {
        date: new Date("2021-05-01"),
        title: "L'arte di Danilo ora presente nella Artsy Gallery",
        content: `
        <p>Danilo D’Ignazio nasce a Giulianova nel 1985 e sin dai primi anni di scuola dimostra un’innata passione per il disegno. La sua passione si traduce in lavoro, quando diventa Graphic designer, sino alla creazione, nel 2012, di un suo Brand "Made in Italy".</p>
        <p>Durante un soggiorno a New York, rapito dalla cultura urbana e dalle strade newyorkesi inizia il suo percorso artistico utilizzando un linguaggio "street-pop".</p>
        `,
        author: "Mattia Rasulo",
        image: newsImage,
        alt: "Some alt text"
    },
    {
        date: new Date("2021-05-19"),
        title: "Danilo D'Ignazio inaugura una mostra personale in Italia",
        content: `
        <p>Danilo D’Ignazio nasce a Giulianova nel 1985 e sin dai primi anni di scuola dimostra un’innata passione per il disegno. La sua passione si traduce in lavoro, quando diventa Graphic designer, sino alla creazione, nel 2012, di un suo Brand "Made in Italy".</p>
        <p>Durante un soggiorno a New York, rapito dalla cultura urbana e dalle strade newyorkesi inizia il suo percorso artistico utilizzando un linguaggio "street-pop".</p>
        `,
        author: "Micaela Rudari",
        image: newsImage,
        alt: "Some alt text"
    }
]

export const gallery = [
  {
    title: "Artsy",
    image: galleryOne
  },
  {
    title: "Facebook",
    image: galleryTwo
  },
  {
    title: "Instagram",
    image: galleryThree
  }
]