const Styles = () => {
    let styles = {
        height: 5,
        width: 5
    };

    return {
        setBackgroundColor(color) {
            styles.backgroundColor = color;
        },
        setNewHeight() {},
        getter() {
            return styles;
        }
    }
};

var myButton = Styles();
console.log(myButton)
myButton.setBackgroundColor('blue');

var myLink = Styles();
myLink.setNewHeight(5);
