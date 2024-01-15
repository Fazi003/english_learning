const questions =[
    {
        question: "Mit jelent az alábbi angol szó?  [the]",
        answers: [
            {text: "a,az" , correct:true},
            {text: "egy" , correct:false},
            {text: "lenni" , correct:false},
            {text: "ő" , correct:false},
        ]
    },
    {
        question: "Mit jelent az alábbi angol szó?  [to be]",
        answers: [
            {text: "valakinek a valamije" , correct:false},
            {text: "menni" , correct:false},
            {text: "lenni" , correct:true},
            {text: "ba,be" , correct:false},
        ]
    },
    {
        question: "Mit jelent az alábbi angol szó?  [and]",
        answers: [
            {text: "ból,ből" , correct:false},
            {text: "én" , correct:false},
            {text: "birtokolni" , correct:false},
            {text: "és" , correct:true},
        ]
    },
    {
        question: "Mit jelent az alábbi angol szó?  [of]",
        answers: [
            {text: "azt" , correct:false},
            {text: "valakinek,valaminek a / -ból" , correct:true},
            {text: "folyamán" , correct:false},
            {text: "ki" , correct:false},
        ]
    },
    {
        question: "Mit jelent az alábbi angol szó?  [a]",
        answers: [
            {text: "a" , correct:false},
            {text: "egy" , correct:true},
            {text: "valami" , correct:false},
            {text: "valaki" , correct:false},
        ]
    },
    {
        question: "Mit jelent az alábbi angol szó?  [in]",
        answers: [
            {text: "az" , correct:false},
            {text: "valahol" , correct:false},
            {text: "bent" , correct:false},
            {text: "ba,be,ban,ben" , correct:true},
        ]
    },
    {
        question: "Mit jelent az alábbi angol szó?  [to]",
        answers: [
            {text: "hoz,hez,höz" , correct:true},
            {text: "valakinek,valaminek a / -ból" , correct:false},
            {text: "az" , correct:false},
            {text: "val,vel" , correct:false},
        ]
    },
    {
        question: "Mit jelent az alábbi angol szó?  [that]",
        answers: [
            {text: "az,amaz,aki,amit" , correct:true},
            {text: "ő,őt" , correct:false},
            {text: "val,vel" , correct:false},
            {text: "valami" , correct:false},
        ]
    },
    {
        question: "Mit jelent az alábbi angol szó?  [for]",
        answers: [
            {text: "kor" , correct:false},
            {text: "mondani" , correct:false},
            {text: "ért,részére,számára" , correct:true},
            {text: "tenni,csinálni" , correct:false},
        ]
    },
    {
        question: "Mit jelent az alábbi angol szó?  [with]",
        answers: [
            {text: "tenni" , correct:false},
            {text: "mondani" , correct:false},
            {text: "venni" , correct:false},
            {text: "val,vel" , correct:true},
        ]
    },
    {
        question: "Mit jelent az alábbi angol szó?  [on]",
        answers: [
            {text: "ők" , correct:false},
            {text: "csinálni" , correct:false},
            {text: "on,en,ön" , correct:true},
            {text: "ki" , correct:false},
        ]
    },
    {
        question: "Mit jelent az alábbi angol szó?  [to say]",
        answers: [
            {text: "mondani" , correct:true},
            {text: "okozni" , correct:false},
            {text: "folytatni" , correct:false},
            {text: "maradni" , correct:false},
        ]
    },
    {
        question: "Mit jelent az alábbi angol szó?  [at]",
        answers: [
            {text: "azonban" , correct:false},
            {text: "ból" , correct:false},
            {text: "kor,nál,nél" , correct:true},
            {text: "kint" , correct:false},
        ]
    },
    {
        question: "Mit jelent az alábbi angol szó?  [but]",
        answers: [
            {text: "vaj" , correct:false},
            {text: "de,azonban,kivéve" , correct:true},
            {text: "ból,ből" , correct:false},
            {text: "által" , correct:false},
        ]
    },
    {
        question: "Mit jelent az alábbi angol szó?  [by]",
        answers: [
            {text: "tőle" , correct:false},
            {text: "mint" , correct:false},
            {text: "készít" , correct:false},
            {text: "által,alapján" , correct:true},
        ]
    },
    {
        question: "Mit jelent az alábbi angol szó?  [or]",
        answers: [
            {text: "vagy" , correct:true},
            {text: "valami" , correct:false},
            {text: "valahogy" , correct:false},
            {text: "onnan" , correct:false},
        ]
    },
    {
        question: "Mit jelent az alábbi angol szó?  [as]",
        answers: [
            {text: "aszerint" , correct:false},
            {text: "ő/őt" , correct:false},
            {text: "mint" , correct:true},
            {text: "nem" , correct:false},
        ]
    },
    {
        question: "Mit jelent az alábbi angol szó?  [what]",
        answers: [
            {text: "amilyen" , correct:false},
            {text: "mi,mit,ami,amit" , correct:true},
            {text: "folyamán" , correct:false},
            {text: "ki" , correct:false},
        ]
    },
    {
        question: "Mit jelent az alábbi angol szó?  [to go]",
        answers: [
            {text: "menni" , correct:true},
            {text: "képes rá" , correct:false},
            {text: "vagy" , correct:false},
            {text: "tudni" , correct:false},
        ]
    },
    {
        question: "Mit jelent az alábbi angol szó?  [their]",
        answers: [
            {text: "szerezni" , correct:false},
            {text: "kapni" , correct:false},
            {text: "az ő valamijük" , correct:true},
            {text: "kit" , correct:false},
        ]
    },
    {
        question: "Mit jelent az alábbi angol szó?  [can]",
        answers: [
            {text: "tud,képes rá" , correct:true},
            {text: "kanna" , correct:false},
            {text: "tenni" , correct:false},
            {text: "venni" , correct:false},
        ]
    },
    {
        question: "Mit jelent az alábbi angol szó?  [who]",
        answers: [
            {text: "valaki" , correct:false},
            {text: "ki,kit,aki,akit" , correct:true},
            {text: "bárki" , correct:false},
            {text: "mindenki" , correct:false},
        ]
    },
    {
        question: "Mit jelent az alábbi angol szó?  [to get]",
        answers: [
            {text: "tenni" , correct:false},
            {text: "menni" , correct:false},
            {text: "kapni" , correct:true},
            {text: "volna" , correct:false},
        ]
    },
    {
        question: "Mit jelent az alábbi angol szó?  [if]",
        answers: [
            {text: "azonban" , correct:false},
            {text: "különben" , correct:false},
            {text: "másként" , correct:false},
            {text: "ha" , correct:true},
        ]
    },
    {
        question: "Mit jelent az alábbi angol szó?  [else]",
        answers: [
            {text: "azt" , correct:false},
            {text: "valaha" , correct:false},
            {text: "ha" , correct:false},
            {text: "különben" , correct:true},
        ]
    },
    {
        question: "Mit jelent az alábbi angol szó?  [would]",
        answers: [
            {text: "megszerezni" , correct:false},
            {text: "minden" , correct:false},
            {text: "volna" , correct:true},
            {text: "feltéve hogy" , correct:false},
        ]
    },
   /* {
        question: "Mit jelent az alábbi angol szó?  [of]",
        answers: [
            {text: "azt" , correct:false},
            {text: "valakinek,valaminek a / -ból" , correct:true},
            {text: "folyamán" , correct:false},
            {text: "ki" , correct:false},
        ]
    },
    {
        question: "Mit jelent az alábbi angol szó?  [of]",
        answers: [
            {text: "azt" , correct:false},
            {text: "valakinek,valaminek a / -ból" , correct:true},
            {text: "folyamán" , correct:false},
            {text: "ki" , correct:false},
        ]
    },
    {
        question: "Mit jelent az alábbi angol szó?  [of]",
        answers: [
            {text: "azt" , correct:false},
            {text: "valakinek,valaminek a / -ból" , correct:true},
            {text: "folyamán" , correct:false},
            {text: "ki" , correct:false},
        ]
    },
    {
        question: "Mit jelent az alábbi angol szó?  [of]",
        answers: [
            {text: "azt" , correct:false},
            {text: "valakinek,valaminek a / -ból" , correct:true},
            {text: "folyamán" , correct:false},
            {text: "ki" , correct:false},
        ]
    },
    {
        question: "Mit jelent az alábbi angol szó?  [of]",
        answers: [
            {text: "azt" , correct:false},
            {text: "valakinek,valaminek a / -ból" , correct:true},
            {text: "folyamán" , correct:false},
            {text: "ki" , correct:false},
        ]
    },
    {
        question: "Mit jelent az alábbi angol szó?  [of]",
        answers: [
            {text: "azt" , correct:false},
            {text: "valakinek,valaminek a / -ból" , correct:true},
            {text: "folyamán" , correct:false},
            {text: "ki" , correct:false},
        ]
    },
    {
        question: "Mit jelent az alábbi angol szó?  [of]",
        answers: [
            {text: "azt" , correct:false},
            {text: "valakinek,valaminek a / -ból" , correct:true},
            {text: "folyamán" , correct:false},
            {text: "ki" , correct:false},
        ]
    },
    {
        question: "Mit jelent az alábbi angol szó?  [of]",
        answers: [
            {text: "azt" , correct:false},
            {text: "valakinek,valaminek a / -ból" , correct:true},
            {text: "folyamán" , correct:false},
            {text: "ki" , correct:false},
        ]
    },
    {
        question: "Mit jelent az alábbi angol szó?  [of]",
        answers: [
            {text: "azt" , correct:false},
            {text: "valakinek,valaminek a / -ból" , correct:true},
            {text: "folyamán" , correct:false},
            {text: "ki" , correct:false},
        ]
    },
    {
        question: "Mit jelent az alábbi angol szó?  [of]",
        answers: [
            {text: "azt" , correct:false},
            {text: "valakinek,valaminek a / -ból" , correct:true},
            {text: "folyamán" , correct:false},
            {text: "ki" , correct:false},
        ]
    },
    {
        question: "Mit jelent az alábbi angol szó?  [of]",
        answers: [
            {text: "azt" , correct:false},
            {text: "valakinek,valaminek a / -ból" , correct:true},
            {text: "folyamán" , correct:false},
            {text: "ki" , correct:false},
        ]
    },
    {
        question: "Mit jelent az alábbi angol szó?  [of]",
        answers: [
            {text: "azt" , correct:false},
            {text: "valakinek,valaminek a / -ból" , correct:true},
            {text: "folyamán" , correct:false},
            {text: "ki" , correct:false},
        ]
    },
    {
        question: "Mit jelent az alábbi angol szó?  [of]",
        answers: [
            {text: "azt" , correct:false},
            {text: "valakinek,valaminek a / -ból" , correct:true},
            {text: "folyamán" , correct:false},
            {text: "ki" , correct:false},
        ]
    },
    {
        question: "Mit jelent az alábbi angol szó?  [of]",
        answers: [
            {text: "azt" , correct:false},
            {text: "valakinek,valaminek a / -ból" , correct:true},
            {text: "folyamán" , correct:false},
            {text: "ki" , correct:false},
        ]
    },
    {
        question: "Mit jelent az alábbi angol szó?  [of]",
        answers: [
            {text: "azt" , correct:false},
            {text: "valakinek,valaminek a / -ból" , correct:true},
            {text: "folyamán" , correct:false},
            {text: "ki" , correct:false},
        ]
    },
    {
        question: "Mit jelent az alábbi angol szó?  [of]",
        answers: [
            {text: "azt" , correct:false},
            {text: "valakinek,valaminek a / -ból" , correct:true},
            {text: "folyamán" , correct:false},
            {text: "ki" , correct:false},
        ]
    },
    {
        question: "Mit jelent az alábbi angol szó?  [of]",
        answers: [
            {text: "azt" , correct:false},
            {text: "valakinek,valaminek a / -ból" , correct:true},
            {text: "folyamán" , correct:false},
            {text: "ki" , correct:false},
        ]
    },
    {
        question: "Mit jelent az alábbi angol szó?  [of]",
        answers: [
            {text: "azt" , correct:false},
            {text: "valakinek,valaminek a / -ból" , correct:true},
            {text: "folyamán" , correct:false},
            {text: "ki" , correct:false},
        ]
    },
    {
        question: "Mit jelent az alábbi angol szó?  [of]",
        answers: [
            {text: "azt" , correct:false},
            {text: "valakinek,valaminek a / -ból" , correct:true},
            {text: "folyamán" , correct:false},
            {text: "ki" , correct:false},
        ]
    },
    {
        question: "Mit jelent az alábbi angol szó?  [of]",
        answers: [
            {text: "azt" , correct:false},
            {text: "valakinek,valaminek a / -ból" , correct:true},
            {text: "folyamán" , correct:false},
            {text: "ki" , correct:false},
        ]
    },
    {
        question: "Mit jelent az alábbi angol szó?  [of]",
        answers: [
            {text: "azt" , correct:false},
            {text: "valakinek,valaminek a / -ból" , correct:true},
            {text: "folyamán" , correct:false},
            {text: "ki" , correct:false},
        ]
    },
    {
        question: "Mit jelent az alábbi angol szó?  [of]",
        answers: [
            {text: "azt" , correct:false},
            {text: "valakinek,valaminek a / -ból" , correct:true},
            {text: "folyamán" , correct:false},
            {text: "ki" , correct:false},
        ]
    },
    {
        question: "Mit jelent az alábbi angol szó?  [of]",
        answers: [
            {text: "azt" , correct:false},
            {text: "valakinek,valaminek a / -ból" , correct:true},
            {text: "folyamán" , correct:false},
            {text: "ki" , correct:false},
        ]
    },
    {
        question: "Mit jelent az alábbi angol szó?  [of]",
        answers: [
            {text: "azt" , correct:false},
            {text: "valakinek,valaminek a / -ból" , correct:true},
            {text: "folyamán" , correct:false},
            {text: "ki" , correct:false},
        ]
    },
    {
        question: "Mit jelent az alábbi angol szó?  [of]",
        answers: [
            {text: "azt" , correct:false},
            {text: "valakinek,valaminek a / -ból" , correct:true},
            {text: "folyamán" , correct:false},
            {text: "ki" , correct:false},
        ]
    },
    {
        question: "Mit jelent az alábbi angol szó?  [of]",
        answers: [
            {text: "azt" , correct:false},
            {text: "valakinek,valaminek a / -ból" , correct:true},
            {text: "folyamán" , correct:false},
            {text: "ki" , correct:false},
        ]
    },
    {
        question: "Mit jelent az alábbi angol szó?  [of]",
        answers: [
            {text: "azt" , correct:false},
            {text: "valakinek,valaminek a / -ból" , correct:true},
            {text: "folyamán" , correct:false},
            {text: "ki" , correct:false},
        ]
    },
    {
        question: "Mit jelent az alábbi angol szó?  [of]",
        answers: [
            {text: "azt" , correct:false},
            {text: "valakinek,valaminek a / -ból" , correct:true},
            {text: "folyamán" , correct:false},
            {text: "ki" , correct:false},
        ]
    },
    {
        question: "Mit jelent az alábbi angol szó?  [of]",
        answers: [
            {text: "azt" , correct:false},
            {text: "valakinek,valaminek a / -ból" , correct:true},
            {text: "folyamán" , correct:false},
            {text: "ki" , correct:false},
        ]
    },
    {
        question: "Mit jelent az alábbi angol szó?  [of]",
        answers: [
            {text: "azt" , correct:false},
            {text: "valakinek,valaminek a / -ból" , correct:true},
            {text: "folyamán" , correct:false},
            {text: "ki" , correct:false},
        ]
    },
    {
        question: "Mit jelent az alábbi angol szó?  [of]",
        answers: [
            {text: "azt" , correct:false},
            {text: "valakinek,valaminek a / -ból" , correct:true},
            {text: "folyamán" , correct:false},
            {text: "ki" , correct:false},
        ]
    },
    {
        question: "Mit jelent az alábbi angol szó?  [of]",
        answers: [
            {text: "azt" , correct:false},
            {text: "valakinek,valaminek a / -ból" , correct:true},
            {text: "folyamán" , correct:false},
            {text: "ki" , correct:false},
        ]
    },
    {
        question: "Mit jelent az alábbi angol szó?  [of]",
        answers: [
            {text: "azt" , correct:false},
            {text: "valakinek,valaminek a / -ból" , correct:true},
            {text: "folyamán" , correct:false},
            {text: "ki" , correct:false},
        ]
    },
    {
        question: "Mit jelent az alábbi angol szó?  [of]",
        answers: [
            {text: "azt" , correct:false},
            {text: "valakinek,valaminek a / -ból" , correct:true},
            {text: "folyamán" , correct:false},
            {text: "ki" , correct:false},
        ]
    },
    {
        question: "Mit jelent az alábbi angol szó?  [of]",
        answers: [
            {text: "azt" , correct:false},
            {text: "valakinek,valaminek a / -ból" , correct:true},
            {text: "folyamán" , correct:false},
            {text: "ki" , correct:false},
        ]
    },
    {
        question: "Mit jelent az alábbi angol szó?  [of]",
        answers: [
            {text: "azt" , correct:false},
            {text: "valakinek,valaminek a / -ból" , correct:true},
            {text: "folyamán" , correct:false},
            {text: "ki" , correct:false},
        ]
    },
    {
        question: "Mit jelent az alábbi angol szó?  [of]",
        answers: [
            {text: "azt" , correct:false},
            {text: "valakinek,valaminek a / -ból" , correct:true},
            {text: "folyamán" , correct:false},
            {text: "ki" , correct:false},
        ]
    },
    {
        question: "Mit jelent az alábbi angol szó?  [of]",
        answers: [
            {text: "azt" , correct:false},
            {text: "valakinek,valaminek a / -ból" , correct:true},
            {text: "folyamán" , correct:false},
            {text: "ki" , correct:false},
        ]
    },
    {
        question: "Mit jelent az alábbi angol szó?  [of]",
        answers: [
            {text: "azt" , correct:false},
            {text: "valakinek,valaminek a / -ból" , correct:true},
            {text: "folyamán" , correct:false},
            {text: "ki" , correct:false},
        ]
    },
    {
        question: "Mit jelent az alábbi angol szó?  [of]",
        answers: [
            {text: "azt" , correct:false},
            {text: "valakinek,valaminek a / -ból" , correct:true},
            {text: "folyamán" , correct:false},
            {text: "ki" , correct:false},
        ]
    },
    {
        question: "Mit jelent az alábbi angol szó?  [of]",
        answers: [
            {text: "azt" , correct:false},
            {text: "valakinek,valaminek a / -ból" , correct:true},
            {text: "folyamán" , correct:false},
            {text: "ki" , correct:false},
        ]
    },
    {
        question: "Mit jelent az alábbi angol szó?  [of]",
        answers: [
            {text: "azt" , correct:false},
            {text: "valakinek,valaminek a / -ból" , correct:true},
            {text: "folyamán" , correct:false},
            {text: "ki" , correct:false},
        ]
    },
    {
        question: "Mit jelent az alábbi angol szó?  [of]",
        answers: [
            {text: "azt" , correct:false},
            {text: "valakinek,valaminek a / -ból" , correct:true},
            {text: "folyamán" , correct:false},
            {text: "ki" , correct:false},
        ]
    },
    {
        question: "Mit jelent az alábbi angol szó?  [of]",
        answers: [
            {text: "azt" , correct:false},
            {text: "valakinek,valaminek a / -ból" , correct:true},
            {text: "folyamán" , correct:false},
            {text: "ki" , correct:false},
        ]
    },
    {
        question: "Mit jelent az alábbi angol szó?  [of]",
        answers: [
            {text: "azt" , correct:false},
            {text: "valakinek,valaminek a / -ból" , correct:true},
            {text: "folyamán" , correct:false},
            {text: "ki" , correct:false},
        ]
    },
    {
        question: "Mit jelent az alábbi angol szó?  [of]",
        answers: [
            {text: "azt" , correct:false},
            {text: "valakinek,valaminek a / -ból" , correct:true},
            {text: "folyamán" , correct:false},
            {text: "ki" , correct:false},
        ]
    },
    {
        question: "Mit jelent az alábbi angol szó?  [of]",
        answers: [
            {text: "azt" , correct:false},
            {text: "valakinek,valaminek a / -ból" , correct:true},
            {text: "folyamán" , correct:false},
            {text: "ki" , correct:false},
        ]
    },
    {
        question: "Mit jelent az alábbi angol szó?  [of]",
        answers: [
            {text: "azt" , correct:false},
            {text: "valakinek,valaminek a / -ból" , correct:true},
            {text: "folyamán" , correct:false},
            {text: "ki" , correct:false},
        ]
    },
    {
        question: "Mit jelent az alábbi angol szó?  [of]",
        answers: [
            {text: "azt" , correct:false},
            {text: "valakinek,valaminek a / -ból" , correct:true},
            {text: "folyamán" , correct:false},
            {text: "ki" , correct:false},
        ]
    },
    {
        question: "Mit jelent az alábbi angol szó?  [of]",
        answers: [
            {text: "azt" , correct:false},
            {text: "valakinek,valaminek a / -ból" , correct:true},
            {text: "folyamán" , correct:false},
            {text: "ki" , correct:false},
        ]
    },
    {
        question: "Mit jelent az alábbi angol szó?  [of]",
        answers: [
            {text: "azt" , correct:false},
            {text: "valakinek,valaminek a / -ból" , correct:true},
            {text: "folyamán" , correct:false},
            {text: "ki" , correct:false},
        ]
    },
    {
        question: "Mit jelent az alábbi angol szó?  [of]",
        answers: [
            {text: "azt" , correct:false},
            {text: "valakinek,valaminek a / -ból" , correct:true},
            {text: "folyamán" , correct:false},
            {text: "ki" , correct:false},
        ]
    },
    {
        question: "Mit jelent az alábbi angol szó?  [of]",
        answers: [
            {text: "azt" , correct:false},
            {text: "valakinek,valaminek a / -ból" , correct:true},
            {text: "folyamán" , correct:false},
            {text: "ki" , correct:false},
        ]
    },
    {
        question: "Mit jelent az alábbi angol szó?  [of]",
        answers: [
            {text: "azt" , correct:false},
            {text: "valakinek,valaminek a / -ból" , correct:true},
            {text: "folyamán" , correct:false},
            {text: "ki" , correct:false},
        ]
    },
    {
        question: "Mit jelent az alábbi angol szó?  [of]",
        answers: [
            {text: "azt" , correct:false},
            {text: "valakinek,valaminek a / -ból" , correct:true},
            {text: "folyamán" , correct:false},
            {text: "ki" , correct:false},
        ]
    },
    {
        question: "Mit jelent az alábbi angol szó?  [of]",
        answers: [
            {text: "azt" , correct:false},
            {text: "valakinek,valaminek a / -ból" , correct:true},
            {text: "folyamán" , correct:false},
            {text: "ki" , correct:false},
        ]
    },
    {
        question: "Mit jelent az alábbi angol szó?  [of]",
        answers: [
            {text: "azt" , correct:false},
            {text: "valakinek,valaminek a / -ból" , correct:true},
            {text: "folyamán" , correct:false},
            {text: "ki" , correct:false},
        ]
    },
    {
        question: "Mit jelent az alábbi angol szó?  [of]",
        answers: [
            {text: "azt" , correct:false},
            {text: "valakinek,valaminek a / -ból" , correct:true},
            {text: "folyamán" , correct:false},
            {text: "ki" , correct:false},
        ]
    },
    {
        question: "Mit jelent az alábbi angol szó?  [of]",
        answers: [
            {text: "azt" , correct:false},
            {text: "valakinek,valaminek a / -ból" , correct:true},
            {text: "folyamán" , correct:false},
            {text: "ki" , correct:false},
        ]
    },
    {
        question: "Mit jelent az alábbi angol szó?  [of]",
        answers: [
            {text: "azt" , correct:false},
            {text: "valakinek,valaminek a / -ból" , correct:true},
            {text: "folyamán" , correct:false},
            {text: "ki" , correct:false},
        ]
    },
    {
        question: "Mit jelent az alábbi angol szó?  [of]",
        answers: [
            {text: "azt" , correct:false},
            {text: "valakinek,valaminek a / -ból" , correct:true},
            {text: "folyamán" , correct:false},
            {text: "ki" , correct:false},
        ]
    },
    {
        question: "Mit jelent az alábbi angol szó?  [of]",
        answers: [
            {text: "azt" , correct:false},
            {text: "valakinek,valaminek a / -ból" , correct:true},
            {text: "folyamán" , correct:false},
            {text: "ki" , correct:false},
        ]
    },
    {
        question: "Mit jelent az alábbi angol szó?  [of]",
        answers: [
            {text: "azt" , correct:false},
            {text: "valakinek,valaminek a / -ból" , correct:true},
            {text: "folyamán" , correct:false},
            {text: "ki" , correct:false},
        ]
    },
    {
        question: "Mit jelent az alábbi angol szó?  [of]",
        answers: [
            {text: "azt" , correct:false},
            {text: "valakinek,valaminek a / -ból" , correct:true},
            {text: "folyamán" , correct:false},
            {text: "ki" , correct:false},
        ]
    },
    {
        question: "Mit jelent az alábbi angol szó?  [of]",
        answers: [
            {text: "azt" , correct:false},
            {text: "valakinek,valaminek a / -ból" , correct:true},
            {text: "folyamán" , correct:false},
            {text: "ki" , correct:false},
        ]
    },
    {
        question: "Mit jelent az alábbi angol szó?  [of]",
        answers: [
            {text: "azt" , correct:false},
            {text: "valakinek,valaminek a / -ból" , correct:true},
            {text: "folyamán" , correct:false},
            {text: "ki" , correct:false},
        ]
    },
    {
        question: "Mit jelent az alábbi angol szó?  [of]",
        answers: [
            {text: "azt" , correct:false},
            {text: "valakinek,valaminek a / -ból" , correct:true},
            {text: "folyamán" , correct:false},
            {text: "ki" , correct:false},
        ]
    },
    {
        question: "Mit jelent az alábbi angol szó?  [of]",
        answers: [
            {text: "azt" , correct:false},
            {text: "valakinek,valaminek a / -ból" , correct:true},
            {text: "folyamán" , correct:false},
            {text: "ki" , correct:false},
        ]
    },
    {
        question: "Mit jelent az alábbi angol szó?  [of]",
        answers: [
            {text: "azt" , correct:false},
            {text: "valakinek,valaminek a / -ból" , correct:true},
            {text: "folyamán" , correct:false},
            {text: "ki" , correct:false},
        ]
    },
    {
        question: "Mit jelent az alábbi angol szó?  [of]",
        answers: [
            {text: "azt" , correct:false},
            {text: "valakinek,valaminek a / -ból" , correct:true},
            {text: "folyamán" , correct:false},
            {text: "ki" , correct:false},
        ]
    },
    {
        question: "Mit jelent az alábbi angol szó?  [of]",
        answers: [
            {text: "azt" , correct:false},
            {text: "valakinek,valaminek a / -ból" , correct:true},
            {text: "folyamán" , correct:false},
            {text: "ki" , correct:false},
        ]
    },
    {
        question: "Mit jelent az alábbi angol szó?  [of]",
        answers: [
            {text: "azt" , correct:false},
            {text: "valakinek,valaminek a / -ból" , correct:true},
            {text: "folyamán" , correct:false},
            {text: "ki" , correct:false},
        ]
    },
    {
        question: "Mit jelent az alábbi angol szó?  [of]",
        answers: [
            {text: "azt" , correct:false},
            {text: "valakinek,valaminek a / -ból" , correct:true},
            {text: "folyamán" , correct:false},
            {text: "ki" , correct:false},
        ]
    },
    {
        question: "Mit jelent az alábbi angol szó?  [of]",
        answers: [
            {text: "azt" , correct:false},
            {text: "valakinek,valaminek a / -ból" , correct:true},
            {text: "folyamán" , correct:false},
            {text: "ki" , correct:false},
        ]
    },*/
];

