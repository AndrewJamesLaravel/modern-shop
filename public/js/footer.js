const createFooter = () => {
  let footer = document.querySelector('footer');
  footer.innerHTML = `
    <div class="footer-content">
      <img src="./img/light-logo.png" class="logo" alt="">
      <div class="footer-ul-container">
        <ul class="category">
          <li class="category-title">men</li>
          <li><a href="#" class="footer-links">t-shirts</a></li>
          <li><a href="#" class="footer-links">sweatshirts</a></li>
          <li><a href="#" class="footer-links">shirts</a></li>
          <li><a href="#" class="footer-links">jeans</a></li>
          <li><a href="#" class="footer-links">trousers</a></li>
          <li><a href="#" class="footer-links">shoes</a></li>
          <li><a href="#" class="footer-links">casuals</a></li>
          <li><a href="#" class="footer-links">formals</a></li>
          <li><a href="#" class="footer-links">sports</a></li>
          <li><a href="#" class="footer-links">watch</a></li>
        </ul>
        <ul class="category">
          <li class="category-title">women</li>
          <li><a href="#" class="footer-links">t-shirts</a></li>
          <li><a href="#" class="footer-links">sweatshirts</a></li>
          <li><a href="#" class="footer-links">shirts</a></li>
          <li><a href="#" class="footer-links">jeans</a></li>
          <li><a href="#" class="footer-links">trousers</a></li>
          <li><a href="#" class="footer-links">shoes</a></li>
          <li><a href="#" class="footer-links">casuals</a></li>
          <li><a href="#" class="footer-links">formals</a></li>
          <li><a href="#" class="footer-links">sports</a></li>
          <li><a href="#" class="footer-links">watch</a></li>
        </ul>
      </div>
    </div>
    <p class="footer-title">about company</p>
    <p class="info">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A cupiditate esse fugit quia veritatis. Debitis fugiat iste nemo nesciunt, numquam saepe. Aperiam cumque esse ipsam labore nesciunt non, perferendis quas, quidem quis saepe sint tempore veritatis voluptatibus. Autem beatae, consequuntur, cupiditate dolorem ducimus in laudantium magni neque quas ut voluptas?</p>
    <p class="info">support emails - help@clothing.com, customersupport@clothing.com</p>
    <p class="info">telephone - 180 00 00 001, 180 00 00 002</p>
    <div class="footer-social-container">
      <div>
        <a href="#" class="social-link">terms & services</a>
        <a href="#" class="social-link">privacy page</a>
      </div>
      <div>
        <a href="#" class="social-link">instagram</a>
        <a href="#" class="social-link">facebook</a>
        <a href="#" class="social-link">twitter</a>
      </div>
    </div>
    <p class="footer-credit">Clothing, Best apparels online store</p>
  `;
}

createFooter();