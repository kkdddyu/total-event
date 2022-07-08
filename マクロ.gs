function myFunction() {
    //1. 現在のスプレッドシートを取得
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    //2. 現在のシートを取得
  var sheet = spreadsheet.getSheetByName("全記事SQLで引っ張った記事とセッションを紐付ける")
  const lastRow = sheet.getLastRow();
    // E2:E のセル範囲を取得
  var range = sheet.getRange("E2:E");
    // そのセル範囲にある値のみクリア
  range.clearContent();
    for(let i = 2; i <= lastRow; i++) {
        //D列を取得
        var range = sheet.getRange(i,4);
        var url = range.getValue();
        //F列を取得
        var range_F = sheet.getRange(i,6);
        var range_F = range_F.getValue();
        if( range_F == 0 ){
            break;
      } 
      search_url = ''
        // mypage/bulk.php?が含まれてるかどうか
        if (url.indexOf("/mypage/bulk.php?") != -1 ) {
            if (url.indexOf("service") != -1 ) {
                var index = url.indexOf("service"); //&の前まで抽出
                var search_url = url.substring(index, index + 16 )
                var search_url = search_url.slice(0,search_url.indexOf("&"))
                var search_url = "/" + search_url.replace("_id=", ".php?id=");
            } else {
                var index = url.indexOf("tool");
                var search_url = url.substring(index, index + 16 )
                var search_url = search_url.slice(0,search_url.indexOf("&"))
                var search_url = "/" + search_url.replace("_ids[]", ".php?id");
            }
        // mypage/bulk_whitepaper.php?が含まれてるかどうか
        } else if (url.indexOf("/mypage/bulk_whitepaper.php?") != -1 ) {
            if (url.indexOf("service") != -1 ) {
                var index = url.indexOf("service"); //&の前まで抽出
                var search_url = url.substring(index, index + 16 )
                var search_url = search_url.slice(0,search_url.indexOf("&"))
                var search_url = "/" + search_url.replace("_id=", ".php?id=");
            } else {
                var index = url.indexOf("tool");
                var search_url = url.substring(index, index + 16 )
                var search_url = search_url.slice(0,search_url.indexOf("&"))
                var search_url = "/" + search_url.replace("_ids[]", ".php?id");
              }
                      
        } else if (url.indexOf("/tool.php?id=") != -1 ) {
            var search_url = url;
        } else if (url.indexOf("/index.php") != -1 ) {
            var search_url = url;
        } else if (url.indexOf("/article.php?id=") != -1 ) {
            var search_url = url;
        } else if (url.indexOf("/service.php?id=") != -1 ) {
            var search_url = url;
        } else if (url.indexOf("(not set)") != -1 ) {
            var search_url = url;
        } else if (url.indexOf("/list-service.php") != -1 ) {
            var search_url = url;
        } else if (url.indexOf("/ranking-sns.php") != -1 ) {
            var search_url = url;
        } else if (url.indexOf("/saas.php") != -1 ) {
            var search_url = url;
        } else if (url.indexOf("/ranking.php?id=") != -1 ) {
            var search_url = url;
        } else if (url.indexOf("/interview.php?id=") != -1 ) {
            var search_url = url;
        } 
      Logger.log(search_url);
      //値をセルに入力する
  sheet.getRange(i, 5).setValue(search_url);
    }
}