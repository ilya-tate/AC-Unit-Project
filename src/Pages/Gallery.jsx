import React, { useState, useEffect } from 'react'


const Gallery = () => {
  return (
    <div className="gallery-container">
      <h1>Gallery</h1>
      <section className="wrapper">
        <img src="https://picsum.photos/600/400"alt="" />
        <p className="text">
          Proident incididunt pariatur deserunt nulla. Aliquip in do magna sit
          veniam culpa. Enim dolor Lorem laboris ut cillum culpa excepteur
          veniam magna esse cupidatat consequat. Irure ea laborum adipisicing
          nostrud eu est occaecat et laboris exercitation nulla duis elit velit.
          Ex Lorem tempor labore consequat commodo aute amet. Eiusmod ipsum et
          ad deserunt tempor aliquip Lorem tempor minim cupidatat. Dolore ex
          deserunt nulla aute tempor sunt id ipsum minim mollit officia
          adipisicing. Ex qui adipisicing cillum pariatur sit labore proident
          aliquip eu est tempor nisi. Veniam tempor anim est proident.
        </p>
      </section>
      <section className="wrapper reverse">
        <p className="text">
          Proident incididunt pariatur deserunt nulla. Aliquip in do magna sit
          veniam culpa. Enim dolor Lorem laboris ut cillum culpa excepteur
          veniam magna esse cupidatat consequat. Irure ea laborum adipisicing
          nostrud eu est occaecat et laboris exercitation nulla duis elit velit.
          Ex Lorem tempor labore consequat commodo aute amet. Eiusmod ipsum et
          ad deserunt tempor aliquip Lorem tempor minim cupidatat. Dolore ex
          deserunt nulla aute tempor sunt id ipsum minim mollit officia
          adipisicing.
        </p>
        <img src="https://picsum.photos/600/399" alt="" />
      </section>
      <section className="wrapper">
        <img src="https://picsum.photos/600/401" alt="" />
        <p className="text">
          Proident incididunt pariatur deserunt nulla. Aliquip in do magna sit
          veniam culpa. Enim dolor Lorem laboris ut cillum culpa excepteur
          veniam magna esse cupidatat consequat. Irure ea laborum adipisicing
          nostrud eu est occaecat et laboris exercitation nulla duis elit velit.
          Ex Lorem tempor labore consequat commodo aute amet. Eiusmod ipsum et
          ad deserunt tempor aliquip Lorem tempor minim cupidatat. Dolore ex
          deserunt nulla aute tempor sunt id ipsum minim mollit officia
          adipisicing. Ex qui adipisicing cillum pariatur sit labore proident
          aliquip eu est tempor nisi.
        </p>
      </section>
    </div>
  );
};

export default Gallery;
