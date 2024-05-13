export default function agruparPorCategoria(items) {
    return items.reduce((agrupado, it) => {
        const categoryName = it.getCategory();
        
        if (!agrupado[categoryName]) {
            agrupado[categoryName] = [];
        }
        
        agrupado[categoryName].push(it);
        
        return agrupado;
    }, {});
}

export function exibirHtml(i) {
    console.log(i)
}
