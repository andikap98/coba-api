// fetch('https://andikap98.github.io/api/data') // Menyesuaikan endpoint API jika diperlukan
fetch('https://coba-api-pink.vercel.app/api/data')
  .then(response => response.json())
  .then(data => {
    // Manipulasi dan tampilkan data di halaman GitHub Pages
    console.log(data);
    // Contoh: Menampilkan data di elemen dengan ID "data-container"
    const dataContainer = document.getElementById('data-container');

    dataContainer.innerHTML = `
    <p>Nama : ${data[0].name}</p>
    <p>Nama : ${data[0].age}</p>
    <p>Nama : ${data[0].timestamp}</p>
    `;
    dataContainer.innerText = JSON.stringify(data);
  })
  .catch(error => console.log(error));
