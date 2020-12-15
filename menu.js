$(function () {

    var data = {
        menu: [{
            name: 'Menu',
            link: '0',
            sub: null
        }, {
            name: 'Platos Fuertes',
            link: '1',
            sub: [{
                name: 'Pastel de Carne Con Queso',
                link: '0-0',
                sub: null
            }, {
                name: 'Pollo con verdolargas',
                link: '0-1',
                sub: null
            }, {
                name: 'Nopal Empapelado con Pechuga',
                link: '0-2',
                sub: null
            }]
        }, {
            name: 'Entrada',
            link: '2',
            sub: [{
                name: 'Sushis de Salmon con Queso',
                link: '2-0',
                sub: null
            }, {
                name: 'Croquetas de Pollo',
                link: '2-1',
                sub: null
            }]
        }, {
            name: 'Postre',
            link: '3',
            sub: [{
                name: 'Tres Leches',
                link: '3-1',
                sub: null
            }, {
                name: 'Tarta de Manzana',
                link: '3-2',
                sub: null
            }]
        }]
    };
    var getMenuItem = function (itemData) {
        var item = $("<li>")
            .append(
        $("<a>", {
            href: '#' + itemData.link,
            html: itemData.name
        }));
        if (itemData.sub) {
            var subList = $("<ul>");
            $.each(itemData.sub, function () {
                subList.append(getMenuItem(this));
            });
            item.append(subList);
        }
        return item;
    };
    
    var $menu = $("#menu");
    $.each(data.menu, function () {
        $menu.append(
            getMenuItem(this)
        );
    });
    $menu.menu();
});