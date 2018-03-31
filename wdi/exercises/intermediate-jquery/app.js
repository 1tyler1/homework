var newHomes = [{
        address: '27569 Cedarwood Drive',
        sf: '2,535',
        bedrooms: 3,
        baths: 2.5,
        price: '$496,500',
    },
    {
        address: '316 Annandale Drive',
        sf: '1,326',
        bedrooms: 4,
        baths: 2,
        price: '$275,000',
    },
    {
        address: '251 Grandview Road',
        sf: '3,800',
        bedrooms: 3,
        baths: 2,
        price: '$699,900',
    },
    {
        address: '28571 Manitoba',
        sf: '2,960',
        bedrooms: 4,
        baths: 3.5,
        price: '$775,000',
    },
];

$(function() {
    alert("Everything is ready, let's do this");

    $("#addHome").removeClass('btn-danger').addClass('btn-success')
    $('h1').addClass('text-center')

    let newLink = $('<br><br><a id="zillowLink" href="http://www.zillow.com">Visit Zillow.com</a>');

    $('body').append(newLink);

    $('#zillowLink').attr("target", "_blank")

    let $zillowValue = $('#zillowLink').attr('href')

    console.log("Current Zillow Link", $zillowValue)

    $('#addHome').click(function($event) {
        console.log($event)

    })

    $('#addHome').on('click', function() {
        console.log(this)
    })

    $('#homes tbody tr td button').on('click', removeHome);


    function removeHome() {
        ($(this).parent().parent()).fadeOut(130, function() {
            $(this).remove()
        })
    }

    var cells = $('#homes thead tr').children()

    console.log("cells", cells)
    cells.eq(0).css('color', 'blue');
    cells.eq(4).css('color', 'green');

})