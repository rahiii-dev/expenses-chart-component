const mon_Yel = document.querySelector(".mon .y-value");
const tue_Yel = document.querySelector(".tue .y-value");
const wed_Yel = document.querySelector(".wed .y-value");
const thu_Yel = document.querySelector(".thu .y-value");
const fri_Yel = document.querySelector(".fri .y-value");
const sat_Yel = document.querySelector(".sat .y-value");
const sun_Yel = document.querySelector(".sun .y-value");

fetch("./data.json")
  .then((res) => res.json())
  .then((data) => {
    let d = data.reduce(
      (prev, curnt) => (curnt.amount > prev.amount ? curnt : prev),
      data[0]
    );
    let largest_day = document.querySelector(`.${d.day}`);
    largest_day.classList.add("largest");

    let mon_amount = data[0].amount;
    let tue_amount = data[1].amount;
    let wed_amount = data[2].amount;
    let thu_amount = data[3].amount;
    let fri_amount = data[4].amount;
    let sat_amount = data[5].amount;
    let sun_amount = data[6].amount;

    mon_Yel.innerHTML = mon_amount;
    tue_Yel.innerHTML = tue_amount;
    wed_Yel.innerHTML = wed_amount;
    thu_Yel.innerHTML = thu_amount;
    fri_Yel.innerHTML = fri_amount;
    sat_Yel.innerHTML = sat_amount;
    sun_Yel.innerHTML = sun_amount;

    const height = 150;
    let largest_amount = d.amount;

    function findHeight(element) {
      let percentage = (element * 100) / largest_amount;
      return Math.round((percentage / 100) * height);
    }

    let mon_BH = findHeight(mon_amount);
    let tue_BH = findHeight(tue_amount);
    let wed_BH = findHeight(wed_amount);
    let thu_BH = findHeight(thu_amount);
    let fri_BH = findHeight(fri_amount);
    let sat_BH = findHeight(sat_amount);
    let sun_BH = findHeight(sun_amount);

    let mon_Bar = document.querySelector(".mon");
    let tue_Bar = document.querySelector(".tue");
    let wed_Bar = document.querySelector(".wed");
    let thu_Bar = document.querySelector(".thu");
    let fri_Bar = document.querySelector(".fri");
    let sat_Bar = document.querySelector(".sat");
    let sun_Bar = document.querySelector(".sun");

    function animation(day_Bar, day_BH) {
      day_Bar.animate(
        [
          {
            height: "10px",
          },
          {
            height: `${day_BH}px`,
          },
        ],
        {
          duration: 1300,
          iterations: 1,
        }
      );

      day_Bar.style.height = `${day_BH}px`;
    }

    animation(mon_Bar, mon_BH);
    animation(tue_Bar, tue_BH);
    animation(wed_Bar, wed_BH);
    animation(thu_Bar, thu_BH);
    animation(fri_Bar, fri_BH);
    animation(sat_Bar, sat_BH);
    animation(sun_Bar, sun_BH);
  });
