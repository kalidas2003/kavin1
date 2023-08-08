const video=document.querySelector('.video');
for(let i=0;i<clip.length;i++){
    clip[i].addEventlistener('mouseenter',
    function(e){
        clip[i].play()
    })
    }
