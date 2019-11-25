// color picker section
const pickrContainer = document.querySelector('.pickr-container');
const themeContainer = document.querySelector('.theme-container');
const themes = [
    [
        'classic',
        {
            swatches: [
                'rgba(244, 67, 54, 1)',
                'rgba(233, 30, 99, 0.95)',
                'rgba(156, 39, 176, 0.9)',
                'rgba(103, 58, 183, 0.85)',
                'rgba(63, 81, 181, 0.8)',
                'rgba(33, 150, 243, 0.75)',
                'rgba(3, 169, 244, 0.7)',
                'rgba(0, 188, 212, 0.7)',
                'rgba(0, 150, 136, 0.75)',
                'rgba(76, 175, 80, 0.8)',
                'rgba(139, 195, 74, 0.85)',
                'rgba(205, 220, 57, 0.9)',
                'rgba(255, 235, 59, 0.95)',
                'rgba(255, 193, 7, 1)'
            ],

            components: {
                preview: true,
                opacity: true,
                hue: true,

                interaction: {
                    hex: true,
                    rgba: true,
                    hsva: true,
                    input: true,
                    clear: true,
                    save: true
                }
            }
        }
    ],
];

const buttons = [];
let pickr = null;

for (const [theme, config] of themes) {
    const button = document.createElement('button');
    button.innerHTML = theme;
    buttons.push(button);

    button.addEventListener('click', () => {
        const el = document.createElement('p');
        pickrContainer.appendChild(el);

        // Delete previous instance
        if (pickr) {
            pickr.destroyAndRemove();
        }

        // Apply active class
        for (const btn of buttons) {
            btn.classList[btn === button ? 'add' : 'remove']('active');
        }

        // Create fresh instance
        pickr = new Pickr(Object.assign({
            el, theme,
            default: '#42445a'
        }, config));
    });
}

buttons[0].click();


// svg section
var svgItem = $('.svg-item');
var btn = $('.btn-red');
var svgImg = $('.svg-img');

var svgFile = [
    "./public/svg/alarm, bell, education, school, clock, time.svg",
    "./public/svg/book, education, knowledge, library, learning, study, reading.svg",
    "./public/svg/art, education, painting, palette, brush, board, paint.svg",
    "./public/svg/globe, education, geography, school, internet, international, word.svg",
    "./public/svg/apple, knowledge, education, school.svg"];


svgFile.forEach(function(element,idx) {
    var svgObj =  svgItem.find('.svg-img')[idx];
    var svg = $(svgObj).svg({loadURL: element});
    console.log(svg.a)
   svg.attr('height', 600);
});



pickr.on('save', (color, instance) => {
    var hsva = pickr.getColor();
    var hexColor = hsva.toHEXA().toString();
    var fills = `fill:${hexColor}`;
    setSVGColor(fills);
    pickr.hide();
});


function setSVGColor(svgColor) {
    var svgObj = svgItem.find('svg');
    svgObj.each(function(idx, ele){
        var path = $(ele).find('#color1');
        path.each(function(idx2, ele2){
            $(ele2).attr('style', svgColor);
            
        });
    });
}