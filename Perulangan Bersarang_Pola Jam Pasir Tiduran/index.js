document.write("<pre>");
document.write('<p>Jam Pasir Tidur</p>')
for( var x = 1; x < 10; x++){
    for( var y = 1; y < 10; y++){
        if( x + y >= 10 && x <= y || x + y <= 10 && x >= y ) 
        document.write('*');
        else document.write(' ');
    }
    document.write('<br>');
}
document.write("</pre>");