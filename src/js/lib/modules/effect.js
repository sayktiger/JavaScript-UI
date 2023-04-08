import $ from '../core';

$.prototype.animateOverTime = function(duration, callback, fin){
    let timeStart;

    function _animateOverTime(time){
        if(!timeStart){
            timeStart = time;
        }

        let timeElapsed = time - timeStart;
        let complection = Math.min(timeElapsed / duration, 1);

        callback(complection);

        if(timeElapsed < duration){
            requestAnimationFrame(_animateOverTime);
        } else{
            if(typeof fin === "function"){
                fin();
            }
        }
    }
    return _animateOverTime;
}

$.prototype.fadeIn = function(dur, display = "block", fin){
    for(let i = 0; i < this.length; i++){
        this[i].style.display = display;

        const _fadeIn = (complection) =>{
            this[i].style.opacity = complection;
        }

        const ani = this.animateOverTime(dur, _fadeIn, fin);

        requestAnimationFrame(ani);
    }
    return this;
}

$.prototype.fadeOut = function(dur, fin){
    for(let i = 0; i < this.length; i++){

        const _fadeOut = (complection) =>{
            this[i].style.opacity = 1 - complection;
            if(complection === 1){
                this[i].style.display = 'none';
            }
        }

        const ani = this.animateOverTime(dur, _fadeOut, fin);

        requestAnimationFrame(ani);
    }
    return this;
}