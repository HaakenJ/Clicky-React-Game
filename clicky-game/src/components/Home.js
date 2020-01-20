import React, {
    Component
} from "react";
import NavBar from "./NavBar";
import Header from "./Header";
import Image from "./Image";

class ImageContainer extends Component {
    state = {
        data: [{
                clicked: false,
                id: 1,
                image: "../../public/img/goku.png"
            }, {
                clicked: false,
                id: 2,
                image: "../../public/img/bulma.png"
            },
            {
                clicked: false,
                id: 3,
                image: "../../public/img/chiaotzu.png"
            },
            {
                clicked: false,
                id: 4,
                image: "../../public/img/krillin.png"
            },
            {
                clicked: false,
                id: 5,
                image: "../../public/img/mrpopo.png"
            },
            {
                clicked: false,
                id: 6,
                image: "../../public/img/mutenroshi.png"
            },
            {
                clicked: false,
                id: 7,
                image: "../../public/img/oolong.png"
            },
            {
                clicked: false,
                id: 8,
                image: "../../public/img/piccolo.png"
            },
            {
                clicked: false,
                id: 9,
                image: "../../public/img/pilaf.png"
            },
            {
                clicked: false,
                id: 10,
                image: "../../public/img/tenshinhan.png"
            },
            {
                clicked: false,
                id: 11,
                image: "../../public/img/yajirobe.png"
            },
            {
                clicked: false,
                id: 12,
                image: "../../public/img/yamucha.png"
            }
        ],
        score: 0,
        topScore: 0
    }
}