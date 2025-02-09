

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