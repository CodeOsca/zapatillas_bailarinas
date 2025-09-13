(function () {
  let templateMenu = `
  <div style="margin-bottom: 80px;"></div>
    <nav class="navbar navbar-expand-lg bg-pink fixed-top" style="background-color: #E685B5;">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
        <img src="./img/logonobg.png" alt="Logo Zapatillas" style="width: 55px;" />
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>


    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">

        <li class="nav-item">
          <a class="nav-link active text-white" aria-current="page" href="./index.html">Inicio</a>
        </li>
        
        <li class="nav-item dropdown">
          <a class="nav-link text-white" href="./cursos.html">Cursos </a>
        </li>

        <li class="nav-item">
          <a class="nav-link text-white" href="./eventos.html">Eventos</a>
        </li>

        <li class="nav-item">
          <a class="nav-link text-white" href="./sobrenosotros.html">Sobre Nosotros</a>
        </li>

      </ul>

    </div>
  </div>
</nav>`;

    document.querySelector('.container-menu').innerHTML = templateMenu
})();



(function () {
  let templateFooter = `
    <footer>
      <article class="footer-art position-relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
        >
          <path
            class="elementor-shape-fill"
            opacity="0.33"
            d="M473,67.3c-203.9,88.3-263.1-34-320.3,0C66,119.1,0,59.7,0,59.7V0h1000v59.7 c0,0-62.1,26.1-94.9,29.3c-32.8,3.3-62.8-12.3-75.8-22.1C806,49.6,745.3,8.7,694.9,4.7S492.4,59,473,67.3z"
          ></path>
          <path
            class="elementor-shape-fill"
            opacity="0.66"
            d="M734,67.3c-45.5,0-77.2-23.2-129.1-39.1c-28.6-8.7-150.3-10.1-254,39.1 s-91.7-34.4-149.2,0C115.7,118.3,0,39.8,0,39.8V0h1000v36.5c0,0-28.2-18.5-92.1-18.5C810.2,18.1,775.7,67.3,734,67.3z"
          ></path>
          <path
            class="elementor-shape-fill"
            d="M766.1,28.9c-200-57.5-266,65.5-395.1,19.5C242,1.8,242,5.4,184.8,20.6C128,35.8,132.3,44.9,89.9,52.5C28.6,63.7,0,0,0,0 h1000c0,0-9.9,40.9-83.6,48.1S829.6,47,766.1,28.9z"
          ></path>
        </svg>



        <ul class="list-unstyled d-flex container-fluid justify-content-center position-absolute bottom-1">
          <li class="me-3">
            <a href="https://www.instagram.com/zbailarinas/" target="_blank">
              <svg
                fill="#000000"
                width="35px"
                height="35px"
                viewBox="0 0 30 30"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.445 5h-8.891A6.559 6.559 0 0 0 5 11.554v8.891A6.559 6.559 0 0 0 11.554 27h8.891a6.56 6.56 0 0 0 6.554-6.555v-8.891A6.557 6.557 0 0 0 20.445 5zm4.342 15.445a4.343 4.343 0 0 1-4.342 4.342h-8.891a4.341 4.341 0 0 1-4.341-4.342v-8.891a4.34 4.34 0 0 1 4.341-4.341h8.891a4.342 4.342 0 0 1 4.341 4.341l.001 8.891z"
                />
                <path
                  d="M16 10.312c-3.138 0-5.688 2.551-5.688 5.688s2.551 5.688 5.688 5.688 5.688-2.551 5.688-5.688-2.55-5.688-5.688-5.688zm0 9.163a3.475 3.475 0 1 1-.001-6.95 3.475 3.475 0 0 1 .001 6.95zM21.7 8.991a1.363 1.363 0 1 1-1.364 1.364c0-.752.51-1.364 1.364-1.364z"
                />
              </svg>
            </a>
          </li>

          <li class="me-3">
            <a href="https://www.instagram.com/zbailarinas/" target="_blank">
              <svg
                width="30px"
                height="30px"
                viewBox="0 0 48 48"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <title>Whatsapp-color</title>
                <desc>Created with Sketch.</desc>
                <defs></defs>
                <g
                  id="Icons"
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                >
                  <g
                    id="Color-"
                    transform="translate(-700.000000, -360.000000)"
                    fill="#000000"
                  >
                    <path
                      d="M723.993033,360 C710.762252,360 700,370.765287 700,383.999801 C700,389.248451 701.692661,394.116025 704.570026,398.066947 L701.579605,406.983798 L710.804449,404.035539 C714.598605,406.546975 719.126434,408 724.006967,408 C737.237748,408 748,397.234315 748,384.000199 C748,370.765685 737.237748,360.000398 724.006967,360.000398 L723.993033,360.000398 L723.993033,360 Z M717.29285,372.190836 C716.827488,371.07628 716.474784,371.034071 715.769774,371.005401 C715.529728,370.991464 715.262214,370.977527 714.96564,370.977527 C714.04845,370.977527 713.089462,371.245514 712.511043,371.838033 C711.806033,372.557577 710.056843,374.23638 710.056843,377.679202 C710.056843,381.122023 712.567571,384.451756 712.905944,384.917648 C713.258648,385.382743 717.800808,392.55031 724.853297,395.471492 C730.368379,397.757149 732.00491,397.545307 733.260074,397.27732 C735.093658,396.882308 737.393002,395.527239 737.971421,393.891043 C738.54984,392.25405 738.54984,390.857171 738.380255,390.560912 C738.211068,390.264652 737.745308,390.095816 737.040298,389.742615 C736.335288,389.389811 732.90737,387.696673 732.25849,387.470894 C731.623543,387.231179 731.017259,387.315995 730.537963,387.99333 C729.860819,388.938653 729.198006,389.89831 728.661785,390.476494 C728.238619,390.928051 727.547144,390.984595 726.969123,390.744481 C726.193254,390.420348 724.021298,389.657798 721.340985,387.273388 C719.267356,385.42535 717.856938,383.125756 717.448104,382.434484 C717.038871,381.729275 717.405907,381.319529 717.729948,380.938852 C718.082653,380.501232 718.421026,380.191036 718.77373,379.781688 C719.126434,379.372738 719.323884,379.160897 719.549599,378.681068 C719.789645,378.215575 719.62006,377.735746 719.450874,377.382942 C719.281687,377.030139 717.871269,373.587317 717.29285,372.190836 Z"
                      id="Whatsapp"
                    ></path>
                  </g>
                </g>
              </svg>
            </a>
          </li>

          <li class="me-3">
            <a href="" target="_blank">
              <svg
                height="30px"
                width="30px"
                version="1.1"
                id="_x32_"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 512 512"
                xml:space="preserve"
              >
                <style type="text/css">
                  .st0 {
                    fill: #000000;
                  }
                </style>
                <g>
                  <path
                    class="st0"
                    d="M66.734,401.582c-5.902,0-11.421-1.551-16.135-4.277l139.049-121.182l12.979,11.294
		c10.863,9.44,24.46,14.22,37.93,14.22c13.536,0,27.133-4.78,37.996-14.22l12.973-11.294l47.074,41.038
		c5.324-8.971,11.939-17.054,19.613-24.038l-43.093-37.547L446.977,140.54v127.084c12.26,2.236,23.756,6.62,34.136,12.75V124.834
		c0-4.404-0.43-8.762-1.236-12.979c-2.175-10.925-7.016-20.922-13.778-29.181c-1.43-1.8-2.921-3.411-4.54-5.022
		c-11.978-12.046-28.804-19.56-47.182-19.56H66.734c-18.377,0-35.136,7.514-47.182,19.56c-1.612,1.611-3.102,3.222-4.532,5.022
		c-6.768,8.259-11.609,18.256-13.717,29.181C0.43,116.072,0,120.43,0,124.834v244.162c0,9.367,1.987,18.371,5.526,26.502
		c3.283,7.762,8.131,14.785,14.026,20.673c1.491,1.491,2.981,2.86,4.593,4.224c11.549,9.561,26.454,15.336,42.589,15.336h280.481
		c-8.118-10.032-14.436-21.567-18.412-34.15H66.734z M43.697,101.797c5.962-5.956,13.973-9.561,23.037-9.561h347.645
		c9.065,0,17.142,3.606,23.037,9.561c1.047,1.061,2.042,2.243,2.921,3.418L258.128,264.017c-5.029,4.405-11.24,6.581-17.571,6.581
		c-6.271,0-12.476-2.176-17.572-6.581L40.85,105.148C41.656,103.973,42.65,102.858,43.697,101.797z M34.136,368.997V140.479
		L166,255.51L34.203,370.42C34.136,369.984,34.136,369.494,34.136,368.997z"
                  />
                  <path
                    class="st0"
                    d="M428.285,286.484c-46.235,0-83.702,37.48-83.702,83.715c0,46.228,37.467,83.708,83.702,83.708
		c46.242,0,83.715-37.48,83.715-83.708C512,323.963,474.527,286.484,428.285,286.484z M441.23,410.236h-20.331v-56.421h-0.242
		l-14.744,6.963l-3.076-17.82l20.654-9.441h17.74V410.236z"
                  />
                </g>
              </svg>
            </a>
          </li>
        </ul>

        <p
          class="text-center text-white position-absolute bottom-0 container-fluid"
        >
          © Academia Zapatillas Bailarinas 2025
          <br />
          Todos los derechos reservados.
        </p>
      </article>
    </footer>
  `
    document.querySelector('.container-footer').innerHTML = templateFooter
})()


if (document.querySelector('.swiper-container')) {
    var swiper = new Swiper(".swiper-container", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        loop: true,
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }
  });

  const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          swiper.autoplay.start();
        } else {
          swiper.autoplay.stop();
        }
      }, { threshold: 0.1 });
      observer.observe(document.querySelector('.swiper-container'));
}


const imgBackObserve = document.querySelectorAll('.back_ho');

const opciones = {
  threshold: 0.4 // Se activa cuando el 50% del elemento es visible
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1
    } else {
      entry.target.style.opacity = 0
    }
  });
}, opciones);

window.addEventListener('resize', function () {
  if (window.innerWidth < 769) {
    imgBackObserve.forEach(el => observer.observe(el));
  }
})

if (window.innerWidth < 769) {
    imgBackObserve.forEach(el => observer.observe(el));
}