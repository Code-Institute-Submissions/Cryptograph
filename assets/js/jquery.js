var intro = new Anno([{
    target  : '#data', 
    position: 'center',
    content : 'This gives you an overview of the price of BTC over time.<br><br>You can select a date range by clicking and dragging your mouse!'
  }, {
    target  : '.table',
    position: 'top',
    content : "The data table here shows you the previous 7 days quick stats. All values are shown in $ US dollars",
  },{
    target  : '#profitData',
    position: 'bottom',
    className: 'anno-width-200', // 150,175,200,250 (default 300)
    content : 'The most important Chart!<br><br>Your percentage profit levels over time!!'
  },{
    target  : '#tradeVolume',
    position: 'top',
    content : "This shows the volume of BTC coins traded over time.<br><br>Selecting a date range in the Price Overview graph translates directly to this chart too!"
  }, {
    target  : '#profit',
    position: 'bottom',
    className: 'anno-width-200', // 150,175,200,250 (default 300)
    content : 'These are your all-important stats that we use to monitor your crypto assets!'
  }, {
    target  : '#volHighScatter',
    position: 'bottom',
    arrowPosition: 'top',
    content : 'Finally, every month we publish interesting data on the coins you are interested in.<br><br>For November, we discuss and explore whether there is a correlation between BTC coin volume and the intraday price High'
  }]);


$(document).ready(function() {
  $('#tour').on('click', function(e){
    intro.show();
    });

    $(function () {
      $('[data-toggle="popover"]').popover()
    })

    
});