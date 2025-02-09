function generatePDF() {
  setTimeout(() => {
    const element = document.getElementById('myForm');
    html2pdf()
      .set({
        margin: 1,
        filename: 'form.pdf',
        image: { type: 'jpeg', quality: 1 },
        html2canvas: { scale: 3, logging: true, dpi: 192 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
      })
      .from(element)
      .save();


  }, 100);


}

const d = document.getElementById('name')
const tgl = document.getElementById('tanggal')

function cek() {
  const c = d.textContent.trim()
  if (c.length > 40) {
    //alert('Oops kepanjangan')
    d.innerText = d.innerText.substring(0, 3);
    d.innerText = "Nama Peserta"
  }
  if (d.offsetHeight > 59){
    //alert('oops ketinggian')
    d.innerText = d.innerText.substring(0, 1);
    d.innerText = "Nama Peserta"
  }
  
}
function cektgl(){
  const t = tgl.textContent.trim()
  if (t.length > 20) {
    tgl.innerText = tgl.innerText.substring(0, 10);
    tgl.innerText = "dd/mm/yy"
  }
  if (tgl.offsetHeight > 30) {
    tgl.innerText = tgl.innerText.substring(0, 10);
    tgl.innerText = "dd/mm/yy"
  }
}
