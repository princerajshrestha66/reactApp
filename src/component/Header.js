import React, { Component } from 'react'

class Header extends Component {
    constructor() {
        super() 
        this.state = {
            user:{},
            isLoading:false,
            isModal:false,
            isSignInForm:true,
            isSignUpForm:false
        }
    }
    
    render() {
        return (
            <div>
            <header className="container-fluid">
                <div className="row top-header">
                    <div className="container">
                        <div className="text-right">
                        <span className="hotline">Hotline: +977 9841484556</span>
                        <span className="social">
                            <span className="fbk">
                            <a href="#" target="_blank">
                                <i className="fa fa-facebook" />
                            </a>
                            </span>
                            <span className="g-plus">
                            <a href="#" target="_blank">
                                <i className="fa fa-google-plus" />
                            </a>
                            </span>
                            <span className="pin">
                            <a href="#" target="_blank">
                                <i className="fa fa-pinterest" />
                            </a>
                            </span>
                            <span className="twt">
                            <a href="#" target="_blank">
                                <i className="fa fa-twitter" />
                            </a>
                            </span>
                            <span className="linked">
                            <a href="#" target="_blank">
                                <i className="fa fa-linkedin" />
                            </a>
                            </span>
                            <span className="ytb">
                            <a href="#" target="_blank">
                                <i className="fa fa-youtube" />
                            </a>
                            </span>
                        </span>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <nav className="navbar navbar-default" role="banner" id="top-nav">
                        <div className="container">
                        <a className="logo" href="index.php">
                            <img src="images/logo.png" className="img-responsive" />
                        </a>
                        <a href="index.php" className="logo new">
                            <img src="images/new-logo.png" className="img-responsive" />
                        </a>
                        </div>
                        <div className="container" id="cssmenu">
                        {/* <ul class="menu-right" id="search-menu">
                                    
                                </ul> */}
                        <ul className="menu-right">
                            <li className><a href="#">Home</a></li>
                            <li className="has-sub"><a href="#">destinations</a>
                            <ul>
                                <li><a href="#">nepal</a></li>
                                <li><a href="#">tibet</a></li>
                                <li><a href="#">bhutan</a></li>
                                <li><a href="#">india</a></li>
                                <li><a href="#">china</a></li>
                            </ul>
                            </li>
                            <li className="has-sub"><a href="#">vacations</a>
                            <ul>
                                <li><a href="#">vacations number one long text</a></li>
                                <li><a href="#">vacations 2</a></li>
                                <li><a href="#">vacations 3</a></li>
                                <li><a href="#">vacations 4</a></li>
                                <li><a href="#">vacations 5</a></li>
                            </ul>
                            </li>
                            <li className><a href="#">reviews</a></li>
                            <li className><a href="#">blog</a></li>
                            <li className><a href="#">about us</a>
                            <ul>
                                <li><a href="#">faq's</a></li>
                                <li><a href="#">our team</a></li>
                                <li><a href="#">Legal documents</a></li>
                            </ul>
                            </li>
                            <li className><a href="#">contact</a></li>
                            <li>
                            <div className="search">
                                <input className="search_box" type="checkbox" id="search-box" />
                                <label className="icon-search" htmlFor="search-box">
                                <i className="fa fa-search" />
                                </label>
                                <div className="search_form">
                                <form action="post">
                                    <input type="text" />
                                    <button type="submit" className="btn yellow">Search</button>
                                </form>
                                </div>
                            </div></li>
                        </ul>
                        </div>
                    </nav>
                </div>
                <a href="#" className="scrollToTop">
                    <i className="fa fa-arrow-up fa-lg" />
                </a>
            </header>

              <button onClick={() => this._loadData()}>
                  Click
              </button>  
              <button onClick={() => this.showModal()}>
                    Show Modal
              </button>   
            <p>
                {
                    this.state.isLoading && ' Loading...'
                }
            </p>
             <p>
                 Title: {this.state.user.title}
             </p>

             {
                 this.state.isModal && 
                 <div style={{backgroundColor:'#090', height:'200px', width:'200px;'}}>
                     <button onClick={() => this.setState({isModal:false})}>
                         Hide Box
                     </button>
                 </div>
             }



            
                
                { this.state.isSignInForm &&
                <div>
                    <form>
                        <legend>User Login</legend>
                            <input placeholder="UserName" type="text"/>
                            <input placeholder="Password" type="text"/>
                            <button>Sign In</button>
                            <button onClick={() => this.forgetPassword()}>Forget Password</button>
                    </form>
                </div>
            }

            { this.state.forgetPassword &&  
                            <div>
                                <form>
                                    <legend>User Registration</legend>
                                        <input placeholder="retype Your Password" type="text"/>
                                        <button>Sign In</button>
                                        <button onClick={() => this.isSignIn()}>Sign In</button>
                                </form>
                            </div>
                        }
          </div>
        )
    }


    


    forgetPassword = (event) => {
        event.preventDefault();
    this.setState({
        isSignUpForm:true,
        isSignInForm:false
    })


    
}


isSignIn = (event) => {
    event.preventDefault();
    this.setState({
        isSignUpForm:false,
        isSignInForm:true
    })
}


showModal = ()=> {
    this.setState({
        isModal:true
    })
}
    _loadData = (json) => {
        this.setState({isLoading: true})
        fetch('https://jsonplaceholder.typicode.com/todos/2')
        .then(response => response.json())
        
        .then(json => console.log(json))

      }


}

export default Header;