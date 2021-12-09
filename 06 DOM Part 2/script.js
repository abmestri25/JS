const courses = [
  {
    name: "Complete ReactJs Course",
    price: 2.5,
  },
  {
    name: "Complete Django Course",
    price: 2.1,
  },
  {
    name: "Complete Python Course",
    price: 2.7,
  },
  {
    name: "Complete Bootstrap Course",
    price: 2.3,
  },
];

const generateList = () => {
  const ul = document.querySelector(".list-group");
  ul.innerHTML = "";
  courses.forEach((course) => {
    const li = document.createElement("li");
    li.classList.add("list-group-item");

    const name = document.createTextNode(course.name);
    li.append(name);

    const span = document.createElement("span");
    span.classList.add("float-right");

    const price = document.createTextNode("$" + course.price);
    span.appendChild(price);

    li.appendChild(span);
    ul.appendChild(li);
  });
};

// generateList()

window.addEventListener("load", generateList);

const lowToHigh = document.querySelector(".lth-btn");

lowToHigh.addEventListener("click", () => {
  courses.sort((a, b) => a.price - b.price);
  generateList();
});

const highToLow = document.querySelector(".htl-btn");

highToLow.addEventListener("click", () => {
  courses.sort((a, b) => b.price - a.price);
  generateList();
});
