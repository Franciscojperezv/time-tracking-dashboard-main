function shdaily() {
  const frecuency = ["daily", "weekly", "monthly",];
  const colors = ["white", "hsl(236, 100%, 87%)", "hsl(236, 100%, 87%)"];

  for (let index = 0; index < frecuency.length; index++) {
    document.getElementById(`${frecuency[index]}`).style.color = `${colors[index]}`;
    console.log()
  }

  const ids = ["workh", "workp", "playh", "playp", "studyh", "studyp", "excerciseh", "excercisep", "socialh", "socialp", "selfh", "selfp"];
  const texts = ["5hrs", "Yesterday - 7hrs", "1hr", "Yesterday - 2hrs", "0hrs", "Yesterday - 1h", "1hr", "Yesterday - 1h", "1hr", "Yesterday - 3hrs", "0hrs", "Yesterday - 1hrs"];

    for (let index = 0; index < texts.length; index++){
      document.getElementById(`${ids[index]}`).innerText = `${texts[index]}`;
      console.log()
    }
}

function shweekly() {
  const frecuency = ["daily", "weekly", "monthly",];
  const colors = ["hsl(236, 100%, 87%)", "white", "hsl(236, 100%, 87%)"];

  for(let index = 0; index < frecuency.length; index++){
    document.getElementById(`${frecuency[index]}`).style.color = `${colors[index]}`;
  }

  const ids = ["workh", "workp", "playh", "playp", "studyh", "studyp", "excerciseh", "excercisep", "socialh", "socialp", "selfh", "selfp"];
  const texts = ["32hrs", "Last week - 36hrs", "10hrs", "Last week - 8hrs", "4hrs", "Last week - 7hrs", "4hrs", "Last week - 5hrs", "5hrs", "Last week - 10hrs", "2hrs", "Last week - 2hrs"]

  for(index = 0; index < ids.length; index++){
    document.getElementById(`${ids[index]}`).innerText = `${texts[index]}`;
  }
}
function shmonthly() {
  const frecuency = ["daily", "weekly", "monthly"];
  const colors = ["hsl(236, 100%, 87%)", "hsl(236, 100%, 87%)", "white"];

  for(index = 0; index < frecuency.length; index++){
    document.getElementById(`${frecuency[index]}`).style.color =`${colors[index]}`;
  }

  const ids = ["workh", "workp", "playh", "playp", "studyh", "studyp", "excerciseh", "excercisep", "socialh", "socialp", "selfh", "selfp"];
  const texts = ["103hrs", "Last month - 128hrs", "23hrs", "Last month - 29hrs", "13hrs", "Last month - 19hrs", "11hrs", "Last month - 18hrs", "21hrs", "Last month - 23hrs", "7hrs", "Last month - 11hrs"];

  for(index = 0; index < ids.length; index++){
    document.getElementById(`${ids[index]}`).innerText = `${texts[index]}`;
  }
}
/*
Work
 <!-- daily -->
Previous - 7hrs <!-- daily -->
32hrs <!-- weekly -->
Previous - 36hrs <!-- weekly -->
103hrs <!-- monthly -->
Previous - 128hrs <!-- monthly -->

Play
1hr <!-- daily -->
Previous - 2hrs <!-- daily -->
10hrs <!-- weekly -->
Previous - 8hrs <!-- weekly -->
23hrs <!-- monthly -->
Previous - 29hrs <!-- monthly -->

Study
  0hrs <!-- daily -->
  Previous - 1hr <!-- daily -->
  4hrs <!-- weekly -->
  Previous - 7hrs <!-- weekly -->
  13hrs <!-- monthly -->
  Previous - 19hrs <!-- monthly -->

  Exercise
  1hr <!-- daily -->
  Previous - 1hr <!-- daily -->
  4hrs <!-- weekly -->
  Previous - 5hrs <!-- weekly -->
  11hrs <!-- monthly -->
  Previous - 18hrs <!-- monthly -->

  Social
  1hr <!-- daily -->
  Previous - 3hrs <!-- daily -->
  5hrs <!-- weekly -->
  Previous - 10hrs <!-- weekly -->
  21hrs <!-- monthly -->
  Previous - 23hrs <!-- monthly -->

  Self Care
  0hrs <!-- daily -->
  Previous - 1hr <!-- daily -->
  2hrs <!-- weekly -->
  Previous - 2hrs <!-- weekly -->
  7hrs <!-- monthly -->
  Previous - 11hrs <!-- monthly -->
*/
