const errorFlags={
    usernameErrFlag:true,
    passwordErrFlag:true
    
}
const validate=(el,authValue)=>{
    let flagName=el+"ErrFlag";
    if($(`#${el}`).val()===authValue){
        errorFlags[flagName]=false;
        const msg='';
        $(`#${el}Error`).html(msg);
        $(`#${el}Error`).addClass('hidden');
    }
    else{
        errorFlags[flagName]=true;
        const msg=`Invalid  ${el} `;
        $(`#${el}Error`).html(msg);
        $(`#${el}Error`).removeClass('hidden');
    }

}
$('#username').on('input',(e)=>{validate('username','admin')});
$('#password').on('input',(e)=>{validate('password','12345')});

const redirectAndAuthenticate=()=>{
    window.localStorage.setItem('user',JSON.stringify({username:'admin'}));
    window.location='todo.html';
}
const loginAction=(e,callback)=>{
    if(!errorFlags['usernameErrFlag'] && !errorFlags['passwordErrFlag']){
        e.preventDefault();
        callback();
    }
    else{
        alert("login unsuccessful");
    }
}
$('#loginBtn').on('click',(e)=>{
    loginAction(e,redirectAndAuthenticate);
}
)
