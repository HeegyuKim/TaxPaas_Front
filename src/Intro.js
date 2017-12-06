import React from 'react'
import $ from 'jquery'

import './stylesheets/intro.css'


export default class Intro extends React.Component {
  render() {
    return (
      <div className="Intro">

        <div className="TitleOuter First">
          <div className="Title">taxpaas<span className="Pro"></span></div>
          <div className="Slogan">Connect Tax Practice</div>
        </div>

        <div className="LoginOuter">
          <div className="ForPractitioner">
            <div className="LoginTypeSelect">
              <div>I am</div>
              <div><span>a</span> Tax Practitioner
                <div id="practitioner_login_form" className="Click">Welcome Tax Expert! <br/>Please Click here</div>
              </div>
              <div className="LoginForm">
                <form>
                  <input placeholder="ID" />
                  <input placeholder="Password" />
                  <div className="LoginBtn">
                    <a href="/cpa">Login</a>
                  </div>
                  <div className="Back" onClick={reset}>Login by TaxPayer</div>
                </form>
              </div>
            </div>
            <div className="PromotionText">
              Experts Care<br/>Save your Return!
            </div>
          </div>

          <div className="ForTaxPayer">
            <div className="LoginTypeSelect">
              <div>I am</div>
              <div><span>a</span> Tax Payer
                <div id="taxpayer_login_form" className="Click">Welcome Tax Payer!<br/>Please Click here</div>
              </div>
              <div className="LoginForm">
                <form>
                  <input placeholder="ID" />
                  <input placeholder="Password" />
                  <div className="LoginBtn">
                    <a href="/client">Login</a>
                  </div>
                  <div className="Back" onClick={reset}>Login by Practitioner</div>
                </form>
              </div>
            </div>
            <div className="PromotionText">
              <div className="Big">
                The Simplest Way to Automate<br/>Your Accounting Practice
              </div>
              <div className="Small">
                <div className="Line"><div>- </div> Client Management</div>
                <div className="Line"><div>- </div> Cloud Document Management</div>
                <div className="Line"><div>- </div> Auto Data Input</div>
                <div className="Line"><div>- </div> Easy Export of Tax Data to Tax SWs</div>
                <div className="Line"><div>- </div> Efficient Communication on Tax Returns with your Customers</div>
                <div className="Line"><div>- </div> One-stop Payment Processing</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

var sloganAnimation = function(){
  //이렇게 말고 더 깔끔하게 할 수 있을 것 같은데 일단 이렇게 작성함 ㅜㅜ 시간이 없어서..
  $('.Title').css('opacity','1');
  setTimeout(function(){
    $('.Slogan').css('opacity','1');
  }, 500);
  setTimeout(function(){
    $('.Slogan').css('opacity','0');
  }, 1800);
  setTimeout(function(){
    $('.Slogan').html('Connect Expert and Customer');
    $('.Slogan').css('opacity','1');
  }, 2300);
  setTimeout(function(){
    $('.Slogan').css('opacity','0');
  }, 3900);
  setTimeout(function(){
    $('.Slogan').html('<span>T</span>ax <span>P</span>latform <span>a</span>s <span>a</span> <span>S</span>ervice');
    $('.Slogan').css('opacity','1');
  }, 4500);
  setTimeout(function(){
    $('.Slogan').css('color', 'var(--base2)');
    $('.Slogan span').css('color', 'white');
  }, 5500);
  setTimeout(function(){
    $('.Slogan span').css('color', '');
  }, 7300);
  setTimeout(function(){
    $('.Slogan').css('opacity', '0');
  }, 7300);
  setTimeout(function(){
    $('.Title').css('margin-top', '2.4%');
  }, 7300);
}

var titleMoveToTop = function(){
  $('.TitleOuter.First').removeClass('First');
  $('.TitleOuter').addClass('Second');
  $('.LoginOuter.First').removeClass('First');
  $('.LoginOuter').addClass('Second');
};

window.onload = sloganAnimation;

$(function(){
    setTimeout(titleMoveToTop, 3900);
});

$(function(){
  $('#practitioner_login_form').click(function(){
    $('.ForTaxPayer .LoginTypeSelect').css('height', '0');
    $('.Title span.Pro').html('pro');
    $('.Click').css('height', '0');
    $('.LoginForm').css('height', '16rem');
  });
});

$(function(){
  $('#taxpayer_login_form').click(function(){
    $('.ForPractitioner .LoginTypeSelect').css('height', '0');
    $('.Click').css('height', '0');
    $('.LoginForm').css('height', '16rem');
  });
});

var reset = function(){
  $('.ForTaxPayer .LoginTypeSelect').css('height', '');
  $('.ForPractitioner .LoginTypeSelect').css('height', '');
  $('.Title span.Pro').html('');
  $('.Click').css('height', '');
  $('.LoginForm').css('height', '');
}
// var loginBtnOn = function(){
//   if($('.LoginForm input:eq(0)').val().length !== 0){
//     $('.LoginForm').css('height', '7rem');
//   }
// };
//
// $('.LoginForm').click(loginBtnOn);
