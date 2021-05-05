function logThis() {
    console.log("Hello there");
}

const myObject = {
    logThis: function() {
        console.log(this);
    },
    logThisNested: function() {
        nestedFunction = function() {
            console.log(this);
        }
        nestedFunction();
    },
    logThis2: function() {
        var objectThis = this;
        nestedFunction = function() {
            console.log(objectThis);
        }()
    }
}

logThis();
myObject.logThisNested();

const logThisArrow = () => {
    console.log(this);
}

const objectWithArrow = {
    logThisArrow: () => {
        console.log(this);
    }
}

objectWithArrow.logThisArrow();

const objectWithArrow2 = {
    logThisArrow: null,
    initializeArrowFunction: function() {
        this.logThisArrow = () => {
            console.log(this);
        }
    }
}

const myObjectTest = {
    myClassicFunction: 
        function () {         
            console.log(this)            
        }
} 

myObjectTest.myClassicFunction();
