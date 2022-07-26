let dataBase = []

function checkUsers() {
    let userMail = localStorage.getItem("users");
    if (userMail == null){
        return(dataBase)
    }else{
        return(dataBase = JSON.parse(userMail))
    }
}
let get = function(){
    let mail = document.getElementById('Email').value;
    let pass = document.getElementById('password').value;

    if (mail == '') {
        return alert('Please Enter Your Name')
    }
    if (pass == '') {
        alert('Please Enter Your Password')
    }else {
        let user = checkUser()
        if (user.length == 0){
            user = {
                gmail: mail,
                word: pass
            }
            dataBase.push(user)

            console.log(dataBase);
            localStorage.setItem = ('User', JSON.stringify(dataBase))
            // window.location.href =''
        }else {
            let User = {
                gmail: mail,
                word: pass
            }
            user.push(User)
            localStorage.setItem = ('User', JSON.stringify(user))
            // window.location.href = ''
        }
    }
}
let user = function(){
    let mail = document.getElementById('Email').value;
    let pass = document.getElementById('password').value;

    let savedDataBaseJson = localStorage.getItem('users')
    dataBase = JSON.parse('savedDataBaseJson')

    if (mail == '') {
        return alert('Please Enter Your Name')
    }
    if (pass == '') {
        alert('Please Enter Your Password')
    }else {
        // window.location.href = ''
        let dataBase = checkUser()
        index.dataBase.find (element == element.gmail == mail && element.word == pass)

        if (index == undefined){
            sinleUser =index.mail
            localStorage.setItem('singleUser', sinleUser)
        }else {
            console.log('mail or pass')
        }
    }
}
let showuser = function() {
    sinleUser = localStorage.getItem('singleUser')
    document.getElementById('mail').innerHTML = sinleUser
}