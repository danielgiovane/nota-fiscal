export const getItens = (data) => data.flatMap((data) => data.itens);

export const filterItens = code => itens => itens.filter(item => item.codigo == code);

export const sumItens = (item) => item.reduce((total,valor) => total += valor.valor, 0);