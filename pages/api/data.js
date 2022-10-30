// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    data: {
      right: {
        profileGreetings: {
          hy: "Ողջույն ես",
          en: "Hi there! i am",
        },
        profileTyped:{
          hy:[
              "Նարեկ Գրիգորյանն եմ և" ,
              "Front-End ծրագրավորող եմ",
          ],
          en:[
            "Narek Grigoryan and" ,
            "Front-End developer",
          ]
        }
      },
      left:{
        home:{
          heading:{
            hy:"Ներածություն",
            en:"Introduction"
          },
          title:"Front-End Developer",
          paragraph:{
            en:["My name is Narek, I'm 21, I'm a front-end developer and this is my first official portfolio to create this page  I used"," TailwindCSS, ", "Next.js, ", "Sass ","and etc. I'm glad to see you on my page, and I'm sure you'll like it below you will see my works. "],
            hy:["Ես Նարեկն եմ, ես 21 տարեկան եմ, ես front-end ծրագրավորող եմ և սա իմ առաջին պաշտոնական պորտֆոլիոն է այս էջը ստեղծելու համար,ես օգտագործել եմ"," TailwindCSS, ", "Next.js, ", "Sass " ,"և այլն: Ուրախ եմ ձեզ տեսնել իմ էջում, և վստահ եմ, որ այն ձեզ դուր կգա ստորև դուք կտեսնեք իմ աշխատանքներից։"]
          }
        }
      }
    },
  });
}
