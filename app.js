const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img: "https://www.course-api.com/images/people/person-1.jpeg",
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img: "https://www.course-api.com/images/people/person-2.jpeg",
    text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img: "https://www.course-api.com/images/people/person-4.jpeg",
    text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img: "https://www.course-api.com/images/people/person-3.jpeg",
    text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
  {
    id: 5,
    name: "John Doe",
    job: "Software Engineer",
    img: "https://randomuser.me/api/portraits/men/1.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquam aliquet metus, ut molestie metus bibendum sit amet. Mauris volutpat nisl a nibh consectetur, vitae bibendum magna volutpat.",
  },
  {
    id: 6,
    name: "Matthew Jones",
    job: "Full Stack Developer",
    img: "https://randomuser.me/api/portraits/men/3.jpg",
    text: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam fringilla nisi a arcu suscipit, vitae feugiat dui sollicitudin.",
  },
  {
    id: 7,
    name: "Olivia Martinez",
    job: "Product Manager",
    img: "https://randomuser.me/api/portraits/women/4.jpg",
    text: "Donec tempor purus vitae metus fermentum, quis eleifend est dignissim. Nam ac sagittis mi. Nullam sit amet luctus odio. Fusce convallis risus at varius sodales.",
  },
  {
    id: 8,
    name: "William Johnson",
    job: "UI Designer",
    img: "https://randomuser.me/api/portraits/men/4.jpg",
    text: "Vivamus sit amet lorem ac justo fermentum placerat. Morbi dapibus quam eget ligula laoreet fringilla. Nam dignissim tortor at accumsan ultricies. Fusce tempus odio nec efficitur.",
  },
  {
    id: 9,
    name: "Ava Davis",
    job: "Content Writer",
    img: "https://randomuser.me/api/portraits/women/5.jpg",
    text: "Nam vitae sem euismod, bibendum metus vitae, auctor metus. Vestibulum ut quam sapien. Nulla facilisi. In hac habitasse platea dictumst. Proin nec sodales lorem.",
  },
  {
    id: 10,
    name: "Ethan Taylor",
    job: "Systems Analyst",
    img: "https://randomuser.me/api/portraits/men/5.jpg",
    text: "Duis eget mi sodales, dignissim odio vel, rhoncus est. Nullam in massa id dui finibus efficitur. Sed imperdiet turpis vel ligula eleifend ultricies.",
  },
  {
    id: 11,
    name: "Mia Anderson",
    job: "Marketing Specialist",
    img: "https://randomuser.me/api/portraits/women/6.jpg",
    text: "Quisque et lectus vel orci ullamcorper faucibus. Nulla sagittis efficitur libero, at bibendum lorem lacinia non. Nam efficitur est eget justo vehicula fermentum.",
  },
  {
    id: 12,
    name: "Liam Wilson",
    job: "Frontend Developer",
    img: "https://randomuser.me/api/portraits/men/6.jpg",
    text: "Phasellus id mi eget metus pharetra lacinia. Aliquam efficitur tristique quam, vel efficitur purus blandit in. Ut volutpat tortor quis lacus ullamcorper, sit amet viverra orci maximus.",
  },
  {
    id: 13,
    name: "Isabella Thompson",
    job: "UI/UX Designer",
    img: "https://randomuser.me/api/portraits/women/7.jpg",
    text: "Suspendisse nec purus nec mi rutrum gravida. Sed ac consequat sem, nec vulputate odio. Donec sit amet risus quis lectus scelerisque faucibus at ut libero.",
  },
  {
    id: 14,
    name: "James Brown",
    job: "Back-end Developer",
    img: "https://randomuser.me/api/portraits/men/7.jpg",
    text: "Integer tincidunt nulla a massa tincidunt, ut pharetra velit malesuada. Fusce euismod leo sed justo interdum, sed tincidunt urna dapibus. Cras auctor auctor magna.",
  },
  {
    id: 15,
    name: "Charlotte Harris",
    job: "Project Manager",
    img: "https://randomuser.me/api/portraits/women/8.jpg",
    text: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam ac tempor nisl. Nullam vel elit sed metus fringilla lobortis.",
  },
];

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

let currentItem = 0;

window.addEventListener("DOMContentLoaded", function () {
  showPerson();
});

function showPerson() {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson();
});

prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson();
});

randomBtn.addEventListener("click", function () {
  currentItem = Math.floor(Math.random() * reviews.length);
  console.log(currentItem);
  showPerson();
});
