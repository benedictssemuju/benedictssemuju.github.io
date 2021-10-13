$(function () {
    "use strict";
    let GROWTH_AMOUNT = 2;
    let CIRCLE_SIZE = 50;
    let GROWTH_INTERVAL_MS = 250;
    let NUMBER_OF_CIRCLES = 10;
    let timeoutIds = [];
    const COLOR_FACTORY = ["#91a5ef", "yellow", "purple", "teal", "#89b893", "#af89b8", "#b8b389"];

    // create a new canvas on to which the circles will be drawn
    const canvas = {
        element: $("<div>", {"id": "canvas"}),
        width: 1024,
        height: 800,
        initialize: function () {
            this.element.css({
                "width": this.width + "px",
                "height": this.height + "px"
            });

            $('body').append($("<div>", {class: "settings"}) 
                .append($('<div>', {class: 'setting'})
                    .append($('<label>', {for: 'width', text: 'Width:'}))
                    .append($('<input>', {type: 'number', id: 'width', name: 'width', value: 50}))
                )
                .append($('<div>', {class: 'setting'})
                    .append($('<label>', {for: 'growth-amount', text: 'Growth amount (px):'}))
                    .append($('<input>', {type: 'number', id: 'growth-amount', name: 'growth-amount', value: 2})
                    ))
                .append($('<div>', {class: 'setting'})
                    .append($('<label>', {for: 'growth-interval', text: 'Growth Interval (ms):'}))
                    .append($('<input>', {type: 'number', id: 'growth-interval', name: 'growth-interval', value: 250})
                    ))
                .append($('<div>', {class: 'setting'})
                    .append($('<label>', {for: 'circle-number', text: 'Number of Circles:'}))
                    .append($('<input>', {type: 'number', id: 'circle-number', name: 'circle-number', value: 10})
                    ))
                .append($('<button>', {class: 'button', id: 'start', text: 'Start'}))
                .append($('<button>', {class: 'button', id: 'stop', disabled: true, text: 'Stop'}))
                .append($('<button>', {class: 'button', id: 'reset', text: 'Reset'}))
            ).append(this.element); 
        },
        circles: []
    };


    /**
     * A Circle class
     *
     * Encapsulates the jQuery object for the circle and provides extra methods and functionality
     */
    class Circle {
      
        constructor(color, dx, dy) {
            this.dx = dx;
            this.dy = dy;
            this.width = CIRCLE_SIZE;
            this.height = CIRCLE_SIZE;
            this.element = $("<div>"); // new circle is created as a div
            this.element.css({ // add some default css properties to new circle
                "background-color": color,
                "width": this.width + "px",
                "height": this.height + 'px'
            }).addClass("circle");

            this.element.click(() => {
                this.removeCircle();
            });

            this.element.mouseover(() => {
                this.element.css({
                    "cursor": "pointer"
                }).addClass("fade-out");
            });

            this.element.mouseleave(() => {
                this.element.removeClass("fade-out");
            });

            // set random Initial Circle position
            const max = 500;
            const min = 0;
            const x = Math.floor(Math.random() * (max - min + 1)) + min;
            const y = Math.floor(Math.random() * (max - min + 1)) + min;
            this.position = {x, y};
            this.moveCircleTo(x, y);

            // add the new circle to the canvas in the DOM
            canvas.element.append(this.element);
        }


      
        changeSize(size) {
            this.height = size;
            this.width = size;
            this.element.css({
                "width": this.width + "px",
                "height": this.height + 'px'
            })
        }

        moveCircleTo(x, y) {
            this.element.css({
                "left": x + 'px',
                "top": y + 'px'
            });
        }


        changeDirectionIfNecessary(x, y) {
            if (x < 0 || x > canvas.width - this.width) {
                this.dx = -this.dx;
            }
            if (y < 0 || y > canvas.height - this.height) {
                this.dy = -this.dy;
            }
        }

        runAnimation(x = this.position.x, y = this.position.y) {
            this.position.x = x;
            this.position.y = y;
            this.moveCircleTo(x, y);
            const circle = this;
            timeoutIds.push(setTimeout(function () {
                circle.changeDirectionIfNecessary(x, y);
                circle.runAnimation(x + circle.dx, y + circle.dy);
            }, 100));
        }

        removeCircle() {
            this.element.remove();
            canvas.circles = canvas.circles.filter(circle => circle !== this);
        }

        getSize() {
            return this.height;
        }
    }


 
    canvas.initialize();
    createCircles(NUMBER_OF_CIRCLES);


    $("#width").change(function () {
        const size = parseInt($(this).val());
        canvas.circles.forEach((circle) => {
            circle.changeSize(size);
        });
        CIRCLE_SIZE = size;
    });

    $("#growth-amount").change(function () {
        GROWTH_AMOUNT = parseInt($(this).val());
    });

    $("#growth-interval").change(function () {
        GROWTH_INTERVAL_MS = parseInt($(this).val());
    });

  
    function createCircles(numberOfCircles) {
        // remove old circles from UI
        canvas.circles.forEach(c => {
            c.removeCircle();
        });

        for (let i = 1; i <= numberOfCircles; i++) {
            const color = COLOR_FACTORY[Math.floor(Math.random() * COLOR_FACTORY.length)];
            const deltaMax = 6; // ∆x is the left position offset for the animation
            const deltaMin = 1; // ∆y is the top  position offset for the animation
            const dx = Math.floor(Math.random() * (deltaMax - deltaMin + 1)) + deltaMin;
            const dy = Math.floor(Math.random() * (deltaMax - deltaMin + 1)) + deltaMin;
            canvas.circles.push(new Circle(color, dx, dy));
        }
    }

    $("#circle-number").change(function () {
        // generate new circles based on user input
        NUMBER_OF_CIRCLES = parseInt($(this).val());
        createCircles(NUMBER_OF_CIRCLES);
    });

    // start
    $("#start").click(function () {
        // house keeping
        $("#width").prop('disabled', true);
        $("#growth-amount").prop('disabled', true);
        $("#growth-interval").prop('disabled', true);
        $("#circle-number").prop('disabled', true);
        $("#start").prop('disabled', true);
        $("#reset").prop('disabled', true);
        $("#stop").prop('disabled', false);


        // start animating circles
        canvas.circles.forEach(circle => {
            circle.runAnimation(); // runAnimation circles
        })

        // set circle growth interval
        timeoutIds.push(setInterval(function () {
            canvas.circles.forEach((circle) => {
                circle.changeSize(circle.getSize() + GROWTH_AMOUNT);
            });
        }, GROWTH_INTERVAL_MS));
    });

    $("#stop").click(function () {
        $("#width").prop('disabled', false);
        $("#growth-amount").prop('disabled', false);
        $("#growth-interval").prop('disabled', false);
        $("#circle-number").prop('disabled', false);
        $("#start").prop('disabled', false);
        $("#stop").prop('disabled', true);
        $("#reset").prop('disabled', false);
        timeoutIds.forEach(id => clearTimeout(id));
    });

    $("#reset").click(function () {
        createCircles(NUMBER_OF_CIRCLES);
    });

});