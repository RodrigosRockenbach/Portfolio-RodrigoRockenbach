function idade(ano_nasc, mes_nasc, dia_nasc) {
    var ano_nasc = 2002;
    var mes_nasc = 12;
    var dia_nasc = 17;

    var d = new Date,
        ano_atual = d.getFullYear()+1,
        mes_atual = d.getMonth() +1,
        dia_atual = d.getDate(),

        ano_nasc = +ano_atual,
        mes_nasc = +mes_atual,
        dia_nasc = +dia_atual,

        anos = ano_atual - ano_nasc;

        if (mes_atual < dia_nasc || mes_atual == mes_nasc && dia_atual < dia_nasc) {
            anos --;
        }else{
            return anos < 0 ? 0 : anos;
        }
}

console.log("A idade é " +idade)