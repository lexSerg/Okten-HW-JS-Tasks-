// Треба реалізувати свій розпорядок дня.
// Колбеками, промісами та асинк авейт.
// В дні має бути від 7 до 10 подій. Всі події мають мати описані успішні та не успішні варіанти виконання.
// Має бути так
// 1) прокинувся
// 2) Поснідав
// 3) почистав зуби
// і т.д.
// Якщо щось пішло не так (нема шо їсти), то має бути викинута помилка і решта функцій виконуватись не мають.
// Якщо ж все ок, то ви маєте прожити свій звичайний день.
// Кожна подія має бути з рандомною (не по зростанню) затримкою.
// І їх всіх реалізувати трьома спомобами.
// Колбек. Проміс. Асинк
// console.log("========Start my Day=========");
// (startMyDayOnCallBack = () => {
//   setTimeout(() => {
//     const rand = [];
//     for (let i = 1; i < 9; i++) {
//       rand.push(Math.floor(Math.random() * 5 + 1) * 1000);
//     }
//     function goodMorning(isGood, cb) {
//       setTimeout(() => {
//         if (isGood) cb(false, "Доброе утро. ");
//         else cb(true, false);
//       }, rand[0]);
//     }
//     function cleenTeeth(isOrdinaryMorning, cb) {
//       setTimeout(() => {
//         if (isOrdinaryMorning) cb(false, "Чистим зубы.");
//         else cb(true, false);
//       }, rand[1]);
//     }
//     function haveBreakfast(isTeethClean, cb) {
//       setTimeout(() => {
//         if (isTeethClean) cb(false, "Позавтракал");
//         else cb(true, false);
//       }, rand[2]);
//     }
//     function goToWork(isBreakfastHad, cb) {
//       setTimeout(() => {
//         if (isBreakfastHad) cb(false, "Пришел на работу");
//         else cb(true, false);
//       }, rand[3]);
//     }
//     function drinkCofee(isAtWork, cb) {
//       setTimeout(() => {
//         if (isAtWork) cb(false, "Пьем кофе с вафелькой");
//         else cb(true, false);
//       }, rand[4]);
//     }
//     function runWithDog(isWakeUp, cb) {
//       setTimeout(() => {
//         if (isWakeUp) cb(false, "Побежали");
//         else cb(true, false);
//       }, rand[5]);
//     }
//     function goToTraining(isRan, cb) {
//       setTimeout(() => {
//         if (isRan) cb(false, "Качнем бицуху");
//         else cb(true, false);
//       }, rand[6]);
//     }
//     function worksForAPlan(isTrainingDone, cb) {
//       setTimeout(() => {
//         if (isTrainingDone) cb(false, "По распорядку");
//         else cb(true, false);
//       }, rand[7]);
//     }

//     goodMorning(true, (err, morningData) => {
//       if (err)
//         console.log(
//           "Утро не совсем доброе, тебя разбудил звонок шефа. Время 10:00. Ты сразу взбодрился, и готов к взбучке"
//         );
//       else {
//         console.log(morningData + "Ты проснулся бодрый и отдохнувший)");
//         cleenTeeth(morningData, (err, isTeethClean) => {
//           if (err)
//             console.log(
//               "Закончилась зубная паста. На работу с грязными зубами не пойду"
//             );
//           else {
//             console.log(isTeethClean + " Зубы блестят, дыхание свежее");
//             haveBreakfast(isTeethClean, (err, isBreakfastHad) => {
//               if (err)
//                 console.log("Закончились куриные яйца, нужно идти в магазин");
//               else {
//                 console.log(
//                   "Завтрак был вкусный и питательный, можно идти на работу"
//                 );
//                 goToWork(isBreakfastHad, (err, isInTime) => {
//                   if (err)
//                     console.log("Маршрутка сломалась, на работу не успею");
//                   else {
//                     console.log("На работу добрался во время");
//                     drinkCofee(isInTime, (err, isWakeUp) => {
//                       if (err)
//                         console.log(
//                           "Закончилось кофе, работы сегодня не будет"
//                         );
//                       else
//                         console.log(
//                           "Теперь я точно проснулся, можно приступать к работе"
//                         );
//                       runWithDog(isWakeUp, (err, isRan) => {
//                         if (err)
//                           console.log(
//                             "На улице дождь, пробежки сегодня не будет"
//                           );
//                         else {
//                           console.log("Пробежали 10км, пес выгулялся с полна");
//                           goToTraining(isRan, (err, isTrainingDone) => {
//                             if (err) console.log("Сегодня в зал не пойду");
//                             else {
//                               console.log("Тренировка прошла супер!");
//                               worksForAPlan(isTrainingDone, (err) => {
//                                 if (err)
//                                   console.log("Что то работать нет настроения");
//                                 else
//                                   console.log("Дальше работаем по распорядку");
//                                 console.log("========End my Day=======");
//                               });
//                             }
//                           });
//                         }
//                       });
//                     });
//                   }
//                 });
//               }
//             });
//           }
//         });
//       }
//     });
//   });
// })();

