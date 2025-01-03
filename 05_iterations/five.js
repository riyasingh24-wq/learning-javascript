const coding = ["js", "ruby", "cpp", "python", "java"]

// coding.forEach(function(val){
//       console.log(val);
// })

// coding.forEach((item) => {
//       console.log(item);
// } )

// function printMe(item){
//       console.log(item);
// }
// coding.forEach(printMe)

// coding.forEach((item, index, arr) => {
//       console.log(item, index, arr);
// })

const myCoding = [
      {
            LanguageName: "Javascript",
            LangaugeFile: "js"
      },
      {
            LanguageName: "Ruby",
            LangaugeFile: "rb"
      },
      {
            LanguageName: "Python",
            LangaugeFile: "py"
      }
]

myCoding.forEach((item) => {
      console.log(item.LangaugeFile);
})