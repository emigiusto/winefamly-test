import React, { Component } from 'react';

import './App.css';
import $ from 'jquery'
import RatingForm from './components/ratingForm';

class App extends Component {

  //Show Form method
  showForm() {
      if ($('#wine-rating-form').attr('rated')==='no') {
          $('#wine-rating-form').removeClass('hideForm')
      } else {
          console.log("Already Rated!")
      }
  }

   //plus and minus one on cart
      minusOne(event) {  
          if ($(event.target).parent().siblings('input').val()>0) {
                  $(event.target).parent().siblings('input').val(parseInt($(event.target).parent().siblings('input').val()) - 1)
          }
      }
      plusOne(event) {  
          
          $(event.target).parent().siblings('input').val(parseInt($(event.target).parent().siblings('input').val()) + 1)
      }

  render() {
      return (
          <div>
              <header><img src="./img/menu.png" alt="Header Famly"/></header>

              <div className="container wine-wrapper">
              <div className="row">
                <div className="col-sm-5 col-md-3 wine-picture-col">
                  <RatingForm/>
                  <div className="favourite">
                  </div>
                  <li className="wine-flag mobile"><img src="./img/icons/fr.png" alt="Wine Flag"/></li>
                  <p className="wine-type mobile">ØKO</p>
                  <div id="wine-picture-target" className="wine-picture">
                      <img src="./img/wineExample.png" alt=""/>
                  </div>
                </div>
                <div className="col-sm-7 col-md-5 wine-descrip-col">
                    <p className="wine-type">ØKO</p>
                    <h1 className="wine-title">Pascal Prunier-Bonheur, Petit Bonheur Coteaux Bourguignons Chardonnay 2018</h1>
                    <ul className="wine-tags-container">
                        <li className="wine-flag"><img src="./img/icons/fr.png" alt="Wine Flag"/></li>
                        <li className="wine-tag">Redwine</li>
                        <li><i className="fa fa-circle" aria-hidden="true"></i></li>
                        <li className="wine-tag">Beaujolais</li>
                        <li><i className="fa fa-circle" aria-hidden="true"></i></li>
                        <li className="wine-tag">France</li>
                    </ul>
                    <div className="rating" onClick={this.showForm}>
                        <i className="fas fa-thumbs-up"></i>
                        <span>Endnu ingen bedømmelser</span> 
                    </div>
                    <div className="aromas-container">
                        <p>Vinens aromaer:</p>
                        <ul>
                            <li>
                                <img src="./img/groentsagsagtigt.png" alt="Wine Aroma"/>
                                <p className="aroma-subtitle">Grønsagsagtigt</p>
                            </li>
                            <li>
                                <img src="./img/soede_krydderier.png" alt="Wine Aroma"/>
                                <p className="aroma-subtitle">Tørret/kogt frugt</p>
                            </li>
                            <li>
                                <img src="./img/toerret-kogt_frugt.png" alt="Wine Aroma"/>
                                <p className="aroma-subtitle">Søde krydderier</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-sm-12 col-md-4 wine-shop-col">
                        <div className="discount-section">
                            <i className="discount-svg"></i>
                            <h3>Spar: 23,44 kr.</h3>
                        </div>
                        <div className="price-section">
                            <p className="price-descript">Pris per flaske</p>
                            <div className="price-total">
                                <h2 className="price-final">38,33 kr.</h2>
                                <p className="old-price">
                                    Normal price: 
                                    <span>88,98 kr</span>
                                </p>
                            </div>
                        </div>
                        <div className="shop-section">
                            <div className="amount-buy">
                                <div className="amount">
                                    <div className="input-group">
                                        <span className="input-group-btn">
                                        <button className="btn btn-white btn-minuse" type="button" onClick={this.minusOne}>-</button>
                                        </span>
                                        <input type="text" className="form-control amount-input" maxLength="3" value="0" onChange={()=>{}}/>
                                        <span className="input-group-btn">
                                        <button className="btn btn-red btn-pluss" type="button" onClick={this.plusOne}>+</button>
                                        </span>
                                    </div>
                                </div>
                                <div className="buy">
                                    <i className="cart-svg"></i>
                                </div>
                            </div>
                            <p className="stock"><span className="circle"></span>1123 stk. på lager</p>
                        </div>
                        <ul className="other-info">
                            <li className="free-delivery"> <img src="./img/icons/delivery.svg" alt=""></img>Free delivery</li>
                            <li className="price-guarantee"> <img src="./img/icons/noun-checkmark.svg" alt=""></img>Price guarantee</li>
                            <li className="no-min-orders"> <img src="./img/icons/order-amount.svg" alt=""></img>No min. orders</li>
                        </ul>
                </div>
              </div>
            </div>
          </div>
      );
  }
}

export default App;