console.log("========Start my Day=========");
(myDayOnPromises = () => {
  setTimeout(() => {
    const rand = [];
    for (let i = 1; i < 9; i++) {
      rand.push(Math.floor(Math.random() * 5 + 1) * 1000);
    };
    function goodMorning(isGood) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (isGood) resolve("Доброе утро. ");
          else
            reject(
              "Утро не совсем доброе, тебя разбудил звонок шефа. Время 10:00. Ты сразу взбодрился, и готов к взбучке"
            );
        }, rand[0]);
      });
    }
    function cleenTeeth(isOrdinaryMorning) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (isOrdinaryMorning) resolve("Чистим зубы.");
          else
            reject(
              "Закончилась зубная паста. На работу с грязными зубами не пойду"
            );
        }, rand[1]);
      });
    }
    function haveBreakfast(isTeethClean) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (isTeethClean) resolve("Позавтракал.");
          else reject("Закончились куриные яйца, нужно идти в магазин");
        }, rand[2]);
      });
    }
    function goToWork(isBreakfastHad) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (isBreakfastHad) resolve("Пришел на работу");
          else reject("Маршрутка сломалась, на работу не успел");
        }, rand[3]);
      });
    }
    function drinkCofee(isAtWork) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (isAtWork) resolve("Пьем кофе с вафелькой");
          else reject("Закончилось кофе, работы сегодня не будет");
        }, rand[4]);
      });
    }
    function runWithDog(isWakeUp) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (isWakeUp) resolve("Побежали");
          else reject("На улице дождь, пробежки сегодня не будет");
        }, rand[5]);
      });
    }
    function goToTraining(isRan) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (isRan) resolve("Качнем бицуху");
          else reject("Сегодня в зал не пойду");
        }, rand[6]);
      });
    }
    function worksForAPlan(isTrainingDone) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (isTrainingDone) resolve("По распорядку");
          else reject("Что то работать нет настроения");
        }, rand[7]);
      });
    }
    
    goodMorning(true)
      .then((value) => {
        console.log(value + "Ты проснулся бодрый и отдохнувший)");
        return cleenTeeth(value);
      })
      .then((value) => {
        console.log(value + " Зубы блестят, дыхание свежее");
        return haveBreakfast(value);
      })
      .then((value) => {
        console.log(
          value + " Завтрак был вкусный и питательный, можно идти на работу"
        );
        return goToWork(value);
      })
      .then((value) => {
        console.log(value + "." + " На работу добрался во время");
        return drinkCofee(value);
      })
      .then((value) => {
        console.log(
          value + "." + " Теперь я точно проснулся, можно приступать к работе"
        );
        return runWithDog(value);
      })
      .then((value) => {
        console.log(value + "." + " Пробежали 10км, пес выгулялся сполна");
        return goToTraining(value);
      })
      .then((value) => {
        console.log(value + "." + " Тренировка прошла супер!");
        return worksForAPlan(value);
      })
      .then((value) => {
        console.log(value + "." + " Дальше работаем по распорядку");
        console.log("========End me day=========");
      })
      .catch((reason) => {
        console.log(reason);
      });
  }, 0)
})();


