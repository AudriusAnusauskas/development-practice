const a = "Random";

(a.length > 6 && a.charAt(0) === a.charAt(0).toUpperCase()) ? console.log('Long uppercase word'):
    (a.length <= 6 && a.charAt(0) !== a.charAt(0).toUpperCase()) ? console.log('Short lowercase word') :
    console.log('Short uppercase or long lowercase');