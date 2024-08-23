export function hexToRGBA(hex, alpha) {
    // Remova o '#' da cor hexadecimal
    hex = hex.replace("#", "");
  
    // Converta os valores hexadecimais para valores RGB
    let r = parseInt(hex.substring(0, 2), 16);
    let g = parseInt(hex.substring(2, 4), 16);
    let b = parseInt(hex.substring(4, 6), 16);
  
    // Retorna a cor no formato rgba
    return `rgba(${r},${g},${b},${alpha})`;
};

