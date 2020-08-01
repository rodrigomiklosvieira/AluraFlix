módulo . exportações  =  {
    env : {
      navegador : true ,
      es6 : verdadeiro ,
    } ,
    estende : [
      'plugin: reagir / recomendado' ,
      'airbnb' ,
    ] ,
    globais : {
      Atomics : 'readonly' ,
      SharedArrayBuffer : 'somente leitura' ,
    } ,
    parserOptions : {
      ecmaFeatures : {
        jsx : true ,
      } ,
      Versão : 2018 ,
      sourceType : 'module' ,
    } ,
    plugins : [
      'react' ,
    ] ,
    regras : {
      "react / jsx-filename-extension" : [ 1 ,  {  "extensions" : [ ".js" ,  ".jsx" ]  } ]
    } ,
  } ;