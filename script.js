$(document).ready(function() {
    const storeItems = [
        {
            name: 'TV',
            price: 800.00,
            inStock: true,
            details: '4K Ultra HD'
        },
        {
            name: 'Phone',
            price: 700.00,
            inStock: false,
            details: '5G'
        },
        {
            name: 'Game Console',
            price: 300.00,
            inStock: true,
            details: 'The latest and greatest'
        },
        {
            name: 'Laptop',
            price: 1200.00,
            inStock: true,
            details: '16GB RAM 1TB SSD'
        },
        {
            name: 'Smart Watch',
            price: 200.00,
            inStock: false,
            details: 'Counts your steps'
        },
        {
            name: 'Headphones',
            price: 100.00,
            inStock: true,
            details: 'Clearest music to be heard'
        },
        {
            name: 'Keyboard',
            price: 100.00,
            inStock: true,
            details: 'Types for you'
        },
        {
            name: 'HDMI Cord',
            price: 100.00,
            inStock: true,
            details: 'HDMI to USB type C'
        },
        {
            name: 'Monitor',
            price: 300.00,
            inStock: true,
            details: '4K Ultra HD'
        },
        {
            name: 'Speaker',
            price: 200.00,
            inStock: true,
            details: 'Clearest music to be heard'
        },
        {
            name: 'Video Game',
            price: 60.00,
            inStock: true,
            details: 'Enjoy for hours'
        },
    ];
    let items = $('.productList');
    $(storeItems).each(function() {
        let item = this;
        if (item.inStock) {
            $(items).append(`<p class ="inStock">$${item.price} <span>${item.name}</span> <span>${item.details}</span></p>`);
            
        } 
    });
    $('.productList p:not(.inStock)').remove();

});
const button = document.getElementById("darkModeToggle");

button.addEventListener('click', function(){
  if( !$('contentContainer').hasClass('darkMode') ){
    $('#contentContainer').toggleClass('darkMode') }
  });