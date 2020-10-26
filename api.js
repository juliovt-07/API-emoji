function emoji(){
  var teste = "smile";
  var Algorithmia = require("algorithmia");

  var input = {"text":teste};
  Algorithmia.client("simnyEvV0MtbPZRp8FkDTXLgL6s1")
    .algo("jhurliman/Text2Emoji/0.1.1?timeout=300") // timeout is optional
    .pipe(input)
    .then(function(response) {
      var result = response.get();
      console.log(result,"deu certo")
    });
}
