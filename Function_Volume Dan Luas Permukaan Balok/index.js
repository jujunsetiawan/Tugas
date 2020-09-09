function volumebalok (p,l,t) {
    return  p * l * t;
}
document.write('Panjang : 2' + '<br> Lebar : 4' + '<br> Tinggi : 6' + '<p> Luas Balok :' + volumebalok(2,4,6));

function luaspermukaanbalok (p,l,t) {
    return 2 * (p * l + p * t + l * t);
}
document.write('<br> Luaspermukaan Balok :' + luaspermukaanbalok(2,4,6));