import BodyParts from './bodyParts'

class Head extends BodyParts {
    constructor(type) {
        super();
        this.type = type;
        this.height;
        this.width;
        this.color;
    }
} 


export default Head;