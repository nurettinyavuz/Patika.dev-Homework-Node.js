/*
---------TASK-----------
koa paketini indirelim.
index, hakkimda ve iletisim sayfaları oluşturalım.
Sayfalara içerik olarak xxx sayfasına hoşgeldiniz şeklinde h1 başlıkları yazdıralım.
port numarası olarak 3000'i kullanalım.
*/

const Koa = require('koa');
const app = new Koa();
//Router kullandığımız için 404 sayfası oluşturmadım çünkü
//Router'da otomatik başka sayfa açmayı deneyince 404 Not Found gönderiyor 
const Router = require('koa-router');
const router = new Router();
//npm install koa-router


router.get('/', (ctx) => {
  ctx.status = 200;
  ctx.type='text/html';
  ctx.body = '<h1>Index Page</h1>';
});

router.get('/about', (ctx)=> {
  ctx.status = 200;
  ctx.type='text/html';
  ctx.body = '<h1>About Page</h1>';
});

router.get('/contact', (ctx) => {
  ctx.status = 200;
  ctx.type='text/html';
  ctx.body = '<h1>Contact Page</h1>';
});

/*
'app.use(router.routes())' kodu, oluşturduğunuz koa-router nesnesi router'ın yönlendirdiği istekleri Koa uygulamanıza bağlar. 
router.routes() metodu, Router tarafından işlenen isteklerin Koa uygulamanızda kullanılabilecek bir middleware fonksiyonu olarak geri döndürülür.
 Bu middleware fonksiyonu, app.use() metoduyla Koa uygulamanıza eklenir ve 
Router tarafından işlenen isteklere yanıt vermek için kullanılır.
*/
app.use(router.routes());

const port = 3000;
app.listen(port, () => {
  console.log(`The server is connecting to ${port}...`);
});

