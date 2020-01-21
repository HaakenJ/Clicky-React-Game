import React, {
    Component
} from "react";
import NavBar from "../NavBar";
import Header from "../Header";
import Image from "../Image";
import "./style.css";

class ImageContainer extends Component {
    state = {
        data: [{
                id: 0,
                clicked: false,
                image: "../../public/img/goku.png"
            }, {
                id: 1,
                clicked: false,
                image: "../../public/img/bulma.png"
            },
            {
                id: 2,
                clicked: false,
                image: "../../public/img/chiaotzu.png"
            },
            {
                id: 3,
                clicked: false,
                image: "../../public/img/krillin.png"
            },
            {
                id: 4,
                clicked: false,
                image: "../../public/img/mrpopo.png"
            },
            {
                id: 5,
                clicked: false,
                image: "../../public/img/mutenroshi.png"
            },
            {
                id: 6,
                clicked: false,
                image: "../../public/img/oolong.png"
            },
            {
                id: 7,
                clicked: false,
                image: "../../public/img/piccolo.png"
            },
            {
                id: 8,
                clicked: false,
                image: "../../public/img/pilaf.png"
            },
            {
                id: 9,
                clicked: false,
                image: "../../public/img/tenshinhan.png"
            },
            {
                id: 10,
                clicked: false,
                image: "../../public/img/yajirobe.png"
            },
            {
                id: 11,
                clicked: false,
                image: "../../public/img/yamucha.png"
            }
        ],
        score: 0,
        topScore: 0
    }

    componentDidMount() {
        this.setState({
            data: this.shuffleArray(this.state.data)
        });
    }

    handleClick = event => {
        const id = event.target.data - id;
        const values = this.getImageById(id);
        const clickedImg = values[0];
        const clickedIndex = values[1];

        // If the image has not been clicked before now.
        if (!clickedImg[clicked]) {
            // Create new data array without the item that was clicked.
            const newData = this.state.data.slice(0, clickedIndex) +
                this.state.data.slice(clickedIndex + 1);
            // Set clicked to true and add the clicked item back in.
            clickedImg[clicked] = true;
            newData.push(clickedImg);
            // Check if the new score is higher than topScore and setState.
            (this.state.score + 1) > this.state.topScore ? 
                this.setState({ 
                    data: newData,
                    score: this.state.score + 1,
                    // Not sure if score will update before topScore.
                    // May be a race condition...
                    topScore: this.state.score
                }) :
                this.setState({ 
                    data: newData,
                    score: this.state.score + 1
                }); 
        }
    }

    shuffleArray = array => {
        const arrCopy = array.slice();
        let i = arrCopy.length - 1;
        for (; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            temp = arrCopy[i];
            arrCopy[i] = arrCopy[j];
            arrCopy[j] = temp;
        }
        return arrCopy;
    }

    getImageById = id => {
        for (let i = 0; i < this.state.data.length; i++) {
            if (this.state.data[i].id === id) {
                return [this.state.data[i], i];
            }
        }
    }


    render() {
        return ( <
            NavBar / >
            <
            Header / >

        )
    }
}