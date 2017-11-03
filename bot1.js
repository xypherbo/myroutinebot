var assert = require('assert');
var monkey = require('adbkit-monkey');
var adb = require('adbkit')
var client = adb.createClient()
client.openMonkey('CB5A2A8518', 1081, function (err, monclient) {
  /* var monclient = monkey.connect({
    port: 1081
  }); */
  if (err) {
    console.log(err);

  } else {
    monclient.multi()
      .touchDown(685, 1300)
      .sleep(100)
      .touchUp(685, 1300)
      .sleep(1000)
      .tap(401, 736)//open app
      .sleep(6000)
      .touchDown(575, 1804)//start
      .sleep(100)
      .touchUp(575, 1804)
      .sleep(4000)

      .tap(816,1533)
      .sleep(1000)
      .touchDown(575, 1724)//select 1 char
      .sleep(100)
      .touchUp(575, 1724)
      .sleep(20000)
      .touchDown(1013, 1800)//tap remove noti
      .sleep(100)
      .touchUp(1013, 1800)
      .sleep(1000)
      .touchDown(1013, 1800)//tap remove show item
      .sleep(100)
      .touchUp(1013, 1800)
      .sleep(1000)

      
      .touchDown(1013, 1800)//tap pet
      .sleep(100)
      .touchUp(1013, 1800)
      .sleep(2000)
      .touchDown(734, 1700)//tap explore
      .sleep(100)
      .touchUp(734, 1700)
      .sleep(4000)
      .touchDown(442, 344)//tap explored tap
      .sleep(100)
      .touchUp(442, 344)
      .sleep(2000)
      .touchDown(610, 1672)//claim all
      .sleep(100)
      .touchUp(610, 1672)
      .sleep(1000)
      .touchDown(442, 1422)//comfirm
      .sleep(100)
      .touchUp(442, 1422)
      .sleep(1000)

      .touchDown(1013, 1800)//tap pet
      .sleep(100)
      .touchUp(1013, 1800)
      .sleep(2000)
      .touchDown(734, 1700)//tap explore
      .sleep(100)
      .touchUp(734, 1700)
      .sleep(4000)

      .touchDown(503, 790)//select exp
      .sleep(100)
      .touchUp(503, 790)
      .sleep(1000)
      .touchDown(937, 1652)//auto
      .sleep(100)
      .touchUp(937, 1652)
      .sleep(1000)
      .touchDown(536, 1652)//go
      .sleep(100)
      .touchUp(536, 1652)
      .sleep(3000)

      .touchDown(503, 790)//select exp
      .sleep(100)
      .touchUp(503, 790)
      .sleep(1000)
      .touchDown(937, 1652)//auto
      .sleep(100)
      .touchUp(937, 1652)
      .sleep(1000)
      .touchDown(536, 1652)//go
      .sleep(100)
      .touchUp(536, 1652)
      .sleep(3000)

      .touchDown(503, 790)//select exp
      .sleep(100)
      .touchUp(503, 790)
      .sleep(1000)
      .touchDown(937, 1652)//auto
      .sleep(100)
      .touchUp(937, 1652)
      .sleep(1000)
      .touchDown(536, 1652)//go
      .sleep(100)
      .touchUp(536, 1652)
      .sleep(3000)

      .touchDown(503, 790)//select exp
      .sleep(100)
      .touchUp(503, 790)
      .sleep(1000)
      .touchDown(937, 1652)//auto
      .sleep(100)
      .touchUp(937, 1652)
      .sleep(1000)
      .touchDown(536, 1652)//go
      .sleep(100)
      .touchUp(536, 1652)
      .sleep(3000)

      .tap(243, 1800)//tap bag
      .sleep(2000)
      .tap(610, 1672)//smelt
      .sleep(1000)
      .tap(610, 1672)//smelt
      .sleep(1000)
      .tap(610, 1672)//smelt
      .sleep(1000)
      .tap(610, 1672)//smelt
      .sleep(1000)
      .tap(610, 1672)//smelt
      .sleep(1000)
      .tap(610, 1672)//smelt
      .sleep(1000)
      .tap(610, 1672)//smelt
      .sleep(1000)
      .tap(610, 1672)//smelt
      .sleep(1000)
      .tap(610, 1672)//smelt
      .sleep(1000)
      .tap(610, 1672)//smelt
      .sleep(1000)
      .tap(610, 1672)//smelt
      .sleep(1000)
      .tap(610, 1672)//smelt
      .sleep(1000)

      .tap(61, 1800)//tap home
      .sleep(2000)
      .tap(1000,400)//tap daily
      .sleep(1500)
      .tap(737, 1536)//signin
      .sleep(1500)

      .tap(61, 1800)//tap home
      .sleep(2000)
      .tap(61, 1800)//tap home
      .sleep(2000) 

      .tap(444,885)//tap home
      .sleep(2000)

      .tap(436,357)//tap pet tab
      .sleep(2000)

      .tap(916,756)//tap free pet1
      .sleep(2000)
      .tap(916,756)//tap free pet1
      .sleep(2000)
      .tap(916,756)//tap free pet1
      .sleep(2000)

      .tap(916,756)//tap free pet1
      .sleep(2000)
      .tap(916,756)//tap free pet1
      .sleep(2000)
      .tap(916,756)//tap free pet1
      .sleep(2000)

      .tap(916,756)//tap free pet1
      .sleep(2000)
      .tap(916,756)//tap free pet1
      .sleep(2000)
      .tap(916,756)//tap free pet1
      .sleep(2000)

      .tap(910,1000)//tap diamond free pet1
      .sleep(1000)
      .tap(910,1000)//tap diamond free pet1
      .sleep(2000)
      .tap(910,1000)//tap diamond free pet1
      .sleep(2000)

      .tap(1000,244)//tap daily
      .sleep(2000)

      .tap(875,663)//tap 1
      .sleep(2000)
      .tap(875,663)//tap 1
      .sleep(2000)

      .tap(875,663)//tap 1
      .sleep(2000)
      .tap(875,663)//tap 1
      .sleep(2000)

      .tap(875,663)//tap 1
      .sleep(2000)
      .tap(875,663)//tap 1
      .sleep(2000)

      .tap(875,663)//tap 1
      .sleep(2000)
      .tap(875,663)//tap 1
      .sleep(2000)

      .tap(875,663)//tap 1
      .sleep(2000)
      .tap(875,663)//tap 1
      .sleep(2000)

      .tap(875,663)//tap 1
      .sleep(2000)
      .tap(875,663)//tap 1
      .sleep(2000)

      .tap(875,663)//tap 1
      .sleep(2000)
      .tap(875,663)//tap 1
      .sleep(2000)

      .tap(875,485)//tap top
      .sleep(2000)
      .tap(875,485)//tap top
      .sleep(2000)

      .tap(875,485)//tap top
      .sleep(2000)
      .tap(875,485)//tap top
      .sleep(2000)

      .tap(875,485)//tap top
      .sleep(2000)
      .tap(875,485)//tap top
      .sleep(2000)

      .tap(875,485)//tap top
      .sleep(2000)
      .tap(875,485)//tap top
      .sleep(2000)

      .tap(875,485)//tap top
      .sleep(2000)
      .tap(875,485)//tap top
      .sleep(2000)


      .execute(function (err) {
        assert.ifError(err);
        console.log('Dragged out the notification bar');
        monclient.end();
      });
  }

})
