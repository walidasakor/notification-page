let numEl=document.querySelector('.number');
let togEl=document.querySelector('.toggle');
let notifications=document.querySelectorAll('.info');


togEl.addEventListener('click', function(){
    if (togEl.textContent===`Mark all as read`){   
        togEl.textContent=`Mark all as unread`;
        numEl.textContent=0;
        notifications.forEach(function(notification){
            notification.classList.remove('unread'); 
          })
    } else{
        togEl.textContent=`Mark all as read`
        notifications.forEach(function(notification){
            notification.classList.add('unread'); 
          }) 
        numEl.textContent=notifications.length 
    }
    
})

notifications.forEach(function (notification){
    notification.addEventListener('click', function(e){
        let styles=e.currentTarget.classList;
        
        if (styles.contains('unread')){
          numEl.textContent=numEl.textContent-1;
          notification.classList.remove('unread'); 
        }
        if (numEl.textContent<0){
            numEl.textContent=0;
        }
    })
})


