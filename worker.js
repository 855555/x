const telegram = 'https://t.me/IQAAA';
const 数据库 = [
  {
    '域名': 'hog.cc',
    '简介': '猪八戒',
    '注册商': '华为云',
    '到期时间': '2030/1/1',
    '价格': 1200
  },
  {
    '域名': 'mailbox.cc',
    '简介': '邮箱',
    '注册商': '华为云',
    '到期时间': '2030/1/1',
    '价格': 8000
  },
  {
    '域名': 'nbv.org',
    '简介': 'nb',
    '注册商': 'Spaceship',
    '到期时间': '2030/1/1',
    '价格': 3500
  }
];

const html = `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>玩米</title>
<style>
body {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    background: linear-gradient(to right, #c6ffdd, #fbd786, #f7797d);
    color: #333;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    overflow-x: hidden;
  }

  .container {
    max-width: 90vw;
    margin: auto;
    padding: 40px;
    background-color: #fff;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.1), 0 10px 10px rgba(0, 0, 0, 0.08);
    border-radius: 20px;
    text-align: center;
  }

  .header {
    margin-bottom: 40px;
    position: relative;
  }

  .header img {
    max-width: 150px;
    width: 100%;
    height: auto;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 10px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
    transition: all 0.3s ease;
    animation: rotate 10s linear infinite;
    position: relative;
  }

  .header img:hover {
    transform: scale(1.05);
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
  }

  .header img::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 160px;
    height: 160px;
    border-radius: 50%;
    border: 3px solid #6a82fb;
    box-sizing: border-box;
    z-index: -1;
    animation: pulse 2s infinite ease-in-out;
  }

  @keyframes pulse {
    0% {
      transform: translate(-50%, -50%) scale(0.9);
      opacity: 1;
    }
    100% {
      transform: translate(-50%, -50%) scale(1.5);
      opacity: 0;
    }
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  .header h1 {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 10px;
    background: linear-gradient(to right, #ffffff, #ffffff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: #0000ff;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    border-radius: 20px;
    overflow: hidden;
    margin-bottom: 15px;
  }

  th, td {
    padding: 15px;
    text-align: left;
    word-break: break-word;
    white-space: normal;
  }

  th {
    background-color: #f7f7f7;
    font-weight: 600;
    text-transform: uppercase;
    font-size: 1.1rem;
    max-width: 150px;
  }

  td {
    font-size: 1rem;
  }

  tr:nth-child(even) {
    background-color: #f9f9f9;
  }

  tr:hover {
    background-color: #e9e9e9;
    transform: scale(1.02);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
  }

  .btn {
    display: inline-block;
    color: #fff;
    text-decoration: none;
    padding: 12px 24px;
    border-radius: 30px;
    font-size: 1rem;
    background: linear-gradient(to right, #6a82fb, #fc587d); 
    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
}

.btn i {
    margin-right: 8px;
}

a {
    text-decoration: none;
    color: #6a82fb;
}

.btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08); 
}

@media (max-width: 768px) {
    .container {
        padding: 20px;
    }

    .header img {
        max-width: 80px;
    }

    .header h1 {
        font-size: 2rem;
    }

    th, td {
        padding: 10px;
        font-size: 0.9rem;
    }

    .btn {
        padding: 8px 16px;
        font-size: 0.9rem;
    }
}

@media (max-width: 480px) {
    .header h1 {
        font-size: 1.5rem;
    }

    th, td {
        padding: 8px;
        font-size: 0.7rem;
    }

    .btn {
        padding: 4px 8px;
        font-size: 0.7rem;
    }
}

</style>
  <link rel="icon" href="https://cdn.sa.net/2024/06/04/i1KZ2GISX8jEnPu.jpg" type="image/png">
</head>
<body>
  <div class="container">
    <div class="header" style="position: relative;">
      <img src="https://cdn.sa.net/2024/06/04/i1KZ2GISX8jEnPu.jpg" alt="image">
      <h1>玩米</h1>
    </div>
    <table>
      <thead>
        <tr>
          <th>域名</th>
          <th>简介</th>
          <th>注册商</th>
          <th>到期时间</th>
          <th>价格</th>
        </tr>
      </thead>
      <tbody>
        ${数据库.map((item) => `
          <tr>
            <td><b>${item.域名}</b></td>
            <td>${item.简介}</td>
            <td>${item.注册商}</td>
            <td>${item.到期时间}</td>
            <td>¥${item.价格}</td>
          </tr>
        `).join('')}
      </tbody>
    </table>
    <p>
      <a href="https://t.me/IQAAA" class="btn" target="_blank"><i class="fas fa-shopping-cart"></i> 购买</a>
    </p>
    <p>
      <a href="https://www.nodeseek.com/space/923#/general" target="_blank">Nodeseek</a> |
      <a href="https://DDE.NET" target="_blank">DDE</a> |
      <a href="https://t.me/IQAAA" target="_blank">✈️Bot</a>
    </p>
  </div>
  <script>
    addEventListener('fetch', event => {
      event.respondWith(handleRequest(event.request));
    });

    async function handleRequest(request) {
      return new Response(html, {
        headers: {
          'Content-Type': 'text/html;charset=UTF-8'
        }
      });
    }
  </script>
</body>
</html>


`;

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  return new Response(html, {
    headers: {
      'Content-Type': 'text/html;charset=UTF-8'
    }
  });
}
