function generate(){
    var quotes = {
       "-James A. Garfield" : '"The truth will set you free, but first it will make you miserable."',
       "-Albert Einstein"  : '“Our task must be to free ourselves... by widening our circle of compassion to embrace all living creatures and the whole of nature and its beauty.”',
       "-Deepak Chopra" : '“Sex is always about emotions. Good sex is about free emotions; bad sex is about blocked emotions.”',
       "-C.S Lewis" : '“I was not born to be free---I was born to adore and obey.”',
       "-John Glassworthy" : '“Life calls the tune, we dance.”',
       "-Mahatma Gandhi" : '“Freedom is not worth having if it does not include the freedom to make mistakes.”',
       "- Aung San Suu Kyi" : '“The only real prison is fear, and the only real freedom is freedom from fear.”',
       "- Albert Einstein" : '“Everything that is really great and inspiring is created by the individual who can labor in freedom.”'
    }

    var authors = Object.keys(quotes);

    var author = authors[Math.floor(Math.random() * authors.length)];
    
    var quote = quotes[author];
    console.log(quote);

    document.getElementById("quote").innerHTML = quote;
    document.getElementById("author").innerHTML = author;
}