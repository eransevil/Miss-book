export const bookDetailsService = {
    getCurrencySymbol
}

function getCurrencySymbol({listPrice}) {
    if (listPrice.currencyCode === 'USD') return '$';
    if (listPrice.currencyCode === 'EUR') return '€';
    if (listPrice.currencyCode === 'ILS') return '₪';
}