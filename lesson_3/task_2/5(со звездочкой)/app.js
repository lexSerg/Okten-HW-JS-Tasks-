/*  *** за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі users. За допомогою document.createElement вивести їх в браузер. Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт в свій блок (блок в блоці).

*** за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі posts. За допомогою document.createElement вивести їх в браузер. Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт(якщо він існує) в свій блок (блок в блоці).

*** за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі comments. За допомогою document.createElement вивести їх в браузер. Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт(якщо він існує) в свій блок (блок в блоці).*/

// Работает аналогично как для users так и для posts и comments.
// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((values) => values.json())
//   .then((values) => {
//     console.log(values);
//     let container = document.createElement("div");
//     container.classList.add("container");
//     document.body.insertAdjacentElement("afterbegin", container);
//     for (const obj of values) {
//       let div = document.createElement("div");
//       div.classList.add("itemObj");
//       div.style.backgroundColor = "gray";
//       div.style.marginBottom = "5px";
//       div.style.textAlign = "center";
//       container.appendChild(div);
//       for (const iter in obj) {
//         if (typeof obj[iter] === "object") {
//           let divInner = document.createElement("div");
//           divInner.classList.add("inner_div");
//           divInner.style.backgroundColor = "green";
//           div.appendChild(divInner);
//           for (const key in obj[iter]) {
//             if (typeof obj[iter][key] === "object") {
//               let divInnerObj = document.createElement("div");
//               divInnerObj.classList.add("inner_div_obj");
//               divInner.appendChild(divInnerObj);
//               for (const keyObj in obj[iter][key]) {
//                 let pInnerObj = document.createElement("pPost");
//                 pInnerObj.innerText = obj[iter][key][keyObj];
//                 divInnerObj.appendChild(pInnerObj);
//               }
//             } else {
//               let pInner = document.createElement("pPost");
//               pInner.innerText = obj[iter][key];
//               divInner.appendChild(pInner);
//             }
//           }
//         } else {
//           let pPost = document.createElement("pPost");
//           pPost.innerText = obj[iter];
//           div.appendChild(pPost);
//         }
//       }
//     }
//   });

/******* при помощи fetch (как в примере) получить от jsonplaceholder все posts. Внутри последнего then() сделать еще один fetch который сделает запрос и получит все comments. Объеденить соответсвующий post с соответсвующими comment и вывести в браузер. Подсказка : в каждом comment есть поле postId которое определяет какой комментарий принадлежит какому посту  */

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((values) => values.json())
  .then((valuesPosts) => {
    console.log(valuesPosts);
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((values) => values.json())
      .then((valuesComments) => {
        console.log(valuesComments);
        let container = document.createElement("div");
        container.classList.add("container");
        document.body.insertAdjacentElement("afterbegin", container);
        for (const posts of valuesPosts) {
          let div = document.createElement("div");
          div.classList.add("post");
          div.style.backgroundColor = "silver";
          div.style.marginBottom = "20px";
          div.style.textAlign = "center";
          container.appendChild(div);
          for (const iterPost in posts) {
            let pPost = document.createElement("Post");
            pPost.innerText = posts[iterPost];
            div.appendChild(pPost);
          }
          for (const comments of valuesComments) {
            if (posts["id"] === comments["postId"]) {
              let comment = document.createElement("div");
              comment.classList.add("comment");
              comment.style.backgroundColor = "green";
              comment.style.marginBottom = "5px";

              div.appendChild(comment);
              for (const iterComment in comments) {
                let pComment = document.createElement("div");
                pComment.innerText = comments[iterComment];
                comment.appendChild(pComment);
              }
            }
          }
        }
      });
  });
