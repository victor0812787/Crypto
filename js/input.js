let dataBase = []

function checkUsers() {
    let userFirstname = localStorage.getItem("users");
    if (userFirstname == null){
        return(dataBase)
    }else{
        return(dataBase = JSON.parse(userFirstname))
    }
}
let get = function(){
    let firstname = document.getElementById('text').value;
    let secondname = document.getElementById('Last-Name').value;
    let mail = document.getElementById('Email').value;
    let num = document.getElementById('number').value;
    let firstpass = document.getElementById('password').value;
    let secondpass = document.getElementById('comfirm-password').value;
    let code = document.getElementById('Referral-Code').value;

    if (firstname == '') {
      return alert('Please Enter Your First Name')
    }
    if (secondname == '') {
      return alert('Please Enter Your Second Name')
    }
    if (mail == '') {
        return alert('Please Enter Your Mail')
    }
    if (num == '') {
        return alert('Please Enter Your Number')
    }
    if (firstpass == '') {
        return alert('Please Enter Your Password')
    }
    if (secondpass == '') {
        return alert('Please Comfirm Your Password')
    }
    if (code == '') {
        alert('Please Enter Your Referral Code')
    }else {
        let user = checkUser()
        if (user.length == 0){
           user = {
            first: firstname,
            second: secondname,
            gmail: mail,
            numb: num,
            password: firstpass,
            pass: secondpass,
            referralcode: code
           }
           dataBase.push(user)

           console.log(dataBase);
           localStorage.setItem('User', JSON.stringify(dataBase))
           // window.location.href = ''
        } else {
            let User = {
                first: firstname,
                second: secondname,
                gmail: mail,
                numb: num,
                password: firstpass,
                pass: secondpass,
                referralcode: code
            }
            user.push(User);
            localStorage.setItem('User', JSON.stringify(user))
            // window.location.href = ''
        }

    }
}
let user = function() {
    let firstname = document.getElementById('text').value;
    let secondname = document.getElementById('Last-Name').value;
    let mail = document.getElementById('Email').value;
    let num = document.getElementById('number').value;
    let firstpass = document.getElementById('password').value;
    let secondpass = document.getElementById('comfirm-password').value;
    let code = document.getElementById('Referral-Code').value;

    let savedDataBaseJson = localStorage.getItem('users');
    dataBase = JSON.parse('savedDataBaseJson')

    if (firstname == '') {
        return alert('Please Enter Your First Name')
      }
      if (secondname == '') {
        return alert('Please Enter Your Second Name')
      }
      if (mail == '') {
          return alert('Please Enter Your Mail')
      }
      if (num == '') {
        return alert('Please Enter Your Number')
      }
      if (firstpass == '') {
          return alert('Please Enter Your Password')
      }
      if (secondpass == '') {
          return alert('Please Comfirm Your Password')
      }
      if (code == '') {
          alert('Please Enter Your Referral Code')
      }else {
        // window.location.href = ''
        let dataBase = checkUsers()
        index = dataBase.find (element == element.first == firstname && element.second == secondname && element.gmail == mail && element.numb == num && element.password == firstpass && element.pass == secondpass && element.referralcode == code)

        if (index == undefined){
            sinleUser = index.firstname
            localStorage.setItem('singleUser', sinleUser)
        }else{
            console.log ('firstname or secondname or mail or num or firstpass or secondpass or code incorrect')
        }
    }
}

let showuser = function(){
    sinleUser = localStorage.getItem('singleUser')
    document.getElementById('firstname').innerHTML = sinleUser
}