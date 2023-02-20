function getUrls(urls, callback) {
    const results = [];
    let count = 0;//İşlenen URL sayısını sayar
  
    urls.forEach((url, index) => {
      // Simüle edilmiş bir asenkron işlem: URL'yi çağırıp sonucu almak için 1 saniye bekleyin
      setTimeout(() => {
        const result = `Result ${index + 1} from ${url}`;
        results[index] = result;
        count++;
  
        if (count === urls.length) { //Tüm URL'leri kontrol ediyoruz işlenip işlenmediğine göre
          callback(results);
        }
      }, 1000);
    });
  }
  
  const urls = ['http://example.com', 'http://example.org', 'http://example.net'];
  getUrls(urls, (results) => {
    console.log('Sonuçlar:', results);
  });
