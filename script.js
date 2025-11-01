document.addEventListener("DOMContentLoaded", () => {
  // Form "gửi yêu cầu gọi lại" (nếu có)
  const form = document.getElementById("contactForm");
  const statusEl = document.getElementById("formStatus");
  if (form && statusEl) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const phone = form.querySelector('input[name="phone"]');
      if (!phone || !phone.value.trim()) {
        statusEl.style.color = "#d00";
        statusEl.textContent = "Vui lòng nhập số điện thoại.";
        return;
      }
      statusEl.style.color = "#007b46";
      statusEl.textContent = "✅ Đã nhận thông tin. Chúng tôi sẽ gọi lại sớm.";
      form.reset();
    });
  }

  // ---------- MENU MOBILE ----------
  const mobileToggleBtn = document.getElementById("mobileMenuToggle");
  const mainNav = document.getElementById("mainNav");

  if (mobileToggleBtn && mainNav) {
    mobileToggleBtn.addEventListener("click", () => {
      mainNav.classList.toggle("open");
    });
  }

  // ---------- DROPDOWN 'Khu vực phục vụ' TRÊN MOBILE ----------
  const areaBtn = document.getElementById("areaDropdownBtn");
  const areaContent = document.getElementById("areaDropdownContent");

  if (areaBtn && areaContent) {
    areaBtn.addEventListener("click", (e) => {
      // chặn click làm đóng menu main khi đang mở
      e.stopPropagation();
      areaContent.classList.toggle("show");
    });
  }
});