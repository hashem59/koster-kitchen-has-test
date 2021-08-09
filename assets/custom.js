/**
 * Include your custom JavaScript here.
 *
 * We also offer some hooks so you can plug your own logic. For instance, if you want to be notified when the variant
 * changes on product page, you can attach a listener to the document:
 *
 * document.addEventListener('variant:changed', function(event) {
 *   var variant = event.detail.variant; // Gives you access to the whole variant details
 * });
 *
 * You can also add a listener whenever a product is added to the cart:
 *
 * document.addEventListener('product:added', function(event) {
 *   var variant = event.detail.variant; // Get the variant that was added
 *   var quantity = event.detail.quantity; // Get the quantity that was added
 * });
 *
 * If you just want to force refresh the mini-cart without adding a specific product, you can trigger the event
 * "cart:refresh" in a similar way (in that case, passing the quantity is not necessary):
 *
 * document.documentElement.dispatchEvent(new CustomEvent('cart:refresh', {
 *   bubbles: true
 * }));
 */

 var fakeVariants = document.querySelectorAll('.FakeSwatchList li[data-href]');
 for (var i = 0; i < fakeVariants.length; i++) {
   fakeVariants[i].addEventListener('click', function(){
     if (this.getAttribute('data-href') !== '') {
       document.dispatchEvent(new CustomEvent('theme:loading:start'));
       var newLoc = this.getAttribute('data-href')
       newLoc = newLoc[0] === '/' ? newLoc : '/'+newLoc;
       window.location = newLoc;
     }
   });
 }

 // close second product description tab on mobile
 var secProductTab = document.querySelector('.Product__Description_2 .u-h6');
 var secProductTabContent = document.querySelector('.Product__Description_2 .Collapsible__Inner');
 if (window.innerWidth < 1008 && secProductTab) {
  secProductTab.click();
  secProductTabContent.classList.remove('hidden-pocket');
 }


 var productReviewStars = document.getElementById('ts_product_widget_position');
 if (productReviewStars) {
   productReviewStars.addEventListener('click', function(){
     var prodReviews = document.querySelector(".product-reviews-section");
     var elementOffset =  prodReviews.getBoundingClientRect().top - parseInt(document.documentElement.style.getPropertyValue('--header-height'))
     window.scrollBy({ top: elementOffset, behavior: 'smooth' });

   })
 }

 (function(){
   var homeHistoryTitle = document.querySelector('.rct_home__section--previous-order > h3');
   var PricesMsg = window.languages.rechargePricesMsg;
   if (homeHistoryTitle) {
     var $msg = document.createElement("p");
     $msg.innerHTML= PricesMsg
     homeHistoryTitle.after($msg);
   } else if (window.location.pathname.indexOf('/orders') > 0) {
     var pageTitle = document.querySelector('.rct_content > h3');
     var $msg = document.createElement("p");
     $msg.innerHTML= PricesMsg
     pageTitle.after($msg);
   }
 })()


 // // Select the node that will be observed for mutations
 // var targetNode = document.querySelector('head');
 //
 // // Options for the observer (which mutations to observe)
 // var config = { attributes: true, childList: true, subtree: true };
 // // Callback function to execute when mutations are observed
 // var callback = function(mutationsList, observer) {
 //     // Use traditional 'for loops' for IE 11
 //     for(var mutation of mutationsList) {
 //         if (mutation.type === 'childList' && mutation.addedNodes[0] ) {
 //           if (mutation.addedNodes[0].tagName === 'SCRIPT') {
 //             if (mutation.addedNodes[0].src.indexOf('pay.google.com/gp/p/js/pay.js') > 0) {
 //               var googlePayScript = mutation.addedNodes[0];
 //               console.log(googlePayScript);
 //               googlePayScript.parentNode.removeChild(googlePayScript);
 //               console.log(mutation.addedNodes[0].src);
 //               observer.disconnect();
 //             }
 //           }
 //         }
 //     }
 // };
 // // Create an observer instance linked to the callback function
 // // var MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
 // var observer = new MutationObserver(callback);
 //
 // // Start observing the target node for configured mutations
 // observer.observe(targetNode, config);
