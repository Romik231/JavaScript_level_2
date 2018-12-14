function quoteReplace(text, match, replacebel) {
    let Result = text.replace(match, replacebel);
    return Result;
}

let match = /\s\'/g,
    replacebel = ' "',
    text = "Meet my family. 'There' are five of us – my parents, my 'elder' brother, my baby sister and me. First, meet my mum and dad, Jane and Michael. My mum enjoys 'reading' and my dad 'enjoys' playing chess with my brother Ken. Children have classes till 3.15 p.m. At 12 o’clock children have lunch. ";
    Result = quoteReplace(text, match, replacebel);

text = Result;
match = /\'\s/g;
replacebel = '" ';

Result = quoteReplace(text, match, replacebel);

console.log('вот что стало:  ' + Result);