const express =  require('express');

const app = express();
const path =('path');

const router = express.Router();



router.get('/',function (request,response)
{
  response.sendFile(path.join(__templated-projection + './index.html'))
});



router.get('/generic',function (request,response)
{
  response.sendFile(path.join(__templated-projection + './generic.html'))
});


router.get('/Elements',function (request,response)
{
  response.sendFile(path.join(__templated-projection + './elements.html'))
});

app.use('/', router);

app.listen(process.env.port || 3000);

console.log('Running at Port 3000');