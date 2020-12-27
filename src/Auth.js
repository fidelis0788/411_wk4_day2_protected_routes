
class Auth {
    constructor(){
        this.authenticated = false
    }
    login(){
        this.authenticated = true
        console.log('login() authenticated:' ,this.checkauth)

    }
    logout(){
        this.authenticated =false
        console.log('logout():authenticated',this.checkauth())
    }
 checkauth (){
     return this.authenticated
 }
getCookie(cname){
    let name = cname + " = ";
let decodedCookie = decodeURIComponent (document.cookie)
let ca = decodedCookie.split(';')
for(let i = 0;i< ca.length;i++){
    let c = ca[i]

    while(c.charAt(0) ==''){
  c = c.substring(1)
    }
  if(c.indexOf(name)==0){
      return c.substring(name.length,c.length )
  }
    }
    return ''
}
}

export default new Auth()