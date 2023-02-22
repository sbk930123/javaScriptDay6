const stars = document.querySelectorAll(".stars i");

stars.forEach((star, index1) => {
  star.addEventListener("click", () => {
    stars.forEach((star, index2) => {
      // if문으로 변경
      if(index1 >= index2) {
        star.classList.add("active");
      } else {
        star.classList.remove("active");
      }
      // index1 >= index2 ? star.classList.add("active") : star.classList.remove("active");
      console.log(index1, index2);
    });
  });
});