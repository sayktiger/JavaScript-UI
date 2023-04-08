import $ from '../core';

$.prototype.getAtr = function(name){
    for(let i = 0; i < this.length; i++){
        if(!this[i].getAttribute(name)){
            continue;
        }
        this[i].getAttribute(name);
    }

    return this;
}

$.prototype.setAtr = function(name, value){
    for(let i = 0; i < this.length; i++){
        if(!this[i].setAttribute(name,value)){
            continue;
        }
        this[i].setAttribute(name, value);
    }

    return this;
}

$.prototype.removeAtr = function(name){
    for(let i = 0; i < this.length; i++){
        if(!this[i].removeAttribute(name)){
            continue;
        }
        this[i].removeAttribute(name);
    }

    return this;
}