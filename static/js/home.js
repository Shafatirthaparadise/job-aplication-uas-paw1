function validateSearch() {
  const companyInput = document.getElementById('companyInput').value.trim();
  const locationInput = document.getElementById('locationInput').value.trim();
  const errorMessage = document.getElementById('error-message');

  if (!companyInput || !locationInput) {
    errorMessage.style.display = 'block';
  } else {
    errorMessage.style.display = 'none';
    // Lanjutkan ke halaman pencarian
    window.location.href = 'Cari';
  }
}