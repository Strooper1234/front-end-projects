<template>
  <div class="about-container">
    <h2>About Me</h2>
    <br>
    <br>
    <div class="about-info">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam hic fugiat
        ipsa consequuntur tempore, fugit aperiam similique adipisci minima eveniet
        dolorum. Consectetur nisi facilis nostrum autem consequatur corporis minus
        sapiente dolore tempore veniam fuga, praesentium id culpa iure, temporibus
        fugit laboriosam eveniet modi voluptatibus laborum doloremque quibusdam
        harum repellendus dolorum. Soluta praesentium maxime nostrum sed veritatis
        repellendus quos incidunt consequatur dicta, nobis fuga neque officia
        dolorem animi aperiam voluptatem necessitatibus commodi ad nihil enim
        ducimus dignissimos! Molestias totam dignissimos iure est repudiandae vero
        nemo eligendi placeat numquam. Natus architecto necessitatibus consequatur
        omnis tenetur rem quae provident aliquid? Quidem, laudantium sunt!
      </p>
      <br />
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur placeat
        corrupti recusandae, ab facere praesentium eos fuga pariatur ratione optio
        a quasi blanditiis! Possimus consectetur id consequatur eius velit dolorem
        eum sed nihil. Debitis ullam, nemo magnam distinctio quasi laboriosam
        facilis nobis, repudiandae, quia earum incidunt excepturi asperiores
        perspiciatis aperiam quos minus voluptatem quo. Nemo libero harum
        quibusdam sed illum! Dolorum culpa, illum voluptas tenetur officia rem
        ipsum natus nihil et fugit assumenda aliquid saepe nesciunt dignissimos
        numquam eum. Eligendi placeat, obcaecati minima, voluptates beatae
        expedita perspiciatis tenetur aspernatur, aliquam sapiente laboriosam
        suscipit blanditiis ex nostrum alias nihil! Rem, nostrum?
      </p>
    </div>
    <div class="about-image">
      <img src="./../assets/images/none.jpg" alt="">
    </div>
  </div>
</template>

<style>
.about-container {
  /* height: 100vh; */
  /* background: cyan; */
  padding: 0px 0px;
  /* margin: 100px 20px; */
  /* padding-top: 8vh; */
  border: none;
  /* background: linear-gradient(rgba(100,190,190, 0.5), rgba(100,210,210, 0.8)); */
  /* background: rgba(var(--background-color-rgb), 0.5); */
  /* box-shadow: 0 0 4em rgba(var(--background-color-rgb), 1); */
}

.about-container p {
    /* color: rgb(205, 205, 205); */
    /* width: 60%; */
    /* margin-left: 20%; */
    /* display: flex;
    align-items: center; */
}
.about-info {
  background: rgba(var(--accent-color-dark-rgb), 0.95);
  color: rgba(var(--accent-color-rgb),.8);
  width: 50%;
  text-align: left;
  padding: 30px;
}
@media screen and (max-width: 768px) {
  /* this might not work anymore */
    .about-container p {
        margin-left: 0%;
        width: 100%;
        align-items: flex-start;
        padding: 100px 0px;
    }
}
</style>
