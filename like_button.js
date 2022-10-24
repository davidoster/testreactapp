'use strict';
const e = React.createElement;
class LikeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { liked: false };
    }

    render() {
        if (this.state.liked) {
            return 'You liked this.';
        }

        return e(
            'button',
            { onClick: () => this.setState({ liked: true }) },
            'Like'
        );
    }
}
function renderButton() {
    const domContainer = document.querySelector('#like_button_container');
    const root = ReactDOM.createRoot(domContainer);
    root.render(e(LikeButton));
}
class MyDiv extends React.Component {
    MyProperty
    constructor(props) {
        super(props);
        console.log(props);
        this.MyProperty = "btn btn-info";
    }
    myAlert() {
        alert("Hello");
    }
    render() {
        return e('div', {
            id: 'mydiv', className: this.MyProperty,
            onClick: this.myAlert,
            style: { color: this.props.color, backgroundColor: this.props.bgColor }
        },
            "Hello World");
    }
}

function renderDiv() {
    const divContainer = document.getElementById("extDiv");
    const divRoot = ReactDOM.createRoot(divContainer);
    divRoot.render(e(MyDiv, { color: 'red', bgColor: 'blue' }));
}

renderButton();
renderDiv();


