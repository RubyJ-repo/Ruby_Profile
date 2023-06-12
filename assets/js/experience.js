AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Risk Control Analyst",
    cardImage: "assets/images/experience-page/hx.png",
    place: "ShenZhen QianHai HongXi Intelligent Co., Ltd",
    time: "(June/2020 – Jan/2021)",
    desp: "<li>Delivered the initial framework design and architecture discussion of Intelligence Decision Making Engine, investigate the functions of competing products and complete the first-phase prototype design.</li> <li>With the advisement of senior algorithm engineers, rewrite the SAS algorithm script in Python and embed it in the flask framework.</li> <li>Connect with front-end engineers and write interface documents, debugging the code together with front-end engineers.</li><li>Deploy the first phase of the project to TCL financial Co., complete the credit report analysis tool, and complete the deployment of Redis Tomcat and Mangodb environments, and connect offline to solve problems in real time.</li>",
  },
  {
    title: "Backend (JAVA) Developer",
    cardImage: "assets/images/experience-page/greatsoft.png",
    place: "Peking Guan-xin Pharmaceutical Software Co.,",
    time: "(Mar, 2017 - Aug, 2019)",
    desp: "<li>Delivered in the initial architecture design, framework and technology selection discussions of basic services, and sorting processes, then complete the prototype design after synthesizing the opinions of various departments.</li><li>Employee authority classification, logic implementation, assisting operation and maintenance personnel to complete double verification of password and physical mac address. </li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "Python",
    cardImage: "assets/images/experience-page/py.png",
    description:
      "Skill Level: *****",
  },
  {
    title: "Java",
    cardImage: "assets/images/experience-page/java.png",
    description:
      "Skill Level: *****",
  },
  {
    title: "SQL",
    cardImage: "assets/images/experience-page/sql.png",
    description:
      "Skill Level: ****-",
  },
  {
    title: "C#",
    cardImage: "assets/images/experience-page/Csp.png",
    description:
      "Skill Level: ***--",
  },
  {
    title: "R",
    cardImage: "assets/images/experience-page/R.png",
    description:
      "Skill Level: **---",
  },
  {
    title: "SAS",
    cardImage: "assets/images/experience-page/sas.png",
    description:
      "Skill Level: **---",
  },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

// Hackathon Section

const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
  {
    title: "QianHai HongXi Intelligent",
    subtitle: "Risk Control Department",
    image: "assets/images/experience-page/hx.png",
    desp: "Enable AI to solve the triangular problem of interest rates, risks, and imbalances in bank loans for small and micro enterprises. Utilize edge computing, deep learning, machine learning, NLP, OCR, biometric identification, and open banking system technologies to address challenges in data security and privacy protection, accurate customer acquisition, KYC, risk control, efficient and cost-effective operations, post-loan management, and customer experience in small and micro enterprise credit.",
    href: "https://baike.baidu.com/item/%E6%B7%B1%E5%9C%B3%E5%89%8D%E6%B5%B7%E5%BC%98%E7%8A%80%E6%99%BA%E8%83%BD%E7%A7%91%E6%8A%80%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8/51883915",
  },
  {
    title: "Peking Guan-xin Pharmaceutical Software Co.,",
    subtitle: "Develop Department",
    image: "assets/images/experience-page/greatsoft.png",
    desp: "Provide comprehensive system integration solutions for users in the healthcare industry. With the growing development of the Internet, the company also strives to expand its information consulting and information services in the healthcare industry. By establishing a Big Healthcare Information Platform, committed to helping users achieve digital hospitals and online office operations.",
    href: "http://www.greatsoft.net/",
  },
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp, href }) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href="${href}" class="blog-slider__button">Read More</a>   
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
