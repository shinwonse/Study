const wait = (ms) => {
  const start = Date.now();
  let now = start;
  while (now - start < ms) {
    now = Date.now();
  }
}

async function getDivisors(n, ms) {
  const divisorsList = [];
  for (let i = 1; i < n ** (1 / 2) + 1; i ++) {
    if (n % i === 0) {
      divisorsList.push(i)
      if ((i ** 2) !== n) {
        divisorsList.push(n / i)
      }
    }
  }
  const answerList = await new Set(divisorsList);
  return [...answerList].length;
  // return new Promise((resolve, reject) => {
  //   const divisorsList = [];
  //   for (let i = 1; i < n ** (1 / 2) + 1; i ++) {
  //     if (n % i === 0) {
  //       divisorsList.push(i)
  //       if ((i ** 2) !== n) {
  //         divisorsList.push(n / i)
  //       }
  //     }
  //   }
  //   const answerList = new Set(divisorsList);
  //   await
  //   // setTimeout(() => resolve([...answerList].length), ms);
  // })
}

const resolveAfter3Seconds = new Promise((res) => {
  setTimeout(() => res(), 3000);
})

console.time('Performance')
getDivisors(1000000000, 3000)
  .then((res) => console.log(res))
  .then(() => console.timeEnd('Performance'))
