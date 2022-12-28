
words = {
    'a':108,
    'b':110,
    'c':112,
    'd':114,
    'e':116,
    'f':118,
    'g':120,
    'h':122,
    'i':124,
    'j':126,
    'k':128,
    'l':130,
    'm':132,
    'n':134,
    'o':133,
    'p':131,
    'q':129,
    'r':127,
    's':125,
    't':123,
    'u':121,
    'v':119,
    'w':117,
    'x':115,
    'y':113,
    'z':111,
    " ": 109,
    "(":180,
    ")":210
}

nums = {
'108': 'a',
'110':'b',
'112':'c',
'114':'d',
'116':'e',
'118':'f',
'120':'g',
'122':'h',
'124':'i',
'126':'j',
'128':'k',
'130':'l',
'132':'m',
'134':'n',
'133':'o',
'131':'p',
'129':'q',
'127':'r',
'125':'s',
'123':'t',
'121':'u',
'119':'v',
'117':'w',
'115':'x',
'113':'y',
'111':'z',
'109':' ',
",":"",
" ":"",
"210":")",
"180": "("
}

enteredtext = []
translated_text = []
document.getElementById("translate").onclick = function(){
    
    var script = document.getElementById("enteredtranslation").value
   for(i in script){
    enteredtext.push(script[i])
    
   }
   for(i in enteredtext){
    translated_text.push(words[enteredtext[i]])
   }
  
   
   document.getElementById("translatedwords").innerHTML = translated_text
   
   

   
}
document.getElementById("copybtn").onclick = function(){
    navigator.clipboard.writeText(translated_text)
}
enteredcode = []
document.getElementById("retranslate").onclick = function(){
    
    
    
    var script = document.getElementById("enteredtranslation").value

    for(i in script){
    if(script[i] == ","){
        script[i] == " "
    }
    else{
    enteredcode.push(script[i])
    
    
    }}
   m =0
   n = 3
    new_word = ""
    
    
   
   senteces = "" 
   for(var i = 1;(i<=enteredcode.length)/3;++i){
    var sliced = enteredcode.slice(m,n)
        m+=3
        n+=3
        
        for(x in sliced){
           
            new_word += (sliced[x])

        }
        
        senteces += nums[new_word]
        
        new_word = ""
    if(n == ((enteredcode.length)+3)){
        document.getElementById("translatedwords").innerHTML = senteces
    }
    }
    
       

 
    }


